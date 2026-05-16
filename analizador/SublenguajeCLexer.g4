lexer grammar SublenguajeCLexer;

// ===== MODO PREDETERMINADO =====

DO           : 'do';
WHILE        : 'while';
PUTS         : 'puts';
BREAK        : 'break';
LPAREN       : '(';
RPAREN       : ')';
LBRACE       : '{';
RBRACE       : '}';
SEMICOLON    : ';';
CERO         : '0';
UNO          : '1';
COMILLA_ABRE : '"' -> pushMode(MODO_CADENA);
WS           : [ \t\r\n]+ -> skip;

// ===== MODO_CADENA =====

mode MODO_CADENA;
COMILLA_CIERRA : '"' -> popMode;
LETRA          : [a-zA-Z];
DIGITO_STR     : [0-9];
SIMBOLO        : [.#!?: ;];
