import { Meteor } from 'meteor/meteor';
import { VaccineDatas } from '../../api/vaccine/VaccineDataCollection';
import { Stuffs } from '../../api/stuff/StuffCollection';
import { HealthStatuses } from '../../api/health-status/HealthStatusCollection';

/** Publish all the collections you need. */
Stuffs.publish();
VaccineDatas.publish();
HealthStatuses.publish();

/** Need this for the alanning:roles package */
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});
