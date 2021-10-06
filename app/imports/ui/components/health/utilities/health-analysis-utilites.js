export const covidStatuses = [
  {
    icon: 'exclamation',
    iconColor: 'FFD60A',
    header: 'Daily health check-in',
    content: 'Aloha, don\'t hesitate to spend a minute to do the daily check-in below. ' +
        'Stay safe and healthy!',
  }, {
    icon: 'check',
    iconColor: '#00572e',
    header: 'You are clear to come to campus',
    healthPageHeader: 'You may report to campus / Anyone in Quarantine MUST continue to' +
        ' adhere to location restrictions',
  }, {
    icon: 'x',
    iconColor: '#8b0400',
    header: 'Stay at home or in your campus residence',
    healthPageHeader: 'Stay home or in your campus residence. ' +
        'DO NOT report to campus. ' +
        'DO NOT attend UH in-person events or activities.\n',
  },
];

export const getCOVIDStatusIndex = (healthStatus) => {
  if (healthStatus) {
    return healthStatus.clear ? 1 : 2;
  }
  return 0;
};

export const getVaccineStatus = (vaccine) => {
  if (vaccine) {
    return (vaccine.sDoseSite ? 'Completed' : 'Partially Completed');
  }
  return 'Not Completed';
};
