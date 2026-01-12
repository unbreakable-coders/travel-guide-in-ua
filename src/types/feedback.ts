export interface Feedback {
  id: number;
  text: string;
  rating: number;
  user: {
    id: number;
    name: string;
    country: string;
    city: string;
    avatar: string;
  };
}
