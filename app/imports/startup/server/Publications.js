import { Meteor } from 'meteor/meteor';
import { VaccineData } from '../../api/vaccine/VaccineDataCollection';

/** Publish all the collections you need. */
VaccineData.publish();

/** Need this for the alanning:roles package */
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});
