import { Meteor } from 'meteor/meteor';
import { VaccineDatas } from '../../api/vaccine/VaccineDataCollection';
import { HealthStatuses } from '../../api/health-status/HealthStatusCollection';

/* eslint-disable no-console */
if (HealthStatuses.count() === 0) {
  if (Meteor.settings.defaultHealthStatuses) {
    Meteor.settings.defaultHealthStatuses.map(healthStatus => HealthStatuses.define(healthStatus));
    console.log(`HealthStatusesCollection: ${HealthStatuses.count()}`);
  }
}

/** Initialize the collection if empty. */
if (VaccineDatas.count() === 0) {
  if (Meteor.settings.defaultVaccineData) {
    console.log('Creating default vaccine data.');
    Meteor.settings.defaultVaccineData.map(vaccineData => VaccineDatas.define(vaccineData));
  }
}
