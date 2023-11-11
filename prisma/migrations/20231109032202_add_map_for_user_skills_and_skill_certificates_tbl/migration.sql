/*
  Warnings:

  - You are about to drop the `SkillCertificate` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserSkill` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SkillCertificate" DROP CONSTRAINT "SkillCertificate_user_skill_id_fkey";

-- DropForeignKey
ALTER TABLE "UserSkill" DROP CONSTRAINT "UserSkill_training_skill_id_fkey";

-- DropForeignKey
ALTER TABLE "UserSkill" DROP CONSTRAINT "UserSkill_user_id_fkey";

-- DropTable
DROP TABLE "SkillCertificate";

-- DropTable
DROP TABLE "UserSkill";

-- CreateTable
CREATE TABLE "user_skills" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "training_skill_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skill_certificates" (
    "id" TEXT NOT NULL,
    "user_skill_id" TEXT NOT NULL,
    "certificateUrl" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "skill_certificates_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_skills" ADD CONSTRAINT "user_skills_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_skills" ADD CONSTRAINT "user_skills_training_skill_id_fkey" FOREIGN KEY ("training_skill_id") REFERENCES "training_skills"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "skill_certificates" ADD CONSTRAINT "skill_certificates_user_skill_id_fkey" FOREIGN KEY ("user_skill_id") REFERENCES "user_skills"("id") ON DELETE CASCADE ON UPDATE CASCADE;
