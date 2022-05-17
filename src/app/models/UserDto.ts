import { UserRole } from "./UserRole";

export interface UserDto {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  userRole: UserRole;

}
