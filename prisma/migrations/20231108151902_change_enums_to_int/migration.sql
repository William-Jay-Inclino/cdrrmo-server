/*
  Warnings:

  - The `dispatch_status` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `proficiency` on the `UserSkill` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `status` on the `teams` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `user_level` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `gender` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `status` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `type` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "UserSkill" DROP COLUMN "proficiency",
ADD COLUMN     "proficiency" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "teams" DROP COLUMN "status",
ADD COLUMN     "status" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "user_level",
ADD COLUMN     "user_level" INTEGER NOT NULL,
DROP COLUMN "gender",
ADD COLUMN     "gender" INTEGER NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" INTEGER NOT NULL,
DROP COLUMN "dispatch_status",
ADD COLUMN     "dispatch_status" INTEGER,
DROP COLUMN "type",
ADD COLUMN     "type" INTEGER NOT NULL;

-- DropEnum
DROP TYPE "DispatchStatusEnum";

-- DropEnum
DROP TYPE "GenderEnum";

-- DropEnum
DROP TYPE "SkillProficiencyEnum";

-- DropEnum
DROP TYPE "TeamStatusEnum";

-- DropEnum
DROP TYPE "UserLevelEnum";

-- DropEnum
DROP TYPE "UserStatusEnum";

-- DropEnum
DROP TYPE "UserTypeEnum";
