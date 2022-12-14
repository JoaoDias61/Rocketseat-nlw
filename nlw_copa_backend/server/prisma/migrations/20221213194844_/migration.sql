/*
  Warnings:

  - You are about to drop the column `createAt` on the `Pool` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[participantId,gameId]` on the table `Guess` will be added. If there are existing duplicate values, this will fail.
  - Made the column `poolId` on table `Participant` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `Participant` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Participant" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "poolId" TEXT NOT NULL,
    CONSTRAINT "Participant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Participant_poolId_fkey" FOREIGN KEY ("poolId") REFERENCES "Pool" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Participant" ("id", "poolId", "userId") SELECT "id", "poolId", "userId" FROM "Participant";
DROP TABLE "Participant";
ALTER TABLE "new_Participant" RENAME TO "Participant";
CREATE UNIQUE INDEX "Participant_userId_poolId_key" ON "Participant"("userId", "poolId");
CREATE TABLE "new_Pool" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ownerId" TEXT,
    CONSTRAINT "Pool_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Pool" ("code", "id", "ownerId", "title") SELECT "code", "id", "ownerId", "title" FROM "Pool";
DROP TABLE "Pool";
ALTER TABLE "new_Pool" RENAME TO "Pool";
CREATE UNIQUE INDEX "Pool_code_key" ON "Pool"("code");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Guess_participantId_gameId_key" ON "Guess"("participantId", "gameId");
