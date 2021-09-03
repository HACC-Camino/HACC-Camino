import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { CallPromiseMixin } from 'meteor/didericis:callpromise-mixin';
import { VaccineData } from './VaccineDataCollection';

export const VaccineDataDefineMethod = new ValidatedMethod({
  name: 'VaccineDataCollection.define',
  mixins: [CallPromiseMixin],
  validate: null,
  run(definitionData) {
    if (Meteor.isServer) {
      return VaccineData.define(definitionData);
    }
    return '';
  },
});

export const userDailyDataUpdateMethod = new ValidatedMethod({
  name: 'VaccineDataDataCollection.update',
  mixins: [CallPromiseMixin],
  validate: null,
  run(updateData) {
    VaccineData.update(updateData._id, updateData);
    return true;
  },
});
