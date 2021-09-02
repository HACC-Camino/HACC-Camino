import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Roles } from 'meteor/alanning:roles';
import BaseCollection from '../base/BaseCollection';

export const vaccineDataPublications = {
  vaccineData: 'vaccineData',
  vaccineDataAdmin: 'vaccineDataAdmin',
};

class VaccineDataCollection extends BaseCollection {
  constructor() {
    super('VaccineData', new SimpleSchema({
      owner: String,
      vaccineName: String,
      fDoseLotNum: String,
      fDoseDate: Date,
      fDoseSite: String,
      sDoseLotNum: String,
      sDoseDate: Date,
      sDoseSite: String,
    }));
  }

  define({ owner, vaccineName, fDoseLotNum, fDoseDate, fDoseSite, sDoseLotNum, sDoseDate, sDoseSite }) {
    const docID = this._collection.insert({
      owner,
      vaccineName,
      fDoseLotNum,
      fDoseDate,
      fDoseSite,
      sDoseLotNum,
      sDoseDate,
      sDoseSite,
    });
    return docID;
  }

  update(docID, { vaccineName, fDoseLotNum, fDoseDate, fDoseSite, sDoseLotNum,
    sDoseDate, sDoseSite }) {
    const updateData = {};
    if (vaccineName) {
      updateData.vaccineName = vaccineName;
    }
    if (fDoseLotNum) {
      updateData.vaccineName = fDoseLotNum;
    }
    if (fDoseDate) {
      updateData.vaccineName = fDoseDate;
    }
    if (fDoseSite) {
      updateData.vaccineName = fDoseSite;
    }
    if (sDoseLotNum) {
      updateData.vaccineName = sDoseLotNum;
    }
    if (sDoseDate) {
      updateData.vaccineName = sDoseDate;
    }
    if (sDoseSite) {
      updateData.vaccineName = sDoseSite;
    }
    this._collection.update(docID, { $set: updateData });
  }

  publish() {
    if (Meteor.isServer) {
      // get the StuffCollection instance.
      const instance = this;

      Meteor.publish(vaccineDataPublications.vaccineData, function publish() {
        if (this.userId) {
          const username = Meteor.users.findOne(this.userId).username;
          return instance._collection.find({ owner: username });
        }
        return this.ready();
      });

      Meteor.publish(vaccineDataPublications.vaccineDataAdmin, function publish() {
        if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
          return instance._collection.find();
        }
        return this.ready();
      });
    }
  }

  subscribeVaccineData() {
    if (Meteor.isClient) {
      return Meteor.subscribe(vaccineDataPublications.vaccineData);
    }
    return null;
  }

  subscribeVaccineDataAdmin() {
    if (Meteor.isClient) {
      return Meteor.subscribe(vaccineDataPublications.vaccineDataAdmin);
    }
    return null;
  }

}

export const VaccineData = new VaccineDataCollection();
