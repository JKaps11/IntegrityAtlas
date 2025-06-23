/*
  Warnings:

  - You are about to drop the `ModelStep` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ModelStep" DROP CONSTRAINT "ModelStep_moduleId_fkey";

-- DropTable
DROP TABLE "ModelStep";

-- CreateTable
CREATE TABLE "ModuleStep" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "moduleId" INTEGER NOT NULL,

    CONSTRAINT "ModuleStep_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ModuleStep" ADD CONSTRAINT "ModuleStep_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "ModuleContent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
