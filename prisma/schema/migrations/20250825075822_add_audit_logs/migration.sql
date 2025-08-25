/*
  Warnings:

  - You are about to drop the column `order` on the `department` table. All the data in the column will be lost.
  - You are about to drop the column `department_id` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the `images` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `department` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "global"."images" DROP CONSTRAINT "images_postId_fkey";

-- DropForeignKey
ALTER TABLE "global"."profile" DROP CONSTRAINT "profile_department_id_fkey";

-- AlterTable
ALTER TABLE "global"."department" DROP COLUMN "order";

-- AlterTable
ALTER TABLE "global"."missedlogoutticket" ADD COLUMN     "remarks" TEXT,
ADD COLUMN     "subject" TEXT,
ALTER COLUMN "status" SET DEFAULT 'Pending';

-- AlterTable
ALTER TABLE "global"."posts" ADD COLUMN     "datePosted" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "images" TEXT[];

-- AlterTable
ALTER TABLE "global"."profile" DROP COLUMN "department_id";

-- AlterTable
ALTER TABLE "global"."user" ADD COLUMN     "department_id" TEXT;

-- DropTable
DROP TABLE "global"."images";

-- CreateTable
CREATE TABLE "global"."auditlog" (
    "id" TEXT NOT NULL,
    "action" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedBy" TEXT,
    "userId" TEXT,
    "ticketId" TEXT,

    CONSTRAINT "auditlog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "department_name_key" ON "global"."department"("name");

-- AddForeignKey
ALTER TABLE "global"."user" ADD CONSTRAINT "user_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "global"."department"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "global"."auditlog" ADD CONSTRAINT "auditlog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "global"."user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "global"."auditlog" ADD CONSTRAINT "auditlog_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "global"."missedlogoutticket"("id") ON DELETE SET NULL ON UPDATE CASCADE;
