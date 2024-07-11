import { Like } from "../like/Like";
import { Comment } from "../comment/Comment";

export type Tweet = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  author: string | null;
  likes?: Array<Like>;
  comments?: Array<Comment>;
};
