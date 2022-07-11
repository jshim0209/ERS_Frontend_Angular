import { AuthorDto } from "./AuthorDto";
import { ResolverDto } from "./ResolverDto";
import { Status } from "./Status";
import { Type } from "./Type";

export interface ReimbursementDto {
  id: number;
  amount: number;
  timeSubmitted: string;
  timeResolved: string;
  description: string;
  receipt: string;
  author: AuthorDto;
  resolver: ResolverDto;
  status: Status;
  type: Type;
}
