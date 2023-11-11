/*
  Warnings:

  - Added the required column `name` to the `training_skills` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "training_skills" ADD COLUMN     "name" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "emergencies" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "emergencies_pkey" PRIMARY KEY ("id")
);
