import { FollowerUpdateManyWithoutFollowersInput } from "./FollowerUpdateManyWithoutFollowersInput";
import { FollowerWhereUniqueInput } from "./FollowerWhereUniqueInput";

export type FollowerUpdateInput = {
  following?: string | null;
  followers?: FollowerUpdateManyWithoutFollowersInput;
  follower?: FollowerWhereUniqueInput | null;
};
