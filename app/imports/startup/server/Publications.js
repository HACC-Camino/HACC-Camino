import { Meteor } from 'meteor/meteor';
import { VaccineDatas } from '../../api/vaccine/VaccineDataCollection';

/** Publish all the collections you need. */
VaccineDatas.publish();

/** Need this for the alanning:roles package */
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});
