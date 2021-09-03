import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { CallPromiseMixin } from 'meteor/didericis:callpromise-mixin';
import { VaccineDatas } from './VaccineDataCollection';

export const VaccineDataDefineMethod = new ValidatedMethod({
  name: 'VaccineDataCollection.define',
  mixins: [CallPromiseMixin],
  validate: null,
  run(definitionData) {
    if (Meteor.isServer) {
      const docID = VaccineDatas.define(definitionData);
      return docID;
    }
    return '';
  },
});

export const userDailyDataUpdateMethod = new ValidatedMethod({
  name: 'VaccineDataCollection.update',
  mixins: [CallPromiseMixin],
  validate: null,
  run(updateData) {
    VaccineDatas.update(updateData._id, updateData);
    return true;
  },
});
