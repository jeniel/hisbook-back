/*
  Warnings:

  - You are about to drop the `missedlogoutticket` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "global"."Status" ADD VALUE 'OnHold';
ALTER TYPE "global"."Status" ADD VALUE 'InProgress';

-- DropForeignKey
ALTER TABLE "global"."auditlog" DROP CONSTRAINT "auditlog_ticketId_fkey";

-- DropForeignKey
ALTER TABLE "global"."missedlogoutticket" DROP CONSTRAINT "missedlogoutticket_createdById_fkey";

-- AlterTable
ALTER TABLE "global"."department" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "global"."profile" ALTER COLUMN "employee_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "global"."user" ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "email" DROP NOT NULL;

-- DropTable
DROP TABLE "global"."missedlogoutticket";

-- CreateTable
CREATE TABLE "global"."ticket" (
    "id" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "missedAt" TIMESTAMP(3),
    "floor" TEXT,
    "screenshot" TEXT,
    "message" TEXT,
    "status" "global"."Status" NOT NULL DEFAULT 'Pending',
    "remarks" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdById" TEXT NOT NULL,
    "departmentId" TEXT NOT NULL,

    CONSTRAINT "ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "global"."event" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "location" TEXT NOT NULL,
    "detailsUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "event_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "global"."ticket" ADD CONSTRAINT "ticket_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "global"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "global"."ticket" ADD CONSTRAINT "ticket_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "global"."department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "global"."auditlog" ADD CONSTRAINT "auditlog_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "global"."ticket"("id") ON DELETE SET NULL ON UPDATE CASCADE;
