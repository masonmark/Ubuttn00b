const COMMANDS = [
  'apt-get update',
  'apt-get upgrade -y',
  'apt-get -y install jq',
  'apt-get -y install unzip',

  // Welp, we must have this one already:
  // 'curl -fsSL https://deno.land/x/install/install.sh | sh'

  'apt-get -y awscli',
  'apt-get -y libgtk2.0-0',
  'apt-get -y libgtk-3-0',
  'apt-get -y libgbm-dev',
  'apt-get -y libnotify-dev',
  'apt-get -y libgconf-2-4',
  'apt-get -y libnss3',
  'apt-get -y libxss1',
  'apt-get -y libasound2',
  'apt-get -y libxtst6',
  'apt-get -y vim',
  'apt-get -y xauth',
  'apt-get -y xvfb',
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