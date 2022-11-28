import IUserHours from '../interfaces/timesheet';
import axiosConfig from './api';

export default class TimesheetService {
  static async getHours(): Promise<IUserHours[]> {
    const { data } = await axiosConfig.get<IUserHours[]>('/hours');

    return data;
  }
}
