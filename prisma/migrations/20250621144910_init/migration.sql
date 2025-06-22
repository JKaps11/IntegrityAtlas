-- CreateEnum
CREATE TYPE "ModuleNames" AS ENUM ('VALUES', 'AIMS', 'FOCUS', 'ADVENTURE', 'VALUE_GENERATOR', 'TASKS', 'CALENDAR');

-- CreateEnum
CREATE TYPE "ModuleStatus" AS ENUM ('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED');

-- CreateEnum
CREATE TYPE "TaskStatus" AS ENUM ('DONE', 'IN_PROGRESS', 'COMPLETED', 'NOTSCHEDULED', 'OVERDUE');

-- CreateTable
CREATE TABLE "UserModuleInfo" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "moduleId" INTEGER NOT NULL,
    "status" "ModuleStatus" NOT NULL DEFAULT 'NOT_STARTED',
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "completedAt" TIMESTAMP(3),
    "currentStep" INTEGER,

    CONSTRAINT "UserModuleInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModuleContent" (
    "id" SERIAL NOT NULL,
    "name" "ModuleNames" NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "ModuleContent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModelStep" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "moduleId" INTEGER NOT NULL,

    CONSTRAINT "ModelStep_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "TaskStatus" NOT NULL DEFAULT 'IN_PROGRESS',
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dueDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accounts" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserModuleInfo_userId_moduleId_key" ON "UserModuleInfo"("userId", "moduleId");

-- CreateIndex
CREATE UNIQUE INDEX "ModuleContent_name_key" ON "ModuleContent"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_provider_providerAccountId_key" ON "accounts"("provider", "providerAccountId");

-- AddForeignKey
ALTER TABLE "UserModuleInfo" ADD CONSTRAINT "UserModuleInfo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserModuleInfo" ADD CONSTRAINT "UserModuleInfo_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "ModuleContent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModelStep" ADD CONSTRAINT "ModelStep_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "ModuleContent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
