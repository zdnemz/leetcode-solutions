import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

const srcDir = path.join(__dirname);

const getFolders = (dir: string): string[] => {
  return fs
    .readdirSync(dir)
    .filter((file) => fs.statSync(path.join(dir, file)).isDirectory());
};

const getFiles = (dir: string): string[] => {
  return fs.readdirSync(dir).filter((file) => {
    const filePath = path.join(dir, file);
    return fs.statSync(filePath).isFile();
  });
};

const choices = getFolders(srcDir).map((folder) => ({
  name: folder,
  value: path.join(srcDir, folder),
}));

if (choices.length === 0) {
  console.error("No folders found in src directory.");
  process.exit(1);
}

const run: Function = async () => {
  try {
    const { folder } = await inquirer.prompt([
      {
        type: "list",
        name: "folder",
        message: "Which folder do you want to run?",
        choices: [...choices.map((choice) => choice.name), "exit"],
      },
    ]);

    if (folder === "exit") {
      process.exit(0);
    }

    const folderPath = path.join(srcDir, folder);
    const fileChoices = getFiles(folderPath);

    const { file } = await inquirer.prompt([
      {
        type: "list",
        name: "file",
        message: "Which file do you want to run?",
        choices: ["back", ...fileChoices, "exit"],
      },
    ]);

    if (file === "exit") {
      process.exit(0);
    }

    if (file === "back") {
      return run();
    }

    const filePath = path.join(folderPath, file);
    const command = `bun run ${filePath}`;
    const { stdout, stderr } = await execAsync(command);

    if (stderr) {
      console.error(stderr);
      return;
    }

    console.log(stdout);
  } catch (error) {
    console.error((error as Error).message);
  }
};

run();
