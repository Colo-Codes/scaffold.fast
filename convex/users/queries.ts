import { v } from 'convex/values';

export const listUsersArgs = v.object({
  limit: v.optional(v.number()),
});

export const userByClerkIdArgs = v.object({
  clerkId: v.string(),
});
