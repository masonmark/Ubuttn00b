const COMMANDS = [
  'apt-get update',
  'apt-get upgrade -y',
  'apt-get -y install jq',
  'apt-get -y install unzip',

  // Welp, we must have this one already:
  // 'curl -fsSL https://deno.land/x/install/install.sh | sh'

  'apt-get -y install awscli',
  'apt-get -y install libgtk2.0-0',
  'apt-get -y install libgtk-3-0',
  'apt-get -y install libgbm-dev',
  'apt-get -y install libnotify-dev',
  'apt-get -y install libgconf-2-4',
  'apt-get -y install libnss3',
  'apt-get -y install libxss1',
  'apt-get -y install libasound2',
  'apt-get -y install libxtst6',
  'apt-get -y install vim',
  'apt-get -y install xauth',
  'apt-get -y install xvfb',
];

// Import from my own github only because the upstream one has the fix for stderr but never released it as a release:
import {
  exec,
  OutputMode,
} from "https://raw.githubusercontent.com/masonmark/deno-exec/master/mod.ts";


export class Ubuttn00b {

  static COMMANDS = COMMANDS;

  static async iLikeToNoobItNoobIt() {

    let currentCommand = "🤷🏻‍♀️";
    let currentCommandIndex = 0;

    for (let i = 0; i < COMMANDS.length; i++) {

      const command = COMMANDS[i];
      currentCommand = command;
      console.log("\n🍒 " + currentCommand);

      let result = await exec(`bash -c "${command}"`, { output: OutputMode.Capture });
      if (result.status.success) {
        this.fuckYeaaaah(result.status.code, result.output);
      } else {
        console.log(`💩, [exit status: ${result.status.code}]\n`);
        console.log(
          `💩 ABORTED: the following command:
          (${currentCommandIndex + 1} of ${COMMANDS.length}) did not succeed:
          "${currentCommand}":`,
        );
        console.log(result.output);
        Deno.exit(result.status.code);
      }
      currentCommandIndex++;
    }

  }

  static fuckYeaaaah(exitCode: number, output: string) {
    console.log(`🆗 [exit status: ${exitCode}]\n`);
    console.log(output);
  }

  static ohhhhhShiiiitttt() {

  }

}