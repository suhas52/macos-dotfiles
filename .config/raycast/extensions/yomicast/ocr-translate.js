"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/p-try/index.js
var require_p_try = __commonJS({
  "node_modules/p-try/index.js"(exports2, module2) {
    "use strict";
    var pTry = (fn, ...arguments_) => new Promise((resolve) => {
      resolve(fn(...arguments_));
    });
    module2.exports = pTry;
    module2.exports.default = pTry;
  }
});

// node_modules/read-pkg-up/node_modules/p-limit/index.js
var require_p_limit = __commonJS({
  "node_modules/read-pkg-up/node_modules/p-limit/index.js"(exports2, module2) {
    "use strict";
    var pTry = require_p_try();
    var pLimit = (concurrency) => {
      if (!((Number.isInteger(concurrency) || concurrency === Infinity) && concurrency > 0)) {
        return Promise.reject(new TypeError("Expected `concurrency` to be a number from 1 and up"));
      }
      const queue = [];
      let activeCount = 0;
      const next = () => {
        activeCount--;
        if (queue.length > 0) {
          queue.shift()();
        }
      };
      const run = (fn, resolve, ...args) => {
        activeCount++;
        const result = pTry(fn, ...args);
        resolve(result);
        result.then(next, next);
      };
      const enqueue = (fn, resolve, ...args) => {
        if (activeCount < concurrency) {
          run(fn, resolve, ...args);
        } else {
          queue.push(run.bind(null, fn, resolve, ...args));
        }
      };
      const generator = (fn, ...args) => new Promise((resolve) => enqueue(fn, resolve, ...args));
      Object.defineProperties(generator, {
        activeCount: {
          get: () => activeCount
        },
        pendingCount: {
          get: () => queue.length
        },
        clearQueue: {
          value: () => {
            queue.length = 0;
          }
        }
      });
      return generator;
    };
    module2.exports = pLimit;
    module2.exports.default = pLimit;
  }
});

// node_modules/read-pkg-up/node_modules/p-locate/index.js
var require_p_locate = __commonJS({
  "node_modules/read-pkg-up/node_modules/p-locate/index.js"(exports2, module2) {
    "use strict";
    var pLimit = require_p_limit();
    var EndError = class extends Error {
      constructor(value) {
        super();
        this.value = value;
      }
    };
    var testElement = async (element, tester) => tester(await element);
    var finder = async (element) => {
      const values = await Promise.all(element);
      if (values[1] === true) {
        throw new EndError(values[0]);
      }
      return false;
    };
    var pLocate = async (iterable, tester, options) => {
      options = {
        concurrency: Infinity,
        preserveOrder: true,
        ...options
      };
      const limit = pLimit(options.concurrency);
      const items = [...iterable].map((element) => [element, limit(testElement, element, tester)]);
      const checkLimit = pLimit(options.preserveOrder ? 1 : Infinity);
      try {
        await Promise.all(items.map((element) => checkLimit(finder, element)));
      } catch (error) {
        if (error instanceof EndError) {
          return error.value;
        }
        throw error;
      }
    };
    module2.exports = pLocate;
    module2.exports.default = pLocate;
  }
});

// node_modules/read-pkg-up/node_modules/locate-path/index.js
var require_locate_path = __commonJS({
  "node_modules/read-pkg-up/node_modules/locate-path/index.js"(exports2, module2) {
    "use strict";
    var path = require("path");
    var fs = require("fs");
    var { promisify } = require("util");
    var pLocate = require_p_locate();
    var fsStat = promisify(fs.stat);
    var fsLStat = promisify(fs.lstat);
    var typeMappings = {
      directory: "isDirectory",
      file: "isFile"
    };
    function checkType({ type }) {
      if (type in typeMappings) {
        return;
      }
      throw new Error(`Invalid type specified: ${type}`);
    }
    var matchType = (type, stat) => type === void 0 || stat[typeMappings[type]]();
    module2.exports = async (paths, options) => {
      options = {
        cwd: process.cwd(),
        type: "file",
        allowSymlinks: true,
        ...options
      };
      checkType(options);
      const statFn = options.allowSymlinks ? fsStat : fsLStat;
      return pLocate(paths, async (path_) => {
        try {
          const stat = await statFn(path.resolve(options.cwd, path_));
          return matchType(options.type, stat);
        } catch (_) {
          return false;
        }
      }, options);
    };
    module2.exports.sync = (paths, options) => {
      options = {
        cwd: process.cwd(),
        allowSymlinks: true,
        type: "file",
        ...options
      };
      checkType(options);
      const statFn = options.allowSymlinks ? fs.statSync : fs.lstatSync;
      for (const path_ of paths) {
        try {
          const stat = statFn(path.resolve(options.cwd, path_));
          if (matchType(options.type, stat)) {
            return path_;
          }
        } catch (_) {
        }
      }
    };
  }
});

// node_modules/path-exists/index.js
var require_path_exists = __commonJS({
  "node_modules/path-exists/index.js"(exports2, module2) {
    "use strict";
    var fs = require("fs");
    var { promisify } = require("util");
    var pAccess = promisify(fs.access);
    module2.exports = async (path) => {
      try {
        await pAccess(path);
        return true;
      } catch (_) {
        return false;
      }
    };
    module2.exports.sync = (path) => {
      try {
        fs.accessSync(path);
        return true;
      } catch (_) {
        return false;
      }
    };
  }
});

// node_modules/read-pkg-up/node_modules/find-up/index.js
var require_find_up = __commonJS({
  "node_modules/read-pkg-up/node_modules/find-up/index.js"(exports2, module2) {
    "use strict";
    var path = require("path");
    var locatePath = require_locate_path();
    var pathExists = require_path_exists();
    var stop = Symbol("findUp.stop");
    module2.exports = async (name, options = {}) => {
      let directory = path.resolve(options.cwd || "");
      const { root } = path.parse(directory);
      const paths = [].concat(name);
      const runMatcher = async (locateOptions) => {
        if (typeof name !== "function") {
          return locatePath(paths, locateOptions);
        }
        const foundPath = await name(locateOptions.cwd);
        if (typeof foundPath === "string") {
          return locatePath([foundPath], locateOptions);
        }
        return foundPath;
      };
      while (true) {
        const foundPath = await runMatcher({ ...options, cwd: directory });
        if (foundPath === stop) {
          return;
        }
        if (foundPath) {
          return path.resolve(directory, foundPath);
        }
        if (directory === root) {
          return;
        }
        directory = path.dirname(directory);
      }
    };
    module2.exports.sync = (name, options = {}) => {
      let directory = path.resolve(options.cwd || "");
      const { root } = path.parse(directory);
      const paths = [].concat(name);
      const runMatcher = (locateOptions) => {
        if (typeof name !== "function") {
          return locatePath.sync(paths, locateOptions);
        }
        const foundPath = name(locateOptions.cwd);
        if (typeof foundPath === "string") {
          return locatePath.sync([foundPath], locateOptions);
        }
        return foundPath;
      };
      while (true) {
        const foundPath = runMatcher({ ...options, cwd: directory });
        if (foundPath === stop) {
          return;
        }
        if (foundPath) {
          return path.resolve(directory, foundPath);
        }
        if (directory === root) {
          return;
        }
        directory = path.dirname(directory);
      }
    };
    module2.exports.exists = pathExists;
    module2.exports.sync.exists = pathExists.sync;
    module2.exports.stop = stop;
  }
});

// node_modules/is-arrayish/index.js
var require_is_arrayish = __commonJS({
  "node_modules/is-arrayish/index.js"(exports2, module2) {
    "use strict";
    module2.exports = function isArrayish(obj) {
      if (!obj) {
        return false;
      }
      return obj instanceof Array || Array.isArray(obj) || obj.length >= 0 && obj.splice instanceof Function;
    };
  }
});

// node_modules/error-ex/index.js
var require_error_ex = __commonJS({
  "node_modules/error-ex/index.js"(exports2, module2) {
    "use strict";
    var util = require("util");
    var isArrayish = require_is_arrayish();
    var errorEx = function errorEx2(name, properties) {
      if (!name || name.constructor !== String) {
        properties = name || {};
        name = Error.name;
      }
      var errorExError = function ErrorEXError(message) {
        if (!this) {
          return new ErrorEXError(message);
        }
        message = message instanceof Error ? message.message : message || this.message;
        Error.call(this, message);
        Error.captureStackTrace(this, errorExError);
        this.name = name;
        Object.defineProperty(this, "message", {
          configurable: true,
          enumerable: false,
          get: function() {
            var newMessage = message.split(/\r?\n/g);
            for (var key in properties) {
              if (!properties.hasOwnProperty(key)) {
                continue;
              }
              var modifier = properties[key];
              if ("message" in modifier) {
                newMessage = modifier.message(this[key], newMessage) || newMessage;
                if (!isArrayish(newMessage)) {
                  newMessage = [newMessage];
                }
              }
            }
            return newMessage.join("\n");
          },
          set: function(v) {
            message = v;
          }
        });
        var overwrittenStack = null;
        var stackDescriptor = Object.getOwnPropertyDescriptor(this, "stack");
        var stackGetter = stackDescriptor.get;
        var stackValue = stackDescriptor.value;
        delete stackDescriptor.value;
        delete stackDescriptor.writable;
        stackDescriptor.set = function(newstack) {
          overwrittenStack = newstack;
        };
        stackDescriptor.get = function() {
          var stack = (overwrittenStack || (stackGetter ? stackGetter.call(this) : stackValue)).split(/\r?\n+/g);
          if (!overwrittenStack) {
            stack[0] = this.name + ": " + this.message;
          }
          var lineCount = 1;
          for (var key in properties) {
            if (!properties.hasOwnProperty(key)) {
              continue;
            }
            var modifier = properties[key];
            if ("line" in modifier) {
              var line = modifier.line(this[key]);
              if (line) {
                stack.splice(lineCount++, 0, "    " + line);
              }
            }
            if ("stack" in modifier) {
              modifier.stack(this[key], stack);
            }
          }
          return stack.join("\n");
        };
        Object.defineProperty(this, "stack", stackDescriptor);
      };
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(errorExError.prototype, Error.prototype);
        Object.setPrototypeOf(errorExError, Error);
      } else {
        util.inherits(errorExError, Error);
      }
      return errorExError;
    };
    errorEx.append = function(str, def) {
      return {
        message: function(v, message) {
          v = v || def;
          if (v) {
            message[0] += " " + str.replace("%s", v.toString());
          }
          return message;
        }
      };
    };
    errorEx.line = function(str, def) {
      return {
        line: function(v) {
          v = v || def;
          if (v) {
            return str.replace("%s", v.toString());
          }
          return null;
        }
      };
    };
    module2.exports = errorEx;
  }
});

// node_modules/json-parse-even-better-errors/index.js
var require_json_parse_even_better_errors = __commonJS({
  "node_modules/json-parse-even-better-errors/index.js"(exports2, module2) {
    "use strict";
    var hexify = (char) => {
      const h = char.charCodeAt(0).toString(16).toUpperCase();
      return "0x" + (h.length % 2 ? "0" : "") + h;
    };
    var parseError = (e, txt, context) => {
      if (!txt) {
        return {
          message: e.message + " while parsing empty string",
          position: 0
        };
      }
      const badToken = e.message.match(/^Unexpected token (.) .*position\s+(\d+)/i);
      const errIdx = badToken ? +badToken[2] : e.message.match(/^Unexpected end of JSON.*/i) ? txt.length - 1 : null;
      const msg = badToken ? e.message.replace(/^Unexpected token ./, `Unexpected token ${JSON.stringify(badToken[1])} (${hexify(badToken[1])})`) : e.message;
      if (errIdx !== null && errIdx !== void 0) {
        const start = errIdx <= context ? 0 : errIdx - context;
        const end = errIdx + context >= txt.length ? txt.length : errIdx + context;
        const slice = (start === 0 ? "" : "...") + txt.slice(start, end) + (end === txt.length ? "" : "...");
        const near = txt === slice ? "" : "near ";
        return {
          message: msg + ` while parsing ${near}${JSON.stringify(slice)}`,
          position: errIdx
        };
      } else {
        return {
          message: msg + ` while parsing '${txt.slice(0, context * 2)}'`,
          position: 0
        };
      }
    };
    var JSONParseError = class extends SyntaxError {
      constructor(er, txt, context, caller) {
        context = context || 20;
        const metadata = parseError(er, txt, context);
        super(metadata.message);
        Object.assign(this, metadata);
        this.code = "EJSONPARSE";
        this.systemError = er;
        Error.captureStackTrace(this, caller || this.constructor);
      }
      get name() {
        return this.constructor.name;
      }
      set name(n) {
      }
      get [Symbol.toStringTag]() {
        return this.constructor.name;
      }
    };
    var kIndent = Symbol.for("indent");
    var kNewline = Symbol.for("newline");
    var formatRE = /^\s*[{\[]((?:\r?\n)+)([\s\t]*)/;
    var emptyRE = /^(?:\{\}|\[\])((?:\r?\n)+)?$/;
    var parseJson = (txt, reviver, context) => {
      const parseText = stripBOM(txt);
      context = context || 20;
      try {
        const [, newline = "\n", indent = "  "] = parseText.match(emptyRE) || parseText.match(formatRE) || [, "", ""];
        const result = JSON.parse(parseText, reviver);
        if (result && typeof result === "object") {
          result[kNewline] = newline;
          result[kIndent] = indent;
        }
        return result;
      } catch (e) {
        if (typeof txt !== "string" && !Buffer.isBuffer(txt)) {
          const isEmptyArray = Array.isArray(txt) && txt.length === 0;
          throw Object.assign(new TypeError(
            `Cannot parse ${isEmptyArray ? "an empty array" : String(txt)}`
          ), {
            code: "EJSONPARSE",
            systemError: e
          });
        }
        throw new JSONParseError(e, parseText, context, parseJson);
      }
    };
    var stripBOM = (txt) => String(txt).replace(/^\uFEFF/, "");
    module2.exports = parseJson;
    parseJson.JSONParseError = JSONParseError;
    parseJson.noExceptions = (txt, reviver) => {
      try {
        return JSON.parse(stripBOM(txt), reviver);
      } catch (e) {
      }
    };
  }
});

// node_modules/lines-and-columns/build/index.js
var require_build = __commonJS({
  "node_modules/lines-and-columns/build/index.js"(exports2) {
    "use strict";
    exports2.__esModule = true;
    exports2.LinesAndColumns = void 0;
    var LF = "\n";
    var CR = "\r";
    var LinesAndColumns = (
      /** @class */
      function() {
        function LinesAndColumns2(string) {
          this.string = string;
          var offsets = [0];
          for (var offset = 0; offset < string.length; ) {
            switch (string[offset]) {
              case LF:
                offset += LF.length;
                offsets.push(offset);
                break;
              case CR:
                offset += CR.length;
                if (string[offset] === LF) {
                  offset += LF.length;
                }
                offsets.push(offset);
                break;
              default:
                offset++;
                break;
            }
          }
          this.offsets = offsets;
        }
        LinesAndColumns2.prototype.locationForIndex = function(index) {
          if (index < 0 || index > this.string.length) {
            return null;
          }
          var line = 0;
          var offsets = this.offsets;
          while (offsets[line + 1] <= index) {
            line++;
          }
          var column = index - offsets[line];
          return { line, column };
        };
        LinesAndColumns2.prototype.indexForLocation = function(location) {
          var line = location.line, column = location.column;
          if (line < 0 || line >= this.offsets.length) {
            return null;
          }
          if (column < 0 || column > this.lengthOfLine(line)) {
            return null;
          }
          return this.offsets[line] + column;
        };
        LinesAndColumns2.prototype.lengthOfLine = function(line) {
          var offset = this.offsets[line];
          var nextOffset = line === this.offsets.length - 1 ? this.string.length : this.offsets[line + 1];
          return nextOffset - offset;
        };
        return LinesAndColumns2;
      }()
    );
    exports2.LinesAndColumns = LinesAndColumns;
    exports2["default"] = LinesAndColumns;
  }
});

// node_modules/picocolors/picocolors.js
var require_picocolors = __commonJS({
  "node_modules/picocolors/picocolors.js"(exports2, module2) {
    var p = process || {};
    var argv = p.argv || [];
    var env = p.env || {};
    var isColorSupported = !(!!env.NO_COLOR || argv.includes("--no-color")) && (!!env.FORCE_COLOR || argv.includes("--color") || p.platform === "win32" || (p.stdout || {}).isTTY && env.TERM !== "dumb" || !!env.CI);
    var formatter = (open, close, replace = open) => (input) => {
      let string = "" + input, index = string.indexOf(close, open.length);
      return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
    };
    var replaceClose = (string, close, replace, index) => {
      let result = "", cursor = 0;
      do {
        result += string.substring(cursor, index) + replace;
        cursor = index + close.length;
        index = string.indexOf(close, cursor);
      } while (~index);
      return result + string.substring(cursor);
    };
    var createColors = (enabled = isColorSupported) => {
      let f = enabled ? formatter : () => String;
      return {
        isColorSupported: enabled,
        reset: f("\x1B[0m", "\x1B[0m"),
        bold: f("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m"),
        dim: f("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"),
        italic: f("\x1B[3m", "\x1B[23m"),
        underline: f("\x1B[4m", "\x1B[24m"),
        inverse: f("\x1B[7m", "\x1B[27m"),
        hidden: f("\x1B[8m", "\x1B[28m"),
        strikethrough: f("\x1B[9m", "\x1B[29m"),
        black: f("\x1B[30m", "\x1B[39m"),
        red: f("\x1B[31m", "\x1B[39m"),
        green: f("\x1B[32m", "\x1B[39m"),
        yellow: f("\x1B[33m", "\x1B[39m"),
        blue: f("\x1B[34m", "\x1B[39m"),
        magenta: f("\x1B[35m", "\x1B[39m"),
        cyan: f("\x1B[36m", "\x1B[39m"),
        white: f("\x1B[37m", "\x1B[39m"),
        gray: f("\x1B[90m", "\x1B[39m"),
        bgBlack: f("\x1B[40m", "\x1B[49m"),
        bgRed: f("\x1B[41m", "\x1B[49m"),
        bgGreen: f("\x1B[42m", "\x1B[49m"),
        bgYellow: f("\x1B[43m", "\x1B[49m"),
        bgBlue: f("\x1B[44m", "\x1B[49m"),
        bgMagenta: f("\x1B[45m", "\x1B[49m"),
        bgCyan: f("\x1B[46m", "\x1B[49m"),
        bgWhite: f("\x1B[47m", "\x1B[49m"),
        blackBright: f("\x1B[90m", "\x1B[39m"),
        redBright: f("\x1B[91m", "\x1B[39m"),
        greenBright: f("\x1B[92m", "\x1B[39m"),
        yellowBright: f("\x1B[93m", "\x1B[39m"),
        blueBright: f("\x1B[94m", "\x1B[39m"),
        magentaBright: f("\x1B[95m", "\x1B[39m"),
        cyanBright: f("\x1B[96m", "\x1B[39m"),
        whiteBright: f("\x1B[97m", "\x1B[39m"),
        bgBlackBright: f("\x1B[100m", "\x1B[49m"),
        bgRedBright: f("\x1B[101m", "\x1B[49m"),
        bgGreenBright: f("\x1B[102m", "\x1B[49m"),
        bgYellowBright: f("\x1B[103m", "\x1B[49m"),
        bgBlueBright: f("\x1B[104m", "\x1B[49m"),
        bgMagentaBright: f("\x1B[105m", "\x1B[49m"),
        bgCyanBright: f("\x1B[106m", "\x1B[49m"),
        bgWhiteBright: f("\x1B[107m", "\x1B[49m")
      };
    };
    module2.exports = createColors();
    module2.exports.createColors = createColors;
  }
});

// node_modules/js-tokens/index.js
var require_js_tokens = __commonJS({
  "node_modules/js-tokens/index.js"(exports2) {
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = /((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyus]{1,6}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g;
    exports2.matchToToken = function(match) {
      var token = { type: "invalid", value: match[0], closed: void 0 };
      if (match[1]) token.type = "string", token.closed = !!(match[3] || match[4]);
      else if (match[5]) token.type = "comment";
      else if (match[6]) token.type = "comment", token.closed = !!match[7];
      else if (match[8]) token.type = "regex";
      else if (match[9]) token.type = "number";
      else if (match[10]) token.type = "name";
      else if (match[11]) token.type = "punctuator";
      else if (match[12]) token.type = "whitespace";
      return token;
    };
  }
});

// node_modules/@babel/helper-validator-identifier/lib/identifier.js
var require_identifier = __commonJS({
  "node_modules/@babel/helper-validator-identifier/lib/identifier.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.isIdentifierChar = isIdentifierChar;
    exports2.isIdentifierName = isIdentifierName;
    exports2.isIdentifierStart = isIdentifierStart;
    var nonASCIIidentifierStartChars = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088F\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5C\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDC-\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7DC\uA7F1-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
    var nonASCIIidentifierChars = "\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0897-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0CF3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ADD\u1AE0-\u1AEB\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u200C\u200D\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\u30FB\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F\uFF65";
    var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
    var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
    nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;
    var astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 7, 25, 39, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 5, 57, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 24, 43, 261, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 33, 24, 3, 24, 45, 74, 6, 0, 67, 12, 65, 1, 2, 0, 15, 4, 10, 7381, 42, 31, 98, 114, 8702, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 208, 30, 2, 2, 2, 1, 2, 6, 3, 4, 10, 1, 225, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4381, 3, 5773, 3, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 8489];
    var astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 78, 5, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 199, 7, 137, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 55, 9, 266, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 233, 0, 3, 0, 8, 1, 6, 0, 475, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
    function isInAstralSet(code, set) {
      let pos = 65536;
      for (let i = 0, length = set.length; i < length; i += 2) {
        pos += set[i];
        if (pos > code) return false;
        pos += set[i + 1];
        if (pos >= code) return true;
      }
      return false;
    }
    function isIdentifierStart(code) {
      if (code < 65) return code === 36;
      if (code <= 90) return true;
      if (code < 97) return code === 95;
      if (code <= 122) return true;
      if (code <= 65535) {
        return code >= 170 && nonASCIIidentifierStart.test(String.fromCharCode(code));
      }
      return isInAstralSet(code, astralIdentifierStartCodes);
    }
    function isIdentifierChar(code) {
      if (code < 48) return code === 36;
      if (code < 58) return true;
      if (code < 65) return false;
      if (code <= 90) return true;
      if (code < 97) return code === 95;
      if (code <= 122) return true;
      if (code <= 65535) {
        return code >= 170 && nonASCIIidentifier.test(String.fromCharCode(code));
      }
      return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
    }
    function isIdentifierName(name) {
      let isFirst = true;
      for (let i = 0; i < name.length; i++) {
        let cp = name.charCodeAt(i);
        if ((cp & 64512) === 55296 && i + 1 < name.length) {
          const trail = name.charCodeAt(++i);
          if ((trail & 64512) === 56320) {
            cp = 65536 + ((cp & 1023) << 10) + (trail & 1023);
          }
        }
        if (isFirst) {
          isFirst = false;
          if (!isIdentifierStart(cp)) {
            return false;
          }
        } else if (!isIdentifierChar(cp)) {
          return false;
        }
      }
      return !isFirst;
    }
  }
});

// node_modules/@babel/helper-validator-identifier/lib/keyword.js
var require_keyword = __commonJS({
  "node_modules/@babel/helper-validator-identifier/lib/keyword.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.isKeyword = isKeyword;
    exports2.isReservedWord = isReservedWord;
    exports2.isStrictBindOnlyReservedWord = isStrictBindOnlyReservedWord;
    exports2.isStrictBindReservedWord = isStrictBindReservedWord;
    exports2.isStrictReservedWord = isStrictReservedWord;
    var reservedWords = {
      keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"],
      strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
      strictBind: ["eval", "arguments"]
    };
    var keywords = new Set(reservedWords.keyword);
    var reservedWordsStrictSet = new Set(reservedWords.strict);
    var reservedWordsStrictBindSet = new Set(reservedWords.strictBind);
    function isReservedWord(word, inModule) {
      return inModule && word === "await" || word === "enum";
    }
    function isStrictReservedWord(word, inModule) {
      return isReservedWord(word, inModule) || reservedWordsStrictSet.has(word);
    }
    function isStrictBindOnlyReservedWord(word) {
      return reservedWordsStrictBindSet.has(word);
    }
    function isStrictBindReservedWord(word, inModule) {
      return isStrictReservedWord(word, inModule) || isStrictBindOnlyReservedWord(word);
    }
    function isKeyword(word) {
      return keywords.has(word);
    }
  }
});

// node_modules/@babel/helper-validator-identifier/lib/index.js
var require_lib = __commonJS({
  "node_modules/@babel/helper-validator-identifier/lib/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "isIdentifierChar", {
      enumerable: true,
      get: function() {
        return _identifier.isIdentifierChar;
      }
    });
    Object.defineProperty(exports2, "isIdentifierName", {
      enumerable: true,
      get: function() {
        return _identifier.isIdentifierName;
      }
    });
    Object.defineProperty(exports2, "isIdentifierStart", {
      enumerable: true,
      get: function() {
        return _identifier.isIdentifierStart;
      }
    });
    Object.defineProperty(exports2, "isKeyword", {
      enumerable: true,
      get: function() {
        return _keyword.isKeyword;
      }
    });
    Object.defineProperty(exports2, "isReservedWord", {
      enumerable: true,
      get: function() {
        return _keyword.isReservedWord;
      }
    });
    Object.defineProperty(exports2, "isStrictBindOnlyReservedWord", {
      enumerable: true,
      get: function() {
        return _keyword.isStrictBindOnlyReservedWord;
      }
    });
    Object.defineProperty(exports2, "isStrictBindReservedWord", {
      enumerable: true,
      get: function() {
        return _keyword.isStrictBindReservedWord;
      }
    });
    Object.defineProperty(exports2, "isStrictReservedWord", {
      enumerable: true,
      get: function() {
        return _keyword.isStrictReservedWord;
      }
    });
    var _identifier = require_identifier();
    var _keyword = require_keyword();
  }
});

// node_modules/@babel/code-frame/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/@babel/code-frame/lib/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var picocolors = require_picocolors();
    var jsTokens = require_js_tokens();
    var helperValidatorIdentifier = require_lib();
    function isColorSupported() {
      return typeof process === "object" && (process.env.FORCE_COLOR === "0" || process.env.FORCE_COLOR === "false") ? false : picocolors.isColorSupported;
    }
    var compose = (f, g) => (v) => f(g(v));
    function buildDefs(colors) {
      return {
        keyword: colors.cyan,
        capitalized: colors.yellow,
        jsxIdentifier: colors.yellow,
        punctuator: colors.yellow,
        number: colors.magenta,
        string: colors.green,
        regex: colors.magenta,
        comment: colors.gray,
        invalid: compose(compose(colors.white, colors.bgRed), colors.bold),
        gutter: colors.gray,
        marker: compose(colors.red, colors.bold),
        message: compose(colors.red, colors.bold),
        reset: colors.reset
      };
    }
    var defsOn = buildDefs(picocolors.createColors(true));
    var defsOff = buildDefs(picocolors.createColors(false));
    function getDefs(enabled) {
      return enabled ? defsOn : defsOff;
    }
    var sometimesKeywords = /* @__PURE__ */ new Set(["as", "async", "from", "get", "of", "set"]);
    var NEWLINE$1 = /\r\n|[\n\r\u2028\u2029]/;
    var BRACKET = /^[()[\]{}]$/;
    var tokenize;
    var JSX_TAG = /^[a-z][\w-]*$/i;
    var getTokenType = function(token, offset, text) {
      if (token.type === "name") {
        const tokenValue = token.value;
        if (helperValidatorIdentifier.isKeyword(tokenValue) || helperValidatorIdentifier.isStrictReservedWord(tokenValue, true) || sometimesKeywords.has(tokenValue)) {
          return "keyword";
        }
        if (JSX_TAG.test(tokenValue) && (text[offset - 1] === "<" || text.slice(offset - 2, offset) === "</")) {
          return "jsxIdentifier";
        }
        const firstChar = String.fromCodePoint(tokenValue.codePointAt(0));
        if (firstChar !== firstChar.toLowerCase()) {
          return "capitalized";
        }
      }
      if (token.type === "punctuator" && BRACKET.test(token.value)) {
        return "bracket";
      }
      if (token.type === "invalid" && (token.value === "@" || token.value === "#")) {
        return "punctuator";
      }
      return token.type;
    };
    tokenize = function* (text) {
      let match;
      while (match = jsTokens.default.exec(text)) {
        const token = jsTokens.matchToToken(match);
        yield {
          type: getTokenType(token, match.index, text),
          value: token.value
        };
      }
    };
    function highlight(text) {
      if (text === "") return "";
      const defs = getDefs(true);
      let highlighted = "";
      for (const {
        type,
        value
      } of tokenize(text)) {
        if (type in defs) {
          highlighted += value.split(NEWLINE$1).map((str) => defs[type](str)).join("\n");
        } else {
          highlighted += value;
        }
      }
      return highlighted;
    }
    var deprecationWarningShown = false;
    var NEWLINE = /\r\n|[\n\r\u2028\u2029]/;
    function getMarkerLines(loc, source, opts, startLineBaseZero) {
      const startLoc = Object.assign({
        column: 0,
        line: -1
      }, loc.start);
      const endLoc = Object.assign({}, startLoc, loc.end);
      const {
        linesAbove = 2,
        linesBelow = 3
      } = opts || {};
      const startLine = startLoc.line - startLineBaseZero;
      const startColumn = startLoc.column;
      const endLine = endLoc.line - startLineBaseZero;
      const endColumn = endLoc.column;
      let start = Math.max(startLine - (linesAbove + 1), 0);
      let end = Math.min(source.length, endLine + linesBelow);
      if (startLine === -1) {
        start = 0;
      }
      if (endLine === -1) {
        end = source.length;
      }
      const lineDiff = endLine - startLine;
      const markerLines = {};
      if (lineDiff) {
        for (let i = 0; i <= lineDiff; i++) {
          const lineNumber = i + startLine;
          if (!startColumn) {
            markerLines[lineNumber] = true;
          } else if (i === 0) {
            const sourceLength = source[lineNumber - 1].length;
            markerLines[lineNumber] = [startColumn, sourceLength - startColumn + 1];
          } else if (i === lineDiff) {
            markerLines[lineNumber] = [0, endColumn];
          } else {
            const sourceLength = source[lineNumber - i].length;
            markerLines[lineNumber] = [0, sourceLength];
          }
        }
      } else {
        if (startColumn === endColumn) {
          if (startColumn) {
            markerLines[startLine] = [startColumn, 0];
          } else {
            markerLines[startLine] = true;
          }
        } else {
          markerLines[startLine] = [startColumn, endColumn - startColumn];
        }
      }
      return {
        start,
        end,
        markerLines
      };
    }
    function codeFrameColumns(rawLines, loc, opts = {}) {
      const shouldHighlight = opts.forceColor || isColorSupported() && opts.highlightCode;
      const startLineBaseZero = (opts.startLine || 1) - 1;
      const defs = getDefs(shouldHighlight);
      const lines = rawLines.split(NEWLINE);
      const {
        start,
        end,
        markerLines
      } = getMarkerLines(loc, lines, opts, startLineBaseZero);
      const hasColumns = loc.start && typeof loc.start.column === "number";
      const numberMaxWidth = String(end + startLineBaseZero).length;
      const highlightedLines = shouldHighlight ? highlight(rawLines) : rawLines;
      let frame = highlightedLines.split(NEWLINE, end).slice(start, end).map((line, index2) => {
        const number = start + 1 + index2;
        const paddedNumber = ` ${number + startLineBaseZero}`.slice(-numberMaxWidth);
        const gutter = ` ${paddedNumber} |`;
        const hasMarker = markerLines[number];
        const lastMarkerLine = !markerLines[number + 1];
        if (hasMarker) {
          let markerLine = "";
          if (Array.isArray(hasMarker)) {
            const markerSpacing = line.slice(0, Math.max(hasMarker[0] - 1, 0)).replace(/[^\t]/g, " ");
            const numberOfMarkers = hasMarker[1] || 1;
            markerLine = ["\n ", defs.gutter(gutter.replace(/\d/g, " ")), " ", markerSpacing, defs.marker("^").repeat(numberOfMarkers)].join("");
            if (lastMarkerLine && opts.message) {
              markerLine += " " + defs.message(opts.message);
            }
          }
          return [defs.marker(">"), defs.gutter(gutter), line.length > 0 ? ` ${line}` : "", markerLine].join("");
        } else {
          return ` ${defs.gutter(gutter)}${line.length > 0 ? ` ${line}` : ""}`;
        }
      }).join("\n");
      if (opts.message && !hasColumns) {
        frame = `${" ".repeat(numberMaxWidth + 1)}${opts.message}
${frame}`;
      }
      if (shouldHighlight) {
        return defs.reset(frame);
      } else {
        return frame;
      }
    }
    function index(rawLines, lineNumber, colNumber, opts = {}) {
      if (!deprecationWarningShown) {
        deprecationWarningShown = true;
        const message = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
        if (process.emitWarning) {
          process.emitWarning(message, "DeprecationWarning");
        } else {
          const deprecationError = new Error(message);
          deprecationError.name = "DeprecationWarning";
          console.warn(new Error(message));
        }
      }
      colNumber = Math.max(colNumber, 0);
      const location = {
        start: {
          column: colNumber,
          line: lineNumber
        }
      };
      return codeFrameColumns(rawLines, location, opts);
    }
    exports2.codeFrameColumns = codeFrameColumns;
    exports2.default = index;
    exports2.highlight = highlight;
  }
});

// node_modules/parse-json/index.js
var require_parse_json = __commonJS({
  "node_modules/parse-json/index.js"(exports2, module2) {
    "use strict";
    var errorEx = require_error_ex();
    var fallback = require_json_parse_even_better_errors();
    var { default: LinesAndColumns } = require_build();
    var { codeFrameColumns } = require_lib2();
    var JSONError = errorEx("JSONError", {
      fileName: errorEx.append("in %s"),
      codeFrame: errorEx.append("\n\n%s\n")
    });
    var parseJson = (string, reviver, filename) => {
      if (typeof reviver === "string") {
        filename = reviver;
        reviver = null;
      }
      try {
        try {
          return JSON.parse(string, reviver);
        } catch (error) {
          fallback(string, reviver);
          throw error;
        }
      } catch (error) {
        error.message = error.message.replace(/\n/g, "");
        const indexMatch = error.message.match(/in JSON at position (\d+) while parsing/);
        const jsonError = new JSONError(error);
        if (filename) {
          jsonError.fileName = filename;
        }
        if (indexMatch && indexMatch.length > 0) {
          const lines = new LinesAndColumns(string);
          const index = Number(indexMatch[1]);
          const location = lines.locationForIndex(index);
          const codeFrame = codeFrameColumns(
            string,
            { start: { line: location.line + 1, column: location.column + 1 } },
            { highlightCode: true }
          );
          jsonError.codeFrame = codeFrame;
        }
        throw jsonError;
      }
    };
    parseJson.JSONError = JSONError;
    module2.exports = parseJson;
  }
});

// node_modules/normalize-package-data/node_modules/semver/semver.js
var require_semver = __commonJS({
  "node_modules/normalize-package-data/node_modules/semver/semver.js"(exports2, module2) {
    exports2 = module2.exports = SemVer;
    var debug;
    if (typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG)) {
      debug = function() {
        var args = Array.prototype.slice.call(arguments, 0);
        args.unshift("SEMVER");
        console.log.apply(console, args);
      };
    } else {
      debug = function() {
      };
    }
    exports2.SEMVER_SPEC_VERSION = "2.0.0";
    var MAX_LENGTH = 256;
    var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
    9007199254740991;
    var MAX_SAFE_COMPONENT_LENGTH = 16;
    var MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
    var re = exports2.re = [];
    var safeRe = exports2.safeRe = [];
    var src = exports2.src = [];
    var R = 0;
    var LETTERDASHNUMBER = "[a-zA-Z0-9-]";
    var safeRegexReplacements = [
      ["\\s", 1],
      ["\\d", MAX_LENGTH],
      [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
    ];
    function makeSafeRe(value) {
      for (var i2 = 0; i2 < safeRegexReplacements.length; i2++) {
        var token = safeRegexReplacements[i2][0];
        var max = safeRegexReplacements[i2][1];
        value = value.split(token + "*").join(token + "{0," + max + "}").split(token + "+").join(token + "{1," + max + "}");
      }
      return value;
    }
    var NUMERICIDENTIFIER = R++;
    src[NUMERICIDENTIFIER] = "0|[1-9]\\d*";
    var NUMERICIDENTIFIERLOOSE = R++;
    src[NUMERICIDENTIFIERLOOSE] = "\\d+";
    var NONNUMERICIDENTIFIER = R++;
    src[NONNUMERICIDENTIFIER] = "\\d*[a-zA-Z-]" + LETTERDASHNUMBER + "*";
    var MAINVERSION = R++;
    src[MAINVERSION] = "(" + src[NUMERICIDENTIFIER] + ")\\.(" + src[NUMERICIDENTIFIER] + ")\\.(" + src[NUMERICIDENTIFIER] + ")";
    var MAINVERSIONLOOSE = R++;
    src[MAINVERSIONLOOSE] = "(" + src[NUMERICIDENTIFIERLOOSE] + ")\\.(" + src[NUMERICIDENTIFIERLOOSE] + ")\\.(" + src[NUMERICIDENTIFIERLOOSE] + ")";
    var PRERELEASEIDENTIFIER = R++;
    src[PRERELEASEIDENTIFIER] = "(?:" + src[NUMERICIDENTIFIER] + "|" + src[NONNUMERICIDENTIFIER] + ")";
    var PRERELEASEIDENTIFIERLOOSE = R++;
    src[PRERELEASEIDENTIFIERLOOSE] = "(?:" + src[NUMERICIDENTIFIERLOOSE] + "|" + src[NONNUMERICIDENTIFIER] + ")";
    var PRERELEASE = R++;
    src[PRERELEASE] = "(?:-(" + src[PRERELEASEIDENTIFIER] + "(?:\\." + src[PRERELEASEIDENTIFIER] + ")*))";
    var PRERELEASELOOSE = R++;
    src[PRERELEASELOOSE] = "(?:-?(" + src[PRERELEASEIDENTIFIERLOOSE] + "(?:\\." + src[PRERELEASEIDENTIFIERLOOSE] + ")*))";
    var BUILDIDENTIFIER = R++;
    src[BUILDIDENTIFIER] = LETTERDASHNUMBER + "+";
    var BUILD = R++;
    src[BUILD] = "(?:\\+(" + src[BUILDIDENTIFIER] + "(?:\\." + src[BUILDIDENTIFIER] + ")*))";
    var FULL = R++;
    var FULLPLAIN = "v?" + src[MAINVERSION] + src[PRERELEASE] + "?" + src[BUILD] + "?";
    src[FULL] = "^" + FULLPLAIN + "$";
    var LOOSEPLAIN = "[v=\\s]*" + src[MAINVERSIONLOOSE] + src[PRERELEASELOOSE] + "?" + src[BUILD] + "?";
    var LOOSE = R++;
    src[LOOSE] = "^" + LOOSEPLAIN + "$";
    var GTLT = R++;
    src[GTLT] = "((?:<|>)?=?)";
    var XRANGEIDENTIFIERLOOSE = R++;
    src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + "|x|X|\\*";
    var XRANGEIDENTIFIER = R++;
    src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + "|x|X|\\*";
    var XRANGEPLAIN = R++;
    src[XRANGEPLAIN] = "[v=\\s]*(" + src[XRANGEIDENTIFIER] + ")(?:\\.(" + src[XRANGEIDENTIFIER] + ")(?:\\.(" + src[XRANGEIDENTIFIER] + ")(?:" + src[PRERELEASE] + ")?" + src[BUILD] + "?)?)?";
    var XRANGEPLAINLOOSE = R++;
    src[XRANGEPLAINLOOSE] = "[v=\\s]*(" + src[XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + src[XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + src[XRANGEIDENTIFIERLOOSE] + ")(?:" + src[PRERELEASELOOSE] + ")?" + src[BUILD] + "?)?)?";
    var XRANGE = R++;
    src[XRANGE] = "^" + src[GTLT] + "\\s*" + src[XRANGEPLAIN] + "$";
    var XRANGELOOSE = R++;
    src[XRANGELOOSE] = "^" + src[GTLT] + "\\s*" + src[XRANGEPLAINLOOSE] + "$";
    var COERCE = R++;
    src[COERCE] = "(?:^|[^\\d])(\\d{1," + MAX_SAFE_COMPONENT_LENGTH + "})(?:\\.(\\d{1," + MAX_SAFE_COMPONENT_LENGTH + "}))?(?:\\.(\\d{1," + MAX_SAFE_COMPONENT_LENGTH + "}))?(?:$|[^\\d])";
    var LONETILDE = R++;
    src[LONETILDE] = "(?:~>?)";
    var TILDETRIM = R++;
    src[TILDETRIM] = "(\\s*)" + src[LONETILDE] + "\\s+";
    re[TILDETRIM] = new RegExp(src[TILDETRIM], "g");
    safeRe[TILDETRIM] = new RegExp(makeSafeRe(src[TILDETRIM]), "g");
    var tildeTrimReplace = "$1~";
    var TILDE = R++;
    src[TILDE] = "^" + src[LONETILDE] + src[XRANGEPLAIN] + "$";
    var TILDELOOSE = R++;
    src[TILDELOOSE] = "^" + src[LONETILDE] + src[XRANGEPLAINLOOSE] + "$";
    var LONECARET = R++;
    src[LONECARET] = "(?:\\^)";
    var CARETTRIM = R++;
    src[CARETTRIM] = "(\\s*)" + src[LONECARET] + "\\s+";
    re[CARETTRIM] = new RegExp(src[CARETTRIM], "g");
    safeRe[CARETTRIM] = new RegExp(makeSafeRe(src[CARETTRIM]), "g");
    var caretTrimReplace = "$1^";
    var CARET = R++;
    src[CARET] = "^" + src[LONECARET] + src[XRANGEPLAIN] + "$";
    var CARETLOOSE = R++;
    src[CARETLOOSE] = "^" + src[LONECARET] + src[XRANGEPLAINLOOSE] + "$";
    var COMPARATORLOOSE = R++;
    src[COMPARATORLOOSE] = "^" + src[GTLT] + "\\s*(" + LOOSEPLAIN + ")$|^$";
    var COMPARATOR = R++;
    src[COMPARATOR] = "^" + src[GTLT] + "\\s*(" + FULLPLAIN + ")$|^$";
    var COMPARATORTRIM = R++;
    src[COMPARATORTRIM] = "(\\s*)" + src[GTLT] + "\\s*(" + LOOSEPLAIN + "|" + src[XRANGEPLAIN] + ")";
    re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], "g");
    safeRe[COMPARATORTRIM] = new RegExp(makeSafeRe(src[COMPARATORTRIM]), "g");
    var comparatorTrimReplace = "$1$2$3";
    var HYPHENRANGE = R++;
    src[HYPHENRANGE] = "^\\s*(" + src[XRANGEPLAIN] + ")\\s+-\\s+(" + src[XRANGEPLAIN] + ")\\s*$";
    var HYPHENRANGELOOSE = R++;
    src[HYPHENRANGELOOSE] = "^\\s*(" + src[XRANGEPLAINLOOSE] + ")\\s+-\\s+(" + src[XRANGEPLAINLOOSE] + ")\\s*$";
    var STAR = R++;
    src[STAR] = "(<|>)?=?\\s*\\*";
    for (i = 0; i < R; i++) {
      debug(i, src[i]);
      if (!re[i]) {
        re[i] = new RegExp(src[i]);
        safeRe[i] = new RegExp(makeSafeRe(src[i]));
      }
    }
    var i;
    exports2.parse = parse;
    function parse(version, options) {
      if (!options || typeof options !== "object") {
        options = {
          loose: !!options,
          includePrerelease: false
        };
      }
      if (version instanceof SemVer) {
        return version;
      }
      if (typeof version !== "string") {
        return null;
      }
      if (version.length > MAX_LENGTH) {
        return null;
      }
      var r = options.loose ? safeRe[LOOSE] : safeRe[FULL];
      if (!r.test(version)) {
        return null;
      }
      try {
        return new SemVer(version, options);
      } catch (er) {
        return null;
      }
    }
    exports2.valid = valid;
    function valid(version, options) {
      var v = parse(version, options);
      return v ? v.version : null;
    }
    exports2.clean = clean;
    function clean(version, options) {
      var s = parse(version.trim().replace(/^[=v]+/, ""), options);
      return s ? s.version : null;
    }
    exports2.SemVer = SemVer;
    function SemVer(version, options) {
      if (!options || typeof options !== "object") {
        options = {
          loose: !!options,
          includePrerelease: false
        };
      }
      if (version instanceof SemVer) {
        if (version.loose === options.loose) {
          return version;
        } else {
          version = version.version;
        }
      } else if (typeof version !== "string") {
        throw new TypeError("Invalid Version: " + version);
      }
      if (version.length > MAX_LENGTH) {
        throw new TypeError("version is longer than " + MAX_LENGTH + " characters");
      }
      if (!(this instanceof SemVer)) {
        return new SemVer(version, options);
      }
      debug("SemVer", version, options);
      this.options = options;
      this.loose = !!options.loose;
      var m = version.trim().match(options.loose ? safeRe[LOOSE] : safeRe[FULL]);
      if (!m) {
        throw new TypeError("Invalid Version: " + version);
      }
      this.raw = version;
      this.major = +m[1];
      this.minor = +m[2];
      this.patch = +m[3];
      if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
        throw new TypeError("Invalid major version");
      }
      if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
        throw new TypeError("Invalid minor version");
      }
      if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
        throw new TypeError("Invalid patch version");
      }
      if (!m[4]) {
        this.prerelease = [];
      } else {
        this.prerelease = m[4].split(".").map(function(id) {
          if (/^[0-9]+$/.test(id)) {
            var num = +id;
            if (num >= 0 && num < MAX_SAFE_INTEGER) {
              return num;
            }
          }
          return id;
        });
      }
      this.build = m[5] ? m[5].split(".") : [];
      this.format();
    }
    SemVer.prototype.format = function() {
      this.version = this.major + "." + this.minor + "." + this.patch;
      if (this.prerelease.length) {
        this.version += "-" + this.prerelease.join(".");
      }
      return this.version;
    };
    SemVer.prototype.toString = function() {
      return this.version;
    };
    SemVer.prototype.compare = function(other) {
      debug("SemVer.compare", this.version, this.options, other);
      if (!(other instanceof SemVer)) {
        other = new SemVer(other, this.options);
      }
      return this.compareMain(other) || this.comparePre(other);
    };
    SemVer.prototype.compareMain = function(other) {
      if (!(other instanceof SemVer)) {
        other = new SemVer(other, this.options);
      }
      return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
    };
    SemVer.prototype.comparePre = function(other) {
      if (!(other instanceof SemVer)) {
        other = new SemVer(other, this.options);
      }
      if (this.prerelease.length && !other.prerelease.length) {
        return -1;
      } else if (!this.prerelease.length && other.prerelease.length) {
        return 1;
      } else if (!this.prerelease.length && !other.prerelease.length) {
        return 0;
      }
      var i2 = 0;
      do {
        var a = this.prerelease[i2];
        var b = other.prerelease[i2];
        debug("prerelease compare", i2, a, b);
        if (a === void 0 && b === void 0) {
          return 0;
        } else if (b === void 0) {
          return 1;
        } else if (a === void 0) {
          return -1;
        } else if (a === b) {
          continue;
        } else {
          return compareIdentifiers(a, b);
        }
      } while (++i2);
    };
    SemVer.prototype.inc = function(release, identifier) {
      switch (release) {
        case "premajor":
          this.prerelease.length = 0;
          this.patch = 0;
          this.minor = 0;
          this.major++;
          this.inc("pre", identifier);
          break;
        case "preminor":
          this.prerelease.length = 0;
          this.patch = 0;
          this.minor++;
          this.inc("pre", identifier);
          break;
        case "prepatch":
          this.prerelease.length = 0;
          this.inc("patch", identifier);
          this.inc("pre", identifier);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case "prerelease":
          if (this.prerelease.length === 0) {
            this.inc("patch", identifier);
          }
          this.inc("pre", identifier);
          break;
        case "major":
          if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
            this.major++;
          }
          this.minor = 0;
          this.patch = 0;
          this.prerelease = [];
          break;
        case "minor":
          if (this.patch !== 0 || this.prerelease.length === 0) {
            this.minor++;
          }
          this.patch = 0;
          this.prerelease = [];
          break;
        case "patch":
          if (this.prerelease.length === 0) {
            this.patch++;
          }
          this.prerelease = [];
          break;
        // This probably shouldn't be used publicly.
        // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
        case "pre":
          if (this.prerelease.length === 0) {
            this.prerelease = [0];
          } else {
            var i2 = this.prerelease.length;
            while (--i2 >= 0) {
              if (typeof this.prerelease[i2] === "number") {
                this.prerelease[i2]++;
                i2 = -2;
              }
            }
            if (i2 === -1) {
              this.prerelease.push(0);
            }
          }
          if (identifier) {
            if (this.prerelease[0] === identifier) {
              if (isNaN(this.prerelease[1])) {
                this.prerelease = [identifier, 0];
              }
            } else {
              this.prerelease = [identifier, 0];
            }
          }
          break;
        default:
          throw new Error("invalid increment argument: " + release);
      }
      this.format();
      this.raw = this.version;
      return this;
    };
    exports2.inc = inc;
    function inc(version, release, loose, identifier) {
      if (typeof loose === "string") {
        identifier = loose;
        loose = void 0;
      }
      try {
        return new SemVer(version, loose).inc(release, identifier).version;
      } catch (er) {
        return null;
      }
    }
    exports2.diff = diff;
    function diff(version1, version2) {
      if (eq(version1, version2)) {
        return null;
      } else {
        var v1 = parse(version1);
        var v2 = parse(version2);
        var prefix = "";
        if (v1.prerelease.length || v2.prerelease.length) {
          prefix = "pre";
          var defaultResult = "prerelease";
        }
        for (var key in v1) {
          if (key === "major" || key === "minor" || key === "patch") {
            if (v1[key] !== v2[key]) {
              return prefix + key;
            }
          }
        }
        return defaultResult;
      }
    }
    exports2.compareIdentifiers = compareIdentifiers;
    var numeric = /^[0-9]+$/;
    function compareIdentifiers(a, b) {
      var anum = numeric.test(a);
      var bnum = numeric.test(b);
      if (anum && bnum) {
        a = +a;
        b = +b;
      }
      return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
    }
    exports2.rcompareIdentifiers = rcompareIdentifiers;
    function rcompareIdentifiers(a, b) {
      return compareIdentifiers(b, a);
    }
    exports2.major = major;
    function major(a, loose) {
      return new SemVer(a, loose).major;
    }
    exports2.minor = minor;
    function minor(a, loose) {
      return new SemVer(a, loose).minor;
    }
    exports2.patch = patch;
    function patch(a, loose) {
      return new SemVer(a, loose).patch;
    }
    exports2.compare = compare;
    function compare(a, b, loose) {
      return new SemVer(a, loose).compare(new SemVer(b, loose));
    }
    exports2.compareLoose = compareLoose;
    function compareLoose(a, b) {
      return compare(a, b, true);
    }
    exports2.rcompare = rcompare;
    function rcompare(a, b, loose) {
      return compare(b, a, loose);
    }
    exports2.sort = sort;
    function sort(list, loose) {
      return list.sort(function(a, b) {
        return exports2.compare(a, b, loose);
      });
    }
    exports2.rsort = rsort;
    function rsort(list, loose) {
      return list.sort(function(a, b) {
        return exports2.rcompare(a, b, loose);
      });
    }
    exports2.gt = gt;
    function gt(a, b, loose) {
      return compare(a, b, loose) > 0;
    }
    exports2.lt = lt;
    function lt(a, b, loose) {
      return compare(a, b, loose) < 0;
    }
    exports2.eq = eq;
    function eq(a, b, loose) {
      return compare(a, b, loose) === 0;
    }
    exports2.neq = neq;
    function neq(a, b, loose) {
      return compare(a, b, loose) !== 0;
    }
    exports2.gte = gte;
    function gte(a, b, loose) {
      return compare(a, b, loose) >= 0;
    }
    exports2.lte = lte;
    function lte(a, b, loose) {
      return compare(a, b, loose) <= 0;
    }
    exports2.cmp = cmp;
    function cmp(a, op, b, loose) {
      switch (op) {
        case "===":
          if (typeof a === "object")
            a = a.version;
          if (typeof b === "object")
            b = b.version;
          return a === b;
        case "!==":
          if (typeof a === "object")
            a = a.version;
          if (typeof b === "object")
            b = b.version;
          return a !== b;
        case "":
        case "=":
        case "==":
          return eq(a, b, loose);
        case "!=":
          return neq(a, b, loose);
        case ">":
          return gt(a, b, loose);
        case ">=":
          return gte(a, b, loose);
        case "<":
          return lt(a, b, loose);
        case "<=":
          return lte(a, b, loose);
        default:
          throw new TypeError("Invalid operator: " + op);
      }
    }
    exports2.Comparator = Comparator;
    function Comparator(comp, options) {
      if (!options || typeof options !== "object") {
        options = {
          loose: !!options,
          includePrerelease: false
        };
      }
      if (comp instanceof Comparator) {
        if (comp.loose === !!options.loose) {
          return comp;
        } else {
          comp = comp.value;
        }
      }
      if (!(this instanceof Comparator)) {
        return new Comparator(comp, options);
      }
      comp = comp.trim().split(/\s+/).join(" ");
      debug("comparator", comp, options);
      this.options = options;
      this.loose = !!options.loose;
      this.parse(comp);
      if (this.semver === ANY) {
        this.value = "";
      } else {
        this.value = this.operator + this.semver.version;
      }
      debug("comp", this);
    }
    var ANY = {};
    Comparator.prototype.parse = function(comp) {
      var r = this.options.loose ? safeRe[COMPARATORLOOSE] : safeRe[COMPARATOR];
      var m = comp.match(r);
      if (!m) {
        throw new TypeError("Invalid comparator: " + comp);
      }
      this.operator = m[1];
      if (this.operator === "=") {
        this.operator = "";
      }
      if (!m[2]) {
        this.semver = ANY;
      } else {
        this.semver = new SemVer(m[2], this.options.loose);
      }
    };
    Comparator.prototype.toString = function() {
      return this.value;
    };
    Comparator.prototype.test = function(version) {
      debug("Comparator.test", version, this.options.loose);
      if (this.semver === ANY) {
        return true;
      }
      if (typeof version === "string") {
        version = new SemVer(version, this.options);
      }
      return cmp(version, this.operator, this.semver, this.options);
    };
    Comparator.prototype.intersects = function(comp, options) {
      if (!(comp instanceof Comparator)) {
        throw new TypeError("a Comparator is required");
      }
      if (!options || typeof options !== "object") {
        options = {
          loose: !!options,
          includePrerelease: false
        };
      }
      var rangeTmp;
      if (this.operator === "") {
        rangeTmp = new Range(comp.value, options);
        return satisfies(this.value, rangeTmp, options);
      } else if (comp.operator === "") {
        rangeTmp = new Range(this.value, options);
        return satisfies(comp.semver, rangeTmp, options);
      }
      var sameDirectionIncreasing = (this.operator === ">=" || this.operator === ">") && (comp.operator === ">=" || comp.operator === ">");
      var sameDirectionDecreasing = (this.operator === "<=" || this.operator === "<") && (comp.operator === "<=" || comp.operator === "<");
      var sameSemVer = this.semver.version === comp.semver.version;
      var differentDirectionsInclusive = (this.operator === ">=" || this.operator === "<=") && (comp.operator === ">=" || comp.operator === "<=");
      var oppositeDirectionsLessThan = cmp(this.semver, "<", comp.semver, options) && ((this.operator === ">=" || this.operator === ">") && (comp.operator === "<=" || comp.operator === "<"));
      var oppositeDirectionsGreaterThan = cmp(this.semver, ">", comp.semver, options) && ((this.operator === "<=" || this.operator === "<") && (comp.operator === ">=" || comp.operator === ">"));
      return sameDirectionIncreasing || sameDirectionDecreasing || sameSemVer && differentDirectionsInclusive || oppositeDirectionsLessThan || oppositeDirectionsGreaterThan;
    };
    exports2.Range = Range;
    function Range(range, options) {
      if (!options || typeof options !== "object") {
        options = {
          loose: !!options,
          includePrerelease: false
        };
      }
      if (range instanceof Range) {
        if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
          return range;
        } else {
          return new Range(range.raw, options);
        }
      }
      if (range instanceof Comparator) {
        return new Range(range.value, options);
      }
      if (!(this instanceof Range)) {
        return new Range(range, options);
      }
      this.options = options;
      this.loose = !!options.loose;
      this.includePrerelease = !!options.includePrerelease;
      this.raw = range.trim().split(/\s+/).join(" ");
      this.set = this.raw.split("||").map(function(range2) {
        return this.parseRange(range2.trim());
      }, this).filter(function(c) {
        return c.length;
      });
      if (!this.set.length) {
        throw new TypeError("Invalid SemVer Range: " + this.raw);
      }
      this.format();
    }
    Range.prototype.format = function() {
      this.range = this.set.map(function(comps) {
        return comps.join(" ").trim();
      }).join("||").trim();
      return this.range;
    };
    Range.prototype.toString = function() {
      return this.range;
    };
    Range.prototype.parseRange = function(range) {
      var loose = this.options.loose;
      var hr = loose ? safeRe[HYPHENRANGELOOSE] : safeRe[HYPHENRANGE];
      range = range.replace(hr, hyphenReplace);
      debug("hyphen replace", range);
      range = range.replace(safeRe[COMPARATORTRIM], comparatorTrimReplace);
      debug("comparator trim", range, safeRe[COMPARATORTRIM]);
      range = range.replace(safeRe[TILDETRIM], tildeTrimReplace);
      range = range.replace(safeRe[CARETTRIM], caretTrimReplace);
      var compRe = loose ? safeRe[COMPARATORLOOSE] : safeRe[COMPARATOR];
      var set = range.split(" ").map(function(comp) {
        return parseComparator(comp, this.options);
      }, this).join(" ").split(/\s+/);
      if (this.options.loose) {
        set = set.filter(function(comp) {
          return !!comp.match(compRe);
        });
      }
      set = set.map(function(comp) {
        return new Comparator(comp, this.options);
      }, this);
      return set;
    };
    Range.prototype.intersects = function(range, options) {
      if (!(range instanceof Range)) {
        throw new TypeError("a Range is required");
      }
      return this.set.some(function(thisComparators) {
        return thisComparators.every(function(thisComparator) {
          return range.set.some(function(rangeComparators) {
            return rangeComparators.every(function(rangeComparator) {
              return thisComparator.intersects(rangeComparator, options);
            });
          });
        });
      });
    };
    exports2.toComparators = toComparators;
    function toComparators(range, options) {
      return new Range(range, options).set.map(function(comp) {
        return comp.map(function(c) {
          return c.value;
        }).join(" ").trim().split(" ");
      });
    }
    function parseComparator(comp, options) {
      debug("comp", comp, options);
      comp = replaceCarets(comp, options);
      debug("caret", comp);
      comp = replaceTildes(comp, options);
      debug("tildes", comp);
      comp = replaceXRanges(comp, options);
      debug("xrange", comp);
      comp = replaceStars(comp, options);
      debug("stars", comp);
      return comp;
    }
    function isX(id) {
      return !id || id.toLowerCase() === "x" || id === "*";
    }
    function replaceTildes(comp, options) {
      return comp.trim().split(/\s+/).map(function(comp2) {
        return replaceTilde(comp2, options);
      }).join(" ");
    }
    function replaceTilde(comp, options) {
      var r = options.loose ? safeRe[TILDELOOSE] : safeRe[TILDE];
      return comp.replace(r, function(_, M, m, p, pr) {
        debug("tilde", comp, _, M, m, p, pr);
        var ret;
        if (isX(M)) {
          ret = "";
        } else if (isX(m)) {
          ret = ">=" + M + ".0.0 <" + (+M + 1) + ".0.0";
        } else if (isX(p)) {
          ret = ">=" + M + "." + m + ".0 <" + M + "." + (+m + 1) + ".0";
        } else if (pr) {
          debug("replaceTilde pr", pr);
          ret = ">=" + M + "." + m + "." + p + "-" + pr + " <" + M + "." + (+m + 1) + ".0";
        } else {
          ret = ">=" + M + "." + m + "." + p + " <" + M + "." + (+m + 1) + ".0";
        }
        debug("tilde return", ret);
        return ret;
      });
    }
    function replaceCarets(comp, options) {
      return comp.trim().split(/\s+/).map(function(comp2) {
        return replaceCaret(comp2, options);
      }).join(" ");
    }
    function replaceCaret(comp, options) {
      debug("caret", comp, options);
      var r = options.loose ? safeRe[CARETLOOSE] : safeRe[CARET];
      return comp.replace(r, function(_, M, m, p, pr) {
        debug("caret", comp, _, M, m, p, pr);
        var ret;
        if (isX(M)) {
          ret = "";
        } else if (isX(m)) {
          ret = ">=" + M + ".0.0 <" + (+M + 1) + ".0.0";
        } else if (isX(p)) {
          if (M === "0") {
            ret = ">=" + M + "." + m + ".0 <" + M + "." + (+m + 1) + ".0";
          } else {
            ret = ">=" + M + "." + m + ".0 <" + (+M + 1) + ".0.0";
          }
        } else if (pr) {
          debug("replaceCaret pr", pr);
          if (M === "0") {
            if (m === "0") {
              ret = ">=" + M + "." + m + "." + p + "-" + pr + " <" + M + "." + m + "." + (+p + 1);
            } else {
              ret = ">=" + M + "." + m + "." + p + "-" + pr + " <" + M + "." + (+m + 1) + ".0";
            }
          } else {
            ret = ">=" + M + "." + m + "." + p + "-" + pr + " <" + (+M + 1) + ".0.0";
          }
        } else {
          debug("no pr");
          if (M === "0") {
            if (m === "0") {
              ret = ">=" + M + "." + m + "." + p + " <" + M + "." + m + "." + (+p + 1);
            } else {
              ret = ">=" + M + "." + m + "." + p + " <" + M + "." + (+m + 1) + ".0";
            }
          } else {
            ret = ">=" + M + "." + m + "." + p + " <" + (+M + 1) + ".0.0";
          }
        }
        debug("caret return", ret);
        return ret;
      });
    }
    function replaceXRanges(comp, options) {
      debug("replaceXRanges", comp, options);
      return comp.split(/\s+/).map(function(comp2) {
        return replaceXRange(comp2, options);
      }).join(" ");
    }
    function replaceXRange(comp, options) {
      comp = comp.trim();
      var r = options.loose ? safeRe[XRANGELOOSE] : safeRe[XRANGE];
      return comp.replace(r, function(ret, gtlt, M, m, p, pr) {
        debug("xRange", comp, ret, gtlt, M, m, p, pr);
        var xM = isX(M);
        var xm = xM || isX(m);
        var xp = xm || isX(p);
        var anyX = xp;
        if (gtlt === "=" && anyX) {
          gtlt = "";
        }
        if (xM) {
          if (gtlt === ">" || gtlt === "<") {
            ret = "<0.0.0";
          } else {
            ret = "*";
          }
        } else if (gtlt && anyX) {
          if (xm) {
            m = 0;
          }
          p = 0;
          if (gtlt === ">") {
            gtlt = ">=";
            if (xm) {
              M = +M + 1;
              m = 0;
              p = 0;
            } else {
              m = +m + 1;
              p = 0;
            }
          } else if (gtlt === "<=") {
            gtlt = "<";
            if (xm) {
              M = +M + 1;
            } else {
              m = +m + 1;
            }
          }
          ret = gtlt + M + "." + m + "." + p;
        } else if (xm) {
          ret = ">=" + M + ".0.0 <" + (+M + 1) + ".0.0";
        } else if (xp) {
          ret = ">=" + M + "." + m + ".0 <" + M + "." + (+m + 1) + ".0";
        }
        debug("xRange return", ret);
        return ret;
      });
    }
    function replaceStars(comp, options) {
      debug("replaceStars", comp, options);
      return comp.trim().replace(safeRe[STAR], "");
    }
    function hyphenReplace($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) {
      if (isX(fM)) {
        from = "";
      } else if (isX(fm)) {
        from = ">=" + fM + ".0.0";
      } else if (isX(fp)) {
        from = ">=" + fM + "." + fm + ".0";
      } else {
        from = ">=" + from;
      }
      if (isX(tM)) {
        to = "";
      } else if (isX(tm)) {
        to = "<" + (+tM + 1) + ".0.0";
      } else if (isX(tp)) {
        to = "<" + tM + "." + (+tm + 1) + ".0";
      } else if (tpr) {
        to = "<=" + tM + "." + tm + "." + tp + "-" + tpr;
      } else {
        to = "<=" + to;
      }
      return (from + " " + to).trim();
    }
    Range.prototype.test = function(version) {
      if (!version) {
        return false;
      }
      if (typeof version === "string") {
        version = new SemVer(version, this.options);
      }
      for (var i2 = 0; i2 < this.set.length; i2++) {
        if (testSet(this.set[i2], version, this.options)) {
          return true;
        }
      }
      return false;
    };
    function testSet(set, version, options) {
      for (var i2 = 0; i2 < set.length; i2++) {
        if (!set[i2].test(version)) {
          return false;
        }
      }
      if (version.prerelease.length && !options.includePrerelease) {
        for (i2 = 0; i2 < set.length; i2++) {
          debug(set[i2].semver);
          if (set[i2].semver === ANY) {
            continue;
          }
          if (set[i2].semver.prerelease.length > 0) {
            var allowed = set[i2].semver;
            if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
              return true;
            }
          }
        }
        return false;
      }
      return true;
    }
    exports2.satisfies = satisfies;
    function satisfies(version, range, options) {
      try {
        range = new Range(range, options);
      } catch (er) {
        return false;
      }
      return range.test(version);
    }
    exports2.maxSatisfying = maxSatisfying;
    function maxSatisfying(versions, range, options) {
      var max = null;
      var maxSV = null;
      try {
        var rangeObj = new Range(range, options);
      } catch (er) {
        return null;
      }
      versions.forEach(function(v) {
        if (rangeObj.test(v)) {
          if (!max || maxSV.compare(v) === -1) {
            max = v;
            maxSV = new SemVer(max, options);
          }
        }
      });
      return max;
    }
    exports2.minSatisfying = minSatisfying;
    function minSatisfying(versions, range, options) {
      var min = null;
      var minSV = null;
      try {
        var rangeObj = new Range(range, options);
      } catch (er) {
        return null;
      }
      versions.forEach(function(v) {
        if (rangeObj.test(v)) {
          if (!min || minSV.compare(v) === 1) {
            min = v;
            minSV = new SemVer(min, options);
          }
        }
      });
      return min;
    }
    exports2.minVersion = minVersion;
    function minVersion(range, loose) {
      range = new Range(range, loose);
      var minver = new SemVer("0.0.0");
      if (range.test(minver)) {
        return minver;
      }
      minver = new SemVer("0.0.0-0");
      if (range.test(minver)) {
        return minver;
      }
      minver = null;
      for (var i2 = 0; i2 < range.set.length; ++i2) {
        var comparators = range.set[i2];
        comparators.forEach(function(comparator) {
          var compver = new SemVer(comparator.semver.version);
          switch (comparator.operator) {
            case ">":
              if (compver.prerelease.length === 0) {
                compver.patch++;
              } else {
                compver.prerelease.push(0);
              }
              compver.raw = compver.format();
            /* fallthrough */
            case "":
            case ">=":
              if (!minver || gt(minver, compver)) {
                minver = compver;
              }
              break;
            case "<":
            case "<=":
              break;
            /* istanbul ignore next */
            default:
              throw new Error("Unexpected operation: " + comparator.operator);
          }
        });
      }
      if (minver && range.test(minver)) {
        return minver;
      }
      return null;
    }
    exports2.validRange = validRange;
    function validRange(range, options) {
      try {
        return new Range(range, options).range || "*";
      } catch (er) {
        return null;
      }
    }
    exports2.ltr = ltr;
    function ltr(version, range, options) {
      return outside(version, range, "<", options);
    }
    exports2.gtr = gtr;
    function gtr(version, range, options) {
      return outside(version, range, ">", options);
    }
    exports2.outside = outside;
    function outside(version, range, hilo, options) {
      version = new SemVer(version, options);
      range = new Range(range, options);
      var gtfn, ltefn, ltfn, comp, ecomp;
      switch (hilo) {
        case ">":
          gtfn = gt;
          ltefn = lte;
          ltfn = lt;
          comp = ">";
          ecomp = ">=";
          break;
        case "<":
          gtfn = lt;
          ltefn = gte;
          ltfn = gt;
          comp = "<";
          ecomp = "<=";
          break;
        default:
          throw new TypeError('Must provide a hilo val of "<" or ">"');
      }
      if (satisfies(version, range, options)) {
        return false;
      }
      for (var i2 = 0; i2 < range.set.length; ++i2) {
        var comparators = range.set[i2];
        var high = null;
        var low = null;
        comparators.forEach(function(comparator) {
          if (comparator.semver === ANY) {
            comparator = new Comparator(">=0.0.0");
          }
          high = high || comparator;
          low = low || comparator;
          if (gtfn(comparator.semver, high.semver, options)) {
            high = comparator;
          } else if (ltfn(comparator.semver, low.semver, options)) {
            low = comparator;
          }
        });
        if (high.operator === comp || high.operator === ecomp) {
          return false;
        }
        if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
          return false;
        } else if (low.operator === ecomp && ltfn(version, low.semver)) {
          return false;
        }
      }
      return true;
    }
    exports2.prerelease = prerelease;
    function prerelease(version, options) {
      var parsed = parse(version, options);
      return parsed && parsed.prerelease.length ? parsed.prerelease : null;
    }
    exports2.intersects = intersects;
    function intersects(r1, r2, options) {
      r1 = new Range(r1, options);
      r2 = new Range(r2, options);
      return r1.intersects(r2);
    }
    exports2.coerce = coerce;
    function coerce(version) {
      if (version instanceof SemVer) {
        return version;
      }
      if (typeof version !== "string") {
        return null;
      }
      var match = version.match(safeRe[COERCE]);
      if (match == null) {
        return null;
      }
      return parse(match[1] + "." + (match[2] || "0") + "." + (match[3] || "0"));
    }
  }
});

// node_modules/spdx-license-ids/index.json
var require_spdx_license_ids = __commonJS({
  "node_modules/spdx-license-ids/index.json"(exports2, module2) {
    module2.exports = [
      "0BSD",
      "3D-Slicer-1.0",
      "AAL",
      "ADSL",
      "AFL-1.1",
      "AFL-1.2",
      "AFL-2.0",
      "AFL-2.1",
      "AFL-3.0",
      "AGPL-1.0-only",
      "AGPL-1.0-or-later",
      "AGPL-3.0-only",
      "AGPL-3.0-or-later",
      "ALGLIB-Documentation",
      "AMD-newlib",
      "AMDPLPA",
      "AML",
      "AML-glslang",
      "AMPAS",
      "ANTLR-PD",
      "ANTLR-PD-fallback",
      "APAFML",
      "APL-1.0",
      "APSL-1.0",
      "APSL-1.1",
      "APSL-1.2",
      "APSL-2.0",
      "ASWF-Digital-Assets-1.0",
      "ASWF-Digital-Assets-1.1",
      "Abstyles",
      "AdaCore-doc",
      "Adobe-2006",
      "Adobe-Display-PostScript",
      "Adobe-Glyph",
      "Adobe-Utopia",
      "Advanced-Cryptics-Dictionary",
      "Afmparse",
      "Aladdin",
      "Apache-1.0",
      "Apache-1.1",
      "Apache-2.0",
      "App-s2p",
      "Arphic-1999",
      "Artistic-1.0",
      "Artistic-1.0-Perl",
      "Artistic-1.0-cl8",
      "Artistic-2.0",
      "Artistic-dist",
      "Aspell-RU",
      "BOLA-1.1",
      "BSD-1-Clause",
      "BSD-2-Clause",
      "BSD-2-Clause-Darwin",
      "BSD-2-Clause-Patent",
      "BSD-2-Clause-Views",
      "BSD-2-Clause-first-lines",
      "BSD-2-Clause-pkgconf-disclaimer",
      "BSD-3-Clause",
      "BSD-3-Clause-Attribution",
      "BSD-3-Clause-Clear",
      "BSD-3-Clause-HP",
      "BSD-3-Clause-LBNL",
      "BSD-3-Clause-Modification",
      "BSD-3-Clause-No-Military-License",
      "BSD-3-Clause-No-Nuclear-License",
      "BSD-3-Clause-No-Nuclear-License-2014",
      "BSD-3-Clause-No-Nuclear-Warranty",
      "BSD-3-Clause-Open-MPI",
      "BSD-3-Clause-Sun",
      "BSD-3-Clause-Tso",
      "BSD-3-Clause-acpica",
      "BSD-3-Clause-flex",
      "BSD-4-Clause",
      "BSD-4-Clause-Shortened",
      "BSD-4-Clause-UC",
      "BSD-4.3RENO",
      "BSD-4.3TAHOE",
      "BSD-Advertising-Acknowledgement",
      "BSD-Attribution-HPND-disclaimer",
      "BSD-Inferno-Nettverk",
      "BSD-Mark-Modifications",
      "BSD-Protection",
      "BSD-Source-Code",
      "BSD-Source-beginning-file",
      "BSD-Systemics",
      "BSD-Systemics-W3Works",
      "BSL-1.0",
      "BUSL-1.1",
      "Baekmuk",
      "Bahyph",
      "Barr",
      "Beerware",
      "BitTorrent-1.0",
      "BitTorrent-1.1",
      "Bitstream-Charter",
      "Bitstream-Vera",
      "BlueOak-1.0.0",
      "Boehm-GC",
      "Boehm-GC-without-fee",
      "Borceux",
      "Brian-Gladman-2-Clause",
      "Brian-Gladman-3-Clause",
      "Buddy",
      "C-UDA-1.0",
      "CAL-1.0",
      "CAL-1.0-Combined-Work-Exception",
      "CAPEC-tou",
      "CATOSL-1.1",
      "CC-BY-1.0",
      "CC-BY-2.0",
      "CC-BY-2.5",
      "CC-BY-2.5-AU",
      "CC-BY-3.0",
      "CC-BY-3.0-AT",
      "CC-BY-3.0-AU",
      "CC-BY-3.0-DE",
      "CC-BY-3.0-IGO",
      "CC-BY-3.0-NL",
      "CC-BY-3.0-US",
      "CC-BY-4.0",
      "CC-BY-NC-1.0",
      "CC-BY-NC-2.0",
      "CC-BY-NC-2.5",
      "CC-BY-NC-3.0",
      "CC-BY-NC-3.0-DE",
      "CC-BY-NC-4.0",
      "CC-BY-NC-ND-1.0",
      "CC-BY-NC-ND-2.0",
      "CC-BY-NC-ND-2.5",
      "CC-BY-NC-ND-3.0",
      "CC-BY-NC-ND-3.0-DE",
      "CC-BY-NC-ND-3.0-IGO",
      "CC-BY-NC-ND-4.0",
      "CC-BY-NC-SA-1.0",
      "CC-BY-NC-SA-2.0",
      "CC-BY-NC-SA-2.0-DE",
      "CC-BY-NC-SA-2.0-FR",
      "CC-BY-NC-SA-2.0-UK",
      "CC-BY-NC-SA-2.5",
      "CC-BY-NC-SA-3.0",
      "CC-BY-NC-SA-3.0-DE",
      "CC-BY-NC-SA-3.0-IGO",
      "CC-BY-NC-SA-4.0",
      "CC-BY-ND-1.0",
      "CC-BY-ND-2.0",
      "CC-BY-ND-2.5",
      "CC-BY-ND-3.0",
      "CC-BY-ND-3.0-DE",
      "CC-BY-ND-4.0",
      "CC-BY-SA-1.0",
      "CC-BY-SA-2.0",
      "CC-BY-SA-2.0-UK",
      "CC-BY-SA-2.1-JP",
      "CC-BY-SA-2.5",
      "CC-BY-SA-3.0",
      "CC-BY-SA-3.0-AT",
      "CC-BY-SA-3.0-DE",
      "CC-BY-SA-3.0-IGO",
      "CC-BY-SA-4.0",
      "CC-PDDC",
      "CC-PDM-1.0",
      "CC-SA-1.0",
      "CC0-1.0",
      "CDDL-1.0",
      "CDDL-1.1",
      "CDL-1.0",
      "CDLA-Permissive-1.0",
      "CDLA-Permissive-2.0",
      "CDLA-Sharing-1.0",
      "CECILL-1.0",
      "CECILL-1.1",
      "CECILL-2.0",
      "CECILL-2.1",
      "CECILL-B",
      "CECILL-C",
      "CERN-OHL-1.1",
      "CERN-OHL-1.2",
      "CERN-OHL-P-2.0",
      "CERN-OHL-S-2.0",
      "CERN-OHL-W-2.0",
      "CFITSIO",
      "CMU-Mach",
      "CMU-Mach-nodoc",
      "CNRI-Jython",
      "CNRI-Python",
      "CNRI-Python-GPL-Compatible",
      "COIL-1.0",
      "CPAL-1.0",
      "CPL-1.0",
      "CPOL-1.02",
      "CUA-OPL-1.0",
      "Caldera",
      "Caldera-no-preamble",
      "Catharon",
      "ClArtistic",
      "Clips",
      "Community-Spec-1.0",
      "Condor-1.1",
      "Cornell-Lossless-JPEG",
      "Cronyx",
      "Crossword",
      "CryptoSwift",
      "CrystalStacker",
      "Cube",
      "D-FSL-1.0",
      "DEC-3-Clause",
      "DL-DE-BY-2.0",
      "DL-DE-ZERO-2.0",
      "DOC",
      "DRL-1.0",
      "DRL-1.1",
      "DSDP",
      "DocBook-DTD",
      "DocBook-Schema",
      "DocBook-Stylesheet",
      "DocBook-XML",
      "Dotseqn",
      "ECL-1.0",
      "ECL-2.0",
      "EFL-1.0",
      "EFL-2.0",
      "EPICS",
      "EPL-1.0",
      "EPL-2.0",
      "ESA-PL-permissive-2.4",
      "ESA-PL-strong-copyleft-2.4",
      "ESA-PL-weak-copyleft-2.4",
      "EUDatagrid",
      "EUPL-1.0",
      "EUPL-1.1",
      "EUPL-1.2",
      "Elastic-2.0",
      "Entessa",
      "ErlPL-1.1",
      "Eurosym",
      "FBM",
      "FDK-AAC",
      "FSFAP",
      "FSFAP-no-warranty-disclaimer",
      "FSFUL",
      "FSFULLR",
      "FSFULLRSD",
      "FSFULLRWD",
      "FSL-1.1-ALv2",
      "FSL-1.1-MIT",
      "FTL",
      "Fair",
      "Ferguson-Twofish",
      "Frameworx-1.0",
      "FreeBSD-DOC",
      "FreeImage",
      "Furuseth",
      "GCR-docs",
      "GD",
      "GFDL-1.1-invariants-only",
      "GFDL-1.1-invariants-or-later",
      "GFDL-1.1-no-invariants-only",
      "GFDL-1.1-no-invariants-or-later",
      "GFDL-1.1-only",
      "GFDL-1.1-or-later",
      "GFDL-1.2-invariants-only",
      "GFDL-1.2-invariants-or-later",
      "GFDL-1.2-no-invariants-only",
      "GFDL-1.2-no-invariants-or-later",
      "GFDL-1.2-only",
      "GFDL-1.2-or-later",
      "GFDL-1.3-invariants-only",
      "GFDL-1.3-invariants-or-later",
      "GFDL-1.3-no-invariants-only",
      "GFDL-1.3-no-invariants-or-later",
      "GFDL-1.3-only",
      "GFDL-1.3-or-later",
      "GL2PS",
      "GLWTPL",
      "GPL-1.0-only",
      "GPL-1.0-or-later",
      "GPL-2.0-only",
      "GPL-2.0-or-later",
      "GPL-3.0-only",
      "GPL-3.0-or-later",
      "Game-Programming-Gems",
      "Giftware",
      "Glide",
      "Glulxe",
      "Graphics-Gems",
      "Gutmann",
      "HDF5",
      "HIDAPI",
      "HP-1986",
      "HP-1989",
      "HPND",
      "HPND-DEC",
      "HPND-Fenneberg-Livingston",
      "HPND-INRIA-IMAG",
      "HPND-Intel",
      "HPND-Kevlin-Henney",
      "HPND-MIT-disclaimer",
      "HPND-Markus-Kuhn",
      "HPND-Netrek",
      "HPND-Pbmplus",
      "HPND-SMC",
      "HPND-UC",
      "HPND-UC-export-US",
      "HPND-doc",
      "HPND-doc-sell",
      "HPND-export-US",
      "HPND-export-US-acknowledgement",
      "HPND-export-US-modify",
      "HPND-export2-US",
      "HPND-merchantability-variant",
      "HPND-sell-MIT-disclaimer-xserver",
      "HPND-sell-regexpr",
      "HPND-sell-variant",
      "HPND-sell-variant-MIT-disclaimer",
      "HPND-sell-variant-MIT-disclaimer-rev",
      "HPND-sell-variant-critical-systems",
      "HTMLTIDY",
      "HaskellReport",
      "Hippocratic-2.1",
      "IBM-pibs",
      "ICU",
      "IEC-Code-Components-EULA",
      "IJG",
      "IJG-short",
      "IPA",
      "IPL-1.0",
      "ISC",
      "ISC-Veillard",
      "ISO-permission",
      "ImageMagick",
      "Imlib2",
      "Info-ZIP",
      "Inner-Net-2.0",
      "InnoSetup",
      "Intel",
      "Intel-ACPI",
      "Interbase-1.0",
      "JPL-image",
      "JPNIC",
      "JSON",
      "Jam",
      "JasPer-2.0",
      "Kastrup",
      "Kazlib",
      "Knuth-CTAN",
      "LAL-1.2",
      "LAL-1.3",
      "LGPL-2.0-only",
      "LGPL-2.0-or-later",
      "LGPL-2.1-only",
      "LGPL-2.1-or-later",
      "LGPL-3.0-only",
      "LGPL-3.0-or-later",
      "LGPLLR",
      "LOOP",
      "LPD-document",
      "LPL-1.0",
      "LPL-1.02",
      "LPPL-1.0",
      "LPPL-1.1",
      "LPPL-1.2",
      "LPPL-1.3a",
      "LPPL-1.3c",
      "LZMA-SDK-9.11-to-9.20",
      "LZMA-SDK-9.22",
      "Latex2e",
      "Latex2e-translated-notice",
      "Leptonica",
      "LiLiQ-P-1.1",
      "LiLiQ-R-1.1",
      "LiLiQ-Rplus-1.1",
      "Libpng",
      "Linux-OpenIB",
      "Linux-man-pages-1-para",
      "Linux-man-pages-copyleft",
      "Linux-man-pages-copyleft-2-para",
      "Linux-man-pages-copyleft-var",
      "Lucida-Bitmap-Fonts",
      "MIPS",
      "MIT",
      "MIT-0",
      "MIT-CMU",
      "MIT-Click",
      "MIT-Festival",
      "MIT-Khronos-old",
      "MIT-Modern-Variant",
      "MIT-STK",
      "MIT-Wu",
      "MIT-advertising",
      "MIT-enna",
      "MIT-feh",
      "MIT-open-group",
      "MIT-testregex",
      "MITNFA",
      "MMIXware",
      "MMPL-1.0.1",
      "MPEG-SSG",
      "MPL-1.0",
      "MPL-1.1",
      "MPL-2.0",
      "MPL-2.0-no-copyleft-exception",
      "MS-LPL",
      "MS-PL",
      "MS-RL",
      "MTLL",
      "Mackerras-3-Clause",
      "Mackerras-3-Clause-acknowledgment",
      "MakeIndex",
      "Martin-Birgmeier",
      "McPhee-slideshow",
      "Minpack",
      "MirOS",
      "Motosoto",
      "MulanPSL-1.0",
      "MulanPSL-2.0",
      "Multics",
      "Mup",
      "NAIST-2003",
      "NASA-1.3",
      "NBPL-1.0",
      "NCBI-PD",
      "NCGL-UK-2.0",
      "NCL",
      "NCSA",
      "NGPL",
      "NICTA-1.0",
      "NIST-PD",
      "NIST-PD-TNT",
      "NIST-PD-fallback",
      "NIST-Software",
      "NLOD-1.0",
      "NLOD-2.0",
      "NLPL",
      "NOSL",
      "NPL-1.0",
      "NPL-1.1",
      "NPOSL-3.0",
      "NRL",
      "NTIA-PD",
      "NTP",
      "NTP-0",
      "Naumen",
      "NetCDF",
      "Newsletr",
      "Nokia",
      "Noweb",
      "O-UDA-1.0",
      "OAR",
      "OCCT-PL",
      "OCLC-2.0",
      "ODC-By-1.0",
      "ODbL-1.0",
      "OFFIS",
      "OFL-1.0",
      "OFL-1.0-RFN",
      "OFL-1.0-no-RFN",
      "OFL-1.1",
      "OFL-1.1-RFN",
      "OFL-1.1-no-RFN",
      "OGC-1.0",
      "OGDL-Taiwan-1.0",
      "OGL-Canada-2.0",
      "OGL-UK-1.0",
      "OGL-UK-2.0",
      "OGL-UK-3.0",
      "OGTSL",
      "OLDAP-1.1",
      "OLDAP-1.2",
      "OLDAP-1.3",
      "OLDAP-1.4",
      "OLDAP-2.0",
      "OLDAP-2.0.1",
      "OLDAP-2.1",
      "OLDAP-2.2",
      "OLDAP-2.2.1",
      "OLDAP-2.2.2",
      "OLDAP-2.3",
      "OLDAP-2.4",
      "OLDAP-2.5",
      "OLDAP-2.6",
      "OLDAP-2.7",
      "OLDAP-2.8",
      "OLFL-1.3",
      "OML",
      "OPL-1.0",
      "OPL-UK-3.0",
      "OPUBL-1.0",
      "OSC-1.0",
      "OSET-PL-2.1",
      "OSL-1.0",
      "OSL-1.1",
      "OSL-2.0",
      "OSL-2.1",
      "OSL-3.0",
      "OSSP",
      "OpenMDW-1.0",
      "OpenPBS-2.3",
      "OpenSSL",
      "OpenSSL-standalone",
      "OpenVision",
      "PADL",
      "PDDL-1.0",
      "PHP-3.0",
      "PHP-3.01",
      "PPL",
      "PSF-2.0",
      "ParaType-Free-Font-1.3",
      "Parity-6.0.0",
      "Parity-7.0.0",
      "Pixar",
      "Plexus",
      "PolyForm-Noncommercial-1.0.0",
      "PolyForm-Small-Business-1.0.0",
      "PostgreSQL",
      "Python-2.0",
      "Python-2.0.1",
      "QPL-1.0",
      "QPL-1.0-INRIA-2004",
      "Qhull",
      "RHeCos-1.1",
      "RPL-1.1",
      "RPL-1.5",
      "RPSL-1.0",
      "RSA-MD",
      "RSCPL",
      "Rdisc",
      "Ruby",
      "Ruby-pty",
      "SAX-PD",
      "SAX-PD-2.0",
      "SCEA",
      "SGI-B-1.0",
      "SGI-B-1.1",
      "SGI-B-2.0",
      "SGI-OpenGL",
      "SGMLUG-PM",
      "SGP4",
      "SHL-0.5",
      "SHL-0.51",
      "SISSL",
      "SISSL-1.2",
      "SL",
      "SMAIL-GPL",
      "SMLNJ",
      "SMPPL",
      "SNIA",
      "SOFA",
      "SPL-1.0",
      "SSH-OpenSSH",
      "SSH-short",
      "SSLeay-standalone",
      "SSPL-1.0",
      "SUL-1.0",
      "SWL",
      "Saxpath",
      "SchemeReport",
      "Sendmail",
      "Sendmail-8.23",
      "Sendmail-Open-Source-1.1",
      "SimPL-2.0",
      "Sleepycat",
      "Soundex",
      "Spencer-86",
      "Spencer-94",
      "Spencer-99",
      "SugarCRM-1.1.3",
      "Sun-PPP",
      "Sun-PPP-2000",
      "SunPro",
      "Symlinks",
      "TAPR-OHL-1.0",
      "TCL",
      "TCP-wrappers",
      "TGPPL-1.0",
      "TMate",
      "TORQUE-1.1",
      "TOSL",
      "TPDL",
      "TPL-1.0",
      "TTWL",
      "TTYP0",
      "TU-Berlin-1.0",
      "TU-Berlin-2.0",
      "TekHVC",
      "TermReadKey",
      "ThirdEye",
      "TrustedQSL",
      "UCAR",
      "UCL-1.0",
      "UMich-Merit",
      "UPL-1.0",
      "URT-RLE",
      "Ubuntu-font-1.0",
      "UnRAR",
      "Unicode-3.0",
      "Unicode-DFS-2015",
      "Unicode-DFS-2016",
      "Unicode-TOU",
      "UnixCrypt",
      "Unlicense",
      "Unlicense-libtelnet",
      "Unlicense-libwhirlpool",
      "VOSTROM",
      "VSL-1.0",
      "Vim",
      "Vixie-Cron",
      "W3C",
      "W3C-19980720",
      "W3C-20150513",
      "WTFNMFPL",
      "WTFPL",
      "Watcom-1.0",
      "Widget-Workshop",
      "WordNet",
      "Wsuipa",
      "X11",
      "X11-distribute-modifications-variant",
      "X11-no-permit-persons",
      "X11-swapped",
      "XFree86-1.1",
      "XSkat",
      "Xdebug-1.03",
      "Xerox",
      "Xfig",
      "Xnet",
      "YPL-1.0",
      "YPL-1.1",
      "ZPL-1.1",
      "ZPL-2.0",
      "ZPL-2.1",
      "Zed",
      "Zeeff",
      "Zend-2.0",
      "Zimbra-1.3",
      "Zimbra-1.4",
      "Zlib",
      "any-OSI",
      "any-OSI-perl-modules",
      "bcrypt-Solar-Designer",
      "blessing",
      "bzip2-1.0.6",
      "check-cvs",
      "checkmk",
      "copyleft-next-0.3.0",
      "copyleft-next-0.3.1",
      "curl",
      "cve-tou",
      "diffmark",
      "dtoa",
      "dvipdfm",
      "eGenix",
      "etalab-2.0",
      "fwlw",
      "gSOAP-1.3b",
      "generic-xts",
      "gnuplot",
      "gtkbook",
      "hdparm",
      "hyphen-bulgarian",
      "iMatix",
      "jove",
      "libpng-1.6.35",
      "libpng-2.0",
      "libselinux-1.0",
      "libtiff",
      "libutil-David-Nugent",
      "lsof",
      "magaz",
      "mailprio",
      "man2html",
      "metamail",
      "mpi-permissive",
      "mpich2",
      "mplus",
      "ngrep",
      "pkgconf",
      "pnmstitch",
      "psfrag",
      "psutils",
      "python-ldap",
      "radvd",
      "snprintf",
      "softSurfer",
      "ssh-keyscan",
      "swrule",
      "threeparttable",
      "ulem",
      "w3m",
      "wwl",
      "xinetd",
      "xkeyboard-config-Zinoviev",
      "xlock",
      "xpp",
      "xzoom",
      "zlib-acknowledgement"
    ];
  }
});

// node_modules/spdx-license-ids/deprecated.json
var require_deprecated = __commonJS({
  "node_modules/spdx-license-ids/deprecated.json"(exports2, module2) {
    module2.exports = [
      "AGPL-1.0",
      "AGPL-3.0",
      "BSD-2-Clause-FreeBSD",
      "BSD-2-Clause-NetBSD",
      "GFDL-1.1",
      "GFDL-1.2",
      "GFDL-1.3",
      "GPL-1.0",
      "GPL-2.0",
      "GPL-2.0-with-GCC-exception",
      "GPL-2.0-with-autoconf-exception",
      "GPL-2.0-with-bison-exception",
      "GPL-2.0-with-classpath-exception",
      "GPL-2.0-with-font-exception",
      "GPL-3.0",
      "GPL-3.0-with-GCC-exception",
      "GPL-3.0-with-autoconf-exception",
      "LGPL-2.0",
      "LGPL-2.1",
      "LGPL-3.0",
      "Net-SNMP",
      "Nunit",
      "StandardML-NJ",
      "bzip2-1.0.5",
      "eCos-2.0",
      "wxWindows"
    ];
  }
});

// node_modules/spdx-exceptions/index.json
var require_spdx_exceptions = __commonJS({
  "node_modules/spdx-exceptions/index.json"(exports2, module2) {
    module2.exports = [
      "389-exception",
      "Asterisk-exception",
      "Autoconf-exception-2.0",
      "Autoconf-exception-3.0",
      "Autoconf-exception-generic",
      "Autoconf-exception-generic-3.0",
      "Autoconf-exception-macro",
      "Bison-exception-1.24",
      "Bison-exception-2.2",
      "Bootloader-exception",
      "Classpath-exception-2.0",
      "CLISP-exception-2.0",
      "cryptsetup-OpenSSL-exception",
      "DigiRule-FOSS-exception",
      "eCos-exception-2.0",
      "Fawkes-Runtime-exception",
      "FLTK-exception",
      "fmt-exception",
      "Font-exception-2.0",
      "freertos-exception-2.0",
      "GCC-exception-2.0",
      "GCC-exception-2.0-note",
      "GCC-exception-3.1",
      "Gmsh-exception",
      "GNAT-exception",
      "GNOME-examples-exception",
      "GNU-compiler-exception",
      "gnu-javamail-exception",
      "GPL-3.0-interface-exception",
      "GPL-3.0-linking-exception",
      "GPL-3.0-linking-source-exception",
      "GPL-CC-1.0",
      "GStreamer-exception-2005",
      "GStreamer-exception-2008",
      "i2p-gpl-java-exception",
      "KiCad-libraries-exception",
      "LGPL-3.0-linking-exception",
      "libpri-OpenH323-exception",
      "Libtool-exception",
      "Linux-syscall-note",
      "LLGPL",
      "LLVM-exception",
      "LZMA-exception",
      "mif-exception",
      "OCaml-LGPL-linking-exception",
      "OCCT-exception-1.0",
      "OpenJDK-assembly-exception-1.0",
      "openvpn-openssl-exception",
      "PS-or-PDF-font-exception-20170817",
      "QPL-1.0-INRIA-2004-exception",
      "Qt-GPL-exception-1.0",
      "Qt-LGPL-exception-1.1",
      "Qwt-exception-1.0",
      "SANE-exception",
      "SHL-2.0",
      "SHL-2.1",
      "stunnel-exception",
      "SWI-exception",
      "Swift-exception",
      "Texinfo-exception",
      "u-boot-exception-2.0",
      "UBDL-exception",
      "Universal-FOSS-exception-1.0",
      "vsftpd-openssl-exception",
      "WxWindows-exception-3.1",
      "x11vnc-openssl-exception"
    ];
  }
});

// node_modules/spdx-expression-parse/scan.js
var require_scan = __commonJS({
  "node_modules/spdx-expression-parse/scan.js"(exports2, module2) {
    "use strict";
    var licenses = [].concat(require_spdx_license_ids()).concat(require_deprecated());
    var exceptions = require_spdx_exceptions();
    module2.exports = function(source) {
      var index = 0;
      function hasMore() {
        return index < source.length;
      }
      function read(value) {
        if (value instanceof RegExp) {
          var chars = source.slice(index);
          var match = chars.match(value);
          if (match) {
            index += match[0].length;
            return match[0];
          }
        } else {
          if (source.indexOf(value, index) === index) {
            index += value.length;
            return value;
          }
        }
      }
      function skipWhitespace() {
        read(/[ ]*/);
      }
      function operator() {
        var string;
        var possibilities = ["WITH", "AND", "OR", "(", ")", ":", "+"];
        for (var i = 0; i < possibilities.length; i++) {
          string = read(possibilities[i]);
          if (string) {
            break;
          }
        }
        if (string === "+" && index > 1 && source[index - 2] === " ") {
          throw new Error("Space before `+`");
        }
        return string && {
          type: "OPERATOR",
          string
        };
      }
      function idstring() {
        return read(/[A-Za-z0-9-.]+/);
      }
      function expectIdstring() {
        var string = idstring();
        if (!string) {
          throw new Error("Expected idstring at offset " + index);
        }
        return string;
      }
      function documentRef() {
        if (read("DocumentRef-")) {
          var string = expectIdstring();
          return { type: "DOCUMENTREF", string };
        }
      }
      function licenseRef() {
        if (read("LicenseRef-")) {
          var string = expectIdstring();
          return { type: "LICENSEREF", string };
        }
      }
      function identifier() {
        var begin = index;
        var string = idstring();
        if (licenses.indexOf(string) !== -1) {
          return {
            type: "LICENSE",
            string
          };
        } else if (exceptions.indexOf(string) !== -1) {
          return {
            type: "EXCEPTION",
            string
          };
        }
        index = begin;
      }
      function parseToken() {
        return operator() || documentRef() || licenseRef() || identifier();
      }
      var tokens = [];
      while (hasMore()) {
        skipWhitespace();
        if (!hasMore()) {
          break;
        }
        var token = parseToken();
        if (!token) {
          throw new Error("Unexpected `" + source[index] + "` at offset " + index);
        }
        tokens.push(token);
      }
      return tokens;
    };
  }
});

// node_modules/spdx-expression-parse/parse.js
var require_parse = __commonJS({
  "node_modules/spdx-expression-parse/parse.js"(exports2, module2) {
    "use strict";
    module2.exports = function(tokens) {
      var index = 0;
      function hasMore() {
        return index < tokens.length;
      }
      function token() {
        return hasMore() ? tokens[index] : null;
      }
      function next() {
        if (!hasMore()) {
          throw new Error();
        }
        index++;
      }
      function parseOperator(operator) {
        var t = token();
        if (t && t.type === "OPERATOR" && operator === t.string) {
          next();
          return t.string;
        }
      }
      function parseWith() {
        if (parseOperator("WITH")) {
          var t = token();
          if (t && t.type === "EXCEPTION") {
            next();
            return t.string;
          }
          throw new Error("Expected exception after `WITH`");
        }
      }
      function parseLicenseRef() {
        var begin = index;
        var string = "";
        var t = token();
        if (t.type === "DOCUMENTREF") {
          next();
          string += "DocumentRef-" + t.string + ":";
          if (!parseOperator(":")) {
            throw new Error("Expected `:` after `DocumentRef-...`");
          }
        }
        t = token();
        if (t.type === "LICENSEREF") {
          next();
          string += "LicenseRef-" + t.string;
          return { license: string };
        }
        index = begin;
      }
      function parseLicense() {
        var t = token();
        if (t && t.type === "LICENSE") {
          next();
          var node2 = { license: t.string };
          if (parseOperator("+")) {
            node2.plus = true;
          }
          var exception = parseWith();
          if (exception) {
            node2.exception = exception;
          }
          return node2;
        }
      }
      function parseParenthesizedExpression() {
        var left = parseOperator("(");
        if (!left) {
          return;
        }
        var expr = parseExpression();
        if (!parseOperator(")")) {
          throw new Error("Expected `)`");
        }
        return expr;
      }
      function parseAtom() {
        return parseParenthesizedExpression() || parseLicenseRef() || parseLicense();
      }
      function makeBinaryOpParser(operator, nextParser) {
        return function parseBinaryOp() {
          var left = nextParser();
          if (!left) {
            return;
          }
          if (!parseOperator(operator)) {
            return left;
          }
          var right = parseBinaryOp();
          if (!right) {
            throw new Error("Expected expression");
          }
          return {
            left,
            conjunction: operator.toLowerCase(),
            right
          };
        };
      }
      var parseAnd = makeBinaryOpParser("AND", parseAtom);
      var parseExpression = makeBinaryOpParser("OR", parseAnd);
      var node = parseExpression();
      if (!node || hasMore()) {
        throw new Error("Syntax error");
      }
      return node;
    };
  }
});

// node_modules/spdx-expression-parse/index.js
var require_spdx_expression_parse = __commonJS({
  "node_modules/spdx-expression-parse/index.js"(exports2, module2) {
    "use strict";
    var scan = require_scan();
    var parse = require_parse();
    module2.exports = function(source) {
      return parse(scan(source));
    };
  }
});

// node_modules/spdx-correct/index.js
var require_spdx_correct = __commonJS({
  "node_modules/spdx-correct/index.js"(exports2, module2) {
    var parse = require_spdx_expression_parse();
    var spdxLicenseIds = require_spdx_license_ids();
    function valid(string) {
      try {
        parse(string);
        return true;
      } catch (error) {
        return false;
      }
    }
    function sortTranspositions(a, b) {
      var length = b[0].length - a[0].length;
      if (length !== 0) return length;
      return a[0].toUpperCase().localeCompare(b[0].toUpperCase());
    }
    var transpositions = [
      ["APGL", "AGPL"],
      ["Gpl", "GPL"],
      ["GLP", "GPL"],
      ["APL", "Apache"],
      ["ISD", "ISC"],
      ["GLP", "GPL"],
      ["IST", "ISC"],
      ["Claude", "Clause"],
      [" or later", "+"],
      [" International", ""],
      ["GNU", "GPL"],
      ["GUN", "GPL"],
      ["+", ""],
      ["GNU GPL", "GPL"],
      ["GNU LGPL", "LGPL"],
      ["GNU/GPL", "GPL"],
      ["GNU GLP", "GPL"],
      ["GNU LESSER GENERAL PUBLIC LICENSE", "LGPL"],
      ["GNU Lesser General Public License", "LGPL"],
      ["GNU LESSER GENERAL PUBLIC LICENSE", "LGPL-2.1"],
      ["GNU Lesser General Public License", "LGPL-2.1"],
      ["LESSER GENERAL PUBLIC LICENSE", "LGPL"],
      ["Lesser General Public License", "LGPL"],
      ["LESSER GENERAL PUBLIC LICENSE", "LGPL-2.1"],
      ["Lesser General Public License", "LGPL-2.1"],
      ["GNU General Public License", "GPL"],
      ["Gnu public license", "GPL"],
      ["GNU Public License", "GPL"],
      ["GNU GENERAL PUBLIC LICENSE", "GPL"],
      ["MTI", "MIT"],
      ["Mozilla Public License", "MPL"],
      ["Universal Permissive License", "UPL"],
      ["WTH", "WTF"],
      ["WTFGPL", "WTFPL"],
      ["-License", ""]
    ].sort(sortTranspositions);
    var TRANSPOSED = 0;
    var CORRECT = 1;
    var transforms = [
      // e.g. 'mit'
      function(argument) {
        return argument.toUpperCase();
      },
      // e.g. 'MIT '
      function(argument) {
        return argument.trim();
      },
      // e.g. 'M.I.T.'
      function(argument) {
        return argument.replace(/\./g, "");
      },
      // e.g. 'Apache- 2.0'
      function(argument) {
        return argument.replace(/\s+/g, "");
      },
      // e.g. 'CC BY 4.0''
      function(argument) {
        return argument.replace(/\s+/g, "-");
      },
      // e.g. 'LGPLv2.1'
      function(argument) {
        return argument.replace("v", "-");
      },
      // e.g. 'Apache 2.0'
      function(argument) {
        return argument.replace(/,?\s*(\d)/, "-$1");
      },
      // e.g. 'GPL 2'
      function(argument) {
        return argument.replace(/,?\s*(\d)/, "-$1.0");
      },
      // e.g. 'Apache Version 2.0'
      function(argument) {
        return argument.replace(/,?\s*(V\.|v\.|V|v|Version|version)\s*(\d)/, "-$2");
      },
      // e.g. 'Apache Version 2'
      function(argument) {
        return argument.replace(/,?\s*(V\.|v\.|V|v|Version|version)\s*(\d)/, "-$2.0");
      },
      // e.g. 'ZLIB'
      function(argument) {
        return argument[0].toUpperCase() + argument.slice(1);
      },
      // e.g. 'MPL/2.0'
      function(argument) {
        return argument.replace("/", "-");
      },
      // e.g. 'Apache 2'
      function(argument) {
        return argument.replace(/\s*V\s*(\d)/, "-$1").replace(/(\d)$/, "$1.0");
      },
      // e.g. 'GPL-2.0', 'GPL-3.0'
      function(argument) {
        if (argument.indexOf("3.0") !== -1) {
          return argument + "-or-later";
        } else {
          return argument + "-only";
        }
      },
      // e.g. 'GPL-2.0-'
      function(argument) {
        return argument + "only";
      },
      // e.g. 'GPL2'
      function(argument) {
        return argument.replace(/(\d)$/, "-$1.0");
      },
      // e.g. 'BSD 3'
      function(argument) {
        return argument.replace(/(-| )?(\d)$/, "-$2-Clause");
      },
      // e.g. 'BSD clause 3'
      function(argument) {
        return argument.replace(/(-| )clause(-| )(\d)/, "-$3-Clause");
      },
      // e.g. 'New BSD license'
      function(argument) {
        return argument.replace(/\b(Modified|New|Revised)(-| )?BSD((-| )License)?/i, "BSD-3-Clause");
      },
      // e.g. 'Simplified BSD license'
      function(argument) {
        return argument.replace(/\bSimplified(-| )?BSD((-| )License)?/i, "BSD-2-Clause");
      },
      // e.g. 'Free BSD license'
      function(argument) {
        return argument.replace(/\b(Free|Net)(-| )?BSD((-| )License)?/i, "BSD-2-Clause-$1BSD");
      },
      // e.g. 'Clear BSD license'
      function(argument) {
        return argument.replace(/\bClear(-| )?BSD((-| )License)?/i, "BSD-3-Clause-Clear");
      },
      // e.g. 'Old BSD License'
      function(argument) {
        return argument.replace(/\b(Old|Original)(-| )?BSD((-| )License)?/i, "BSD-4-Clause");
      },
      // e.g. 'BY-NC-4.0'
      function(argument) {
        return "CC-" + argument;
      },
      // e.g. 'BY-NC'
      function(argument) {
        return "CC-" + argument + "-4.0";
      },
      // e.g. 'Attribution-NonCommercial'
      function(argument) {
        return argument.replace("Attribution", "BY").replace("NonCommercial", "NC").replace("NoDerivatives", "ND").replace(/ (\d)/, "-$1").replace(/ ?International/, "");
      },
      // e.g. 'Attribution-NonCommercial'
      function(argument) {
        return "CC-" + argument.replace("Attribution", "BY").replace("NonCommercial", "NC").replace("NoDerivatives", "ND").replace(/ (\d)/, "-$1").replace(/ ?International/, "") + "-4.0";
      }
    ];
    var licensesWithVersions = spdxLicenseIds.map(function(id) {
      var match = /^(.*)-\d+\.\d+$/.exec(id);
      return match ? [match[0], match[1]] : [id, null];
    }).reduce(function(objectMap, item) {
      var key = item[1];
      objectMap[key] = objectMap[key] || [];
      objectMap[key].push(item[0]);
      return objectMap;
    }, {});
    var licensesWithOneVersion = Object.keys(licensesWithVersions).map(function makeEntries(key) {
      return [key, licensesWithVersions[key]];
    }).filter(function identifySoleVersions(item) {
      return (
        // Licenses has just one valid version suffix.
        item[1].length === 1 && item[0] !== null && // APL will be considered Apache, rather than APL-1.0
        item[0] !== "APL"
      );
    }).map(function createLastResorts(item) {
      return [item[0], item[1][0]];
    });
    licensesWithVersions = void 0;
    var lastResorts = [
      ["UNLI", "Unlicense"],
      ["WTF", "WTFPL"],
      ["2 CLAUSE", "BSD-2-Clause"],
      ["2-CLAUSE", "BSD-2-Clause"],
      ["3 CLAUSE", "BSD-3-Clause"],
      ["3-CLAUSE", "BSD-3-Clause"],
      ["AFFERO", "AGPL-3.0-or-later"],
      ["AGPL", "AGPL-3.0-or-later"],
      ["APACHE", "Apache-2.0"],
      ["ARTISTIC", "Artistic-2.0"],
      ["Affero", "AGPL-3.0-or-later"],
      ["BEER", "Beerware"],
      ["BOOST", "BSL-1.0"],
      ["BSD", "BSD-2-Clause"],
      ["CDDL", "CDDL-1.1"],
      ["ECLIPSE", "EPL-1.0"],
      ["FUCK", "WTFPL"],
      ["GNU", "GPL-3.0-or-later"],
      ["LGPL", "LGPL-3.0-or-later"],
      ["GPLV1", "GPL-1.0-only"],
      ["GPL-1", "GPL-1.0-only"],
      ["GPLV2", "GPL-2.0-only"],
      ["GPL-2", "GPL-2.0-only"],
      ["GPL", "GPL-3.0-or-later"],
      ["MIT +NO-FALSE-ATTRIBS", "MITNFA"],
      ["MIT", "MIT"],
      ["MPL", "MPL-2.0"],
      ["X11", "X11"],
      ["ZLIB", "Zlib"]
    ].concat(licensesWithOneVersion).sort(sortTranspositions);
    var SUBSTRING = 0;
    var IDENTIFIER = 1;
    var validTransformation = function(identifier) {
      for (var i = 0; i < transforms.length; i++) {
        var transformed = transforms[i](identifier).trim();
        if (transformed !== identifier && valid(transformed)) {
          return transformed;
        }
      }
      return null;
    };
    var validLastResort = function(identifier) {
      var upperCased = identifier.toUpperCase();
      for (var i = 0; i < lastResorts.length; i++) {
        var lastResort = lastResorts[i];
        if (upperCased.indexOf(lastResort[SUBSTRING]) > -1) {
          return lastResort[IDENTIFIER];
        }
      }
      return null;
    };
    var anyCorrection = function(identifier, check) {
      for (var i = 0; i < transpositions.length; i++) {
        var transposition = transpositions[i];
        var transposed = transposition[TRANSPOSED];
        if (identifier.indexOf(transposed) > -1) {
          var corrected = identifier.replace(
            transposed,
            transposition[CORRECT]
          );
          var checked = check(corrected);
          if (checked !== null) {
            return checked;
          }
        }
      }
      return null;
    };
    module2.exports = function(identifier, options) {
      options = options || {};
      var upgrade = options.upgrade === void 0 ? true : !!options.upgrade;
      function postprocess(value) {
        return upgrade ? upgradeGPLs(value) : value;
      }
      var validArugment = typeof identifier === "string" && identifier.trim().length !== 0;
      if (!validArugment) {
        throw Error("Invalid argument. Expected non-empty string.");
      }
      identifier = identifier.trim();
      if (valid(identifier)) {
        return postprocess(identifier);
      }
      var noPlus = identifier.replace(/\+$/, "").trim();
      if (valid(noPlus)) {
        return postprocess(noPlus);
      }
      var transformed = validTransformation(identifier);
      if (transformed !== null) {
        return postprocess(transformed);
      }
      transformed = anyCorrection(identifier, function(argument) {
        if (valid(argument)) {
          return argument;
        }
        return validTransformation(argument);
      });
      if (transformed !== null) {
        return postprocess(transformed);
      }
      transformed = validLastResort(identifier);
      if (transformed !== null) {
        return postprocess(transformed);
      }
      transformed = anyCorrection(identifier, validLastResort);
      if (transformed !== null) {
        return postprocess(transformed);
      }
      return null;
    };
    function upgradeGPLs(value) {
      if ([
        "GPL-1.0",
        "LGPL-1.0",
        "AGPL-1.0",
        "GPL-2.0",
        "LGPL-2.0",
        "AGPL-2.0",
        "LGPL-2.1"
      ].indexOf(value) !== -1) {
        return value + "-only";
      } else if ([
        "GPL-1.0+",
        "GPL-2.0+",
        "GPL-3.0+",
        "LGPL-2.0+",
        "LGPL-2.1+",
        "LGPL-3.0+",
        "AGPL-1.0+",
        "AGPL-3.0+"
      ].indexOf(value) !== -1) {
        return value.replace(/\+$/, "-or-later");
      } else if (["GPL-3.0", "LGPL-3.0", "AGPL-3.0"].indexOf(value) !== -1) {
        return value + "-or-later";
      } else {
        return value;
      }
    }
  }
});

// node_modules/validate-npm-package-license/index.js
var require_validate_npm_package_license = __commonJS({
  "node_modules/validate-npm-package-license/index.js"(exports2, module2) {
    var parse = require_spdx_expression_parse();
    var correct = require_spdx_correct();
    var genericWarning = 'license should be a valid SPDX license expression (without "LicenseRef"), "UNLICENSED", or "SEE LICENSE IN <filename>"';
    var fileReferenceRE = /^SEE LICEN[CS]E IN (.+)$/;
    function startsWith(prefix, string) {
      return string.slice(0, prefix.length) === prefix;
    }
    function usesLicenseRef(ast) {
      if (ast.hasOwnProperty("license")) {
        var license = ast.license;
        return startsWith("LicenseRef", license) || startsWith("DocumentRef", license);
      } else {
        return usesLicenseRef(ast.left) || usesLicenseRef(ast.right);
      }
    }
    module2.exports = function(argument) {
      var ast;
      try {
        ast = parse(argument);
      } catch (e) {
        var match;
        if (argument === "UNLICENSED" || argument === "UNLICENCED") {
          return {
            validForOldPackages: true,
            validForNewPackages: true,
            unlicensed: true
          };
        } else if (match = fileReferenceRE.exec(argument)) {
          return {
            validForOldPackages: true,
            validForNewPackages: true,
            inFile: match[1]
          };
        } else {
          var result = {
            validForOldPackages: false,
            validForNewPackages: false,
            warnings: [genericWarning]
          };
          if (argument.trim().length !== 0) {
            var corrected = correct(argument);
            if (corrected) {
              result.warnings.push(
                'license is similar to the valid expression "' + corrected + '"'
              );
            }
          }
          return result;
        }
      }
      if (usesLicenseRef(ast)) {
        return {
          validForNewPackages: false,
          validForOldPackages: false,
          spdx: true,
          warnings: [genericWarning]
        };
      } else {
        return {
          validForNewPackages: true,
          validForOldPackages: true,
          spdx: true
        };
      }
    };
  }
});

// node_modules/hosted-git-info/git-host-info.js
var require_git_host_info = __commonJS({
  "node_modules/hosted-git-info/git-host-info.js"(exports2, module2) {
    "use strict";
    var gitHosts = module2.exports = {
      github: {
        // First two are insecure and generally shouldn't be used any more, but
        // they are still supported.
        "protocols": ["git", "http", "git+ssh", "git+https", "ssh", "https"],
        "domain": "github.com",
        "treepath": "tree",
        "filetemplate": "https://{auth@}raw.githubusercontent.com/{user}/{project}/{committish}/{path}",
        "bugstemplate": "https://{domain}/{user}/{project}/issues",
        "gittemplate": "git://{auth@}{domain}/{user}/{project}.git{#committish}",
        "tarballtemplate": "https://codeload.{domain}/{user}/{project}/tar.gz/{committish}"
      },
      bitbucket: {
        "protocols": ["git+ssh", "git+https", "ssh", "https"],
        "domain": "bitbucket.org",
        "treepath": "src",
        "tarballtemplate": "https://{domain}/{user}/{project}/get/{committish}.tar.gz"
      },
      gitlab: {
        "protocols": ["git+ssh", "git+https", "ssh", "https"],
        "domain": "gitlab.com",
        "treepath": "tree",
        "bugstemplate": "https://{domain}/{user}/{project}/issues",
        "httpstemplate": "git+https://{auth@}{domain}/{user}/{projectPath}.git{#committish}",
        "tarballtemplate": "https://{domain}/{user}/{project}/repository/archive.tar.gz?ref={committish}",
        "pathmatch": /^[/]([^/]+)[/]((?!.*(\/-\/|\/repository\/archive\.tar\.gz\?=.*|\/repository\/[^/]+\/archive.tar.gz$)).*?)(?:[.]git|[/])?$/
      },
      gist: {
        "protocols": ["git", "git+ssh", "git+https", "ssh", "https"],
        "domain": "gist.github.com",
        "pathmatch": /^[/](?:([^/]+)[/])?([a-z0-9]{32,})(?:[.]git)?$/,
        "filetemplate": "https://gist.githubusercontent.com/{user}/{project}/raw{/committish}/{path}",
        "bugstemplate": "https://{domain}/{project}",
        "gittemplate": "git://{domain}/{project}.git{#committish}",
        "sshtemplate": "git@{domain}:/{project}.git{#committish}",
        "sshurltemplate": "git+ssh://git@{domain}/{project}.git{#committish}",
        "browsetemplate": "https://{domain}/{project}{/committish}",
        "browsefiletemplate": "https://{domain}/{project}{/committish}{#path}",
        "docstemplate": "https://{domain}/{project}{/committish}",
        "httpstemplate": "git+https://{domain}/{project}.git{#committish}",
        "shortcuttemplate": "{type}:{project}{#committish}",
        "pathtemplate": "{project}{#committish}",
        "tarballtemplate": "https://codeload.github.com/gist/{project}/tar.gz/{committish}",
        "hashformat": function(fragment) {
          return "file-" + formatHashFragment(fragment);
        }
      }
    };
    var gitHostDefaults = {
      "sshtemplate": "git@{domain}:{user}/{project}.git{#committish}",
      "sshurltemplate": "git+ssh://git@{domain}/{user}/{project}.git{#committish}",
      "browsetemplate": "https://{domain}/{user}/{project}{/tree/committish}",
      "browsefiletemplate": "https://{domain}/{user}/{project}/{treepath}/{committish}/{path}{#fragment}",
      "docstemplate": "https://{domain}/{user}/{project}{/tree/committish}#readme",
      "httpstemplate": "git+https://{auth@}{domain}/{user}/{project}.git{#committish}",
      "filetemplate": "https://{domain}/{user}/{project}/raw/{committish}/{path}",
      "shortcuttemplate": "{type}:{user}/{project}{#committish}",
      "pathtemplate": "{user}/{project}{#committish}",
      "pathmatch": /^[/]([^/]+)[/]([^/]+?)(?:[.]git|[/])?$/,
      "hashformat": formatHashFragment
    };
    Object.keys(gitHosts).forEach(function(name) {
      Object.keys(gitHostDefaults).forEach(function(key) {
        if (gitHosts[name][key]) return;
        gitHosts[name][key] = gitHostDefaults[key];
      });
      gitHosts[name].protocols_re = RegExp("^(" + gitHosts[name].protocols.map(function(protocol) {
        return protocol.replace(/([\\+*{}()[\]$^|])/g, "\\$1");
      }).join("|") + "):$");
    });
    function formatHashFragment(fragment) {
      return fragment.toLowerCase().replace(/^\W+|\/|\W+$/g, "").replace(/\W+/g, "-");
    }
  }
});

// node_modules/hosted-git-info/git-host.js
var require_git_host = __commonJS({
  "node_modules/hosted-git-info/git-host.js"(exports2, module2) {
    "use strict";
    var gitHosts = require_git_host_info();
    var extend = Object.assign || function _extend(target, source) {
      if (source === null || typeof source !== "object") return target;
      var keys = Object.keys(source);
      var i = keys.length;
      while (i--) {
        target[keys[i]] = source[keys[i]];
      }
      return target;
    };
    module2.exports = GitHost;
    function GitHost(type, user, auth, project, committish, defaultRepresentation, opts) {
      var gitHostInfo = this;
      gitHostInfo.type = type;
      Object.keys(gitHosts[type]).forEach(function(key) {
        gitHostInfo[key] = gitHosts[type][key];
      });
      gitHostInfo.user = user;
      gitHostInfo.auth = auth;
      gitHostInfo.project = project;
      gitHostInfo.committish = committish;
      gitHostInfo.default = defaultRepresentation;
      gitHostInfo.opts = opts || {};
    }
    GitHost.prototype.hash = function() {
      return this.committish ? "#" + this.committish : "";
    };
    GitHost.prototype._fill = function(template, opts) {
      if (!template) return;
      var vars = extend({}, opts);
      vars.path = vars.path ? vars.path.replace(/^[/]+/g, "") : "";
      opts = extend(extend({}, this.opts), opts);
      var self = this;
      Object.keys(this).forEach(function(key) {
        if (self[key] != null && vars[key] == null) vars[key] = self[key];
      });
      var rawAuth = vars.auth;
      var rawcommittish = vars.committish;
      var rawFragment = vars.fragment;
      var rawPath = vars.path;
      var rawProject = vars.project;
      Object.keys(vars).forEach(function(key) {
        var value = vars[key];
        if ((key === "path" || key === "project") && typeof value === "string") {
          vars[key] = value.split("/").map(function(pathComponent) {
            return encodeURIComponent(pathComponent);
          }).join("/");
        } else {
          vars[key] = encodeURIComponent(value);
        }
      });
      vars["auth@"] = rawAuth ? rawAuth + "@" : "";
      vars["#fragment"] = rawFragment ? "#" + this.hashformat(rawFragment) : "";
      vars.fragment = vars.fragment ? vars.fragment : "";
      vars["#path"] = rawPath ? "#" + this.hashformat(rawPath) : "";
      vars["/path"] = vars.path ? "/" + vars.path : "";
      vars.projectPath = rawProject.split("/").map(encodeURIComponent).join("/");
      if (opts.noCommittish) {
        vars["#committish"] = "";
        vars["/tree/committish"] = "";
        vars["/committish"] = "";
        vars.committish = "";
      } else {
        vars["#committish"] = rawcommittish ? "#" + rawcommittish : "";
        vars["/tree/committish"] = vars.committish ? "/" + vars.treepath + "/" + vars.committish : "";
        vars["/committish"] = vars.committish ? "/" + vars.committish : "";
        vars.committish = vars.committish || "master";
      }
      var res = template;
      Object.keys(vars).forEach(function(key) {
        res = res.replace(new RegExp("[{]" + key + "[}]", "g"), vars[key]);
      });
      if (opts.noGitPlus) {
        return res.replace(/^git[+]/, "");
      } else {
        return res;
      }
    };
    GitHost.prototype.ssh = function(opts) {
      return this._fill(this.sshtemplate, opts);
    };
    GitHost.prototype.sshurl = function(opts) {
      return this._fill(this.sshurltemplate, opts);
    };
    GitHost.prototype.browse = function(P, F, opts) {
      if (typeof P === "string") {
        if (typeof F !== "string") {
          opts = F;
          F = null;
        }
        return this._fill(this.browsefiletemplate, extend({
          fragment: F,
          path: P
        }, opts));
      } else {
        return this._fill(this.browsetemplate, P);
      }
    };
    GitHost.prototype.docs = function(opts) {
      return this._fill(this.docstemplate, opts);
    };
    GitHost.prototype.bugs = function(opts) {
      return this._fill(this.bugstemplate, opts);
    };
    GitHost.prototype.https = function(opts) {
      return this._fill(this.httpstemplate, opts);
    };
    GitHost.prototype.git = function(opts) {
      return this._fill(this.gittemplate, opts);
    };
    GitHost.prototype.shortcut = function(opts) {
      return this._fill(this.shortcuttemplate, opts);
    };
    GitHost.prototype.path = function(opts) {
      return this._fill(this.pathtemplate, opts);
    };
    GitHost.prototype.tarball = function(opts_) {
      var opts = extend({}, opts_, { noCommittish: false });
      return this._fill(this.tarballtemplate, opts);
    };
    GitHost.prototype.file = function(P, opts) {
      return this._fill(this.filetemplate, extend({ path: P }, opts));
    };
    GitHost.prototype.getDefaultRepresentation = function() {
      return this.default;
    };
    GitHost.prototype.toString = function(opts) {
      if (this.default && typeof this[this.default] === "function") return this[this.default](opts);
      return this.sshurl(opts);
    };
  }
});

// node_modules/hosted-git-info/index.js
var require_hosted_git_info = __commonJS({
  "node_modules/hosted-git-info/index.js"(exports2, module2) {
    "use strict";
    var url = require("url");
    var gitHosts = require_git_host_info();
    var GitHost = module2.exports = require_git_host();
    var protocolToRepresentationMap = {
      "git+ssh:": "sshurl",
      "git+https:": "https",
      "ssh:": "sshurl",
      "git:": "git"
    };
    function protocolToRepresentation(protocol) {
      return protocolToRepresentationMap[protocol] || protocol.slice(0, -1);
    }
    var authProtocols = {
      "git:": true,
      "https:": true,
      "git+https:": true,
      "http:": true,
      "git+http:": true
    };
    var cache = {};
    module2.exports.fromUrl = function(giturl, opts) {
      if (typeof giturl !== "string") return;
      var key = giturl + JSON.stringify(opts || {});
      if (!(key in cache)) {
        cache[key] = fromUrl(giturl, opts);
      }
      return cache[key];
    };
    function fromUrl(giturl, opts) {
      if (giturl == null || giturl === "") return;
      var url2 = fixupUnqualifiedGist(
        isGitHubShorthand(giturl) ? "github:" + giturl : giturl
      );
      var parsed = parseGitUrl(url2);
      var shortcutMatch = url2.match(/^([^:]+):(?:[^@]+@)?(?:([^/]*)\/)?([^#]+)/);
      var matches = Object.keys(gitHosts).map(function(gitHostName) {
        try {
          var gitHostInfo = gitHosts[gitHostName];
          var auth = null;
          if (parsed.auth && authProtocols[parsed.protocol]) {
            auth = parsed.auth;
          }
          var committish = parsed.hash ? decodeURIComponent(parsed.hash.substr(1)) : null;
          var user = null;
          var project = null;
          var defaultRepresentation = null;
          if (shortcutMatch && shortcutMatch[1] === gitHostName) {
            user = shortcutMatch[2] && decodeURIComponent(shortcutMatch[2]);
            project = decodeURIComponent(shortcutMatch[3].replace(/\.git$/, ""));
            defaultRepresentation = "shortcut";
          } else {
            if (parsed.host && parsed.host !== gitHostInfo.domain && parsed.host.replace(/^www[.]/, "") !== gitHostInfo.domain) return;
            if (!gitHostInfo.protocols_re.test(parsed.protocol)) return;
            if (!parsed.path) return;
            var pathmatch = gitHostInfo.pathmatch;
            var matched = parsed.path.match(pathmatch);
            if (!matched) return;
            if (matched[1] !== null && matched[1] !== void 0) {
              user = decodeURIComponent(matched[1].replace(/^:/, ""));
            }
            project = decodeURIComponent(matched[2]);
            defaultRepresentation = protocolToRepresentation(parsed.protocol);
          }
          return new GitHost(gitHostName, user, auth, project, committish, defaultRepresentation, opts);
        } catch (ex) {
          if (ex instanceof URIError) {
          } else throw ex;
        }
      }).filter(function(gitHostInfo) {
        return gitHostInfo;
      });
      if (matches.length !== 1) return;
      return matches[0];
    }
    function isGitHubShorthand(arg) {
      return /^[^:@%/\s.-][^:@%/\s]*[/][^:@\s/%]+(?:#.*)?$/.test(arg);
    }
    function fixupUnqualifiedGist(giturl) {
      var parsed = url.parse(giturl);
      if (parsed.protocol === "gist:" && parsed.host && !parsed.path) {
        return parsed.protocol + "/" + parsed.host;
      } else {
        return giturl;
      }
    }
    function parseGitUrl(giturl) {
      var matched = giturl.match(/^([^@]+)@([^:/]+):[/]?((?:[^/]+[/])?[^/]+?)(?:[.]git)?(#.*)?$/);
      if (!matched) {
        var legacy = url.parse(giturl);
        if (legacy.auth && typeof url.URL === "function") {
          var authmatch = giturl.match(/[^@]+@[^:/]+/);
          if (authmatch) {
            var whatwg = new url.URL(authmatch[0]);
            legacy.auth = whatwg.username || "";
            if (whatwg.password) legacy.auth += ":" + whatwg.password;
          }
        }
        return legacy;
      }
      return {
        protocol: "git+ssh:",
        slashes: true,
        auth: matched[1],
        host: matched[2],
        port: null,
        hostname: matched[2],
        hash: matched[4],
        search: null,
        query: null,
        pathname: "/" + matched[3],
        path: "/" + matched[3],
        href: "git+ssh://" + matched[1] + "@" + matched[2] + "/" + matched[3] + (matched[4] || "")
      };
    }
  }
});

// node_modules/resolve/lib/homedir.js
var require_homedir = __commonJS({
  "node_modules/resolve/lib/homedir.js"(exports2, module2) {
    "use strict";
    var os = require("os");
    module2.exports = os.homedir || function homedir() {
      var home = process.env.HOME;
      var user = process.env.LOGNAME || process.env.USER || process.env.LNAME || process.env.USERNAME;
      if (process.platform === "win32") {
        return process.env.USERPROFILE || process.env.HOMEDRIVE && process.env.HOMEPATH && process.env.HOMEDRIVE + process.env.HOMEPATH || home || null;
      }
      if (process.platform === "darwin") {
        return home || (user ? "/Users/" + user : null);
      }
      if (process.platform === "linux") {
        return home || (process.getuid() === 0 ? "/root" : user ? "/home/" + user : null);
      }
      return home || null;
    };
  }
});

// node_modules/es-errors/index.js
var require_es_errors = __commonJS({
  "node_modules/es-errors/index.js"(exports2, module2) {
    "use strict";
    module2.exports = Error;
  }
});

// node_modules/resolve/lib/caller.js
var require_caller = __commonJS({
  "node_modules/resolve/lib/caller.js"(exports2, module2) {
    "use strict";
    var $Error = require_es_errors();
    module2.exports = function() {
      var origPrepareStackTrace = $Error.prepareStackTrace;
      $Error.prepareStackTrace = function(_, stack2) {
        return stack2;
      };
      var stack = new $Error().stack;
      $Error.prepareStackTrace = origPrepareStackTrace;
      return stack[2].getFileName();
    };
  }
});

// node_modules/path-parse/index.js
var require_path_parse = __commonJS({
  "node_modules/path-parse/index.js"(exports2, module2) {
    "use strict";
    var isWindows = process.platform === "win32";
    var splitWindowsRe = /^(((?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?[\\\/]?)(?:[^\\\/]*[\\\/])*)((\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))[\\\/]*$/;
    var win32 = {};
    function win32SplitPath(filename) {
      return splitWindowsRe.exec(filename).slice(1);
    }
    win32.parse = function(pathString) {
      if (typeof pathString !== "string") {
        throw new TypeError(
          "Parameter 'pathString' must be a string, not " + typeof pathString
        );
      }
      var allParts = win32SplitPath(pathString);
      if (!allParts || allParts.length !== 5) {
        throw new TypeError("Invalid path '" + pathString + "'");
      }
      return {
        root: allParts[1],
        dir: allParts[0] === allParts[1] ? allParts[0] : allParts[0].slice(0, -1),
        base: allParts[2],
        ext: allParts[4],
        name: allParts[3]
      };
    };
    var splitPathRe = /^((\/?)(?:[^\/]*\/)*)((\.{1,2}|[^\/]+?|)(\.[^.\/]*|))[\/]*$/;
    var posix = {};
    function posixSplitPath(filename) {
      return splitPathRe.exec(filename).slice(1);
    }
    posix.parse = function(pathString) {
      if (typeof pathString !== "string") {
        throw new TypeError(
          "Parameter 'pathString' must be a string, not " + typeof pathString
        );
      }
      var allParts = posixSplitPath(pathString);
      if (!allParts || allParts.length !== 5) {
        throw new TypeError("Invalid path '" + pathString + "'");
      }
      return {
        root: allParts[1],
        dir: allParts[0].slice(0, -1),
        base: allParts[2],
        ext: allParts[4],
        name: allParts[3]
      };
    };
    if (isWindows)
      module2.exports = win32.parse;
    else
      module2.exports = posix.parse;
    module2.exports.posix = posix.parse;
    module2.exports.win32 = win32.parse;
  }
});

// node_modules/resolve/lib/node-modules-paths.js
var require_node_modules_paths = __commonJS({
  "node_modules/resolve/lib/node-modules-paths.js"(exports2, module2) {
    var path = require("path");
    var parse = path.parse || require_path_parse();
    var driveLetterRegex = /^([A-Za-z]:)/;
    var uncPathRegex = /^\\\\/;
    function getNodeModulesDirs(absoluteStart, modules) {
      var prefix = "/";
      if (driveLetterRegex.test(absoluteStart)) {
        prefix = "";
      } else if (uncPathRegex.test(absoluteStart)) {
        prefix = "\\\\";
      }
      var paths = [absoluteStart];
      var parsed = parse(absoluteStart);
      while (parsed.dir !== paths[paths.length - 1]) {
        paths.push(parsed.dir);
        parsed = parse(parsed.dir);
      }
      return paths.reduce(function(dirs, aPath) {
        return dirs.concat(modules.map(function(moduleDir) {
          return path.resolve(prefix, aPath, moduleDir);
        }));
      }, []);
    }
    module2.exports = function nodeModulesPaths(start, opts, request) {
      var modules = opts && opts.moduleDirectory ? [].concat(opts.moduleDirectory) : ["node_modules"];
      if (opts && typeof opts.paths === "function") {
        return opts.paths(
          request,
          start,
          function() {
            return getNodeModulesDirs(start, modules);
          },
          opts
        );
      }
      var dirs = getNodeModulesDirs(start, modules);
      return opts && opts.paths ? dirs.concat(opts.paths) : dirs;
    };
  }
});

// node_modules/resolve/lib/normalize-options.js
var require_normalize_options = __commonJS({
  "node_modules/resolve/lib/normalize-options.js"(exports2, module2) {
    module2.exports = function(x, opts) {
      return opts || {};
    };
  }
});

// node_modules/function-bind/implementation.js
var require_implementation = __commonJS({
  "node_modules/function-bind/implementation.js"(exports2, module2) {
    "use strict";
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var toStr = Object.prototype.toString;
    var max = Math.max;
    var funcType = "[object Function]";
    var concatty = function concatty2(a, b) {
      var arr = [];
      for (var i = 0; i < a.length; i += 1) {
        arr[i] = a[i];
      }
      for (var j = 0; j < b.length; j += 1) {
        arr[j + a.length] = b[j];
      }
      return arr;
    };
    var slicy = function slicy2(arrLike, offset) {
      var arr = [];
      for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
        arr[j] = arrLike[i];
      }
      return arr;
    };
    var joiny = function(arr, joiner) {
      var str = "";
      for (var i = 0; i < arr.length; i += 1) {
        str += arr[i];
        if (i + 1 < arr.length) {
          str += joiner;
        }
      }
      return str;
    };
    module2.exports = function bind(that) {
      var target = this;
      if (typeof target !== "function" || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slicy(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result = target.apply(
            this,
            concatty(args, arguments)
          );
          if (Object(result) === result) {
            return result;
          }
          return this;
        }
        return target.apply(
          that,
          concatty(args, arguments)
        );
      };
      var boundLength = max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs[i] = "$" + i;
      }
      bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty = function Empty2() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    };
  }
});

// node_modules/function-bind/index.js
var require_function_bind = __commonJS({
  "node_modules/function-bind/index.js"(exports2, module2) {
    "use strict";
    var implementation = require_implementation();
    module2.exports = Function.prototype.bind || implementation;
  }
});

// node_modules/hasown/index.js
var require_hasown = __commonJS({
  "node_modules/hasown/index.js"(exports2, module2) {
    "use strict";
    var call = Function.prototype.call;
    var $hasOwn = Object.prototype.hasOwnProperty;
    var bind = require_function_bind();
    module2.exports = bind.call(call, $hasOwn);
  }
});

// node_modules/is-core-module/core.json
var require_core = __commonJS({
  "node_modules/is-core-module/core.json"(exports2, module2) {
    module2.exports = {
      assert: true,
      "node:assert": [">= 14.18 && < 15", ">= 16"],
      "assert/strict": ">= 15",
      "node:assert/strict": ">= 16",
      async_hooks: ">= 8",
      "node:async_hooks": [">= 14.18 && < 15", ">= 16"],
      buffer_ieee754: ">= 0.5 && < 0.9.7",
      buffer: true,
      "node:buffer": [">= 14.18 && < 15", ">= 16"],
      child_process: true,
      "node:child_process": [">= 14.18 && < 15", ">= 16"],
      cluster: ">= 0.5",
      "node:cluster": [">= 14.18 && < 15", ">= 16"],
      console: true,
      "node:console": [">= 14.18 && < 15", ">= 16"],
      constants: true,
      "node:constants": [">= 14.18 && < 15", ">= 16"],
      crypto: true,
      "node:crypto": [">= 14.18 && < 15", ">= 16"],
      _debug_agent: ">= 1 && < 8",
      _debugger: "< 8",
      dgram: true,
      "node:dgram": [">= 14.18 && < 15", ">= 16"],
      diagnostics_channel: [">= 14.17 && < 15", ">= 15.1"],
      "node:diagnostics_channel": [">= 14.18 && < 15", ">= 16"],
      dns: true,
      "node:dns": [">= 14.18 && < 15", ">= 16"],
      "dns/promises": ">= 15",
      "node:dns/promises": ">= 16",
      domain: ">= 0.7.12",
      "node:domain": [">= 14.18 && < 15", ">= 16"],
      events: true,
      "node:events": [">= 14.18 && < 15", ">= 16"],
      freelist: "< 6",
      fs: true,
      "node:fs": [">= 14.18 && < 15", ">= 16"],
      "fs/promises": [">= 10 && < 10.1", ">= 14"],
      "node:fs/promises": [">= 14.18 && < 15", ">= 16"],
      _http_agent: ">= 0.11.1",
      "node:_http_agent": [">= 14.18 && < 15", ">= 16"],
      _http_client: ">= 0.11.1",
      "node:_http_client": [">= 14.18 && < 15", ">= 16"],
      _http_common: ">= 0.11.1",
      "node:_http_common": [">= 14.18 && < 15", ">= 16"],
      _http_incoming: ">= 0.11.1",
      "node:_http_incoming": [">= 14.18 && < 15", ">= 16"],
      _http_outgoing: ">= 0.11.1",
      "node:_http_outgoing": [">= 14.18 && < 15", ">= 16"],
      _http_server: ">= 0.11.1",
      "node:_http_server": [">= 14.18 && < 15", ">= 16"],
      http: true,
      "node:http": [">= 14.18 && < 15", ">= 16"],
      http2: ">= 8.8",
      "node:http2": [">= 14.18 && < 15", ">= 16"],
      https: true,
      "node:https": [">= 14.18 && < 15", ">= 16"],
      inspector: ">= 8",
      "node:inspector": [">= 14.18 && < 15", ">= 16"],
      "inspector/promises": [">= 19"],
      "node:inspector/promises": [">= 19"],
      _linklist: "< 8",
      module: true,
      "node:module": [">= 14.18 && < 15", ">= 16"],
      net: true,
      "node:net": [">= 14.18 && < 15", ">= 16"],
      "node-inspect/lib/_inspect": ">= 7.6 && < 12",
      "node-inspect/lib/internal/inspect_client": ">= 7.6 && < 12",
      "node-inspect/lib/internal/inspect_repl": ">= 7.6 && < 12",
      os: true,
      "node:os": [">= 14.18 && < 15", ">= 16"],
      path: true,
      "node:path": [">= 14.18 && < 15", ">= 16"],
      "path/posix": ">= 15.3",
      "node:path/posix": ">= 16",
      "path/win32": ">= 15.3",
      "node:path/win32": ">= 16",
      perf_hooks: ">= 8.5",
      "node:perf_hooks": [">= 14.18 && < 15", ">= 16"],
      process: ">= 1",
      "node:process": [">= 14.18 && < 15", ">= 16"],
      punycode: ">= 0.5",
      "node:punycode": [">= 14.18 && < 15", ">= 16"],
      querystring: true,
      "node:querystring": [">= 14.18 && < 15", ">= 16"],
      readline: true,
      "node:readline": [">= 14.18 && < 15", ">= 16"],
      "readline/promises": ">= 17",
      "node:readline/promises": ">= 17",
      repl: true,
      "node:repl": [">= 14.18 && < 15", ">= 16"],
      "node:sea": [">= 20.12 && < 21", ">= 21.7"],
      smalloc: ">= 0.11.5 && < 3",
      "node:sqlite": [">= 22.13 && < 23", ">= 23.4"],
      _stream_duplex: ">= 0.9.4 && < 26",
      "node:_stream_duplex": [">= 14.18 && < 15", ">= 16 && < 26"],
      _stream_transform: ">= 0.9.4 && < 26",
      "node:_stream_transform": [">= 14.18 && < 15", ">= 16 && < 26"],
      _stream_wrap: ">= 1.4.1 && < 26",
      "node:_stream_wrap": [">= 14.18 && < 15", ">= 16 && < 26"],
      _stream_passthrough: ">= 0.9.4 && < 26",
      "node:_stream_passthrough": [">= 14.18 && < 15", ">= 16 && < 26"],
      _stream_readable: ">= 0.9.4 && < 26",
      "node:_stream_readable": [">= 14.18 && < 15", ">= 16 && < 26"],
      _stream_writable: ">= 0.9.4 && < 26",
      "node:_stream_writable": [">= 14.18 && < 15", ">= 16 && < 26"],
      stream: true,
      "node:stream": [">= 14.18 && < 15", ">= 16"],
      "stream/consumers": ">= 16.7",
      "node:stream/consumers": ">= 16.7",
      "stream/promises": ">= 15",
      "node:stream/promises": ">= 16",
      "stream/web": ">= 16.5",
      "node:stream/web": ">= 16.5",
      string_decoder: true,
      "node:string_decoder": [">= 14.18 && < 15", ">= 16"],
      sys: [">= 0.4 && < 0.7", ">= 0.8"],
      "node:sys": [">= 14.18 && < 15", ">= 16"],
      "test/reporters": ">= 19.9 && < 20.2",
      "node:test/reporters": [">= 18.17 && < 19", ">= 19.9", ">= 20"],
      "test/mock_loader": ">= 22.3 && < 22.7",
      "node:test/mock_loader": ">= 22.3 && < 22.7",
      "node:test": [">= 16.17 && < 17", ">= 18"],
      timers: true,
      "node:timers": [">= 14.18 && < 15", ">= 16"],
      "timers/promises": ">= 15",
      "node:timers/promises": ">= 16",
      _tls_common: ">= 0.11.13",
      "node:_tls_common": [">= 14.18 && < 15", ">= 16"],
      _tls_legacy: ">= 0.11.3 && < 10",
      _tls_wrap: ">= 0.11.3",
      "node:_tls_wrap": [">= 14.18 && < 15", ">= 16"],
      tls: true,
      "node:tls": [">= 14.18 && < 15", ">= 16"],
      trace_events: ">= 10",
      "node:trace_events": [">= 14.18 && < 15", ">= 16"],
      tty: true,
      "node:tty": [">= 14.18 && < 15", ">= 16"],
      url: true,
      "node:url": [">= 14.18 && < 15", ">= 16"],
      util: true,
      "node:util": [">= 14.18 && < 15", ">= 16"],
      "util/types": ">= 15.3",
      "node:util/types": ">= 16",
      "v8/tools/arguments": ">= 10 && < 12",
      "v8/tools/codemap": [">= 4.4 && < 5", ">= 5.2 && < 12"],
      "v8/tools/consarray": [">= 4.4 && < 5", ">= 5.2 && < 12"],
      "v8/tools/csvparser": [">= 4.4 && < 5", ">= 5.2 && < 12"],
      "v8/tools/logreader": [">= 4.4 && < 5", ">= 5.2 && < 12"],
      "v8/tools/profile_view": [">= 4.4 && < 5", ">= 5.2 && < 12"],
      "v8/tools/splaytree": [">= 4.4 && < 5", ">= 5.2 && < 12"],
      v8: ">= 1",
      "node:v8": [">= 14.18 && < 15", ">= 16"],
      vm: true,
      "node:vm": [">= 14.18 && < 15", ">= 16"],
      wasi: [">= 13.4 && < 13.5", ">= 18.17 && < 19", ">= 20"],
      "node:wasi": [">= 18.17 && < 19", ">= 20"],
      worker_threads: ">= 11.7",
      "node:worker_threads": [">= 14.18 && < 15", ">= 16"],
      zlib: ">= 0.5",
      "node:zlib": [">= 14.18 && < 15", ">= 16"]
    };
  }
});

// node_modules/is-core-module/index.js
var require_is_core_module = __commonJS({
  "node_modules/is-core-module/index.js"(exports2, module2) {
    "use strict";
    var hasOwn = require_hasown();
    function specifierIncluded(current, specifier) {
      var nodeParts = current.split(".");
      var parts = specifier.split(" ");
      var op = parts.length > 1 ? parts[0] : "=";
      var versionParts = (parts.length > 1 ? parts[1] : parts[0]).split(".");
      for (var i = 0; i < 3; ++i) {
        var cur = parseInt(nodeParts[i] || 0, 10);
        var ver = parseInt(versionParts[i] || 0, 10);
        if (cur === ver) {
          continue;
        }
        if (op === "<") {
          return cur < ver;
        }
        if (op === ">=") {
          return cur >= ver;
        }
        return false;
      }
      return op === ">=";
    }
    function matchesRange(current, range) {
      var specifiers = range.split(/ ?&& ?/);
      if (specifiers.length === 0) {
        return false;
      }
      for (var i = 0; i < specifiers.length; ++i) {
        if (!specifierIncluded(current, specifiers[i])) {
          return false;
        }
      }
      return true;
    }
    function versionIncluded(nodeVersion, specifierValue) {
      if (typeof specifierValue === "boolean") {
        return specifierValue;
      }
      var current = typeof nodeVersion === "undefined" ? process.versions && process.versions.node : nodeVersion;
      if (typeof current !== "string") {
        throw new TypeError(typeof nodeVersion === "undefined" ? "Unable to determine current node version" : "If provided, a valid node version is required");
      }
      if (specifierValue && typeof specifierValue === "object") {
        for (var i = 0; i < specifierValue.length; ++i) {
          if (matchesRange(current, specifierValue[i])) {
            return true;
          }
        }
        return false;
      }
      return matchesRange(current, specifierValue);
    }
    var data = require_core();
    module2.exports = function isCore(x, nodeVersion) {
      return hasOwn(data, x) && versionIncluded(nodeVersion, data[x]);
    };
  }
});

// node_modules/es-errors/type.js
var require_type = __commonJS({
  "node_modules/es-errors/type.js"(exports2, module2) {
    "use strict";
    module2.exports = TypeError;
  }
});

// node_modules/resolve/lib/async.js
var require_async = __commonJS({
  "node_modules/resolve/lib/async.js"(exports2, module2) {
    var fs = require("fs");
    var getHomedir = require_homedir();
    var path = require("path");
    var caller = require_caller();
    var nodeModulesPaths = require_node_modules_paths();
    var normalizeOptions = require_normalize_options();
    var isCore = require_is_core_module();
    var $Error = require_es_errors();
    var $TypeError = require_type();
    var realpathFS = process.platform !== "win32" && fs.realpath && typeof fs.realpath.native === "function" ? fs.realpath.native : fs.realpath;
    var relativePathRegex = /^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[/\\])/;
    var windowsDriveRegex = /^\w:[/\\]*$/;
    var nodeModulesRegex = /[/\\]node_modules[/\\]*$/;
    var homedir = getHomedir();
    function defaultPaths() {
      if (!homedir) return [];
      return [
        path.join(homedir, ".node_modules"),
        path.join(homedir, ".node_libraries")
      ];
    }
    var defaultIsFile = function isFile(file, cb) {
      fs.stat(file, function(err, stat) {
        if (!err) {
          return cb(null, stat.isFile() || stat.isFIFO());
        }
        if (err.code === "ENOENT" || err.code === "ENOTDIR") return cb(null, false);
        return cb(err);
      });
    };
    var defaultIsDir = function isDirectory(dir, cb) {
      fs.stat(dir, function(err, stat) {
        if (!err) {
          return cb(null, stat.isDirectory());
        }
        if (err.code === "ENOENT" || err.code === "ENOTDIR") return cb(null, false);
        return cb(err);
      });
    };
    var defaultRealpath = function realpath(x, cb) {
      realpathFS(x, function(realpathErr, realPath) {
        if (realpathErr && realpathErr.code !== "ENOENT") cb(realpathErr);
        else cb(null, realpathErr ? x : realPath);
      });
    };
    function maybeRealpath(realpath, x, opts, cb) {
      if (opts && opts.preserveSymlinks === false) {
        realpath(x, cb);
      } else {
        cb(null, x);
      }
    }
    function defaultReadPackage(readFile, pkgfile, cb) {
      readFile(pkgfile, function(readFileErr, body) {
        if (readFileErr) cb(readFileErr);
        else {
          try {
            var pkg = JSON.parse(body);
            cb(null, pkg);
          } catch (jsonErr) {
            cb(null);
          }
        }
      });
    }
    function getPackageCandidates(x, start, opts) {
      var dirs = nodeModulesPaths(start, opts, x);
      for (var i = 0; i < dirs.length; i++) {
        dirs[i] = path.join(dirs[i], x);
      }
      return dirs;
    }
    module2.exports = function resolve(x, options, callback) {
      var cb = callback;
      var opts = options;
      if (typeof options === "function") {
        cb = opts;
        opts = {};
      }
      if (typeof x !== "string") {
        var err = new $TypeError("Path must be a string.");
        return process.nextTick(function() {
          cb(err);
        });
      }
      opts = normalizeOptions(x, opts);
      var isFile = opts.isFile || defaultIsFile;
      var isDirectory = opts.isDirectory || defaultIsDir;
      var readFile = opts.readFile || fs.readFile;
      var realpath = opts.realpath || defaultRealpath;
      var readPackage = opts.readPackage || defaultReadPackage;
      if (opts.readFile && opts.readPackage) {
        var conflictErr = new $TypeError("`readFile` and `readPackage` are mutually exclusive.");
        return process.nextTick(function() {
          cb(conflictErr);
        });
      }
      var packageIterator = opts.packageIterator;
      var extensions = opts.extensions || [".js"];
      var includeCoreModules = opts.includeCoreModules !== false;
      var basedir = opts.basedir || path.dirname(caller());
      var parent = opts.filename || basedir;
      opts.paths = opts.paths || defaultPaths();
      var absoluteStart = path.resolve(basedir);
      maybeRealpath(
        realpath,
        absoluteStart,
        opts,
        function(err2, realStart) {
          if (err2) cb(err2);
          else init(realStart);
        }
      );
      var res;
      function init(basedir2) {
        if (relativePathRegex.test(x)) {
          res = path.resolve(basedir2, x);
          if (x === "." || x === ".." || x.slice(-1) === "/") res += "/";
          if (x.slice(-1) === "/" && res === basedir2) {
            loadAsDirectory(res, opts.package, onfile);
          } else loadAsFile(res, opts.package, onfile);
        } else if (includeCoreModules && isCore(x)) {
          return cb(null, x);
        } else loadNodeModules(x, basedir2, function(err2, n, pkg) {
          if (err2) cb(err2);
          else if (n) {
            return maybeRealpath(realpath, n, opts, function(err3, realN) {
              if (err3) {
                cb(err3);
              } else {
                cb(null, realN, pkg);
              }
            });
          } else {
            var moduleError = new $Error("Cannot find module '" + x + "' from '" + parent + "'");
            moduleError.code = "MODULE_NOT_FOUND";
            cb(moduleError);
          }
        });
      }
      function onfile(err2, m, pkg) {
        if (err2) cb(err2);
        else if (m) cb(null, m, pkg);
        else loadAsDirectory(res, function(err3, d, pkg2) {
          if (err3) cb(err3);
          else if (d) {
            maybeRealpath(realpath, d, opts, function(err4, realD) {
              if (err4) {
                cb(err4);
              } else {
                cb(null, realD, pkg2);
              }
            });
          } else {
            var moduleError = new $Error("Cannot find module '" + x + "' from '" + parent + "'");
            moduleError.code = "MODULE_NOT_FOUND";
            cb(moduleError);
          }
        });
      }
      function loadAsFile(x2, thePackage, callback2) {
        var loadAsFilePackage = thePackage;
        var cb2 = callback2;
        if (typeof loadAsFilePackage === "function") {
          cb2 = loadAsFilePackage;
          loadAsFilePackage = void 0;
        }
        var exts = [""].concat(extensions);
        load(exts, x2, loadAsFilePackage);
        function load(exts2, x3, loadPackage) {
          if (exts2.length === 0) return cb2(null, void 0, loadPackage);
          var file = x3 + exts2[0];
          var pkg = loadPackage;
          if (pkg) onpkg(null, pkg);
          else loadpkg(path.dirname(file), onpkg);
          function onpkg(err2, pkg_, dir) {
            pkg = pkg_;
            if (err2) return cb2(err2);
            if (dir && pkg && opts.pathFilter) {
              var rfile = path.relative(dir, file);
              var rel = rfile.slice(0, rfile.length - exts2[0].length);
              var r = opts.pathFilter(pkg, x3, rel);
              if (r) return load(
                [""].concat(extensions),
                path.resolve(dir, r),
                pkg
              );
            }
            isFile(file, onex);
          }
          function onex(err2, ex) {
            if (err2) return cb2(err2);
            if (ex) return cb2(null, file, pkg);
            load(exts2.slice(1), x3, pkg);
          }
        }
      }
      function loadpkg(dir, cb2) {
        if (dir === "" || dir === "/") return cb2(null);
        if (process.platform === "win32" && windowsDriveRegex.test(dir)) {
          return cb2(null);
        }
        if (nodeModulesRegex.test(dir)) return cb2(null);
        maybeRealpath(realpath, dir, opts, function(unwrapErr, pkgdir) {
          if (unwrapErr) return loadpkg(path.dirname(dir), cb2);
          var pkgfile = path.join(pkgdir, "package.json");
          isFile(pkgfile, function(err2, ex) {
            if (!ex) return loadpkg(path.dirname(dir), cb2);
            readPackage(readFile, pkgfile, function(err3, pkgParam) {
              if (err3) {
                return cb2(err3);
              }
              var pkg = pkgParam;
              if (pkg && opts.packageFilter) {
                pkg = opts.packageFilter(pkg, pkgfile);
              }
              cb2(null, pkg, dir);
            });
          });
        });
      }
      function loadAsDirectory(x2, loadAsDirectoryPackage, callback2) {
        var cb2 = callback2;
        var fpkg = loadAsDirectoryPackage;
        if (typeof fpkg === "function") {
          cb2 = fpkg;
          fpkg = opts.package;
        }
        maybeRealpath(realpath, x2, opts, function(unwrapErr, pkgdir) {
          if (unwrapErr) return cb2(unwrapErr);
          var pkgfile = path.join(pkgdir, "package.json");
          isFile(pkgfile, function(err2, ex) {
            if (err2) return cb2(err2);
            if (!ex) return loadAsFile(path.join(x2, "index"), fpkg, cb2);
            readPackage(readFile, pkgfile, function(err3, pkgParam) {
              if (err3) return cb2(err3);
              var pkg = pkgParam;
              if (pkg && opts.packageFilter) {
                pkg = opts.packageFilter(pkg, pkgfile);
              }
              if (pkg && pkg.main) {
                if (typeof pkg.main !== "string") {
                  var mainError = new $TypeError("package \u201C" + pkg.name + "\u201D `main` must be a string");
                  mainError.code = "INVALID_PACKAGE_MAIN";
                  return cb2(mainError);
                }
                if (pkg.main === "." || pkg.main === "./") {
                  pkg.main = "index";
                }
                loadAsFile(path.resolve(x2, pkg.main), pkg, function(err4, m, pkg2) {
                  if (err4) return cb2(err4);
                  if (m) return cb2(null, m, pkg2);
                  if (!pkg2) return loadAsFile(path.join(x2, "index"), pkg2, cb2);
                  var dir = path.resolve(x2, pkg2.main);
                  loadAsDirectory(dir, pkg2, function(err5, n, pkg3) {
                    if (err5) return cb2(err5);
                    if (n) return cb2(null, n, pkg3);
                    loadAsFile(path.join(x2, "index"), pkg3, cb2);
                  });
                });
                return;
              }
              loadAsFile(path.join(x2, "/index"), pkg, cb2);
            });
          });
        });
      }
      function processDirs(cb2, dirs) {
        if (dirs.length === 0) return cb2(null, void 0);
        var dir = dirs[0];
        isDirectory(path.dirname(dir), isdir);
        function isdir(err2, isdir2) {
          if (err2) return cb2(err2);
          if (!isdir2) return processDirs(cb2, dirs.slice(1));
          loadAsFile(dir, opts.package, onfile2);
        }
        function onfile2(err2, m, pkg) {
          if (err2) return cb2(err2);
          if (m) return cb2(null, m, pkg);
          loadAsDirectory(dir, opts.package, ondir);
        }
        function ondir(err2, n, pkg) {
          if (err2) return cb2(err2);
          if (n) return cb2(null, n, pkg);
          processDirs(cb2, dirs.slice(1));
        }
      }
      function loadNodeModules(x2, start, cb2) {
        var thunk = function() {
          return getPackageCandidates(x2, start, opts);
        };
        processDirs(
          cb2,
          packageIterator ? packageIterator(x2, start, thunk, opts) : thunk()
        );
      }
    };
  }
});

// node_modules/resolve/lib/core.json
var require_core2 = __commonJS({
  "node_modules/resolve/lib/core.json"(exports2, module2) {
    module2.exports = {
      assert: true,
      "node:assert": [">= 14.18 && < 15", ">= 16"],
      "assert/strict": ">= 15",
      "node:assert/strict": ">= 16",
      async_hooks: ">= 8",
      "node:async_hooks": [">= 14.18 && < 15", ">= 16"],
      buffer_ieee754: ">= 0.5 && < 0.9.7",
      buffer: true,
      "node:buffer": [">= 14.18 && < 15", ">= 16"],
      child_process: true,
      "node:child_process": [">= 14.18 && < 15", ">= 16"],
      cluster: ">= 0.5",
      "node:cluster": [">= 14.18 && < 15", ">= 16"],
      console: true,
      "node:console": [">= 14.18 && < 15", ">= 16"],
      constants: true,
      "node:constants": [">= 14.18 && < 15", ">= 16"],
      crypto: true,
      "node:crypto": [">= 14.18 && < 15", ">= 16"],
      _debug_agent: ">= 1 && < 8",
      _debugger: "< 8",
      dgram: true,
      "node:dgram": [">= 14.18 && < 15", ">= 16"],
      diagnostics_channel: [">= 14.17 && < 15", ">= 15.1"],
      "node:diagnostics_channel": [">= 14.18 && < 15", ">= 16"],
      dns: true,
      "node:dns": [">= 14.18 && < 15", ">= 16"],
      "dns/promises": ">= 15",
      "node:dns/promises": ">= 16",
      domain: ">= 0.7.12",
      "node:domain": [">= 14.18 && < 15", ">= 16"],
      events: true,
      "node:events": [">= 14.18 && < 15", ">= 16"],
      freelist: "< 6",
      fs: true,
      "node:fs": [">= 14.18 && < 15", ">= 16"],
      "fs/promises": [">= 10 && < 10.1", ">= 14"],
      "node:fs/promises": [">= 14.18 && < 15", ">= 16"],
      _http_agent: ">= 0.11.1",
      "node:_http_agent": [">= 14.18 && < 15", ">= 16"],
      _http_client: ">= 0.11.1",
      "node:_http_client": [">= 14.18 && < 15", ">= 16"],
      _http_common: ">= 0.11.1",
      "node:_http_common": [">= 14.18 && < 15", ">= 16"],
      _http_incoming: ">= 0.11.1",
      "node:_http_incoming": [">= 14.18 && < 15", ">= 16"],
      _http_outgoing: ">= 0.11.1",
      "node:_http_outgoing": [">= 14.18 && < 15", ">= 16"],
      _http_server: ">= 0.11.1",
      "node:_http_server": [">= 14.18 && < 15", ">= 16"],
      http: true,
      "node:http": [">= 14.18 && < 15", ">= 16"],
      http2: ">= 8.8",
      "node:http2": [">= 14.18 && < 15", ">= 16"],
      https: true,
      "node:https": [">= 14.18 && < 15", ">= 16"],
      inspector: ">= 8",
      "node:inspector": [">= 14.18 && < 15", ">= 16"],
      "inspector/promises": [">= 19"],
      "node:inspector/promises": [">= 19"],
      _linklist: "< 8",
      module: true,
      "node:module": [">= 14.18 && < 15", ">= 16"],
      net: true,
      "node:net": [">= 14.18 && < 15", ">= 16"],
      "node-inspect/lib/_inspect": ">= 7.6 && < 12",
      "node-inspect/lib/internal/inspect_client": ">= 7.6 && < 12",
      "node-inspect/lib/internal/inspect_repl": ">= 7.6 && < 12",
      os: true,
      "node:os": [">= 14.18 && < 15", ">= 16"],
      path: true,
      "node:path": [">= 14.18 && < 15", ">= 16"],
      "path/posix": ">= 15.3",
      "node:path/posix": ">= 16",
      "path/win32": ">= 15.3",
      "node:path/win32": ">= 16",
      perf_hooks: ">= 8.5",
      "node:perf_hooks": [">= 14.18 && < 15", ">= 16"],
      process: ">= 1",
      "node:process": [">= 14.18 && < 15", ">= 16"],
      punycode: ">= 0.5",
      "node:punycode": [">= 14.18 && < 15", ">= 16"],
      querystring: true,
      "node:querystring": [">= 14.18 && < 15", ">= 16"],
      readline: true,
      "node:readline": [">= 14.18 && < 15", ">= 16"],
      "readline/promises": ">= 17",
      "node:readline/promises": ">= 17",
      repl: true,
      "node:repl": [">= 14.18 && < 15", ">= 16"],
      "node:sea": [">= 20.12 && < 21", ">= 21.7"],
      smalloc: ">= 0.11.5 && < 3",
      "node:sqlite": [">= 22.13 && < 23", ">= 23.4"],
      _stream_duplex: ">= 0.9.4",
      "node:_stream_duplex": [">= 14.18 && < 15", ">= 16"],
      _stream_transform: ">= 0.9.4",
      "node:_stream_transform": [">= 14.18 && < 15", ">= 16"],
      _stream_wrap: ">= 1.4.1",
      "node:_stream_wrap": [">= 14.18 && < 15", ">= 16"],
      _stream_passthrough: ">= 0.9.4",
      "node:_stream_passthrough": [">= 14.18 && < 15", ">= 16"],
      _stream_readable: ">= 0.9.4",
      "node:_stream_readable": [">= 14.18 && < 15", ">= 16"],
      _stream_writable: ">= 0.9.4",
      "node:_stream_writable": [">= 14.18 && < 15", ">= 16"],
      stream: true,
      "node:stream": [">= 14.18 && < 15", ">= 16"],
      "stream/consumers": ">= 16.7",
      "node:stream/consumers": ">= 16.7",
      "stream/promises": ">= 15",
      "node:stream/promises": ">= 16",
      "stream/web": ">= 16.5",
      "node:stream/web": ">= 16.5",
      string_decoder: true,
      "node:string_decoder": [">= 14.18 && < 15", ">= 16"],
      sys: [">= 0.4 && < 0.7", ">= 0.8"],
      "node:sys": [">= 14.18 && < 15", ">= 16"],
      "test/reporters": ">= 19.9 && < 20.2",
      "node:test/reporters": [">= 18.17 && < 19", ">= 19.9", ">= 20"],
      "test/mock_loader": ">= 22.3 && < 22.7",
      "node:test/mock_loader": ">= 22.3 && < 22.7",
      "node:test": [">= 16.17 && < 17", ">= 18"],
      timers: true,
      "node:timers": [">= 14.18 && < 15", ">= 16"],
      "timers/promises": ">= 15",
      "node:timers/promises": ">= 16",
      _tls_common: ">= 0.11.13",
      "node:_tls_common": [">= 14.18 && < 15", ">= 16"],
      _tls_legacy: ">= 0.11.3 && < 10",
      _tls_wrap: ">= 0.11.3",
      "node:_tls_wrap": [">= 14.18 && < 15", ">= 16"],
      tls: true,
      "node:tls": [">= 14.18 && < 15", ">= 16"],
      trace_events: ">= 10",
      "node:trace_events": [">= 14.18 && < 15", ">= 16"],
      tty: true,
      "node:tty": [">= 14.18 && < 15", ">= 16"],
      url: true,
      "node:url": [">= 14.18 && < 15", ">= 16"],
      util: true,
      "node:util": [">= 14.18 && < 15", ">= 16"],
      "util/types": ">= 15.3",
      "node:util/types": ">= 16",
      "v8/tools/arguments": ">= 10 && < 12",
      "v8/tools/codemap": [">= 4.4 && < 5", ">= 5.2 && < 12"],
      "v8/tools/consarray": [">= 4.4 && < 5", ">= 5.2 && < 12"],
      "v8/tools/csvparser": [">= 4.4 && < 5", ">= 5.2 && < 12"],
      "v8/tools/logreader": [">= 4.4 && < 5", ">= 5.2 && < 12"],
      "v8/tools/profile_view": [">= 4.4 && < 5", ">= 5.2 && < 12"],
      "v8/tools/splaytree": [">= 4.4 && < 5", ">= 5.2 && < 12"],
      v8: ">= 1",
      "node:v8": [">= 14.18 && < 15", ">= 16"],
      vm: true,
      "node:vm": [">= 14.18 && < 15", ">= 16"],
      wasi: [">= 13.4 && < 13.5", ">= 18.17 && < 19", ">= 20"],
      "node:wasi": [">= 18.17 && < 19", ">= 20"],
      worker_threads: ">= 11.7",
      "node:worker_threads": [">= 14.18 && < 15", ">= 16"],
      zlib: ">= 0.5",
      "node:zlib": [">= 14.18 && < 15", ">= 16"]
    };
  }
});

// node_modules/resolve/lib/core.js
var require_core3 = __commonJS({
  "node_modules/resolve/lib/core.js"(exports2, module2) {
    "use strict";
    var isCoreModule = require_is_core_module();
    var data = require_core2();
    var core = {};
    for (mod in data) {
      if (Object.prototype.hasOwnProperty.call(data, mod)) {
        core[mod] = isCoreModule(mod);
      }
    }
    var mod;
    module2.exports = core;
  }
});

// node_modules/resolve/lib/is-core.js
var require_is_core = __commonJS({
  "node_modules/resolve/lib/is-core.js"(exports2, module2) {
    var isCoreModule = require_is_core_module();
    module2.exports = function isCore(x) {
      return isCoreModule(x);
    };
  }
});

// node_modules/resolve/lib/sync.js
var require_sync = __commonJS({
  "node_modules/resolve/lib/sync.js"(exports2, module2) {
    var isCore = require_is_core_module();
    var fs = require("fs");
    var path = require("path");
    var $Error = require_es_errors();
    var $TypeError = require_type();
    var getHomedir = require_homedir();
    var caller = require_caller();
    var nodeModulesPaths = require_node_modules_paths();
    var normalizeOptions = require_normalize_options();
    var realpathFS = process.platform !== "win32" && fs.realpathSync && typeof fs.realpathSync.native === "function" ? fs.realpathSync.native : fs.realpathSync;
    var relativePathRegex = /^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[/\\])/;
    var windowsDriveRegex = /^\w:[/\\]*$/;
    var nodeModulesRegex = /[/\\]node_modules[/\\]*$/;
    var homedir = getHomedir();
    function defaultPaths() {
      if (!homedir) return [];
      return [
        path.join(homedir, ".node_modules"),
        path.join(homedir, ".node_libraries")
      ];
    }
    var defaultIsFile = function isFile(file) {
      try {
        var stat = fs.statSync(file, { throwIfNoEntry: false });
      } catch (e) {
        if (e && (e.code === "ENOENT" || e.code === "ENOTDIR")) return false;
        throw e;
      }
      return !!stat && (stat.isFile() || stat.isFIFO());
    };
    var defaultIsDir = function isDirectory(dir) {
      try {
        var stat = fs.statSync(dir, { throwIfNoEntry: false });
      } catch (e) {
        if (e && (e.code === "ENOENT" || e.code === "ENOTDIR")) return false;
        throw e;
      }
      return !!stat && stat.isDirectory();
    };
    var defaultRealpathSync = function realpathSync(x) {
      try {
        return realpathFS(x);
      } catch (realpathErr) {
        if (realpathErr.code !== "ENOENT") {
          throw realpathErr;
        }
      }
      return x;
    };
    function maybeRealpathSync(realpathSync, x, opts) {
      if (opts && opts.preserveSymlinks === false) {
        return realpathSync(x);
      }
      return x;
    }
    function defaultReadPackageSync(readFileSync, pkgfile) {
      var body = readFileSync(pkgfile);
      try {
        var pkg = JSON.parse(body);
        return pkg;
      } catch (jsonErr) {
      }
    }
    function getPackageCandidates(x, start, opts) {
      var dirs = nodeModulesPaths(start, opts, x);
      for (var i = 0; i < dirs.length; i++) {
        dirs[i] = path.join(dirs[i], x);
      }
      return dirs;
    }
    module2.exports = function resolveSync(x, options) {
      if (typeof x !== "string") {
        throw new $TypeError("Path must be a string.");
      }
      var opts = normalizeOptions(x, options);
      var isFile = opts.isFile || defaultIsFile;
      var readFileSync = opts.readFileSync || fs.readFileSync;
      var isDirectory = opts.isDirectory || defaultIsDir;
      var realpathSync = opts.realpathSync || defaultRealpathSync;
      var readPackageSync = opts.readPackageSync || defaultReadPackageSync;
      if (opts.readFileSync && opts.readPackageSync) {
        throw new $TypeError("`readFileSync` and `readPackageSync` are mutually exclusive.");
      }
      var packageIterator = opts.packageIterator;
      var extensions = opts.extensions || [".js"];
      var includeCoreModules = opts.includeCoreModules !== false;
      var basedir = opts.basedir || path.dirname(caller());
      var parent = opts.filename || basedir;
      opts.paths = opts.paths || defaultPaths();
      var absoluteStart = maybeRealpathSync(realpathSync, path.resolve(basedir), opts);
      if (relativePathRegex.test(x)) {
        var res = path.resolve(absoluteStart, x);
        if (x === "." || x === ".." || x.slice(-1) === "/") res += "/";
        var m = loadAsFileSync(res) || loadAsDirectorySync(res);
        if (m) return maybeRealpathSync(realpathSync, m, opts);
      } else if (includeCoreModules && isCore(x)) {
        return x;
      } else {
        var n = loadNodeModulesSync(x, absoluteStart);
        if (n) return maybeRealpathSync(realpathSync, n, opts);
      }
      var err = new $Error("Cannot find module '" + x + "' from '" + parent + "'");
      err.code = "MODULE_NOT_FOUND";
      throw err;
      function loadAsFileSync(x2) {
        var pkg = loadpkg(path.dirname(x2));
        if (pkg && pkg.dir && pkg.pkg && opts.pathFilter) {
          var rfile = path.relative(pkg.dir, x2);
          var r = opts.pathFilter(pkg.pkg, x2, rfile);
          if (r) {
            x2 = path.resolve(pkg.dir, r);
          }
        }
        if (isFile(x2)) {
          return x2;
        }
        for (var i = 0; i < extensions.length; i++) {
          var file = x2 + extensions[i];
          if (isFile(file)) {
            return file;
          }
        }
      }
      function loadpkg(dir) {
        if (dir === "" || dir === "/") return;
        if (process.platform === "win32" && windowsDriveRegex.test(dir)) {
          return;
        }
        if (nodeModulesRegex.test(dir)) return;
        var pkgfile = path.join(maybeRealpathSync(realpathSync, dir, opts), "package.json");
        if (!isFile(pkgfile)) {
          return loadpkg(path.dirname(dir));
        }
        var pkg = readPackageSync(readFileSync, pkgfile);
        if (pkg && opts.packageFilter) {
          pkg = opts.packageFilter(
            pkg,
            /*pkgfile,*/
            dir
          );
        }
        return { pkg, dir };
      }
      function loadAsDirectorySync(x2) {
        var pkgfile = path.join(maybeRealpathSync(realpathSync, x2, opts), "/package.json");
        if (isFile(pkgfile)) {
          try {
            var pkg = readPackageSync(readFileSync, pkgfile);
          } catch (e) {
          }
          if (pkg && opts.packageFilter) {
            pkg = opts.packageFilter(
              pkg,
              /*pkgfile,*/
              x2
            );
          }
          if (pkg && pkg.main) {
            if (typeof pkg.main !== "string") {
              var mainError = new $TypeError("package \u201C" + pkg.name + "\u201D `main` must be a string");
              mainError.code = "INVALID_PACKAGE_MAIN";
              throw mainError;
            }
            if (pkg.main === "." || pkg.main === "./") {
              pkg.main = "index";
            }
            try {
              var m2 = loadAsFileSync(path.resolve(x2, pkg.main));
              if (m2) return m2;
              var n2 = loadAsDirectorySync(path.resolve(x2, pkg.main));
              if (n2) return n2;
            } catch (e) {
            }
          }
        }
        return loadAsFileSync(path.join(x2, "/index"));
      }
      function loadNodeModulesSync(x2, start) {
        var thunk = function() {
          return getPackageCandidates(x2, start, opts);
        };
        var dirs = packageIterator ? packageIterator(x2, start, thunk, opts) : thunk();
        for (var i = 0; i < dirs.length; i++) {
          var dir = dirs[i];
          if (isDirectory(path.dirname(dir))) {
            var m2 = loadAsFileSync(dir);
            if (m2) return m2;
            var n2 = loadAsDirectorySync(dir);
            if (n2) return n2;
          }
        }
      }
    };
  }
});

// node_modules/resolve/index.js
var require_resolve = __commonJS({
  "node_modules/resolve/index.js"(exports2, module2) {
    var async = require_async();
    async.core = require_core3();
    async.isCore = require_is_core();
    async.sync = require_sync();
    module2.exports = async;
  }
});

// node_modules/normalize-package-data/lib/extract_description.js
var require_extract_description = __commonJS({
  "node_modules/normalize-package-data/lib/extract_description.js"(exports2, module2) {
    module2.exports = extractDescription;
    function extractDescription(d) {
      if (!d) return;
      if (d === "ERROR: No README data found!") return;
      d = d.trim().split("\n");
      for (var s = 0; d[s] && d[s].trim().match(/^(#|$)/); s++) ;
      var l = d.length;
      for (var e = s + 1; e < l && d[e].trim(); e++) ;
      return d.slice(s, e).join(" ").trim();
    }
  }
});

// node_modules/normalize-package-data/lib/typos.json
var require_typos = __commonJS({
  "node_modules/normalize-package-data/lib/typos.json"(exports2, module2) {
    module2.exports = {
      topLevel: {
        dependancies: "dependencies",
        dependecies: "dependencies",
        depdenencies: "dependencies",
        devEependencies: "devDependencies",
        depends: "dependencies",
        "dev-dependencies": "devDependencies",
        devDependences: "devDependencies",
        devDepenencies: "devDependencies",
        devdependencies: "devDependencies",
        repostitory: "repository",
        repo: "repository",
        prefereGlobal: "preferGlobal",
        hompage: "homepage",
        hampage: "homepage",
        autohr: "author",
        autor: "author",
        contributers: "contributors",
        publicationConfig: "publishConfig",
        script: "scripts"
      },
      bugs: { web: "url", name: "url" },
      script: { server: "start", tests: "test" }
    };
  }
});

// node_modules/normalize-package-data/lib/fixer.js
var require_fixer = __commonJS({
  "node_modules/normalize-package-data/lib/fixer.js"(exports2, module2) {
    var semver = require_semver();
    var validateLicense = require_validate_npm_package_license();
    var hostedGitInfo = require_hosted_git_info();
    var isBuiltinModule = require_resolve().isCore;
    var depTypes = ["dependencies", "devDependencies", "optionalDependencies"];
    var extractDescription = require_extract_description();
    var url = require("url");
    var typos = require_typos();
    var fixer = module2.exports = {
      // default warning function
      warn: function() {
      },
      fixRepositoryField: function(data) {
        if (data.repositories) {
          this.warn("repositories");
          data.repository = data.repositories[0];
        }
        if (!data.repository) return this.warn("missingRepository");
        if (typeof data.repository === "string") {
          data.repository = {
            type: "git",
            url: data.repository
          };
        }
        var r = data.repository.url || "";
        if (r) {
          var hosted = hostedGitInfo.fromUrl(r);
          if (hosted) {
            r = data.repository.url = hosted.getDefaultRepresentation() == "shortcut" ? hosted.https() : hosted.toString();
          }
        }
        if (r.match(/github.com\/[^\/]+\/[^\/]+\.git\.git$/)) {
          this.warn("brokenGitUrl", r);
        }
      },
      fixTypos: function(data) {
        Object.keys(typos.topLevel).forEach(function(d) {
          if (data.hasOwnProperty(d)) {
            this.warn("typo", d, typos.topLevel[d]);
          }
        }, this);
      },
      fixScriptsField: function(data) {
        if (!data.scripts) return;
        if (typeof data.scripts !== "object") {
          this.warn("nonObjectScripts");
          delete data.scripts;
          return;
        }
        Object.keys(data.scripts).forEach(function(k) {
          if (typeof data.scripts[k] !== "string") {
            this.warn("nonStringScript");
            delete data.scripts[k];
          } else if (typos.script[k] && !data.scripts[typos.script[k]]) {
            this.warn("typo", k, typos.script[k], "scripts");
          }
        }, this);
      },
      fixFilesField: function(data) {
        var files = data.files;
        if (files && !Array.isArray(files)) {
          this.warn("nonArrayFiles");
          delete data.files;
        } else if (data.files) {
          data.files = data.files.filter(function(file) {
            if (!file || typeof file !== "string") {
              this.warn("invalidFilename", file);
              return false;
            } else {
              return true;
            }
          }, this);
        }
      },
      fixBinField: function(data) {
        if (!data.bin) return;
        if (typeof data.bin === "string") {
          var b = {};
          var match;
          if (match = data.name.match(/^@[^/]+[/](.*)$/)) {
            b[match[1]] = data.bin;
          } else {
            b[data.name] = data.bin;
          }
          data.bin = b;
        }
      },
      fixManField: function(data) {
        if (!data.man) return;
        if (typeof data.man === "string") {
          data.man = [data.man];
        }
      },
      fixBundleDependenciesField: function(data) {
        var bdd = "bundledDependencies";
        var bd = "bundleDependencies";
        if (data[bdd] && !data[bd]) {
          data[bd] = data[bdd];
          delete data[bdd];
        }
        if (data[bd] && !Array.isArray(data[bd])) {
          this.warn("nonArrayBundleDependencies");
          delete data[bd];
        } else if (data[bd]) {
          data[bd] = data[bd].filter(function(bd2) {
            if (!bd2 || typeof bd2 !== "string") {
              this.warn("nonStringBundleDependency", bd2);
              return false;
            } else {
              if (!data.dependencies) {
                data.dependencies = {};
              }
              if (!data.dependencies.hasOwnProperty(bd2)) {
                this.warn("nonDependencyBundleDependency", bd2);
                data.dependencies[bd2] = "*";
              }
              return true;
            }
          }, this);
        }
      },
      fixDependencies: function(data, strict) {
        var loose = !strict;
        objectifyDeps(data, this.warn);
        addOptionalDepsToDeps(data, this.warn);
        this.fixBundleDependenciesField(data);
        ["dependencies", "devDependencies"].forEach(function(deps) {
          if (!(deps in data)) return;
          if (!data[deps] || typeof data[deps] !== "object") {
            this.warn("nonObjectDependencies", deps);
            delete data[deps];
            return;
          }
          Object.keys(data[deps]).forEach(function(d) {
            var r = data[deps][d];
            if (typeof r !== "string") {
              this.warn("nonStringDependency", d, JSON.stringify(r));
              delete data[deps][d];
            }
            var hosted = hostedGitInfo.fromUrl(data[deps][d]);
            if (hosted) data[deps][d] = hosted.toString();
          }, this);
        }, this);
      },
      fixModulesField: function(data) {
        if (data.modules) {
          this.warn("deprecatedModules");
          delete data.modules;
        }
      },
      fixKeywordsField: function(data) {
        if (typeof data.keywords === "string") {
          data.keywords = data.keywords.split(/,\s+/);
        }
        if (data.keywords && !Array.isArray(data.keywords)) {
          delete data.keywords;
          this.warn("nonArrayKeywords");
        } else if (data.keywords) {
          data.keywords = data.keywords.filter(function(kw) {
            if (typeof kw !== "string" || !kw) {
              this.warn("nonStringKeyword");
              return false;
            } else {
              return true;
            }
          }, this);
        }
      },
      fixVersionField: function(data, strict) {
        var loose = !strict;
        if (!data.version) {
          data.version = "";
          return true;
        }
        if (!semver.valid(data.version, loose)) {
          throw new Error('Invalid version: "' + data.version + '"');
        }
        data.version = semver.clean(data.version, loose);
        return true;
      },
      fixPeople: function(data) {
        modifyPeople(data, unParsePerson);
        modifyPeople(data, parsePerson);
      },
      fixNameField: function(data, options) {
        if (typeof options === "boolean") options = { strict: options };
        else if (typeof options === "undefined") options = {};
        var strict = options.strict;
        if (!data.name && !strict) {
          data.name = "";
          return;
        }
        if (typeof data.name !== "string") {
          throw new Error("name field must be a string.");
        }
        if (!strict)
          data.name = data.name.trim();
        ensureValidName(data.name, strict, options.allowLegacyCase);
        if (isBuiltinModule(data.name))
          this.warn("conflictingName", data.name);
      },
      fixDescriptionField: function(data) {
        if (data.description && typeof data.description !== "string") {
          this.warn("nonStringDescription");
          delete data.description;
        }
        if (data.readme && !data.description)
          data.description = extractDescription(data.readme);
        if (data.description === void 0) delete data.description;
        if (!data.description) this.warn("missingDescription");
      },
      fixReadmeField: function(data) {
        if (!data.readme) {
          this.warn("missingReadme");
          data.readme = "ERROR: No README data found!";
        }
      },
      fixBugsField: function(data) {
        if (!data.bugs && data.repository && data.repository.url) {
          var hosted = hostedGitInfo.fromUrl(data.repository.url);
          if (hosted && hosted.bugs()) {
            data.bugs = { url: hosted.bugs() };
          }
        } else if (data.bugs) {
          var emailRe = /^.+@.*\..+$/;
          if (typeof data.bugs == "string") {
            if (emailRe.test(data.bugs))
              data.bugs = { email: data.bugs };
            else if (url.parse(data.bugs).protocol)
              data.bugs = { url: data.bugs };
            else
              this.warn("nonEmailUrlBugsString");
          } else {
            bugsTypos(data.bugs, this.warn);
            var oldBugs = data.bugs;
            data.bugs = {};
            if (oldBugs.url) {
              if (typeof oldBugs.url == "string" && url.parse(oldBugs.url).protocol)
                data.bugs.url = oldBugs.url;
              else
                this.warn("nonUrlBugsUrlField");
            }
            if (oldBugs.email) {
              if (typeof oldBugs.email == "string" && emailRe.test(oldBugs.email))
                data.bugs.email = oldBugs.email;
              else
                this.warn("nonEmailBugsEmailField");
            }
          }
          if (!data.bugs.email && !data.bugs.url) {
            delete data.bugs;
            this.warn("emptyNormalizedBugs");
          }
        }
      },
      fixHomepageField: function(data) {
        if (!data.homepage && data.repository && data.repository.url) {
          var hosted = hostedGitInfo.fromUrl(data.repository.url);
          if (hosted && hosted.docs()) data.homepage = hosted.docs();
        }
        if (!data.homepage) return;
        if (typeof data.homepage !== "string") {
          this.warn("nonUrlHomepage");
          return delete data.homepage;
        }
        if (!url.parse(data.homepage).protocol) {
          data.homepage = "http://" + data.homepage;
        }
      },
      fixLicenseField: function(data) {
        if (!data.license) {
          return this.warn("missingLicense");
        } else {
          if (typeof data.license !== "string" || data.license.length < 1 || data.license.trim() === "") {
            this.warn("invalidLicense");
          } else {
            if (!validateLicense(data.license).validForNewPackages)
              this.warn("invalidLicense");
          }
        }
      }
    };
    function isValidScopedPackageName(spec) {
      if (spec.charAt(0) !== "@") return false;
      var rest = spec.slice(1).split("/");
      if (rest.length !== 2) return false;
      return rest[0] && rest[1] && rest[0] === encodeURIComponent(rest[0]) && rest[1] === encodeURIComponent(rest[1]);
    }
    function isCorrectlyEncodedName(spec) {
      return !spec.match(/[\/@\s\+%:]/) && spec === encodeURIComponent(spec);
    }
    function ensureValidName(name, strict, allowLegacyCase) {
      if (name.charAt(0) === "." || !(isValidScopedPackageName(name) || isCorrectlyEncodedName(name)) || strict && !allowLegacyCase && name !== name.toLowerCase() || name.toLowerCase() === "node_modules" || name.toLowerCase() === "favicon.ico") {
        throw new Error("Invalid name: " + JSON.stringify(name));
      }
    }
    function modifyPeople(data, fn) {
      if (data.author) data.author = fn(data.author);
      ["maintainers", "contributors"].forEach(function(set) {
        if (!Array.isArray(data[set])) return;
        data[set] = data[set].map(fn);
      });
      return data;
    }
    function unParsePerson(person) {
      if (typeof person === "string") return person;
      var name = person.name || "";
      var u = person.url || person.web;
      var url2 = u ? " (" + u + ")" : "";
      var e = person.email || person.mail;
      var email = e ? " <" + e + ">" : "";
      return name + email + url2;
    }
    function parsePerson(person) {
      if (typeof person !== "string") return person;
      var name = person.match(/^([^\(<]+)/);
      var url2 = person.match(/\(([^\)]+)\)/);
      var email = person.match(/<([^>]+)>/);
      var obj = {};
      if (name && name[0].trim()) obj.name = name[0].trim();
      if (email) obj.email = email[1];
      if (url2) obj.url = url2[1];
      return obj;
    }
    function addOptionalDepsToDeps(data, warn) {
      var o = data.optionalDependencies;
      if (!o) return;
      var d = data.dependencies || {};
      Object.keys(o).forEach(function(k) {
        d[k] = o[k];
      });
      data.dependencies = d;
    }
    function depObjectify(deps, type, warn) {
      if (!deps) return {};
      if (typeof deps === "string") {
        deps = deps.trim().split(/[\n\r\s\t ,]+/);
      }
      if (!Array.isArray(deps)) return deps;
      warn("deprecatedArrayDependencies", type);
      var o = {};
      deps.filter(function(d) {
        return typeof d === "string";
      }).forEach(function(d) {
        d = d.trim().split(/(:?[@\s><=])/);
        var dn = d.shift();
        var dv = d.join("");
        dv = dv.trim();
        dv = dv.replace(/^@/, "");
        o[dn] = dv;
      });
      return o;
    }
    function objectifyDeps(data, warn) {
      depTypes.forEach(function(type) {
        if (!data[type]) return;
        data[type] = depObjectify(data[type], type, warn);
      });
    }
    function bugsTypos(bugs, warn) {
      if (!bugs) return;
      Object.keys(bugs).forEach(function(k) {
        if (typos.bugs[k]) {
          warn("typo", k, typos.bugs[k], "bugs");
          bugs[typos.bugs[k]] = bugs[k];
          delete bugs[k];
        }
      });
    }
  }
});

// node_modules/normalize-package-data/lib/warning_messages.json
var require_warning_messages = __commonJS({
  "node_modules/normalize-package-data/lib/warning_messages.json"(exports2, module2) {
    module2.exports = {
      repositories: "'repositories' (plural) Not supported. Please pick one as the 'repository' field",
      missingRepository: "No repository field.",
      brokenGitUrl: "Probably broken git url: %s",
      nonObjectScripts: "scripts must be an object",
      nonStringScript: "script values must be string commands",
      nonArrayFiles: "Invalid 'files' member",
      invalidFilename: "Invalid filename in 'files' list: %s",
      nonArrayBundleDependencies: "Invalid 'bundleDependencies' list. Must be array of package names",
      nonStringBundleDependency: "Invalid bundleDependencies member: %s",
      nonDependencyBundleDependency: "Non-dependency in bundleDependencies: %s",
      nonObjectDependencies: "%s field must be an object",
      nonStringDependency: "Invalid dependency: %s %s",
      deprecatedArrayDependencies: "specifying %s as array is deprecated",
      deprecatedModules: "modules field is deprecated",
      nonArrayKeywords: "keywords should be an array of strings",
      nonStringKeyword: "keywords should be an array of strings",
      conflictingName: "%s is also the name of a node core module.",
      nonStringDescription: "'description' field should be a string",
      missingDescription: "No description",
      missingReadme: "No README data",
      missingLicense: "No license field.",
      nonEmailUrlBugsString: "Bug string field must be url, email, or {email,url}",
      nonUrlBugsUrlField: "bugs.url field must be a string url. Deleted.",
      nonEmailBugsEmailField: "bugs.email field must be a string email. Deleted.",
      emptyNormalizedBugs: "Normalized value of bugs field is an empty object. Deleted.",
      nonUrlHomepage: "homepage field must be a string url. Deleted.",
      invalidLicense: "license should be a valid SPDX license expression",
      typo: "%s should probably be %s."
    };
  }
});

// node_modules/normalize-package-data/lib/make_warning.js
var require_make_warning = __commonJS({
  "node_modules/normalize-package-data/lib/make_warning.js"(exports2, module2) {
    var util = require("util");
    var messages = require_warning_messages();
    module2.exports = function() {
      var args = Array.prototype.slice.call(arguments, 0);
      var warningName = args.shift();
      if (warningName == "typo") {
        return makeTypoWarning.apply(null, args);
      } else {
        var msgTemplate = messages[warningName] ? messages[warningName] : warningName + ": '%s'";
        args.unshift(msgTemplate);
        return util.format.apply(null, args);
      }
    };
    function makeTypoWarning(providedName, probableName, field) {
      if (field) {
        providedName = field + "['" + providedName + "']";
        probableName = field + "['" + probableName + "']";
      }
      return util.format(messages.typo, providedName, probableName);
    }
  }
});

// node_modules/normalize-package-data/lib/normalize.js
var require_normalize = __commonJS({
  "node_modules/normalize-package-data/lib/normalize.js"(exports2, module2) {
    module2.exports = normalize;
    var fixer = require_fixer();
    normalize.fixer = fixer;
    var makeWarning = require_make_warning();
    var fieldsToFix = [
      "name",
      "version",
      "description",
      "repository",
      "modules",
      "scripts",
      "files",
      "bin",
      "man",
      "bugs",
      "keywords",
      "readme",
      "homepage",
      "license"
    ];
    var otherThingsToFix = ["dependencies", "people", "typos"];
    var thingsToFix = fieldsToFix.map(function(fieldName) {
      return ucFirst(fieldName) + "Field";
    });
    thingsToFix = thingsToFix.concat(otherThingsToFix);
    function normalize(data, warn, strict) {
      if (warn === true) warn = null, strict = true;
      if (!strict) strict = false;
      if (!warn || data.private) warn = function(msg) {
      };
      if (data.scripts && data.scripts.install === "node-gyp rebuild" && !data.scripts.preinstall) {
        data.gypfile = true;
      }
      fixer.warn = function() {
        warn(makeWarning.apply(null, arguments));
      };
      thingsToFix.forEach(function(thingName) {
        fixer["fix" + ucFirst(thingName)](data, strict);
      });
      data._id = data.name + "@" + data.version;
    }
    function ucFirst(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }
});

// node_modules/read-pkg/index.js
var require_read_pkg = __commonJS({
  "node_modules/read-pkg/index.js"(exports2, module2) {
    "use strict";
    var { promisify } = require("util");
    var fs = require("fs");
    var path = require("path");
    var parseJson = require_parse_json();
    var readFileAsync = promisify(fs.readFile);
    module2.exports = async (options) => {
      options = {
        cwd: process.cwd(),
        normalize: true,
        ...options
      };
      const filePath = path.resolve(options.cwd, "package.json");
      const json = parseJson(await readFileAsync(filePath, "utf8"));
      if (options.normalize) {
        require_normalize()(json);
      }
      return json;
    };
    module2.exports.sync = (options) => {
      options = {
        cwd: process.cwd(),
        normalize: true,
        ...options
      };
      const filePath = path.resolve(options.cwd, "package.json");
      const json = parseJson(fs.readFileSync(filePath, "utf8"));
      if (options.normalize) {
        require_normalize()(json);
      }
      return json;
    };
  }
});

// node_modules/read-pkg-up/index.js
var require_read_pkg_up = __commonJS({
  "node_modules/read-pkg-up/index.js"(exports2, module2) {
    "use strict";
    var path = require("path");
    var findUp = require_find_up();
    var readPkg = require_read_pkg();
    module2.exports = async (options) => {
      const filePath = await findUp("package.json", options);
      if (!filePath) {
        return;
      }
      return {
        packageJson: await readPkg({ ...options, cwd: path.dirname(filePath) }),
        path: filePath
      };
    };
    module2.exports.sync = (options) => {
      const filePath = findUp.sync("package.json", options);
      if (!filePath) {
        return;
      }
      return {
        packageJson: readPkg.sync({ ...options, cwd: path.dirname(filePath) }),
        path: filePath
      };
    };
  }
});

// node_modules/raycast-cross-extension/distribution/index.js
var require_distribution = __commonJS({
  "node_modules/raycast-cross-extension/distribution/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.crossLaunchCommand = exports2.callbackLaunchCommand = void 0;
    var api_1 = require("@raycast/api");
    var read_pkg_up_1 = require_read_pkg_up();
    var callbackLaunchCommand = async (options, result) => (0, api_1.launchCommand)({
      ...options,
      context: {
        ...options.context,
        ...result
      }
    });
    exports2.callbackLaunchCommand = callbackLaunchCommand;
    var crossLaunchCommand2 = async (options, callbackLaunchOptions) => {
      if (callbackLaunchOptions === false) {
        return (0, api_1.launchCommand)(options);
      }
      const pack = (0, read_pkg_up_1.sync)({ cwd: __dirname, normalize: false });
      const ownerOrAuthorName = (
        // The `ownerOrAuthorName` was introduced in @raycast/api@1.78.0. We use a fallback to support older versions.
        api_1.environment.ownerOrAuthorName ?? (pack?.packageJson?.owner ?? pack?.packageJson?.author)
      );
      if ("ownerOrAuthorName" in options) {
        const targetHandle = `${options.ownerOrAuthorName}/${options.extensionName}`;
        if (!pack?.packageJson?.crossExtensions?.includes(targetHandle)) {
          const message = `Target extension '${targetHandle}' should be listed in 'crossExtensions' of package.json.`;
          console.error(message);
          return;
        }
      }
      return (0, api_1.launchCommand)({
        ...options,
        context: {
          ...options.context,
          callbackLaunchOptions: {
            name: api_1.environment.commandName,
            extensionName: api_1.environment.extensionName,
            ownerOrAuthorName,
            type: api_1.LaunchType.UserInitiated,
            ...callbackLaunchOptions
          }
        }
      });
    };
    exports2.crossLaunchCommand = crossLaunchCommand2;
  }
});

// src/ocr-translate.tsx
var ocr_translate_exports = {};
__export(ocr_translate_exports, {
  default: () => Command
});
module.exports = __toCommonJS(ocr_translate_exports);
var import_api = require("@raycast/api");
var import_raycast_cross_extension = __toESM(require_distribution());
async function Command({ launchContext = {} }) {
  const { text, error } = launchContext;
  if (error) {
    return;
  }
  if (typeof text === "string") {
    const query = text.trim();
    if (!query) {
      return;
    }
    await (0, import_api.launchCommand)({
      name: "translate",
      type: import_api.LaunchType.UserInitiated,
      context: { query }
    });
    return;
  }
  if (text === null) {
    return;
  }
  await (0, import_raycast_cross_extension.crossLaunchCommand)(
    {
      name: "recognize-text",
      type: import_api.LaunchType.Background,
      extensionName: "screenocr",
      ownerOrAuthorName: "huzef44"
    },
    {
      name: "translate",
      type: import_api.LaunchType.UserInitiated
    }
  ).catch(() => {
  });
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvcC10cnkvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvcmVhZC1wa2ctdXAvbm9kZV9tb2R1bGVzL3AtbGltaXQvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvcmVhZC1wa2ctdXAvbm9kZV9tb2R1bGVzL3AtbG9jYXRlL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL3JlYWQtcGtnLXVwL25vZGVfbW9kdWxlcy9sb2NhdGUtcGF0aC9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9wYXRoLWV4aXN0cy9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9yZWFkLXBrZy11cC9ub2RlX21vZHVsZXMvZmluZC11cC9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9pcy1hcnJheWlzaC9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9lcnJvci1leC9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9qc29uLXBhcnNlLWV2ZW4tYmV0dGVyLWVycm9ycy9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9saW5lcy1hbmQtY29sdW1ucy9idWlsZC9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9waWNvY29sb3JzL3BpY29jb2xvcnMuanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvanMtdG9rZW5zL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL0BiYWJlbC9oZWxwZXItdmFsaWRhdG9yLWlkZW50aWZpZXIvc3JjL2lkZW50aWZpZXIudHMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvQGJhYmVsL2hlbHBlci12YWxpZGF0b3ItaWRlbnRpZmllci9zcmMva2V5d29yZC50cyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9AYmFiZWwvaGVscGVyLXZhbGlkYXRvci1pZGVudGlmaWVyL3NyYy9pbmRleC50cyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9AYmFiZWwvY29kZS1mcmFtZS9zcmMvZGVmcy50cyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9AYmFiZWwvY29kZS1mcmFtZS9zcmMvaGlnaGxpZ2h0LnRzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL0BiYWJlbC9jb2RlLWZyYW1lL3NyYy9pbmRleC50cyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9wYXJzZS1qc29uL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS1wYWNrYWdlLWRhdGEvbm9kZV9tb2R1bGVzL3NlbXZlci9zZW12ZXIuanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvc3BkeC1saWNlbnNlLWlkcy9pbmRleC5qc29uIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL3NwZHgtbGljZW5zZS1pZHMvZGVwcmVjYXRlZC5qc29uIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL3NwZHgtZXhjZXB0aW9ucy9pbmRleC5qc29uIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL3NwZHgtZXhwcmVzc2lvbi1wYXJzZS9zY2FuLmpzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL3NwZHgtZXhwcmVzc2lvbi1wYXJzZS9wYXJzZS5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9zcGR4LWV4cHJlc3Npb24tcGFyc2UvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvc3BkeC1jb3JyZWN0L2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL3ZhbGlkYXRlLW5wbS1wYWNrYWdlLWxpY2Vuc2UvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvaG9zdGVkLWdpdC1pbmZvL2dpdC1ob3N0LWluZm8uanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvaG9zdGVkLWdpdC1pbmZvL2dpdC1ob3N0LmpzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL2hvc3RlZC1naXQtaW5mby9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9yZXNvbHZlL2xpYi9ob21lZGlyLmpzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL2VzLWVycm9ycy9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9yZXNvbHZlL2xpYi9jYWxsZXIuanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvcGF0aC1wYXJzZS9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9yZXNvbHZlL2xpYi9ub2RlLW1vZHVsZXMtcGF0aHMuanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvcmVzb2x2ZS9saWIvbm9ybWFsaXplLW9wdGlvbnMuanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvZnVuY3Rpb24tYmluZC9pbXBsZW1lbnRhdGlvbi5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9mdW5jdGlvbi1iaW5kL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL2hhc293bi9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9pcy1jb3JlLW1vZHVsZS9jb3JlLmpzb24iLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvaXMtY29yZS1tb2R1bGUvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvZXMtZXJyb3JzL3R5cGUuanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvcmVzb2x2ZS9saWIvYXN5bmMuanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvcmVzb2x2ZS9saWIvY29yZS5qc29uIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL3Jlc29sdmUvbGliL2NvcmUuanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvcmVzb2x2ZS9saWIvaXMtY29yZS5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9yZXNvbHZlL2xpYi9zeW5jLmpzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL3Jlc29sdmUvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvbm9ybWFsaXplLXBhY2thZ2UtZGF0YS9saWIvZXh0cmFjdF9kZXNjcmlwdGlvbi5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9ub3JtYWxpemUtcGFja2FnZS1kYXRhL2xpYi90eXBvcy5qc29uIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS1wYWNrYWdlLWRhdGEvbGliL2ZpeGVyLmpzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS1wYWNrYWdlLWRhdGEvbGliL3dhcm5pbmdfbWVzc2FnZXMuanNvbiIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9ub3JtYWxpemUtcGFja2FnZS1kYXRhL2xpYi9tYWtlX3dhcm5pbmcuanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvbm9ybWFsaXplLXBhY2thZ2UtZGF0YS9saWIvbm9ybWFsaXplLmpzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL3JlYWQtcGtnL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL3JlYWQtcGtnLXVwL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL3JheWNhc3QtY3Jvc3MtZXh0ZW5zaW9uL2Rpc3RyaWJ1dGlvbi9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL3NyYy9vY3ItdHJhbnNsYXRlLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwVHJ5ID0gKGZuLCAuLi5hcmd1bWVudHNfKSA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblx0cmVzb2x2ZShmbiguLi5hcmd1bWVudHNfKSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBwVHJ5O1xuLy8gVE9ETzogcmVtb3ZlIHRoaXMgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvblxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IHBUcnk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuY29uc3QgcFRyeSA9IHJlcXVpcmUoJ3AtdHJ5Jyk7XG5cbmNvbnN0IHBMaW1pdCA9IGNvbmN1cnJlbmN5ID0+IHtcblx0aWYgKCEoKE51bWJlci5pc0ludGVnZXIoY29uY3VycmVuY3kpIHx8IGNvbmN1cnJlbmN5ID09PSBJbmZpbml0eSkgJiYgY29uY3VycmVuY3kgPiAwKSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBgY29uY3VycmVuY3lgIHRvIGJlIGEgbnVtYmVyIGZyb20gMSBhbmQgdXAnKSk7XG5cdH1cblxuXHRjb25zdCBxdWV1ZSA9IFtdO1xuXHRsZXQgYWN0aXZlQ291bnQgPSAwO1xuXG5cdGNvbnN0IG5leHQgPSAoKSA9PiB7XG5cdFx0YWN0aXZlQ291bnQtLTtcblxuXHRcdGlmIChxdWV1ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRxdWV1ZS5zaGlmdCgpKCk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IHJ1biA9IChmbiwgcmVzb2x2ZSwgLi4uYXJncykgPT4ge1xuXHRcdGFjdGl2ZUNvdW50Kys7XG5cblx0XHRjb25zdCByZXN1bHQgPSBwVHJ5KGZuLCAuLi5hcmdzKTtcblxuXHRcdHJlc29sdmUocmVzdWx0KTtcblxuXHRcdHJlc3VsdC50aGVuKG5leHQsIG5leHQpO1xuXHR9O1xuXG5cdGNvbnN0IGVucXVldWUgPSAoZm4sIHJlc29sdmUsIC4uLmFyZ3MpID0+IHtcblx0XHRpZiAoYWN0aXZlQ291bnQgPCBjb25jdXJyZW5jeSkge1xuXHRcdFx0cnVuKGZuLCByZXNvbHZlLCAuLi5hcmdzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cXVldWUucHVzaChydW4uYmluZChudWxsLCBmbiwgcmVzb2x2ZSwgLi4uYXJncykpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBnZW5lcmF0b3IgPSAoZm4sIC4uLmFyZ3MpID0+IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gZW5xdWV1ZShmbiwgcmVzb2x2ZSwgLi4uYXJncykpO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyhnZW5lcmF0b3IsIHtcblx0XHRhY3RpdmVDb3VudDoge1xuXHRcdFx0Z2V0OiAoKSA9PiBhY3RpdmVDb3VudFxuXHRcdH0sXG5cdFx0cGVuZGluZ0NvdW50OiB7XG5cdFx0XHRnZXQ6ICgpID0+IHF1ZXVlLmxlbmd0aFxuXHRcdH0sXG5cdFx0Y2xlYXJRdWV1ZToge1xuXHRcdFx0dmFsdWU6ICgpID0+IHtcblx0XHRcdFx0cXVldWUubGVuZ3RoID0gMDtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBnZW5lcmF0b3I7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBMaW1pdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBwTGltaXQ7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuY29uc3QgcExpbWl0ID0gcmVxdWlyZSgncC1saW1pdCcpO1xuXG5jbGFzcyBFbmRFcnJvciBleHRlbmRzIEVycm9yIHtcblx0Y29uc3RydWN0b3IodmFsdWUpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0fVxufVxuXG4vLyBUaGUgaW5wdXQgY2FuIGFsc28gYmUgYSBwcm9taXNlLCBzbyB3ZSBhd2FpdCBpdFxuY29uc3QgdGVzdEVsZW1lbnQgPSBhc3luYyAoZWxlbWVudCwgdGVzdGVyKSA9PiB0ZXN0ZXIoYXdhaXQgZWxlbWVudCk7XG5cbi8vIFRoZSBpbnB1dCBjYW4gYWxzbyBiZSBhIHByb21pc2UsIHNvIHdlIGBQcm9taXNlLmFsbCgpYCB0aGVtIGJvdGhcbmNvbnN0IGZpbmRlciA9IGFzeW5jIGVsZW1lbnQgPT4ge1xuXHRjb25zdCB2YWx1ZXMgPSBhd2FpdCBQcm9taXNlLmFsbChlbGVtZW50KTtcblx0aWYgKHZhbHVlc1sxXSA9PT0gdHJ1ZSkge1xuXHRcdHRocm93IG5ldyBFbmRFcnJvcih2YWx1ZXNbMF0pO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgcExvY2F0ZSA9IGFzeW5jIChpdGVyYWJsZSwgdGVzdGVyLCBvcHRpb25zKSA9PiB7XG5cdG9wdGlvbnMgPSB7XG5cdFx0Y29uY3VycmVuY3k6IEluZmluaXR5LFxuXHRcdHByZXNlcnZlT3JkZXI6IHRydWUsXG5cdFx0Li4ub3B0aW9uc1xuXHR9O1xuXG5cdGNvbnN0IGxpbWl0ID0gcExpbWl0KG9wdGlvbnMuY29uY3VycmVuY3kpO1xuXG5cdC8vIFN0YXJ0IGFsbCB0aGUgcHJvbWlzZXMgY29uY3VycmVudGx5IHdpdGggb3B0aW9uYWwgbGltaXRcblx0Y29uc3QgaXRlbXMgPSBbLi4uaXRlcmFibGVdLm1hcChlbGVtZW50ID0+IFtlbGVtZW50LCBsaW1pdCh0ZXN0RWxlbWVudCwgZWxlbWVudCwgdGVzdGVyKV0pO1xuXG5cdC8vIENoZWNrIHRoZSBwcm9taXNlcyBlaXRoZXIgc2VyaWFsbHkgb3IgY29uY3VycmVudGx5XG5cdGNvbnN0IGNoZWNrTGltaXQgPSBwTGltaXQob3B0aW9ucy5wcmVzZXJ2ZU9yZGVyID8gMSA6IEluZmluaXR5KTtcblxuXHR0cnkge1xuXHRcdGF3YWl0IFByb21pc2UuYWxsKGl0ZW1zLm1hcChlbGVtZW50ID0+IGNoZWNrTGltaXQoZmluZGVyLCBlbGVtZW50KSkpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIEVuZEVycm9yKSB7XG5cdFx0XHRyZXR1cm4gZXJyb3IudmFsdWU7XG5cdFx0fVxuXG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcExvY2F0ZTtcbi8vIFRPRE86IFJlbW92ZSB0aGlzIGZvciB0aGUgbmV4dCBtYWpvciByZWxlYXNlXG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gcExvY2F0ZTtcbiIsICIndXNlIHN0cmljdCc7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuY29uc3Qge3Byb21pc2lmeX0gPSByZXF1aXJlKCd1dGlsJyk7XG5jb25zdCBwTG9jYXRlID0gcmVxdWlyZSgncC1sb2NhdGUnKTtcblxuY29uc3QgZnNTdGF0ID0gcHJvbWlzaWZ5KGZzLnN0YXQpO1xuY29uc3QgZnNMU3RhdCA9IHByb21pc2lmeShmcy5sc3RhdCk7XG5cbmNvbnN0IHR5cGVNYXBwaW5ncyA9IHtcblx0ZGlyZWN0b3J5OiAnaXNEaXJlY3RvcnknLFxuXHRmaWxlOiAnaXNGaWxlJ1xufTtcblxuZnVuY3Rpb24gY2hlY2tUeXBlKHt0eXBlfSkge1xuXHRpZiAodHlwZSBpbiB0eXBlTWFwcGluZ3MpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgdHlwZSBzcGVjaWZpZWQ6ICR7dHlwZX1gKTtcbn1cblxuY29uc3QgbWF0Y2hUeXBlID0gKHR5cGUsIHN0YXQpID0+IHR5cGUgPT09IHVuZGVmaW5lZCB8fCBzdGF0W3R5cGVNYXBwaW5nc1t0eXBlXV0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhc3luYyAocGF0aHMsIG9wdGlvbnMpID0+IHtcblx0b3B0aW9ucyA9IHtcblx0XHRjd2Q6IHByb2Nlc3MuY3dkKCksXG5cdFx0dHlwZTogJ2ZpbGUnLFxuXHRcdGFsbG93U3ltbGlua3M6IHRydWUsXG5cdFx0Li4ub3B0aW9uc1xuXHR9O1xuXHRjaGVja1R5cGUob3B0aW9ucyk7XG5cdGNvbnN0IHN0YXRGbiA9IG9wdGlvbnMuYWxsb3dTeW1saW5rcyA/IGZzU3RhdCA6IGZzTFN0YXQ7XG5cblx0cmV0dXJuIHBMb2NhdGUocGF0aHMsIGFzeW5jIHBhdGhfID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3Qgc3RhdCA9IGF3YWl0IHN0YXRGbihwYXRoLnJlc29sdmUob3B0aW9ucy5jd2QsIHBhdGhfKSk7XG5cdFx0XHRyZXR1cm4gbWF0Y2hUeXBlKG9wdGlvbnMudHlwZSwgc3RhdCk7XG5cdFx0fSBjYXRjaCAoXykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fSwgb3B0aW9ucyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5zeW5jID0gKHBhdGhzLCBvcHRpb25zKSA9PiB7XG5cdG9wdGlvbnMgPSB7XG5cdFx0Y3dkOiBwcm9jZXNzLmN3ZCgpLFxuXHRcdGFsbG93U3ltbGlua3M6IHRydWUsXG5cdFx0dHlwZTogJ2ZpbGUnLFxuXHRcdC4uLm9wdGlvbnNcblx0fTtcblx0Y2hlY2tUeXBlKG9wdGlvbnMpO1xuXHRjb25zdCBzdGF0Rm4gPSBvcHRpb25zLmFsbG93U3ltbGlua3MgPyBmcy5zdGF0U3luYyA6IGZzLmxzdGF0U3luYztcblxuXHRmb3IgKGNvbnN0IHBhdGhfIG9mIHBhdGhzKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHN0YXQgPSBzdGF0Rm4ocGF0aC5yZXNvbHZlKG9wdGlvbnMuY3dkLCBwYXRoXykpO1xuXG5cdFx0XHRpZiAobWF0Y2hUeXBlKG9wdGlvbnMudHlwZSwgc3RhdCkpIHtcblx0XHRcdFx0cmV0dXJuIHBhdGhfO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKF8pIHtcblx0XHR9XG5cdH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuY29uc3Qge3Byb21pc2lmeX0gPSByZXF1aXJlKCd1dGlsJyk7XG5cbmNvbnN0IHBBY2Nlc3MgPSBwcm9taXNpZnkoZnMuYWNjZXNzKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhc3luYyBwYXRoID0+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBwQWNjZXNzKHBhdGgpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChfKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5zeW5jID0gcGF0aCA9PiB7XG5cdHRyeSB7XG5cdFx0ZnMuYWNjZXNzU3luYyhwYXRoKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoXykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbiIsICIndXNlIHN0cmljdCc7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3QgbG9jYXRlUGF0aCA9IHJlcXVpcmUoJ2xvY2F0ZS1wYXRoJyk7XG5jb25zdCBwYXRoRXhpc3RzID0gcmVxdWlyZSgncGF0aC1leGlzdHMnKTtcblxuY29uc3Qgc3RvcCA9IFN5bWJvbCgnZmluZFVwLnN0b3AnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhc3luYyAobmFtZSwgb3B0aW9ucyA9IHt9KSA9PiB7XG5cdGxldCBkaXJlY3RvcnkgPSBwYXRoLnJlc29sdmUob3B0aW9ucy5jd2QgfHwgJycpO1xuXHRjb25zdCB7cm9vdH0gPSBwYXRoLnBhcnNlKGRpcmVjdG9yeSk7XG5cdGNvbnN0IHBhdGhzID0gW10uY29uY2F0KG5hbWUpO1xuXG5cdGNvbnN0IHJ1bk1hdGNoZXIgPSBhc3luYyBsb2NhdGVPcHRpb25zID0+IHtcblx0XHRpZiAodHlwZW9mIG5hbWUgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHJldHVybiBsb2NhdGVQYXRoKHBhdGhzLCBsb2NhdGVPcHRpb25zKTtcblx0XHR9XG5cblx0XHRjb25zdCBmb3VuZFBhdGggPSBhd2FpdCBuYW1lKGxvY2F0ZU9wdGlvbnMuY3dkKTtcblx0XHRpZiAodHlwZW9mIGZvdW5kUGF0aCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiBsb2NhdGVQYXRoKFtmb3VuZFBhdGhdLCBsb2NhdGVPcHRpb25zKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZm91bmRQYXRoO1xuXHR9O1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zdGFudC1jb25kaXRpb25cblx0d2hpbGUgKHRydWUpIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxuXHRcdGNvbnN0IGZvdW5kUGF0aCA9IGF3YWl0IHJ1bk1hdGNoZXIoey4uLm9wdGlvbnMsIGN3ZDogZGlyZWN0b3J5fSk7XG5cblx0XHRpZiAoZm91bmRQYXRoID09PSBzdG9wKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGZvdW5kUGF0aCkge1xuXHRcdFx0cmV0dXJuIHBhdGgucmVzb2x2ZShkaXJlY3RvcnksIGZvdW5kUGF0aCk7XG5cdFx0fVxuXG5cdFx0aWYgKGRpcmVjdG9yeSA9PT0gcm9vdCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGRpcmVjdG9yeSA9IHBhdGguZGlybmFtZShkaXJlY3RvcnkpO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5zeW5jID0gKG5hbWUsIG9wdGlvbnMgPSB7fSkgPT4ge1xuXHRsZXQgZGlyZWN0b3J5ID0gcGF0aC5yZXNvbHZlKG9wdGlvbnMuY3dkIHx8ICcnKTtcblx0Y29uc3Qge3Jvb3R9ID0gcGF0aC5wYXJzZShkaXJlY3RvcnkpO1xuXHRjb25zdCBwYXRocyA9IFtdLmNvbmNhdChuYW1lKTtcblxuXHRjb25zdCBydW5NYXRjaGVyID0gbG9jYXRlT3B0aW9ucyA9PiB7XG5cdFx0aWYgKHR5cGVvZiBuYW1lICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRyZXR1cm4gbG9jYXRlUGF0aC5zeW5jKHBhdGhzLCBsb2NhdGVPcHRpb25zKTtcblx0XHR9XG5cblx0XHRjb25zdCBmb3VuZFBhdGggPSBuYW1lKGxvY2F0ZU9wdGlvbnMuY3dkKTtcblx0XHRpZiAodHlwZW9mIGZvdW5kUGF0aCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiBsb2NhdGVQYXRoLnN5bmMoW2ZvdW5kUGF0aF0sIGxvY2F0ZU9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmb3VuZFBhdGg7XG5cdH07XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnN0YW50LWNvbmRpdGlvblxuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdGNvbnN0IGZvdW5kUGF0aCA9IHJ1bk1hdGNoZXIoey4uLm9wdGlvbnMsIGN3ZDogZGlyZWN0b3J5fSk7XG5cblx0XHRpZiAoZm91bmRQYXRoID09PSBzdG9wKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGZvdW5kUGF0aCkge1xuXHRcdFx0cmV0dXJuIHBhdGgucmVzb2x2ZShkaXJlY3RvcnksIGZvdW5kUGF0aCk7XG5cdFx0fVxuXG5cdFx0aWYgKGRpcmVjdG9yeSA9PT0gcm9vdCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGRpcmVjdG9yeSA9IHBhdGguZGlybmFtZShkaXJlY3RvcnkpO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5leGlzdHMgPSBwYXRoRXhpc3RzO1xuXG5tb2R1bGUuZXhwb3J0cy5zeW5jLmV4aXN0cyA9IHBhdGhFeGlzdHMuc3luYztcblxubW9kdWxlLmV4cG9ydHMuc3RvcCA9IHN0b3A7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQXJyYXlpc2gob2JqKSB7XG5cdGlmICghb2JqKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIG9iaiBpbnN0YW5jZW9mIEFycmF5IHx8IEFycmF5LmlzQXJyYXkob2JqKSB8fFxuXHRcdChvYmoubGVuZ3RoID49IDAgJiYgb2JqLnNwbGljZSBpbnN0YW5jZW9mIEZ1bmN0aW9uKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcbnZhciBpc0FycmF5aXNoID0gcmVxdWlyZSgnaXMtYXJyYXlpc2gnKTtcblxudmFyIGVycm9yRXggPSBmdW5jdGlvbiBlcnJvckV4KG5hbWUsIHByb3BlcnRpZXMpIHtcblx0aWYgKCFuYW1lIHx8IG5hbWUuY29uc3RydWN0b3IgIT09IFN0cmluZykge1xuXHRcdHByb3BlcnRpZXMgPSBuYW1lIHx8IHt9O1xuXHRcdG5hbWUgPSBFcnJvci5uYW1lO1xuXHR9XG5cblx0dmFyIGVycm9yRXhFcnJvciA9IGZ1bmN0aW9uIEVycm9yRVhFcnJvcihtZXNzYWdlKSB7XG5cdFx0aWYgKCF0aGlzKSB7XG5cdFx0XHRyZXR1cm4gbmV3IEVycm9yRVhFcnJvcihtZXNzYWdlKTtcblx0XHR9XG5cblx0XHRtZXNzYWdlID0gbWVzc2FnZSBpbnN0YW5jZW9mIEVycm9yXG5cdFx0XHQ/IG1lc3NhZ2UubWVzc2FnZVxuXHRcdFx0OiAobWVzc2FnZSB8fCB0aGlzLm1lc3NhZ2UpO1xuXG5cdFx0RXJyb3IuY2FsbCh0aGlzLCBtZXNzYWdlKTtcblx0XHRFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBlcnJvckV4RXJyb3IpO1xuXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnbWVzc2FnZScsIHtcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHZhciBuZXdNZXNzYWdlID0gbWVzc2FnZS5zcGxpdCgvXFxyP1xcbi9nKTtcblxuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gcHJvcGVydGllcykge1xuXHRcdFx0XHRcdGlmICghcHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR2YXIgbW9kaWZpZXIgPSBwcm9wZXJ0aWVzW2tleV07XG5cblx0XHRcdFx0XHRpZiAoJ21lc3NhZ2UnIGluIG1vZGlmaWVyKSB7XG5cdFx0XHRcdFx0XHRuZXdNZXNzYWdlID0gbW9kaWZpZXIubWVzc2FnZSh0aGlzW2tleV0sIG5ld01lc3NhZ2UpIHx8IG5ld01lc3NhZ2U7XG5cdFx0XHRcdFx0XHRpZiAoIWlzQXJyYXlpc2gobmV3TWVzc2FnZSkpIHtcblx0XHRcdFx0XHRcdFx0bmV3TWVzc2FnZSA9IFtuZXdNZXNzYWdlXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gbmV3TWVzc2FnZS5qb2luKCdcXG4nKTtcblx0XHRcdH0sXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICh2KSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSB2O1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dmFyIG92ZXJ3cml0dGVuU3RhY2sgPSBudWxsO1xuXG5cdFx0dmFyIHN0YWNrRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgJ3N0YWNrJyk7XG5cdFx0dmFyIHN0YWNrR2V0dGVyID0gc3RhY2tEZXNjcmlwdG9yLmdldDtcblx0XHR2YXIgc3RhY2tWYWx1ZSA9IHN0YWNrRGVzY3JpcHRvci52YWx1ZTtcblx0XHRkZWxldGUgc3RhY2tEZXNjcmlwdG9yLnZhbHVlO1xuXHRcdGRlbGV0ZSBzdGFja0Rlc2NyaXB0b3Iud3JpdGFibGU7XG5cblx0XHRzdGFja0Rlc2NyaXB0b3Iuc2V0ID0gZnVuY3Rpb24gKG5ld3N0YWNrKSB7XG5cdFx0XHRvdmVyd3JpdHRlblN0YWNrID0gbmV3c3RhY2s7XG5cdFx0fTtcblxuXHRcdHN0YWNrRGVzY3JpcHRvci5nZXQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgc3RhY2sgPSAob3ZlcndyaXR0ZW5TdGFjayB8fCAoKHN0YWNrR2V0dGVyKVxuXHRcdFx0XHQ/IHN0YWNrR2V0dGVyLmNhbGwodGhpcylcblx0XHRcdFx0OiBzdGFja1ZhbHVlKSkuc3BsaXQoL1xccj9cXG4rL2cpO1xuXG5cdFx0XHQvLyBzdGFydGluZyBpbiBOb2RlIDcsIHRoZSBzdGFjayBidWlsZGVyIGNhY2hlcyB0aGUgbWVzc2FnZS5cblx0XHRcdC8vIGp1c3QgcmVwbGFjZSBpdC5cblx0XHRcdGlmICghb3ZlcndyaXR0ZW5TdGFjaykge1xuXHRcdFx0XHRzdGFja1swXSA9IHRoaXMubmFtZSArICc6ICcgKyB0aGlzLm1lc3NhZ2U7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBsaW5lQ291bnQgPSAxO1xuXHRcdFx0Zm9yICh2YXIga2V5IGluIHByb3BlcnRpZXMpIHtcblx0XHRcdFx0aWYgKCFwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBtb2RpZmllciA9IHByb3BlcnRpZXNba2V5XTtcblxuXHRcdFx0XHRpZiAoJ2xpbmUnIGluIG1vZGlmaWVyKSB7XG5cdFx0XHRcdFx0dmFyIGxpbmUgPSBtb2RpZmllci5saW5lKHRoaXNba2V5XSk7XG5cdFx0XHRcdFx0aWYgKGxpbmUpIHtcblx0XHRcdFx0XHRcdHN0YWNrLnNwbGljZShsaW5lQ291bnQrKywgMCwgJyAgICAnICsgbGluZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCdzdGFjaycgaW4gbW9kaWZpZXIpIHtcblx0XHRcdFx0XHRtb2RpZmllci5zdGFjayh0aGlzW2tleV0sIHN0YWNrKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gc3RhY2suam9pbignXFxuJyk7XG5cdFx0fTtcblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnc3RhY2snLCBzdGFja0Rlc2NyaXB0b3IpO1xuXHR9O1xuXG5cdGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcblx0XHRPYmplY3Quc2V0UHJvdG90eXBlT2YoZXJyb3JFeEVycm9yLnByb3RvdHlwZSwgRXJyb3IucHJvdG90eXBlKTtcblx0XHRPYmplY3Quc2V0UHJvdG90eXBlT2YoZXJyb3JFeEVycm9yLCBFcnJvcik7XG5cdH0gZWxzZSB7XG5cdFx0dXRpbC5pbmhlcml0cyhlcnJvckV4RXJyb3IsIEVycm9yKTtcblx0fVxuXG5cdHJldHVybiBlcnJvckV4RXJyb3I7XG59O1xuXG5lcnJvckV4LmFwcGVuZCA9IGZ1bmN0aW9uIChzdHIsIGRlZikge1xuXHRyZXR1cm4ge1xuXHRcdG1lc3NhZ2U6IGZ1bmN0aW9uICh2LCBtZXNzYWdlKSB7XG5cdFx0XHR2ID0gdiB8fCBkZWY7XG5cblx0XHRcdGlmICh2KSB7XG5cdFx0XHRcdG1lc3NhZ2VbMF0gKz0gJyAnICsgc3RyLnJlcGxhY2UoJyVzJywgdi50b1N0cmluZygpKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG1lc3NhZ2U7XG5cdFx0fVxuXHR9O1xufTtcblxuZXJyb3JFeC5saW5lID0gZnVuY3Rpb24gKHN0ciwgZGVmKSB7XG5cdHJldHVybiB7XG5cdFx0bGluZTogZnVuY3Rpb24gKHYpIHtcblx0XHRcdHYgPSB2IHx8IGRlZjtcblxuXHRcdFx0aWYgKHYpIHtcblx0XHRcdFx0cmV0dXJuIHN0ci5yZXBsYWNlKCclcycsIHYudG9TdHJpbmcoKSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0fTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXJyb3JFeDtcbiIsICIndXNlIHN0cmljdCdcblxuY29uc3QgaGV4aWZ5ID0gY2hhciA9PiB7XG4gIGNvbnN0IGggPSBjaGFyLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKClcbiAgcmV0dXJuICcweCcgKyAoaC5sZW5ndGggJSAyID8gJzAnIDogJycpICsgaFxufVxuXG5jb25zdCBwYXJzZUVycm9yID0gKGUsIHR4dCwgY29udGV4dCkgPT4ge1xuICBpZiAoIXR4dCkge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiBlLm1lc3NhZ2UgKyAnIHdoaWxlIHBhcnNpbmcgZW1wdHkgc3RyaW5nJyxcbiAgICAgIHBvc2l0aW9uOiAwLFxuICAgIH1cbiAgfVxuICBjb25zdCBiYWRUb2tlbiA9IGUubWVzc2FnZS5tYXRjaCgvXlVuZXhwZWN0ZWQgdG9rZW4gKC4pIC4qcG9zaXRpb25cXHMrKFxcZCspL2kpXG4gIGNvbnN0IGVycklkeCA9IGJhZFRva2VuID8gK2JhZFRva2VuWzJdXG4gICAgOiBlLm1lc3NhZ2UubWF0Y2goL15VbmV4cGVjdGVkIGVuZCBvZiBKU09OLiovaSkgPyB0eHQubGVuZ3RoIC0gMVxuICAgIDogbnVsbFxuXG4gIGNvbnN0IG1zZyA9IGJhZFRva2VuID8gZS5tZXNzYWdlLnJlcGxhY2UoL15VbmV4cGVjdGVkIHRva2VuIC4vLCBgVW5leHBlY3RlZCB0b2tlbiAke1xuICAgICAgSlNPTi5zdHJpbmdpZnkoYmFkVG9rZW5bMV0pXG4gICAgfSAoJHtoZXhpZnkoYmFkVG9rZW5bMV0pfSlgKVxuICAgIDogZS5tZXNzYWdlXG5cbiAgaWYgKGVycklkeCAhPT0gbnVsbCAmJiBlcnJJZHggIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gZXJySWR4IDw9IGNvbnRleHQgPyAwXG4gICAgICA6IGVycklkeCAtIGNvbnRleHRcblxuICAgIGNvbnN0IGVuZCA9IGVycklkeCArIGNvbnRleHQgPj0gdHh0Lmxlbmd0aCA/IHR4dC5sZW5ndGhcbiAgICAgIDogZXJySWR4ICsgY29udGV4dFxuXG4gICAgY29uc3Qgc2xpY2UgPSAoc3RhcnQgPT09IDAgPyAnJyA6ICcuLi4nKSArXG4gICAgICB0eHQuc2xpY2Uoc3RhcnQsIGVuZCkgK1xuICAgICAgKGVuZCA9PT0gdHh0Lmxlbmd0aCA/ICcnIDogJy4uLicpXG5cbiAgICBjb25zdCBuZWFyID0gdHh0ID09PSBzbGljZSA/ICcnIDogJ25lYXIgJ1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6IG1zZyArIGAgd2hpbGUgcGFyc2luZyAke25lYXJ9JHtKU09OLnN0cmluZ2lmeShzbGljZSl9YCxcbiAgICAgIHBvc2l0aW9uOiBlcnJJZHgsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiBtc2cgKyBgIHdoaWxlIHBhcnNpbmcgJyR7dHh0LnNsaWNlKDAsIGNvbnRleHQgKiAyKX0nYCxcbiAgICAgIHBvc2l0aW9uOiAwLFxuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBKU09OUGFyc2VFcnJvciBleHRlbmRzIFN5bnRheEVycm9yIHtcbiAgY29uc3RydWN0b3IgKGVyLCB0eHQsIGNvbnRleHQsIGNhbGxlcikge1xuICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IDIwXG4gICAgY29uc3QgbWV0YWRhdGEgPSBwYXJzZUVycm9yKGVyLCB0eHQsIGNvbnRleHQpXG4gICAgc3VwZXIobWV0YWRhdGEubWVzc2FnZSlcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG1ldGFkYXRhKVxuICAgIHRoaXMuY29kZSA9ICdFSlNPTlBBUlNFJ1xuICAgIHRoaXMuc3lzdGVtRXJyb3IgPSBlclxuICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIGNhbGxlciB8fCB0aGlzLmNvbnN0cnVjdG9yKVxuICB9XG4gIGdldCBuYW1lICgpIHsgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZSB9XG4gIHNldCBuYW1lIChuKSB7fVxuICBnZXQgW1N5bWJvbC50b1N0cmluZ1RhZ10gKCkgeyByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lIH1cbn1cblxuY29uc3Qga0luZGVudCA9IFN5bWJvbC5mb3IoJ2luZGVudCcpXG5jb25zdCBrTmV3bGluZSA9IFN5bWJvbC5mb3IoJ25ld2xpbmUnKVxuLy8gb25seSByZXNwZWN0IGluZGVudGF0aW9uIGlmIHdlIGdvdCBhIGxpbmUgYnJlYWssIG90aGVyd2lzZSBzcXVhc2ggaXRcbi8vIHRoaW5ncyBvdGhlciB0aGFuIG9iamVjdHMgYW5kIGFycmF5cyBhcmVuJ3QgaW5kZW50ZWQsIHNvIGlnbm9yZSB0aG9zZVxuLy8gSW1wb3J0YW50OiBpbiBib3RoIG9mIHRoZXNlIHJlZ2V4cHMsIHRoZSAkMSBjYXB0dXJlIGdyb3VwIGlzIHRoZSBuZXdsaW5lXG4vLyBvciB1bmRlZmluZWQsIGFuZCB0aGUgJDIgY2FwdHVyZSBncm91cCBpcyB0aGUgaW5kZW50LCBvciB1bmRlZmluZWQuXG5jb25zdCBmb3JtYXRSRSA9IC9eXFxzKlt7XFxbXSgoPzpcXHI/XFxuKSspKFtcXHNcXHRdKikvXG5jb25zdCBlbXB0eVJFID0gL14oPzpcXHtcXH18XFxbXFxdKSgoPzpcXHI/XFxuKSspPyQvXG5cbmNvbnN0IHBhcnNlSnNvbiA9ICh0eHQsIHJldml2ZXIsIGNvbnRleHQpID0+IHtcbiAgY29uc3QgcGFyc2VUZXh0ID0gc3RyaXBCT00odHh0KVxuICBjb250ZXh0ID0gY29udGV4dCB8fCAyMFxuICB0cnkge1xuICAgIC8vIGdldCB0aGUgaW5kZW50YXRpb24gc28gdGhhdCB3ZSBjYW4gc2F2ZSBpdCBiYWNrIG5pY2VseVxuICAgIC8vIGlmIHRoZSBmaWxlIHN0YXJ0cyB3aXRoIHtcIiB0aGVuIHdlIGhhdmUgYW4gaW5kZW50IG9mICcnLCBpZSwgbm9uZVxuICAgIC8vIG90aGVyd2lzZSwgcGljayB0aGUgaW5kZW50YXRpb24gb2YgdGhlIG5leHQgbGluZSBhZnRlciB0aGUgZmlyc3QgXFxuXG4gICAgLy8gSWYgdGhlIHBhdHRlcm4gZG9lc24ndCBtYXRjaCwgdGhlbiBpdCBtZWFucyBubyBpbmRlbnRhdGlvbi5cbiAgICAvLyBKU09OLnN0cmluZ2lmeSBpZ25vcmVzIHN5bWJvbHMsIHNvIHRoaXMgaXMgcmVhc29uYWJseSBzYWZlLlxuICAgIC8vIGlmIHRoZSBzdHJpbmcgaXMgJ3t9JyBvciAnW10nLCB0aGVuIHVzZSB0aGUgZGVmYXVsdCAyLXNwYWNlIGluZGVudC5cbiAgICBjb25zdCBbLCBuZXdsaW5lID0gJ1xcbicsIGluZGVudCA9ICcgICddID0gcGFyc2VUZXh0Lm1hdGNoKGVtcHR5UkUpIHx8XG4gICAgICBwYXJzZVRleHQubWF0Y2goZm9ybWF0UkUpIHx8XG4gICAgICBbLCAnJywgJyddXG5cbiAgICBjb25zdCByZXN1bHQgPSBKU09OLnBhcnNlKHBhcnNlVGV4dCwgcmV2aXZlcilcbiAgICBpZiAocmVzdWx0ICYmIHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba05ld2xpbmVdID0gbmV3bGluZVxuICAgICAgcmVzdWx0W2tJbmRlbnRdID0gaW5kZW50XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmICh0eXBlb2YgdHh0ICE9PSAnc3RyaW5nJyAmJiAhQnVmZmVyLmlzQnVmZmVyKHR4dCkpIHtcbiAgICAgIGNvbnN0IGlzRW1wdHlBcnJheSA9IEFycmF5LmlzQXJyYXkodHh0KSAmJiB0eHQubGVuZ3RoID09PSAwXG4gICAgICB0aHJvdyBPYmplY3QuYXNzaWduKG5ldyBUeXBlRXJyb3IoXG4gICAgICAgIGBDYW5ub3QgcGFyc2UgJHtpc0VtcHR5QXJyYXkgPyAnYW4gZW1wdHkgYXJyYXknIDogU3RyaW5nKHR4dCl9YFxuICAgICAgKSwge1xuICAgICAgICBjb2RlOiAnRUpTT05QQVJTRScsXG4gICAgICAgIHN5c3RlbUVycm9yOiBlLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgSlNPTlBhcnNlRXJyb3IoZSwgcGFyc2VUZXh0LCBjb250ZXh0LCBwYXJzZUpzb24pXG4gIH1cbn1cblxuLy8gUmVtb3ZlIGJ5dGUgb3JkZXIgbWFya2VyLiBUaGlzIGNhdGNoZXMgRUYgQkIgQkYgKHRoZSBVVEYtOCBCT00pXG4vLyBiZWNhdXNlIHRoZSBidWZmZXItdG8tc3RyaW5nIGNvbnZlcnNpb24gaW4gYGZzLnJlYWRGaWxlU3luYygpYFxuLy8gdHJhbnNsYXRlcyBpdCB0byBGRUZGLCB0aGUgVVRGLTE2IEJPTS5cbmNvbnN0IHN0cmlwQk9NID0gdHh0ID0+IFN0cmluZyh0eHQpLnJlcGxhY2UoL15cXHVGRUZGLywgJycpXG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VKc29uXG5wYXJzZUpzb24uSlNPTlBhcnNlRXJyb3IgPSBKU09OUGFyc2VFcnJvclxuXG5wYXJzZUpzb24ubm9FeGNlcHRpb25zID0gKHR4dCwgcmV2aXZlcikgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKHN0cmlwQk9NKHR4dCksIHJldml2ZXIpXG4gIH0gY2F0Y2ggKGUpIHt9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5MaW5lc0FuZENvbHVtbnMgPSB2b2lkIDA7XG52YXIgTEYgPSAnXFxuJztcbnZhciBDUiA9ICdcXHInO1xudmFyIExpbmVzQW5kQ29sdW1ucyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBMaW5lc0FuZENvbHVtbnMoc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgICAgICB2YXIgb2Zmc2V0cyA9IFswXTtcbiAgICAgICAgZm9yICh2YXIgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgc3RyaW5nLmxlbmd0aDspIHtcbiAgICAgICAgICAgIHN3aXRjaCAoc3RyaW5nW29mZnNldF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIExGOlxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgKz0gTEYubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBvZmZzZXRzLnB1c2gob2Zmc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBDUjpcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ICs9IENSLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cmluZ1tvZmZzZXRdID09PSBMRikge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ICs9IExGLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRzLnB1c2gob2Zmc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0Kys7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMub2Zmc2V0cyA9IG9mZnNldHM7XG4gICAgfVxuICAgIExpbmVzQW5kQ29sdW1ucy5wcm90b3R5cGUubG9jYXRpb25Gb3JJbmRleCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID4gdGhpcy5zdHJpbmcubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbGluZSA9IDA7XG4gICAgICAgIHZhciBvZmZzZXRzID0gdGhpcy5vZmZzZXRzO1xuICAgICAgICB3aGlsZSAob2Zmc2V0c1tsaW5lICsgMV0gPD0gaW5kZXgpIHtcbiAgICAgICAgICAgIGxpbmUrKztcbiAgICAgICAgfVxuICAgICAgICB2YXIgY29sdW1uID0gaW5kZXggLSBvZmZzZXRzW2xpbmVdO1xuICAgICAgICByZXR1cm4geyBsaW5lOiBsaW5lLCBjb2x1bW46IGNvbHVtbiB9O1xuICAgIH07XG4gICAgTGluZXNBbmRDb2x1bW5zLnByb3RvdHlwZS5pbmRleEZvckxvY2F0aW9uID0gZnVuY3Rpb24gKGxvY2F0aW9uKSB7XG4gICAgICAgIHZhciBsaW5lID0gbG9jYXRpb24ubGluZSwgY29sdW1uID0gbG9jYXRpb24uY29sdW1uO1xuICAgICAgICBpZiAobGluZSA8IDAgfHwgbGluZSA+PSB0aGlzLm9mZnNldHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sdW1uIDwgMCB8fCBjb2x1bW4gPiB0aGlzLmxlbmd0aE9mTGluZShsaW5lKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMub2Zmc2V0c1tsaW5lXSArIGNvbHVtbjtcbiAgICB9O1xuICAgIExpbmVzQW5kQ29sdW1ucy5wcm90b3R5cGUubGVuZ3RoT2ZMaW5lID0gZnVuY3Rpb24gKGxpbmUpIHtcbiAgICAgICAgdmFyIG9mZnNldCA9IHRoaXMub2Zmc2V0c1tsaW5lXTtcbiAgICAgICAgdmFyIG5leHRPZmZzZXQgPSBsaW5lID09PSB0aGlzLm9mZnNldHMubGVuZ3RoIC0gMVxuICAgICAgICAgICAgPyB0aGlzLnN0cmluZy5sZW5ndGhcbiAgICAgICAgICAgIDogdGhpcy5vZmZzZXRzW2xpbmUgKyAxXTtcbiAgICAgICAgcmV0dXJuIG5leHRPZmZzZXQgLSBvZmZzZXQ7XG4gICAgfTtcbiAgICByZXR1cm4gTGluZXNBbmRDb2x1bW5zO1xufSgpKTtcbmV4cG9ydHMuTGluZXNBbmRDb2x1bW5zID0gTGluZXNBbmRDb2x1bW5zO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBMaW5lc0FuZENvbHVtbnM7XG4iLCAibGV0IHAgPSBwcm9jZXNzIHx8IHt9LCBhcmd2ID0gcC5hcmd2IHx8IFtdLCBlbnYgPSBwLmVudiB8fCB7fVxubGV0IGlzQ29sb3JTdXBwb3J0ZWQgPVxuXHQhKCEhZW52Lk5PX0NPTE9SIHx8IGFyZ3YuaW5jbHVkZXMoXCItLW5vLWNvbG9yXCIpKSAmJlxuXHQoISFlbnYuRk9SQ0VfQ09MT1IgfHwgYXJndi5pbmNsdWRlcyhcIi0tY29sb3JcIikgfHwgcC5wbGF0Zm9ybSA9PT0gXCJ3aW4zMlwiIHx8ICgocC5zdGRvdXQgfHwge30pLmlzVFRZICYmIGVudi5URVJNICE9PSBcImR1bWJcIikgfHwgISFlbnYuQ0kpXG5cbmxldCBmb3JtYXR0ZXIgPSAob3BlbiwgY2xvc2UsIHJlcGxhY2UgPSBvcGVuKSA9PlxuXHRpbnB1dCA9PiB7XG5cdFx0bGV0IHN0cmluZyA9IFwiXCIgKyBpbnB1dCwgaW5kZXggPSBzdHJpbmcuaW5kZXhPZihjbG9zZSwgb3Blbi5sZW5ndGgpXG5cdFx0cmV0dXJuIH5pbmRleCA/IG9wZW4gKyByZXBsYWNlQ2xvc2Uoc3RyaW5nLCBjbG9zZSwgcmVwbGFjZSwgaW5kZXgpICsgY2xvc2UgOiBvcGVuICsgc3RyaW5nICsgY2xvc2Vcblx0fVxuXG5sZXQgcmVwbGFjZUNsb3NlID0gKHN0cmluZywgY2xvc2UsIHJlcGxhY2UsIGluZGV4KSA9PiB7XG5cdGxldCByZXN1bHQgPSBcIlwiLCBjdXJzb3IgPSAwXG5cdGRvIHtcblx0XHRyZXN1bHQgKz0gc3RyaW5nLnN1YnN0cmluZyhjdXJzb3IsIGluZGV4KSArIHJlcGxhY2Vcblx0XHRjdXJzb3IgPSBpbmRleCArIGNsb3NlLmxlbmd0aFxuXHRcdGluZGV4ID0gc3RyaW5nLmluZGV4T2YoY2xvc2UsIGN1cnNvcilcblx0fSB3aGlsZSAofmluZGV4KVxuXHRyZXR1cm4gcmVzdWx0ICsgc3RyaW5nLnN1YnN0cmluZyhjdXJzb3IpXG59XG5cbmxldCBjcmVhdGVDb2xvcnMgPSAoZW5hYmxlZCA9IGlzQ29sb3JTdXBwb3J0ZWQpID0+IHtcblx0bGV0IGYgPSBlbmFibGVkID8gZm9ybWF0dGVyIDogKCkgPT4gU3RyaW5nXG5cdHJldHVybiB7XG5cdFx0aXNDb2xvclN1cHBvcnRlZDogZW5hYmxlZCxcblx0XHRyZXNldDogZihcIlxceDFiWzBtXCIsIFwiXFx4MWJbMG1cIiksXG5cdFx0Ym9sZDogZihcIlxceDFiWzFtXCIsIFwiXFx4MWJbMjJtXCIsIFwiXFx4MWJbMjJtXFx4MWJbMW1cIiksXG5cdFx0ZGltOiBmKFwiXFx4MWJbMm1cIiwgXCJcXHgxYlsyMm1cIiwgXCJcXHgxYlsyMm1cXHgxYlsybVwiKSxcblx0XHRpdGFsaWM6IGYoXCJcXHgxYlszbVwiLCBcIlxceDFiWzIzbVwiKSxcblx0XHR1bmRlcmxpbmU6IGYoXCJcXHgxYls0bVwiLCBcIlxceDFiWzI0bVwiKSxcblx0XHRpbnZlcnNlOiBmKFwiXFx4MWJbN21cIiwgXCJcXHgxYlsyN21cIiksXG5cdFx0aGlkZGVuOiBmKFwiXFx4MWJbOG1cIiwgXCJcXHgxYlsyOG1cIiksXG5cdFx0c3RyaWtldGhyb3VnaDogZihcIlxceDFiWzltXCIsIFwiXFx4MWJbMjltXCIpLFxuXG5cdFx0YmxhY2s6IGYoXCJcXHgxYlszMG1cIiwgXCJcXHgxYlszOW1cIiksXG5cdFx0cmVkOiBmKFwiXFx4MWJbMzFtXCIsIFwiXFx4MWJbMzltXCIpLFxuXHRcdGdyZWVuOiBmKFwiXFx4MWJbMzJtXCIsIFwiXFx4MWJbMzltXCIpLFxuXHRcdHllbGxvdzogZihcIlxceDFiWzMzbVwiLCBcIlxceDFiWzM5bVwiKSxcblx0XHRibHVlOiBmKFwiXFx4MWJbMzRtXCIsIFwiXFx4MWJbMzltXCIpLFxuXHRcdG1hZ2VudGE6IGYoXCJcXHgxYlszNW1cIiwgXCJcXHgxYlszOW1cIiksXG5cdFx0Y3lhbjogZihcIlxceDFiWzM2bVwiLCBcIlxceDFiWzM5bVwiKSxcblx0XHR3aGl0ZTogZihcIlxceDFiWzM3bVwiLCBcIlxceDFiWzM5bVwiKSxcblx0XHRncmF5OiBmKFwiXFx4MWJbOTBtXCIsIFwiXFx4MWJbMzltXCIpLFxuXG5cdFx0YmdCbGFjazogZihcIlxceDFiWzQwbVwiLCBcIlxceDFiWzQ5bVwiKSxcblx0XHRiZ1JlZDogZihcIlxceDFiWzQxbVwiLCBcIlxceDFiWzQ5bVwiKSxcblx0XHRiZ0dyZWVuOiBmKFwiXFx4MWJbNDJtXCIsIFwiXFx4MWJbNDltXCIpLFxuXHRcdGJnWWVsbG93OiBmKFwiXFx4MWJbNDNtXCIsIFwiXFx4MWJbNDltXCIpLFxuXHRcdGJnQmx1ZTogZihcIlxceDFiWzQ0bVwiLCBcIlxceDFiWzQ5bVwiKSxcblx0XHRiZ01hZ2VudGE6IGYoXCJcXHgxYls0NW1cIiwgXCJcXHgxYls0OW1cIiksXG5cdFx0YmdDeWFuOiBmKFwiXFx4MWJbNDZtXCIsIFwiXFx4MWJbNDltXCIpLFxuXHRcdGJnV2hpdGU6IGYoXCJcXHgxYls0N21cIiwgXCJcXHgxYls0OW1cIiksXG5cblx0XHRibGFja0JyaWdodDogZihcIlxceDFiWzkwbVwiLCBcIlxceDFiWzM5bVwiKSxcblx0XHRyZWRCcmlnaHQ6IGYoXCJcXHgxYls5MW1cIiwgXCJcXHgxYlszOW1cIiksXG5cdFx0Z3JlZW5CcmlnaHQ6IGYoXCJcXHgxYls5Mm1cIiwgXCJcXHgxYlszOW1cIiksXG5cdFx0eWVsbG93QnJpZ2h0OiBmKFwiXFx4MWJbOTNtXCIsIFwiXFx4MWJbMzltXCIpLFxuXHRcdGJsdWVCcmlnaHQ6IGYoXCJcXHgxYls5NG1cIiwgXCJcXHgxYlszOW1cIiksXG5cdFx0bWFnZW50YUJyaWdodDogZihcIlxceDFiWzk1bVwiLCBcIlxceDFiWzM5bVwiKSxcblx0XHRjeWFuQnJpZ2h0OiBmKFwiXFx4MWJbOTZtXCIsIFwiXFx4MWJbMzltXCIpLFxuXHRcdHdoaXRlQnJpZ2h0OiBmKFwiXFx4MWJbOTdtXCIsIFwiXFx4MWJbMzltXCIpLFxuXG5cdFx0YmdCbGFja0JyaWdodDogZihcIlxceDFiWzEwMG1cIiwgXCJcXHgxYls0OW1cIiksXG5cdFx0YmdSZWRCcmlnaHQ6IGYoXCJcXHgxYlsxMDFtXCIsIFwiXFx4MWJbNDltXCIpLFxuXHRcdGJnR3JlZW5CcmlnaHQ6IGYoXCJcXHgxYlsxMDJtXCIsIFwiXFx4MWJbNDltXCIpLFxuXHRcdGJnWWVsbG93QnJpZ2h0OiBmKFwiXFx4MWJbMTAzbVwiLCBcIlxceDFiWzQ5bVwiKSxcblx0XHRiZ0JsdWVCcmlnaHQ6IGYoXCJcXHgxYlsxMDRtXCIsIFwiXFx4MWJbNDltXCIpLFxuXHRcdGJnTWFnZW50YUJyaWdodDogZihcIlxceDFiWzEwNW1cIiwgXCJcXHgxYls0OW1cIiksXG5cdFx0YmdDeWFuQnJpZ2h0OiBmKFwiXFx4MWJbMTA2bVwiLCBcIlxceDFiWzQ5bVwiKSxcblx0XHRiZ1doaXRlQnJpZ2h0OiBmKFwiXFx4MWJbMTA3bVwiLCBcIlxceDFiWzQ5bVwiKSxcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUNvbG9ycygpXG5tb2R1bGUuZXhwb3J0cy5jcmVhdGVDb2xvcnMgPSBjcmVhdGVDb2xvcnNcbiIsICIvLyBDb3B5cmlnaHQgMjAxNCwgMjAxNSwgMjAxNiwgMjAxNywgMjAxOCBTaW1vbiBMeWRlbGxcbi8vIExpY2Vuc2U6IE1JVC4gKFNlZSBMSUNFTlNFLilcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KVxuXG4vLyBUaGlzIHJlZ2V4IGNvbWVzIGZyb20gcmVnZXguY29mZmVlLCBhbmQgaXMgaW5zZXJ0ZWQgaGVyZSBieSBnZW5lcmF0ZS1pbmRleC5qc1xuLy8gKHJ1biBgbnBtIHJ1biBidWlsZGApLlxuZXhwb3J0cy5kZWZhdWx0ID0gLygoWydcIl0pKD86KD8hXFwyfFxcXFwpLnxcXFxcKD86XFxyXFxufFtcXHNcXFNdKSkqKFxcMik/fGAoPzpbXmBcXFxcJF18XFxcXFtcXHNcXFNdfFxcJCg/IVxceyl8XFwkXFx7KD86W157fV18XFx7W159XSpcXH0/KSpcXH0/KSooYCk/KXwoXFwvXFwvLiopfChcXC9cXCooPzpbXipdfFxcKig/IVxcLykpKihcXCpcXC8pPyl8KFxcLyg/IVxcKikoPzpcXFsoPzooPyFbXFxdXFxcXF0pLnxcXFxcLikqXFxdfCg/IVtcXC9cXF1cXFxcXSkufFxcXFwuKStcXC8oPzooPyFcXHMqKD86XFxifFtcXHUwMDgwLVxcdUZGRkYkXFxcXCdcIn4oe118WytcXC0hXSg/IT0pfFxcLj9cXGQpKXxbZ21peXVzXXsxLDZ9XFxiKD8hW1xcdTAwODAtXFx1RkZGRiRcXFxcXXxcXHMqKD86WytcXC0qJSZ8Xjw+IT0/KHtdfFxcLyg/IVtcXC8qXSkpKSkpfCgwW3hYXVtcXGRhLWZBLUZdK3wwW29PXVswLTddK3wwW2JCXVswMV0rfCg/OlxcZCpcXC5cXGQrfFxcZCtcXC4/KSg/OltlRV1bKy1dP1xcZCspPyl8KCg/IVxcZCkoPzooPyFcXHMpWyRcXHdcXHUwMDgwLVxcdUZGRkZdfFxcXFx1W1xcZGEtZkEtRl17NH18XFxcXHVcXHtbXFxkYS1mQS1GXStcXH0pKyl8KC0tfFxcK1xcK3wmJnxcXHxcXHx8PT58XFwuezN9fCg/OlsrXFwtXFwvJSZ8Xl18XFwqezEsMn18PHsxLDJ9fD57MSwzfXwhPT98PXsxLDJ9KT0/fFs/fi4sOjtbXFxdKCl7fV0pfChcXHMrKXwoXiR8W1xcc1xcU10pL2dcblxuZXhwb3J0cy5tYXRjaFRvVG9rZW4gPSBmdW5jdGlvbihtYXRjaCkge1xuICB2YXIgdG9rZW4gPSB7dHlwZTogXCJpbnZhbGlkXCIsIHZhbHVlOiBtYXRjaFswXSwgY2xvc2VkOiB1bmRlZmluZWR9XG4gICAgICAgaWYgKG1hdGNoWyAxXSkgdG9rZW4udHlwZSA9IFwic3RyaW5nXCIgLCB0b2tlbi5jbG9zZWQgPSAhIShtYXRjaFszXSB8fCBtYXRjaFs0XSlcbiAgZWxzZSBpZiAobWF0Y2hbIDVdKSB0b2tlbi50eXBlID0gXCJjb21tZW50XCJcbiAgZWxzZSBpZiAobWF0Y2hbIDZdKSB0b2tlbi50eXBlID0gXCJjb21tZW50XCIsIHRva2VuLmNsb3NlZCA9ICEhbWF0Y2hbN11cbiAgZWxzZSBpZiAobWF0Y2hbIDhdKSB0b2tlbi50eXBlID0gXCJyZWdleFwiXG4gIGVsc2UgaWYgKG1hdGNoWyA5XSkgdG9rZW4udHlwZSA9IFwibnVtYmVyXCJcbiAgZWxzZSBpZiAobWF0Y2hbMTBdKSB0b2tlbi50eXBlID0gXCJuYW1lXCJcbiAgZWxzZSBpZiAobWF0Y2hbMTFdKSB0b2tlbi50eXBlID0gXCJwdW5jdHVhdG9yXCJcbiAgZWxzZSBpZiAobWF0Y2hbMTJdKSB0b2tlbi50eXBlID0gXCJ3aGl0ZXNwYWNlXCJcbiAgcmV0dXJuIHRva2VuXG59XG4iLCAiLy8gV2UgaW5saW5lIHRoaXMgcGFja2FnZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0ICogYXMgY2hhckNvZGVzIGZyb20gXCJjaGFyY29kZXNcIjtcblxuLy8gIyMgQ2hhcmFjdGVyIGNhdGVnb3JpZXNcblxuLy8gQmlnIHVnbHkgcmVndWxhciBleHByZXNzaW9ucyB0aGF0IG1hdGNoIGNoYXJhY3RlcnMgaW4gdGhlXG4vLyB3aGl0ZXNwYWNlLCBpZGVudGlmaWVyLCBhbmQgaWRlbnRpZmllci1zdGFydCBjYXRlZ29yaWVzLiBUaGVzZVxuLy8gYXJlIG9ubHkgYXBwbGllZCB3aGVuIGEgY2hhcmFjdGVyIGlzIGZvdW5kIHRvIGFjdHVhbGx5IGhhdmUgYVxuLy8gY29kZSBwb2ludCBiZXR3ZWVuIDB4ODAgYW5kIDB4ZmZmZi5cbi8vIEdlbmVyYXRlZCBieSBgc2NyaXB0cy9nZW5lcmF0ZS1pZGVudGlmaWVyLXJlZ2V4LmNqc2AuXG5cbi8qIHByZXR0aWVyLWlnbm9yZSAqL1xubGV0IG5vbkFTQ0lJaWRlbnRpZmllclN0YXJ0Q2hhcnMgPSBcIlxceGFhXFx4YjVcXHhiYVxceGMwLVxceGQ2XFx4ZDgtXFx4ZjZcXHhmOC1cXHUwMmMxXFx1MDJjNi1cXHUwMmQxXFx1MDJlMC1cXHUwMmU0XFx1MDJlY1xcdTAyZWVcXHUwMzcwLVxcdTAzNzRcXHUwMzc2XFx1MDM3N1xcdTAzN2EtXFx1MDM3ZFxcdTAzN2ZcXHUwMzg2XFx1MDM4OC1cXHUwMzhhXFx1MDM4Y1xcdTAzOGUtXFx1MDNhMVxcdTAzYTMtXFx1MDNmNVxcdTAzZjctXFx1MDQ4MVxcdTA0OGEtXFx1MDUyZlxcdTA1MzEtXFx1MDU1NlxcdTA1NTlcXHUwNTYwLVxcdTA1ODhcXHUwNWQwLVxcdTA1ZWFcXHUwNWVmLVxcdTA1ZjJcXHUwNjIwLVxcdTA2NGFcXHUwNjZlXFx1MDY2ZlxcdTA2NzEtXFx1MDZkM1xcdTA2ZDVcXHUwNmU1XFx1MDZlNlxcdTA2ZWVcXHUwNmVmXFx1MDZmYS1cXHUwNmZjXFx1MDZmZlxcdTA3MTBcXHUwNzEyLVxcdTA3MmZcXHUwNzRkLVxcdTA3YTVcXHUwN2IxXFx1MDdjYS1cXHUwN2VhXFx1MDdmNFxcdTA3ZjVcXHUwN2ZhXFx1MDgwMC1cXHUwODE1XFx1MDgxYVxcdTA4MjRcXHUwODI4XFx1MDg0MC1cXHUwODU4XFx1MDg2MC1cXHUwODZhXFx1MDg3MC1cXHUwODg3XFx1MDg4OS1cXHUwODhmXFx1MDhhMC1cXHUwOGM5XFx1MDkwNC1cXHUwOTM5XFx1MDkzZFxcdTA5NTBcXHUwOTU4LVxcdTA5NjFcXHUwOTcxLVxcdTA5ODBcXHUwOTg1LVxcdTA5OGNcXHUwOThmXFx1MDk5MFxcdTA5OTMtXFx1MDlhOFxcdTA5YWEtXFx1MDliMFxcdTA5YjJcXHUwOWI2LVxcdTA5YjlcXHUwOWJkXFx1MDljZVxcdTA5ZGNcXHUwOWRkXFx1MDlkZi1cXHUwOWUxXFx1MDlmMFxcdTA5ZjFcXHUwOWZjXFx1MGEwNS1cXHUwYTBhXFx1MGEwZlxcdTBhMTBcXHUwYTEzLVxcdTBhMjhcXHUwYTJhLVxcdTBhMzBcXHUwYTMyXFx1MGEzM1xcdTBhMzVcXHUwYTM2XFx1MGEzOFxcdTBhMzlcXHUwYTU5LVxcdTBhNWNcXHUwYTVlXFx1MGE3Mi1cXHUwYTc0XFx1MGE4NS1cXHUwYThkXFx1MGE4Zi1cXHUwYTkxXFx1MGE5My1cXHUwYWE4XFx1MGFhYS1cXHUwYWIwXFx1MGFiMlxcdTBhYjNcXHUwYWI1LVxcdTBhYjlcXHUwYWJkXFx1MGFkMFxcdTBhZTBcXHUwYWUxXFx1MGFmOVxcdTBiMDUtXFx1MGIwY1xcdTBiMGZcXHUwYjEwXFx1MGIxMy1cXHUwYjI4XFx1MGIyYS1cXHUwYjMwXFx1MGIzMlxcdTBiMzNcXHUwYjM1LVxcdTBiMzlcXHUwYjNkXFx1MGI1Y1xcdTBiNWRcXHUwYjVmLVxcdTBiNjFcXHUwYjcxXFx1MGI4M1xcdTBiODUtXFx1MGI4YVxcdTBiOGUtXFx1MGI5MFxcdTBiOTItXFx1MGI5NVxcdTBiOTlcXHUwYjlhXFx1MGI5Y1xcdTBiOWVcXHUwYjlmXFx1MGJhM1xcdTBiYTRcXHUwYmE4LVxcdTBiYWFcXHUwYmFlLVxcdTBiYjlcXHUwYmQwXFx1MGMwNS1cXHUwYzBjXFx1MGMwZS1cXHUwYzEwXFx1MGMxMi1cXHUwYzI4XFx1MGMyYS1cXHUwYzM5XFx1MGMzZFxcdTBjNTgtXFx1MGM1YVxcdTBjNWNcXHUwYzVkXFx1MGM2MFxcdTBjNjFcXHUwYzgwXFx1MGM4NS1cXHUwYzhjXFx1MGM4ZS1cXHUwYzkwXFx1MGM5Mi1cXHUwY2E4XFx1MGNhYS1cXHUwY2IzXFx1MGNiNS1cXHUwY2I5XFx1MGNiZFxcdTBjZGMtXFx1MGNkZVxcdTBjZTBcXHUwY2UxXFx1MGNmMVxcdTBjZjJcXHUwZDA0LVxcdTBkMGNcXHUwZDBlLVxcdTBkMTBcXHUwZDEyLVxcdTBkM2FcXHUwZDNkXFx1MGQ0ZVxcdTBkNTQtXFx1MGQ1NlxcdTBkNWYtXFx1MGQ2MVxcdTBkN2EtXFx1MGQ3ZlxcdTBkODUtXFx1MGQ5NlxcdTBkOWEtXFx1MGRiMVxcdTBkYjMtXFx1MGRiYlxcdTBkYmRcXHUwZGMwLVxcdTBkYzZcXHUwZTAxLVxcdTBlMzBcXHUwZTMyXFx1MGUzM1xcdTBlNDAtXFx1MGU0NlxcdTBlODFcXHUwZTgyXFx1MGU4NFxcdTBlODYtXFx1MGU4YVxcdTBlOGMtXFx1MGVhM1xcdTBlYTVcXHUwZWE3LVxcdTBlYjBcXHUwZWIyXFx1MGViM1xcdTBlYmRcXHUwZWMwLVxcdTBlYzRcXHUwZWM2XFx1MGVkYy1cXHUwZWRmXFx1MGYwMFxcdTBmNDAtXFx1MGY0N1xcdTBmNDktXFx1MGY2Y1xcdTBmODgtXFx1MGY4Y1xcdTEwMDAtXFx1MTAyYVxcdTEwM2ZcXHUxMDUwLVxcdTEwNTVcXHUxMDVhLVxcdTEwNWRcXHUxMDYxXFx1MTA2NVxcdTEwNjZcXHUxMDZlLVxcdTEwNzBcXHUxMDc1LVxcdTEwODFcXHUxMDhlXFx1MTBhMC1cXHUxMGM1XFx1MTBjN1xcdTEwY2RcXHUxMGQwLVxcdTEwZmFcXHUxMGZjLVxcdTEyNDhcXHUxMjRhLVxcdTEyNGRcXHUxMjUwLVxcdTEyNTZcXHUxMjU4XFx1MTI1YS1cXHUxMjVkXFx1MTI2MC1cXHUxMjg4XFx1MTI4YS1cXHUxMjhkXFx1MTI5MC1cXHUxMmIwXFx1MTJiMi1cXHUxMmI1XFx1MTJiOC1cXHUxMmJlXFx1MTJjMFxcdTEyYzItXFx1MTJjNVxcdTEyYzgtXFx1MTJkNlxcdTEyZDgtXFx1MTMxMFxcdTEzMTItXFx1MTMxNVxcdTEzMTgtXFx1MTM1YVxcdTEzODAtXFx1MTM4ZlxcdTEzYTAtXFx1MTNmNVxcdTEzZjgtXFx1MTNmZFxcdTE0MDEtXFx1MTY2Y1xcdTE2NmYtXFx1MTY3ZlxcdTE2ODEtXFx1MTY5YVxcdTE2YTAtXFx1MTZlYVxcdTE2ZWUtXFx1MTZmOFxcdTE3MDAtXFx1MTcxMVxcdTE3MWYtXFx1MTczMVxcdTE3NDAtXFx1MTc1MVxcdTE3NjAtXFx1MTc2Y1xcdTE3NmUtXFx1MTc3MFxcdTE3ODAtXFx1MTdiM1xcdTE3ZDdcXHUxN2RjXFx1MTgyMC1cXHUxODc4XFx1MTg4MC1cXHUxOGE4XFx1MThhYVxcdTE4YjAtXFx1MThmNVxcdTE5MDAtXFx1MTkxZVxcdTE5NTAtXFx1MTk2ZFxcdTE5NzAtXFx1MTk3NFxcdTE5ODAtXFx1MTlhYlxcdTE5YjAtXFx1MTljOVxcdTFhMDAtXFx1MWExNlxcdTFhMjAtXFx1MWE1NFxcdTFhYTdcXHUxYjA1LVxcdTFiMzNcXHUxYjQ1LVxcdTFiNGNcXHUxYjgzLVxcdTFiYTBcXHUxYmFlXFx1MWJhZlxcdTFiYmEtXFx1MWJlNVxcdTFjMDAtXFx1MWMyM1xcdTFjNGQtXFx1MWM0ZlxcdTFjNWEtXFx1MWM3ZFxcdTFjODAtXFx1MWM4YVxcdTFjOTAtXFx1MWNiYVxcdTFjYmQtXFx1MWNiZlxcdTFjZTktXFx1MWNlY1xcdTFjZWUtXFx1MWNmM1xcdTFjZjVcXHUxY2Y2XFx1MWNmYVxcdTFkMDAtXFx1MWRiZlxcdTFlMDAtXFx1MWYxNVxcdTFmMTgtXFx1MWYxZFxcdTFmMjAtXFx1MWY0NVxcdTFmNDgtXFx1MWY0ZFxcdTFmNTAtXFx1MWY1N1xcdTFmNTlcXHUxZjViXFx1MWY1ZFxcdTFmNWYtXFx1MWY3ZFxcdTFmODAtXFx1MWZiNFxcdTFmYjYtXFx1MWZiY1xcdTFmYmVcXHUxZmMyLVxcdTFmYzRcXHUxZmM2LVxcdTFmY2NcXHUxZmQwLVxcdTFmZDNcXHUxZmQ2LVxcdTFmZGJcXHUxZmUwLVxcdTFmZWNcXHUxZmYyLVxcdTFmZjRcXHUxZmY2LVxcdTFmZmNcXHUyMDcxXFx1MjA3ZlxcdTIwOTAtXFx1MjA5Y1xcdTIxMDJcXHUyMTA3XFx1MjEwYS1cXHUyMTEzXFx1MjExNVxcdTIxMTgtXFx1MjExZFxcdTIxMjRcXHUyMTI2XFx1MjEyOFxcdTIxMmEtXFx1MjEzOVxcdTIxM2MtXFx1MjEzZlxcdTIxNDUtXFx1MjE0OVxcdTIxNGVcXHUyMTYwLVxcdTIxODhcXHUyYzAwLVxcdTJjZTRcXHUyY2ViLVxcdTJjZWVcXHUyY2YyXFx1MmNmM1xcdTJkMDAtXFx1MmQyNVxcdTJkMjdcXHUyZDJkXFx1MmQzMC1cXHUyZDY3XFx1MmQ2ZlxcdTJkODAtXFx1MmQ5NlxcdTJkYTAtXFx1MmRhNlxcdTJkYTgtXFx1MmRhZVxcdTJkYjAtXFx1MmRiNlxcdTJkYjgtXFx1MmRiZVxcdTJkYzAtXFx1MmRjNlxcdTJkYzgtXFx1MmRjZVxcdTJkZDAtXFx1MmRkNlxcdTJkZDgtXFx1MmRkZVxcdTMwMDUtXFx1MzAwN1xcdTMwMjEtXFx1MzAyOVxcdTMwMzEtXFx1MzAzNVxcdTMwMzgtXFx1MzAzY1xcdTMwNDEtXFx1MzA5NlxcdTMwOWItXFx1MzA5ZlxcdTMwYTEtXFx1MzBmYVxcdTMwZmMtXFx1MzBmZlxcdTMxMDUtXFx1MzEyZlxcdTMxMzEtXFx1MzE4ZVxcdTMxYTAtXFx1MzFiZlxcdTMxZjAtXFx1MzFmZlxcdTM0MDAtXFx1NGRiZlxcdTRlMDAtXFx1YTQ4Y1xcdWE0ZDAtXFx1YTRmZFxcdWE1MDAtXFx1YTYwY1xcdWE2MTAtXFx1YTYxZlxcdWE2MmFcXHVhNjJiXFx1YTY0MC1cXHVhNjZlXFx1YTY3Zi1cXHVhNjlkXFx1YTZhMC1cXHVhNmVmXFx1YTcxNy1cXHVhNzFmXFx1YTcyMi1cXHVhNzg4XFx1YTc4Yi1cXHVhN2RjXFx1YTdmMS1cXHVhODAxXFx1YTgwMy1cXHVhODA1XFx1YTgwNy1cXHVhODBhXFx1YTgwYy1cXHVhODIyXFx1YTg0MC1cXHVhODczXFx1YTg4Mi1cXHVhOGIzXFx1YThmMi1cXHVhOGY3XFx1YThmYlxcdWE4ZmRcXHVhOGZlXFx1YTkwYS1cXHVhOTI1XFx1YTkzMC1cXHVhOTQ2XFx1YTk2MC1cXHVhOTdjXFx1YTk4NC1cXHVhOWIyXFx1YTljZlxcdWE5ZTAtXFx1YTllNFxcdWE5ZTYtXFx1YTllZlxcdWE5ZmEtXFx1YTlmZVxcdWFhMDAtXFx1YWEyOFxcdWFhNDAtXFx1YWE0MlxcdWFhNDQtXFx1YWE0YlxcdWFhNjAtXFx1YWE3NlxcdWFhN2FcXHVhYTdlLVxcdWFhYWZcXHVhYWIxXFx1YWFiNVxcdWFhYjZcXHVhYWI5LVxcdWFhYmRcXHVhYWMwXFx1YWFjMlxcdWFhZGItXFx1YWFkZFxcdWFhZTAtXFx1YWFlYVxcdWFhZjItXFx1YWFmNFxcdWFiMDEtXFx1YWIwNlxcdWFiMDktXFx1YWIwZVxcdWFiMTEtXFx1YWIxNlxcdWFiMjAtXFx1YWIyNlxcdWFiMjgtXFx1YWIyZVxcdWFiMzAtXFx1YWI1YVxcdWFiNWMtXFx1YWI2OVxcdWFiNzAtXFx1YWJlMlxcdWFjMDAtXFx1ZDdhM1xcdWQ3YjAtXFx1ZDdjNlxcdWQ3Y2ItXFx1ZDdmYlxcdWY5MDAtXFx1ZmE2ZFxcdWZhNzAtXFx1ZmFkOVxcdWZiMDAtXFx1ZmIwNlxcdWZiMTMtXFx1ZmIxN1xcdWZiMWRcXHVmYjFmLVxcdWZiMjhcXHVmYjJhLVxcdWZiMzZcXHVmYjM4LVxcdWZiM2NcXHVmYjNlXFx1ZmI0MFxcdWZiNDFcXHVmYjQzXFx1ZmI0NFxcdWZiNDYtXFx1ZmJiMVxcdWZiZDMtXFx1ZmQzZFxcdWZkNTAtXFx1ZmQ4ZlxcdWZkOTItXFx1ZmRjN1xcdWZkZjAtXFx1ZmRmYlxcdWZlNzAtXFx1ZmU3NFxcdWZlNzYtXFx1ZmVmY1xcdWZmMjEtXFx1ZmYzYVxcdWZmNDEtXFx1ZmY1YVxcdWZmNjYtXFx1ZmZiZVxcdWZmYzItXFx1ZmZjN1xcdWZmY2EtXFx1ZmZjZlxcdWZmZDItXFx1ZmZkN1xcdWZmZGEtXFx1ZmZkY1wiO1xuLyogcHJldHRpZXItaWdub3JlICovXG5sZXQgbm9uQVNDSUlpZGVudGlmaWVyQ2hhcnMgPSBcIlxceGI3XFx1MDMwMC1cXHUwMzZmXFx1MDM4N1xcdTA0ODMtXFx1MDQ4N1xcdTA1OTEtXFx1MDViZFxcdTA1YmZcXHUwNWMxXFx1MDVjMlxcdTA1YzRcXHUwNWM1XFx1MDVjN1xcdTA2MTAtXFx1MDYxYVxcdTA2NGItXFx1MDY2OVxcdTA2NzBcXHUwNmQ2LVxcdTA2ZGNcXHUwNmRmLVxcdTA2ZTRcXHUwNmU3XFx1MDZlOFxcdTA2ZWEtXFx1MDZlZFxcdTA2ZjAtXFx1MDZmOVxcdTA3MTFcXHUwNzMwLVxcdTA3NGFcXHUwN2E2LVxcdTA3YjBcXHUwN2MwLVxcdTA3YzlcXHUwN2ViLVxcdTA3ZjNcXHUwN2ZkXFx1MDgxNi1cXHUwODE5XFx1MDgxYi1cXHUwODIzXFx1MDgyNS1cXHUwODI3XFx1MDgyOS1cXHUwODJkXFx1MDg1OS1cXHUwODViXFx1MDg5Ny1cXHUwODlmXFx1MDhjYS1cXHUwOGUxXFx1MDhlMy1cXHUwOTAzXFx1MDkzYS1cXHUwOTNjXFx1MDkzZS1cXHUwOTRmXFx1MDk1MS1cXHUwOTU3XFx1MDk2MlxcdTA5NjNcXHUwOTY2LVxcdTA5NmZcXHUwOTgxLVxcdTA5ODNcXHUwOWJjXFx1MDliZS1cXHUwOWM0XFx1MDljN1xcdTA5YzhcXHUwOWNiLVxcdTA5Y2RcXHUwOWQ3XFx1MDllMlxcdTA5ZTNcXHUwOWU2LVxcdTA5ZWZcXHUwOWZlXFx1MGEwMS1cXHUwYTAzXFx1MGEzY1xcdTBhM2UtXFx1MGE0MlxcdTBhNDdcXHUwYTQ4XFx1MGE0Yi1cXHUwYTRkXFx1MGE1MVxcdTBhNjYtXFx1MGE3MVxcdTBhNzVcXHUwYTgxLVxcdTBhODNcXHUwYWJjXFx1MGFiZS1cXHUwYWM1XFx1MGFjNy1cXHUwYWM5XFx1MGFjYi1cXHUwYWNkXFx1MGFlMlxcdTBhZTNcXHUwYWU2LVxcdTBhZWZcXHUwYWZhLVxcdTBhZmZcXHUwYjAxLVxcdTBiMDNcXHUwYjNjXFx1MGIzZS1cXHUwYjQ0XFx1MGI0N1xcdTBiNDhcXHUwYjRiLVxcdTBiNGRcXHUwYjU1LVxcdTBiNTdcXHUwYjYyXFx1MGI2M1xcdTBiNjYtXFx1MGI2ZlxcdTBiODJcXHUwYmJlLVxcdTBiYzJcXHUwYmM2LVxcdTBiYzhcXHUwYmNhLVxcdTBiY2RcXHUwYmQ3XFx1MGJlNi1cXHUwYmVmXFx1MGMwMC1cXHUwYzA0XFx1MGMzY1xcdTBjM2UtXFx1MGM0NFxcdTBjNDYtXFx1MGM0OFxcdTBjNGEtXFx1MGM0ZFxcdTBjNTVcXHUwYzU2XFx1MGM2MlxcdTBjNjNcXHUwYzY2LVxcdTBjNmZcXHUwYzgxLVxcdTBjODNcXHUwY2JjXFx1MGNiZS1cXHUwY2M0XFx1MGNjNi1cXHUwY2M4XFx1MGNjYS1cXHUwY2NkXFx1MGNkNVxcdTBjZDZcXHUwY2UyXFx1MGNlM1xcdTBjZTYtXFx1MGNlZlxcdTBjZjNcXHUwZDAwLVxcdTBkMDNcXHUwZDNiXFx1MGQzY1xcdTBkM2UtXFx1MGQ0NFxcdTBkNDYtXFx1MGQ0OFxcdTBkNGEtXFx1MGQ0ZFxcdTBkNTdcXHUwZDYyXFx1MGQ2M1xcdTBkNjYtXFx1MGQ2ZlxcdTBkODEtXFx1MGQ4M1xcdTBkY2FcXHUwZGNmLVxcdTBkZDRcXHUwZGQ2XFx1MGRkOC1cXHUwZGRmXFx1MGRlNi1cXHUwZGVmXFx1MGRmMlxcdTBkZjNcXHUwZTMxXFx1MGUzNC1cXHUwZTNhXFx1MGU0Ny1cXHUwZTRlXFx1MGU1MC1cXHUwZTU5XFx1MGViMVxcdTBlYjQtXFx1MGViY1xcdTBlYzgtXFx1MGVjZVxcdTBlZDAtXFx1MGVkOVxcdTBmMThcXHUwZjE5XFx1MGYyMC1cXHUwZjI5XFx1MGYzNVxcdTBmMzdcXHUwZjM5XFx1MGYzZVxcdTBmM2ZcXHUwZjcxLVxcdTBmODRcXHUwZjg2XFx1MGY4N1xcdTBmOGQtXFx1MGY5N1xcdTBmOTktXFx1MGZiY1xcdTBmYzZcXHUxMDJiLVxcdTEwM2VcXHUxMDQwLVxcdTEwNDlcXHUxMDU2LVxcdTEwNTlcXHUxMDVlLVxcdTEwNjBcXHUxMDYyLVxcdTEwNjRcXHUxMDY3LVxcdTEwNmRcXHUxMDcxLVxcdTEwNzRcXHUxMDgyLVxcdTEwOGRcXHUxMDhmLVxcdTEwOWRcXHUxMzVkLVxcdTEzNWZcXHUxMzY5LVxcdTEzNzFcXHUxNzEyLVxcdTE3MTVcXHUxNzMyLVxcdTE3MzRcXHUxNzUyXFx1MTc1M1xcdTE3NzJcXHUxNzczXFx1MTdiNC1cXHUxN2QzXFx1MTdkZFxcdTE3ZTAtXFx1MTdlOVxcdTE4MGItXFx1MTgwZFxcdTE4MGYtXFx1MTgxOVxcdTE4YTlcXHUxOTIwLVxcdTE5MmJcXHUxOTMwLVxcdTE5M2JcXHUxOTQ2LVxcdTE5NGZcXHUxOWQwLVxcdTE5ZGFcXHUxYTE3LVxcdTFhMWJcXHUxYTU1LVxcdTFhNWVcXHUxYTYwLVxcdTFhN2NcXHUxYTdmLVxcdTFhODlcXHUxYTkwLVxcdTFhOTlcXHUxYWIwLVxcdTFhYmRcXHUxYWJmLVxcdTFhZGRcXHUxYWUwLVxcdTFhZWJcXHUxYjAwLVxcdTFiMDRcXHUxYjM0LVxcdTFiNDRcXHUxYjUwLVxcdTFiNTlcXHUxYjZiLVxcdTFiNzNcXHUxYjgwLVxcdTFiODJcXHUxYmExLVxcdTFiYWRcXHUxYmIwLVxcdTFiYjlcXHUxYmU2LVxcdTFiZjNcXHUxYzI0LVxcdTFjMzdcXHUxYzQwLVxcdTFjNDlcXHUxYzUwLVxcdTFjNTlcXHUxY2QwLVxcdTFjZDJcXHUxY2Q0LVxcdTFjZThcXHUxY2VkXFx1MWNmNFxcdTFjZjctXFx1MWNmOVxcdTFkYzAtXFx1MWRmZlxcdTIwMGNcXHUyMDBkXFx1MjAzZlxcdTIwNDBcXHUyMDU0XFx1MjBkMC1cXHUyMGRjXFx1MjBlMVxcdTIwZTUtXFx1MjBmMFxcdTJjZWYtXFx1MmNmMVxcdTJkN2ZcXHUyZGUwLVxcdTJkZmZcXHUzMDJhLVxcdTMwMmZcXHUzMDk5XFx1MzA5YVxcdTMwZmJcXHVhNjIwLVxcdWE2MjlcXHVhNjZmXFx1YTY3NC1cXHVhNjdkXFx1YTY5ZVxcdWE2OWZcXHVhNmYwXFx1YTZmMVxcdWE4MDJcXHVhODA2XFx1YTgwYlxcdWE4MjMtXFx1YTgyN1xcdWE4MmNcXHVhODgwXFx1YTg4MVxcdWE4YjQtXFx1YThjNVxcdWE4ZDAtXFx1YThkOVxcdWE4ZTAtXFx1YThmMVxcdWE4ZmYtXFx1YTkwOVxcdWE5MjYtXFx1YTkyZFxcdWE5NDctXFx1YTk1M1xcdWE5ODAtXFx1YTk4M1xcdWE5YjMtXFx1YTljMFxcdWE5ZDAtXFx1YTlkOVxcdWE5ZTVcXHVhOWYwLVxcdWE5ZjlcXHVhYTI5LVxcdWFhMzZcXHVhYTQzXFx1YWE0Y1xcdWFhNGRcXHVhYTUwLVxcdWFhNTlcXHVhYTdiLVxcdWFhN2RcXHVhYWIwXFx1YWFiMi1cXHVhYWI0XFx1YWFiN1xcdWFhYjhcXHVhYWJlXFx1YWFiZlxcdWFhYzFcXHVhYWViLVxcdWFhZWZcXHVhYWY1XFx1YWFmNlxcdWFiZTMtXFx1YWJlYVxcdWFiZWNcXHVhYmVkXFx1YWJmMC1cXHVhYmY5XFx1ZmIxZVxcdWZlMDAtXFx1ZmUwZlxcdWZlMjAtXFx1ZmUyZlxcdWZlMzNcXHVmZTM0XFx1ZmU0ZC1cXHVmZTRmXFx1ZmYxMC1cXHVmZjE5XFx1ZmYzZlxcdWZmNjVcIjtcblxuY29uc3Qgbm9uQVNDSUlpZGVudGlmaWVyU3RhcnQgPSBuZXcgUmVnRXhwKFxuICBcIltcIiArIG5vbkFTQ0lJaWRlbnRpZmllclN0YXJ0Q2hhcnMgKyBcIl1cIixcbik7XG5jb25zdCBub25BU0NJSWlkZW50aWZpZXIgPSBuZXcgUmVnRXhwKFxuICBcIltcIiArIG5vbkFTQ0lJaWRlbnRpZmllclN0YXJ0Q2hhcnMgKyBub25BU0NJSWlkZW50aWZpZXJDaGFycyArIFwiXVwiLFxuKTtcblxubm9uQVNDSUlpZGVudGlmaWVyU3RhcnRDaGFycyA9IG5vbkFTQ0lJaWRlbnRpZmllckNoYXJzID0gbnVsbDtcblxuLy8gVGhlc2UgYXJlIGEgcnVuLWxlbmd0aCBhbmQgb2Zmc2V0LWVuY29kZWQgcmVwcmVzZW50YXRpb24gb2YgdGhlXG4vLyA+MHhmZmZmIGNvZGUgcG9pbnRzIHRoYXQgYXJlIGEgdmFsaWQgcGFydCBvZiBpZGVudGlmaWVycy4gVGhlXG4vLyBvZmZzZXQgc3RhcnRzIGF0IDB4MTAwMDAsIGFuZCBlYWNoIHBhaXIgb2YgbnVtYmVycyByZXByZXNlbnRzIGFuXG4vLyBvZmZzZXQgdG8gdGhlIG5leHQgcmFuZ2UsIGFuZCB0aGVuIGEgc2l6ZSBvZiB0aGUgcmFuZ2UuIFRoZXkgd2VyZVxuLy8gZ2VuZXJhdGVkIGJ5IGBzY3JpcHRzL2dlbmVyYXRlLWlkZW50aWZpZXItcmVnZXguY2pzYC5cbi8qIHByZXR0aWVyLWlnbm9yZSAqL1xuY29uc3QgYXN0cmFsSWRlbnRpZmllclN0YXJ0Q29kZXMgPSBbMCwxMSwyLDI1LDIsMTgsMiwxLDIsMTQsMywxMywzNSwxMjIsNzAsNTIsMjY4LDI4LDQsNDgsNDgsMzEsMTQsMjksNiwzNywxMSwyOSwzLDM1LDUsNywyLDQsNDMsMTU3LDE5LDM1LDUsMzUsNSwzOSw5LDUxLDEzLDEwLDIsMTQsMiw2LDIsMSwyLDEwLDIsMTQsMiw2LDIsMSw0LDUxLDEzLDMxMCwxMCwyMSwxMSw3LDI1LDUsMiw0MSwyLDgsNzAsNSwzLDAsMiw0MywyLDEsNCwwLDMsMjIsMTEsMjIsMTAsMzAsNjYsMTgsMiwxLDExLDIxLDExLDI1LDcsMjUsMzksNTUsNywxLDY1LDAsMTYsMywyLDIsMiwyOCw0MywyOCw0LDI4LDM2LDcsMiwyNywyOCw1MywxMSwyMSwxMSwxOCwxNCwxNywxMTEsNzIsNTYsNTAsMTQsNTAsMTQsMzUsMzksMjcsMTAsMjIsMjUxLDQxLDcsMSwxNyw1LDU3LDI4LDExLDAsOSwyMSw0MywxNyw0NywyMCwyOCwyMiwxMyw1Miw1OCwxLDMsMCwxNCw0NCwzMywyNCwyNywzNSwzMCwwLDMsMCw5LDM0LDQsMCwxMyw0NywxNSwzLDIyLDAsMiwwLDM2LDE3LDIsMjQsMjAsMSw2NCw2LDIsMCwyLDMsMiwxNCwyLDksOCw0NiwzOSw3LDMsMSwzLDIxLDIsNiwyLDEsMiw0LDQsMCwxOSwwLDEzLDQsMzEsOSwyLDAsMywwLDIsMzcsMiwwLDI2LDAsMiwwLDQ1LDUyLDE5LDMsMjEsMiwzMSw0NywyMSwxLDIsMCwxODUsNDYsNDIsMywzNyw0NywyMSwwLDYwLDQyLDE0LDAsNzIsMjYsMzgsNiwxODYsNDMsMTE3LDYzLDMyLDcsMywwLDMsNywyLDEsMiwyMywxNiwwLDIsMCw5NSw3LDMsMzgsMTcsMCwyLDAsMjksMCwxMSwzOSw4LDAsMjIsMCwxMiw0NSwyMCwwLDE5LDcyLDIwMCwzMiwzMiw4LDIsMzYsMTgsMCw1MCwyOSwxMTMsNiwyLDEsMiwzNywyMiwwLDI2LDUsMiwxLDIsMzEsMTUsMCwyNCw0MywyNjEsMTgsMTYsMCwyLDEyLDIsMzMsMTI1LDAsODAsOTIxLDEwMywxMTAsMTgsMTk1LDI2MzcsOTYsMTYsMTA3MSwxOCw1LDI2LDM5OTQsNiw1ODIsNjg0MiwyOSwxNzYzLDU2OCw4LDMwLDE4LDc4LDE4LDI5LDE5LDQ3LDE3LDMsMzIsMjAsNiwxOCw0MzMsNDQsMjEyLDYzLDMzLDI0LDMsMjQsNDUsNzQsNiwwLDY3LDEyLDY1LDEsMiwwLDE1LDQsMTAsNzM4MSw0MiwzMSw5OCwxMTQsODcwMiwzLDIsNiwyLDEsMiwyOTAsMTYsMCwzMCwyLDMsMCwxNSwzLDksMzk1LDIzMDksMTA2LDYsMTIsNCw4LDgsOSw1OTkxLDg0LDIsNzAsMiwxLDMsMCwzLDEsMywzLDIsMTEsMiwwLDIsNiwyLDY0LDIsMywzLDcsMiw2LDIsMjcsMiwzLDIsNCwyLDAsNCw2LDIsMzM5LDMsMjQsMiwyNCwyLDMwLDIsMjQsMiwzMCwyLDI0LDIsMzAsMiwyNCwyLDMwLDIsMjQsMiw3LDE4NDUsMzAsNyw1LDI2Miw2MSwxNDcsNDQsMTEsNiwxNywwLDMyMiwyOSwxOSw0Myw0ODUsMjcsMjI5LDI5LDMsMCwyMDgsMzAsMiwyLDIsMSwyLDYsMyw0LDEwLDEsMjI1LDYsMiwzLDIsMSwyLDE0LDIsMTk2LDYwLDY3LDgsMCwxMjA1LDMsMiwyNiwyLDEsMiwwLDMsMCwyLDksMiwzLDIsMCwyLDAsNywwLDUsMCwyLDAsMiwwLDIsMiwyLDEsMiwwLDMsMCwyLDAsMiwwLDIsMCwyLDAsMiwxLDIsMCwzLDMsMiw2LDIsMywyLDMsMiwwLDIsOSwyLDE2LDYsMiwyLDQsMiwxNiw0NDIxLDQyNzE5LDMzLDQzODEsMyw1NzczLDMsNzQ3MiwxNiw2MjEsMjQ2Nyw1NDEsMTUwNyw0OTM4LDYsODQ4OV07XG4vKiBwcmV0dGllci1pZ25vcmUgKi9cbmNvbnN0IGFzdHJhbElkZW50aWZpZXJDb2RlcyA9IFs1MDksMCwyMjcsMCwxNTAsNCwyOTQsOSwxMzY4LDIsMiwxLDYsMyw0MSwyLDUsMCwxNjYsMSw1NzQsMyw5LDksNyw5LDMyLDQsMzE4LDEsNzgsNSw3MSwxMCw1MCwzLDEyMywyLDU0LDE0LDMyLDEwLDMsMSwxMSwzLDQ2LDEwLDgsMCw0Niw5LDcsMiwzNywxMywyLDksNiwxLDQ1LDAsMTMsMiw0OSwxMyw5LDMsMiwxMSw4MywxMSw3LDAsMywwLDE1OCwxMSw2LDksNywzLDU2LDEsMiw2LDMsMSwzLDIsMTAsMCwxMSwxLDMsNiw0LDQsNjgsOCwyLDAsMywwLDIsMywyLDQsMiwwLDE1LDEsODMsMTcsMTAsOSw1LDAsODIsMTksMTMsOSwyMTQsNiwzLDgsMjgsMSw4MywxNiwxNiw5LDgyLDEyLDksOSw3LDE5LDU4LDE0LDUsOSwyNDMsMTQsMTY2LDksNzEsNSwyLDEsMywzLDIsMCwyLDEsMTMsOSwxMjAsNiwzLDYsNCwwLDI5LDksNDEsNiwyLDMsOSwwLDEwLDEwLDQ3LDE1LDE5OSw3LDEzNyw5LDU0LDcsMiw3LDE3LDksNTcsMjEsMiwxMywxMjMsNSw0LDAsMiwxLDIsNiwyLDAsOSw5LDQ5LDQsMiwxLDIsNCw5LDksNTUsOSwyNjYsMywxMCwxLDIsMCw0OSw2LDQsNCwxNCwxMCw1MzUwLDAsNywxNCwxMTQ2NSwyNywyMzQzLDksODcsOSwzOSw0LDYwLDYsMjYsOSw1MzUsOSw0NzAsMCwyLDU0LDgsMyw4MiwwLDEyLDEsMTk2MjgsMSw0MTc4LDksNTE5LDQ1LDMsMjIsNTQzLDQsNCw1LDksNywzLDYsMzEsMywxNDksMiwxNDE4LDQ5LDUxMyw1NCw1LDQ5LDksMCwxNSwwLDIzLDQsMiwxNCwxMzYxLDYsMiwxNiwzLDYsMiwxLDIsNCwxMDEsMCwxNjEsNiwxMCw5LDM1NywwLDYyLDEzLDQ5OSwxMywyNDUsMSwyLDksMjMzLDAsMywwLDgsMSw2LDAsNDc1LDYsMTEwLDYsNiw5LDQ3NTksOSw3ODc3MTksMjM5XTtcblxuLy8gVGhpcyBoYXMgYSBjb21wbGV4aXR5IGxpbmVhciB0byB0aGUgdmFsdWUgb2YgdGhlIGNvZGUuIFRoZVxuLy8gYXNzdW1wdGlvbiBpcyB0aGF0IGxvb2tpbmcgdXAgYXN0cmFsIGlkZW50aWZpZXIgY2hhcmFjdGVycyBpc1xuLy8gcmFyZS5cbmZ1bmN0aW9uIGlzSW5Bc3RyYWxTZXQoY29kZTogbnVtYmVyLCBzZXQ6IHJlYWRvbmx5IG51bWJlcltdKTogYm9vbGVhbiB7XG4gIGxldCBwb3MgPSAweDEwMDAwO1xuICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gc2V0Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSArPSAyKSB7XG4gICAgcG9zICs9IHNldFtpXTtcbiAgICBpZiAocG9zID4gY29kZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcG9zICs9IHNldFtpICsgMV07XG4gICAgaWYgKHBvcyA+PSBjb2RlKSByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIFRlc3Qgd2hldGhlciBhIGdpdmVuIGNoYXJhY3RlciBjb2RlIHN0YXJ0cyBhbiBpZGVudGlmaWVyLlxuXG5leHBvcnQgZnVuY3Rpb24gaXNJZGVudGlmaWVyU3RhcnQoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIGlmIChjb2RlIDwgY2hhckNvZGVzLnVwcGVyY2FzZUEpIHJldHVybiBjb2RlID09PSBjaGFyQ29kZXMuZG9sbGFyU2lnbjtcbiAgaWYgKGNvZGUgPD0gY2hhckNvZGVzLnVwcGVyY2FzZVopIHJldHVybiB0cnVlO1xuICBpZiAoY29kZSA8IGNoYXJDb2Rlcy5sb3dlcmNhc2VBKSByZXR1cm4gY29kZSA9PT0gY2hhckNvZGVzLnVuZGVyc2NvcmU7XG4gIGlmIChjb2RlIDw9IGNoYXJDb2Rlcy5sb3dlcmNhc2VaKSByZXR1cm4gdHJ1ZTtcbiAgaWYgKGNvZGUgPD0gMHhmZmZmKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGNvZGUgPj0gMHhhYSAmJiBub25BU0NJSWlkZW50aWZpZXJTdGFydC50ZXN0KFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSkpXG4gICAgKTtcbiAgfVxuICByZXR1cm4gaXNJbkFzdHJhbFNldChjb2RlLCBhc3RyYWxJZGVudGlmaWVyU3RhcnRDb2Rlcyk7XG59XG5cbi8vIFRlc3Qgd2hldGhlciBhIGdpdmVuIGNoYXJhY3RlciBpcyBwYXJ0IG9mIGFuIGlkZW50aWZpZXIuXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0lkZW50aWZpZXJDaGFyKGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICBpZiAoY29kZSA8IGNoYXJDb2Rlcy5kaWdpdDApIHJldHVybiBjb2RlID09PSBjaGFyQ29kZXMuZG9sbGFyU2lnbjtcbiAgaWYgKGNvZGUgPCBjaGFyQ29kZXMuY29sb24pIHJldHVybiB0cnVlO1xuICBpZiAoY29kZSA8IGNoYXJDb2Rlcy51cHBlcmNhc2VBKSByZXR1cm4gZmFsc2U7XG4gIGlmIChjb2RlIDw9IGNoYXJDb2Rlcy51cHBlcmNhc2VaKSByZXR1cm4gdHJ1ZTtcbiAgaWYgKGNvZGUgPCBjaGFyQ29kZXMubG93ZXJjYXNlQSkgcmV0dXJuIGNvZGUgPT09IGNoYXJDb2Rlcy51bmRlcnNjb3JlO1xuICBpZiAoY29kZSA8PSBjaGFyQ29kZXMubG93ZXJjYXNlWikgcmV0dXJuIHRydWU7XG4gIGlmIChjb2RlIDw9IDB4ZmZmZikge1xuICAgIHJldHVybiBjb2RlID49IDB4YWEgJiYgbm9uQVNDSUlpZGVudGlmaWVyLnRlc3QoU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICBpc0luQXN0cmFsU2V0KGNvZGUsIGFzdHJhbElkZW50aWZpZXJTdGFydENvZGVzKSB8fFxuICAgIGlzSW5Bc3RyYWxTZXQoY29kZSwgYXN0cmFsSWRlbnRpZmllckNvZGVzKVxuICApO1xufVxuXG4vLyBUZXN0IHdoZXRoZXIgYSBnaXZlbiBzdHJpbmcgaXMgYSB2YWxpZCBpZGVudGlmaWVyIG5hbWVcblxuZXhwb3J0IGZ1bmN0aW9uIGlzSWRlbnRpZmllck5hbWUobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGxldCBpc0ZpcnN0ID0gdHJ1ZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gVGhlIGltcGxlbWVudGF0aW9uIGlzIGJhc2VkIG9uXG4gICAgLy8gaHR0cHM6Ly9zb3VyY2UuY2hyb21pdW0ub3JnL2Nocm9taXVtL2Nocm9taXVtL3NyYy8rL21hc3Rlcjp2OC9zcmMvYnVpbHRpbnMvYnVpbHRpbnMtc3RyaW5nLWdlbi5jYztsPTE0NTU7ZHJjPTIyMWUzMzFiNDlkZmVmYWRiYzZmYTQwYjBjNjhlNmY5NzYwNmQwYjM7YnB2PTA7YnB0PTFcbiAgICAvLyBXZSByZWltcGxlbWVudCBgY29kZVBvaW50QXRgIGJlY2F1c2UgYGNvZGVQb2ludEF0YCBpcyBhIFY4IGJ1aWx0aW4gd2hpY2ggaXMgbm90IGlubGluZWQgYnkgVHVyYm9GYW4gKGFzIG9mIE05MSlcbiAgICAvLyBzaW5jZSBgbmFtZWAgaXMgbW9zdGx5IEFTQ0lJLCBhbiBpbmxpbmVkIGBjaGFyQ29kZUF0YCB3aW5zIGhlcmVcbiAgICBsZXQgY3AgPSBuYW1lLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKChjcCAmIDB4ZmMwMCkgPT09IDB4ZDgwMCAmJiBpICsgMSA8IG5hbWUubGVuZ3RoKSB7XG4gICAgICBjb25zdCB0cmFpbCA9IG5hbWUuY2hhckNvZGVBdCgrK2kpO1xuICAgICAgaWYgKCh0cmFpbCAmIDB4ZmMwMCkgPT09IDB4ZGMwMCkge1xuICAgICAgICBjcCA9IDB4MTAwMDAgKyAoKGNwICYgMHgzZmYpIDw8IDEwKSArICh0cmFpbCAmIDB4M2ZmKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzRmlyc3QpIHtcbiAgICAgIGlzRmlyc3QgPSBmYWxzZTtcbiAgICAgIGlmICghaXNJZGVudGlmaWVyU3RhcnQoY3ApKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFpc0lkZW50aWZpZXJDaGFyKGNwKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gIWlzRmlyc3Q7XG59XG4iLCAiY29uc3QgcmVzZXJ2ZWRXb3JkcyA9IHtcbiAga2V5d29yZDogW1xuICAgIFwiYnJlYWtcIixcbiAgICBcImNhc2VcIixcbiAgICBcImNhdGNoXCIsXG4gICAgXCJjb250aW51ZVwiLFxuICAgIFwiZGVidWdnZXJcIixcbiAgICBcImRlZmF1bHRcIixcbiAgICBcImRvXCIsXG4gICAgXCJlbHNlXCIsXG4gICAgXCJmaW5hbGx5XCIsXG4gICAgXCJmb3JcIixcbiAgICBcImZ1bmN0aW9uXCIsXG4gICAgXCJpZlwiLFxuICAgIFwicmV0dXJuXCIsXG4gICAgXCJzd2l0Y2hcIixcbiAgICBcInRocm93XCIsXG4gICAgXCJ0cnlcIixcbiAgICBcInZhclwiLFxuICAgIFwiY29uc3RcIixcbiAgICBcIndoaWxlXCIsXG4gICAgXCJ3aXRoXCIsXG4gICAgXCJuZXdcIixcbiAgICBcInRoaXNcIixcbiAgICBcInN1cGVyXCIsXG4gICAgXCJjbGFzc1wiLFxuICAgIFwiZXh0ZW5kc1wiLFxuICAgIFwiZXhwb3J0XCIsXG4gICAgXCJpbXBvcnRcIixcbiAgICBcIm51bGxcIixcbiAgICBcInRydWVcIixcbiAgICBcImZhbHNlXCIsXG4gICAgXCJpblwiLFxuICAgIFwiaW5zdGFuY2VvZlwiLFxuICAgIFwidHlwZW9mXCIsXG4gICAgXCJ2b2lkXCIsXG4gICAgXCJkZWxldGVcIixcbiAgXSxcbiAgc3RyaWN0OiBbXG4gICAgXCJpbXBsZW1lbnRzXCIsXG4gICAgXCJpbnRlcmZhY2VcIixcbiAgICBcImxldFwiLFxuICAgIFwicGFja2FnZVwiLFxuICAgIFwicHJpdmF0ZVwiLFxuICAgIFwicHJvdGVjdGVkXCIsXG4gICAgXCJwdWJsaWNcIixcbiAgICBcInN0YXRpY1wiLFxuICAgIFwieWllbGRcIixcbiAgXSxcbiAgc3RyaWN0QmluZDogW1wiZXZhbFwiLCBcImFyZ3VtZW50c1wiXSxcbn07XG5jb25zdCBrZXl3b3JkcyA9IG5ldyBTZXQocmVzZXJ2ZWRXb3Jkcy5rZXl3b3JkKTtcbmNvbnN0IHJlc2VydmVkV29yZHNTdHJpY3RTZXQgPSBuZXcgU2V0KHJlc2VydmVkV29yZHMuc3RyaWN0KTtcbmNvbnN0IHJlc2VydmVkV29yZHNTdHJpY3RCaW5kU2V0ID0gbmV3IFNldChyZXNlcnZlZFdvcmRzLnN0cmljdEJpbmQpO1xuXG4vKipcbiAqIENoZWNrcyBpZiB3b3JkIGlzIGEgcmVzZXJ2ZWQgd29yZCBpbiBub24tc3RyaWN0IG1vZGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzZXJ2ZWRXb3JkKHdvcmQ6IHN0cmluZywgaW5Nb2R1bGU6IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgcmV0dXJuIChpbk1vZHVsZSAmJiB3b3JkID09PSBcImF3YWl0XCIpIHx8IHdvcmQgPT09IFwiZW51bVwiO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiB3b3JkIGlzIGEgcmVzZXJ2ZWQgd29yZCBpbiBub24tYmluZGluZyBzdHJpY3QgbW9kZVxuICpcbiAqIEluY2x1ZGVzIG5vbi1zdHJpY3QgcmVzZXJ2ZWQgd29yZHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaWN0UmVzZXJ2ZWRXb3JkKHdvcmQ6IHN0cmluZywgaW5Nb2R1bGU6IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgcmV0dXJuIGlzUmVzZXJ2ZWRXb3JkKHdvcmQsIGluTW9kdWxlKSB8fCByZXNlcnZlZFdvcmRzU3RyaWN0U2V0Lmhhcyh3b3JkKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgd29yZCBpcyBhIHJlc2VydmVkIHdvcmQgaW4gYmluZGluZyBzdHJpY3QgbW9kZSwgYnV0IGl0IGlzIGFsbG93ZWQgYXNcbiAqIGEgbm9ybWFsIGlkZW50aWZpZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmljdEJpbmRPbmx5UmVzZXJ2ZWRXb3JkKHdvcmQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcmVzZXJ2ZWRXb3Jkc1N0cmljdEJpbmRTZXQuaGFzKHdvcmQpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiB3b3JkIGlzIGEgcmVzZXJ2ZWQgd29yZCBpbiBiaW5kaW5nIHN0cmljdCBtb2RlXG4gKlxuICogSW5jbHVkZXMgbm9uLXN0cmljdCByZXNlcnZlZCB3b3JkcyBhbmQgbm9uLWJpbmRpbmcgc3RyaWN0IHJlc2VydmVkIHdvcmRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmljdEJpbmRSZXNlcnZlZFdvcmQoXG4gIHdvcmQ6IHN0cmluZyxcbiAgaW5Nb2R1bGU6IGJvb2xlYW4sXG4pOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICBpc1N0cmljdFJlc2VydmVkV29yZCh3b3JkLCBpbk1vZHVsZSkgfHwgaXNTdHJpY3RCaW5kT25seVJlc2VydmVkV29yZCh3b3JkKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNLZXl3b3JkKHdvcmQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4ga2V5d29yZHMuaGFzKHdvcmQpO1xufVxuIiwgImV4cG9ydCB7XG4gIGlzSWRlbnRpZmllck5hbWUsXG4gIGlzSWRlbnRpZmllckNoYXIsXG4gIGlzSWRlbnRpZmllclN0YXJ0LFxufSBmcm9tIFwiLi9pZGVudGlmaWVyLnRzXCI7XG5leHBvcnQge1xuICBpc1Jlc2VydmVkV29yZCxcbiAgaXNTdHJpY3RCaW5kT25seVJlc2VydmVkV29yZCxcbiAgaXNTdHJpY3RCaW5kUmVzZXJ2ZWRXb3JkLFxuICBpc1N0cmljdFJlc2VydmVkV29yZCxcbiAgaXNLZXl3b3JkLFxufSBmcm9tIFwiLi9rZXl3b3JkLnRzXCI7XG4iLCAiaW1wb3J0IHBpY29jb2xvcnMsIHsgY3JlYXRlQ29sb3JzIH0gZnJvbSBcInBpY29jb2xvcnNcIjtcbmltcG9ydCB0eXBlIHsgQ29sb3JzLCBGb3JtYXR0ZXIgfSBmcm9tIFwicGljb2NvbG9ycy90eXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNDb2xvclN1cHBvcnRlZCgpIHtcbiAgcmV0dXJuIChcbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2FsZXhleXJhc3BvcG92L3BpY29jb2xvcnMvaXNzdWVzLzYyXG4gICAgdHlwZW9mIHByb2Nlc3MgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgIChwcm9jZXNzLmVudi5GT1JDRV9DT0xPUiA9PT0gXCIwXCIgfHwgcHJvY2Vzcy5lbnYuRk9SQ0VfQ09MT1IgPT09IFwiZmFsc2VcIilcbiAgICAgID8gZmFsc2VcbiAgICAgIDogcGljb2NvbG9ycy5pc0NvbG9yU3VwcG9ydGVkXG4gICk7XG59XG5cbmV4cG9ydCB0eXBlIEludGVybmFsVG9rZW5UeXBlID1cbiAgfCBcImtleXdvcmRcIlxuICB8IFwiY2FwaXRhbGl6ZWRcIlxuICB8IFwianN4SWRlbnRpZmllclwiXG4gIHwgXCJwdW5jdHVhdG9yXCJcbiAgfCBcIm51bWJlclwiXG4gIHwgXCJzdHJpbmdcIlxuICB8IFwicmVnZXhcIlxuICB8IFwiY29tbWVudFwiXG4gIHwgXCJpbnZhbGlkXCI7XG5cbnR5cGUgVUlUb2tlbnMgPSBcImd1dHRlclwiIHwgXCJtYXJrZXJcIiB8IFwibWVzc2FnZVwiO1xuXG5leHBvcnQgdHlwZSBEZWZzID0gUmVjb3JkPEludGVybmFsVG9rZW5UeXBlIHwgVUlUb2tlbnMgfCBcInJlc2V0XCIsIEZvcm1hdHRlcj47XG5cbmNvbnN0IGNvbXBvc2U6IDxULCBVLCBWPihmOiAoZ3Y6IFUpID0+IFYsIGc6ICh2OiBUKSA9PiBVKSA9PiAodjogVCkgPT4gViA9XG4gIChmLCBnKSA9PiB2ID0+XG4gICAgZihnKHYpKTtcblxuLyoqXG4gKiBTdHlsZXMgZm9yIHRva2VuIHR5cGVzLlxuICovXG5mdW5jdGlvbiBidWlsZERlZnMoY29sb3JzOiBDb2xvcnMpOiBEZWZzIHtcbiAgcmV0dXJuIHtcbiAgICBrZXl3b3JkOiBjb2xvcnMuY3lhbixcbiAgICBjYXBpdGFsaXplZDogY29sb3JzLnllbGxvdyxcbiAgICBqc3hJZGVudGlmaWVyOiBjb2xvcnMueWVsbG93LFxuICAgIHB1bmN0dWF0b3I6IGNvbG9ycy55ZWxsb3csXG4gICAgbnVtYmVyOiBjb2xvcnMubWFnZW50YSxcbiAgICBzdHJpbmc6IGNvbG9ycy5ncmVlbixcbiAgICByZWdleDogY29sb3JzLm1hZ2VudGEsXG4gICAgY29tbWVudDogY29sb3JzLmdyYXksXG4gICAgaW52YWxpZDogY29tcG9zZShjb21wb3NlKGNvbG9ycy53aGl0ZSwgY29sb3JzLmJnUmVkKSwgY29sb3JzLmJvbGQpLFxuXG4gICAgZ3V0dGVyOiBjb2xvcnMuZ3JheSxcbiAgICBtYXJrZXI6IGNvbXBvc2UoY29sb3JzLnJlZCwgY29sb3JzLmJvbGQpLFxuICAgIG1lc3NhZ2U6IGNvbXBvc2UoY29sb3JzLnJlZCwgY29sb3JzLmJvbGQpLFxuXG4gICAgcmVzZXQ6IGNvbG9ycy5yZXNldCxcbiAgfTtcbn1cblxuY29uc3QgZGVmc09uID0gYnVpbGREZWZzKGNyZWF0ZUNvbG9ycyh0cnVlKSk7XG5jb25zdCBkZWZzT2ZmID0gYnVpbGREZWZzKGNyZWF0ZUNvbG9ycyhmYWxzZSkpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmcyhlbmFibGVkOiBib29sZWFuKTogRGVmcyB7XG4gIHJldHVybiBlbmFibGVkID8gZGVmc09uIDogZGVmc09mZjtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IFRva2VuIGFzIEpTVG9rZW4sIEpTWFRva2VuIH0gZnJvbSBcImpzLXRva2Vuc1wiO1xuaW1wb3J0IGpzVG9rZW5zIGZyb20gXCJqcy10b2tlbnNcIjtcbi8vIFdlIGlubGluZSB0aGlzIHBhY2thZ2Vcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCAqIGFzIGNoYXJDb2RlcyBmcm9tIFwiY2hhcmNvZGVzXCI7XG5cbmltcG9ydCB7XG4gIGlzU3RyaWN0UmVzZXJ2ZWRXb3JkLFxuICBpc0tleXdvcmQsXG59IGZyb20gXCJAYmFiZWwvaGVscGVyLXZhbGlkYXRvci1pZGVudGlmaWVyXCI7XG5cbmltcG9ydCB7IGdldERlZnMsIHR5cGUgSW50ZXJuYWxUb2tlblR5cGUgfSBmcm9tIFwiLi9kZWZzLnRzXCI7XG5cbi8qKlxuICogTmFtZXMgdGhhdCBhcmUgYWx3YXlzIGFsbG93ZWQgYXMgaWRlbnRpZmllcnMsIGJ1dCBhbHNvIGFwcGVhciBhcyBrZXl3b3Jkc1xuICogd2l0aGluIGNlcnRhaW4gc3ludGFjdGljIHByb2R1Y3Rpb25zLlxuICpcbiAqIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMta2V5d29yZHMtYW5kLXJlc2VydmVkLXdvcmRzXG4gKlxuICogYHRhcmdldGAgaGFzIGJlZW4gb21pdHRlZCBzaW5jZSBpdCBpcyB2ZXJ5IGxpa2VseSBnb2luZyB0byBiZSBhIGZhbHNlXG4gKiBwb3NpdGl2ZS5cbiAqL1xuY29uc3Qgc29tZXRpbWVzS2V5d29yZHMgPSBuZXcgU2V0KFtcImFzXCIsIFwiYXN5bmNcIiwgXCJmcm9tXCIsIFwiZ2V0XCIsIFwib2ZcIiwgXCJzZXRcIl0pO1xuXG50eXBlIFRva2VuID0ge1xuICB0eXBlOiBJbnRlcm5hbFRva2VuVHlwZSB8IFwidW5jb2xvcmVkXCI7XG4gIHZhbHVlOiBzdHJpbmc7XG59O1xuXG4vKipcbiAqIFJlZ0V4cCB0byB0ZXN0IGZvciBuZXdsaW5lcyBpbiB0ZXJtaW5hbC5cbiAqL1xuY29uc3QgTkVXTElORSA9IC9cXHJcXG58W1xcblxcclxcdTIwMjhcXHUyMDI5XS87XG5cbi8qKlxuICogUmVnRXhwIHRvIHRlc3QgZm9yIHRoZSB0aHJlZSB0eXBlcyBvZiBicmFja2V0cy5cbiAqL1xuY29uc3QgQlJBQ0tFVCA9IC9eWygpW1xcXXt9XSQvO1xuXG5sZXQgdG9rZW5pemU6IChcbiAgdGV4dDogc3RyaW5nLFxuKSA9PiBHZW5lcmF0b3I8eyB0eXBlOiBJbnRlcm5hbFRva2VuVHlwZSB8IFwidW5jb2xvcmVkXCI7IHZhbHVlOiBzdHJpbmcgfT47XG5cbmlmIChwcm9jZXNzLmVudi5CQUJFTF84X0JSRUFLSU5HKSB7XG4gIC8qKlxuICAgKiBHZXQgdGhlIHR5cGUgb2YgdG9rZW4sIHNwZWNpZnlpbmcgcHVuY3R1YXRvciB0eXBlLlxuICAgKi9cbiAgY29uc3QgZ2V0VG9rZW5UeXBlID0gZnVuY3Rpb24gKFxuICAgIHRva2VuOiBKU1Rva2VuIHwgSlNYVG9rZW4sXG4gICk6IEludGVybmFsVG9rZW5UeXBlIHwgXCJ1bmNvbG9yZWRcIiB7XG4gICAgaWYgKHRva2VuLnR5cGUgPT09IFwiSWRlbnRpZmllck5hbWVcIikge1xuICAgICAgY29uc3QgdG9rZW5WYWx1ZSA9IHRva2VuLnZhbHVlO1xuICAgICAgaWYgKFxuICAgICAgICBpc0tleXdvcmQodG9rZW5WYWx1ZSkgfHxcbiAgICAgICAgaXNTdHJpY3RSZXNlcnZlZFdvcmQodG9rZW5WYWx1ZSwgdHJ1ZSkgfHxcbiAgICAgICAgc29tZXRpbWVzS2V5d29yZHMuaGFzKHRva2VuVmFsdWUpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIFwia2V5d29yZFwiO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmaXJzdENoYXIgPSB0b2tlblZhbHVlLmNoYXJDb2RlQXQoMCk7XG4gICAgICBpZiAoZmlyc3RDaGFyIDwgMTI4KSB7XG4gICAgICAgIC8vIEFTQ0lJIGNoYXJhY3RlcnNcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGZpcnN0Q2hhciA+PSBjaGFyQ29kZXMudXBwZXJjYXNlQSAmJlxuICAgICAgICAgIGZpcnN0Q2hhciA8PSBjaGFyQ29kZXMudXBwZXJjYXNlWlxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gXCJjYXBpdGFsaXplZFwiO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmaXJzdENoYXIgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCh0b2tlblZhbHVlLmNvZGVQb2ludEF0KDApKTtcbiAgICAgICAgaWYgKGZpcnN0Q2hhciAhPT0gZmlyc3RDaGFyLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICByZXR1cm4gXCJjYXBpdGFsaXplZFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRva2VuLnR5cGUgPT09IFwiUHVuY3R1YXRvclwiICYmIEJSQUNLRVQudGVzdCh0b2tlbi52YWx1ZSkpIHtcbiAgICAgIHJldHVybiBcInVuY29sb3JlZFwiO1xuICAgIH1cblxuICAgIGlmICh0b2tlbi50eXBlID09PSBcIkludmFsaWRcIiAmJiB0b2tlbi52YWx1ZSA9PT0gXCJAXCIpIHtcbiAgICAgIHJldHVybiBcInB1bmN0dWF0b3JcIjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJOdW1lcmljTGl0ZXJhbFwiOlxuICAgICAgICByZXR1cm4gXCJudW1iZXJcIjtcblxuICAgICAgY2FzZSBcIlN0cmluZ0xpdGVyYWxcIjpcbiAgICAgIGNhc2UgXCJKU1hTdHJpbmdcIjpcbiAgICAgIGNhc2UgXCJOb1N1YnN0aXR1dGlvblRlbXBsYXRlXCI6XG4gICAgICAgIHJldHVybiBcInN0cmluZ1wiO1xuXG4gICAgICBjYXNlIFwiUmVndWxhckV4cHJlc3Npb25MaXRlcmFsXCI6XG4gICAgICAgIHJldHVybiBcInJlZ2V4XCI7XG5cbiAgICAgIGNhc2UgXCJQdW5jdHVhdG9yXCI6XG4gICAgICBjYXNlIFwiSlNYUHVuY3R1YXRvclwiOlxuICAgICAgICByZXR1cm4gXCJwdW5jdHVhdG9yXCI7XG5cbiAgICAgIGNhc2UgXCJNdWx0aUxpbmVDb21tZW50XCI6XG4gICAgICBjYXNlIFwiU2luZ2xlTGluZUNvbW1lbnRcIjpcbiAgICAgICAgcmV0dXJuIFwiY29tbWVudFwiO1xuXG4gICAgICBjYXNlIFwiSW52YWxpZFwiOlxuICAgICAgY2FzZSBcIkpTWEludmFsaWRcIjpcbiAgICAgICAgcmV0dXJuIFwiaW52YWxpZFwiO1xuXG4gICAgICBjYXNlIFwiSlNYSWRlbnRpZmllclwiOlxuICAgICAgICByZXR1cm4gXCJqc3hJZGVudGlmaWVyXCI7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcInVuY29sb3JlZFwiO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogVHVybiBhIHN0cmluZyBvZiBKUyBpbnRvIGFuIGFycmF5IG9mIG9iamVjdHMuXG4gICAqL1xuICB0b2tlbml6ZSA9IGZ1bmN0aW9uKiAodGV4dDogc3RyaW5nKTogR2VuZXJhdG9yPFRva2VuPiB7XG4gICAgZm9yIChjb25zdCB0b2tlbiBvZiBqc1Rva2Vucyh0ZXh0LCB7IGpzeDogdHJ1ZSB9KSkge1xuICAgICAgc3dpdGNoICh0b2tlbi50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJUZW1wbGF0ZUhlYWRcIjpcbiAgICAgICAgICB5aWVsZCB7IHR5cGU6IFwic3RyaW5nXCIsIHZhbHVlOiB0b2tlbi52YWx1ZS5zbGljZSgwLCAtMikgfTtcbiAgICAgICAgICB5aWVsZCB7IHR5cGU6IFwicHVuY3R1YXRvclwiLCB2YWx1ZTogXCIke1wiIH07XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIlRlbXBsYXRlTWlkZGxlXCI6XG4gICAgICAgICAgeWllbGQgeyB0eXBlOiBcInB1bmN0dWF0b3JcIiwgdmFsdWU6IFwifVwiIH07XG4gICAgICAgICAgeWllbGQgeyB0eXBlOiBcInN0cmluZ1wiLCB2YWx1ZTogdG9rZW4udmFsdWUuc2xpY2UoMSwgLTIpIH07XG4gICAgICAgICAgeWllbGQgeyB0eXBlOiBcInB1bmN0dWF0b3JcIiwgdmFsdWU6IFwiJHtcIiB9O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJUZW1wbGF0ZVRhaWxcIjpcbiAgICAgICAgICB5aWVsZCB7IHR5cGU6IFwicHVuY3R1YXRvclwiLCB2YWx1ZTogXCJ9XCIgfTtcbiAgICAgICAgICB5aWVsZCB7IHR5cGU6IFwic3RyaW5nXCIsIHZhbHVlOiB0b2tlbi52YWx1ZS5zbGljZSgxKSB9O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgeWllbGQge1xuICAgICAgICAgICAgdHlwZTogZ2V0VG9rZW5UeXBlKHRva2VuKSxcbiAgICAgICAgICAgIHZhbHVlOiB0b2tlbi52YWx1ZSxcbiAgICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0gZWxzZSB7XG4gIC8qKlxuICAgKiBSZWdFeHAgdG8gdGVzdCBmb3Igd2hhdCBzZWVtcyB0byBiZSBhIEpTWCB0YWcgbmFtZS5cbiAgICovXG4gIGNvbnN0IEpTWF9UQUcgPSAvXlthLXpdW1xcdy1dKiQvaTtcblxuICAvLyBUaGUgdG9rZW4gaGVyZSBpcyBkZWZpbmVkIGluIGpzLXRva2Vuc0A0LiBIb3dldmVyIHdlIGRvbid0IGJvdGhlclxuICAvLyB0eXBpbmcgaXQgc2luY2UgdGhlIHdob2xlIGJsb2NrIHdpbGwgYmUgcmVtb3ZlZCBpbiBCYWJlbCA4XG4gIGNvbnN0IGdldFRva2VuVHlwZSA9IGZ1bmN0aW9uICh0b2tlbjogYW55LCBvZmZzZXQ6IG51bWJlciwgdGV4dDogc3RyaW5nKSB7XG4gICAgaWYgKHRva2VuLnR5cGUgPT09IFwibmFtZVwiKSB7XG4gICAgICBjb25zdCB0b2tlblZhbHVlID0gdG9rZW4udmFsdWU7XG4gICAgICBpZiAoXG4gICAgICAgIGlzS2V5d29yZCh0b2tlblZhbHVlKSB8fFxuICAgICAgICBpc1N0cmljdFJlc2VydmVkV29yZCh0b2tlblZhbHVlLCB0cnVlKSB8fFxuICAgICAgICBzb21ldGltZXNLZXl3b3Jkcy5oYXModG9rZW5WYWx1ZSlcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gXCJrZXl3b3JkXCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgSlNYX1RBRy50ZXN0KHRva2VuVmFsdWUpICYmXG4gICAgICAgICh0ZXh0W29mZnNldCAtIDFdID09PSBcIjxcIiB8fCB0ZXh0LnNsaWNlKG9mZnNldCAtIDIsIG9mZnNldCkgPT09IFwiPC9cIilcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gXCJqc3hJZGVudGlmaWVyXCI7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZpcnN0Q2hhciA9IFN0cmluZy5mcm9tQ29kZVBvaW50KHRva2VuVmFsdWUuY29kZVBvaW50QXQoMCkpO1xuICAgICAgaWYgKGZpcnN0Q2hhciAhPT0gZmlyc3RDaGFyLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgcmV0dXJuIFwiY2FwaXRhbGl6ZWRcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodG9rZW4udHlwZSA9PT0gXCJwdW5jdHVhdG9yXCIgJiYgQlJBQ0tFVC50ZXN0KHRva2VuLnZhbHVlKSkge1xuICAgICAgcmV0dXJuIFwiYnJhY2tldFwiO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHRva2VuLnR5cGUgPT09IFwiaW52YWxpZFwiICYmXG4gICAgICAodG9rZW4udmFsdWUgPT09IFwiQFwiIHx8IHRva2VuLnZhbHVlID09PSBcIiNcIilcbiAgICApIHtcbiAgICAgIHJldHVybiBcInB1bmN0dWF0b3JcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW4udHlwZTtcbiAgfTtcblxuICB0b2tlbml6ZSA9IGZ1bmN0aW9uKiAodGV4dDogc3RyaW5nKSB7XG4gICAgbGV0IG1hdGNoO1xuICAgIHdoaWxlICgobWF0Y2ggPSAoanNUb2tlbnMgYXMgYW55KS5kZWZhdWx0LmV4ZWModGV4dCkpKSB7XG4gICAgICBjb25zdCB0b2tlbiA9IChqc1Rva2VucyBhcyBhbnkpLm1hdGNoVG9Ub2tlbihtYXRjaCk7XG5cbiAgICAgIHlpZWxkIHtcbiAgICAgICAgdHlwZTogZ2V0VG9rZW5UeXBlKHRva2VuLCBtYXRjaC5pbmRleCwgdGV4dCksXG4gICAgICAgIHZhbHVlOiB0b2tlbi52YWx1ZSxcbiAgICAgIH07XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlnaGxpZ2h0KHRleHQ6IHN0cmluZykge1xuICBpZiAodGV4dCA9PT0gXCJcIikgcmV0dXJuIFwiXCI7XG5cbiAgY29uc3QgZGVmcyA9IGdldERlZnModHJ1ZSk7XG5cbiAgbGV0IGhpZ2hsaWdodGVkID0gXCJcIjtcblxuICBmb3IgKGNvbnN0IHsgdHlwZSwgdmFsdWUgfSBvZiB0b2tlbml6ZSh0ZXh0KSkge1xuICAgIGlmICh0eXBlIGluIGRlZnMpIHtcbiAgICAgIGhpZ2hsaWdodGVkICs9IHZhbHVlXG4gICAgICAgIC5zcGxpdChORVdMSU5FKVxuICAgICAgICAubWFwKHN0ciA9PiBkZWZzW3R5cGUgYXMgSW50ZXJuYWxUb2tlblR5cGVdKHN0cikpXG4gICAgICAgIC5qb2luKFwiXFxuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoaWdobGlnaHRlZCArPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaGlnaGxpZ2h0ZWQ7XG59XG4iLCAiaW1wb3J0IHsgZ2V0RGVmcywgaXNDb2xvclN1cHBvcnRlZCB9IGZyb20gXCIuL2RlZnMudHNcIjtcbmltcG9ydCB7IGhpZ2hsaWdodCB9IGZyb20gXCIuL2hpZ2hsaWdodC50c1wiO1xuXG5leHBvcnQgeyBoaWdobGlnaHQgfTtcblxubGV0IGRlcHJlY2F0aW9uV2FybmluZ1Nob3duID0gZmFsc2U7XG5cbnR5cGUgTG9jYXRpb24gPSB7XG4gIGNvbHVtbjogbnVtYmVyO1xuICBsaW5lOiBudW1iZXI7XG59O1xuXG50eXBlIE5vZGVMb2NhdGlvbiA9IHtcbiAgZW5kPzogTG9jYXRpb247XG4gIHN0YXJ0OiBMb2NhdGlvbjtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3B0aW9ucyB7XG4gIC8qKiBTeW50YXggaGlnaGxpZ2h0IHRoZSBjb2RlIGFzIEphdmFTY3JpcHQgZm9yIHRlcm1pbmFscy4gZGVmYXVsdDogZmFsc2UgKi9cbiAgaGlnaGxpZ2h0Q29kZT86IGJvb2xlYW47XG4gIC8qKiAgVGhlIG51bWJlciBvZiBsaW5lcyB0byBzaG93IGFib3ZlIHRoZSBlcnJvci4gZGVmYXVsdDogMiAqL1xuICBsaW5lc0Fib3ZlPzogbnVtYmVyO1xuICAvKiogIFRoZSBudW1iZXIgb2YgbGluZXMgdG8gc2hvdyBiZWxvdyB0aGUgZXJyb3IuIGRlZmF1bHQ6IDMgKi9cbiAgbGluZXNCZWxvdz86IG51bWJlcjtcbiAgLyoqIFRoZSBsaW5lIG51bWJlciBjb3JyZXNwb25kaW5nIHRvIHRoZSBmaXJzdCBsaW5lIGluIGByYXdMaW5lc2AuIGRlZmF1bHQ6IDEgKi9cbiAgc3RhcnRMaW5lPzogbnVtYmVyO1xuICAvKipcbiAgICogRm9yY2libHkgc3ludGF4IGhpZ2hsaWdodCB0aGUgY29kZSBhcyBKYXZhU2NyaXB0IChmb3Igbm9uLXRlcm1pbmFscyk7XG4gICAqIG92ZXJyaWRlcyBoaWdobGlnaHRDb2RlLlxuICAgKiBkZWZhdWx0OiBmYWxzZVxuICAgKi9cbiAgZm9yY2VDb2xvcj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBQYXNzIGluIGEgc3RyaW5nIHRvIGJlIGRpc3BsYXllZCBpbmxpbmUgKGlmIHBvc3NpYmxlKSBuZXh0IHRvIHRoZVxuICAgKiBoaWdobGlnaHRlZCBsb2NhdGlvbiBpbiB0aGUgY29kZS4gSWYgaXQgY2FuJ3QgYmUgcG9zaXRpb25lZCBpbmxpbmUsXG4gICAqIGl0IHdpbGwgYmUgcGxhY2VkIGFib3ZlIHRoZSBjb2RlIGZyYW1lLlxuICAgKiBkZWZhdWx0OiBub3RoaW5nXG4gICAqL1xuICBtZXNzYWdlPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIFJlZ0V4cCB0byB0ZXN0IGZvciBuZXdsaW5lcyBpbiB0ZXJtaW5hbC5cbiAqL1xuXG5jb25zdCBORVdMSU5FID0gL1xcclxcbnxbXFxuXFxyXFx1MjAyOFxcdTIwMjldLztcblxuLyoqXG4gKiBFeHRyYWN0IHdoYXQgbGluZXMgc2hvdWxkIGJlIG1hcmtlZCBhbmQgaGlnaGxpZ2h0ZWQuXG4gKi9cblxudHlwZSBNYXJrZXJMaW5lcyA9IFJlY29yZDxudW1iZXIsIHRydWUgfCBbbnVtYmVyLCBudW1iZXJdPjtcblxuZnVuY3Rpb24gZ2V0TWFya2VyTGluZXMoXG4gIGxvYzogTm9kZUxvY2F0aW9uLFxuICBzb3VyY2U6IHN0cmluZ1tdLFxuICBvcHRzOiBPcHRpb25zLFxuICBzdGFydExpbmVCYXNlWmVybzogbnVtYmVyLFxuKToge1xuICBzdGFydDogbnVtYmVyO1xuICBlbmQ6IG51bWJlcjtcbiAgbWFya2VyTGluZXM6IE1hcmtlckxpbmVzO1xufSB7XG4gIGNvbnN0IHN0YXJ0TG9jOiBMb2NhdGlvbiA9IHtcbiAgICBjb2x1bW46IDAsXG4gICAgbGluZTogLTEsXG4gICAgLi4ubG9jLnN0YXJ0LFxuICB9O1xuICBjb25zdCBlbmRMb2M6IExvY2F0aW9uID0ge1xuICAgIC4uLnN0YXJ0TG9jLFxuICAgIC4uLmxvYy5lbmQsXG4gIH07XG4gIGNvbnN0IHsgbGluZXNBYm92ZSA9IDIsIGxpbmVzQmVsb3cgPSAzIH0gPSBvcHRzIHx8IHt9O1xuICBjb25zdCBzdGFydExpbmUgPSBzdGFydExvYy5saW5lIC0gc3RhcnRMaW5lQmFzZVplcm87XG4gIGNvbnN0IHN0YXJ0Q29sdW1uID0gc3RhcnRMb2MuY29sdW1uO1xuICBjb25zdCBlbmRMaW5lID0gZW5kTG9jLmxpbmUgLSBzdGFydExpbmVCYXNlWmVybztcbiAgY29uc3QgZW5kQ29sdW1uID0gZW5kTG9jLmNvbHVtbjtcblxuICBsZXQgc3RhcnQgPSBNYXRoLm1heChzdGFydExpbmUgLSAobGluZXNBYm92ZSArIDEpLCAwKTtcbiAgbGV0IGVuZCA9IE1hdGgubWluKHNvdXJjZS5sZW5ndGgsIGVuZExpbmUgKyBsaW5lc0JlbG93KTtcblxuICBpZiAoc3RhcnRMaW5lID09PSAtMSkge1xuICAgIHN0YXJ0ID0gMDtcbiAgfVxuXG4gIGlmIChlbmRMaW5lID09PSAtMSkge1xuICAgIGVuZCA9IHNvdXJjZS5sZW5ndGg7XG4gIH1cblxuICBjb25zdCBsaW5lRGlmZiA9IGVuZExpbmUgLSBzdGFydExpbmU7XG4gIGNvbnN0IG1hcmtlckxpbmVzOiBNYXJrZXJMaW5lcyA9IHt9O1xuXG4gIGlmIChsaW5lRGlmZikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGxpbmVEaWZmOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmVOdW1iZXIgPSBpICsgc3RhcnRMaW5lO1xuXG4gICAgICBpZiAoIXN0YXJ0Q29sdW1uKSB7XG4gICAgICAgIG1hcmtlckxpbmVzW2xpbmVOdW1iZXJdID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMCkge1xuICAgICAgICBjb25zdCBzb3VyY2VMZW5ndGggPSBzb3VyY2VbbGluZU51bWJlciAtIDFdLmxlbmd0aDtcblxuICAgICAgICBtYXJrZXJMaW5lc1tsaW5lTnVtYmVyXSA9IFtzdGFydENvbHVtbiwgc291cmNlTGVuZ3RoIC0gc3RhcnRDb2x1bW4gKyAxXTtcbiAgICAgIH0gZWxzZSBpZiAoaSA9PT0gbGluZURpZmYpIHtcbiAgICAgICAgbWFya2VyTGluZXNbbGluZU51bWJlcl0gPSBbMCwgZW5kQ29sdW1uXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNvdXJjZUxlbmd0aCA9IHNvdXJjZVtsaW5lTnVtYmVyIC0gaV0ubGVuZ3RoO1xuXG4gICAgICAgIG1hcmtlckxpbmVzW2xpbmVOdW1iZXJdID0gWzAsIHNvdXJjZUxlbmd0aF07XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChzdGFydENvbHVtbiA9PT0gZW5kQ29sdW1uKSB7XG4gICAgICBpZiAoc3RhcnRDb2x1bW4pIHtcbiAgICAgICAgbWFya2VyTGluZXNbc3RhcnRMaW5lXSA9IFtzdGFydENvbHVtbiwgMF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXJrZXJMaW5lc1tzdGFydExpbmVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWFya2VyTGluZXNbc3RhcnRMaW5lXSA9IFtzdGFydENvbHVtbiwgZW5kQ29sdW1uIC0gc3RhcnRDb2x1bW5dO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IHN0YXJ0LCBlbmQsIG1hcmtlckxpbmVzIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2RlRnJhbWVDb2x1bW5zKFxuICByYXdMaW5lczogc3RyaW5nLFxuICBsb2M6IE5vZGVMb2NhdGlvbixcbiAgb3B0czogT3B0aW9ucyA9IHt9LFxuKTogc3RyaW5nIHtcbiAgY29uc3Qgc2hvdWxkSGlnaGxpZ2h0ID1cbiAgICBvcHRzLmZvcmNlQ29sb3IgfHwgKGlzQ29sb3JTdXBwb3J0ZWQoKSAmJiBvcHRzLmhpZ2hsaWdodENvZGUpO1xuICBjb25zdCBzdGFydExpbmVCYXNlWmVybyA9IChvcHRzLnN0YXJ0TGluZSB8fCAxKSAtIDE7XG4gIGNvbnN0IGRlZnMgPSBnZXREZWZzKHNob3VsZEhpZ2hsaWdodCk7XG5cbiAgY29uc3QgbGluZXMgPSByYXdMaW5lcy5zcGxpdChORVdMSU5FKTtcbiAgY29uc3QgeyBzdGFydCwgZW5kLCBtYXJrZXJMaW5lcyB9ID0gZ2V0TWFya2VyTGluZXMoXG4gICAgbG9jLFxuICAgIGxpbmVzLFxuICAgIG9wdHMsXG4gICAgc3RhcnRMaW5lQmFzZVplcm8sXG4gICk7XG4gIGNvbnN0IGhhc0NvbHVtbnMgPSBsb2Muc3RhcnQgJiYgdHlwZW9mIGxvYy5zdGFydC5jb2x1bW4gPT09IFwibnVtYmVyXCI7XG5cbiAgY29uc3QgbnVtYmVyTWF4V2lkdGggPSBTdHJpbmcoZW5kICsgc3RhcnRMaW5lQmFzZVplcm8pLmxlbmd0aDtcblxuICBjb25zdCBoaWdobGlnaHRlZExpbmVzID0gc2hvdWxkSGlnaGxpZ2h0ID8gaGlnaGxpZ2h0KHJhd0xpbmVzKSA6IHJhd0xpbmVzO1xuXG4gIGxldCBmcmFtZSA9IGhpZ2hsaWdodGVkTGluZXNcbiAgICAuc3BsaXQoTkVXTElORSwgZW5kKVxuICAgIC5zbGljZShzdGFydCwgZW5kKVxuICAgIC5tYXAoKGxpbmUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBudW1iZXIgPSBzdGFydCArIDEgKyBpbmRleDtcbiAgICAgIGNvbnN0IHBhZGRlZE51bWJlciA9IGAgJHtudW1iZXIgKyBzdGFydExpbmVCYXNlWmVyb31gLnNsaWNlKFxuICAgICAgICAtbnVtYmVyTWF4V2lkdGgsXG4gICAgICApO1xuICAgICAgY29uc3QgZ3V0dGVyID0gYCAke3BhZGRlZE51bWJlcn0gfGA7XG4gICAgICBjb25zdCBoYXNNYXJrZXIgPSBtYXJrZXJMaW5lc1tudW1iZXJdO1xuICAgICAgY29uc3QgbGFzdE1hcmtlckxpbmUgPSAhbWFya2VyTGluZXNbbnVtYmVyICsgMV07XG4gICAgICBpZiAoaGFzTWFya2VyKSB7XG4gICAgICAgIGxldCBtYXJrZXJMaW5lID0gXCJcIjtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaGFzTWFya2VyKSkge1xuICAgICAgICAgIGNvbnN0IG1hcmtlclNwYWNpbmcgPSBsaW5lXG4gICAgICAgICAgICAuc2xpY2UoMCwgTWF0aC5tYXgoaGFzTWFya2VyWzBdIC0gMSwgMCkpXG4gICAgICAgICAgICAucmVwbGFjZSgvW15cXHRdL2csIFwiIFwiKTtcbiAgICAgICAgICBjb25zdCBudW1iZXJPZk1hcmtlcnMgPSBoYXNNYXJrZXJbMV0gfHwgMTtcblxuICAgICAgICAgIG1hcmtlckxpbmUgPSBbXG4gICAgICAgICAgICBcIlxcbiBcIixcbiAgICAgICAgICAgIGRlZnMuZ3V0dGVyKGd1dHRlci5yZXBsYWNlKC9cXGQvZywgXCIgXCIpKSxcbiAgICAgICAgICAgIFwiIFwiLFxuICAgICAgICAgICAgbWFya2VyU3BhY2luZyxcbiAgICAgICAgICAgIGRlZnMubWFya2VyKFwiXlwiKS5yZXBlYXQobnVtYmVyT2ZNYXJrZXJzKSxcbiAgICAgICAgICBdLmpvaW4oXCJcIik7XG5cbiAgICAgICAgICBpZiAobGFzdE1hcmtlckxpbmUgJiYgb3B0cy5tZXNzYWdlKSB7XG4gICAgICAgICAgICBtYXJrZXJMaW5lICs9IFwiIFwiICsgZGVmcy5tZXNzYWdlKG9wdHMubWVzc2FnZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgZGVmcy5tYXJrZXIoXCI+XCIpLFxuICAgICAgICAgIGRlZnMuZ3V0dGVyKGd1dHRlciksXG4gICAgICAgICAgbGluZS5sZW5ndGggPiAwID8gYCAke2xpbmV9YCA6IFwiXCIsXG4gICAgICAgICAgbWFya2VyTGluZSxcbiAgICAgICAgXS5qb2luKFwiXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAgJHtkZWZzLmd1dHRlcihndXR0ZXIpfSR7bGluZS5sZW5ndGggPiAwID8gYCAke2xpbmV9YCA6IFwiXCJ9YDtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKFwiXFxuXCIpO1xuXG4gIGlmIChvcHRzLm1lc3NhZ2UgJiYgIWhhc0NvbHVtbnMpIHtcbiAgICBmcmFtZSA9IGAke1wiIFwiLnJlcGVhdChudW1iZXJNYXhXaWR0aCArIDEpfSR7b3B0cy5tZXNzYWdlfVxcbiR7ZnJhbWV9YDtcbiAgfVxuXG4gIGlmIChzaG91bGRIaWdobGlnaHQpIHtcbiAgICByZXR1cm4gZGVmcy5yZXNldChmcmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgY29kZSBmcmFtZSwgYWRkaW5nIGxpbmUgbnVtYmVycywgY29kZSBoaWdobGlnaHRpbmcsIGFuZCBwb2ludGluZyB0byBhIGdpdmVuIHBvc2l0aW9uLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChcbiAgcmF3TGluZXM6IHN0cmluZyxcbiAgbGluZU51bWJlcjogbnVtYmVyLFxuICBjb2xOdW1iZXI/OiBudW1iZXIgfCBudWxsLFxuICBvcHRzOiBPcHRpb25zID0ge30sXG4pOiBzdHJpbmcge1xuICBpZiAoIWRlcHJlY2F0aW9uV2FybmluZ1Nob3duKSB7XG4gICAgZGVwcmVjYXRpb25XYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICBcIlBhc3NpbmcgbGluZU51bWJlciBhbmQgY29sTnVtYmVyIGlzIGRlcHJlY2F0ZWQgdG8gQGJhYmVsL2NvZGUtZnJhbWUuIFBsZWFzZSB1c2UgYGNvZGVGcmFtZUNvbHVtbnNgLlwiO1xuXG4gICAgaWYgKHByb2Nlc3MuZW1pdFdhcm5pbmcpIHtcbiAgICAgIC8vIEEgc3RyaW5nIGlzIGRpcmVjdGx5IHN1cHBsaWVkIHRvIGVtaXRXYXJuaW5nLCBiZWNhdXNlIHdoZW4gc3VwcGx5aW5nIGFuXG4gICAgICAvLyBFcnJvciBvYmplY3Qgbm9kZSB0aHJvd3MgaW4gdGhlIHRlc3RzIGJlY2F1c2Ugb2YgZGlmZmVyZW50IGNvbnRleHRzXG4gICAgICBwcm9jZXNzLmVtaXRXYXJuaW5nKG1lc3NhZ2UsIFwiRGVwcmVjYXRpb25XYXJuaW5nXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkZXByZWNhdGlvbkVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgZGVwcmVjYXRpb25FcnJvci5uYW1lID0gXCJEZXByZWNhdGlvbldhcm5pbmdcIjtcbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IobWVzc2FnZSkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbE51bWJlciA9IE1hdGgubWF4KGNvbE51bWJlciwgMCk7XG5cbiAgY29uc3QgbG9jYXRpb246IE5vZGVMb2NhdGlvbiA9IHtcbiAgICBzdGFydDogeyBjb2x1bW46IGNvbE51bWJlciwgbGluZTogbGluZU51bWJlciB9LFxuICB9O1xuXG4gIHJldHVybiBjb2RlRnJhbWVDb2x1bW5zKHJhd0xpbmVzLCBsb2NhdGlvbiwgb3B0cyk7XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuY29uc3QgZXJyb3JFeCA9IHJlcXVpcmUoJ2Vycm9yLWV4Jyk7XG5jb25zdCBmYWxsYmFjayA9IHJlcXVpcmUoJ2pzb24tcGFyc2UtZXZlbi1iZXR0ZXItZXJyb3JzJyk7XG5jb25zdCB7ZGVmYXVsdDogTGluZXNBbmRDb2x1bW5zfSA9IHJlcXVpcmUoJ2xpbmVzLWFuZC1jb2x1bW5zJyk7XG5jb25zdCB7Y29kZUZyYW1lQ29sdW1uc30gPSByZXF1aXJlKCdAYmFiZWwvY29kZS1mcmFtZScpO1xuXG5jb25zdCBKU09ORXJyb3IgPSBlcnJvckV4KCdKU09ORXJyb3InLCB7XG5cdGZpbGVOYW1lOiBlcnJvckV4LmFwcGVuZCgnaW4gJXMnKSxcblx0Y29kZUZyYW1lOiBlcnJvckV4LmFwcGVuZCgnXFxuXFxuJXNcXG4nKVxufSk7XG5cbmNvbnN0IHBhcnNlSnNvbiA9IChzdHJpbmcsIHJldml2ZXIsIGZpbGVuYW1lKSA9PiB7XG5cdGlmICh0eXBlb2YgcmV2aXZlciA9PT0gJ3N0cmluZycpIHtcblx0XHRmaWxlbmFtZSA9IHJldml2ZXI7XG5cdFx0cmV2aXZlciA9IG51bGw7XG5cdH1cblxuXHR0cnkge1xuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gSlNPTi5wYXJzZShzdHJpbmcsIHJldml2ZXIpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRmYWxsYmFjayhzdHJpbmcsIHJldml2ZXIpO1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGVycm9yLm1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlLnJlcGxhY2UoL1xcbi9nLCAnJyk7XG5cdFx0Y29uc3QgaW5kZXhNYXRjaCA9IGVycm9yLm1lc3NhZ2UubWF0Y2goL2luIEpTT04gYXQgcG9zaXRpb24gKFxcZCspIHdoaWxlIHBhcnNpbmcvKTtcblxuXHRcdGNvbnN0IGpzb25FcnJvciA9IG5ldyBKU09ORXJyb3IoZXJyb3IpO1xuXHRcdGlmIChmaWxlbmFtZSkge1xuXHRcdFx0anNvbkVycm9yLmZpbGVOYW1lID0gZmlsZW5hbWU7XG5cdFx0fVxuXG5cdFx0aWYgKGluZGV4TWF0Y2ggJiYgaW5kZXhNYXRjaC5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb25zdCBsaW5lcyA9IG5ldyBMaW5lc0FuZENvbHVtbnMoc3RyaW5nKTtcblx0XHRcdGNvbnN0IGluZGV4ID0gTnVtYmVyKGluZGV4TWF0Y2hbMV0pO1xuXHRcdFx0Y29uc3QgbG9jYXRpb24gPSBsaW5lcy5sb2NhdGlvbkZvckluZGV4KGluZGV4KTtcblxuXHRcdFx0Y29uc3QgY29kZUZyYW1lID0gY29kZUZyYW1lQ29sdW1ucyhcblx0XHRcdFx0c3RyaW5nLFxuXHRcdFx0XHR7c3RhcnQ6IHtsaW5lOiBsb2NhdGlvbi5saW5lICsgMSwgY29sdW1uOiBsb2NhdGlvbi5jb2x1bW4gKyAxfX0sXG5cdFx0XHRcdHtoaWdobGlnaHRDb2RlOiB0cnVlfVxuXHRcdFx0KTtcblxuXHRcdFx0anNvbkVycm9yLmNvZGVGcmFtZSA9IGNvZGVGcmFtZTtcblx0XHR9XG5cblx0XHR0aHJvdyBqc29uRXJyb3I7XG5cdH1cbn07XG5cbnBhcnNlSnNvbi5KU09ORXJyb3IgPSBKU09ORXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VKc29uO1xuIiwgImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IFNlbVZlclxuXG52YXIgZGVidWdcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5pZiAodHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnICYmXG4gICAgcHJvY2Vzcy5lbnYgJiZcbiAgICBwcm9jZXNzLmVudi5OT0RFX0RFQlVHICYmXG4gICAgL1xcYnNlbXZlclxcYi9pLnRlc3QocHJvY2Vzcy5lbnYuTk9ERV9ERUJVRykpIHtcbiAgZGVidWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApXG4gICAgYXJncy51bnNoaWZ0KCdTRU1WRVInKVxuICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpXG4gIH1cbn0gZWxzZSB7XG4gIGRlYnVnID0gZnVuY3Rpb24gKCkge31cbn1cblxuLy8gTm90ZTogdGhpcyBpcyB0aGUgc2VtdmVyLm9yZyB2ZXJzaW9uIG9mIHRoZSBzcGVjIHRoYXQgaXQgaW1wbGVtZW50c1xuLy8gTm90IG5lY2Vzc2FyaWx5IHRoZSBwYWNrYWdlIHZlcnNpb24gb2YgdGhpcyBjb2RlLlxuZXhwb3J0cy5TRU1WRVJfU1BFQ19WRVJTSU9OID0gJzIuMC4wJ1xuXG52YXIgTUFYX0xFTkdUSCA9IDI1NlxudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiB8fFxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyA5MDA3MTk5MjU0NzQwOTkxXG5cbi8vIE1heCBzYWZlIHNlZ21lbnQgbGVuZ3RoIGZvciBjb2VyY2lvbi5cbnZhciBNQVhfU0FGRV9DT01QT05FTlRfTEVOR1RIID0gMTZcblxudmFyIE1BWF9TQUZFX0JVSUxEX0xFTkdUSCA9IE1BWF9MRU5HVEggLSA2XG5cbi8vIFRoZSBhY3R1YWwgcmVnZXhwcyBnbyBvbiBleHBvcnRzLnJlXG52YXIgcmUgPSBleHBvcnRzLnJlID0gW11cbnZhciBzYWZlUmUgPSBleHBvcnRzLnNhZmVSZSA9IFtdXG52YXIgc3JjID0gZXhwb3J0cy5zcmMgPSBbXVxudmFyIFIgPSAwXG5cbnZhciBMRVRURVJEQVNITlVNQkVSID0gJ1thLXpBLVowLTktXSdcblxuLy8gUmVwbGFjZSBzb21lIGdyZWVkeSByZWdleCB0b2tlbnMgdG8gcHJldmVudCByZWdleCBkb3MgaXNzdWVzLiBUaGVzZSByZWdleCBhcmVcbi8vIHVzZWQgaW50ZXJuYWxseSB2aWEgdGhlIHNhZmVSZSBvYmplY3Qgc2luY2UgYWxsIGlucHV0cyBpbiB0aGlzIGxpYnJhcnkgZ2V0XG4vLyBub3JtYWxpemVkIGZpcnN0IHRvIHRyaW0gYW5kIGNvbGxhcHNlIGFsbCBleHRyYSB3aGl0ZXNwYWNlLiBUaGUgb3JpZ2luYWxcbi8vIHJlZ2V4ZXMgYXJlIGV4cG9ydGVkIGZvciB1c2VybGFuZCBjb25zdW1wdGlvbiBhbmQgbG93ZXIgbGV2ZWwgdXNhZ2UuIEFcbi8vIGZ1dHVyZSBicmVha2luZyBjaGFuZ2UgY291bGQgZXhwb3J0IHRoZSBzYWZlciByZWdleCBvbmx5IHdpdGggYSBub3RlIHRoYXRcbi8vIGFsbCBpbnB1dCBzaG91bGQgaGF2ZSBleHRyYSB3aGl0ZXNwYWNlIHJlbW92ZWQuXG52YXIgc2FmZVJlZ2V4UmVwbGFjZW1lbnRzID0gW1xuICBbJ1xcXFxzJywgMV0sXG4gIFsnXFxcXGQnLCBNQVhfTEVOR1RIXSxcbiAgW0xFVFRFUkRBU0hOVU1CRVIsIE1BWF9TQUZFX0JVSUxEX0xFTkdUSF0sXG5dXG5cbmZ1bmN0aW9uIG1ha2VTYWZlUmUgKHZhbHVlKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2FmZVJlZ2V4UmVwbGFjZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHRva2VuID0gc2FmZVJlZ2V4UmVwbGFjZW1lbnRzW2ldWzBdXG4gICAgdmFyIG1heCA9IHNhZmVSZWdleFJlcGxhY2VtZW50c1tpXVsxXVxuICAgIHZhbHVlID0gdmFsdWVcbiAgICAgIC5zcGxpdCh0b2tlbiArICcqJykuam9pbih0b2tlbiArICd7MCwnICsgbWF4ICsgJ30nKVxuICAgICAgLnNwbGl0KHRva2VuICsgJysnKS5qb2luKHRva2VuICsgJ3sxLCcgKyBtYXggKyAnfScpXG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbi8vIFRoZSBmb2xsb3dpbmcgUmVndWxhciBFeHByZXNzaW9ucyBjYW4gYmUgdXNlZCBmb3IgdG9rZW5pemluZyxcbi8vIHZhbGlkYXRpbmcsIGFuZCBwYXJzaW5nIFNlbVZlciB2ZXJzaW9uIHN0cmluZ3MuXG5cbi8vICMjIE51bWVyaWMgSWRlbnRpZmllclxuLy8gQSBzaW5nbGUgYDBgLCBvciBhIG5vbi16ZXJvIGRpZ2l0IGZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBkaWdpdHMuXG5cbnZhciBOVU1FUklDSURFTlRJRklFUiA9IFIrK1xuc3JjW05VTUVSSUNJREVOVElGSUVSXSA9ICcwfFsxLTldXFxcXGQqJ1xudmFyIE5VTUVSSUNJREVOVElGSUVSTE9PU0UgPSBSKytcbnNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSA9ICdcXFxcZCsnXG5cbi8vICMjIE5vbi1udW1lcmljIElkZW50aWZpZXJcbi8vIFplcm8gb3IgbW9yZSBkaWdpdHMsIGZvbGxvd2VkIGJ5IGEgbGV0dGVyIG9yIGh5cGhlbiwgYW5kIHRoZW4gemVybyBvclxuLy8gbW9yZSBsZXR0ZXJzLCBkaWdpdHMsIG9yIGh5cGhlbnMuXG5cbnZhciBOT05OVU1FUklDSURFTlRJRklFUiA9IFIrK1xuc3JjW05PTk5VTUVSSUNJREVOVElGSUVSXSA9ICdcXFxcZCpbYS16QS1aLV0nICsgTEVUVEVSREFTSE5VTUJFUiArICcqJ1xuXG4vLyAjIyBNYWluIFZlcnNpb25cbi8vIFRocmVlIGRvdC1zZXBhcmF0ZWQgbnVtZXJpYyBpZGVudGlmaWVycy5cblxudmFyIE1BSU5WRVJTSU9OID0gUisrXG5zcmNbTUFJTlZFUlNJT05dID0gJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArICcpXFxcXC4nICtcbiAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gKyAnKSdcblxudmFyIE1BSU5WRVJTSU9OTE9PU0UgPSBSKytcbnNyY1tNQUlOVkVSU0lPTkxPT1NFXSA9ICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArICcpXFxcXC4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArICcpXFxcXC4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArICcpJ1xuXG4vLyAjIyBQcmUtcmVsZWFzZSBWZXJzaW9uIElkZW50aWZpZXJcbi8vIEEgbnVtZXJpYyBpZGVudGlmaWVyLCBvciBhIG5vbi1udW1lcmljIGlkZW50aWZpZXIuXG5cbnZhciBQUkVSRUxFQVNFSURFTlRJRklFUiA9IFIrK1xuc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSXSA9ICcoPzonICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3wnICsgc3JjW05PTk5VTUVSSUNJREVOVElGSUVSXSArICcpJ1xuXG52YXIgUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRSA9IFIrK1xuc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdID0gJyg/OicgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3wnICsgc3JjW05PTk5VTUVSSUNJREVOVElGSUVSXSArICcpJ1xuXG4vLyAjIyBQcmUtcmVsZWFzZSBWZXJzaW9uXG4vLyBIeXBoZW4sIGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlIGRvdC1zZXBhcmF0ZWQgcHJlLXJlbGVhc2UgdmVyc2lvblxuLy8gaWRlbnRpZmllcnMuXG5cbnZhciBQUkVSRUxFQVNFID0gUisrXG5zcmNbUFJFUkVMRUFTRV0gPSAnKD86LSgnICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSXSArXG4gICAgICAgICAgICAgICAgICAnKD86XFxcXC4nICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSXSArICcpKikpJ1xuXG52YXIgUFJFUkVMRUFTRUxPT1NFID0gUisrXG5zcmNbUFJFUkVMRUFTRUxPT1NFXSA9ICcoPzotPygnICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdICtcbiAgICAgICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFXSArICcpKikpJ1xuXG4vLyAjIyBCdWlsZCBNZXRhZGF0YSBJZGVudGlmaWVyXG4vLyBBbnkgY29tYmluYXRpb24gb2YgZGlnaXRzLCBsZXR0ZXJzLCBvciBoeXBoZW5zLlxuXG52YXIgQlVJTERJREVOVElGSUVSID0gUisrXG5zcmNbQlVJTERJREVOVElGSUVSXSA9IExFVFRFUkRBU0hOVU1CRVIgKyAnKydcblxuLy8gIyMgQnVpbGQgTWV0YWRhdGFcbi8vIFBsdXMgc2lnbiwgZm9sbG93ZWQgYnkgb25lIG9yIG1vcmUgcGVyaW9kLXNlcGFyYXRlZCBidWlsZCBtZXRhZGF0YVxuLy8gaWRlbnRpZmllcnMuXG5cbnZhciBCVUlMRCA9IFIrK1xuc3JjW0JVSUxEXSA9ICcoPzpcXFxcKygnICsgc3JjW0JVSUxESURFTlRJRklFUl0gK1xuICAgICAgICAgICAgICcoPzpcXFxcLicgKyBzcmNbQlVJTERJREVOVElGSUVSXSArICcpKikpJ1xuXG4vLyAjIyBGdWxsIFZlcnNpb24gU3RyaW5nXG4vLyBBIG1haW4gdmVyc2lvbiwgZm9sbG93ZWQgb3B0aW9uYWxseSBieSBhIHByZS1yZWxlYXNlIHZlcnNpb24gYW5kXG4vLyBidWlsZCBtZXRhZGF0YS5cblxuLy8gTm90ZSB0aGF0IHRoZSBvbmx5IG1ham9yLCBtaW5vciwgcGF0Y2gsIGFuZCBwcmUtcmVsZWFzZSBzZWN0aW9ucyBvZlxuLy8gdGhlIHZlcnNpb24gc3RyaW5nIGFyZSBjYXB0dXJpbmcgZ3JvdXBzLiAgVGhlIGJ1aWxkIG1ldGFkYXRhIGlzIG5vdCBhXG4vLyBjYXB0dXJpbmcgZ3JvdXAsIGJlY2F1c2UgaXQgc2hvdWxkIG5vdCBldmVyIGJlIHVzZWQgaW4gdmVyc2lvblxuLy8gY29tcGFyaXNvbi5cblxudmFyIEZVTEwgPSBSKytcbnZhciBGVUxMUExBSU4gPSAndj8nICsgc3JjW01BSU5WRVJTSU9OXSArXG4gICAgICAgICAgICAgICAgc3JjW1BSRVJFTEVBU0VdICsgJz8nICtcbiAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nXG5cbnNyY1tGVUxMXSA9ICdeJyArIEZVTExQTEFJTiArICckJ1xuXG4vLyBsaWtlIGZ1bGwsIGJ1dCBhbGxvd3MgdjEuMi4zIGFuZCA9MS4yLjMsIHdoaWNoIHBlb3BsZSBkbyBzb21ldGltZXMuXG4vLyBhbHNvLCAxLjAuMGFscGhhMSAocHJlcmVsZWFzZSB3aXRob3V0IHRoZSBoeXBoZW4pIHdoaWNoIGlzIHByZXR0eVxuLy8gY29tbW9uIGluIHRoZSBucG0gcmVnaXN0cnkuXG52YXIgTE9PU0VQTEFJTiA9ICdbdj1cXFxcc10qJyArIHNyY1tNQUlOVkVSU0lPTkxPT1NFXSArXG4gICAgICAgICAgICAgICAgIHNyY1tQUkVSRUxFQVNFTE9PU0VdICsgJz8nICtcbiAgICAgICAgICAgICAgICAgc3JjW0JVSUxEXSArICc/J1xuXG52YXIgTE9PU0UgPSBSKytcbnNyY1tMT09TRV0gPSAnXicgKyBMT09TRVBMQUlOICsgJyQnXG5cbnZhciBHVExUID0gUisrXG5zcmNbR1RMVF0gPSAnKCg/Ojx8Pik/PT8pJ1xuXG4vLyBTb21ldGhpbmcgbGlrZSBcIjIuKlwiIG9yIFwiMS4yLnhcIi5cbi8vIE5vdGUgdGhhdCBcIngueFwiIGlzIGEgdmFsaWQgeFJhbmdlIGlkZW50aWZlciwgbWVhbmluZyBcImFueSB2ZXJzaW9uXCJcbi8vIE9ubHkgdGhlIGZpcnN0IGl0ZW0gaXMgc3RyaWN0bHkgcmVxdWlyZWQuXG52YXIgWFJBTkdFSURFTlRJRklFUkxPT1NFID0gUisrXG5zcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSA9IHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArICd8eHxYfFxcXFwqJ1xudmFyIFhSQU5HRUlERU5USUZJRVIgPSBSKytcbnNyY1tYUkFOR0VJREVOVElGSUVSXSA9IHNyY1tOVU1FUklDSURFTlRJRklFUl0gKyAnfHh8WHxcXFxcKidcblxudmFyIFhSQU5HRVBMQUlOID0gUisrXG5zcmNbWFJBTkdFUExBSU5dID0gJ1t2PVxcXFxzXSooJyArIHNyY1tYUkFOR0VJREVOVElGSUVSXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnKD86JyArIHNyY1tQUkVSRUxFQVNFXSArICcpPycgK1xuICAgICAgICAgICAgICAgICAgIHNyY1tCVUlMRF0gKyAnPycgK1xuICAgICAgICAgICAgICAgICAgICcpPyk/J1xuXG52YXIgWFJBTkdFUExBSU5MT09TRSA9IFIrK1xuc3JjW1hSQU5HRVBMQUlOTE9PU0VdID0gJ1t2PVxcXFxzXSooJyArIHNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJMT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKD86JyArIHNyY1tQUkVSRUxFQVNFTE9PU0VdICsgJyk/JyArXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcpPyk/J1xuXG52YXIgWFJBTkdFID0gUisrXG5zcmNbWFJBTkdFXSA9ICdeJyArIHNyY1tHVExUXSArICdcXFxccyonICsgc3JjW1hSQU5HRVBMQUlOXSArICckJ1xudmFyIFhSQU5HRUxPT1NFID0gUisrXG5zcmNbWFJBTkdFTE9PU0VdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKicgKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnJCdcblxuLy8gQ29lcmNpb24uXG4vLyBFeHRyYWN0IGFueXRoaW5nIHRoYXQgY291bGQgY29uY2VpdmFibHkgYmUgYSBwYXJ0IG9mIGEgdmFsaWQgc2VtdmVyXG52YXIgQ09FUkNFID0gUisrXG5zcmNbQ09FUkNFXSA9ICcoPzpefFteXFxcXGRdKScgK1xuICAgICAgICAgICAgICAnKFxcXFxkezEsJyArIE1BWF9TQUZFX0NPTVBPTkVOVF9MRU5HVEggKyAnfSknICtcbiAgICAgICAgICAgICAgJyg/OlxcXFwuKFxcXFxkezEsJyArIE1BWF9TQUZFX0NPTVBPTkVOVF9MRU5HVEggKyAnfSkpPycgK1xuICAgICAgICAgICAgICAnKD86XFxcXC4oXFxcXGR7MSwnICsgTUFYX1NBRkVfQ09NUE9ORU5UX0xFTkdUSCArICd9KSk/JyArXG4gICAgICAgICAgICAgICcoPzokfFteXFxcXGRdKSdcblxuLy8gVGlsZGUgcmFuZ2VzLlxuLy8gTWVhbmluZyBpcyBcInJlYXNvbmFibHkgYXQgb3IgZ3JlYXRlciB0aGFuXCJcbnZhciBMT05FVElMREUgPSBSKytcbnNyY1tMT05FVElMREVdID0gJyg/On4+PyknXG5cbnZhciBUSUxERVRSSU0gPSBSKytcbnNyY1tUSUxERVRSSU1dID0gJyhcXFxccyopJyArIHNyY1tMT05FVElMREVdICsgJ1xcXFxzKydcbnJlW1RJTERFVFJJTV0gPSBuZXcgUmVnRXhwKHNyY1tUSUxERVRSSU1dLCAnZycpXG5zYWZlUmVbVElMREVUUklNXSA9IG5ldyBSZWdFeHAobWFrZVNhZmVSZShzcmNbVElMREVUUklNXSksICdnJylcbnZhciB0aWxkZVRyaW1SZXBsYWNlID0gJyQxfidcblxudmFyIFRJTERFID0gUisrXG5zcmNbVElMREVdID0gJ14nICsgc3JjW0xPTkVUSUxERV0gKyBzcmNbWFJBTkdFUExBSU5dICsgJyQnXG52YXIgVElMREVMT09TRSA9IFIrK1xuc3JjW1RJTERFTE9PU0VdID0gJ14nICsgc3JjW0xPTkVUSUxERV0gKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnJCdcblxuLy8gQ2FyZXQgcmFuZ2VzLlxuLy8gTWVhbmluZyBpcyBcImF0IGxlYXN0IGFuZCBiYWNrd2FyZHMgY29tcGF0aWJsZSB3aXRoXCJcbnZhciBMT05FQ0FSRVQgPSBSKytcbnNyY1tMT05FQ0FSRVRdID0gJyg/OlxcXFxeKSdcblxudmFyIENBUkVUVFJJTSA9IFIrK1xuc3JjW0NBUkVUVFJJTV0gPSAnKFxcXFxzKiknICsgc3JjW0xPTkVDQVJFVF0gKyAnXFxcXHMrJ1xucmVbQ0FSRVRUUklNXSA9IG5ldyBSZWdFeHAoc3JjW0NBUkVUVFJJTV0sICdnJylcbnNhZmVSZVtDQVJFVFRSSU1dID0gbmV3IFJlZ0V4cChtYWtlU2FmZVJlKHNyY1tDQVJFVFRSSU1dKSwgJ2cnKVxudmFyIGNhcmV0VHJpbVJlcGxhY2UgPSAnJDFeJ1xuXG52YXIgQ0FSRVQgPSBSKytcbnNyY1tDQVJFVF0gPSAnXicgKyBzcmNbTE9ORUNBUkVUXSArIHNyY1tYUkFOR0VQTEFJTl0gKyAnJCdcbnZhciBDQVJFVExPT1NFID0gUisrXG5zcmNbQ0FSRVRMT09TRV0gPSAnXicgKyBzcmNbTE9ORUNBUkVUXSArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICckJ1xuXG4vLyBBIHNpbXBsZSBndC9sdC9lcSB0aGluZywgb3IganVzdCBcIlwiIHRvIGluZGljYXRlIFwiYW55IHZlcnNpb25cIlxudmFyIENPTVBBUkFUT1JMT09TRSA9IFIrK1xuc3JjW0NPTVBBUkFUT1JMT09TRV0gPSAnXicgKyBzcmNbR1RMVF0gKyAnXFxcXHMqKCcgKyBMT09TRVBMQUlOICsgJykkfF4kJ1xudmFyIENPTVBBUkFUT1IgPSBSKytcbnNyY1tDT01QQVJBVE9SXSA9ICdeJyArIHNyY1tHVExUXSArICdcXFxccyooJyArIEZVTExQTEFJTiArICcpJHxeJCdcblxuLy8gQW4gZXhwcmVzc2lvbiB0byBzdHJpcCBhbnkgd2hpdGVzcGFjZSBiZXR3ZWVuIHRoZSBndGx0IGFuZCB0aGUgdGhpbmdcbi8vIGl0IG1vZGlmaWVzLCBzbyB0aGF0IGA+IDEuMi4zYCA9PT4gYD4xLjIuM2BcbnZhciBDT01QQVJBVE9SVFJJTSA9IFIrK1xuc3JjW0NPTVBBUkFUT1JUUklNXSA9ICcoXFxcXHMqKScgKyBzcmNbR1RMVF0gK1xuICAgICAgICAgICAgICAgICAgICAgICdcXFxccyooJyArIExPT1NFUExBSU4gKyAnfCcgKyBzcmNbWFJBTkdFUExBSU5dICsgJyknXG5cbi8vIHRoaXMgb25lIGhhcyB0byB1c2UgdGhlIC9nIGZsYWdcbnJlW0NPTVBBUkFUT1JUUklNXSA9IG5ldyBSZWdFeHAoc3JjW0NPTVBBUkFUT1JUUklNXSwgJ2cnKVxuc2FmZVJlW0NPTVBBUkFUT1JUUklNXSA9IG5ldyBSZWdFeHAobWFrZVNhZmVSZShzcmNbQ09NUEFSQVRPUlRSSU1dKSwgJ2cnKVxudmFyIGNvbXBhcmF0b3JUcmltUmVwbGFjZSA9ICckMSQyJDMnXG5cbi8vIFNvbWV0aGluZyBsaWtlIGAxLjIuMyAtIDEuMi40YFxuLy8gTm90ZSB0aGF0IHRoZXNlIGFsbCB1c2UgdGhlIGxvb3NlIGZvcm0sIGJlY2F1c2UgdGhleSdsbCBiZVxuLy8gY2hlY2tlZCBhZ2FpbnN0IGVpdGhlciB0aGUgc3RyaWN0IG9yIGxvb3NlIGNvbXBhcmF0b3IgZm9ybVxuLy8gbGF0ZXIuXG52YXIgSFlQSEVOUkFOR0UgPSBSKytcbnNyY1tIWVBIRU5SQU5HRV0gPSAnXlxcXFxzKignICsgc3JjW1hSQU5HRVBMQUlOXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJ1xcXFxzKy1cXFxccysnICtcbiAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbWFJBTkdFUExBSU5dICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnXFxcXHMqJCdcblxudmFyIEhZUEhFTlJBTkdFTE9PU0UgPSBSKytcbnNyY1tIWVBIRU5SQU5HRUxPT1NFXSA9ICdeXFxcXHMqKCcgKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1xcXFxzKy1cXFxccysnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnXFxcXHMqJCdcblxuLy8gU3RhciByYW5nZXMgYmFzaWNhbGx5IGp1c3QgYWxsb3cgYW55dGhpbmcgYXQgYWxsLlxudmFyIFNUQVIgPSBSKytcbnNyY1tTVEFSXSA9ICcoPHw+KT89P1xcXFxzKlxcXFwqJ1xuXG4vLyBDb21waWxlIHRvIGFjdHVhbCByZWdleHAgb2JqZWN0cy5cbi8vIEFsbCBhcmUgZmxhZy1mcmVlLCB1bmxlc3MgdGhleSB3ZXJlIGNyZWF0ZWQgYWJvdmUgd2l0aCBhIGZsYWcuXG5mb3IgKHZhciBpID0gMDsgaSA8IFI7IGkrKykge1xuICBkZWJ1ZyhpLCBzcmNbaV0pXG4gIGlmICghcmVbaV0pIHtcbiAgICByZVtpXSA9IG5ldyBSZWdFeHAoc3JjW2ldKVxuXG4gICAgLy8gUmVwbGFjZSBhbGwgZ3JlZWR5IHdoaXRlc3BhY2UgdG8gcHJldmVudCByZWdleCBkb3MgaXNzdWVzLiBUaGVzZSByZWdleCBhcmVcbiAgICAvLyB1c2VkIGludGVybmFsbHkgdmlhIHRoZSBzYWZlUmUgb2JqZWN0IHNpbmNlIGFsbCBpbnB1dHMgaW4gdGhpcyBsaWJyYXJ5IGdldFxuICAgIC8vIG5vcm1hbGl6ZWQgZmlyc3QgdG8gdHJpbSBhbmQgY29sbGFwc2UgYWxsIGV4dHJhIHdoaXRlc3BhY2UuIFRoZSBvcmlnaW5hbFxuICAgIC8vIHJlZ2V4ZXMgYXJlIGV4cG9ydGVkIGZvciB1c2VybGFuZCBjb25zdW1wdGlvbiBhbmQgbG93ZXIgbGV2ZWwgdXNhZ2UuIEFcbiAgICAvLyBmdXR1cmUgYnJlYWtpbmcgY2hhbmdlIGNvdWxkIGV4cG9ydCB0aGUgc2FmZXIgcmVnZXggb25seSB3aXRoIGEgbm90ZSB0aGF0XG4gICAgLy8gYWxsIGlucHV0IHNob3VsZCBoYXZlIGV4dHJhIHdoaXRlc3BhY2UgcmVtb3ZlZC5cbiAgICBzYWZlUmVbaV0gPSBuZXcgUmVnRXhwKG1ha2VTYWZlUmUoc3JjW2ldKSlcbiAgfVxufVxuXG5leHBvcnRzLnBhcnNlID0gcGFyc2VcbmZ1bmN0aW9uIHBhcnNlICh2ZXJzaW9uLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucyB8fCB0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgbG9vc2U6ICEhb3B0aW9ucyxcbiAgICAgIGluY2x1ZGVQcmVyZWxlYXNlOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGlmICh2ZXJzaW9uIGluc3RhbmNlb2YgU2VtVmVyKSB7XG4gICAgcmV0dXJuIHZlcnNpb25cbiAgfVxuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgaWYgKHZlcnNpb24ubGVuZ3RoID4gTUFYX0xFTkdUSCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICB2YXIgciA9IG9wdGlvbnMubG9vc2UgPyBzYWZlUmVbTE9PU0VdIDogc2FmZVJlW0ZVTExdXG4gIGlmICghci50ZXN0KHZlcnNpb24pKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBTZW1WZXIodmVyc2lvbiwgb3B0aW9ucylcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydHMudmFsaWQgPSB2YWxpZFxuZnVuY3Rpb24gdmFsaWQgKHZlcnNpb24sIG9wdGlvbnMpIHtcbiAgdmFyIHYgPSBwYXJzZSh2ZXJzaW9uLCBvcHRpb25zKVxuICByZXR1cm4gdiA/IHYudmVyc2lvbiA6IG51bGxcbn1cblxuZXhwb3J0cy5jbGVhbiA9IGNsZWFuXG5mdW5jdGlvbiBjbGVhbiAodmVyc2lvbiwgb3B0aW9ucykge1xuICB2YXIgcyA9IHBhcnNlKHZlcnNpb24udHJpbSgpLnJlcGxhY2UoL15bPXZdKy8sICcnKSwgb3B0aW9ucylcbiAgcmV0dXJuIHMgPyBzLnZlcnNpb24gOiBudWxsXG59XG5cbmV4cG9ydHMuU2VtVmVyID0gU2VtVmVyXG5cbmZ1bmN0aW9uIFNlbVZlciAodmVyc2lvbiwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMgfHwgdHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XG4gICAgb3B0aW9ucyA9IHtcbiAgICAgIGxvb3NlOiAhIW9wdGlvbnMsXG4gICAgICBpbmNsdWRlUHJlcmVsZWFzZTogZmFsc2VcbiAgICB9XG4gIH1cbiAgaWYgKHZlcnNpb24gaW5zdGFuY2VvZiBTZW1WZXIpIHtcbiAgICBpZiAodmVyc2lvbi5sb29zZSA9PT0gb3B0aW9ucy5sb29zZSkge1xuICAgICAgcmV0dXJuIHZlcnNpb25cbiAgICB9IGVsc2Uge1xuICAgICAgdmVyc2lvbiA9IHZlcnNpb24udmVyc2lvblxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIFZlcnNpb246ICcgKyB2ZXJzaW9uKVxuICB9XG5cbiAgaWYgKHZlcnNpb24ubGVuZ3RoID4gTUFYX0xFTkdUSCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZlcnNpb24gaXMgbG9uZ2VyIHRoYW4gJyArIE1BWF9MRU5HVEggKyAnIGNoYXJhY3RlcnMnKVxuICB9XG5cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFNlbVZlcikpIHtcbiAgICByZXR1cm4gbmV3IFNlbVZlcih2ZXJzaW9uLCBvcHRpb25zKVxuICB9XG5cbiAgZGVidWcoJ1NlbVZlcicsIHZlcnNpb24sIG9wdGlvbnMpXG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgdGhpcy5sb29zZSA9ICEhb3B0aW9ucy5sb29zZVxuXG4gIHZhciBtID0gdmVyc2lvbi50cmltKCkubWF0Y2gob3B0aW9ucy5sb29zZSA/IHNhZmVSZVtMT09TRV0gOiBzYWZlUmVbRlVMTF0pXG5cbiAgaWYgKCFtKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBWZXJzaW9uOiAnICsgdmVyc2lvbilcbiAgfVxuXG4gIHRoaXMucmF3ID0gdmVyc2lvblxuXG4gIC8vIHRoZXNlIGFyZSBhY3R1YWxseSBudW1iZXJzXG4gIHRoaXMubWFqb3IgPSArbVsxXVxuICB0aGlzLm1pbm9yID0gK21bMl1cbiAgdGhpcy5wYXRjaCA9ICttWzNdXG5cbiAgaWYgKHRoaXMubWFqb3IgPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMubWFqb3IgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBtYWpvciB2ZXJzaW9uJylcbiAgfVxuXG4gIGlmICh0aGlzLm1pbm9yID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLm1pbm9yIDwgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbWlub3IgdmVyc2lvbicpXG4gIH1cblxuICBpZiAodGhpcy5wYXRjaCA+IE1BWF9TQUZFX0lOVEVHRVIgfHwgdGhpcy5wYXRjaCA8IDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIHBhdGNoIHZlcnNpb24nKVxuICB9XG5cbiAgLy8gbnVtYmVyaWZ5IGFueSBwcmVyZWxlYXNlIG51bWVyaWMgaWRzXG4gIGlmICghbVs0XSkge1xuICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdXG4gIH0gZWxzZSB7XG4gICAgdGhpcy5wcmVyZWxlYXNlID0gbVs0XS5zcGxpdCgnLicpLm1hcChmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGlmICgvXlswLTldKyQvLnRlc3QoaWQpKSB7XG4gICAgICAgIHZhciBudW0gPSAraWRcbiAgICAgICAgaWYgKG51bSA+PSAwICYmIG51bSA8IE1BWF9TQUZFX0lOVEVHRVIpIHtcbiAgICAgICAgICByZXR1cm4gbnVtXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBpZFxuICAgIH0pXG4gIH1cblxuICB0aGlzLmJ1aWxkID0gbVs1XSA/IG1bNV0uc3BsaXQoJy4nKSA6IFtdXG4gIHRoaXMuZm9ybWF0KClcbn1cblxuU2VtVmVyLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMudmVyc2lvbiA9IHRoaXMubWFqb3IgKyAnLicgKyB0aGlzLm1pbm9yICsgJy4nICsgdGhpcy5wYXRjaFxuICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgIHRoaXMudmVyc2lvbiArPSAnLScgKyB0aGlzLnByZXJlbGVhc2Uuam9pbignLicpXG4gIH1cbiAgcmV0dXJuIHRoaXMudmVyc2lvblxufVxuXG5TZW1WZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy52ZXJzaW9uXG59XG5cblNlbVZlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uIChvdGhlcikge1xuICBkZWJ1ZygnU2VtVmVyLmNvbXBhcmUnLCB0aGlzLnZlcnNpb24sIHRoaXMub3B0aW9ucywgb3RoZXIpXG4gIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSkge1xuICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5vcHRpb25zKVxuICB9XG5cbiAgcmV0dXJuIHRoaXMuY29tcGFyZU1haW4ob3RoZXIpIHx8IHRoaXMuY29tcGFyZVByZShvdGhlcilcbn1cblxuU2VtVmVyLnByb3RvdHlwZS5jb21wYXJlTWFpbiA9IGZ1bmN0aW9uIChvdGhlcikge1xuICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpIHtcbiAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMub3B0aW9ucylcbiAgfVxuXG4gIHJldHVybiBjb21wYXJlSWRlbnRpZmllcnModGhpcy5tYWpvciwgb3RoZXIubWFqb3IpIHx8XG4gICAgICAgICBjb21wYXJlSWRlbnRpZmllcnModGhpcy5taW5vciwgb3RoZXIubWlub3IpIHx8XG4gICAgICAgICBjb21wYXJlSWRlbnRpZmllcnModGhpcy5wYXRjaCwgb3RoZXIucGF0Y2gpXG59XG5cblNlbVZlci5wcm90b3R5cGUuY29tcGFyZVByZSA9IGZ1bmN0aW9uIChvdGhlcikge1xuICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpIHtcbiAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMub3B0aW9ucylcbiAgfVxuXG4gIC8vIE5PVCBoYXZpbmcgYSBwcmVyZWxlYXNlIGlzID4gaGF2aW5nIG9uZVxuICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCAmJiAhb3RoZXIucHJlcmVsZWFzZS5sZW5ndGgpIHtcbiAgICByZXR1cm4gLTFcbiAgfSBlbHNlIGlmICghdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCAmJiBvdGhlci5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgIHJldHVybiAxXG4gIH0gZWxzZSBpZiAoIXRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgIW90aGVyLnByZXJlbGVhc2UubGVuZ3RoKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIHZhciBpID0gMFxuICBkbyB7XG4gICAgdmFyIGEgPSB0aGlzLnByZXJlbGVhc2VbaV1cbiAgICB2YXIgYiA9IG90aGVyLnByZXJlbGVhc2VbaV1cbiAgICBkZWJ1ZygncHJlcmVsZWFzZSBjb21wYXJlJywgaSwgYSwgYilcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkICYmIGIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIDBcbiAgICB9IGVsc2UgaWYgKGIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIDFcbiAgICB9IGVsc2UgaWYgKGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfSBlbHNlIGlmIChhID09PSBiKSB7XG4gICAgICBjb250aW51ZVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpXG4gICAgfVxuICB9IHdoaWxlICgrK2kpXG59XG5cbi8vIHByZW1pbm9yIHdpbGwgYnVtcCB0aGUgdmVyc2lvbiB1cCB0byB0aGUgbmV4dCBtaW5vciByZWxlYXNlLCBhbmQgaW1tZWRpYXRlbHlcbi8vIGRvd24gdG8gcHJlLXJlbGVhc2UuIHByZW1ham9yIGFuZCBwcmVwYXRjaCB3b3JrIHRoZSBzYW1lIHdheS5cblNlbVZlci5wcm90b3R5cGUuaW5jID0gZnVuY3Rpb24gKHJlbGVhc2UsIGlkZW50aWZpZXIpIHtcbiAgc3dpdGNoIChyZWxlYXNlKSB7XG4gICAgY2FzZSAncHJlbWFqb3InOlxuICAgICAgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9IDBcbiAgICAgIHRoaXMucGF0Y2ggPSAwXG4gICAgICB0aGlzLm1pbm9yID0gMFxuICAgICAgdGhpcy5tYWpvcisrXG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcilcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAncHJlbWlub3InOlxuICAgICAgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9IDBcbiAgICAgIHRoaXMucGF0Y2ggPSAwXG4gICAgICB0aGlzLm1pbm9yKytcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdwcmVwYXRjaCc6XG4gICAgICAvLyBJZiB0aGlzIGlzIGFscmVhZHkgYSBwcmVyZWxlYXNlLCBpdCB3aWxsIGJ1bXAgdG8gdGhlIG5leHQgdmVyc2lvblxuICAgICAgLy8gZHJvcCBhbnkgcHJlcmVsZWFzZXMgdGhhdCBtaWdodCBhbHJlYWR5IGV4aXN0LCBzaW5jZSB0aGV5IGFyZSBub3RcbiAgICAgIC8vIHJlbGV2YW50IGF0IHRoaXMgcG9pbnQuXG4gICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMFxuICAgICAgdGhpcy5pbmMoJ3BhdGNoJywgaWRlbnRpZmllcilcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKVxuICAgICAgYnJlYWtcbiAgICAvLyBJZiB0aGUgaW5wdXQgaXMgYSBub24tcHJlcmVsZWFzZSB2ZXJzaW9uLCB0aGlzIGFjdHMgdGhlIHNhbWUgYXNcbiAgICAvLyBwcmVwYXRjaC5cbiAgICBjYXNlICdwcmVyZWxlYXNlJzpcbiAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuaW5jKCdwYXRjaCcsIGlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcilcbiAgICAgIGJyZWFrXG5cbiAgICBjYXNlICdtYWpvcic6XG4gICAgICAvLyBJZiB0aGlzIGlzIGEgcHJlLW1ham9yIHZlcnNpb24sIGJ1bXAgdXAgdG8gdGhlIHNhbWUgbWFqb3IgdmVyc2lvbi5cbiAgICAgIC8vIE90aGVyd2lzZSBpbmNyZW1lbnQgbWFqb3IuXG4gICAgICAvLyAxLjAuMC01IGJ1bXBzIHRvIDEuMC4wXG4gICAgICAvLyAxLjEuMCBidW1wcyB0byAyLjAuMFxuICAgICAgaWYgKHRoaXMubWlub3IgIT09IDAgfHxcbiAgICAgICAgICB0aGlzLnBhdGNoICE9PSAwIHx8XG4gICAgICAgICAgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLm1ham9yKytcbiAgICAgIH1cbiAgICAgIHRoaXMubWlub3IgPSAwXG4gICAgICB0aGlzLnBhdGNoID0gMFxuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW11cbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnbWlub3InOlxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHByZS1taW5vciB2ZXJzaW9uLCBidW1wIHVwIHRvIHRoZSBzYW1lIG1pbm9yIHZlcnNpb24uXG4gICAgICAvLyBPdGhlcndpc2UgaW5jcmVtZW50IG1pbm9yLlxuICAgICAgLy8gMS4yLjAtNSBidW1wcyB0byAxLjIuMFxuICAgICAgLy8gMS4yLjEgYnVtcHMgdG8gMS4zLjBcbiAgICAgIGlmICh0aGlzLnBhdGNoICE9PSAwIHx8IHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5taW5vcisrXG4gICAgICB9XG4gICAgICB0aGlzLnBhdGNoID0gMFxuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW11cbiAgICAgIGJyZWFrXG4gICAgY2FzZSAncGF0Y2gnOlxuICAgICAgLy8gSWYgdGhpcyBpcyBub3QgYSBwcmUtcmVsZWFzZSB2ZXJzaW9uLCBpdCB3aWxsIGluY3JlbWVudCB0aGUgcGF0Y2guXG4gICAgICAvLyBJZiBpdCBpcyBhIHByZS1yZWxlYXNlIGl0IHdpbGwgYnVtcCB1cCB0byB0aGUgc2FtZSBwYXRjaCB2ZXJzaW9uLlxuICAgICAgLy8gMS4yLjAtNSBwYXRjaGVzIHRvIDEuMi4wXG4gICAgICAvLyAxLjIuMCBwYXRjaGVzIHRvIDEuMi4xXG4gICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLnBhdGNoKytcbiAgICAgIH1cbiAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdXG4gICAgICBicmVha1xuICAgIC8vIFRoaXMgcHJvYmFibHkgc2hvdWxkbid0IGJlIHVzZWQgcHVibGljbHkuXG4gICAgLy8gMS4wLjAgXCJwcmVcIiB3b3VsZCBiZWNvbWUgMS4wLjAtMCB3aGljaCBpcyB0aGUgd3JvbmcgZGlyZWN0aW9uLlxuICAgIGNhc2UgJ3ByZSc6XG4gICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbMF1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5wcmVyZWxlYXNlLmxlbmd0aFxuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJlcmVsZWFzZVtpXSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRoaXMucHJlcmVsZWFzZVtpXSsrXG4gICAgICAgICAgICBpID0gLTJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPT09IC0xKSB7XG4gICAgICAgICAgLy8gZGlkbid0IGluY3JlbWVudCBhbnl0aGluZ1xuICAgICAgICAgIHRoaXMucHJlcmVsZWFzZS5wdXNoKDApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpZGVudGlmaWVyKSB7XG4gICAgICAgIC8vIDEuMi4wLWJldGEuMSBidW1wcyB0byAxLjIuMC1iZXRhLjIsXG4gICAgICAgIC8vIDEuMi4wLWJldGEuZm9vYmx6IG9yIDEuMi4wLWJldGEgYnVtcHMgdG8gMS4yLjAtYmV0YS4wXG4gICAgICAgIGlmICh0aGlzLnByZXJlbGVhc2VbMF0gPT09IGlkZW50aWZpZXIpIHtcbiAgICAgICAgICBpZiAoaXNOYU4odGhpcy5wcmVyZWxlYXNlWzFdKSkge1xuICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW2lkZW50aWZpZXIsIDBdXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtpZGVudGlmaWVyLCAwXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBicmVha1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBpbmNyZW1lbnQgYXJndW1lbnQ6ICcgKyByZWxlYXNlKVxuICB9XG4gIHRoaXMuZm9ybWF0KClcbiAgdGhpcy5yYXcgPSB0aGlzLnZlcnNpb25cbiAgcmV0dXJuIHRoaXNcbn1cblxuZXhwb3J0cy5pbmMgPSBpbmNcbmZ1bmN0aW9uIGluYyAodmVyc2lvbiwgcmVsZWFzZSwgbG9vc2UsIGlkZW50aWZpZXIpIHtcbiAgaWYgKHR5cGVvZiAobG9vc2UpID09PSAnc3RyaW5nJykge1xuICAgIGlkZW50aWZpZXIgPSBsb29zZVxuICAgIGxvb3NlID0gdW5kZWZpbmVkXG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiBuZXcgU2VtVmVyKHZlcnNpb24sIGxvb3NlKS5pbmMocmVsZWFzZSwgaWRlbnRpZmllcikudmVyc2lvblxuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZXhwb3J0cy5kaWZmID0gZGlmZlxuZnVuY3Rpb24gZGlmZiAodmVyc2lvbjEsIHZlcnNpb24yKSB7XG4gIGlmIChlcSh2ZXJzaW9uMSwgdmVyc2lvbjIpKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfSBlbHNlIHtcbiAgICB2YXIgdjEgPSBwYXJzZSh2ZXJzaW9uMSlcbiAgICB2YXIgdjIgPSBwYXJzZSh2ZXJzaW9uMilcbiAgICB2YXIgcHJlZml4ID0gJydcbiAgICBpZiAodjEucHJlcmVsZWFzZS5sZW5ndGggfHwgdjIucHJlcmVsZWFzZS5sZW5ndGgpIHtcbiAgICAgIHByZWZpeCA9ICdwcmUnXG4gICAgICB2YXIgZGVmYXVsdFJlc3VsdCA9ICdwcmVyZWxlYXNlJ1xuICAgIH1cbiAgICBmb3IgKHZhciBrZXkgaW4gdjEpIHtcbiAgICAgIGlmIChrZXkgPT09ICdtYWpvcicgfHwga2V5ID09PSAnbWlub3InIHx8IGtleSA9PT0gJ3BhdGNoJykge1xuICAgICAgICBpZiAodjFba2V5XSAhPT0gdjJba2V5XSkge1xuICAgICAgICAgIHJldHVybiBwcmVmaXggKyBrZXlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdFJlc3VsdCAvLyBtYXkgYmUgdW5kZWZpbmVkXG4gIH1cbn1cblxuZXhwb3J0cy5jb21wYXJlSWRlbnRpZmllcnMgPSBjb21wYXJlSWRlbnRpZmllcnNcblxudmFyIG51bWVyaWMgPSAvXlswLTldKyQvXG5mdW5jdGlvbiBjb21wYXJlSWRlbnRpZmllcnMgKGEsIGIpIHtcbiAgdmFyIGFudW0gPSBudW1lcmljLnRlc3QoYSlcbiAgdmFyIGJudW0gPSBudW1lcmljLnRlc3QoYilcblxuICBpZiAoYW51bSAmJiBibnVtKSB7XG4gICAgYSA9ICthXG4gICAgYiA9ICtiXG4gIH1cblxuICByZXR1cm4gYSA9PT0gYiA/IDBcbiAgICA6IChhbnVtICYmICFibnVtKSA/IC0xXG4gICAgOiAoYm51bSAmJiAhYW51bSkgPyAxXG4gICAgOiBhIDwgYiA/IC0xXG4gICAgOiAxXG59XG5cbmV4cG9ydHMucmNvbXBhcmVJZGVudGlmaWVycyA9IHJjb21wYXJlSWRlbnRpZmllcnNcbmZ1bmN0aW9uIHJjb21wYXJlSWRlbnRpZmllcnMgKGEsIGIpIHtcbiAgcmV0dXJuIGNvbXBhcmVJZGVudGlmaWVycyhiLCBhKVxufVxuXG5leHBvcnRzLm1ham9yID0gbWFqb3JcbmZ1bmN0aW9uIG1ham9yIChhLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkubWFqb3Jcbn1cblxuZXhwb3J0cy5taW5vciA9IG1pbm9yXG5mdW5jdGlvbiBtaW5vciAoYSwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBTZW1WZXIoYSwgbG9vc2UpLm1pbm9yXG59XG5cbmV4cG9ydHMucGF0Y2ggPSBwYXRjaFxuZnVuY3Rpb24gcGF0Y2ggKGEsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5wYXRjaFxufVxuXG5leHBvcnRzLmNvbXBhcmUgPSBjb21wYXJlXG5mdW5jdGlvbiBjb21wYXJlIChhLCBiLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkuY29tcGFyZShuZXcgU2VtVmVyKGIsIGxvb3NlKSlcbn1cblxuZXhwb3J0cy5jb21wYXJlTG9vc2UgPSBjb21wYXJlTG9vc2VcbmZ1bmN0aW9uIGNvbXBhcmVMb29zZSAoYSwgYikge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCB0cnVlKVxufVxuXG5leHBvcnRzLnJjb21wYXJlID0gcmNvbXBhcmVcbmZ1bmN0aW9uIHJjb21wYXJlIChhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShiLCBhLCBsb29zZSlcbn1cblxuZXhwb3J0cy5zb3J0ID0gc29ydFxuZnVuY3Rpb24gc29ydCAobGlzdCwgbG9vc2UpIHtcbiAgcmV0dXJuIGxpc3Quc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBleHBvcnRzLmNvbXBhcmUoYSwgYiwgbG9vc2UpXG4gIH0pXG59XG5cbmV4cG9ydHMucnNvcnQgPSByc29ydFxuZnVuY3Rpb24gcnNvcnQgKGxpc3QsIGxvb3NlKSB7XG4gIHJldHVybiBsaXN0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5yY29tcGFyZShhLCBiLCBsb29zZSlcbiAgfSlcbn1cblxuZXhwb3J0cy5ndCA9IGd0XG5mdW5jdGlvbiBndCAoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpID4gMFxufVxuXG5leHBvcnRzLmx0ID0gbHRcbmZ1bmN0aW9uIGx0IChhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPCAwXG59XG5cbmV4cG9ydHMuZXEgPSBlcVxuZnVuY3Rpb24gZXEgKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA9PT0gMFxufVxuXG5leHBvcnRzLm5lcSA9IG5lcVxuZnVuY3Rpb24gbmVxIChhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgIT09IDBcbn1cblxuZXhwb3J0cy5ndGUgPSBndGVcbmZ1bmN0aW9uIGd0ZSAoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpID49IDBcbn1cblxuZXhwb3J0cy5sdGUgPSBsdGVcbmZ1bmN0aW9uIGx0ZSAoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpIDw9IDBcbn1cblxuZXhwb3J0cy5jbXAgPSBjbXBcbmZ1bmN0aW9uIGNtcCAoYSwgb3AsIGIsIGxvb3NlKSB7XG4gIHN3aXRjaCAob3ApIHtcbiAgICBjYXNlICc9PT0nOlxuICAgICAgaWYgKHR5cGVvZiBhID09PSAnb2JqZWN0JylcbiAgICAgICAgYSA9IGEudmVyc2lvblxuICAgICAgaWYgKHR5cGVvZiBiID09PSAnb2JqZWN0JylcbiAgICAgICAgYiA9IGIudmVyc2lvblxuICAgICAgcmV0dXJuIGEgPT09IGJcblxuICAgIGNhc2UgJyE9PSc6XG4gICAgICBpZiAodHlwZW9mIGEgPT09ICdvYmplY3QnKVxuICAgICAgICBhID0gYS52ZXJzaW9uXG4gICAgICBpZiAodHlwZW9mIGIgPT09ICdvYmplY3QnKVxuICAgICAgICBiID0gYi52ZXJzaW9uXG4gICAgICByZXR1cm4gYSAhPT0gYlxuXG4gICAgY2FzZSAnJzpcbiAgICBjYXNlICc9JzpcbiAgICBjYXNlICc9PSc6XG4gICAgICByZXR1cm4gZXEoYSwgYiwgbG9vc2UpXG5cbiAgICBjYXNlICchPSc6XG4gICAgICByZXR1cm4gbmVxKGEsIGIsIGxvb3NlKVxuXG4gICAgY2FzZSAnPic6XG4gICAgICByZXR1cm4gZ3QoYSwgYiwgbG9vc2UpXG5cbiAgICBjYXNlICc+PSc6XG4gICAgICByZXR1cm4gZ3RlKGEsIGIsIGxvb3NlKVxuXG4gICAgY2FzZSAnPCc6XG4gICAgICByZXR1cm4gbHQoYSwgYiwgbG9vc2UpXG5cbiAgICBjYXNlICc8PSc6XG4gICAgICByZXR1cm4gbHRlKGEsIGIsIGxvb3NlKVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgb3BlcmF0b3I6ICcgKyBvcClcbiAgfVxufVxuXG5leHBvcnRzLkNvbXBhcmF0b3IgPSBDb21wYXJhdG9yXG5mdW5jdGlvbiBDb21wYXJhdG9yIChjb21wLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucyB8fCB0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgbG9vc2U6ICEhb3B0aW9ucyxcbiAgICAgIGluY2x1ZGVQcmVyZWxlYXNlOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGlmIChjb21wIGluc3RhbmNlb2YgQ29tcGFyYXRvcikge1xuICAgIGlmIChjb21wLmxvb3NlID09PSAhIW9wdGlvbnMubG9vc2UpIHtcbiAgICAgIHJldHVybiBjb21wXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXAgPSBjb21wLnZhbHVlXG4gICAgfVxuICB9XG5cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIENvbXBhcmF0b3IpKSB7XG4gICAgcmV0dXJuIG5ldyBDb21wYXJhdG9yKGNvbXAsIG9wdGlvbnMpXG4gIH1cblxuICBjb21wID0gY29tcC50cmltKCkuc3BsaXQoL1xccysvKS5qb2luKCcgJylcbiAgZGVidWcoJ2NvbXBhcmF0b3InLCBjb21wLCBvcHRpb25zKVxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gIHRoaXMubG9vc2UgPSAhIW9wdGlvbnMubG9vc2VcbiAgdGhpcy5wYXJzZShjb21wKVxuXG4gIGlmICh0aGlzLnNlbXZlciA9PT0gQU5ZKSB7XG4gICAgdGhpcy52YWx1ZSA9ICcnXG4gIH0gZWxzZSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMub3BlcmF0b3IgKyB0aGlzLnNlbXZlci52ZXJzaW9uXG4gIH1cblxuICBkZWJ1ZygnY29tcCcsIHRoaXMpXG59XG5cbnZhciBBTlkgPSB7fVxuQ29tcGFyYXRvci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAoY29tcCkge1xuICB2YXIgciA9IHRoaXMub3B0aW9ucy5sb29zZSA/IHNhZmVSZVtDT01QQVJBVE9STE9PU0VdIDogc2FmZVJlW0NPTVBBUkFUT1JdXG4gIHZhciBtID0gY29tcC5tYXRjaChyKVxuXG4gIGlmICghbSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY29tcGFyYXRvcjogJyArIGNvbXApXG4gIH1cblxuICB0aGlzLm9wZXJhdG9yID0gbVsxXVxuICBpZiAodGhpcy5vcGVyYXRvciA9PT0gJz0nKSB7XG4gICAgdGhpcy5vcGVyYXRvciA9ICcnXG4gIH1cblxuICAvLyBpZiBpdCBsaXRlcmFsbHkgaXMganVzdCAnPicgb3IgJycgdGhlbiBhbGxvdyBhbnl0aGluZy5cbiAgaWYgKCFtWzJdKSB7XG4gICAgdGhpcy5zZW12ZXIgPSBBTllcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnNlbXZlciA9IG5ldyBTZW1WZXIobVsyXSwgdGhpcy5vcHRpb25zLmxvb3NlKVxuICB9XG59XG5cbkNvbXBhcmF0b3IucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy52YWx1ZVxufVxuXG5Db21wYXJhdG9yLnByb3RvdHlwZS50ZXN0ID0gZnVuY3Rpb24gKHZlcnNpb24pIHtcbiAgZGVidWcoJ0NvbXBhcmF0b3IudGVzdCcsIHZlcnNpb24sIHRoaXMub3B0aW9ucy5sb29zZSlcblxuICBpZiAodGhpcy5zZW12ZXIgPT09IEFOWSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAodHlwZW9mIHZlcnNpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgdmVyc2lvbiA9IG5ldyBTZW1WZXIodmVyc2lvbiwgdGhpcy5vcHRpb25zKVxuICB9XG5cbiAgcmV0dXJuIGNtcCh2ZXJzaW9uLCB0aGlzLm9wZXJhdG9yLCB0aGlzLnNlbXZlciwgdGhpcy5vcHRpb25zKVxufVxuXG5Db21wYXJhdG9yLnByb3RvdHlwZS5pbnRlcnNlY3RzID0gZnVuY3Rpb24gKGNvbXAsIG9wdGlvbnMpIHtcbiAgaWYgKCEoY29tcCBpbnN0YW5jZW9mIENvbXBhcmF0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYSBDb21wYXJhdG9yIGlzIHJlcXVpcmVkJylcbiAgfVxuXG4gIGlmICghb3B0aW9ucyB8fCB0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgbG9vc2U6ICEhb3B0aW9ucyxcbiAgICAgIGluY2x1ZGVQcmVyZWxlYXNlOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHZhciByYW5nZVRtcFxuXG4gIGlmICh0aGlzLm9wZXJhdG9yID09PSAnJykge1xuICAgIHJhbmdlVG1wID0gbmV3IFJhbmdlKGNvbXAudmFsdWUsIG9wdGlvbnMpXG4gICAgcmV0dXJuIHNhdGlzZmllcyh0aGlzLnZhbHVlLCByYW5nZVRtcCwgb3B0aW9ucylcbiAgfSBlbHNlIGlmIChjb21wLm9wZXJhdG9yID09PSAnJykge1xuICAgIHJhbmdlVG1wID0gbmV3IFJhbmdlKHRoaXMudmFsdWUsIG9wdGlvbnMpXG4gICAgcmV0dXJuIHNhdGlzZmllcyhjb21wLnNlbXZlciwgcmFuZ2VUbXAsIG9wdGlvbnMpXG4gIH1cblxuICB2YXIgc2FtZURpcmVjdGlvbkluY3JlYXNpbmcgPVxuICAgICh0aGlzLm9wZXJhdG9yID09PSAnPj0nIHx8IHRoaXMub3BlcmF0b3IgPT09ICc+JykgJiZcbiAgICAoY29tcC5vcGVyYXRvciA9PT0gJz49JyB8fCBjb21wLm9wZXJhdG9yID09PSAnPicpXG4gIHZhciBzYW1lRGlyZWN0aW9uRGVjcmVhc2luZyA9XG4gICAgKHRoaXMub3BlcmF0b3IgPT09ICc8PScgfHwgdGhpcy5vcGVyYXRvciA9PT0gJzwnKSAmJlxuICAgIChjb21wLm9wZXJhdG9yID09PSAnPD0nIHx8IGNvbXAub3BlcmF0b3IgPT09ICc8JylcbiAgdmFyIHNhbWVTZW1WZXIgPSB0aGlzLnNlbXZlci52ZXJzaW9uID09PSBjb21wLnNlbXZlci52ZXJzaW9uXG4gIHZhciBkaWZmZXJlbnREaXJlY3Rpb25zSW5jbHVzaXZlID1cbiAgICAodGhpcy5vcGVyYXRvciA9PT0gJz49JyB8fCB0aGlzLm9wZXJhdG9yID09PSAnPD0nKSAmJlxuICAgIChjb21wLm9wZXJhdG9yID09PSAnPj0nIHx8IGNvbXAub3BlcmF0b3IgPT09ICc8PScpXG4gIHZhciBvcHBvc2l0ZURpcmVjdGlvbnNMZXNzVGhhbiA9XG4gICAgY21wKHRoaXMuc2VtdmVyLCAnPCcsIGNvbXAuc2VtdmVyLCBvcHRpb25zKSAmJlxuICAgICgodGhpcy5vcGVyYXRvciA9PT0gJz49JyB8fCB0aGlzLm9wZXJhdG9yID09PSAnPicpICYmXG4gICAgKGNvbXAub3BlcmF0b3IgPT09ICc8PScgfHwgY29tcC5vcGVyYXRvciA9PT0gJzwnKSlcbiAgdmFyIG9wcG9zaXRlRGlyZWN0aW9uc0dyZWF0ZXJUaGFuID1cbiAgICBjbXAodGhpcy5zZW12ZXIsICc+JywgY29tcC5zZW12ZXIsIG9wdGlvbnMpICYmXG4gICAgKCh0aGlzLm9wZXJhdG9yID09PSAnPD0nIHx8IHRoaXMub3BlcmF0b3IgPT09ICc8JykgJiZcbiAgICAoY29tcC5vcGVyYXRvciA9PT0gJz49JyB8fCBjb21wLm9wZXJhdG9yID09PSAnPicpKVxuXG4gIHJldHVybiBzYW1lRGlyZWN0aW9uSW5jcmVhc2luZyB8fCBzYW1lRGlyZWN0aW9uRGVjcmVhc2luZyB8fFxuICAgIChzYW1lU2VtVmVyICYmIGRpZmZlcmVudERpcmVjdGlvbnNJbmNsdXNpdmUpIHx8XG4gICAgb3Bwb3NpdGVEaXJlY3Rpb25zTGVzc1RoYW4gfHwgb3Bwb3NpdGVEaXJlY3Rpb25zR3JlYXRlclRoYW5cbn1cblxuZXhwb3J0cy5SYW5nZSA9IFJhbmdlXG5mdW5jdGlvbiBSYW5nZSAocmFuZ2UsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zIHx8IHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xuICAgIG9wdGlvbnMgPSB7XG4gICAgICBsb29zZTogISFvcHRpb25zLFxuICAgICAgaW5jbHVkZVByZXJlbGVhc2U6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgaWYgKHJhbmdlIGluc3RhbmNlb2YgUmFuZ2UpIHtcbiAgICBpZiAocmFuZ2UubG9vc2UgPT09ICEhb3B0aW9ucy5sb29zZSAmJlxuICAgICAgICByYW5nZS5pbmNsdWRlUHJlcmVsZWFzZSA9PT0gISFvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlKSB7XG4gICAgICByZXR1cm4gcmFuZ2VcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBSYW5nZShyYW5nZS5yYXcsIG9wdGlvbnMpXG4gICAgfVxuICB9XG5cbiAgaWYgKHJhbmdlIGluc3RhbmNlb2YgQ29tcGFyYXRvcikge1xuICAgIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UudmFsdWUsIG9wdGlvbnMpXG4gIH1cblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmFuZ2UpKSB7XG4gICAgcmV0dXJuIG5ldyBSYW5nZShyYW5nZSwgb3B0aW9ucylcbiAgfVxuXG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgdGhpcy5sb29zZSA9ICEhb3B0aW9ucy5sb29zZVxuICB0aGlzLmluY2x1ZGVQcmVyZWxlYXNlID0gISFvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlXG5cbiAgLy8gRmlyc3QgcmVkdWNlIGFsbCB3aGl0ZXNwYWNlIGFzIG11Y2ggYXMgcG9zc2libGUgc28gd2UgZG8gbm90IGhhdmUgdG8gcmVseVxuICAvLyBvbiBwb3RlbnRpYWxseSBzbG93IHJlZ2V4ZXMgbGlrZSBcXHMqLiBUaGlzIGlzIHRoZW4gc3RvcmVkIGFuZCB1c2VkIGZvclxuICAvLyBmdXR1cmUgZXJyb3IgbWVzc2FnZXMgYXMgd2VsbC5cbiAgdGhpcy5yYXcgPSByYW5nZVxuICAgIC50cmltKClcbiAgICAuc3BsaXQoL1xccysvKVxuICAgIC5qb2luKCcgJylcblxuICAvLyBGaXJzdCwgc3BsaXQgYmFzZWQgb24gYm9vbGVhbiBvciB8fFxuICB0aGlzLnNldCA9IHRoaXMucmF3LnNwbGl0KCd8fCcpLm1hcChmdW5jdGlvbiAocmFuZ2UpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZVJhbmdlKHJhbmdlLnRyaW0oKSlcbiAgfSwgdGhpcykuZmlsdGVyKGZ1bmN0aW9uIChjKSB7XG4gICAgLy8gdGhyb3cgb3V0IGFueSB0aGF0IGFyZSBub3QgcmVsZXZhbnQgZm9yIHdoYXRldmVyIHJlYXNvblxuICAgIHJldHVybiBjLmxlbmd0aFxuICB9KVxuXG4gIGlmICghdGhpcy5zZXQubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBTZW1WZXIgUmFuZ2U6ICcgKyB0aGlzLnJhdylcbiAgfVxuXG4gIHRoaXMuZm9ybWF0KClcbn1cblxuUmFuZ2UucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5yYW5nZSA9IHRoaXMuc2V0Lm1hcChmdW5jdGlvbiAoY29tcHMpIHtcbiAgICByZXR1cm4gY29tcHMuam9pbignICcpLnRyaW0oKVxuICB9KS5qb2luKCd8fCcpLnRyaW0oKVxuICByZXR1cm4gdGhpcy5yYW5nZVxufVxuXG5SYW5nZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnJhbmdlXG59XG5cblJhbmdlLnByb3RvdHlwZS5wYXJzZVJhbmdlID0gZnVuY3Rpb24gKHJhbmdlKSB7XG4gIHZhciBsb29zZSA9IHRoaXMub3B0aW9ucy5sb29zZVxuICAvLyBgMS4yLjMgLSAxLjIuNGAgPT4gYD49MS4yLjMgPD0xLjIuNGBcbiAgdmFyIGhyID0gbG9vc2UgPyBzYWZlUmVbSFlQSEVOUkFOR0VMT09TRV0gOiBzYWZlUmVbSFlQSEVOUkFOR0VdXG4gIHJhbmdlID0gcmFuZ2UucmVwbGFjZShociwgaHlwaGVuUmVwbGFjZSlcbiAgZGVidWcoJ2h5cGhlbiByZXBsYWNlJywgcmFuZ2UpXG4gIC8vIGA+IDEuMi4zIDwgMS4yLjVgID0+IGA+MS4yLjMgPDEuMi41YFxuICByYW5nZSA9IHJhbmdlLnJlcGxhY2Uoc2FmZVJlW0NPTVBBUkFUT1JUUklNXSwgY29tcGFyYXRvclRyaW1SZXBsYWNlKVxuICBkZWJ1ZygnY29tcGFyYXRvciB0cmltJywgcmFuZ2UsIHNhZmVSZVtDT01QQVJBVE9SVFJJTV0pXG5cbiAgLy8gYH4gMS4yLjNgID0+IGB+MS4yLjNgXG4gIHJhbmdlID0gcmFuZ2UucmVwbGFjZShzYWZlUmVbVElMREVUUklNXSwgdGlsZGVUcmltUmVwbGFjZSlcblxuICAvLyBgXiAxLjIuM2AgPT4gYF4xLjIuM2BcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHNhZmVSZVtDQVJFVFRSSU1dLCBjYXJldFRyaW1SZXBsYWNlKVxuXG4gIC8vIEF0IHRoaXMgcG9pbnQsIHRoZSByYW5nZSBpcyBjb21wbGV0ZWx5IHRyaW1tZWQgYW5kXG4gIC8vIHJlYWR5IHRvIGJlIHNwbGl0IGludG8gY29tcGFyYXRvcnMuXG4gIHZhciBjb21wUmUgPSBsb29zZSA/IHNhZmVSZVtDT01QQVJBVE9STE9PU0VdIDogc2FmZVJlW0NPTVBBUkFUT1JdXG4gIHZhciBzZXQgPSByYW5nZS5zcGxpdCgnICcpLm1hcChmdW5jdGlvbiAoY29tcCkge1xuICAgIHJldHVybiBwYXJzZUNvbXBhcmF0b3IoY29tcCwgdGhpcy5vcHRpb25zKVxuICB9LCB0aGlzKS5qb2luKCcgJykuc3BsaXQoL1xccysvKVxuICBpZiAodGhpcy5vcHRpb25zLmxvb3NlKSB7XG4gICAgLy8gaW4gbG9vc2UgbW9kZSwgdGhyb3cgb3V0IGFueSB0aGF0IGFyZSBub3QgdmFsaWQgY29tcGFyYXRvcnNcbiAgICBzZXQgPSBzZXQuZmlsdGVyKGZ1bmN0aW9uIChjb21wKSB7XG4gICAgICByZXR1cm4gISFjb21wLm1hdGNoKGNvbXBSZSlcbiAgICB9KVxuICB9XG4gIHNldCA9IHNldC5tYXAoZnVuY3Rpb24gKGNvbXApIHtcbiAgICByZXR1cm4gbmV3IENvbXBhcmF0b3IoY29tcCwgdGhpcy5vcHRpb25zKVxuICB9LCB0aGlzKVxuXG4gIHJldHVybiBzZXRcbn1cblxuUmFuZ2UucHJvdG90eXBlLmludGVyc2VjdHMgPSBmdW5jdGlvbiAocmFuZ2UsIG9wdGlvbnMpIHtcbiAgaWYgKCEocmFuZ2UgaW5zdGFuY2VvZiBSYW5nZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhIFJhbmdlIGlzIHJlcXVpcmVkJylcbiAgfVxuXG4gIHJldHVybiB0aGlzLnNldC5zb21lKGZ1bmN0aW9uICh0aGlzQ29tcGFyYXRvcnMpIHtcbiAgICByZXR1cm4gdGhpc0NvbXBhcmF0b3JzLmV2ZXJ5KGZ1bmN0aW9uICh0aGlzQ29tcGFyYXRvcikge1xuICAgICAgcmV0dXJuIHJhbmdlLnNldC5zb21lKGZ1bmN0aW9uIChyYW5nZUNvbXBhcmF0b3JzKSB7XG4gICAgICAgIHJldHVybiByYW5nZUNvbXBhcmF0b3JzLmV2ZXJ5KGZ1bmN0aW9uIChyYW5nZUNvbXBhcmF0b3IpIHtcbiAgICAgICAgICByZXR1cm4gdGhpc0NvbXBhcmF0b3IuaW50ZXJzZWN0cyhyYW5nZUNvbXBhcmF0b3IsIG9wdGlvbnMpXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0pXG4gIH0pXG59XG5cbi8vIE1vc3RseSBqdXN0IGZvciB0ZXN0aW5nIGFuZCBsZWdhY3kgQVBJIHJlYXNvbnNcbmV4cG9ydHMudG9Db21wYXJhdG9ycyA9IHRvQ29tcGFyYXRvcnNcbmZ1bmN0aW9uIHRvQ29tcGFyYXRvcnMgKHJhbmdlLCBvcHRpb25zKSB7XG4gIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UsIG9wdGlvbnMpLnNldC5tYXAoZnVuY3Rpb24gKGNvbXApIHtcbiAgICByZXR1cm4gY29tcC5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBjLnZhbHVlXG4gICAgfSkuam9pbignICcpLnRyaW0oKS5zcGxpdCgnICcpXG4gIH0pXG59XG5cbi8vIGNvbXByaXNlZCBvZiB4cmFuZ2VzLCB0aWxkZXMsIHN0YXJzLCBhbmQgZ3RsdCdzIGF0IHRoaXMgcG9pbnQuXG4vLyBhbHJlYWR5IHJlcGxhY2VkIHRoZSBoeXBoZW4gcmFuZ2VzXG4vLyB0dXJuIGludG8gYSBzZXQgb2YgSlVTVCBjb21wYXJhdG9ycy5cbmZ1bmN0aW9uIHBhcnNlQ29tcGFyYXRvciAoY29tcCwgb3B0aW9ucykge1xuICBkZWJ1ZygnY29tcCcsIGNvbXAsIG9wdGlvbnMpXG4gIGNvbXAgPSByZXBsYWNlQ2FyZXRzKGNvbXAsIG9wdGlvbnMpXG4gIGRlYnVnKCdjYXJldCcsIGNvbXApXG4gIGNvbXAgPSByZXBsYWNlVGlsZGVzKGNvbXAsIG9wdGlvbnMpXG4gIGRlYnVnKCd0aWxkZXMnLCBjb21wKVxuICBjb21wID0gcmVwbGFjZVhSYW5nZXMoY29tcCwgb3B0aW9ucylcbiAgZGVidWcoJ3hyYW5nZScsIGNvbXApXG4gIGNvbXAgPSByZXBsYWNlU3RhcnMoY29tcCwgb3B0aW9ucylcbiAgZGVidWcoJ3N0YXJzJywgY29tcClcbiAgcmV0dXJuIGNvbXBcbn1cblxuZnVuY3Rpb24gaXNYIChpZCkge1xuICByZXR1cm4gIWlkIHx8IGlkLnRvTG93ZXJDYXNlKCkgPT09ICd4JyB8fCBpZCA9PT0gJyonXG59XG5cbi8vIH4sIH4+IC0tPiAqIChhbnksIGtpbmRhIHNpbGx5KVxuLy8gfjIsIH4yLngsIH4yLngueCwgfj4yLCB+PjIueCB+PjIueC54IC0tPiA+PTIuMC4wIDwzLjAuMFxuLy8gfjIuMCwgfjIuMC54LCB+PjIuMCwgfj4yLjAueCAtLT4gPj0yLjAuMCA8Mi4xLjBcbi8vIH4xLjIsIH4xLjIueCwgfj4xLjIsIH4+MS4yLnggLS0+ID49MS4yLjAgPDEuMy4wXG4vLyB+MS4yLjMsIH4+MS4yLjMgLS0+ID49MS4yLjMgPDEuMy4wXG4vLyB+MS4yLjAsIH4+MS4yLjAgLS0+ID49MS4yLjAgPDEuMy4wXG5mdW5jdGlvbiByZXBsYWNlVGlsZGVzIChjb21wLCBvcHRpb25zKSB7XG4gIHJldHVybiBjb21wLnRyaW0oKS5zcGxpdCgvXFxzKy8pLm1hcChmdW5jdGlvbiAoY29tcCkge1xuICAgIHJldHVybiByZXBsYWNlVGlsZGUoY29tcCwgb3B0aW9ucylcbiAgfSkuam9pbignICcpXG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VUaWxkZSAoY29tcCwgb3B0aW9ucykge1xuICB2YXIgciA9IG9wdGlvbnMubG9vc2UgPyBzYWZlUmVbVElMREVMT09TRV0gOiBzYWZlUmVbVElMREVdXG4gIHJldHVybiBjb21wLnJlcGxhY2UociwgZnVuY3Rpb24gKF8sIE0sIG0sIHAsIHByKSB7XG4gICAgZGVidWcoJ3RpbGRlJywgY29tcCwgXywgTSwgbSwgcCwgcHIpXG4gICAgdmFyIHJldFxuXG4gICAgaWYgKGlzWChNKSkge1xuICAgICAgcmV0ID0gJydcbiAgICB9IGVsc2UgaWYgKGlzWChtKSkge1xuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLjAuMCA8JyArICgrTSArIDEpICsgJy4wLjAnXG4gICAgfSBlbHNlIGlmIChpc1gocCkpIHtcbiAgICAgIC8vIH4xLjIgPT0gPj0xLjIuMCA8MS4zLjBcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCdcbiAgICB9IGVsc2UgaWYgKHByKSB7XG4gICAgICBkZWJ1ZygncmVwbGFjZVRpbGRlIHByJywgcHIpXG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgJy0nICsgcHIgK1xuICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCdcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gfjEuMi4zID09ID49MS4yLjMgPDEuMy4wXG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnXG4gICAgfVxuXG4gICAgZGVidWcoJ3RpbGRlIHJldHVybicsIHJldClcbiAgICByZXR1cm4gcmV0XG4gIH0pXG59XG5cbi8vIF4gLS0+ICogKGFueSwga2luZGEgc2lsbHkpXG4vLyBeMiwgXjIueCwgXjIueC54IC0tPiA+PTIuMC4wIDwzLjAuMFxuLy8gXjIuMCwgXjIuMC54IC0tPiA+PTIuMC4wIDwzLjAuMFxuLy8gXjEuMiwgXjEuMi54IC0tPiA+PTEuMi4wIDwyLjAuMFxuLy8gXjEuMi4zIC0tPiA+PTEuMi4zIDwyLjAuMFxuLy8gXjEuMi4wIC0tPiA+PTEuMi4wIDwyLjAuMFxuZnVuY3Rpb24gcmVwbGFjZUNhcmV0cyAoY29tcCwgb3B0aW9ucykge1xuICByZXR1cm4gY29tcC50cmltKCkuc3BsaXQoL1xccysvKS5tYXAoZnVuY3Rpb24gKGNvbXApIHtcbiAgICByZXR1cm4gcmVwbGFjZUNhcmV0KGNvbXAsIG9wdGlvbnMpXG4gIH0pLmpvaW4oJyAnKVxufVxuXG5mdW5jdGlvbiByZXBsYWNlQ2FyZXQgKGNvbXAsIG9wdGlvbnMpIHtcbiAgZGVidWcoJ2NhcmV0JywgY29tcCwgb3B0aW9ucylcbiAgdmFyIHIgPSBvcHRpb25zLmxvb3NlID8gc2FmZVJlW0NBUkVUTE9PU0VdIDogc2FmZVJlW0NBUkVUXVxuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIGZ1bmN0aW9uIChfLCBNLCBtLCBwLCBwcikge1xuICAgIGRlYnVnKCdjYXJldCcsIGNvbXAsIF8sIE0sIG0sIHAsIHByKVxuICAgIHZhciByZXRcblxuICAgIGlmIChpc1goTSkpIHtcbiAgICAgIHJldCA9ICcnXG4gICAgfSBlbHNlIGlmIChpc1gobSkpIHtcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4wLjAgPCcgKyAoK00gKyAxKSArICcuMC4wJ1xuICAgIH0gZWxzZSBpZiAoaXNYKHApKSB7XG4gICAgICBpZiAoTSA9PT0gJzAnKSB7XG4gICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArICgrTSArIDEpICsgJy4wLjAnXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwcikge1xuICAgICAgZGVidWcoJ3JlcGxhY2VDYXJldCBwcicsIHByKVxuICAgICAgaWYgKE0gPT09ICcwJykge1xuICAgICAgICBpZiAobSA9PT0gJzAnKSB7XG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArICctJyArIHByICtcbiAgICAgICAgICAgICAgICAnIDwnICsgTSArICcuJyArIG0gKyAnLicgKyAoK3AgKyAxKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgKyAnLScgKyBwciArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCdcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArICctJyArIHByICtcbiAgICAgICAgICAgICAgJyA8JyArICgrTSArIDEpICsgJy4wLjAnXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnKCdubyBwcicpXG4gICAgICBpZiAoTSA9PT0gJzAnKSB7XG4gICAgICAgIGlmIChtID09PSAnMCcpIHtcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICAgICAnIDwnICsgTSArICcuJyArIG0gKyAnLicgKyAoK3AgKyAxKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgK1xuICAgICAgICAgICAgICAnIDwnICsgKCtNICsgMSkgKyAnLjAuMCdcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkZWJ1ZygnY2FyZXQgcmV0dXJuJywgcmV0KVxuICAgIHJldHVybiByZXRcbiAgfSlcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVhSYW5nZXMgKGNvbXAsIG9wdGlvbnMpIHtcbiAgZGVidWcoJ3JlcGxhY2VYUmFuZ2VzJywgY29tcCwgb3B0aW9ucylcbiAgcmV0dXJuIGNvbXAuc3BsaXQoL1xccysvKS5tYXAoZnVuY3Rpb24gKGNvbXApIHtcbiAgICByZXR1cm4gcmVwbGFjZVhSYW5nZShjb21wLCBvcHRpb25zKVxuICB9KS5qb2luKCcgJylcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVhSYW5nZSAoY29tcCwgb3B0aW9ucykge1xuICBjb21wID0gY29tcC50cmltKClcbiAgdmFyIHIgPSBvcHRpb25zLmxvb3NlID8gc2FmZVJlW1hSQU5HRUxPT1NFXSA6IHNhZmVSZVtYUkFOR0VdXG4gIHJldHVybiBjb21wLnJlcGxhY2UociwgZnVuY3Rpb24gKHJldCwgZ3RsdCwgTSwgbSwgcCwgcHIpIHtcbiAgICBkZWJ1ZygneFJhbmdlJywgY29tcCwgcmV0LCBndGx0LCBNLCBtLCBwLCBwcilcbiAgICB2YXIgeE0gPSBpc1goTSlcbiAgICB2YXIgeG0gPSB4TSB8fCBpc1gobSlcbiAgICB2YXIgeHAgPSB4bSB8fCBpc1gocClcbiAgICB2YXIgYW55WCA9IHhwXG5cbiAgICBpZiAoZ3RsdCA9PT0gJz0nICYmIGFueVgpIHtcbiAgICAgIGd0bHQgPSAnJ1xuICAgIH1cblxuICAgIGlmICh4TSkge1xuICAgICAgaWYgKGd0bHQgPT09ICc+JyB8fCBndGx0ID09PSAnPCcpIHtcbiAgICAgICAgLy8gbm90aGluZyBpcyBhbGxvd2VkXG4gICAgICAgIHJldCA9ICc8MC4wLjAnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBub3RoaW5nIGlzIGZvcmJpZGRlblxuICAgICAgICByZXQgPSAnKidcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGd0bHQgJiYgYW55WCkge1xuICAgICAgLy8gd2Uga25vdyBwYXRjaCBpcyBhbiB4LCBiZWNhdXNlIHdlIGhhdmUgYW55IHggYXQgYWxsLlxuICAgICAgLy8gcmVwbGFjZSBYIHdpdGggMFxuICAgICAgaWYgKHhtKSB7XG4gICAgICAgIG0gPSAwXG4gICAgICB9XG4gICAgICBwID0gMFxuXG4gICAgICBpZiAoZ3RsdCA9PT0gJz4nKSB7XG4gICAgICAgIC8vID4xID0+ID49Mi4wLjBcbiAgICAgICAgLy8gPjEuMiA9PiA+PTEuMy4wXG4gICAgICAgIC8vID4xLjIuMyA9PiA+PSAxLjIuNFxuICAgICAgICBndGx0ID0gJz49J1xuICAgICAgICBpZiAoeG0pIHtcbiAgICAgICAgICBNID0gK00gKyAxXG4gICAgICAgICAgbSA9IDBcbiAgICAgICAgICBwID0gMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG0gPSArbSArIDFcbiAgICAgICAgICBwID0gMFxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGd0bHQgPT09ICc8PScpIHtcbiAgICAgICAgLy8gPD0wLjcueCBpcyBhY3R1YWxseSA8MC44LjAsIHNpbmNlIGFueSAwLjcueCBzaG91bGRcbiAgICAgICAgLy8gcGFzcy4gIFNpbWlsYXJseSwgPD03LnggaXMgYWN0dWFsbHkgPDguMC4wLCBldGMuXG4gICAgICAgIGd0bHQgPSAnPCdcbiAgICAgICAgaWYgKHhtKSB7XG4gICAgICAgICAgTSA9ICtNICsgMVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG0gPSArbSArIDFcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXQgPSBndGx0ICsgTSArICcuJyArIG0gKyAnLicgKyBwXG4gICAgfSBlbHNlIGlmICh4bSkge1xuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLjAuMCA8JyArICgrTSArIDEpICsgJy4wLjAnXG4gICAgfSBlbHNlIGlmICh4cCkge1xuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJ1xuICAgIH1cblxuICAgIGRlYnVnKCd4UmFuZ2UgcmV0dXJuJywgcmV0KVxuXG4gICAgcmV0dXJuIHJldFxuICB9KVxufVxuXG4vLyBCZWNhdXNlICogaXMgQU5ELWVkIHdpdGggZXZlcnl0aGluZyBlbHNlIGluIHRoZSBjb21wYXJhdG9yLFxuLy8gYW5kICcnIG1lYW5zIFwiYW55IHZlcnNpb25cIiwganVzdCByZW1vdmUgdGhlICpzIGVudGlyZWx5LlxuZnVuY3Rpb24gcmVwbGFjZVN0YXJzIChjb21wLCBvcHRpb25zKSB7XG4gIGRlYnVnKCdyZXBsYWNlU3RhcnMnLCBjb21wLCBvcHRpb25zKVxuICAvLyBMb29zZW5lc3MgaXMgaWdub3JlZCBoZXJlLiAgc3RhciBpcyBhbHdheXMgYXMgbG9vc2UgYXMgaXQgZ2V0cyFcbiAgcmV0dXJuIGNvbXAudHJpbSgpLnJlcGxhY2Uoc2FmZVJlW1NUQVJdLCAnJylcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyBwYXNzZWQgdG8gc3RyaW5nLnJlcGxhY2Uoc2FmZVJlW0hZUEhFTlJBTkdFXSlcbi8vIE0sIG0sIHBhdGNoLCBwcmVyZWxlYXNlLCBidWlsZFxuLy8gMS4yIC0gMy40LjUgPT4gPj0xLjIuMCA8PTMuNC41XG4vLyAxLjIuMyAtIDMuNCA9PiA+PTEuMi4wIDwzLjUuMCBBbnkgMy40Lnggd2lsbCBkb1xuLy8gMS4yIC0gMy40ID0+ID49MS4yLjAgPDMuNS4wXG5mdW5jdGlvbiBoeXBoZW5SZXBsYWNlICgkMCxcbiAgZnJvbSwgZk0sIGZtLCBmcCwgZnByLCBmYixcbiAgdG8sIHRNLCB0bSwgdHAsIHRwciwgdGIpIHtcbiAgaWYgKGlzWChmTSkpIHtcbiAgICBmcm9tID0gJydcbiAgfSBlbHNlIGlmIChpc1goZm0pKSB7XG4gICAgZnJvbSA9ICc+PScgKyBmTSArICcuMC4wJ1xuICB9IGVsc2UgaWYgKGlzWChmcCkpIHtcbiAgICBmcm9tID0gJz49JyArIGZNICsgJy4nICsgZm0gKyAnLjAnXG4gIH0gZWxzZSB7XG4gICAgZnJvbSA9ICc+PScgKyBmcm9tXG4gIH1cblxuICBpZiAoaXNYKHRNKSkge1xuICAgIHRvID0gJydcbiAgfSBlbHNlIGlmIChpc1godG0pKSB7XG4gICAgdG8gPSAnPCcgKyAoK3RNICsgMSkgKyAnLjAuMCdcbiAgfSBlbHNlIGlmIChpc1godHApKSB7XG4gICAgdG8gPSAnPCcgKyB0TSArICcuJyArICgrdG0gKyAxKSArICcuMCdcbiAgfSBlbHNlIGlmICh0cHIpIHtcbiAgICB0byA9ICc8PScgKyB0TSArICcuJyArIHRtICsgJy4nICsgdHAgKyAnLScgKyB0cHJcbiAgfSBlbHNlIHtcbiAgICB0byA9ICc8PScgKyB0b1xuICB9XG5cbiAgcmV0dXJuIChmcm9tICsgJyAnICsgdG8pLnRyaW0oKVxufVxuXG4vLyBpZiBBTlkgb2YgdGhlIHNldHMgbWF0Y2ggQUxMIG9mIGl0cyBjb21wYXJhdG9ycywgdGhlbiBwYXNzXG5SYW5nZS5wcm90b3R5cGUudGVzdCA9IGZ1bmN0aW9uICh2ZXJzaW9uKSB7XG4gIGlmICghdmVyc2lvbikge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAnc3RyaW5nJykge1xuICAgIHZlcnNpb24gPSBuZXcgU2VtVmVyKHZlcnNpb24sIHRoaXMub3B0aW9ucylcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZXQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGVzdFNldCh0aGlzLnNldFtpXSwgdmVyc2lvbiwgdGhpcy5vcHRpb25zKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIHRlc3RTZXQgKHNldCwgdmVyc2lvbiwgb3B0aW9ucykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHNldC5sZW5ndGg7IGkrKykge1xuICAgIGlmICghc2V0W2ldLnRlc3QodmVyc2lvbikpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGlmICh2ZXJzaW9uLnByZXJlbGVhc2UubGVuZ3RoICYmICFvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlKSB7XG4gICAgLy8gRmluZCB0aGUgc2V0IG9mIHZlcnNpb25zIHRoYXQgYXJlIGFsbG93ZWQgdG8gaGF2ZSBwcmVyZWxlYXNlc1xuICAgIC8vIEZvciBleGFtcGxlLCBeMS4yLjMtcHIuMSBkZXN1Z2FycyB0byA+PTEuMi4zLXByLjEgPDIuMC4wXG4gICAgLy8gVGhhdCBzaG91bGQgYWxsb3cgYDEuMi4zLXByLjJgIHRvIHBhc3MuXG4gICAgLy8gSG93ZXZlciwgYDEuMi40LWFscGhhLm5vdHJlYWR5YCBzaG91bGQgTk9UIGJlIGFsbG93ZWQsXG4gICAgLy8gZXZlbiB0aG91Z2ggaXQncyB3aXRoaW4gdGhlIHJhbmdlIHNldCBieSB0aGUgY29tcGFyYXRvcnMuXG4gICAgZm9yIChpID0gMDsgaSA8IHNldC5sZW5ndGg7IGkrKykge1xuICAgICAgZGVidWcoc2V0W2ldLnNlbXZlcilcbiAgICAgIGlmIChzZXRbaV0uc2VtdmVyID09PSBBTlkpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgaWYgKHNldFtpXS5zZW12ZXIucHJlcmVsZWFzZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBhbGxvd2VkID0gc2V0W2ldLnNlbXZlclxuICAgICAgICBpZiAoYWxsb3dlZC5tYWpvciA9PT0gdmVyc2lvbi5tYWpvciAmJlxuICAgICAgICAgICAgYWxsb3dlZC5taW5vciA9PT0gdmVyc2lvbi5taW5vciAmJlxuICAgICAgICAgICAgYWxsb3dlZC5wYXRjaCA9PT0gdmVyc2lvbi5wYXRjaCkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBWZXJzaW9uIGhhcyBhIC1wcmUsIGJ1dCBpdCdzIG5vdCBvbmUgb2YgdGhlIG9uZXMgd2UgbGlrZS5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiB0cnVlXG59XG5cbmV4cG9ydHMuc2F0aXNmaWVzID0gc2F0aXNmaWVzXG5mdW5jdGlvbiBzYXRpc2ZpZXMgKHZlcnNpb24sIHJhbmdlLCBvcHRpb25zKSB7XG4gIHRyeSB7XG4gICAgcmFuZ2UgPSBuZXcgUmFuZ2UocmFuZ2UsIG9wdGlvbnMpXG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHJhbmdlLnRlc3QodmVyc2lvbilcbn1cblxuZXhwb3J0cy5tYXhTYXRpc2Z5aW5nID0gbWF4U2F0aXNmeWluZ1xuZnVuY3Rpb24gbWF4U2F0aXNmeWluZyAodmVyc2lvbnMsIHJhbmdlLCBvcHRpb25zKSB7XG4gIHZhciBtYXggPSBudWxsXG4gIHZhciBtYXhTViA9IG51bGxcbiAgdHJ5IHtcbiAgICB2YXIgcmFuZ2VPYmogPSBuZXcgUmFuZ2UocmFuZ2UsIG9wdGlvbnMpXG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICB2ZXJzaW9ucy5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgaWYgKHJhbmdlT2JqLnRlc3QodikpIHtcbiAgICAgIC8vIHNhdGlzZmllcyh2LCByYW5nZSwgb3B0aW9ucylcbiAgICAgIGlmICghbWF4IHx8IG1heFNWLmNvbXBhcmUodikgPT09IC0xKSB7XG4gICAgICAgIC8vIGNvbXBhcmUobWF4LCB2LCB0cnVlKVxuICAgICAgICBtYXggPSB2XG4gICAgICAgIG1heFNWID0gbmV3IFNlbVZlcihtYXgsIG9wdGlvbnMpXG4gICAgICB9XG4gICAgfVxuICB9KVxuICByZXR1cm4gbWF4XG59XG5cbmV4cG9ydHMubWluU2F0aXNmeWluZyA9IG1pblNhdGlzZnlpbmdcbmZ1bmN0aW9uIG1pblNhdGlzZnlpbmcgKHZlcnNpb25zLCByYW5nZSwgb3B0aW9ucykge1xuICB2YXIgbWluID0gbnVsbFxuICB2YXIgbWluU1YgPSBudWxsXG4gIHRyeSB7XG4gICAgdmFyIHJhbmdlT2JqID0gbmV3IFJhbmdlKHJhbmdlLCBvcHRpb25zKVxuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgdmVyc2lvbnMuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgIGlmIChyYW5nZU9iai50ZXN0KHYpKSB7XG4gICAgICAvLyBzYXRpc2ZpZXModiwgcmFuZ2UsIG9wdGlvbnMpXG4gICAgICBpZiAoIW1pbiB8fCBtaW5TVi5jb21wYXJlKHYpID09PSAxKSB7XG4gICAgICAgIC8vIGNvbXBhcmUobWluLCB2LCB0cnVlKVxuICAgICAgICBtaW4gPSB2XG4gICAgICAgIG1pblNWID0gbmV3IFNlbVZlcihtaW4sIG9wdGlvbnMpXG4gICAgICB9XG4gICAgfVxuICB9KVxuICByZXR1cm4gbWluXG59XG5cbmV4cG9ydHMubWluVmVyc2lvbiA9IG1pblZlcnNpb25cbmZ1bmN0aW9uIG1pblZlcnNpb24gKHJhbmdlLCBsb29zZSkge1xuICByYW5nZSA9IG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpXG5cbiAgdmFyIG1pbnZlciA9IG5ldyBTZW1WZXIoJzAuMC4wJylcbiAgaWYgKHJhbmdlLnRlc3QobWludmVyKSkge1xuICAgIHJldHVybiBtaW52ZXJcbiAgfVxuXG4gIG1pbnZlciA9IG5ldyBTZW1WZXIoJzAuMC4wLTAnKVxuICBpZiAocmFuZ2UudGVzdChtaW52ZXIpKSB7XG4gICAgcmV0dXJuIG1pbnZlclxuICB9XG5cbiAgbWludmVyID0gbnVsbFxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJhbmdlLnNldC5sZW5ndGg7ICsraSkge1xuICAgIHZhciBjb21wYXJhdG9ycyA9IHJhbmdlLnNldFtpXVxuXG4gICAgY29tcGFyYXRvcnMuZm9yRWFjaChmdW5jdGlvbiAoY29tcGFyYXRvcikge1xuICAgICAgLy8gQ2xvbmUgdG8gYXZvaWQgbWFuaXB1bGF0aW5nIHRoZSBjb21wYXJhdG9yJ3Mgc2VtdmVyIG9iamVjdC5cbiAgICAgIHZhciBjb21wdmVyID0gbmV3IFNlbVZlcihjb21wYXJhdG9yLnNlbXZlci52ZXJzaW9uKVxuICAgICAgc3dpdGNoIChjb21wYXJhdG9yLm9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgJz4nOlxuICAgICAgICAgIGlmIChjb21wdmVyLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb21wdmVyLnBhdGNoKytcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29tcHZlci5wcmVyZWxlYXNlLnB1c2goMClcbiAgICAgICAgICB9XG4gICAgICAgICAgY29tcHZlci5yYXcgPSBjb21wdmVyLmZvcm1hdCgpXG4gICAgICAgICAgLyogZmFsbHRocm91Z2ggKi9cbiAgICAgICAgY2FzZSAnJzpcbiAgICAgICAgY2FzZSAnPj0nOlxuICAgICAgICAgIGlmICghbWludmVyIHx8IGd0KG1pbnZlciwgY29tcHZlcikpIHtcbiAgICAgICAgICAgIG1pbnZlciA9IGNvbXB2ZXJcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnPCc6XG4gICAgICAgIGNhc2UgJzw9JzpcbiAgICAgICAgICAvKiBJZ25vcmUgbWF4aW11bSB2ZXJzaW9ucyAqL1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIG9wZXJhdGlvbjogJyArIGNvbXBhcmF0b3Iub3BlcmF0b3IpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGlmIChtaW52ZXIgJiYgcmFuZ2UudGVzdChtaW52ZXIpKSB7XG4gICAgcmV0dXJuIG1pbnZlclxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0cy52YWxpZFJhbmdlID0gdmFsaWRSYW5nZVxuZnVuY3Rpb24gdmFsaWRSYW5nZSAocmFuZ2UsIG9wdGlvbnMpIHtcbiAgdHJ5IHtcbiAgICAvLyBSZXR1cm4gJyonIGluc3RlYWQgb2YgJycgc28gdGhhdCB0cnV0aGluZXNzIHdvcmtzLlxuICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBpZiBpdCdzIGludmFsaWQgYW55d2F5XG4gICAgcmV0dXJuIG5ldyBSYW5nZShyYW5nZSwgb3B0aW9ucykucmFuZ2UgfHwgJyonXG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG4vLyBEZXRlcm1pbmUgaWYgdmVyc2lvbiBpcyBsZXNzIHRoYW4gYWxsIHRoZSB2ZXJzaW9ucyBwb3NzaWJsZSBpbiB0aGUgcmFuZ2VcbmV4cG9ydHMubHRyID0gbHRyXG5mdW5jdGlvbiBsdHIgKHZlcnNpb24sIHJhbmdlLCBvcHRpb25zKSB7XG4gIHJldHVybiBvdXRzaWRlKHZlcnNpb24sIHJhbmdlLCAnPCcsIG9wdGlvbnMpXG59XG5cbi8vIERldGVybWluZSBpZiB2ZXJzaW9uIGlzIGdyZWF0ZXIgdGhhbiBhbGwgdGhlIHZlcnNpb25zIHBvc3NpYmxlIGluIHRoZSByYW5nZS5cbmV4cG9ydHMuZ3RyID0gZ3RyXG5mdW5jdGlvbiBndHIgKHZlcnNpb24sIHJhbmdlLCBvcHRpb25zKSB7XG4gIHJldHVybiBvdXRzaWRlKHZlcnNpb24sIHJhbmdlLCAnPicsIG9wdGlvbnMpXG59XG5cbmV4cG9ydHMub3V0c2lkZSA9IG91dHNpZGVcbmZ1bmN0aW9uIG91dHNpZGUgKHZlcnNpb24sIHJhbmdlLCBoaWxvLCBvcHRpb25zKSB7XG4gIHZlcnNpb24gPSBuZXcgU2VtVmVyKHZlcnNpb24sIG9wdGlvbnMpXG4gIHJhbmdlID0gbmV3IFJhbmdlKHJhbmdlLCBvcHRpb25zKVxuXG4gIHZhciBndGZuLCBsdGVmbiwgbHRmbiwgY29tcCwgZWNvbXBcbiAgc3dpdGNoIChoaWxvKSB7XG4gICAgY2FzZSAnPic6XG4gICAgICBndGZuID0gZ3RcbiAgICAgIGx0ZWZuID0gbHRlXG4gICAgICBsdGZuID0gbHRcbiAgICAgIGNvbXAgPSAnPidcbiAgICAgIGVjb21wID0gJz49J1xuICAgICAgYnJlYWtcbiAgICBjYXNlICc8JzpcbiAgICAgIGd0Zm4gPSBsdFxuICAgICAgbHRlZm4gPSBndGVcbiAgICAgIGx0Zm4gPSBndFxuICAgICAgY29tcCA9ICc8J1xuICAgICAgZWNvbXAgPSAnPD0nXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdNdXN0IHByb3ZpZGUgYSBoaWxvIHZhbCBvZiBcIjxcIiBvciBcIj5cIicpXG4gIH1cblxuICAvLyBJZiBpdCBzYXRpc2lmZXMgdGhlIHJhbmdlIGl0IGlzIG5vdCBvdXRzaWRlXG4gIGlmIChzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIG9wdGlvbnMpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBGcm9tIG5vdyBvbiwgdmFyaWFibGUgdGVybXMgYXJlIGFzIGlmIHdlJ3JlIGluIFwiZ3RyXCIgbW9kZS5cbiAgLy8gYnV0IG5vdGUgdGhhdCBldmVyeXRoaW5nIGlzIGZsaXBwZWQgZm9yIHRoZSBcImx0clwiIGZ1bmN0aW9uLlxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmFuZ2Uuc2V0Lmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGNvbXBhcmF0b3JzID0gcmFuZ2Uuc2V0W2ldXG5cbiAgICB2YXIgaGlnaCA9IG51bGxcbiAgICB2YXIgbG93ID0gbnVsbFxuXG4gICAgY29tcGFyYXRvcnMuZm9yRWFjaChmdW5jdGlvbiAoY29tcGFyYXRvcikge1xuICAgICAgaWYgKGNvbXBhcmF0b3Iuc2VtdmVyID09PSBBTlkpIHtcbiAgICAgICAgY29tcGFyYXRvciA9IG5ldyBDb21wYXJhdG9yKCc+PTAuMC4wJylcbiAgICAgIH1cbiAgICAgIGhpZ2ggPSBoaWdoIHx8IGNvbXBhcmF0b3JcbiAgICAgIGxvdyA9IGxvdyB8fCBjb21wYXJhdG9yXG4gICAgICBpZiAoZ3Rmbihjb21wYXJhdG9yLnNlbXZlciwgaGlnaC5zZW12ZXIsIG9wdGlvbnMpKSB7XG4gICAgICAgIGhpZ2ggPSBjb21wYXJhdG9yXG4gICAgICB9IGVsc2UgaWYgKGx0Zm4oY29tcGFyYXRvci5zZW12ZXIsIGxvdy5zZW12ZXIsIG9wdGlvbnMpKSB7XG4gICAgICAgIGxvdyA9IGNvbXBhcmF0b3JcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gSWYgdGhlIGVkZ2UgdmVyc2lvbiBjb21wYXJhdG9yIGhhcyBhIG9wZXJhdG9yIHRoZW4gb3VyIHZlcnNpb25cbiAgICAvLyBpc24ndCBvdXRzaWRlIGl0XG4gICAgaWYgKGhpZ2gub3BlcmF0b3IgPT09IGNvbXAgfHwgaGlnaC5vcGVyYXRvciA9PT0gZWNvbXApIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBsb3dlc3QgdmVyc2lvbiBjb21wYXJhdG9yIGhhcyBhbiBvcGVyYXRvciBhbmQgb3VyIHZlcnNpb25cbiAgICAvLyBpcyBsZXNzIHRoYW4gaXQgdGhlbiBpdCBpc24ndCBoaWdoZXIgdGhhbiB0aGUgcmFuZ2VcbiAgICBpZiAoKCFsb3cub3BlcmF0b3IgfHwgbG93Lm9wZXJhdG9yID09PSBjb21wKSAmJlxuICAgICAgICBsdGVmbih2ZXJzaW9uLCBsb3cuc2VtdmVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSBlbHNlIGlmIChsb3cub3BlcmF0b3IgPT09IGVjb21wICYmIGx0Zm4odmVyc2lvbiwgbG93LnNlbXZlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG5leHBvcnRzLnByZXJlbGVhc2UgPSBwcmVyZWxlYXNlXG5mdW5jdGlvbiBwcmVyZWxlYXNlICh2ZXJzaW9uLCBvcHRpb25zKSB7XG4gIHZhciBwYXJzZWQgPSBwYXJzZSh2ZXJzaW9uLCBvcHRpb25zKVxuICByZXR1cm4gKHBhcnNlZCAmJiBwYXJzZWQucHJlcmVsZWFzZS5sZW5ndGgpID8gcGFyc2VkLnByZXJlbGVhc2UgOiBudWxsXG59XG5cbmV4cG9ydHMuaW50ZXJzZWN0cyA9IGludGVyc2VjdHNcbmZ1bmN0aW9uIGludGVyc2VjdHMgKHIxLCByMiwgb3B0aW9ucykge1xuICByMSA9IG5ldyBSYW5nZShyMSwgb3B0aW9ucylcbiAgcjIgPSBuZXcgUmFuZ2UocjIsIG9wdGlvbnMpXG4gIHJldHVybiByMS5pbnRlcnNlY3RzKHIyKVxufVxuXG5leHBvcnRzLmNvZXJjZSA9IGNvZXJjZVxuZnVuY3Rpb24gY29lcmNlICh2ZXJzaW9uKSB7XG4gIGlmICh2ZXJzaW9uIGluc3RhbmNlb2YgU2VtVmVyKSB7XG4gICAgcmV0dXJuIHZlcnNpb25cbiAgfVxuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgdmFyIG1hdGNoID0gdmVyc2lvbi5tYXRjaChzYWZlUmVbQ09FUkNFXSlcblxuICBpZiAobWF0Y2ggPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZXR1cm4gcGFyc2UobWF0Y2hbMV0gK1xuICAgICcuJyArIChtYXRjaFsyXSB8fCAnMCcpICtcbiAgICAnLicgKyAobWF0Y2hbM10gfHwgJzAnKSlcbn1cbiIsICJbXG5cdFwiMEJTRFwiLFxuXHRcIjNELVNsaWNlci0xLjBcIixcblx0XCJBQUxcIixcblx0XCJBRFNMXCIsXG5cdFwiQUZMLTEuMVwiLFxuXHRcIkFGTC0xLjJcIixcblx0XCJBRkwtMi4wXCIsXG5cdFwiQUZMLTIuMVwiLFxuXHRcIkFGTC0zLjBcIixcblx0XCJBR1BMLTEuMC1vbmx5XCIsXG5cdFwiQUdQTC0xLjAtb3ItbGF0ZXJcIixcblx0XCJBR1BMLTMuMC1vbmx5XCIsXG5cdFwiQUdQTC0zLjAtb3ItbGF0ZXJcIixcblx0XCJBTEdMSUItRG9jdW1lbnRhdGlvblwiLFxuXHRcIkFNRC1uZXdsaWJcIixcblx0XCJBTURQTFBBXCIsXG5cdFwiQU1MXCIsXG5cdFwiQU1MLWdsc2xhbmdcIixcblx0XCJBTVBBU1wiLFxuXHRcIkFOVExSLVBEXCIsXG5cdFwiQU5UTFItUEQtZmFsbGJhY2tcIixcblx0XCJBUEFGTUxcIixcblx0XCJBUEwtMS4wXCIsXG5cdFwiQVBTTC0xLjBcIixcblx0XCJBUFNMLTEuMVwiLFxuXHRcIkFQU0wtMS4yXCIsXG5cdFwiQVBTTC0yLjBcIixcblx0XCJBU1dGLURpZ2l0YWwtQXNzZXRzLTEuMFwiLFxuXHRcIkFTV0YtRGlnaXRhbC1Bc3NldHMtMS4xXCIsXG5cdFwiQWJzdHlsZXNcIixcblx0XCJBZGFDb3JlLWRvY1wiLFxuXHRcIkFkb2JlLTIwMDZcIixcblx0XCJBZG9iZS1EaXNwbGF5LVBvc3RTY3JpcHRcIixcblx0XCJBZG9iZS1HbHlwaFwiLFxuXHRcIkFkb2JlLVV0b3BpYVwiLFxuXHRcIkFkdmFuY2VkLUNyeXB0aWNzLURpY3Rpb25hcnlcIixcblx0XCJBZm1wYXJzZVwiLFxuXHRcIkFsYWRkaW5cIixcblx0XCJBcGFjaGUtMS4wXCIsXG5cdFwiQXBhY2hlLTEuMVwiLFxuXHRcIkFwYWNoZS0yLjBcIixcblx0XCJBcHAtczJwXCIsXG5cdFwiQXJwaGljLTE5OTlcIixcblx0XCJBcnRpc3RpYy0xLjBcIixcblx0XCJBcnRpc3RpYy0xLjAtUGVybFwiLFxuXHRcIkFydGlzdGljLTEuMC1jbDhcIixcblx0XCJBcnRpc3RpYy0yLjBcIixcblx0XCJBcnRpc3RpYy1kaXN0XCIsXG5cdFwiQXNwZWxsLVJVXCIsXG5cdFwiQk9MQS0xLjFcIixcblx0XCJCU0QtMS1DbGF1c2VcIixcblx0XCJCU0QtMi1DbGF1c2VcIixcblx0XCJCU0QtMi1DbGF1c2UtRGFyd2luXCIsXG5cdFwiQlNELTItQ2xhdXNlLVBhdGVudFwiLFxuXHRcIkJTRC0yLUNsYXVzZS1WaWV3c1wiLFxuXHRcIkJTRC0yLUNsYXVzZS1maXJzdC1saW5lc1wiLFxuXHRcIkJTRC0yLUNsYXVzZS1wa2djb25mLWRpc2NsYWltZXJcIixcblx0XCJCU0QtMy1DbGF1c2VcIixcblx0XCJCU0QtMy1DbGF1c2UtQXR0cmlidXRpb25cIixcblx0XCJCU0QtMy1DbGF1c2UtQ2xlYXJcIixcblx0XCJCU0QtMy1DbGF1c2UtSFBcIixcblx0XCJCU0QtMy1DbGF1c2UtTEJOTFwiLFxuXHRcIkJTRC0zLUNsYXVzZS1Nb2RpZmljYXRpb25cIixcblx0XCJCU0QtMy1DbGF1c2UtTm8tTWlsaXRhcnktTGljZW5zZVwiLFxuXHRcIkJTRC0zLUNsYXVzZS1Oby1OdWNsZWFyLUxpY2Vuc2VcIixcblx0XCJCU0QtMy1DbGF1c2UtTm8tTnVjbGVhci1MaWNlbnNlLTIwMTRcIixcblx0XCJCU0QtMy1DbGF1c2UtTm8tTnVjbGVhci1XYXJyYW50eVwiLFxuXHRcIkJTRC0zLUNsYXVzZS1PcGVuLU1QSVwiLFxuXHRcIkJTRC0zLUNsYXVzZS1TdW5cIixcblx0XCJCU0QtMy1DbGF1c2UtVHNvXCIsXG5cdFwiQlNELTMtQ2xhdXNlLWFjcGljYVwiLFxuXHRcIkJTRC0zLUNsYXVzZS1mbGV4XCIsXG5cdFwiQlNELTQtQ2xhdXNlXCIsXG5cdFwiQlNELTQtQ2xhdXNlLVNob3J0ZW5lZFwiLFxuXHRcIkJTRC00LUNsYXVzZS1VQ1wiLFxuXHRcIkJTRC00LjNSRU5PXCIsXG5cdFwiQlNELTQuM1RBSE9FXCIsXG5cdFwiQlNELUFkdmVydGlzaW5nLUFja25vd2xlZGdlbWVudFwiLFxuXHRcIkJTRC1BdHRyaWJ1dGlvbi1IUE5ELWRpc2NsYWltZXJcIixcblx0XCJCU0QtSW5mZXJuby1OZXR0dmVya1wiLFxuXHRcIkJTRC1NYXJrLU1vZGlmaWNhdGlvbnNcIixcblx0XCJCU0QtUHJvdGVjdGlvblwiLFxuXHRcIkJTRC1Tb3VyY2UtQ29kZVwiLFxuXHRcIkJTRC1Tb3VyY2UtYmVnaW5uaW5nLWZpbGVcIixcblx0XCJCU0QtU3lzdGVtaWNzXCIsXG5cdFwiQlNELVN5c3RlbWljcy1XM1dvcmtzXCIsXG5cdFwiQlNMLTEuMFwiLFxuXHRcIkJVU0wtMS4xXCIsXG5cdFwiQmFla211a1wiLFxuXHRcIkJhaHlwaFwiLFxuXHRcIkJhcnJcIixcblx0XCJCZWVyd2FyZVwiLFxuXHRcIkJpdFRvcnJlbnQtMS4wXCIsXG5cdFwiQml0VG9ycmVudC0xLjFcIixcblx0XCJCaXRzdHJlYW0tQ2hhcnRlclwiLFxuXHRcIkJpdHN0cmVhbS1WZXJhXCIsXG5cdFwiQmx1ZU9hay0xLjAuMFwiLFxuXHRcIkJvZWhtLUdDXCIsXG5cdFwiQm9laG0tR0Mtd2l0aG91dC1mZWVcIixcblx0XCJCb3JjZXV4XCIsXG5cdFwiQnJpYW4tR2xhZG1hbi0yLUNsYXVzZVwiLFxuXHRcIkJyaWFuLUdsYWRtYW4tMy1DbGF1c2VcIixcblx0XCJCdWRkeVwiLFxuXHRcIkMtVURBLTEuMFwiLFxuXHRcIkNBTC0xLjBcIixcblx0XCJDQUwtMS4wLUNvbWJpbmVkLVdvcmstRXhjZXB0aW9uXCIsXG5cdFwiQ0FQRUMtdG91XCIsXG5cdFwiQ0FUT1NMLTEuMVwiLFxuXHRcIkNDLUJZLTEuMFwiLFxuXHRcIkNDLUJZLTIuMFwiLFxuXHRcIkNDLUJZLTIuNVwiLFxuXHRcIkNDLUJZLTIuNS1BVVwiLFxuXHRcIkNDLUJZLTMuMFwiLFxuXHRcIkNDLUJZLTMuMC1BVFwiLFxuXHRcIkNDLUJZLTMuMC1BVVwiLFxuXHRcIkNDLUJZLTMuMC1ERVwiLFxuXHRcIkNDLUJZLTMuMC1JR09cIixcblx0XCJDQy1CWS0zLjAtTkxcIixcblx0XCJDQy1CWS0zLjAtVVNcIixcblx0XCJDQy1CWS00LjBcIixcblx0XCJDQy1CWS1OQy0xLjBcIixcblx0XCJDQy1CWS1OQy0yLjBcIixcblx0XCJDQy1CWS1OQy0yLjVcIixcblx0XCJDQy1CWS1OQy0zLjBcIixcblx0XCJDQy1CWS1OQy0zLjAtREVcIixcblx0XCJDQy1CWS1OQy00LjBcIixcblx0XCJDQy1CWS1OQy1ORC0xLjBcIixcblx0XCJDQy1CWS1OQy1ORC0yLjBcIixcblx0XCJDQy1CWS1OQy1ORC0yLjVcIixcblx0XCJDQy1CWS1OQy1ORC0zLjBcIixcblx0XCJDQy1CWS1OQy1ORC0zLjAtREVcIixcblx0XCJDQy1CWS1OQy1ORC0zLjAtSUdPXCIsXG5cdFwiQ0MtQlktTkMtTkQtNC4wXCIsXG5cdFwiQ0MtQlktTkMtU0EtMS4wXCIsXG5cdFwiQ0MtQlktTkMtU0EtMi4wXCIsXG5cdFwiQ0MtQlktTkMtU0EtMi4wLURFXCIsXG5cdFwiQ0MtQlktTkMtU0EtMi4wLUZSXCIsXG5cdFwiQ0MtQlktTkMtU0EtMi4wLVVLXCIsXG5cdFwiQ0MtQlktTkMtU0EtMi41XCIsXG5cdFwiQ0MtQlktTkMtU0EtMy4wXCIsXG5cdFwiQ0MtQlktTkMtU0EtMy4wLURFXCIsXG5cdFwiQ0MtQlktTkMtU0EtMy4wLUlHT1wiLFxuXHRcIkNDLUJZLU5DLVNBLTQuMFwiLFxuXHRcIkNDLUJZLU5ELTEuMFwiLFxuXHRcIkNDLUJZLU5ELTIuMFwiLFxuXHRcIkNDLUJZLU5ELTIuNVwiLFxuXHRcIkNDLUJZLU5ELTMuMFwiLFxuXHRcIkNDLUJZLU5ELTMuMC1ERVwiLFxuXHRcIkNDLUJZLU5ELTQuMFwiLFxuXHRcIkNDLUJZLVNBLTEuMFwiLFxuXHRcIkNDLUJZLVNBLTIuMFwiLFxuXHRcIkNDLUJZLVNBLTIuMC1VS1wiLFxuXHRcIkNDLUJZLVNBLTIuMS1KUFwiLFxuXHRcIkNDLUJZLVNBLTIuNVwiLFxuXHRcIkNDLUJZLVNBLTMuMFwiLFxuXHRcIkNDLUJZLVNBLTMuMC1BVFwiLFxuXHRcIkNDLUJZLVNBLTMuMC1ERVwiLFxuXHRcIkNDLUJZLVNBLTMuMC1JR09cIixcblx0XCJDQy1CWS1TQS00LjBcIixcblx0XCJDQy1QRERDXCIsXG5cdFwiQ0MtUERNLTEuMFwiLFxuXHRcIkNDLVNBLTEuMFwiLFxuXHRcIkNDMC0xLjBcIixcblx0XCJDRERMLTEuMFwiLFxuXHRcIkNEREwtMS4xXCIsXG5cdFwiQ0RMLTEuMFwiLFxuXHRcIkNETEEtUGVybWlzc2l2ZS0xLjBcIixcblx0XCJDRExBLVBlcm1pc3NpdmUtMi4wXCIsXG5cdFwiQ0RMQS1TaGFyaW5nLTEuMFwiLFxuXHRcIkNFQ0lMTC0xLjBcIixcblx0XCJDRUNJTEwtMS4xXCIsXG5cdFwiQ0VDSUxMLTIuMFwiLFxuXHRcIkNFQ0lMTC0yLjFcIixcblx0XCJDRUNJTEwtQlwiLFxuXHRcIkNFQ0lMTC1DXCIsXG5cdFwiQ0VSTi1PSEwtMS4xXCIsXG5cdFwiQ0VSTi1PSEwtMS4yXCIsXG5cdFwiQ0VSTi1PSEwtUC0yLjBcIixcblx0XCJDRVJOLU9ITC1TLTIuMFwiLFxuXHRcIkNFUk4tT0hMLVctMi4wXCIsXG5cdFwiQ0ZJVFNJT1wiLFxuXHRcIkNNVS1NYWNoXCIsXG5cdFwiQ01VLU1hY2gtbm9kb2NcIixcblx0XCJDTlJJLUp5dGhvblwiLFxuXHRcIkNOUkktUHl0aG9uXCIsXG5cdFwiQ05SSS1QeXRob24tR1BMLUNvbXBhdGlibGVcIixcblx0XCJDT0lMLTEuMFwiLFxuXHRcIkNQQUwtMS4wXCIsXG5cdFwiQ1BMLTEuMFwiLFxuXHRcIkNQT0wtMS4wMlwiLFxuXHRcIkNVQS1PUEwtMS4wXCIsXG5cdFwiQ2FsZGVyYVwiLFxuXHRcIkNhbGRlcmEtbm8tcHJlYW1ibGVcIixcblx0XCJDYXRoYXJvblwiLFxuXHRcIkNsQXJ0aXN0aWNcIixcblx0XCJDbGlwc1wiLFxuXHRcIkNvbW11bml0eS1TcGVjLTEuMFwiLFxuXHRcIkNvbmRvci0xLjFcIixcblx0XCJDb3JuZWxsLUxvc3NsZXNzLUpQRUdcIixcblx0XCJDcm9ueXhcIixcblx0XCJDcm9zc3dvcmRcIixcblx0XCJDcnlwdG9Td2lmdFwiLFxuXHRcIkNyeXN0YWxTdGFja2VyXCIsXG5cdFwiQ3ViZVwiLFxuXHRcIkQtRlNMLTEuMFwiLFxuXHRcIkRFQy0zLUNsYXVzZVwiLFxuXHRcIkRMLURFLUJZLTIuMFwiLFxuXHRcIkRMLURFLVpFUk8tMi4wXCIsXG5cdFwiRE9DXCIsXG5cdFwiRFJMLTEuMFwiLFxuXHRcIkRSTC0xLjFcIixcblx0XCJEU0RQXCIsXG5cdFwiRG9jQm9vay1EVERcIixcblx0XCJEb2NCb29rLVNjaGVtYVwiLFxuXHRcIkRvY0Jvb2stU3R5bGVzaGVldFwiLFxuXHRcIkRvY0Jvb2stWE1MXCIsXG5cdFwiRG90c2VxblwiLFxuXHRcIkVDTC0xLjBcIixcblx0XCJFQ0wtMi4wXCIsXG5cdFwiRUZMLTEuMFwiLFxuXHRcIkVGTC0yLjBcIixcblx0XCJFUElDU1wiLFxuXHRcIkVQTC0xLjBcIixcblx0XCJFUEwtMi4wXCIsXG5cdFwiRVNBLVBMLXBlcm1pc3NpdmUtMi40XCIsXG5cdFwiRVNBLVBMLXN0cm9uZy1jb3B5bGVmdC0yLjRcIixcblx0XCJFU0EtUEwtd2Vhay1jb3B5bGVmdC0yLjRcIixcblx0XCJFVURhdGFncmlkXCIsXG5cdFwiRVVQTC0xLjBcIixcblx0XCJFVVBMLTEuMVwiLFxuXHRcIkVVUEwtMS4yXCIsXG5cdFwiRWxhc3RpYy0yLjBcIixcblx0XCJFbnRlc3NhXCIsXG5cdFwiRXJsUEwtMS4xXCIsXG5cdFwiRXVyb3N5bVwiLFxuXHRcIkZCTVwiLFxuXHRcIkZESy1BQUNcIixcblx0XCJGU0ZBUFwiLFxuXHRcIkZTRkFQLW5vLXdhcnJhbnR5LWRpc2NsYWltZXJcIixcblx0XCJGU0ZVTFwiLFxuXHRcIkZTRlVMTFJcIixcblx0XCJGU0ZVTExSU0RcIixcblx0XCJGU0ZVTExSV0RcIixcblx0XCJGU0wtMS4xLUFMdjJcIixcblx0XCJGU0wtMS4xLU1JVFwiLFxuXHRcIkZUTFwiLFxuXHRcIkZhaXJcIixcblx0XCJGZXJndXNvbi1Ud29maXNoXCIsXG5cdFwiRnJhbWV3b3J4LTEuMFwiLFxuXHRcIkZyZWVCU0QtRE9DXCIsXG5cdFwiRnJlZUltYWdlXCIsXG5cdFwiRnVydXNldGhcIixcblx0XCJHQ1ItZG9jc1wiLFxuXHRcIkdEXCIsXG5cdFwiR0ZETC0xLjEtaW52YXJpYW50cy1vbmx5XCIsXG5cdFwiR0ZETC0xLjEtaW52YXJpYW50cy1vci1sYXRlclwiLFxuXHRcIkdGREwtMS4xLW5vLWludmFyaWFudHMtb25seVwiLFxuXHRcIkdGREwtMS4xLW5vLWludmFyaWFudHMtb3ItbGF0ZXJcIixcblx0XCJHRkRMLTEuMS1vbmx5XCIsXG5cdFwiR0ZETC0xLjEtb3ItbGF0ZXJcIixcblx0XCJHRkRMLTEuMi1pbnZhcmlhbnRzLW9ubHlcIixcblx0XCJHRkRMLTEuMi1pbnZhcmlhbnRzLW9yLWxhdGVyXCIsXG5cdFwiR0ZETC0xLjItbm8taW52YXJpYW50cy1vbmx5XCIsXG5cdFwiR0ZETC0xLjItbm8taW52YXJpYW50cy1vci1sYXRlclwiLFxuXHRcIkdGREwtMS4yLW9ubHlcIixcblx0XCJHRkRMLTEuMi1vci1sYXRlclwiLFxuXHRcIkdGREwtMS4zLWludmFyaWFudHMtb25seVwiLFxuXHRcIkdGREwtMS4zLWludmFyaWFudHMtb3ItbGF0ZXJcIixcblx0XCJHRkRMLTEuMy1uby1pbnZhcmlhbnRzLW9ubHlcIixcblx0XCJHRkRMLTEuMy1uby1pbnZhcmlhbnRzLW9yLWxhdGVyXCIsXG5cdFwiR0ZETC0xLjMtb25seVwiLFxuXHRcIkdGREwtMS4zLW9yLWxhdGVyXCIsXG5cdFwiR0wyUFNcIixcblx0XCJHTFdUUExcIixcblx0XCJHUEwtMS4wLW9ubHlcIixcblx0XCJHUEwtMS4wLW9yLWxhdGVyXCIsXG5cdFwiR1BMLTIuMC1vbmx5XCIsXG5cdFwiR1BMLTIuMC1vci1sYXRlclwiLFxuXHRcIkdQTC0zLjAtb25seVwiLFxuXHRcIkdQTC0zLjAtb3ItbGF0ZXJcIixcblx0XCJHYW1lLVByb2dyYW1taW5nLUdlbXNcIixcblx0XCJHaWZ0d2FyZVwiLFxuXHRcIkdsaWRlXCIsXG5cdFwiR2x1bHhlXCIsXG5cdFwiR3JhcGhpY3MtR2Vtc1wiLFxuXHRcIkd1dG1hbm5cIixcblx0XCJIREY1XCIsXG5cdFwiSElEQVBJXCIsXG5cdFwiSFAtMTk4NlwiLFxuXHRcIkhQLTE5ODlcIixcblx0XCJIUE5EXCIsXG5cdFwiSFBORC1ERUNcIixcblx0XCJIUE5ELUZlbm5lYmVyZy1MaXZpbmdzdG9uXCIsXG5cdFwiSFBORC1JTlJJQS1JTUFHXCIsXG5cdFwiSFBORC1JbnRlbFwiLFxuXHRcIkhQTkQtS2V2bGluLUhlbm5leVwiLFxuXHRcIkhQTkQtTUlULWRpc2NsYWltZXJcIixcblx0XCJIUE5ELU1hcmt1cy1LdWhuXCIsXG5cdFwiSFBORC1OZXRyZWtcIixcblx0XCJIUE5ELVBibXBsdXNcIixcblx0XCJIUE5ELVNNQ1wiLFxuXHRcIkhQTkQtVUNcIixcblx0XCJIUE5ELVVDLWV4cG9ydC1VU1wiLFxuXHRcIkhQTkQtZG9jXCIsXG5cdFwiSFBORC1kb2Mtc2VsbFwiLFxuXHRcIkhQTkQtZXhwb3J0LVVTXCIsXG5cdFwiSFBORC1leHBvcnQtVVMtYWNrbm93bGVkZ2VtZW50XCIsXG5cdFwiSFBORC1leHBvcnQtVVMtbW9kaWZ5XCIsXG5cdFwiSFBORC1leHBvcnQyLVVTXCIsXG5cdFwiSFBORC1tZXJjaGFudGFiaWxpdHktdmFyaWFudFwiLFxuXHRcIkhQTkQtc2VsbC1NSVQtZGlzY2xhaW1lci14c2VydmVyXCIsXG5cdFwiSFBORC1zZWxsLXJlZ2V4cHJcIixcblx0XCJIUE5ELXNlbGwtdmFyaWFudFwiLFxuXHRcIkhQTkQtc2VsbC12YXJpYW50LU1JVC1kaXNjbGFpbWVyXCIsXG5cdFwiSFBORC1zZWxsLXZhcmlhbnQtTUlULWRpc2NsYWltZXItcmV2XCIsXG5cdFwiSFBORC1zZWxsLXZhcmlhbnQtY3JpdGljYWwtc3lzdGVtc1wiLFxuXHRcIkhUTUxUSURZXCIsXG5cdFwiSGFza2VsbFJlcG9ydFwiLFxuXHRcIkhpcHBvY3JhdGljLTIuMVwiLFxuXHRcIklCTS1waWJzXCIsXG5cdFwiSUNVXCIsXG5cdFwiSUVDLUNvZGUtQ29tcG9uZW50cy1FVUxBXCIsXG5cdFwiSUpHXCIsXG5cdFwiSUpHLXNob3J0XCIsXG5cdFwiSVBBXCIsXG5cdFwiSVBMLTEuMFwiLFxuXHRcIklTQ1wiLFxuXHRcIklTQy1WZWlsbGFyZFwiLFxuXHRcIklTTy1wZXJtaXNzaW9uXCIsXG5cdFwiSW1hZ2VNYWdpY2tcIixcblx0XCJJbWxpYjJcIixcblx0XCJJbmZvLVpJUFwiLFxuXHRcIklubmVyLU5ldC0yLjBcIixcblx0XCJJbm5vU2V0dXBcIixcblx0XCJJbnRlbFwiLFxuXHRcIkludGVsLUFDUElcIixcblx0XCJJbnRlcmJhc2UtMS4wXCIsXG5cdFwiSlBMLWltYWdlXCIsXG5cdFwiSlBOSUNcIixcblx0XCJKU09OXCIsXG5cdFwiSmFtXCIsXG5cdFwiSmFzUGVyLTIuMFwiLFxuXHRcIkthc3RydXBcIixcblx0XCJLYXpsaWJcIixcblx0XCJLbnV0aC1DVEFOXCIsXG5cdFwiTEFMLTEuMlwiLFxuXHRcIkxBTC0xLjNcIixcblx0XCJMR1BMLTIuMC1vbmx5XCIsXG5cdFwiTEdQTC0yLjAtb3ItbGF0ZXJcIixcblx0XCJMR1BMLTIuMS1vbmx5XCIsXG5cdFwiTEdQTC0yLjEtb3ItbGF0ZXJcIixcblx0XCJMR1BMLTMuMC1vbmx5XCIsXG5cdFwiTEdQTC0zLjAtb3ItbGF0ZXJcIixcblx0XCJMR1BMTFJcIixcblx0XCJMT09QXCIsXG5cdFwiTFBELWRvY3VtZW50XCIsXG5cdFwiTFBMLTEuMFwiLFxuXHRcIkxQTC0xLjAyXCIsXG5cdFwiTFBQTC0xLjBcIixcblx0XCJMUFBMLTEuMVwiLFxuXHRcIkxQUEwtMS4yXCIsXG5cdFwiTFBQTC0xLjNhXCIsXG5cdFwiTFBQTC0xLjNjXCIsXG5cdFwiTFpNQS1TREstOS4xMS10by05LjIwXCIsXG5cdFwiTFpNQS1TREstOS4yMlwiLFxuXHRcIkxhdGV4MmVcIixcblx0XCJMYXRleDJlLXRyYW5zbGF0ZWQtbm90aWNlXCIsXG5cdFwiTGVwdG9uaWNhXCIsXG5cdFwiTGlMaVEtUC0xLjFcIixcblx0XCJMaUxpUS1SLTEuMVwiLFxuXHRcIkxpTGlRLVJwbHVzLTEuMVwiLFxuXHRcIkxpYnBuZ1wiLFxuXHRcIkxpbnV4LU9wZW5JQlwiLFxuXHRcIkxpbnV4LW1hbi1wYWdlcy0xLXBhcmFcIixcblx0XCJMaW51eC1tYW4tcGFnZXMtY29weWxlZnRcIixcblx0XCJMaW51eC1tYW4tcGFnZXMtY29weWxlZnQtMi1wYXJhXCIsXG5cdFwiTGludXgtbWFuLXBhZ2VzLWNvcHlsZWZ0LXZhclwiLFxuXHRcIkx1Y2lkYS1CaXRtYXAtRm9udHNcIixcblx0XCJNSVBTXCIsXG5cdFwiTUlUXCIsXG5cdFwiTUlULTBcIixcblx0XCJNSVQtQ01VXCIsXG5cdFwiTUlULUNsaWNrXCIsXG5cdFwiTUlULUZlc3RpdmFsXCIsXG5cdFwiTUlULUtocm9ub3Mtb2xkXCIsXG5cdFwiTUlULU1vZGVybi1WYXJpYW50XCIsXG5cdFwiTUlULVNUS1wiLFxuXHRcIk1JVC1XdVwiLFxuXHRcIk1JVC1hZHZlcnRpc2luZ1wiLFxuXHRcIk1JVC1lbm5hXCIsXG5cdFwiTUlULWZlaFwiLFxuXHRcIk1JVC1vcGVuLWdyb3VwXCIsXG5cdFwiTUlULXRlc3RyZWdleFwiLFxuXHRcIk1JVE5GQVwiLFxuXHRcIk1NSVh3YXJlXCIsXG5cdFwiTU1QTC0xLjAuMVwiLFxuXHRcIk1QRUctU1NHXCIsXG5cdFwiTVBMLTEuMFwiLFxuXHRcIk1QTC0xLjFcIixcblx0XCJNUEwtMi4wXCIsXG5cdFwiTVBMLTIuMC1uby1jb3B5bGVmdC1leGNlcHRpb25cIixcblx0XCJNUy1MUExcIixcblx0XCJNUy1QTFwiLFxuXHRcIk1TLVJMXCIsXG5cdFwiTVRMTFwiLFxuXHRcIk1hY2tlcnJhcy0zLUNsYXVzZVwiLFxuXHRcIk1hY2tlcnJhcy0zLUNsYXVzZS1hY2tub3dsZWRnbWVudFwiLFxuXHRcIk1ha2VJbmRleFwiLFxuXHRcIk1hcnRpbi1CaXJnbWVpZXJcIixcblx0XCJNY1BoZWUtc2xpZGVzaG93XCIsXG5cdFwiTWlucGFja1wiLFxuXHRcIk1pck9TXCIsXG5cdFwiTW90b3NvdG9cIixcblx0XCJNdWxhblBTTC0xLjBcIixcblx0XCJNdWxhblBTTC0yLjBcIixcblx0XCJNdWx0aWNzXCIsXG5cdFwiTXVwXCIsXG5cdFwiTkFJU1QtMjAwM1wiLFxuXHRcIk5BU0EtMS4zXCIsXG5cdFwiTkJQTC0xLjBcIixcblx0XCJOQ0JJLVBEXCIsXG5cdFwiTkNHTC1VSy0yLjBcIixcblx0XCJOQ0xcIixcblx0XCJOQ1NBXCIsXG5cdFwiTkdQTFwiLFxuXHRcIk5JQ1RBLTEuMFwiLFxuXHRcIk5JU1QtUERcIixcblx0XCJOSVNULVBELVROVFwiLFxuXHRcIk5JU1QtUEQtZmFsbGJhY2tcIixcblx0XCJOSVNULVNvZnR3YXJlXCIsXG5cdFwiTkxPRC0xLjBcIixcblx0XCJOTE9ELTIuMFwiLFxuXHRcIk5MUExcIixcblx0XCJOT1NMXCIsXG5cdFwiTlBMLTEuMFwiLFxuXHRcIk5QTC0xLjFcIixcblx0XCJOUE9TTC0zLjBcIixcblx0XCJOUkxcIixcblx0XCJOVElBLVBEXCIsXG5cdFwiTlRQXCIsXG5cdFwiTlRQLTBcIixcblx0XCJOYXVtZW5cIixcblx0XCJOZXRDREZcIixcblx0XCJOZXdzbGV0clwiLFxuXHRcIk5va2lhXCIsXG5cdFwiTm93ZWJcIixcblx0XCJPLVVEQS0xLjBcIixcblx0XCJPQVJcIixcblx0XCJPQ0NULVBMXCIsXG5cdFwiT0NMQy0yLjBcIixcblx0XCJPREMtQnktMS4wXCIsXG5cdFwiT0RiTC0xLjBcIixcblx0XCJPRkZJU1wiLFxuXHRcIk9GTC0xLjBcIixcblx0XCJPRkwtMS4wLVJGTlwiLFxuXHRcIk9GTC0xLjAtbm8tUkZOXCIsXG5cdFwiT0ZMLTEuMVwiLFxuXHRcIk9GTC0xLjEtUkZOXCIsXG5cdFwiT0ZMLTEuMS1uby1SRk5cIixcblx0XCJPR0MtMS4wXCIsXG5cdFwiT0dETC1UYWl3YW4tMS4wXCIsXG5cdFwiT0dMLUNhbmFkYS0yLjBcIixcblx0XCJPR0wtVUstMS4wXCIsXG5cdFwiT0dMLVVLLTIuMFwiLFxuXHRcIk9HTC1VSy0zLjBcIixcblx0XCJPR1RTTFwiLFxuXHRcIk9MREFQLTEuMVwiLFxuXHRcIk9MREFQLTEuMlwiLFxuXHRcIk9MREFQLTEuM1wiLFxuXHRcIk9MREFQLTEuNFwiLFxuXHRcIk9MREFQLTIuMFwiLFxuXHRcIk9MREFQLTIuMC4xXCIsXG5cdFwiT0xEQVAtMi4xXCIsXG5cdFwiT0xEQVAtMi4yXCIsXG5cdFwiT0xEQVAtMi4yLjFcIixcblx0XCJPTERBUC0yLjIuMlwiLFxuXHRcIk9MREFQLTIuM1wiLFxuXHRcIk9MREFQLTIuNFwiLFxuXHRcIk9MREFQLTIuNVwiLFxuXHRcIk9MREFQLTIuNlwiLFxuXHRcIk9MREFQLTIuN1wiLFxuXHRcIk9MREFQLTIuOFwiLFxuXHRcIk9MRkwtMS4zXCIsXG5cdFwiT01MXCIsXG5cdFwiT1BMLTEuMFwiLFxuXHRcIk9QTC1VSy0zLjBcIixcblx0XCJPUFVCTC0xLjBcIixcblx0XCJPU0MtMS4wXCIsXG5cdFwiT1NFVC1QTC0yLjFcIixcblx0XCJPU0wtMS4wXCIsXG5cdFwiT1NMLTEuMVwiLFxuXHRcIk9TTC0yLjBcIixcblx0XCJPU0wtMi4xXCIsXG5cdFwiT1NMLTMuMFwiLFxuXHRcIk9TU1BcIixcblx0XCJPcGVuTURXLTEuMFwiLFxuXHRcIk9wZW5QQlMtMi4zXCIsXG5cdFwiT3BlblNTTFwiLFxuXHRcIk9wZW5TU0wtc3RhbmRhbG9uZVwiLFxuXHRcIk9wZW5WaXNpb25cIixcblx0XCJQQURMXCIsXG5cdFwiUERETC0xLjBcIixcblx0XCJQSFAtMy4wXCIsXG5cdFwiUEhQLTMuMDFcIixcblx0XCJQUExcIixcblx0XCJQU0YtMi4wXCIsXG5cdFwiUGFyYVR5cGUtRnJlZS1Gb250LTEuM1wiLFxuXHRcIlBhcml0eS02LjAuMFwiLFxuXHRcIlBhcml0eS03LjAuMFwiLFxuXHRcIlBpeGFyXCIsXG5cdFwiUGxleHVzXCIsXG5cdFwiUG9seUZvcm0tTm9uY29tbWVyY2lhbC0xLjAuMFwiLFxuXHRcIlBvbHlGb3JtLVNtYWxsLUJ1c2luZXNzLTEuMC4wXCIsXG5cdFwiUG9zdGdyZVNRTFwiLFxuXHRcIlB5dGhvbi0yLjBcIixcblx0XCJQeXRob24tMi4wLjFcIixcblx0XCJRUEwtMS4wXCIsXG5cdFwiUVBMLTEuMC1JTlJJQS0yMDA0XCIsXG5cdFwiUWh1bGxcIixcblx0XCJSSGVDb3MtMS4xXCIsXG5cdFwiUlBMLTEuMVwiLFxuXHRcIlJQTC0xLjVcIixcblx0XCJSUFNMLTEuMFwiLFxuXHRcIlJTQS1NRFwiLFxuXHRcIlJTQ1BMXCIsXG5cdFwiUmRpc2NcIixcblx0XCJSdWJ5XCIsXG5cdFwiUnVieS1wdHlcIixcblx0XCJTQVgtUERcIixcblx0XCJTQVgtUEQtMi4wXCIsXG5cdFwiU0NFQVwiLFxuXHRcIlNHSS1CLTEuMFwiLFxuXHRcIlNHSS1CLTEuMVwiLFxuXHRcIlNHSS1CLTIuMFwiLFxuXHRcIlNHSS1PcGVuR0xcIixcblx0XCJTR01MVUctUE1cIixcblx0XCJTR1A0XCIsXG5cdFwiU0hMLTAuNVwiLFxuXHRcIlNITC0wLjUxXCIsXG5cdFwiU0lTU0xcIixcblx0XCJTSVNTTC0xLjJcIixcblx0XCJTTFwiLFxuXHRcIlNNQUlMLUdQTFwiLFxuXHRcIlNNTE5KXCIsXG5cdFwiU01QUExcIixcblx0XCJTTklBXCIsXG5cdFwiU09GQVwiLFxuXHRcIlNQTC0xLjBcIixcblx0XCJTU0gtT3BlblNTSFwiLFxuXHRcIlNTSC1zaG9ydFwiLFxuXHRcIlNTTGVheS1zdGFuZGFsb25lXCIsXG5cdFwiU1NQTC0xLjBcIixcblx0XCJTVUwtMS4wXCIsXG5cdFwiU1dMXCIsXG5cdFwiU2F4cGF0aFwiLFxuXHRcIlNjaGVtZVJlcG9ydFwiLFxuXHRcIlNlbmRtYWlsXCIsXG5cdFwiU2VuZG1haWwtOC4yM1wiLFxuXHRcIlNlbmRtYWlsLU9wZW4tU291cmNlLTEuMVwiLFxuXHRcIlNpbVBMLTIuMFwiLFxuXHRcIlNsZWVweWNhdFwiLFxuXHRcIlNvdW5kZXhcIixcblx0XCJTcGVuY2VyLTg2XCIsXG5cdFwiU3BlbmNlci05NFwiLFxuXHRcIlNwZW5jZXItOTlcIixcblx0XCJTdWdhckNSTS0xLjEuM1wiLFxuXHRcIlN1bi1QUFBcIixcblx0XCJTdW4tUFBQLTIwMDBcIixcblx0XCJTdW5Qcm9cIixcblx0XCJTeW1saW5rc1wiLFxuXHRcIlRBUFItT0hMLTEuMFwiLFxuXHRcIlRDTFwiLFxuXHRcIlRDUC13cmFwcGVyc1wiLFxuXHRcIlRHUFBMLTEuMFwiLFxuXHRcIlRNYXRlXCIsXG5cdFwiVE9SUVVFLTEuMVwiLFxuXHRcIlRPU0xcIixcblx0XCJUUERMXCIsXG5cdFwiVFBMLTEuMFwiLFxuXHRcIlRUV0xcIixcblx0XCJUVFlQMFwiLFxuXHRcIlRVLUJlcmxpbi0xLjBcIixcblx0XCJUVS1CZXJsaW4tMi4wXCIsXG5cdFwiVGVrSFZDXCIsXG5cdFwiVGVybVJlYWRLZXlcIixcblx0XCJUaGlyZEV5ZVwiLFxuXHRcIlRydXN0ZWRRU0xcIixcblx0XCJVQ0FSXCIsXG5cdFwiVUNMLTEuMFwiLFxuXHRcIlVNaWNoLU1lcml0XCIsXG5cdFwiVVBMLTEuMFwiLFxuXHRcIlVSVC1STEVcIixcblx0XCJVYnVudHUtZm9udC0xLjBcIixcblx0XCJVblJBUlwiLFxuXHRcIlVuaWNvZGUtMy4wXCIsXG5cdFwiVW5pY29kZS1ERlMtMjAxNVwiLFxuXHRcIlVuaWNvZGUtREZTLTIwMTZcIixcblx0XCJVbmljb2RlLVRPVVwiLFxuXHRcIlVuaXhDcnlwdFwiLFxuXHRcIlVubGljZW5zZVwiLFxuXHRcIlVubGljZW5zZS1saWJ0ZWxuZXRcIixcblx0XCJVbmxpY2Vuc2UtbGlid2hpcmxwb29sXCIsXG5cdFwiVk9TVFJPTVwiLFxuXHRcIlZTTC0xLjBcIixcblx0XCJWaW1cIixcblx0XCJWaXhpZS1Dcm9uXCIsXG5cdFwiVzNDXCIsXG5cdFwiVzNDLTE5OTgwNzIwXCIsXG5cdFwiVzNDLTIwMTUwNTEzXCIsXG5cdFwiV1RGTk1GUExcIixcblx0XCJXVEZQTFwiLFxuXHRcIldhdGNvbS0xLjBcIixcblx0XCJXaWRnZXQtV29ya3Nob3BcIixcblx0XCJXb3JkTmV0XCIsXG5cdFwiV3N1aXBhXCIsXG5cdFwiWDExXCIsXG5cdFwiWDExLWRpc3RyaWJ1dGUtbW9kaWZpY2F0aW9ucy12YXJpYW50XCIsXG5cdFwiWDExLW5vLXBlcm1pdC1wZXJzb25zXCIsXG5cdFwiWDExLXN3YXBwZWRcIixcblx0XCJYRnJlZTg2LTEuMVwiLFxuXHRcIlhTa2F0XCIsXG5cdFwiWGRlYnVnLTEuMDNcIixcblx0XCJYZXJveFwiLFxuXHRcIlhmaWdcIixcblx0XCJYbmV0XCIsXG5cdFwiWVBMLTEuMFwiLFxuXHRcIllQTC0xLjFcIixcblx0XCJaUEwtMS4xXCIsXG5cdFwiWlBMLTIuMFwiLFxuXHRcIlpQTC0yLjFcIixcblx0XCJaZWRcIixcblx0XCJaZWVmZlwiLFxuXHRcIlplbmQtMi4wXCIsXG5cdFwiWmltYnJhLTEuM1wiLFxuXHRcIlppbWJyYS0xLjRcIixcblx0XCJabGliXCIsXG5cdFwiYW55LU9TSVwiLFxuXHRcImFueS1PU0ktcGVybC1tb2R1bGVzXCIsXG5cdFwiYmNyeXB0LVNvbGFyLURlc2lnbmVyXCIsXG5cdFwiYmxlc3NpbmdcIixcblx0XCJiemlwMi0xLjAuNlwiLFxuXHRcImNoZWNrLWN2c1wiLFxuXHRcImNoZWNrbWtcIixcblx0XCJjb3B5bGVmdC1uZXh0LTAuMy4wXCIsXG5cdFwiY29weWxlZnQtbmV4dC0wLjMuMVwiLFxuXHRcImN1cmxcIixcblx0XCJjdmUtdG91XCIsXG5cdFwiZGlmZm1hcmtcIixcblx0XCJkdG9hXCIsXG5cdFwiZHZpcGRmbVwiLFxuXHRcImVHZW5peFwiLFxuXHRcImV0YWxhYi0yLjBcIixcblx0XCJmd2x3XCIsXG5cdFwiZ1NPQVAtMS4zYlwiLFxuXHRcImdlbmVyaWMteHRzXCIsXG5cdFwiZ251cGxvdFwiLFxuXHRcImd0a2Jvb2tcIixcblx0XCJoZHBhcm1cIixcblx0XCJoeXBoZW4tYnVsZ2FyaWFuXCIsXG5cdFwiaU1hdGl4XCIsXG5cdFwiam92ZVwiLFxuXHRcImxpYnBuZy0xLjYuMzVcIixcblx0XCJsaWJwbmctMi4wXCIsXG5cdFwibGlic2VsaW51eC0xLjBcIixcblx0XCJsaWJ0aWZmXCIsXG5cdFwibGlidXRpbC1EYXZpZC1OdWdlbnRcIixcblx0XCJsc29mXCIsXG5cdFwibWFnYXpcIixcblx0XCJtYWlscHJpb1wiLFxuXHRcIm1hbjJodG1sXCIsXG5cdFwibWV0YW1haWxcIixcblx0XCJtcGktcGVybWlzc2l2ZVwiLFxuXHRcIm1waWNoMlwiLFxuXHRcIm1wbHVzXCIsXG5cdFwibmdyZXBcIixcblx0XCJwa2djb25mXCIsXG5cdFwicG5tc3RpdGNoXCIsXG5cdFwicHNmcmFnXCIsXG5cdFwicHN1dGlsc1wiLFxuXHRcInB5dGhvbi1sZGFwXCIsXG5cdFwicmFkdmRcIixcblx0XCJzbnByaW50ZlwiLFxuXHRcInNvZnRTdXJmZXJcIixcblx0XCJzc2gta2V5c2NhblwiLFxuXHRcInN3cnVsZVwiLFxuXHRcInRocmVlcGFydHRhYmxlXCIsXG5cdFwidWxlbVwiLFxuXHRcInczbVwiLFxuXHRcInd3bFwiLFxuXHRcInhpbmV0ZFwiLFxuXHRcInhrZXlib2FyZC1jb25maWctWmlub3ZpZXZcIixcblx0XCJ4bG9ja1wiLFxuXHRcInhwcFwiLFxuXHRcInh6b29tXCIsXG5cdFwiemxpYi1hY2tub3dsZWRnZW1lbnRcIlxuXVxuIiwgIltcblx0XCJBR1BMLTEuMFwiLFxuXHRcIkFHUEwtMy4wXCIsXG5cdFwiQlNELTItQ2xhdXNlLUZyZWVCU0RcIixcblx0XCJCU0QtMi1DbGF1c2UtTmV0QlNEXCIsXG5cdFwiR0ZETC0xLjFcIixcblx0XCJHRkRMLTEuMlwiLFxuXHRcIkdGREwtMS4zXCIsXG5cdFwiR1BMLTEuMFwiLFxuXHRcIkdQTC0yLjBcIixcblx0XCJHUEwtMi4wLXdpdGgtR0NDLWV4Y2VwdGlvblwiLFxuXHRcIkdQTC0yLjAtd2l0aC1hdXRvY29uZi1leGNlcHRpb25cIixcblx0XCJHUEwtMi4wLXdpdGgtYmlzb24tZXhjZXB0aW9uXCIsXG5cdFwiR1BMLTIuMC13aXRoLWNsYXNzcGF0aC1leGNlcHRpb25cIixcblx0XCJHUEwtMi4wLXdpdGgtZm9udC1leGNlcHRpb25cIixcblx0XCJHUEwtMy4wXCIsXG5cdFwiR1BMLTMuMC13aXRoLUdDQy1leGNlcHRpb25cIixcblx0XCJHUEwtMy4wLXdpdGgtYXV0b2NvbmYtZXhjZXB0aW9uXCIsXG5cdFwiTEdQTC0yLjBcIixcblx0XCJMR1BMLTIuMVwiLFxuXHRcIkxHUEwtMy4wXCIsXG5cdFwiTmV0LVNOTVBcIixcblx0XCJOdW5pdFwiLFxuXHRcIlN0YW5kYXJkTUwtTkpcIixcblx0XCJiemlwMi0xLjAuNVwiLFxuXHRcImVDb3MtMi4wXCIsXG5cdFwid3hXaW5kb3dzXCJcbl1cbiIsICJbXG4gIFwiMzg5LWV4Y2VwdGlvblwiLFxuICBcIkFzdGVyaXNrLWV4Y2VwdGlvblwiLFxuICBcIkF1dG9jb25mLWV4Y2VwdGlvbi0yLjBcIixcbiAgXCJBdXRvY29uZi1leGNlcHRpb24tMy4wXCIsXG4gIFwiQXV0b2NvbmYtZXhjZXB0aW9uLWdlbmVyaWNcIixcbiAgXCJBdXRvY29uZi1leGNlcHRpb24tZ2VuZXJpYy0zLjBcIixcbiAgXCJBdXRvY29uZi1leGNlcHRpb24tbWFjcm9cIixcbiAgXCJCaXNvbi1leGNlcHRpb24tMS4yNFwiLFxuICBcIkJpc29uLWV4Y2VwdGlvbi0yLjJcIixcbiAgXCJCb290bG9hZGVyLWV4Y2VwdGlvblwiLFxuICBcIkNsYXNzcGF0aC1leGNlcHRpb24tMi4wXCIsXG4gIFwiQ0xJU1AtZXhjZXB0aW9uLTIuMFwiLFxuICBcImNyeXB0c2V0dXAtT3BlblNTTC1leGNlcHRpb25cIixcbiAgXCJEaWdpUnVsZS1GT1NTLWV4Y2VwdGlvblwiLFxuICBcImVDb3MtZXhjZXB0aW9uLTIuMFwiLFxuICBcIkZhd2tlcy1SdW50aW1lLWV4Y2VwdGlvblwiLFxuICBcIkZMVEstZXhjZXB0aW9uXCIsXG4gIFwiZm10LWV4Y2VwdGlvblwiLFxuICBcIkZvbnQtZXhjZXB0aW9uLTIuMFwiLFxuICBcImZyZWVydG9zLWV4Y2VwdGlvbi0yLjBcIixcbiAgXCJHQ0MtZXhjZXB0aW9uLTIuMFwiLFxuICBcIkdDQy1leGNlcHRpb24tMi4wLW5vdGVcIixcbiAgXCJHQ0MtZXhjZXB0aW9uLTMuMVwiLFxuICBcIkdtc2gtZXhjZXB0aW9uXCIsXG4gIFwiR05BVC1leGNlcHRpb25cIixcbiAgXCJHTk9NRS1leGFtcGxlcy1leGNlcHRpb25cIixcbiAgXCJHTlUtY29tcGlsZXItZXhjZXB0aW9uXCIsXG4gIFwiZ251LWphdmFtYWlsLWV4Y2VwdGlvblwiLFxuICBcIkdQTC0zLjAtaW50ZXJmYWNlLWV4Y2VwdGlvblwiLFxuICBcIkdQTC0zLjAtbGlua2luZy1leGNlcHRpb25cIixcbiAgXCJHUEwtMy4wLWxpbmtpbmctc291cmNlLWV4Y2VwdGlvblwiLFxuICBcIkdQTC1DQy0xLjBcIixcbiAgXCJHU3RyZWFtZXItZXhjZXB0aW9uLTIwMDVcIixcbiAgXCJHU3RyZWFtZXItZXhjZXB0aW9uLTIwMDhcIixcbiAgXCJpMnAtZ3BsLWphdmEtZXhjZXB0aW9uXCIsXG4gIFwiS2lDYWQtbGlicmFyaWVzLWV4Y2VwdGlvblwiLFxuICBcIkxHUEwtMy4wLWxpbmtpbmctZXhjZXB0aW9uXCIsXG4gIFwibGlicHJpLU9wZW5IMzIzLWV4Y2VwdGlvblwiLFxuICBcIkxpYnRvb2wtZXhjZXB0aW9uXCIsXG4gIFwiTGludXgtc3lzY2FsbC1ub3RlXCIsXG4gIFwiTExHUExcIixcbiAgXCJMTFZNLWV4Y2VwdGlvblwiLFxuICBcIkxaTUEtZXhjZXB0aW9uXCIsXG4gIFwibWlmLWV4Y2VwdGlvblwiLFxuICBcIk9DYW1sLUxHUEwtbGlua2luZy1leGNlcHRpb25cIixcbiAgXCJPQ0NULWV4Y2VwdGlvbi0xLjBcIixcbiAgXCJPcGVuSkRLLWFzc2VtYmx5LWV4Y2VwdGlvbi0xLjBcIixcbiAgXCJvcGVudnBuLW9wZW5zc2wtZXhjZXB0aW9uXCIsXG4gIFwiUFMtb3ItUERGLWZvbnQtZXhjZXB0aW9uLTIwMTcwODE3XCIsXG4gIFwiUVBMLTEuMC1JTlJJQS0yMDA0LWV4Y2VwdGlvblwiLFxuICBcIlF0LUdQTC1leGNlcHRpb24tMS4wXCIsXG4gIFwiUXQtTEdQTC1leGNlcHRpb24tMS4xXCIsXG4gIFwiUXd0LWV4Y2VwdGlvbi0xLjBcIixcbiAgXCJTQU5FLWV4Y2VwdGlvblwiLFxuICBcIlNITC0yLjBcIixcbiAgXCJTSEwtMi4xXCIsXG4gIFwic3R1bm5lbC1leGNlcHRpb25cIixcbiAgXCJTV0ktZXhjZXB0aW9uXCIsXG4gIFwiU3dpZnQtZXhjZXB0aW9uXCIsXG4gIFwiVGV4aW5mby1leGNlcHRpb25cIixcbiAgXCJ1LWJvb3QtZXhjZXB0aW9uLTIuMFwiLFxuICBcIlVCREwtZXhjZXB0aW9uXCIsXG4gIFwiVW5pdmVyc2FsLUZPU1MtZXhjZXB0aW9uLTEuMFwiLFxuICBcInZzZnRwZC1vcGVuc3NsLWV4Y2VwdGlvblwiLFxuICBcIld4V2luZG93cy1leGNlcHRpb24tMy4xXCIsXG4gIFwieDExdm5jLW9wZW5zc2wtZXhjZXB0aW9uXCJcbl1cbiIsICIndXNlIHN0cmljdCdcblxudmFyIGxpY2Vuc2VzID0gW11cbiAgLmNvbmNhdChyZXF1aXJlKCdzcGR4LWxpY2Vuc2UtaWRzJykpXG4gIC5jb25jYXQocmVxdWlyZSgnc3BkeC1saWNlbnNlLWlkcy9kZXByZWNhdGVkJykpXG52YXIgZXhjZXB0aW9ucyA9IHJlcXVpcmUoJ3NwZHgtZXhjZXB0aW9ucycpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNvdXJjZSkge1xuICB2YXIgaW5kZXggPSAwXG5cbiAgZnVuY3Rpb24gaGFzTW9yZSAoKSB7XG4gICAgcmV0dXJuIGluZGV4IDwgc291cmNlLmxlbmd0aFxuICB9XG5cbiAgLy8gYHZhbHVlYCBjYW4gYmUgYSByZWdleHAgb3IgYSBzdHJpbmcuXG4gIC8vIElmIGl0IGlzIHJlY29nbml6ZWQsIHRoZSBtYXRjaGluZyBzb3VyY2Ugc3RyaW5nIGlzIHJldHVybmVkIGFuZFxuICAvLyB0aGUgaW5kZXggaXMgaW5jcmVtZW50ZWQuIE90aGVyd2lzZSBgdW5kZWZpbmVkYCBpcyByZXR1cm5lZC5cbiAgZnVuY3Rpb24gcmVhZCAodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIHZhciBjaGFycyA9IHNvdXJjZS5zbGljZShpbmRleClcbiAgICAgIHZhciBtYXRjaCA9IGNoYXJzLm1hdGNoKHZhbHVlKVxuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGluZGV4ICs9IG1hdGNoWzBdLmxlbmd0aFxuICAgICAgICByZXR1cm4gbWF0Y2hbMF1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHNvdXJjZS5pbmRleE9mKHZhbHVlLCBpbmRleCkgPT09IGluZGV4KSB7XG4gICAgICAgIGluZGV4ICs9IHZhbHVlLmxlbmd0aFxuICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBza2lwV2hpdGVzcGFjZSAoKSB7XG4gICAgcmVhZCgvWyBdKi8pXG4gIH1cblxuICBmdW5jdGlvbiBvcGVyYXRvciAoKSB7XG4gICAgdmFyIHN0cmluZ1xuICAgIHZhciBwb3NzaWJpbGl0aWVzID0gWydXSVRIJywgJ0FORCcsICdPUicsICcoJywgJyknLCAnOicsICcrJ11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvc3NpYmlsaXRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHN0cmluZyA9IHJlYWQocG9zc2liaWxpdGllc1tpXSlcbiAgICAgIGlmIChzdHJpbmcpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RyaW5nID09PSAnKycgJiYgaW5kZXggPiAxICYmIHNvdXJjZVtpbmRleCAtIDJdID09PSAnICcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignU3BhY2UgYmVmb3JlIGArYCcpXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZyAmJiB7XG4gICAgICB0eXBlOiAnT1BFUkFUT1InLFxuICAgICAgc3RyaW5nOiBzdHJpbmdcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpZHN0cmluZyAoKSB7XG4gICAgcmV0dXJuIHJlYWQoL1tBLVphLXowLTktLl0rLylcbiAgfVxuXG4gIGZ1bmN0aW9uIGV4cGVjdElkc3RyaW5nICgpIHtcbiAgICB2YXIgc3RyaW5nID0gaWRzdHJpbmcoKVxuICAgIGlmICghc3RyaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGlkc3RyaW5nIGF0IG9mZnNldCAnICsgaW5kZXgpXG4gICAgfVxuICAgIHJldHVybiBzdHJpbmdcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvY3VtZW50UmVmICgpIHtcbiAgICBpZiAocmVhZCgnRG9jdW1lbnRSZWYtJykpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBleHBlY3RJZHN0cmluZygpXG4gICAgICByZXR1cm4geyB0eXBlOiAnRE9DVU1FTlRSRUYnLCBzdHJpbmc6IHN0cmluZyB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbGljZW5zZVJlZiAoKSB7XG4gICAgaWYgKHJlYWQoJ0xpY2Vuc2VSZWYtJykpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBleHBlY3RJZHN0cmluZygpXG4gICAgICByZXR1cm4geyB0eXBlOiAnTElDRU5TRVJFRicsIHN0cmluZzogc3RyaW5nIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpZGVudGlmaWVyICgpIHtcbiAgICB2YXIgYmVnaW4gPSBpbmRleFxuICAgIHZhciBzdHJpbmcgPSBpZHN0cmluZygpXG5cbiAgICBpZiAobGljZW5zZXMuaW5kZXhPZihzdHJpbmcpICE9PSAtMSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ0xJQ0VOU0UnLFxuICAgICAgICBzdHJpbmc6IHN0cmluZ1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZXhjZXB0aW9ucy5pbmRleE9mKHN0cmluZykgIT09IC0xKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnRVhDRVBUSU9OJyxcbiAgICAgICAgc3RyaW5nOiBzdHJpbmdcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbmRleCA9IGJlZ2luXG4gIH1cblxuICAvLyBUcmllcyB0byByZWFkIHRoZSBuZXh0IHRva2VuLiBSZXR1cm5zIGB1bmRlZmluZWRgIGlmIG5vIHRva2VuIGlzXG4gIC8vIHJlY29nbml6ZWQuXG4gIGZ1bmN0aW9uIHBhcnNlVG9rZW4gKCkge1xuICAgIC8vIE9yZGVyaW5nIG1hdHRlcnNcbiAgICByZXR1cm4gKFxuICAgICAgb3BlcmF0b3IoKSB8fFxuICAgICAgZG9jdW1lbnRSZWYoKSB8fFxuICAgICAgbGljZW5zZVJlZigpIHx8XG4gICAgICBpZGVudGlmaWVyKClcbiAgICApXG4gIH1cblxuICB2YXIgdG9rZW5zID0gW11cbiAgd2hpbGUgKGhhc01vcmUoKSkge1xuICAgIHNraXBXaGl0ZXNwYWNlKClcbiAgICBpZiAoIWhhc01vcmUoKSkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICB2YXIgdG9rZW4gPSBwYXJzZVRva2VuKClcbiAgICBpZiAoIXRva2VuKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgYCcgKyBzb3VyY2VbaW5kZXhdICtcbiAgICAgICAgICAgICAgICAgICAgICAnYCBhdCBvZmZzZXQgJyArIGluZGV4KVxuICAgIH1cblxuICAgIHRva2Vucy5wdXNoKHRva2VuKVxuICB9XG4gIHJldHVybiB0b2tlbnNcbn1cbiIsICIndXNlIHN0cmljdCdcblxuLy8gVGhlIEFCTkYgZ3JhbW1hciBpbiB0aGUgc3BlYyBpcyB0b3RhbGx5IGFtYmlndW91cy5cbi8vXG4vLyBUaGlzIHBhcnNlciBmb2xsb3dzIHRoZSBvcGVyYXRvciBwcmVjZWRlbmNlIGRlZmluZWQgaW4gdGhlXG4vLyBgT3JkZXIgb2YgUHJlY2VkZW5jZSBhbmQgUGFyZW50aGVzZXNgIHNlY3Rpb24uXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRva2Vucykge1xuICB2YXIgaW5kZXggPSAwXG5cbiAgZnVuY3Rpb24gaGFzTW9yZSAoKSB7XG4gICAgcmV0dXJuIGluZGV4IDwgdG9rZW5zLmxlbmd0aFxuICB9XG5cbiAgZnVuY3Rpb24gdG9rZW4gKCkge1xuICAgIHJldHVybiBoYXNNb3JlKCkgPyB0b2tlbnNbaW5kZXhdIDogbnVsbFxuICB9XG5cbiAgZnVuY3Rpb24gbmV4dCAoKSB7XG4gICAgaWYgKCFoYXNNb3JlKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigpXG4gICAgfVxuICAgIGluZGV4KytcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlT3BlcmF0b3IgKG9wZXJhdG9yKSB7XG4gICAgdmFyIHQgPSB0b2tlbigpXG4gICAgaWYgKHQgJiYgdC50eXBlID09PSAnT1BFUkFUT1InICYmIG9wZXJhdG9yID09PSB0LnN0cmluZykge1xuICAgICAgbmV4dCgpXG4gICAgICByZXR1cm4gdC5zdHJpbmdcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZVdpdGggKCkge1xuICAgIGlmIChwYXJzZU9wZXJhdG9yKCdXSVRIJykpIHtcbiAgICAgIHZhciB0ID0gdG9rZW4oKVxuICAgICAgaWYgKHQgJiYgdC50eXBlID09PSAnRVhDRVBUSU9OJykge1xuICAgICAgICBuZXh0KClcbiAgICAgICAgcmV0dXJuIHQuc3RyaW5nXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGV4Y2VwdGlvbiBhZnRlciBgV0lUSGAnKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlTGljZW5zZVJlZiAoKSB7XG4gICAgLy8gVE9ETzogQWN0dWFsbHksIGV2ZXJ5dGhpbmcgaXMgY29uY2F0ZW5hdGVkIGludG8gb25lIHN0cmluZ1xuICAgIC8vIGZvciBiYWNrd2FyZC1jb21wYXRpYmlsaXR5IGJ1dCBpdCBjb3VsZCBiZSBiZXR0ZXIgdG8gcmV0dXJuXG4gICAgLy8gYSBuaWNlIHN0cnVjdHVyZS5cbiAgICB2YXIgYmVnaW4gPSBpbmRleFxuICAgIHZhciBzdHJpbmcgPSAnJ1xuICAgIHZhciB0ID0gdG9rZW4oKVxuICAgIGlmICh0LnR5cGUgPT09ICdET0NVTUVOVFJFRicpIHtcbiAgICAgIG5leHQoKVxuICAgICAgc3RyaW5nICs9ICdEb2N1bWVudFJlZi0nICsgdC5zdHJpbmcgKyAnOidcbiAgICAgIGlmICghcGFyc2VPcGVyYXRvcignOicpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgYDpgIGFmdGVyIGBEb2N1bWVudFJlZi0uLi5gJylcbiAgICAgIH1cbiAgICB9XG4gICAgdCA9IHRva2VuKClcbiAgICBpZiAodC50eXBlID09PSAnTElDRU5TRVJFRicpIHtcbiAgICAgIG5leHQoKVxuICAgICAgc3RyaW5nICs9ICdMaWNlbnNlUmVmLScgKyB0LnN0cmluZ1xuICAgICAgcmV0dXJuIHsgbGljZW5zZTogc3RyaW5nIH1cbiAgICB9XG4gICAgaW5kZXggPSBiZWdpblxuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VMaWNlbnNlICgpIHtcbiAgICB2YXIgdCA9IHRva2VuKClcbiAgICBpZiAodCAmJiB0LnR5cGUgPT09ICdMSUNFTlNFJykge1xuICAgICAgbmV4dCgpXG4gICAgICB2YXIgbm9kZSA9IHsgbGljZW5zZTogdC5zdHJpbmcgfVxuICAgICAgaWYgKHBhcnNlT3BlcmF0b3IoJysnKSkge1xuICAgICAgICBub2RlLnBsdXMgPSB0cnVlXG4gICAgICB9XG4gICAgICB2YXIgZXhjZXB0aW9uID0gcGFyc2VXaXRoKClcbiAgICAgIGlmIChleGNlcHRpb24pIHtcbiAgICAgICAgbm9kZS5leGNlcHRpb24gPSBleGNlcHRpb25cbiAgICAgIH1cbiAgICAgIHJldHVybiBub2RlXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VQYXJlbnRoZXNpemVkRXhwcmVzc2lvbiAoKSB7XG4gICAgdmFyIGxlZnQgPSBwYXJzZU9wZXJhdG9yKCcoJylcbiAgICBpZiAoIWxlZnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhciBleHByID0gcGFyc2VFeHByZXNzaW9uKClcblxuICAgIGlmICghcGFyc2VPcGVyYXRvcignKScpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGApYCcpXG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cHJcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlQXRvbSAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHBhcnNlUGFyZW50aGVzaXplZEV4cHJlc3Npb24oKSB8fFxuICAgICAgcGFyc2VMaWNlbnNlUmVmKCkgfHxcbiAgICAgIHBhcnNlTGljZW5zZSgpXG4gICAgKVxuICB9XG5cbiAgZnVuY3Rpb24gbWFrZUJpbmFyeU9wUGFyc2VyIChvcGVyYXRvciwgbmV4dFBhcnNlcikge1xuICAgIHJldHVybiBmdW5jdGlvbiBwYXJzZUJpbmFyeU9wICgpIHtcbiAgICAgIHZhciBsZWZ0ID0gbmV4dFBhcnNlcigpXG4gICAgICBpZiAoIWxlZnQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICghcGFyc2VPcGVyYXRvcihvcGVyYXRvcikpIHtcbiAgICAgICAgcmV0dXJuIGxlZnRcbiAgICAgIH1cblxuICAgICAgdmFyIHJpZ2h0ID0gcGFyc2VCaW5hcnlPcCgpXG4gICAgICBpZiAoIXJpZ2h0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgZXhwcmVzc2lvbicpXG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICBjb25qdW5jdGlvbjogb3BlcmF0b3IudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgcmlnaHQ6IHJpZ2h0XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIHBhcnNlQW5kID0gbWFrZUJpbmFyeU9wUGFyc2VyKCdBTkQnLCBwYXJzZUF0b20pXG4gIHZhciBwYXJzZUV4cHJlc3Npb24gPSBtYWtlQmluYXJ5T3BQYXJzZXIoJ09SJywgcGFyc2VBbmQpXG5cbiAgdmFyIG5vZGUgPSBwYXJzZUV4cHJlc3Npb24oKVxuICBpZiAoIW5vZGUgfHwgaGFzTW9yZSgpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTeW50YXggZXJyb3InKVxuICB9XG4gIHJldHVybiBub2RlXG59XG4iLCAiJ3VzZSBzdHJpY3QnXG5cbnZhciBzY2FuID0gcmVxdWlyZSgnLi9zY2FuJylcbnZhciBwYXJzZSA9IHJlcXVpcmUoJy4vcGFyc2UnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgcmV0dXJuIHBhcnNlKHNjYW4oc291cmNlKSlcbn1cbiIsICIvKlxuQ29weXJpZ2h0IHNwZHgtY29ycmVjdC5qcyBjb250cmlidXRvcnNcblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG52YXIgcGFyc2UgPSByZXF1aXJlKCdzcGR4LWV4cHJlc3Npb24tcGFyc2UnKVxudmFyIHNwZHhMaWNlbnNlSWRzID0gcmVxdWlyZSgnc3BkeC1saWNlbnNlLWlkcycpXG5cbmZ1bmN0aW9uIHZhbGlkIChzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBwYXJzZShzdHJpbmcpXG4gICAgcmV0dXJuIHRydWVcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG4vLyBTb3J0aW5nIGZ1bmN0aW9uIHRoYXQgb3JkZXJzIHRoZSBnaXZlbiBhcnJheSBvZiB0cmFuc3Bvc2l0aW9ucyBzdWNoXG4vLyB0aGF0IGEgdHJhbnNwb3NpdGlvbiB3aXRoIHRoZSBsb25nZXIgcGF0dGVybiBjb21lcyBiZWZvcmUgYSB0cmFuc3Bvc2l0aW9uXG4vLyB3aXRoIGEgc2hvcnRlciBwYXR0ZXJuLiBUaGlzIGlzIHRvIHByZXZlbnQgZS5nLiB0aGUgdHJhbnNwb3NpdGlvblxuLy8gW1wiR2VuZXJhbCBQdWJsaWMgTGljZW5zZVwiLCBcIkdQTFwiXSBmcm9tIG1hdGNoaW5nIHRvIFwiTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcIlxuLy8gYmVmb3JlIGEgbG9uZ2VyIGFuZCBtb3JlIGFjY3VyYXRlIHRyYW5zcG9zaXRpb24gW1wiTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcIiwgXCJMR1BMXCJdXG4vLyBoYXMgYSBjaGFuY2UgdG8gYmUgcmVjb2duaXplZC5cbmZ1bmN0aW9uIHNvcnRUcmFuc3Bvc2l0aW9ucyhhLCBiKSB7XG4gIHZhciBsZW5ndGggPSBiWzBdLmxlbmd0aCAtIGFbMF0ubGVuZ3RoXG4gIGlmIChsZW5ndGggIT09IDApIHJldHVybiBsZW5ndGhcbiAgcmV0dXJuIGFbMF0udG9VcHBlckNhc2UoKS5sb2NhbGVDb21wYXJlKGJbMF0udG9VcHBlckNhc2UoKSlcbn1cblxuLy8gQ29tbW9uIHRyYW5zcG9zaXRpb25zIG9mIGxpY2Vuc2UgaWRlbnRpZmllciBhY3Jvbnltc1xudmFyIHRyYW5zcG9zaXRpb25zID0gW1xuICBbJ0FQR0wnLCAnQUdQTCddLFxuICBbJ0dwbCcsICdHUEwnXSxcbiAgWydHTFAnLCAnR1BMJ10sXG4gIFsnQVBMJywgJ0FwYWNoZSddLFxuICBbJ0lTRCcsICdJU0MnXSxcbiAgWydHTFAnLCAnR1BMJ10sXG4gIFsnSVNUJywgJ0lTQyddLFxuICBbJ0NsYXVkZScsICdDbGF1c2UnXSxcbiAgWycgb3IgbGF0ZXInLCAnKyddLFxuICBbJyBJbnRlcm5hdGlvbmFsJywgJyddLFxuICBbJ0dOVScsICdHUEwnXSxcbiAgWydHVU4nLCAnR1BMJ10sXG4gIFsnKycsICcnXSxcbiAgWydHTlUgR1BMJywgJ0dQTCddLFxuICBbJ0dOVSBMR1BMJywgJ0xHUEwnXSxcbiAgWydHTlUvR1BMJywgJ0dQTCddLFxuICBbJ0dOVSBHTFAnLCAnR1BMJ10sXG4gIFsnR05VIExFU1NFUiBHRU5FUkFMIFBVQkxJQyBMSUNFTlNFJywgJ0xHUEwnXSxcbiAgWydHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UnLCAnTEdQTCddLFxuICBbJ0dOVSBMRVNTRVIgR0VORVJBTCBQVUJMSUMgTElDRU5TRScsICdMR1BMLTIuMSddLFxuICBbJ0dOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZScsICdMR1BMLTIuMSddLFxuICBbJ0xFU1NFUiBHRU5FUkFMIFBVQkxJQyBMSUNFTlNFJywgJ0xHUEwnXSxcbiAgWydMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZScsICdMR1BMJ10sXG4gIFsnTEVTU0VSIEdFTkVSQUwgUFVCTElDIExJQ0VOU0UnLCAnTEdQTC0yLjEnXSxcbiAgWydMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZScsICdMR1BMLTIuMSddLFxuICBbJ0dOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlJywgJ0dQTCddLFxuICBbJ0dudSBwdWJsaWMgbGljZW5zZScsICdHUEwnXSxcbiAgWydHTlUgUHVibGljIExpY2Vuc2UnLCAnR1BMJ10sXG4gIFsnR05VIEdFTkVSQUwgUFVCTElDIExJQ0VOU0UnLCAnR1BMJ10sXG4gIFsnTVRJJywgJ01JVCddLFxuICBbJ01vemlsbGEgUHVibGljIExpY2Vuc2UnLCAnTVBMJ10sXG4gIFsnVW5pdmVyc2FsIFBlcm1pc3NpdmUgTGljZW5zZScsICdVUEwnXSxcbiAgWydXVEgnLCAnV1RGJ10sXG4gIFsnV1RGR1BMJywgJ1dURlBMJ10sXG4gIFsnLUxpY2Vuc2UnLCAnJ11cbl0uc29ydChzb3J0VHJhbnNwb3NpdGlvbnMpXG5cbnZhciBUUkFOU1BPU0VEID0gMFxudmFyIENPUlJFQ1QgPSAxXG5cbi8vIFNpbXBsZSBjb3JyZWN0aW9ucyB0byBuZWFybHkgdmFsaWQgaWRlbnRpZmllcnMuXG52YXIgdHJhbnNmb3JtcyA9IFtcbiAgLy8gZS5nLiAnbWl0J1xuICBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgICByZXR1cm4gYXJndW1lbnQudG9VcHBlckNhc2UoKVxuICB9LFxuICAvLyBlLmcuICdNSVQgJ1xuICBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgICByZXR1cm4gYXJndW1lbnQudHJpbSgpXG4gIH0sXG4gIC8vIGUuZy4gJ00uSS5ULidcbiAgZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50LnJlcGxhY2UoL1xcLi9nLCAnJylcbiAgfSxcbiAgLy8gZS5nLiAnQXBhY2hlLSAyLjAnXG4gIGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICAgIHJldHVybiBhcmd1bWVudC5yZXBsYWNlKC9cXHMrL2csICcnKVxuICB9LFxuICAvLyBlLmcuICdDQyBCWSA0LjAnJ1xuICBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgICByZXR1cm4gYXJndW1lbnQucmVwbGFjZSgvXFxzKy9nLCAnLScpXG4gIH0sXG4gIC8vIGUuZy4gJ0xHUEx2Mi4xJ1xuICBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgICByZXR1cm4gYXJndW1lbnQucmVwbGFjZSgndicsICctJylcbiAgfSxcbiAgLy8gZS5nLiAnQXBhY2hlIDIuMCdcbiAgZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50LnJlcGxhY2UoLyw/XFxzKihcXGQpLywgJy0kMScpXG4gIH0sXG4gIC8vIGUuZy4gJ0dQTCAyJ1xuICBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgICByZXR1cm4gYXJndW1lbnQucmVwbGFjZSgvLD9cXHMqKFxcZCkvLCAnLSQxLjAnKVxuICB9LFxuICAvLyBlLmcuICdBcGFjaGUgVmVyc2lvbiAyLjAnXG4gIGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICAgIHJldHVybiBhcmd1bWVudFxuICAgICAgLnJlcGxhY2UoLyw/XFxzKihWXFwufHZcXC58Vnx2fFZlcnNpb258dmVyc2lvbilcXHMqKFxcZCkvLCAnLSQyJylcbiAgfSxcbiAgLy8gZS5nLiAnQXBhY2hlIFZlcnNpb24gMidcbiAgZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50XG4gICAgICAucmVwbGFjZSgvLD9cXHMqKFZcXC58dlxcLnxWfHZ8VmVyc2lvbnx2ZXJzaW9uKVxccyooXFxkKS8sICctJDIuMCcpXG4gIH0sXG4gIC8vIGUuZy4gJ1pMSUInXG4gIGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICAgIHJldHVybiBhcmd1bWVudFswXS50b1VwcGVyQ2FzZSgpICsgYXJndW1lbnQuc2xpY2UoMSlcbiAgfSxcbiAgLy8gZS5nLiAnTVBMLzIuMCdcbiAgZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50LnJlcGxhY2UoJy8nLCAnLScpXG4gIH0sXG4gIC8vIGUuZy4gJ0FwYWNoZSAyJ1xuICBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgICByZXR1cm4gYXJndW1lbnRcbiAgICAgIC5yZXBsYWNlKC9cXHMqVlxccyooXFxkKS8sICctJDEnKVxuICAgICAgLnJlcGxhY2UoLyhcXGQpJC8sICckMS4wJylcbiAgfSxcbiAgLy8gZS5nLiAnR1BMLTIuMCcsICdHUEwtMy4wJ1xuICBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgICBpZiAoYXJndW1lbnQuaW5kZXhPZignMy4wJykgIT09IC0xKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnQgKyAnLW9yLWxhdGVyJ1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYXJndW1lbnQgKyAnLW9ubHknXG4gICAgfVxuICB9LFxuICAvLyBlLmcuICdHUEwtMi4wLSdcbiAgZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50ICsgJ29ubHknXG4gIH0sXG4gIC8vIGUuZy4gJ0dQTDInXG4gIGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICAgIHJldHVybiBhcmd1bWVudC5yZXBsYWNlKC8oXFxkKSQvLCAnLSQxLjAnKVxuICB9LFxuICAvLyBlLmcuICdCU0QgMydcbiAgZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50LnJlcGxhY2UoLygtfCApPyhcXGQpJC8sICctJDItQ2xhdXNlJylcbiAgfSxcbiAgLy8gZS5nLiAnQlNEIGNsYXVzZSAzJ1xuICBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgICByZXR1cm4gYXJndW1lbnQucmVwbGFjZSgvKC18ICljbGF1c2UoLXwgKShcXGQpLywgJy0kMy1DbGF1c2UnKVxuICB9LFxuICAvLyBlLmcuICdOZXcgQlNEIGxpY2Vuc2UnXG4gIGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICAgIHJldHVybiBhcmd1bWVudC5yZXBsYWNlKC9cXGIoTW9kaWZpZWR8TmV3fFJldmlzZWQpKC18ICk/QlNEKCgtfCApTGljZW5zZSk/L2ksICdCU0QtMy1DbGF1c2UnKVxuICB9LFxuICAvLyBlLmcuICdTaW1wbGlmaWVkIEJTRCBsaWNlbnNlJ1xuICBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgICByZXR1cm4gYXJndW1lbnQucmVwbGFjZSgvXFxiU2ltcGxpZmllZCgtfCApP0JTRCgoLXwgKUxpY2Vuc2UpPy9pLCAnQlNELTItQ2xhdXNlJylcbiAgfSxcbiAgLy8gZS5nLiAnRnJlZSBCU0QgbGljZW5zZSdcbiAgZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50LnJlcGxhY2UoL1xcYihGcmVlfE5ldCkoLXwgKT9CU0QoKC18IClMaWNlbnNlKT8vaSwgJ0JTRC0yLUNsYXVzZS0kMUJTRCcpXG4gIH0sXG4gIC8vIGUuZy4gJ0NsZWFyIEJTRCBsaWNlbnNlJ1xuICBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgICByZXR1cm4gYXJndW1lbnQucmVwbGFjZSgvXFxiQ2xlYXIoLXwgKT9CU0QoKC18IClMaWNlbnNlKT8vaSwgJ0JTRC0zLUNsYXVzZS1DbGVhcicpXG4gIH0sXG4gIC8vIGUuZy4gJ09sZCBCU0QgTGljZW5zZSdcbiAgZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50LnJlcGxhY2UoL1xcYihPbGR8T3JpZ2luYWwpKC18ICk/QlNEKCgtfCApTGljZW5zZSk/L2ksICdCU0QtNC1DbGF1c2UnKVxuICB9LFxuICAvLyBlLmcuICdCWS1OQy00LjAnXG4gIGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICAgIHJldHVybiAnQ0MtJyArIGFyZ3VtZW50XG4gIH0sXG4gIC8vIGUuZy4gJ0JZLU5DJ1xuICBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgICByZXR1cm4gJ0NDLScgKyBhcmd1bWVudCArICctNC4wJ1xuICB9LFxuICAvLyBlLmcuICdBdHRyaWJ1dGlvbi1Ob25Db21tZXJjaWFsJ1xuICBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgICByZXR1cm4gYXJndW1lbnRcbiAgICAgIC5yZXBsYWNlKCdBdHRyaWJ1dGlvbicsICdCWScpXG4gICAgICAucmVwbGFjZSgnTm9uQ29tbWVyY2lhbCcsICdOQycpXG4gICAgICAucmVwbGFjZSgnTm9EZXJpdmF0aXZlcycsICdORCcpXG4gICAgICAucmVwbGFjZSgvIChcXGQpLywgJy0kMScpXG4gICAgICAucmVwbGFjZSgvID9JbnRlcm5hdGlvbmFsLywgJycpXG4gIH0sXG4gIC8vIGUuZy4gJ0F0dHJpYnV0aW9uLU5vbkNvbW1lcmNpYWwnXG4gIGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICAgIHJldHVybiAnQ0MtJyArXG4gICAgICBhcmd1bWVudFxuICAgICAgICAucmVwbGFjZSgnQXR0cmlidXRpb24nLCAnQlknKVxuICAgICAgICAucmVwbGFjZSgnTm9uQ29tbWVyY2lhbCcsICdOQycpXG4gICAgICAgIC5yZXBsYWNlKCdOb0Rlcml2YXRpdmVzJywgJ05EJylcbiAgICAgICAgLnJlcGxhY2UoLyAoXFxkKS8sICctJDEnKVxuICAgICAgICAucmVwbGFjZSgvID9JbnRlcm5hdGlvbmFsLywgJycpICtcbiAgICAgICctNC4wJ1xuICB9XG5dXG5cbnZhciBsaWNlbnNlc1dpdGhWZXJzaW9ucyA9IHNwZHhMaWNlbnNlSWRzXG4gIC5tYXAoZnVuY3Rpb24gKGlkKSB7XG4gICAgdmFyIG1hdGNoID0gL14oLiopLVxcZCtcXC5cXGQrJC8uZXhlYyhpZClcbiAgICByZXR1cm4gbWF0Y2hcbiAgICAgID8gW21hdGNoWzBdLCBtYXRjaFsxXV1cbiAgICAgIDogW2lkLCBudWxsXVxuICB9KVxuICAucmVkdWNlKGZ1bmN0aW9uIChvYmplY3RNYXAsIGl0ZW0pIHtcbiAgICB2YXIga2V5ID0gaXRlbVsxXVxuICAgIG9iamVjdE1hcFtrZXldID0gb2JqZWN0TWFwW2tleV0gfHwgW11cbiAgICBvYmplY3RNYXBba2V5XS5wdXNoKGl0ZW1bMF0pXG4gICAgcmV0dXJuIG9iamVjdE1hcFxuICB9LCB7fSlcblxudmFyIGxpY2Vuc2VzV2l0aE9uZVZlcnNpb24gPSBPYmplY3Qua2V5cyhsaWNlbnNlc1dpdGhWZXJzaW9ucylcbiAgLm1hcChmdW5jdGlvbiBtYWtlRW50cmllcyAoa2V5KSB7XG4gICAgcmV0dXJuIFtrZXksIGxpY2Vuc2VzV2l0aFZlcnNpb25zW2tleV1dXG4gIH0pXG4gIC5maWx0ZXIoZnVuY3Rpb24gaWRlbnRpZnlTb2xlVmVyc2lvbnMgKGl0ZW0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgLy8gTGljZW5zZXMgaGFzIGp1c3Qgb25lIHZhbGlkIHZlcnNpb24gc3VmZml4LlxuICAgICAgaXRlbVsxXS5sZW5ndGggPT09IDEgJiZcbiAgICAgIGl0ZW1bMF0gIT09IG51bGwgJiZcbiAgICAgIC8vIEFQTCB3aWxsIGJlIGNvbnNpZGVyZWQgQXBhY2hlLCByYXRoZXIgdGhhbiBBUEwtMS4wXG4gICAgICBpdGVtWzBdICE9PSAnQVBMJ1xuICAgIClcbiAgfSlcbiAgLm1hcChmdW5jdGlvbiBjcmVhdGVMYXN0UmVzb3J0cyAoaXRlbSkge1xuICAgIHJldHVybiBbaXRlbVswXSwgaXRlbVsxXVswXV1cbiAgfSlcblxubGljZW5zZXNXaXRoVmVyc2lvbnMgPSB1bmRlZmluZWRcblxuLy8gSWYgYWxsIGVsc2UgZmFpbHMsIGd1ZXNzIHRoYXQgc3RyaW5ncyBjb250YWluaW5nIGNlcnRhaW4gc3Vic3RyaW5nc1xuLy8gbWVhbnQgdG8gaWRlbnRpZnkgY2VydGFpbiBsaWNlbnNlcy5cbnZhciBsYXN0UmVzb3J0cyA9IFtcbiAgWydVTkxJJywgJ1VubGljZW5zZSddLFxuICBbJ1dURicsICdXVEZQTCddLFxuICBbJzIgQ0xBVVNFJywgJ0JTRC0yLUNsYXVzZSddLFxuICBbJzItQ0xBVVNFJywgJ0JTRC0yLUNsYXVzZSddLFxuICBbJzMgQ0xBVVNFJywgJ0JTRC0zLUNsYXVzZSddLFxuICBbJzMtQ0xBVVNFJywgJ0JTRC0zLUNsYXVzZSddLFxuICBbJ0FGRkVSTycsICdBR1BMLTMuMC1vci1sYXRlciddLFxuICBbJ0FHUEwnLCAnQUdQTC0zLjAtb3ItbGF0ZXInXSxcbiAgWydBUEFDSEUnLCAnQXBhY2hlLTIuMCddLFxuICBbJ0FSVElTVElDJywgJ0FydGlzdGljLTIuMCddLFxuICBbJ0FmZmVybycsICdBR1BMLTMuMC1vci1sYXRlciddLFxuICBbJ0JFRVInLCAnQmVlcndhcmUnXSxcbiAgWydCT09TVCcsICdCU0wtMS4wJ10sXG4gIFsnQlNEJywgJ0JTRC0yLUNsYXVzZSddLFxuICBbJ0NEREwnLCAnQ0RETC0xLjEnXSxcbiAgWydFQ0xJUFNFJywgJ0VQTC0xLjAnXSxcbiAgWydGVUNLJywgJ1dURlBMJ10sXG4gIFsnR05VJywgJ0dQTC0zLjAtb3ItbGF0ZXInXSxcbiAgWydMR1BMJywgJ0xHUEwtMy4wLW9yLWxhdGVyJ10sXG4gIFsnR1BMVjEnLCAnR1BMLTEuMC1vbmx5J10sXG4gIFsnR1BMLTEnLCAnR1BMLTEuMC1vbmx5J10sXG4gIFsnR1BMVjInLCAnR1BMLTIuMC1vbmx5J10sXG4gIFsnR1BMLTInLCAnR1BMLTIuMC1vbmx5J10sXG4gIFsnR1BMJywgJ0dQTC0zLjAtb3ItbGF0ZXInXSxcbiAgWydNSVQgK05PLUZBTFNFLUFUVFJJQlMnLCAnTUlUTkZBJ10sXG4gIFsnTUlUJywgJ01JVCddLFxuICBbJ01QTCcsICdNUEwtMi4wJ10sXG4gIFsnWDExJywgJ1gxMSddLFxuICBbJ1pMSUInLCAnWmxpYiddXG5dLmNvbmNhdChsaWNlbnNlc1dpdGhPbmVWZXJzaW9uKS5zb3J0KHNvcnRUcmFuc3Bvc2l0aW9ucylcblxudmFyIFNVQlNUUklORyA9IDBcbnZhciBJREVOVElGSUVSID0gMVxuXG52YXIgdmFsaWRUcmFuc2Zvcm1hdGlvbiA9IGZ1bmN0aW9uIChpZGVudGlmaWVyKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdHJhbnNmb3Jtcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0cmFuc2Zvcm1lZCA9IHRyYW5zZm9ybXNbaV0oaWRlbnRpZmllcikudHJpbSgpXG4gICAgaWYgKHRyYW5zZm9ybWVkICE9PSBpZGVudGlmaWVyICYmIHZhbGlkKHRyYW5zZm9ybWVkKSkge1xuICAgICAgcmV0dXJuIHRyYW5zZm9ybWVkXG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbnZhciB2YWxpZExhc3RSZXNvcnQgPSBmdW5jdGlvbiAoaWRlbnRpZmllcikge1xuICB2YXIgdXBwZXJDYXNlZCA9IGlkZW50aWZpZXIudG9VcHBlckNhc2UoKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RSZXNvcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGxhc3RSZXNvcnQgPSBsYXN0UmVzb3J0c1tpXVxuICAgIGlmICh1cHBlckNhc2VkLmluZGV4T2YobGFzdFJlc29ydFtTVUJTVFJJTkddKSA+IC0xKSB7XG4gICAgICByZXR1cm4gbGFzdFJlc29ydFtJREVOVElGSUVSXVxuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG52YXIgYW55Q29ycmVjdGlvbiA9IGZ1bmN0aW9uIChpZGVudGlmaWVyLCBjaGVjaykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRyYW5zcG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHRyYW5zcG9zaXRpb24gPSB0cmFuc3Bvc2l0aW9uc1tpXVxuICAgIHZhciB0cmFuc3Bvc2VkID0gdHJhbnNwb3NpdGlvbltUUkFOU1BPU0VEXVxuICAgIGlmIChpZGVudGlmaWVyLmluZGV4T2YodHJhbnNwb3NlZCkgPiAtMSkge1xuICAgICAgdmFyIGNvcnJlY3RlZCA9IGlkZW50aWZpZXIucmVwbGFjZShcbiAgICAgICAgdHJhbnNwb3NlZCxcbiAgICAgICAgdHJhbnNwb3NpdGlvbltDT1JSRUNUXVxuICAgICAgKVxuICAgICAgdmFyIGNoZWNrZWQgPSBjaGVjayhjb3JyZWN0ZWQpXG4gICAgICBpZiAoY2hlY2tlZCAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gY2hlY2tlZFxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpZGVudGlmaWVyLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gIHZhciB1cGdyYWRlID0gb3B0aW9ucy51cGdyYWRlID09PSB1bmRlZmluZWQgPyB0cnVlIDogISFvcHRpb25zLnVwZ3JhZGVcbiAgZnVuY3Rpb24gcG9zdHByb2Nlc3MgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHVwZ3JhZGUgPyB1cGdyYWRlR1BMcyh2YWx1ZSkgOiB2YWx1ZVxuICB9XG4gIHZhciB2YWxpZEFydWdtZW50ID0gKFxuICAgIHR5cGVvZiBpZGVudGlmaWVyID09PSAnc3RyaW5nJyAmJlxuICAgIGlkZW50aWZpZXIudHJpbSgpLmxlbmd0aCAhPT0gMFxuICApXG4gIGlmICghdmFsaWRBcnVnbWVudCkge1xuICAgIHRocm93IEVycm9yKCdJbnZhbGlkIGFyZ3VtZW50LiBFeHBlY3RlZCBub24tZW1wdHkgc3RyaW5nLicpXG4gIH1cbiAgaWRlbnRpZmllciA9IGlkZW50aWZpZXIudHJpbSgpXG4gIGlmICh2YWxpZChpZGVudGlmaWVyKSkge1xuICAgIHJldHVybiBwb3N0cHJvY2VzcyhpZGVudGlmaWVyKVxuICB9XG4gIHZhciBub1BsdXMgPSBpZGVudGlmaWVyLnJlcGxhY2UoL1xcKyQvLCAnJykudHJpbSgpXG4gIGlmICh2YWxpZChub1BsdXMpKSB7XG4gICAgcmV0dXJuIHBvc3Rwcm9jZXNzKG5vUGx1cylcbiAgfVxuICB2YXIgdHJhbnNmb3JtZWQgPSB2YWxpZFRyYW5zZm9ybWF0aW9uKGlkZW50aWZpZXIpXG4gIGlmICh0cmFuc2Zvcm1lZCAhPT0gbnVsbCkge1xuICAgIHJldHVybiBwb3N0cHJvY2Vzcyh0cmFuc2Zvcm1lZClcbiAgfVxuICB0cmFuc2Zvcm1lZCA9IGFueUNvcnJlY3Rpb24oaWRlbnRpZmllciwgZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gICAgaWYgKHZhbGlkKGFyZ3VtZW50KSkge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50XG4gICAgfVxuICAgIHJldHVybiB2YWxpZFRyYW5zZm9ybWF0aW9uKGFyZ3VtZW50KVxuICB9KVxuICBpZiAodHJhbnNmb3JtZWQgIT09IG51bGwpIHtcbiAgICByZXR1cm4gcG9zdHByb2Nlc3ModHJhbnNmb3JtZWQpXG4gIH1cbiAgdHJhbnNmb3JtZWQgPSB2YWxpZExhc3RSZXNvcnQoaWRlbnRpZmllcilcbiAgaWYgKHRyYW5zZm9ybWVkICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIHBvc3Rwcm9jZXNzKHRyYW5zZm9ybWVkKVxuICB9XG4gIHRyYW5zZm9ybWVkID0gYW55Q29ycmVjdGlvbihpZGVudGlmaWVyLCB2YWxpZExhc3RSZXNvcnQpXG4gIGlmICh0cmFuc2Zvcm1lZCAhPT0gbnVsbCkge1xuICAgIHJldHVybiBwb3N0cHJvY2Vzcyh0cmFuc2Zvcm1lZClcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiB1cGdyYWRlR1BMcyAodmFsdWUpIHtcbiAgaWYgKFtcbiAgICAnR1BMLTEuMCcsICdMR1BMLTEuMCcsICdBR1BMLTEuMCcsXG4gICAgJ0dQTC0yLjAnLCAnTEdQTC0yLjAnLCAnQUdQTC0yLjAnLFxuICAgICdMR1BMLTIuMSdcbiAgXS5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gdmFsdWUgKyAnLW9ubHknXG4gIH0gZWxzZSBpZiAoW1xuICAgICdHUEwtMS4wKycsICdHUEwtMi4wKycsICdHUEwtMy4wKycsXG4gICAgJ0xHUEwtMi4wKycsICdMR1BMLTIuMSsnLCAnTEdQTC0zLjArJyxcbiAgICAnQUdQTC0xLjArJywgJ0FHUEwtMy4wKydcbiAgXS5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvXFwrJC8sICctb3ItbGF0ZXInKVxuICB9IGVsc2UgaWYgKFsnR1BMLTMuMCcsICdMR1BMLTMuMCcsICdBR1BMLTMuMCddLmluZGV4T2YodmFsdWUpICE9PSAtMSkge1xuICAgIHJldHVybiB2YWx1ZSArICctb3ItbGF0ZXInXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cbn1cbiIsICJ2YXIgcGFyc2UgPSByZXF1aXJlKCdzcGR4LWV4cHJlc3Npb24tcGFyc2UnKTtcbnZhciBjb3JyZWN0ID0gcmVxdWlyZSgnc3BkeC1jb3JyZWN0Jyk7XG5cbnZhciBnZW5lcmljV2FybmluZyA9IChcbiAgJ2xpY2Vuc2Ugc2hvdWxkIGJlICcgK1xuICAnYSB2YWxpZCBTUERYIGxpY2Vuc2UgZXhwcmVzc2lvbiAod2l0aG91dCBcIkxpY2Vuc2VSZWZcIiksICcgK1xuICAnXCJVTkxJQ0VOU0VEXCIsIG9yICcgK1xuICAnXCJTRUUgTElDRU5TRSBJTiA8ZmlsZW5hbWU+XCInXG4pO1xuXG52YXIgZmlsZVJlZmVyZW5jZVJFID0gL15TRUUgTElDRU5bQ1NdRSBJTiAoLispJC87XG5cbmZ1bmN0aW9uIHN0YXJ0c1dpdGgocHJlZml4LCBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5zbGljZSgwLCBwcmVmaXgubGVuZ3RoKSA9PT0gcHJlZml4O1xufVxuXG5mdW5jdGlvbiB1c2VzTGljZW5zZVJlZihhc3QpIHtcbiAgaWYgKGFzdC5oYXNPd25Qcm9wZXJ0eSgnbGljZW5zZScpKSB7XG4gICAgdmFyIGxpY2Vuc2UgPSBhc3QubGljZW5zZTtcbiAgICByZXR1cm4gKFxuICAgICAgc3RhcnRzV2l0aCgnTGljZW5zZVJlZicsIGxpY2Vuc2UpIHx8XG4gICAgICBzdGFydHNXaXRoKCdEb2N1bWVudFJlZicsIGxpY2Vuc2UpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgdXNlc0xpY2Vuc2VSZWYoYXN0LmxlZnQpIHx8XG4gICAgICB1c2VzTGljZW5zZVJlZihhc3QucmlnaHQpXG4gICAgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFyZ3VtZW50KSB7XG4gIHZhciBhc3Q7XG5cbiAgdHJ5IHtcbiAgICBhc3QgPSBwYXJzZShhcmd1bWVudCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgbWF0Y2hcbiAgICBpZiAoXG4gICAgICBhcmd1bWVudCA9PT0gJ1VOTElDRU5TRUQnIHx8XG4gICAgICBhcmd1bWVudCA9PT0gJ1VOTElDRU5DRUQnXG4gICAgKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWxpZEZvck9sZFBhY2thZ2VzOiB0cnVlLFxuICAgICAgICB2YWxpZEZvck5ld1BhY2thZ2VzOiB0cnVlLFxuICAgICAgICB1bmxpY2Vuc2VkOiB0cnVlXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAobWF0Y2ggPSBmaWxlUmVmZXJlbmNlUkUuZXhlYyhhcmd1bWVudCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbGlkRm9yT2xkUGFja2FnZXM6IHRydWUsXG4gICAgICAgIHZhbGlkRm9yTmV3UGFja2FnZXM6IHRydWUsXG4gICAgICAgIGluRmlsZTogbWF0Y2hbMV1cbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByZXN1bHQgPSB7XG4gICAgICAgIHZhbGlkRm9yT2xkUGFja2FnZXM6IGZhbHNlLFxuICAgICAgICB2YWxpZEZvck5ld1BhY2thZ2VzOiBmYWxzZSxcbiAgICAgICAgd2FybmluZ3M6IFtnZW5lcmljV2FybmluZ11cbiAgICAgIH07XG4gICAgICBpZiAoYXJndW1lbnQudHJpbSgpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICB2YXIgY29ycmVjdGVkID0gY29ycmVjdChhcmd1bWVudCk7XG4gICAgICAgIGlmIChjb3JyZWN0ZWQpIHtcbiAgICAgICAgICByZXN1bHQud2FybmluZ3MucHVzaChcbiAgICAgICAgICAgICdsaWNlbnNlIGlzIHNpbWlsYXIgdG8gdGhlIHZhbGlkIGV4cHJlc3Npb24gXCInICsgY29ycmVjdGVkICsgJ1wiJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKHVzZXNMaWNlbnNlUmVmKGFzdCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsaWRGb3JOZXdQYWNrYWdlczogZmFsc2UsXG4gICAgICB2YWxpZEZvck9sZFBhY2thZ2VzOiBmYWxzZSxcbiAgICAgIHNwZHg6IHRydWUsXG4gICAgICB3YXJuaW5nczogW2dlbmVyaWNXYXJuaW5nXVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbGlkRm9yTmV3UGFja2FnZXM6IHRydWUsXG4gICAgICB2YWxpZEZvck9sZFBhY2thZ2VzOiB0cnVlLFxuICAgICAgc3BkeDogdHJ1ZVxuICAgIH07XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnXG5cbnZhciBnaXRIb3N0cyA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBnaXRodWI6IHtcbiAgICAvLyBGaXJzdCB0d28gYXJlIGluc2VjdXJlIGFuZCBnZW5lcmFsbHkgc2hvdWxkbid0IGJlIHVzZWQgYW55IG1vcmUsIGJ1dFxuICAgIC8vIHRoZXkgYXJlIHN0aWxsIHN1cHBvcnRlZC5cbiAgICAncHJvdG9jb2xzJzogWyAnZ2l0JywgJ2h0dHAnLCAnZ2l0K3NzaCcsICdnaXQraHR0cHMnLCAnc3NoJywgJ2h0dHBzJyBdLFxuICAgICdkb21haW4nOiAnZ2l0aHViLmNvbScsXG4gICAgJ3RyZWVwYXRoJzogJ3RyZWUnLFxuICAgICdmaWxldGVtcGxhdGUnOiAnaHR0cHM6Ly97YXV0aEB9cmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS97dXNlcn0ve3Byb2plY3R9L3tjb21taXR0aXNofS97cGF0aH0nLFxuICAgICdidWdzdGVtcGxhdGUnOiAnaHR0cHM6Ly97ZG9tYWlufS97dXNlcn0ve3Byb2plY3R9L2lzc3VlcycsXG4gICAgJ2dpdHRlbXBsYXRlJzogJ2dpdDovL3thdXRoQH17ZG9tYWlufS97dXNlcn0ve3Byb2plY3R9LmdpdHsjY29tbWl0dGlzaH0nLFxuICAgICd0YXJiYWxsdGVtcGxhdGUnOiAnaHR0cHM6Ly9jb2RlbG9hZC57ZG9tYWlufS97dXNlcn0ve3Byb2plY3R9L3Rhci5nei97Y29tbWl0dGlzaH0nXG4gIH0sXG4gIGJpdGJ1Y2tldDoge1xuICAgICdwcm90b2NvbHMnOiBbICdnaXQrc3NoJywgJ2dpdCtodHRwcycsICdzc2gnLCAnaHR0cHMnIF0sXG4gICAgJ2RvbWFpbic6ICdiaXRidWNrZXQub3JnJyxcbiAgICAndHJlZXBhdGgnOiAnc3JjJyxcbiAgICAndGFyYmFsbHRlbXBsYXRlJzogJ2h0dHBzOi8ve2RvbWFpbn0ve3VzZXJ9L3twcm9qZWN0fS9nZXQve2NvbW1pdHRpc2h9LnRhci5neidcbiAgfSxcbiAgZ2l0bGFiOiB7XG4gICAgJ3Byb3RvY29scyc6IFsgJ2dpdCtzc2gnLCAnZ2l0K2h0dHBzJywgJ3NzaCcsICdodHRwcycgXSxcbiAgICAnZG9tYWluJzogJ2dpdGxhYi5jb20nLFxuICAgICd0cmVlcGF0aCc6ICd0cmVlJyxcbiAgICAnYnVnc3RlbXBsYXRlJzogJ2h0dHBzOi8ve2RvbWFpbn0ve3VzZXJ9L3twcm9qZWN0fS9pc3N1ZXMnLFxuICAgICdodHRwc3RlbXBsYXRlJzogJ2dpdCtodHRwczovL3thdXRoQH17ZG9tYWlufS97dXNlcn0ve3Byb2plY3RQYXRofS5naXR7I2NvbW1pdHRpc2h9JyxcbiAgICAndGFyYmFsbHRlbXBsYXRlJzogJ2h0dHBzOi8ve2RvbWFpbn0ve3VzZXJ9L3twcm9qZWN0fS9yZXBvc2l0b3J5L2FyY2hpdmUudGFyLmd6P3JlZj17Y29tbWl0dGlzaH0nLFxuICAgICdwYXRobWF0Y2gnOiAvXlsvXShbXi9dKylbL10oKD8hLiooXFwvLVxcL3xcXC9yZXBvc2l0b3J5XFwvYXJjaGl2ZVxcLnRhclxcLmd6XFw/PS4qfFxcL3JlcG9zaXRvcnlcXC9bXi9dK1xcL2FyY2hpdmUudGFyLmd6JCkpLio/KSg/OlsuXWdpdHxbL10pPyQvXG4gIH0sXG4gIGdpc3Q6IHtcbiAgICAncHJvdG9jb2xzJzogWyAnZ2l0JywgJ2dpdCtzc2gnLCAnZ2l0K2h0dHBzJywgJ3NzaCcsICdodHRwcycgXSxcbiAgICAnZG9tYWluJzogJ2dpc3QuZ2l0aHViLmNvbScsXG4gICAgJ3BhdGhtYXRjaCc6IC9eWy9dKD86KFteL10rKVsvXSk/KFthLXowLTldezMyLH0pKD86Wy5dZ2l0KT8kLyxcbiAgICAnZmlsZXRlbXBsYXRlJzogJ2h0dHBzOi8vZ2lzdC5naXRodWJ1c2VyY29udGVudC5jb20ve3VzZXJ9L3twcm9qZWN0fS9yYXd7L2NvbW1pdHRpc2h9L3twYXRofScsXG4gICAgJ2J1Z3N0ZW1wbGF0ZSc6ICdodHRwczovL3tkb21haW59L3twcm9qZWN0fScsXG4gICAgJ2dpdHRlbXBsYXRlJzogJ2dpdDovL3tkb21haW59L3twcm9qZWN0fS5naXR7I2NvbW1pdHRpc2h9JyxcbiAgICAnc3NodGVtcGxhdGUnOiAnZ2l0QHtkb21haW59Oi97cHJvamVjdH0uZ2l0eyNjb21taXR0aXNofScsXG4gICAgJ3NzaHVybHRlbXBsYXRlJzogJ2dpdCtzc2g6Ly9naXRAe2RvbWFpbn0ve3Byb2plY3R9LmdpdHsjY29tbWl0dGlzaH0nLFxuICAgICdicm93c2V0ZW1wbGF0ZSc6ICdodHRwczovL3tkb21haW59L3twcm9qZWN0fXsvY29tbWl0dGlzaH0nLFxuICAgICdicm93c2VmaWxldGVtcGxhdGUnOiAnaHR0cHM6Ly97ZG9tYWlufS97cHJvamVjdH17L2NvbW1pdHRpc2h9eyNwYXRofScsXG4gICAgJ2RvY3N0ZW1wbGF0ZSc6ICdodHRwczovL3tkb21haW59L3twcm9qZWN0fXsvY29tbWl0dGlzaH0nLFxuICAgICdodHRwc3RlbXBsYXRlJzogJ2dpdCtodHRwczovL3tkb21haW59L3twcm9qZWN0fS5naXR7I2NvbW1pdHRpc2h9JyxcbiAgICAnc2hvcnRjdXR0ZW1wbGF0ZSc6ICd7dHlwZX06e3Byb2plY3R9eyNjb21taXR0aXNofScsXG4gICAgJ3BhdGh0ZW1wbGF0ZSc6ICd7cHJvamVjdH17I2NvbW1pdHRpc2h9JyxcbiAgICAndGFyYmFsbHRlbXBsYXRlJzogJ2h0dHBzOi8vY29kZWxvYWQuZ2l0aHViLmNvbS9naXN0L3twcm9qZWN0fS90YXIuZ3ove2NvbW1pdHRpc2h9JyxcbiAgICAnaGFzaGZvcm1hdCc6IGZ1bmN0aW9uIChmcmFnbWVudCkge1xuICAgICAgcmV0dXJuICdmaWxlLScgKyBmb3JtYXRIYXNoRnJhZ21lbnQoZnJhZ21lbnQpXG4gICAgfVxuICB9XG59XG5cbnZhciBnaXRIb3N0RGVmYXVsdHMgPSB7XG4gICdzc2h0ZW1wbGF0ZSc6ICdnaXRAe2RvbWFpbn06e3VzZXJ9L3twcm9qZWN0fS5naXR7I2NvbW1pdHRpc2h9JyxcbiAgJ3NzaHVybHRlbXBsYXRlJzogJ2dpdCtzc2g6Ly9naXRAe2RvbWFpbn0ve3VzZXJ9L3twcm9qZWN0fS5naXR7I2NvbW1pdHRpc2h9JyxcbiAgJ2Jyb3dzZXRlbXBsYXRlJzogJ2h0dHBzOi8ve2RvbWFpbn0ve3VzZXJ9L3twcm9qZWN0fXsvdHJlZS9jb21taXR0aXNofScsXG4gICdicm93c2VmaWxldGVtcGxhdGUnOiAnaHR0cHM6Ly97ZG9tYWlufS97dXNlcn0ve3Byb2plY3R9L3t0cmVlcGF0aH0ve2NvbW1pdHRpc2h9L3twYXRofXsjZnJhZ21lbnR9JyxcbiAgJ2RvY3N0ZW1wbGF0ZSc6ICdodHRwczovL3tkb21haW59L3t1c2VyfS97cHJvamVjdH17L3RyZWUvY29tbWl0dGlzaH0jcmVhZG1lJyxcbiAgJ2h0dHBzdGVtcGxhdGUnOiAnZ2l0K2h0dHBzOi8ve2F1dGhAfXtkb21haW59L3t1c2VyfS97cHJvamVjdH0uZ2l0eyNjb21taXR0aXNofScsXG4gICdmaWxldGVtcGxhdGUnOiAnaHR0cHM6Ly97ZG9tYWlufS97dXNlcn0ve3Byb2plY3R9L3Jhdy97Y29tbWl0dGlzaH0ve3BhdGh9JyxcbiAgJ3Nob3J0Y3V0dGVtcGxhdGUnOiAne3R5cGV9Ont1c2VyfS97cHJvamVjdH17I2NvbW1pdHRpc2h9JyxcbiAgJ3BhdGh0ZW1wbGF0ZSc6ICd7dXNlcn0ve3Byb2plY3R9eyNjb21taXR0aXNofScsXG4gICdwYXRobWF0Y2gnOiAvXlsvXShbXi9dKylbL10oW14vXSs/KSg/OlsuXWdpdHxbL10pPyQvLFxuICAnaGFzaGZvcm1hdCc6IGZvcm1hdEhhc2hGcmFnbWVudFxufVxuXG5PYmplY3Qua2V5cyhnaXRIb3N0cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICBPYmplY3Qua2V5cyhnaXRIb3N0RGVmYXVsdHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChnaXRIb3N0c1tuYW1lXVtrZXldKSByZXR1cm5cbiAgICBnaXRIb3N0c1tuYW1lXVtrZXldID0gZ2l0SG9zdERlZmF1bHRzW2tleV1cbiAgfSlcbiAgZ2l0SG9zdHNbbmFtZV0ucHJvdG9jb2xzX3JlID0gUmVnRXhwKCdeKCcgK1xuICAgIGdpdEhvc3RzW25hbWVdLnByb3RvY29scy5tYXAoZnVuY3Rpb24gKHByb3RvY29sKSB7XG4gICAgICByZXR1cm4gcHJvdG9jb2wucmVwbGFjZSgvKFtcXFxcKyp7fSgpW1xcXSRefF0pL2csICdcXFxcJDEnKVxuICAgIH0pLmpvaW4oJ3wnKSArICcpOiQnKVxufSlcblxuZnVuY3Rpb24gZm9ybWF0SGFzaEZyYWdtZW50IChmcmFnbWVudCkge1xuICByZXR1cm4gZnJhZ21lbnQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9eXFxXK3xcXC98XFxXKyQvZywgJycpLnJlcGxhY2UoL1xcVysvZywgJy0nKVxufVxuIiwgIid1c2Ugc3RyaWN0J1xudmFyIGdpdEhvc3RzID0gcmVxdWlyZSgnLi9naXQtaG9zdC1pbmZvLmpzJylcbi8qIGVzbGludC1kaXNhYmxlIG5vZGUvbm8tZGVwcmVjYXRlZC1hcGkgKi9cblxuLy8gY29weS1wYXN0YSB1dGlsLl9leHRlbmQgZnJvbSBub2RlJ3Mgc291cmNlLCB0byBhdm9pZCBwdWxsaW5nXG4vLyB0aGUgd2hvbGUgdXRpbCBtb2R1bGUgaW50byBwZW9wbGVzJyB3ZWJwYWNrIGJ1bmRsZXMuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xudmFyIGV4dGVuZCA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX2V4dGVuZCAodGFyZ2V0LCBzb3VyY2UpIHtcbiAgLy8gRG9uJ3QgZG8gYW55dGhpbmcgaWYgc291cmNlIGlzbid0IGFuIG9iamVjdFxuICBpZiAoc291cmNlID09PSBudWxsIHx8IHR5cGVvZiBzb3VyY2UgIT09ICdvYmplY3QnKSByZXR1cm4gdGFyZ2V0XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpXG4gIHZhciBpID0ga2V5cy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIHRhcmdldFtrZXlzW2ldXSA9IHNvdXJjZVtrZXlzW2ldXVxuICB9XG4gIHJldHVybiB0YXJnZXRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHaXRIb3N0XG5mdW5jdGlvbiBHaXRIb3N0ICh0eXBlLCB1c2VyLCBhdXRoLCBwcm9qZWN0LCBjb21taXR0aXNoLCBkZWZhdWx0UmVwcmVzZW50YXRpb24sIG9wdHMpIHtcbiAgdmFyIGdpdEhvc3RJbmZvID0gdGhpc1xuICBnaXRIb3N0SW5mby50eXBlID0gdHlwZVxuICBPYmplY3Qua2V5cyhnaXRIb3N0c1t0eXBlXSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgZ2l0SG9zdEluZm9ba2V5XSA9IGdpdEhvc3RzW3R5cGVdW2tleV1cbiAgfSlcbiAgZ2l0SG9zdEluZm8udXNlciA9IHVzZXJcbiAgZ2l0SG9zdEluZm8uYXV0aCA9IGF1dGhcbiAgZ2l0SG9zdEluZm8ucHJvamVjdCA9IHByb2plY3RcbiAgZ2l0SG9zdEluZm8uY29tbWl0dGlzaCA9IGNvbW1pdHRpc2hcbiAgZ2l0SG9zdEluZm8uZGVmYXVsdCA9IGRlZmF1bHRSZXByZXNlbnRhdGlvblxuICBnaXRIb3N0SW5mby5vcHRzID0gb3B0cyB8fCB7fVxufVxuXG5HaXRIb3N0LnByb3RvdHlwZS5oYXNoID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5jb21taXR0aXNoID8gJyMnICsgdGhpcy5jb21taXR0aXNoIDogJydcbn1cblxuR2l0SG9zdC5wcm90b3R5cGUuX2ZpbGwgPSBmdW5jdGlvbiAodGVtcGxhdGUsIG9wdHMpIHtcbiAgaWYgKCF0ZW1wbGF0ZSkgcmV0dXJuXG4gIHZhciB2YXJzID0gZXh0ZW5kKHt9LCBvcHRzKVxuICB2YXJzLnBhdGggPSB2YXJzLnBhdGggPyB2YXJzLnBhdGgucmVwbGFjZSgvXlsvXSsvZywgJycpIDogJydcbiAgb3B0cyA9IGV4dGVuZChleHRlbmQoe30sIHRoaXMub3B0cyksIG9wdHMpXG4gIHZhciBzZWxmID0gdGhpc1xuICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoc2VsZltrZXldICE9IG51bGwgJiYgdmFyc1trZXldID09IG51bGwpIHZhcnNba2V5XSA9IHNlbGZba2V5XVxuICB9KVxuICB2YXIgcmF3QXV0aCA9IHZhcnMuYXV0aFxuICB2YXIgcmF3Y29tbWl0dGlzaCA9IHZhcnMuY29tbWl0dGlzaFxuICB2YXIgcmF3RnJhZ21lbnQgPSB2YXJzLmZyYWdtZW50XG4gIHZhciByYXdQYXRoID0gdmFycy5wYXRoXG4gIHZhciByYXdQcm9qZWN0ID0gdmFycy5wcm9qZWN0XG4gIE9iamVjdC5rZXlzKHZhcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciB2YWx1ZSA9IHZhcnNba2V5XVxuICAgIGlmICgoa2V5ID09PSAncGF0aCcgfHwga2V5ID09PSAncHJvamVjdCcpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhcnNba2V5XSA9IHZhbHVlLnNwbGl0KCcvJykubWFwKGZ1bmN0aW9uIChwYXRoQ29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQocGF0aENvbXBvbmVudClcbiAgICAgIH0pLmpvaW4oJy8nKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXJzW2tleV0gPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpXG4gICAgfVxuICB9KVxuICB2YXJzWydhdXRoQCddID0gcmF3QXV0aCA/IHJhd0F1dGggKyAnQCcgOiAnJ1xuICB2YXJzWycjZnJhZ21lbnQnXSA9IHJhd0ZyYWdtZW50ID8gJyMnICsgdGhpcy5oYXNoZm9ybWF0KHJhd0ZyYWdtZW50KSA6ICcnXG4gIHZhcnMuZnJhZ21lbnQgPSB2YXJzLmZyYWdtZW50ID8gdmFycy5mcmFnbWVudCA6ICcnXG4gIHZhcnNbJyNwYXRoJ10gPSByYXdQYXRoID8gJyMnICsgdGhpcy5oYXNoZm9ybWF0KHJhd1BhdGgpIDogJydcbiAgdmFyc1snL3BhdGgnXSA9IHZhcnMucGF0aCA/ICcvJyArIHZhcnMucGF0aCA6ICcnXG4gIHZhcnMucHJvamVjdFBhdGggPSByYXdQcm9qZWN0LnNwbGl0KCcvJykubWFwKGVuY29kZVVSSUNvbXBvbmVudCkuam9pbignLycpXG4gIGlmIChvcHRzLm5vQ29tbWl0dGlzaCkge1xuICAgIHZhcnNbJyNjb21taXR0aXNoJ10gPSAnJ1xuICAgIHZhcnNbJy90cmVlL2NvbW1pdHRpc2gnXSA9ICcnXG4gICAgdmFyc1snL2NvbW1pdHRpc2gnXSA9ICcnXG4gICAgdmFycy5jb21taXR0aXNoID0gJydcbiAgfSBlbHNlIHtcbiAgICB2YXJzWycjY29tbWl0dGlzaCddID0gcmF3Y29tbWl0dGlzaCA/ICcjJyArIHJhd2NvbW1pdHRpc2ggOiAnJ1xuICAgIHZhcnNbJy90cmVlL2NvbW1pdHRpc2gnXSA9IHZhcnMuY29tbWl0dGlzaFxuICAgICAgPyAnLycgKyB2YXJzLnRyZWVwYXRoICsgJy8nICsgdmFycy5jb21taXR0aXNoXG4gICAgICA6ICcnXG4gICAgdmFyc1snL2NvbW1pdHRpc2gnXSA9IHZhcnMuY29tbWl0dGlzaCA/ICcvJyArIHZhcnMuY29tbWl0dGlzaCA6ICcnXG4gICAgdmFycy5jb21taXR0aXNoID0gdmFycy5jb21taXR0aXNoIHx8ICdtYXN0ZXInXG4gIH1cbiAgdmFyIHJlcyA9IHRlbXBsYXRlXG4gIE9iamVjdC5rZXlzKHZhcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHJlcyA9IHJlcy5yZXBsYWNlKG5ldyBSZWdFeHAoJ1t7XScgKyBrZXkgKyAnW31dJywgJ2cnKSwgdmFyc1trZXldKVxuICB9KVxuICBpZiAob3B0cy5ub0dpdFBsdXMpIHtcbiAgICByZXR1cm4gcmVzLnJlcGxhY2UoL15naXRbK10vLCAnJylcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVzXG4gIH1cbn1cblxuR2l0SG9zdC5wcm90b3R5cGUuc3NoID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgcmV0dXJuIHRoaXMuX2ZpbGwodGhpcy5zc2h0ZW1wbGF0ZSwgb3B0cylcbn1cblxuR2l0SG9zdC5wcm90b3R5cGUuc3NodXJsID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgcmV0dXJuIHRoaXMuX2ZpbGwodGhpcy5zc2h1cmx0ZW1wbGF0ZSwgb3B0cylcbn1cblxuR2l0SG9zdC5wcm90b3R5cGUuYnJvd3NlID0gZnVuY3Rpb24gKFAsIEYsIG9wdHMpIHtcbiAgaWYgKHR5cGVvZiBQID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2YgRiAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG9wdHMgPSBGXG4gICAgICBGID0gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZmlsbCh0aGlzLmJyb3dzZWZpbGV0ZW1wbGF0ZSwgZXh0ZW5kKHtcbiAgICAgIGZyYWdtZW50OiBGLFxuICAgICAgcGF0aDogUFxuICAgIH0sIG9wdHMpKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB0aGlzLl9maWxsKHRoaXMuYnJvd3NldGVtcGxhdGUsIFApXG4gIH1cbn1cblxuR2l0SG9zdC5wcm90b3R5cGUuZG9jcyA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gIHJldHVybiB0aGlzLl9maWxsKHRoaXMuZG9jc3RlbXBsYXRlLCBvcHRzKVxufVxuXG5HaXRIb3N0LnByb3RvdHlwZS5idWdzID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgcmV0dXJuIHRoaXMuX2ZpbGwodGhpcy5idWdzdGVtcGxhdGUsIG9wdHMpXG59XG5cbkdpdEhvc3QucHJvdG90eXBlLmh0dHBzID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgcmV0dXJuIHRoaXMuX2ZpbGwodGhpcy5odHRwc3RlbXBsYXRlLCBvcHRzKVxufVxuXG5HaXRIb3N0LnByb3RvdHlwZS5naXQgPSBmdW5jdGlvbiAob3B0cykge1xuICByZXR1cm4gdGhpcy5fZmlsbCh0aGlzLmdpdHRlbXBsYXRlLCBvcHRzKVxufVxuXG5HaXRIb3N0LnByb3RvdHlwZS5zaG9ydGN1dCA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gIHJldHVybiB0aGlzLl9maWxsKHRoaXMuc2hvcnRjdXR0ZW1wbGF0ZSwgb3B0cylcbn1cblxuR2l0SG9zdC5wcm90b3R5cGUucGF0aCA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gIHJldHVybiB0aGlzLl9maWxsKHRoaXMucGF0aHRlbXBsYXRlLCBvcHRzKVxufVxuXG5HaXRIb3N0LnByb3RvdHlwZS50YXJiYWxsID0gZnVuY3Rpb24gKG9wdHNfKSB7XG4gIHZhciBvcHRzID0gZXh0ZW5kKHt9LCBvcHRzXywgeyBub0NvbW1pdHRpc2g6IGZhbHNlIH0pXG4gIHJldHVybiB0aGlzLl9maWxsKHRoaXMudGFyYmFsbHRlbXBsYXRlLCBvcHRzKVxufVxuXG5HaXRIb3N0LnByb3RvdHlwZS5maWxlID0gZnVuY3Rpb24gKFAsIG9wdHMpIHtcbiAgcmV0dXJuIHRoaXMuX2ZpbGwodGhpcy5maWxldGVtcGxhdGUsIGV4dGVuZCh7IHBhdGg6IFAgfSwgb3B0cykpXG59XG5cbkdpdEhvc3QucHJvdG90eXBlLmdldERlZmF1bHRSZXByZXNlbnRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZGVmYXVsdFxufVxuXG5HaXRIb3N0LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gIGlmICh0aGlzLmRlZmF1bHQgJiYgdHlwZW9mIHRoaXNbdGhpcy5kZWZhdWx0XSA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHRoaXNbdGhpcy5kZWZhdWx0XShvcHRzKVxuICByZXR1cm4gdGhpcy5zc2h1cmwob3B0cylcbn1cbiIsICIndXNlIHN0cmljdCdcbnZhciB1cmwgPSByZXF1aXJlKCd1cmwnKVxudmFyIGdpdEhvc3RzID0gcmVxdWlyZSgnLi9naXQtaG9zdC1pbmZvLmpzJylcbnZhciBHaXRIb3N0ID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2dpdC1ob3N0LmpzJylcblxudmFyIHByb3RvY29sVG9SZXByZXNlbnRhdGlvbk1hcCA9IHtcbiAgJ2dpdCtzc2g6JzogJ3NzaHVybCcsXG4gICdnaXQraHR0cHM6JzogJ2h0dHBzJyxcbiAgJ3NzaDonOiAnc3NodXJsJyxcbiAgJ2dpdDonOiAnZ2l0J1xufVxuXG5mdW5jdGlvbiBwcm90b2NvbFRvUmVwcmVzZW50YXRpb24gKHByb3RvY29sKSB7XG4gIHJldHVybiBwcm90b2NvbFRvUmVwcmVzZW50YXRpb25NYXBbcHJvdG9jb2xdIHx8IHByb3RvY29sLnNsaWNlKDAsIC0xKVxufVxuXG52YXIgYXV0aFByb3RvY29scyA9IHtcbiAgJ2dpdDonOiB0cnVlLFxuICAnaHR0cHM6JzogdHJ1ZSxcbiAgJ2dpdCtodHRwczonOiB0cnVlLFxuICAnaHR0cDonOiB0cnVlLFxuICAnZ2l0K2h0dHA6JzogdHJ1ZVxufVxuXG52YXIgY2FjaGUgPSB7fVxuXG5tb2R1bGUuZXhwb3J0cy5mcm9tVXJsID0gZnVuY3Rpb24gKGdpdHVybCwgb3B0cykge1xuICBpZiAodHlwZW9mIGdpdHVybCAhPT0gJ3N0cmluZycpIHJldHVyblxuICB2YXIga2V5ID0gZ2l0dXJsICsgSlNPTi5zdHJpbmdpZnkob3B0cyB8fCB7fSlcblxuICBpZiAoIShrZXkgaW4gY2FjaGUpKSB7XG4gICAgY2FjaGVba2V5XSA9IGZyb21VcmwoZ2l0dXJsLCBvcHRzKVxuICB9XG5cbiAgcmV0dXJuIGNhY2hlW2tleV1cbn1cblxuZnVuY3Rpb24gZnJvbVVybCAoZ2l0dXJsLCBvcHRzKSB7XG4gIGlmIChnaXR1cmwgPT0gbnVsbCB8fCBnaXR1cmwgPT09ICcnKSByZXR1cm5cbiAgdmFyIHVybCA9IGZpeHVwVW5xdWFsaWZpZWRHaXN0KFxuICAgIGlzR2l0SHViU2hvcnRoYW5kKGdpdHVybCkgPyAnZ2l0aHViOicgKyBnaXR1cmwgOiBnaXR1cmxcbiAgKVxuICB2YXIgcGFyc2VkID0gcGFyc2VHaXRVcmwodXJsKVxuICB2YXIgc2hvcnRjdXRNYXRjaCA9IHVybC5tYXRjaCgvXihbXjpdKyk6KD86W15AXStAKT8oPzooW14vXSopXFwvKT8oW14jXSspLylcbiAgdmFyIG1hdGNoZXMgPSBPYmplY3Qua2V5cyhnaXRIb3N0cykubWFwKGZ1bmN0aW9uIChnaXRIb3N0TmFtZSkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgZ2l0SG9zdEluZm8gPSBnaXRIb3N0c1tnaXRIb3N0TmFtZV1cbiAgICAgIHZhciBhdXRoID0gbnVsbFxuICAgICAgaWYgKHBhcnNlZC5hdXRoICYmIGF1dGhQcm90b2NvbHNbcGFyc2VkLnByb3RvY29sXSkge1xuICAgICAgICBhdXRoID0gcGFyc2VkLmF1dGhcbiAgICAgIH1cbiAgICAgIHZhciBjb21taXR0aXNoID0gcGFyc2VkLmhhc2ggPyBkZWNvZGVVUklDb21wb25lbnQocGFyc2VkLmhhc2guc3Vic3RyKDEpKSA6IG51bGxcbiAgICAgIHZhciB1c2VyID0gbnVsbFxuICAgICAgdmFyIHByb2plY3QgPSBudWxsXG4gICAgICB2YXIgZGVmYXVsdFJlcHJlc2VudGF0aW9uID0gbnVsbFxuICAgICAgaWYgKHNob3J0Y3V0TWF0Y2ggJiYgc2hvcnRjdXRNYXRjaFsxXSA9PT0gZ2l0SG9zdE5hbWUpIHtcbiAgICAgICAgdXNlciA9IHNob3J0Y3V0TWF0Y2hbMl0gJiYgZGVjb2RlVVJJQ29tcG9uZW50KHNob3J0Y3V0TWF0Y2hbMl0pXG4gICAgICAgIHByb2plY3QgPSBkZWNvZGVVUklDb21wb25lbnQoc2hvcnRjdXRNYXRjaFszXS5yZXBsYWNlKC9cXC5naXQkLywgJycpKVxuICAgICAgICBkZWZhdWx0UmVwcmVzZW50YXRpb24gPSAnc2hvcnRjdXQnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocGFyc2VkLmhvc3QgJiYgcGFyc2VkLmhvc3QgIT09IGdpdEhvc3RJbmZvLmRvbWFpbiAmJiBwYXJzZWQuaG9zdC5yZXBsYWNlKC9ed3d3Wy5dLywgJycpICE9PSBnaXRIb3N0SW5mby5kb21haW4pIHJldHVyblxuICAgICAgICBpZiAoIWdpdEhvc3RJbmZvLnByb3RvY29sc19yZS50ZXN0KHBhcnNlZC5wcm90b2NvbCkpIHJldHVyblxuICAgICAgICBpZiAoIXBhcnNlZC5wYXRoKSByZXR1cm5cbiAgICAgICAgdmFyIHBhdGhtYXRjaCA9IGdpdEhvc3RJbmZvLnBhdGhtYXRjaFxuICAgICAgICB2YXIgbWF0Y2hlZCA9IHBhcnNlZC5wYXRoLm1hdGNoKHBhdGhtYXRjaClcbiAgICAgICAgaWYgKCFtYXRjaGVkKSByZXR1cm5cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgaWYgKG1hdGNoZWRbMV0gIT09IG51bGwgJiYgbWF0Y2hlZFsxXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdXNlciA9IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaGVkWzFdLnJlcGxhY2UoL146LywgJycpKVxuICAgICAgICB9XG4gICAgICAgIHByb2plY3QgPSBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hlZFsyXSlcbiAgICAgICAgZGVmYXVsdFJlcHJlc2VudGF0aW9uID0gcHJvdG9jb2xUb1JlcHJlc2VudGF0aW9uKHBhcnNlZC5wcm90b2NvbClcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgR2l0SG9zdChnaXRIb3N0TmFtZSwgdXNlciwgYXV0aCwgcHJvamVjdCwgY29tbWl0dGlzaCwgZGVmYXVsdFJlcHJlc2VudGF0aW9uLCBvcHRzKVxuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKGV4IGluc3RhbmNlb2YgVVJJRXJyb3IpIHtcbiAgICAgIH0gZWxzZSB0aHJvdyBleFxuICAgIH1cbiAgfSkuZmlsdGVyKGZ1bmN0aW9uIChnaXRIb3N0SW5mbykgeyByZXR1cm4gZ2l0SG9zdEluZm8gfSlcbiAgaWYgKG1hdGNoZXMubGVuZ3RoICE9PSAxKSByZXR1cm5cbiAgcmV0dXJuIG1hdGNoZXNbMF1cbn1cblxuZnVuY3Rpb24gaXNHaXRIdWJTaG9ydGhhbmQgKGFyZykge1xuICAvLyBOb3RlOiBUaGlzIGRvZXMgbm90IGZ1bGx5IHRlc3QgdGhlIGdpdCByZWYgZm9ybWF0LlxuICAvLyBTZWUgaHR0cHM6Ly93d3cua2VybmVsLm9yZy9wdWIvc29mdHdhcmUvc2NtL2dpdC9kb2NzL2dpdC1jaGVjay1yZWYtZm9ybWF0Lmh0bWxcbiAgLy9cbiAgLy8gVGhlIG9ubHkgd2F5IHRvIGRvIHRoaXMgcHJvcGVybHkgd291bGQgYmUgdG8gc2hlbGwgb3V0IHRvXG4gIC8vIGdpdC1jaGVjay1yZWYtZm9ybWF0LCBhbmQgYXMgdGhpcyBpcyBhIGZhc3Qgc3luYyBmdW5jdGlvbixcbiAgLy8gd2UgZG9uJ3Qgd2FudCB0byBkbyB0aGF0LiAgSnVzdCBsZXQgZ2l0IGZhaWwgaWYgaXQgdHVybnNcbiAgLy8gb3V0IHRoYXQgdGhlIGNvbW1pdC1pc2ggaXMgaW52YWxpZC5cbiAgLy8gR0ggdXNlcm5hbWVzIGNhbm5vdCBzdGFydCB3aXRoIC4gb3IgLVxuICByZXR1cm4gL15bXjpAJS9cXHMuLV1bXjpAJS9cXHNdKlsvXVteOkBcXHMvJV0rKD86Iy4qKT8kLy50ZXN0KGFyZylcbn1cblxuZnVuY3Rpb24gZml4dXBVbnF1YWxpZmllZEdpc3QgKGdpdHVybCkge1xuICAvLyBuZWNlc3NhcnkgZm9yIHJvdW5kLXRyaXBwaW5nIGdpc3RzXG4gIHZhciBwYXJzZWQgPSB1cmwucGFyc2UoZ2l0dXJsKVxuICBpZiAocGFyc2VkLnByb3RvY29sID09PSAnZ2lzdDonICYmIHBhcnNlZC5ob3N0ICYmICFwYXJzZWQucGF0aCkge1xuICAgIHJldHVybiBwYXJzZWQucHJvdG9jb2wgKyAnLycgKyBwYXJzZWQuaG9zdFxuICB9IGVsc2Uge1xuICAgIHJldHVybiBnaXR1cmxcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZUdpdFVybCAoZ2l0dXJsKSB7XG4gIHZhciBtYXRjaGVkID0gZ2l0dXJsLm1hdGNoKC9eKFteQF0rKUAoW146L10rKTpbL10/KCg/OlteL10rWy9dKT9bXi9dKz8pKD86Wy5dZ2l0KT8oIy4qKT8kLylcbiAgaWYgKCFtYXRjaGVkKSB7XG4gICAgdmFyIGxlZ2FjeSA9IHVybC5wYXJzZShnaXR1cmwpXG4gICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSB1cmwuVVJMLCB0aGVuIHNvcnJ5LCB0aGlzIGlzIGp1c3Qgbm90IGZpeGFibGUuXG4gICAgLy8gVGhpcyBhZmZlY3RzIE5vZGUgPD0gNi4xMi5cbiAgICBpZiAobGVnYWN5LmF1dGggJiYgdHlwZW9mIHVybC5VUkwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIGdpdCB1cmxzIGNhbiBiZSBpbiB0aGUgZm9ybSBvZiBzY3Atc3R5bGUvc3NoLWNvbm5lY3Qgc3RyaW5ncywgbGlrZVxuICAgICAgLy8gZ2l0K3NzaDovL3VzZXJAaG9zdC5jb206c29tZS9wYXRoLCB3aGljaCB0aGUgbGVnYWN5IHVybCBwYXJzZXJcbiAgICAgIC8vIHN1cHBvcnRzLCBidXQgV2hhdFdHIHVybC5VUkwgY2xhc3MgZG9lcyBub3QuICBIb3dldmVyLCB0aGUgbGVnYWN5XG4gICAgICAvLyBwYXJzZXIgZGUtdXJsZW5jb2RlcyB0aGUgdXNlcm5hbWUgYW5kIHBhc3N3b3JkLCBzbyBzb21ldGhpbmcgbGlrZVxuICAgICAgLy8gaHR0cHM6Ly91c2VyJTNBbiU0MG1lOnAlNDBzcyUzQXdvcmRAeC5jb20vIGJlY29tZXNcbiAgICAgIC8vIGh0dHBzOi8vdXNlcjpuQG1lOnBAc3M6d29yZEB4LmNvbS8gd2hpY2ggaXMgYWxsIGtpbmRzIG9mIHdyb25nLlxuICAgICAgLy8gUHVsbCBvZmYganVzdCB0aGUgYXV0aCBhbmQgaG9zdCwgc28gd2UgZG9udCcgZ2V0IHRoZSBjb25mdXNpbmdcbiAgICAgIC8vIHNjcC1zdHlsZSBVUkwsIHRoZW4gcGFzcyB0aGF0IHRvIHRoZSBXaGF0V0cgcGFyc2VyIHRvIGdldCB0aGVcbiAgICAgIC8vIGF1dGggcHJvcGVybHkgZXNjYXBlZC5cbiAgICAgIHZhciBhdXRobWF0Y2ggPSBnaXR1cmwubWF0Y2goL1teQF0rQFteOi9dKy8pXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAtIHRoaXMgc2hvdWxkIGJlIGltcG9zc2libGUgKi9cbiAgICAgIGlmIChhdXRobWF0Y2gpIHtcbiAgICAgICAgdmFyIHdoYXR3ZyA9IG5ldyB1cmwuVVJMKGF1dGhtYXRjaFswXSlcbiAgICAgICAgbGVnYWN5LmF1dGggPSB3aGF0d2cudXNlcm5hbWUgfHwgJydcbiAgICAgICAgaWYgKHdoYXR3Zy5wYXNzd29yZCkgbGVnYWN5LmF1dGggKz0gJzonICsgd2hhdHdnLnBhc3N3b3JkXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsZWdhY3lcbiAgfVxuICByZXR1cm4ge1xuICAgIHByb3RvY29sOiAnZ2l0K3NzaDonLFxuICAgIHNsYXNoZXM6IHRydWUsXG4gICAgYXV0aDogbWF0Y2hlZFsxXSxcbiAgICBob3N0OiBtYXRjaGVkWzJdLFxuICAgIHBvcnQ6IG51bGwsXG4gICAgaG9zdG5hbWU6IG1hdGNoZWRbMl0sXG4gICAgaGFzaDogbWF0Y2hlZFs0XSxcbiAgICBzZWFyY2g6IG51bGwsXG4gICAgcXVlcnk6IG51bGwsXG4gICAgcGF0aG5hbWU6ICcvJyArIG1hdGNoZWRbM10sXG4gICAgcGF0aDogJy8nICsgbWF0Y2hlZFszXSxcbiAgICBocmVmOiAnZ2l0K3NzaDovLycgKyBtYXRjaGVkWzFdICsgJ0AnICsgbWF0Y2hlZFsyXSArXG4gICAgICAgICAgJy8nICsgbWF0Y2hlZFszXSArIChtYXRjaGVkWzRdIHx8ICcnKVxuICB9XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgb3MgPSByZXF1aXJlKCdvcycpO1xuXG4vLyBhZGFwdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9vcy1ob21lZGlyL2Jsb2IvMTFlMDg5ZjQ3NTRkYjM4YmI1MzVlNWE4NDE2MzIwYzQ0NDZlOGNmZC9pbmRleC5qc1xuXG5tb2R1bGUuZXhwb3J0cyA9IG9zLmhvbWVkaXIgfHwgZnVuY3Rpb24gaG9tZWRpcigpIHtcbiAgICB2YXIgaG9tZSA9IHByb2Nlc3MuZW52LkhPTUU7XG4gICAgdmFyIHVzZXIgPSBwcm9jZXNzLmVudi5MT0dOQU1FIHx8IHByb2Nlc3MuZW52LlVTRVIgfHwgcHJvY2Vzcy5lbnYuTE5BTUUgfHwgcHJvY2Vzcy5lbnYuVVNFUk5BTUU7XG5cbiAgICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJykge1xuICAgICAgICByZXR1cm4gcHJvY2Vzcy5lbnYuVVNFUlBST0ZJTEVcbiAgICAgICAgICAgIHx8IChcbiAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5IT01FRFJJVkVcbiAgICAgICAgICAgICAgICAmJiBwcm9jZXNzLmVudi5IT01FUEFUSFxuICAgICAgICAgICAgICAgICYmIChwcm9jZXNzLmVudi5IT01FRFJJVkUgKyBwcm9jZXNzLmVudi5IT01FUEFUSClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHx8IGhvbWVcbiAgICAgICAgICAgIHx8IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICdkYXJ3aW4nKSB7XG4gICAgICAgIHJldHVybiBob21lIHx8ICh1c2VyID8gJy9Vc2Vycy8nICsgdXNlciA6IG51bGwpO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnbGludXgnKSB7XG4gICAgICAgIHJldHVybiBob21lIHx8IChwcm9jZXNzLmdldHVpZCgpID09PSAwID8gJy9yb290JyA6ICh1c2VyID8gJy9ob21lLycgKyB1c2VyIDogbnVsbCkpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWV4dHJhLXBhcmVuc1xuICAgIH1cblxuICAgIHJldHVybiBob21lIHx8IG51bGw7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxuLyoqIEB0eXBlIHtpbXBvcnQoJy4nKX0gKi9cbm1vZHVsZS5leHBvcnRzID0gRXJyb3I7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgJEVycm9yID0gcmVxdWlyZSgnZXMtZXJyb3JzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIHNlZSBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L3dpa2kvSmF2YVNjcmlwdFN0YWNrVHJhY2VBcGlcbiAgICB2YXIgb3JpZ1ByZXBhcmVTdGFja1RyYWNlID0gJEVycm9yLnByZXBhcmVTdGFja1RyYWNlO1xuICAgICRFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IGZ1bmN0aW9uIChfLCBzdGFjaykgeyByZXR1cm4gc3RhY2s7IH07XG4gICAgdmFyIHN0YWNrID0gKG5ldyAkRXJyb3IoKSkuc3RhY2s7XG4gICAgJEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gb3JpZ1ByZXBhcmVTdGFja1RyYWNlO1xuICAgIHJldHVybiBzdGFja1syXS5nZXRGaWxlTmFtZSgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBpc1dpbmRvd3MgPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInO1xuXG4vLyBSZWdleCB0byBzcGxpdCBhIHdpbmRvd3MgcGF0aCBpbnRvIGludG8gW2Rpciwgcm9vdCwgYmFzZW5hbWUsIG5hbWUsIGV4dF1cbnZhciBzcGxpdFdpbmRvd3NSZSA9XG4gICAgL14oKCg/OlthLXpBLVpdOnxbXFxcXFxcL117Mn1bXlxcXFxcXC9dK1tcXFxcXFwvXStbXlxcXFxcXC9dKyk/W1xcXFxcXC9dPykoPzpbXlxcXFxcXC9dKltcXFxcXFwvXSkqKSgoXFwuezEsMn18W15cXFxcXFwvXSs/fCkoXFwuW14uXFwvXFxcXF0qfCkpW1xcXFxcXC9dKiQvO1xuXG52YXIgd2luMzIgPSB7fTtcblxuZnVuY3Rpb24gd2luMzJTcGxpdFBhdGgoZmlsZW5hbWUpIHtcbiAgcmV0dXJuIHNwbGl0V2luZG93c1JlLmV4ZWMoZmlsZW5hbWUpLnNsaWNlKDEpO1xufVxuXG53aW4zMi5wYXJzZSA9IGZ1bmN0aW9uKHBhdGhTdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBwYXRoU3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgIFwiUGFyYW1ldGVyICdwYXRoU3RyaW5nJyBtdXN0IGJlIGEgc3RyaW5nLCBub3QgXCIgKyB0eXBlb2YgcGF0aFN0cmluZ1xuICAgICk7XG4gIH1cbiAgdmFyIGFsbFBhcnRzID0gd2luMzJTcGxpdFBhdGgocGF0aFN0cmluZyk7XG4gIGlmICghYWxsUGFydHMgfHwgYWxsUGFydHMubGVuZ3RoICE9PSA1KSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgcGF0aCAnXCIgKyBwYXRoU3RyaW5nICsgXCInXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcm9vdDogYWxsUGFydHNbMV0sXG4gICAgZGlyOiBhbGxQYXJ0c1swXSA9PT0gYWxsUGFydHNbMV0gPyBhbGxQYXJ0c1swXSA6IGFsbFBhcnRzWzBdLnNsaWNlKDAsIC0xKSxcbiAgICBiYXNlOiBhbGxQYXJ0c1syXSxcbiAgICBleHQ6IGFsbFBhcnRzWzRdLFxuICAgIG5hbWU6IGFsbFBhcnRzWzNdXG4gIH07XG59O1xuXG5cblxuLy8gU3BsaXQgYSBmaWxlbmFtZSBpbnRvIFtkaXIsIHJvb3QsIGJhc2VuYW1lLCBuYW1lLCBleHRdLCB1bml4IHZlcnNpb25cbi8vICdyb290JyBpcyBqdXN0IGEgc2xhc2gsIG9yIG5vdGhpbmcuXG52YXIgc3BsaXRQYXRoUmUgPVxuICAgIC9eKChcXC8/KSg/OlteXFwvXSpcXC8pKikoKFxcLnsxLDJ9fFteXFwvXSs/fCkoXFwuW14uXFwvXSp8KSlbXFwvXSokLztcbnZhciBwb3NpeCA9IHt9O1xuXG5cbmZ1bmN0aW9uIHBvc2l4U3BsaXRQYXRoKGZpbGVuYW1lKSB7XG4gIHJldHVybiBzcGxpdFBhdGhSZS5leGVjKGZpbGVuYW1lKS5zbGljZSgxKTtcbn1cblxuXG5wb3NpeC5wYXJzZSA9IGZ1bmN0aW9uKHBhdGhTdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBwYXRoU3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgIFwiUGFyYW1ldGVyICdwYXRoU3RyaW5nJyBtdXN0IGJlIGEgc3RyaW5nLCBub3QgXCIgKyB0eXBlb2YgcGF0aFN0cmluZ1xuICAgICk7XG4gIH1cbiAgdmFyIGFsbFBhcnRzID0gcG9zaXhTcGxpdFBhdGgocGF0aFN0cmluZyk7XG4gIGlmICghYWxsUGFydHMgfHwgYWxsUGFydHMubGVuZ3RoICE9PSA1KSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgcGF0aCAnXCIgKyBwYXRoU3RyaW5nICsgXCInXCIpO1xuICB9XG4gIFxuICByZXR1cm4ge1xuICAgIHJvb3Q6IGFsbFBhcnRzWzFdLFxuICAgIGRpcjogYWxsUGFydHNbMF0uc2xpY2UoMCwgLTEpLFxuICAgIGJhc2U6IGFsbFBhcnRzWzJdLFxuICAgIGV4dDogYWxsUGFydHNbNF0sXG4gICAgbmFtZTogYWxsUGFydHNbM10sXG4gIH07XG59O1xuXG5cbmlmIChpc1dpbmRvd3MpXG4gIG1vZHVsZS5leHBvcnRzID0gd2luMzIucGFyc2U7XG5lbHNlIC8qIHBvc2l4ICovXG4gIG1vZHVsZS5leHBvcnRzID0gcG9zaXgucGFyc2U7XG5cbm1vZHVsZS5leHBvcnRzLnBvc2l4ID0gcG9zaXgucGFyc2U7XG5tb2R1bGUuZXhwb3J0cy53aW4zMiA9IHdpbjMyLnBhcnNlO1xuIiwgInZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xudmFyIHBhcnNlID0gcGF0aC5wYXJzZSB8fCByZXF1aXJlKCdwYXRoLXBhcnNlJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZ2xvYmFsLXJlcXVpcmVcblxudmFyIGRyaXZlTGV0dGVyUmVnZXggPSAvXihbQS1aYS16XTopLztcbnZhciB1bmNQYXRoUmVnZXggPSAvXlxcXFxcXFxcLztcblxuZnVuY3Rpb24gZ2V0Tm9kZU1vZHVsZXNEaXJzKGFic29sdXRlU3RhcnQsIG1vZHVsZXMpIHtcbiAgICB2YXIgcHJlZml4ID0gJy8nO1xuICAgIGlmIChkcml2ZUxldHRlclJlZ2V4LnRlc3QoYWJzb2x1dGVTdGFydCkpIHtcbiAgICAgICAgcHJlZml4ID0gJyc7XG4gICAgfSBlbHNlIGlmICh1bmNQYXRoUmVnZXgudGVzdChhYnNvbHV0ZVN0YXJ0KSkge1xuICAgICAgICBwcmVmaXggPSAnXFxcXFxcXFwnO1xuICAgIH1cblxuICAgIHZhciBwYXRocyA9IFthYnNvbHV0ZVN0YXJ0XTtcbiAgICB2YXIgcGFyc2VkID0gcGFyc2UoYWJzb2x1dGVTdGFydCk7XG4gICAgd2hpbGUgKHBhcnNlZC5kaXIgIT09IHBhdGhzW3BhdGhzLmxlbmd0aCAtIDFdKSB7XG4gICAgICAgIHBhdGhzLnB1c2gocGFyc2VkLmRpcik7XG4gICAgICAgIHBhcnNlZCA9IHBhcnNlKHBhcnNlZC5kaXIpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXRocy5yZWR1Y2UoZnVuY3Rpb24gKGRpcnMsIGFQYXRoKSB7XG4gICAgICAgIHJldHVybiBkaXJzLmNvbmNhdChtb2R1bGVzLm1hcChmdW5jdGlvbiAobW9kdWxlRGlyKSB7XG4gICAgICAgICAgICByZXR1cm4gcGF0aC5yZXNvbHZlKHByZWZpeCwgYVBhdGgsIG1vZHVsZURpcik7XG4gICAgICAgIH0pKTtcbiAgICB9LCBbXSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9kZU1vZHVsZXNQYXRocyhzdGFydCwgb3B0cywgcmVxdWVzdCkge1xuICAgIHZhciBtb2R1bGVzID0gb3B0cyAmJiBvcHRzLm1vZHVsZURpcmVjdG9yeVxuICAgICAgICA/IFtdLmNvbmNhdChvcHRzLm1vZHVsZURpcmVjdG9yeSlcbiAgICAgICAgOiBbJ25vZGVfbW9kdWxlcyddO1xuXG4gICAgaWYgKG9wdHMgJiYgdHlwZW9mIG9wdHMucGF0aHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG9wdHMucGF0aHMoXG4gICAgICAgICAgICByZXF1ZXN0LFxuICAgICAgICAgICAgc3RhcnQsXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXROb2RlTW9kdWxlc0RpcnMoc3RhcnQsIG1vZHVsZXMpOyB9LFxuICAgICAgICAgICAgb3B0c1xuICAgICAgICApO1xuICAgIH1cblxuICAgIHZhciBkaXJzID0gZ2V0Tm9kZU1vZHVsZXNEaXJzKHN0YXJ0LCBtb2R1bGVzKTtcbiAgICByZXR1cm4gb3B0cyAmJiBvcHRzLnBhdGhzID8gZGlycy5jb25jYXQob3B0cy5wYXRocykgOiBkaXJzO1xufTtcbiIsICJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh4LCBvcHRzKSB7XG4gICAgLyoqXG4gICAgICogVGhpcyBmaWxlIGlzIHB1cnBvc2VmdWxseSBhIHBhc3N0aHJvdWdoLiBJdCdzIGV4cGVjdGVkIHRoYXQgdGhpcmQtcGFydHlcbiAgICAgKiBlbnZpcm9ubWVudHMgd2lsbCBvdmVycmlkZSBpdCBhdCBydW50aW1lIGluIG9yZGVyIHRvIGluamVjdCBzcGVjaWFsIGxvZ2ljXG4gICAgICogaW50byBgcmVzb2x2ZWAgKGJ5IG1hbmlwdWxhdGluZyB0aGUgb3B0aW9ucykuIE9uZSBzdWNoIGV4YW1wbGUgaXMgdGhlIFBuUFxuICAgICAqIGNvZGUgcGF0aCBpbiBZYXJuLlxuICAgICAqL1xuXG4gICAgcmV0dXJuIG9wdHMgfHwge307XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxuLyogZXNsaW50IG5vLWludmFsaWQtdGhpczogMSAqL1xuXG52YXIgRVJST1JfTUVTU0FHRSA9ICdGdW5jdGlvbi5wcm90b3R5cGUuYmluZCBjYWxsZWQgb24gaW5jb21wYXRpYmxlICc7XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIGZ1bmNUeXBlID0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblxudmFyIGNvbmNhdHR5ID0gZnVuY3Rpb24gY29uY2F0dHkoYSwgYikge1xuICAgIHZhciBhcnIgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBhcnJbaV0gPSBhW2ldO1xuICAgIH1cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGIubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgYXJyW2ogKyBhLmxlbmd0aF0gPSBiW2pdO1xuICAgIH1cblxuICAgIHJldHVybiBhcnI7XG59O1xuXG52YXIgc2xpY3kgPSBmdW5jdGlvbiBzbGljeShhcnJMaWtlLCBvZmZzZXQpIHtcbiAgICB2YXIgYXJyID0gW107XG4gICAgZm9yICh2YXIgaSA9IG9mZnNldCB8fCAwLCBqID0gMDsgaSA8IGFyckxpa2UubGVuZ3RoOyBpICs9IDEsIGogKz0gMSkge1xuICAgICAgICBhcnJbal0gPSBhcnJMaWtlW2ldO1xuICAgIH1cbiAgICByZXR1cm4gYXJyO1xufTtcblxudmFyIGpvaW55ID0gZnVuY3Rpb24gKGFyciwgam9pbmVyKSB7XG4gICAgdmFyIHN0ciA9ICcnO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHN0ciArPSBhcnJbaV07XG4gICAgICAgIGlmIChpICsgMSA8IGFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgIHN0ciArPSBqb2luZXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZCh0aGF0KSB7XG4gICAgdmFyIHRhcmdldCA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgIT09ICdmdW5jdGlvbicgfHwgdG9TdHIuYXBwbHkodGFyZ2V0KSAhPT0gZnVuY1R5cGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihFUlJPUl9NRVNTQUdFICsgdGFyZ2V0KTtcbiAgICB9XG4gICAgdmFyIGFyZ3MgPSBzbGljeShhcmd1bWVudHMsIDEpO1xuXG4gICAgdmFyIGJvdW5kO1xuICAgIHZhciBiaW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgYm91bmQpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0YXJnZXQuYXBwbHkoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBjb25jYXR0eShhcmdzLCBhcmd1bWVudHMpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKE9iamVjdChyZXN1bHQpID09PSByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhcmdldC5hcHBseShcbiAgICAgICAgICAgIHRoYXQsXG4gICAgICAgICAgICBjb25jYXR0eShhcmdzLCBhcmd1bWVudHMpXG4gICAgICAgICk7XG5cbiAgICB9O1xuXG4gICAgdmFyIGJvdW5kTGVuZ3RoID0gbWF4KDAsIHRhcmdldC5sZW5ndGggLSBhcmdzLmxlbmd0aCk7XG4gICAgdmFyIGJvdW5kQXJncyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm91bmRMZW5ndGg7IGkrKykge1xuICAgICAgICBib3VuZEFyZ3NbaV0gPSAnJCcgKyBpO1xuICAgIH1cblxuICAgIGJvdW5kID0gRnVuY3Rpb24oJ2JpbmRlcicsICdyZXR1cm4gZnVuY3Rpb24gKCcgKyBqb2lueShib3VuZEFyZ3MsICcsJykgKyAnKXsgcmV0dXJuIGJpbmRlci5hcHBseSh0aGlzLGFyZ3VtZW50cyk7IH0nKShiaW5kZXIpO1xuXG4gICAgaWYgKHRhcmdldC5wcm90b3R5cGUpIHtcbiAgICAgICAgdmFyIEVtcHR5ID0gZnVuY3Rpb24gRW1wdHkoKSB7fTtcbiAgICAgICAgRW1wdHkucHJvdG90eXBlID0gdGFyZ2V0LnByb3RvdHlwZTtcbiAgICAgICAgYm91bmQucHJvdG90eXBlID0gbmV3IEVtcHR5KCk7XG4gICAgICAgIEVtcHR5LnByb3RvdHlwZSA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJvdW5kO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBpbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZCB8fCBpbXBsZW1lbnRhdGlvbjtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBjYWxsID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGw7XG52YXIgJGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcblxuLyoqIEB0eXBlIHtpbXBvcnQoJy4nKX0gKi9cbm1vZHVsZS5leHBvcnRzID0gYmluZC5jYWxsKGNhbGwsICRoYXNPd24pO1xuIiwgIntcblx0XCJhc3NlcnRcIjogdHJ1ZSxcblx0XCJub2RlOmFzc2VydFwiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTZcIl0sXG5cdFwiYXNzZXJ0L3N0cmljdFwiOiBcIj49IDE1XCIsXG5cdFwibm9kZTphc3NlcnQvc3RyaWN0XCI6IFwiPj0gMTZcIixcblx0XCJhc3luY19ob29rc1wiOiBcIj49IDhcIixcblx0XCJub2RlOmFzeW5jX2hvb2tzXCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJidWZmZXJfaWVlZTc1NFwiOiBcIj49IDAuNSAmJiA8IDAuOS43XCIsXG5cdFwiYnVmZmVyXCI6IHRydWUsXG5cdFwibm9kZTpidWZmZXJcIjogW1wiPj0gMTQuMTggJiYgPCAxNVwiLCBcIj49IDE2XCJdLFxuXHRcImNoaWxkX3Byb2Nlc3NcIjogdHJ1ZSxcblx0XCJub2RlOmNoaWxkX3Byb2Nlc3NcIjogW1wiPj0gMTQuMTggJiYgPCAxNVwiLCBcIj49IDE2XCJdLFxuXHRcImNsdXN0ZXJcIjogXCI+PSAwLjVcIixcblx0XCJub2RlOmNsdXN0ZXJcIjogW1wiPj0gMTQuMTggJiYgPCAxNVwiLCBcIj49IDE2XCJdLFxuXHRcImNvbnNvbGVcIjogdHJ1ZSxcblx0XCJub2RlOmNvbnNvbGVcIjogW1wiPj0gMTQuMTggJiYgPCAxNVwiLCBcIj49IDE2XCJdLFxuXHRcImNvbnN0YW50c1wiOiB0cnVlLFxuXHRcIm5vZGU6Y29uc3RhbnRzXCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJjcnlwdG9cIjogdHJ1ZSxcblx0XCJub2RlOmNyeXB0b1wiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTZcIl0sXG5cdFwiX2RlYnVnX2FnZW50XCI6IFwiPj0gMSAmJiA8IDhcIixcblx0XCJfZGVidWdnZXJcIjogXCI8IDhcIixcblx0XCJkZ3JhbVwiOiB0cnVlLFxuXHRcIm5vZGU6ZGdyYW1cIjogW1wiPj0gMTQuMTggJiYgPCAxNVwiLCBcIj49IDE2XCJdLFxuXHRcImRpYWdub3N0aWNzX2NoYW5uZWxcIjogW1wiPj0gMTQuMTcgJiYgPCAxNVwiLCBcIj49IDE1LjFcIl0sXG5cdFwibm9kZTpkaWFnbm9zdGljc19jaGFubmVsXCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJkbnNcIjogdHJ1ZSxcblx0XCJub2RlOmRuc1wiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTZcIl0sXG5cdFwiZG5zL3Byb21pc2VzXCI6IFwiPj0gMTVcIixcblx0XCJub2RlOmRucy9wcm9taXNlc1wiOiBcIj49IDE2XCIsXG5cdFwiZG9tYWluXCI6IFwiPj0gMC43LjEyXCIsXG5cdFwibm9kZTpkb21haW5cIjogW1wiPj0gMTQuMTggJiYgPCAxNVwiLCBcIj49IDE2XCJdLFxuXHRcImV2ZW50c1wiOiB0cnVlLFxuXHRcIm5vZGU6ZXZlbnRzXCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJmcmVlbGlzdFwiOiBcIjwgNlwiLFxuXHRcImZzXCI6IHRydWUsXG5cdFwibm9kZTpmc1wiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTZcIl0sXG5cdFwiZnMvcHJvbWlzZXNcIjogW1wiPj0gMTAgJiYgPCAxMC4xXCIsIFwiPj0gMTRcIl0sXG5cdFwibm9kZTpmcy9wcm9taXNlc1wiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTZcIl0sXG5cdFwiX2h0dHBfYWdlbnRcIjogXCI+PSAwLjExLjFcIixcblx0XCJub2RlOl9odHRwX2FnZW50XCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJfaHR0cF9jbGllbnRcIjogXCI+PSAwLjExLjFcIixcblx0XCJub2RlOl9odHRwX2NsaWVudFwiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTZcIl0sXG5cdFwiX2h0dHBfY29tbW9uXCI6IFwiPj0gMC4xMS4xXCIsXG5cdFwibm9kZTpfaHR0cF9jb21tb25cIjogW1wiPj0gMTQuMTggJiYgPCAxNVwiLCBcIj49IDE2XCJdLFxuXHRcIl9odHRwX2luY29taW5nXCI6IFwiPj0gMC4xMS4xXCIsXG5cdFwibm9kZTpfaHR0cF9pbmNvbWluZ1wiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTZcIl0sXG5cdFwiX2h0dHBfb3V0Z29pbmdcIjogXCI+PSAwLjExLjFcIixcblx0XCJub2RlOl9odHRwX291dGdvaW5nXCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJfaHR0cF9zZXJ2ZXJcIjogXCI+PSAwLjExLjFcIixcblx0XCJub2RlOl9odHRwX3NlcnZlclwiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTZcIl0sXG5cdFwiaHR0cFwiOiB0cnVlLFxuXHRcIm5vZGU6aHR0cFwiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTZcIl0sXG5cdFwiaHR0cDJcIjogXCI+PSA4LjhcIixcblx0XCJub2RlOmh0dHAyXCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJodHRwc1wiOiB0cnVlLFxuXHRcIm5vZGU6aHR0cHNcIjogW1wiPj0gMTQuMTggJiYgPCAxNVwiLCBcIj49IDE2XCJdLFxuXHRcImluc3BlY3RvclwiOiBcIj49IDhcIixcblx0XCJub2RlOmluc3BlY3RvclwiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTZcIl0sXG5cdFwiaW5zcGVjdG9yL3Byb21pc2VzXCI6IFtcIj49IDE5XCJdLFxuXHRcIm5vZGU6aW5zcGVjdG9yL3Byb21pc2VzXCI6IFtcIj49IDE5XCJdLFxuXHRcIl9saW5rbGlzdFwiOiBcIjwgOFwiLFxuXHRcIm1vZHVsZVwiOiB0cnVlLFxuXHRcIm5vZGU6bW9kdWxlXCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJuZXRcIjogdHJ1ZSxcblx0XCJub2RlOm5ldFwiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTZcIl0sXG5cdFwibm9kZS1pbnNwZWN0L2xpYi9faW5zcGVjdFwiOiBcIj49IDcuNiAmJiA8IDEyXCIsXG5cdFwibm9kZS1pbnNwZWN0L2xpYi9pbnRlcm5hbC9pbnNwZWN0X2NsaWVudFwiOiBcIj49IDcuNiAmJiA8IDEyXCIsXG5cdFwibm9kZS1pbnNwZWN0L2xpYi9pbnRlcm5hbC9pbnNwZWN0X3JlcGxcIjogXCI+PSA3LjYgJiYgPCAxMlwiLFxuXHRcIm9zXCI6IHRydWUsXG5cdFwibm9kZTpvc1wiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTZcIl0sXG5cdFwicGF0aFwiOiB0cnVlLFxuXHRcIm5vZGU6cGF0aFwiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTZcIl0sXG5cdFwicGF0aC9wb3NpeFwiOiBcIj49IDE1LjNcIixcblx0XCJub2RlOnBhdGgvcG9zaXhcIjogXCI+PSAxNlwiLFxuXHRcInBhdGgvd2luMzJcIjogXCI+PSAxNS4zXCIsXG5cdFwibm9kZTpwYXRoL3dpbjMyXCI6IFwiPj0gMTZcIixcblx0XCJwZXJmX2hvb2tzXCI6IFwiPj0gOC41XCIsXG5cdFwibm9kZTpwZXJmX2hvb2tzXCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJwcm9jZXNzXCI6IFwiPj0gMVwiLFxuXHRcIm5vZGU6cHJvY2Vzc1wiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTZcIl0sXG5cdFwicHVueWNvZGVcIjogXCI+PSAwLjVcIixcblx0XCJub2RlOnB1bnljb2RlXCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJxdWVyeXN0cmluZ1wiOiB0cnVlLFxuXHRcIm5vZGU6cXVlcnlzdHJpbmdcIjogW1wiPj0gMTQuMTggJiYgPCAxNVwiLCBcIj49IDE2XCJdLFxuXHRcInJlYWRsaW5lXCI6IHRydWUsXG5cdFwibm9kZTpyZWFkbGluZVwiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTZcIl0sXG5cdFwicmVhZGxpbmUvcHJvbWlzZXNcIjogXCI+PSAxN1wiLFxuXHRcIm5vZGU6cmVhZGxpbmUvcHJvbWlzZXNcIjogXCI+PSAxN1wiLFxuXHRcInJlcGxcIjogdHJ1ZSxcblx0XCJub2RlOnJlcGxcIjogW1wiPj0gMTQuMTggJiYgPCAxNVwiLCBcIj49IDE2XCJdLFxuXHRcIm5vZGU6c2VhXCI6IFtcIj49IDIwLjEyICYmIDwgMjFcIiwgXCI+PSAyMS43XCJdLFxuXHRcInNtYWxsb2NcIjogXCI+PSAwLjExLjUgJiYgPCAzXCIsXG5cdFwibm9kZTpzcWxpdGVcIjogW1wiPj0gMjIuMTMgJiYgPCAyM1wiLCBcIj49IDIzLjRcIl0sXG5cdFwiX3N0cmVhbV9kdXBsZXhcIjogXCI+PSAwLjkuNCAmJiA8IDI2XCIsXG5cdFwibm9kZTpfc3RyZWFtX2R1cGxleFwiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTYgJiYgPCAyNlwiXSxcblx0XCJfc3RyZWFtX3RyYW5zZm9ybVwiOiBcIj49IDAuOS40ICYmIDwgMjZcIixcblx0XCJub2RlOl9zdHJlYW1fdHJhbnNmb3JtXCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNiAmJiA8IDI2XCJdLFxuXHRcIl9zdHJlYW1fd3JhcFwiOiBcIj49IDEuNC4xICYmIDwgMjZcIixcblx0XCJub2RlOl9zdHJlYW1fd3JhcFwiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTYgJiYgPCAyNlwiXSxcblx0XCJfc3RyZWFtX3Bhc3N0aHJvdWdoXCI6IFwiPj0gMC45LjQgJiYgPCAyNlwiLFxuXHRcIm5vZGU6X3N0cmVhbV9wYXNzdGhyb3VnaFwiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTYgJiYgPCAyNlwiXSxcblx0XCJfc3RyZWFtX3JlYWRhYmxlXCI6IFwiPj0gMC45LjQgJiYgPCAyNlwiLFxuXHRcIm5vZGU6X3N0cmVhbV9yZWFkYWJsZVwiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTYgJiYgPCAyNlwiXSxcblx0XCJfc3RyZWFtX3dyaXRhYmxlXCI6IFwiPj0gMC45LjQgJiYgPCAyNlwiLFxuXHRcIm5vZGU6X3N0cmVhbV93cml0YWJsZVwiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTYgJiYgPCAyNlwiXSxcblx0XCJzdHJlYW1cIjogdHJ1ZSxcblx0XCJub2RlOnN0cmVhbVwiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTZcIl0sXG5cdFwic3RyZWFtL2NvbnN1bWVyc1wiOiBcIj49IDE2LjdcIixcblx0XCJub2RlOnN0cmVhbS9jb25zdW1lcnNcIjogXCI+PSAxNi43XCIsXG5cdFwic3RyZWFtL3Byb21pc2VzXCI6IFwiPj0gMTVcIixcblx0XCJub2RlOnN0cmVhbS9wcm9taXNlc1wiOiBcIj49IDE2XCIsXG5cdFwic3RyZWFtL3dlYlwiOiBcIj49IDE2LjVcIixcblx0XCJub2RlOnN0cmVhbS93ZWJcIjogXCI+PSAxNi41XCIsXG5cdFwic3RyaW5nX2RlY29kZXJcIjogdHJ1ZSxcblx0XCJub2RlOnN0cmluZ19kZWNvZGVyXCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJzeXNcIjogW1wiPj0gMC40ICYmIDwgMC43XCIsIFwiPj0gMC44XCJdLFxuXHRcIm5vZGU6c3lzXCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJ0ZXN0L3JlcG9ydGVyc1wiOiBcIj49IDE5LjkgJiYgPCAyMC4yXCIsXG5cdFwibm9kZTp0ZXN0L3JlcG9ydGVyc1wiOiBbXCI+PSAxOC4xNyAmJiA8IDE5XCIsIFwiPj0gMTkuOVwiLCBcIj49IDIwXCJdLFxuXHRcInRlc3QvbW9ja19sb2FkZXJcIjogXCI+PSAyMi4zICYmIDwgMjIuN1wiLFxuXHRcIm5vZGU6dGVzdC9tb2NrX2xvYWRlclwiOiBcIj49IDIyLjMgJiYgPCAyMi43XCIsXG5cdFwibm9kZTp0ZXN0XCI6IFtcIj49IDE2LjE3ICYmIDwgMTdcIiwgXCI+PSAxOFwiXSxcblx0XCJ0aW1lcnNcIjogdHJ1ZSxcblx0XCJub2RlOnRpbWVyc1wiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTZcIl0sXG5cdFwidGltZXJzL3Byb21pc2VzXCI6IFwiPj0gMTVcIixcblx0XCJub2RlOnRpbWVycy9wcm9taXNlc1wiOiBcIj49IDE2XCIsXG5cdFwiX3Rsc19jb21tb25cIjogXCI+PSAwLjExLjEzXCIsXG5cdFwibm9kZTpfdGxzX2NvbW1vblwiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTZcIl0sXG5cdFwiX3Rsc19sZWdhY3lcIjogXCI+PSAwLjExLjMgJiYgPCAxMFwiLFxuXHRcIl90bHNfd3JhcFwiOiBcIj49IDAuMTEuM1wiLFxuXHRcIm5vZGU6X3Rsc193cmFwXCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJ0bHNcIjogdHJ1ZSxcblx0XCJub2RlOnRsc1wiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTZcIl0sXG5cdFwidHJhY2VfZXZlbnRzXCI6IFwiPj0gMTBcIixcblx0XCJub2RlOnRyYWNlX2V2ZW50c1wiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTZcIl0sXG5cdFwidHR5XCI6IHRydWUsXG5cdFwibm9kZTp0dHlcIjogW1wiPj0gMTQuMTggJiYgPCAxNVwiLCBcIj49IDE2XCJdLFxuXHRcInVybFwiOiB0cnVlLFxuXHRcIm5vZGU6dXJsXCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJ1dGlsXCI6IHRydWUsXG5cdFwibm9kZTp1dGlsXCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJ1dGlsL3R5cGVzXCI6IFwiPj0gMTUuM1wiLFxuXHRcIm5vZGU6dXRpbC90eXBlc1wiOiBcIj49IDE2XCIsXG5cdFwidjgvdG9vbHMvYXJndW1lbnRzXCI6IFwiPj0gMTAgJiYgPCAxMlwiLFxuXHRcInY4L3Rvb2xzL2NvZGVtYXBcIjogW1wiPj0gNC40ICYmIDwgNVwiLCBcIj49IDUuMiAmJiA8IDEyXCJdLFxuXHRcInY4L3Rvb2xzL2NvbnNhcnJheVwiOiBbXCI+PSA0LjQgJiYgPCA1XCIsIFwiPj0gNS4yICYmIDwgMTJcIl0sXG5cdFwidjgvdG9vbHMvY3N2cGFyc2VyXCI6IFtcIj49IDQuNCAmJiA8IDVcIiwgXCI+PSA1LjIgJiYgPCAxMlwiXSxcblx0XCJ2OC90b29scy9sb2dyZWFkZXJcIjogW1wiPj0gNC40ICYmIDwgNVwiLCBcIj49IDUuMiAmJiA8IDEyXCJdLFxuXHRcInY4L3Rvb2xzL3Byb2ZpbGVfdmlld1wiOiBbXCI+PSA0LjQgJiYgPCA1XCIsIFwiPj0gNS4yICYmIDwgMTJcIl0sXG5cdFwidjgvdG9vbHMvc3BsYXl0cmVlXCI6IFtcIj49IDQuNCAmJiA8IDVcIiwgXCI+PSA1LjIgJiYgPCAxMlwiXSxcblx0XCJ2OFwiOiBcIj49IDFcIixcblx0XCJub2RlOnY4XCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJ2bVwiOiB0cnVlLFxuXHRcIm5vZGU6dm1cIjogW1wiPj0gMTQuMTggJiYgPCAxNVwiLCBcIj49IDE2XCJdLFxuXHRcIndhc2lcIjogW1wiPj0gMTMuNCAmJiA8IDEzLjVcIiwgXCI+PSAxOC4xNyAmJiA8IDE5XCIsIFwiPj0gMjBcIl0sXG5cdFwibm9kZTp3YXNpXCI6IFtcIj49IDE4LjE3ICYmIDwgMTlcIiwgXCI+PSAyMFwiXSxcblx0XCJ3b3JrZXJfdGhyZWFkc1wiOiBcIj49IDExLjdcIixcblx0XCJub2RlOndvcmtlcl90aHJlYWRzXCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJ6bGliXCI6IFwiPj0gMC41XCIsXG5cdFwibm9kZTp6bGliXCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXVxufVxuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIGhhc093biA9IHJlcXVpcmUoJ2hhc293bicpO1xuXG5mdW5jdGlvbiBzcGVjaWZpZXJJbmNsdWRlZChjdXJyZW50LCBzcGVjaWZpZXIpIHtcblx0dmFyIG5vZGVQYXJ0cyA9IGN1cnJlbnQuc3BsaXQoJy4nKTtcblx0dmFyIHBhcnRzID0gc3BlY2lmaWVyLnNwbGl0KCcgJyk7XG5cdHZhciBvcCA9IHBhcnRzLmxlbmd0aCA+IDEgPyBwYXJ0c1swXSA6ICc9Jztcblx0dmFyIHZlcnNpb25QYXJ0cyA9IChwYXJ0cy5sZW5ndGggPiAxID8gcGFydHNbMV0gOiBwYXJ0c1swXSkuc3BsaXQoJy4nKTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IDM7ICsraSkge1xuXHRcdHZhciBjdXIgPSBwYXJzZUludChub2RlUGFydHNbaV0gfHwgMCwgMTApO1xuXHRcdHZhciB2ZXIgPSBwYXJzZUludCh2ZXJzaW9uUGFydHNbaV0gfHwgMCwgMTApO1xuXHRcdGlmIChjdXIgPT09IHZlcikge1xuXHRcdFx0Y29udGludWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXgsIG5vLWNvbnRpbnVlXG5cdFx0fVxuXHRcdGlmIChvcCA9PT0gJzwnKSB7XG5cdFx0XHRyZXR1cm4gY3VyIDwgdmVyO1xuXHRcdH1cblx0XHRpZiAob3AgPT09ICc+PScpIHtcblx0XHRcdHJldHVybiBjdXIgPj0gdmVyO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0cmV0dXJuIG9wID09PSAnPj0nO1xufVxuXG5mdW5jdGlvbiBtYXRjaGVzUmFuZ2UoY3VycmVudCwgcmFuZ2UpIHtcblx0dmFyIHNwZWNpZmllcnMgPSByYW5nZS5zcGxpdCgvID8mJiA/Lyk7XG5cdGlmIChzcGVjaWZpZXJzLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHNwZWNpZmllcnMubGVuZ3RoOyArK2kpIHtcblx0XHRpZiAoIXNwZWNpZmllckluY2x1ZGVkKGN1cnJlbnQsIHNwZWNpZmllcnNbaV0pKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiB2ZXJzaW9uSW5jbHVkZWQobm9kZVZlcnNpb24sIHNwZWNpZmllclZhbHVlKSB7XG5cdGlmICh0eXBlb2Ygc3BlY2lmaWVyVmFsdWUgPT09ICdib29sZWFuJykge1xuXHRcdHJldHVybiBzcGVjaWZpZXJWYWx1ZTtcblx0fVxuXG5cdHZhciBjdXJyZW50ID0gdHlwZW9mIG5vZGVWZXJzaW9uID09PSAndW5kZWZpbmVkJ1xuXHRcdD8gcHJvY2Vzcy52ZXJzaW9ucyAmJiBwcm9jZXNzLnZlcnNpb25zLm5vZGVcblx0XHQ6IG5vZGVWZXJzaW9uO1xuXG5cdGlmICh0eXBlb2YgY3VycmVudCAhPT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKHR5cGVvZiBub2RlVmVyc2lvbiA9PT0gJ3VuZGVmaW5lZCcgPyAnVW5hYmxlIHRvIGRldGVybWluZSBjdXJyZW50IG5vZGUgdmVyc2lvbicgOiAnSWYgcHJvdmlkZWQsIGEgdmFsaWQgbm9kZSB2ZXJzaW9uIGlzIHJlcXVpcmVkJyk7XG5cdH1cblxuXHRpZiAoc3BlY2lmaWVyVmFsdWUgJiYgdHlwZW9mIHNwZWNpZmllclZhbHVlID09PSAnb2JqZWN0Jykge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3BlY2lmaWVyVmFsdWUubGVuZ3RoOyArK2kpIHtcblx0XHRcdGlmIChtYXRjaGVzUmFuZ2UoY3VycmVudCwgc3BlY2lmaWVyVmFsdWVbaV0pKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0cmV0dXJuIG1hdGNoZXNSYW5nZShjdXJyZW50LCBzcGVjaWZpZXJWYWx1ZSk7XG59XG5cbnZhciBkYXRhID0gcmVxdWlyZSgnLi9jb3JlLmpzb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NvcmUoeCwgbm9kZVZlcnNpb24pIHtcblx0cmV0dXJuIGhhc093bihkYXRhLCB4KSAmJiB2ZXJzaW9uSW5jbHVkZWQobm9kZVZlcnNpb24sIGRhdGFbeF0pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCcuL3R5cGUnKX0gKi9cbm1vZHVsZS5leHBvcnRzID0gVHlwZUVycm9yO1xuIiwgInZhciBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG52YXIgZ2V0SG9tZWRpciA9IHJlcXVpcmUoJy4vaG9tZWRpcicpO1xudmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG52YXIgY2FsbGVyID0gcmVxdWlyZSgnLi9jYWxsZXInKTtcbnZhciBub2RlTW9kdWxlc1BhdGhzID0gcmVxdWlyZSgnLi9ub2RlLW1vZHVsZXMtcGF0aHMnKTtcbnZhciBub3JtYWxpemVPcHRpb25zID0gcmVxdWlyZSgnLi9ub3JtYWxpemUtb3B0aW9ucycpO1xudmFyIGlzQ29yZSA9IHJlcXVpcmUoJ2lzLWNvcmUtbW9kdWxlJyk7XG52YXIgJEVycm9yID0gcmVxdWlyZSgnZXMtZXJyb3JzJyk7XG52YXIgJFR5cGVFcnJvciA9IHJlcXVpcmUoJ2VzLWVycm9ycy90eXBlJyk7XG5cbnZhciByZWFscGF0aEZTID0gcHJvY2Vzcy5wbGF0Zm9ybSAhPT0gJ3dpbjMyJyAmJiBmcy5yZWFscGF0aCAmJiB0eXBlb2YgZnMucmVhbHBhdGgubmF0aXZlID09PSAnZnVuY3Rpb24nID8gZnMucmVhbHBhdGgubmF0aXZlIDogZnMucmVhbHBhdGg7XG5cbnZhciByZWxhdGl2ZVBhdGhSZWdleCA9IC9eKD86XFwuXFwuPyg/OlxcL3wkKXxcXC98KFtBLVphLXpdOik/Wy9cXFxcXSkvO1xudmFyIHdpbmRvd3NEcml2ZVJlZ2V4ID0gL15cXHc6Wy9cXFxcXSokLztcbnZhciBub2RlTW9kdWxlc1JlZ2V4ID0gL1svXFxcXF1ub2RlX21vZHVsZXNbL1xcXFxdKiQvO1xuXG52YXIgaG9tZWRpciA9IGdldEhvbWVkaXIoKTtcbmZ1bmN0aW9uIGRlZmF1bHRQYXRocygpIHtcbiAgICBpZiAoIWhvbWVkaXIpIHJldHVybiBbXTtcbiAgICByZXR1cm4gW1xuICAgICAgICBwYXRoLmpvaW4oaG9tZWRpciwgJy5ub2RlX21vZHVsZXMnKSxcbiAgICAgICAgcGF0aC5qb2luKGhvbWVkaXIsICcubm9kZV9saWJyYXJpZXMnKVxuICAgIF07XG59XG5cbnZhciBkZWZhdWx0SXNGaWxlID0gZnVuY3Rpb24gaXNGaWxlKGZpbGUsIGNiKSB7XG4gICAgZnMuc3RhdChmaWxlLCBmdW5jdGlvbiAoZXJyLCBzdGF0KSB7XG4gICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gY2IobnVsbCwgc3RhdC5pc0ZpbGUoKSB8fCBzdGF0LmlzRklGTygpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdFTk9FTlQnIHx8IGVyci5jb2RlID09PSAnRU5PVERJUicpIHJldHVybiBjYihudWxsLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBjYihlcnIpO1xuICAgIH0pO1xufTtcblxudmFyIGRlZmF1bHRJc0RpciA9IGZ1bmN0aW9uIGlzRGlyZWN0b3J5KGRpciwgY2IpIHtcbiAgICBmcy5zdGF0KGRpciwgZnVuY3Rpb24gKGVyciwgc3RhdCkge1xuICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgcmV0dXJuIGNiKG51bGwsIHN0YXQuaXNEaXJlY3RvcnkoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVyci5jb2RlID09PSAnRU5PRU5UJyB8fCBlcnIuY29kZSA9PT0gJ0VOT1RESVInKSByZXR1cm4gY2IobnVsbCwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gY2IoZXJyKTtcbiAgICB9KTtcbn07XG5cbnZhciBkZWZhdWx0UmVhbHBhdGggPSBmdW5jdGlvbiByZWFscGF0aCh4LCBjYikge1xuICAgIHJlYWxwYXRoRlMoeCwgZnVuY3Rpb24gKHJlYWxwYXRoRXJyLCByZWFsUGF0aCkge1xuICAgICAgICBpZiAocmVhbHBhdGhFcnIgJiYgcmVhbHBhdGhFcnIuY29kZSAhPT0gJ0VOT0VOVCcpIGNiKHJlYWxwYXRoRXJyKTtcbiAgICAgICAgZWxzZSBjYihudWxsLCByZWFscGF0aEVyciA/IHggOiByZWFsUGF0aCk7XG4gICAgfSk7XG59O1xuXG5mdW5jdGlvbiBtYXliZVJlYWxwYXRoKHJlYWxwYXRoLCB4LCBvcHRzLCBjYikge1xuICAgIGlmIChvcHRzICYmIG9wdHMucHJlc2VydmVTeW1saW5rcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmVhbHBhdGgoeCwgY2IpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNiKG51bGwsIHgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVmYXVsdFJlYWRQYWNrYWdlKHJlYWRGaWxlLCBwa2dmaWxlLCBjYikge1xuICAgIHJlYWRGaWxlKHBrZ2ZpbGUsIGZ1bmN0aW9uIChyZWFkRmlsZUVyciwgYm9keSkge1xuICAgICAgICBpZiAocmVhZEZpbGVFcnIpIGNiKHJlYWRGaWxlRXJyKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBwa2cgPSBKU09OLnBhcnNlKGJvZHkpO1xuICAgICAgICAgICAgICAgIGNiKG51bGwsIHBrZyk7XG4gICAgICAgICAgICB9IGNhdGNoIChqc29uRXJyKSB7XG4gICAgICAgICAgICAgICAgY2IobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0UGFja2FnZUNhbmRpZGF0ZXMoeCwgc3RhcnQsIG9wdHMpIHtcbiAgICB2YXIgZGlycyA9IG5vZGVNb2R1bGVzUGF0aHMoc3RhcnQsIG9wdHMsIHgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGlycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBkaXJzW2ldID0gcGF0aC5qb2luKGRpcnNbaV0sIHgpO1xuICAgIH1cbiAgICByZXR1cm4gZGlycztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByZXNvbHZlKHgsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGNiID0gY2FsbGJhY2s7XG4gICAgdmFyIG9wdHMgPSBvcHRpb25zO1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYiA9IG9wdHM7XG4gICAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB4ICE9PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgZXJyID0gbmV3ICRUeXBlRXJyb3IoJ1BhdGggbXVzdCBiZSBhIHN0cmluZy4nKTtcbiAgICAgICAgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2IoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb3B0cyA9IG5vcm1hbGl6ZU9wdGlvbnMoeCwgb3B0cyk7XG5cbiAgICB2YXIgaXNGaWxlID0gb3B0cy5pc0ZpbGUgfHwgZGVmYXVsdElzRmlsZTtcbiAgICB2YXIgaXNEaXJlY3RvcnkgPSBvcHRzLmlzRGlyZWN0b3J5IHx8IGRlZmF1bHRJc0RpcjtcbiAgICB2YXIgcmVhZEZpbGUgPSBvcHRzLnJlYWRGaWxlIHx8IGZzLnJlYWRGaWxlO1xuICAgIHZhciByZWFscGF0aCA9IG9wdHMucmVhbHBhdGggfHwgZGVmYXVsdFJlYWxwYXRoO1xuICAgIHZhciByZWFkUGFja2FnZSA9IG9wdHMucmVhZFBhY2thZ2UgfHwgZGVmYXVsdFJlYWRQYWNrYWdlO1xuICAgIGlmIChvcHRzLnJlYWRGaWxlICYmIG9wdHMucmVhZFBhY2thZ2UpIHtcbiAgICAgICAgdmFyIGNvbmZsaWN0RXJyID0gbmV3ICRUeXBlRXJyb3IoJ2ByZWFkRmlsZWAgYW5kIGByZWFkUGFja2FnZWAgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZS4nKTtcbiAgICAgICAgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2IoY29uZmxpY3RFcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdmFyIHBhY2thZ2VJdGVyYXRvciA9IG9wdHMucGFja2FnZUl0ZXJhdG9yO1xuXG4gICAgdmFyIGV4dGVuc2lvbnMgPSBvcHRzLmV4dGVuc2lvbnMgfHwgWycuanMnXTtcbiAgICB2YXIgaW5jbHVkZUNvcmVNb2R1bGVzID0gb3B0cy5pbmNsdWRlQ29yZU1vZHVsZXMgIT09IGZhbHNlO1xuICAgIHZhciBiYXNlZGlyID0gb3B0cy5iYXNlZGlyIHx8IHBhdGguZGlybmFtZShjYWxsZXIoKSk7XG4gICAgdmFyIHBhcmVudCA9IG9wdHMuZmlsZW5hbWUgfHwgYmFzZWRpcjtcblxuICAgIG9wdHMucGF0aHMgPSBvcHRzLnBhdGhzIHx8IGRlZmF1bHRQYXRocygpO1xuXG4gICAgLy8gZW5zdXJlIHRoYXQgYGJhc2VkaXJgIGlzIGFuIGFic29sdXRlIHBhdGggYXQgdGhpcyBwb2ludCwgcmVzb2x2aW5nIGFnYWluc3QgdGhlIHByb2Nlc3MnIGN1cnJlbnQgd29ya2luZyBkaXJlY3RvcnlcbiAgICB2YXIgYWJzb2x1dGVTdGFydCA9IHBhdGgucmVzb2x2ZShiYXNlZGlyKTtcblxuICAgIG1heWJlUmVhbHBhdGgoXG4gICAgICAgIHJlYWxwYXRoLFxuICAgICAgICBhYnNvbHV0ZVN0YXJ0LFxuICAgICAgICBvcHRzLFxuICAgICAgICBmdW5jdGlvbiAoZXJyLCByZWFsU3RhcnQpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIGNiKGVycik7XG4gICAgICAgICAgICBlbHNlIGluaXQocmVhbFN0YXJ0KTtcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICB2YXIgcmVzO1xuICAgIGZ1bmN0aW9uIGluaXQoYmFzZWRpcikge1xuICAgICAgICBpZiAocmVsYXRpdmVQYXRoUmVnZXgudGVzdCh4KSkge1xuICAgICAgICAgICAgcmVzID0gcGF0aC5yZXNvbHZlKGJhc2VkaXIsIHgpO1xuICAgICAgICAgICAgaWYgKHggPT09ICcuJyB8fCB4ID09PSAnLi4nIHx8IHguc2xpY2UoLTEpID09PSAnLycpIHJlcyArPSAnLyc7XG4gICAgICAgICAgICBpZiAoeC5zbGljZSgtMSkgPT09ICcvJyAmJiByZXMgPT09IGJhc2VkaXIpIHtcbiAgICAgICAgICAgICAgICBsb2FkQXNEaXJlY3RvcnkocmVzLCBvcHRzLnBhY2thZ2UsIG9uZmlsZSk7XG4gICAgICAgICAgICB9IGVsc2UgbG9hZEFzRmlsZShyZXMsIG9wdHMucGFja2FnZSwgb25maWxlKTtcbiAgICAgICAgfSBlbHNlIGlmIChpbmNsdWRlQ29yZU1vZHVsZXMgJiYgaXNDb3JlKHgpKSB7XG4gICAgICAgICAgICByZXR1cm4gY2IobnVsbCwgeCk7XG4gICAgICAgIH0gZWxzZSBsb2FkTm9kZU1vZHVsZXMoeCwgYmFzZWRpciwgZnVuY3Rpb24gKGVyciwgbiwgcGtnKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSBjYihlcnIpO1xuICAgICAgICAgICAgZWxzZSBpZiAobikge1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXliZVJlYWxwYXRoKHJlYWxwYXRoLCBuLCBvcHRzLCBmdW5jdGlvbiAoZXJyLCByZWFsTikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYihlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2IobnVsbCwgcmVhbE4sIHBrZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIG1vZHVsZUVycm9yID0gbmV3ICRFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyB4ICsgXCInIGZyb20gJ1wiICsgcGFyZW50ICsgXCInXCIpO1xuICAgICAgICAgICAgICAgIG1vZHVsZUVycm9yLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG4gICAgICAgICAgICAgICAgY2IobW9kdWxlRXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbmZpbGUoZXJyLCBtLCBwa2cpIHtcbiAgICAgICAgaWYgKGVycikgY2IoZXJyKTtcbiAgICAgICAgZWxzZSBpZiAobSkgY2IobnVsbCwgbSwgcGtnKTtcbiAgICAgICAgZWxzZSBsb2FkQXNEaXJlY3RvcnkocmVzLCBmdW5jdGlvbiAoZXJyLCBkLCBwa2cpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIGNiKGVycik7XG4gICAgICAgICAgICBlbHNlIGlmIChkKSB7XG4gICAgICAgICAgICAgICAgbWF5YmVSZWFscGF0aChyZWFscGF0aCwgZCwgb3B0cywgZnVuY3Rpb24gKGVyciwgcmVhbEQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiKG51bGwsIHJlYWxELCBwa2cpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBtb2R1bGVFcnJvciA9IG5ldyAkRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgeCArIFwiJyBmcm9tICdcIiArIHBhcmVudCArIFwiJ1wiKTtcbiAgICAgICAgICAgICAgICBtb2R1bGVFcnJvci5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuICAgICAgICAgICAgICAgIGNiKG1vZHVsZUVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZEFzRmlsZSh4LCB0aGVQYWNrYWdlLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgbG9hZEFzRmlsZVBhY2thZ2UgPSB0aGVQYWNrYWdlO1xuICAgICAgICB2YXIgY2IgPSBjYWxsYmFjaztcbiAgICAgICAgaWYgKHR5cGVvZiBsb2FkQXNGaWxlUGFja2FnZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2IgPSBsb2FkQXNGaWxlUGFja2FnZTtcbiAgICAgICAgICAgIGxvYWRBc0ZpbGVQYWNrYWdlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGV4dHMgPSBbJyddLmNvbmNhdChleHRlbnNpb25zKTtcbiAgICAgICAgbG9hZChleHRzLCB4LCBsb2FkQXNGaWxlUGFja2FnZSk7XG5cbiAgICAgICAgZnVuY3Rpb24gbG9hZChleHRzLCB4LCBsb2FkUGFja2FnZSkge1xuICAgICAgICAgICAgaWYgKGV4dHMubGVuZ3RoID09PSAwKSByZXR1cm4gY2IobnVsbCwgdW5kZWZpbmVkLCBsb2FkUGFja2FnZSk7XG4gICAgICAgICAgICB2YXIgZmlsZSA9IHggKyBleHRzWzBdO1xuXG4gICAgICAgICAgICB2YXIgcGtnID0gbG9hZFBhY2thZ2U7XG4gICAgICAgICAgICBpZiAocGtnKSBvbnBrZyhudWxsLCBwa2cpO1xuICAgICAgICAgICAgZWxzZSBsb2FkcGtnKHBhdGguZGlybmFtZShmaWxlKSwgb25wa2cpO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBvbnBrZyhlcnIsIHBrZ18sIGRpcikge1xuICAgICAgICAgICAgICAgIHBrZyA9IHBrZ187XG4gICAgICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIGNiKGVycik7XG4gICAgICAgICAgICAgICAgaWYgKGRpciAmJiBwa2cgJiYgb3B0cy5wYXRoRmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZmlsZSA9IHBhdGgucmVsYXRpdmUoZGlyLCBmaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlbCA9IHJmaWxlLnNsaWNlKDAsIHJmaWxlLmxlbmd0aCAtIGV4dHNbMF0ubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSBvcHRzLnBhdGhGaWx0ZXIocGtnLCB4LCByZWwpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocikgcmV0dXJuIGxvYWQoXG4gICAgICAgICAgICAgICAgICAgICAgICBbJyddLmNvbmNhdChleHRlbnNpb25zKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGgucmVzb2x2ZShkaXIsIHIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGtnXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlzRmlsZShmaWxlLCBvbmV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uZXgoZXJyLCBleCkge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHJldHVybiBjYihlcnIpO1xuICAgICAgICAgICAgICAgIGlmIChleCkgcmV0dXJuIGNiKG51bGwsIGZpbGUsIHBrZyk7XG4gICAgICAgICAgICAgICAgbG9hZChleHRzLnNsaWNlKDEpLCB4LCBwa2cpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZHBrZyhkaXIsIGNiKSB7XG4gICAgICAgIGlmIChkaXIgPT09ICcnIHx8IGRpciA9PT0gJy8nKSByZXR1cm4gY2IobnVsbCk7XG4gICAgICAgIGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInICYmIHdpbmRvd3NEcml2ZVJlZ2V4LnRlc3QoZGlyKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNiKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlTW9kdWxlc1JlZ2V4LnRlc3QoZGlyKSkgcmV0dXJuIGNiKG51bGwpO1xuXG4gICAgICAgIG1heWJlUmVhbHBhdGgocmVhbHBhdGgsIGRpciwgb3B0cywgZnVuY3Rpb24gKHVud3JhcEVyciwgcGtnZGlyKSB7XG4gICAgICAgICAgICBpZiAodW53cmFwRXJyKSByZXR1cm4gbG9hZHBrZyhwYXRoLmRpcm5hbWUoZGlyKSwgY2IpO1xuICAgICAgICAgICAgdmFyIHBrZ2ZpbGUgPSBwYXRoLmpvaW4ocGtnZGlyLCAncGFja2FnZS5qc29uJyk7XG4gICAgICAgICAgICBpc0ZpbGUocGtnZmlsZSwgZnVuY3Rpb24gKGVyciwgZXgpIHtcbiAgICAgICAgICAgICAgICAvLyBvbiBlcnIsIGV4IGlzIGZhbHNlXG4gICAgICAgICAgICAgICAgaWYgKCFleCkgcmV0dXJuIGxvYWRwa2cocGF0aC5kaXJuYW1lKGRpciksIGNiKTtcblxuICAgICAgICAgICAgICAgIHJlYWRQYWNrYWdlKHJlYWRGaWxlLCBwa2dmaWxlLCBmdW5jdGlvbiAoZXJyLCBwa2dQYXJhbSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7IHJldHVybiBjYihlcnIpOyB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHBrZyA9IHBrZ1BhcmFtO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwa2cgJiYgb3B0cy5wYWNrYWdlRmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwa2cgPSBvcHRzLnBhY2thZ2VGaWx0ZXIocGtnLCBwa2dmaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYihudWxsLCBwa2csIGRpcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZEFzRGlyZWN0b3J5KHgsIGxvYWRBc0RpcmVjdG9yeVBhY2thZ2UsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBjYiA9IGNhbGxiYWNrO1xuICAgICAgICB2YXIgZnBrZyA9IGxvYWRBc0RpcmVjdG9yeVBhY2thZ2U7XG4gICAgICAgIGlmICh0eXBlb2YgZnBrZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2IgPSBmcGtnO1xuICAgICAgICAgICAgZnBrZyA9IG9wdHMucGFja2FnZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1heWJlUmVhbHBhdGgocmVhbHBhdGgsIHgsIG9wdHMsIGZ1bmN0aW9uICh1bndyYXBFcnIsIHBrZ2Rpcikge1xuICAgICAgICAgICAgaWYgKHVud3JhcEVycikgcmV0dXJuIGNiKHVud3JhcEVycik7XG4gICAgICAgICAgICB2YXIgcGtnZmlsZSA9IHBhdGguam9pbihwa2dkaXIsICdwYWNrYWdlLmpzb24nKTtcbiAgICAgICAgICAgIGlzRmlsZShwa2dmaWxlLCBmdW5jdGlvbiAoZXJyLCBleCkge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHJldHVybiBjYihlcnIpO1xuICAgICAgICAgICAgICAgIGlmICghZXgpIHJldHVybiBsb2FkQXNGaWxlKHBhdGguam9pbih4LCAnaW5kZXgnKSwgZnBrZywgY2IpO1xuXG4gICAgICAgICAgICAgICAgcmVhZFBhY2thZ2UocmVhZEZpbGUsIHBrZ2ZpbGUsIGZ1bmN0aW9uIChlcnIsIHBrZ1BhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHJldHVybiBjYihlcnIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBwa2cgPSBwa2dQYXJhbTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocGtnICYmIG9wdHMucGFja2FnZUZpbHRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGtnID0gb3B0cy5wYWNrYWdlRmlsdGVyKHBrZywgcGtnZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAocGtnICYmIHBrZy5tYWluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHBrZy5tYWluICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYWluRXJyb3IgPSBuZXcgJFR5cGVFcnJvcigncGFja2FnZSBcdTIwMUMnICsgcGtnLm5hbWUgKyAnXHUyMDFEIGBtYWluYCBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkVycm9yLmNvZGUgPSAnSU5WQUxJRF9QQUNLQUdFX01BSU4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYihtYWluRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBrZy5tYWluID09PSAnLicgfHwgcGtnLm1haW4gPT09ICcuLycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwa2cubWFpbiA9ICdpbmRleCc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkQXNGaWxlKHBhdGgucmVzb2x2ZSh4LCBwa2cubWFpbiksIHBrZywgZnVuY3Rpb24gKGVyciwgbSwgcGtnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIGNiKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG0pIHJldHVybiBjYihudWxsLCBtLCBwa2cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcGtnKSByZXR1cm4gbG9hZEFzRmlsZShwYXRoLmpvaW4oeCwgJ2luZGV4JyksIHBrZywgY2IpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRpciA9IHBhdGgucmVzb2x2ZSh4LCBwa2cubWFpbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZEFzRGlyZWN0b3J5KGRpciwgcGtnLCBmdW5jdGlvbiAoZXJyLCBuLCBwa2cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIGNiKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuKSByZXR1cm4gY2IobnVsbCwgbiwgcGtnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZEFzRmlsZShwYXRoLmpvaW4oeCwgJ2luZGV4JyksIHBrZywgY2IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBsb2FkQXNGaWxlKHBhdGguam9pbih4LCAnL2luZGV4JyksIHBrZywgY2IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2Nlc3NEaXJzKGNiLCBkaXJzKSB7XG4gICAgICAgIGlmIChkaXJzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGNiKG51bGwsIHVuZGVmaW5lZCk7XG4gICAgICAgIHZhciBkaXIgPSBkaXJzWzBdO1xuXG4gICAgICAgIGlzRGlyZWN0b3J5KHBhdGguZGlybmFtZShkaXIpLCBpc2Rpcik7XG5cbiAgICAgICAgZnVuY3Rpb24gaXNkaXIoZXJyLCBpc2Rpcikge1xuICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIGNiKGVycik7XG4gICAgICAgICAgICBpZiAoIWlzZGlyKSByZXR1cm4gcHJvY2Vzc0RpcnMoY2IsIGRpcnMuc2xpY2UoMSkpO1xuICAgICAgICAgICAgbG9hZEFzRmlsZShkaXIsIG9wdHMucGFja2FnZSwgb25maWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9uZmlsZShlcnIsIG0sIHBrZykge1xuICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIGNiKGVycik7XG4gICAgICAgICAgICBpZiAobSkgcmV0dXJuIGNiKG51bGwsIG0sIHBrZyk7XG4gICAgICAgICAgICBsb2FkQXNEaXJlY3RvcnkoZGlyLCBvcHRzLnBhY2thZ2UsIG9uZGlyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9uZGlyKGVyciwgbiwgcGtnKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2IoZXJyKTtcbiAgICAgICAgICAgIGlmIChuKSByZXR1cm4gY2IobnVsbCwgbiwgcGtnKTtcbiAgICAgICAgICAgIHByb2Nlc3NEaXJzKGNiLCBkaXJzLnNsaWNlKDEpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBsb2FkTm9kZU1vZHVsZXMoeCwgc3RhcnQsIGNiKSB7XG4gICAgICAgIHZhciB0aHVuayA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldFBhY2thZ2VDYW5kaWRhdGVzKHgsIHN0YXJ0LCBvcHRzKTsgfTtcbiAgICAgICAgcHJvY2Vzc0RpcnMoXG4gICAgICAgICAgICBjYixcbiAgICAgICAgICAgIHBhY2thZ2VJdGVyYXRvciA/IHBhY2thZ2VJdGVyYXRvcih4LCBzdGFydCwgdGh1bmssIG9wdHMpIDogdGh1bmsoKVxuICAgICAgICApO1xuICAgIH1cbn07XG4iLCAie1xuXHRcImFzc2VydFwiOiB0cnVlLFxuXHRcIm5vZGU6YXNzZXJ0XCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJhc3NlcnQvc3RyaWN0XCI6IFwiPj0gMTVcIixcblx0XCJub2RlOmFzc2VydC9zdHJpY3RcIjogXCI+PSAxNlwiLFxuXHRcImFzeW5jX2hvb2tzXCI6IFwiPj0gOFwiLFxuXHRcIm5vZGU6YXN5bmNfaG9va3NcIjogW1wiPj0gMTQuMTggJiYgPCAxNVwiLCBcIj49IDE2XCJdLFxuXHRcImJ1ZmZlcl9pZWVlNzU0XCI6IFwiPj0gMC41ICYmIDwgMC45LjdcIixcblx0XCJidWZmZXJcIjogdHJ1ZSxcblx0XCJub2RlOmJ1ZmZlclwiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTZcIl0sXG5cdFwiY2hpbGRfcHJvY2Vzc1wiOiB0cnVlLFxuXHRcIm5vZGU6Y2hpbGRfcHJvY2Vzc1wiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTZcIl0sXG5cdFwiY2x1c3RlclwiOiBcIj49IDAuNVwiLFxuXHRcIm5vZGU6Y2x1c3RlclwiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTZcIl0sXG5cdFwiY29uc29sZVwiOiB0cnVlLFxuXHRcIm5vZGU6Y29uc29sZVwiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTZcIl0sXG5cdFwiY29uc3RhbnRzXCI6IHRydWUsXG5cdFwibm9kZTpjb25zdGFudHNcIjogW1wiPj0gMTQuMTggJiYgPCAxNVwiLCBcIj49IDE2XCJdLFxuXHRcImNyeXB0b1wiOiB0cnVlLFxuXHRcIm5vZGU6Y3J5cHRvXCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJfZGVidWdfYWdlbnRcIjogXCI+PSAxICYmIDwgOFwiLFxuXHRcIl9kZWJ1Z2dlclwiOiBcIjwgOFwiLFxuXHRcImRncmFtXCI6IHRydWUsXG5cdFwibm9kZTpkZ3JhbVwiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTZcIl0sXG5cdFwiZGlhZ25vc3RpY3NfY2hhbm5lbFwiOiBbXCI+PSAxNC4xNyAmJiA8IDE1XCIsIFwiPj0gMTUuMVwiXSxcblx0XCJub2RlOmRpYWdub3N0aWNzX2NoYW5uZWxcIjogW1wiPj0gMTQuMTggJiYgPCAxNVwiLCBcIj49IDE2XCJdLFxuXHRcImRuc1wiOiB0cnVlLFxuXHRcIm5vZGU6ZG5zXCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJkbnMvcHJvbWlzZXNcIjogXCI+PSAxNVwiLFxuXHRcIm5vZGU6ZG5zL3Byb21pc2VzXCI6IFwiPj0gMTZcIixcblx0XCJkb21haW5cIjogXCI+PSAwLjcuMTJcIixcblx0XCJub2RlOmRvbWFpblwiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTZcIl0sXG5cdFwiZXZlbnRzXCI6IHRydWUsXG5cdFwibm9kZTpldmVudHNcIjogW1wiPj0gMTQuMTggJiYgPCAxNVwiLCBcIj49IDE2XCJdLFxuXHRcImZyZWVsaXN0XCI6IFwiPCA2XCIsXG5cdFwiZnNcIjogdHJ1ZSxcblx0XCJub2RlOmZzXCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJmcy9wcm9taXNlc1wiOiBbXCI+PSAxMCAmJiA8IDEwLjFcIiwgXCI+PSAxNFwiXSxcblx0XCJub2RlOmZzL3Byb21pc2VzXCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJfaHR0cF9hZ2VudFwiOiBcIj49IDAuMTEuMVwiLFxuXHRcIm5vZGU6X2h0dHBfYWdlbnRcIjogW1wiPj0gMTQuMTggJiYgPCAxNVwiLCBcIj49IDE2XCJdLFxuXHRcIl9odHRwX2NsaWVudFwiOiBcIj49IDAuMTEuMVwiLFxuXHRcIm5vZGU6X2h0dHBfY2xpZW50XCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJfaHR0cF9jb21tb25cIjogXCI+PSAwLjExLjFcIixcblx0XCJub2RlOl9odHRwX2NvbW1vblwiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTZcIl0sXG5cdFwiX2h0dHBfaW5jb21pbmdcIjogXCI+PSAwLjExLjFcIixcblx0XCJub2RlOl9odHRwX2luY29taW5nXCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJfaHR0cF9vdXRnb2luZ1wiOiBcIj49IDAuMTEuMVwiLFxuXHRcIm5vZGU6X2h0dHBfb3V0Z29pbmdcIjogW1wiPj0gMTQuMTggJiYgPCAxNVwiLCBcIj49IDE2XCJdLFxuXHRcIl9odHRwX3NlcnZlclwiOiBcIj49IDAuMTEuMVwiLFxuXHRcIm5vZGU6X2h0dHBfc2VydmVyXCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJodHRwXCI6IHRydWUsXG5cdFwibm9kZTpodHRwXCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJodHRwMlwiOiBcIj49IDguOFwiLFxuXHRcIm5vZGU6aHR0cDJcIjogW1wiPj0gMTQuMTggJiYgPCAxNVwiLCBcIj49IDE2XCJdLFxuXHRcImh0dHBzXCI6IHRydWUsXG5cdFwibm9kZTpodHRwc1wiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTZcIl0sXG5cdFwiaW5zcGVjdG9yXCI6IFwiPj0gOFwiLFxuXHRcIm5vZGU6aW5zcGVjdG9yXCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJpbnNwZWN0b3IvcHJvbWlzZXNcIjogW1wiPj0gMTlcIl0sXG5cdFwibm9kZTppbnNwZWN0b3IvcHJvbWlzZXNcIjogW1wiPj0gMTlcIl0sXG5cdFwiX2xpbmtsaXN0XCI6IFwiPCA4XCIsXG5cdFwibW9kdWxlXCI6IHRydWUsXG5cdFwibm9kZTptb2R1bGVcIjogW1wiPj0gMTQuMTggJiYgPCAxNVwiLCBcIj49IDE2XCJdLFxuXHRcIm5ldFwiOiB0cnVlLFxuXHRcIm5vZGU6bmV0XCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJub2RlLWluc3BlY3QvbGliL19pbnNwZWN0XCI6IFwiPj0gNy42ICYmIDwgMTJcIixcblx0XCJub2RlLWluc3BlY3QvbGliL2ludGVybmFsL2luc3BlY3RfY2xpZW50XCI6IFwiPj0gNy42ICYmIDwgMTJcIixcblx0XCJub2RlLWluc3BlY3QvbGliL2ludGVybmFsL2luc3BlY3RfcmVwbFwiOiBcIj49IDcuNiAmJiA8IDEyXCIsXG5cdFwib3NcIjogdHJ1ZSxcblx0XCJub2RlOm9zXCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJwYXRoXCI6IHRydWUsXG5cdFwibm9kZTpwYXRoXCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJwYXRoL3Bvc2l4XCI6IFwiPj0gMTUuM1wiLFxuXHRcIm5vZGU6cGF0aC9wb3NpeFwiOiBcIj49IDE2XCIsXG5cdFwicGF0aC93aW4zMlwiOiBcIj49IDE1LjNcIixcblx0XCJub2RlOnBhdGgvd2luMzJcIjogXCI+PSAxNlwiLFxuXHRcInBlcmZfaG9va3NcIjogXCI+PSA4LjVcIixcblx0XCJub2RlOnBlcmZfaG9va3NcIjogW1wiPj0gMTQuMTggJiYgPCAxNVwiLCBcIj49IDE2XCJdLFxuXHRcInByb2Nlc3NcIjogXCI+PSAxXCIsXG5cdFwibm9kZTpwcm9jZXNzXCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJwdW55Y29kZVwiOiBcIj49IDAuNVwiLFxuXHRcIm5vZGU6cHVueWNvZGVcIjogW1wiPj0gMTQuMTggJiYgPCAxNVwiLCBcIj49IDE2XCJdLFxuXHRcInF1ZXJ5c3RyaW5nXCI6IHRydWUsXG5cdFwibm9kZTpxdWVyeXN0cmluZ1wiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTZcIl0sXG5cdFwicmVhZGxpbmVcIjogdHJ1ZSxcblx0XCJub2RlOnJlYWRsaW5lXCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJyZWFkbGluZS9wcm9taXNlc1wiOiBcIj49IDE3XCIsXG5cdFwibm9kZTpyZWFkbGluZS9wcm9taXNlc1wiOiBcIj49IDE3XCIsXG5cdFwicmVwbFwiOiB0cnVlLFxuXHRcIm5vZGU6cmVwbFwiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTZcIl0sXG5cdFwibm9kZTpzZWFcIjogW1wiPj0gMjAuMTIgJiYgPCAyMVwiLCBcIj49IDIxLjdcIl0sXG5cdFwic21hbGxvY1wiOiBcIj49IDAuMTEuNSAmJiA8IDNcIixcblx0XCJub2RlOnNxbGl0ZVwiOiBbXCI+PSAyMi4xMyAmJiA8IDIzXCIsIFwiPj0gMjMuNFwiXSxcblx0XCJfc3RyZWFtX2R1cGxleFwiOiBcIj49IDAuOS40XCIsXG5cdFwibm9kZTpfc3RyZWFtX2R1cGxleFwiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTZcIl0sXG5cdFwiX3N0cmVhbV90cmFuc2Zvcm1cIjogXCI+PSAwLjkuNFwiLFxuXHRcIm5vZGU6X3N0cmVhbV90cmFuc2Zvcm1cIjogW1wiPj0gMTQuMTggJiYgPCAxNVwiLCBcIj49IDE2XCJdLFxuXHRcIl9zdHJlYW1fd3JhcFwiOiBcIj49IDEuNC4xXCIsXG5cdFwibm9kZTpfc3RyZWFtX3dyYXBcIjogW1wiPj0gMTQuMTggJiYgPCAxNVwiLCBcIj49IDE2XCJdLFxuXHRcIl9zdHJlYW1fcGFzc3Rocm91Z2hcIjogXCI+PSAwLjkuNFwiLFxuXHRcIm5vZGU6X3N0cmVhbV9wYXNzdGhyb3VnaFwiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTZcIl0sXG5cdFwiX3N0cmVhbV9yZWFkYWJsZVwiOiBcIj49IDAuOS40XCIsXG5cdFwibm9kZTpfc3RyZWFtX3JlYWRhYmxlXCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJfc3RyZWFtX3dyaXRhYmxlXCI6IFwiPj0gMC45LjRcIixcblx0XCJub2RlOl9zdHJlYW1fd3JpdGFibGVcIjogW1wiPj0gMTQuMTggJiYgPCAxNVwiLCBcIj49IDE2XCJdLFxuXHRcInN0cmVhbVwiOiB0cnVlLFxuXHRcIm5vZGU6c3RyZWFtXCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJzdHJlYW0vY29uc3VtZXJzXCI6IFwiPj0gMTYuN1wiLFxuXHRcIm5vZGU6c3RyZWFtL2NvbnN1bWVyc1wiOiBcIj49IDE2LjdcIixcblx0XCJzdHJlYW0vcHJvbWlzZXNcIjogXCI+PSAxNVwiLFxuXHRcIm5vZGU6c3RyZWFtL3Byb21pc2VzXCI6IFwiPj0gMTZcIixcblx0XCJzdHJlYW0vd2ViXCI6IFwiPj0gMTYuNVwiLFxuXHRcIm5vZGU6c3RyZWFtL3dlYlwiOiBcIj49IDE2LjVcIixcblx0XCJzdHJpbmdfZGVjb2RlclwiOiB0cnVlLFxuXHRcIm5vZGU6c3RyaW5nX2RlY29kZXJcIjogW1wiPj0gMTQuMTggJiYgPCAxNVwiLCBcIj49IDE2XCJdLFxuXHRcInN5c1wiOiBbXCI+PSAwLjQgJiYgPCAwLjdcIiwgXCI+PSAwLjhcIl0sXG5cdFwibm9kZTpzeXNcIjogW1wiPj0gMTQuMTggJiYgPCAxNVwiLCBcIj49IDE2XCJdLFxuXHRcInRlc3QvcmVwb3J0ZXJzXCI6IFwiPj0gMTkuOSAmJiA8IDIwLjJcIixcblx0XCJub2RlOnRlc3QvcmVwb3J0ZXJzXCI6IFtcIj49IDE4LjE3ICYmIDwgMTlcIiwgXCI+PSAxOS45XCIsIFwiPj0gMjBcIl0sXG5cdFwidGVzdC9tb2NrX2xvYWRlclwiOiBcIj49IDIyLjMgJiYgPCAyMi43XCIsXG5cdFwibm9kZTp0ZXN0L21vY2tfbG9hZGVyXCI6IFwiPj0gMjIuMyAmJiA8IDIyLjdcIixcblx0XCJub2RlOnRlc3RcIjogW1wiPj0gMTYuMTcgJiYgPCAxN1wiLCBcIj49IDE4XCJdLFxuXHRcInRpbWVyc1wiOiB0cnVlLFxuXHRcIm5vZGU6dGltZXJzXCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJ0aW1lcnMvcHJvbWlzZXNcIjogXCI+PSAxNVwiLFxuXHRcIm5vZGU6dGltZXJzL3Byb21pc2VzXCI6IFwiPj0gMTZcIixcblx0XCJfdGxzX2NvbW1vblwiOiBcIj49IDAuMTEuMTNcIixcblx0XCJub2RlOl90bHNfY29tbW9uXCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJfdGxzX2xlZ2FjeVwiOiBcIj49IDAuMTEuMyAmJiA8IDEwXCIsXG5cdFwiX3Rsc193cmFwXCI6IFwiPj0gMC4xMS4zXCIsXG5cdFwibm9kZTpfdGxzX3dyYXBcIjogW1wiPj0gMTQuMTggJiYgPCAxNVwiLCBcIj49IDE2XCJdLFxuXHRcInRsc1wiOiB0cnVlLFxuXHRcIm5vZGU6dGxzXCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJ0cmFjZV9ldmVudHNcIjogXCI+PSAxMFwiLFxuXHRcIm5vZGU6dHJhY2VfZXZlbnRzXCI6IFtcIj49IDE0LjE4ICYmIDwgMTVcIiwgXCI+PSAxNlwiXSxcblx0XCJ0dHlcIjogdHJ1ZSxcblx0XCJub2RlOnR0eVwiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTZcIl0sXG5cdFwidXJsXCI6IHRydWUsXG5cdFwibm9kZTp1cmxcIjogW1wiPj0gMTQuMTggJiYgPCAxNVwiLCBcIj49IDE2XCJdLFxuXHRcInV0aWxcIjogdHJ1ZSxcblx0XCJub2RlOnV0aWxcIjogW1wiPj0gMTQuMTggJiYgPCAxNVwiLCBcIj49IDE2XCJdLFxuXHRcInV0aWwvdHlwZXNcIjogXCI+PSAxNS4zXCIsXG5cdFwibm9kZTp1dGlsL3R5cGVzXCI6IFwiPj0gMTZcIixcblx0XCJ2OC90b29scy9hcmd1bWVudHNcIjogXCI+PSAxMCAmJiA8IDEyXCIsXG5cdFwidjgvdG9vbHMvY29kZW1hcFwiOiBbXCI+PSA0LjQgJiYgPCA1XCIsIFwiPj0gNS4yICYmIDwgMTJcIl0sXG5cdFwidjgvdG9vbHMvY29uc2FycmF5XCI6IFtcIj49IDQuNCAmJiA8IDVcIiwgXCI+PSA1LjIgJiYgPCAxMlwiXSxcblx0XCJ2OC90b29scy9jc3ZwYXJzZXJcIjogW1wiPj0gNC40ICYmIDwgNVwiLCBcIj49IDUuMiAmJiA8IDEyXCJdLFxuXHRcInY4L3Rvb2xzL2xvZ3JlYWRlclwiOiBbXCI+PSA0LjQgJiYgPCA1XCIsIFwiPj0gNS4yICYmIDwgMTJcIl0sXG5cdFwidjgvdG9vbHMvcHJvZmlsZV92aWV3XCI6IFtcIj49IDQuNCAmJiA8IDVcIiwgXCI+PSA1LjIgJiYgPCAxMlwiXSxcblx0XCJ2OC90b29scy9zcGxheXRyZWVcIjogW1wiPj0gNC40ICYmIDwgNVwiLCBcIj49IDUuMiAmJiA8IDEyXCJdLFxuXHRcInY4XCI6IFwiPj0gMVwiLFxuXHRcIm5vZGU6djhcIjogW1wiPj0gMTQuMTggJiYgPCAxNVwiLCBcIj49IDE2XCJdLFxuXHRcInZtXCI6IHRydWUsXG5cdFwibm9kZTp2bVwiOiBbXCI+PSAxNC4xOCAmJiA8IDE1XCIsIFwiPj0gMTZcIl0sXG5cdFwid2FzaVwiOiBbXCI+PSAxMy40ICYmIDwgMTMuNVwiLCBcIj49IDE4LjE3ICYmIDwgMTlcIiwgXCI+PSAyMFwiXSxcblx0XCJub2RlOndhc2lcIjogW1wiPj0gMTguMTcgJiYgPCAxOVwiLCBcIj49IDIwXCJdLFxuXHRcIndvcmtlcl90aHJlYWRzXCI6IFwiPj0gMTEuN1wiLFxuXHRcIm5vZGU6d29ya2VyX3RocmVhZHNcIjogW1wiPj0gMTQuMTggJiYgPCAxNVwiLCBcIj49IDE2XCJdLFxuXHRcInpsaWJcIjogXCI+PSAwLjVcIixcblx0XCJub2RlOnpsaWJcIjogW1wiPj0gMTQuMTggJiYgPCAxNVwiLCBcIj49IDE2XCJdXG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNDb3JlTW9kdWxlID0gcmVxdWlyZSgnaXMtY29yZS1tb2R1bGUnKTtcbnZhciBkYXRhID0gcmVxdWlyZSgnLi9jb3JlLmpzb24nKTtcblxudmFyIGNvcmUgPSB7fTtcbmZvciAodmFyIG1vZCBpbiBkYXRhKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIG1vZCkpIHtcbiAgICAgICAgY29yZVttb2RdID0gaXNDb3JlTW9kdWxlKG1vZCk7XG4gICAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBjb3JlO1xuIiwgInZhciBpc0NvcmVNb2R1bGUgPSByZXF1aXJlKCdpcy1jb3JlLW1vZHVsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ29yZSh4KSB7XG4gICAgcmV0dXJuIGlzQ29yZU1vZHVsZSh4KTtcbn07XG4iLCAidmFyIGlzQ29yZSA9IHJlcXVpcmUoJ2lzLWNvcmUtbW9kdWxlJyk7XG52YXIgZnMgPSByZXF1aXJlKCdmcycpO1xudmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG52YXIgJEVycm9yID0gcmVxdWlyZSgnZXMtZXJyb3JzJyk7XG52YXIgJFR5cGVFcnJvciA9IHJlcXVpcmUoJ2VzLWVycm9ycy90eXBlJyk7XG5cbnZhciBnZXRIb21lZGlyID0gcmVxdWlyZSgnLi9ob21lZGlyJyk7XG52YXIgY2FsbGVyID0gcmVxdWlyZSgnLi9jYWxsZXInKTtcbnZhciBub2RlTW9kdWxlc1BhdGhzID0gcmVxdWlyZSgnLi9ub2RlLW1vZHVsZXMtcGF0aHMnKTtcbnZhciBub3JtYWxpemVPcHRpb25zID0gcmVxdWlyZSgnLi9ub3JtYWxpemUtb3B0aW9ucycpO1xuXG52YXIgcmVhbHBhdGhGUyA9IHByb2Nlc3MucGxhdGZvcm0gIT09ICd3aW4zMicgJiYgZnMucmVhbHBhdGhTeW5jICYmIHR5cGVvZiBmcy5yZWFscGF0aFN5bmMubmF0aXZlID09PSAnZnVuY3Rpb24nID8gZnMucmVhbHBhdGhTeW5jLm5hdGl2ZSA6IGZzLnJlYWxwYXRoU3luYztcblxudmFyIHJlbGF0aXZlUGF0aFJlZ2V4ID0gL14oPzpcXC5cXC4/KD86XFwvfCQpfFxcL3woW0EtWmEtel06KT9bL1xcXFxdKS87XG52YXIgd2luZG93c0RyaXZlUmVnZXggPSAvXlxcdzpbL1xcXFxdKiQvO1xudmFyIG5vZGVNb2R1bGVzUmVnZXggPSAvWy9cXFxcXW5vZGVfbW9kdWxlc1svXFxcXF0qJC87XG5cbnZhciBob21lZGlyID0gZ2V0SG9tZWRpcigpO1xuZnVuY3Rpb24gZGVmYXVsdFBhdGhzKCkge1xuICAgIGlmICghaG9tZWRpcikgcmV0dXJuIFtdO1xuICAgIHJldHVybiBbXG4gICAgICAgIHBhdGguam9pbihob21lZGlyLCAnLm5vZGVfbW9kdWxlcycpLFxuICAgICAgICBwYXRoLmpvaW4oaG9tZWRpciwgJy5ub2RlX2xpYnJhcmllcycpXG4gICAgXTtcbn1cblxudmFyIGRlZmF1bHRJc0ZpbGUgPSBmdW5jdGlvbiBpc0ZpbGUoZmlsZSkge1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBzdGF0ID0gZnMuc3RhdFN5bmMoZmlsZSwgeyB0aHJvd0lmTm9FbnRyeTogZmFsc2UgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZSAmJiAoZS5jb2RlID09PSAnRU5PRU5UJyB8fCBlLmNvZGUgPT09ICdFTk9URElSJykpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdGhyb3cgZTtcbiAgICB9XG4gICAgcmV0dXJuICEhc3RhdCAmJiAoc3RhdC5pc0ZpbGUoKSB8fCBzdGF0LmlzRklGTygpKTtcbn07XG5cbnZhciBkZWZhdWx0SXNEaXIgPSBmdW5jdGlvbiBpc0RpcmVjdG9yeShkaXIpIHtcbiAgICB0cnkge1xuICAgICAgICB2YXIgc3RhdCA9IGZzLnN0YXRTeW5jKGRpciwgeyB0aHJvd0lmTm9FbnRyeTogZmFsc2UgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZSAmJiAoZS5jb2RlID09PSAnRU5PRU5UJyB8fCBlLmNvZGUgPT09ICdFTk9URElSJykpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdGhyb3cgZTtcbiAgICB9XG4gICAgcmV0dXJuICEhc3RhdCAmJiBzdGF0LmlzRGlyZWN0b3J5KCk7XG59O1xuXG52YXIgZGVmYXVsdFJlYWxwYXRoU3luYyA9IGZ1bmN0aW9uIHJlYWxwYXRoU3luYyh4KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHJlYWxwYXRoRlMoeCk7XG4gICAgfSBjYXRjaCAocmVhbHBhdGhFcnIpIHtcbiAgICAgICAgaWYgKHJlYWxwYXRoRXJyLmNvZGUgIT09ICdFTk9FTlQnKSB7XG4gICAgICAgICAgICB0aHJvdyByZWFscGF0aEVycjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geDtcbn07XG5cbmZ1bmN0aW9uIG1heWJlUmVhbHBhdGhTeW5jKHJlYWxwYXRoU3luYywgeCwgb3B0cykge1xuICAgIGlmIChvcHRzICYmIG9wdHMucHJlc2VydmVTeW1saW5rcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlYWxwYXRoU3luYyh4KTtcbiAgICB9XG4gICAgcmV0dXJuIHg7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRSZWFkUGFja2FnZVN5bmMocmVhZEZpbGVTeW5jLCBwa2dmaWxlKSB7XG4gICAgdmFyIGJvZHkgPSByZWFkRmlsZVN5bmMocGtnZmlsZSk7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIHBrZyA9IEpTT04ucGFyc2UoYm9keSk7XG4gICAgICAgIHJldHVybiBwa2c7XG4gICAgfSBjYXRjaCAoanNvbkVycikge31cbn1cblxuZnVuY3Rpb24gZ2V0UGFja2FnZUNhbmRpZGF0ZXMoeCwgc3RhcnQsIG9wdHMpIHtcbiAgICB2YXIgZGlycyA9IG5vZGVNb2R1bGVzUGF0aHMoc3RhcnQsIG9wdHMsIHgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGlycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBkaXJzW2ldID0gcGF0aC5qb2luKGRpcnNbaV0sIHgpO1xuICAgIH1cbiAgICByZXR1cm4gZGlycztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByZXNvbHZlU3luYyh4LCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiB4ICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcignUGF0aCBtdXN0IGJlIGEgc3RyaW5nLicpO1xuICAgIH1cbiAgICB2YXIgb3B0cyA9IG5vcm1hbGl6ZU9wdGlvbnMoeCwgb3B0aW9ucyk7XG5cbiAgICB2YXIgaXNGaWxlID0gb3B0cy5pc0ZpbGUgfHwgZGVmYXVsdElzRmlsZTtcbiAgICB2YXIgcmVhZEZpbGVTeW5jID0gb3B0cy5yZWFkRmlsZVN5bmMgfHwgZnMucmVhZEZpbGVTeW5jO1xuICAgIHZhciBpc0RpcmVjdG9yeSA9IG9wdHMuaXNEaXJlY3RvcnkgfHwgZGVmYXVsdElzRGlyO1xuICAgIHZhciByZWFscGF0aFN5bmMgPSBvcHRzLnJlYWxwYXRoU3luYyB8fCBkZWZhdWx0UmVhbHBhdGhTeW5jO1xuICAgIHZhciByZWFkUGFja2FnZVN5bmMgPSBvcHRzLnJlYWRQYWNrYWdlU3luYyB8fCBkZWZhdWx0UmVhZFBhY2thZ2VTeW5jO1xuICAgIGlmIChvcHRzLnJlYWRGaWxlU3luYyAmJiBvcHRzLnJlYWRQYWNrYWdlU3luYykge1xuICAgICAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcignYHJlYWRGaWxlU3luY2AgYW5kIGByZWFkUGFja2FnZVN5bmNgIGFyZSBtdXR1YWxseSBleGNsdXNpdmUuJyk7XG4gICAgfVxuICAgIHZhciBwYWNrYWdlSXRlcmF0b3IgPSBvcHRzLnBhY2thZ2VJdGVyYXRvcjtcblxuICAgIHZhciBleHRlbnNpb25zID0gb3B0cy5leHRlbnNpb25zIHx8IFsnLmpzJ107XG4gICAgdmFyIGluY2x1ZGVDb3JlTW9kdWxlcyA9IG9wdHMuaW5jbHVkZUNvcmVNb2R1bGVzICE9PSBmYWxzZTtcbiAgICB2YXIgYmFzZWRpciA9IG9wdHMuYmFzZWRpciB8fCBwYXRoLmRpcm5hbWUoY2FsbGVyKCkpO1xuICAgIHZhciBwYXJlbnQgPSBvcHRzLmZpbGVuYW1lIHx8IGJhc2VkaXI7XG5cbiAgICBvcHRzLnBhdGhzID0gb3B0cy5wYXRocyB8fCBkZWZhdWx0UGF0aHMoKTtcblxuICAgIC8vIGVuc3VyZSB0aGF0IGBiYXNlZGlyYCBpcyBhbiBhYnNvbHV0ZSBwYXRoIGF0IHRoaXMgcG9pbnQsIHJlc29sdmluZyBhZ2FpbnN0IHRoZSBwcm9jZXNzJyBjdXJyZW50IHdvcmtpbmcgZGlyZWN0b3J5XG4gICAgdmFyIGFic29sdXRlU3RhcnQgPSBtYXliZVJlYWxwYXRoU3luYyhyZWFscGF0aFN5bmMsIHBhdGgucmVzb2x2ZShiYXNlZGlyKSwgb3B0cyk7XG5cbiAgICBpZiAocmVsYXRpdmVQYXRoUmVnZXgudGVzdCh4KSkge1xuICAgICAgICB2YXIgcmVzID0gcGF0aC5yZXNvbHZlKGFic29sdXRlU3RhcnQsIHgpO1xuICAgICAgICBpZiAoeCA9PT0gJy4nIHx8IHggPT09ICcuLicgfHwgeC5zbGljZSgtMSkgPT09ICcvJykgcmVzICs9ICcvJztcbiAgICAgICAgdmFyIG0gPSBsb2FkQXNGaWxlU3luYyhyZXMpIHx8IGxvYWRBc0RpcmVjdG9yeVN5bmMocmVzKTtcbiAgICAgICAgaWYgKG0pIHJldHVybiBtYXliZVJlYWxwYXRoU3luYyhyZWFscGF0aFN5bmMsIG0sIG9wdHMpO1xuICAgIH0gZWxzZSBpZiAoaW5jbHVkZUNvcmVNb2R1bGVzICYmIGlzQ29yZSh4KSkge1xuICAgICAgICByZXR1cm4geDtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbiA9IGxvYWROb2RlTW9kdWxlc1N5bmMoeCwgYWJzb2x1dGVTdGFydCk7XG4gICAgICAgIGlmIChuKSByZXR1cm4gbWF5YmVSZWFscGF0aFN5bmMocmVhbHBhdGhTeW5jLCBuLCBvcHRzKTtcbiAgICB9XG5cbiAgICB2YXIgZXJyID0gbmV3ICRFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyB4ICsgXCInIGZyb20gJ1wiICsgcGFyZW50ICsgXCInXCIpO1xuICAgIGVyci5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuICAgIHRocm93IGVycjtcblxuICAgIGZ1bmN0aW9uIGxvYWRBc0ZpbGVTeW5jKHgpIHtcbiAgICAgICAgdmFyIHBrZyA9IGxvYWRwa2cocGF0aC5kaXJuYW1lKHgpKTtcblxuICAgICAgICBpZiAocGtnICYmIHBrZy5kaXIgJiYgcGtnLnBrZyAmJiBvcHRzLnBhdGhGaWx0ZXIpIHtcbiAgICAgICAgICAgIHZhciByZmlsZSA9IHBhdGgucmVsYXRpdmUocGtnLmRpciwgeCk7XG4gICAgICAgICAgICB2YXIgciA9IG9wdHMucGF0aEZpbHRlcihwa2cucGtnLCB4LCByZmlsZSk7XG4gICAgICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgICAgIHggPSBwYXRoLnJlc29sdmUocGtnLmRpciwgcik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0ZpbGUoeCkpIHtcbiAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHRlbnNpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZmlsZSA9IHggKyBleHRlbnNpb25zW2ldO1xuICAgICAgICAgICAgaWYgKGlzRmlsZShmaWxlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmaWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZHBrZyhkaXIpIHtcbiAgICAgICAgaWYgKGRpciA9PT0gJycgfHwgZGlyID09PSAnLycpIHJldHVybjtcbiAgICAgICAgaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicgJiYgd2luZG93c0RyaXZlUmVnZXgudGVzdChkaXIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGVNb2R1bGVzUmVnZXgudGVzdChkaXIpKSByZXR1cm47XG5cbiAgICAgICAgdmFyIHBrZ2ZpbGUgPSBwYXRoLmpvaW4obWF5YmVSZWFscGF0aFN5bmMocmVhbHBhdGhTeW5jLCBkaXIsIG9wdHMpLCAncGFja2FnZS5qc29uJyk7XG5cbiAgICAgICAgaWYgKCFpc0ZpbGUocGtnZmlsZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBsb2FkcGtnKHBhdGguZGlybmFtZShkaXIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwa2cgPSByZWFkUGFja2FnZVN5bmMocmVhZEZpbGVTeW5jLCBwa2dmaWxlKTtcblxuICAgICAgICBpZiAocGtnICYmIG9wdHMucGFja2FnZUZpbHRlcikge1xuICAgICAgICAgICAgLy8gdjIgd2lsbCBwYXNzIHBrZ2ZpbGVcbiAgICAgICAgICAgIHBrZyA9IG9wdHMucGFja2FnZUZpbHRlcihwa2csIC8qcGtnZmlsZSwqLyBkaXIpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHNwYWNlZC1jb21tZW50XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyBwa2c6IHBrZywgZGlyOiBkaXIgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkQXNEaXJlY3RvcnlTeW5jKHgpIHtcbiAgICAgICAgdmFyIHBrZ2ZpbGUgPSBwYXRoLmpvaW4obWF5YmVSZWFscGF0aFN5bmMocmVhbHBhdGhTeW5jLCB4LCBvcHRzKSwgJy9wYWNrYWdlLmpzb24nKTtcbiAgICAgICAgaWYgKGlzRmlsZShwa2dmaWxlKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgcGtnID0gcmVhZFBhY2thZ2VTeW5jKHJlYWRGaWxlU3luYywgcGtnZmlsZSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgICAgICAgICBpZiAocGtnICYmIG9wdHMucGFja2FnZUZpbHRlcikge1xuICAgICAgICAgICAgICAgIC8vIHYyIHdpbGwgcGFzcyBwa2dmaWxlXG4gICAgICAgICAgICAgICAgcGtnID0gb3B0cy5wYWNrYWdlRmlsdGVyKHBrZywgLypwa2dmaWxlLCovIHgpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHNwYWNlZC1jb21tZW50XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwa2cgJiYgcGtnLm1haW4pIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHBrZy5tYWluICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWFpbkVycm9yID0gbmV3ICRUeXBlRXJyb3IoJ3BhY2thZ2UgXHUyMDFDJyArIHBrZy5uYW1lICsgJ1x1MjAxRCBgbWFpbmAgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgICAgICAgICAgICAgICAgICBtYWluRXJyb3IuY29kZSA9ICdJTlZBTElEX1BBQ0tBR0VfTUFJTic7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG1haW5FcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBrZy5tYWluID09PSAnLicgfHwgcGtnLm1haW4gPT09ICcuLycpIHtcbiAgICAgICAgICAgICAgICAgICAgcGtnLm1haW4gPSAnaW5kZXgnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbSA9IGxvYWRBc0ZpbGVTeW5jKHBhdGgucmVzb2x2ZSh4LCBwa2cubWFpbikpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobSkgcmV0dXJuIG07XG4gICAgICAgICAgICAgICAgICAgIHZhciBuID0gbG9hZEFzRGlyZWN0b3J5U3luYyhwYXRoLnJlc29sdmUoeCwgcGtnLm1haW4pKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4pIHJldHVybiBuO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbG9hZEFzRmlsZVN5bmMocGF0aC5qb2luKHgsICcvaW5kZXgnKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZE5vZGVNb2R1bGVzU3luYyh4LCBzdGFydCkge1xuICAgICAgICB2YXIgdGh1bmsgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRQYWNrYWdlQ2FuZGlkYXRlcyh4LCBzdGFydCwgb3B0cyk7IH07XG4gICAgICAgIHZhciBkaXJzID0gcGFja2FnZUl0ZXJhdG9yID8gcGFja2FnZUl0ZXJhdG9yKHgsIHN0YXJ0LCB0aHVuaywgb3B0cykgOiB0aHVuaygpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGlycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGRpciA9IGRpcnNbaV07XG4gICAgICAgICAgICBpZiAoaXNEaXJlY3RvcnkocGF0aC5kaXJuYW1lKGRpcikpKSB7XG4gICAgICAgICAgICAgICAgdmFyIG0gPSBsb2FkQXNGaWxlU3luYyhkaXIpO1xuICAgICAgICAgICAgICAgIGlmIChtKSByZXR1cm4gbTtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IGxvYWRBc0RpcmVjdG9yeVN5bmMoZGlyKTtcbiAgICAgICAgICAgICAgICBpZiAobikgcmV0dXJuIG47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuIiwgInZhciBhc3luYyA9IHJlcXVpcmUoJy4vbGliL2FzeW5jJyk7XG5hc3luYy5jb3JlID0gcmVxdWlyZSgnLi9saWIvY29yZScpO1xuYXN5bmMuaXNDb3JlID0gcmVxdWlyZSgnLi9saWIvaXMtY29yZScpO1xuYXN5bmMuc3luYyA9IHJlcXVpcmUoJy4vbGliL3N5bmMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhc3luYztcbiIsICJtb2R1bGUuZXhwb3J0cyA9IGV4dHJhY3REZXNjcmlwdGlvblxuXG4vLyBFeHRyYWN0cyBkZXNjcmlwdGlvbiBmcm9tIGNvbnRlbnRzIG9mIGEgcmVhZG1lIGZpbGUgaW4gbWFya2Rvd24gZm9ybWF0XG5mdW5jdGlvbiBleHRyYWN0RGVzY3JpcHRpb24gKGQpIHtcbiAgaWYgKCFkKSByZXR1cm47XG4gIGlmIChkID09PSBcIkVSUk9SOiBObyBSRUFETUUgZGF0YSBmb3VuZCFcIikgcmV0dXJuO1xuICAvLyB0aGUgZmlyc3QgYmxvY2sgb2YgdGV4dCBiZWZvcmUgdGhlIGZpcnN0IGhlYWRpbmdcbiAgLy8gdGhhdCBpc24ndCB0aGUgZmlyc3QgbGluZSBoZWFkaW5nXG4gIGQgPSBkLnRyaW0oKS5zcGxpdCgnXFxuJylcbiAgZm9yICh2YXIgcyA9IDA7IGRbc10gJiYgZFtzXS50cmltKCkubWF0Y2goL14oI3wkKS8pOyBzICsrKTtcbiAgdmFyIGwgPSBkLmxlbmd0aFxuICBmb3IgKHZhciBlID0gcyArIDE7IGUgPCBsICYmIGRbZV0udHJpbSgpOyBlICsrKTtcbiAgcmV0dXJuIGQuc2xpY2UocywgZSkuam9pbignICcpLnRyaW0oKVxufVxuIiwgIntcbiAgXCJ0b3BMZXZlbFwiOiB7XG4gICAgXCJkZXBlbmRhbmNpZXNcIjogXCJkZXBlbmRlbmNpZXNcIlxuICAgLFwiZGVwZW5kZWNpZXNcIjogXCJkZXBlbmRlbmNpZXNcIlxuICAgLFwiZGVwZGVuZW5jaWVzXCI6IFwiZGVwZW5kZW5jaWVzXCJcbiAgICxcImRldkVlcGVuZGVuY2llc1wiOiBcImRldkRlcGVuZGVuY2llc1wiXG4gICAsXCJkZXBlbmRzXCI6IFwiZGVwZW5kZW5jaWVzXCJcbiAgICxcImRldi1kZXBlbmRlbmNpZXNcIjogXCJkZXZEZXBlbmRlbmNpZXNcIlxuICAgLFwiZGV2RGVwZW5kZW5jZXNcIjogXCJkZXZEZXBlbmRlbmNpZXNcIlxuICAgLFwiZGV2RGVwZW5lbmNpZXNcIjogXCJkZXZEZXBlbmRlbmNpZXNcIlxuICAgLFwiZGV2ZGVwZW5kZW5jaWVzXCI6IFwiZGV2RGVwZW5kZW5jaWVzXCJcbiAgICxcInJlcG9zdGl0b3J5XCI6IFwicmVwb3NpdG9yeVwiXG4gICAsXCJyZXBvXCI6IFwicmVwb3NpdG9yeVwiXG4gICAsXCJwcmVmZXJlR2xvYmFsXCI6IFwicHJlZmVyR2xvYmFsXCJcbiAgICxcImhvbXBhZ2VcIjogXCJob21lcGFnZVwiXG4gICAsXCJoYW1wYWdlXCI6IFwiaG9tZXBhZ2VcIlxuICAgLFwiYXV0b2hyXCI6IFwiYXV0aG9yXCJcbiAgICxcImF1dG9yXCI6IFwiYXV0aG9yXCJcbiAgICxcImNvbnRyaWJ1dGVyc1wiOiBcImNvbnRyaWJ1dG9yc1wiXG4gICAsXCJwdWJsaWNhdGlvbkNvbmZpZ1wiOiBcInB1Ymxpc2hDb25maWdcIlxuICAgLFwic2NyaXB0XCI6IFwic2NyaXB0c1wiXG4gIH0sXG4gIFwiYnVnc1wiOiB7IFwid2ViXCI6IFwidXJsXCIsIFwibmFtZVwiOiBcInVybFwiIH0sXG4gIFwic2NyaXB0XCI6IHsgXCJzZXJ2ZXJcIjogXCJzdGFydFwiLCBcInRlc3RzXCI6IFwidGVzdFwiIH1cbn1cbiIsICJ2YXIgc2VtdmVyID0gcmVxdWlyZShcInNlbXZlclwiKVxudmFyIHZhbGlkYXRlTGljZW5zZSA9IHJlcXVpcmUoJ3ZhbGlkYXRlLW5wbS1wYWNrYWdlLWxpY2Vuc2UnKTtcbnZhciBob3N0ZWRHaXRJbmZvID0gcmVxdWlyZShcImhvc3RlZC1naXQtaW5mb1wiKVxudmFyIGlzQnVpbHRpbk1vZHVsZSA9IHJlcXVpcmUoXCJyZXNvbHZlXCIpLmlzQ29yZVxudmFyIGRlcFR5cGVzID0gW1wiZGVwZW5kZW5jaWVzXCIsXCJkZXZEZXBlbmRlbmNpZXNcIixcIm9wdGlvbmFsRGVwZW5kZW5jaWVzXCJdXG52YXIgZXh0cmFjdERlc2NyaXB0aW9uID0gcmVxdWlyZShcIi4vZXh0cmFjdF9kZXNjcmlwdGlvblwiKVxudmFyIHVybCA9IHJlcXVpcmUoXCJ1cmxcIilcbnZhciB0eXBvcyA9IHJlcXVpcmUoXCIuL3R5cG9zLmpzb25cIilcblxudmFyIGZpeGVyID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGRlZmF1bHQgd2FybmluZyBmdW5jdGlvblxuICB3YXJuOiBmdW5jdGlvbigpIHt9LFxuXG4gIGZpeFJlcG9zaXRvcnlGaWVsZDogZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmIChkYXRhLnJlcG9zaXRvcmllcykge1xuICAgICAgdGhpcy53YXJuKFwicmVwb3NpdG9yaWVzXCIpO1xuICAgICAgZGF0YS5yZXBvc2l0b3J5ID0gZGF0YS5yZXBvc2l0b3JpZXNbMF1cbiAgICB9XG4gICAgaWYgKCFkYXRhLnJlcG9zaXRvcnkpIHJldHVybiB0aGlzLndhcm4oXCJtaXNzaW5nUmVwb3NpdG9yeVwiKVxuICAgIGlmICh0eXBlb2YgZGF0YS5yZXBvc2l0b3J5ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBkYXRhLnJlcG9zaXRvcnkgPSB7XG4gICAgICAgIHR5cGU6IFwiZ2l0XCIsXG4gICAgICAgIHVybDogZGF0YS5yZXBvc2l0b3J5XG4gICAgICB9XG4gICAgfVxuICAgIHZhciByID0gZGF0YS5yZXBvc2l0b3J5LnVybCB8fCBcIlwiXG4gICAgaWYgKHIpIHtcbiAgICAgIHZhciBob3N0ZWQgPSBob3N0ZWRHaXRJbmZvLmZyb21VcmwocilcbiAgICAgIGlmIChob3N0ZWQpIHtcbiAgICAgICAgciA9IGRhdGEucmVwb3NpdG9yeS51cmxcbiAgICAgICAgICA9IGhvc3RlZC5nZXREZWZhdWx0UmVwcmVzZW50YXRpb24oKSA9PSBcInNob3J0Y3V0XCIgPyBob3N0ZWQuaHR0cHMoKSA6IGhvc3RlZC50b1N0cmluZygpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHIubWF0Y2goL2dpdGh1Yi5jb21cXC9bXlxcL10rXFwvW15cXC9dK1xcLmdpdFxcLmdpdCQvKSkge1xuICAgICAgdGhpcy53YXJuKFwiYnJva2VuR2l0VXJsXCIsIHIpXG4gICAgfVxuICB9XG5cbiwgZml4VHlwb3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBPYmplY3Qua2V5cyh0eXBvcy50b3BMZXZlbCkuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoZCkpIHtcbiAgICAgICAgdGhpcy53YXJuKFwidHlwb1wiLCBkLCB0eXBvcy50b3BMZXZlbFtkXSlcbiAgICAgIH1cbiAgICB9LCB0aGlzKVxuICB9XG5cbiwgZml4U2NyaXB0c0ZpZWxkOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgaWYgKCFkYXRhLnNjcmlwdHMpIHJldHVyblxuICAgIGlmICh0eXBlb2YgZGF0YS5zY3JpcHRzICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICB0aGlzLndhcm4oXCJub25PYmplY3RTY3JpcHRzXCIpXG4gICAgICBkZWxldGUgZGF0YS5zY3JpcHRzXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgT2JqZWN0LmtleXMoZGF0YS5zY3JpcHRzKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgICBpZiAodHlwZW9mIGRhdGEuc2NyaXB0c1trXSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICB0aGlzLndhcm4oXCJub25TdHJpbmdTY3JpcHRcIilcbiAgICAgICAgZGVsZXRlIGRhdGEuc2NyaXB0c1trXVxuICAgICAgfSBlbHNlIGlmICh0eXBvcy5zY3JpcHRba10gJiYgIWRhdGEuc2NyaXB0c1t0eXBvcy5zY3JpcHRba11dKSB7XG4gICAgICAgIHRoaXMud2FybihcInR5cG9cIiwgaywgdHlwb3Muc2NyaXB0W2tdLCBcInNjcmlwdHNcIilcbiAgICAgIH1cbiAgICB9LCB0aGlzKVxuICB9XG5cbiwgZml4RmlsZXNGaWVsZDogZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBmaWxlcyA9IGRhdGEuZmlsZXNcbiAgICBpZiAoZmlsZXMgJiYgIUFycmF5LmlzQXJyYXkoZmlsZXMpKSB7XG4gICAgICB0aGlzLndhcm4oXCJub25BcnJheUZpbGVzXCIpXG4gICAgICBkZWxldGUgZGF0YS5maWxlc1xuICAgIH0gZWxzZSBpZiAoZGF0YS5maWxlcykge1xuICAgICAgZGF0YS5maWxlcyA9IGRhdGEuZmlsZXMuZmlsdGVyKGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgICAgaWYgKCFmaWxlIHx8IHR5cGVvZiBmaWxlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgdGhpcy53YXJuKFwiaW52YWxpZEZpbGVuYW1lXCIsIGZpbGUpXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcylcbiAgICB9XG4gIH1cblxuLCBmaXhCaW5GaWVsZDogZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmICghZGF0YS5iaW4pIHJldHVybjtcbiAgICBpZiAodHlwZW9mIGRhdGEuYmluID09PSBcInN0cmluZ1wiKSB7XG4gICAgICB2YXIgYiA9IHt9XG4gICAgICB2YXIgbWF0Y2hcbiAgICAgIGlmIChtYXRjaCA9IGRhdGEubmFtZS5tYXRjaCgvXkBbXi9dK1svXSguKikkLykpIHtcbiAgICAgICAgYlttYXRjaFsxXV0gPSBkYXRhLmJpblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYltkYXRhLm5hbWVdID0gZGF0YS5iaW5cbiAgICAgIH1cbiAgICAgIGRhdGEuYmluID0gYlxuICAgIH1cbiAgfVxuXG4sIGZpeE1hbkZpZWxkOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgaWYgKCFkYXRhLm1hbikgcmV0dXJuO1xuICAgIGlmICh0eXBlb2YgZGF0YS5tYW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGRhdGEubWFuID0gWyBkYXRhLm1hbiBdXG4gICAgfVxuICB9XG4sIGZpeEJ1bmRsZURlcGVuZGVuY2llc0ZpZWxkOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGJkZCA9IFwiYnVuZGxlZERlcGVuZGVuY2llc1wiXG4gICAgdmFyIGJkID0gXCJidW5kbGVEZXBlbmRlbmNpZXNcIlxuICAgIGlmIChkYXRhW2JkZF0gJiYgIWRhdGFbYmRdKSB7XG4gICAgICBkYXRhW2JkXSA9IGRhdGFbYmRkXVxuICAgICAgZGVsZXRlIGRhdGFbYmRkXVxuICAgIH1cbiAgICBpZiAoZGF0YVtiZF0gJiYgIUFycmF5LmlzQXJyYXkoZGF0YVtiZF0pKSB7XG4gICAgICB0aGlzLndhcm4oXCJub25BcnJheUJ1bmRsZURlcGVuZGVuY2llc1wiKVxuICAgICAgZGVsZXRlIGRhdGFbYmRdXG4gICAgfSBlbHNlIGlmIChkYXRhW2JkXSkge1xuICAgICAgZGF0YVtiZF0gPSBkYXRhW2JkXS5maWx0ZXIoZnVuY3Rpb24oYmQpIHtcbiAgICAgICAgaWYgKCFiZCB8fCB0eXBlb2YgYmQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhpcy53YXJuKFwibm9uU3RyaW5nQnVuZGxlRGVwZW5kZW5jeVwiLCBiZClcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoIWRhdGEuZGVwZW5kZW5jaWVzKSB7XG4gICAgICAgICAgICBkYXRhLmRlcGVuZGVuY2llcyA9IHt9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghZGF0YS5kZXBlbmRlbmNpZXMuaGFzT3duUHJvcGVydHkoYmQpKSB7XG4gICAgICAgICAgICB0aGlzLndhcm4oXCJub25EZXBlbmRlbmN5QnVuZGxlRGVwZW5kZW5jeVwiLCBiZClcbiAgICAgICAgICAgIGRhdGEuZGVwZW5kZW5jaWVzW2JkXSA9IFwiKlwiXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMpXG4gICAgfVxuICB9XG5cbiwgZml4RGVwZW5kZW5jaWVzOiBmdW5jdGlvbihkYXRhLCBzdHJpY3QpIHtcbiAgICB2YXIgbG9vc2UgPSAhc3RyaWN0XG4gICAgb2JqZWN0aWZ5RGVwcyhkYXRhLCB0aGlzLndhcm4pXG4gICAgYWRkT3B0aW9uYWxEZXBzVG9EZXBzKGRhdGEsIHRoaXMud2FybilcbiAgICB0aGlzLmZpeEJ1bmRsZURlcGVuZGVuY2llc0ZpZWxkKGRhdGEpXG5cbiAgICA7WydkZXBlbmRlbmNpZXMnLCdkZXZEZXBlbmRlbmNpZXMnXS5mb3JFYWNoKGZ1bmN0aW9uKGRlcHMpIHtcbiAgICAgIGlmICghKGRlcHMgaW4gZGF0YSkpIHJldHVyblxuICAgICAgaWYgKCFkYXRhW2RlcHNdIHx8IHR5cGVvZiBkYXRhW2RlcHNdICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHRoaXMud2FybihcIm5vbk9iamVjdERlcGVuZGVuY2llc1wiLCBkZXBzKVxuICAgICAgICBkZWxldGUgZGF0YVtkZXBzXVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIE9iamVjdC5rZXlzKGRhdGFbZGVwc10pLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgdmFyIHIgPSBkYXRhW2RlcHNdW2RdXG4gICAgICAgIGlmICh0eXBlb2YgciAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aGlzLndhcm4oXCJub25TdHJpbmdEZXBlbmRlbmN5XCIsIGQsIEpTT04uc3RyaW5naWZ5KHIpKVxuICAgICAgICAgIGRlbGV0ZSBkYXRhW2RlcHNdW2RdXG4gICAgICAgIH1cbiAgICAgICAgdmFyIGhvc3RlZCA9IGhvc3RlZEdpdEluZm8uZnJvbVVybChkYXRhW2RlcHNdW2RdKVxuICAgICAgICBpZiAoaG9zdGVkKSBkYXRhW2RlcHNdW2RdID0gaG9zdGVkLnRvU3RyaW5nKClcbiAgICAgIH0sIHRoaXMpXG4gICAgfSwgdGhpcylcbiAgfVxuXG4sIGZpeE1vZHVsZXNGaWVsZDogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBpZiAoZGF0YS5tb2R1bGVzKSB7XG4gICAgICB0aGlzLndhcm4oXCJkZXByZWNhdGVkTW9kdWxlc1wiKVxuICAgICAgZGVsZXRlIGRhdGEubW9kdWxlc1xuICAgIH1cbiAgfVxuXG4sIGZpeEtleXdvcmRzRmllbGQ6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgaWYgKHR5cGVvZiBkYXRhLmtleXdvcmRzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBkYXRhLmtleXdvcmRzID0gZGF0YS5rZXl3b3Jkcy5zcGxpdCgvLFxccysvKVxuICAgIH1cbiAgICBpZiAoZGF0YS5rZXl3b3JkcyAmJiAhQXJyYXkuaXNBcnJheShkYXRhLmtleXdvcmRzKSkge1xuICAgICAgZGVsZXRlIGRhdGEua2V5d29yZHNcbiAgICAgIHRoaXMud2FybihcIm5vbkFycmF5S2V5d29yZHNcIilcbiAgICB9IGVsc2UgaWYgKGRhdGEua2V5d29yZHMpIHtcbiAgICAgIGRhdGEua2V5d29yZHMgPSBkYXRhLmtleXdvcmRzLmZpbHRlcihmdW5jdGlvbihrdykge1xuICAgICAgICBpZiAodHlwZW9mIGt3ICE9PSBcInN0cmluZ1wiIHx8ICFrdykge1xuICAgICAgICAgIHRoaXMud2FybihcIm5vblN0cmluZ0tleXdvcmRcIik7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcylcbiAgICB9XG4gIH1cblxuLCBmaXhWZXJzaW9uRmllbGQ6IGZ1bmN0aW9uKGRhdGEsIHN0cmljdCkge1xuICAgIC8vIGFsbG93IFwibG9vc2VcIiBzZW12ZXIgMS4wIHZlcnNpb25zIGluIG5vbi1zdHJpY3QgbW9kZVxuICAgIC8vIGVuZm9yY2Ugc3RyaWN0IHNlbXZlciAyLjAgY29tcGxpYW5jZSBpbiBzdHJpY3QgbW9kZVxuICAgIHZhciBsb29zZSA9ICFzdHJpY3RcbiAgICBpZiAoIWRhdGEudmVyc2lvbikge1xuICAgICAgZGF0YS52ZXJzaW9uID0gXCJcIlxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgaWYgKCFzZW12ZXIudmFsaWQoZGF0YS52ZXJzaW9uLCBsb29zZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB2ZXJzaW9uOiBcIicrIGRhdGEudmVyc2lvbiArICdcIicpXG4gICAgfVxuICAgIGRhdGEudmVyc2lvbiA9IHNlbXZlci5jbGVhbihkYXRhLnZlcnNpb24sIGxvb3NlKVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuLCBmaXhQZW9wbGU6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBtb2RpZnlQZW9wbGUoZGF0YSwgdW5QYXJzZVBlcnNvbilcbiAgICBtb2RpZnlQZW9wbGUoZGF0YSwgcGFyc2VQZXJzb24pXG4gIH1cblxuLCBmaXhOYW1lRmllbGQ6IGZ1bmN0aW9uKGRhdGEsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwiYm9vbGVhblwiKSBvcHRpb25zID0ge3N0cmljdDogb3B0aW9uc31cbiAgICBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucyA9IHt9XG4gICAgdmFyIHN0cmljdCA9IG9wdGlvbnMuc3RyaWN0XG4gICAgaWYgKCFkYXRhLm5hbWUgJiYgIXN0cmljdCkge1xuICAgICAgZGF0YS5uYW1lID0gXCJcIlxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGF0YS5uYW1lICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJuYW1lIGZpZWxkIG11c3QgYmUgYSBzdHJpbmcuXCIpXG4gICAgfVxuICAgIGlmICghc3RyaWN0KVxuICAgICAgZGF0YS5uYW1lID0gZGF0YS5uYW1lLnRyaW0oKVxuICAgIGVuc3VyZVZhbGlkTmFtZShkYXRhLm5hbWUsIHN0cmljdCwgb3B0aW9ucy5hbGxvd0xlZ2FjeUNhc2UpXG4gICAgaWYgKGlzQnVpbHRpbk1vZHVsZShkYXRhLm5hbWUpKVxuICAgICAgdGhpcy53YXJuKFwiY29uZmxpY3RpbmdOYW1lXCIsIGRhdGEubmFtZSlcbiAgfVxuXG5cbiwgZml4RGVzY3JpcHRpb25GaWVsZDogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBpZiAoZGF0YS5kZXNjcmlwdGlvbiAmJiB0eXBlb2YgZGF0YS5kZXNjcmlwdGlvbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMud2FybihcIm5vblN0cmluZ0Rlc2NyaXB0aW9uXCIpXG4gICAgICBkZWxldGUgZGF0YS5kZXNjcmlwdGlvblxuICAgIH1cbiAgICBpZiAoZGF0YS5yZWFkbWUgJiYgIWRhdGEuZGVzY3JpcHRpb24pXG4gICAgICBkYXRhLmRlc2NyaXB0aW9uID0gZXh0cmFjdERlc2NyaXB0aW9uKGRhdGEucmVhZG1lKVxuICAgICAgaWYoZGF0YS5kZXNjcmlwdGlvbiA9PT0gdW5kZWZpbmVkKSBkZWxldGUgZGF0YS5kZXNjcmlwdGlvbjtcbiAgICBpZiAoIWRhdGEuZGVzY3JpcHRpb24pIHRoaXMud2FybihcIm1pc3NpbmdEZXNjcmlwdGlvblwiKVxuICB9XG5cbiwgZml4UmVhZG1lRmllbGQ6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgaWYgKCFkYXRhLnJlYWRtZSkge1xuICAgICAgdGhpcy53YXJuKFwibWlzc2luZ1JlYWRtZVwiKVxuICAgICAgZGF0YS5yZWFkbWUgPSBcIkVSUk9SOiBObyBSRUFETUUgZGF0YSBmb3VuZCFcIlxuICAgIH1cbiAgfVxuXG4sIGZpeEJ1Z3NGaWVsZDogZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmICghZGF0YS5idWdzICYmIGRhdGEucmVwb3NpdG9yeSAmJiBkYXRhLnJlcG9zaXRvcnkudXJsKSB7XG4gICAgICB2YXIgaG9zdGVkID0gaG9zdGVkR2l0SW5mby5mcm9tVXJsKGRhdGEucmVwb3NpdG9yeS51cmwpXG4gICAgICBpZihob3N0ZWQgJiYgaG9zdGVkLmJ1Z3MoKSkge1xuICAgICAgICBkYXRhLmJ1Z3MgPSB7dXJsOiBob3N0ZWQuYnVncygpfVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmKGRhdGEuYnVncykge1xuICAgICAgdmFyIGVtYWlsUmUgPSAvXi4rQC4qXFwuLiskL1xuICAgICAgaWYodHlwZW9mIGRhdGEuYnVncyA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGlmKGVtYWlsUmUudGVzdChkYXRhLmJ1Z3MpKVxuICAgICAgICAgIGRhdGEuYnVncyA9IHtlbWFpbDpkYXRhLmJ1Z3N9XG4gICAgICAgIGVsc2UgaWYodXJsLnBhcnNlKGRhdGEuYnVncykucHJvdG9jb2wpXG4gICAgICAgICAgZGF0YS5idWdzID0ge3VybDogZGF0YS5idWdzfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgdGhpcy53YXJuKFwibm9uRW1haWxVcmxCdWdzU3RyaW5nXCIpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgYnVnc1R5cG9zKGRhdGEuYnVncywgdGhpcy53YXJuKVxuICAgICAgICB2YXIgb2xkQnVncyA9IGRhdGEuYnVnc1xuICAgICAgICBkYXRhLmJ1Z3MgPSB7fVxuICAgICAgICBpZihvbGRCdWdzLnVybCkge1xuICAgICAgICAgIGlmKHR5cGVvZihvbGRCdWdzLnVybCkgPT0gXCJzdHJpbmdcIiAmJiB1cmwucGFyc2Uob2xkQnVncy51cmwpLnByb3RvY29sKVxuICAgICAgICAgICAgZGF0YS5idWdzLnVybCA9IG9sZEJ1Z3MudXJsXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy53YXJuKFwibm9uVXJsQnVnc1VybEZpZWxkXCIpXG4gICAgICAgIH1cbiAgICAgICAgaWYob2xkQnVncy5lbWFpbCkge1xuICAgICAgICAgIGlmKHR5cGVvZihvbGRCdWdzLmVtYWlsKSA9PSBcInN0cmluZ1wiICYmIGVtYWlsUmUudGVzdChvbGRCdWdzLmVtYWlsKSlcbiAgICAgICAgICAgIGRhdGEuYnVncy5lbWFpbCA9IG9sZEJ1Z3MuZW1haWxcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLndhcm4oXCJub25FbWFpbEJ1Z3NFbWFpbEZpZWxkXCIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKCFkYXRhLmJ1Z3MuZW1haWwgJiYgIWRhdGEuYnVncy51cmwpIHtcbiAgICAgICAgZGVsZXRlIGRhdGEuYnVnc1xuICAgICAgICB0aGlzLndhcm4oXCJlbXB0eU5vcm1hbGl6ZWRCdWdzXCIpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiwgZml4SG9tZXBhZ2VGaWVsZDogZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmICghZGF0YS5ob21lcGFnZSAmJiBkYXRhLnJlcG9zaXRvcnkgJiYgZGF0YS5yZXBvc2l0b3J5LnVybCkge1xuICAgICAgdmFyIGhvc3RlZCA9IGhvc3RlZEdpdEluZm8uZnJvbVVybChkYXRhLnJlcG9zaXRvcnkudXJsKVxuICAgICAgaWYgKGhvc3RlZCAmJiBob3N0ZWQuZG9jcygpKSBkYXRhLmhvbWVwYWdlID0gaG9zdGVkLmRvY3MoKVxuICAgIH1cbiAgICBpZiAoIWRhdGEuaG9tZXBhZ2UpIHJldHVyblxuXG4gICAgaWYodHlwZW9mIGRhdGEuaG9tZXBhZ2UgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRoaXMud2FybihcIm5vblVybEhvbWVwYWdlXCIpXG4gICAgICByZXR1cm4gZGVsZXRlIGRhdGEuaG9tZXBhZ2VcbiAgICB9XG4gICAgaWYoIXVybC5wYXJzZShkYXRhLmhvbWVwYWdlKS5wcm90b2NvbCkge1xuICAgICAgZGF0YS5ob21lcGFnZSA9IFwiaHR0cDovL1wiICsgZGF0YS5ob21lcGFnZVxuICAgIH1cbiAgfVxuXG4sIGZpeExpY2Vuc2VGaWVsZDogZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmICghZGF0YS5saWNlbnNlKSB7XG4gICAgICByZXR1cm4gdGhpcy53YXJuKFwibWlzc2luZ0xpY2Vuc2VcIilcbiAgICB9IGVsc2V7XG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZihkYXRhLmxpY2Vuc2UpICE9PSAnc3RyaW5nJyB8fFxuICAgICAgICBkYXRhLmxpY2Vuc2UubGVuZ3RoIDwgMSB8fFxuICAgICAgICBkYXRhLmxpY2Vuc2UudHJpbSgpID09PSAnJ1xuICAgICAgKSB7XG4gICAgICAgIHRoaXMud2FybihcImludmFsaWRMaWNlbnNlXCIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIXZhbGlkYXRlTGljZW5zZShkYXRhLmxpY2Vuc2UpLnZhbGlkRm9yTmV3UGFja2FnZXMpXG4gICAgICAgICAgdGhpcy53YXJuKFwiaW52YWxpZExpY2Vuc2VcIilcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNWYWxpZFNjb3BlZFBhY2thZ2VOYW1lKHNwZWMpIHtcbiAgaWYgKHNwZWMuY2hhckF0KDApICE9PSAnQCcpIHJldHVybiBmYWxzZVxuXG4gIHZhciByZXN0ID0gc3BlYy5zbGljZSgxKS5zcGxpdCgnLycpXG4gIGlmIChyZXN0Lmxlbmd0aCAhPT0gMikgcmV0dXJuIGZhbHNlXG5cbiAgcmV0dXJuIHJlc3RbMF0gJiYgcmVzdFsxXSAmJlxuICAgIHJlc3RbMF0gPT09IGVuY29kZVVSSUNvbXBvbmVudChyZXN0WzBdKSAmJlxuICAgIHJlc3RbMV0gPT09IGVuY29kZVVSSUNvbXBvbmVudChyZXN0WzFdKVxufVxuXG5mdW5jdGlvbiBpc0NvcnJlY3RseUVuY29kZWROYW1lKHNwZWMpIHtcbiAgcmV0dXJuICFzcGVjLm1hdGNoKC9bXFwvQFxcc1xcKyU6XS8pICYmXG4gICAgc3BlYyA9PT0gZW5jb2RlVVJJQ29tcG9uZW50KHNwZWMpXG59XG5cbmZ1bmN0aW9uIGVuc3VyZVZhbGlkTmFtZSAobmFtZSwgc3RyaWN0LCBhbGxvd0xlZ2FjeUNhc2UpIHtcbiAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcIi5cIiB8fFxuICAgICAgIShpc1ZhbGlkU2NvcGVkUGFja2FnZU5hbWUobmFtZSkgfHwgaXNDb3JyZWN0bHlFbmNvZGVkTmFtZShuYW1lKSkgfHxcbiAgICAgIChzdHJpY3QgJiYgKCFhbGxvd0xlZ2FjeUNhc2UpICYmIG5hbWUgIT09IG5hbWUudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgIG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJub2RlX21vZHVsZXNcIiB8fFxuICAgICAgbmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImZhdmljb24uaWNvXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBuYW1lOiBcIiArIEpTT04uc3RyaW5naWZ5KG5hbWUpKVxuICB9XG59XG5cbmZ1bmN0aW9uIG1vZGlmeVBlb3BsZSAoZGF0YSwgZm4pIHtcbiAgaWYgKGRhdGEuYXV0aG9yKSBkYXRhLmF1dGhvciA9IGZuKGRhdGEuYXV0aG9yKVxuICA7W1wibWFpbnRhaW5lcnNcIiwgXCJjb250cmlidXRvcnNcIl0uZm9yRWFjaChmdW5jdGlvbiAoc2V0KSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGFbc2V0XSkpIHJldHVybjtcbiAgICBkYXRhW3NldF0gPSBkYXRhW3NldF0ubWFwKGZuKVxuICB9KVxuICByZXR1cm4gZGF0YVxufVxuXG5mdW5jdGlvbiB1blBhcnNlUGVyc29uIChwZXJzb24pIHtcbiAgaWYgKHR5cGVvZiBwZXJzb24gPT09IFwic3RyaW5nXCIpIHJldHVybiBwZXJzb25cbiAgdmFyIG5hbWUgPSBwZXJzb24ubmFtZSB8fCBcIlwiXG4gIHZhciB1ID0gcGVyc29uLnVybCB8fCBwZXJzb24ud2ViXG4gIHZhciB1cmwgPSB1ID8gKFwiIChcIit1K1wiKVwiKSA6IFwiXCJcbiAgdmFyIGUgPSBwZXJzb24uZW1haWwgfHwgcGVyc29uLm1haWxcbiAgdmFyIGVtYWlsID0gZSA/IChcIiA8XCIrZStcIj5cIikgOiBcIlwiXG4gIHJldHVybiBuYW1lK2VtYWlsK3VybFxufVxuXG5mdW5jdGlvbiBwYXJzZVBlcnNvbiAocGVyc29uKSB7XG4gIGlmICh0eXBlb2YgcGVyc29uICE9PSBcInN0cmluZ1wiKSByZXR1cm4gcGVyc29uXG4gIHZhciBuYW1lID0gcGVyc29uLm1hdGNoKC9eKFteXFwoPF0rKS8pXG4gIHZhciB1cmwgPSBwZXJzb24ubWF0Y2goL1xcKChbXlxcKV0rKVxcKS8pXG4gIHZhciBlbWFpbCA9IHBlcnNvbi5tYXRjaCgvPChbXj5dKyk+LylcbiAgdmFyIG9iaiA9IHt9XG4gIGlmIChuYW1lICYmIG5hbWVbMF0udHJpbSgpKSBvYmoubmFtZSA9IG5hbWVbMF0udHJpbSgpXG4gIGlmIChlbWFpbCkgb2JqLmVtYWlsID0gZW1haWxbMV07XG4gIGlmICh1cmwpIG9iai51cmwgPSB1cmxbMV07XG4gIHJldHVybiBvYmpcbn1cblxuZnVuY3Rpb24gYWRkT3B0aW9uYWxEZXBzVG9EZXBzIChkYXRhLCB3YXJuKSB7XG4gIHZhciBvID0gZGF0YS5vcHRpb25hbERlcGVuZGVuY2llc1xuICBpZiAoIW8pIHJldHVybjtcbiAgdmFyIGQgPSBkYXRhLmRlcGVuZGVuY2llcyB8fCB7fVxuICBPYmplY3Qua2V5cyhvKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgZFtrXSA9IG9ba11cbiAgfSlcbiAgZGF0YS5kZXBlbmRlbmNpZXMgPSBkXG59XG5cbmZ1bmN0aW9uIGRlcE9iamVjdGlmeSAoZGVwcywgdHlwZSwgd2Fybikge1xuICBpZiAoIWRlcHMpIHJldHVybiB7fVxuICBpZiAodHlwZW9mIGRlcHMgPT09IFwic3RyaW5nXCIpIHtcbiAgICBkZXBzID0gZGVwcy50cmltKCkuc3BsaXQoL1tcXG5cXHJcXHNcXHQgLF0rLylcbiAgfVxuICBpZiAoIUFycmF5LmlzQXJyYXkoZGVwcykpIHJldHVybiBkZXBzXG4gIHdhcm4oXCJkZXByZWNhdGVkQXJyYXlEZXBlbmRlbmNpZXNcIiwgdHlwZSlcbiAgdmFyIG8gPSB7fVxuICBkZXBzLmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgIHJldHVybiB0eXBlb2YgZCA9PT0gXCJzdHJpbmdcIlxuICB9KS5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICBkID0gZC50cmltKCkuc3BsaXQoLyg6P1tAXFxzPjw9XSkvKVxuICAgIHZhciBkbiA9IGQuc2hpZnQoKVxuICAgIHZhciBkdiA9IGQuam9pbihcIlwiKVxuICAgIGR2ID0gZHYudHJpbSgpXG4gICAgZHYgPSBkdi5yZXBsYWNlKC9eQC8sIFwiXCIpXG4gICAgb1tkbl0gPSBkdlxuICB9KVxuICByZXR1cm4gb1xufVxuXG5mdW5jdGlvbiBvYmplY3RpZnlEZXBzIChkYXRhLCB3YXJuKSB7XG4gIGRlcFR5cGVzLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICBpZiAoIWRhdGFbdHlwZV0pIHJldHVybjtcbiAgICBkYXRhW3R5cGVdID0gZGVwT2JqZWN0aWZ5KGRhdGFbdHlwZV0sIHR5cGUsIHdhcm4pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGJ1Z3NUeXBvcyhidWdzLCB3YXJuKSB7XG4gIGlmICghYnVncykgcmV0dXJuXG4gIE9iamVjdC5rZXlzKGJ1Z3MpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICBpZiAodHlwb3MuYnVnc1trXSkge1xuICAgICAgd2FybihcInR5cG9cIiwgaywgdHlwb3MuYnVnc1trXSwgXCJidWdzXCIpXG4gICAgICBidWdzW3R5cG9zLmJ1Z3Nba11dID0gYnVnc1trXVxuICAgICAgZGVsZXRlIGJ1Z3Nba11cbiAgICB9XG4gIH0pXG59XG4iLCAie1xuICBcInJlcG9zaXRvcmllc1wiOiBcIidyZXBvc2l0b3JpZXMnIChwbHVyYWwpIE5vdCBzdXBwb3J0ZWQuIFBsZWFzZSBwaWNrIG9uZSBhcyB0aGUgJ3JlcG9zaXRvcnknIGZpZWxkXCJcbiAgLFwibWlzc2luZ1JlcG9zaXRvcnlcIjogXCJObyByZXBvc2l0b3J5IGZpZWxkLlwiXG4gICxcImJyb2tlbkdpdFVybFwiOiBcIlByb2JhYmx5IGJyb2tlbiBnaXQgdXJsOiAlc1wiXG4gICxcIm5vbk9iamVjdFNjcmlwdHNcIjogXCJzY3JpcHRzIG11c3QgYmUgYW4gb2JqZWN0XCJcbiAgLFwibm9uU3RyaW5nU2NyaXB0XCI6IFwic2NyaXB0IHZhbHVlcyBtdXN0IGJlIHN0cmluZyBjb21tYW5kc1wiXG4gICxcIm5vbkFycmF5RmlsZXNcIjogXCJJbnZhbGlkICdmaWxlcycgbWVtYmVyXCJcbiAgLFwiaW52YWxpZEZpbGVuYW1lXCI6IFwiSW52YWxpZCBmaWxlbmFtZSBpbiAnZmlsZXMnIGxpc3Q6ICVzXCJcbiAgLFwibm9uQXJyYXlCdW5kbGVEZXBlbmRlbmNpZXNcIjogXCJJbnZhbGlkICdidW5kbGVEZXBlbmRlbmNpZXMnIGxpc3QuIE11c3QgYmUgYXJyYXkgb2YgcGFja2FnZSBuYW1lc1wiXG4gICxcIm5vblN0cmluZ0J1bmRsZURlcGVuZGVuY3lcIjogXCJJbnZhbGlkIGJ1bmRsZURlcGVuZGVuY2llcyBtZW1iZXI6ICVzXCJcbiAgLFwibm9uRGVwZW5kZW5jeUJ1bmRsZURlcGVuZGVuY3lcIjogXCJOb24tZGVwZW5kZW5jeSBpbiBidW5kbGVEZXBlbmRlbmNpZXM6ICVzXCJcbiAgLFwibm9uT2JqZWN0RGVwZW5kZW5jaWVzXCI6IFwiJXMgZmllbGQgbXVzdCBiZSBhbiBvYmplY3RcIlxuICAsXCJub25TdHJpbmdEZXBlbmRlbmN5XCI6IFwiSW52YWxpZCBkZXBlbmRlbmN5OiAlcyAlc1wiXG4gICxcImRlcHJlY2F0ZWRBcnJheURlcGVuZGVuY2llc1wiOiBcInNwZWNpZnlpbmcgJXMgYXMgYXJyYXkgaXMgZGVwcmVjYXRlZFwiXG4gICxcImRlcHJlY2F0ZWRNb2R1bGVzXCI6IFwibW9kdWxlcyBmaWVsZCBpcyBkZXByZWNhdGVkXCJcbiAgLFwibm9uQXJyYXlLZXl3b3Jkc1wiOiBcImtleXdvcmRzIHNob3VsZCBiZSBhbiBhcnJheSBvZiBzdHJpbmdzXCJcbiAgLFwibm9uU3RyaW5nS2V5d29yZFwiOiBcImtleXdvcmRzIHNob3VsZCBiZSBhbiBhcnJheSBvZiBzdHJpbmdzXCJcbiAgLFwiY29uZmxpY3RpbmdOYW1lXCI6IFwiJXMgaXMgYWxzbyB0aGUgbmFtZSBvZiBhIG5vZGUgY29yZSBtb2R1bGUuXCJcbiAgLFwibm9uU3RyaW5nRGVzY3JpcHRpb25cIjogXCInZGVzY3JpcHRpb24nIGZpZWxkIHNob3VsZCBiZSBhIHN0cmluZ1wiXG4gICxcIm1pc3NpbmdEZXNjcmlwdGlvblwiOiBcIk5vIGRlc2NyaXB0aW9uXCJcbiAgLFwibWlzc2luZ1JlYWRtZVwiOiBcIk5vIFJFQURNRSBkYXRhXCJcbiAgLFwibWlzc2luZ0xpY2Vuc2VcIjogXCJObyBsaWNlbnNlIGZpZWxkLlwiXG4gICxcIm5vbkVtYWlsVXJsQnVnc1N0cmluZ1wiOiBcIkJ1ZyBzdHJpbmcgZmllbGQgbXVzdCBiZSB1cmwsIGVtYWlsLCBvciB7ZW1haWwsdXJsfVwiXG4gICxcIm5vblVybEJ1Z3NVcmxGaWVsZFwiOiBcImJ1Z3MudXJsIGZpZWxkIG11c3QgYmUgYSBzdHJpbmcgdXJsLiBEZWxldGVkLlwiXG4gICxcIm5vbkVtYWlsQnVnc0VtYWlsRmllbGRcIjogXCJidWdzLmVtYWlsIGZpZWxkIG11c3QgYmUgYSBzdHJpbmcgZW1haWwuIERlbGV0ZWQuXCJcbiAgLFwiZW1wdHlOb3JtYWxpemVkQnVnc1wiOiBcIk5vcm1hbGl6ZWQgdmFsdWUgb2YgYnVncyBmaWVsZCBpcyBhbiBlbXB0eSBvYmplY3QuIERlbGV0ZWQuXCJcbiAgLFwibm9uVXJsSG9tZXBhZ2VcIjogXCJob21lcGFnZSBmaWVsZCBtdXN0IGJlIGEgc3RyaW5nIHVybC4gRGVsZXRlZC5cIlxuICAsXCJpbnZhbGlkTGljZW5zZVwiOiBcImxpY2Vuc2Ugc2hvdWxkIGJlIGEgdmFsaWQgU1BEWCBsaWNlbnNlIGV4cHJlc3Npb25cIlxuICAsXCJ0eXBvXCI6IFwiJXMgc2hvdWxkIHByb2JhYmx5IGJlICVzLlwiXG59XG4iLCAidmFyIHV0aWwgPSByZXF1aXJlKFwidXRpbFwiKVxudmFyIG1lc3NhZ2VzID0gcmVxdWlyZShcIi4vd2FybmluZ19tZXNzYWdlcy5qc29uXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKVxuICB2YXIgd2FybmluZ05hbWUgPSBhcmdzLnNoaWZ0KClcbiAgaWYgKHdhcm5pbmdOYW1lID09IFwidHlwb1wiKSB7XG4gICAgcmV0dXJuIG1ha2VUeXBvV2FybmluZy5hcHBseShudWxsLGFyZ3MpXG4gIH1cbiAgZWxzZSB7XG4gICAgdmFyIG1zZ1RlbXBsYXRlID0gbWVzc2FnZXNbd2FybmluZ05hbWVdID8gbWVzc2FnZXNbd2FybmluZ05hbWVdIDogd2FybmluZ05hbWUgKyBcIjogJyVzJ1wiXG4gICAgYXJncy51bnNoaWZ0KG1zZ1RlbXBsYXRlKVxuICAgIHJldHVybiB1dGlsLmZvcm1hdC5hcHBseShudWxsLCBhcmdzKVxuICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VUeXBvV2FybmluZyAocHJvdmlkZWROYW1lLCBwcm9iYWJsZU5hbWUsIGZpZWxkKSB7XG4gIGlmIChmaWVsZCkge1xuICAgIHByb3ZpZGVkTmFtZSA9IGZpZWxkICsgXCJbJ1wiICsgcHJvdmlkZWROYW1lICsgXCInXVwiXG4gICAgcHJvYmFibGVOYW1lID0gZmllbGQgKyBcIlsnXCIgKyBwcm9iYWJsZU5hbWUgKyBcIiddXCJcbiAgfVxuICByZXR1cm4gdXRpbC5mb3JtYXQobWVzc2FnZXMudHlwbywgcHJvdmlkZWROYW1lLCBwcm9iYWJsZU5hbWUpXG59XG4iLCAibW9kdWxlLmV4cG9ydHMgPSBub3JtYWxpemVcblxudmFyIGZpeGVyID0gcmVxdWlyZShcIi4vZml4ZXJcIilcbm5vcm1hbGl6ZS5maXhlciA9IGZpeGVyXG5cbnZhciBtYWtlV2FybmluZyA9IHJlcXVpcmUoXCIuL21ha2Vfd2FybmluZ1wiKVxuXG52YXIgZmllbGRzVG9GaXggPSBbJ25hbWUnLCd2ZXJzaW9uJywnZGVzY3JpcHRpb24nLCdyZXBvc2l0b3J5JywnbW9kdWxlcycsJ3NjcmlwdHMnXG4gICAgICAgICAgICAgICAgICAsJ2ZpbGVzJywnYmluJywnbWFuJywnYnVncycsJ2tleXdvcmRzJywncmVhZG1lJywnaG9tZXBhZ2UnLCdsaWNlbnNlJ11cbnZhciBvdGhlclRoaW5nc1RvRml4ID0gWydkZXBlbmRlbmNpZXMnLCdwZW9wbGUnLCAndHlwb3MnXVxuXG52YXIgdGhpbmdzVG9GaXggPSBmaWVsZHNUb0ZpeC5tYXAoZnVuY3Rpb24oZmllbGROYW1lKSB7XG4gIHJldHVybiB1Y0ZpcnN0KGZpZWxkTmFtZSkgKyBcIkZpZWxkXCJcbn0pXG4vLyB0d28gd2F5cyB0byBkbyB0aGlzIGluIENvZmZlZVNjcmlwdCBvbiBvbmx5IG9uZSBsaW5lLCBzdWItNzAgY2hhcnM6XG4vLyB0aGluZ3NUb0ZpeCA9IGZpZWxkc1RvRml4Lm1hcCAobmFtZSkgLT4gdWNGaXJzdChuYW1lKSArIFwiRmllbGRcIlxuLy8gdGhpbmdzVG9GaXggPSAodWNGaXJzdChuYW1lKSArIFwiRmllbGRcIiBmb3IgbmFtZSBpbiBmaWVsZHNUb0ZpeClcbnRoaW5nc1RvRml4ID0gdGhpbmdzVG9GaXguY29uY2F0KG90aGVyVGhpbmdzVG9GaXgpXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZSAoZGF0YSwgd2Fybiwgc3RyaWN0KSB7XG4gIGlmKHdhcm4gPT09IHRydWUpIHdhcm4gPSBudWxsLCBzdHJpY3QgPSB0cnVlXG4gIGlmKCFzdHJpY3QpIHN0cmljdCA9IGZhbHNlXG4gIGlmKCF3YXJuIHx8IGRhdGEucHJpdmF0ZSkgd2FybiA9IGZ1bmN0aW9uKG1zZykgeyAvKiBub29wICovIH1cblxuICBpZiAoZGF0YS5zY3JpcHRzICYmXG4gICAgICBkYXRhLnNjcmlwdHMuaW5zdGFsbCA9PT0gXCJub2RlLWd5cCByZWJ1aWxkXCIgJiZcbiAgICAgICFkYXRhLnNjcmlwdHMucHJlaW5zdGFsbCkge1xuICAgIGRhdGEuZ3lwZmlsZSA9IHRydWVcbiAgfVxuICBmaXhlci53YXJuID0gZnVuY3Rpb24oKSB7IHdhcm4obWFrZVdhcm5pbmcuYXBwbHkobnVsbCwgYXJndW1lbnRzKSkgfVxuICB0aGluZ3NUb0ZpeC5mb3JFYWNoKGZ1bmN0aW9uKHRoaW5nTmFtZSkge1xuICAgIGZpeGVyW1wiZml4XCIgKyB1Y0ZpcnN0KHRoaW5nTmFtZSldKGRhdGEsIHN0cmljdClcbiAgfSlcbiAgZGF0YS5faWQgPSBkYXRhLm5hbWUgKyBcIkBcIiArIGRhdGEudmVyc2lvblxufVxuXG5mdW5jdGlvbiB1Y0ZpcnN0IChzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbn1cbiIsICIndXNlIHN0cmljdCc7XG5jb25zdCB7cHJvbWlzaWZ5fSA9IHJlcXVpcmUoJ3V0aWwnKTtcbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5jb25zdCBwYXJzZUpzb24gPSByZXF1aXJlKCdwYXJzZS1qc29uJyk7XG5cbmNvbnN0IHJlYWRGaWxlQXN5bmMgPSBwcm9taXNpZnkoZnMucmVhZEZpbGUpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFzeW5jIG9wdGlvbnMgPT4ge1xuXHRvcHRpb25zID0ge1xuXHRcdGN3ZDogcHJvY2Vzcy5jd2QoKSxcblx0XHRub3JtYWxpemU6IHRydWUsXG5cdFx0Li4ub3B0aW9uc1xuXHR9O1xuXG5cdGNvbnN0IGZpbGVQYXRoID0gcGF0aC5yZXNvbHZlKG9wdGlvbnMuY3dkLCAncGFja2FnZS5qc29uJyk7XG5cdGNvbnN0IGpzb24gPSBwYXJzZUpzb24oYXdhaXQgcmVhZEZpbGVBc3luYyhmaWxlUGF0aCwgJ3V0ZjgnKSk7XG5cblx0aWYgKG9wdGlvbnMubm9ybWFsaXplKSB7XG5cdFx0cmVxdWlyZSgnbm9ybWFsaXplLXBhY2thZ2UtZGF0YScpKGpzb24pO1xuXHR9XG5cblx0cmV0dXJuIGpzb247XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5zeW5jID0gb3B0aW9ucyA9PiB7XG5cdG9wdGlvbnMgPSB7XG5cdFx0Y3dkOiBwcm9jZXNzLmN3ZCgpLFxuXHRcdG5vcm1hbGl6ZTogdHJ1ZSxcblx0XHQuLi5vcHRpb25zXG5cdH07XG5cblx0Y29uc3QgZmlsZVBhdGggPSBwYXRoLnJlc29sdmUob3B0aW9ucy5jd2QsICdwYWNrYWdlLmpzb24nKTtcblx0Y29uc3QganNvbiA9IHBhcnNlSnNvbihmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgsICd1dGY4JykpO1xuXG5cdGlmIChvcHRpb25zLm5vcm1hbGl6ZSkge1xuXHRcdHJlcXVpcmUoJ25vcm1hbGl6ZS1wYWNrYWdlLWRhdGEnKShqc29uKTtcblx0fVxuXG5cdHJldHVybiBqc29uO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3QgZmluZFVwID0gcmVxdWlyZSgnZmluZC11cCcpO1xuY29uc3QgcmVhZFBrZyA9IHJlcXVpcmUoJ3JlYWQtcGtnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXN5bmMgb3B0aW9ucyA9PiB7XG5cdGNvbnN0IGZpbGVQYXRoID0gYXdhaXQgZmluZFVwKCdwYWNrYWdlLmpzb24nLCBvcHRpb25zKTtcblxuXHRpZiAoIWZpbGVQYXRoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRwYWNrYWdlSnNvbjogYXdhaXQgcmVhZFBrZyh7Li4ub3B0aW9ucywgY3dkOiBwYXRoLmRpcm5hbWUoZmlsZVBhdGgpfSksXG5cdFx0cGF0aDogZmlsZVBhdGhcblx0fTtcbn07XG5cbm1vZHVsZS5leHBvcnRzLnN5bmMgPSBvcHRpb25zID0+IHtcblx0Y29uc3QgZmlsZVBhdGggPSBmaW5kVXAuc3luYygncGFja2FnZS5qc29uJywgb3B0aW9ucyk7XG5cblx0aWYgKCFmaWxlUGF0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0cGFja2FnZUpzb246IHJlYWRQa2cuc3luYyh7Li4ub3B0aW9ucywgY3dkOiBwYXRoLmRpcm5hbWUoZmlsZVBhdGgpfSksXG5cdFx0cGF0aDogZmlsZVBhdGhcblx0fTtcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyb3NzTGF1bmNoQ29tbWFuZCA9IGV4cG9ydHMuY2FsbGJhY2tMYXVuY2hDb21tYW5kID0gdm9pZCAwO1xuY29uc3QgYXBpXzEgPSByZXF1aXJlKFwiQHJheWNhc3QvYXBpXCIpO1xuY29uc3QgcmVhZF9wa2dfdXBfMSA9IHJlcXVpcmUoXCJyZWFkLXBrZy11cFwiKTtcbmNvbnN0IGNhbGxiYWNrTGF1bmNoQ29tbWFuZCA9IGFzeW5jIChvcHRpb25zLCByZXN1bHQpID0+ICgwLCBhcGlfMS5sYXVuY2hDb21tYW5kKSh7XG4gICAgLi4ub3B0aW9ucyxcbiAgICBjb250ZXh0OiB7XG4gICAgICAgIC4uLm9wdGlvbnMuY29udGV4dCxcbiAgICAgICAgLi4ucmVzdWx0LFxuICAgIH0sXG59KTtcbmV4cG9ydHMuY2FsbGJhY2tMYXVuY2hDb21tYW5kID0gY2FsbGJhY2tMYXVuY2hDb21tYW5kO1xuY29uc3QgY3Jvc3NMYXVuY2hDb21tYW5kID0gYXN5bmMgKG9wdGlvbnMsIGNhbGxiYWNrTGF1bmNoT3B0aW9ucykgPT4ge1xuICAgIGlmIChjYWxsYmFja0xhdW5jaE9wdGlvbnMgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiAoMCwgYXBpXzEubGF1bmNoQ29tbWFuZCkob3B0aW9ucyk7XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1tb2R1bGUsIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXNzaWdubWVudFxuICAgIGNvbnN0IHBhY2sgPSAoMCwgcmVhZF9wa2dfdXBfMS5zeW5jKSh7IGN3ZDogX19kaXJuYW1lLCBub3JtYWxpemU6IGZhbHNlIH0pO1xuICAgIGNvbnN0IG93bmVyT3JBdXRob3JOYW1lID0gXG4gICAgLy8gVGhlIGBvd25lck9yQXV0aG9yTmFtZWAgd2FzIGludHJvZHVjZWQgaW4gQHJheWNhc3QvYXBpQDEuNzguMC4gV2UgdXNlIGEgZmFsbGJhY2sgdG8gc3VwcG9ydCBvbGRlciB2ZXJzaW9ucy5cbiAgICBhcGlfMS5lbnZpcm9ubWVudC5vd25lck9yQXV0aG9yTmFtZSA/P1xuICAgICAgICAocGFjaz8ucGFja2FnZUpzb24/Lm93bmVyID8/IHBhY2s/LnBhY2thZ2VKc29uPy5hdXRob3IpO1xuICAgIGlmICgnb3duZXJPckF1dGhvck5hbWUnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0SGFuZGxlID0gYCR7b3B0aW9ucy5vd25lck9yQXV0aG9yTmFtZX0vJHtvcHRpb25zLmV4dGVuc2lvbk5hbWV9YDtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtY2FsbFxuICAgICAgICBpZiAoIXBhY2s/LnBhY2thZ2VKc29uPy5jcm9zc0V4dGVuc2lvbnM/LmluY2x1ZGVzKHRhcmdldEhhbmRsZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGFyZ2V0IGV4dGVuc2lvbiAnJHt0YXJnZXRIYW5kbGV9JyBzaG91bGQgYmUgbGlzdGVkIGluICdjcm9zc0V4dGVuc2lvbnMnIG9mIHBhY2thZ2UuanNvbi5gO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKDAsIGFwaV8xLmxhdW5jaENvbW1hbmQpKHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgLi4ub3B0aW9ucy5jb250ZXh0LFxuICAgICAgICAgICAgY2FsbGJhY2tMYXVuY2hPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogYXBpXzEuZW52aXJvbm1lbnQuY29tbWFuZE5hbWUsXG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uTmFtZTogYXBpXzEuZW52aXJvbm1lbnQuZXh0ZW5zaW9uTmFtZSxcbiAgICAgICAgICAgICAgICBvd25lck9yQXV0aG9yTmFtZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBhcGlfMS5MYXVuY2hUeXBlLlVzZXJJbml0aWF0ZWQsXG4gICAgICAgICAgICAgICAgLi4uY2FsbGJhY2tMYXVuY2hPcHRpb25zLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9KTtcbn07XG5leHBvcnRzLmNyb3NzTGF1bmNoQ29tbWFuZCA9IGNyb3NzTGF1bmNoQ29tbWFuZDtcbiIsICJpbXBvcnQgeyBMYXVuY2hQcm9wcywgTGF1bmNoVHlwZSwgbGF1bmNoQ29tbWFuZCB9IGZyb20gXCJAcmF5Y2FzdC9hcGlcIjtcbmltcG9ydCB7IGNyb3NzTGF1bmNoQ29tbWFuZCB9IGZyb20gXCJyYXljYXN0LWNyb3NzLWV4dGVuc2lvblwiO1xuXG50eXBlIE9DUlJlc3VsdCA9IHtcbiAgdGV4dD86IHN0cmluZyB8IG51bGw7XG4gIGVycm9yPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gQ29tbWFuZCh7IGxhdW5jaENvbnRleHQgPSB7fSB9OiBMYXVuY2hQcm9wczx7IGxhdW5jaENvbnRleHQ/OiBPQ1JSZXN1bHQgfT4pIHtcbiAgY29uc3QgeyB0ZXh0LCBlcnJvciB9ID0gbGF1bmNoQ29udGV4dDtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodHlwZW9mIHRleHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICBjb25zdCBxdWVyeSA9IHRleHQudHJpbSgpO1xuICAgIGlmICghcXVlcnkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhd2FpdCBsYXVuY2hDb21tYW5kKHtcbiAgICAgIG5hbWU6IFwidHJhbnNsYXRlXCIsXG4gICAgICB0eXBlOiBMYXVuY2hUeXBlLlVzZXJJbml0aWF0ZWQsXG4gICAgICBjb250ZXh0OiB7IHF1ZXJ5IH0sXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHRleHQgPT09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBhd2FpdCBjcm9zc0xhdW5jaENvbW1hbmQoXG4gICAge1xuICAgICAgbmFtZTogXCJyZWNvZ25pemUtdGV4dFwiLFxuICAgICAgdHlwZTogTGF1bmNoVHlwZS5CYWNrZ3JvdW5kLFxuICAgICAgZXh0ZW5zaW9uTmFtZTogXCJzY3JlZW5vY3JcIixcbiAgICAgIG93bmVyT3JBdXRob3JOYW1lOiBcImh1emVmNDRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwidHJhbnNsYXRlXCIsXG4gICAgICB0eXBlOiBMYXVuY2hUeXBlLlVzZXJJbml0aWF0ZWQsXG4gICAgfSxcbiAgKS5jYXRjaCgoKSA9PiB7fSk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBLGdDQUFBQSxVQUFBQyxTQUFBO0FBQUE7QUFFQSxRQUFNLE9BQU8sQ0FBQyxPQUFPLGVBQWUsSUFBSSxRQUFRLGFBQVc7QUFDMUQsY0FBUSxHQUFHLEdBQUcsVUFBVSxDQUFDO0FBQUEsSUFDMUIsQ0FBQztBQUVELElBQUFBLFFBQU8sVUFBVTtBQUVqQixJQUFBQSxRQUFPLFFBQVEsVUFBVTtBQUFBO0FBQUE7OztBQ1J6QjtBQUFBLDJEQUFBQyxVQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFNLE9BQU87QUFFYixRQUFNLFNBQVMsaUJBQWU7QUFDN0IsVUFBSSxHQUFHLE9BQU8sVUFBVSxXQUFXLEtBQUssZ0JBQWdCLGFBQWEsY0FBYyxJQUFJO0FBQ3RGLGVBQU8sUUFBUSxPQUFPLElBQUksVUFBVSxxREFBcUQsQ0FBQztBQUFBLE1BQzNGO0FBRUEsWUFBTSxRQUFRLENBQUM7QUFDZixVQUFJLGNBQWM7QUFFbEIsWUFBTSxPQUFPLE1BQU07QUFDbEI7QUFFQSxZQUFJLE1BQU0sU0FBUyxHQUFHO0FBQ3JCLGdCQUFNLE1BQU0sRUFBRTtBQUFBLFFBQ2Y7QUFBQSxNQUNEO0FBRUEsWUFBTSxNQUFNLENBQUMsSUFBSSxZQUFZLFNBQVM7QUFDckM7QUFFQSxjQUFNLFNBQVMsS0FBSyxJQUFJLEdBQUcsSUFBSTtBQUUvQixnQkFBUSxNQUFNO0FBRWQsZUFBTyxLQUFLLE1BQU0sSUFBSTtBQUFBLE1BQ3ZCO0FBRUEsWUFBTSxVQUFVLENBQUMsSUFBSSxZQUFZLFNBQVM7QUFDekMsWUFBSSxjQUFjLGFBQWE7QUFDOUIsY0FBSSxJQUFJLFNBQVMsR0FBRyxJQUFJO0FBQUEs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QUcsSUFBRyxJQUFHLElBQUcsSUFBRyxHQUFFLElBQUcsSUFBRyxJQUFHLEdBQUUsSUFBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUcsS0FBSSxJQUFHLElBQUcsR0FBRSxJQUFHLEdBQUUsSUFBRyxHQUFFLElBQUcsSUFBRyxJQUFHLEdBQUUsSUFBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRyxHQUFFLElBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUcsSUFBRyxLQUFJLElBQUcsSUFBRyxJQUFHLEdBQUUsSUFBRyxHQUFFLEdBQUUsSUFBRyxHQUFFLEdBQUUsSUFBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsR0FBRSxHQUFFLElBQUcsSUFBRyxJQUFHLElBQUcsR0FBRSxJQUFHLElBQUcsSUFBRyxHQUFFLEdBQUUsSUFBRyxHQUFFLElBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxJQUFHLElBQUcsSUFBRyxHQUFFLElBQUcsSUFBRyxHQUFFLEdBQUUsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsS0FBSSxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsS0FBSSxJQUFHLEdBQUUsR0FBRSxJQUFHLEdBQUUsSUFBRyxJQUFHLElBQUcsR0FBRSxHQUFFLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsR0FBRSxHQUFFLEdBQUUsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUcsR0FBRSxHQUFFLElBQUcsSUFBRyxJQUFHLEdBQUUsSUFBRyxHQUFFLEdBQUUsR0FBRSxJQUFHLElBQUcsR0FBRSxJQUFHLElBQUcsR0FBRSxJQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUcsR0FBRSxHQUFFLEdBQUUsSUFBRyxJQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRyxHQUFFLElBQUcsR0FBRSxJQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUcsR0FBRSxHQUFFLElBQUcsR0FBRSxHQUFFLEdBQUUsSUFBRyxJQUFHLElBQUcsR0FBRSxJQUFHLEdBQUUsSUFBRyxJQUFHLElBQUcsR0FBRSxHQUFFLEdBQUUsS0FBSSxJQUFHLElBQUcsR0FBRSxJQUFHLElBQUcsSUFBRyxHQUFFLElBQUcsSUFBRyxJQUFHLEdBQUUsSUFBRyxJQUFHLElBQUcsR0FBRSxLQUFJLElBQUcsS0FBSSxJQUFHLElBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUcsSUFBRyxHQUFFLEdBQUUsR0FBRSxJQUFHLEdBQUUsR0FBRSxJQUFHLElBQUcsR0FBRSxHQUFFLEdBQUUsSUFBRyxHQUFFLElBQUcsSUFBRyxHQUFFLEdBQUUsSUFBRyxHQUFFLElBQUcsSUFBRyxJQUFHLEdBQUUsSUFBRyxJQUFHLEtBQUksSUFBRyxJQUFHLEdBQUUsR0FBRSxJQUFHLElBQUcsR0FBRSxJQUFHLElBQUcsS0FBSSxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUcsSUFBRyxHQUFFLElBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxJQUFHLElBQUcsR0FBRSxJQUFHLElBQUcsS0FBSSxJQUFHLElBQUcsR0FBRSxHQUFFLElBQUcsR0FBRSxJQUFHLEtBQUksR0FBRSxJQUFHLEtBQUksS0FBSSxLQUFJLElBQUcsS0FBSSxNQUFLLElBQUcsSUFBRyxNQUFLLElBQUcsR0FBRSxJQUFHLE1BQUssR0FBRSxLQUFJLE1BQUssSUFBRyxNQUFLLEtBQUksR0FBRSxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsR0FBRSxJQUFHLElBQUcsR0FBRSxJQUFHLEtBQUksSUFBRyxLQUFJLElBQUcsSUFBRyxJQUFHLEdBQUUsSUFBRyxJQUFHLElBQUcsR0FBRSxHQUFFLElBQUcsSUFBRyxJQUFHLEdBQUUsR0FBRSxHQUFFLElBQUcsR0FBRSxJQUFHLE1BQUssSUFBRyxJQUFHLElBQUcsS0FBSSxNQUFLLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEtBQUksSUFBRyxHQUFFLElBQUcsR0FBRSxHQUFFLEdBQUUsSUFBRyxHQUFFLEdBQUUsS0FBSSxNQUFLLEtBQUksR0FBRSxJQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsTUFBSyxJQUFHLEdBQUUsSUFBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxJQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxJQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxLQUFJLEdBQUUsSUFBRyxHQUFFLElBQUcsR0FBRSxJQUFHLEdBQUUsSUFBRyxHQUFFLElBQUcsR0FBRSxJQUFHLEdBQUUsSUFBRyxHQUFFLElBQUcsR0FBRSxJQUFHLEdBQUUsSUFBRyxHQUFFLEdBQUUsTUFBSyxJQUFHLEdBQUUsR0FBRSxLQUFJLElBQUcsS0FBSSxJQUFHLElBQUcsR0FBRSxJQUFHLEdBQUUsS0FBSSxJQUFHLElBQUcsSUFBRyxLQUFJLElBQUcsS0FBSSxJQUFHLEdBQUUsR0FBRSxLQUFJLElBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUcsR0FBRSxLQUFJLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUcsR0FBRSxLQUFJLElBQUcsSUFBRyxHQUFFLEdBQUUsTUFBSyxHQUFFLEdBQUUsSUFBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUcsTUFBSyxPQUFNLElBQUcsTUFBSyxHQUFFLE1BQUssR0FBRSxNQUFLLElBQUcsS0FBSSxNQUFLLEtBQUksTUFBSyxNQUFLLEdBQUUsSUFBSTtBQUVobkQsUUFBTUMsd0JBQXdCLENBQUMsS0FBSSxHQUFFLEtBQUksR0FBRSxLQUFJLEdBQUUsS0FBSSxHQUFFLE1BQUssR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUcsR0FBRSxHQUFFLEdBQUUsS0FBSSxHQUFFLEtBQUksR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUcsR0FBRSxLQUFJLEdBQUUsSUFBRyxHQUFFLElBQUcsSUFBRyxJQUFHLEdBQUUsS0FBSSxHQUFFLElBQUcsSUFBRyxJQUFHLElBQUcsR0FBRSxHQUFFLElBQUcsR0FBRSxJQUFHLElBQUcsR0FBRSxHQUFFLElBQUcsR0FBRSxHQUFFLEdBQUUsSUFBRyxJQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRyxHQUFFLElBQUcsR0FBRSxJQUFHLElBQUcsR0FBRSxHQUFFLEdBQUUsSUFBRyxJQUFHLElBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxLQUFJLElBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxJQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRyxHQUFFLElBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUcsR0FBRSxJQUFHLElBQUcsSUFBRyxHQUFFLEdBQUUsR0FBRSxJQUFHLElBQUcsSUFBRyxHQUFFLEtBQUksR0FBRSxHQUFFLEdBQUUsSUFBRyxHQUFFLElBQUcsSUFBRyxJQUFHLEdBQUUsSUFBRyxJQUFHLEdBQUUsR0FBRSxHQUFFLElBQUcsSUFBRyxJQUFHLEdBQUUsR0FBRSxLQUFJLElBQUcsS0FBSSxHQUFFLElBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRyxHQUFFLEtBQUksR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUcsR0FBRSxJQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxJQUFHLElBQUcsSUFBRyxJQUFHLEtBQUksR0FBRSxLQUFJLEdBQUUsSUFBRyxHQUFFLEdBQUUsR0FBRSxJQUFHLEdBQUUsSUFBRyxJQUFHLEdBQUUsSUFBRyxLQUFJLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxJQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRyxHQUFFLEtBQUksR0FBRSxJQUFHLEdBQUUsR0FBRSxHQUFFLElBQUcsR0FBRSxHQUFFLEdBQUUsSUFBRyxJQUFHLE1BQUssR0FBRSxHQUFFLElBQUcsT0FBTSxJQUFHLE1BQUssR0FBRSxJQUFHLEdBQUUsSUFBRyxHQUFFLElBQUcsR0FBRSxJQUFHLEdBQUUsS0FBSSxHQUFFLEtBQUksR0FBRSxHQUFFLElBQUcsR0FBRSxHQUFFLElBQUcsR0FBRSxJQUFHLEdBQUUsT0FBTSxHQUFFLE1BQUssR0FBRSxLQUFJLElBQUcsR0FBRSxJQUFHLEtBQUksR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxJQUFHLEdBQUUsS0FBSSxHQUFFLE1BQUssSUFBRyxLQUFJLElBQUcsR0FBRSxJQUFHLEdBQUUsR0FBRSxJQUFHLEdBQUUsSUFBRyxHQUFFLEdBQUUsSUFBRyxNQUFLLEdBQUUsR0FBRSxJQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEtB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QUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUE7QUFBQTs7O0FDeHJCQTtBQUFBLGtEQUFBQyxVQUFBQyxTQUFBO0FBQUEsSUFBQUEsUUFBQTtBQUFBLE1BQ0M7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBO0FBQUE7OztBQzNCQTtBQUFBLDRDQUFBQyxVQUFB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LCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXJyb3JFeCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIkxpbmVzQW5kQ29sdW1ucyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm5vbkFTQ0lJaWRlbnRpZmllclN0YXJ0Q2hhcnMiLCAibm9uQVNDSUlpZGVudGlmaWVyQ2hhcnMiLCAibm9uQVNDSUlpZGVudGlmaWVyU3RhcnQiLCAiUmVnRXhwIiwgIm5vbkFTQ0lJaWRlbnRpZmllciIsICJhc3RyYWxJZGVudGlmaWVyU3RhcnRDb2RlcyIsICJhc3RyYWxJZGVudGlmaWVyQ29kZXMiLCAiaXNJbkFzdHJhbFNldCIsICJjb2RlIiwgInNldCIsICJwb3MiLCAiaSIsICJsZW5ndGgiLCAiaXNJZGVudGlmaWVyU3RhcnQiLCAidGVzdCIsICJTdHJpbmciLCAiZnJvbUNoYXJDb2RlIiwgImlzSWRlbnRpZmllckNoYXIiLCAiaXNJZGVudGlmaWVyTmFtZSIsICJuYW1lIiwgImlzRmlyc3QiLCAiY3AiLCAiY2hhckNvZGVBdCIsICJ0cmFpbCIsICJyZXNlcnZlZFdvcmRzIiwgImtleXdvcmQiLCAic3RyaWN0IiwgInN0cmljdEJpbmQiLCAia2V5d29yZHMiLCAiU2V0IiwgInJlc2VydmVkV29yZHNTdHJpY3RTZXQiLCAicmVzZXJ2ZWRXb3Jkc1N0cmljdEJpbmRTZXQiLCAiaXNSZXNlcnZlZFdvcmQiLCAid29yZCIsICJpbk1vZHVsZSIsICJpc1N0cmljdFJlc2VydmVkV29yZCIsICJoYXMiLCAiaXNTdHJpY3RCaW5kT25seVJlc2VydmVkV29yZCIsICJpc1N0cmljdEJpbmRSZXNlcnZlZFdvcmQiLCAiaXNLZXl3b3JkIiwgIl9pZGVudGlmaWVyIiwgInJlcXVpcmUiLCAiX2tleXdvcmQiLCAiaXNDb2xvclN1cHBvcnRlZCIsICJwcm9jZXNzIiwgImVudiIsICJGT1JDRV9DT0xPUiIsICJwaWNvY29sb3JzIiwgImNvbXBvc2UiLCAiZiIsICJnIiwgInYiLCAiYnVpbGREZWZzIiwgImNvbG9ycyIsICJrZXl3b3JkIiwgImN5YW4iLCAiY2FwaXRhbGl6ZWQiLCAieWVsbG93IiwgImpzeElkZW50aWZpZXIiLCAicHVuY3R1YXRvciIsICJudW1iZXIiLCAibWFnZW50YSIsICJzdHJpbmciLCAiZ3JlZW4iLCAicmVnZXgiLCAiY29tbWVudCIsICJncmF5IiwgImludmFsaWQiLCAid2hpdGUiLCAiYmdSZWQiLCAiYm9sZCIsICJndXR0ZXIiLCAibWFya2VyIiwgInJlZCIsICJtZXNzYWdlIiwgInJlc2V0IiwgImRlZnNPbiIsICJjcmVhdGVDb2xvcnMiLCAiZGVmc09mZiIsICJnZXREZWZzIiwgImVuYWJsZWQiLCAic29tZXRpbWVzS2V5d29yZHMiLCAiU2V0IiwgIk5FV0xJTkUiLCAiQlJBQ0tFVCIsICJ0b2tlbml6ZSIsICJKU1hfVEFHIiwgImdldFRva2VuVHlwZSIsICJ0b2tlbiIsICJvZmZzZXQiLCAidGV4dCIsICJ0eXBlIiwgInRva2VuVmFsdWUiLCAidmFsdWUiLCAiaXNLZXl3b3JkIiwgImlzU3RyaWN0UmVzZXJ2ZWRXb3JkIiwgImhhcyIsICJ0ZXN0IiwgInNsaWNlIiwgImZpcnN0Q2hhciIsICJTdHJpbmciLCAiZnJvbUNvZGVQb2ludCIsICJjb2RlUG9pbnRBdCIsICJ0b0xvd2VyQ2FzZSIsICJtYXRjaCIsICJqc1Rva2VucyIsICJkZWZhdWx0IiwgImV4ZWMiLCAibWF0Y2hUb1Rva2VuIiwgImluZGV4IiwgImhpZ2hsaWdodCIsICJkZWZzIiwgImhpZ2hsaWdodGVkIiwgInNwbGl0IiwgIm1hcCIsICJzdHIiLCAiam9pbiIsICJkZXByZWNhdGlvbldhcm5pbmdTaG93biIsICJnZXRNYXJrZXJMaW5lcyIsICJsb2MiLCAic291cmNlIiwgIm9wdHMiLCAic3RhcnRMaW5lQmFzZVplcm8iLCAic3RhcnRMb2MiLCAiT2JqZWN0IiwgImFzc2lnbiIsICJjb2x1bW4iLCAibGluZSIsICJzdGFydCIsICJlbmRMb2MiLCAiZW5kIiwgImxpbmVzQWJvdmUiLCAibGluZXNCZWxvdyIsICJzdGFydExpbmUiLCAic3RhcnRDb2x1bW4iLCAiZW5kTGluZSIsICJlbmRDb2x1bW4iLCAiTWF0aCIsICJtYXgiLCAibWluIiwgImxlbmd0aCIsICJsaW5lRGlmZiIsICJtYXJrZXJMaW5lcyIsICJpIiwgImxpbmVOdW1iZXIiLCAic291cmNlTGVuZ3RoIiwgImNvZGVGcmFtZUNvbHVtbnMiLCAicmF3TGluZXMiLCAic2hvdWxkSGlnaGxpZ2h0IiwgImZvcmNlQ29sb3IiLCAiaGlnaGxpZ2h0Q29kZSIsICJsaW5lcyIsICJoYXNDb2x1bW5zIiwgIm51bWJlck1heFdpZHRoIiwgImhpZ2hsaWdodGVkTGluZXMiLCAiZnJhbWUiLCAicGFkZGVkTnVtYmVyIiwgImhhc01hcmtlciIsICJsYXN0TWFya2VyTGluZSIsICJtYXJrZXJMaW5lIiwgIkFycmF5IiwgImlzQXJyYXkiLCAibWFya2VyU3BhY2luZyIsICJyZXBsYWNlIiwgIm51bWJlck9mTWFya2VycyIsICJyZXBlYXQiLCAiY29sTnVtYmVyIiwgImVtaXRXYXJuaW5nIiwgImRlcHJlY2F0aW9uRXJyb3IiLCAiRXJyb3IiLCAibmFtZSIsICJjb25zb2xlIiwgIndhcm4iLCAibG9jYXRpb24iLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiaSIsICJyYW5nZSIsICJjb21wIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIm5vZGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAidXJsIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgInN0YWNrIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImNvbmNhdHR5IiwgInNsaWN5IiwgIkVtcHR5IiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImVyciIsICJiYXNlZGlyIiwgInBrZyIsICJ4IiwgImNhbGxiYWNrIiwgImNiIiwgImV4dHMiLCAiaXNkaXIiLCAib25maWxlIiwgInJlcXVpcmVfY29yZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJyZXF1aXJlX2NvcmUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAieCIsICJtIiwgIm4iLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiYmQiLCAidXJsIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiY3Jvc3NMYXVuY2hDb21tYW5kIl0KfQo=
