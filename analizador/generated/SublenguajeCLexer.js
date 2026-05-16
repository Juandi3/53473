// Generated from SublenguajeCLexer.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u0013]\b\u0001\b\u0001\u0004\u0002\t\u0002\u0004\u0003",
    "\t\u0003\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006",
    "\u0004\u0007\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b",
    "\t\u000b\u0004\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f",
    "\u0004\u0010\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b",
    "\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0006\u000eN",
    "\n\u000e\r\u000e\u000e\u000eO\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003",
    "\u0011\u0003\u0012\u0003\u0012\u0002\u0002\u0013\u0004\u0003\u0006\u0004",
    "\b\u0005\n\u0006\f\u0007\u000e\b\u0010\t\u0012\n\u0014\u000b\u0016\f",
    "\u0018\r\u001a\u000e\u001c\u000f\u001e\u0010 \u0011\"\u0012$\u0013\u0004",
    "\u0002\u0003\u0006\u0005\u0002\u000b\f\u000f\u000f\"\"\u0004\u0002C",
    "\\c|\u0003\u00022;\u0007\u0002\"#%%00<=AA\u0002\\\u0002\u0004\u0003",
    "\u0002\u0002\u0002\u0002\u0006\u0003\u0002\u0002\u0002\u0002\b\u0003",
    "\u0002\u0002\u0002\u0002\n\u0003\u0002\u0002\u0002\u0002\f\u0003\u0002",
    "\u0002\u0002\u0002\u000e\u0003\u0002\u0002\u0002\u0002\u0010\u0003\u0002",
    "\u0002\u0002\u0002\u0012\u0003\u0002\u0002\u0002\u0002\u0014\u0003\u0002",
    "\u0002\u0002\u0002\u0016\u0003\u0002\u0002\u0002\u0002\u0018\u0003\u0002",
    "\u0002\u0002\u0002\u001a\u0003\u0002\u0002\u0002\u0002\u001c\u0003\u0002",
    "\u0002\u0002\u0003\u001e\u0003\u0002\u0002\u0002\u0003 \u0003\u0002",
    "\u0002\u0002\u0003\"\u0003\u0002\u0002\u0002\u0003$\u0003\u0002\u0002",
    "\u0002\u0004&\u0003\u0002\u0002\u0002\u0006)\u0003\u0002\u0002\u0002",
    "\b/\u0003\u0002\u0002\u0002\n4\u0003\u0002\u0002\u0002\f:\u0003\u0002",
    "\u0002\u0002\u000e<\u0003\u0002\u0002\u0002\u0010>\u0003\u0002\u0002",
    "\u0002\u0012@\u0003\u0002\u0002\u0002\u0014B\u0003\u0002\u0002\u0002",
    "\u0016D\u0003\u0002\u0002\u0002\u0018F\u0003\u0002\u0002\u0002\u001a",
    "H\u0003\u0002\u0002\u0002\u001cM\u0003\u0002\u0002\u0002\u001eS\u0003",
    "\u0002\u0002\u0002 W\u0003\u0002\u0002\u0002\"Y\u0003\u0002\u0002\u0002",
    "$[\u0003\u0002\u0002\u0002&\'\u0007f\u0002\u0002\'(\u0007q\u0002\u0002",
    "(\u0005\u0003\u0002\u0002\u0002)*\u0007y\u0002\u0002*+\u0007j\u0002",
    "\u0002+,\u0007k\u0002\u0002,-\u0007n\u0002\u0002-.\u0007g\u0002\u0002",
    ".\u0007\u0003\u0002\u0002\u0002/0\u0007r\u0002\u000201\u0007w\u0002",
    "\u000212\u0007v\u0002\u000223\u0007u\u0002\u00023\t\u0003\u0002\u0002",
    "\u000245\u0007d\u0002\u000256\u0007t\u0002\u000267\u0007g\u0002\u0002",
    "78\u0007c\u0002\u000289\u0007m\u0002\u00029\u000b\u0003\u0002\u0002",
    "\u0002:;\u0007*\u0002\u0002;\r\u0003\u0002\u0002\u0002<=\u0007+\u0002",
    "\u0002=\u000f\u0003\u0002\u0002\u0002>?\u0007}\u0002\u0002?\u0011\u0003",
    "\u0002\u0002\u0002@A\u0007\u007f\u0002\u0002A\u0013\u0003\u0002\u0002",
    "\u0002BC\u0007=\u0002\u0002C\u0015\u0003\u0002\u0002\u0002DE\u00072",
    "\u0002\u0002E\u0017\u0003\u0002\u0002\u0002FG\u00073\u0002\u0002G\u0019",
    "\u0003\u0002\u0002\u0002HI\u0007$\u0002\u0002IJ\u0003\u0002\u0002\u0002",
    "JK\b\r\u0002\u0002K\u001b\u0003\u0002\u0002\u0002LN\t\u0002\u0002\u0002",
    "ML\u0003\u0002\u0002\u0002NO\u0003\u0002\u0002\u0002OM\u0003\u0002\u0002",
    "\u0002OP\u0003\u0002\u0002\u0002PQ\u0003\u0002\u0002\u0002QR\b\u000e",
    "\u0003\u0002R\u001d\u0003\u0002\u0002\u0002ST\u0007$\u0002\u0002TU\u0003",
    "\u0002\u0002\u0002UV\b\u000f\u0004\u0002V\u001f\u0003\u0002\u0002\u0002",
    "WX\t\u0003\u0002\u0002X!\u0003\u0002\u0002\u0002YZ\t\u0004\u0002\u0002",
    "Z#\u0003\u0002\u0002\u0002[\\\t\u0005\u0002\u0002\\%\u0003\u0002\u0002",
    "\u0002\u0005\u0002\u0003O\u0005\u0007\u0003\u0002\b\u0002\u0002\u0006",
    "\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class SublenguajeCLexer extends antlr4.Lexer {

    static grammarFileName = "SublenguajeCLexer.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE", "MODO_CADENA" ];
	static literalNames = [ null, "'do'", "'while'", "'puts'", "'break'", "'('", 
                         "')'", "'{'", "'}'", "';'", "'0'", "'1'" ];
	static symbolicNames = [ null, "DO", "WHILE", "PUTS", "BREAK", "LPAREN", 
                          "RPAREN", "LBRACE", "RBRACE", "SEMICOLON", "CERO", 
                          "UNO", "COMILLA_ABRE", "WS", "COMILLA_CIERRA", 
                          "LETRA", "DIGITO_STR", "SIMBOLO" ];
	static ruleNames = [ "DO", "WHILE", "PUTS", "BREAK", "LPAREN", "RPAREN", 
                      "LBRACE", "RBRACE", "SEMICOLON", "CERO", "UNO", "COMILLA_ABRE", 
                      "WS", "COMILLA_CIERRA", "LETRA", "DIGITO_STR", "SIMBOLO" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

SublenguajeCLexer.EOF = antlr4.Token.EOF;
SublenguajeCLexer.DO = 1;
SublenguajeCLexer.WHILE = 2;
SublenguajeCLexer.PUTS = 3;
SublenguajeCLexer.BREAK = 4;
SublenguajeCLexer.LPAREN = 5;
SublenguajeCLexer.RPAREN = 6;
SublenguajeCLexer.LBRACE = 7;
SublenguajeCLexer.RBRACE = 8;
SublenguajeCLexer.SEMICOLON = 9;
SublenguajeCLexer.CERO = 10;
SublenguajeCLexer.UNO = 11;
SublenguajeCLexer.COMILLA_ABRE = 12;
SublenguajeCLexer.WS = 13;
SublenguajeCLexer.COMILLA_CIERRA = 14;
SublenguajeCLexer.LETRA = 15;
SublenguajeCLexer.DIGITO_STR = 16;
SublenguajeCLexer.SIMBOLO = 17;

SublenguajeCLexer.MODO_CADENA = 1;




