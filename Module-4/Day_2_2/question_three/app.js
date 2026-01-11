import os from 'os';
import { writeFile, readFile, appendFile, unlink } from "fs/promises";

//Free memory
console.log("Free Memory:", os.freemem());


//Total number of CPU cores
console.log("CPU Cores:", os.cpus().length)



async function fileOperations() {
  try {
    // 1. Create data.txt
    await writeFile("data.txt", "Hello World");
    console.log("data.txt created");

    //2. Create Readme.md
    await writeFile("Readme.md", "## This is first line in Readme")
    console.log("Readme.md created")

    //3. Read data.txt and print content

    const data=await readFile("data.txt", "utf-8");
    console.log("Content of data.txt");
    console.log(data);

    //4. Append second line to data.txt

    await appendFile("data.txt", "\nThus is second line")
    console.log("Content appended to data.txt");

    //5.Delete Readme.md

    await unlink("Readme.md");
    console.log("Readme.md deleted")

  } catch (error) {
    console.error("Error occurred:", error.message);

  }
}

fileOperations();