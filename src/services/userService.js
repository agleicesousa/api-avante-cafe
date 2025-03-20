import prisma from '../config/database.js';

export const getAllUsers = async () => {
  return await prisma.user.findMany();
};

export const createUser = async (userData) => {
  return await prisma.user.create({ data: userData });
};
