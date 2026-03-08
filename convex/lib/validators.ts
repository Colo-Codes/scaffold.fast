import { v } from 'convex/values';

export const userUpsertValidator = v.object({
  clerkId: v.string(),
  email: v.optional(v.string()),
  fullName: v.optional(v.string()),
  avatarUrl: v.optional(v.string()),
});
