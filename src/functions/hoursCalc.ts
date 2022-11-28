import IUserHours from '../interfaces/timesheet';

const calculateTotalExtraHours = (hours: IUserHours[]): any => {
  const projHoursArray = hours.map((hour) => {
    return hour.horas_projeto;
  });
  const sumProjMinutes = projHoursArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  const hoursArray = hours.map((hour) => {
    return hour.horas_apropriadas;
  });
  const sumMinutes = hoursArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  const totalMinutes = sumMinutes - sumProjMinutes;

  const workedHours = totalMinutes / 60;

  const sumWorkedHours = Math.floor(workedHours);

  const workedMinutes = workedHours * 60 - totalMinutes;

  const time = `${sumWorkedHours}:${(workedMinutes * -1).toFixed(0)}`;
  if (workedHours <= 0) {
    if (workedMinutes <= 0) {
      return '00:00';
    }
    return time;
  }
  return time;
};

export default calculateTotalExtraHours;

export const calculateTotalMissingHours = (hours: IUserHours[]): string => {
  const workedHoursArray = hours.map((hour) => {
    return hour.horas_apropriadas;
  });
  const sumMinutes = workedHoursArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  const projHoursArray = hours.map((hour) => {
    return hour.horas_projeto;
  });
  const sumProjMinutes = projHoursArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  const totalMinutes = sumMinutes - sumProjMinutes;

  const totalWorkedMinutes = totalMinutes / 60;

  const missingHours = Math.floor(totalWorkedMinutes);

  const missingMinutes = totalMinutes - missingHours * 60;

  const time = `${missingHours}:${missingMinutes.toFixed(0)}`;

  if (missingHours >= 0) {
    return '00:00';
  } else return time;
};

export const calculateWorkedHours = (hours: IUserHours[]): string => {
  const workedHoursArray = hours.map((hour) => {
    return hour.horas_apropriadas;
  });
  const sumWorkedMinutes = workedHoursArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  const workedMinutes = sumWorkedMinutes / 60;

  const totalWorkedHours = Math.floor(workedMinutes);

  const totalWorkedMinutes = sumWorkedMinutes - totalWorkedHours * 60;

  const resultWorkedHours = `${totalWorkedHours.toFixed(0)}:${totalWorkedMinutes.toFixed(0)}/160h`;

  return resultWorkedHours;
};
