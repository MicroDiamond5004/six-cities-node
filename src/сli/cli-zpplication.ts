import { Command } from './commands/command.interface.js';

type CommandCollection = Record<string, Command>;

export class CLIApplication {
    private commands: CommandCollection = {};

    public registerCommands(commandList: Command[]) {
        commandList.forEach((command) => {
            if (Object.hasOwn(this.commands, command.getName())) {
                throw new Error(`Command ${command.getName()} has already exist!`);
            }
            this.commands[command.getName()] = command;
        });
    }
}