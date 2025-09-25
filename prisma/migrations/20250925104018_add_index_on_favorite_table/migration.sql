/*
  Warnings:

  - A unique constraint covering the columns `[profileId,propertyId]` on the table `Favorite` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE INDEX "Favorite_profileId_idx" ON "public"."Favorite"("profileId");

-- CreateIndex
CREATE INDEX "Favorite_propertyId_idx" ON "public"."Favorite"("propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "Favorite_profileId_propertyId_key" ON "public"."Favorite"("profileId", "propertyId");
