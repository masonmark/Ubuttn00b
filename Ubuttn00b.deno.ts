const COMMANDS = [
  // '/home/ubuntu/Home/Ubuttn00b/stderrblat.sh',
  'sudo apt-get update',
  'sudo apt-get upgrade -y',
  'sudo apt-get -y install jq',
  'sudo apt-get -y install unzip',

  // Welp, we must have this one already:
  // 'curl -fsSL https://deno.land/x/install/install.sh | sh'

  'sudo apt-get -y install awscli',
  'sudo apt-get -y install libgtk2.0-0',
  'sudo apt-get -y install libgtk-3-0',
  'sudo apt-get -y install libgbm-dev',
  'sudo apt-get -y install libnotify-dev',
  'sudo apt-get -y install libgconf-2-4',
  'sudo apt-get -y install libnss3',
  'sudo apt-get -y install libxss1',
  'sudo apt-get -y install libasound2',
  'sudo apt-get -y install libxtst6',
  'sudo apt-get -y install vim',
  'sudo apt-get -y install xauth',
  'sudo apt-get -y install xvfb',
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

      // The exec lib doesn't really grok stderr, so we need to display that ourselves. So use OutputMode.Tee.
      const result = await exec(`bash -c "${command}"`, { output: OutputMode.StdOut });
      if (result.status.success) {
        this.fuckYeaaaah(result.status.code);
      } else {
        this.ohhhhhShiiiitttt(result.status.code, ++currentCommandIndex, COMMANDS.length, currentCommand);
      }
      currentCommandIndex++;
    }
  }

  static fuckYeaaaah(exitCode: number) {
    console.log(`🆗 [exit status: ${exitCode}]\n`);
  }

  static ohhhhhShiiiitttt(exitCode: number, cmdX: number, ofY: number, currentCommand: string  ) {
    console.log(`💩 [exit status: ${exitCode}]`);
    console.log(`💩 ABORTED: the following command: (${cmdX} of ${ofY}) did not succeed:"${currentCommand}"`);
    Deno.exit(exitCode);
  }

}