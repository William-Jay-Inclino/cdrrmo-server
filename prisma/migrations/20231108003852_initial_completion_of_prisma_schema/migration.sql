/*
  Warnings:

  - You are about to drop the column `createdAt` on the `barts` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `barts` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `csos` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `csos` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `emergencies` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `emergencies` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `nas` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `nas` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `pos` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `pos` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `training_skills` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `training_skills` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `barts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `csos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `emergencies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `nas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `pos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `training_skills` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "GenderEnum" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "UserStatusEnum" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateEnum
CREATE TYPE "DispatchStatusEnum" AS ENUM ('QUEUE', 'DISPATCHED', 'DECK');

-- CreateEnum
CREATE TYPE "UserLevelEnum" AS ENUM ('ADMIN', 'DISPATCHER', 'TEAM_LEADER', 'FIELD_OPERATOR');

-- CreateEnum
CREATE TYPE "UserTypeEnum" AS ENUM ('LGU_Regular', 'LGU_Casual', 'LGU_Job_Order', 'ACDV_CSO', 'ACDV_PO', 'ACDV_BART', 'ACDV_INDIVIDUAL', 'National_Agency');

-- CreateEnum
CREATE TYPE "TeamStatusEnum" AS ENUM ('ACTIVE', 'DISPATCHED');

-- CreateEnum
CREATE TYPE "SkillProficiencyEnum" AS ENUM ('BASIC', 'INTERMEDIATE', 'ADVANCED', 'EXPERT');

-- AlterTable
ALTER TABLE "barts" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "csos" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "emergencies" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "nas" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "pos" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "training_skills" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "user_level" "UserLevelEnum" NOT NULL,
    "password_hash" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "gender" "GenderEnum" NOT NULL,
    "address" TEXT NOT NULL,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "contact_no" TEXT NOT NULL,
    "blood_type" TEXT NOT NULL,
    "status" "UserStatusEnum" NOT NULL,
    "dispatch_status" "DispatchStatusEnum" NOT NULL,
    "type" "UserTypeEnum" NOT NULL,
    "bart_id" TEXT,
    "cso_id" TEXT,
    "po_id" TEXT,
    "na_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "teams" (
    "id" TEXT NOT NULL,
    "team_leader_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" "TeamStatusEnum" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "teams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "team_members" (
    "id" TEXT NOT NULL,
    "team_id" TEXT NOT NULL,
    "member_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "team_members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSkill" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "training_skill_id" TEXT NOT NULL,
    "proficiency" "SkillProficiencyEnum" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserSkill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkillCertificate" (
    "id" TEXT NOT NULL,
    "user_skill_id" TEXT NOT NULL,
    "certificateUrl" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SkillCertificate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_user_name_key" ON "users"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "users_first_name_last_name_key" ON "users"("first_name", "last_name");

-- CreateIndex
CREATE UNIQUE INDEX "teams_team_leader_id_key" ON "teams"("team_leader_id");

-- CreateIndex
CREATE UNIQUE INDEX "teams_name_key" ON "teams"("name");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_bart_id_fkey" FOREIGN KEY ("bart_id") REFERENCES "barts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_cso_id_fkey" FOREIGN KEY ("cso_id") REFERENCES "csos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_po_id_fkey" FOREIGN KEY ("po_id") REFERENCES "pos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_na_id_fkey" FOREIGN KEY ("na_id") REFERENCES "nas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teams" ADD CONSTRAINT "teams_team_leader_id_fkey" FOREIGN KEY ("team_leader_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_members" ADD CONSTRAINT "team_members_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_members" ADD CONSTRAINT "team_members_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSkill" ADD CONSTRAINT "UserSkill_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSkill" ADD CONSTRAINT "UserSkill_training_skill_id_fkey" FOREIGN KEY ("training_skill_id") REFERENCES "training_skills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillCertificate" ADD CONSTRAINT "SkillCertificate_user_skill_id_fkey" FOREIGN KEY ("user_skill_id") REFERENCES "UserSkill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
