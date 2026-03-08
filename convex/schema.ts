import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

const schema = defineSchema({
  users: defineTable({
    clerkId: v.string(),
    email: v.optional(v.string()),
    fullName: v.optional(v.string()),
    avatarUrl: v.optional(v.string()),
  }).index('by_clerk_id', ['clerkId']),
});

export default schema;
