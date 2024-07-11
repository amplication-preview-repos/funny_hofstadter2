import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";

export type TweetWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  author?: StringNullableFilter;
  likes?: LikeListRelationFilter;
  comments?: CommentListRelationFilter;
};
