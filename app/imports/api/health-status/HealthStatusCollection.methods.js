import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { CallPromiseMixin } from 'meteor/didericis:callpromise-mixin';
import { HealthStatuses } from './HealthStatusCollection';

export const healthStatusDefineMethod = new ValidatedMethod({
  name: 'HealthStatusCollection.define',
  mixins: [CallPromiseMixin],
  validate: null,
  run(definitionData) {
    if (Meteor.isServer) {
      const docID = HealthStatuses.define(definitionData);
      return docID;
    }
    return '';
  },
});

export const healthStatusUpdateMethod = new ValidatedMethod({
  name: 'HealthStatusCollection.update',
  mixins: [CallPromiseMixin],
  validate: null,
  run(updateData) {
    HealthStatuses.update(updateData.id, updateData);
    return true;
  },
});

export const healthStatusRemoveItMethod = new ValidatedMethod({
  name: 'HealthStatusCollection.removeIt',
  mixins: [CallPromiseMixin],
  validate: null,
  run(instance) {
    return HealthStatuses.removeIt(instance);
  },
});
