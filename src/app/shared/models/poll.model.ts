export interface PollOption {
  text: string;
  votes: number;
}

export interface Poll {
  id: number;
  question: string;
  options: PollOption[];
  author: string;
  description: string;
  publishDate: Date;
}
