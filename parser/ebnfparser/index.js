class EBNFParser {
    constructor() {
    }

    isEndOfText() {
        return this.position >= this.text.length;
    }

    convPosToLineColumn(pos) {
        // binay search
        let lines = this.posToLineColumnArray;
        let left = 0;
        let right = lines.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (lines[mid].pos <= pos && pos < lines[mid + 1].pos) {
                return { line: mid + 1, column: pos - lines[mid].pos + 1 };
            } else if (lines[mid].pos > pos) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return { line: 0, column: 0 };
    }

    putErrorWithLineDetail(message, position) {
        let pos = this.convPosToLineColumn(position);
        let line = this.posToLineColumnArray[pos.line - 1].line;
        console.log(`Error: ${message} at line ${pos.line}, column ${pos.column}`);
        console.log(line);
        console.log(' '.repeat(pos.column - 1) + '^');
    }

    // putError(message) {
    //     let pos = this.convPosToLineColumn(this.position);
    //     console.log(`Error: ${message} at line ${pos.line}, column ${pos.column}`);
    // }

    skipSpaces() {
        let re = /[ \t\r\n]*/y;
        re.lastIndex = this.position;
        re.exec(this.text);
        this.position = re.lastIndex;
    }

    tryParse(reqParseInfo) {
        const parsedTypeMap = this.parsedPosCache.get(this.position);
        if (parsedTypeMap) {
            const node = parsedTypeMap.get(reqParseInfo.type);
            if (node) {
                this.position = node.positionEnd;
                return node;
            }
        }

        let savePosition = this.position;

        const node = this[reqParseInfo.parseFuncName](reqParseInfo);

        if (!parsedTypeMap) {
            parsedTypeMap = new Map();
            this.parsedPosCache.set(this.position, parsedTypeMap);
        }
        parsedTypeMap.set(type, node);

        if (node.type === "error") {
            this.position = savePosition;
        } else {
            this.position = node.positionEnd;
        }
        return node;
    }

    tryParseAll(reqParseInfoList) {
        let errors = [];
        for (let reqPareInfo of reqParseInfoList) {
            let node = this.tryParse(reqPareInfo);
            if (node.type !== "error") {
                return node;
            }
            errors.push(node);
        }
        return {
            type: "error",
            text: "all syntax are not match.",
            position: this.position,
            positionEnd: this.position,
            children: errors
        };
    }

    parseSymbol(reqParseInfo) {
        let symbol = reqParseInfo.symbol;
        if (!this.text.startsWith(symbol, this.position)) {
            return {
                type: "error",
                text: `symbol ${symbol} expected.`,
                position: this.position,
                positionEnd: this.position
            };
        }
        return {
            type: reqParseInfo.type,
            text: symbol,
            position: this.position,
            positionEnd: this.position + symbol.length
        };
    }

    parseIdentifier(reqParseInfo) {
        let re = /[A-Za-z_][-A-Za-z0-9_]*/y;
        re.lastIndex = this.position;
        let m = re.exec(this.text);
        if (!m) {
            return {
                type: "error",
                text: "identifier expected.",
                position: this.position,
                positionEnd: this.position
            };
        }
        const identifier = m[0];
        return {
            type: reqParseInfo.type,
            text: identifier,
            position: this.position,
            positionEnd: this.position + result.length
        };
    }

    parseSyntaxRule(reqParseInfo) {
        let startPosition = this.position;

        let identifier = this.tryParse({
            type: "identifier",
            parseFuncName: "parseIdentifier"
        });
        if (identifier.type === "error") {
            return identifier;
        }

        this.skipSpaces();

        let equalSignNode = this.tryParse({
            type: "symbol",
            parseFuncName: "parseSymbol",
            symbol: "="
        });
        if (equalSignNode.type === "error") {
            return {
                type: "error",
                text: "equal sign expected.",
                position: this.position,
                positionEnd: this.position
            };
        }

        this.skipSpaces();

        const definition = this.parseDefinition();
        if (!definition) {
            return {
                type: "error",
                text: "definition error.",
                position: this.position,
                positionEnd: this.position
            };
        }

        this.skipSpaces();

        let semicolonNode = this.tryParse({
            type: "symbol",
            parseFuncName: "parseSymbol",
            symbol: ";"
        });
        if (semicolonNode.type === "error") {
            return {
                type: "error",
                text: "semicolon expected.",
                position: this.position,
                positionEnd: this.position
            };
        }

        return {
            type: reqParseInfo.type,
            cstChildren: [identifier, equalSignNode, definition, semicolonNode],
            astChildren: [identifier, definition],
            position: startPosition,
            positionEnd: this.position
        };
    }

    parseSyntaxRules() {
        const startPosition = this.position;

        this.skipSpaces();

        while (!this.isEndOfText()) {
            const curPos = this.position;
            let syntaxRule = this.parseSyntaxRule();
            if (syntaxRule.type === "error") {
                result.push({
                    type: "error",
                    text: "syntax rule expected.",
                    position: this.position,
                    positionEnd: this.position,
                    children: [syntaxRule]
                });
                break;
            }
            result.push(syntaxRule);

            this.skipSpaces();
        }
        return {
            type: "syntaxRules",
            cstChildren: result,
            astChildren: result,
            position: startPosition,
            positionEnd: this.position
        };
    }

    parse(text) {
        this.parsedPosCache = new Map();
        this.text = text.replace(/\r\n/g, '\n');

        const lines = this.text.split('\n');
        if (lines.length === 0) {
            return result;
        }
        if (lines[lines.length - 1] !== '') {
            lines.push('');
        }
        this.posToLineColumnArray = lines.reduce((acc, lineStr) => {
            acc.lines.push({ pos: acc.pos, line: lineStr });
            acc.pos += lineStr.length + 1;
            return acc;
        },{pos: 0, lines:[]}).lines;

        this.position = 0;

        const result = this.parseSyntaxRules();

        return result;
    }
}

var parser = new EBNFParser();
console.log(parser.parse(`Hello = ;`));

// module.exports = EBNFParser;
