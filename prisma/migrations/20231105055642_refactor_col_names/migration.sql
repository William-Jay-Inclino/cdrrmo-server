/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `emergencies` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `training_skills` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "emergencies" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "training_skills" ALTER COLUMN "description" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "emergencies_name_key" ON "emergencies"("name");

-- CreateIndex
CREATE UNIQUE INDEX "training_skills_name_key" ON "training_skills"("name");
