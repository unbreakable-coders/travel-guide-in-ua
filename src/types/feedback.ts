import type { User } from "./user";

export interface Feedback {
  id: number;
  text: string;
  rating: number;
  user: User;
}
