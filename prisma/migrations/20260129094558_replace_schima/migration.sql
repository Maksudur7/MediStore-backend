/*
  Warnings:

  - You are about to drop the column `stasus` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "stasus",
ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT false;
