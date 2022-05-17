import { Type } from "./Type";
import { User } from "./User";
import { Status } from "./Status"


export interface Reimbursement {
  id: number;
  amount: number;
  timeSubmitted: string;
  timeResolved: string;
  description: string;
  receipt: string;
  author: User;
  resolver: User;
  status: Status;
  type: Type;

}
