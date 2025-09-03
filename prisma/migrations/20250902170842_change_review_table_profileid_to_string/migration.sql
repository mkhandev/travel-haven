-- DropForeignKey
ALTER TABLE "public"."Review" DROP CONSTRAINT "Review_profileId_fkey";

-- AlterTable
ALTER TABLE "public"."Review" ALTER COLUMN "profileId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "public"."Review" ADD CONSTRAINT "Review_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "public"."Profile"("clerkId") ON DELETE CASCADE ON UPDATE CASCADE;
