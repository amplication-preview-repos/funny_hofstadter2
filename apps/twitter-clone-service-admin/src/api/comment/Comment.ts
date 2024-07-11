import { Tweet } from "../tweet/Tweet";

export type Comment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  author: string | null;
  tweet?: Tweet | null;
};
