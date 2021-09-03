export const getDateToday = () => {
  const today = new Date();
  today.setHours(11, 59, 59, 99);

  return today;
};
