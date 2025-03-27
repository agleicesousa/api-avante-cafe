/*
  Warnings:

  - You are about to drop the column `mesaId` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the column `mesaId` on the `Pedido` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[mesaNumero]` on the table `Cliente` will be added. If there are existing duplicate values, this will fail.
  - Made the column `nome` on table `Cliente` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Cliente" DROP CONSTRAINT "Cliente_mesaId_fkey";

-- DropForeignKey
ALTER TABLE "Pedido" DROP CONSTRAINT "Pedido_mesaId_fkey";

-- AlterTable
ALTER TABLE "Cliente" DROP COLUMN "mesaId",
ADD COLUMN     "mesaNumero" INTEGER,
ALTER COLUMN "nome" SET NOT NULL;

-- AlterTable
ALTER TABLE "Menu" ADD COLUMN     "descricao" TEXT;

-- AlterTable
ALTER TABLE "Pedido" DROP COLUMN "mesaId",
ADD COLUMN     "mesaNumero" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_mesaNumero_key" ON "Cliente"("mesaNumero");

-- AddForeignKey
ALTER TABLE "Cliente" ADD CONSTRAINT "Cliente_mesaNumero_fkey" FOREIGN KEY ("mesaNumero") REFERENCES "Mesa"("numero") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_mesaNumero_fkey" FOREIGN KEY ("mesaNumero") REFERENCES "Mesa"("numero") ON DELETE SET NULL ON UPDATE CASCADE;
