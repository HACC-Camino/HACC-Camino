import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/StuffCollection.js';
import { VaccineData } from '../../api/vaccine/VaccineDataCollection';

/* eslint-disable no-console */

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.define(data);
}

/** Initialize the collection if empty. */
if (Stuffs.count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}

/** Initialize the collection if empty. */
if (VaccineData.count() === 0) {
  if (Meteor.settings.defaultVaccineData) {
    console.log('Creating default vaccine data.');
    Meteor.settings.defaultVaccineData.map(vaccineData => VaccineData.define(vaccineData));
  }
}
