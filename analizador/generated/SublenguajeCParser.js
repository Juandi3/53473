// Generated from SublenguajeCParser.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import SublenguajeCParserListener from './SublenguajeCParserListener.js';
import SublenguajeCParserVisitor from './SublenguajeCParserVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0013Y\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0007\u0003!\n\u0003\f\u0003\u000e\u0003$\u000b",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005",
    "\u00067\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0005\tD",
    "\n\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0007\u000bO\n\u000b\f\u000b\u000e\u000bR\u000b",
    "\u000b\u0003\f\u0003\f\u0003\f\u0005\fW\n\f\u0003\f\u0002\u0004\u0004",
    "\u0014\r\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0002",
    "\u0002\u0002T\u0002\u0018\u0003\u0002\u0002\u0002\u0004\u001b\u0003",
    "\u0002\u0002\u0002\u0006%\u0003\u0002\u0002\u0002\b\'\u0003\u0002\u0002",
    "\u0002\n6\u0003\u0002\u0002\u0002\f8\u0003\u0002\u0002\u0002\u000e>",
    "\u0003\u0002\u0002\u0002\u0010C\u0003\u0002\u0002\u0002\u0012E\u0003",
    "\u0002\u0002\u0002\u0014I\u0003\u0002\u0002\u0002\u0016V\u0003\u0002",
    "\u0002\u0002\u0018\u0019\u0005\u0004\u0003\u0002\u0019\u001a\u0007\u0002",
    "\u0002\u0003\u001a\u0003\u0003\u0002\u0002\u0002\u001b\u001c\b\u0003",
    "\u0001\u0002\u001c\u001d\u0005\u0006\u0004\u0002\u001d\"\u0003\u0002",
    "\u0002\u0002\u001e\u001f\f\u0003\u0002\u0002\u001f!\u0005\u0006\u0004",
    "\u0002 \u001e\u0003\u0002\u0002\u0002!$\u0003\u0002\u0002\u0002\" \u0003",
    "\u0002\u0002\u0002\"#\u0003\u0002\u0002\u0002#\u0005\u0003\u0002\u0002",
    "\u0002$\"\u0003\u0002\u0002\u0002%&\u0005\b\u0005\u0002&\u0007\u0003",
    "\u0002\u0002\u0002\'(\u0007\u0003\u0002\u0002()\u0007\t\u0002\u0002",
    ")*\u0005\n\u0006\u0002*+\u0007\n\u0002\u0002+,\u0007\u0004\u0002\u0002",
    ",-\u0007\u0007\u0002\u0002-.\u0005\u0010\t\u0002./\u0007\b\u0002\u0002",
    "/0\u0007\u000b\u0002\u00020\t\u0003\u0002\u0002\u000212\u0005\f\u0007",
    "\u000223\u0005\n\u0006\u000237\u0003\u0002\u0002\u000247\u0005\f\u0007",
    "\u000257\u0005\u000e\b\u000261\u0003\u0002\u0002\u000264\u0003\u0002",
    "\u0002\u000265\u0003\u0002\u0002\u00027\u000b\u0003\u0002\u0002\u0002",
    "89\u0007\u0005\u0002\u00029:\u0007\u0007\u0002\u0002:;\u0005\u0012\n",
    "\u0002;<\u0007\b\u0002\u0002<=\u0007\u000b\u0002\u0002=\r\u0003\u0002",
    "\u0002\u0002>?\u0007\u0006\u0002\u0002?@\u0007\u000b\u0002\u0002@\u000f",
    "\u0003\u0002\u0002\u0002AD\u0007\f\u0002\u0002BD\u0007\r\u0002\u0002",
    "CA\u0003\u0002\u0002\u0002CB\u0003\u0002\u0002\u0002D\u0011\u0003\u0002",
    "\u0002\u0002EF\u0007\u000e\u0002\u0002FG\u0005\u0014\u000b\u0002GH\u0007",
    "\u0010\u0002\u0002H\u0013\u0003\u0002\u0002\u0002IJ\b\u000b\u0001\u0002",
    "JK\u0005\u0016\f\u0002KP\u0003\u0002\u0002\u0002LM\f\u0003\u0002\u0002",
    "MO\u0005\u0016\f\u0002NL\u0003\u0002\u0002\u0002OR\u0003\u0002\u0002",
    "\u0002PN\u0003\u0002\u0002\u0002PQ\u0003\u0002\u0002\u0002Q\u0015\u0003",
    "\u0002\u0002\u0002RP\u0003\u0002\u0002\u0002SW\u0007\u0011\u0002\u0002",
    "TW\u0007\u0012\u0002\u0002UW\u0007\u0013\u0002\u0002VS\u0003\u0002\u0002",
    "\u0002VT\u0003\u0002\u0002\u0002VU\u0003\u0002\u0002\u0002W\u0017\u0003",
    "\u0002\u0002\u0002\u0007\"6CPV"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class SublenguajeCParser extends antlr4.Parser {

    static grammarFileName = "SublenguajeCParser.g4";
    static literalNames = [ null, "'do'", "'while'", "'puts'", "'break'", 
                            "'('", "')'", "'{'", "'}'", "';'", "'0'", "'1'" ];
    static symbolicNames = [ null, "DO", "WHILE", "PUTS", "BREAK", "LPAREN", 
                             "RPAREN", "LBRACE", "RBRACE", "SEMICOLON", 
                             "CERO", "UNO", "COMILLA_ABRE", "WS", "COMILLA_CIERRA", 
                             "LETRA", "DIGITO_STR", "SIMBOLO" ];
    static ruleNames = [ "programa", "instrucciones", "instruccion", "bucle", 
                         "sentencia", "salida", "terminar", "condicion", 
                         "cadena", "caracteres", "caracter" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SublenguajeCParser.ruleNames;
        this.literalNames = SublenguajeCParser.literalNames;
        this.symbolicNames = SublenguajeCParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.instrucciones_sempred(localctx, predIndex);
    	case 9:
    	    		return this.caracteres_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    instrucciones_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    caracteres_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SublenguajeCParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.instrucciones(0);
	        this.state = 23;
	        this.match(SublenguajeCParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	instrucciones(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new InstruccionesContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, SublenguajeCParser.RULE_instrucciones, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new UnaInstruccionContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 26;
	        this.instruccion();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 32;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new VariasInstruccionesContext(this, new InstruccionesContext(this, _parentctx, _parentState));
	                this.pushNewRecursionContext(localctx, _startState, SublenguajeCParser.RULE_instrucciones);
	                this.state = 28;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 29;
	                this.instruccion(); 
	            }
	            this.state = 34;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SublenguajeCParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.bucle();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bucle() {
	    let localctx = new BucleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SublenguajeCParser.RULE_bucle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(SublenguajeCParser.DO);
	        this.state = 38;
	        this.match(SublenguajeCParser.LBRACE);
	        this.state = 39;
	        this.sentencia();
	        this.state = 40;
	        this.match(SublenguajeCParser.RBRACE);
	        this.state = 41;
	        this.match(SublenguajeCParser.WHILE);
	        this.state = 42;
	        this.match(SublenguajeCParser.LPAREN);
	        this.state = 43;
	        this.condicion();
	        this.state = 44;
	        this.match(SublenguajeCParser.RPAREN);
	        this.state = 45;
	        this.match(SublenguajeCParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SublenguajeCParser.RULE_sentencia);
	    try {
	        this.state = 52;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new SentenciaContinuaContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 47;
	            this.salida();
	            this.state = 48;
	            this.sentencia();
	            break;

	        case 2:
	            localctx = new SentenciaSolaContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 50;
	            this.salida();
	            break;

	        case 3:
	            localctx = new SentenciaBreakContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 51;
	            this.terminar();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SublenguajeCParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(SublenguajeCParser.PUTS);
	        this.state = 55;
	        this.match(SublenguajeCParser.LPAREN);
	        this.state = 56;
	        this.cadena();
	        this.state = 57;
	        this.match(SublenguajeCParser.RPAREN);
	        this.state = 58;
	        this.match(SublenguajeCParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SublenguajeCParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.match(SublenguajeCParser.BREAK);
	        this.state = 61;
	        this.match(SublenguajeCParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SublenguajeCParser.RULE_condicion);
	    try {
	        this.state = 65;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SublenguajeCParser.CERO:
	            localctx = new CondFalsaContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 63;
	            this.match(SublenguajeCParser.CERO);
	            break;
	        case SublenguajeCParser.UNO:
	            localctx = new CondVerdaderaContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 64;
	            this.match(SublenguajeCParser.UNO);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, SublenguajeCParser.RULE_cadena);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(SublenguajeCParser.COMILLA_ABRE);
	        this.state = 68;
	        this.caracteres(0);
	        this.state = 69;
	        this.match(SublenguajeCParser.COMILLA_CIERRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	caracteres(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new CaracteresContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 18;
	    this.enterRecursionRule(localctx, 18, SublenguajeCParser.RULE_caracteres, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new UnCaracterContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 72;
	        this.caracter();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 78;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new MasCaracteresContext(this, new CaracteresContext(this, _parentctx, _parentState));
	                this.pushNewRecursionContext(localctx, _startState, SublenguajeCParser.RULE_caracteres);
	                this.state = 74;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 75;
	                this.caracter(); 
	            }
	            this.state = 80;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	caracter() {
	    let localctx = new CaracterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, SublenguajeCParser.RULE_caracter);
	    try {
	        this.state = 84;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SublenguajeCParser.LETRA:
	            localctx = new CharLetraContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 81;
	            this.match(SublenguajeCParser.LETRA);
	            break;
	        case SublenguajeCParser.DIGITO_STR:
	            localctx = new CharDigitoContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 82;
	            this.match(SublenguajeCParser.DIGITO_STR);
	            break;
	        case SublenguajeCParser.SIMBOLO:
	            localctx = new CharSimboloContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 83;
	            this.match(SublenguajeCParser.SIMBOLO);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

SublenguajeCParser.EOF = antlr4.Token.EOF;
SublenguajeCParser.DO = 1;
SublenguajeCParser.WHILE = 2;
SublenguajeCParser.PUTS = 3;
SublenguajeCParser.BREAK = 4;
SublenguajeCParser.LPAREN = 5;
SublenguajeCParser.RPAREN = 6;
SublenguajeCParser.LBRACE = 7;
SublenguajeCParser.RBRACE = 8;
SublenguajeCParser.SEMICOLON = 9;
SublenguajeCParser.CERO = 10;
SublenguajeCParser.UNO = 11;
SublenguajeCParser.COMILLA_ABRE = 12;
SublenguajeCParser.WS = 13;
SublenguajeCParser.COMILLA_CIERRA = 14;
SublenguajeCParser.LETRA = 15;
SublenguajeCParser.DIGITO_STR = 16;
SublenguajeCParser.SIMBOLO = 17;

SublenguajeCParser.RULE_programa = 0;
SublenguajeCParser.RULE_instrucciones = 1;
SublenguajeCParser.RULE_instruccion = 2;
SublenguajeCParser.RULE_bucle = 3;
SublenguajeCParser.RULE_sentencia = 4;
SublenguajeCParser.RULE_salida = 5;
SublenguajeCParser.RULE_terminar = 6;
SublenguajeCParser.RULE_condicion = 7;
SublenguajeCParser.RULE_cadena = 8;
SublenguajeCParser.RULE_caracteres = 9;
SublenguajeCParser.RULE_caracter = 10;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SublenguajeCParser.RULE_programa;
    }

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	EOF() {
	    return this.getToken(SublenguajeCParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SublenguajeCParserListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SublenguajeCParserListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SublenguajeCParserVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SublenguajeCParser.RULE_instrucciones;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class UnaInstruccionContext extends InstruccionesContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	instruccion() {
	    return this.getTypedRuleContext(InstruccionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SublenguajeCParserListener ) {
	        listener.enterUnaInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SublenguajeCParserListener ) {
	        listener.exitUnaInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SublenguajeCParserVisitor ) {
	        return visitor.visitUnaInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SublenguajeCParser.UnaInstruccionContext = UnaInstruccionContext;

class VariasInstruccionesContext extends InstruccionesContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	instruccion() {
	    return this.getTypedRuleContext(InstruccionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SublenguajeCParserListener ) {
	        listener.enterVariasInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SublenguajeCParserListener ) {
	        listener.exitVariasInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SublenguajeCParserVisitor ) {
	        return visitor.visitVariasInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SublenguajeCParser.VariasInstruccionesContext = VariasInstruccionesContext;

class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SublenguajeCParser.RULE_instruccion;
    }

	bucle() {
	    return this.getTypedRuleContext(BucleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SublenguajeCParserListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SublenguajeCParserListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SublenguajeCParserVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BucleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SublenguajeCParser.RULE_bucle;
    }

	DO() {
	    return this.getToken(SublenguajeCParser.DO, 0);
	};

	LBRACE() {
	    return this.getToken(SublenguajeCParser.LBRACE, 0);
	};

	sentencia() {
	    return this.getTypedRuleContext(SentenciaContext,0);
	};

	RBRACE() {
	    return this.getToken(SublenguajeCParser.RBRACE, 0);
	};

	WHILE() {
	    return this.getToken(SublenguajeCParser.WHILE, 0);
	};

	LPAREN() {
	    return this.getToken(SublenguajeCParser.LPAREN, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	RPAREN() {
	    return this.getToken(SublenguajeCParser.RPAREN, 0);
	};

	SEMICOLON() {
	    return this.getToken(SublenguajeCParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SublenguajeCParserListener ) {
	        listener.enterBucle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SublenguajeCParserListener ) {
	        listener.exitBucle(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SublenguajeCParserVisitor ) {
	        return visitor.visitBucle(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SublenguajeCParser.RULE_sentencia;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class SentenciaSolaContext extends SentenciaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SublenguajeCParserListener ) {
	        listener.enterSentenciaSola(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SublenguajeCParserListener ) {
	        listener.exitSentenciaSola(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SublenguajeCParserVisitor ) {
	        return visitor.visitSentenciaSola(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SublenguajeCParser.SentenciaSolaContext = SentenciaSolaContext;

class SentenciaContinuaContext extends SentenciaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	sentencia() {
	    return this.getTypedRuleContext(SentenciaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SublenguajeCParserListener ) {
	        listener.enterSentenciaContinua(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SublenguajeCParserListener ) {
	        listener.exitSentenciaContinua(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SublenguajeCParserVisitor ) {
	        return visitor.visitSentenciaContinua(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SublenguajeCParser.SentenciaContinuaContext = SentenciaContinuaContext;

class SentenciaBreakContext extends SentenciaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SublenguajeCParserListener ) {
	        listener.enterSentenciaBreak(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SublenguajeCParserListener ) {
	        listener.exitSentenciaBreak(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SublenguajeCParserVisitor ) {
	        return visitor.visitSentenciaBreak(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SublenguajeCParser.SentenciaBreakContext = SentenciaBreakContext;

class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SublenguajeCParser.RULE_salida;
    }

	PUTS() {
	    return this.getToken(SublenguajeCParser.PUTS, 0);
	};

	LPAREN() {
	    return this.getToken(SublenguajeCParser.LPAREN, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	RPAREN() {
	    return this.getToken(SublenguajeCParser.RPAREN, 0);
	};

	SEMICOLON() {
	    return this.getToken(SublenguajeCParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SublenguajeCParserListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SublenguajeCParserListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SublenguajeCParserVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SublenguajeCParser.RULE_terminar;
    }

	BREAK() {
	    return this.getToken(SublenguajeCParser.BREAK, 0);
	};

	SEMICOLON() {
	    return this.getToken(SublenguajeCParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SublenguajeCParserListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SublenguajeCParserListener ) {
	        listener.exitTerminar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SublenguajeCParserVisitor ) {
	        return visitor.visitTerminar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SublenguajeCParser.RULE_condicion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class CondVerdaderaContext extends CondicionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	UNO() {
	    return this.getToken(SublenguajeCParser.UNO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SublenguajeCParserListener ) {
	        listener.enterCondVerdadera(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SublenguajeCParserListener ) {
	        listener.exitCondVerdadera(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SublenguajeCParserVisitor ) {
	        return visitor.visitCondVerdadera(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SublenguajeCParser.CondVerdaderaContext = CondVerdaderaContext;

class CondFalsaContext extends CondicionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	CERO() {
	    return this.getToken(SublenguajeCParser.CERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SublenguajeCParserListener ) {
	        listener.enterCondFalsa(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SublenguajeCParserListener ) {
	        listener.exitCondFalsa(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SublenguajeCParserVisitor ) {
	        return visitor.visitCondFalsa(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SublenguajeCParser.CondFalsaContext = CondFalsaContext;

class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SublenguajeCParser.RULE_cadena;
    }

	COMILLA_ABRE() {
	    return this.getToken(SublenguajeCParser.COMILLA_ABRE, 0);
	};

	caracteres() {
	    return this.getTypedRuleContext(CaracteresContext,0);
	};

	COMILLA_CIERRA() {
	    return this.getToken(SublenguajeCParser.COMILLA_CIERRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SublenguajeCParserListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SublenguajeCParserListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SublenguajeCParserVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaracteresContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SublenguajeCParser.RULE_caracteres;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class UnCaracterContext extends CaracteresContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	caracter() {
	    return this.getTypedRuleContext(CaracterContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SublenguajeCParserListener ) {
	        listener.enterUnCaracter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SublenguajeCParserListener ) {
	        listener.exitUnCaracter(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SublenguajeCParserVisitor ) {
	        return visitor.visitUnCaracter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SublenguajeCParser.UnCaracterContext = UnCaracterContext;

class MasCaracteresContext extends CaracteresContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	caracteres() {
	    return this.getTypedRuleContext(CaracteresContext,0);
	};

	caracter() {
	    return this.getTypedRuleContext(CaracterContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SublenguajeCParserListener ) {
	        listener.enterMasCaracteres(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SublenguajeCParserListener ) {
	        listener.exitMasCaracteres(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SublenguajeCParserVisitor ) {
	        return visitor.visitMasCaracteres(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SublenguajeCParser.MasCaracteresContext = MasCaracteresContext;

class CaracterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SublenguajeCParser.RULE_caracter;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class CharLetraContext extends CaracterContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LETRA() {
	    return this.getToken(SublenguajeCParser.LETRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SublenguajeCParserListener ) {
	        listener.enterCharLetra(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SublenguajeCParserListener ) {
	        listener.exitCharLetra(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SublenguajeCParserVisitor ) {
	        return visitor.visitCharLetra(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SublenguajeCParser.CharLetraContext = CharLetraContext;

class CharDigitoContext extends CaracterContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DIGITO_STR() {
	    return this.getToken(SublenguajeCParser.DIGITO_STR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SublenguajeCParserListener ) {
	        listener.enterCharDigito(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SublenguajeCParserListener ) {
	        listener.exitCharDigito(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SublenguajeCParserVisitor ) {
	        return visitor.visitCharDigito(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SublenguajeCParser.CharDigitoContext = CharDigitoContext;

class CharSimboloContext extends CaracterContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SIMBOLO() {
	    return this.getToken(SublenguajeCParser.SIMBOLO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SublenguajeCParserListener ) {
	        listener.enterCharSimbolo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SublenguajeCParserListener ) {
	        listener.exitCharSimbolo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SublenguajeCParserVisitor ) {
	        return visitor.visitCharSimbolo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SublenguajeCParser.CharSimboloContext = CharSimboloContext;


SublenguajeCParser.ProgramaContext = ProgramaContext; 
SublenguajeCParser.InstruccionesContext = InstruccionesContext; 
SublenguajeCParser.InstruccionContext = InstruccionContext; 
SublenguajeCParser.BucleContext = BucleContext; 
SublenguajeCParser.SentenciaContext = SentenciaContext; 
SublenguajeCParser.SalidaContext = SalidaContext; 
SublenguajeCParser.TerminarContext = TerminarContext; 
SublenguajeCParser.CondicionContext = CondicionContext; 
SublenguajeCParser.CadenaContext = CadenaContext; 
SublenguajeCParser.CaracteresContext = CaracteresContext; 
SublenguajeCParser.CaracterContext = CaracterContext; 
