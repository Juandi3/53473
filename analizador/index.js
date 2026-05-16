// index.js
// Analizador de sublenguaje C - Tema 39568_10
// Realiza: analisis lexico, tabla de tokens, arbol sintactico e interpretacion

import antlr4          from 'antlr4';
import SublenguajeCLexer  from './generated/SublenguajeCLexer.js';
import SublenguajeCParser from './generated/SublenguajeCParser.js';
import CustomVisitor      from './CustomVisitor.js';
import fs                 from 'fs';
import readline           from 'readline';

const { CharStreams, CommonTokenStream } = antlr4;

// ----- Listener de errores personalizado -----
class ErrorCollector extends antlr4.error.ErrorListener {
    constructor() {
        super();
        this.errores = [];
    }
    syntaxError(recognizer, offendingSymbol, line, column, msg) {
        this.errores.push({ line, column, msg });
    }
}

// ----- Leer cadena desde la consola si no hay input.txt -----
async function leerCadena() {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    return new Promise(resolve => {
        rl.question('Ingresa el codigo fuente a analizar (una linea): ', answer => {
            rl.close();
            resolve(answer + '\n');
        });
    });
}

// ----- Nombre legible de un tipo de token -----
// symbolicNames es propiedad estatica de la clase, se accede via constructor
function nombreToken(lexer, tipo) {
    if (tipo === antlr4.Token.EOF) return 'EOF';
    const sym = lexer.constructor.symbolicNames;
    return (sym && sym[tipo]) ? sym[tipo] : `TOKEN_${tipo}`;
}

// ----- Separador visual -----
const SEP = '='.repeat(62);

// ===== MAIN =====
async function main() {
    // 1. Leer entrada
    // Acepta ruta como argumento: node index.js <archivo>
    // Si no se pasa argumento, lee input.txt; si no existe, pide por consola
    let input;
    const archivoArg = process.argv[2];
    try {
        const ruta = archivoArg || 'input.txt';
        input = fs.readFileSync(ruta, 'utf8');
    } catch {
        if (archivoArg) {
            console.error(`Error: no se encontro el archivo "${archivoArg}"`);
            process.exit(1);
        }
        input = await leerCadena();
    }

    console.log(SEP);
    console.log('  ANALIZADOR SUBLENGUAJE C  |  Tema 39568_10');
    console.log(SEP);
    console.log('\n[ENTRADA]\n');
    console.log(input);

    // =========================================================
    // 2. ANALISIS LEXICO - construir tabla de lexemas y tokens
    // =========================================================
    const inputStream = CharStreams.fromString(input);
    const lexer       = new SublenguajeCLexer(inputStream);
    const errLexer    = new ErrorCollector();
    lexer.removeErrorListeners();
    lexer.addErrorListener(errLexer);

    const tokenStream = new CommonTokenStream(lexer);
    tokenStream.fill();   // recorre todos los tokens

    console.log('\n[TABLA DE LEXEMAS Y TOKENS]\n');
    const COL = 22;
    const linea = '+' + '-'.repeat(COL+2) + '+' + '-'.repeat(COL+2) + '+--------+';
    console.log(linea);
    console.log('| ' + 'LEXEMA'.padEnd(COL) + ' | ' + 'TOKEN'.padEnd(COL) + ' | LINEA  |');
    console.log(linea);

    for (const tok of tokenStream.tokens) {
        if (tok.type === antlr4.Token.EOF) break;
        const lex  = tok.text.replace(/\n/g,'\\n').replace(/\r/g,'\\r');
        const name = nombreToken(lexer, tok.type);
        console.log('| ' + lex.padEnd(COL) + ' | ' + name.padEnd(COL) + ' | ' + String(tok.line).padEnd(6) + ' |');
    }
    console.log(linea);

    // Errores lexicos
    if (errLexer.errores.length > 0) {
        console.log('\n[ERRORES LEXICOS]');
        errLexer.errores.forEach(e =>
            console.error(`  Linea ${e.line}:${e.column} - ${e.msg}`)
        );
        console.log('\n[RESULTADO] ENTRADA INVALIDA: errores lexicos encontrados.');
        process.exit(1);
    }

    // =========================================================
    // 3. ANALISIS SINTACTICO - construir arbol de derivacion
    // =========================================================
    tokenStream.reset();
    const parser   = new SublenguajeCParser(tokenStream);
    const errParser = new ErrorCollector();
    parser.removeErrorListeners();
    parser.addErrorListener(errParser);

    const tree = parser.programa();

    console.log('\n[ARBOL DE ANALISIS SINTACTICO]\n');
    console.log(tree.toStringTree(parser.ruleNames));

    // Errores sintacticos
    if (errParser.errores.length > 0) {
        console.log('\n[ERRORES SINTACTICOS]');
        errParser.errores.forEach(e =>
            console.error(`  Linea ${e.line}:${e.column} - ${e.msg}`)
        );
        console.log('\n[RESULTADO] ENTRADA INVALIDA: errores sintacticos encontrados.');
        process.exit(1);
    }

    console.log('\n[RESULTADO] ENTRADA VALIDA: la cadena pertenece al lenguaje.');

    // =========================================================
    // 4. INTERPRETACION - generar JavaScript equivalente y ejecutar
    // =========================================================
    const visitor = new CustomVisitor();
    const jsCode  = visitor.visit(tree);

    console.log('\n[CODIGO JAVASCRIPT GENERADO]\n');
    console.log(jsCode);

    console.log('\n[EJECUCION]\n');
    try {
        // Se usa Function para ejecutar el codigo generado en un scope aislado
        const ejecutar = new Function(jsCode);
        ejecutar();
    } catch (err) {
        console.error('Error en ejecucion:', err.message);
    }

    console.log('\n' + SEP);
}

main();
