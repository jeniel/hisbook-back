-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "global";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "marketing";

-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "public";

-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "vector";

-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('USER', 'ADMIN', 'CLIENT', 'SUPER_ADMIN');

-- CreateTable
CREATE TABLE "public"."keywords" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "keyword" TEXT NOT NULL,
    "count" INTEGER DEFAULT 1,
    "tenant_id" TEXT,

    CONSTRAINT "keywords_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."keyword_daily" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "keyword" TEXT NOT NULL,
    "count" INTEGER DEFAULT 1,
    "date" DATE DEFAULT CURRENT_DATE,
    "tenant_id" TEXT,

    CONSTRAINT "keyword_daily_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "marketing"."facebook_page" (
    "id" TEXT NOT NULL,
    "fb_id" TEXT,
    "name" TEXT,
    "about" TEXT,
    "access_token" TEXT,
    "category" TEXT,
    "fan_count" INTEGER,
    "followers_count" INTEGER,
    "overall_star_rating" DOUBLE PRECISION,
    "link" TEXT,
    "website" TEXT,
    "username" TEXT,
    "engagement_count" INTEGER,
    "engagement_message" TEXT,
    "image_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "facebook_page_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "marketing"."facebook_page_post" (
    "id" TEXT NOT NULL,
    "message" TEXT,
    "created_time " TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "page_id" TEXT NOT NULL,

    CONSTRAINT "facebook_page_post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."user" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "hashed_password" TEXT NOT NULL,
    "hashed_refresh_token" TEXT,
    "role" "public"."Role"[] DEFAULT ARRAY['USER']::"public"."Role"[],
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "is_approve" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT,
    "updated_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_by" TEXT,
    "tenantId" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."profile" (
    "id" TEXT NOT NULL,
    "first_name" TEXT,
    "middle_name" TEXT,
    "last_name" TEXT,
    "designation" TEXT,
    "employee_id" SERIAL,
    "date_hired" TIMESTAMP(3),
    "birth_date" TIMESTAMP(3),
    "address" JSONB,
    "contact" JSONB,
    "department_id" TEXT,
    "user_id" TEXT,
    "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT,
    "updated_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_by" TEXT,

    CONSTRAINT "profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tenant" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "is_approve" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nanoid" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "chat_table_name" TEXT,
    "document_table_name" TEXT,

    CONSTRAINT "tenant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."department" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "department_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "keywords_tenant_id_idx" ON "public"."keywords"("tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "keywords_unique_per_tenant" ON "public"."keywords"("keyword", "tenant_id");

-- CreateIndex
CREATE INDEX "keyword_daily_tenant_id_idx" ON "public"."keyword_daily"("tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "keyword_daily_unique_per_day" ON "public"."keyword_daily"("keyword", "date", "tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "facebook_page_fb_id_key" ON "marketing"."facebook_page"("fb_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "public"."user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "public"."user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "profile_user_id_key" ON "public"."profile"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "tenant_nanoid_key" ON "public"."tenant"("nanoid");

-- CreateIndex
CREATE UNIQUE INDEX "tenant_slug_key" ON "public"."tenant"("slug");

-- AddForeignKey
ALTER TABLE "public"."keywords" ADD CONSTRAINT "keywords_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."keyword_daily" ADD CONSTRAINT "keyword_daily_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "marketing"."facebook_page_post" ADD CONSTRAINT "facebook_page_post_page_id_fkey" FOREIGN KEY ("page_id") REFERENCES "marketing"."facebook_page"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user" ADD CONSTRAINT "user_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "public"."tenant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."profile" ADD CONSTRAINT "profile_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "public"."department"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."profile" ADD CONSTRAINT "profile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
