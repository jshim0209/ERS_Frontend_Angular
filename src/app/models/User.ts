import { UserRole } from "./UserRole";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  usrRole: UserRole;

}
