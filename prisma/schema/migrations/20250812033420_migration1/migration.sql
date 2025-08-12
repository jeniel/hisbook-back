-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "global";

-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "public";

-- CreateEnum
CREATE TYPE "global"."Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "global"."Gender" AS ENUM ('Male', 'Female', 'Others');

-- CreateEnum
CREATE TYPE "global"."Status" AS ENUM ('Pending', 'Approved', 'Completed');

-- CreateTable
CREATE TABLE "global"."user" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "hashed_password" TEXT NOT NULL,
    "hashed_refresh_token" TEXT,
    "role" "global"."Role"[] DEFAULT ARRAY['USER']::"global"."Role"[],

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "global"."profile" (
    "id" TEXT NOT NULL,
    "first_name" TEXT,
    "middle_name" TEXT,
    "last_name" TEXT,
    "birth_date" TIMESTAMP(3),
    "gender" "global"."Gender",
    "title" TEXT,
    "address" TEXT,
    "contact" TEXT,
    "avatar" TEXT,
    "employee_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT,
    "department_id" TEXT,

    CONSTRAINT "profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "global"."department" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "order" SERIAL NOT NULL,

    CONSTRAINT "department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "global"."posts" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "global"."images" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "postId" TEXT NOT NULL,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "global"."missedlogoutticket" (
    "id" TEXT NOT NULL,
    "missedAt" TIMESTAMP(3),
    "floor" TEXT,
    "screenshot" TEXT,
    "status" "global"."Status",
    "updatedBy" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT,

    CONSTRAINT "missedlogoutticket_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "global"."user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "global"."user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "profile_employee_id_key" ON "global"."profile"("employee_id");

-- CreateIndex
CREATE UNIQUE INDEX "profile_user_id_key" ON "global"."profile"("user_id");

-- AddForeignKey
ALTER TABLE "global"."profile" ADD CONSTRAINT "profile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "global"."user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "global"."profile" ADD CONSTRAINT "profile_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "global"."department"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "global"."posts" ADD CONSTRAINT "posts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "global"."user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "global"."images" ADD CONSTRAINT "images_postId_fkey" FOREIGN KEY ("postId") REFERENCES "global"."posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "global"."missedlogoutticket" ADD CONSTRAINT "missedlogoutticket_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "global"."user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
