export type Follower = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  following: string | null;
  followers?: Array<Follower>;
  follower?: Follower | null;
};
