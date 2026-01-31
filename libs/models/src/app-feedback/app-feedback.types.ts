import { User } from '../user';

export interface AppFeedback {
  id: string;
  rating: number;
  text: string;
  user: User;
}
