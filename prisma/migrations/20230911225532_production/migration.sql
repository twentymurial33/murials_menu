/*
  Warnings:

  - Added the required column `text` to the `Food` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Food" ADD COLUMN     "text" TEXT NOT NULL;
