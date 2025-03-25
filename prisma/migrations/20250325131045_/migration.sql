/*
  Warnings:

  - You are about to drop the column `clienteId` on the `Pedido` table. All the data in the column will be lost.
  - You are about to drop the `Cliente` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Pedido" DROP CONSTRAINT "Pedido_clienteId_fkey";

-- AlterTable
ALTER TABLE "Pedido" DROP COLUMN "clienteId";

-- DropTable
DROP TABLE "Cliente";

-- CreateTable
CREATE TABLE "contato" (
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "dataPedido" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assunto" TEXT NOT NULL,
    "mensagem" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "contato_email_key" ON "contato"("email");
