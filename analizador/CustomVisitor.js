// CustomVisitor.js
// Visitor personalizado que recorre el arbol de analisis y genera codigo JavaScript
// interpretando el sublenguaje C (do-while, puts, break, condiciones 0/1)

import SublenguajeCParserVisitor from './generated/SublenguajeCParserVisitor.js';

export default class CustomVisitor extends SublenguajeCParserVisitor {

    // programa : instrucciones EOF
    visitPrograma(ctx) {
        return this.visit(ctx.instrucciones());
    }

    // instrucciones : instruccion  (una sola instruccion)
    visitUnaInstruccion(ctx) {
        return this.visit(ctx.instruccion());
    }

    // instrucciones : instrucciones instruccion  (varias instrucciones)
    visitVariasInstrucciones(ctx) {
        const anterior = this.visit(ctx.instrucciones());
        const actual   = this.visit(ctx.instruccion());
        return anterior + '\n' + actual;
    }

    // instruccion : bucle
    visitInstruccion(ctx) {
        return this.visit(ctx.bucle());
    }

    // bucle : DO LBRACE sentencia RBRACE WHILE LPAREN condicion RPAREN SEMICOLON
    visitBucle(ctx) {
        const condicion = this.visit(ctx.condicion());
        const cuerpo    = this.visit(ctx.sentencia());
        const lineas    = cuerpo.split('\n').map(l => '  ' + l).join('\n');
        return `do {\n${lineas}\n} while (${condicion});`;
    }

    // sentencia : salida sentencia  (salida seguida de mas sentencias)
    visitSentenciaContinua(ctx) {
        const primera = this.visit(ctx.salida());
        const resto   = this.visit(ctx.sentencia());
        return primera + '\n' + resto;
    }

    // sentencia : salida  (una sola llamada a puts)
    visitSentenciaSola(ctx) {
        return this.visit(ctx.salida());
    }

    // sentencia : terminar  (instruccion break)
    visitSentenciaBreak(ctx) {
        return this.visit(ctx.terminar());
    }

    // salida : PUTS LPAREN cadena RPAREN SEMICOLON
    // Se traduce a console.log(...)
    visitSalida(ctx) {
        const texto = this.visit(ctx.cadena());
        return `console.log(${texto});`;
    }

    // terminar : BREAK SEMICOLON
    visitTerminar(ctx) {
        return 'break;';
    }

    // condicion : CERO  -> false en JavaScript
    visitCondFalsa(ctx) {
        return 'false';
    }

    // condicion : UNO  -> true en JavaScript
    visitCondVerdadera(ctx) {
        return 'true';
    }

    // cadena : COMILLA_ABRE caracteres COMILLA_CIERRA
    visitCadena(ctx) {
        const contenido = this.visit(ctx.caracteres());
        return `"${contenido}"`;
    }

    // caracteres : caracter  (un solo caracter)
    visitUnCaracter(ctx) {
        return this.visit(ctx.caracter());
    }

    // caracteres : caracteres caracter  (varios caracteres, recursivo)
    visitMasCaracteres(ctx) {
        return this.visit(ctx.caracteres()) + this.visit(ctx.caracter());
    }

    // caracter : LETRA
    visitCharLetra(ctx) {
        return ctx.LETRA().getText();
    }

    // caracter : DIGITO_STR
    visitCharDigito(ctx) {
        return ctx.DIGITO_STR().getText();
    }

    // caracter : SIMBOLO
    visitCharSimbolo(ctx) {
        return ctx.SIMBOLO().getText();
    }
}
