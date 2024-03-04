#!/usr/bin/env node
import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';
import ora from 'ora';
import chalk from 'chalk';

//const packageJson = JSON.parse(fs.readFileSync('../package.json', 'utf8'));
//const { version } = packageJson;

if (process.argv.length < 3) {
  console.log('You should provide a name for your app.');
  console.log('For example:');
  console.log('npx create-plxnner my-planner');
  process.exit(1);
}

const projectName = process.argv[2];
const currentPath = process.cwd();
const outDir = path.join(currentPath, projectName);
const gitRepo = 'https://github.com/dxlliv/planner';

function execShellCommand(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.warn(error);
      }
      resolve(stdout? stdout : stderr);
    });
  });
}

async function main() {
  try {
    console.log()
    console.log(chalk`{cyan create-plxnner}`)

    if (fs.existsSync(outDir) && fs.readdirSync(outDir).length) {
      return console.log(`The folder ${projectName} already exists in the current directory, please chose another name.\n`);
    }

    console.log(chalk`✨  Generating plxnner in ${projectName}`)
    console.log()

    let spinner

    spinner = ora(`Downloading files`).start();
    try {
      await execShellCommand(`git clone --depth 1 ${gitRepo} ${projectName}/.tmp`);
      spinner.succeed()
    } catch (e) {
      spinner.fail(e.stderr)
    }

    spinner = ora(`Preparing workspace`).start();
    try {
      process.chdir(outDir);
      await execShellCommand(`cp -a .tmp/src/. .`);
      await execShellCommand(`cp -a .tmp/.gitignore .gitignore`);
      await execShellCommand(`cp -a .tmp/.prettierrc.json .prettierrc.json`);
      await execShellCommand(`cp -a .tmp/i18n.config.ts i18n.config.ts`);
      await execShellCommand(`cp -a .tmp/template/nuxt.config.ts nuxt.config.ts`);
      await execShellCommand(`cp -a .tmp/template/package.json package.json`);
      await execShellCommand(`cp -a .tmp/template/planner.config.ts planner.config.ts`);
      await execShellCommand(`cp -a .tmp/README.md README.md`);
      await execShellCommand(`cp -a .tmp/tsconfig.json tsconfig.json`);
      await execShellCommand(`rm -rf .tmp`);
      spinner.succeed()
    } catch (e) {
      spinner.fail(e.stderr)
    }

    spinner = ora(`Installing dependencies`).start();
    try {
      await execShellCommand(`npm install`);
      spinner.succeed()
    } catch (e) {
      spinner.fail(e.stderr)
    }

    console.log()
    console.log(`You just spawned a plxnner instance.\nNow you can start it by running these commands:\n`)
    console.log(chalk`{white cd ${projectName}}`);
    console.log(chalk`{white npm run dev}`);
    console.log()
  } catch (error) {
    console.log(error);
  }
}
main();