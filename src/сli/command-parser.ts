type ParserCommand = Record<string, string[]>;

export class CommandParser {
    static parse(cliArguments: string[]): ParserCommand {
        const parsedCommand: ParserCommand = {};
        let currentCommnad = '';

        for (const argument of cliArguments) {
            if (argument.startsWith('--')) {
                parsedCommand[argument] = [];
                currentCommnad = argument;
            } else if (currentCommnad && argument) {
                parsedCommand[currentCommnad].push(argument);
            }
        }

        return parsedCommand;
    }
}