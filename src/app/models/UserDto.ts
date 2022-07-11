import { UserRole } from "./UserRole";

export interface UserDto {
  id: number;
  username: string;
  userRole: UserRole;
  firstName: string;
  jwt: string;
}
