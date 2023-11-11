/*
  Warnings:

  - A unique constraint covering the columns `[member_id]` on the table `team_members` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "team_members_member_id_key" ON "team_members"("member_id");
