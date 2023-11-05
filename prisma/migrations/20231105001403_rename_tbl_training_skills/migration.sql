/*
  Warnings:

  - You are about to drop the `TrainingSkill` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "TrainingSkill";

-- CreateTable
CREATE TABLE "training_skills" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "training_skills_pkey" PRIMARY KEY ("id")
);
