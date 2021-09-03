import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { check } from 'meteor/check';
import { Roles } from 'meteor/alanning:roles';
import BaseCollection from '../base/BaseCollection';

export const healthStatusPublications = {
  healthStatus: 'HealthStatus',
  healthStatusAdmin: 'HealthStatusAdmin',
};

class HealthStatusCollection extends BaseCollection {
  constructor() {
    super('HealthStatus', new SimpleSchema({
      date: Date,
      clear: Boolean,
      owner: String,
    }));
  }

  define({ date, clear, owner }) {
    const docID = this._collection.insert({
      date,
      clear,
      owner,
    });
    return docID;
  }

  update(docID, { date, clear }) {
    const updateData = {};
    if (date) {
      updateData.name = date;
    }
    if (clear !== undefined) {
      updateData.clear = clear;
    }
    this._collection.update(docID, { $set: updateData });
  }

  removeIt(id) {
    const doc = this.findDoc(id);
    check(doc, Object);
    this._collection.remove(doc._id);
    return true;
  }

  publish() {
    if (Meteor.isServer) {
      const instance = this;
      Meteor.publish(healthStatusPublications.healthStatus, function publish() {
        if (this.userId) {
          const username = Meteor.users.findOne(this.userId).username;
          return instance._collection.find({ owner: username });
        }
        return this.ready();
      });

      Meteor.publish(healthStatusPublications.healthStatusAdmin, function publish() {
        if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
          return instance._collection.find();
        }
        return this.ready();
      });
    }
  }

  subscribeHealthStatus() {
    if (Meteor.isClient) {
      return Meteor.subscribe(healthStatusPublications.healthStatus);
    }
    return null;
  }

  subscribeHealthStatusAdmin() {
    if (Meteor.isClient) {
      return Meteor.subscribe(healthStatusPublications.healthStatusAdmin);
    }
    return null;
  }

  getHealthStatuses(username) {
    return this._collection.find({ owner: username }).fetch();
  }

  getHealthStatusesSortedDate(username) {
    return this._collection.find({ owner: username }, { sort: { date: -1 } }).fetch();
  }

  getLatestHealthStatus(username) {
    return this.getHealthStatusesSortedDate(username)[0] || {};
  }

  getTodayHealthStatus(username) {
    return this.getHealthStatusesSortedDate(username)
        .find(({ date }) => date.toLocaleDateString() === (new Date()).toLocaleDateString());
  }
}

export const HealthStatuses = new HealthStatusCollection();
