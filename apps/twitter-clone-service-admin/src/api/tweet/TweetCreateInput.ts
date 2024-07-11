import { LikeCreateNestedManyWithoutTweetsInput } from "./LikeCreateNestedManyWithoutTweetsInput";
import { CommentCreateNestedManyWithoutTweetsInput } from "./CommentCreateNestedManyWithoutTweetsInput";

export type TweetCreateInput = {
  content?: string | null;
  author?: string | null;
  likes?: LikeCreateNestedManyWithoutTweetsInput;
  comments?: CommentCreateNestedManyWithoutTweetsInput;
};
