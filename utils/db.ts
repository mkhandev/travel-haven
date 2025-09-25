import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

// Use existing client if available (dev), otherwise create new one
export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ["query", "warn", "error"],
  });

// Save it in global in dev mode to avoid multiple instances
if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export default prisma;
