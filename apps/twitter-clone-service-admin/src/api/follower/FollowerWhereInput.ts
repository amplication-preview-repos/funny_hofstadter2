import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FollowerListRelationFilter } from "./FollowerListRelationFilter";
import { FollowerWhereUniqueInput } from "./FollowerWhereUniqueInput";

export type FollowerWhereInput = {
  id?: StringFilter;
  following?: StringNullableFilter;
  followers?: FollowerListRelationFilter;
  follower?: FollowerWhereUniqueInput;
};
