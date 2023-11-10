-- DropForeignKey
ALTER TABLE "SkillCertificate" DROP CONSTRAINT "SkillCertificate_user_skill_id_fkey";

-- DropForeignKey
ALTER TABLE "UserSkill" DROP CONSTRAINT "UserSkill_training_skill_id_fkey";

-- DropForeignKey
ALTER TABLE "UserSkill" DROP CONSTRAINT "UserSkill_user_id_fkey";

-- DropForeignKey
ALTER TABLE "team_members" DROP CONSTRAINT "team_members_member_id_fkey";

-- DropForeignKey
ALTER TABLE "team_members" DROP CONSTRAINT "team_members_team_id_fkey";

-- DropForeignKey
ALTER TABLE "teams" DROP CONSTRAINT "teams_team_leader_id_fkey";

-- AddForeignKey
ALTER TABLE "teams" ADD CONSTRAINT "teams_team_leader_id_fkey" FOREIGN KEY ("team_leader_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_members" ADD CONSTRAINT "team_members_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_members" ADD CONSTRAINT "team_members_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSkill" ADD CONSTRAINT "UserSkill_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSkill" ADD CONSTRAINT "UserSkill_training_skill_id_fkey" FOREIGN KEY ("training_skill_id") REFERENCES "training_skills"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillCertificate" ADD CONSTRAINT "SkillCertificate_user_skill_id_fkey" FOREIGN KEY ("user_skill_id") REFERENCES "UserSkill"("id") ON DELETE CASCADE ON UPDATE CASCADE;
