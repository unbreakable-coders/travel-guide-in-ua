import { User } from '../user';

export interface PlaceFeedback {
  id: string;
  rating: number;
  text: string;
  user: User;
  createdAt: number;
}
