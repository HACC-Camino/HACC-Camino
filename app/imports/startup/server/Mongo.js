import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/StuffCollection.js';
import { HealthStatuses } from '../../api/health-status/HealthStatusCollection';

/* eslint-disable no-console */
if (HealthStatuses.count() === 0) {
  if (Meteor.settings.defaultHealthStatuses) {
    Meteor.settings.defaultHealthStatuses.map(healthStatus => HealthStatuses.define(healthStatus));
    console.log(`HealthStatusesCollection: ${HealthStatuses.count()}`);
  }
}

// DELETE FROM HERE
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
