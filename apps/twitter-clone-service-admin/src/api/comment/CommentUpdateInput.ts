import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";

export type CommentUpdateInput = {
  content?: string | null;
  author?: string | null;
  tweet?: TweetWhereUniqueInput | null;
};
