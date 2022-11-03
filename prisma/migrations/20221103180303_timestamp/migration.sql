/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Food` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[img]` on the table `Food` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Food" ADD COLUMN     "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "Food_title_key" ON "Food"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Food_img_key" ON "Food"("img");
