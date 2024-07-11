import { LikeUpdateManyWithoutTweetsInput } from "./LikeUpdateManyWithoutTweetsInput";
import { CommentUpdateManyWithoutTweetsInput } from "./CommentUpdateManyWithoutTweetsInput";

export type TweetUpdateInput = {
  content?: string | null;
  author?: string | null;
  likes?: LikeUpdateManyWithoutTweetsInput;
  comments?: CommentUpdateManyWithoutTweetsInput;
};
