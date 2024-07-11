import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";

export type CommentCreateInput = {
  content?: string | null;
  author?: string | null;
  tweet?: TweetWhereUniqueInput | null;
};
