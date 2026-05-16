parser grammar SublenguajeCParser;

options {
    tokenVocab = SublenguajeCLexer;
}

// ===== REGLAS DEL PARSER =====

programa
    : instrucciones EOF
    ;

instrucciones
    : instruccion                           #unaInstruccion
    | instrucciones instruccion             #variasInstrucciones
    ;

instruccion
    : bucle
    ;

bucle
    : DO LBRACE sentencia RBRACE WHILE LPAREN condicion RPAREN SEMICOLON
    ;

sentencia
    : salida sentencia                      #sentenciaContinua
    | salida                                #sentenciaSola
    | terminar                              #sentenciaBreak
    ;

salida
    : PUTS LPAREN cadena RPAREN SEMICOLON
    ;

terminar
    : BREAK SEMICOLON
    ;

condicion
    : CERO                                  #condFalsa
    | UNO                                   #condVerdadera
    ;

cadena
    : COMILLA_ABRE caracteres COMILLA_CIERRA
    ;

caracteres
    : caracter                              #unCaracter
    | caracteres caracter                   #masCaracteres
    ;

caracter
    : LETRA                                 #charLetra
    | DIGITO_STR                            #charDigito
    | SIMBOLO                               #charSimbolo
    ;
