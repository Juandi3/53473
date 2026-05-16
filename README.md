# Analizador Sintáctico — Sublenguaje C | Tema 39568_10

Implementación de un **analizador léxico y sintáctico** para un sublenguaje reducido de C,
construido con **ANTLR4** y **JavaScript (Node.js)**.

El analizador realiza cuatro tareas sobre el código fuente de entrada:
1. **Análisis léxico** — reconoce tokens e informa errores con número de línea
2. **Tabla de lexemas** — muestra cada lexema con su token y línea
3. **Árbol de análisis sintáctico** — construye y muestra el árbol de derivación concreto
4. **Interpretación** — traduce el código a JavaScript equivalente y lo ejecuta

---

## Requisitos previos

| Herramienta | Versión mínima | Cómo verificar   |
|-------------|----------------|------------------|
| Node.js     | 16+            | `node -v`        |
| npm         | 8+             | `npm -v`         |

---

## Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/franpiccolella19/53453.git
cd 53453

# 2. Instalar dependencias
cd analizador
npm install
```

---

## Cómo ejecutar con los ejemplos

Desde la carpeta `analizador/`, pasar la ruta del archivo de ejemplo como argumento:

```bash
cd analizador

# Ejemplo 1 — válido: bucle simple con puts
node index.js ../ejemplo1_valido.txt

# Ejemplo 2 — válido: múltiples bucles, break, condición 1
node index.js ../ejemplo2_valido.txt

# Ejemplo 3 — inválido: falta punto y coma (error sintáctico)
node index.js ../ejemplo3_invalido.txt

# Ejemplo 4 — inválido: condición '2' no reconocida (error léxico)
node index.js ../ejemplo4_invalido.txt
```

---

## Salida de ejemplo para `ejemplo1_valido.txt`

**Entrada:**
```c
do {
  puts("hola mundo");
} while (0);
```

**Salida del analizador:**
```
==============================================================
  ANALIZADOR SUBLENGUAJE C  |  Tema 39568_10
==============================================================

[ENTRADA]

do {
  puts("hola mundo");
} while (0);


[TABLA DE LEXEMAS Y TOKENS]

+------------------------+------------------------+--------+
| LEXEMA                 | TOKEN                  | LINEA  |
+------------------------+------------------------+--------+
| do                     | DO                     | 1      |
| {                      | LBRACE                 | 1      |
| puts                   | PUTS                   | 2      |
| (                      | LPAREN                 | 2      |
| "                      | COMILLA_ABRE           | 2      |
| h                      | LETRA                  | 2      |
| o                      | LETRA                  | 2      |
| l                      | LETRA                  | 2      |
| a                      | LETRA                  | 2      |
|                        | SIMBOLO                | 2      |
| m                      | LETRA                  | 2      |
| u                      | LETRA                  | 2      |
| n                      | LETRA                  | 2      |
| d                      | LETRA                  | 2      |
| o                      | LETRA                  | 2      |
| "                      | COMILLA_CIERRA         | 2      |
| )                      | RPAREN                 | 2      |
| ;                      | SEMICOLON              | 2      |
| }                      | RBRACE                 | 3      |
| while                  | WHILE                  | 3      |
| (                      | LPAREN                 | 3      |
| 0                      | CERO                   | 3      |
| )                      | RPAREN                 | 3      |
| ;                      | SEMICOLON              | 3      |
+------------------------+------------------------+--------+

[ARBOL DE ANALISIS SINTACTICO]

(programa (instrucciones (instruccion (bucle do { (sentencia (salida puts ( (cadena " (...) ") ) ;)) } while ( (condicion 0) ) ;))) <EOF>)

[RESULTADO] ENTRADA VALIDA: la cadena pertenece al lenguaje.

[CODIGO JAVASCRIPT GENERADO]

do {
  console.log("hola mundo");
} while (false);

[EJECUCION]

hola mundo
```

---

## Salida para ejemplo inválido (`ejemplo3_invalido.txt`)

```
[ERRORES SINTACTICOS]
  Linea 3:0 - no viable alternative at input 'puts("falta punto y coma")}'

[RESULTADO] ENTRADA INVALIDA: errores sintacticos encontrados.
```

---

## Estructura del repositorio

```
53453/
├── .vscode/
│   └── launch.json              ← Configuraciones de ejecución VS Code
├── analizador/                  ← Proyecto Node.js (analizador)
│   ├── SublenguajeCLexer.g4     ← Gramática ANTLR4 del lexer (con modos)
│   ├── SublenguajeCParser.g4    ← Gramática ANTLR4 del parser
│   ├── CustomVisitor.js         ← Visitor: intérprete / generador de código JS
│   ├── index.js                 ← Programa principal
│   ├── input.txt                ← Entrada por defecto (si no se pasa argumento)
│   ├── package.json
│   ├── antlr-4.9.3-complete.jar ← Herramienta ANTLR (para regenerar)
│   └── generated/               ← Archivos generados automáticamente por ANTLR
│       ├── SublenguajeCLexer.js
│       ├── SublenguajeCParser.js
│       ├── SublenguajeCParserListener.js
│       └── SublenguajeCParserVisitor.js
├── gramatica.txt                ← Gramática asignada en notación ANSI-C
├── ejemplo1_valido.txt          ← Entrada válida 1
├── ejemplo2_valido.txt          ← Entrada válida 2
├── ejemplo3_invalido.txt        ← Entrada inválida 1 (error sintáctico)
└── ejemplo4_invalido.txt        ← Entrada inválida 2 (error léxico)
```

---

## Gramática del lenguaje

El analizador reconoce el siguiente sublenguaje de C:

```
programa     → instrucciones
instrucciones → instruccion | instrucciones instruccion
instruccion  → bucle
bucle        → "do" "{" sentencia "}" "while" "(" condicion ")" ";"
sentencia    → salida | salida sentencia | terminar
salida       → "puts" "(" cadena ")" ";"
terminar     → "break" ";"
condicion    → "0" | "1"
cadena       → '"' caracteres '"'
caracteres   → caracter | caracteres caracter
caracter     → letra | digito | simbolo
letra        → [a-z] | [A-Z]
digito       → [0-9]
simbolo      → '.' | '#' | '!' | '?' | ':' | ';' | ' '
```

---

## Regenerar archivos ANTLR (solo si se modifica la gramática)

```bash
cd analizador
npm run generate
```

> Requiere Java 1.8+. El jar `antlr-4.9.3-complete.jar` ya está incluido.
