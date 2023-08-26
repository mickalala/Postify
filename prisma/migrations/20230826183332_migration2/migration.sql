/*
  Warnings:

  - You are about to drop the `Publicatons` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Publicatons";

-- CreateTable
CREATE TABLE "Publications" (
    "id" SERIAL NOT NULL,
    "mediaId" INTEGER NOT NULL,
    "postId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Publications_pkey" PRIMARY KEY ("id")
);
