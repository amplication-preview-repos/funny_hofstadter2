import { FollowerCreateNestedManyWithoutFollowersInput } from "./FollowerCreateNestedManyWithoutFollowersInput";
import { FollowerWhereUniqueInput } from "./FollowerWhereUniqueInput";

export type FollowerCreateInput = {
  following?: string | null;
  followers?: FollowerCreateNestedManyWithoutFollowersInput;
  follower?: FollowerWhereUniqueInput | null;
};
