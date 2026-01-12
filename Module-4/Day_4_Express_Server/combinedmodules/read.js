import { readFile } from "fs/promises";

export const readDataFile = async () => {
  try {
    const data = await readFile("Data.txt", "utf-8");
    return data;
  } catch (error) {
    throw new Error("Data.txt file not found or cannot be read");
  }
};
