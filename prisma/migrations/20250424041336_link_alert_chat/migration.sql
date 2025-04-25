/*
  Warnings:

  - A unique constraint covering the columns `[chatId]` on the table `TelegramChat` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "PriceAlert" ADD COLUMN     "chatId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "TelegramChat_chatId_key" ON "TelegramChat"("chatId");

-- AddForeignKey
ALTER TABLE "PriceAlert" ADD CONSTRAINT "PriceAlert_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "TelegramChat"("chatId") ON DELETE SET NULL ON UPDATE CASCADE;
