/*
  Warnings:

  - Added the required column `password` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Made the column `username` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Users` ADD COLUMN `password` VARCHAR(191) NOT NULL,
    MODIFY `username` VARCHAR(191) NOT NULL;
