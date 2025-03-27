/*
  Warnings:

  - You are about to drop the column `descricao` on the `Menu` table. All the data in the column will be lost.
  - Changed the type of `categoria` on the `Menu` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "CategoriaMenu" AS ENUM ('CAFES', 'SOBREMESAS', 'ESPECIAIS', 'BEBIDAS_GELADAS', 'CHAS');

-- AlterTable
ALTER TABLE "Cliente" ALTER COLUMN "nome" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Menu" DROP COLUMN "descricao",
DROP COLUMN "categoria",
ADD COLUMN     "categoria" "CategoriaMenu" NOT NULL,
ALTER COLUMN "disponivel" DROP NOT NULL,
ALTER COLUMN "imagem" DROP NOT NULL;
