import { UserRole } from "./UserRole";

export interface SignUpDto {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  userRole: UserRole;
}
