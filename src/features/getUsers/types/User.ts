export type User = {
  employeeId: number;
  firstName: string;
  lastName: string;
  birthday: string;
  height: number;
};
export type UserId = User['employeeId'];
