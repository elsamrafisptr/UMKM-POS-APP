/*
  Warnings:

  - You are about to drop the column `productId` on the `Outlet` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Outlet" DROP COLUMN "productId",
ALTER COLUMN "address" DROP NOT NULL,
ALTER COLUMN "contact" DROP NOT NULL,
ALTER COLUMN "contact" SET DATA TYPE TEXT;
