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

// node_modules/sql.js/dist/sql-wasm.js
var require_sql_wasm = __commonJS({
  "node_modules/sql.js/dist/sql-wasm.js"(exports2, module2) {
    var initSqlJsPromise = void 0;
    var initSqlJs2 = function(moduleConfig) {
      if (initSqlJsPromise) {
        return initSqlJsPromise;
      }
      initSqlJsPromise = new Promise(function(resolveModule, reject) {
        var Module = typeof moduleConfig !== "undefined" ? moduleConfig : {};
        var originalOnAbortFunction = Module["onAbort"];
        Module["onAbort"] = function(errorThatCausedAbort) {
          reject(new Error(errorThatCausedAbort));
          if (originalOnAbortFunction) {
            originalOnAbortFunction(errorThatCausedAbort);
          }
        };
        Module["postRun"] = Module["postRun"] || [];
        Module["postRun"].push(function() {
          resolveModule(Module);
        });
        module2 = void 0;
        var f;
        f ||= typeof Module != "undefined" ? Module : {};
        var aa = "object" == typeof window, ba = "undefined" != typeof WorkerGlobalScope, ca = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node && "renderer" != process.type;
        "use strict";
        f.onRuntimeInitialized = function() {
          function a(g, l) {
            switch (typeof l) {
              case "boolean":
                dc(g, l ? 1 : 0);
                break;
              case "number":
                ec(g, l);
                break;
              case "string":
                fc(g, l, -1, -1);
                break;
              case "object":
                if (null === l) lb(g);
                else if (null != l.length) {
                  var n = da(l, ea);
                  gc(g, n, l.length, -1);
                  fa(n);
                } else va(g, "Wrong API use : tried to return a value of an unknown type (" + l + ").", -1);
                break;
              default:
                lb(g);
            }
          }
          function b(g, l) {
            for (var n = [], r = 0; r < g; r += 1) {
              var t = m(l + 4 * r, "i32"), y = hc(t);
              if (1 === y || 2 === y) t = ic(t);
              else if (3 === y) t = jc(t);
              else if (4 === y) {
                y = t;
                t = kc(y);
                y = lc(y);
                for (var L = new Uint8Array(t), J = 0; J < t; J += 1) L[J] = p[y + J];
                t = L;
              } else t = null;
              n.push(t);
            }
            return n;
          }
          function c(g, l) {
            this.Qa = g;
            this.db = l;
            this.Oa = 1;
            this.lb = [];
          }
          function d(g, l) {
            this.db = l;
            l = ha(g) + 1;
            this.eb = ia(l);
            if (null === this.eb) throw Error("Unable to allocate memory for the SQL string");
            u(g, x, this.eb, l);
            this.kb = this.eb;
            this.Za = this.pb = null;
          }
          function e(g) {
            this.filename = "dbfile_" + (4294967295 * Math.random() >>> 0);
            if (null != g) {
              var l = this.filename, n = "/", r = l;
              n && (n = "string" == typeof n ? n : ja(n), r = l ? ka(n + "/" + l) : n);
              l = la(true, true);
              r = ma(r, l);
              if (g) {
                if ("string" == typeof g) {
                  n = Array(g.length);
                  for (var t = 0, y = g.length; t < y; ++t) n[t] = g.charCodeAt(t);
                  g = n;
                }
                na(r, l | 146);
                n = oa(r, 577);
                pa(n, g, 0, g.length, 0);
                qa(n);
                na(r, l);
              }
            }
            this.handleError(q(this.filename, h));
            this.db = m(h, "i32");
            ob(this.db);
            this.fb = {};
            this.Sa = {};
          }
          var h = z(4), k = f.cwrap, q = k("sqlite3_open", "number", ["string", "number"]), w = k("sqlite3_close_v2", "number", ["number"]), v = k("sqlite3_exec", "number", ["number", "string", "number", "number", "number"]), C = k("sqlite3_changes", "number", ["number"]), G = k("sqlite3_prepare_v2", "number", ["number", "string", "number", "number", "number"]), pb = k("sqlite3_sql", "string", ["number"]), nc = k("sqlite3_normalized_sql", "string", ["number"]), qb = k("sqlite3_prepare_v2", "number", ["number", "number", "number", "number", "number"]), oc = k("sqlite3_bind_text", "number", ["number", "number", "number", "number", "number"]), rb = k("sqlite3_bind_blob", "number", ["number", "number", "number", "number", "number"]), pc = k("sqlite3_bind_double", "number", ["number", "number", "number"]), qc = k(
            "sqlite3_bind_int",
            "number",
            ["number", "number", "number"]
          ), rc = k("sqlite3_bind_parameter_index", "number", ["number", "string"]), sc = k("sqlite3_step", "number", ["number"]), tc = k("sqlite3_errmsg", "string", ["number"]), uc = k("sqlite3_column_count", "number", ["number"]), vc = k("sqlite3_data_count", "number", ["number"]), wc = k("sqlite3_column_double", "number", ["number", "number"]), sb = k("sqlite3_column_text", "string", ["number", "number"]), xc = k("sqlite3_column_blob", "number", ["number", "number"]), yc = k("sqlite3_column_bytes", "number", [
            "number",
            "number"
          ]), zc = k("sqlite3_column_type", "number", ["number", "number"]), Ac = k("sqlite3_column_name", "string", ["number", "number"]), Bc = k("sqlite3_reset", "number", ["number"]), Cc = k("sqlite3_clear_bindings", "number", ["number"]), Dc = k("sqlite3_finalize", "number", ["number"]), tb = k("sqlite3_create_function_v2", "number", "number string number number number number number number number".split(" ")), hc = k("sqlite3_value_type", "number", ["number"]), kc = k("sqlite3_value_bytes", "number", ["number"]), jc = k(
            "sqlite3_value_text",
            "string",
            ["number"]
          ), lc = k("sqlite3_value_blob", "number", ["number"]), ic = k("sqlite3_value_double", "number", ["number"]), ec = k("sqlite3_result_double", "", ["number", "number"]), lb = k("sqlite3_result_null", "", ["number"]), fc = k("sqlite3_result_text", "", ["number", "string", "number", "number"]), gc = k("sqlite3_result_blob", "", ["number", "number", "number", "number"]), dc = k("sqlite3_result_int", "", ["number", "number"]), va = k("sqlite3_result_error", "", ["number", "string", "number"]), ub = k(
            "sqlite3_aggregate_context",
            "number",
            ["number", "number"]
          ), ob = k("RegisterExtensionFunctions", "number", ["number"]), vb = k("sqlite3_update_hook", "number", ["number", "number", "number"]);
          c.prototype.bind = function(g) {
            if (!this.Qa) throw "Statement closed";
            this.reset();
            return Array.isArray(g) ? this.Cb(g) : null != g && "object" === typeof g ? this.Db(g) : true;
          };
          c.prototype.step = function() {
            if (!this.Qa) throw "Statement closed";
            this.Oa = 1;
            var g = sc(this.Qa);
            switch (g) {
              case 100:
                return true;
              case 101:
                return false;
              default:
                throw this.db.handleError(g);
            }
          };
          c.prototype.wb = function(g) {
            null == g && (g = this.Oa, this.Oa += 1);
            return wc(this.Qa, g);
          };
          c.prototype.Gb = function(g) {
            null == g && (g = this.Oa, this.Oa += 1);
            g = sb(this.Qa, g);
            if ("function" !== typeof BigInt) throw Error("BigInt is not supported");
            return BigInt(g);
          };
          c.prototype.Hb = function(g) {
            null == g && (g = this.Oa, this.Oa += 1);
            return sb(this.Qa, g);
          };
          c.prototype.getBlob = function(g) {
            null == g && (g = this.Oa, this.Oa += 1);
            var l = yc(this.Qa, g);
            g = xc(this.Qa, g);
            for (var n = new Uint8Array(l), r = 0; r < l; r += 1) n[r] = p[g + r];
            return n;
          };
          c.prototype.get = function(g, l) {
            l = l || {};
            null != g && this.bind(g) && this.step();
            g = [];
            for (var n = vc(this.Qa), r = 0; r < n; r += 1) switch (zc(this.Qa, r)) {
              case 1:
                var t = l.useBigInt ? this.Gb(r) : this.wb(r);
                g.push(t);
                break;
              case 2:
                g.push(this.wb(r));
                break;
              case 3:
                g.push(this.Hb(r));
                break;
              case 4:
                g.push(this.getBlob(r));
                break;
              default:
                g.push(null);
            }
            return g;
          };
          c.prototype.getColumnNames = function() {
            for (var g = [], l = uc(this.Qa), n = 0; n < l; n += 1) g.push(Ac(this.Qa, n));
            return g;
          };
          c.prototype.getAsObject = function(g, l) {
            g = this.get(g, l);
            l = this.getColumnNames();
            for (var n = {}, r = 0; r < l.length; r += 1) n[l[r]] = g[r];
            return n;
          };
          c.prototype.getSQL = function() {
            return pb(this.Qa);
          };
          c.prototype.getNormalizedSQL = function() {
            return nc(this.Qa);
          };
          c.prototype.run = function(g) {
            null != g && this.bind(g);
            this.step();
            return this.reset();
          };
          c.prototype.sb = function(g, l) {
            null == l && (l = this.Oa, this.Oa += 1);
            g = ra(g);
            var n = da(g, ea);
            this.lb.push(n);
            this.db.handleError(oc(this.Qa, l, n, g.length - 1, 0));
          };
          c.prototype.Bb = function(g, l) {
            null == l && (l = this.Oa, this.Oa += 1);
            var n = da(g, ea);
            this.lb.push(n);
            this.db.handleError(rb(
              this.Qa,
              l,
              n,
              g.length,
              0
            ));
          };
          c.prototype.rb = function(g, l) {
            null == l && (l = this.Oa, this.Oa += 1);
            this.db.handleError((g === (g | 0) ? qc : pc)(this.Qa, l, g));
          };
          c.prototype.Eb = function(g) {
            null == g && (g = this.Oa, this.Oa += 1);
            rb(this.Qa, g, 0, 0, 0);
          };
          c.prototype.tb = function(g, l) {
            null == l && (l = this.Oa, this.Oa += 1);
            switch (typeof g) {
              case "string":
                this.sb(g, l);
                return;
              case "number":
                this.rb(g, l);
                return;
              case "bigint":
                this.sb(g.toString(), l);
                return;
              case "boolean":
                this.rb(g + 0, l);
                return;
              case "object":
                if (null === g) {
                  this.Eb(l);
                  return;
                }
                if (null != g.length) {
                  this.Bb(
                    g,
                    l
                  );
                  return;
                }
            }
            throw "Wrong API use : tried to bind a value of an unknown type (" + g + ").";
          };
          c.prototype.Db = function(g) {
            var l = this;
            Object.keys(g).forEach(function(n) {
              var r = rc(l.Qa, n);
              0 !== r && l.tb(g[n], r);
            });
            return true;
          };
          c.prototype.Cb = function(g) {
            for (var l = 0; l < g.length; l += 1) this.tb(g[l], l + 1);
            return true;
          };
          c.prototype.reset = function() {
            this.freemem();
            return 0 === Cc(this.Qa) && 0 === Bc(this.Qa);
          };
          c.prototype.freemem = function() {
            for (var g; void 0 !== (g = this.lb.pop()); ) fa(g);
          };
          c.prototype.free = function() {
            this.freemem();
            var g = 0 === Dc(this.Qa);
            delete this.db.fb[this.Qa];
            this.Qa = 0;
            return g;
          };
          d.prototype.next = function() {
            if (null === this.eb) return { done: true };
            null !== this.Za && (this.Za.free(), this.Za = null);
            if (!this.db.db) throw this.mb(), Error("Database closed");
            var g = sa(), l = z(4);
            ta(h);
            ta(l);
            try {
              this.db.handleError(qb(this.db.db, this.kb, -1, h, l));
              this.kb = m(l, "i32");
              var n = m(h, "i32");
              if (0 === n) return this.mb(), { done: true };
              this.Za = new c(n, this.db);
              this.db.fb[n] = this.Za;
              return { value: this.Za, done: false };
            } catch (r) {
              throw this.pb = ua(this.kb), this.mb(), r;
            } finally {
              wa(g);
            }
          };
          d.prototype.mb = function() {
            fa(this.eb);
            this.eb = null;
          };
          d.prototype.getRemainingSQL = function() {
            return null !== this.pb ? this.pb : ua(this.kb);
          };
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator && (d.prototype[Symbol.iterator] = function() {
            return this;
          });
          e.prototype.run = function(g, l) {
            if (!this.db) throw "Database closed";
            if (l) {
              g = this.prepare(g, l);
              try {
                g.step();
              } finally {
                g.free();
              }
            } else this.handleError(v(this.db, g, 0, 0, h));
            return this;
          };
          e.prototype.exec = function(g, l, n) {
            if (!this.db) throw "Database closed";
            var r = sa(), t = null;
            try {
              var y = xa(g), L = z(4);
              for (g = []; 0 !== m(y, "i8"); ) {
                ta(h);
                ta(L);
                this.handleError(qb(this.db, y, -1, h, L));
                var J = m(h, "i32");
                y = m(L, "i32");
                if (0 !== J) {
                  var I = null;
                  t = new c(J, this);
                  for (null != l && t.bind(l); t.step(); ) null === I && (I = { columns: t.getColumnNames(), values: [] }, g.push(I)), I.values.push(t.get(null, n));
                  t.free();
                }
              }
              return g;
            } catch (M) {
              throw t && t.free(), M;
            } finally {
              wa(r);
            }
          };
          e.prototype.each = function(g, l, n, r, t) {
            "function" === typeof l && (r = n, n = l, l = void 0);
            g = this.prepare(g, l);
            try {
              for (; g.step(); ) n(g.getAsObject(
                null,
                t
              ));
            } finally {
              g.free();
            }
            if ("function" === typeof r) return r();
          };
          e.prototype.prepare = function(g, l) {
            ta(h);
            this.handleError(G(this.db, g, -1, h, 0));
            g = m(h, "i32");
            if (0 === g) throw "Nothing to prepare";
            var n = new c(g, this);
            null != l && n.bind(l);
            return this.fb[g] = n;
          };
          e.prototype.iterateStatements = function(g) {
            return new d(g, this);
          };
          e.prototype["export"] = function() {
            Object.values(this.fb).forEach(function(l) {
              l.free();
            });
            Object.values(this.Sa).forEach(A);
            this.Sa = {};
            this.handleError(w(this.db));
            var g = ya(this.filename);
            this.handleError(q(
              this.filename,
              h
            ));
            this.db = m(h, "i32");
            ob(this.db);
            return g;
          };
          e.prototype.close = function() {
            null !== this.db && (Object.values(this.fb).forEach(function(g) {
              g.free();
            }), Object.values(this.Sa).forEach(A), this.Sa = {}, this.Ya && (A(this.Ya), this.Ya = void 0), this.handleError(w(this.db)), za("/" + this.filename), this.db = null);
          };
          e.prototype.handleError = function(g) {
            if (0 === g) return null;
            g = tc(this.db);
            throw Error(g);
          };
          e.prototype.getRowsModified = function() {
            return C(this.db);
          };
          e.prototype.create_function = function(g, l) {
            Object.prototype.hasOwnProperty.call(
              this.Sa,
              g
            ) && (A(this.Sa[g]), delete this.Sa[g]);
            var n = Aa(function(r, t, y) {
              t = b(t, y);
              try {
                var L = l.apply(null, t);
              } catch (J) {
                va(r, J, -1);
                return;
              }
              a(r, L);
            }, "viii");
            this.Sa[g] = n;
            this.handleError(tb(this.db, g, l.length, 1, 0, n, 0, 0, 0));
            return this;
          };
          e.prototype.create_aggregate = function(g, l) {
            var n = l.init || function() {
              return null;
            }, r = l.finalize || function(I) {
              return I;
            }, t = l.step;
            if (!t) throw "An aggregate function must have a step function in " + g;
            var y = {};
            Object.hasOwnProperty.call(this.Sa, g) && (A(this.Sa[g]), delete this.Sa[g]);
            l = g + "__finalize";
            Object.hasOwnProperty.call(this.Sa, l) && (A(this.Sa[l]), delete this.Sa[l]);
            var L = Aa(function(I, M, Ra) {
              var X = ub(I, 1);
              Object.hasOwnProperty.call(y, X) || (y[X] = n());
              M = b(M, Ra);
              M = [y[X]].concat(M);
              try {
                y[X] = t.apply(null, M);
              } catch (Fc) {
                delete y[X], va(I, Fc, -1);
              }
            }, "viii"), J = Aa(function(I) {
              var M = ub(I, 1);
              try {
                var Ra = r(y[M]);
              } catch (X) {
                delete y[M];
                va(I, X, -1);
                return;
              }
              a(I, Ra);
              delete y[M];
            }, "vi");
            this.Sa[g] = L;
            this.Sa[l] = J;
            this.handleError(tb(this.db, g, t.length - 1, 1, 0, 0, L, J, 0));
            return this;
          };
          e.prototype.updateHook = function(g) {
            this.Ya && (vb(this.db, 0, 0), A(this.Ya), this.Ya = void 0);
            g && (this.Ya = Aa(function(l, n, r, t, y) {
              switch (n) {
                case 18:
                  l = "insert";
                  break;
                case 23:
                  l = "update";
                  break;
                case 9:
                  l = "delete";
                  break;
                default:
                  throw "unknown operationCode in updateHook callback: " + n;
              }
              r = r ? B(x, r) : "";
              t = t ? B(x, t) : "";
              if (y > Number.MAX_SAFE_INTEGER) throw "rowId too big to fit inside a Number";
              g(l, r, t, Number(y));
            }, "viiiij"), vb(this.db, this.Ya, 0));
          };
          f.Database = e;
        };
        var Ba = { ...f }, Ca = "./this.program", Da = (a, b) => {
          throw b;
        }, D = "", Ea, Fa;
        if (ca) {
          var fs2 = require("fs");
          require("path");
          D = __dirname + "/";
          Fa = (a) => {
            a = Ga(a) ? new URL(a) : a;
            return fs2.readFileSync(a);
          };
          Ea = async (a) => {
            a = Ga(a) ? new URL(a) : a;
            return fs2.readFileSync(a, void 0);
          };
          !f.thisProgram && 1 < process.argv.length && (Ca = process.argv[1].replace(/\\/g, "/"));
          process.argv.slice(2);
          "undefined" != typeof module2 && (module2.exports = f);
          Da = (a, b) => {
            process.exitCode = a;
            throw b;
          };
        } else if (aa || ba) ba ? D = self.location.href : "undefined" != typeof document && document.currentScript && (D = document.currentScript.src), D = D.startsWith("blob:") ? "" : D.slice(0, D.replace(/[?#].*/, "").lastIndexOf("/") + 1), ba && (Fa = (a) => {
          var b = new XMLHttpRequest();
          b.open("GET", a, false);
          b.responseType = "arraybuffer";
          b.send(null);
          return new Uint8Array(b.response);
        }), Ea = async (a) => {
          if (Ga(a)) return new Promise((c, d) => {
            var e = new XMLHttpRequest();
            e.open("GET", a, true);
            e.responseType = "arraybuffer";
            e.onload = () => {
              200 == e.status || 0 == e.status && e.response ? c(e.response) : d(e.status);
            };
            e.onerror = d;
            e.send(null);
          });
          var b = await fetch(a, { credentials: "same-origin" });
          if (b.ok) return b.arrayBuffer();
          throw Error(b.status + " : " + b.url);
        };
        var Ha = f.print || console.log.bind(console), Ia = f.printErr || console.error.bind(console);
        Object.assign(f, Ba);
        Ba = null;
        f.thisProgram && (Ca = f.thisProgram);
        var Ja = f.wasmBinary, Ka, La = false, Ma, p, x, Na, E, F, Oa, H, Pa, Ga = (a) => a.startsWith("file://");
        function Qa() {
          var a = Ka.buffer;
          f.HEAP8 = p = new Int8Array(a);
          f.HEAP16 = Na = new Int16Array(a);
          f.HEAPU8 = x = new Uint8Array(a);
          f.HEAPU16 = new Uint16Array(a);
          f.HEAP32 = E = new Int32Array(a);
          f.HEAPU32 = F = new Uint32Array(a);
          f.HEAPF32 = Oa = new Float32Array(a);
          f.HEAPF64 = Pa = new Float64Array(a);
          f.HEAP64 = H = new BigInt64Array(a);
          f.HEAPU64 = new BigUint64Array(a);
        }
        var K = 0, Sa = null;
        function Ta(a) {
          f.onAbort?.(a);
          a = "Aborted(" + a + ")";
          Ia(a);
          La = true;
          throw new WebAssembly.RuntimeError(a + ". Build with -sASSERTIONS for more info.");
        }
        var Ua;
        async function Va(a) {
          if (!Ja) try {
            var b = await Ea(a);
            return new Uint8Array(b);
          } catch {
          }
          if (a == Ua && Ja) a = new Uint8Array(Ja);
          else if (Fa) a = Fa(a);
          else throw "both async and sync fetching of the wasm failed";
          return a;
        }
        async function Wa(a, b) {
          try {
            var c = await Va(a);
            return await WebAssembly.instantiate(c, b);
          } catch (d) {
            Ia(`failed to asynchronously prepare wasm: ${d}`), Ta(d);
          }
        }
        async function Xa(a) {
          var b = Ua;
          if (!Ja && "function" == typeof WebAssembly.instantiateStreaming && !Ga(b) && !ca) try {
            var c = fetch(b, { credentials: "same-origin" });
            return await WebAssembly.instantiateStreaming(c, a);
          } catch (d) {
            Ia(`wasm streaming compile failed: ${d}`), Ia("falling back to ArrayBuffer instantiation");
          }
          return Wa(b, a);
        }
        class Ya {
          name = "ExitStatus";
          constructor(a) {
            this.message = `Program terminated with exit(${a})`;
            this.status = a;
          }
        }
        var Za = (a) => {
          for (; 0 < a.length; ) a.shift()(f);
        }, $a = [], ab = [], bb = () => {
          var a = f.preRun.shift();
          ab.unshift(a);
        };
        function m(a, b = "i8") {
          b.endsWith("*") && (b = "*");
          switch (b) {
            case "i1":
              return p[a];
            case "i8":
              return p[a];
            case "i16":
              return Na[a >> 1];
            case "i32":
              return E[a >> 2];
            case "i64":
              return H[a >> 3];
            case "float":
              return Oa[a >> 2];
            case "double":
              return Pa[a >> 3];
            case "*":
              return F[a >> 2];
            default:
              Ta(`invalid type for getValue: ${b}`);
          }
        }
        var cb = f.noExitRuntime || true;
        function ta(a) {
          var b = "i32";
          b.endsWith("*") && (b = "*");
          switch (b) {
            case "i1":
              p[a] = 0;
              break;
            case "i8":
              p[a] = 0;
              break;
            case "i16":
              Na[a >> 1] = 0;
              break;
            case "i32":
              E[a >> 2] = 0;
              break;
            case "i64":
              H[a >> 3] = BigInt(0);
              break;
            case "float":
              Oa[a >> 2] = 0;
              break;
            case "double":
              Pa[a >> 3] = 0;
              break;
            case "*":
              F[a >> 2] = 0;
              break;
            default:
              Ta(`invalid type for setValue: ${b}`);
          }
        }
        var db2 = "undefined" != typeof TextDecoder ? new TextDecoder() : void 0, B = (a, b = 0, c = NaN) => {
          var d = b + c;
          for (c = b; a[c] && !(c >= d); ) ++c;
          if (16 < c - b && a.buffer && db2) return db2.decode(a.subarray(b, c));
          for (d = ""; b < c; ) {
            var e = a[b++];
            if (e & 128) {
              var h = a[b++] & 63;
              if (192 == (e & 224)) d += String.fromCharCode((e & 31) << 6 | h);
              else {
                var k = a[b++] & 63;
                e = 224 == (e & 240) ? (e & 15) << 12 | h << 6 | k : (e & 7) << 18 | h << 12 | k << 6 | a[b++] & 63;
                65536 > e ? d += String.fromCharCode(e) : (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023));
              }
            } else d += String.fromCharCode(e);
          }
          return d;
        }, ua = (a, b) => a ? B(x, a, b) : "", eb = (a, b) => {
          for (var c = 0, d = a.length - 1; 0 <= d; d--) {
            var e = a[d];
            "." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--);
          }
          if (b) for (; c; c--) a.unshift("..");
          return a;
        }, ka = (a) => {
          var b = "/" === a.charAt(0), c = "/" === a.slice(-1);
          (a = eb(a.split("/").filter((d) => !!d), !b).join("/")) || b || (a = ".");
          a && c && (a += "/");
          return (b ? "/" : "") + a;
        }, fb = (a) => {
          var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
          a = b[0];
          b = b[1];
          if (!a && !b) return ".";
          b &&= b.slice(0, -1);
          return a + b;
        }, gb = (a) => a && a.match(/([^\/]+|\/)\/*$/)[1], hb = () => {
          if (ca) {
            var a = require("crypto");
            return (b) => a.randomFillSync(b);
          }
          return (b) => crypto.getRandomValues(b);
        }, ib = (a) => {
          (ib = hb())(a);
        }, jb = (...a) => {
          for (var b = "", c = false, d = a.length - 1; -1 <= d && !c; d--) {
            c = 0 <= d ? a[d] : "/";
            if ("string" != typeof c) throw new TypeError("Arguments to path.resolve must be strings");
            if (!c) return "";
            b = c + "/" + b;
            c = "/" === c.charAt(0);
          }
          b = eb(b.split("/").filter((e) => !!e), !c).join("/");
          return (c ? "/" : "") + b || ".";
        }, kb = [], ha = (a) => {
          for (var b = 0, c = 0; c < a.length; ++c) {
            var d = a.charCodeAt(c);
            127 >= d ? b++ : 2047 >= d ? b += 2 : 55296 <= d && 57343 >= d ? (b += 4, ++c) : b += 3;
          }
          return b;
        }, u = (a, b, c, d) => {
          if (!(0 < d)) return 0;
          var e = c;
          d = c + d - 1;
          for (var h = 0; h < a.length; ++h) {
            var k = a.charCodeAt(h);
            if (55296 <= k && 57343 >= k) {
              var q = a.charCodeAt(++h);
              k = 65536 + ((k & 1023) << 10) | q & 1023;
            }
            if (127 >= k) {
              if (c >= d) break;
              b[c++] = k;
            } else {
              if (2047 >= k) {
                if (c + 1 >= d) break;
                b[c++] = 192 | k >> 6;
              } else {
                if (65535 >= k) {
                  if (c + 2 >= d) break;
                  b[c++] = 224 | k >> 12;
                } else {
                  if (c + 3 >= d) break;
                  b[c++] = 240 | k >> 18;
                  b[c++] = 128 | k >> 12 & 63;
                }
                b[c++] = 128 | k >> 6 & 63;
              }
              b[c++] = 128 | k & 63;
            }
          }
          b[c] = 0;
          return c - e;
        }, ra = (a, b) => {
          var c = Array(ha(a) + 1);
          a = u(a, c, 0, c.length);
          b && (c.length = a);
          return c;
        }, mb = [];
        function nb(a, b) {
          mb[a] = { input: [], output: [], cb: b };
          wb(a, xb);
        }
        var xb = { open(a) {
          var b = mb[a.node.rdev];
          if (!b) throw new N(43);
          a.tty = b;
          a.seekable = false;
        }, close(a) {
          a.tty.cb.fsync(a.tty);
        }, fsync(a) {
          a.tty.cb.fsync(a.tty);
        }, read(a, b, c, d) {
          if (!a.tty || !a.tty.cb.xb) throw new N(60);
          for (var e = 0, h = 0; h < d; h++) {
            try {
              var k = a.tty.cb.xb(a.tty);
            } catch (q) {
              throw new N(29);
            }
            if (void 0 === k && 0 === e) throw new N(6);
            if (null === k || void 0 === k) break;
            e++;
            b[c + h] = k;
          }
          e && (a.node.atime = Date.now());
          return e;
        }, write(a, b, c, d) {
          if (!a.tty || !a.tty.cb.qb) throw new N(60);
          try {
            for (var e = 0; e < d; e++) a.tty.cb.qb(a.tty, b[c + e]);
          } catch (h) {
            throw new N(29);
          }
          d && (a.node.mtime = a.node.ctime = Date.now());
          return e;
        } }, yb = { xb() {
          a: {
            if (!kb.length) {
              var a = null;
              if (ca) {
                var b = Buffer.alloc(256), c = 0, d = process.stdin.fd;
                try {
                  c = fs2.readSync(d, b, 0, 256);
                } catch (e) {
                  if (e.toString().includes("EOF")) c = 0;
                  else throw e;
                }
                0 < c && (a = b.slice(0, c).toString("utf-8"));
              } else "undefined" != typeof window && "function" == typeof window.prompt && (a = window.prompt("Input: "), null !== a && (a += "\n"));
              if (!a) {
                a = null;
                break a;
              }
              kb = ra(a, true);
            }
            a = kb.shift();
          }
          return a;
        }, qb(a, b) {
          null === b || 10 === b ? (Ha(B(a.output)), a.output = []) : 0 != b && a.output.push(b);
        }, fsync(a) {
          0 < a.output?.length && (Ha(B(a.output)), a.output = []);
        }, Tb() {
          return { Ob: 25856, Qb: 5, Nb: 191, Pb: 35387, Mb: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] };
        }, Ub() {
          return 0;
        }, Vb() {
          return [24, 80];
        } }, zb = { qb(a, b) {
          null === b || 10 === b ? (Ia(B(a.output)), a.output = []) : 0 != b && a.output.push(b);
        }, fsync(a) {
          0 < a.output?.length && (Ia(B(a.output)), a.output = []);
        } }, O = { Wa: null, Xa() {
          return O.createNode(null, "/", 16895, 0);
        }, createNode(a, b, c, d) {
          if (24576 === (c & 61440) || 4096 === (c & 61440)) throw new N(63);
          O.Wa || (O.Wa = { dir: { node: { Ta: O.La.Ta, Ua: O.La.Ua, lookup: O.La.lookup, hb: O.La.hb, rename: O.La.rename, unlink: O.La.unlink, rmdir: O.La.rmdir, readdir: O.La.readdir, symlink: O.La.symlink }, stream: { Va: O.Ma.Va } }, file: { node: { Ta: O.La.Ta, Ua: O.La.Ua }, stream: { Va: O.Ma.Va, read: O.Ma.read, write: O.Ma.write, ib: O.Ma.ib, jb: O.Ma.jb } }, link: { node: { Ta: O.La.Ta, Ua: O.La.Ua, readlink: O.La.readlink }, stream: {} }, ub: { node: { Ta: O.La.Ta, Ua: O.La.Ua }, stream: Ab } });
          c = Bb(a, b, c, d);
          P(c.mode) ? (c.La = O.Wa.dir.node, c.Ma = O.Wa.dir.stream, c.Na = {}) : 32768 === (c.mode & 61440) ? (c.La = O.Wa.file.node, c.Ma = O.Wa.file.stream, c.Ra = 0, c.Na = null) : 40960 === (c.mode & 61440) ? (c.La = O.Wa.link.node, c.Ma = O.Wa.link.stream) : 8192 === (c.mode & 61440) && (c.La = O.Wa.ub.node, c.Ma = O.Wa.ub.stream);
          c.atime = c.mtime = c.ctime = Date.now();
          a && (a.Na[b] = c, a.atime = a.mtime = a.ctime = c.atime);
          return c;
        }, Sb(a) {
          return a.Na ? a.Na.subarray ? a.Na.subarray(0, a.Ra) : new Uint8Array(a.Na) : new Uint8Array(0);
        }, La: { Ta(a) {
          var b = {};
          b.dev = 8192 === (a.mode & 61440) ? a.id : 1;
          b.ino = a.id;
          b.mode = a.mode;
          b.nlink = 1;
          b.uid = 0;
          b.gid = 0;
          b.rdev = a.rdev;
          P(a.mode) ? b.size = 4096 : 32768 === (a.mode & 61440) ? b.size = a.Ra : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
          b.atime = new Date(a.atime);
          b.mtime = new Date(a.mtime);
          b.ctime = new Date(a.ctime);
          b.blksize = 4096;
          b.blocks = Math.ceil(b.size / b.blksize);
          return b;
        }, Ua(a, b) {
          for (var c of ["mode", "atime", "mtime", "ctime"]) null != b[c] && (a[c] = b[c]);
          void 0 !== b.size && (b = b.size, a.Ra != b && (0 == b ? (a.Na = null, a.Ra = 0) : (c = a.Na, a.Na = new Uint8Array(b), c && a.Na.set(c.subarray(0, Math.min(b, a.Ra))), a.Ra = b)));
        }, lookup() {
          throw O.vb;
        }, hb(a, b, c, d) {
          return O.createNode(a, b, c, d);
        }, rename(a, b, c) {
          try {
            var d = Q(b, c);
          } catch (h) {
          }
          if (d) {
            if (P(a.mode)) for (var e in d.Na) throw new N(55);
            Cb(d);
          }
          delete a.parent.Na[a.name];
          b.Na[c] = a;
          a.name = c;
          b.ctime = b.mtime = a.parent.ctime = a.parent.mtime = Date.now();
        }, unlink(a, b) {
          delete a.Na[b];
          a.ctime = a.mtime = Date.now();
        }, rmdir(a, b) {
          var c = Q(a, b), d;
          for (d in c.Na) throw new N(55);
          delete a.Na[b];
          a.ctime = a.mtime = Date.now();
        }, readdir(a) {
          return [".", "..", ...Object.keys(a.Na)];
        }, symlink(a, b, c) {
          a = O.createNode(a, b, 41471, 0);
          a.link = c;
          return a;
        }, readlink(a) {
          if (40960 !== (a.mode & 61440)) throw new N(28);
          return a.link;
        } }, Ma: { read(a, b, c, d, e) {
          var h = a.node.Na;
          if (e >= a.node.Ra) return 0;
          a = Math.min(a.node.Ra - e, d);
          if (8 < a && h.subarray) b.set(h.subarray(e, e + a), c);
          else for (d = 0; d < a; d++) b[c + d] = h[e + d];
          return a;
        }, write(a, b, c, d, e, h) {
          b.buffer === p.buffer && (h = false);
          if (!d) return 0;
          a = a.node;
          a.mtime = a.ctime = Date.now();
          if (b.subarray && (!a.Na || a.Na.subarray)) {
            if (h) return a.Na = b.subarray(c, c + d), a.Ra = d;
            if (0 === a.Ra && 0 === e) return a.Na = b.slice(c, c + d), a.Ra = d;
            if (e + d <= a.Ra) return a.Na.set(b.subarray(
              c,
              c + d
            ), e), d;
          }
          h = e + d;
          var k = a.Na ? a.Na.length : 0;
          k >= h || (h = Math.max(h, k * (1048576 > k ? 2 : 1.125) >>> 0), 0 != k && (h = Math.max(h, 256)), k = a.Na, a.Na = new Uint8Array(h), 0 < a.Ra && a.Na.set(k.subarray(0, a.Ra), 0));
          if (a.Na.subarray && b.subarray) a.Na.set(b.subarray(c, c + d), e);
          else for (h = 0; h < d; h++) a.Na[e + h] = b[c + h];
          a.Ra = Math.max(a.Ra, e + d);
          return d;
        }, Va(a, b, c) {
          1 === c ? b += a.position : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.Ra);
          if (0 > b) throw new N(28);
          return b;
        }, ib(a, b, c, d, e) {
          if (32768 !== (a.node.mode & 61440)) throw new N(43);
          a = a.node.Na;
          if (e & 2 || !a || a.buffer !== p.buffer) {
            e = true;
            d = 65536 * Math.ceil(b / 65536);
            var h = Db(65536, d);
            h && x.fill(0, h, h + d);
            d = h;
            if (!d) throw new N(48);
            if (a) {
              if (0 < c || c + b < a.length) a.subarray ? a = a.subarray(c, c + b) : a = Array.prototype.slice.call(a, c, c + b);
              p.set(a, d);
            }
          } else e = false, d = a.byteOffset;
          return { Kb: d, Ab: e };
        }, jb(a, b, c, d) {
          O.Ma.write(a, b, 0, d, c, false);
          return 0;
        } } }, la = (a, b) => {
          var c = 0;
          a && (c |= 365);
          b && (c |= 146);
          return c;
        }, Eb = null, Fb = {}, Gb = [], Hb = 1, R = null, Ib = false, Jb = true, Kb = {}, N = class {
          name = "ErrnoError";
          constructor(a) {
            this.Pa = a;
          }
        }, Lb = class {
          gb = {};
          node = null;
          get flags() {
            return this.gb.flags;
          }
          set flags(a) {
            this.gb.flags = a;
          }
          get position() {
            return this.gb.position;
          }
          set position(a) {
            this.gb.position = a;
          }
        }, Mb = class {
          La = {};
          Ma = {};
          ab = null;
          constructor(a, b, c, d) {
            a ||= this;
            this.parent = a;
            this.Xa = a.Xa;
            this.id = Hb++;
            this.name = b;
            this.mode = c;
            this.rdev = d;
            this.atime = this.mtime = this.ctime = Date.now();
          }
          get read() {
            return 365 === (this.mode & 365);
          }
          set read(a) {
            a ? this.mode |= 365 : this.mode &= -366;
          }
          get write() {
            return 146 === (this.mode & 146);
          }
          set write(a) {
            a ? this.mode |= 146 : this.mode &= -147;
          }
        };
        function S(a, b = {}) {
          if (!a) throw new N(44);
          b.nb ?? (b.nb = true);
          "/" === a.charAt(0) || (a = "//" + a);
          var c = 0;
          a: for (; 40 > c; c++) {
            a = a.split("/").filter((q) => !!q);
            for (var d = Eb, e = "/", h = 0; h < a.length; h++) {
              var k = h === a.length - 1;
              if (k && b.parent) break;
              if ("." !== a[h]) if (".." === a[h]) e = fb(e), d = d.parent;
              else {
                e = ka(e + "/" + a[h]);
                try {
                  d = Q(d, a[h]);
                } catch (q) {
                  if (44 === q?.Pa && k && b.Jb) return { path: e };
                  throw q;
                }
                !d.ab || k && !b.nb || (d = d.ab.root);
                if (40960 === (d.mode & 61440) && (!k || b.$a)) {
                  if (!d.La.readlink) throw new N(52);
                  d = d.La.readlink(d);
                  "/" === d.charAt(0) || (d = fb(e) + "/" + d);
                  a = d + "/" + a.slice(h + 1).join("/");
                  continue a;
                }
              }
            }
            return { path: e, node: d };
          }
          throw new N(32);
        }
        function ja(a) {
          for (var b; ; ) {
            if (a === a.parent) return a = a.Xa.zb, b ? "/" !== a[a.length - 1] ? `${a}/${b}` : a + b : a;
            b = b ? `${a.name}/${b}` : a.name;
            a = a.parent;
          }
        }
        function Nb(a, b) {
          for (var c = 0, d = 0; d < b.length; d++) c = (c << 5) - c + b.charCodeAt(d) | 0;
          return (a + c >>> 0) % R.length;
        }
        function Cb(a) {
          var b = Nb(a.parent.id, a.name);
          if (R[b] === a) R[b] = a.bb;
          else for (b = R[b]; b; ) {
            if (b.bb === a) {
              b.bb = a.bb;
              break;
            }
            b = b.bb;
          }
        }
        function Q(a, b) {
          var c = P(a.mode) ? (c = Ob(a, "x")) ? c : a.La.lookup ? 0 : 2 : 54;
          if (c) throw new N(c);
          for (c = R[Nb(a.id, b)]; c; c = c.bb) {
            var d = c.name;
            if (c.parent.id === a.id && d === b) return c;
          }
          return a.La.lookup(a, b);
        }
        function Bb(a, b, c, d) {
          a = new Mb(a, b, c, d);
          b = Nb(a.parent.id, a.name);
          a.bb = R[b];
          return R[b] = a;
        }
        function P(a) {
          return 16384 === (a & 61440);
        }
        function Pb(a) {
          var b = ["r", "w", "rw"][a & 3];
          a & 512 && (b += "w");
          return b;
        }
        function Ob(a, b) {
          if (Jb) return 0;
          if (!b.includes("r") || a.mode & 292) {
            if (b.includes("w") && !(a.mode & 146) || b.includes("x") && !(a.mode & 73)) return 2;
          } else return 2;
          return 0;
        }
        function Qb(a, b) {
          if (!P(a.mode)) return 54;
          try {
            return Q(a, b), 20;
          } catch (c) {
          }
          return Ob(a, "wx");
        }
        function Rb(a, b, c) {
          try {
            var d = Q(a, b);
          } catch (e) {
            return e.Pa;
          }
          if (a = Ob(a, "wx")) return a;
          if (c) {
            if (!P(d.mode)) return 54;
            if (d === d.parent || "/" === ja(d)) return 10;
          } else if (P(d.mode)) return 31;
          return 0;
        }
        function Sb(a) {
          if (!a) throw new N(63);
          return a;
        }
        function T(a) {
          a = Gb[a];
          if (!a) throw new N(8);
          return a;
        }
        function Tb(a, b = -1) {
          a = Object.assign(new Lb(), a);
          if (-1 == b) a: {
            for (b = 0; 4096 >= b; b++) if (!Gb[b]) break a;
            throw new N(33);
          }
          a.fd = b;
          return Gb[b] = a;
        }
        function Ub(a, b = -1) {
          a = Tb(a, b);
          a.Ma?.Rb?.(a);
          return a;
        }
        function Vb(a, b, c) {
          var d = a?.Ma.Ua;
          a = d ? a : b;
          d ??= b.La.Ua;
          Sb(d);
          d(a, c);
        }
        var Ab = { open(a) {
          a.Ma = Fb[a.node.rdev].Ma;
          a.Ma.open?.(a);
        }, Va() {
          throw new N(70);
        } };
        function wb(a, b) {
          Fb[a] = { Ma: b };
        }
        function Wb(a, b) {
          var c = "/" === b;
          if (c && Eb) throw new N(10);
          if (!c && b) {
            var d = S(b, { nb: false });
            b = d.path;
            d = d.node;
            if (d.ab) throw new N(10);
            if (!P(d.mode)) throw new N(54);
          }
          b = { type: a, Wb: {}, zb: b, Ib: [] };
          a = a.Xa(b);
          a.Xa = b;
          b.root = a;
          c ? Eb = a : d && (d.ab = b, d.Xa && d.Xa.Ib.push(b));
        }
        function Xb(a, b, c) {
          var d = S(a, { parent: true }).node;
          a = gb(a);
          if (!a) throw new N(28);
          if ("." === a || ".." === a) throw new N(20);
          var e = Qb(d, a);
          if (e) throw new N(e);
          if (!d.La.hb) throw new N(63);
          return d.La.hb(d, a, b, c);
        }
        function ma(a, b = 438) {
          return Xb(a, b & 4095 | 32768, 0);
        }
        function U(a, b = 511) {
          return Xb(a, b & 1023 | 16384, 0);
        }
        function Yb(a, b, c) {
          "undefined" == typeof c && (c = b, b = 438);
          Xb(a, b | 8192, c);
        }
        function Zb(a, b) {
          if (!jb(a)) throw new N(44);
          var c = S(b, { parent: true }).node;
          if (!c) throw new N(44);
          b = gb(b);
          var d = Qb(c, b);
          if (d) throw new N(d);
          if (!c.La.symlink) throw new N(63);
          c.La.symlink(c, b, a);
        }
        function $b(a) {
          var b = S(a, { parent: true }).node;
          a = gb(a);
          var c = Q(b, a), d = Rb(b, a, true);
          if (d) throw new N(d);
          if (!b.La.rmdir) throw new N(63);
          if (c.ab) throw new N(10);
          b.La.rmdir(b, a);
          Cb(c);
        }
        function za(a) {
          var b = S(a, { parent: true }).node;
          if (!b) throw new N(44);
          a = gb(a);
          var c = Q(b, a), d = Rb(b, a, false);
          if (d) throw new N(d);
          if (!b.La.unlink) throw new N(63);
          if (c.ab) throw new N(10);
          b.La.unlink(b, a);
          Cb(c);
        }
        function ac(a, b) {
          a = S(a, { $a: !b }).node;
          return Sb(a.La.Ta)(a);
        }
        function bc(a, b, c, d) {
          Vb(a, b, { mode: c & 4095 | b.mode & -4096, ctime: Date.now(), Fb: d });
        }
        function na(a, b) {
          a = "string" == typeof a ? S(a, { $a: true }).node : a;
          bc(null, a, b);
        }
        function cc(a, b, c) {
          if (P(b.mode)) throw new N(31);
          if (32768 !== (b.mode & 61440)) throw new N(28);
          var d = Ob(b, "w");
          if (d) throw new N(d);
          Vb(a, b, { size: c, timestamp: Date.now() });
        }
        function oa(a, b, c = 438) {
          if ("" === a) throw new N(44);
          if ("string" == typeof b) {
            var d = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }[b];
            if ("undefined" == typeof d) throw Error(`Unknown file open mode: ${b}`);
            b = d;
          }
          c = b & 64 ? c & 4095 | 32768 : 0;
          if ("object" == typeof a) d = a;
          else {
            var e = a.endsWith("/");
            a = S(a, { $a: !(b & 131072), Jb: true });
            d = a.node;
            a = a.path;
          }
          var h = false;
          if (b & 64) if (d) {
            if (b & 128) throw new N(20);
          } else {
            if (e) throw new N(31);
            d = Xb(a, c | 511, 0);
            h = true;
          }
          if (!d) throw new N(44);
          8192 === (d.mode & 61440) && (b &= -513);
          if (b & 65536 && !P(d.mode)) throw new N(54);
          if (!h && (e = d ? 40960 === (d.mode & 61440) ? 32 : P(d.mode) && ("r" !== Pb(b) || b & 576) ? 31 : Ob(d, Pb(b)) : 44)) throw new N(e);
          b & 512 && !h && (e = d, e = "string" == typeof e ? S(e, { $a: true }).node : e, cc(null, e, 0));
          b &= -131713;
          e = Tb({ node: d, path: ja(d), flags: b, seekable: true, position: 0, Ma: d.Ma, Lb: [], error: false });
          e.Ma.open && e.Ma.open(e);
          h && na(d, c & 511);
          !f.logReadFiles || b & 1 || a in Kb || (Kb[a] = 1);
          return e;
        }
        function qa(a) {
          if (null === a.fd) throw new N(8);
          a.ob && (a.ob = null);
          try {
            a.Ma.close && a.Ma.close(a);
          } catch (b) {
            throw b;
          } finally {
            Gb[a.fd] = null;
          }
          a.fd = null;
        }
        function mc(a, b, c) {
          if (null === a.fd) throw new N(8);
          if (!a.seekable || !a.Ma.Va) throw new N(70);
          if (0 != c && 1 != c && 2 != c) throw new N(28);
          a.position = a.Ma.Va(a, b, c);
          a.Lb = [];
        }
        function Ec(a, b, c, d, e) {
          if (0 > d || 0 > e) throw new N(28);
          if (null === a.fd) throw new N(8);
          if (1 === (a.flags & 2097155)) throw new N(8);
          if (P(a.node.mode)) throw new N(31);
          if (!a.Ma.read) throw new N(28);
          var h = "undefined" != typeof e;
          if (!h) e = a.position;
          else if (!a.seekable) throw new N(70);
          b = a.Ma.read(a, b, c, d, e);
          h || (a.position += b);
          return b;
        }
        function pa(a, b, c, d, e) {
          if (0 > d || 0 > e) throw new N(28);
          if (null === a.fd) throw new N(8);
          if (0 === (a.flags & 2097155)) throw new N(8);
          if (P(a.node.mode)) throw new N(31);
          if (!a.Ma.write) throw new N(28);
          a.seekable && a.flags & 1024 && mc(a, 0, 2);
          var h = "undefined" != typeof e;
          if (!h) e = a.position;
          else if (!a.seekable) throw new N(70);
          b = a.Ma.write(a, b, c, d, e, void 0);
          h || (a.position += b);
          return b;
        }
        function ya(a) {
          var b = "binary";
          if ("utf8" !== b && "binary" !== b) throw Error(`Invalid encoding type "${b}"`);
          var c;
          var d = oa(a, d || 0);
          a = ac(a).size;
          var e = new Uint8Array(a);
          Ec(d, e, 0, a, 0);
          "utf8" === b ? c = B(e) : "binary" === b && (c = e);
          qa(d);
          return c;
        }
        function V(a, b, c) {
          a = ka("/dev/" + a);
          var d = la(!!b, !!c);
          V.yb ?? (V.yb = 64);
          var e = V.yb++ << 8 | 0;
          wb(e, { open(h) {
            h.seekable = false;
          }, close() {
            c?.buffer?.length && c(10);
          }, read(h, k, q, w) {
            for (var v = 0, C = 0; C < w; C++) {
              try {
                var G = b();
              } catch (pb) {
                throw new N(29);
              }
              if (void 0 === G && 0 === v) throw new N(6);
              if (null === G || void 0 === G) break;
              v++;
              k[q + C] = G;
            }
            v && (h.node.atime = Date.now());
            return v;
          }, write(h, k, q, w) {
            for (var v = 0; v < w; v++) try {
              c(k[q + v]);
            } catch (C) {
              throw new N(29);
            }
            w && (h.node.mtime = h.node.ctime = Date.now());
            return v;
          } });
          Yb(a, d, e);
        }
        var W = {};
        function Gc(a, b, c) {
          if ("/" === b.charAt(0)) return b;
          a = -100 === a ? "/" : T(a).path;
          if (0 == b.length) {
            if (!c) throw new N(44);
            return a;
          }
          return a + "/" + b;
        }
        function Hc(a, b) {
          E[a >> 2] = b.dev;
          E[a + 4 >> 2] = b.mode;
          F[a + 8 >> 2] = b.nlink;
          E[a + 12 >> 2] = b.uid;
          E[a + 16 >> 2] = b.gid;
          E[a + 20 >> 2] = b.rdev;
          H[a + 24 >> 3] = BigInt(b.size);
          E[a + 32 >> 2] = 4096;
          E[a + 36 >> 2] = b.blocks;
          var c = b.atime.getTime(), d = b.mtime.getTime(), e = b.ctime.getTime();
          H[a + 40 >> 3] = BigInt(Math.floor(c / 1e3));
          F[a + 48 >> 2] = c % 1e3 * 1e6;
          H[a + 56 >> 3] = BigInt(Math.floor(d / 1e3));
          F[a + 64 >> 2] = d % 1e3 * 1e6;
          H[a + 72 >> 3] = BigInt(Math.floor(e / 1e3));
          F[a + 80 >> 2] = e % 1e3 * 1e6;
          H[a + 88 >> 3] = BigInt(b.ino);
          return 0;
        }
        var Ic = void 0, Jc = () => {
          var a = E[+Ic >> 2];
          Ic += 4;
          return a;
        }, Kc = 0, Lc = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335], Mc = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Nc = {}, Oc = (a) => {
          Ma = a;
          cb || 0 < Kc || (f.onExit?.(a), La = true);
          Da(a, new Ya(a));
        }, Pc = (a) => {
          if (!La) try {
            if (a(), !(cb || 0 < Kc)) try {
              Ma = a = Ma, Oc(a);
            } catch (b) {
              b instanceof Ya || "unwind" == b || Da(1, b);
            }
          } catch (b) {
            b instanceof Ya || "unwind" == b || Da(1, b);
          }
        }, Qc = {}, Sc = () => {
          if (!Rc) {
            var a = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: Ca || "./this.program" }, b;
            for (b in Qc) void 0 === Qc[b] ? delete a[b] : a[b] = Qc[b];
            var c = [];
            for (b in a) c.push(`${b}=${a[b]}`);
            Rc = c;
          }
          return Rc;
        }, Rc, xa = (a) => {
          var b = ha(a) + 1, c = z(b);
          u(a, x, c, b);
          return c;
        }, Tc = (a, b, c, d) => {
          var e = { string: (v) => {
            var C = 0;
            null !== v && void 0 !== v && 0 !== v && (C = xa(v));
            return C;
          }, array: (v) => {
            var C = z(v.length);
            p.set(v, C);
            return C;
          } };
          a = f["_" + a];
          var h = [], k = 0;
          if (d) for (var q = 0; q < d.length; q++) {
            var w = e[c[q]];
            w ? (0 === k && (k = sa()), h[q] = w(d[q])) : h[q] = d[q];
          }
          c = a(...h);
          return c = function(v) {
            0 !== k && wa(k);
            return "string" === b ? v ? B(x, v) : "" : "boolean" === b ? !!v : v;
          }(c);
        }, ea = 0, da = (a, b) => {
          b = 1 == b ? z(a.length) : ia(a.length);
          a.subarray || a.slice || (a = new Uint8Array(a));
          x.set(a, b);
          return b;
        }, Uc, Vc = [], Y, A = (a) => {
          Uc.delete(Y.get(a));
          Y.set(a, null);
          Vc.push(a);
        }, Aa = (a, b) => {
          if (!Uc) {
            Uc = /* @__PURE__ */ new WeakMap();
            var c = Y.length;
            if (Uc) for (var d = 0; d < 0 + c; d++) {
              var e = Y.get(d);
              e && Uc.set(e, d);
            }
          }
          if (c = Uc.get(a) || 0) return c;
          if (Vc.length) c = Vc.pop();
          else {
            try {
              Y.grow(1);
            } catch (w) {
              if (!(w instanceof RangeError)) throw w;
              throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
            }
            c = Y.length - 1;
          }
          try {
            Y.set(c, a);
          } catch (w) {
            if (!(w instanceof TypeError)) throw w;
            if ("function" == typeof WebAssembly.Function) {
              var h = WebAssembly.Function;
              d = { i: "i32", j: "i64", f: "f32", d: "f64", e: "externref", p: "i32" };
              e = { parameters: [], results: "v" == b[0] ? [] : [d[b[0]]] };
              for (var k = 1; k < b.length; ++k) e.parameters.push(d[b[k]]);
              b = new h(e, a);
            } else {
              d = [1];
              e = b.slice(0, 1);
              b = b.slice(1);
              k = { i: 127, p: 127, j: 126, f: 125, d: 124, e: 111 };
              d.push(96);
              var q = b.length;
              128 > q ? d.push(q) : d.push(q % 128 | 128, q >> 7);
              for (h of b) d.push(k[h]);
              "v" == e ? d.push(0) : d.push(1, k[e]);
              b = [0, 97, 115, 109, 1, 0, 0, 0, 1];
              h = d.length;
              128 > h ? b.push(h) : b.push(h % 128 | 128, h >> 7);
              b.push(...d);
              b.push(2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0);
              b = new WebAssembly.Module(new Uint8Array(b));
              b = new WebAssembly.Instance(b, { e: { f: a } }).exports.f;
            }
            Y.set(c, b);
          }
          Uc.set(a, c);
          return c;
        };
        R = Array(4096);
        Wb(O, "/");
        U("/tmp");
        U("/home");
        U("/home/web_user");
        (function() {
          U("/dev");
          wb(259, { read: () => 0, write: (d, e, h, k) => k, Va: () => 0 });
          Yb("/dev/null", 259);
          nb(1280, yb);
          nb(1536, zb);
          Yb("/dev/tty", 1280);
          Yb("/dev/tty1", 1536);
          var a = new Uint8Array(1024), b = 0, c = () => {
            0 === b && (ib(a), b = a.byteLength);
            return a[--b];
          };
          V("random", c);
          V("urandom", c);
          U("/dev/shm");
          U("/dev/shm/tmp");
        })();
        (function() {
          U("/proc");
          var a = U("/proc/self");
          U("/proc/self/fd");
          Wb({ Xa() {
            var b = Bb(a, "fd", 16895, 73);
            b.Ma = { Va: O.Ma.Va };
            b.La = { lookup(c, d) {
              c = +d;
              var e = T(c);
              c = { parent: null, Xa: { zb: "fake" }, La: { readlink: () => e.path }, id: c + 1 };
              return c.parent = c;
            }, readdir() {
              return Array.from(Gb.entries()).filter(([, c]) => c).map(([c]) => c.toString());
            } };
            return b;
          } }, "/proc/self/fd");
        })();
        O.vb = new N(44);
        O.vb.stack = "<generic error, no stack>";
        var Xc = { a: (a, b, c, d) => Ta(`Assertion failed: ${a ? B(x, a) : ""}, at: ` + [b ? b ? B(x, b) : "" : "unknown filename", c, d ? d ? B(x, d) : "" : "unknown function"]), i: function(a, b) {
          try {
            return a = a ? B(x, a) : "", na(a, b), 0;
          } catch (c) {
            if ("undefined" == typeof W || "ErrnoError" !== c.name) throw c;
            return -c.Pa;
          }
        }, L: function(a, b, c) {
          try {
            b = b ? B(x, b) : "";
            b = Gc(a, b);
            if (c & -8) return -28;
            var d = S(b, { $a: true }).node;
            if (!d) return -44;
            a = "";
            c & 4 && (a += "r");
            c & 2 && (a += "w");
            c & 1 && (a += "x");
            return a && Ob(d, a) ? -2 : 0;
          } catch (e) {
            if ("undefined" == typeof W || "ErrnoError" !== e.name) throw e;
            return -e.Pa;
          }
        }, j: function(a, b) {
          try {
            var c = T(a);
            bc(c, c.node, b, false);
            return 0;
          } catch (d) {
            if ("undefined" == typeof W || "ErrnoError" !== d.name) throw d;
            return -d.Pa;
          }
        }, h: function(a) {
          try {
            var b = T(a);
            Vb(b, b.node, { timestamp: Date.now(), Fb: false });
            return 0;
          } catch (c) {
            if ("undefined" == typeof W || "ErrnoError" !== c.name) throw c;
            return -c.Pa;
          }
        }, b: function(a, b, c) {
          Ic = c;
          try {
            var d = T(a);
            switch (b) {
              case 0:
                var e = Jc();
                if (0 > e) break;
                for (; Gb[e]; ) e++;
                return Ub(d, e).fd;
              case 1:
              case 2:
                return 0;
              case 3:
                return d.flags;
              case 4:
                return e = Jc(), d.flags |= e, 0;
              case 12:
                return e = Jc(), Na[e + 0 >> 1] = 2, 0;
              case 13:
              case 14:
                return 0;
            }
            return -28;
          } catch (h) {
            if ("undefined" == typeof W || "ErrnoError" !== h.name) throw h;
            return -h.Pa;
          }
        }, g: function(a, b) {
          try {
            var c = T(a), d = c.node, e = c.Ma.Ta;
            a = e ? c : d;
            e ??= d.La.Ta;
            Sb(e);
            var h = e(a);
            return Hc(b, h);
          } catch (k) {
            if ("undefined" == typeof W || "ErrnoError" !== k.name) throw k;
            return -k.Pa;
          }
        }, H: function(a, b) {
          b = -9007199254740992 > b || 9007199254740992 < b ? NaN : Number(b);
          try {
            if (isNaN(b)) return 61;
            var c = T(a);
            if (0 > b || 0 === (c.flags & 2097155)) throw new N(28);
            cc(c, c.node, b);
            return 0;
          } catch (d) {
            if ("undefined" == typeof W || "ErrnoError" !== d.name) throw d;
            return -d.Pa;
          }
        }, G: function(a, b) {
          try {
            if (0 === b) return -28;
            var c = ha("/") + 1;
            if (b < c) return -68;
            u("/", x, a, b);
            return c;
          } catch (d) {
            if ("undefined" == typeof W || "ErrnoError" !== d.name) throw d;
            return -d.Pa;
          }
        }, K: function(a, b) {
          try {
            return a = a ? B(x, a) : "", Hc(b, ac(a, true));
          } catch (c) {
            if ("undefined" == typeof W || "ErrnoError" !== c.name) throw c;
            return -c.Pa;
          }
        }, C: function(a, b, c) {
          try {
            return b = b ? B(x, b) : "", b = Gc(a, b), U(b, c), 0;
          } catch (d) {
            if ("undefined" == typeof W || "ErrnoError" !== d.name) throw d;
            return -d.Pa;
          }
        }, J: function(a, b, c, d) {
          try {
            b = b ? B(x, b) : "";
            var e = d & 256;
            b = Gc(a, b, d & 4096);
            return Hc(c, e ? ac(b, true) : ac(b));
          } catch (h) {
            if ("undefined" == typeof W || "ErrnoError" !== h.name) throw h;
            return -h.Pa;
          }
        }, x: function(a, b, c, d) {
          Ic = d;
          try {
            b = b ? B(x, b) : "";
            b = Gc(a, b);
            var e = d ? Jc() : 0;
            return oa(b, c, e).fd;
          } catch (h) {
            if ("undefined" == typeof W || "ErrnoError" !== h.name) throw h;
            return -h.Pa;
          }
        }, v: function(a, b, c, d) {
          try {
            b = b ? B(x, b) : "";
            b = Gc(a, b);
            if (0 >= d) return -28;
            var e = S(b).node;
            if (!e) throw new N(44);
            if (!e.La.readlink) throw new N(28);
            var h = e.La.readlink(e);
            var k = Math.min(d, ha(h)), q = p[c + k];
            u(h, x, c, d + 1);
            p[c + k] = q;
            return k;
          } catch (w) {
            if ("undefined" == typeof W || "ErrnoError" !== w.name) throw w;
            return -w.Pa;
          }
        }, u: function(a) {
          try {
            return a = a ? B(x, a) : "", $b(a), 0;
          } catch (b) {
            if ("undefined" == typeof W || "ErrnoError" !== b.name) throw b;
            return -b.Pa;
          }
        }, f: function(a, b) {
          try {
            return a = a ? B(x, a) : "", Hc(b, ac(a));
          } catch (c) {
            if ("undefined" == typeof W || "ErrnoError" !== c.name) throw c;
            return -c.Pa;
          }
        }, r: function(a, b, c) {
          try {
            return b = b ? B(x, b) : "", b = Gc(a, b), 0 === c ? za(b) : 512 === c ? $b(b) : Ta("Invalid flags passed to unlinkat"), 0;
          } catch (d) {
            if ("undefined" == typeof W || "ErrnoError" !== d.name) throw d;
            return -d.Pa;
          }
        }, q: function(a, b, c) {
          try {
            b = b ? B(x, b) : "";
            b = Gc(a, b, true);
            var d = Date.now(), e, h;
            if (c) {
              var k = F[c >> 2] + 4294967296 * E[c + 4 >> 2], q = E[c + 8 >> 2];
              1073741823 == q ? e = d : 1073741822 == q ? e = null : e = 1e3 * k + q / 1e6;
              c += 16;
              k = F[c >> 2] + 4294967296 * E[c + 4 >> 2];
              q = E[c + 8 >> 2];
              1073741823 == q ? h = d : 1073741822 == q ? h = null : h = 1e3 * k + q / 1e6;
            } else h = e = d;
            if (null !== (h ?? e)) {
              a = e;
              var w = S(b, { $a: true }).node;
              Sb(w.La.Ua)(w, { atime: a, mtime: h });
            }
            return 0;
          } catch (v) {
            if ("undefined" == typeof W || "ErrnoError" !== v.name) throw v;
            return -v.Pa;
          }
        }, m: () => Ta(""), l: () => {
          cb = false;
          Kc = 0;
        }, A: function(a, b) {
          a = -9007199254740992 > a || 9007199254740992 < a ? NaN : Number(a);
          a = new Date(1e3 * a);
          E[b >> 2] = a.getSeconds();
          E[b + 4 >> 2] = a.getMinutes();
          E[b + 8 >> 2] = a.getHours();
          E[b + 12 >> 2] = a.getDate();
          E[b + 16 >> 2] = a.getMonth();
          E[b + 20 >> 2] = a.getFullYear() - 1900;
          E[b + 24 >> 2] = a.getDay();
          var c = a.getFullYear();
          E[b + 28 >> 2] = (0 !== c % 4 || 0 === c % 100 && 0 !== c % 400 ? Mc : Lc)[a.getMonth()] + a.getDate() - 1 | 0;
          E[b + 36 >> 2] = -(60 * a.getTimezoneOffset());
          c = new Date(
            a.getFullYear(),
            6,
            1
          ).getTimezoneOffset();
          var d = new Date(a.getFullYear(), 0, 1).getTimezoneOffset();
          E[b + 32 >> 2] = (c != d && a.getTimezoneOffset() == Math.min(d, c)) | 0;
        }, y: function(a, b, c, d, e, h, k) {
          e = -9007199254740992 > e || 9007199254740992 < e ? NaN : Number(e);
          try {
            if (isNaN(e)) return 61;
            var q = T(d);
            if (0 !== (b & 2) && 0 === (c & 2) && 2 !== (q.flags & 2097155)) throw new N(2);
            if (1 === (q.flags & 2097155)) throw new N(2);
            if (!q.Ma.ib) throw new N(43);
            if (!a) throw new N(28);
            var w = q.Ma.ib(q, a, e, b, c);
            var v = w.Kb;
            E[h >> 2] = w.Ab;
            F[k >> 2] = v;
            return 0;
          } catch (C) {
            if ("undefined" == typeof W || "ErrnoError" !== C.name) throw C;
            return -C.Pa;
          }
        }, z: function(a, b, c, d, e, h) {
          h = -9007199254740992 > h || 9007199254740992 < h ? NaN : Number(h);
          try {
            var k = T(e);
            if (c & 2) {
              c = h;
              if (32768 !== (k.node.mode & 61440)) throw new N(43);
              if (!(d & 2)) {
                var q = x.slice(a, a + b);
                k.Ma.jb && k.Ma.jb(k, q, c, b, d);
              }
            }
          } catch (w) {
            if ("undefined" == typeof W || "ErrnoError" !== w.name) throw w;
            return -w.Pa;
          }
        }, n: (a, b) => {
          Nc[a] && (clearTimeout(Nc[a].id), delete Nc[a]);
          if (!b) return 0;
          var c = setTimeout(() => {
            delete Nc[a];
            Pc(() => Wc(a, performance.now()));
          }, b);
          Nc[a] = {
            id: c,
            Xb: b
          };
          return 0;
        }, B: (a, b, c, d) => {
          var e = (/* @__PURE__ */ new Date()).getFullYear(), h = new Date(e, 0, 1).getTimezoneOffset();
          e = new Date(e, 6, 1).getTimezoneOffset();
          F[a >> 2] = 60 * Math.max(h, e);
          E[b >> 2] = Number(h != e);
          b = (k) => {
            var q = Math.abs(k);
            return `UTC${0 <= k ? "-" : "+"}${String(Math.floor(q / 60)).padStart(2, "0")}${String(q % 60).padStart(2, "0")}`;
          };
          a = b(h);
          b = b(e);
          e < h ? (u(a, x, c, 17), u(b, x, d, 17)) : (u(a, x, d, 17), u(b, x, c, 17));
        }, d: () => Date.now(), s: () => 2147483648, c: () => performance.now(), o: (a) => {
          var b = x.length;
          a >>>= 0;
          if (2147483648 < a) return false;
          for (var c = 1; 4 >= c; c *= 2) {
            var d = b * (1 + 0.2 / c);
            d = Math.min(d, a + 100663296);
            a: {
              d = (Math.min(2147483648, 65536 * Math.ceil(Math.max(a, d) / 65536)) - Ka.buffer.byteLength + 65535) / 65536 | 0;
              try {
                Ka.grow(d);
                Qa();
                var e = 1;
                break a;
              } catch (h) {
              }
              e = void 0;
            }
            if (e) return true;
          }
          return false;
        }, E: (a, b) => {
          var c = 0;
          Sc().forEach((d, e) => {
            var h = b + c;
            e = F[a + 4 * e >> 2] = h;
            for (h = 0; h < d.length; ++h) p[e++] = d.charCodeAt(h);
            p[e] = 0;
            c += d.length + 1;
          });
          return 0;
        }, F: (a, b) => {
          var c = Sc();
          F[a >> 2] = c.length;
          var d = 0;
          c.forEach((e) => d += e.length + 1);
          F[b >> 2] = d;
          return 0;
        }, e: function(a) {
          try {
            var b = T(a);
            qa(b);
            return 0;
          } catch (c) {
            if ("undefined" == typeof W || "ErrnoError" !== c.name) throw c;
            return c.Pa;
          }
        }, p: function(a, b) {
          try {
            var c = T(a);
            p[b] = c.tty ? 2 : P(c.mode) ? 3 : 40960 === (c.mode & 61440) ? 7 : 4;
            Na[b + 2 >> 1] = 0;
            H[b + 8 >> 3] = BigInt(0);
            H[b + 16 >> 3] = BigInt(0);
            return 0;
          } catch (d) {
            if ("undefined" == typeof W || "ErrnoError" !== d.name) throw d;
            return d.Pa;
          }
        }, w: function(a, b, c, d) {
          try {
            a: {
              var e = T(a);
              a = b;
              for (var h, k = b = 0; k < c; k++) {
                var q = F[a >> 2], w = F[a + 4 >> 2];
                a += 8;
                var v = Ec(e, p, q, w, h);
                if (0 > v) {
                  var C = -1;
                  break a;
                }
                b += v;
                if (v < w) break;
                "undefined" != typeof h && (h += v);
              }
              C = b;
            }
            F[d >> 2] = C;
            return 0;
          } catch (G) {
            if ("undefined" == typeof W || "ErrnoError" !== G.name) throw G;
            return G.Pa;
          }
        }, D: function(a, b, c, d) {
          b = -9007199254740992 > b || 9007199254740992 < b ? NaN : Number(b);
          try {
            if (isNaN(b)) return 61;
            var e = T(a);
            mc(e, b, c);
            H[d >> 3] = BigInt(e.position);
            e.ob && 0 === b && 0 === c && (e.ob = null);
            return 0;
          } catch (h) {
            if ("undefined" == typeof W || "ErrnoError" !== h.name) throw h;
            return h.Pa;
          }
        }, I: function(a) {
          try {
            var b = T(a);
            return b.Ma?.fsync ? b.Ma.fsync(b) : 0;
          } catch (c) {
            if ("undefined" == typeof W || "ErrnoError" !== c.name) throw c;
            return c.Pa;
          }
        }, t: function(a, b, c, d) {
          try {
            a: {
              var e = T(a);
              a = b;
              for (var h, k = b = 0; k < c; k++) {
                var q = F[a >> 2], w = F[a + 4 >> 2];
                a += 8;
                var v = pa(e, p, q, w, h);
                if (0 > v) {
                  var C = -1;
                  break a;
                }
                b += v;
                if (v < w) break;
                "undefined" != typeof h && (h += v);
              }
              C = b;
            }
            F[d >> 2] = C;
            return 0;
          } catch (G) {
            if ("undefined" == typeof W || "ErrnoError" !== G.name) throw G;
            return G.Pa;
          }
        }, k: Oc }, Z;
        (async function() {
          function a(c) {
            Z = c.exports;
            Ka = Z.M;
            Qa();
            Y = Z.O;
            K--;
            f.monitorRunDependencies?.(K);
            0 == K && Sa && (c = Sa, Sa = null, c());
            return Z;
          }
          K++;
          f.monitorRunDependencies?.(K);
          var b = { a: Xc };
          if (f.instantiateWasm) return new Promise((c) => {
            f.instantiateWasm(b, (d, e) => {
              a(d, e);
              c(d.exports);
            });
          });
          Ua ??= f.locateFile ? f.locateFile("sql-wasm.wasm", D) : D + "sql-wasm.wasm";
          return a((await Xa(b)).instance);
        })();
        f._sqlite3_free = (a) => (f._sqlite3_free = Z.P)(a);
        f._sqlite3_value_text = (a) => (f._sqlite3_value_text = Z.Q)(a);
        f._sqlite3_prepare_v2 = (a, b, c, d, e) => (f._sqlite3_prepare_v2 = Z.R)(a, b, c, d, e);
        f._sqlite3_step = (a) => (f._sqlite3_step = Z.S)(a);
        f._sqlite3_reset = (a) => (f._sqlite3_reset = Z.T)(a);
        f._sqlite3_exec = (a, b, c, d, e) => (f._sqlite3_exec = Z.U)(a, b, c, d, e);
        f._sqlite3_finalize = (a) => (f._sqlite3_finalize = Z.V)(a);
        f._sqlite3_column_name = (a, b) => (f._sqlite3_column_name = Z.W)(a, b);
        f._sqlite3_column_text = (a, b) => (f._sqlite3_column_text = Z.X)(a, b);
        f._sqlite3_column_type = (a, b) => (f._sqlite3_column_type = Z.Y)(a, b);
        f._sqlite3_errmsg = (a) => (f._sqlite3_errmsg = Z.Z)(a);
        f._sqlite3_clear_bindings = (a) => (f._sqlite3_clear_bindings = Z._)(a);
        f._sqlite3_value_blob = (a) => (f._sqlite3_value_blob = Z.$)(a);
        f._sqlite3_value_bytes = (a) => (f._sqlite3_value_bytes = Z.aa)(a);
        f._sqlite3_value_double = (a) => (f._sqlite3_value_double = Z.ba)(a);
        f._sqlite3_value_int = (a) => (f._sqlite3_value_int = Z.ca)(a);
        f._sqlite3_value_type = (a) => (f._sqlite3_value_type = Z.da)(a);
        f._sqlite3_result_blob = (a, b, c, d) => (f._sqlite3_result_blob = Z.ea)(a, b, c, d);
        f._sqlite3_result_double = (a, b) => (f._sqlite3_result_double = Z.fa)(a, b);
        f._sqlite3_result_error = (a, b, c) => (f._sqlite3_result_error = Z.ga)(a, b, c);
        f._sqlite3_result_int = (a, b) => (f._sqlite3_result_int = Z.ha)(a, b);
        f._sqlite3_result_int64 = (a, b) => (f._sqlite3_result_int64 = Z.ia)(a, b);
        f._sqlite3_result_null = (a) => (f._sqlite3_result_null = Z.ja)(a);
        f._sqlite3_result_text = (a, b, c, d) => (f._sqlite3_result_text = Z.ka)(a, b, c, d);
        f._sqlite3_aggregate_context = (a, b) => (f._sqlite3_aggregate_context = Z.la)(a, b);
        f._sqlite3_column_count = (a) => (f._sqlite3_column_count = Z.ma)(a);
        f._sqlite3_data_count = (a) => (f._sqlite3_data_count = Z.na)(a);
        f._sqlite3_column_blob = (a, b) => (f._sqlite3_column_blob = Z.oa)(a, b);
        f._sqlite3_column_bytes = (a, b) => (f._sqlite3_column_bytes = Z.pa)(a, b);
        f._sqlite3_column_double = (a, b) => (f._sqlite3_column_double = Z.qa)(a, b);
        f._sqlite3_bind_blob = (a, b, c, d, e) => (f._sqlite3_bind_blob = Z.ra)(a, b, c, d, e);
        f._sqlite3_bind_double = (a, b, c) => (f._sqlite3_bind_double = Z.sa)(a, b, c);
        f._sqlite3_bind_int = (a, b, c) => (f._sqlite3_bind_int = Z.ta)(a, b, c);
        f._sqlite3_bind_text = (a, b, c, d, e) => (f._sqlite3_bind_text = Z.ua)(a, b, c, d, e);
        f._sqlite3_bind_parameter_index = (a, b) => (f._sqlite3_bind_parameter_index = Z.va)(a, b);
        f._sqlite3_sql = (a) => (f._sqlite3_sql = Z.wa)(a);
        f._sqlite3_normalized_sql = (a) => (f._sqlite3_normalized_sql = Z.xa)(a);
        f._sqlite3_changes = (a) => (f._sqlite3_changes = Z.ya)(a);
        f._sqlite3_close_v2 = (a) => (f._sqlite3_close_v2 = Z.za)(a);
        f._sqlite3_create_function_v2 = (a, b, c, d, e, h, k, q, w) => (f._sqlite3_create_function_v2 = Z.Aa)(a, b, c, d, e, h, k, q, w);
        f._sqlite3_update_hook = (a, b, c) => (f._sqlite3_update_hook = Z.Ba)(a, b, c);
        f._sqlite3_open = (a, b) => (f._sqlite3_open = Z.Ca)(a, b);
        var ia = f._malloc = (a) => (ia = f._malloc = Z.Da)(a), fa = f._free = (a) => (fa = f._free = Z.Ea)(a);
        f._RegisterExtensionFunctions = (a) => (f._RegisterExtensionFunctions = Z.Fa)(a);
        var Db = (a, b) => (Db = Z.Ga)(a, b), Wc = (a, b) => (Wc = Z.Ha)(a, b), wa = (a) => (wa = Z.Ia)(a), z = (a) => (z = Z.Ja)(a), sa = () => (sa = Z.Ka)();
        f.stackSave = () => sa();
        f.stackRestore = (a) => wa(a);
        f.stackAlloc = (a) => z(a);
        f.cwrap = (a, b, c, d) => {
          var e = !c || c.every((h) => "number" === h || "boolean" === h);
          return "string" !== b && e && !d ? f["_" + a] : (...h) => Tc(a, b, c, h);
        };
        f.addFunction = Aa;
        f.removeFunction = A;
        f.UTF8ToString = ua;
        f.ALLOC_NORMAL = ea;
        f.allocate = da;
        f.allocateUTF8OnStack = xa;
        function Yc() {
          function a() {
            f.calledRun = true;
            if (!La) {
              if (!f.noFSInit && !Ib) {
                var b, c;
                Ib = true;
                d ??= f.stdin;
                b ??= f.stdout;
                c ??= f.stderr;
                d ? V("stdin", d) : Zb("/dev/tty", "/dev/stdin");
                b ? V("stdout", null, b) : Zb("/dev/tty", "/dev/stdout");
                c ? V("stderr", null, c) : Zb("/dev/tty1", "/dev/stderr");
                oa("/dev/stdin", 0);
                oa("/dev/stdout", 1);
                oa("/dev/stderr", 1);
              }
              Z.N();
              Jb = false;
              f.onRuntimeInitialized?.();
              if (f.postRun) for ("function" == typeof f.postRun && (f.postRun = [f.postRun]); f.postRun.length; ) {
                var d = f.postRun.shift();
                $a.unshift(d);
              }
              Za($a);
            }
          }
          if (0 < K) Sa = Yc;
          else {
            if (f.preRun) for ("function" == typeof f.preRun && (f.preRun = [f.preRun]); f.preRun.length; ) bb();
            Za(ab);
            0 < K ? Sa = Yc : f.setStatus ? (f.setStatus("Running..."), setTimeout(() => {
              setTimeout(() => f.setStatus(""), 1);
              a();
            }, 1)) : a();
          }
        }
        if (f.preInit) for ("function" == typeof f.preInit && (f.preInit = [f.preInit]); 0 < f.preInit.length; ) f.preInit.pop()();
        Yc();
        return Module;
      });
      return initSqlJsPromise;
    };
    if (typeof exports2 === "object" && typeof module2 === "object") {
      module2.exports = initSqlJs2;
      module2.exports.default = initSqlJs2;
    } else if (typeof define === "function" && define["amd"]) {
      define([], function() {
        return initSqlJs2;
      });
    } else if (typeof exports2 === "object") {
      exports2["Module"] = initSqlJs2;
    }
  }
});

// node_modules/wanakana/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/wanakana/cjs/index.js"(exports2) {
    "use strict";
    function typeOf(value) {
      if (value === null) {
        return "null";
      }
      if (value !== Object(value)) {
        return typeof value;
      }
      return {}.toString.call(value).slice(8, -1).toLowerCase();
    }
    function isEmpty(input) {
      if (typeOf(input) !== "string") {
        return true;
      }
      return !input.length;
    }
    function isCharInRange(char = "", start, end) {
      if (isEmpty(char))
        return false;
      const code = char.charCodeAt(0);
      return start <= code && code <= end;
    }
    var VERSION = "5.3.1";
    var TO_KANA_METHODS = {
      HIRAGANA: "toHiragana",
      KATAKANA: "toKatakana"
    };
    var ROMANIZATIONS = {
      HEPBURN: "hepburn"
    };
    var DEFAULT_OPTIONS = {
      useObsoleteKana: false,
      passRomaji: false,
      convertLongVowelMark: true,
      upcaseKatakana: false,
      IMEMode: false,
      romanization: ROMANIZATIONS.HEPBURN
    };
    var LATIN_UPPERCASE_START = 65;
    var LATIN_UPPERCASE_END = 90;
    var LOWERCASE_ZENKAKU_START = 65345;
    var LOWERCASE_ZENKAKU_END = 65370;
    var UPPERCASE_ZENKAKU_START = 65313;
    var UPPERCASE_ZENKAKU_END = 65338;
    var HIRAGANA_START = 12353;
    var HIRAGANA_END = 12438;
    var KATAKANA_START = 12449;
    var KATAKANA_END = 12540;
    var KANJI_START = 19968;
    var KANJI_END = 40879;
    var KANJI_ITERATION_MARK = 12293;
    var PROLONGED_SOUND_MARK = 12540;
    var KANA_SLASH_DOT = 12539;
    var ZENKAKU_NUMBERS = [65296, 65305];
    var ZENKAKU_UPPERCASE = [UPPERCASE_ZENKAKU_START, UPPERCASE_ZENKAKU_END];
    var ZENKAKU_LOWERCASE = [LOWERCASE_ZENKAKU_START, LOWERCASE_ZENKAKU_END];
    var ZENKAKU_PUNCTUATION_1 = [65281, 65295];
    var ZENKAKU_PUNCTUATION_2 = [65306, 65311];
    var ZENKAKU_PUNCTUATION_3 = [65339, 65343];
    var ZENKAKU_PUNCTUATION_4 = [65371, 65376];
    var ZENKAKU_SYMBOLS_CURRENCY = [65504, 65518];
    var HIRAGANA_CHARS = [12352, 12447];
    var KATAKANA_CHARS = [12448, 12543];
    var HANKAKU_KATAKANA = [65382, 65439];
    var KATAKANA_PUNCTUATION = [12539, 12540];
    var KANA_PUNCTUATION = [65377, 65381];
    var CJK_SYMBOLS_PUNCTUATION = [12288, 12351];
    var COMMON_CJK = [19968, 40959];
    var RARE_CJK = [13312, 19903];
    var KANA_RANGES = [
      HIRAGANA_CHARS,
      KATAKANA_CHARS,
      KANA_PUNCTUATION,
      HANKAKU_KATAKANA
    ];
    var JA_PUNCTUATION_RANGES = [
      CJK_SYMBOLS_PUNCTUATION,
      KANA_PUNCTUATION,
      KATAKANA_PUNCTUATION,
      ZENKAKU_PUNCTUATION_1,
      ZENKAKU_PUNCTUATION_2,
      ZENKAKU_PUNCTUATION_3,
      ZENKAKU_PUNCTUATION_4,
      ZENKAKU_SYMBOLS_CURRENCY
    ];
    var JAPANESE_RANGES = [
      ...KANA_RANGES,
      ...JA_PUNCTUATION_RANGES,
      ZENKAKU_UPPERCASE,
      ZENKAKU_LOWERCASE,
      ZENKAKU_NUMBERS,
      COMMON_CJK,
      RARE_CJK
    ];
    var MODERN_ENGLISH = [0, 127];
    var HEPBURN_MACRON_RANGES = [
      [256, 257],
      [274, 275],
      [298, 299],
      [332, 333],
      [362, 363]
      // Ū ū
    ];
    var SMART_QUOTE_RANGES = [
      [8216, 8217],
      [8220, 8221]
      // “ ”
    ];
    var ROMAJI_RANGES = [MODERN_ENGLISH, ...HEPBURN_MACRON_RANGES];
    var EN_PUNCTUATION_RANGES = [
      [32, 47],
      [58, 63],
      [91, 96],
      [123, 126],
      ...SMART_QUOTE_RANGES
    ];
    function isCharJapanese(char = "") {
      return JAPANESE_RANGES.some(([start, end]) => isCharInRange(char, start, end));
    }
    function isJapanese2(input = "", allowed) {
      const augmented = typeOf(allowed) === "regexp";
      return isEmpty(input) ? false : [...input].every((char) => {
        const isJa = isCharJapanese(char);
        return !augmented ? isJa : isJa || allowed.test(char);
      });
    }
    var safeIsNaN = Number.isNaN || function ponyfill(value) {
      return typeof value === "number" && value !== value;
    };
    function isEqual(first, second) {
      if (first === second) {
        return true;
      }
      if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
      }
      return false;
    }
    function areInputsEqual(newInputs, lastInputs) {
      if (newInputs.length !== lastInputs.length) {
        return false;
      }
      for (var i = 0; i < newInputs.length; i++) {
        if (!isEqual(newInputs[i], lastInputs[i])) {
          return false;
        }
      }
      return true;
    }
    function memoizeOne(resultFn, isEqual2) {
      if (isEqual2 === void 0) {
        isEqual2 = areInputsEqual;
      }
      var cache = null;
      function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          newArgs[_i] = arguments[_i];
        }
        if (cache && cache.lastThis === this && isEqual2(newArgs, cache.lastArgs)) {
          return cache.lastResult;
        }
        var lastResult = resultFn.apply(this, newArgs);
        cache = {
          lastResult,
          lastArgs: newArgs,
          lastThis: this
        };
        return lastResult;
      }
      memoized.clear = function clear() {
        cache = null;
      };
      return memoized;
    }
    var has = Object.prototype.hasOwnProperty;
    function find(iter, tar, key) {
      for (key of iter.keys()) {
        if (dequal(key, tar))
          return key;
      }
    }
    function dequal(foo, bar) {
      var ctor, len, tmp;
      if (foo === bar)
        return true;
      if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
        if (ctor === Date)
          return foo.getTime() === bar.getTime();
        if (ctor === RegExp)
          return foo.toString() === bar.toString();
        if (ctor === Array) {
          if ((len = foo.length) === bar.length) {
            while (len-- && dequal(foo[len], bar[len]))
              ;
          }
          return len === -1;
        }
        if (ctor === Set) {
          if (foo.size !== bar.size) {
            return false;
          }
          for (len of foo) {
            tmp = len;
            if (tmp && typeof tmp === "object") {
              tmp = find(bar, tmp);
              if (!tmp)
                return false;
            }
            if (!bar.has(tmp))
              return false;
          }
          return true;
        }
        if (ctor === Map) {
          if (foo.size !== bar.size) {
            return false;
          }
          for (len of foo) {
            tmp = len[0];
            if (tmp && typeof tmp === "object") {
              tmp = find(bar, tmp);
              if (!tmp)
                return false;
            }
            if (!dequal(len[1], bar.get(tmp))) {
              return false;
            }
          }
          return true;
        }
        if (ctor === ArrayBuffer) {
          foo = new Uint8Array(foo);
          bar = new Uint8Array(bar);
        } else if (ctor === DataView) {
          if ((len = foo.byteLength) === bar.byteLength) {
            while (len-- && foo.getInt8(len) === bar.getInt8(len))
              ;
          }
          return len === -1;
        }
        if (ArrayBuffer.isView(foo)) {
          if ((len = foo.byteLength) === bar.byteLength) {
            while (len-- && foo[len] === bar[len])
              ;
          }
          return len === -1;
        }
        if (!ctor || typeof foo === "object") {
          len = 0;
          for (ctor in foo) {
            if (has.call(foo, ctor) && ++len && !has.call(bar, ctor))
              return false;
            if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor]))
              return false;
          }
          return Object.keys(bar).length === len;
        }
      }
      return foo !== foo && bar !== bar;
    }
    var mergeWithDefaultOptions = (opts = {}) => Object.assign({}, DEFAULT_OPTIONS, opts);
    function applyMapping(string, mapping, convertEnding) {
      const root = mapping;
      function nextSubtree(tree, nextChar) {
        const subtree = tree[nextChar];
        if (subtree === void 0) {
          return void 0;
        }
        return Object.assign({ "": tree[""] + nextChar }, tree[nextChar]);
      }
      function newChunk(remaining, currentCursor) {
        const firstChar = remaining.charAt(0);
        return parse(Object.assign({ "": firstChar }, root[firstChar]), remaining.slice(1), currentCursor, currentCursor + 1);
      }
      function parse(tree, remaining, lastCursor, currentCursor) {
        if (!remaining) {
          if (convertEnding || Object.keys(tree).length === 1) {
            return tree[""] ? [[lastCursor, currentCursor, tree[""]]] : [];
          }
          return [[lastCursor, currentCursor, null]];
        }
        if (Object.keys(tree).length === 1) {
          return [[lastCursor, currentCursor, tree[""]]].concat(newChunk(remaining, currentCursor));
        }
        const subtree = nextSubtree(tree, remaining.charAt(0));
        if (subtree === void 0) {
          return [[lastCursor, currentCursor, tree[""]]].concat(newChunk(remaining, currentCursor));
        }
        return parse(subtree, remaining.slice(1), lastCursor, currentCursor + 1);
      }
      return newChunk(string, 0);
    }
    function transform(tree) {
      return Object.entries(tree).reduce((map, [char, subtree]) => {
        const endOfBranch = typeOf(subtree) === "string";
        map[char] = endOfBranch ? { "": subtree } : transform(subtree);
        return map;
      }, {});
    }
    function getSubTreeOf(tree, string) {
      return string.split("").reduce((correctSubTree, char) => {
        if (correctSubTree[char] === void 0) {
          correctSubTree[char] = {};
        }
        return correctSubTree[char];
      }, tree);
    }
    function createCustomMapping(customMap = {}) {
      const customTree = {};
      if (typeOf(customMap) === "object") {
        Object.entries(customMap).forEach(([roma, kana]) => {
          let subTree = customTree;
          roma.split("").forEach((char) => {
            if (subTree[char] === void 0) {
              subTree[char] = {};
            }
            subTree = subTree[char];
          });
          subTree[""] = kana;
        });
      }
      return function makeMap(map) {
        const mapCopy = JSON.parse(JSON.stringify(map));
        function transformMap(mapSubtree, customSubtree) {
          if (mapSubtree === void 0 || typeOf(mapSubtree) === "string") {
            return customSubtree;
          }
          return Object.entries(customSubtree).reduce((newSubtree, [char, subtree]) => {
            newSubtree[char] = transformMap(mapSubtree[char], subtree);
            return newSubtree;
          }, mapSubtree);
        }
        return transformMap(mapCopy, customTree);
      };
    }
    function mergeCustomMapping(map, customMapping) {
      if (!customMapping) {
        return map;
      }
      return typeOf(customMapping) === "function" ? customMapping(map) : createCustomMapping(customMapping)(map);
    }
    var BASIC_KUNREI = {
      a: "\u3042",
      i: "\u3044",
      u: "\u3046",
      e: "\u3048",
      o: "\u304A",
      k: { a: "\u304B", i: "\u304D", u: "\u304F", e: "\u3051", o: "\u3053" },
      s: { a: "\u3055", i: "\u3057", u: "\u3059", e: "\u305B", o: "\u305D" },
      t: { a: "\u305F", i: "\u3061", u: "\u3064", e: "\u3066", o: "\u3068" },
      n: { a: "\u306A", i: "\u306B", u: "\u306C", e: "\u306D", o: "\u306E" },
      h: { a: "\u306F", i: "\u3072", u: "\u3075", e: "\u3078", o: "\u307B" },
      m: { a: "\u307E", i: "\u307F", u: "\u3080", e: "\u3081", o: "\u3082" },
      y: { a: "\u3084", u: "\u3086", o: "\u3088" },
      r: { a: "\u3089", i: "\u308A", u: "\u308B", e: "\u308C", o: "\u308D" },
      w: { a: "\u308F", i: "\u3090", e: "\u3091", o: "\u3092" },
      g: { a: "\u304C", i: "\u304E", u: "\u3050", e: "\u3052", o: "\u3054" },
      z: { a: "\u3056", i: "\u3058", u: "\u305A", e: "\u305C", o: "\u305E" },
      d: { a: "\u3060", i: "\u3062", u: "\u3065", e: "\u3067", o: "\u3069" },
      b: { a: "\u3070", i: "\u3073", u: "\u3076", e: "\u3079", o: "\u307C" },
      p: { a: "\u3071", i: "\u3074", u: "\u3077", e: "\u307A", o: "\u307D" },
      v: { a: "\u3094\u3041", i: "\u3094\u3043", u: "\u3094", e: "\u3094\u3047", o: "\u3094\u3049" }
    };
    var SPECIAL_SYMBOLS$1 = {
      ".": "\u3002",
      ",": "\u3001",
      ":": "\uFF1A",
      "/": "\u30FB",
      "!": "\uFF01",
      "?": "\uFF1F",
      "~": "\u301C",
      "-": "\u30FC",
      "\u2018": "\u300C",
      "\u2019": "\u300D",
      "\u201C": "\u300E",
      "\u201D": "\u300F",
      "[": "\uFF3B",
      "]": "\uFF3D",
      "(": "\uFF08",
      ")": "\uFF09",
      "{": "\uFF5B",
      "}": "\uFF5D"
    };
    var CONSONANTS = {
      k: "\u304D",
      s: "\u3057",
      t: "\u3061",
      n: "\u306B",
      h: "\u3072",
      m: "\u307F",
      r: "\u308A",
      g: "\u304E",
      z: "\u3058",
      d: "\u3062",
      b: "\u3073",
      p: "\u3074",
      v: "\u3094",
      q: "\u304F",
      f: "\u3075"
    };
    var SMALL_Y$1 = { ya: "\u3083", yi: "\u3043", yu: "\u3085", ye: "\u3047", yo: "\u3087" };
    var SMALL_VOWELS = { a: "\u3041", i: "\u3043", u: "\u3045", e: "\u3047", o: "\u3049" };
    var ALIASES = {
      sh: "sy",
      ch: "ty",
      cy: "ty",
      chy: "ty",
      shy: "sy",
      j: "zy",
      jy: "zy",
      // exceptions to above rules
      shi: "si",
      chi: "ti",
      tsu: "tu",
      ji: "zi",
      fu: "hu"
    };
    var SMALL_LETTERS = Object.assign({
      tu: "\u3063",
      wa: "\u308E",
      ka: "\u30F5",
      ke: "\u30F6"
    }, SMALL_VOWELS, SMALL_Y$1);
    var SPECIAL_CASES = {
      yi: "\u3044",
      wu: "\u3046",
      ye: "\u3044\u3047",
      wi: "\u3046\u3043",
      we: "\u3046\u3047",
      kwa: "\u304F\u3041",
      whu: "\u3046",
      // because it's not thya for てゃ but tha
      // and tha is not てぁ, but てゃ
      tha: "\u3066\u3083",
      thu: "\u3066\u3085",
      tho: "\u3066\u3087",
      dha: "\u3067\u3083",
      dhu: "\u3067\u3085",
      dho: "\u3067\u3087"
    };
    var AIUEO_CONSTRUCTIONS = {
      wh: "\u3046",
      kw: "\u304F",
      qw: "\u304F",
      q: "\u304F",
      gw: "\u3050",
      sw: "\u3059",
      ts: "\u3064",
      th: "\u3066",
      tw: "\u3068",
      dh: "\u3067",
      dw: "\u3069",
      fw: "\u3075",
      f: "\u3075"
    };
    function createRomajiToKanaMap$1() {
      const kanaTree = transform(BASIC_KUNREI);
      const subtreeOf = (string) => getSubTreeOf(kanaTree, string);
      Object.entries(CONSONANTS).forEach(([consonant, yKana]) => {
        Object.entries(SMALL_Y$1).forEach(([roma, kana]) => {
          subtreeOf(consonant + roma)[""] = yKana + kana;
        });
      });
      Object.entries(SPECIAL_SYMBOLS$1).forEach(([symbol, jsymbol]) => {
        subtreeOf(symbol)[""] = jsymbol;
      });
      Object.entries(AIUEO_CONSTRUCTIONS).forEach(([consonant, aiueoKana]) => {
        Object.entries(SMALL_VOWELS).forEach(([vowel, kana]) => {
          const subtree = subtreeOf(consonant + vowel);
          subtree[""] = aiueoKana + kana;
        });
      });
      ["n", "n'", "xn"].forEach((nChar) => {
        subtreeOf(nChar)[""] = "\u3093";
      });
      kanaTree.c = JSON.parse(JSON.stringify(kanaTree.k));
      Object.entries(ALIASES).forEach(([string, alternative]) => {
        const allExceptLast = string.slice(0, string.length - 1);
        const last = string.charAt(string.length - 1);
        const parentTree = subtreeOf(allExceptLast);
        parentTree[last] = JSON.parse(JSON.stringify(subtreeOf(alternative)));
      });
      function getAlternatives(string) {
        return [...Object.entries(ALIASES), ...[["c", "k"]]].reduce((list, [alt, roma]) => string.startsWith(roma) ? list.concat(string.replace(roma, alt)) : list, []);
      }
      Object.entries(SMALL_LETTERS).forEach(([kunreiRoma, kana]) => {
        const last = (char) => char.charAt(char.length - 1);
        const allExceptLast = (chars) => chars.slice(0, chars.length - 1);
        const xRoma = `x${kunreiRoma}`;
        const xSubtree = subtreeOf(xRoma);
        xSubtree[""] = kana;
        const parentTree = subtreeOf(`l${allExceptLast(kunreiRoma)}`);
        parentTree[last(kunreiRoma)] = xSubtree;
        getAlternatives(kunreiRoma).forEach((altRoma) => {
          ["l", "x"].forEach((prefix) => {
            const altParentTree = subtreeOf(prefix + allExceptLast(altRoma));
            altParentTree[last(altRoma)] = subtreeOf(prefix + kunreiRoma);
          });
        });
      });
      Object.entries(SPECIAL_CASES).forEach(([string, kana]) => {
        subtreeOf(string)[""] = kana;
      });
      function addTsu(tree) {
        return Object.entries(tree).reduce((tsuTree, [key, value]) => {
          if (!key) {
            tsuTree[key] = `\u3063${value}`;
          } else {
            tsuTree[key] = addTsu(value);
          }
          return tsuTree;
        }, {});
      }
      [...Object.keys(CONSONANTS), "c", "y", "w", "j"].forEach((consonant) => {
        const subtree = kanaTree[consonant];
        subtree[consonant] = addTsu(subtree);
      });
      delete kanaTree.n.n;
      return Object.freeze(JSON.parse(JSON.stringify(kanaTree)));
    }
    var romajiToKanaMap = null;
    function getRomajiToKanaTree() {
      if (romajiToKanaMap == null) {
        romajiToKanaMap = createRomajiToKanaMap$1();
      }
      return romajiToKanaMap;
    }
    var USE_OBSOLETE_KANA_MAP = createCustomMapping({
      wi: "\u3090",
      we: "\u3091"
    });
    function IME_MODE_MAP(map) {
      const mapCopy = JSON.parse(JSON.stringify(map));
      mapCopy.n.n = { "": "\u3093" };
      mapCopy.n[" "] = { "": "\u3093" };
      return mapCopy;
    }
    function isCharUpperCase(char = "") {
      if (isEmpty(char))
        return false;
      return isCharInRange(char, LATIN_UPPERCASE_START, LATIN_UPPERCASE_END);
    }
    function isCharLongDash(char = "") {
      if (isEmpty(char))
        return false;
      return char.charCodeAt(0) === PROLONGED_SOUND_MARK;
    }
    function isCharSlashDot(char = "") {
      if (isEmpty(char))
        return false;
      return char.charCodeAt(0) === KANA_SLASH_DOT;
    }
    function isCharHiragana(char = "") {
      if (isEmpty(char))
        return false;
      if (isCharLongDash(char))
        return true;
      return isCharInRange(char, HIRAGANA_START, HIRAGANA_END);
    }
    function hiraganaToKatakana(input = "") {
      const kata = [];
      input.split("").forEach((char) => {
        if (isCharLongDash(char) || isCharSlashDot(char)) {
          kata.push(char);
        } else if (isCharHiragana(char)) {
          const code = char.charCodeAt(0) + (KATAKANA_START - HIRAGANA_START);
          const kataChar = String.fromCharCode(code);
          kata.push(kataChar);
        } else {
          kata.push(char);
        }
      });
      return kata.join("");
    }
    var createRomajiToKanaMap = memoizeOne((IMEMode, useObsoleteKana, customKanaMapping) => {
      let map = getRomajiToKanaTree();
      map = IMEMode ? IME_MODE_MAP(map) : map;
      map = useObsoleteKana ? USE_OBSOLETE_KANA_MAP(map) : map;
      if (customKanaMapping) {
        map = mergeCustomMapping(map, customKanaMapping);
      }
      return map;
    }, dequal);
    function toKana(input = "", options = {}, map) {
      let config;
      if (!map) {
        config = mergeWithDefaultOptions(options);
        map = createRomajiToKanaMap(config.IMEMode, config.useObsoleteKana, config.customKanaMapping);
      } else {
        config = options;
      }
      return splitIntoConvertedKana(input, config, map).map((kanaToken) => {
        const [start, end, kana] = kanaToken;
        if (kana === null) {
          return input.slice(start);
        }
        const enforceHiragana = config.IMEMode === TO_KANA_METHODS.HIRAGANA;
        const enforceKatakana = config.IMEMode === TO_KANA_METHODS.KATAKANA || [...input.slice(start, end)].every(isCharUpperCase);
        return enforceHiragana || !enforceKatakana ? kana : hiraganaToKatakana(kana);
      }).join("");
    }
    function splitIntoConvertedKana(input = "", options = {}, map) {
      const { IMEMode, useObsoleteKana, customKanaMapping } = options;
      if (!map) {
        map = createRomajiToKanaMap(IMEMode, useObsoleteKana, customKanaMapping);
      }
      return applyMapping(input.toLowerCase(), map, !IMEMode);
    }
    var LISTENERS = [];
    function makeOnInput(options) {
      let prevInput;
      const mergedConfig = Object.assign({}, mergeWithDefaultOptions(options), {
        IMEMode: options.IMEMode || true
      });
      const preConfiguredMap = createRomajiToKanaMap(mergedConfig.IMEMode, mergedConfig.useObsoleteKana, mergedConfig.customKanaMapping);
      const triggers = [
        ...Object.keys(preConfiguredMap),
        ...Object.keys(preConfiguredMap).map((char) => char.toUpperCase())
      ];
      return function onInput2({ target }) {
        if (target.value !== prevInput && target.dataset.ignoreComposition !== "true") {
          convertInput(target, mergedConfig, preConfiguredMap, triggers);
        }
      };
    }
    function convertInput(target, options, map, triggers, prevInput) {
      const [head, textToConvert, tail] = splitInput(target.value, target.selectionEnd, triggers);
      const convertedText = toKana(textToConvert, options, map);
      const changed = textToConvert !== convertedText;
      if (changed) {
        const newCursor = head.length + convertedText.length;
        const newValue = head + convertedText + tail;
        target.value = newValue;
        if (tail.length) {
          setTimeout(() => target.setSelectionRange(newCursor, newCursor), 1);
        } else {
          target.setSelectionRange(newCursor, newCursor);
        }
      } else {
        target.value;
      }
    }
    function onComposition({ type, target, data }) {
      const isMacOS = /Mac/.test(window.navigator && window.navigator.platform);
      if (isMacOS) {
        if (type === "compositionupdate" && isJapanese2(data)) {
          target.dataset.ignoreComposition = "true";
        }
        if (type === "compositionend") {
          target.dataset.ignoreComposition = "false";
        }
      }
    }
    function trackListeners(id, inputHandler, compositionHandler) {
      LISTENERS = LISTENERS.concat({
        id,
        inputHandler,
        compositionHandler
      });
    }
    function untrackListeners({ id: targetId }) {
      LISTENERS = LISTENERS.filter(({ id }) => id !== targetId);
    }
    function findListeners(el) {
      return el && LISTENERS.find(({ id }) => id === el.getAttribute("data-wanakana-id"));
    }
    function splitInput(text = "", cursor = 0, triggers = []) {
      let head;
      let toConvert;
      let tail;
      if (cursor === 0 && triggers.includes(text[0])) {
        [head, toConvert, tail] = workFromStart(text, triggers);
      } else if (cursor > 0) {
        [head, toConvert, tail] = workBackwards(text, cursor);
      } else {
        [head, toConvert] = takeWhileAndSlice(text, (char) => !triggers.includes(char));
        [toConvert, tail] = takeWhileAndSlice(toConvert, (char) => !isJapanese2(char));
      }
      return [head, toConvert, tail];
    }
    function workFromStart(text, catalystChars) {
      return [
        "",
        ...takeWhileAndSlice(text, (char) => catalystChars.includes(char) || !isJapanese2(char, /[0-9]/))
      ];
    }
    function workBackwards(text = "", startIndex = 0) {
      const [toConvert, head] = takeWhileAndSlice([...text.slice(0, startIndex)].reverse(), (char) => !isJapanese2(char));
      return [
        head.reverse().join(""),
        toConvert.split("").reverse().join(""),
        text.slice(startIndex)
      ];
    }
    function takeWhileAndSlice(source = {}, predicate = (x) => !!x) {
      const result = [];
      const { length } = source;
      let i = 0;
      while (i < length && predicate(source[i], i)) {
        result.push(source[i]);
        i += 1;
      }
      return [result.join(""), source.slice(i)];
    }
    var onInput = ({ target: { value, selectionStart, selectionEnd } }) => console.log("input:", { value, selectionStart, selectionEnd });
    var onCompositionStart = () => console.log("compositionstart");
    var onCompositionUpdate = ({ target: { value, selectionStart, selectionEnd }, data }) => console.log("compositionupdate", {
      data,
      value,
      selectionStart,
      selectionEnd
    });
    var onCompositionEnd = () => console.log("compositionend");
    var events = {
      input: onInput,
      compositionstart: onCompositionStart,
      compositionupdate: onCompositionUpdate,
      compositionend: onCompositionEnd
    };
    var addDebugListeners = (input) => {
      Object.entries(events).forEach(([event, handler]) => input.addEventListener(event, handler));
    };
    var removeDebugListeners = (input) => {
      Object.entries(events).forEach(([event, handler]) => input.removeEventListener(event, handler));
    };
    var ELEMENTS = ["TEXTAREA", "INPUT"];
    var idCounter = 0;
    var newId = () => {
      idCounter += 1;
      return `${Date.now()}${idCounter}`;
    };
    function bind(element = {}, options = {}, debug = false) {
      if (!ELEMENTS.includes(element.nodeName)) {
        throw new Error(`Element provided to Wanakana bind() was not a valid input or textarea element.
 Received: (${JSON.stringify(element)})`);
      }
      if (element.hasAttribute("data-wanakana-id")) {
        return;
      }
      const onInput2 = makeOnInput(options);
      const id = newId();
      const attributes = [
        { name: "data-wanakana-id", value: id },
        { name: "lang", value: "ja" },
        { name: "autoCapitalize", value: "none" },
        { name: "autoCorrect", value: "off" },
        { name: "autoComplete", value: "off" },
        { name: "spellCheck", value: "false" }
      ];
      const previousAttributes = {};
      attributes.forEach((attribute) => {
        previousAttributes[attribute.name] = element.getAttribute(attribute.name);
        element.setAttribute(attribute.name, attribute.value);
      });
      element.dataset.previousAttributes = JSON.stringify(previousAttributes);
      element.addEventListener("input", onInput2);
      element.addEventListener("compositionupdate", onComposition);
      element.addEventListener("compositionend", onComposition);
      trackListeners(id, onInput2, onComposition);
      if (debug === true) {
        addDebugListeners(element);
      }
    }
    function unbind(element, debug = false) {
      const listeners = findListeners(element);
      if (listeners == null) {
        throw new Error(`Element provided to Wanakana unbind() had no listener registered.
 Received: ${JSON.stringify(element)}`);
      }
      const { inputHandler, compositionHandler } = listeners;
      const attributes = JSON.parse(element.dataset.previousAttributes);
      Object.keys(attributes).forEach((key) => {
        if (attributes[key]) {
          element.setAttribute(key, attributes[key]);
        } else {
          element.removeAttribute(key);
        }
      });
      element.removeAttribute("data-previous-attributes");
      element.removeAttribute("data-ignore-composition");
      element.removeEventListener("input", inputHandler);
      element.removeEventListener("compositionstart", compositionHandler);
      element.removeEventListener("compositionupdate", compositionHandler);
      element.removeEventListener("compositionend", compositionHandler);
      untrackListeners(listeners);
      if (debug === true) {
        removeDebugListeners(element);
      }
    }
    function isCharRomaji(char = "") {
      if (isEmpty(char))
        return false;
      return ROMAJI_RANGES.some(([start, end]) => isCharInRange(char, start, end));
    }
    function isRomaji(input = "", allowed) {
      const augmented = typeOf(allowed) === "regexp";
      return isEmpty(input) ? false : [...input].every((char) => {
        const isRoma = isCharRomaji(char);
        return !augmented ? isRoma : isRoma || allowed.test(char);
      });
    }
    function isCharKatakana(char = "") {
      return isCharInRange(char, KATAKANA_START, KATAKANA_END);
    }
    function isCharKana(char = "") {
      if (isEmpty(char))
        return false;
      return isCharHiragana(char) || isCharKatakana(char);
    }
    function isKana2(input = "") {
      if (isEmpty(input))
        return false;
      return [...input].every(isCharKana);
    }
    function isHiragana(input = "") {
      if (isEmpty(input))
        return false;
      return [...input].every(isCharHiragana);
    }
    function isKatakana(input = "") {
      if (isEmpty(input))
        return false;
      return [...input].every(isCharKatakana);
    }
    function isCharIterationMark(char = "") {
      if (isEmpty(char))
        return false;
      return char.charCodeAt(0) === KANJI_ITERATION_MARK;
    }
    function isCharKanji(char = "") {
      return isCharInRange(char, KANJI_START, KANJI_END) || isCharIterationMark(char);
    }
    function isKanji(input = "") {
      if (isEmpty(input))
        return false;
      return [...input].every(isCharKanji);
    }
    function isMixed(input = "", options = { passKanji: true }) {
      const chars = [...input];
      let hasKanji = false;
      if (!options.passKanji) {
        hasKanji = chars.some(isKanji);
      }
      return (chars.some(isHiragana) || chars.some(isKatakana)) && chars.some(isRomaji) && !hasKanji;
    }
    var isCharInitialLongDash = (char, index) => isCharLongDash(char) && index < 1;
    var isCharInnerLongDash = (char, index) => isCharLongDash(char) && index > 0;
    var isKanaAsSymbol = (char) => ["\u30F6", "\u30F5"].includes(char);
    var LONG_VOWELS = {
      a: "\u3042",
      i: "\u3044",
      u: "\u3046",
      e: "\u3048",
      o: "\u3046"
    };
    function katakanaToHiragana(input = "", toRomaji2, { isDestinationRomaji, convertLongVowelMark } = {}) {
      let previousKana = "";
      return input.split("").reduce((hira, char, index) => {
        if (isCharSlashDot(char) || isCharInitialLongDash(char, index) || isKanaAsSymbol(char)) {
          return hira.concat(char);
        }
        if (convertLongVowelMark && previousKana && isCharInnerLongDash(char, index)) {
          const romaji = toRomaji2(previousKana).slice(-1);
          if (isCharKatakana(input[index - 1]) && romaji === "o" && isDestinationRomaji) {
            return hira.concat("\u304A");
          }
          return hira.concat(LONG_VOWELS[romaji]);
        }
        if (!isCharLongDash(char) && isCharKatakana(char)) {
          const code = char.charCodeAt(0) + (HIRAGANA_START - KATAKANA_START);
          const hiraChar = String.fromCharCode(code);
          previousKana = hiraChar;
          return hira.concat(hiraChar);
        }
        previousKana = "";
        return hira.concat(char);
      }, []).join("");
    }
    var kanaToHepburnMap = null;
    var BASIC_ROMAJI = {
      \u3042: "a",
      \u3044: "i",
      \u3046: "u",
      \u3048: "e",
      \u304A: "o",
      \u304B: "ka",
      \u304D: "ki",
      \u304F: "ku",
      \u3051: "ke",
      \u3053: "ko",
      \u3055: "sa",
      \u3057: "shi",
      \u3059: "su",
      \u305B: "se",
      \u305D: "so",
      \u305F: "ta",
      \u3061: "chi",
      \u3064: "tsu",
      \u3066: "te",
      \u3068: "to",
      \u306A: "na",
      \u306B: "ni",
      \u306C: "nu",
      \u306D: "ne",
      \u306E: "no",
      \u306F: "ha",
      \u3072: "hi",
      \u3075: "fu",
      \u3078: "he",
      \u307B: "ho",
      \u307E: "ma",
      \u307F: "mi",
      \u3080: "mu",
      \u3081: "me",
      \u3082: "mo",
      \u3089: "ra",
      \u308A: "ri",
      \u308B: "ru",
      \u308C: "re",
      \u308D: "ro",
      \u3084: "ya",
      \u3086: "yu",
      \u3088: "yo",
      \u308F: "wa",
      \u3090: "wi",
      \u3091: "we",
      \u3092: "wo",
      \u3093: "n",
      \u304C: "ga",
      \u304E: "gi",
      \u3050: "gu",
      \u3052: "ge",
      \u3054: "go",
      \u3056: "za",
      \u3058: "ji",
      \u305A: "zu",
      \u305C: "ze",
      \u305E: "zo",
      \u3060: "da",
      \u3062: "ji",
      \u3065: "zu",
      \u3067: "de",
      \u3069: "do",
      \u3070: "ba",
      \u3073: "bi",
      \u3076: "bu",
      \u3079: "be",
      \u307C: "bo",
      \u3071: "pa",
      \u3074: "pi",
      \u3077: "pu",
      \u307A: "pe",
      \u307D: "po",
      \u3094\u3041: "va",
      \u3094\u3043: "vi",
      \u3094: "vu",
      \u3094\u3047: "ve",
      \u3094\u3049: "vo"
    };
    var SPECIAL_SYMBOLS = {
      "\u3002": ".",
      "\u3001": ",",
      "\uFF1A": ":",
      "\u30FB": "/",
      "\uFF01": "!",
      "\uFF1F": "?",
      "\u301C": "~",
      "\u30FC": "-",
      "\u300C": "\u2018",
      "\u300D": "\u2019",
      "\u300E": "\u201C",
      "\u300F": "\u201D",
      "\uFF3B": "[",
      "\uFF3D": "]",
      "\uFF08": "(",
      "\uFF09": ")",
      "\uFF5B": "{",
      "\uFF5D": "}",
      "\u3000": " "
    };
    var AMBIGUOUS_VOWELS = ["\u3042", "\u3044", "\u3046", "\u3048", "\u304A", "\u3084", "\u3086", "\u3088"];
    var SMALL_Y = { \u3083: "ya", \u3085: "yu", \u3087: "yo" };
    var SMALL_Y_EXTRA = { \u3043: "yi", \u3047: "ye" };
    var SMALL_AIUEO = {
      \u3041: "a",
      \u3043: "i",
      \u3045: "u",
      \u3047: "e",
      \u3049: "o"
    };
    var YOON_KANA = [
      "\u304D",
      "\u306B",
      "\u3072",
      "\u307F",
      "\u308A",
      "\u304E",
      "\u3073",
      "\u3074",
      "\u3094",
      "\u304F",
      "\u3075"
    ];
    var YOON_EXCEPTIONS = {
      \u3057: "sh",
      \u3061: "ch",
      \u3058: "j",
      \u3062: "j"
    };
    var SMALL_KANA = {
      \u3063: "",
      \u3083: "ya",
      \u3085: "yu",
      \u3087: "yo",
      \u3041: "a",
      \u3043: "i",
      \u3045: "u",
      \u3047: "e",
      \u3049: "o"
    };
    var SOKUON_WHITELIST = {
      b: "b",
      c: "t",
      d: "d",
      f: "f",
      g: "g",
      h: "h",
      j: "j",
      k: "k",
      m: "m",
      p: "p",
      q: "q",
      r: "r",
      s: "s",
      t: "t",
      v: "v",
      w: "w",
      x: "x",
      z: "z"
    };
    function getKanaToHepburnTree() {
      if (kanaToHepburnMap == null) {
        kanaToHepburnMap = createKanaToHepburnMap();
      }
      return kanaToHepburnMap;
    }
    function getKanaToRomajiTree(romanization) {
      switch (romanization) {
        case ROMANIZATIONS.HEPBURN:
          return getKanaToHepburnTree();
        default:
          return {};
      }
    }
    function createKanaToHepburnMap() {
      const romajiTree = transform(BASIC_ROMAJI);
      const subtreeOf = (string) => getSubTreeOf(romajiTree, string);
      const setTrans = (string, transliteration) => {
        subtreeOf(string)[""] = transliteration;
      };
      Object.entries(SPECIAL_SYMBOLS).forEach(([jsymbol, symbol]) => {
        subtreeOf(jsymbol)[""] = symbol;
      });
      [...Object.entries(SMALL_Y), ...Object.entries(SMALL_AIUEO)].forEach(([roma, kana]) => {
        setTrans(roma, kana);
      });
      YOON_KANA.forEach((kana) => {
        const firstRomajiChar = subtreeOf(kana)[""][0];
        Object.entries(SMALL_Y).forEach(([yKana, yRoma]) => {
          setTrans(kana + yKana, firstRomajiChar + yRoma);
        });
        Object.entries(SMALL_Y_EXTRA).forEach(([yKana, yRoma]) => {
          setTrans(kana + yKana, firstRomajiChar + yRoma);
        });
      });
      Object.entries(YOON_EXCEPTIONS).forEach(([kana, roma]) => {
        Object.entries(SMALL_Y).forEach(([yKana, yRoma]) => {
          setTrans(kana + yKana, roma + yRoma[1]);
        });
        setTrans(`${kana}\u3043`, `${roma}yi`);
        setTrans(`${kana}\u3047`, `${roma}e`);
      });
      romajiTree["\u3063"] = resolveTsu(romajiTree);
      Object.entries(SMALL_KANA).forEach(([kana, roma]) => {
        setTrans(kana, roma);
      });
      AMBIGUOUS_VOWELS.forEach((kana) => {
        setTrans(`\u3093${kana}`, `n'${subtreeOf(kana)[""]}`);
      });
      return Object.freeze(JSON.parse(JSON.stringify(romajiTree)));
    }
    function resolveTsu(tree) {
      return Object.entries(tree).reduce((tsuTree, [key, value]) => {
        if (!key) {
          const consonant = value.charAt(0);
          tsuTree[key] = Object.keys(SOKUON_WHITELIST).includes(consonant) ? SOKUON_WHITELIST[consonant] + value : value;
        } else {
          tsuTree[key] = resolveTsu(value);
        }
        return tsuTree;
      }, {});
    }
    var createKanaToRomajiMap = memoizeOne((romanization, customRomajiMapping) => {
      let map = getKanaToRomajiTree(romanization);
      if (customRomajiMapping) {
        map = mergeCustomMapping(map, customRomajiMapping);
      }
      return map;
    }, dequal);
    function toRomaji(input = "", options = {}, map) {
      const config = mergeWithDefaultOptions(options);
      if (!map) {
        map = createKanaToRomajiMap(config.romanization, config.customRomajiMapping);
      }
      return splitIntoRomaji(input, config, map).map((romajiToken) => {
        const [start, end, romaji] = romajiToken;
        const makeUpperCase = config.upcaseKatakana && isKatakana(input.slice(start, end));
        return makeUpperCase ? romaji.toUpperCase() : romaji;
      }).join("");
    }
    function splitIntoRomaji(input, options, map) {
      if (!map) {
        map = createKanaToRomajiMap(options.romanization, options.customRomajiMapping);
      }
      const config = Object.assign({}, { isDestinationRomaji: true }, options);
      return applyMapping(katakanaToHiragana(input, toRomaji, config), map, !options.IMEMode);
    }
    function isCharEnglishPunctuation(char = "") {
      if (isEmpty(char))
        return false;
      return EN_PUNCTUATION_RANGES.some(([start, end]) => isCharInRange(char, start, end));
    }
    function toHiragana(input = "", options = {}) {
      const config = mergeWithDefaultOptions(options);
      if (config.passRomaji) {
        return katakanaToHiragana(input, toRomaji, config);
      }
      if (isMixed(input, { passKanji: true })) {
        const convertedKatakana = katakanaToHiragana(input, toRomaji, config);
        return toKana(convertedKatakana.toLowerCase(), config);
      }
      if (isRomaji(input) || isCharEnglishPunctuation(input)) {
        return toKana(input.toLowerCase(), config);
      }
      return katakanaToHiragana(input, toRomaji, config);
    }
    function toKatakana(input = "", options = {}) {
      const mergedOptions = mergeWithDefaultOptions(options);
      if (mergedOptions.passRomaji) {
        return hiraganaToKatakana(input);
      }
      if (isMixed(input) || isRomaji(input) || isCharEnglishPunctuation(input)) {
        const hiragana = toKana(input.toLowerCase(), mergedOptions);
        return hiraganaToKatakana(hiragana);
      }
      return hiraganaToKatakana(input);
    }
    function isCharJapanesePunctuation(char = "") {
      if (isEmpty(char) || isCharIterationMark(char))
        return false;
      return JA_PUNCTUATION_RANGES.some(([start, end]) => isCharInRange(char, start, end));
    }
    var isCharEnSpace = (x) => x === " ";
    var isCharJaSpace = (x) => x === "\u3000";
    var isCharJaNum = (x) => /[０-９]/.test(x);
    var isCharEnNum = (x) => /[0-9]/.test(x);
    var TOKEN_TYPES = {
      EN: "en",
      JA: "ja",
      EN_NUM: "englishNumeral",
      JA_NUM: "japaneseNumeral",
      EN_PUNC: "englishPunctuation",
      JA_PUNC: "japanesePunctuation",
      KANJI: "kanji",
      HIRAGANA: "hiragana",
      KATAKANA: "katakana",
      SPACE: "space",
      OTHER: "other"
    };
    function getType(input, compact = false) {
      const { EN, JA, EN_NUM, JA_NUM, EN_PUNC, JA_PUNC, KANJI, HIRAGANA, KATAKANA, SPACE, OTHER } = TOKEN_TYPES;
      if (compact) {
        switch (true) {
          case isCharJaNum(input):
            return OTHER;
          case isCharEnNum(input):
            return OTHER;
          case isCharEnSpace(input):
            return EN;
          case isCharEnglishPunctuation(input):
            return OTHER;
          case isCharJaSpace(input):
            return JA;
          case isCharJapanesePunctuation(input):
            return OTHER;
          case isCharJapanese(input):
            return JA;
          case isCharRomaji(input):
            return EN;
          default:
            return OTHER;
        }
      } else {
        switch (true) {
          case isCharJaSpace(input):
            return SPACE;
          case isCharEnSpace(input):
            return SPACE;
          case isCharJaNum(input):
            return JA_NUM;
          case isCharEnNum(input):
            return EN_NUM;
          case isCharEnglishPunctuation(input):
            return EN_PUNC;
          case isCharJapanesePunctuation(input):
            return JA_PUNC;
          case isCharKanji(input):
            return KANJI;
          case isCharHiragana(input):
            return HIRAGANA;
          case isCharKatakana(input):
            return KATAKANA;
          case isCharJapanese(input):
            return JA;
          case isCharRomaji(input):
            return EN;
          default:
            return OTHER;
        }
      }
    }
    function tokenize(input, { compact = false, detailed = false } = {}) {
      if (input == null || isEmpty(input)) {
        return [];
      }
      const chars = [...input];
      let initial = chars.shift();
      let prevType = getType(initial, compact);
      initial = detailed ? { type: prevType, value: initial } : initial;
      const result = chars.reduce((tokens, char) => {
        const currType = getType(char, compact);
        const sameType = currType === prevType;
        prevType = currType;
        let newValue = char;
        if (sameType) {
          newValue = (detailed ? tokens.pop().value : tokens.pop()) + newValue;
        }
        return detailed ? tokens.concat({ type: currType, value: newValue }) : tokens.concat(newValue);
      }, [initial]);
      return result;
    }
    var isLeadingWithoutInitialKana = (input, leading) => leading && !isKana2(input[0]);
    var isTrailingWithoutFinalKana = (input, leading) => !leading && !isKana2(input[input.length - 1]);
    var isInvalidMatcher = (input, matchKanji) => matchKanji && ![...matchKanji].some(isKanji) || !matchKanji && isKana2(input);
    function stripOkurigana(input = "", { leading = false, matchKanji = "" } = {}) {
      if (!isJapanese2(input) || isLeadingWithoutInitialKana(input, leading) || isTrailingWithoutFinalKana(input, leading) || isInvalidMatcher(input, matchKanji)) {
        return input;
      }
      const chars = matchKanji || input;
      const okuriganaRegex = new RegExp(leading ? `^${tokenize(chars).shift()}` : `${tokenize(chars).pop()}$`);
      return input.replace(okuriganaRegex, "");
    }
    exports2.ROMANIZATIONS = ROMANIZATIONS;
    exports2.TO_KANA_METHODS = TO_KANA_METHODS;
    exports2.VERSION = VERSION;
    exports2.bind = bind;
    exports2.isHiragana = isHiragana;
    exports2.isJapanese = isJapanese2;
    exports2.isKana = isKana2;
    exports2.isKanji = isKanji;
    exports2.isKatakana = isKatakana;
    exports2.isMixed = isMixed;
    exports2.isRomaji = isRomaji;
    exports2.stripOkurigana = stripOkurigana;
    exports2.toHiragana = toHiragana;
    exports2.toKana = toKana;
    exports2.toKatakana = toKatakana;
    exports2.toRomaji = toRomaji;
    exports2.tokenize = tokenize;
    exports2.unbind = unbind;
  }
});

// node_modules/ts-dedent/dist/index.js
var require_dist = __commonJS({
  "node_modules/ts-dedent/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.dedent = void 0;
    function dedent2(templ) {
      var values = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
      }
      var strings = Array.from(typeof templ === "string" ? [templ] : templ);
      strings[strings.length - 1] = strings[strings.length - 1].replace(/\r?\n([\t ]*)$/, "");
      var indentLengths = strings.reduce(function(arr, str) {
        var matches = str.match(/\n([\t ]+|(?!\s).)/g);
        if (matches) {
          return arr.concat(matches.map(function(match) {
            var _a, _b;
            return (_b = (_a = match.match(/[\t ]/g)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
          }));
        }
        return arr;
      }, []);
      if (indentLengths.length) {
        var pattern_1 = new RegExp("\n[	 ]{" + Math.min.apply(Math, indentLengths) + "}", "g");
        strings = strings.map(function(str) {
          return str.replace(pattern_1, "\n");
        });
      }
      strings[0] = strings[0].replace(/^\r?\n/, "");
      var string = strings[0];
      values.forEach(function(value, i) {
        var endentations = string.match(/(?:^|\n)( *)$/);
        var endentation = endentations ? endentations[1] : "";
        var indentedValue = value;
        if (typeof value === "string" && value.includes("\n")) {
          indentedValue = String(value).split("\n").map(function(str, i2) {
            return i2 === 0 ? str : "" + endentation + str;
          }).join("\n");
        }
        string += indentedValue + strings[i + 1];
      });
      return string;
    }
    exports2.dedent = dedent2;
    exports2.default = dedent2;
  }
});

// src/translate.tsx
var translate_exports = {};
__export(translate_exports, {
  default: () => Command
});
module.exports = __toCommonJS(translate_exports);
var import_node_fs = __toESM(require("node:fs"));

// src/constants.ts
var import_node_path = __toESM(require("node:path"));
var import_api = require("@raycast/api");
var DOWNLOAD_PATH = import_node_path.default.join(import_api.environment.supportPath, "jitendex-yomitan.zip");
var DB_PATH = import_node_path.default.join(import_api.environment.supportPath, "jitendex.db");
var SQLITE_WASM_PATH = import_node_path.default.join(import_api.environment.assetsPath, "sql-wasm-fts5.wasm");

// src/translate.tsx
var import_react = require("react");
var import_sql = __toESM(require_sql_wasm());
var import_api2 = require("@raycast/api");

// src/utils.ts
var import_wanakana = __toESM(require_cjs());
function sql(strings, ...expr) {
  return strings.map((str, index) => str + (expr.length > index ? String(expr[index]) : "")).join("");
}
function normalizeKana(text) {
  const trimmedText = text.trim().toLowerCase();
  return import_wanakana.default.toHiragana(trimmedText, {
    // Don't convert long vowel marks to hiragana
    // (e.g. ケーキ -> けえき. Instead, it should be けーき)
    convertLongVowelMark: false
  });
}

// src/translate.tsx
var import_wanakana2 = __toESM(require_cjs());

// src/dictionary/search.ts
function searchKana(db2, query) {
  return queryEntries(
    db2,
    sql`
      SELECT DISTINCT data FROM entries WHERE entry_id IN (
        SELECT entry_id FROM kana_index WHERE kana_text LIKE :query LIMIT 20
      )`,
    { ":query": `${query}%` }
  );
}
function searchKanji(db2, query) {
  return queryEntries(
    db2,
    sql`
      SELECT DISTINCT data FROM entries WHERE entry_id IN (
        SELECT entry_id FROM kanji_index WHERE kanji_text LIKE :query LIMIT 20
      )`,
    { ":query": `${query}%` }
  );
}
function searchEnglish(db2, query) {
  return queryEntries(
    db2,
    sql`
      SELECT
        e.data,
        -- Boost (lower rank) for entries with many common forms.
        -- Boost (lower rank) for entries with kanji.
        -- Penalize (higher rank) for non-primary senses.
        MIN(gf.rank - common_forms_count - e.has_kanji + (gf.sense_idx * 0.2)) AS rank
      FROM gloss_fts_index gf
      JOIN entries e ON gf.entry_id = e.entry_id
      WHERE gf.gloss_fts_index MATCH :query
      GROUP BY e.entry_id -- Get one result per dictionary entry
      ORDER BY rank ASC LIMIT 20
    `,
    { ":query": `"${query}"` }
  );
}
function queryEntries(db2, sql2, params) {
  const stmt = db2.prepare(sql2, params);
  const results = [];
  while (stmt.step()) {
    const result = stmt.getAsObject();
    try {
      const data = JSON.parse(result.data);
      results.push(data);
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  }
  stmt.free();
  return results;
}

// src/translate.tsx
var import_ts_dedent = __toESM(require_dist());
var import_jsx_runtime = require("react/jsx-runtime");
function isDbSetup() {
  return import_node_fs.default.existsSync(DB_PATH);
}
var db;
async function getDb() {
  if (db) return db;
  const readWasm = import_node_fs.default.promises.readFile(SQLITE_WASM_PATH);
  const readDb = import_node_fs.default.promises.readFile(DB_PATH);
  const SQL = await (0, import_sql.default)({ wasmBinary: await readWasm });
  db = new SQL.Database(await readDb);
  return db;
}
function search(db2, query) {
  const japaneseQuery = normalizeKana(query);
  if (!(0, import_wanakana2.isJapanese)(japaneseQuery)) {
    return searchEnglish(db2, query);
  }
  if ((0, import_wanakana2.isKana)(japaneseQuery)) {
    return searchKana(db2, japaneseQuery);
  }
  return searchKanji(db2, japaneseQuery);
}
function formatKanjiItem(item) {
  const kanji = item.term !== item.reading ? item.term : void 0;
  const kana = item.reading;
  const definition = item.senses.at(0)?.glosses.at(0);
  let glossCount = 0;
  const formatGlosses = (sense) => {
    const formattedGlosses = [];
    for (const gloss of sense.glosses) {
      glossCount += 1;
      formattedGlosses.push(`${glossCount}. ${gloss}`);
    }
    const example = sense.example;
    return import_ts_dedent.default`
      ${formattedGlosses.join("\n")}
        > ${example?.japanese || ""}
        >
        > ${example?.english || ""}
    `;
  };
  const formatSense = (sense) => {
    const pos = sense.partOfSpeech.join(", ");
    return import_ts_dedent.default`
      ${pos ? `##### ${pos}` : ""}
      ${formatGlosses(sense)}
    `;
  };
  const sensesMarkdown = item.senses.map(formatSense).join("\n\n");
  const detail = import_ts_dedent.default`
    ## ${kanji || kana}
    ${kanji ? kana : ""}

    ${sensesMarkdown}
  `;
  return {
    id: item.id,
    kanji,
    kana,
    definition,
    detail
  };
}
function getInitialQuery(launchContext, fallbackText) {
  return launchContext?.query ?? launchContext?.text?.trim() ?? fallbackText ?? "";
}
function hasInvalidOCRContext(launchContext) {
  return Boolean(launchContext?.error || launchContext?.text === null || launchContext?.text?.trim() === "");
}
function Command({ launchContext, fallbackText }) {
  if (hasInvalidOCRContext(launchContext)) {
    void (0, import_api2.closeMainWindow)();
    return null;
  }
  const [isSetup] = (0, import_react.useState)(isDbSetup);
  if (!isSetup) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api2.List, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_api2.List.EmptyView,
      {
        title: "Dictionary not set up",
        description: 'Press "Return" to set up the dictionary.',
        actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api2.ActionPanel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_api2.Action,
          {
            title: "Update Dictionary",
            onAction: () => {
              (0, import_api2.launchCommand)({ name: "update-dictionary", type: import_api2.LaunchType.UserInitiated });
            }
          }
        ) })
      }
    ) });
  }
  const [db2, setDb] = (0, import_react.useState)();
  const [query, setQuery] = (0, import_react.useState)(getInitialQuery(launchContext, fallbackText));
  const [showingDetail, setShowingDetail] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    getDb().then((db3) => setDb(db3));
    return () => db2?.close();
  }, []);
  const results = (0, import_react.useMemo)(() => {
    if (!db2 || query.trim() === "") return [];
    const res = search(db2, query);
    return res;
  }, [db2, query]);
  const formattedData = db2 ? results.map((item) => formatKanjiItem(item)) : [];
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_api2.List,
    {
      navigationTitle: "Translate Japanese",
      searchBarPlaceholder: "Search Yomicast...",
      searchText: query,
      onSearchTextChange: setQuery,
      isShowingDetail: showingDetail,
      children: formattedData.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_api2.List.Item,
        {
          title: item.kanji ?? item.kana,
          subtitle: item.kanji && !showingDetail ? item.kana : void 0,
          accessories: [{ text: item.definition }],
          detail: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api2.List.Item.Detail, { markdown: item.detail }),
          actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api2.ActionPanel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api2.Action, { title: "Toggle Detail", onAction: () => setShowingDetail(!showingDetail) }) })
        },
        item.id
      ))
    }
  );
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvc3FsLmpzL2Rpc3Qvc3FsLXdhc20uanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvc3JjL3V0aWxzL3R5cGVPZi5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9zcmMvdXRpbHMvaXNFbXB0eS5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9zcmMvdXRpbHMvaXNDaGFySW5SYW5nZS5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9zcmMvY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL3NyYy91dGlscy9pc0NoYXJKYXBhbmVzZS5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9zcmMvaXNKYXBhbmVzZS5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9ub2RlX21vZHVsZXMvbWVtb2l6ZS1vbmUvZGlzdC9tZW1vaXplLW9uZS5lc20uanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvbm9kZV9tb2R1bGVzL2RlcXVhbC9kaXN0L2luZGV4Lm1qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9zcmMvdXRpbHMvbWVyZ2VXaXRoRGVmYXVsdE9wdGlvbnMuanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvc3JjL3V0aWxzL2thbmFNYXBwaW5nLmpzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL3NyYy91dGlscy9yb21hamlUb0thbmFNYXAuanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvc3JjL3V0aWxzL2lzQ2hhclVwcGVyQ2FzZS5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9zcmMvdXRpbHMvaXNDaGFyTG9uZ0Rhc2guanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvc3JjL3V0aWxzL2lzQ2hhclNsYXNoRG90LmpzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL3NyYy91dGlscy9pc0NoYXJIaXJhZ2FuYS5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9zcmMvdXRpbHMvaGlyYWdhbmFUb0thdGFrYW5hLmpzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL3NyYy90b0thbmEuanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvc3JjL3V0aWxzL2RvbS5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9zcmMvdXRpbHMvbG9nSW5wdXRFdmVudHMuanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvc3JjL2JpbmQuanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvc3JjL3VuYmluZC5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9zcmMvdXRpbHMvaXNDaGFyUm9tYWppLmpzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL3NyYy9pc1JvbWFqaS5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9zcmMvdXRpbHMvaXNDaGFyS2F0YWthbmEuanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvc3JjL3V0aWxzL2lzQ2hhckthbmEuanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvc3JjL2lzS2FuYS5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9zcmMvaXNIaXJhZ2FuYS5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9zcmMvaXNLYXRha2FuYS5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9zcmMvdXRpbHMvaXNDaGFySXRlcmF0aW9uTWFyay5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9zcmMvdXRpbHMvaXNDaGFyS2FuamkuanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvc3JjL2lzS2FuamkuanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvc3JjL2lzTWl4ZWQuanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvc3JjL3V0aWxzL2thdGFrYW5hVG9IaXJhZ2FuYS5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9zcmMvdXRpbHMva2FuYVRvUm9tYWppTWFwLmpzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL3NyYy90b1JvbWFqaS5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9zcmMvdXRpbHMvaXNDaGFyRW5nbGlzaFB1bmN0dWF0aW9uLmpzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL3NyYy90b0hpcmFnYW5hLmpzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL3NyYy90b0thdGFrYW5hLmpzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL3NyYy91dGlscy9pc0NoYXJKYXBhbmVzZVB1bmN0dWF0aW9uLmpzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL3NyYy90b2tlbml6ZS5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9zcmMvc3RyaXBPa3VyaWdhbmEuanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvdHMtZGVkZW50L3NyYy9pbmRleC50cyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL3NyYy90cmFuc2xhdGUudHN4IiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vc3JjL2NvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL3NyYy91dGlscy50cyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL3NyYy9kaWN0aW9uYXJ5L3NlYXJjaC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXG4vLyBXZSBhcmUgbW9kdWxhcml6aW5nIHRoaXMgbWFudWFsbHkgYmVjYXVzZSB0aGUgY3VycmVudCBtb2R1bGFyaXplIHNldHRpbmcgaW4gRW1zY3JpcHRlbiBoYXMgc29tZSBpc3N1ZXM6XG4vLyBodHRwczovL2dpdGh1Yi5jb20va3JpcGtlbi9lbXNjcmlwdGVuL2lzc3Vlcy81ODIwXG4vLyBJbiBhZGRpdGlvbiwgV2hlbiB5b3UgdXNlIGVtY2MncyBtb2R1bGFyaXphdGlvbiwgaXQgc3RpbGwgZXhwZWN0cyB0byBleHBvcnQgYSBnbG9iYWwgb2JqZWN0IGNhbGxlZCBgTW9kdWxlYCxcbi8vIHdoaWNoIGlzIGFibGUgdG8gYmUgdXNlZC9jYWxsZWQgYmVmb3JlIHRoZSBXQVNNIGlzIGxvYWRlZC5cbi8vIFRoZSBtb2R1bGFyaXphdGlvbiBiZWxvdyBleHBvcnRzIGEgcHJvbWlzZSB0aGF0IGxvYWRzIGFuZCByZXNvbHZlcyB0byB0aGUgYWN0dWFsIHNxbC5qcyBtb2R1bGUuXG4vLyBUaGF0IHdheSwgdGhpcyBtb2R1bGUgY2FuJ3QgYmUgdXNlZCBiZWZvcmUgdGhlIFdBU00gaXMgZmluaXNoZWQgbG9hZGluZy5cblxuLy8gV2UgYXJlIGdvaW5nIHRvIGRlZmluZSBhIGZ1bmN0aW9uIHRoYXQgYSB1c2VyIHdpbGwgY2FsbCB0byBzdGFydCBsb2FkaW5nIGluaXRpYWxpemluZyBvdXIgU3FsLmpzIGxpYnJhcnlcbi8vIEhvd2V2ZXIsIHRoYXQgZnVuY3Rpb24gbWlnaHQgYmUgY2FsbGVkIG11bHRpcGxlIHRpbWVzLCBhbmQgb24gc3Vic2VxdWVudCBjYWxscywgd2UgZG9uJ3QgYWN0dWFsbHkgd2FudCBpdCB0byBpbnN0YW50aWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgTW9kdWxlXG4vLyBJbnN0ZWFkLCB3ZSB3YW50IHRvIHJldHVybiB0aGUgcHJldmlvdXNseSBsb2FkZWQgbW9kdWxlXG5cbi8vIFRPRE86IE1ha2UgdGhpcyBub3QgZGVjbGFyZSBhIGdsb2JhbCBpZiB1c2VkIGluIHRoZSBicm93c2VyXG52YXIgaW5pdFNxbEpzUHJvbWlzZSA9IHVuZGVmaW5lZDtcblxudmFyIGluaXRTcWxKcyA9IGZ1bmN0aW9uIChtb2R1bGVDb25maWcpIHtcblxuICAgIGlmIChpbml0U3FsSnNQcm9taXNlKXtcbiAgICAgIHJldHVybiBpbml0U3FsSnNQcm9taXNlO1xuICAgIH1cbiAgICAvLyBJZiB3ZSdyZSBoZXJlLCB3ZSd2ZSBuZXZlciBjYWxsZWQgdGhpcyBmdW5jdGlvbiBiZWZvcmVcbiAgICBpbml0U3FsSnNQcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmVNb2R1bGUsIHJlamVjdCkge1xuXG4gICAgICAgIC8vIFdlIGFyZSBtb2R1bGFyaXppbmcgdGhpcyBtYW51YWxseSBiZWNhdXNlIHRoZSBjdXJyZW50IG1vZHVsYXJpemUgc2V0dGluZyBpbiBFbXNjcmlwdGVuIGhhcyBzb21lIGlzc3VlczpcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2tyaXBrZW4vZW1zY3JpcHRlbi9pc3N1ZXMvNTgyMFxuXG4gICAgICAgIC8vIFRoZSB3YXkgdG8gYWZmZWN0IHRoZSBsb2FkaW5nIG9mIGVtY2MgY29tcGlsZWQgbW9kdWxlcyBpcyB0byBjcmVhdGUgYSB2YXJpYWJsZSBjYWxsZWQgYE1vZHVsZWAgYW5kIGFkZFxuICAgICAgICAvLyBwcm9wZXJ0aWVzIHRvIGl0LCBsaWtlIGBwcmVSdW5gLCBgcG9zdFJ1bmAsIGV0Y1xuICAgICAgICAvLyBXZSBhcmUgdXNpbmcgdGhhdCB0byBnZXQgbm90aWZpZWQgd2hlbiB0aGUgV0FTTSBoYXMgZmluaXNoZWQgbG9hZGluZy5cbiAgICAgICAgLy8gT25seSB0aGVuIHdpbGwgd2UgcmV0dXJuIG91ciBwcm9taXNlXG5cbiAgICAgICAgLy8gSWYgdGhleSBwYXNzZWQgaW4gYSBtb2R1bGVDb25maWcgb2JqZWN0LCB1c2UgdGhhdFxuICAgICAgICAvLyBPdGhlcndpc2UsIGluaXRpYWxpemUgTW9kdWxlIHRvIHRoZSBlbXB0eSBvYmplY3RcbiAgICAgICAgdmFyIE1vZHVsZSA9IHR5cGVvZiBtb2R1bGVDb25maWcgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlQ29uZmlnIDoge307XG5cbiAgICAgICAgLy8gRU1DQyBvbmx5IGFsbG93cyBmb3IgYSBzaW5nbGUgb25BYm9ydCBmdW5jdGlvbiAobm90IGFuIGFycmF5IG9mIGZ1bmN0aW9ucylcbiAgICAgICAgLy8gU28gaWYgdGhlIHVzZXIgZGVmaW5lZCB0aGVpciBvd24gb25BYm9ydCBmdW5jdGlvbiwgd2UgcmVtZW1iZXIgaXQgYW5kIGNhbGwgaXRcbiAgICAgICAgdmFyIG9yaWdpbmFsT25BYm9ydEZ1bmN0aW9uID0gTW9kdWxlWydvbkFib3J0J107XG4gICAgICAgIE1vZHVsZVsnb25BYm9ydCddID0gZnVuY3Rpb24gKGVycm9yVGhhdENhdXNlZEFib3J0KSB7XG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGVycm9yVGhhdENhdXNlZEFib3J0KSk7XG4gICAgICAgICAgICBpZiAob3JpZ2luYWxPbkFib3J0RnVuY3Rpb24pe1xuICAgICAgICAgICAgICBvcmlnaW5hbE9uQWJvcnRGdW5jdGlvbihlcnJvclRoYXRDYXVzZWRBYm9ydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgTW9kdWxlWydwb3N0UnVuJ10gPSBNb2R1bGVbJ3Bvc3RSdW4nXSB8fCBbXTtcbiAgICAgICAgTW9kdWxlWydwb3N0UnVuJ10ucHVzaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBXaGVuIEVtc2NyaXB0ZWQgY2FsbHMgcG9zdFJ1biwgdGhpcyBwcm9taXNlIHJlc29sdmVzIHdpdGggdGhlIGJ1aWx0IE1vZHVsZVxuICAgICAgICAgICAgcmVzb2x2ZU1vZHVsZShNb2R1bGUpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBUaGVyZSBpcyBhIHNlY3Rpb24gb2YgY29kZSBpbiB0aGUgZW1jYy1nZW5lcmF0ZWQgY29kZSBiZWxvdyB0aGF0IGxvb2tzIGxpa2UgdGhpczpcbiAgICAgICAgLy8gKE5vdGUgdGhhdCB0aGlzIGlzIGxvd2VyY2FzZSBgbW9kdWxlYClcbiAgICAgICAgLy8gaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vICAgICBtb2R1bGVbJ2V4cG9ydHMnXSA9IE1vZHVsZTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBXaGVuIHRoYXQgcnVucywgaXQncyBnb2luZyB0byBvdmVyd3JpdGUgb3VyIG93biBtb2R1bGFyaXphdGlvbiBleHBvcnQgZWZmb3J0cyBpbiBzaGVsbC1wb3N0LmpzIVxuICAgICAgICAvLyBUaGUgb25seSB3YXkgdG8gdGVsbCBlbWNjIG5vdCB0byBlbWl0IGl0IGlzIHRvIHBhc3MgdGhlIE1PRFVMQVJJWkU9MSBvciBNT0RVTEFSSVpFX0lOU1RBTkNFPTEgZmxhZ3MsXG4gICAgICAgIC8vIGJ1dCB0aGF0IGNhcnJpZXMgd2l0aCBpdCBhZGRpdGlvbmFsIHVubmVjZXNzYXJ5IGJhZ2dhZ2UvYnVncyB3ZSBkb24ndCB3YW50IGVpdGhlci5cbiAgICAgICAgLy8gU28sIHdlIGhhdmUgdGhyZWUgb3B0aW9uczpcbiAgICAgICAgLy8gMSkgV2UgdW5kZWZpbmUgYG1vZHVsZWBcbiAgICAgICAgLy8gMikgV2UgcmVtZW1iZXIgd2hhdCBgbW9kdWxlWydleHBvcnRzJ11gIHdhcyBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoaXMgZnVuY3Rpb24gYW5kIHdlIHJlc3RvcmUgaXQgbGF0ZXJcbiAgICAgICAgLy8gMykgV2Ugd3JpdGUgYSBzY3JpcHQgdG8gcmVtb3ZlIHRob3NlIGxpbmVzIG9mIGNvZGUgYXMgcGFydCBvZiB0aGUgTWFrZSBwcm9jZXNzLlxuICAgICAgICAvL1xuICAgICAgICAvLyBTaW5jZSB0aG9zZSBhcmUgdGhlIG9ubHkgbGluZXMgb2YgY29kZSB0aGF0IGNhcmUgYWJvdXQgbW9kdWxlLCB3ZSB3aWxsIHVuZGVmaW5lIGl0LiBJdCdzIHRoZSBtb3N0IHN0cmFpZ2h0Zm9yd2FyZFxuICAgICAgICAvLyBvZiB0aGUgb3B0aW9ucywgYW5kIGhhcyB0aGUgc2lkZSBlZmZlY3Qgb2YgcmVkdWNpbmcgZW1jYydzIGVmZm9ydHMgdG8gbW9kaWZ5IHRoZSBtb2R1bGUgaWYgaXRzIG91dHB1dCB3ZXJlIHRvIGNoYW5nZSBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBUaGF0J3MgYSBuaWNlIHNpZGUgZWZmZWN0IHNpbmNlIHdlJ3JlIGhhbmRsaW5nIHRoZSBtb2R1bGFyaXphdGlvbiBlZmZvcnRzIG91cnNlbHZlc1xuICAgICAgICBtb2R1bGUgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgLy8gVGhlIGVtY2MtZ2VuZXJhdGVkIGNvZGUgYW5kIHNoZWxsLXBvc3QuanMgY29kZSBnb2VzIGJlbG93LFxuICAgICAgICAvLyBtZWFuaW5nIHRoYXQgYWxsIG9mIGl0IHJ1bnMgaW5zaWRlIG9mIHRoaXMgcHJvbWlzZS4gSWYgYW55dGhpbmcgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgb3VyIHByb21pc2Ugd2lsbCBhYm9ydFxudmFyIGY7Znx8PXR5cGVvZiBNb2R1bGUgIT0gJ3VuZGVmaW5lZCcgPyBNb2R1bGUgOiB7fTt2YXIgYWE9XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyxiYT1cInVuZGVmaW5lZFwiIT10eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUsY2E9XCJvYmplY3RcIj09dHlwZW9mIHByb2Nlc3MmJlwib2JqZWN0XCI9PXR5cGVvZiBwcm9jZXNzLnZlcnNpb25zJiZcInN0cmluZ1wiPT10eXBlb2YgcHJvY2Vzcy52ZXJzaW9ucy5ub2RlJiZcInJlbmRlcmVyXCIhPXByb2Nlc3MudHlwZTtcInVzZSBzdHJpY3RcIjtcbmYub25SdW50aW1lSW5pdGlhbGl6ZWQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGcsbCl7c3dpdGNoKHR5cGVvZiBsKXtjYXNlIFwiYm9vbGVhblwiOmRjKGcsbD8xOjApO2JyZWFrO2Nhc2UgXCJudW1iZXJcIjplYyhnLGwpO2JyZWFrO2Nhc2UgXCJzdHJpbmdcIjpmYyhnLGwsLTEsLTEpO2JyZWFrO2Nhc2UgXCJvYmplY3RcIjppZihudWxsPT09bClsYihnKTtlbHNlIGlmKG51bGwhPWwubGVuZ3RoKXt2YXIgbj1kYShsLGVhKTtnYyhnLG4sbC5sZW5ndGgsLTEpO2ZhKG4pfWVsc2UgdmEoZyxcIldyb25nIEFQSSB1c2UgOiB0cmllZCB0byByZXR1cm4gYSB2YWx1ZSBvZiBhbiB1bmtub3duIHR5cGUgKFwiK2wrXCIpLlwiLC0xKTticmVhaztkZWZhdWx0OmxiKGcpfX1mdW5jdGlvbiBiKGcsbCl7Zm9yKHZhciBuPVtdLHI9MDtyPGc7cis9MSl7dmFyIHQ9bShsKzQqcixcImkzMlwiKSx5PWhjKHQpO2lmKDE9PT15fHwyPT09eSl0PWljKHQpO2Vsc2UgaWYoMz09PXkpdD1qYyh0KTtlbHNlIGlmKDQ9PT15KXt5PXQ7XG50PWtjKHkpO3k9bGMoeSk7Zm9yKHZhciBMPW5ldyBVaW50OEFycmF5KHQpLEo9MDtKPHQ7Sis9MSlMW0pdPXBbeStKXTt0PUx9ZWxzZSB0PW51bGw7bi5wdXNoKHQpfXJldHVybiBufWZ1bmN0aW9uIGMoZyxsKXt0aGlzLlFhPWc7dGhpcy5kYj1sO3RoaXMuT2E9MTt0aGlzLmxiPVtdfWZ1bmN0aW9uIGQoZyxsKXt0aGlzLmRiPWw7bD1oYShnKSsxO3RoaXMuZWI9aWEobCk7aWYobnVsbD09PXRoaXMuZWIpdGhyb3cgRXJyb3IoXCJVbmFibGUgdG8gYWxsb2NhdGUgbWVtb3J5IGZvciB0aGUgU1FMIHN0cmluZ1wiKTt1KGcseCx0aGlzLmViLGwpO3RoaXMua2I9dGhpcy5lYjt0aGlzLlphPXRoaXMucGI9bnVsbH1mdW5jdGlvbiBlKGcpe3RoaXMuZmlsZW5hbWU9XCJkYmZpbGVfXCIrKDQyOTQ5NjcyOTUqTWF0aC5yYW5kb20oKT4+PjApO2lmKG51bGwhPWcpe3ZhciBsPXRoaXMuZmlsZW5hbWUsbj1cIi9cIixyPWw7biYmKG49XCJzdHJpbmdcIj09dHlwZW9mIG4/bjpqYShuKSxyPWw/a2EobitcIi9cIitsKTpcbm4pO2w9bGEoITAsITApO3I9bWEocixsKTtpZihnKXtpZihcInN0cmluZ1wiPT10eXBlb2YgZyl7bj1BcnJheShnLmxlbmd0aCk7Zm9yKHZhciB0PTAseT1nLmxlbmd0aDt0PHk7Kyt0KW5bdF09Zy5jaGFyQ29kZUF0KHQpO2c9bn1uYShyLGx8MTQ2KTtuPW9hKHIsNTc3KTtwYShuLGcsMCxnLmxlbmd0aCwwKTtxYShuKTtuYShyLGwpfX10aGlzLmhhbmRsZUVycm9yKHEodGhpcy5maWxlbmFtZSxoKSk7dGhpcy5kYj1tKGgsXCJpMzJcIik7b2IodGhpcy5kYik7dGhpcy5mYj17fTt0aGlzLlNhPXt9fXZhciBoPXooNCksaz1mLmN3cmFwLHE9ayhcInNxbGl0ZTNfb3BlblwiLFwibnVtYmVyXCIsW1wic3RyaW5nXCIsXCJudW1iZXJcIl0pLHc9ayhcInNxbGl0ZTNfY2xvc2VfdjJcIixcIm51bWJlclwiLFtcIm51bWJlclwiXSksdj1rKFwic3FsaXRlM19leGVjXCIsXCJudW1iZXJcIixbXCJudW1iZXJcIixcInN0cmluZ1wiLFwibnVtYmVyXCIsXCJudW1iZXJcIixcIm51bWJlclwiXSksQz1rKFwic3FsaXRlM19jaGFuZ2VzXCIsXCJudW1iZXJcIixbXCJudW1iZXJcIl0pLFxuRz1rKFwic3FsaXRlM19wcmVwYXJlX3YyXCIsXCJudW1iZXJcIixbXCJudW1iZXJcIixcInN0cmluZ1wiLFwibnVtYmVyXCIsXCJudW1iZXJcIixcIm51bWJlclwiXSkscGI9ayhcInNxbGl0ZTNfc3FsXCIsXCJzdHJpbmdcIixbXCJudW1iZXJcIl0pLG5jPWsoXCJzcWxpdGUzX25vcm1hbGl6ZWRfc3FsXCIsXCJzdHJpbmdcIixbXCJudW1iZXJcIl0pLHFiPWsoXCJzcWxpdGUzX3ByZXBhcmVfdjJcIixcIm51bWJlclwiLFtcIm51bWJlclwiLFwibnVtYmVyXCIsXCJudW1iZXJcIixcIm51bWJlclwiLFwibnVtYmVyXCJdKSxvYz1rKFwic3FsaXRlM19iaW5kX3RleHRcIixcIm51bWJlclwiLFtcIm51bWJlclwiLFwibnVtYmVyXCIsXCJudW1iZXJcIixcIm51bWJlclwiLFwibnVtYmVyXCJdKSxyYj1rKFwic3FsaXRlM19iaW5kX2Jsb2JcIixcIm51bWJlclwiLFtcIm51bWJlclwiLFwibnVtYmVyXCIsXCJudW1iZXJcIixcIm51bWJlclwiLFwibnVtYmVyXCJdKSxwYz1rKFwic3FsaXRlM19iaW5kX2RvdWJsZVwiLFwibnVtYmVyXCIsW1wibnVtYmVyXCIsXCJudW1iZXJcIixcIm51bWJlclwiXSkscWM9ayhcInNxbGl0ZTNfYmluZF9pbnRcIixcblwibnVtYmVyXCIsW1wibnVtYmVyXCIsXCJudW1iZXJcIixcIm51bWJlclwiXSkscmM9ayhcInNxbGl0ZTNfYmluZF9wYXJhbWV0ZXJfaW5kZXhcIixcIm51bWJlclwiLFtcIm51bWJlclwiLFwic3RyaW5nXCJdKSxzYz1rKFwic3FsaXRlM19zdGVwXCIsXCJudW1iZXJcIixbXCJudW1iZXJcIl0pLHRjPWsoXCJzcWxpdGUzX2Vycm1zZ1wiLFwic3RyaW5nXCIsW1wibnVtYmVyXCJdKSx1Yz1rKFwic3FsaXRlM19jb2x1bW5fY291bnRcIixcIm51bWJlclwiLFtcIm51bWJlclwiXSksdmM9ayhcInNxbGl0ZTNfZGF0YV9jb3VudFwiLFwibnVtYmVyXCIsW1wibnVtYmVyXCJdKSx3Yz1rKFwic3FsaXRlM19jb2x1bW5fZG91YmxlXCIsXCJudW1iZXJcIixbXCJudW1iZXJcIixcIm51bWJlclwiXSksc2I9ayhcInNxbGl0ZTNfY29sdW1uX3RleHRcIixcInN0cmluZ1wiLFtcIm51bWJlclwiLFwibnVtYmVyXCJdKSx4Yz1rKFwic3FsaXRlM19jb2x1bW5fYmxvYlwiLFwibnVtYmVyXCIsW1wibnVtYmVyXCIsXCJudW1iZXJcIl0pLHljPWsoXCJzcWxpdGUzX2NvbHVtbl9ieXRlc1wiLFwibnVtYmVyXCIsW1wibnVtYmVyXCIsXG5cIm51bWJlclwiXSksemM9ayhcInNxbGl0ZTNfY29sdW1uX3R5cGVcIixcIm51bWJlclwiLFtcIm51bWJlclwiLFwibnVtYmVyXCJdKSxBYz1rKFwic3FsaXRlM19jb2x1bW5fbmFtZVwiLFwic3RyaW5nXCIsW1wibnVtYmVyXCIsXCJudW1iZXJcIl0pLEJjPWsoXCJzcWxpdGUzX3Jlc2V0XCIsXCJudW1iZXJcIixbXCJudW1iZXJcIl0pLENjPWsoXCJzcWxpdGUzX2NsZWFyX2JpbmRpbmdzXCIsXCJudW1iZXJcIixbXCJudW1iZXJcIl0pLERjPWsoXCJzcWxpdGUzX2ZpbmFsaXplXCIsXCJudW1iZXJcIixbXCJudW1iZXJcIl0pLHRiPWsoXCJzcWxpdGUzX2NyZWF0ZV9mdW5jdGlvbl92MlwiLFwibnVtYmVyXCIsXCJudW1iZXIgc3RyaW5nIG51bWJlciBudW1iZXIgbnVtYmVyIG51bWJlciBudW1iZXIgbnVtYmVyIG51bWJlclwiLnNwbGl0KFwiIFwiKSksaGM9ayhcInNxbGl0ZTNfdmFsdWVfdHlwZVwiLFwibnVtYmVyXCIsW1wibnVtYmVyXCJdKSxrYz1rKFwic3FsaXRlM192YWx1ZV9ieXRlc1wiLFwibnVtYmVyXCIsW1wibnVtYmVyXCJdKSxqYz1rKFwic3FsaXRlM192YWx1ZV90ZXh0XCIsXG5cInN0cmluZ1wiLFtcIm51bWJlclwiXSksbGM9ayhcInNxbGl0ZTNfdmFsdWVfYmxvYlwiLFwibnVtYmVyXCIsW1wibnVtYmVyXCJdKSxpYz1rKFwic3FsaXRlM192YWx1ZV9kb3VibGVcIixcIm51bWJlclwiLFtcIm51bWJlclwiXSksZWM9ayhcInNxbGl0ZTNfcmVzdWx0X2RvdWJsZVwiLFwiXCIsW1wibnVtYmVyXCIsXCJudW1iZXJcIl0pLGxiPWsoXCJzcWxpdGUzX3Jlc3VsdF9udWxsXCIsXCJcIixbXCJudW1iZXJcIl0pLGZjPWsoXCJzcWxpdGUzX3Jlc3VsdF90ZXh0XCIsXCJcIixbXCJudW1iZXJcIixcInN0cmluZ1wiLFwibnVtYmVyXCIsXCJudW1iZXJcIl0pLGdjPWsoXCJzcWxpdGUzX3Jlc3VsdF9ibG9iXCIsXCJcIixbXCJudW1iZXJcIixcIm51bWJlclwiLFwibnVtYmVyXCIsXCJudW1iZXJcIl0pLGRjPWsoXCJzcWxpdGUzX3Jlc3VsdF9pbnRcIixcIlwiLFtcIm51bWJlclwiLFwibnVtYmVyXCJdKSx2YT1rKFwic3FsaXRlM19yZXN1bHRfZXJyb3JcIixcIlwiLFtcIm51bWJlclwiLFwic3RyaW5nXCIsXCJudW1iZXJcIl0pLHViPWsoXCJzcWxpdGUzX2FnZ3JlZ2F0ZV9jb250ZXh0XCIsXCJudW1iZXJcIixcbltcIm51bWJlclwiLFwibnVtYmVyXCJdKSxvYj1rKFwiUmVnaXN0ZXJFeHRlbnNpb25GdW5jdGlvbnNcIixcIm51bWJlclwiLFtcIm51bWJlclwiXSksdmI9ayhcInNxbGl0ZTNfdXBkYXRlX2hvb2tcIixcIm51bWJlclwiLFtcIm51bWJlclwiLFwibnVtYmVyXCIsXCJudW1iZXJcIl0pO2MucHJvdG90eXBlLmJpbmQ9ZnVuY3Rpb24oZyl7aWYoIXRoaXMuUWEpdGhyb3dcIlN0YXRlbWVudCBjbG9zZWRcIjt0aGlzLnJlc2V0KCk7cmV0dXJuIEFycmF5LmlzQXJyYXkoZyk/dGhpcy5DYihnKTpudWxsIT1nJiZcIm9iamVjdFwiPT09dHlwZW9mIGc/dGhpcy5EYihnKTohMH07Yy5wcm90b3R5cGUuc3RlcD1mdW5jdGlvbigpe2lmKCF0aGlzLlFhKXRocm93XCJTdGF0ZW1lbnQgY2xvc2VkXCI7dGhpcy5PYT0xO3ZhciBnPXNjKHRoaXMuUWEpO3N3aXRjaChnKXtjYXNlIDEwMDpyZXR1cm4hMDtjYXNlIDEwMTpyZXR1cm4hMTtkZWZhdWx0OnRocm93IHRoaXMuZGIuaGFuZGxlRXJyb3IoZyk7fX07Yy5wcm90b3R5cGUud2I9ZnVuY3Rpb24oZyl7bnVsbD09XG5nJiYoZz10aGlzLk9hLHRoaXMuT2ErPTEpO3JldHVybiB3Yyh0aGlzLlFhLGcpfTtjLnByb3RvdHlwZS5HYj1mdW5jdGlvbihnKXtudWxsPT1nJiYoZz10aGlzLk9hLHRoaXMuT2ErPTEpO2c9c2IodGhpcy5RYSxnKTtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgQmlnSW50KXRocm93IEVycm9yKFwiQmlnSW50IGlzIG5vdCBzdXBwb3J0ZWRcIik7cmV0dXJuIEJpZ0ludChnKX07Yy5wcm90b3R5cGUuSGI9ZnVuY3Rpb24oZyl7bnVsbD09ZyYmKGc9dGhpcy5PYSx0aGlzLk9hKz0xKTtyZXR1cm4gc2IodGhpcy5RYSxnKX07Yy5wcm90b3R5cGUuZ2V0QmxvYj1mdW5jdGlvbihnKXtudWxsPT1nJiYoZz10aGlzLk9hLHRoaXMuT2ErPTEpO3ZhciBsPXljKHRoaXMuUWEsZyk7Zz14Yyh0aGlzLlFhLGcpO2Zvcih2YXIgbj1uZXcgVWludDhBcnJheShsKSxyPTA7cjxsO3IrPTEpbltyXT1wW2crcl07cmV0dXJuIG59O2MucHJvdG90eXBlLmdldD1mdW5jdGlvbihnLGwpe2w9bHx8e307bnVsbCE9ZyYmXG50aGlzLmJpbmQoZykmJnRoaXMuc3RlcCgpO2c9W107Zm9yKHZhciBuPXZjKHRoaXMuUWEpLHI9MDtyPG47cis9MSlzd2l0Y2goemModGhpcy5RYSxyKSl7Y2FzZSAxOnZhciB0PWwudXNlQmlnSW50P3RoaXMuR2Iocik6dGhpcy53YihyKTtnLnB1c2godCk7YnJlYWs7Y2FzZSAyOmcucHVzaCh0aGlzLndiKHIpKTticmVhaztjYXNlIDM6Zy5wdXNoKHRoaXMuSGIocikpO2JyZWFrO2Nhc2UgNDpnLnB1c2godGhpcy5nZXRCbG9iKHIpKTticmVhaztkZWZhdWx0OmcucHVzaChudWxsKX1yZXR1cm4gZ307Yy5wcm90b3R5cGUuZ2V0Q29sdW1uTmFtZXM9ZnVuY3Rpb24oKXtmb3IodmFyIGc9W10sbD11Yyh0aGlzLlFhKSxuPTA7bjxsO24rPTEpZy5wdXNoKEFjKHRoaXMuUWEsbikpO3JldHVybiBnfTtjLnByb3RvdHlwZS5nZXRBc09iamVjdD1mdW5jdGlvbihnLGwpe2c9dGhpcy5nZXQoZyxsKTtsPXRoaXMuZ2V0Q29sdW1uTmFtZXMoKTtmb3IodmFyIG49e30scj0wO3I8bC5sZW5ndGg7cis9XG4xKW5bbFtyXV09Z1tyXTtyZXR1cm4gbn07Yy5wcm90b3R5cGUuZ2V0U1FMPWZ1bmN0aW9uKCl7cmV0dXJuIHBiKHRoaXMuUWEpfTtjLnByb3RvdHlwZS5nZXROb3JtYWxpemVkU1FMPWZ1bmN0aW9uKCl7cmV0dXJuIG5jKHRoaXMuUWEpfTtjLnByb3RvdHlwZS5ydW49ZnVuY3Rpb24oZyl7bnVsbCE9ZyYmdGhpcy5iaW5kKGcpO3RoaXMuc3RlcCgpO3JldHVybiB0aGlzLnJlc2V0KCl9O2MucHJvdG90eXBlLnNiPWZ1bmN0aW9uKGcsbCl7bnVsbD09bCYmKGw9dGhpcy5PYSx0aGlzLk9hKz0xKTtnPXJhKGcpO3ZhciBuPWRhKGcsZWEpO3RoaXMubGIucHVzaChuKTt0aGlzLmRiLmhhbmRsZUVycm9yKG9jKHRoaXMuUWEsbCxuLGcubGVuZ3RoLTEsMCkpfTtjLnByb3RvdHlwZS5CYj1mdW5jdGlvbihnLGwpe251bGw9PWwmJihsPXRoaXMuT2EsdGhpcy5PYSs9MSk7dmFyIG49ZGEoZyxlYSk7dGhpcy5sYi5wdXNoKG4pO3RoaXMuZGIuaGFuZGxlRXJyb3IocmIodGhpcy5RYSxsLG4sZy5sZW5ndGgsXG4wKSl9O2MucHJvdG90eXBlLnJiPWZ1bmN0aW9uKGcsbCl7bnVsbD09bCYmKGw9dGhpcy5PYSx0aGlzLk9hKz0xKTt0aGlzLmRiLmhhbmRsZUVycm9yKChnPT09KGd8MCk/cWM6cGMpKHRoaXMuUWEsbCxnKSl9O2MucHJvdG90eXBlLkViPWZ1bmN0aW9uKGcpe251bGw9PWcmJihnPXRoaXMuT2EsdGhpcy5PYSs9MSk7cmIodGhpcy5RYSxnLDAsMCwwKX07Yy5wcm90b3R5cGUudGI9ZnVuY3Rpb24oZyxsKXtudWxsPT1sJiYobD10aGlzLk9hLHRoaXMuT2ErPTEpO3N3aXRjaCh0eXBlb2YgZyl7Y2FzZSBcInN0cmluZ1wiOnRoaXMuc2IoZyxsKTtyZXR1cm47Y2FzZSBcIm51bWJlclwiOnRoaXMucmIoZyxsKTtyZXR1cm47Y2FzZSBcImJpZ2ludFwiOnRoaXMuc2IoZy50b1N0cmluZygpLGwpO3JldHVybjtjYXNlIFwiYm9vbGVhblwiOnRoaXMucmIoZyswLGwpO3JldHVybjtjYXNlIFwib2JqZWN0XCI6aWYobnVsbD09PWcpe3RoaXMuRWIobCk7cmV0dXJufWlmKG51bGwhPWcubGVuZ3RoKXt0aGlzLkJiKGcsXG5sKTtyZXR1cm59fXRocm93XCJXcm9uZyBBUEkgdXNlIDogdHJpZWQgdG8gYmluZCBhIHZhbHVlIG9mIGFuIHVua25vd24gdHlwZSAoXCIrZytcIikuXCI7fTtjLnByb3RvdHlwZS5EYj1mdW5jdGlvbihnKXt2YXIgbD10aGlzO09iamVjdC5rZXlzKGcpLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHI9cmMobC5RYSxuKTswIT09ciYmbC50YihnW25dLHIpfSk7cmV0dXJuITB9O2MucHJvdG90eXBlLkNiPWZ1bmN0aW9uKGcpe2Zvcih2YXIgbD0wO2w8Zy5sZW5ndGg7bCs9MSl0aGlzLnRiKGdbbF0sbCsxKTtyZXR1cm4hMH07Yy5wcm90b3R5cGUucmVzZXQ9ZnVuY3Rpb24oKXt0aGlzLmZyZWVtZW0oKTtyZXR1cm4gMD09PUNjKHRoaXMuUWEpJiYwPT09QmModGhpcy5RYSl9O2MucHJvdG90eXBlLmZyZWVtZW09ZnVuY3Rpb24oKXtmb3IodmFyIGc7dm9pZCAwIT09KGc9dGhpcy5sYi5wb3AoKSk7KWZhKGcpfTtjLnByb3RvdHlwZS5mcmVlPWZ1bmN0aW9uKCl7dGhpcy5mcmVlbWVtKCk7dmFyIGc9XG4wPT09RGModGhpcy5RYSk7ZGVsZXRlIHRoaXMuZGIuZmJbdGhpcy5RYV07dGhpcy5RYT0wO3JldHVybiBnfTtkLnByb3RvdHlwZS5uZXh0PWZ1bmN0aW9uKCl7aWYobnVsbD09PXRoaXMuZWIpcmV0dXJue2RvbmU6ITB9O251bGwhPT10aGlzLlphJiYodGhpcy5aYS5mcmVlKCksdGhpcy5aYT1udWxsKTtpZighdGhpcy5kYi5kYil0aHJvdyB0aGlzLm1iKCksRXJyb3IoXCJEYXRhYmFzZSBjbG9zZWRcIik7dmFyIGc9c2EoKSxsPXooNCk7dGEoaCk7dGEobCk7dHJ5e3RoaXMuZGIuaGFuZGxlRXJyb3IocWIodGhpcy5kYi5kYix0aGlzLmtiLC0xLGgsbCkpO3RoaXMua2I9bShsLFwiaTMyXCIpO3ZhciBuPW0oaCxcImkzMlwiKTtpZigwPT09bilyZXR1cm4gdGhpcy5tYigpLHtkb25lOiEwfTt0aGlzLlphPW5ldyBjKG4sdGhpcy5kYik7dGhpcy5kYi5mYltuXT10aGlzLlphO3JldHVybnt2YWx1ZTp0aGlzLlphLGRvbmU6ITF9fWNhdGNoKHIpe3Rocm93IHRoaXMucGI9dWEodGhpcy5rYiksdGhpcy5tYigpLFxucjt9ZmluYWxseXt3YShnKX19O2QucHJvdG90eXBlLm1iPWZ1bmN0aW9uKCl7ZmEodGhpcy5lYik7dGhpcy5lYj1udWxsfTtkLnByb3RvdHlwZS5nZXRSZW1haW5pbmdTUUw9ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbCE9PXRoaXMucGI/dGhpcy5wYjp1YSh0aGlzLmtiKX07XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3ImJihkLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KTtlLnByb3RvdHlwZS5ydW49ZnVuY3Rpb24oZyxsKXtpZighdGhpcy5kYil0aHJvd1wiRGF0YWJhc2UgY2xvc2VkXCI7aWYobCl7Zz10aGlzLnByZXBhcmUoZyxsKTt0cnl7Zy5zdGVwKCl9ZmluYWxseXtnLmZyZWUoKX19ZWxzZSB0aGlzLmhhbmRsZUVycm9yKHYodGhpcy5kYixnLDAsMCxoKSk7cmV0dXJuIHRoaXN9O2UucHJvdG90eXBlLmV4ZWM9ZnVuY3Rpb24oZyxsLG4pe2lmKCF0aGlzLmRiKXRocm93XCJEYXRhYmFzZSBjbG9zZWRcIjtcbnZhciByPXNhKCksdD1udWxsO3RyeXt2YXIgeT14YShnKSxMPXooNCk7Zm9yKGc9W107MCE9PW0oeSxcImk4XCIpOyl7dGEoaCk7dGEoTCk7dGhpcy5oYW5kbGVFcnJvcihxYih0aGlzLmRiLHksLTEsaCxMKSk7dmFyIEo9bShoLFwiaTMyXCIpO3k9bShMLFwiaTMyXCIpO2lmKDAhPT1KKXt2YXIgST1udWxsO3Q9bmV3IGMoSix0aGlzKTtmb3IobnVsbCE9bCYmdC5iaW5kKGwpO3Quc3RlcCgpOyludWxsPT09SSYmKEk9e2NvbHVtbnM6dC5nZXRDb2x1bW5OYW1lcygpLHZhbHVlczpbXX0sZy5wdXNoKEkpKSxJLnZhbHVlcy5wdXNoKHQuZ2V0KG51bGwsbikpO3QuZnJlZSgpfX1yZXR1cm4gZ31jYXRjaChNKXt0aHJvdyB0JiZ0LmZyZWUoKSxNO31maW5hbGx5e3dhKHIpfX07ZS5wcm90b3R5cGUuZWFjaD1mdW5jdGlvbihnLGwsbixyLHQpe1wiZnVuY3Rpb25cIj09PXR5cGVvZiBsJiYocj1uLG49bCxsPXZvaWQgMCk7Zz10aGlzLnByZXBhcmUoZyxsKTt0cnl7Zm9yKDtnLnN0ZXAoKTspbihnLmdldEFzT2JqZWN0KG51bGwsXG50KSl9ZmluYWxseXtnLmZyZWUoKX1pZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgcilyZXR1cm4gcigpfTtlLnByb3RvdHlwZS5wcmVwYXJlPWZ1bmN0aW9uKGcsbCl7dGEoaCk7dGhpcy5oYW5kbGVFcnJvcihHKHRoaXMuZGIsZywtMSxoLDApKTtnPW0oaCxcImkzMlwiKTtpZigwPT09Zyl0aHJvd1wiTm90aGluZyB0byBwcmVwYXJlXCI7dmFyIG49bmV3IGMoZyx0aGlzKTtudWxsIT1sJiZuLmJpbmQobCk7cmV0dXJuIHRoaXMuZmJbZ109bn07ZS5wcm90b3R5cGUuaXRlcmF0ZVN0YXRlbWVudHM9ZnVuY3Rpb24oZyl7cmV0dXJuIG5ldyBkKGcsdGhpcyl9O2UucHJvdG90eXBlW1wiZXhwb3J0XCJdPWZ1bmN0aW9uKCl7T2JqZWN0LnZhbHVlcyh0aGlzLmZiKS5mb3JFYWNoKGZ1bmN0aW9uKGwpe2wuZnJlZSgpfSk7T2JqZWN0LnZhbHVlcyh0aGlzLlNhKS5mb3JFYWNoKEEpO3RoaXMuU2E9e307dGhpcy5oYW5kbGVFcnJvcih3KHRoaXMuZGIpKTt2YXIgZz15YSh0aGlzLmZpbGVuYW1lKTt0aGlzLmhhbmRsZUVycm9yKHEodGhpcy5maWxlbmFtZSxcbmgpKTt0aGlzLmRiPW0oaCxcImkzMlwiKTtvYih0aGlzLmRiKTtyZXR1cm4gZ307ZS5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24oKXtudWxsIT09dGhpcy5kYiYmKE9iamVjdC52YWx1ZXModGhpcy5mYikuZm9yRWFjaChmdW5jdGlvbihnKXtnLmZyZWUoKX0pLE9iamVjdC52YWx1ZXModGhpcy5TYSkuZm9yRWFjaChBKSx0aGlzLlNhPXt9LHRoaXMuWWEmJihBKHRoaXMuWWEpLHRoaXMuWWE9dm9pZCAwKSx0aGlzLmhhbmRsZUVycm9yKHcodGhpcy5kYikpLHphKFwiL1wiK3RoaXMuZmlsZW5hbWUpLHRoaXMuZGI9bnVsbCl9O2UucHJvdG90eXBlLmhhbmRsZUVycm9yPWZ1bmN0aW9uKGcpe2lmKDA9PT1nKXJldHVybiBudWxsO2c9dGModGhpcy5kYik7dGhyb3cgRXJyb3IoZyk7fTtlLnByb3RvdHlwZS5nZXRSb3dzTW9kaWZpZWQ9ZnVuY3Rpb24oKXtyZXR1cm4gQyh0aGlzLmRiKX07ZS5wcm90b3R5cGUuY3JlYXRlX2Z1bmN0aW9uPWZ1bmN0aW9uKGcsbCl7T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuU2EsXG5nKSYmKEEodGhpcy5TYVtnXSksZGVsZXRlIHRoaXMuU2FbZ10pO3ZhciBuPUFhKGZ1bmN0aW9uKHIsdCx5KXt0PWIodCx5KTt0cnl7dmFyIEw9bC5hcHBseShudWxsLHQpfWNhdGNoKEope3ZhKHIsSiwtMSk7cmV0dXJufWEocixMKX0sXCJ2aWlpXCIpO3RoaXMuU2FbZ109bjt0aGlzLmhhbmRsZUVycm9yKHRiKHRoaXMuZGIsZyxsLmxlbmd0aCwxLDAsbiwwLDAsMCkpO3JldHVybiB0aGlzfTtlLnByb3RvdHlwZS5jcmVhdGVfYWdncmVnYXRlPWZ1bmN0aW9uKGcsbCl7dmFyIG49bC5pbml0fHxmdW5jdGlvbigpe3JldHVybiBudWxsfSxyPWwuZmluYWxpemV8fGZ1bmN0aW9uKEkpe3JldHVybiBJfSx0PWwuc3RlcDtpZighdCl0aHJvd1wiQW4gYWdncmVnYXRlIGZ1bmN0aW9uIG11c3QgaGF2ZSBhIHN0ZXAgZnVuY3Rpb24gaW4gXCIrZzt2YXIgeT17fTtPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLlNhLGcpJiYoQSh0aGlzLlNhW2ddKSxkZWxldGUgdGhpcy5TYVtnXSk7bD1nK1wiX19maW5hbGl6ZVwiO1xuT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwodGhpcy5TYSxsKSYmKEEodGhpcy5TYVtsXSksZGVsZXRlIHRoaXMuU2FbbF0pO3ZhciBMPUFhKGZ1bmN0aW9uKEksTSxSYSl7dmFyIFg9dWIoSSwxKTtPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh5LFgpfHwoeVtYXT1uKCkpO009YihNLFJhKTtNPVt5W1hdXS5jb25jYXQoTSk7dHJ5e3lbWF09dC5hcHBseShudWxsLE0pfWNhdGNoKEZjKXtkZWxldGUgeVtYXSx2YShJLEZjLC0xKX19LFwidmlpaVwiKSxKPUFhKGZ1bmN0aW9uKEkpe3ZhciBNPXViKEksMSk7dHJ5e3ZhciBSYT1yKHlbTV0pfWNhdGNoKFgpe2RlbGV0ZSB5W01dO3ZhKEksWCwtMSk7cmV0dXJufWEoSSxSYSk7ZGVsZXRlIHlbTV19LFwidmlcIik7dGhpcy5TYVtnXT1MO3RoaXMuU2FbbF09Sjt0aGlzLmhhbmRsZUVycm9yKHRiKHRoaXMuZGIsZyx0Lmxlbmd0aC0xLDEsMCwwLEwsSiwwKSk7cmV0dXJuIHRoaXN9O2UucHJvdG90eXBlLnVwZGF0ZUhvb2s9ZnVuY3Rpb24oZyl7dGhpcy5ZYSYmXG4odmIodGhpcy5kYiwwLDApLEEodGhpcy5ZYSksdGhpcy5ZYT12b2lkIDApO2cmJih0aGlzLllhPUFhKGZ1bmN0aW9uKGwsbixyLHQseSl7c3dpdGNoKG4pe2Nhc2UgMTg6bD1cImluc2VydFwiO2JyZWFrO2Nhc2UgMjM6bD1cInVwZGF0ZVwiO2JyZWFrO2Nhc2UgOTpsPVwiZGVsZXRlXCI7YnJlYWs7ZGVmYXVsdDp0aHJvd1widW5rbm93biBvcGVyYXRpb25Db2RlIGluIHVwZGF0ZUhvb2sgY2FsbGJhY2s6IFwiK247fXI9cj9CKHgscik6XCJcIjt0PXQ/Qih4LHQpOlwiXCI7aWYoeT5OdW1iZXIuTUFYX1NBRkVfSU5URUdFUil0aHJvd1wicm93SWQgdG9vIGJpZyB0byBmaXQgaW5zaWRlIGEgTnVtYmVyXCI7ZyhsLHIsdCxOdW1iZXIoeSkpfSxcInZpaWlpalwiKSx2Yih0aGlzLmRiLHRoaXMuWWEsMCkpfTtmLkRhdGFiYXNlPWV9O3ZhciBCYT17Li4uZn0sQ2E9XCIuL3RoaXMucHJvZ3JhbVwiLERhPShhLGIpPT57dGhyb3cgYjt9LEQ9XCJcIixFYSxGYTtcbmlmKGNhKXt2YXIgZnM9cmVxdWlyZShcImZzXCIpO3JlcXVpcmUoXCJwYXRoXCIpO0Q9X19kaXJuYW1lK1wiL1wiO0ZhPWE9PnthPUdhKGEpP25ldyBVUkwoYSk6YTtyZXR1cm4gZnMucmVhZEZpbGVTeW5jKGEpfTtFYT1hc3luYyBhPT57YT1HYShhKT9uZXcgVVJMKGEpOmE7cmV0dXJuIGZzLnJlYWRGaWxlU3luYyhhLHZvaWQgMCl9OyFmLnRoaXNQcm9ncmFtJiYxPHByb2Nlc3MuYXJndi5sZW5ndGgmJihDYT1wcm9jZXNzLmFyZ3ZbMV0ucmVwbGFjZSgvXFxcXC9nLFwiL1wiKSk7cHJvY2Vzcy5hcmd2LnNsaWNlKDIpO1widW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJihtb2R1bGUuZXhwb3J0cz1mKTtEYT0oYSxiKT0+e3Byb2Nlc3MuZXhpdENvZGU9YTt0aHJvdyBiO319ZWxzZSBpZihhYXx8YmEpYmE/RD1zZWxmLmxvY2F0aW9uLmhyZWY6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50JiZkb2N1bWVudC5jdXJyZW50U2NyaXB0JiYoRD1kb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYyksRD1ELnN0YXJ0c1dpdGgoXCJibG9iOlwiKT9cblwiXCI6RC5zbGljZSgwLEQucmVwbGFjZSgvWz8jXS4qLyxcIlwiKS5sYXN0SW5kZXhPZihcIi9cIikrMSksYmEmJihGYT1hPT57dmFyIGI9bmV3IFhNTEh0dHBSZXF1ZXN0O2Iub3BlbihcIkdFVFwiLGEsITEpO2IucmVzcG9uc2VUeXBlPVwiYXJyYXlidWZmZXJcIjtiLnNlbmQobnVsbCk7cmV0dXJuIG5ldyBVaW50OEFycmF5KGIucmVzcG9uc2UpfSksRWE9YXN5bmMgYT0+e2lmKEdhKGEpKXJldHVybiBuZXcgUHJvbWlzZSgoYyxkKT0+e3ZhciBlPW5ldyBYTUxIdHRwUmVxdWVzdDtlLm9wZW4oXCJHRVRcIixhLCEwKTtlLnJlc3BvbnNlVHlwZT1cImFycmF5YnVmZmVyXCI7ZS5vbmxvYWQ9KCk9PnsyMDA9PWUuc3RhdHVzfHwwPT1lLnN0YXR1cyYmZS5yZXNwb25zZT9jKGUucmVzcG9uc2UpOmQoZS5zdGF0dXMpfTtlLm9uZXJyb3I9ZDtlLnNlbmQobnVsbCl9KTt2YXIgYj1hd2FpdCBmZXRjaChhLHtjcmVkZW50aWFsczpcInNhbWUtb3JpZ2luXCJ9KTtpZihiLm9rKXJldHVybiBiLmFycmF5QnVmZmVyKCk7dGhyb3cgRXJyb3IoYi5zdGF0dXMrXG5cIiA6IFwiK2IudXJsKTt9O3ZhciBIYT1mLnByaW50fHxjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpLElhPWYucHJpbnRFcnJ8fGNvbnNvbGUuZXJyb3IuYmluZChjb25zb2xlKTtPYmplY3QuYXNzaWduKGYsQmEpO0JhPW51bGw7Zi50aGlzUHJvZ3JhbSYmKENhPWYudGhpc1Byb2dyYW0pO3ZhciBKYT1mLndhc21CaW5hcnksS2EsTGE9ITEsTWEscCx4LE5hLEUsRixPYSxILFBhLEdhPWE9PmEuc3RhcnRzV2l0aChcImZpbGU6Ly9cIik7XG5mdW5jdGlvbiBRYSgpe3ZhciBhPUthLmJ1ZmZlcjtmLkhFQVA4PXA9bmV3IEludDhBcnJheShhKTtmLkhFQVAxNj1OYT1uZXcgSW50MTZBcnJheShhKTtmLkhFQVBVOD14PW5ldyBVaW50OEFycmF5KGEpO2YuSEVBUFUxNj1uZXcgVWludDE2QXJyYXkoYSk7Zi5IRUFQMzI9RT1uZXcgSW50MzJBcnJheShhKTtmLkhFQVBVMzI9Rj1uZXcgVWludDMyQXJyYXkoYSk7Zi5IRUFQRjMyPU9hPW5ldyBGbG9hdDMyQXJyYXkoYSk7Zi5IRUFQRjY0PVBhPW5ldyBGbG9hdDY0QXJyYXkoYSk7Zi5IRUFQNjQ9SD1uZXcgQmlnSW50NjRBcnJheShhKTtmLkhFQVBVNjQ9bmV3IEJpZ1VpbnQ2NEFycmF5KGEpfXZhciBLPTAsU2E9bnVsbDtmdW5jdGlvbiBUYShhKXtmLm9uQWJvcnQ/LihhKTthPVwiQWJvcnRlZChcIithK1wiKVwiO0lhKGEpO0xhPSEwO3Rocm93IG5ldyBXZWJBc3NlbWJseS5SdW50aW1lRXJyb3IoYStcIi4gQnVpbGQgd2l0aCAtc0FTU0VSVElPTlMgZm9yIG1vcmUgaW5mby5cIik7fXZhciBVYTtcbmFzeW5jIGZ1bmN0aW9uIFZhKGEpe2lmKCFKYSl0cnl7dmFyIGI9YXdhaXQgRWEoYSk7cmV0dXJuIG5ldyBVaW50OEFycmF5KGIpfWNhdGNoe31pZihhPT1VYSYmSmEpYT1uZXcgVWludDhBcnJheShKYSk7ZWxzZSBpZihGYSlhPUZhKGEpO2Vsc2UgdGhyb3dcImJvdGggYXN5bmMgYW5kIHN5bmMgZmV0Y2hpbmcgb2YgdGhlIHdhc20gZmFpbGVkXCI7cmV0dXJuIGF9YXN5bmMgZnVuY3Rpb24gV2EoYSxiKXt0cnl7dmFyIGM9YXdhaXQgVmEoYSk7cmV0dXJuIGF3YWl0IFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlKGMsYil9Y2F0Y2goZCl7SWEoYGZhaWxlZCB0byBhc3luY2hyb25vdXNseSBwcmVwYXJlIHdhc206ICR7ZH1gKSxUYShkKX19XG5hc3luYyBmdW5jdGlvbiBYYShhKXt2YXIgYj1VYTtpZighSmEmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nJiYhR2EoYikmJiFjYSl0cnl7dmFyIGM9ZmV0Y2goYix7Y3JlZGVudGlhbHM6XCJzYW1lLW9yaWdpblwifSk7cmV0dXJuIGF3YWl0IFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nKGMsYSl9Y2F0Y2goZCl7SWEoYHdhc20gc3RyZWFtaW5nIGNvbXBpbGUgZmFpbGVkOiAke2R9YCksSWEoXCJmYWxsaW5nIGJhY2sgdG8gQXJyYXlCdWZmZXIgaW5zdGFudGlhdGlvblwiKX1yZXR1cm4gV2EoYixhKX1jbGFzcyBZYXtuYW1lPVwiRXhpdFN0YXR1c1wiO2NvbnN0cnVjdG9yKGEpe3RoaXMubWVzc2FnZT1gUHJvZ3JhbSB0ZXJtaW5hdGVkIHdpdGggZXhpdCgke2F9KWA7dGhpcy5zdGF0dXM9YX19XG52YXIgWmE9YT0+e2Zvcig7MDxhLmxlbmd0aDspYS5zaGlmdCgpKGYpfSwkYT1bXSxhYj1bXSxiYj0oKT0+e3ZhciBhPWYucHJlUnVuLnNoaWZ0KCk7YWIudW5zaGlmdChhKX07ZnVuY3Rpb24gbShhLGI9XCJpOFwiKXtiLmVuZHNXaXRoKFwiKlwiKSYmKGI9XCIqXCIpO3N3aXRjaChiKXtjYXNlIFwiaTFcIjpyZXR1cm4gcFthXTtjYXNlIFwiaThcIjpyZXR1cm4gcFthXTtjYXNlIFwiaTE2XCI6cmV0dXJuIE5hW2E+PjFdO2Nhc2UgXCJpMzJcIjpyZXR1cm4gRVthPj4yXTtjYXNlIFwiaTY0XCI6cmV0dXJuIEhbYT4+M107Y2FzZSBcImZsb2F0XCI6cmV0dXJuIE9hW2E+PjJdO2Nhc2UgXCJkb3VibGVcIjpyZXR1cm4gUGFbYT4+M107Y2FzZSBcIipcIjpyZXR1cm4gRlthPj4yXTtkZWZhdWx0OlRhKGBpbnZhbGlkIHR5cGUgZm9yIGdldFZhbHVlOiAke2J9YCl9fXZhciBjYj1mLm5vRXhpdFJ1bnRpbWV8fCEwO1xuZnVuY3Rpb24gdGEoYSl7dmFyIGI9XCJpMzJcIjtiLmVuZHNXaXRoKFwiKlwiKSYmKGI9XCIqXCIpO3N3aXRjaChiKXtjYXNlIFwiaTFcIjpwW2FdPTA7YnJlYWs7Y2FzZSBcImk4XCI6cFthXT0wO2JyZWFrO2Nhc2UgXCJpMTZcIjpOYVthPj4xXT0wO2JyZWFrO2Nhc2UgXCJpMzJcIjpFW2E+PjJdPTA7YnJlYWs7Y2FzZSBcImk2NFwiOkhbYT4+M109QmlnSW50KDApO2JyZWFrO2Nhc2UgXCJmbG9hdFwiOk9hW2E+PjJdPTA7YnJlYWs7Y2FzZSBcImRvdWJsZVwiOlBhW2E+PjNdPTA7YnJlYWs7Y2FzZSBcIipcIjpGW2E+PjJdPTA7YnJlYWs7ZGVmYXVsdDpUYShgaW52YWxpZCB0eXBlIGZvciBzZXRWYWx1ZTogJHtifWApfX1cbnZhciBkYj1cInVuZGVmaW5lZFwiIT10eXBlb2YgVGV4dERlY29kZXI/bmV3IFRleHREZWNvZGVyOnZvaWQgMCxCPShhLGI9MCxjPU5hTik9Pnt2YXIgZD1iK2M7Zm9yKGM9YjthW2NdJiYhKGM+PWQpOykrK2M7aWYoMTY8Yy1iJiZhLmJ1ZmZlciYmZGIpcmV0dXJuIGRiLmRlY29kZShhLnN1YmFycmF5KGIsYykpO2ZvcihkPVwiXCI7YjxjOyl7dmFyIGU9YVtiKytdO2lmKGUmMTI4KXt2YXIgaD1hW2IrK10mNjM7aWYoMTkyPT0oZSYyMjQpKWQrPVN0cmluZy5mcm9tQ2hhckNvZGUoKGUmMzEpPDw2fGgpO2Vsc2V7dmFyIGs9YVtiKytdJjYzO2U9MjI0PT0oZSYyNDApPyhlJjE1KTw8MTJ8aDw8NnxrOihlJjcpPDwxOHxoPDwxMnxrPDw2fGFbYisrXSY2Mzs2NTUzNj5lP2QrPVN0cmluZy5mcm9tQ2hhckNvZGUoZSk6KGUtPTY1NTM2LGQrPVN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTZ8ZT4+MTAsNTYzMjB8ZSYxMDIzKSl9fWVsc2UgZCs9U3RyaW5nLmZyb21DaGFyQ29kZShlKX1yZXR1cm4gZH0sXG51YT0oYSxiKT0+YT9CKHgsYSxiKTpcIlwiLGViPShhLGIpPT57Zm9yKHZhciBjPTAsZD1hLmxlbmd0aC0xOzA8PWQ7ZC0tKXt2YXIgZT1hW2RdO1wiLlwiPT09ZT9hLnNwbGljZShkLDEpOlwiLi5cIj09PWU/KGEuc3BsaWNlKGQsMSksYysrKTpjJiYoYS5zcGxpY2UoZCwxKSxjLS0pfWlmKGIpZm9yKDtjO2MtLSlhLnVuc2hpZnQoXCIuLlwiKTtyZXR1cm4gYX0sa2E9YT0+e3ZhciBiPVwiL1wiPT09YS5jaGFyQXQoMCksYz1cIi9cIj09PWEuc2xpY2UoLTEpOyhhPWViKGEuc3BsaXQoXCIvXCIpLmZpbHRlcihkPT4hIWQpLCFiKS5qb2luKFwiL1wiKSl8fGJ8fChhPVwiLlwiKTthJiZjJiYoYSs9XCIvXCIpO3JldHVybihiP1wiL1wiOlwiXCIpK2F9LGZiPWE9Pnt2YXIgYj0vXihcXC8/fCkoW1xcc1xcU10qPykoKD86XFwuezEsMn18W15cXC9dKz98KShcXC5bXi5cXC9dKnwpKSg/OltcXC9dKikkLy5leGVjKGEpLnNsaWNlKDEpO2E9YlswXTtiPWJbMV07aWYoIWEmJiFiKXJldHVyblwiLlwiO2ImJj1iLnNsaWNlKDAsLTEpO3JldHVybiBhK2J9LFxuZ2I9YT0+YSYmYS5tYXRjaCgvKFteXFwvXSt8XFwvKVxcLyokLylbMV0saGI9KCk9PntpZihjYSl7dmFyIGE9cmVxdWlyZShcImNyeXB0b1wiKTtyZXR1cm4gYj0+YS5yYW5kb21GaWxsU3luYyhiKX1yZXR1cm4gYj0+Y3J5cHRvLmdldFJhbmRvbVZhbHVlcyhiKX0saWI9YT0+eyhpYj1oYigpKShhKX0samI9KC4uLmEpPT57Zm9yKHZhciBiPVwiXCIsYz0hMSxkPWEubGVuZ3RoLTE7LTE8PWQmJiFjO2QtLSl7Yz0wPD1kP2FbZF06XCIvXCI7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGMpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkFyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzXCIpO2lmKCFjKXJldHVyblwiXCI7Yj1jK1wiL1wiK2I7Yz1cIi9cIj09PWMuY2hhckF0KDApfWI9ZWIoYi5zcGxpdChcIi9cIikuZmlsdGVyKGU9PiEhZSksIWMpLmpvaW4oXCIvXCIpO3JldHVybihjP1wiL1wiOlwiXCIpK2J8fFwiLlwifSxrYj1bXSxoYT1hPT57Zm9yKHZhciBiPTAsYz0wO2M8YS5sZW5ndGg7KytjKXt2YXIgZD1hLmNoYXJDb2RlQXQoYyk7XG4xMjc+PWQ/YisrOjIwNDc+PWQ/Yis9Mjo1NTI5Njw9ZCYmNTczNDM+PWQ/KGIrPTQsKytjKTpiKz0zfXJldHVybiBifSx1PShhLGIsYyxkKT0+e2lmKCEoMDxkKSlyZXR1cm4gMDt2YXIgZT1jO2Q9YytkLTE7Zm9yKHZhciBoPTA7aDxhLmxlbmd0aDsrK2gpe3ZhciBrPWEuY2hhckNvZGVBdChoKTtpZig1NTI5Njw9ayYmNTczNDM+PWspe3ZhciBxPWEuY2hhckNvZGVBdCgrK2gpO2s9NjU1MzYrKChrJjEwMjMpPDwxMCl8cSYxMDIzfWlmKDEyNz49ayl7aWYoYz49ZClicmVhaztiW2MrK109a31lbHNle2lmKDIwNDc+PWspe2lmKGMrMT49ZClicmVhaztiW2MrK109MTkyfGs+PjZ9ZWxzZXtpZig2NTUzNT49ayl7aWYoYysyPj1kKWJyZWFrO2JbYysrXT0yMjR8az4+MTJ9ZWxzZXtpZihjKzM+PWQpYnJlYWs7YltjKytdPTI0MHxrPj4xODtiW2MrK109MTI4fGs+PjEyJjYzfWJbYysrXT0xMjh8az4+NiY2M31iW2MrK109MTI4fGsmNjN9fWJbY109MDtyZXR1cm4gYy1lfSxyYT0oYSxiKT0+XG57dmFyIGM9QXJyYXkoaGEoYSkrMSk7YT11KGEsYywwLGMubGVuZ3RoKTtiJiYoYy5sZW5ndGg9YSk7cmV0dXJuIGN9LG1iPVtdO2Z1bmN0aW9uIG5iKGEsYil7bWJbYV09e2lucHV0OltdLG91dHB1dDpbXSxjYjpifTt3YihhLHhiKX1cbnZhciB4Yj17b3BlbihhKXt2YXIgYj1tYlthLm5vZGUucmRldl07aWYoIWIpdGhyb3cgbmV3IE4oNDMpO2EudHR5PWI7YS5zZWVrYWJsZT0hMX0sY2xvc2UoYSl7YS50dHkuY2IuZnN5bmMoYS50dHkpfSxmc3luYyhhKXthLnR0eS5jYi5mc3luYyhhLnR0eSl9LHJlYWQoYSxiLGMsZCl7aWYoIWEudHR5fHwhYS50dHkuY2IueGIpdGhyb3cgbmV3IE4oNjApO2Zvcih2YXIgZT0wLGg9MDtoPGQ7aCsrKXt0cnl7dmFyIGs9YS50dHkuY2IueGIoYS50dHkpfWNhdGNoKHEpe3Rocm93IG5ldyBOKDI5KTt9aWYodm9pZCAwPT09ayYmMD09PWUpdGhyb3cgbmV3IE4oNik7aWYobnVsbD09PWt8fHZvaWQgMD09PWspYnJlYWs7ZSsrO2JbYytoXT1rfWUmJihhLm5vZGUuYXRpbWU9RGF0ZS5ub3coKSk7cmV0dXJuIGV9LHdyaXRlKGEsYixjLGQpe2lmKCFhLnR0eXx8IWEudHR5LmNiLnFiKXRocm93IG5ldyBOKDYwKTt0cnl7Zm9yKHZhciBlPTA7ZTxkO2UrKylhLnR0eS5jYi5xYihhLnR0eSxiW2MrZV0pfWNhdGNoKGgpe3Rocm93IG5ldyBOKDI5KTtcbn1kJiYoYS5ub2RlLm10aW1lPWEubm9kZS5jdGltZT1EYXRlLm5vdygpKTtyZXR1cm4gZX19LHliPXt4Yigpe2E6e2lmKCFrYi5sZW5ndGgpe3ZhciBhPW51bGw7aWYoY2Epe3ZhciBiPUJ1ZmZlci5hbGxvYygyNTYpLGM9MCxkPXByb2Nlc3Muc3RkaW4uZmQ7dHJ5e2M9ZnMucmVhZFN5bmMoZCxiLDAsMjU2KX1jYXRjaChlKXtpZihlLnRvU3RyaW5nKCkuaW5jbHVkZXMoXCJFT0ZcIikpYz0wO2Vsc2UgdGhyb3cgZTt9MDxjJiYoYT1iLnNsaWNlKDAsYykudG9TdHJpbmcoXCJ1dGYtOFwiKSl9ZWxzZVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHdpbmRvdy5wcm9tcHQmJihhPXdpbmRvdy5wcm9tcHQoXCJJbnB1dDogXCIpLG51bGwhPT1hJiYoYSs9XCJcXG5cIikpO2lmKCFhKXthPW51bGw7YnJlYWsgYX1rYj1yYShhLCEwKX1hPWtiLnNoaWZ0KCl9cmV0dXJuIGF9LHFiKGEsYil7bnVsbD09PWJ8fDEwPT09Yj8oSGEoQihhLm91dHB1dCkpLGEub3V0cHV0PVtdKTpcbjAhPWImJmEub3V0cHV0LnB1c2goYil9LGZzeW5jKGEpezA8YS5vdXRwdXQ/Lmxlbmd0aCYmKEhhKEIoYS5vdXRwdXQpKSxhLm91dHB1dD1bXSl9LFRiKCl7cmV0dXJue09iOjI1ODU2LFFiOjUsTmI6MTkxLFBiOjM1Mzg3LE1iOlszLDI4LDEyNywyMSw0LDAsMSwwLDE3LDE5LDI2LDAsMTgsMTUsMjMsMjIsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMF19fSxVYigpe3JldHVybiAwfSxWYigpe3JldHVyblsyNCw4MF19fSx6Yj17cWIoYSxiKXtudWxsPT09Ynx8MTA9PT1iPyhJYShCKGEub3V0cHV0KSksYS5vdXRwdXQ9W10pOjAhPWImJmEub3V0cHV0LnB1c2goYil9LGZzeW5jKGEpezA8YS5vdXRwdXQ/Lmxlbmd0aCYmKElhKEIoYS5vdXRwdXQpKSxhLm91dHB1dD1bXSl9fSxPPXtXYTpudWxsLFhhKCl7cmV0dXJuIE8uY3JlYXRlTm9kZShudWxsLFwiL1wiLDE2ODk1LDApfSxjcmVhdGVOb2RlKGEsYixjLGQpe2lmKDI0NTc2PT09KGMmNjE0NDApfHw0MDk2PT09KGMmNjE0NDApKXRocm93IG5ldyBOKDYzKTtcbk8uV2F8fChPLldhPXtkaXI6e25vZGU6e1RhOk8uTGEuVGEsVWE6Ty5MYS5VYSxsb29rdXA6Ty5MYS5sb29rdXAsaGI6Ty5MYS5oYixyZW5hbWU6Ty5MYS5yZW5hbWUsdW5saW5rOk8uTGEudW5saW5rLHJtZGlyOk8uTGEucm1kaXIscmVhZGRpcjpPLkxhLnJlYWRkaXIsc3ltbGluazpPLkxhLnN5bWxpbmt9LHN0cmVhbTp7VmE6Ty5NYS5WYX19LGZpbGU6e25vZGU6e1RhOk8uTGEuVGEsVWE6Ty5MYS5VYX0sc3RyZWFtOntWYTpPLk1hLlZhLHJlYWQ6Ty5NYS5yZWFkLHdyaXRlOk8uTWEud3JpdGUsaWI6Ty5NYS5pYixqYjpPLk1hLmpifX0sbGluazp7bm9kZTp7VGE6Ty5MYS5UYSxVYTpPLkxhLlVhLHJlYWRsaW5rOk8uTGEucmVhZGxpbmt9LHN0cmVhbTp7fX0sdWI6e25vZGU6e1RhOk8uTGEuVGEsVWE6Ty5MYS5VYX0sc3RyZWFtOkFifX0pO2M9QmIoYSxiLGMsZCk7UChjLm1vZGUpPyhjLkxhPU8uV2EuZGlyLm5vZGUsYy5NYT1PLldhLmRpci5zdHJlYW0sYy5OYT17fSk6MzI3Njg9PT1cbihjLm1vZGUmNjE0NDApPyhjLkxhPU8uV2EuZmlsZS5ub2RlLGMuTWE9Ty5XYS5maWxlLnN0cmVhbSxjLlJhPTAsYy5OYT1udWxsKTo0MDk2MD09PShjLm1vZGUmNjE0NDApPyhjLkxhPU8uV2EubGluay5ub2RlLGMuTWE9Ty5XYS5saW5rLnN0cmVhbSk6ODE5Mj09PShjLm1vZGUmNjE0NDApJiYoYy5MYT1PLldhLnViLm5vZGUsYy5NYT1PLldhLnViLnN0cmVhbSk7Yy5hdGltZT1jLm10aW1lPWMuY3RpbWU9RGF0ZS5ub3coKTthJiYoYS5OYVtiXT1jLGEuYXRpbWU9YS5tdGltZT1hLmN0aW1lPWMuYXRpbWUpO3JldHVybiBjfSxTYihhKXtyZXR1cm4gYS5OYT9hLk5hLnN1YmFycmF5P2EuTmEuc3ViYXJyYXkoMCxhLlJhKTpuZXcgVWludDhBcnJheShhLk5hKTpuZXcgVWludDhBcnJheSgwKX0sTGE6e1RhKGEpe3ZhciBiPXt9O2IuZGV2PTgxOTI9PT0oYS5tb2RlJjYxNDQwKT9hLmlkOjE7Yi5pbm89YS5pZDtiLm1vZGU9YS5tb2RlO2Iubmxpbms9MTtiLnVpZD0wO2IuZ2lkPTA7Yi5yZGV2PVxuYS5yZGV2O1AoYS5tb2RlKT9iLnNpemU9NDA5NjozMjc2OD09PShhLm1vZGUmNjE0NDApP2Iuc2l6ZT1hLlJhOjQwOTYwPT09KGEubW9kZSY2MTQ0MCk/Yi5zaXplPWEubGluay5sZW5ndGg6Yi5zaXplPTA7Yi5hdGltZT1uZXcgRGF0ZShhLmF0aW1lKTtiLm10aW1lPW5ldyBEYXRlKGEubXRpbWUpO2IuY3RpbWU9bmV3IERhdGUoYS5jdGltZSk7Yi5ibGtzaXplPTQwOTY7Yi5ibG9ja3M9TWF0aC5jZWlsKGIuc2l6ZS9iLmJsa3NpemUpO3JldHVybiBifSxVYShhLGIpe2Zvcih2YXIgYyBvZltcIm1vZGVcIixcImF0aW1lXCIsXCJtdGltZVwiLFwiY3RpbWVcIl0pbnVsbCE9YltjXSYmKGFbY109YltjXSk7dm9pZCAwIT09Yi5zaXplJiYoYj1iLnNpemUsYS5SYSE9YiYmKDA9PWI/KGEuTmE9bnVsbCxhLlJhPTApOihjPWEuTmEsYS5OYT1uZXcgVWludDhBcnJheShiKSxjJiZhLk5hLnNldChjLnN1YmFycmF5KDAsTWF0aC5taW4oYixhLlJhKSkpLGEuUmE9YikpKX0sbG9va3VwKCl7dGhyb3cgTy52Yjtcbn0saGIoYSxiLGMsZCl7cmV0dXJuIE8uY3JlYXRlTm9kZShhLGIsYyxkKX0scmVuYW1lKGEsYixjKXt0cnl7dmFyIGQ9UShiLGMpfWNhdGNoKGgpe31pZihkKXtpZihQKGEubW9kZSkpZm9yKHZhciBlIGluIGQuTmEpdGhyb3cgbmV3IE4oNTUpO0NiKGQpfWRlbGV0ZSBhLnBhcmVudC5OYVthLm5hbWVdO2IuTmFbY109YTthLm5hbWU9YztiLmN0aW1lPWIubXRpbWU9YS5wYXJlbnQuY3RpbWU9YS5wYXJlbnQubXRpbWU9RGF0ZS5ub3coKX0sdW5saW5rKGEsYil7ZGVsZXRlIGEuTmFbYl07YS5jdGltZT1hLm10aW1lPURhdGUubm93KCl9LHJtZGlyKGEsYil7dmFyIGM9UShhLGIpLGQ7Zm9yKGQgaW4gYy5OYSl0aHJvdyBuZXcgTig1NSk7ZGVsZXRlIGEuTmFbYl07YS5jdGltZT1hLm10aW1lPURhdGUubm93KCl9LHJlYWRkaXIoYSl7cmV0dXJuW1wiLlwiLFwiLi5cIiwuLi5PYmplY3Qua2V5cyhhLk5hKV19LHN5bWxpbmsoYSxiLGMpe2E9Ty5jcmVhdGVOb2RlKGEsYiw0MTQ3MSwwKTthLmxpbms9XG5jO3JldHVybiBhfSxyZWFkbGluayhhKXtpZig0MDk2MCE9PShhLm1vZGUmNjE0NDApKXRocm93IG5ldyBOKDI4KTtyZXR1cm4gYS5saW5rfX0sTWE6e3JlYWQoYSxiLGMsZCxlKXt2YXIgaD1hLm5vZGUuTmE7aWYoZT49YS5ub2RlLlJhKXJldHVybiAwO2E9TWF0aC5taW4oYS5ub2RlLlJhLWUsZCk7aWYoODxhJiZoLnN1YmFycmF5KWIuc2V0KGguc3ViYXJyYXkoZSxlK2EpLGMpO2Vsc2UgZm9yKGQ9MDtkPGE7ZCsrKWJbYytkXT1oW2UrZF07cmV0dXJuIGF9LHdyaXRlKGEsYixjLGQsZSxoKXtiLmJ1ZmZlcj09PXAuYnVmZmVyJiYoaD0hMSk7aWYoIWQpcmV0dXJuIDA7YT1hLm5vZGU7YS5tdGltZT1hLmN0aW1lPURhdGUubm93KCk7aWYoYi5zdWJhcnJheSYmKCFhLk5hfHxhLk5hLnN1YmFycmF5KSl7aWYoaClyZXR1cm4gYS5OYT1iLnN1YmFycmF5KGMsYytkKSxhLlJhPWQ7aWYoMD09PWEuUmEmJjA9PT1lKXJldHVybiBhLk5hPWIuc2xpY2UoYyxjK2QpLGEuUmE9ZDtpZihlK2Q8PWEuUmEpcmV0dXJuIGEuTmEuc2V0KGIuc3ViYXJyYXkoYyxcbmMrZCksZSksZH1oPWUrZDt2YXIgaz1hLk5hP2EuTmEubGVuZ3RoOjA7az49aHx8KGg9TWF0aC5tYXgoaCxrKigxMDQ4NTc2Pms/MjoxLjEyNSk+Pj4wKSwwIT1rJiYoaD1NYXRoLm1heChoLDI1NikpLGs9YS5OYSxhLk5hPW5ldyBVaW50OEFycmF5KGgpLDA8YS5SYSYmYS5OYS5zZXQoay5zdWJhcnJheSgwLGEuUmEpLDApKTtpZihhLk5hLnN1YmFycmF5JiZiLnN1YmFycmF5KWEuTmEuc2V0KGIuc3ViYXJyYXkoYyxjK2QpLGUpO2Vsc2UgZm9yKGg9MDtoPGQ7aCsrKWEuTmFbZStoXT1iW2MraF07YS5SYT1NYXRoLm1heChhLlJhLGUrZCk7cmV0dXJuIGR9LFZhKGEsYixjKXsxPT09Yz9iKz1hLnBvc2l0aW9uOjI9PT1jJiYzMjc2OD09PShhLm5vZGUubW9kZSY2MTQ0MCkmJihiKz1hLm5vZGUuUmEpO2lmKDA+Yil0aHJvdyBuZXcgTigyOCk7cmV0dXJuIGJ9LGliKGEsYixjLGQsZSl7aWYoMzI3NjghPT0oYS5ub2RlLm1vZGUmNjE0NDApKXRocm93IG5ldyBOKDQzKTthPWEubm9kZS5OYTtcbmlmKGUmMnx8IWF8fGEuYnVmZmVyIT09cC5idWZmZXIpe2U9ITA7ZD02NTUzNipNYXRoLmNlaWwoYi82NTUzNik7dmFyIGg9RGIoNjU1MzYsZCk7aCYmeC5maWxsKDAsaCxoK2QpO2Q9aDtpZighZCl0aHJvdyBuZXcgTig0OCk7aWYoYSl7aWYoMDxjfHxjK2I8YS5sZW5ndGgpYS5zdWJhcnJheT9hPWEuc3ViYXJyYXkoYyxjK2IpOmE9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYSxjLGMrYik7cC5zZXQoYSxkKX19ZWxzZSBlPSExLGQ9YS5ieXRlT2Zmc2V0O3JldHVybntLYjpkLEFiOmV9fSxqYihhLGIsYyxkKXtPLk1hLndyaXRlKGEsYiwwLGQsYywhMSk7cmV0dXJuIDB9fX0sbGE9KGEsYik9Pnt2YXIgYz0wO2EmJihjfD0zNjUpO2ImJihjfD0xNDYpO3JldHVybiBjfSxFYj1udWxsLEZiPXt9LEdiPVtdLEhiPTEsUj1udWxsLEliPSExLEpiPSEwLEtiPXt9LE49Y2xhc3N7bmFtZT1cIkVycm5vRXJyb3JcIjtjb25zdHJ1Y3RvcihhKXt0aGlzLlBhPWF9fSxMYj1jbGFzc3tnYj17fTtub2RlPW51bGw7Z2V0IGZsYWdzKCl7cmV0dXJuIHRoaXMuZ2IuZmxhZ3N9c2V0IGZsYWdzKGEpe3RoaXMuZ2IuZmxhZ3M9XG5hfWdldCBwb3NpdGlvbigpe3JldHVybiB0aGlzLmdiLnBvc2l0aW9ufXNldCBwb3NpdGlvbihhKXt0aGlzLmdiLnBvc2l0aW9uPWF9fSxNYj1jbGFzc3tMYT17fTtNYT17fTthYj1udWxsO2NvbnN0cnVjdG9yKGEsYixjLGQpe2F8fD10aGlzO3RoaXMucGFyZW50PWE7dGhpcy5YYT1hLlhhO3RoaXMuaWQ9SGIrKzt0aGlzLm5hbWU9Yjt0aGlzLm1vZGU9Yzt0aGlzLnJkZXY9ZDt0aGlzLmF0aW1lPXRoaXMubXRpbWU9dGhpcy5jdGltZT1EYXRlLm5vdygpfWdldCByZWFkKCl7cmV0dXJuIDM2NT09PSh0aGlzLm1vZGUmMzY1KX1zZXQgcmVhZChhKXthP3RoaXMubW9kZXw9MzY1OnRoaXMubW9kZSY9LTM2Nn1nZXQgd3JpdGUoKXtyZXR1cm4gMTQ2PT09KHRoaXMubW9kZSYxNDYpfXNldCB3cml0ZShhKXthP3RoaXMubW9kZXw9MTQ2OnRoaXMubW9kZSY9LTE0N319O1xuZnVuY3Rpb24gUyhhLGI9e30pe2lmKCFhKXRocm93IG5ldyBOKDQ0KTtiLm5iPz8oYi5uYj0hMCk7XCIvXCI9PT1hLmNoYXJBdCgwKXx8KGE9XCIvL1wiK2EpO3ZhciBjPTA7YTpmb3IoOzQwPmM7YysrKXthPWEuc3BsaXQoXCIvXCIpLmZpbHRlcihxPT4hIXEpO2Zvcih2YXIgZD1FYixlPVwiL1wiLGg9MDtoPGEubGVuZ3RoO2grKyl7dmFyIGs9aD09PWEubGVuZ3RoLTE7aWYoayYmYi5wYXJlbnQpYnJlYWs7aWYoXCIuXCIhPT1hW2hdKWlmKFwiLi5cIj09PWFbaF0pZT1mYihlKSxkPWQucGFyZW50O2Vsc2V7ZT1rYShlK1wiL1wiK2FbaF0pO3RyeXtkPVEoZCxhW2hdKX1jYXRjaChxKXtpZig0ND09PXE/LlBhJiZrJiZiLkpiKXJldHVybntwYXRoOmV9O3Rocm93IHE7fSFkLmFifHxrJiYhYi5uYnx8KGQ9ZC5hYi5yb290KTtpZig0MDk2MD09PShkLm1vZGUmNjE0NDApJiYoIWt8fGIuJGEpKXtpZighZC5MYS5yZWFkbGluayl0aHJvdyBuZXcgTig1Mik7ZD1kLkxhLnJlYWRsaW5rKGQpO1wiL1wiPT09ZC5jaGFyQXQoMCl8fFxuKGQ9ZmIoZSkrXCIvXCIrZCk7YT1kK1wiL1wiK2Euc2xpY2UoaCsxKS5qb2luKFwiL1wiKTtjb250aW51ZSBhfX19cmV0dXJue3BhdGg6ZSxub2RlOmR9fXRocm93IG5ldyBOKDMyKTt9ZnVuY3Rpb24gamEoYSl7Zm9yKHZhciBiOzspe2lmKGE9PT1hLnBhcmVudClyZXR1cm4gYT1hLlhhLnpiLGI/XCIvXCIhPT1hW2EubGVuZ3RoLTFdP2Ake2F9LyR7Yn1gOmErYjphO2I9Yj9gJHthLm5hbWV9LyR7Yn1gOmEubmFtZTthPWEucGFyZW50fX1mdW5jdGlvbiBOYihhLGIpe2Zvcih2YXIgYz0wLGQ9MDtkPGIubGVuZ3RoO2QrKyljPShjPDw1KS1jK2IuY2hhckNvZGVBdChkKXwwO3JldHVybihhK2M+Pj4wKSVSLmxlbmd0aH1mdW5jdGlvbiBDYihhKXt2YXIgYj1OYihhLnBhcmVudC5pZCxhLm5hbWUpO2lmKFJbYl09PT1hKVJbYl09YS5iYjtlbHNlIGZvcihiPVJbYl07Yjspe2lmKGIuYmI9PT1hKXtiLmJiPWEuYmI7YnJlYWt9Yj1iLmJifX1cbmZ1bmN0aW9uIFEoYSxiKXt2YXIgYz1QKGEubW9kZSk/KGM9T2IoYSxcInhcIikpP2M6YS5MYS5sb29rdXA/MDoyOjU0O2lmKGMpdGhyb3cgbmV3IE4oYyk7Zm9yKGM9UltOYihhLmlkLGIpXTtjO2M9Yy5iYil7dmFyIGQ9Yy5uYW1lO2lmKGMucGFyZW50LmlkPT09YS5pZCYmZD09PWIpcmV0dXJuIGN9cmV0dXJuIGEuTGEubG9va3VwKGEsYil9ZnVuY3Rpb24gQmIoYSxiLGMsZCl7YT1uZXcgTWIoYSxiLGMsZCk7Yj1OYihhLnBhcmVudC5pZCxhLm5hbWUpO2EuYmI9UltiXTtyZXR1cm4gUltiXT1hfWZ1bmN0aW9uIFAoYSl7cmV0dXJuIDE2Mzg0PT09KGEmNjE0NDApfWZ1bmN0aW9uIFBiKGEpe3ZhciBiPVtcInJcIixcIndcIixcInJ3XCJdW2EmM107YSY1MTImJihiKz1cIndcIik7cmV0dXJuIGJ9XG5mdW5jdGlvbiBPYihhLGIpe2lmKEpiKXJldHVybiAwO2lmKCFiLmluY2x1ZGVzKFwiclwiKXx8YS5tb2RlJjI5Mil7aWYoYi5pbmNsdWRlcyhcIndcIikmJiEoYS5tb2RlJjE0Nil8fGIuaW5jbHVkZXMoXCJ4XCIpJiYhKGEubW9kZSY3MykpcmV0dXJuIDJ9ZWxzZSByZXR1cm4gMjtyZXR1cm4gMH1mdW5jdGlvbiBRYihhLGIpe2lmKCFQKGEubW9kZSkpcmV0dXJuIDU0O3RyeXtyZXR1cm4gUShhLGIpLDIwfWNhdGNoKGMpe31yZXR1cm4gT2IoYSxcInd4XCIpfWZ1bmN0aW9uIFJiKGEsYixjKXt0cnl7dmFyIGQ9UShhLGIpfWNhdGNoKGUpe3JldHVybiBlLlBhfWlmKGE9T2IoYSxcInd4XCIpKXJldHVybiBhO2lmKGMpe2lmKCFQKGQubW9kZSkpcmV0dXJuIDU0O2lmKGQ9PT1kLnBhcmVudHx8XCIvXCI9PT1qYShkKSlyZXR1cm4gMTB9ZWxzZSBpZihQKGQubW9kZSkpcmV0dXJuIDMxO3JldHVybiAwfWZ1bmN0aW9uIFNiKGEpe2lmKCFhKXRocm93IG5ldyBOKDYzKTtyZXR1cm4gYX1cbmZ1bmN0aW9uIFQoYSl7YT1HYlthXTtpZighYSl0aHJvdyBuZXcgTig4KTtyZXR1cm4gYX1mdW5jdGlvbiBUYihhLGI9LTEpe2E9T2JqZWN0LmFzc2lnbihuZXcgTGIsYSk7aWYoLTE9PWIpYTp7Zm9yKGI9MDs0MDk2Pj1iO2IrKylpZighR2JbYl0pYnJlYWsgYTt0aHJvdyBuZXcgTigzMyk7fWEuZmQ9YjtyZXR1cm4gR2JbYl09YX1mdW5jdGlvbiBVYihhLGI9LTEpe2E9VGIoYSxiKTthLk1hPy5SYj8uKGEpO3JldHVybiBhfWZ1bmN0aW9uIFZiKGEsYixjKXt2YXIgZD1hPy5NYS5VYTthPWQ/YTpiO2Q/Pz1iLkxhLlVhO1NiKGQpO2QoYSxjKX12YXIgQWI9e29wZW4oYSl7YS5NYT1GYlthLm5vZGUucmRldl0uTWE7YS5NYS5vcGVuPy4oYSl9LFZhKCl7dGhyb3cgbmV3IE4oNzApO319O2Z1bmN0aW9uIHdiKGEsYil7RmJbYV09e01hOmJ9fVxuZnVuY3Rpb24gV2IoYSxiKXt2YXIgYz1cIi9cIj09PWI7aWYoYyYmRWIpdGhyb3cgbmV3IE4oMTApO2lmKCFjJiZiKXt2YXIgZD1TKGIse25iOiExfSk7Yj1kLnBhdGg7ZD1kLm5vZGU7aWYoZC5hYil0aHJvdyBuZXcgTigxMCk7aWYoIVAoZC5tb2RlKSl0aHJvdyBuZXcgTig1NCk7fWI9e3R5cGU6YSxXYjp7fSx6YjpiLEliOltdfTthPWEuWGEoYik7YS5YYT1iO2Iucm9vdD1hO2M/RWI9YTpkJiYoZC5hYj1iLGQuWGEmJmQuWGEuSWIucHVzaChiKSl9ZnVuY3Rpb24gWGIoYSxiLGMpe3ZhciBkPVMoYSx7cGFyZW50OiEwfSkubm9kZTthPWdiKGEpO2lmKCFhKXRocm93IG5ldyBOKDI4KTtpZihcIi5cIj09PWF8fFwiLi5cIj09PWEpdGhyb3cgbmV3IE4oMjApO3ZhciBlPVFiKGQsYSk7aWYoZSl0aHJvdyBuZXcgTihlKTtpZighZC5MYS5oYil0aHJvdyBuZXcgTig2Myk7cmV0dXJuIGQuTGEuaGIoZCxhLGIsYyl9XG5mdW5jdGlvbiBtYShhLGI9NDM4KXtyZXR1cm4gWGIoYSxiJjQwOTV8MzI3NjgsMCl9ZnVuY3Rpb24gVShhLGI9NTExKXtyZXR1cm4gWGIoYSxiJjEwMjN8MTYzODQsMCl9ZnVuY3Rpb24gWWIoYSxiLGMpe1widW5kZWZpbmVkXCI9PXR5cGVvZiBjJiYoYz1iLGI9NDM4KTtYYihhLGJ8ODE5MixjKX1mdW5jdGlvbiBaYihhLGIpe2lmKCFqYihhKSl0aHJvdyBuZXcgTig0NCk7dmFyIGM9UyhiLHtwYXJlbnQ6ITB9KS5ub2RlO2lmKCFjKXRocm93IG5ldyBOKDQ0KTtiPWdiKGIpO3ZhciBkPVFiKGMsYik7aWYoZCl0aHJvdyBuZXcgTihkKTtpZighYy5MYS5zeW1saW5rKXRocm93IG5ldyBOKDYzKTtjLkxhLnN5bWxpbmsoYyxiLGEpfVxuZnVuY3Rpb24gJGIoYSl7dmFyIGI9UyhhLHtwYXJlbnQ6ITB9KS5ub2RlO2E9Z2IoYSk7dmFyIGM9UShiLGEpLGQ9UmIoYixhLCEwKTtpZihkKXRocm93IG5ldyBOKGQpO2lmKCFiLkxhLnJtZGlyKXRocm93IG5ldyBOKDYzKTtpZihjLmFiKXRocm93IG5ldyBOKDEwKTtiLkxhLnJtZGlyKGIsYSk7Q2IoYyl9ZnVuY3Rpb24gemEoYSl7dmFyIGI9UyhhLHtwYXJlbnQ6ITB9KS5ub2RlO2lmKCFiKXRocm93IG5ldyBOKDQ0KTthPWdiKGEpO3ZhciBjPVEoYixhKSxkPVJiKGIsYSwhMSk7aWYoZCl0aHJvdyBuZXcgTihkKTtpZighYi5MYS51bmxpbmspdGhyb3cgbmV3IE4oNjMpO2lmKGMuYWIpdGhyb3cgbmV3IE4oMTApO2IuTGEudW5saW5rKGIsYSk7Q2IoYyl9ZnVuY3Rpb24gYWMoYSxiKXthPVMoYSx7JGE6IWJ9KS5ub2RlO3JldHVybiBTYihhLkxhLlRhKShhKX1cbmZ1bmN0aW9uIGJjKGEsYixjLGQpe1ZiKGEsYix7bW9kZTpjJjQwOTV8Yi5tb2RlJi00MDk2LGN0aW1lOkRhdGUubm93KCksRmI6ZH0pfWZ1bmN0aW9uIG5hKGEsYil7YT1cInN0cmluZ1wiPT10eXBlb2YgYT9TKGEseyRhOiEwfSkubm9kZTphO2JjKG51bGwsYSxiKX1mdW5jdGlvbiBjYyhhLGIsYyl7aWYoUChiLm1vZGUpKXRocm93IG5ldyBOKDMxKTtpZigzMjc2OCE9PShiLm1vZGUmNjE0NDApKXRocm93IG5ldyBOKDI4KTt2YXIgZD1PYihiLFwid1wiKTtpZihkKXRocm93IG5ldyBOKGQpO1ZiKGEsYix7c2l6ZTpjLHRpbWVzdGFtcDpEYXRlLm5vdygpfSl9XG5mdW5jdGlvbiBvYShhLGIsYz00Mzgpe2lmKFwiXCI9PT1hKXRocm93IG5ldyBOKDQ0KTtpZihcInN0cmluZ1wiPT10eXBlb2YgYil7dmFyIGQ9e3I6MCxcInIrXCI6Mix3OjU3NyxcIncrXCI6NTc4LGE6MTA4OSxcImErXCI6MTA5MH1bYl07aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIGQpdGhyb3cgRXJyb3IoYFVua25vd24gZmlsZSBvcGVuIG1vZGU6ICR7Yn1gKTtiPWR9Yz1iJjY0P2MmNDA5NXwzMjc2ODowO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBhKWQ9YTtlbHNle3ZhciBlPWEuZW5kc1dpdGgoXCIvXCIpO2E9UyhhLHskYTohKGImMTMxMDcyKSxKYjohMH0pO2Q9YS5ub2RlO2E9YS5wYXRofXZhciBoPSExO2lmKGImNjQpaWYoZCl7aWYoYiYxMjgpdGhyb3cgbmV3IE4oMjApO31lbHNle2lmKGUpdGhyb3cgbmV3IE4oMzEpO2Q9WGIoYSxjfDUxMSwwKTtoPSEwfWlmKCFkKXRocm93IG5ldyBOKDQ0KTs4MTkyPT09KGQubW9kZSY2MTQ0MCkmJihiJj0tNTEzKTtpZihiJjY1NTM2JiYhUChkLm1vZGUpKXRocm93IG5ldyBOKDU0KTtcbmlmKCFoJiYoZT1kPzQwOTYwPT09KGQubW9kZSY2MTQ0MCk/MzI6UChkLm1vZGUpJiYoXCJyXCIhPT1QYihiKXx8YiY1NzYpPzMxOk9iKGQsUGIoYikpOjQ0KSl0aHJvdyBuZXcgTihlKTtiJjUxMiYmIWgmJihlPWQsZT1cInN0cmluZ1wiPT10eXBlb2YgZT9TKGUseyRhOiEwfSkubm9kZTplLGNjKG51bGwsZSwwKSk7YiY9LTEzMTcxMztlPVRiKHtub2RlOmQscGF0aDpqYShkKSxmbGFnczpiLHNlZWthYmxlOiEwLHBvc2l0aW9uOjAsTWE6ZC5NYSxMYjpbXSxlcnJvcjohMX0pO2UuTWEub3BlbiYmZS5NYS5vcGVuKGUpO2gmJm5hKGQsYyY1MTEpOyFmLmxvZ1JlYWRGaWxlc3x8YiYxfHxhIGluIEtifHwoS2JbYV09MSk7cmV0dXJuIGV9ZnVuY3Rpb24gcWEoYSl7aWYobnVsbD09PWEuZmQpdGhyb3cgbmV3IE4oOCk7YS5vYiYmKGEub2I9bnVsbCk7dHJ5e2EuTWEuY2xvc2UmJmEuTWEuY2xvc2UoYSl9Y2F0Y2goYil7dGhyb3cgYjt9ZmluYWxseXtHYlthLmZkXT1udWxsfWEuZmQ9bnVsbH1cbmZ1bmN0aW9uIG1jKGEsYixjKXtpZihudWxsPT09YS5mZCl0aHJvdyBuZXcgTig4KTtpZighYS5zZWVrYWJsZXx8IWEuTWEuVmEpdGhyb3cgbmV3IE4oNzApO2lmKDAhPWMmJjEhPWMmJjIhPWMpdGhyb3cgbmV3IE4oMjgpO2EucG9zaXRpb249YS5NYS5WYShhLGIsYyk7YS5MYj1bXX1mdW5jdGlvbiBFYyhhLGIsYyxkLGUpe2lmKDA+ZHx8MD5lKXRocm93IG5ldyBOKDI4KTtpZihudWxsPT09YS5mZCl0aHJvdyBuZXcgTig4KTtpZigxPT09KGEuZmxhZ3MmMjA5NzE1NSkpdGhyb3cgbmV3IE4oOCk7aWYoUChhLm5vZGUubW9kZSkpdGhyb3cgbmV3IE4oMzEpO2lmKCFhLk1hLnJlYWQpdGhyb3cgbmV3IE4oMjgpO3ZhciBoPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBlO2lmKCFoKWU9YS5wb3NpdGlvbjtlbHNlIGlmKCFhLnNlZWthYmxlKXRocm93IG5ldyBOKDcwKTtiPWEuTWEucmVhZChhLGIsYyxkLGUpO2h8fChhLnBvc2l0aW9uKz1iKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIHBhKGEsYixjLGQsZSl7aWYoMD5kfHwwPmUpdGhyb3cgbmV3IE4oMjgpO2lmKG51bGw9PT1hLmZkKXRocm93IG5ldyBOKDgpO2lmKDA9PT0oYS5mbGFncyYyMDk3MTU1KSl0aHJvdyBuZXcgTig4KTtpZihQKGEubm9kZS5tb2RlKSl0aHJvdyBuZXcgTigzMSk7aWYoIWEuTWEud3JpdGUpdGhyb3cgbmV3IE4oMjgpO2Euc2Vla2FibGUmJmEuZmxhZ3MmMTAyNCYmbWMoYSwwLDIpO3ZhciBoPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBlO2lmKCFoKWU9YS5wb3NpdGlvbjtlbHNlIGlmKCFhLnNlZWthYmxlKXRocm93IG5ldyBOKDcwKTtiPWEuTWEud3JpdGUoYSxiLGMsZCxlLHZvaWQgMCk7aHx8KGEucG9zaXRpb24rPWIpO3JldHVybiBifVxuZnVuY3Rpb24geWEoYSl7dmFyIGI9XCJiaW5hcnlcIjtpZihcInV0ZjhcIiE9PWImJlwiYmluYXJ5XCIhPT1iKXRocm93IEVycm9yKGBJbnZhbGlkIGVuY29kaW5nIHR5cGUgXCIke2J9XCJgKTt2YXIgYzt2YXIgZD1vYShhLGR8fDApO2E9YWMoYSkuc2l6ZTt2YXIgZT1uZXcgVWludDhBcnJheShhKTtFYyhkLGUsMCxhLDApO1widXRmOFwiPT09Yj9jPUIoZSk6XCJiaW5hcnlcIj09PWImJihjPWUpO3FhKGQpO3JldHVybiBjfVxuZnVuY3Rpb24gVihhLGIsYyl7YT1rYShcIi9kZXYvXCIrYSk7dmFyIGQ9bGEoISFiLCEhYyk7Vi55Yj8/KFYueWI9NjQpO3ZhciBlPVYueWIrKzw8OHwwO3diKGUse29wZW4oaCl7aC5zZWVrYWJsZT0hMX0sY2xvc2UoKXtjPy5idWZmZXI/Lmxlbmd0aCYmYygxMCl9LHJlYWQoaCxrLHEsdyl7Zm9yKHZhciB2PTAsQz0wO0M8dztDKyspe3RyeXt2YXIgRz1iKCl9Y2F0Y2gocGIpe3Rocm93IG5ldyBOKDI5KTt9aWYodm9pZCAwPT09RyYmMD09PXYpdGhyb3cgbmV3IE4oNik7aWYobnVsbD09PUd8fHZvaWQgMD09PUcpYnJlYWs7disrO2tbcStDXT1HfXYmJihoLm5vZGUuYXRpbWU9RGF0ZS5ub3coKSk7cmV0dXJuIHZ9LHdyaXRlKGgsayxxLHcpe2Zvcih2YXIgdj0wO3Y8dzt2KyspdHJ5e2Moa1txK3ZdKX1jYXRjaChDKXt0aHJvdyBuZXcgTigyOSk7fXcmJihoLm5vZGUubXRpbWU9aC5ub2RlLmN0aW1lPURhdGUubm93KCkpO3JldHVybiB2fX0pO1liKGEsZCxlKX12YXIgVz17fTtcbmZ1bmN0aW9uIEdjKGEsYixjKXtpZihcIi9cIj09PWIuY2hhckF0KDApKXJldHVybiBiO2E9LTEwMD09PWE/XCIvXCI6VChhKS5wYXRoO2lmKDA9PWIubGVuZ3RoKXtpZighYyl0aHJvdyBuZXcgTig0NCk7cmV0dXJuIGF9cmV0dXJuIGErXCIvXCIrYn1cbmZ1bmN0aW9uIEhjKGEsYil7RVthPj4yXT1iLmRldjtFW2ErND4+Ml09Yi5tb2RlO0ZbYSs4Pj4yXT1iLm5saW5rO0VbYSsxMj4+Ml09Yi51aWQ7RVthKzE2Pj4yXT1iLmdpZDtFW2ErMjA+PjJdPWIucmRldjtIW2ErMjQ+PjNdPUJpZ0ludChiLnNpemUpO0VbYSszMj4+Ml09NDA5NjtFW2ErMzY+PjJdPWIuYmxvY2tzO3ZhciBjPWIuYXRpbWUuZ2V0VGltZSgpLGQ9Yi5tdGltZS5nZXRUaW1lKCksZT1iLmN0aW1lLmdldFRpbWUoKTtIW2ErNDA+PjNdPUJpZ0ludChNYXRoLmZsb29yKGMvMUUzKSk7RlthKzQ4Pj4yXT1jJTFFMyoxRTY7SFthKzU2Pj4zXT1CaWdJbnQoTWF0aC5mbG9vcihkLzFFMykpO0ZbYSs2ND4+Ml09ZCUxRTMqMUU2O0hbYSs3Mj4+M109QmlnSW50KE1hdGguZmxvb3IoZS8xRTMpKTtGW2ErODA+PjJdPWUlMUUzKjFFNjtIW2ErODg+PjNdPUJpZ0ludChiLmlubyk7cmV0dXJuIDB9XG52YXIgSWM9dm9pZCAwLEpjPSgpPT57dmFyIGE9RVsrSWM+PjJdO0ljKz00O3JldHVybiBhfSxLYz0wLExjPVswLDMxLDYwLDkxLDEyMSwxNTIsMTgyLDIxMywyNDQsMjc0LDMwNSwzMzVdLE1jPVswLDMxLDU5LDkwLDEyMCwxNTEsMTgxLDIxMiwyNDMsMjczLDMwNCwzMzRdLE5jPXt9LE9jPWE9PntNYT1hO2NifHwwPEtjfHwoZi5vbkV4aXQ/LihhKSxMYT0hMCk7RGEoYSxuZXcgWWEoYSkpfSxQYz1hPT57aWYoIUxhKXRyeXtpZihhKCksIShjYnx8MDxLYykpdHJ5e01hPWE9TWEsT2MoYSl9Y2F0Y2goYil7YiBpbnN0YW5jZW9mIFlhfHxcInVud2luZFwiPT1ifHxEYSgxLGIpfX1jYXRjaChiKXtiIGluc3RhbmNlb2YgWWF8fFwidW53aW5kXCI9PWJ8fERhKDEsYil9fSxRYz17fSxTYz0oKT0+e2lmKCFSYyl7dmFyIGE9e1VTRVI6XCJ3ZWJfdXNlclwiLExPR05BTUU6XCJ3ZWJfdXNlclwiLFBBVEg6XCIvXCIsUFdEOlwiL1wiLEhPTUU6XCIvaG9tZS93ZWJfdXNlclwiLExBTkc6KFwib2JqZWN0XCI9PXR5cGVvZiBuYXZpZ2F0b3ImJlxubmF2aWdhdG9yLmxhbmd1YWdlcyYmbmF2aWdhdG9yLmxhbmd1YWdlc1swXXx8XCJDXCIpLnJlcGxhY2UoXCItXCIsXCJfXCIpK1wiLlVURi04XCIsXzpDYXx8XCIuL3RoaXMucHJvZ3JhbVwifSxiO2ZvcihiIGluIFFjKXZvaWQgMD09PVFjW2JdP2RlbGV0ZSBhW2JdOmFbYl09UWNbYl07dmFyIGM9W107Zm9yKGIgaW4gYSljLnB1c2goYCR7Yn09JHthW2JdfWApO1JjPWN9cmV0dXJuIFJjfSxSYyx4YT1hPT57dmFyIGI9aGEoYSkrMSxjPXooYik7dShhLHgsYyxiKTtyZXR1cm4gY30sVGM9KGEsYixjLGQpPT57dmFyIGU9e3N0cmluZzp2PT57dmFyIEM9MDtudWxsIT09diYmdm9pZCAwIT09diYmMCE9PXYmJihDPXhhKHYpKTtyZXR1cm4gQ30sYXJyYXk6dj0+e3ZhciBDPXoodi5sZW5ndGgpO3Auc2V0KHYsQyk7cmV0dXJuIEN9fTthPWZbXCJfXCIrYV07dmFyIGg9W10saz0wO2lmKGQpZm9yKHZhciBxPTA7cTxkLmxlbmd0aDtxKyspe3ZhciB3PWVbY1txXV07dz8oMD09PWsmJihrPXNhKCkpLGhbcV09dyhkW3FdKSk6XG5oW3FdPWRbcV19Yz1hKC4uLmgpO3JldHVybiBjPWZ1bmN0aW9uKHYpezAhPT1rJiZ3YShrKTtyZXR1cm5cInN0cmluZ1wiPT09Yj92P0IoeCx2KTpcIlwiOlwiYm9vbGVhblwiPT09Yj8hIXY6dn0oYyl9LGVhPTAsZGE9KGEsYik9PntiPTE9PWI/eihhLmxlbmd0aCk6aWEoYS5sZW5ndGgpO2Euc3ViYXJyYXl8fGEuc2xpY2V8fChhPW5ldyBVaW50OEFycmF5KGEpKTt4LnNldChhLGIpO3JldHVybiBifSxVYyxWYz1bXSxZLEE9YT0+e1VjLmRlbGV0ZShZLmdldChhKSk7WS5zZXQoYSxudWxsKTtWYy5wdXNoKGEpfSxBYT0oYSxiKT0+e2lmKCFVYyl7VWM9bmV3IFdlYWtNYXA7dmFyIGM9WS5sZW5ndGg7aWYoVWMpZm9yKHZhciBkPTA7ZDwwK2M7ZCsrKXt2YXIgZT1ZLmdldChkKTtlJiZVYy5zZXQoZSxkKX19aWYoYz1VYy5nZXQoYSl8fDApcmV0dXJuIGM7aWYoVmMubGVuZ3RoKWM9VmMucG9wKCk7ZWxzZXt0cnl7WS5ncm93KDEpfWNhdGNoKHcpe2lmKCEodyBpbnN0YW5jZW9mIFJhbmdlRXJyb3IpKXRocm93IHc7XG50aHJvd1wiVW5hYmxlIHRvIGdyb3cgd2FzbSB0YWJsZS4gU2V0IEFMTE9XX1RBQkxFX0dST1dUSC5cIjt9Yz1ZLmxlbmd0aC0xfXRyeXtZLnNldChjLGEpfWNhdGNoKHcpe2lmKCEodyBpbnN0YW5jZW9mIFR5cGVFcnJvcikpdGhyb3cgdztpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBXZWJBc3NlbWJseS5GdW5jdGlvbil7dmFyIGg9V2ViQXNzZW1ibHkuRnVuY3Rpb247ZD17aTpcImkzMlwiLGo6XCJpNjRcIixmOlwiZjMyXCIsZDpcImY2NFwiLGU6XCJleHRlcm5yZWZcIixwOlwiaTMyXCJ9O2U9e3BhcmFtZXRlcnM6W10scmVzdWx0czpcInZcIj09YlswXT9bXTpbZFtiWzBdXV19O2Zvcih2YXIgaz0xO2s8Yi5sZW5ndGg7KytrKWUucGFyYW1ldGVycy5wdXNoKGRbYltrXV0pO2I9bmV3IGgoZSxhKX1lbHNle2Q9WzFdO2U9Yi5zbGljZSgwLDEpO2I9Yi5zbGljZSgxKTtrPXtpOjEyNyxwOjEyNyxqOjEyNixmOjEyNSxkOjEyNCxlOjExMX07ZC5wdXNoKDk2KTt2YXIgcT1iLmxlbmd0aDsxMjg+cT9kLnB1c2gocSk6ZC5wdXNoKHElXG4xMjh8MTI4LHE+PjcpO2ZvcihoIG9mIGIpZC5wdXNoKGtbaF0pO1widlwiPT1lP2QucHVzaCgwKTpkLnB1c2goMSxrW2VdKTtiPVswLDk3LDExNSwxMDksMSwwLDAsMCwxXTtoPWQubGVuZ3RoOzEyOD5oP2IucHVzaChoKTpiLnB1c2goaCUxMjh8MTI4LGg+PjcpO2IucHVzaCguLi5kKTtiLnB1c2goMiw3LDEsMSwxMDEsMSwxMDIsMCwwLDcsNSwxLDEsMTAyLDAsMCk7Yj1uZXcgV2ViQXNzZW1ibHkuTW9kdWxlKG5ldyBVaW50OEFycmF5KGIpKTtiPShuZXcgV2ViQXNzZW1ibHkuSW5zdGFuY2UoYix7ZTp7ZjphfX0pKS5leHBvcnRzLmZ9WS5zZXQoYyxiKX1VYy5zZXQoYSxjKTtyZXR1cm4gY307Uj1BcnJheSg0MDk2KTtXYihPLFwiL1wiKTtVKFwiL3RtcFwiKTtVKFwiL2hvbWVcIik7VShcIi9ob21lL3dlYl91c2VyXCIpO1xuKGZ1bmN0aW9uKCl7VShcIi9kZXZcIik7d2IoMjU5LHtyZWFkOigpPT4wLHdyaXRlOihkLGUsaCxrKT0+ayxWYTooKT0+MH0pO1liKFwiL2Rldi9udWxsXCIsMjU5KTtuYigxMjgwLHliKTtuYigxNTM2LHpiKTtZYihcIi9kZXYvdHR5XCIsMTI4MCk7WWIoXCIvZGV2L3R0eTFcIiwxNTM2KTt2YXIgYT1uZXcgVWludDhBcnJheSgxMDI0KSxiPTAsYz0oKT0+ezA9PT1iJiYoaWIoYSksYj1hLmJ5dGVMZW5ndGgpO3JldHVybiBhWy0tYl19O1YoXCJyYW5kb21cIixjKTtWKFwidXJhbmRvbVwiLGMpO1UoXCIvZGV2L3NobVwiKTtVKFwiL2Rldi9zaG0vdG1wXCIpfSkoKTtcbihmdW5jdGlvbigpe1UoXCIvcHJvY1wiKTt2YXIgYT1VKFwiL3Byb2Mvc2VsZlwiKTtVKFwiL3Byb2Mvc2VsZi9mZFwiKTtXYih7WGEoKXt2YXIgYj1CYihhLFwiZmRcIiwxNjg5NSw3Myk7Yi5NYT17VmE6Ty5NYS5WYX07Yi5MYT17bG9va3VwKGMsZCl7Yz0rZDt2YXIgZT1UKGMpO2M9e3BhcmVudDpudWxsLFhhOnt6YjpcImZha2VcIn0sTGE6e3JlYWRsaW5rOigpPT5lLnBhdGh9LGlkOmMrMX07cmV0dXJuIGMucGFyZW50PWN9LHJlYWRkaXIoKXtyZXR1cm4gQXJyYXkuZnJvbShHYi5lbnRyaWVzKCkpLmZpbHRlcigoWyxjXSk9PmMpLm1hcCgoW2NdKT0+Yy50b1N0cmluZygpKX19O3JldHVybiBifX0sXCIvcHJvYy9zZWxmL2ZkXCIpfSkoKTtPLnZiPW5ldyBOKDQ0KTtPLnZiLnN0YWNrPVwiPGdlbmVyaWMgZXJyb3IsIG5vIHN0YWNrPlwiO1xudmFyIFhjPXthOihhLGIsYyxkKT0+VGEoYEFzc2VydGlvbiBmYWlsZWQ6ICR7YT9CKHgsYSk6XCJcIn0sIGF0OiBgK1tiP2I/Qih4LGIpOlwiXCI6XCJ1bmtub3duIGZpbGVuYW1lXCIsYyxkP2Q/Qih4LGQpOlwiXCI6XCJ1bmtub3duIGZ1bmN0aW9uXCJdKSxpOmZ1bmN0aW9uKGEsYil7dHJ5e3JldHVybiBhPWE/Qih4LGEpOlwiXCIsbmEoYSxiKSwwfWNhdGNoKGMpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBXfHxcIkVycm5vRXJyb3JcIiE9PWMubmFtZSl0aHJvdyBjO3JldHVybi1jLlBhfX0sTDpmdW5jdGlvbihhLGIsYyl7dHJ5e2I9Yj9CKHgsYik6XCJcIjtiPUdjKGEsYik7aWYoYyYtOClyZXR1cm4tMjg7dmFyIGQ9UyhiLHskYTohMH0pLm5vZGU7aWYoIWQpcmV0dXJuLTQ0O2E9XCJcIjtjJjQmJihhKz1cInJcIik7YyYyJiYoYSs9XCJ3XCIpO2MmMSYmKGErPVwieFwiKTtyZXR1cm4gYSYmT2IoZCxhKT8tMjowfWNhdGNoKGUpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBXfHxcIkVycm5vRXJyb3JcIiE9PWUubmFtZSl0aHJvdyBlO1xucmV0dXJuLWUuUGF9fSxqOmZ1bmN0aW9uKGEsYil7dHJ5e3ZhciBjPVQoYSk7YmMoYyxjLm5vZGUsYiwhMSk7cmV0dXJuIDB9Y2F0Y2goZCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFd8fFwiRXJybm9FcnJvclwiIT09ZC5uYW1lKXRocm93IGQ7cmV0dXJuLWQuUGF9fSxoOmZ1bmN0aW9uKGEpe3RyeXt2YXIgYj1UKGEpO1ZiKGIsYi5ub2RlLHt0aW1lc3RhbXA6RGF0ZS5ub3coKSxGYjohMX0pO3JldHVybiAwfWNhdGNoKGMpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBXfHxcIkVycm5vRXJyb3JcIiE9PWMubmFtZSl0aHJvdyBjO3JldHVybi1jLlBhfX0sYjpmdW5jdGlvbihhLGIsYyl7SWM9Yzt0cnl7dmFyIGQ9VChhKTtzd2l0Y2goYil7Y2FzZSAwOnZhciBlPUpjKCk7aWYoMD5lKWJyZWFrO2Zvcig7R2JbZV07KWUrKztyZXR1cm4gVWIoZCxlKS5mZDtjYXNlIDE6Y2FzZSAyOnJldHVybiAwO2Nhc2UgMzpyZXR1cm4gZC5mbGFncztjYXNlIDQ6cmV0dXJuIGU9SmMoKSxkLmZsYWdzfD1lLDA7XG5jYXNlIDEyOnJldHVybiBlPUpjKCksTmFbZSswPj4xXT0yLDA7Y2FzZSAxMzpjYXNlIDE0OnJldHVybiAwfXJldHVybi0yOH1jYXRjaChoKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgV3x8XCJFcnJub0Vycm9yXCIhPT1oLm5hbWUpdGhyb3cgaDtyZXR1cm4taC5QYX19LGc6ZnVuY3Rpb24oYSxiKXt0cnl7dmFyIGM9VChhKSxkPWMubm9kZSxlPWMuTWEuVGE7YT1lP2M6ZDtlPz89ZC5MYS5UYTtTYihlKTt2YXIgaD1lKGEpO3JldHVybiBIYyhiLGgpfWNhdGNoKGspe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBXfHxcIkVycm5vRXJyb3JcIiE9PWsubmFtZSl0aHJvdyBrO3JldHVybi1rLlBhfX0sSDpmdW5jdGlvbihhLGIpe2I9LTkwMDcxOTkyNTQ3NDA5OTI+Ynx8OTAwNzE5OTI1NDc0MDk5MjxiP05hTjpOdW1iZXIoYik7dHJ5e2lmKGlzTmFOKGIpKXJldHVybiA2MTt2YXIgYz1UKGEpO2lmKDA+Ynx8MD09PShjLmZsYWdzJjIwOTcxNTUpKXRocm93IG5ldyBOKDI4KTtjYyhjLGMubm9kZSxiKTtcbnJldHVybiAwfWNhdGNoKGQpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBXfHxcIkVycm5vRXJyb3JcIiE9PWQubmFtZSl0aHJvdyBkO3JldHVybi1kLlBhfX0sRzpmdW5jdGlvbihhLGIpe3RyeXtpZigwPT09YilyZXR1cm4tMjg7dmFyIGM9aGEoXCIvXCIpKzE7aWYoYjxjKXJldHVybi02ODt1KFwiL1wiLHgsYSxiKTtyZXR1cm4gY31jYXRjaChkKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgV3x8XCJFcnJub0Vycm9yXCIhPT1kLm5hbWUpdGhyb3cgZDtyZXR1cm4tZC5QYX19LEs6ZnVuY3Rpb24oYSxiKXt0cnl7cmV0dXJuIGE9YT9CKHgsYSk6XCJcIixIYyhiLGFjKGEsITApKX1jYXRjaChjKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgV3x8XCJFcnJub0Vycm9yXCIhPT1jLm5hbWUpdGhyb3cgYztyZXR1cm4tYy5QYX19LEM6ZnVuY3Rpb24oYSxiLGMpe3RyeXtyZXR1cm4gYj1iP0IoeCxiKTpcIlwiLGI9R2MoYSxiKSxVKGIsYyksMH1jYXRjaChkKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgV3x8XCJFcnJub0Vycm9yXCIhPT1cbmQubmFtZSl0aHJvdyBkO3JldHVybi1kLlBhfX0sSjpmdW5jdGlvbihhLGIsYyxkKXt0cnl7Yj1iP0IoeCxiKTpcIlwiO3ZhciBlPWQmMjU2O2I9R2MoYSxiLGQmNDA5Nik7cmV0dXJuIEhjKGMsZT9hYyhiLCEwKTphYyhiKSl9Y2F0Y2goaCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFd8fFwiRXJybm9FcnJvclwiIT09aC5uYW1lKXRocm93IGg7cmV0dXJuLWguUGF9fSx4OmZ1bmN0aW9uKGEsYixjLGQpe0ljPWQ7dHJ5e2I9Yj9CKHgsYik6XCJcIjtiPUdjKGEsYik7dmFyIGU9ZD9KYygpOjA7cmV0dXJuIG9hKGIsYyxlKS5mZH1jYXRjaChoKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgV3x8XCJFcnJub0Vycm9yXCIhPT1oLm5hbWUpdGhyb3cgaDtyZXR1cm4taC5QYX19LHY6ZnVuY3Rpb24oYSxiLGMsZCl7dHJ5e2I9Yj9CKHgsYik6XCJcIjtiPUdjKGEsYik7aWYoMD49ZClyZXR1cm4tMjg7dmFyIGU9UyhiKS5ub2RlO2lmKCFlKXRocm93IG5ldyBOKDQ0KTtpZighZS5MYS5yZWFkbGluayl0aHJvdyBuZXcgTigyOCk7XG52YXIgaD1lLkxhLnJlYWRsaW5rKGUpO3ZhciBrPU1hdGgubWluKGQsaGEoaCkpLHE9cFtjK2tdO3UoaCx4LGMsZCsxKTtwW2Mra109cTtyZXR1cm4ga31jYXRjaCh3KXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgV3x8XCJFcnJub0Vycm9yXCIhPT13Lm5hbWUpdGhyb3cgdztyZXR1cm4tdy5QYX19LHU6ZnVuY3Rpb24oYSl7dHJ5e3JldHVybiBhPWE/Qih4LGEpOlwiXCIsJGIoYSksMH1jYXRjaChiKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgV3x8XCJFcnJub0Vycm9yXCIhPT1iLm5hbWUpdGhyb3cgYjtyZXR1cm4tYi5QYX19LGY6ZnVuY3Rpb24oYSxiKXt0cnl7cmV0dXJuIGE9YT9CKHgsYSk6XCJcIixIYyhiLGFjKGEpKX1jYXRjaChjKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgV3x8XCJFcnJub0Vycm9yXCIhPT1jLm5hbWUpdGhyb3cgYztyZXR1cm4tYy5QYX19LHI6ZnVuY3Rpb24oYSxiLGMpe3RyeXtyZXR1cm4gYj1iP0IoeCxiKTpcIlwiLGI9R2MoYSxiKSwwPT09Yz96YShiKTo1MTI9PT1jPyRiKGIpOlxuVGEoXCJJbnZhbGlkIGZsYWdzIHBhc3NlZCB0byB1bmxpbmthdFwiKSwwfWNhdGNoKGQpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBXfHxcIkVycm5vRXJyb3JcIiE9PWQubmFtZSl0aHJvdyBkO3JldHVybi1kLlBhfX0scTpmdW5jdGlvbihhLGIsYyl7dHJ5e2I9Yj9CKHgsYik6XCJcIjtiPUdjKGEsYiwhMCk7dmFyIGQ9RGF0ZS5ub3coKSxlLGg7aWYoYyl7dmFyIGs9RltjPj4yXSs0Mjk0OTY3Mjk2KkVbYys0Pj4yXSxxPUVbYys4Pj4yXTsxMDczNzQxODIzPT1xP2U9ZDoxMDczNzQxODIyPT1xP2U9bnVsbDplPTFFMyprK3EvMUU2O2MrPTE2O2s9RltjPj4yXSs0Mjk0OTY3Mjk2KkVbYys0Pj4yXTtxPUVbYys4Pj4yXTsxMDczNzQxODIzPT1xP2g9ZDoxMDczNzQxODIyPT1xP2g9bnVsbDpoPTFFMyprK3EvMUU2fWVsc2UgaD1lPWQ7aWYobnVsbCE9PShoPz9lKSl7YT1lO3ZhciB3PVMoYix7JGE6ITB9KS5ub2RlO1NiKHcuTGEuVWEpKHcse2F0aW1lOmEsbXRpbWU6aH0pfXJldHVybiAwfWNhdGNoKHYpe2lmKFwidW5kZWZpbmVkXCI9PVxudHlwZW9mIFd8fFwiRXJybm9FcnJvclwiIT09di5uYW1lKXRocm93IHY7cmV0dXJuLXYuUGF9fSxtOigpPT5UYShcIlwiKSxsOigpPT57Y2I9ITE7S2M9MH0sQTpmdW5jdGlvbihhLGIpe2E9LTkwMDcxOTkyNTQ3NDA5OTI+YXx8OTAwNzE5OTI1NDc0MDk5MjxhP05hTjpOdW1iZXIoYSk7YT1uZXcgRGF0ZSgxRTMqYSk7RVtiPj4yXT1hLmdldFNlY29uZHMoKTtFW2IrND4+Ml09YS5nZXRNaW51dGVzKCk7RVtiKzg+PjJdPWEuZ2V0SG91cnMoKTtFW2IrMTI+PjJdPWEuZ2V0RGF0ZSgpO0VbYisxNj4+Ml09YS5nZXRNb250aCgpO0VbYisyMD4+Ml09YS5nZXRGdWxsWWVhcigpLTE5MDA7RVtiKzI0Pj4yXT1hLmdldERheSgpO3ZhciBjPWEuZ2V0RnVsbFllYXIoKTtFW2IrMjg+PjJdPSgwIT09YyU0fHwwPT09YyUxMDAmJjAhPT1jJTQwMD9NYzpMYylbYS5nZXRNb250aCgpXSthLmdldERhdGUoKS0xfDA7RVtiKzM2Pj4yXT0tKDYwKmEuZ2V0VGltZXpvbmVPZmZzZXQoKSk7Yz0obmV3IERhdGUoYS5nZXRGdWxsWWVhcigpLFxuNiwxKSkuZ2V0VGltZXpvbmVPZmZzZXQoKTt2YXIgZD0obmV3IERhdGUoYS5nZXRGdWxsWWVhcigpLDAsMSkpLmdldFRpbWV6b25lT2Zmc2V0KCk7RVtiKzMyPj4yXT0oYyE9ZCYmYS5nZXRUaW1lem9uZU9mZnNldCgpPT1NYXRoLm1pbihkLGMpKXwwfSx5OmZ1bmN0aW9uKGEsYixjLGQsZSxoLGspe2U9LTkwMDcxOTkyNTQ3NDA5OTI+ZXx8OTAwNzE5OTI1NDc0MDk5MjxlP05hTjpOdW1iZXIoZSk7dHJ5e2lmKGlzTmFOKGUpKXJldHVybiA2MTt2YXIgcT1UKGQpO2lmKDAhPT0oYiYyKSYmMD09PShjJjIpJiYyIT09KHEuZmxhZ3MmMjA5NzE1NSkpdGhyb3cgbmV3IE4oMik7aWYoMT09PShxLmZsYWdzJjIwOTcxNTUpKXRocm93IG5ldyBOKDIpO2lmKCFxLk1hLmliKXRocm93IG5ldyBOKDQzKTtpZighYSl0aHJvdyBuZXcgTigyOCk7dmFyIHc9cS5NYS5pYihxLGEsZSxiLGMpO3ZhciB2PXcuS2I7RVtoPj4yXT13LkFiO0Zbaz4+Ml09djtyZXR1cm4gMH1jYXRjaChDKXtpZihcInVuZGVmaW5lZFwiPT1cbnR5cGVvZiBXfHxcIkVycm5vRXJyb3JcIiE9PUMubmFtZSl0aHJvdyBDO3JldHVybi1DLlBhfX0sejpmdW5jdGlvbihhLGIsYyxkLGUsaCl7aD0tOTAwNzE5OTI1NDc0MDk5Mj5ofHw5MDA3MTk5MjU0NzQwOTkyPGg/TmFOOk51bWJlcihoKTt0cnl7dmFyIGs9VChlKTtpZihjJjIpe2M9aDtpZigzMjc2OCE9PShrLm5vZGUubW9kZSY2MTQ0MCkpdGhyb3cgbmV3IE4oNDMpO2lmKCEoZCYyKSl7dmFyIHE9eC5zbGljZShhLGErYik7ay5NYS5qYiYmay5NYS5qYihrLHEsYyxiLGQpfX19Y2F0Y2godyl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFd8fFwiRXJybm9FcnJvclwiIT09dy5uYW1lKXRocm93IHc7cmV0dXJuLXcuUGF9fSxuOihhLGIpPT57TmNbYV0mJihjbGVhclRpbWVvdXQoTmNbYV0uaWQpLGRlbGV0ZSBOY1thXSk7aWYoIWIpcmV0dXJuIDA7dmFyIGM9c2V0VGltZW91dCgoKT0+e2RlbGV0ZSBOY1thXTtQYygoKT0+V2MoYSxwZXJmb3JtYW5jZS5ub3coKSkpfSxiKTtOY1thXT17aWQ6YyxcblhiOmJ9O3JldHVybiAwfSxCOihhLGIsYyxkKT0+e3ZhciBlPShuZXcgRGF0ZSkuZ2V0RnVsbFllYXIoKSxoPShuZXcgRGF0ZShlLDAsMSkpLmdldFRpbWV6b25lT2Zmc2V0KCk7ZT0obmV3IERhdGUoZSw2LDEpKS5nZXRUaW1lem9uZU9mZnNldCgpO0ZbYT4+Ml09NjAqTWF0aC5tYXgoaCxlKTtFW2I+PjJdPU51bWJlcihoIT1lKTtiPWs9Pnt2YXIgcT1NYXRoLmFicyhrKTtyZXR1cm5gVVRDJHswPD1rP1wiLVwiOlwiK1wifSR7U3RyaW5nKE1hdGguZmxvb3IocS82MCkpLnBhZFN0YXJ0KDIsXCIwXCIpfSR7U3RyaW5nKHElNjApLnBhZFN0YXJ0KDIsXCIwXCIpfWB9O2E9YihoKTtiPWIoZSk7ZTxoPyh1KGEseCxjLDE3KSx1KGIseCxkLDE3KSk6KHUoYSx4LGQsMTcpLHUoYix4LGMsMTcpKX0sZDooKT0+RGF0ZS5ub3coKSxzOigpPT4yMTQ3NDgzNjQ4LGM6KCk9PnBlcmZvcm1hbmNlLm5vdygpLG86YT0+e3ZhciBiPXgubGVuZ3RoO2E+Pj49MDtpZigyMTQ3NDgzNjQ4PGEpcmV0dXJuITE7Zm9yKHZhciBjPVxuMTs0Pj1jO2MqPTIpe3ZhciBkPWIqKDErLjIvYyk7ZD1NYXRoLm1pbihkLGErMTAwNjYzMjk2KTthOntkPShNYXRoLm1pbigyMTQ3NDgzNjQ4LDY1NTM2Kk1hdGguY2VpbChNYXRoLm1heChhLGQpLzY1NTM2KSktS2EuYnVmZmVyLmJ5dGVMZW5ndGgrNjU1MzUpLzY1NTM2fDA7dHJ5e0thLmdyb3coZCk7UWEoKTt2YXIgZT0xO2JyZWFrIGF9Y2F0Y2goaCl7fWU9dm9pZCAwfWlmKGUpcmV0dXJuITB9cmV0dXJuITF9LEU6KGEsYik9Pnt2YXIgYz0wO1NjKCkuZm9yRWFjaCgoZCxlKT0+e3ZhciBoPWIrYztlPUZbYSs0KmU+PjJdPWg7Zm9yKGg9MDtoPGQubGVuZ3RoOysraClwW2UrK109ZC5jaGFyQ29kZUF0KGgpO3BbZV09MDtjKz1kLmxlbmd0aCsxfSk7cmV0dXJuIDB9LEY6KGEsYik9Pnt2YXIgYz1TYygpO0ZbYT4+Ml09Yy5sZW5ndGg7dmFyIGQ9MDtjLmZvckVhY2goZT0+ZCs9ZS5sZW5ndGgrMSk7RltiPj4yXT1kO3JldHVybiAwfSxlOmZ1bmN0aW9uKGEpe3RyeXt2YXIgYj1UKGEpO1xucWEoYik7cmV0dXJuIDB9Y2F0Y2goYyl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFd8fFwiRXJybm9FcnJvclwiIT09Yy5uYW1lKXRocm93IGM7cmV0dXJuIGMuUGF9fSxwOmZ1bmN0aW9uKGEsYil7dHJ5e3ZhciBjPVQoYSk7cFtiXT1jLnR0eT8yOlAoYy5tb2RlKT8zOjQwOTYwPT09KGMubW9kZSY2MTQ0MCk/Nzo0O05hW2IrMj4+MV09MDtIW2IrOD4+M109QmlnSW50KDApO0hbYisxNj4+M109QmlnSW50KDApO3JldHVybiAwfWNhdGNoKGQpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBXfHxcIkVycm5vRXJyb3JcIiE9PWQubmFtZSl0aHJvdyBkO3JldHVybiBkLlBhfX0sdzpmdW5jdGlvbihhLGIsYyxkKXt0cnl7YTp7dmFyIGU9VChhKTthPWI7Zm9yKHZhciBoLGs9Yj0wO2s8YztrKyspe3ZhciBxPUZbYT4+Ml0sdz1GW2ErND4+Ml07YSs9ODt2YXIgdj1FYyhlLHAscSx3LGgpO2lmKDA+dil7dmFyIEM9LTE7YnJlYWsgYX1iKz12O2lmKHY8dylicmVhaztcInVuZGVmaW5lZFwiIT10eXBlb2YgaCYmXG4oaCs9dil9Qz1ifUZbZD4+Ml09QztyZXR1cm4gMH1jYXRjaChHKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgV3x8XCJFcnJub0Vycm9yXCIhPT1HLm5hbWUpdGhyb3cgRztyZXR1cm4gRy5QYX19LEQ6ZnVuY3Rpb24oYSxiLGMsZCl7Yj0tOTAwNzE5OTI1NDc0MDk5Mj5ifHw5MDA3MTk5MjU0NzQwOTkyPGI/TmFOOk51bWJlcihiKTt0cnl7aWYoaXNOYU4oYikpcmV0dXJuIDYxO3ZhciBlPVQoYSk7bWMoZSxiLGMpO0hbZD4+M109QmlnSW50KGUucG9zaXRpb24pO2Uub2ImJjA9PT1iJiYwPT09YyYmKGUub2I9bnVsbCk7cmV0dXJuIDB9Y2F0Y2goaCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFd8fFwiRXJybm9FcnJvclwiIT09aC5uYW1lKXRocm93IGg7cmV0dXJuIGguUGF9fSxJOmZ1bmN0aW9uKGEpe3RyeXt2YXIgYj1UKGEpO3JldHVybiBiLk1hPy5mc3luYz9iLk1hLmZzeW5jKGIpOjB9Y2F0Y2goYyl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFd8fFwiRXJybm9FcnJvclwiIT09Yy5uYW1lKXRocm93IGM7XG5yZXR1cm4gYy5QYX19LHQ6ZnVuY3Rpb24oYSxiLGMsZCl7dHJ5e2E6e3ZhciBlPVQoYSk7YT1iO2Zvcih2YXIgaCxrPWI9MDtrPGM7aysrKXt2YXIgcT1GW2E+PjJdLHc9RlthKzQ+PjJdO2ErPTg7dmFyIHY9cGEoZSxwLHEsdyxoKTtpZigwPnYpe3ZhciBDPS0xO2JyZWFrIGF9Yis9djtpZih2PHcpYnJlYWs7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGgmJihoKz12KX1DPWJ9RltkPj4yXT1DO3JldHVybiAwfWNhdGNoKEcpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBXfHxcIkVycm5vRXJyb3JcIiE9PUcubmFtZSl0aHJvdyBHO3JldHVybiBHLlBhfX0sazpPY30sWjtcbihhc3luYyBmdW5jdGlvbigpe2Z1bmN0aW9uIGEoYyl7Wj1jLmV4cG9ydHM7S2E9Wi5NO1FhKCk7WT1aLk87Sy0tO2YubW9uaXRvclJ1bkRlcGVuZGVuY2llcz8uKEspOzA9PUsmJlNhJiYoYz1TYSxTYT1udWxsLGMoKSk7cmV0dXJuIFp9SysrO2YubW9uaXRvclJ1bkRlcGVuZGVuY2llcz8uKEspO3ZhciBiPXthOlhjfTtpZihmLmluc3RhbnRpYXRlV2FzbSlyZXR1cm4gbmV3IFByb21pc2UoYz0+e2YuaW5zdGFudGlhdGVXYXNtKGIsKGQsZSk9PnthKGQsZSk7YyhkLmV4cG9ydHMpfSl9KTtVYT8/PWYubG9jYXRlRmlsZT9mLmxvY2F0ZUZpbGUoXCJzcWwtd2FzbS53YXNtXCIsRCk6RCtcInNxbC13YXNtLndhc21cIjtyZXR1cm4gYSgoYXdhaXQgWGEoYikpLmluc3RhbmNlKX0pKCk7Zi5fc3FsaXRlM19mcmVlPWE9PihmLl9zcWxpdGUzX2ZyZWU9Wi5QKShhKTtmLl9zcWxpdGUzX3ZhbHVlX3RleHQ9YT0+KGYuX3NxbGl0ZTNfdmFsdWVfdGV4dD1aLlEpKGEpO1xuZi5fc3FsaXRlM19wcmVwYXJlX3YyPShhLGIsYyxkLGUpPT4oZi5fc3FsaXRlM19wcmVwYXJlX3YyPVouUikoYSxiLGMsZCxlKTtmLl9zcWxpdGUzX3N0ZXA9YT0+KGYuX3NxbGl0ZTNfc3RlcD1aLlMpKGEpO2YuX3NxbGl0ZTNfcmVzZXQ9YT0+KGYuX3NxbGl0ZTNfcmVzZXQ9Wi5UKShhKTtmLl9zcWxpdGUzX2V4ZWM9KGEsYixjLGQsZSk9PihmLl9zcWxpdGUzX2V4ZWM9Wi5VKShhLGIsYyxkLGUpO2YuX3NxbGl0ZTNfZmluYWxpemU9YT0+KGYuX3NxbGl0ZTNfZmluYWxpemU9Wi5WKShhKTtmLl9zcWxpdGUzX2NvbHVtbl9uYW1lPShhLGIpPT4oZi5fc3FsaXRlM19jb2x1bW5fbmFtZT1aLlcpKGEsYik7Zi5fc3FsaXRlM19jb2x1bW5fdGV4dD0oYSxiKT0+KGYuX3NxbGl0ZTNfY29sdW1uX3RleHQ9Wi5YKShhLGIpO2YuX3NxbGl0ZTNfY29sdW1uX3R5cGU9KGEsYik9PihmLl9zcWxpdGUzX2NvbHVtbl90eXBlPVouWSkoYSxiKTtcbmYuX3NxbGl0ZTNfZXJybXNnPWE9PihmLl9zcWxpdGUzX2Vycm1zZz1aLlopKGEpO2YuX3NxbGl0ZTNfY2xlYXJfYmluZGluZ3M9YT0+KGYuX3NxbGl0ZTNfY2xlYXJfYmluZGluZ3M9Wi5fKShhKTtmLl9zcWxpdGUzX3ZhbHVlX2Jsb2I9YT0+KGYuX3NxbGl0ZTNfdmFsdWVfYmxvYj1aLiQpKGEpO2YuX3NxbGl0ZTNfdmFsdWVfYnl0ZXM9YT0+KGYuX3NxbGl0ZTNfdmFsdWVfYnl0ZXM9Wi5hYSkoYSk7Zi5fc3FsaXRlM192YWx1ZV9kb3VibGU9YT0+KGYuX3NxbGl0ZTNfdmFsdWVfZG91YmxlPVouYmEpKGEpO2YuX3NxbGl0ZTNfdmFsdWVfaW50PWE9PihmLl9zcWxpdGUzX3ZhbHVlX2ludD1aLmNhKShhKTtmLl9zcWxpdGUzX3ZhbHVlX3R5cGU9YT0+KGYuX3NxbGl0ZTNfdmFsdWVfdHlwZT1aLmRhKShhKTtmLl9zcWxpdGUzX3Jlc3VsdF9ibG9iPShhLGIsYyxkKT0+KGYuX3NxbGl0ZTNfcmVzdWx0X2Jsb2I9Wi5lYSkoYSxiLGMsZCk7XG5mLl9zcWxpdGUzX3Jlc3VsdF9kb3VibGU9KGEsYik9PihmLl9zcWxpdGUzX3Jlc3VsdF9kb3VibGU9Wi5mYSkoYSxiKTtmLl9zcWxpdGUzX3Jlc3VsdF9lcnJvcj0oYSxiLGMpPT4oZi5fc3FsaXRlM19yZXN1bHRfZXJyb3I9Wi5nYSkoYSxiLGMpO2YuX3NxbGl0ZTNfcmVzdWx0X2ludD0oYSxiKT0+KGYuX3NxbGl0ZTNfcmVzdWx0X2ludD1aLmhhKShhLGIpO2YuX3NxbGl0ZTNfcmVzdWx0X2ludDY0PShhLGIpPT4oZi5fc3FsaXRlM19yZXN1bHRfaW50NjQ9Wi5pYSkoYSxiKTtmLl9zcWxpdGUzX3Jlc3VsdF9udWxsPWE9PihmLl9zcWxpdGUzX3Jlc3VsdF9udWxsPVouamEpKGEpO2YuX3NxbGl0ZTNfcmVzdWx0X3RleHQ9KGEsYixjLGQpPT4oZi5fc3FsaXRlM19yZXN1bHRfdGV4dD1aLmthKShhLGIsYyxkKTtmLl9zcWxpdGUzX2FnZ3JlZ2F0ZV9jb250ZXh0PShhLGIpPT4oZi5fc3FsaXRlM19hZ2dyZWdhdGVfY29udGV4dD1aLmxhKShhLGIpO1xuZi5fc3FsaXRlM19jb2x1bW5fY291bnQ9YT0+KGYuX3NxbGl0ZTNfY29sdW1uX2NvdW50PVoubWEpKGEpO2YuX3NxbGl0ZTNfZGF0YV9jb3VudD1hPT4oZi5fc3FsaXRlM19kYXRhX2NvdW50PVoubmEpKGEpO2YuX3NxbGl0ZTNfY29sdW1uX2Jsb2I9KGEsYik9PihmLl9zcWxpdGUzX2NvbHVtbl9ibG9iPVoub2EpKGEsYik7Zi5fc3FsaXRlM19jb2x1bW5fYnl0ZXM9KGEsYik9PihmLl9zcWxpdGUzX2NvbHVtbl9ieXRlcz1aLnBhKShhLGIpO2YuX3NxbGl0ZTNfY29sdW1uX2RvdWJsZT0oYSxiKT0+KGYuX3NxbGl0ZTNfY29sdW1uX2RvdWJsZT1aLnFhKShhLGIpO2YuX3NxbGl0ZTNfYmluZF9ibG9iPShhLGIsYyxkLGUpPT4oZi5fc3FsaXRlM19iaW5kX2Jsb2I9Wi5yYSkoYSxiLGMsZCxlKTtmLl9zcWxpdGUzX2JpbmRfZG91YmxlPShhLGIsYyk9PihmLl9zcWxpdGUzX2JpbmRfZG91YmxlPVouc2EpKGEsYixjKTtcbmYuX3NxbGl0ZTNfYmluZF9pbnQ9KGEsYixjKT0+KGYuX3NxbGl0ZTNfYmluZF9pbnQ9Wi50YSkoYSxiLGMpO2YuX3NxbGl0ZTNfYmluZF90ZXh0PShhLGIsYyxkLGUpPT4oZi5fc3FsaXRlM19iaW5kX3RleHQ9Wi51YSkoYSxiLGMsZCxlKTtmLl9zcWxpdGUzX2JpbmRfcGFyYW1ldGVyX2luZGV4PShhLGIpPT4oZi5fc3FsaXRlM19iaW5kX3BhcmFtZXRlcl9pbmRleD1aLnZhKShhLGIpO2YuX3NxbGl0ZTNfc3FsPWE9PihmLl9zcWxpdGUzX3NxbD1aLndhKShhKTtmLl9zcWxpdGUzX25vcm1hbGl6ZWRfc3FsPWE9PihmLl9zcWxpdGUzX25vcm1hbGl6ZWRfc3FsPVoueGEpKGEpO2YuX3NxbGl0ZTNfY2hhbmdlcz1hPT4oZi5fc3FsaXRlM19jaGFuZ2VzPVoueWEpKGEpO2YuX3NxbGl0ZTNfY2xvc2VfdjI9YT0+KGYuX3NxbGl0ZTNfY2xvc2VfdjI9Wi56YSkoYSk7XG5mLl9zcWxpdGUzX2NyZWF0ZV9mdW5jdGlvbl92Mj0oYSxiLGMsZCxlLGgsayxxLHcpPT4oZi5fc3FsaXRlM19jcmVhdGVfZnVuY3Rpb25fdjI9Wi5BYSkoYSxiLGMsZCxlLGgsayxxLHcpO2YuX3NxbGl0ZTNfdXBkYXRlX2hvb2s9KGEsYixjKT0+KGYuX3NxbGl0ZTNfdXBkYXRlX2hvb2s9Wi5CYSkoYSxiLGMpO2YuX3NxbGl0ZTNfb3Blbj0oYSxiKT0+KGYuX3NxbGl0ZTNfb3Blbj1aLkNhKShhLGIpO3ZhciBpYT1mLl9tYWxsb2M9YT0+KGlhPWYuX21hbGxvYz1aLkRhKShhKSxmYT1mLl9mcmVlPWE9PihmYT1mLl9mcmVlPVouRWEpKGEpO2YuX1JlZ2lzdGVyRXh0ZW5zaW9uRnVuY3Rpb25zPWE9PihmLl9SZWdpc3RlckV4dGVuc2lvbkZ1bmN0aW9ucz1aLkZhKShhKTt2YXIgRGI9KGEsYik9PihEYj1aLkdhKShhLGIpLFdjPShhLGIpPT4oV2M9Wi5IYSkoYSxiKSx3YT1hPT4od2E9Wi5JYSkoYSksej1hPT4oej1aLkphKShhKSxzYT0oKT0+KHNhPVouS2EpKCk7XG5mLnN0YWNrU2F2ZT0oKT0+c2EoKTtmLnN0YWNrUmVzdG9yZT1hPT53YShhKTtmLnN0YWNrQWxsb2M9YT0+eihhKTtmLmN3cmFwPShhLGIsYyxkKT0+e3ZhciBlPSFjfHxjLmV2ZXJ5KGg9PlwibnVtYmVyXCI9PT1ofHxcImJvb2xlYW5cIj09PWgpO3JldHVyblwic3RyaW5nXCIhPT1iJiZlJiYhZD9mW1wiX1wiK2FdOiguLi5oKT0+VGMoYSxiLGMsaCl9O2YuYWRkRnVuY3Rpb249QWE7Zi5yZW1vdmVGdW5jdGlvbj1BO2YuVVRGOFRvU3RyaW5nPXVhO2YuQUxMT0NfTk9STUFMPWVhO2YuYWxsb2NhdGU9ZGE7Zi5hbGxvY2F0ZVVURjhPblN0YWNrPXhhO1xuZnVuY3Rpb24gWWMoKXtmdW5jdGlvbiBhKCl7Zi5jYWxsZWRSdW49ITA7aWYoIUxhKXtpZighZi5ub0ZTSW5pdCYmIUliKXt2YXIgYixjO0liPSEwO2Q/Pz1mLnN0ZGluO2I/Pz1mLnN0ZG91dDtjPz89Zi5zdGRlcnI7ZD9WKFwic3RkaW5cIixkKTpaYihcIi9kZXYvdHR5XCIsXCIvZGV2L3N0ZGluXCIpO2I/VihcInN0ZG91dFwiLG51bGwsYik6WmIoXCIvZGV2L3R0eVwiLFwiL2Rldi9zdGRvdXRcIik7Yz9WKFwic3RkZXJyXCIsbnVsbCxjKTpaYihcIi9kZXYvdHR5MVwiLFwiL2Rldi9zdGRlcnJcIik7b2EoXCIvZGV2L3N0ZGluXCIsMCk7b2EoXCIvZGV2L3N0ZG91dFwiLDEpO29hKFwiL2Rldi9zdGRlcnJcIiwxKX1aLk4oKTtKYj0hMTtmLm9uUnVudGltZUluaXRpYWxpemVkPy4oKTtpZihmLnBvc3RSdW4pZm9yKFwiZnVuY3Rpb25cIj09dHlwZW9mIGYucG9zdFJ1biYmKGYucG9zdFJ1bj1bZi5wb3N0UnVuXSk7Zi5wb3N0UnVuLmxlbmd0aDspe3ZhciBkPWYucG9zdFJ1bi5zaGlmdCgpOyRhLnVuc2hpZnQoZCl9WmEoJGEpfX1cbmlmKDA8SylTYT1ZYztlbHNle2lmKGYucHJlUnVuKWZvcihcImZ1bmN0aW9uXCI9PXR5cGVvZiBmLnByZVJ1biYmKGYucHJlUnVuPVtmLnByZVJ1bl0pO2YucHJlUnVuLmxlbmd0aDspYmIoKTtaYShhYik7MDxLP1NhPVljOmYuc2V0U3RhdHVzPyhmLnNldFN0YXR1cyhcIlJ1bm5pbmcuLi5cIiksc2V0VGltZW91dCgoKT0+e3NldFRpbWVvdXQoKCk9PmYuc2V0U3RhdHVzKFwiXCIpLDEpO2EoKX0sMSkpOmEoKX19aWYoZi5wcmVJbml0KWZvcihcImZ1bmN0aW9uXCI9PXR5cGVvZiBmLnByZUluaXQmJihmLnByZUluaXQ9W2YucHJlSW5pdF0pOzA8Zi5wcmVJbml0Lmxlbmd0aDspZi5wcmVJbml0LnBvcCgpKCk7WWMoKTtcblxuXG4gICAgICAgIC8vIFRoZSBzaGVsbC1wcmUuanMgYW5kIGVtY2MtZ2VuZXJhdGVkIGNvZGUgZ29lcyBhYm92ZVxuICAgICAgICByZXR1cm4gTW9kdWxlO1xuICAgIH0pOyAvLyBUaGUgZW5kIG9mIHRoZSBwcm9taXNlIGJlaW5nIHJldHVybmVkXG5cbiAgcmV0dXJuIGluaXRTcWxKc1Byb21pc2U7XG59IC8vIFRoZSBlbmQgb2Ygb3VyIGluaXRTcWxKcyBmdW5jdGlvblxuXG4vLyBUaGlzIGJpdCBiZWxvdyBpcyBjb3BpZWQgYWxtb3N0IGV4YWN0bHkgZnJvbSB3aGF0IHlvdSBnZXQgd2hlbiB5b3UgdXNlIHRoZSBNT0RVTEFSSVpFPTEgZmxhZyB3aXRoIGVtY2Ncbi8vIEhvd2V2ZXIsIHdlIGRvbid0IHdhbnQgdG8gdXNlIHRoZSBlbWNjIG1vZHVsYXJpemF0aW9uLiBTZWUgc2hlbGwtcHJlLmpzXG5pZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKXtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGluaXRTcWxKcztcbiAgICAvLyBUaGlzIHdpbGwgYWxsb3cgdGhlIG1vZHVsZSB0byBiZSB1c2VkIGluIEVTNiBvciBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBpbml0U3FsSnM7XG59XG5lbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZVsnYW1kJ10pIHtcbiAgICBkZWZpbmUoW10sIGZ1bmN0aW9uKCkgeyByZXR1cm4gaW5pdFNxbEpzOyB9KTtcbn1cbmVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jyl7XG4gICAgZXhwb3J0c1tcIk1vZHVsZVwiXSA9IGluaXRTcWxKcztcbn1cbiIsICIvKipcbiAqIFJldHVybnMgZGV0YWlsZWQgdHlwZSBhcyBzdHJpbmcgKGluc3RlYWQgb2YganVzdCAnb2JqZWN0JyBmb3IgYXJyYXlzIGV0YylcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge2FueX0gdmFsdWUganMgdmFsdWVcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHR5cGUgb2YgdmFsdWVcbiAqIEBleGFtcGxlXG4gKiB0eXBlT2Yoe30pOyAvLyAnb2JqZWN0J1xuICogdHlwZU9mKFtdKTsgLy8gJ2FycmF5J1xuICogdHlwZU9mKGZ1bmN0aW9uKCkge30pOyAvLyAnZnVuY3Rpb24nXG4gKiB0eXBlT2YoL2EvKTsgLy8gJ3JlZ2V4cCdcbiAqIHR5cGVPZihuZXcgRGF0ZSgpKTsgLy8gJ2RhdGUnXG4gKiB0eXBlT2YobnVsbCk7IC8vICdudWxsJ1xuICogdHlwZU9mKHVuZGVmaW5lZCk7IC8vICd1bmRlZmluZWQnXG4gKiB0eXBlT2YoJ2EnKTsgLy8gJ3N0cmluZydcbiAqIHR5cGVPZigxKTsgLy8gJ251bWJlcidcbiAqIHR5cGVPZih0cnVlKTsgLy8gJ2Jvb2xlYW4nXG4gKiB0eXBlT2YobmV3IE1hcCgpKTsgLy8gJ21hcCdcbiAqIHR5cGVPZihuZXcgU2V0KCkpOyAvLyAnbWFwJ1xuICovXG5mdW5jdGlvbiB0eXBlT2YodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgcmV0dXJuICdudWxsJztcbiAgfVxuICBpZiAodmFsdWUgIT09IE9iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlO1xuICB9XG4gIHJldHVybiB7fS50b1N0cmluZ1xuICAgIC5jYWxsKHZhbHVlKVxuICAgIC5zbGljZSg4LCAtMSlcbiAgICAudG9Mb3dlckNhc2UoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdHlwZU9mO1xuIiwgImltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuLyoqXG4gKiBDaGVja3MgaWYgaW5wdXQgc3RyaW5nIGlzIGVtcHR5XG4gKiBAcGFyYW0gIHtTdHJpbmd9IGlucHV0IHRleHQgaW5wdXRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgbm8gaW5wdXRcbiAqL1xuZnVuY3Rpb24gaXNFbXB0eShpbnB1dCkge1xuICBpZiAodHlwZU9mKGlucHV0KSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gIWlucHV0Lmxlbmd0aDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNFbXB0eTtcbiIsICJpbXBvcnQgaXNFbXB0eSBmcm9tICcuL2lzRW1wdHknO1xuXG4vKipcbiAqIFRha2VzIGEgY2hhcmFjdGVyIGFuZCBhIHVuaWNvZGUgcmFuZ2UuIFJldHVybnMgdHJ1ZSBpZiB0aGUgY2hhciBpcyBpbiB0aGUgcmFuZ2UuXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICBjaGFyICB1bmljb2RlIGNoYXJhY3RlclxuICogQHBhcmFtICB7TnVtYmVyfSAgc3RhcnQgdW5pY29kZSBzdGFydCByYW5nZVxuICogQHBhcmFtICB7TnVtYmVyfSAgZW5kICAgdW5pY29kZSBlbmQgcmFuZ2VcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzQ2hhckluUmFuZ2UoY2hhciA9ICcnLCBzdGFydCwgZW5kKSB7XG4gIGlmIChpc0VtcHR5KGNoYXIpKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IGNvZGUgPSBjaGFyLmNoYXJDb2RlQXQoMCk7XG4gIHJldHVybiBzdGFydCA8PSBjb2RlICYmIGNvZGUgPD0gZW5kO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc0NoYXJJblJhbmdlO1xuIiwgImV4cG9ydCBjb25zdCBWRVJTSU9OID0gJzUuMy4xJztcblxuZXhwb3J0IGNvbnN0IFRPX0tBTkFfTUVUSE9EUzoge1xuICBISVJBR0FOQTogJ3RvSGlyYWdhbmEnLFxuICBLQVRBS0FOQTogJ3RvS2F0YWthbmEnLFxufSA9IHtcbiAgSElSQUdBTkE6ICd0b0hpcmFnYW5hJyxcbiAgS0FUQUtBTkE6ICd0b0thdGFrYW5hJyxcbn07XG5cbmV4cG9ydCBjb25zdCBST01BTklaQVRJT05TOiB7IEhFUEJVUk46ICdoZXBidXJuJyB9ID0ge1xuICBIRVBCVVJOOiAnaGVwYnVybicsXG59O1xuXG5leHBvcnQgdHlwZSBEZWZhdWx0T3B0aW9ucyA9IHtcbiAgdXNlT2Jzb2xldGVLYW5hPzogYm9vbGVhbixcbiAgcGFzc1JvbWFqaT86IGJvb2xlYW4sXG4gIGNvbnZlcnRMb25nVm93ZWxNYXJrPzogYm9vbGVhbixcbiAgdXBjYXNlS2F0YWthbmE/OiBib29sZWFuLFxuICBJTUVNb2RlPzogYm9vbGVhbiB8ICd0b0hpcmFnYW5hJyB8ICd0b0thdGFrYW5hJyxcbiAgcm9tYW5pemF0aW9uPzogJ2hlcGJ1cm4nLFxuICBjdXN0b21LYW5hTWFwcGluZz86IHsgW2luZGV4OiBzdHJpbmddOiBzdHJpbmcgfVxuICBjdXN0b21Sb21hamlNYXBwaW5nPzogeyBbaW5kZXg6IHN0cmluZ106IHN0cmluZyB9XG59O1xuXG4vKipcbiAqIERlZmF1bHQgY29uZmlnIGZvciBXYW5hS2FuYSwgdXNlciBwYXNzZWQgb3B0aW9ucyB3aWxsIGJlIG1lcmdlZCB3aXRoIHRoZXNlXG4gKiBAdHlwZSB7RGVmYXVsdE9wdGlvbnN9XG4gKiBAbmFtZSBEZWZhdWx0T3B0aW9uc1xuICogQHByb3BlcnR5IHtCb29sZWFufSBbdXNlT2Jzb2xldGVLYW5hPWZhbHNlXSAtIFNldCB0byB0cnVlIHRvIHVzZSBvYnNvbGV0ZSBjaGFyYWN0ZXJzLCBzdWNoIGFzIOOCkCBhbmQg44KRLlxuICogQGV4YW1wbGVcbiAqIHRvSGlyYWdhbmEoJ3dlJywgeyB1c2VPYnNvbGV0ZUthbmE6IHRydWUgfSlcbiAqIC8vID0+ICfjgpEnXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IFtwYXNzUm9tYWppPWZhbHNlXSAtIFNldCB0byB0cnVlIHRvIHBhc3Mgcm9tYWppIHdoZW4gdXNpbmcgbWl4ZWQgc3lsbGFiYXJpZXMgd2l0aCB0b0thdGFrYW5hKCkgb3IgdG9IaXJhZ2FuYSgpXG4gKiBAZXhhbXBsZVxuICogdG9IaXJhZ2FuYSgnb25seSBjb252ZXJ0IHRoZSBrYXRha2FuYTog44OS44Op44Ks44OKJywgeyBwYXNzUm9tYWppOiB0cnVlIH0pXG4gKiAvLyA9PiBcIm9ubHkgY29udmVydCB0aGUga2F0YWthbmE6IOOBsuOCieOBjOOBqlwiXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IFtjb252ZXJ0TG9uZ1Zvd2VsTWFyaz10cnVlXSAtIFNldCB0byBmYWxzZSB0byBwcmV2ZW50IGNvbnZlcnNpb25zIG9mICfjg7wnIHRvIGV4dGVuZGVkIHZvd2VscyB3aXRoIHRvSGlyYWdhbmEoKVxuICogQGV4YW1wbGVcbiAqIHRvSGlyYWdhbmEoJ+ODqeODvOODoeODsycsIHsgY29udmVydExvbmdWb3dlbE1hcms6IGZhbHNlIH0pO1xuICogLy8gPT4gJ+OCieODvOOCgeOCk1xuICogQHByb3BlcnR5IHtCb29sZWFufSBbdXBjYXNlS2F0YWthbmE9ZmFsc2VdIC0gU2V0IHRvIHRydWUgdG8gY29udmVydCBrYXRha2FuYSB0byB1cHBlcmNhc2UgdXNpbmcgdG9Sb21hamkoKVxuICogQGV4YW1wbGVcbiAqIHRvUm9tYWppKCfjgbLjgonjgYzjgaog44Kr44K/44Kr44OKJywgeyB1cGNhc2VLYXRha2FuYTogdHJ1ZSB9KVxuICogLy8gPT4gXCJoaXJhZ2FuYSBLQVRBS0FOQVwiXG4gKiBAcHJvcGVydHkge0Jvb2xlYW4gfCAndG9IaXJhZ2FuYScgfCAndG9LYXRha2FuYSd9IFtJTUVNb2RlPWZhbHNlXSAtIFNldCB0byB0cnVlLCAndG9IaXJhZ2FuYScsIG9yICd0b0thdGFrYW5hJyB0byBoYW5kbGUgY29udmVyc2lvbiB3aGlsZSBpdCBpcyBiZWluZyB0eXBlZC5cbiAqIEBwcm9wZXJ0eSB7J2hlcGJ1cm4nfSBbcm9tYW5pemF0aW9uPSdoZXBidXJuJ10gLSBjaG9vc2UgdG9Sb21hamkoKSByb21hbml6YXRpb24gbWFwIChjdXJyZW50bHkgb25seSAnaGVwYnVybicpXG4gKiBAcHJvcGVydHkge09iamVjdC48U3RyaW5nLCBTdHJpbmc+fSBbY3VzdG9tS2FuYU1hcHBpbmddIC0gY3VzdG9tIG1hcCB3aWxsIGJlIG1lcmdlZCB3aXRoIGRlZmF1bHQgY29udmVyc2lvblxuICogQGV4YW1wbGVcbiAqIHRvS2FuYSgnd2FuYWthbmEnLCB7IGN1c3RvbUthbmFNYXBwaW5nOiB7IG5hOiAn44GrJywga2E6ICdCYW5hJyB9KSB9O1xuICogLy8gPT4gJ+OCj+OBq0JhbmHjgasnXG4gKiBAcHJvcGVydHkge09iamVjdC48U3RyaW5nLCBTdHJpbmc+fSBbY3VzdG9tUm9tYWppTWFwcGluZ10gLSBjdXN0b20gbWFwIHdpbGwgYmUgbWVyZ2VkIHdpdGggZGVmYXVsdCBjb252ZXJzaW9uXG4gKiBAZXhhbXBsZVxuICogdG9Sb21hamkoJ+OBpOOBmOOBjuOCiicsIHsgY3VzdG9tUm9tYWppTWFwcGluZzogeyDjgZg6ICd6aScsIOOBpDogJ3R1Jywg44KKOiAnbGknIH0pIH07XG4gKiAvLyA9PiAndHV6aWdpbGknXG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX09QVElPTlM6IERlZmF1bHRPcHRpb25zID0ge1xuICB1c2VPYnNvbGV0ZUthbmE6IGZhbHNlLFxuICBwYXNzUm9tYWppOiBmYWxzZSxcbiAgY29udmVydExvbmdWb3dlbE1hcms6IHRydWUsXG4gIHVwY2FzZUthdGFrYW5hOiBmYWxzZSxcbiAgSU1FTW9kZTogZmFsc2UsXG4gIHJvbWFuaXphdGlvbjogUk9NQU5JWkFUSU9OUy5IRVBCVVJOLFxufTtcblxuLy8gQ2hhckNvZGUgUmVmZXJlbmNlc1xuLy8gaHR0cDovL3d3dy5yaWthaS5jb20vbGlicmFyeS9rYW5qaXRhYmxlcy9rYW5qaV9jb2Rlcy51bmljb2RlLnNodG1sXG4vLyBodHRwOi8vdW5pY29kZS10YWJsZS5jb21cblxuZXhwb3J0IGNvbnN0IExBVElOX0xPV0VSQ0FTRV9TVEFSVCA9IDB4NjE7XG5leHBvcnQgY29uc3QgTEFUSU5fTE9XRVJDQVNFX0VORCA9IDB4N2E7XG5leHBvcnQgY29uc3QgTEFUSU5fVVBQRVJDQVNFX1NUQVJUID0gMHg0MTtcbmV4cG9ydCBjb25zdCBMQVRJTl9VUFBFUkNBU0VfRU5EID0gMHg1YTtcbmV4cG9ydCBjb25zdCBMT1dFUkNBU0VfWkVOS0FLVV9TVEFSVCA9IDB4ZmY0MTtcbmV4cG9ydCBjb25zdCBMT1dFUkNBU0VfWkVOS0FLVV9FTkQgPSAweGZmNWE7XG5leHBvcnQgY29uc3QgVVBQRVJDQVNFX1pFTktBS1VfU1RBUlQgPSAweGZmMjE7XG5leHBvcnQgY29uc3QgVVBQRVJDQVNFX1pFTktBS1VfRU5EID0gMHhmZjNhO1xuZXhwb3J0IGNvbnN0IEhJUkFHQU5BX1NUQVJUID0gMHgzMDQxO1xuZXhwb3J0IGNvbnN0IEhJUkFHQU5BX0VORCA9IDB4MzA5NjtcbmV4cG9ydCBjb25zdCBLQVRBS0FOQV9TVEFSVCA9IDB4MzBhMTtcbmV4cG9ydCBjb25zdCBLQVRBS0FOQV9FTkQgPSAweDMwZmM7XG5leHBvcnQgY29uc3QgS0FOSklfU1RBUlQgPSAweDRlMDA7XG5leHBvcnQgY29uc3QgS0FOSklfRU5EID0gMHg5ZmFmO1xuXG5leHBvcnQgY29uc3QgS0FOSklfSVRFUkFUSU9OX01BUksgPSAweDMwMDU7IC8vIOOAhVxuZXhwb3J0IGNvbnN0IFBST0xPTkdFRF9TT1VORF9NQVJLID0gMHgzMGZjOyAvLyDjg7xcbmV4cG9ydCBjb25zdCBLQU5BX1NMQVNIX0RPVCA9IDB4MzBmYjsgLy8g44O7XG5cbmNvbnN0IFpFTktBS1VfTlVNQkVSUyA9IFsweGZmMTAsIDB4ZmYxOV07XG5jb25zdCBaRU5LQUtVX1VQUEVSQ0FTRSA9IFtVUFBFUkNBU0VfWkVOS0FLVV9TVEFSVCwgVVBQRVJDQVNFX1pFTktBS1VfRU5EXTtcbmNvbnN0IFpFTktBS1VfTE9XRVJDQVNFID0gW0xPV0VSQ0FTRV9aRU5LQUtVX1NUQVJULCBMT1dFUkNBU0VfWkVOS0FLVV9FTkRdO1xuY29uc3QgWkVOS0FLVV9QVU5DVFVBVElPTl8xID0gWzB4ZmYwMSwgMHhmZjBmXTtcbmNvbnN0IFpFTktBS1VfUFVOQ1RVQVRJT05fMiA9IFsweGZmMWEsIDB4ZmYxZl07XG5jb25zdCBaRU5LQUtVX1BVTkNUVUFUSU9OXzMgPSBbMHhmZjNiLCAweGZmM2ZdO1xuY29uc3QgWkVOS0FLVV9QVU5DVFVBVElPTl80ID0gWzB4ZmY1YiwgMHhmZjYwXTtcbmNvbnN0IFpFTktBS1VfU1lNQk9MU19DVVJSRU5DWSA9IFsweGZmZTAsIDB4ZmZlZV07XG5cbmNvbnN0IEhJUkFHQU5BX0NIQVJTID0gWzB4MzA0MCwgMHgzMDlmXTtcbmNvbnN0IEtBVEFLQU5BX0NIQVJTID0gWzB4MzBhMCwgMHgzMGZmXTtcbmNvbnN0IEhBTktBS1VfS0FUQUtBTkEgPSBbMHhmZjY2LCAweGZmOWZdO1xuY29uc3QgS0FUQUtBTkFfUFVOQ1RVQVRJT04gPSBbMHgzMGZiLCAweDMwZmNdO1xuY29uc3QgS0FOQV9QVU5DVFVBVElPTiA9IFsweGZmNjEsIDB4ZmY2NV07XG5jb25zdCBDSktfU1lNQk9MU19QVU5DVFVBVElPTiA9IFsweDMwMDAsIDB4MzAzZl07XG5jb25zdCBDT01NT05fQ0pLID0gWzB4NGUwMCwgMHg5ZmZmXTtcbmNvbnN0IFJBUkVfQ0pLID0gWzB4MzQwMCwgMHg0ZGJmXTtcblxuZXhwb3J0IGNvbnN0IEtBTkFfUkFOR0VTID0gW1xuICBISVJBR0FOQV9DSEFSUyxcbiAgS0FUQUtBTkFfQ0hBUlMsXG4gIEtBTkFfUFVOQ1RVQVRJT04sXG4gIEhBTktBS1VfS0FUQUtBTkEsXG5dO1xuXG5leHBvcnQgY29uc3QgSkFfUFVOQ1RVQVRJT05fUkFOR0VTID0gW1xuICBDSktfU1lNQk9MU19QVU5DVFVBVElPTixcbiAgS0FOQV9QVU5DVFVBVElPTixcbiAgS0FUQUtBTkFfUFVOQ1RVQVRJT04sXG4gIFpFTktBS1VfUFVOQ1RVQVRJT05fMSxcbiAgWkVOS0FLVV9QVU5DVFVBVElPTl8yLFxuICBaRU5LQUtVX1BVTkNUVUFUSU9OXzMsXG4gIFpFTktBS1VfUFVOQ1RVQVRJT05fNCxcbiAgWkVOS0FLVV9TWU1CT0xTX0NVUlJFTkNZLFxuXTtcblxuLy8gQWxsIEphcGFuZXNlIHVuaWNvZGUgc3RhcnQgYW5kIGVuZCByYW5nZXNcbi8vIEluY2x1ZGVzIGthbmppLCBrYW5hLCB6ZW5rYWt1IGxhdGluIGNoYXJzLCBwdW5jdHVhdGlvbiwgYW5kIG51bWJlciByYW5nZXMuXG5leHBvcnQgY29uc3QgSkFQQU5FU0VfUkFOR0VTID0gW1xuICAuLi5LQU5BX1JBTkdFUyxcbiAgLi4uSkFfUFVOQ1RVQVRJT05fUkFOR0VTLFxuICBaRU5LQUtVX1VQUEVSQ0FTRSxcbiAgWkVOS0FLVV9MT1dFUkNBU0UsXG4gIFpFTktBS1VfTlVNQkVSUyxcbiAgQ09NTU9OX0NKSyxcbiAgUkFSRV9DSkssXG5dO1xuXG5jb25zdCBNT0RFUk5fRU5HTElTSCA9IFsweDAwMDAsIDB4MDA3Zl07XG5jb25zdCBIRVBCVVJOX01BQ1JPTl9SQU5HRVMgPSBbXG4gIFsweDAxMDAsIDB4MDEwMV0sIC8vIMSAIMSBXG4gIFsweDAxMTIsIDB4MDExM10sIC8vIMSSIMSTXG4gIFsweDAxMmEsIDB4MDEyYl0sIC8vIMSqIMSrXG4gIFsweDAxNGMsIDB4MDE0ZF0sIC8vIMWMIMWNXG4gIFsweDAxNmEsIDB4MDE2Yl0sIC8vIMWqIMWrXG5dO1xuY29uc3QgU01BUlRfUVVPVEVfUkFOR0VTID0gW1xuICBbMHgyMDE4LCAweDIwMTldLCAvLyDigJgg4oCZXG4gIFsweDIwMWMsIDB4MjAxZF0sIC8vIOKAnCDigJ1cbl07XG5cbmV4cG9ydCBjb25zdCBST01BSklfUkFOR0VTID0gW01PREVSTl9FTkdMSVNILCAuLi5IRVBCVVJOX01BQ1JPTl9SQU5HRVNdO1xuXG5leHBvcnQgY29uc3QgRU5fUFVOQ1RVQVRJT05fUkFOR0VTID0gW1xuICBbMHgyMCwgMHgyZl0sXG4gIFsweDNhLCAweDNmXSxcbiAgWzB4NWIsIDB4NjBdLFxuICBbMHg3YiwgMHg3ZV0sXG4gIC4uLlNNQVJUX1FVT1RFX1JBTkdFUyxcbl07XG4iLCAiaW1wb3J0IGlzQ2hhckluUmFuZ2UgZnJvbSAnLi9pc0NoYXJJblJhbmdlJztcbmltcG9ydCB7IEpBUEFORVNFX1JBTkdFUyB9IGZyb20gJy4uL2NvbnN0YW50cy50cyc7XG5cbi8qKlxuICogVGVzdHMgYSBjaGFyYWN0ZXIuIFJldHVybnMgdHJ1ZSBpZiB0aGUgY2hhcmFjdGVyIGlzIFtLYXRha2FuYV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvS2F0YWthbmEpLlxuICogQHBhcmFtICB7U3RyaW5nfSBjaGFyIGNoYXJhY3RlciBzdHJpbmcgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNDaGFySmFwYW5lc2UoY2hhciA9ICcnKSB7XG4gIHJldHVybiBKQVBBTkVTRV9SQU5HRVMuc29tZSgoW3N0YXJ0LCBlbmRdKSA9PiBpc0NoYXJJblJhbmdlKGNoYXIsIHN0YXJ0LCBlbmQpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNDaGFySmFwYW5lc2U7XG4iLCAiaW1wb3J0IHR5cGVPZiBmcm9tICcuL3V0aWxzL3R5cGVPZic7XG5pbXBvcnQgaXNFbXB0eSBmcm9tICcuL3V0aWxzL2lzRW1wdHknO1xuaW1wb3J0IGlzQ2hhckphcGFuZXNlIGZyb20gJy4vdXRpbHMvaXNDaGFySmFwYW5lc2UnO1xuXG4vKipcbiAqIFRlc3QgaWYgYGlucHV0YCBvbmx5IGluY2x1ZGVzIFtLYW5qaV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvS2FuamkpLCBbS2FuYV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvS2FuYSksIHplbmtha3UgbnVtYmVycywgYW5kIEpBIHB1bmN0dWF0aW9uL3N5bWJvbHMu4oCdXG4gKiBAcGFyYW0gIHtTdHJpbmd9IFtpbnB1dD0nJ10gdGV4dFxuICogQHBhcmFtICB7UmVnRXhwfSBbYWxsb3dlZF0gYWRkaXRpb25hbCB0ZXN0IGFsbG93ZWQgdG8gcGFzcyBmb3IgZWFjaCBjaGFyXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHBhc3NlcyBjaGVja3NcbiAqIEBleGFtcGxlXG4gKiBpc0phcGFuZXNlKCfms6PjgY3omasnKVxuICogLy8gPT4gdHJ1ZVxuICogaXNKYXBhbmVzZSgn44GC44KiJylcbiAqIC8vID0+IHRydWVcbiAqIGlzSmFwYW5lc2UoJ++8kuaciCcpIC8vIFplbmtha3UgbnVtYmVycyBhbGxvd2VkXG4gKiAvLyA9PiB0cnVlXG4gKiBpc0phcGFuZXNlKCfms6PjgY3omavjgILvvIHjgJzvvIQnKSAvLyBaZW5rYWt1L0pBIHB1bmN0dWF0aW9uXG4gKiAvLyA9PiB0cnVlXG4gKiBpc0phcGFuZXNlKCfms6PjgY3omasuIX4kJykgLy8gTGF0aW4gcHVuY3R1YXRpb24gZmFpbHNcbiAqIC8vID0+IGZhbHNlXG4gKiBpc0phcGFuZXNlKCdB5rOj44GN6JmrJylcbiAqIC8vID0+IGZhbHNlXG4gKiBpc0phcGFuZXNlKCfiiarlgb3mi6zlvKfiiasnLCAvW+KJquKJq10vKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNKYXBhbmVzZShpbnB1dCA9ICcnLCBhbGxvd2VkKSB7XG4gIGNvbnN0IGF1Z21lbnRlZCA9IHR5cGVPZihhbGxvd2VkKSA9PT0gJ3JlZ2V4cCc7XG4gIHJldHVybiBpc0VtcHR5KGlucHV0KVxuICAgID8gZmFsc2VcbiAgICA6IFsuLi5pbnB1dF0uZXZlcnkoKGNoYXIpID0+IHtcbiAgICAgIGNvbnN0IGlzSmEgPSBpc0NoYXJKYXBhbmVzZShjaGFyKTtcbiAgICAgIHJldHVybiAhYXVnbWVudGVkID8gaXNKYSA6IGlzSmEgfHwgYWxsb3dlZC50ZXN0KGNoYXIpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc0phcGFuZXNlO1xuIiwgInZhciBzYWZlSXNOYU4gPSBOdW1iZXIuaXNOYU4gfHxcbiAgICBmdW5jdGlvbiBwb255ZmlsbCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB2YWx1ZSAhPT0gdmFsdWU7XG4gICAgfTtcbmZ1bmN0aW9uIGlzRXF1YWwoZmlyc3QsIHNlY29uZCkge1xuICAgIGlmIChmaXJzdCA9PT0gc2Vjb25kKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoc2FmZUlzTmFOKGZpcnN0KSAmJiBzYWZlSXNOYU4oc2Vjb25kKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gYXJlSW5wdXRzRXF1YWwobmV3SW5wdXRzLCBsYXN0SW5wdXRzKSB7XG4gICAgaWYgKG5ld0lucHV0cy5sZW5ndGggIT09IGxhc3RJbnB1dHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXdJbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsKG5ld0lucHV0c1tpXSwgbGFzdElucHV0c1tpXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gbWVtb2l6ZU9uZShyZXN1bHRGbiwgaXNFcXVhbCkge1xuICAgIGlmIChpc0VxdWFsID09PSB2b2lkIDApIHsgaXNFcXVhbCA9IGFyZUlucHV0c0VxdWFsOyB9XG4gICAgdmFyIGNhY2hlID0gbnVsbDtcbiAgICBmdW5jdGlvbiBtZW1vaXplZCgpIHtcbiAgICAgICAgdmFyIG5ld0FyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIG5ld0FyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FjaGUgJiYgY2FjaGUubGFzdFRoaXMgPT09IHRoaXMgJiYgaXNFcXVhbChuZXdBcmdzLCBjYWNoZS5sYXN0QXJncykpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZS5sYXN0UmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHZhciBsYXN0UmVzdWx0ID0gcmVzdWx0Rm4uYXBwbHkodGhpcywgbmV3QXJncyk7XG4gICAgICAgIGNhY2hlID0ge1xuICAgICAgICAgICAgbGFzdFJlc3VsdDogbGFzdFJlc3VsdCxcbiAgICAgICAgICAgIGxhc3RBcmdzOiBuZXdBcmdzLFxuICAgICAgICAgICAgbGFzdFRoaXM6IHRoaXMsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICAgIH1cbiAgICBtZW1vaXplZC5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgICBjYWNoZSA9IG51bGw7XG4gICAgfTtcbiAgICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbmV4cG9ydCB7IG1lbW9pemVPbmUgYXMgZGVmYXVsdCB9O1xuIiwgInZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBmaW5kKGl0ZXIsIHRhciwga2V5KSB7XG5cdGZvciAoa2V5IG9mIGl0ZXIua2V5cygpKSB7XG5cdFx0aWYgKGRlcXVhbChrZXksIHRhcikpIHJldHVybiBrZXk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcXVhbChmb28sIGJhcikge1xuXHR2YXIgY3RvciwgbGVuLCB0bXA7XG5cdGlmIChmb28gPT09IGJhcikgcmV0dXJuIHRydWU7XG5cblx0aWYgKGZvbyAmJiBiYXIgJiYgKGN0b3I9Zm9vLmNvbnN0cnVjdG9yKSA9PT0gYmFyLmNvbnN0cnVjdG9yKSB7XG5cdFx0aWYgKGN0b3IgPT09IERhdGUpIHJldHVybiBmb28uZ2V0VGltZSgpID09PSBiYXIuZ2V0VGltZSgpO1xuXHRcdGlmIChjdG9yID09PSBSZWdFeHApIHJldHVybiBmb28udG9TdHJpbmcoKSA9PT0gYmFyLnRvU3RyaW5nKCk7XG5cblx0XHRpZiAoY3RvciA9PT0gQXJyYXkpIHtcblx0XHRcdGlmICgobGVuPWZvby5sZW5ndGgpID09PSBiYXIubGVuZ3RoKSB7XG5cdFx0XHRcdHdoaWxlIChsZW4tLSAmJiBkZXF1YWwoZm9vW2xlbl0sIGJhcltsZW5dKSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbGVuID09PSAtMTtcblx0XHR9XG5cblx0XHRpZiAoY3RvciA9PT0gU2V0KSB7XG5cdFx0XHRpZiAoZm9vLnNpemUgIT09IGJhci5zaXplKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGZvciAobGVuIG9mIGZvbykge1xuXHRcdFx0XHR0bXAgPSBsZW47XG5cdFx0XHRcdGlmICh0bXAgJiYgdHlwZW9mIHRtcCA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHR0bXAgPSBmaW5kKGJhciwgdG1wKTtcblx0XHRcdFx0XHRpZiAoIXRtcCkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghYmFyLmhhcyh0bXApKSByZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoY3RvciA9PT0gTWFwKSB7XG5cdFx0XHRpZiAoZm9vLnNpemUgIT09IGJhci5zaXplKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGZvciAobGVuIG9mIGZvbykge1xuXHRcdFx0XHR0bXAgPSBsZW5bMF07XG5cdFx0XHRcdGlmICh0bXAgJiYgdHlwZW9mIHRtcCA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHR0bXAgPSBmaW5kKGJhciwgdG1wKTtcblx0XHRcdFx0XHRpZiAoIXRtcCkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghZGVxdWFsKGxlblsxXSwgYmFyLmdldCh0bXApKSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKGN0b3IgPT09IEFycmF5QnVmZmVyKSB7XG5cdFx0XHRmb28gPSBuZXcgVWludDhBcnJheShmb28pO1xuXHRcdFx0YmFyID0gbmV3IFVpbnQ4QXJyYXkoYmFyKTtcblx0XHR9IGVsc2UgaWYgKGN0b3IgPT09IERhdGFWaWV3KSB7XG5cdFx0XHRpZiAoKGxlbj1mb28uYnl0ZUxlbmd0aCkgPT09IGJhci5ieXRlTGVuZ3RoKSB7XG5cdFx0XHRcdHdoaWxlIChsZW4tLSAmJiBmb28uZ2V0SW50OChsZW4pID09PSBiYXIuZ2V0SW50OChsZW4pKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBsZW4gPT09IC0xO1xuXHRcdH1cblxuXHRcdGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoZm9vKSkge1xuXHRcdFx0aWYgKChsZW49Zm9vLmJ5dGVMZW5ndGgpID09PSBiYXIuYnl0ZUxlbmd0aCkge1xuXHRcdFx0XHR3aGlsZSAobGVuLS0gJiYgZm9vW2xlbl0gPT09IGJhcltsZW5dKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBsZW4gPT09IC0xO1xuXHRcdH1cblxuXHRcdGlmICghY3RvciB8fCB0eXBlb2YgZm9vID09PSAnb2JqZWN0Jykge1xuXHRcdFx0bGVuID0gMDtcblx0XHRcdGZvciAoY3RvciBpbiBmb28pIHtcblx0XHRcdFx0aWYgKGhhcy5jYWxsKGZvbywgY3RvcikgJiYgKytsZW4gJiYgIWhhcy5jYWxsKGJhciwgY3RvcikpIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWYgKCEoY3RvciBpbiBiYXIpIHx8ICFkZXF1YWwoZm9vW2N0b3JdLCBiYXJbY3Rvcl0pKSByZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmtleXMoYmFyKS5sZW5ndGggPT09IGxlbjtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZm9vICE9PSBmb28gJiYgYmFyICE9PSBiYXI7XG59XG4iLCAiaW1wb3J0IHsgREVGQVVMVF9PUFRJT05TIH0gZnJvbSAnLi4vY29uc3RhbnRzLnRzJztcbi8qKlxuICogRWFzeSByZS11c2Ugb2YgbWVyZ2luZyB3aXRoIGRlZmF1bHQgb3B0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IG9wdHMgdXNlciBvcHRpb25zXG4gKiBAcmV0dXJucyB1c2VyIG9wdGlvbnMgbWVyZ2VkIG92ZXIgZGVmYXVsdCBvcHRpb25zXG4gKi9cbmNvbnN0IG1lcmdlV2l0aERlZmF1bHRPcHRpb25zID0gKG9wdHMgPSB7fSkgPT4gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9PUFRJT05TLCBvcHRzKTtcblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2VXaXRoRGVmYXVsdE9wdGlvbnM7XG4iLCAiaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseU1hcHBpbmcoc3RyaW5nLCBtYXBwaW5nLCBjb252ZXJ0RW5kaW5nKSB7XG4gIGNvbnN0IHJvb3QgPSBtYXBwaW5nO1xuXG4gIGZ1bmN0aW9uIG5leHRTdWJ0cmVlKHRyZWUsIG5leHRDaGFyKSB7XG4gICAgY29uc3Qgc3VidHJlZSA9IHRyZWVbbmV4dENoYXJdO1xuICAgIGlmIChzdWJ0cmVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIGlmIHRoZSBuZXh0IGNoaWxkIG5vZGUgZG9lcyBub3QgaGF2ZSBhIG5vZGUgdmFsdWUsIHNldCBpdHMgbm9kZSB2YWx1ZSB0byB0aGUgaW5wdXRcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7ICcnOiB0cmVlWycnXSArIG5leHRDaGFyIH0sIHRyZWVbbmV4dENoYXJdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5ld0NodW5rKHJlbWFpbmluZywgY3VycmVudEN1cnNvcikge1xuICAgIC8vIHN0YXJ0IHBhcnNpbmcgYSBuZXcgY2h1bmtcbiAgICBjb25zdCBmaXJzdENoYXIgPSByZW1haW5pbmcuY2hhckF0KDApO1xuXG4gICAgcmV0dXJuIHBhcnNlKFxuICAgICAgT2JqZWN0LmFzc2lnbih7ICcnOiBmaXJzdENoYXIgfSwgcm9vdFtmaXJzdENoYXJdKSxcbiAgICAgIHJlbWFpbmluZy5zbGljZSgxKSxcbiAgICAgIGN1cnJlbnRDdXJzb3IsXG4gICAgICBjdXJyZW50Q3Vyc29yICsgMVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZSh0cmVlLCByZW1haW5pbmcsIGxhc3RDdXJzb3IsIGN1cnJlbnRDdXJzb3IpIHtcbiAgICBpZiAoIXJlbWFpbmluZykge1xuICAgICAgaWYgKGNvbnZlcnRFbmRpbmcgfHwgT2JqZWN0LmtleXModHJlZSkubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIC8vIG5vdGhpbmcgbW9yZSB0byBjb25zdW1lLCBqdXN0IGNvbW1pdCB0aGUgbGFzdCBjaHVuayBhbmQgcmV0dXJuIGl0XG4gICAgICAgIC8vIHNvIGFzIHRvIG5vdCBoYXZlIGFuIGVtcHR5IGVsZW1lbnQgYXQgdGhlIGVuZCBvZiB0aGUgcmVzdWx0XG4gICAgICAgIHJldHVybiB0cmVlWycnXSA/IFtbbGFzdEN1cnNvciwgY3VycmVudEN1cnNvciwgdHJlZVsnJ11dXSA6IFtdO1xuICAgICAgfVxuICAgICAgLy8gaWYgd2UgZG9uJ3Qgd2FudCB0byBjb252ZXJ0IHRoZSBlbmRpbmcsIGJlY2F1c2UgdGhlcmUgYXJlIHN0aWxsIHBvc3NpYmxlIGNvbnRpbnVhdGlvbnNcbiAgICAgIC8vIHJldHVybiBudWxsIGFzIHRoZSBmaW5hbCBub2RlIHZhbHVlXG4gICAgICByZXR1cm4gW1tsYXN0Q3Vyc29yLCBjdXJyZW50Q3Vyc29yLCBudWxsXV07XG4gICAgfVxuXG4gICAgaWYgKE9iamVjdC5rZXlzKHRyZWUpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIFtbbGFzdEN1cnNvciwgY3VycmVudEN1cnNvciwgdHJlZVsnJ11dXS5jb25jYXQoXG4gICAgICAgIG5ld0NodW5rKHJlbWFpbmluZywgY3VycmVudEN1cnNvcilcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3VidHJlZSA9IG5leHRTdWJ0cmVlKHRyZWUsIHJlbWFpbmluZy5jaGFyQXQoMCkpO1xuXG4gICAgaWYgKHN1YnRyZWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIFtbbGFzdEN1cnNvciwgY3VycmVudEN1cnNvciwgdHJlZVsnJ11dXS5jb25jYXQoXG4gICAgICAgIG5ld0NodW5rKHJlbWFpbmluZywgY3VycmVudEN1cnNvcilcbiAgICAgICk7XG4gICAgfVxuICAgIC8vIGNvbnRpbnVlIGN1cnJlbnQgYnJhbmNoXG4gICAgcmV0dXJuIHBhcnNlKHN1YnRyZWUsIHJlbWFpbmluZy5zbGljZSgxKSwgbGFzdEN1cnNvciwgY3VycmVudEN1cnNvciArIDEpO1xuICB9XG5cbiAgcmV0dXJuIG5ld0NodW5rKHN0cmluZywgMCk7XG59XG5cbi8vIHRyYW5zZm9ybSB0aGUgdHJlZSwgc28gdGhhdCBmb3IgZXhhbXBsZSBoZXBidXJuVHJlZVsn44KUJ11bJ+OBgSddWycnXSA9PT0gJ3ZhJ1xuLy8gb3Iga2FuYVRyZWVbJ2snXVsneSddWydhJ11bJyddID09PSAn44GN44KDJ1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybSh0cmVlKSB7XG4gIHJldHVybiBPYmplY3QuZW50cmllcyh0cmVlKS5yZWR1Y2UoKG1hcCwgW2NoYXIsIHN1YnRyZWVdKSA9PiB7XG4gICAgY29uc3QgZW5kT2ZCcmFuY2ggPSB0eXBlT2Yoc3VidHJlZSkgPT09ICdzdHJpbmcnO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG1hcFtjaGFyXSA9IGVuZE9mQnJhbmNoID8geyAnJzogc3VidHJlZSB9IDogdHJhbnNmb3JtKHN1YnRyZWUpO1xuICAgIHJldHVybiBtYXA7XG4gIH0sIHt9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN1YlRyZWVPZih0cmVlLCBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5zcGxpdCgnJykucmVkdWNlKChjb3JyZWN0U3ViVHJlZSwgY2hhcikgPT4ge1xuICAgIGlmIChjb3JyZWN0U3ViVHJlZVtjaGFyXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIGNvcnJlY3RTdWJUcmVlW2NoYXJdID0ge307XG4gICAgfVxuICAgIHJldHVybiBjb3JyZWN0U3ViVHJlZVtjaGFyXTtcbiAgfSwgdHJlZSk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGN1c3RvbSBtYXBwaW5nIHRyZWUsIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYSBkZWZhdWx0TWFwIHdoaWNoIHRoZSBuZXdseSBjcmVhdGVkIGN1c3RvbU1hcHBpbmcgd2lsbCBiZSBtZXJnZWQgd2l0aCBhbmQgcmV0dXJuZWRcbiAqIChjdXN0b21NYXApID0+IChkZWZhdWx0TWFwKSA9PiBtZXJnZWRNYXBcbiAqIEBwYXJhbSAge09iamVjdH0gY3VzdG9tTWFwIHsgJ2thJyA6ICfjgaonIH1cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSAoZGVmYXVsdE1hcCkgPT4gZGVmYXVsdE1lcmdlZFdpdGhDdXN0b21NYXBcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBzaWxseU1hcCA9IGNyZWF0ZUN1c3RvbU1hcHBpbmcoeyAn44Gh44KDJzogJ3RpbWUnLCAn6IyOJzogJ2Nvb2tpZSfjgIB9KTtcbiAqIC8vIHNpbGx5TWFwIGlzIHBhc3NlZCBkZWZhdWx0TWFwcGluZyB0byBtZXJnZSB3aXRoIHdoZW4gY2FsbGVkIGluIHRvUm9tYWppKClcbiAqIHRvUm9tYWppKFwiSXQncyDojI4g44Gh44KDIOOCiFwiLCB7IGN1c3RvbVJvbWFqaU1hcHBpbmc6IHNpbGx5TWFwIH0pO1xuICogLy8gPT4gJ0l0J3MgY29va2llIHRpbWUgeW8nO1xuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ3VzdG9tTWFwcGluZyhjdXN0b21NYXAgPSB7fSkge1xuICBjb25zdCBjdXN0b21UcmVlID0ge307XG5cbiAgaWYgKHR5cGVPZihjdXN0b21NYXApID09PSAnb2JqZWN0Jykge1xuICAgIE9iamVjdC5lbnRyaWVzKGN1c3RvbU1hcCkuZm9yRWFjaCgoW3JvbWEsIGthbmFdKSA9PiB7XG4gICAgICBsZXQgc3ViVHJlZSA9IGN1c3RvbVRyZWU7XG4gICAgICByb21hLnNwbGl0KCcnKS5mb3JFYWNoKChjaGFyKSA9PiB7XG4gICAgICAgIGlmIChzdWJUcmVlW2NoYXJdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzdWJUcmVlW2NoYXJdID0ge307XG4gICAgICAgIH1cbiAgICAgICAgc3ViVHJlZSA9IHN1YlRyZWVbY2hhcl07XG4gICAgICB9KTtcbiAgICAgIHN1YlRyZWVbJyddID0ga2FuYTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBtYWtlTWFwKG1hcCkge1xuICAgIGNvbnN0IG1hcENvcHkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG1hcCkpO1xuXG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtTWFwKG1hcFN1YnRyZWUsIGN1c3RvbVN1YnRyZWUpIHtcbiAgICAgIGlmIChtYXBTdWJ0cmVlID09PSB1bmRlZmluZWQgfHwgdHlwZU9mKG1hcFN1YnRyZWUpID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gY3VzdG9tU3VidHJlZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBPYmplY3QuZW50cmllcyhjdXN0b21TdWJ0cmVlKS5yZWR1Y2UoXG4gICAgICAgIChuZXdTdWJ0cmVlLCBbY2hhciwgc3VidHJlZV0pID0+IHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICBuZXdTdWJ0cmVlW2NoYXJdID0gdHJhbnNmb3JtTWFwKG1hcFN1YnRyZWVbY2hhcl0sIHN1YnRyZWUpO1xuICAgICAgICAgIHJldHVybiBuZXdTdWJ0cmVlO1xuICAgICAgICB9LFxuICAgICAgICBtYXBTdWJ0cmVlXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB0cmFuc2Zvcm1NYXAobWFwQ29weSwgY3VzdG9tVHJlZSk7XG4gIH07XG59XG5cbi8vIGFsbG93IGNvbnN1bWVyIHRvIHBhc3MgZWl0aGVyIGZ1bmN0aW9uIG9yIG9iamVjdCBhcyBjdXN0b21NYXBwaW5nXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VDdXN0b21NYXBwaW5nKG1hcCwgY3VzdG9tTWFwcGluZykge1xuICBpZiAoIWN1c3RvbU1hcHBpbmcpIHtcbiAgICByZXR1cm4gbWFwO1xuICB9XG4gIHJldHVybiB0eXBlT2YoY3VzdG9tTWFwcGluZykgPT09ICdmdW5jdGlvbidcbiAgICA/IGN1c3RvbU1hcHBpbmcobWFwKVxuICAgIDogY3JlYXRlQ3VzdG9tTWFwcGluZyhjdXN0b21NYXBwaW5nKShtYXApO1xufVxuIiwgImltcG9ydCB7IHRyYW5zZm9ybSwgZ2V0U3ViVHJlZU9mLCBjcmVhdGVDdXN0b21NYXBwaW5nIH0gZnJvbSAnLi9rYW5hTWFwcGluZyc7XG5cbi8vIE5PVEU6IG5vdCBleGFjdGx5IGt1bnJlaSBzaGlraSwgZm9yIGV4YW1wbGUg44Gi44KDIC0+IGR5YSBpbnN0ZWFkIG9mIHp5YSwgdG8gYXZvaWQgbmFtZSBjbGFzaGluZ1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIHByZXR0aWVyLWlnbm9yZVxuY29uc3QgQkFTSUNfS1VOUkVJID0ge1xuICBhOiAn44GCJywgaTogJ+OBhCcsIHU6ICfjgYYnLCBlOiAn44GIJywgbzogJ+OBiicsXG4gIGs6IHsgYTogJ+OBiycsIGk6ICfjgY0nLCB1OiAn44GPJywgZTogJ+OBkScsIG86ICfjgZMnLCB9LFxuICBzOiB7IGE6ICfjgZUnLCBpOiAn44GXJywgdTogJ+OBmScsIGU6ICfjgZsnLCBvOiAn44GdJywgfSxcbiAgdDogeyBhOiAn44GfJywgaTogJ+OBoScsIHU6ICfjgaQnLCBlOiAn44GmJywgbzogJ+OBqCcsIH0sXG4gIG46IHsgYTogJ+OBqicsIGk6ICfjgasnLCB1OiAn44GsJywgZTogJ+OBrScsIG86ICfjga4nLCB9LFxuICBoOiB7IGE6ICfjga8nLCBpOiAn44GyJywgdTogJ+OBtScsIGU6ICfjgbgnLCBvOiAn44G7JywgfSxcbiAgbTogeyBhOiAn44G+JywgaTogJ+OBvycsIHU6ICfjgoAnLCBlOiAn44KBJywgbzogJ+OCgicsIH0sXG4gIHk6IHsgYTogJ+OChCcsIHU6ICfjgoYnLCBvOiAn44KIJyB9LFxuICByOiB7IGE6ICfjgoknLCBpOiAn44KKJywgdTogJ+OCiycsIGU6ICfjgownLCBvOiAn44KNJywgfSxcbiAgdzogeyBhOiAn44KPJywgaTogJ+OCkCcsIGU6ICfjgpEnLCBvOiAn44KSJywgfSxcbiAgZzogeyBhOiAn44GMJywgaTogJ+OBjicsIHU6ICfjgZAnLCBlOiAn44GSJywgbzogJ+OBlCcsIH0sXG4gIHo6IHsgYTogJ+OBlicsIGk6ICfjgZgnLCB1OiAn44GaJywgZTogJ+OBnCcsIG86ICfjgZ4nLCB9LFxuICBkOiB7IGE6ICfjgaAnLCBpOiAn44GiJywgdTogJ+OBpScsIGU6ICfjgacnLCBvOiAn44GpJywgfSxcbiAgYjogeyBhOiAn44GwJywgaTogJ+OBsycsIHU6ICfjgbYnLCBlOiAn44G5JywgbzogJ+OBvCcsIH0sXG4gIHA6IHsgYTogJ+OBsScsIGk6ICfjgbQnLCB1OiAn44G3JywgZTogJ+OBuicsIG86ICfjgb0nLCB9LFxuICB2OiB7IGE6ICfjgpTjgYEnLCBpOiAn44KU44GDJywgdTogJ+OClCcsIGU6ICfjgpTjgYcnLCBvOiAn44KU44GJJywgfSxcbn07XG5cbmNvbnN0IFNQRUNJQUxfU1lNQk9MUyA9IHtcbiAgJy4nOiAn44CCJyxcbiAgJywnOiAn44CBJyxcbiAgJzonOiAn77yaJyxcbiAgJy8nOiAn44O7JyxcbiAgJyEnOiAn77yBJyxcbiAgJz8nOiAn77yfJyxcbiAgJ34nOiAn44CcJyxcbiAgJy0nOiAn44O8JyxcbiAgJ+KAmCc6ICfjgIwnLFxuICAn4oCZJzogJ+OAjScsXG4gICfigJwnOiAn44COJyxcbiAgJ+KAnSc6ICfjgI8nLFxuICAnWyc6ICfvvLsnLFxuICAnXSc6ICfvvL0nLFxuICAnKCc6ICfvvIgnLFxuICAnKSc6ICfvvIknLFxuICAneyc6ICfvvZsnLFxuICAnfSc6ICfvvZ0nLFxufTtcblxuY29uc3QgQ09OU09OQU5UUyA9IHtcbiAgazogJ+OBjScsXG4gIHM6ICfjgZcnLFxuICB0OiAn44GhJyxcbiAgbjogJ+OBqycsXG4gIGg6ICfjgbInLFxuICBtOiAn44G/JyxcbiAgcjogJ+OCiicsXG4gIGc6ICfjgY4nLFxuICB6OiAn44GYJyxcbiAgZDogJ+OBoicsXG4gIGI6ICfjgbMnLFxuICBwOiAn44G0JyxcbiAgdjogJ+OClCcsXG4gIHE6ICfjgY8nLFxuICBmOiAn44G1Jyxcbn07XG5jb25zdCBTTUFMTF9ZID0geyB5YTogJ+OCgycsIHlpOiAn44GDJywgeXU6ICfjgoUnLCB5ZTogJ+OBhycsIHlvOiAn44KHJyB9O1xuY29uc3QgU01BTExfVk9XRUxTID0geyBhOiAn44GBJywgaTogJ+OBgycsIHU6ICfjgYUnLCBlOiAn44GHJywgbzogJ+OBiScgfTtcblxuLy8gdHlwaW5nIG9uZSBzaG91bGQgYmUgdGhlIHNhbWUgYXMgaGF2aW5nIHR5cGVkIHRoZSBvdGhlciBpbnN0ZWFkXG5jb25zdCBBTElBU0VTID0ge1xuICBzaDogJ3N5JywgLy8gc2hhIC0+IHN5YVxuICBjaDogJ3R5JywgLy8gY2hvIC0+IHR5b1xuICBjeTogJ3R5JywgLy8gY3lvIC0+IHR5b1xuICBjaHk6ICd0eScsIC8vIGNoeXUgLT4gdHl1XG4gIHNoeTogJ3N5JywgLy8gc2h5YSAtPiBzeWFcbiAgajogJ3p5JywgLy8gamEgLT4genlhXG4gIGp5OiAnenknLCAvLyBqeWUgLT4genllXG5cbiAgLy8gZXhjZXB0aW9ucyB0byBhYm92ZSBydWxlc1xuICBzaGk6ICdzaScsXG4gIGNoaTogJ3RpJyxcbiAgdHN1OiAndHUnLFxuICBqaTogJ3ppJyxcbiAgZnU6ICdodScsXG59O1xuXG4vLyB4dHUgLT4g44GjXG5jb25zdCBTTUFMTF9MRVRURVJTID0gT2JqZWN0LmFzc2lnbihcbiAge1xuICAgIHR1OiAn44GjJyxcbiAgICB3YTogJ+OCjicsXG4gICAga2E6ICfjg7UnLFxuICAgIGtlOiAn44O2JyxcbiAgfSxcbiAgU01BTExfVk9XRUxTLFxuICBTTUFMTF9ZXG4pO1xuXG4vLyBkb24ndCBmb2xsb3cgYW55IG5vdGFibGUgcGF0dGVybnNcbmNvbnN0IFNQRUNJQUxfQ0FTRVMgPSB7XG4gIHlpOiAn44GEJyxcbiAgd3U6ICfjgYYnLFxuICB5ZTogJ+OBhOOBhycsXG4gIHdpOiAn44GG44GDJyxcbiAgd2U6ICfjgYbjgYcnLFxuICBrd2E6ICfjgY/jgYEnLFxuICB3aHU6ICfjgYYnLFxuICAvLyBiZWNhdXNlIGl0J3Mgbm90IHRoeWEgZm9yIOOBpuOCgyBidXQgdGhhXG4gIC8vIGFuZCB0aGEgaXMgbm90IOOBpuOBgSwgYnV0IOOBpuOCg1xuICB0aGE6ICfjgabjgoMnLFxuICB0aHU6ICfjgabjgoUnLFxuICB0aG86ICfjgabjgocnLFxuICBkaGE6ICfjgafjgoMnLFxuICBkaHU6ICfjgafjgoUnLFxuICBkaG86ICfjgafjgocnLFxufTtcblxuY29uc3QgQUlVRU9fQ09OU1RSVUNUSU9OUyA9IHtcbiAgd2g6ICfjgYYnLFxuICBrdzogJ+OBjycsXG4gIHF3OiAn44GPJyxcbiAgcTogJ+OBjycsXG4gIGd3OiAn44GQJyxcbiAgc3c6ICfjgZknLFxuICB0czogJ+OBpCcsXG4gIHRoOiAn44GmJyxcbiAgdHc6ICfjgagnLFxuICBkaDogJ+OBpycsXG4gIGR3OiAn44GpJyxcbiAgZnc6ICfjgbUnLFxuICBmOiAn44G1Jyxcbn07XG5cbi8qIGVzbGludC1lbmFibGUgKi9cbmZ1bmN0aW9uIGNyZWF0ZVJvbWFqaVRvS2FuYU1hcCgpIHtcbiAgY29uc3Qga2FuYVRyZWUgPSB0cmFuc2Zvcm0oQkFTSUNfS1VOUkVJKTtcbiAgLy8gcHNldWRvIHBhcnRpYWwgYXBwbGljYXRpb25cbiAgY29uc3Qgc3VidHJlZU9mID0gKHN0cmluZykgPT4gZ2V0U3ViVHJlZU9mKGthbmFUcmVlLCBzdHJpbmcpO1xuXG4gIC8vIGFkZCB0eWEsIHN5YSwgZXRjLlxuICBPYmplY3QuZW50cmllcyhDT05TT05BTlRTKS5mb3JFYWNoKChbY29uc29uYW50LCB5S2FuYV0pID0+IHtcbiAgICBPYmplY3QuZW50cmllcyhTTUFMTF9ZKS5mb3JFYWNoKChbcm9tYSwga2FuYV0pID0+IHtcbiAgICAgIC8vIGZvciBleGFtcGxlIGt5byAtPiDjgY0gKyDjgodcbiAgICAgIHN1YnRyZWVPZihjb25zb25hbnQgKyByb21hKVsnJ10gPSB5S2FuYSArIGthbmE7XG4gICAgfSk7XG4gIH0pO1xuXG4gIE9iamVjdC5lbnRyaWVzKFNQRUNJQUxfU1lNQk9MUykuZm9yRWFjaCgoW3N5bWJvbCwganN5bWJvbF0pID0+IHtcbiAgICBzdWJ0cmVlT2Yoc3ltYm9sKVsnJ10gPSBqc3ltYm9sO1xuICB9KTtcblxuICAvLyB0aGluZ3MgbGlrZSDjgYbjgYMsIOOBj+OBgywgZXRjLlxuICBPYmplY3QuZW50cmllcyhBSVVFT19DT05TVFJVQ1RJT05TKS5mb3JFYWNoKChbY29uc29uYW50LCBhaXVlb0thbmFdKSA9PiB7XG4gICAgT2JqZWN0LmVudHJpZXMoU01BTExfVk9XRUxTKS5mb3JFYWNoKChbdm93ZWwsIGthbmFdKSA9PiB7XG4gICAgICBjb25zdCBzdWJ0cmVlID0gc3VidHJlZU9mKGNvbnNvbmFudCArIHZvd2VsKTtcbiAgICAgIHN1YnRyZWVbJyddID0gYWl1ZW9LYW5hICsga2FuYTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gZGlmZmVyZW50IHdheXMgdG8gd3JpdGUg44KTXG4gIFsnbicsIFwibidcIiwgJ3huJ10uZm9yRWFjaCgobkNoYXIpID0+IHtcbiAgICBzdWJ0cmVlT2YobkNoYXIpWycnXSA9ICfjgpMnO1xuICB9KTtcblxuICAvLyBjIGlzIGVxdWl2YWxlbnQgdG8gaywgYnV0IG5vdCBmb3IgY2hpLCBjaGEsIGV0Yy4gdGhhdCdzIHdoeSB3ZSBoYXZlIHRvIG1ha2UgYSBjb3B5IG9mIGtcbiAga2FuYVRyZWUuYyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoa2FuYVRyZWUuaykpO1xuXG4gIE9iamVjdC5lbnRyaWVzKEFMSUFTRVMpLmZvckVhY2goKFtzdHJpbmcsIGFsdGVybmF0aXZlXSkgPT4ge1xuICAgIGNvbnN0IGFsbEV4Y2VwdExhc3QgPSBzdHJpbmcuc2xpY2UoMCwgc3RyaW5nLmxlbmd0aCAtIDEpO1xuICAgIGNvbnN0IGxhc3QgPSBzdHJpbmcuY2hhckF0KHN0cmluZy5sZW5ndGggLSAxKTtcbiAgICBjb25zdCBwYXJlbnRUcmVlID0gc3VidHJlZU9mKGFsbEV4Y2VwdExhc3QpO1xuICAgIC8vIGNvcHkgdG8gYXZvaWQgcmVjdXJzaXZlIGNvbnRhaW5tZW50XG4gICAgcGFyZW50VHJlZVtsYXN0XSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3VidHJlZU9mKGFsdGVybmF0aXZlKSkpO1xuICB9KTtcblxuICBmdW5jdGlvbiBnZXRBbHRlcm5hdGl2ZXMoc3RyaW5nKSB7XG4gICAgcmV0dXJuIFsuLi5PYmplY3QuZW50cmllcyhBTElBU0VTKSwgLi4uW1snYycsICdrJ11dXS5yZWR1Y2UoXG4gICAgICAobGlzdCwgW2FsdCwgcm9tYV0pID0+IChzdHJpbmcuc3RhcnRzV2l0aChyb21hKSA/IGxpc3QuY29uY2F0KHN0cmluZy5yZXBsYWNlKHJvbWEsIGFsdCkpIDogbGlzdCksXG4gICAgICBbXVxuICAgICk7XG4gIH1cblxuICBPYmplY3QuZW50cmllcyhTTUFMTF9MRVRURVJTKS5mb3JFYWNoKChba3VucmVpUm9tYSwga2FuYV0pID0+IHtcbiAgICBjb25zdCBsYXN0ID0gKGNoYXIpID0+IGNoYXIuY2hhckF0KGNoYXIubGVuZ3RoIC0gMSk7XG4gICAgY29uc3QgYWxsRXhjZXB0TGFzdCA9IChjaGFycykgPT4gY2hhcnMuc2xpY2UoMCwgY2hhcnMubGVuZ3RoIC0gMSk7XG4gICAgY29uc3QgeFJvbWEgPSBgeCR7a3VucmVpUm9tYX1gO1xuICAgIGNvbnN0IHhTdWJ0cmVlID0gc3VidHJlZU9mKHhSb21hKTtcbiAgICB4U3VidHJlZVsnJ10gPSBrYW5hO1xuXG4gICAgLy8gbHR1IC0+IHh0dSAtPiDjgaNcbiAgICBjb25zdCBwYXJlbnRUcmVlID0gc3VidHJlZU9mKGBsJHthbGxFeGNlcHRMYXN0KGt1bnJlaVJvbWEpfWApO1xuICAgIHBhcmVudFRyZWVbbGFzdChrdW5yZWlSb21hKV0gPSB4U3VidHJlZTtcblxuICAgIC8vIGx0c3UgLT4gbHR1IC0+IOOBo1xuICAgIGdldEFsdGVybmF0aXZlcyhrdW5yZWlSb21hKS5mb3JFYWNoKChhbHRSb21hKSA9PiB7XG4gICAgICBbJ2wnLCAneCddLmZvckVhY2goKHByZWZpeCkgPT4ge1xuICAgICAgICBjb25zdCBhbHRQYXJlbnRUcmVlID0gc3VidHJlZU9mKHByZWZpeCArIGFsbEV4Y2VwdExhc3QoYWx0Um9tYSkpO1xuICAgICAgICBhbHRQYXJlbnRUcmVlW2xhc3QoYWx0Um9tYSldID0gc3VidHJlZU9mKHByZWZpeCArIGt1bnJlaVJvbWEpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIE9iamVjdC5lbnRyaWVzKFNQRUNJQUxfQ0FTRVMpLmZvckVhY2goKFtzdHJpbmcsIGthbmFdKSA9PiB7XG4gICAgc3VidHJlZU9mKHN0cmluZylbJyddID0ga2FuYTtcbiAgfSk7XG5cbiAgLy8gYWRkIGtrYSwgdHRhLCBldGMuXG4gIGZ1bmN0aW9uIGFkZFRzdSh0cmVlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHRyZWUpLnJlZHVjZSgodHN1VHJlZSwgW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICBpZiAoIWtleSkge1xuICAgICAgICAvLyB3ZSBoYXZlIHJlYWNoZWQgdGhlIGJvdHRvbSBvZiB0aGlzIGJyYW5jaFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgdHN1VHJlZVtrZXldID0gYOOBoyR7dmFsdWV9YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG1vcmUgc3VidHJlZXNcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIHRzdVRyZWVba2V5XSA9IGFkZFRzdSh2YWx1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHN1VHJlZTtcbiAgICB9LCB7fSk7XG4gIH1cbiAgLy8gaGF2ZSB0byBleHBsaWNpdGx5IG5hbWUgYyBoZXJlLCBiZWNhdXNlIHdlIG1hZGUgaXQgYSBjb3B5IG9mIGssIG5vdCBhIHJlZmVyZW5jZVxuICBbLi4uT2JqZWN0LmtleXMoQ09OU09OQU5UUyksICdjJywgJ3knLCAndycsICdqJ10uZm9yRWFjaCgoY29uc29uYW50KSA9PiB7XG4gICAgY29uc3Qgc3VidHJlZSA9IGthbmFUcmVlW2NvbnNvbmFudF07XG4gICAgc3VidHJlZVtjb25zb25hbnRdID0gYWRkVHN1KHN1YnRyZWUpO1xuICB9KTtcbiAgLy8gbm4gc2hvdWxkIG5vdCBiZSDjgaPjgpNcbiAgZGVsZXRlIGthbmFUcmVlLm4ubjtcbiAgLy8gc29saWRpZnkgdGhlIHJlc3VsdHMsIHNvIHRoYXQgdGhlcmUgdGhlcmUgaXMgcmVmZXJlbnRpYWwgdHJhbnNwYXJlbmN5IHdpdGhpbiB0aGUgdHJlZVxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZShKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGthbmFUcmVlKSkpO1xufVxuXG5sZXQgcm9tYWppVG9LYW5hTWFwID0gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvbWFqaVRvS2FuYVRyZWUoKSB7XG4gIGlmIChyb21hamlUb0thbmFNYXAgPT0gbnVsbCkge1xuICAgIHJvbWFqaVRvS2FuYU1hcCA9IGNyZWF0ZVJvbWFqaVRvS2FuYU1hcCgpO1xuICB9XG4gIHJldHVybiByb21hamlUb0thbmFNYXA7XG59XG5cbmV4cG9ydCBjb25zdCBVU0VfT0JTT0xFVEVfS0FOQV9NQVAgPSBjcmVhdGVDdXN0b21NYXBwaW5nKHtcbiAgd2k6ICfjgpAnLFxuICB3ZTogJ+OCkScsXG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIElNRV9NT0RFX01BUChtYXApIHtcbiAgLy8gaW4gSU1FIG1vZGUsIHdlIGRvIG5vdCB3YW50IHRvIGNvbnZlcnQgc2luZ2xlIG5zXG4gIGNvbnN0IG1hcENvcHkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG1hcCkpO1xuICBtYXBDb3B5Lm4ubiA9IHsgJyc6ICfjgpMnIH07XG4gIG1hcENvcHkublsnICddID0geyAnJzogJ+OCkycgfTtcbiAgcmV0dXJuIG1hcENvcHk7XG59XG4iLCAiaW1wb3J0IGlzRW1wdHkgZnJvbSAnLi9pc0VtcHR5JztcbmltcG9ydCBpc0NoYXJJblJhbmdlIGZyb20gJy4vaXNDaGFySW5SYW5nZSc7XG5pbXBvcnQgeyBMQVRJTl9VUFBFUkNBU0VfU1RBUlQsIExBVElOX1VQUEVSQ0FTRV9FTkQgfSBmcm9tICcuLi9jb25zdGFudHMudHMnO1xuXG4vKipcbiAqIFRlc3RzIGlmIGNoYXIgaXMgaW4gRW5nbGlzaCB1bmljb2RlIHVwcGVyY2FzZSByYW5nZVxuICogQHBhcmFtICB7U3RyaW5nfSBjaGFyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBpc0NoYXJVcHBlckNhc2UoY2hhciA9ICcnKSB7XG4gIGlmIChpc0VtcHR5KGNoYXIpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBpc0NoYXJJblJhbmdlKGNoYXIsIExBVElOX1VQUEVSQ0FTRV9TVEFSVCwgTEFUSU5fVVBQRVJDQVNFX0VORCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzQ2hhclVwcGVyQ2FzZTtcbiIsICJpbXBvcnQgaXNFbXB0eSBmcm9tICcuL2lzRW1wdHknO1xuaW1wb3J0IHsgUFJPTE9OR0VEX1NPVU5EX01BUksgfSBmcm9tICcuLi9jb25zdGFudHMudHMnO1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBjaGFyIGlzICfjg7wnXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGNoYXIgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNDaGFyTG9uZ0Rhc2goY2hhciA9ICcnKSB7XG4gIGlmIChpc0VtcHR5KGNoYXIpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBjaGFyLmNoYXJDb2RlQXQoMCkgPT09IFBST0xPTkdFRF9TT1VORF9NQVJLO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc0NoYXJMb25nRGFzaDtcbiIsICJpbXBvcnQgaXNFbXB0eSBmcm9tICcuL2lzRW1wdHknO1xuaW1wb3J0IHsgS0FOQV9TTEFTSF9ET1QgfSBmcm9tICcuLi9jb25zdGFudHMudHMnO1xuXG4vKipcbiAqIFRlc3RzIGlmIGNoYXIgaXMgJ+ODuydcbiAqIEBwYXJhbSAge1N0cmluZ30gY2hhclxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiAn44O7J1xuICovXG5mdW5jdGlvbiBpc0NoYXJTbGFzaERvdChjaGFyID0gJycpIHtcbiAgaWYgKGlzRW1wdHkoY2hhcikpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGNoYXIuY2hhckNvZGVBdCgwKSA9PT0gS0FOQV9TTEFTSF9ET1Q7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzQ2hhclNsYXNoRG90O1xuIiwgImltcG9ydCBpc0VtcHR5IGZyb20gJy4vaXNFbXB0eSc7XG5pbXBvcnQgaXNDaGFyTG9uZ0Rhc2ggZnJvbSAnLi9pc0NoYXJMb25nRGFzaCc7XG5pbXBvcnQgaXNDaGFySW5SYW5nZSBmcm9tICcuL2lzQ2hhckluUmFuZ2UnO1xuaW1wb3J0IHtcbiAgSElSQUdBTkFfU1RBUlQsXG4gIEhJUkFHQU5BX0VORCxcbn0gZnJvbSAnLi4vY29uc3RhbnRzLnRzJztcblxuLyoqXG4gKiBUZXN0cyBhIGNoYXJhY3Rlci4gUmV0dXJucyB0cnVlIGlmIHRoZSBjaGFyYWN0ZXIgaXMgW0hpcmFnYW5hXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9IaXJhZ2FuYSkuXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGNoYXIgY2hhcmFjdGVyIHN0cmluZyB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBpc0NoYXJIaXJhZ2FuYShjaGFyID0gJycpIHtcbiAgaWYgKGlzRW1wdHkoY2hhcikpIHJldHVybiBmYWxzZTtcbiAgaWYgKGlzQ2hhckxvbmdEYXNoKGNoYXIpKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGlzQ2hhckluUmFuZ2UoY2hhciwgSElSQUdBTkFfU1RBUlQsIEhJUkFHQU5BX0VORCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzQ2hhckhpcmFnYW5hO1xuIiwgImltcG9ydCB7IEtBVEFLQU5BX1NUQVJULCBISVJBR0FOQV9TVEFSVCB9IGZyb20gJy4uL2NvbnN0YW50cy50cyc7XG5cbmltcG9ydCBpc0NoYXJMb25nRGFzaCBmcm9tICcuL2lzQ2hhckxvbmdEYXNoJztcbmltcG9ydCBpc0NoYXJTbGFzaERvdCBmcm9tICcuL2lzQ2hhclNsYXNoRG90JztcbmltcG9ydCBpc0NoYXJIaXJhZ2FuYSBmcm9tICcuL2lzQ2hhckhpcmFnYW5hJztcblxuLyoqXG4gKiBDb252ZXJ0IFtIaXJhZ2FuYV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSGlyYWdhbmEpIHRvIFtLYXRha2FuYV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvS2F0YWthbmEpXG4gKiBQYXNzZXMgdGhyb3VnaCBhbnkgbm9uLWhpcmFnYW5hIGNoYXJzXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICB7U3RyaW5nfSBbaW5wdXQ9JyddIHRleHQgaW5wdXRcbiAqIEByZXR1cm4ge1N0cmluZ30gY29udmVydGVkIHRleHRcbiAqIEBleGFtcGxlXG4gKiBoaXJhZ2FuYVRvS2F0YWthbmEoJ+OBsuOCieOBjOOBqicpXG4gKiAvLyA9PiBcIuODkuODqeOCrOODilwiXG4gKiBoaXJhZ2FuYVRvS2F0YWthbmEoJ+OBsuOCieOBjOOBqiBpcyBhIHR5cGUgb2Yga2FuYScpXG4gKiAvLyA9PiBcIuODkuODqeOCrOODiiBpcyBhIHR5cGUgb2Yga2FuYVwiXG4gKi9cbmZ1bmN0aW9uIGhpcmFnYW5hVG9LYXRha2FuYShpbnB1dCA9ICcnKSB7XG4gIGNvbnN0IGthdGEgPSBbXTtcbiAgaW5wdXQuc3BsaXQoJycpLmZvckVhY2goKGNoYXIpID0+IHtcbiAgICAvLyBTaG9ydCBjaXJjdWl0IHRvIGF2b2lkIGluY29ycmVjdCBjb2Rlc2hpZnQgZm9yICfjg7wnIGFuZCAn44O7J1xuICAgIGlmIChpc0NoYXJMb25nRGFzaChjaGFyKSB8fCBpc0NoYXJTbGFzaERvdChjaGFyKSkge1xuICAgICAga2F0YS5wdXNoKGNoYXIpO1xuICAgIH0gZWxzZSBpZiAoaXNDaGFySGlyYWdhbmEoY2hhcikpIHtcbiAgICAgIC8vIFNoaWZ0IGNoYXJjb2RlLlxuICAgICAgY29uc3QgY29kZSA9IGNoYXIuY2hhckNvZGVBdCgwKSArIChLQVRBS0FOQV9TVEFSVCAtIEhJUkFHQU5BX1NUQVJUKTtcbiAgICAgIGNvbnN0IGthdGFDaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKTtcbiAgICAgIGthdGEucHVzaChrYXRhQ2hhcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFBhc3Mgbm9uLWhpcmFnYW5hIGNoYXJzIHRocm91Z2hcbiAgICAgIGthdGEucHVzaChjaGFyKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4ga2F0YS5qb2luKCcnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGlyYWdhbmFUb0thdGFrYW5hO1xuIiwgImltcG9ydCBtZW1vaXplT25lIGZyb20gJ21lbW9pemUtb25lJztcbmltcG9ydCB7IGRlcXVhbCB9IGZyb20gJ2RlcXVhbCc7XG5cbmltcG9ydCB7IFRPX0tBTkFfTUVUSE9EUyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBtZXJnZVdpdGhEZWZhdWx0T3B0aW9ucyBmcm9tICcuL3V0aWxzL21lcmdlV2l0aERlZmF1bHRPcHRpb25zJztcbmltcG9ydCB7XG4gIGdldFJvbWFqaVRvS2FuYVRyZWUsXG4gIElNRV9NT0RFX01BUCxcbiAgVVNFX09CU09MRVRFX0tBTkFfTUFQLFxufSBmcm9tICcuL3V0aWxzL3JvbWFqaVRvS2FuYU1hcCc7XG5pbXBvcnQgeyBhcHBseU1hcHBpbmcsIG1lcmdlQ3VzdG9tTWFwcGluZyB9IGZyb20gJy4vdXRpbHMva2FuYU1hcHBpbmcnO1xuaW1wb3J0IGlzQ2hhclVwcGVyQ2FzZSBmcm9tICcuL3V0aWxzL2lzQ2hhclVwcGVyQ2FzZSc7XG5pbXBvcnQgaGlyYWdhbmFUb0thdGFrYW5hIGZyb20gJy4vdXRpbHMvaGlyYWdhbmFUb0thdGFrYW5hJztcblxuLy8gbWVtb2l6ZSBhbmQgZGVlcGx5IGNvbXBhcmUgYXJncyBzbyB3ZSBvbmx5IHJlY3JlYXRlIHdoZW4gbmVjZXNzYXJ5XG5leHBvcnQgY29uc3QgY3JlYXRlUm9tYWppVG9LYW5hTWFwID0gbWVtb2l6ZU9uZShcbiAgKElNRU1vZGUsIHVzZU9ic29sZXRlS2FuYSwgY3VzdG9tS2FuYU1hcHBpbmcpID0+IHtcbiAgICBsZXQgbWFwID0gZ2V0Um9tYWppVG9LYW5hVHJlZSgpO1xuXG4gICAgbWFwID0gSU1FTW9kZSA/IElNRV9NT0RFX01BUChtYXApIDogbWFwO1xuICAgIG1hcCA9IHVzZU9ic29sZXRlS2FuYSA/IFVTRV9PQlNPTEVURV9LQU5BX01BUChtYXApIDogbWFwO1xuXG4gICAgaWYgKGN1c3RvbUthbmFNYXBwaW5nKSB7XG4gICAgICBtYXAgPSBtZXJnZUN1c3RvbU1hcHBpbmcobWFwLCBjdXN0b21LYW5hTWFwcGluZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hcDtcbiAgfSxcbiAgZGVxdWFsXG4pO1xuXG4vKipcbiAqIENvbnZlcnQgW1JvbWFqaV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUm9tYWppKSB0byBbS2FuYV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvS2FuYSksIGxvd2VyY2FzZSB0ZXh0IHdpbGwgcmVzdWx0IGluIFtIaXJhZ2FuYV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSGlyYWdhbmEpIGFuZCB1cHBlcmNhc2UgdGV4dCB3aWxsIHJlc3VsdCBpbiBbS2F0YWthbmFdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0thdGFrYW5hKS5cbiAqIEBwYXJhbSAge1N0cmluZ30gW2lucHV0PScnXSB0ZXh0XG4gKiBAcGFyYW0gIHtEZWZhdWx0T3B0aW9uc30gW29wdGlvbnM9ZGVmYXVsdE9wdGlvbnNdXG4gKiBAcGFyYW0gIHtPYmplY3QuPHN0cmluZywgc3RyaW5nPn0gW21hcF0gY3VzdG9tIG1hcHBpbmdcbiAqIEByZXR1cm4ge1N0cmluZ30gY29udmVydGVkIHRleHRcbiAqIEBleGFtcGxlXG4gKiB0b0thbmEoJ29uYWppIEJVVFRTVVVKSScpXG4gKiAvLyA9PiAn44GK44Gq44GYIOODluODg+ODhOOCpuOCuCdcbiAqIHRvS2FuYSgnT05BSkkgYnV0dHN1dWppJylcbiAqIC8vID0+ICfjgqrjg4rjgrgg44G244Gj44Gk44GG44GYJ1xuICogdG9LYW5hKCfluqfnpoXigJh6YXplbuKAmeOCueOCv+OCpOODqycpXG4gKiAvLyA9PiAn5bqn56aF44CM44GW44Gc44KT44CN44K544K/44Kk44OrJ1xuICogdG9LYW5hKCdiYXRzdWdlLW11JylcbiAqIC8vID0+ICfjgbDjgaTjgZLjg7zjgoAnXG4gKiB0b0thbmEoJyE/LjovLH4t4oCY4oCZ4oCc4oCdW10oKXt9JykgLy8gUHVuY3R1YXRpb24gY29udmVyc2lvblxuICogLy8gPT4gJ++8ge+8n+OAgu+8muODu+OAgeOAnOODvOOAjOOAjeOAjuOAj++8u++8ve+8iO+8ie+9m++9nSdcbiAqIHRvS2FuYSgnd2UnLCB7IHVzZU9ic29sZXRlS2FuYTogdHJ1ZSB9KVxuICogLy8gPT4gJ+OCkSdcbiAqIHRvS2FuYSgnd2FuYWthbmEnLCB7IGN1c3RvbUthbmFNYXBwaW5nOiB7IG5hOiAn44GrJywga2E6ICdiYW5hJyB9IH0pO1xuICogLy8gPT4gJ+OCj+OBq2JhbmHjgasnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0thbmEoaW5wdXQgPSAnJywgb3B0aW9ucyA9IHt9LCBtYXApIHtcbiAgbGV0IGNvbmZpZztcbiAgaWYgKCFtYXApIHtcbiAgICBjb25maWcgPSBtZXJnZVdpdGhEZWZhdWx0T3B0aW9ucyhvcHRpb25zKTtcbiAgICBtYXAgPSBjcmVhdGVSb21hamlUb0thbmFNYXAoXG4gICAgICBjb25maWcuSU1FTW9kZSxcbiAgICAgIGNvbmZpZy51c2VPYnNvbGV0ZUthbmEsXG4gICAgICBjb25maWcuY3VzdG9tS2FuYU1hcHBpbmdcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZyA9IG9wdGlvbnM7XG4gIH1cblxuICAvLyB0aHJvdyBhd2F5IHRoZSBzdWJzdHJpbmcgaW5kZXggaW5mb3JtYXRpb24gYW5kIGp1c3QgY29uY2F0ZW5hdGUgYWxsIHRoZSBrYW5hXG4gIHJldHVybiBzcGxpdEludG9Db252ZXJ0ZWRLYW5hKGlucHV0LCBjb25maWcsIG1hcClcbiAgICAubWFwKChrYW5hVG9rZW4pID0+IHtcbiAgICAgIGNvbnN0IFtzdGFydCwgZW5kLCBrYW5hXSA9IGthbmFUb2tlbjtcbiAgICAgIGlmIChrYW5hID09PSBudWxsKSB7XG4gICAgICAgIC8vIGhhdmVuJ3QgY29udmVydGVkIHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc2luY2Ugd2UgYXJlIGluIElNRSBtb2RlXG4gICAgICAgIHJldHVybiBpbnB1dC5zbGljZShzdGFydCk7XG4gICAgICB9XG4gICAgICBjb25zdCBlbmZvcmNlSGlyYWdhbmEgPSBjb25maWcuSU1FTW9kZSA9PT0gVE9fS0FOQV9NRVRIT0RTLkhJUkFHQU5BO1xuICAgICAgY29uc3QgZW5mb3JjZUthdGFrYW5hID0gY29uZmlnLklNRU1vZGUgPT09IFRPX0tBTkFfTUVUSE9EUy5LQVRBS0FOQVxuICAgICAgICB8fCBbLi4uaW5wdXQuc2xpY2Uoc3RhcnQsIGVuZCldLmV2ZXJ5KGlzQ2hhclVwcGVyQ2FzZSk7XG5cbiAgICAgIHJldHVybiBlbmZvcmNlSGlyYWdhbmEgfHwgIWVuZm9yY2VLYXRha2FuYVxuICAgICAgICA/IGthbmFcbiAgICAgICAgOiBoaXJhZ2FuYVRvS2F0YWthbmEoa2FuYSk7XG4gICAgfSlcbiAgICAuam9pbignJyk7XG59XG5cbi8qKlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gW2lucHV0PScnXSBpbnB1dCB0ZXh0XG4gKiBAcGFyYW0ge0RlZmF1bHRPcHRpb25zfSBbb3B0aW9ucz1kZWZhdWx0T3B0aW9uc10gdG9LYW5hIG9wdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbbWFwXSBjdXN0b20gbWFwcGluZ1xuICogQHJldHVybnMge0FycmF5W119IFtbc3RhcnQsIGVuZCwgdG9rZW5dXVxuICogQGV4YW1wbGVcbiAqIHNwbGl0SW50b0NvbnZlcnRlZEthbmEoJ2J1dHRzdXVqaScpXG4gKiAvLyA9PiBbWzAsIDIsICfjgbYnXSwgWzIsIDYsICfjgaPjgaQnXSwgWzYsIDcsICfjgYYnXSwgWzcsIDksICfjgZgnXV1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0SW50b0NvbnZlcnRlZEthbmEoaW5wdXQgPSAnJywgb3B0aW9ucyA9IHt9LCBtYXApIHtcbiAgY29uc3QgeyBJTUVNb2RlLCB1c2VPYnNvbGV0ZUthbmEsIGN1c3RvbUthbmFNYXBwaW5nIH0gPSBvcHRpb25zO1xuXG4gIGlmICghbWFwKSB7XG4gICAgbWFwID0gY3JlYXRlUm9tYWppVG9LYW5hTWFwKElNRU1vZGUsIHVzZU9ic29sZXRlS2FuYSwgY3VzdG9tS2FuYU1hcHBpbmcpO1xuICB9XG5cbiAgcmV0dXJuIGFwcGx5TWFwcGluZyhpbnB1dC50b0xvd2VyQ2FzZSgpLCBtYXAsICFJTUVNb2RlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9LYW5hO1xuIiwgImltcG9ydCBpc0phcGFuZXNlIGZyb20gJy4uL2lzSmFwYW5lc2UnO1xuaW1wb3J0IHRvS2FuYSwgeyBjcmVhdGVSb21hamlUb0thbmFNYXAgfSBmcm9tICcuLi90b0thbmEnO1xuaW1wb3J0IG1lcmdlV2l0aERlZmF1bHRPcHRpb25zIGZyb20gJy4vbWVyZ2VXaXRoRGVmYXVsdE9wdGlvbnMnO1xuXG5sZXQgTElTVEVORVJTID0gW107XG4vKipcbiAqIEF1dG9tYWdpY2FsbHkgcmVwbGFjZXMgaW5wdXQgdmFsdWVzIHdpdGggY29udmVydGVkIHRleHQgdG8ga2FuYVxuICogQHBhcmFtICB7ZGVmYXVsdE9wdGlvbnN9IFtvcHRpb25zXSB1c2VyIGNvbmZpZyBvdmVycmlkZXMsIGRlZmF1bHQgY29udmVyc2lvbiBpcyB0b0thbmEoKVxuICogQHJldHVybiB7RnVuY3Rpb259IGV2ZW50IGhhbmRsZXIgd2l0aCBib3VuZCBvcHRpb25zXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZU9uSW5wdXQob3B0aW9ucykge1xuICBsZXQgcHJldklucHV0O1xuXG4gIC8vIEVuZm9yY2UgSU1FTW9kZSBpZiBub3QgYWxyZWFkeSBzcGVjaWZpZWRcbiAgY29uc3QgbWVyZ2VkQ29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgbWVyZ2VXaXRoRGVmYXVsdE9wdGlvbnMob3B0aW9ucyksIHtcbiAgICBJTUVNb2RlOiBvcHRpb25zLklNRU1vZGUgfHwgdHJ1ZSxcbiAgfSk7XG5cbiAgY29uc3QgcHJlQ29uZmlndXJlZE1hcCA9IGNyZWF0ZVJvbWFqaVRvS2FuYU1hcChcbiAgICBtZXJnZWRDb25maWcuSU1FTW9kZSxcbiAgICBtZXJnZWRDb25maWcudXNlT2Jzb2xldGVLYW5hLFxuICAgIG1lcmdlZENvbmZpZy5jdXN0b21LYW5hTWFwcGluZ1xuICApO1xuXG4gIGNvbnN0IHRyaWdnZXJzID0gW1xuICAgIC4uLk9iamVjdC5rZXlzKHByZUNvbmZpZ3VyZWRNYXApLFxuICAgIC4uLk9iamVjdC5rZXlzKHByZUNvbmZpZ3VyZWRNYXApLm1hcCgoY2hhcikgPT4gY2hhci50b1VwcGVyQ2FzZSgpKSxcbiAgXTtcblxuICByZXR1cm4gZnVuY3Rpb24gb25JbnB1dCh7IHRhcmdldCB9KSB7XG4gICAgaWYgKFxuICAgICAgdGFyZ2V0LnZhbHVlICE9PSBwcmV2SW5wdXRcbiAgICAgICYmIHRhcmdldC5kYXRhc2V0Lmlnbm9yZUNvbXBvc2l0aW9uICE9PSAndHJ1ZSdcbiAgICApIHtcbiAgICAgIGNvbnZlcnRJbnB1dCh0YXJnZXQsIG1lcmdlZENvbmZpZywgcHJlQ29uZmlndXJlZE1hcCwgdHJpZ2dlcnMsIHByZXZJbnB1dCk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydElucHV0KHRhcmdldCwgb3B0aW9ucywgbWFwLCB0cmlnZ2VycywgcHJldklucHV0KSB7XG4gIGNvbnN0IFtoZWFkLCB0ZXh0VG9Db252ZXJ0LCB0YWlsXSA9IHNwbGl0SW5wdXQoXG4gICAgdGFyZ2V0LnZhbHVlLFxuICAgIHRhcmdldC5zZWxlY3Rpb25FbmQsXG4gICAgdHJpZ2dlcnNcbiAgKTtcbiAgY29uc3QgY29udmVydGVkVGV4dCA9IHRvS2FuYSh0ZXh0VG9Db252ZXJ0LCBvcHRpb25zLCBtYXApO1xuICBjb25zdCBjaGFuZ2VkID0gdGV4dFRvQ29udmVydCAhPT0gY29udmVydGVkVGV4dDtcblxuICBpZiAoY2hhbmdlZCkge1xuICAgIGNvbnN0IG5ld0N1cnNvciA9IGhlYWQubGVuZ3RoICsgY29udmVydGVkVGV4dC5sZW5ndGg7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBoZWFkICsgY29udmVydGVkVGV4dCArIHRhaWw7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdGFyZ2V0LnZhbHVlID0gbmV3VmFsdWU7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgcHJldklucHV0ID0gbmV3VmFsdWU7XG5cbiAgICBpZiAodGFpbC5sZW5ndGgpIHtcbiAgICAgIC8vIHB1c2ggbGF0ZXIgb24gZXZlbnQgbG9vcCAob3RoZXJ3aXNlIG1pZC10ZXh0IGluc2VydGlvbiBjYW4gYmUgMSBjaGFyIHRvbyBmYXIgdG8gdGhlIHJpZ2h0KVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0YXJnZXQuc2V0U2VsZWN0aW9uUmFuZ2UobmV3Q3Vyc29yLCBuZXdDdXJzb3IpLCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0LnNldFNlbGVjdGlvblJhbmdlKG5ld0N1cnNvciwgbmV3Q3Vyc29yKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgcHJldklucHV0ID0gdGFyZ2V0LnZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkNvbXBvc2l0aW9uKHsgdHlwZSwgdGFyZ2V0LCBkYXRhIH0pIHtcbiAgLy8gbmF2aWdhdG9yLnBsYXRmb3JtIGlzIG5vdCAxMDAlIHJlbGlhYmxlIGZvciBzaW5nbGluZyBvdXQgYWxsIE9TLFxuICAvLyBidXQgZm9yIGRldGVybWluaW5nIGRlc2t0b3AgXCJNYWMgT1NcIiBpdCBpcyBlZmZlY3RpdmUgZW5vdWdoLlxuICBjb25zdCBpc01hY09TID0gL01hYy8udGVzdCh3aW5kb3cubmF2aWdhdG9yICYmIHdpbmRvdy5uYXZpZ2F0b3IucGxhdGZvcm0pO1xuICAvLyBXZSBkb24ndCB3YW50IHRvIGlnbm9yZSBvbiBBbmRyb2lkOlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vV2FuaUthbmkvV2FuYUthbmEvaXNzdWVzLzgyXG4gIC8vIEJ1dCBNYWNPUyBJTUUgYXV0by1jbG9zZXMgaWYgd2UgZG9uJ3QgaWdub3JlOlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vV2FuaUthbmkvV2FuYUthbmEvaXNzdWVzLzcxXG4gIC8vIE90aGVyIHBsYXRmb3JtIEphcGFuZXNlIElNRXMgcGFzcyB0aHJvdWdoIGhhcHBpbHlcbiAgaWYgKGlzTWFjT1MpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2NvbXBvc2l0aW9udXBkYXRlJyAmJiBpc0phcGFuZXNlKGRhdGEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIHRhcmdldC5kYXRhc2V0Lmlnbm9yZUNvbXBvc2l0aW9uID0gJ3RydWUnO1xuICAgIH1cblxuICAgIGlmICh0eXBlID09PSAnY29tcG9zaXRpb25lbmQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIHRhcmdldC5kYXRhc2V0Lmlnbm9yZUNvbXBvc2l0aW9uID0gJ2ZhbHNlJztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYWNrTGlzdGVuZXJzKGlkLCBpbnB1dEhhbmRsZXIsIGNvbXBvc2l0aW9uSGFuZGxlcikge1xuICBMSVNURU5FUlMgPSBMSVNURU5FUlMuY29uY2F0KHtcbiAgICBpZCxcbiAgICBpbnB1dEhhbmRsZXIsXG4gICAgY29tcG9zaXRpb25IYW5kbGVyLFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVudHJhY2tMaXN0ZW5lcnMoeyBpZDogdGFyZ2V0SWQgfSkge1xuICBMSVNURU5FUlMgPSBMSVNURU5FUlMuZmlsdGVyKCh7IGlkIH0pID0+IGlkICE9PSB0YXJnZXRJZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTGlzdGVuZXJzKGVsKSB7XG4gIHJldHVybiAoXG4gICAgZWwgJiYgTElTVEVORVJTLmZpbmQoKHsgaWQgfSkgPT4gaWQgPT09IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS13YW5ha2FuYS1pZCcpKVxuICApO1xufVxuXG4vLyBIYW5kbGUgbm9uLXRlcm1pbmFsIGluc2VydGVkIGlucHV0IGNvbnZlcnNpb246XG4vLyB8IC0+IOOCj3wgLT4g44KP44GzfCAtPiDjgo9844GzIC0+IOOCj3N844GzIC0+IOOCj3NofOOBsyAtPiDjgo9zaGl844GzIC0+IOOCj+OBl3zjgbNcbi8vIG9yIG11bHRpcGxlIGFtYmlndW91cyBwb3NpdGlvbmluZyAodG8gc2VsZWN0IHdoaWNoIFwic1wiIHRvIHdvcmsgZnJvbSlcbi8vIOOBk3PjgZNzfOOBk3PjgZMgLT4g44GTc+OBk3NvfOOBk3PjgZMgLT4g44GTc+OBk+OBnXzjgZNz44GTXG5leHBvcnQgZnVuY3Rpb24gc3BsaXRJbnB1dCh0ZXh0ID0gJycsIGN1cnNvciA9IDAsIHRyaWdnZXJzID0gW10pIHtcbiAgbGV0IGhlYWQ7XG4gIGxldCB0b0NvbnZlcnQ7XG4gIGxldCB0YWlsO1xuXG4gIGlmIChjdXJzb3IgPT09IDAgJiYgdHJpZ2dlcnMuaW5jbHVkZXModGV4dFswXSkpIHtcbiAgICBbaGVhZCwgdG9Db252ZXJ0LCB0YWlsXSA9IHdvcmtGcm9tU3RhcnQodGV4dCwgdHJpZ2dlcnMpO1xuICB9IGVsc2UgaWYgKGN1cnNvciA+IDApIHtcbiAgICBbaGVhZCwgdG9Db252ZXJ0LCB0YWlsXSA9IHdvcmtCYWNrd2FyZHModGV4dCwgY3Vyc29yKTtcbiAgfSBlbHNlIHtcbiAgICBbaGVhZCwgdG9Db252ZXJ0XSA9IHRha2VXaGlsZUFuZFNsaWNlKFxuICAgICAgdGV4dCxcbiAgICAgIChjaGFyKSA9PiAhdHJpZ2dlcnMuaW5jbHVkZXMoY2hhcilcbiAgICApO1xuICAgIFt0b0NvbnZlcnQsIHRhaWxdID0gdGFrZVdoaWxlQW5kU2xpY2UoXG4gICAgICB0b0NvbnZlcnQsXG4gICAgICAoY2hhcikgPT4gIWlzSmFwYW5lc2UoY2hhcilcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIFtoZWFkLCB0b0NvbnZlcnQsIHRhaWxdO1xufVxuXG5mdW5jdGlvbiB3b3JrRnJvbVN0YXJ0KHRleHQsIGNhdGFseXN0Q2hhcnMpIHtcbiAgcmV0dXJuIFtcbiAgICAnJyxcbiAgICAuLi50YWtlV2hpbGVBbmRTbGljZShcbiAgICAgIHRleHQsXG4gICAgICAoY2hhcikgPT4gY2F0YWx5c3RDaGFycy5pbmNsdWRlcyhjaGFyKSB8fCAhaXNKYXBhbmVzZShjaGFyLCAvWzAtOV0vKVxuICAgICksXG4gIF07XG59XG5cbmZ1bmN0aW9uIHdvcmtCYWNrd2FyZHModGV4dCA9ICcnLCBzdGFydEluZGV4ID0gMCkge1xuICBjb25zdCBbdG9Db252ZXJ0LCBoZWFkXSA9IHRha2VXaGlsZUFuZFNsaWNlKFxuICAgIFsuLi50ZXh0LnNsaWNlKDAsIHN0YXJ0SW5kZXgpXS5yZXZlcnNlKCksXG4gICAgKGNoYXIpID0+ICFpc0phcGFuZXNlKGNoYXIpXG4gICk7XG4gIHJldHVybiBbXG4gICAgaGVhZC5yZXZlcnNlKCkuam9pbignJyksXG4gICAgdG9Db252ZXJ0XG4gICAgICAuc3BsaXQoJycpXG4gICAgICAucmV2ZXJzZSgpXG4gICAgICAuam9pbignJyksXG4gICAgdGV4dC5zbGljZShzdGFydEluZGV4KSxcbiAgXTtcbn1cblxuZnVuY3Rpb24gdGFrZVdoaWxlQW5kU2xpY2Uoc291cmNlID0ge30sIHByZWRpY2F0ZSA9ICh4KSA9PiAhIXgpIHtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGNvbnN0IHsgbGVuZ3RoIH0gPSBzb3VyY2U7XG4gIGxldCBpID0gMDtcbiAgd2hpbGUgKGkgPCBsZW5ndGggJiYgcHJlZGljYXRlKHNvdXJjZVtpXSwgaSkpIHtcbiAgICByZXN1bHQucHVzaChzb3VyY2VbaV0pO1xuICAgIGkgKz0gMTtcbiAgfVxuICByZXR1cm4gW3Jlc3VsdC5qb2luKCcnKSwgc291cmNlLnNsaWNlKGkpXTtcbn1cbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5jb25zdCBvbklucHV0ID0gKHsgdGFyZ2V0OiB7IHZhbHVlLCBzZWxlY3Rpb25TdGFydCwgc2VsZWN0aW9uRW5kIH0gfSkgPT4gY29uc29sZS5sb2coJ2lucHV0OicsIHsgdmFsdWUsIHNlbGVjdGlvblN0YXJ0LCBzZWxlY3Rpb25FbmQgfSk7XG5jb25zdCBvbkNvbXBvc2l0aW9uU3RhcnQgPSAoKSA9PiBjb25zb2xlLmxvZygnY29tcG9zaXRpb25zdGFydCcpO1xuY29uc3Qgb25Db21wb3NpdGlvblVwZGF0ZSA9ICh7XG4gIHRhcmdldDogeyB2YWx1ZSwgc2VsZWN0aW9uU3RhcnQsIHNlbGVjdGlvbkVuZCB9LFxuICBkYXRhLFxufSkgPT4gY29uc29sZS5sb2coJ2NvbXBvc2l0aW9udXBkYXRlJywge1xuICBkYXRhLFxuICB2YWx1ZSxcbiAgc2VsZWN0aW9uU3RhcnQsXG4gIHNlbGVjdGlvbkVuZCxcbn0pO1xuY29uc3Qgb25Db21wb3NpdGlvbkVuZCA9ICgpID0+IGNvbnNvbGUubG9nKCdjb21wb3NpdGlvbmVuZCcpO1xuXG5jb25zdCBldmVudHMgPSB7XG4gIGlucHV0OiBvbklucHV0LFxuICBjb21wb3NpdGlvbnN0YXJ0OiBvbkNvbXBvc2l0aW9uU3RhcnQsXG4gIGNvbXBvc2l0aW9udXBkYXRlOiBvbkNvbXBvc2l0aW9uVXBkYXRlLFxuICBjb21wb3NpdGlvbmVuZDogb25Db21wb3NpdGlvbkVuZCxcbn07XG5cbmV4cG9ydCBjb25zdCBhZGREZWJ1Z0xpc3RlbmVycyA9IChpbnB1dCkgPT4ge1xuICBPYmplY3QuZW50cmllcyhldmVudHMpLmZvckVhY2goKFtldmVudCwgaGFuZGxlcl0pID0+IGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlRGVidWdMaXN0ZW5lcnMgPSAoaW5wdXQpID0+IHtcbiAgT2JqZWN0LmVudHJpZXMoZXZlbnRzKS5mb3JFYWNoKChbZXZlbnQsIGhhbmRsZXJdKSA9PiBpbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKVxuICApO1xufTtcbiIsICJpbXBvcnQgeyBtYWtlT25JbnB1dCwgb25Db21wb3NpdGlvbiwgdHJhY2tMaXN0ZW5lcnMgfSBmcm9tICcuL3V0aWxzL2RvbSc7XG5pbXBvcnQgeyBhZGREZWJ1Z0xpc3RlbmVycyB9IGZyb20gJy4vdXRpbHMvbG9nSW5wdXRFdmVudHMnO1xuXG5jb25zdCBFTEVNRU5UUyA9IFsnVEVYVEFSRUEnLCAnSU5QVVQnXTtcblxubGV0IGlkQ291bnRlciA9IDA7XG5jb25zdCBuZXdJZCA9ICgpID0+IHtcbiAgaWRDb3VudGVyICs9IDE7XG4gIHJldHVybiBgJHtEYXRlLm5vdygpfSR7aWRDb3VudGVyfWA7XG59O1xuXG4vKipcbiAqIEJpbmRzIGV2ZW50TGlzdGVuZXIgZm9yICdpbnB1dCcgZXZlbnRzIHRvIGFuIGlucHV0IGZpZWxkIHRvIGF1dG9tYWdpY2FsbHkgcmVwbGFjZSB2YWx1ZXMgd2l0aCBrYW5hXG4gKiBDYW4gcGFzcyBgeyBJTUVNb2RlOiAndG9IaXJhZ2FuYScgfHwgJ3RvS2F0YWthbmEnIH1gIHRvIGVuZm9yY2Uga2FuYSBjb252ZXJzaW9uIHR5cGVcbiAqIEBwYXJhbSAge0hUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50fSBlbGVtZW50IHRleHRhcmVhLCBpbnB1dFt0eXBlPVwidGV4dFwiXSBldGNcbiAqIEBwYXJhbSAge0RlZmF1bHRPcHRpb25zfSBbb3B0aW9ucz1kZWZhdWx0T3B0aW9uc10gZGVmYXVsdHMgdG8geyBJTUVNb2RlOiB0cnVlIH0gdXNpbmcgYHRvS2FuYWBcbiAqIEBleGFtcGxlXG4gKiBiaW5kKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteUlucHV0JykpO1xuICovXG5mdW5jdGlvbiBiaW5kKGVsZW1lbnQgPSB7fSwgb3B0aW9ucyA9IHt9LCBkZWJ1ZyA9IGZhbHNlKSB7XG4gIGlmICghRUxFTUVOVFMuaW5jbHVkZXMoZWxlbWVudC5ub2RlTmFtZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgRWxlbWVudCBwcm92aWRlZCB0byBXYW5ha2FuYSBiaW5kKCkgd2FzIG5vdCBhIHZhbGlkIGlucHV0IG9yIHRleHRhcmVhIGVsZW1lbnQuXFxuIFJlY2VpdmVkOiAoJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgZWxlbWVudFxuICAgICAgKX0pYFxuICAgICk7XG4gIH1cbiAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLXdhbmFrYW5hLWlkJykpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3Qgb25JbnB1dCA9IG1ha2VPbklucHV0KG9wdGlvbnMpO1xuICBjb25zdCBpZCA9IG5ld0lkKCk7XG4gIGNvbnN0IGF0dHJpYnV0ZXMgPSBbXG4gICAgeyBuYW1lOiAnZGF0YS13YW5ha2FuYS1pZCcsIHZhbHVlOiBpZCB9LFxuICAgIHsgbmFtZTogJ2xhbmcnLCB2YWx1ZTogJ2phJyB9LFxuICAgIHsgbmFtZTogJ2F1dG9DYXBpdGFsaXplJywgdmFsdWU6ICdub25lJyB9LFxuICAgIHsgbmFtZTogJ2F1dG9Db3JyZWN0JywgdmFsdWU6ICdvZmYnIH0sXG4gICAgeyBuYW1lOiAnYXV0b0NvbXBsZXRlJywgdmFsdWU6ICdvZmYnIH0sXG4gICAgeyBuYW1lOiAnc3BlbGxDaGVjaycsIHZhbHVlOiAnZmFsc2UnIH0sXG4gIF07XG4gIGNvbnN0IHByZXZpb3VzQXR0cmlidXRlcyA9IHt9O1xuICBhdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgIHByZXZpb3VzQXR0cmlidXRlc1thdHRyaWJ1dGUubmFtZV0gPSBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUubmFtZSk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLm5hbWUsIGF0dHJpYnV0ZS52YWx1ZSk7XG4gIH0pO1xuICBlbGVtZW50LmRhdGFzZXQucHJldmlvdXNBdHRyaWJ1dGVzID0gSlNPTi5zdHJpbmdpZnkocHJldmlvdXNBdHRyaWJ1dGVzKTtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIG9uSW5wdXQpO1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbXBvc2l0aW9udXBkYXRlJywgb25Db21wb3NpdGlvbik7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29tcG9zaXRpb25lbmQnLCBvbkNvbXBvc2l0aW9uKTtcbiAgdHJhY2tMaXN0ZW5lcnMoaWQsIG9uSW5wdXQsIG9uQ29tcG9zaXRpb24pO1xuICBpZiAoZGVidWcgPT09IHRydWUpIHtcbiAgICBhZGREZWJ1Z0xpc3RlbmVycyhlbGVtZW50KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBiaW5kO1xuIiwgImltcG9ydCB7IGZpbmRMaXN0ZW5lcnMsIHVudHJhY2tMaXN0ZW5lcnMgfSBmcm9tICcuL3V0aWxzL2RvbSc7XG5pbXBvcnQgeyByZW1vdmVEZWJ1Z0xpc3RlbmVycyB9IGZyb20gJy4vdXRpbHMvbG9nSW5wdXRFdmVudHMnO1xuXG4vKipcbiAqIFVuYmluZHMgZXZlbnRMaXN0ZW5lciBmcm9tIGlucHV0IGZpZWxkXG4gKiBAcGFyYW0gIHtIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudH0gZWxlbWVudCB0ZXh0YXJlYSwgaW5wdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVuYmluZChlbGVtZW50LCBkZWJ1ZyA9IGZhbHNlKSB7XG4gIGNvbnN0IGxpc3RlbmVycyA9IGZpbmRMaXN0ZW5lcnMoZWxlbWVudCk7XG4gIGlmIChsaXN0ZW5lcnMgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBFbGVtZW50IHByb3ZpZGVkIHRvIFdhbmFrYW5hIHVuYmluZCgpIGhhZCBubyBsaXN0ZW5lciByZWdpc3RlcmVkLlxcbiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgZWxlbWVudFxuICAgICAgKX1gXG4gICAgKTtcbiAgfVxuICBjb25zdCB7IGlucHV0SGFuZGxlciwgY29tcG9zaXRpb25IYW5kbGVyIH0gPSBsaXN0ZW5lcnM7XG4gIGNvbnN0IGF0dHJpYnV0ZXMgPSBKU09OLnBhcnNlKGVsZW1lbnQuZGF0YXNldC5wcmV2aW91c0F0dHJpYnV0ZXMpO1xuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoYXR0cmlidXRlc1trZXldKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgfVxuICB9KTtcbiAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtcHJldmlvdXMtYXR0cmlidXRlcycpO1xuICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1pZ25vcmUtY29tcG9zaXRpb24nKTtcbiAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIGlucHV0SGFuZGxlcik7XG4gIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29tcG9zaXRpb25zdGFydCcsIGNvbXBvc2l0aW9uSGFuZGxlcik7XG4gIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29tcG9zaXRpb251cGRhdGUnLCBjb21wb3NpdGlvbkhhbmRsZXIpO1xuICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbXBvc2l0aW9uZW5kJywgY29tcG9zaXRpb25IYW5kbGVyKTtcbiAgdW50cmFja0xpc3RlbmVycyhsaXN0ZW5lcnMpO1xuICBpZiAoZGVidWcgPT09IHRydWUpIHtcbiAgICByZW1vdmVEZWJ1Z0xpc3RlbmVycyhlbGVtZW50KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1bmJpbmQ7XG4iLCAiaW1wb3J0IGlzRW1wdHkgZnJvbSAnLi9pc0VtcHR5JztcbmltcG9ydCBpc0NoYXJJblJhbmdlIGZyb20gJy4vaXNDaGFySW5SYW5nZSc7XG5pbXBvcnQgeyBST01BSklfUkFOR0VTIH0gZnJvbSAnLi4vY29uc3RhbnRzLnRzJztcblxuLyoqXG4gKiBUZXN0cyBhIGNoYXJhY3Rlci4gUmV0dXJucyB0cnVlIGlmIHRoZSBjaGFyYWN0ZXIgaXMgW1JvbWFqaV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUm9tYWppKSAoYWxsb3dpbmcgW0hlcGJ1cm4gcm9tYW5pc2F0aW9uXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9IZXBidXJuX3JvbWFuaXphdGlvbikpXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGNoYXIgY2hhcmFjdGVyIHN0cmluZyB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBpc0NoYXJSb21hamkoY2hhciA9ICcnKSB7XG4gIGlmIChpc0VtcHR5KGNoYXIpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBST01BSklfUkFOR0VTLnNvbWUoKFtzdGFydCwgZW5kXSkgPT4gaXNDaGFySW5SYW5nZShjaGFyLCBzdGFydCwgZW5kKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzQ2hhclJvbWFqaTtcbiIsICJpbXBvcnQgdHlwZU9mIGZyb20gJy4vdXRpbHMvdHlwZU9mJztcbmltcG9ydCBpc0VtcHR5IGZyb20gJy4vdXRpbHMvaXNFbXB0eSc7XG5pbXBvcnQgaXNDaGFyUm9tYWppIGZyb20gJy4vdXRpbHMvaXNDaGFyUm9tYWppJztcblxuLyoqXG4gKiBUZXN0IGlmIGBpbnB1dGAgaXMgW1JvbWFqaV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUm9tYWppKSAoYWxsb3dpbmcgW0hlcGJ1cm4gcm9tYW5pc2F0aW9uXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9IZXBidXJuX3JvbWFuaXphdGlvbikpXG4gKiBAcGFyYW0gIHtTdHJpbmd9IFtpbnB1dD0nJ10gdGV4dFxuICogQHBhcmFtICB7UmVnRXhwfSBbYWxsb3dlZF0gYWRkaXRpb25hbCB0ZXN0IGFsbG93ZWQgdG8gcGFzcyBmb3IgZWFjaCBjaGFyXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIFtSb21hamldKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1JvbWFqaSlcbiAqIEBleGFtcGxlXG4gKiBpc1JvbWFqaSgnVMWNa3nFjSBhbmQgxYxzYWthJylcbiAqIC8vID0+IHRydWVcbiAqIGlzUm9tYWppKCcxMmEqYiZjLWQnKVxuICogLy8gPT4gdHJ1ZVxuICogaXNSb21hamkoJ+OBguOCokEnKVxuICogLy8gPT4gZmFsc2VcbiAqIGlzUm9tYWppKCfjgYrpoZjjgYQnKVxuICogLy8gPT4gZmFsc2VcbiAqIGlzUm9tYWppKCdh77yBYiZj44O8ZCcpIC8vIFplbmtha3UgcHVuY3R1YXRpb24gZmFpbHNcbiAqIC8vID0+IGZhbHNlXG4gKiBpc1JvbWFqaSgnYe+8gWImY+ODvGQnLCAvW++8geODvF0vKVxuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1JvbWFqaShpbnB1dCA9ICcnLCBhbGxvd2VkKSB7XG4gIGNvbnN0IGF1Z21lbnRlZCA9IHR5cGVPZihhbGxvd2VkKSA9PT0gJ3JlZ2V4cCc7XG4gIHJldHVybiBpc0VtcHR5KGlucHV0KVxuICAgID8gZmFsc2VcbiAgICA6IFsuLi5pbnB1dF0uZXZlcnkoKGNoYXIpID0+IHtcbiAgICAgIGNvbnN0IGlzUm9tYSA9IGlzQ2hhclJvbWFqaShjaGFyKTtcbiAgICAgIHJldHVybiAhYXVnbWVudGVkID8gaXNSb21hIDogaXNSb21hIHx8IGFsbG93ZWQudGVzdChjaGFyKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNSb21hamk7XG4iLCAiaW1wb3J0IHtcbiAgS0FUQUtBTkFfU1RBUlQsXG4gIEtBVEFLQU5BX0VORCxcbn0gZnJvbSAnLi4vY29uc3RhbnRzLnRzJztcblxuaW1wb3J0IGlzQ2hhckluUmFuZ2UgZnJvbSAnLi9pc0NoYXJJblJhbmdlJztcblxuLyoqXG4gKiBUZXN0cyBhIGNoYXJhY3Rlci4gUmV0dXJucyB0cnVlIGlmIHRoZSBjaGFyYWN0ZXIgaXMgW0thdGFrYW5hXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9LYXRha2FuYSkuXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGNoYXIgY2hhcmFjdGVyIHN0cmluZyB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBpc0NoYXJLYXRha2FuYShjaGFyID0gJycpIHtcbiAgcmV0dXJuIGlzQ2hhckluUmFuZ2UoY2hhciwgS0FUQUtBTkFfU1RBUlQsIEtBVEFLQU5BX0VORCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzQ2hhckthdGFrYW5hO1xuIiwgImltcG9ydCBpc0VtcHR5IGZyb20gJy4vaXNFbXB0eSc7XG5pbXBvcnQgaXNDaGFySGlyYWdhbmEgZnJvbSAnLi9pc0NoYXJIaXJhZ2FuYSc7XG5pbXBvcnQgaXNDaGFyS2F0YWthbmEgZnJvbSAnLi9pc0NoYXJLYXRha2FuYSc7XG5cbi8qKlxuICogVGVzdHMgYSBjaGFyYWN0ZXIuIFJldHVybnMgdHJ1ZSBpZiB0aGUgY2hhcmFjdGVyIGlzIFtIaXJhZ2FuYV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSGlyYWdhbmEpIG9yIFtLYXRha2FuYV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvS2F0YWthbmEpLlxuICogQHBhcmFtICB7U3RyaW5nfSBjaGFyIGNoYXJhY3RlciBzdHJpbmcgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNDaGFyS2FuYShjaGFyID0gJycpIHtcbiAgaWYgKGlzRW1wdHkoY2hhcikpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGlzQ2hhckhpcmFnYW5hKGNoYXIpIHx8IGlzQ2hhckthdGFrYW5hKGNoYXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc0NoYXJLYW5hO1xuIiwgImltcG9ydCBpc0VtcHR5IGZyb20gJy4vdXRpbHMvaXNFbXB0eSc7XG5pbXBvcnQgaXNDaGFyS2FuYSBmcm9tICcuL3V0aWxzL2lzQ2hhckthbmEnO1xuXG4vKipcbiAqIFRlc3QgaWYgYGlucHV0YCBpcyBbS2FuYV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvS2FuYSkgKFtLYXRha2FuYV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvS2F0YWthbmEpIGFuZC9vciBbSGlyYWdhbmFdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0hpcmFnYW5hKSlcbiAqIEBwYXJhbSAge1N0cmluZ30gW2lucHV0PScnXSB0ZXh0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGFsbCBbS2FuYV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvS2FuYSlcbiAqIEBleGFtcGxlXG4gKiBpc0thbmEoJ+OBgicpXG4gKiAvLyA9PiB0cnVlXG4gKiBpc0thbmEoJ+OCoicpXG4gKiAvLyA9PiB0cnVlXG4gKiBpc0thbmEoJ+OBguODvOOCoicpXG4gKiAvLyA9PiB0cnVlXG4gKiBpc0thbmEoJ0EnKVxuICogLy8gPT4gZmFsc2VcbiAqIGlzS2FuYSgn44GCQeOCoicpXG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0thbmEoaW5wdXQgPSAnJykge1xuICBpZiAoaXNFbXB0eShpbnB1dCkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIFsuLi5pbnB1dF0uZXZlcnkoaXNDaGFyS2FuYSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzS2FuYTtcbiIsICJpbXBvcnQgaXNFbXB0eSBmcm9tICcuL3V0aWxzL2lzRW1wdHknO1xuaW1wb3J0IGlzQ2hhckhpcmFnYW5hIGZyb20gJy4vdXRpbHMvaXNDaGFySGlyYWdhbmEnO1xuXG4vKipcbiAqIFRlc3QgaWYgYGlucHV0YCBpcyBbSGlyYWdhbmFdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0hpcmFnYW5hKVxuICogQHBhcmFtICB7U3RyaW5nfSBbaW5wdXQ9JyddIHRleHRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYWxsIFtIaXJhZ2FuYV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSGlyYWdhbmEpXG4gKiBAZXhhbXBsZVxuICogaXNIaXJhZ2FuYSgn44GS44O844KAJylcbiAqIC8vID0+IHRydWVcbiAqIGlzSGlyYWdhbmEoJ0EnKVxuICogLy8gPT4gZmFsc2VcbiAqIGlzSGlyYWdhbmEoJ+OBguOCoicpXG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0hpcmFnYW5hKGlucHV0ID0gJycpIHtcbiAgaWYgKGlzRW1wdHkoaW5wdXQpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBbLi4uaW5wdXRdLmV2ZXJ5KGlzQ2hhckhpcmFnYW5hKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNIaXJhZ2FuYTtcbiIsICJpbXBvcnQgaXNFbXB0eSBmcm9tICcuL3V0aWxzL2lzRW1wdHknO1xuaW1wb3J0IGlzQ2hhckthdGFrYW5hIGZyb20gJy4vdXRpbHMvaXNDaGFyS2F0YWthbmEnO1xuXG4vKipcbiAqIFRlc3QgaWYgYGlucHV0YCBpcyBbS2F0YWthbmFdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0thdGFrYW5hKVxuICogQHBhcmFtICB7U3RyaW5nfSBbaW5wdXQ9JyddIHRleHRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYWxsIFtLYXRha2FuYV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvS2F0YWthbmEpXG4gKiBAZXhhbXBsZVxuICogaXNLYXRha2FuYSgn44Ky44O844OgJylcbiAqIC8vID0+IHRydWVcbiAqIGlzS2F0YWthbmEoJ+OBgicpXG4gKiAvLyA9PiBmYWxzZVxuICogaXNLYXRha2FuYSgnQScpXG4gKiAvLyA9PiBmYWxzZVxuICogaXNLYXRha2FuYSgn44GC44KiJylcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzS2F0YWthbmEoaW5wdXQgPSAnJykge1xuICBpZiAoaXNFbXB0eShpbnB1dCkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIFsuLi5pbnB1dF0uZXZlcnkoaXNDaGFyS2F0YWthbmEpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc0thdGFrYW5hO1xuIiwgImltcG9ydCBpc0VtcHR5IGZyb20gJy4vaXNFbXB0eSc7XG5pbXBvcnQgeyBLQU5KSV9JVEVSQVRJT05fTUFSSyB9IGZyb20gJy4uL2NvbnN0YW50cy50cyc7XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGNoYXIgaXMgJ+OAhSdcbiAqIEBwYXJhbSAge1N0cmluZ30gY2hhciB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBpc0NoYXJJdGVyYXRpb25NYXJrKGNoYXIgPSAnJykge1xuICBpZiAoaXNFbXB0eShjaGFyKSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gY2hhci5jaGFyQ29kZUF0KDApID09PSBLQU5KSV9JVEVSQVRJT05fTUFSSztcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNDaGFySXRlcmF0aW9uTWFyaztcbiIsICJpbXBvcnQgeyBLQU5KSV9TVEFSVCwgS0FOSklfRU5EIH0gZnJvbSAnLi4vY29uc3RhbnRzLnRzJztcblxuaW1wb3J0IGlzQ2hhckluUmFuZ2UgZnJvbSAnLi9pc0NoYXJJblJhbmdlJztcbmltcG9ydCBpc0NoYXJJdGVyYXRpb25NYXJrIGZyb20gJy4vaXNDaGFySXRlcmF0aW9uTWFyayc7XG4vKipcbiAqIFRlc3RzIGEgY2hhcmFjdGVyLiBSZXR1cm5zIHRydWUgaWYgdGhlIGNoYXJhY3RlciBpcyBhIENKSyBpZGVvZ3JhcGggKGthbmppKS5cbiAqIEBwYXJhbSAge1N0cmluZ30gY2hhciBjaGFyYWN0ZXIgc3RyaW5nIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzQ2hhckthbmppKGNoYXIgPSAnJykge1xuICByZXR1cm4gaXNDaGFySW5SYW5nZShjaGFyLCBLQU5KSV9TVEFSVCwgS0FOSklfRU5EKSB8fCBpc0NoYXJJdGVyYXRpb25NYXJrKGNoYXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc0NoYXJLYW5qaTtcbiIsICJpbXBvcnQgaXNFbXB0eSBmcm9tICcuL3V0aWxzL2lzRW1wdHknO1xuaW1wb3J0IGlzQ2hhckthbmppIGZyb20gJy4vdXRpbHMvaXNDaGFyS2FuamknO1xuXG4vKipcbiAqIFRlc3RzIGlmIGBpbnB1dGAgaXMgW0thbmppXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9LYW5qaSkgKFtKYXBhbmVzZSBDSksgaWRlb2dyYXBoc10oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ0pLX1VuaWZpZWRfSWRlb2dyYXBocykpXG4gKiBAcGFyYW0gIHtTdHJpbmd9IFtpbnB1dD0nJ10gdGV4dFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBhbGwgW0thbmppXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9LYW5qaSlcbiAqIEBleGFtcGxlXG4gKiBpc0thbmppKCfliIAnKVxuICogLy8gPT4gdHJ1ZVxuICogaXNLYW5qaSgn5YiH6IW5JylcbiAqIC8vID0+IHRydWVcbiAqIGlzS2FuamkoJ+WLouOBhCcpXG4gKiAvLyA9PiBmYWxzZVxuICogaXNLYW5qaSgn44GCQeOCoicpXG4gKiAvLyA9PiBmYWxzZVxuICogaXNLYW5qaSgn8J+QuCcpXG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0thbmppKGlucHV0ID0gJycpIHtcbiAgaWYgKGlzRW1wdHkoaW5wdXQpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBbLi4uaW5wdXRdLmV2ZXJ5KGlzQ2hhckthbmppKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNLYW5qaTtcbiIsICJpbXBvcnQgaXNLYW5qaSBmcm9tICcuL2lzS2FuamknO1xuaW1wb3J0IGlzSGlyYWdhbmEgZnJvbSAnLi9pc0hpcmFnYW5hJztcbmltcG9ydCBpc0thdGFrYW5hIGZyb20gJy4vaXNLYXRha2FuYSc7XG5pbXBvcnQgaXNSb21hamkgZnJvbSAnLi9pc1JvbWFqaSc7XG5cbi8qKlxuICogVGVzdCBpZiBgaW5wdXRgIGNvbnRhaW5zIGEgbWl4IG9mIFtSb21hamldKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1JvbWFqaSkgKmFuZCogW0thbmFdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0thbmEpLCBkZWZhdWx0cyB0byBwYXNzIHRocm91Z2ggW0thbmppXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9LYW5qaSlcbiAqIEBwYXJhbSAge1N0cmluZ30gaW5wdXQgdGV4dFxuICogQHBhcmFtICB7eyBwYXNzS2Fuamk6IEJvb2xlYW59fSBbb3B0aW9ucz17IHBhc3NLYW5qaTogdHJ1ZSB9XSBvcHRpb25hbCBjb25maWcgdG8gcGFzcyB0aHJvdWdoIGthbmppXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIG1peGVkXG4gKiBAZXhhbXBsZVxuICogaXNNaXhlZCgnQWLjgYLjgqInKSlcbiAqIC8vID0+IHRydWVcbiAqIGlzTWl4ZWQoJ+OBiuiFuUEnKSkgLy8gaWdub3JlcyBrYW5qaSBieSBkZWZhdWx0XG4gKiAvLyA9PiB0cnVlXG4gKiBpc01peGVkKCfjgYrohblBJywgeyBwYXNzS2Fuamk6IGZhbHNlIH0pKVxuICogLy8gPT4gZmFsc2VcbiAqIGlzTWl4ZWQoJ2FiJykpXG4gKiAvLyA9PiBmYWxzZVxuICogaXNNaXhlZCgn44GC44KiJykpXG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc01peGVkKGlucHV0ID0gJycsIG9wdGlvbnMgPSB7IHBhc3NLYW5qaTogdHJ1ZSB9KSB7XG4gIGNvbnN0IGNoYXJzID0gWy4uLmlucHV0XTtcbiAgbGV0IGhhc0thbmppID0gZmFsc2U7XG4gIGlmICghb3B0aW9ucy5wYXNzS2FuamkpIHtcbiAgICBoYXNLYW5qaSA9IGNoYXJzLnNvbWUoaXNLYW5qaSk7XG4gIH1cbiAgcmV0dXJuIChjaGFycy5zb21lKGlzSGlyYWdhbmEpIHx8IGNoYXJzLnNvbWUoaXNLYXRha2FuYSkpICYmIGNoYXJzLnNvbWUoaXNSb21hamkpICYmICFoYXNLYW5qaTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNNaXhlZDtcbiIsICJpbXBvcnQgeyBLQVRBS0FOQV9TVEFSVCwgSElSQUdBTkFfU1RBUlQgfSBmcm9tICcuLi9jb25zdGFudHMudHMnO1xuXG5pbXBvcnQgaXNDaGFyTG9uZ0Rhc2ggZnJvbSAnLi9pc0NoYXJMb25nRGFzaCc7XG5pbXBvcnQgaXNDaGFyU2xhc2hEb3QgZnJvbSAnLi9pc0NoYXJTbGFzaERvdCc7XG5pbXBvcnQgaXNDaGFyS2F0YWthbmEgZnJvbSAnLi9pc0NoYXJLYXRha2FuYSc7XG5jb25zdCBpc0NoYXJJbml0aWFsTG9uZ0Rhc2ggPSAoY2hhciwgaW5kZXgpID0+IGlzQ2hhckxvbmdEYXNoKGNoYXIpICYmIGluZGV4IDwgMTtcbmNvbnN0IGlzQ2hhcklubmVyTG9uZ0Rhc2ggPSAoY2hhciwgaW5kZXgpID0+IGlzQ2hhckxvbmdEYXNoKGNoYXIpICYmIGluZGV4ID4gMDtcbmNvbnN0IGlzS2FuYUFzU3ltYm9sID0gKGNoYXIpID0+IFsn44O2JywgJ+ODtSddLmluY2x1ZGVzKGNoYXIpO1xuY29uc3QgTE9OR19WT1dFTFMgPSB7XG4gIGE6ICfjgYInLFxuICBpOiAn44GEJyxcbiAgdTogJ+OBhicsXG4gIGU6ICfjgYgnLFxuICBvOiAn44GGJyxcbn07XG5cbi8vIGluamVjdCB0b1JvbWFqaSB0byBhdm9pZCBjaXJjdWxhciBkZXBlbmRlbmN5IGJldHdlZW4gdG9Sb21hamkgPC0+IGthdGFrYW5hVG9IaXJhZ2FuYVxuZnVuY3Rpb24ga2F0YWthbmFUb0hpcmFnYW5hKFxuICBpbnB1dCA9ICcnLFxuICB0b1JvbWFqaSxcbiAgeyBpc0Rlc3RpbmF0aW9uUm9tYWppLCBjb252ZXJ0TG9uZ1Zvd2VsTWFyayB9ID0ge31cbikge1xuICBsZXQgcHJldmlvdXNLYW5hID0gJyc7XG5cbiAgcmV0dXJuIGlucHV0XG4gICAgLnNwbGl0KCcnKVxuICAgIC5yZWR1Y2UoKGhpcmEsIGNoYXIsIGluZGV4KSA9PiB7XG4gICAgICAvLyBTaG9ydCBjaXJjdWl0IHRvIGF2b2lkIGluY29ycmVjdCBjb2Rlc2hpZnQgZm9yICfjg7wnIGFuZCAn44O7J1xuICAgICAgaWYgKFxuICAgICAgICBpc0NoYXJTbGFzaERvdChjaGFyKVxuICAgICAgICB8fCBpc0NoYXJJbml0aWFsTG9uZ0Rhc2goY2hhciwgaW5kZXgpXG4gICAgICAgIHx8IGlzS2FuYUFzU3ltYm9sKGNoYXIpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGhpcmEuY29uY2F0KGNoYXIpO1xuICAgICAgfVxuXG4gICAgICAvLyBUcmFuc2Zvcm0gbG9uZyB2b3dlbHM6ICfjgqrjg7wnIHRvICfjgYrjgYYnXG4gICAgICBpZiAoXG4gICAgICAgIGNvbnZlcnRMb25nVm93ZWxNYXJrXG4gICAgICAgICYmIHByZXZpb3VzS2FuYVxuICAgICAgICAmJiBpc0NoYXJJbm5lckxvbmdEYXNoKGNoYXIsIGluZGV4KVxuICAgICAgKSB7XG4gICAgICAgIC8vIFRyYW5zZm9ybSBwcmV2aW91c0thbmEgYmFjayB0byByb21hamksIGFuZCBzbGljZSBvZmYgdGhlIHZvd2VsXG4gICAgICAgIGNvbnN0IHJvbWFqaSA9IHRvUm9tYWppKHByZXZpb3VzS2FuYSkuc2xpY2UoLTEpO1xuICAgICAgICAvLyBIb3dldmVyLCBlbnN1cmUgJ+OCquODvCcgPT4gJ+OBiuOBiicgPT4gJ29vJyBpZiB0aGlzIGlzIGEgdHJhbnNmb3JtIG9uIHRoZSB3YXkgdG8gcm9tYWppXG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0NoYXJLYXRha2FuYShpbnB1dFtpbmRleCAtIDFdKVxuICAgICAgICAgICYmIHJvbWFqaSA9PT0gJ28nXG4gICAgICAgICAgJiYgaXNEZXN0aW5hdGlvblJvbWFqaVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gaGlyYS5jb25jYXQoJ+OBiicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoaXJhLmNvbmNhdChMT05HX1ZPV0VMU1tyb21hamldKTtcbiAgICAgICAgLy8gVHJhbnNmb3JtIGFsbCBvdGhlciBjaGFyc1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzQ2hhckxvbmdEYXNoKGNoYXIpICYmIGlzQ2hhckthdGFrYW5hKGNoYXIpKSB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBjaGFyLmNoYXJDb2RlQXQoMCkgKyAoSElSQUdBTkFfU1RBUlQgLSBLQVRBS0FOQV9TVEFSVCk7XG4gICAgICAgIGNvbnN0IGhpcmFDaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKTtcbiAgICAgICAgcHJldmlvdXNLYW5hID0gaGlyYUNoYXI7XG4gICAgICAgIHJldHVybiBoaXJhLmNvbmNhdChoaXJhQ2hhcik7XG4gICAgICB9XG5cbiAgICAgIC8vIFBhc3Mgbm9uIGthdGFrYW5hIGNoYXJzIHRocm91Z2hcbiAgICAgIHByZXZpb3VzS2FuYSA9ICcnO1xuICAgICAgcmV0dXJuIGhpcmEuY29uY2F0KGNoYXIpO1xuICAgIH0sIFtdKVxuICAgIC5qb2luKCcnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQga2F0YWthbmFUb0hpcmFnYW5hO1xuIiwgImltcG9ydCB7IHRyYW5zZm9ybSwgZ2V0U3ViVHJlZU9mIH0gZnJvbSAnLi9rYW5hTWFwcGluZyc7XG5pbXBvcnQgeyBST01BTklaQVRJT05TIH0gZnJvbSAnLi4vY29uc3RhbnRzLnRzJztcblxubGV0IGthbmFUb0hlcGJ1cm5NYXAgPSBudWxsO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCBCQVNJQ19ST01BSkkgPSB7XG4gIOOBgjonYScsICAgIOOBhDonaScsICAg44GGOid1JywgICDjgYg6J2UnLCAgICDjgYo6J28nLFxuICDjgYs6J2thJywgICDjgY06J2tpJywgIOOBjzona3UnLCAg44GROidrZScsICAg44GTOidrbycsXG4gIOOBlTonc2EnLCAgIOOBlzonc2hpJywg44GZOidzdScsICDjgZs6J3NlJywgICDjgZ06J3NvJyxcbiAg44GfOid0YScsICAg44GhOidjaGknLCDjgaQ6J3RzdScsIOOBpjondGUnLCAgIOOBqDondG8nLFxuICDjgao6J25hJywgICDjgas6J25pJywgIOOBrDonbnUnLCAg44GtOiduZScsICAg44GuOidubycsXG4gIOOBrzonaGEnLCAgIOOBsjonaGknLCAg44G1OidmdScsICDjgbg6J2hlJywgICDjgbs6J2hvJyxcbiAg44G+OidtYScsICAg44G/OidtaScsICDjgoA6J211JywgIOOCgTonbWUnLCAgIOOCgjonbW8nLFxuICDjgok6J3JhJywgICDjgoo6J3JpJywgIOOCizoncnUnLCAg44KMOidyZScsICAg44KNOidybycsXG4gIOOChDoneWEnLCAgIOOChjoneXUnLCAg44KIOid5bycsXG4gIOOCjzond2EnLCAgIOOCkDond2knLCAg44KROid3ZScsICDjgpI6J3dvJyxcbiAg44KTOiAnbicsXG4gIOOBjDonZ2EnLCAgIOOBjjonZ2knLCAg44GQOidndScsICDjgZI6J2dlJywgICDjgZQ6J2dvJyxcbiAg44GWOid6YScsICAg44GYOidqaScsICDjgZo6J3p1JywgIOOBnDonemUnLCAgIOOBnjonem8nLFxuICDjgaA6J2RhJywgICDjgaI6J2ppJywgIOOBpTonenUnLCAg44GnOidkZScsICAg44GpOidkbycsXG4gIOOBsDonYmEnLCAgIOOBszonYmknLCAg44G2OididScsICDjgbk6J2JlJywgICDjgbw6J2JvJyxcbiAg44GxOidwYScsICAg44G0OidwaScsICDjgbc6J3B1JywgIOOBujoncGUnLCAgIOOBvToncG8nLFxuICDjgpTjgYE6J3ZhJywg44KU44GDOid2aScsIOOClDondnUnLCAg44KU44GHOid2ZScsIOOClOOBiTondm8nLFxufTtcbi8qIGVzbGludC1lbmFibGUgICovXG5cbmNvbnN0IFNQRUNJQUxfU1lNQk9MUyA9IHtcbiAgJ+OAgic6ICcuJyxcbiAgJ+OAgSc6ICcsJyxcbiAgJ++8mic6ICc6JyxcbiAgJ+ODuyc6ICcvJyxcbiAgJ++8gSc6ICchJyxcbiAgJ++8nyc6ICc/JyxcbiAgJ+OAnCc6ICd+JyxcbiAgJ+ODvCc6ICctJyxcbiAgJ+OAjCc6ICfigJgnLFxuICAn44CNJzogJ+KAmScsXG4gICfjgI4nOiAn4oCcJyxcbiAgJ+OAjyc6ICfigJ0nLFxuICAn77y7JzogJ1snLFxuICAn77y9JzogJ10nLFxuICAn77yIJzogJygnLFxuICAn77yJJzogJyknLFxuICAn772bJzogJ3snLFxuICAn772dJzogJ30nLFxuICAn44CAJzogJyAnLFxufTtcblxuLy8g44KT44GEIC0+IG4naVxuY29uc3QgQU1CSUdVT1VTX1ZPV0VMUyA9IFsn44GCJywgJ+OBhCcsICfjgYYnLCAn44GIJywgJ+OBiicsICfjgoQnLCAn44KGJywgJ+OCiCddO1xuY29uc3QgU01BTExfWSA9IHsg44KDOiAneWEnLCDjgoU6ICd5dScsIOOChzogJ3lvJyB9O1xuY29uc3QgU01BTExfWV9FWFRSQSA9IHsg44GDOiAneWknLCDjgYc6ICd5ZScgfTtcbmNvbnN0IFNNQUxMX0FJVUVPID0ge1xuICDjgYE6ICdhJyxcbiAg44GDOiAnaScsXG4gIOOBhTogJ3UnLFxuICDjgYc6ICdlJyxcbiAg44GJOiAnbycsXG59O1xuY29uc3QgWU9PTl9LQU5BID0gW1xuICAn44GNJyxcbiAgJ+OBqycsXG4gICfjgbInLFxuICAn44G/JyxcbiAgJ+OCiicsXG4gICfjgY4nLFxuICAn44GzJyxcbiAgJ+OBtCcsXG4gICfjgpQnLFxuICAn44GPJyxcbiAgJ+OBtScsXG5dO1xuY29uc3QgWU9PTl9FWENFUFRJT05TID0ge1xuICDjgZc6ICdzaCcsXG4gIOOBoTogJ2NoJyxcbiAg44GYOiAnaicsXG4gIOOBojogJ2onLFxufTtcbmNvbnN0IFNNQUxMX0tBTkEgPSB7XG4gIOOBozogJycsXG4gIOOCgzogJ3lhJyxcbiAg44KFOiAneXUnLFxuICDjgoc6ICd5bycsXG4gIOOBgTogJ2EnLFxuICDjgYM6ICdpJyxcbiAg44GFOiAndScsXG4gIOOBhzogJ2UnLFxuICDjgYk6ICdvJyxcbn07XG5cbi8vIGdvaW5nIHdpdGggdGhlIGludHVpdGl2ZSAoeWV0IGluY29ycmVjdCkgc29sdXRpb24gd2hlcmUg44Gj44KEIC0+IHl5YSBhbmQg44Gj44GDIC0+IGlpXG4vLyBpbiBvdGhlciB3b3JkcywganVzdCBhc3N1bWUgdGhlIHNva3VvbiBjb3VsZCBoYXZlIGJlZW4gYXBwbGllZCB0byBhbnl0aGluZ1xuY29uc3QgU09LVU9OX1dISVRFTElTVCA9IHtcbiAgYjogJ2InLFxuICBjOiAndCcsXG4gIGQ6ICdkJyxcbiAgZjogJ2YnLFxuICBnOiAnZycsXG4gIGg6ICdoJyxcbiAgajogJ2onLFxuICBrOiAnaycsXG4gIG06ICdtJyxcbiAgcDogJ3AnLFxuICBxOiAncScsXG4gIHI6ICdyJyxcbiAgczogJ3MnLFxuICB0OiAndCcsXG4gIHY6ICd2JyxcbiAgdzogJ3cnLFxuICB4OiAneCcsXG4gIHo6ICd6Jyxcbn07XG5cbmZ1bmN0aW9uIGdldEthbmFUb0hlcGJ1cm5UcmVlKCkge1xuICBpZiAoa2FuYVRvSGVwYnVybk1hcCA9PSBudWxsKSB7XG4gICAga2FuYVRvSGVwYnVybk1hcCA9IGNyZWF0ZUthbmFUb0hlcGJ1cm5NYXAoKTtcbiAgfVxuICByZXR1cm4ga2FuYVRvSGVwYnVybk1hcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEthbmFUb1JvbWFqaVRyZWUocm9tYW5pemF0aW9uKSB7XG4gIHN3aXRjaCAocm9tYW5pemF0aW9uKSB7XG4gICAgY2FzZSBST01BTklaQVRJT05TLkhFUEJVUk46XG4gICAgICByZXR1cm4gZ2V0S2FuYVRvSGVwYnVyblRyZWUoKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHt9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUthbmFUb0hlcGJ1cm5NYXAoKSB7XG4gIGNvbnN0IHJvbWFqaVRyZWUgPSB0cmFuc2Zvcm0oQkFTSUNfUk9NQUpJKTtcblxuICBjb25zdCBzdWJ0cmVlT2YgPSAoc3RyaW5nKSA9PiBnZXRTdWJUcmVlT2Yocm9tYWppVHJlZSwgc3RyaW5nKTtcbiAgY29uc3Qgc2V0VHJhbnMgPSAoc3RyaW5nLCB0cmFuc2xpdGVyYXRpb24pID0+IHtcbiAgICBzdWJ0cmVlT2Yoc3RyaW5nKVsnJ10gPSB0cmFuc2xpdGVyYXRpb247XG4gIH07XG5cbiAgT2JqZWN0LmVudHJpZXMoU1BFQ0lBTF9TWU1CT0xTKS5mb3JFYWNoKChbanN5bWJvbCwgc3ltYm9sXSkgPT4ge1xuICAgIHN1YnRyZWVPZihqc3ltYm9sKVsnJ10gPSBzeW1ib2w7XG4gIH0pO1xuXG4gIFsuLi5PYmplY3QuZW50cmllcyhTTUFMTF9ZKSwgLi4uT2JqZWN0LmVudHJpZXMoU01BTExfQUlVRU8pXS5mb3JFYWNoKFxuICAgIChbcm9tYSwga2FuYV0pID0+IHtcbiAgICAgIHNldFRyYW5zKHJvbWEsIGthbmEpO1xuICAgIH1cbiAgKTtcblxuICAvLyDjgY3jgoMgLT4ga3lhXG4gIFlPT05fS0FOQS5mb3JFYWNoKChrYW5hKSA9PiB7XG4gICAgY29uc3QgZmlyc3RSb21hamlDaGFyID0gc3VidHJlZU9mKGthbmEpWycnXVswXTtcbiAgICBPYmplY3QuZW50cmllcyhTTUFMTF9ZKS5mb3JFYWNoKChbeUthbmEsIHlSb21hXSkgPT4ge1xuICAgICAgc2V0VHJhbnMoa2FuYSArIHlLYW5hLCBmaXJzdFJvbWFqaUNoYXIgKyB5Um9tYSk7XG4gICAgfSk7XG4gICAgLy8g44GN44GDIC0+IGt5aVxuICAgIE9iamVjdC5lbnRyaWVzKFNNQUxMX1lfRVhUUkEpLmZvckVhY2goKFt5S2FuYSwgeVJvbWFdKSA9PiB7XG4gICAgICBzZXRUcmFucyhrYW5hICsgeUthbmEsIGZpcnN0Um9tYWppQ2hhciArIHlSb21hKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgT2JqZWN0LmVudHJpZXMoWU9PTl9FWENFUFRJT05TKS5mb3JFYWNoKChba2FuYSwgcm9tYV0pID0+IHtcbiAgICAvLyDjgZjjgoMgLT4gamFcbiAgICBPYmplY3QuZW50cmllcyhTTUFMTF9ZKS5mb3JFYWNoKChbeUthbmEsIHlSb21hXSkgPT4ge1xuICAgICAgc2V0VHJhbnMoa2FuYSArIHlLYW5hLCByb21hICsgeVJvbWFbMV0pO1xuICAgIH0pO1xuICAgIC8vIOOBmOOBgyAtPiBqeWksIOOBmOOBhyAtPiBqZVxuICAgIHNldFRyYW5zKGAke2thbmF944GDYCwgYCR7cm9tYX15aWApO1xuICAgIHNldFRyYW5zKGAke2thbmF944GHYCwgYCR7cm9tYX1lYCk7XG4gIH0pO1xuXG4gIHJvbWFqaVRyZWVbJ+OBoyddID0gcmVzb2x2ZVRzdShyb21hamlUcmVlKTtcblxuICBPYmplY3QuZW50cmllcyhTTUFMTF9LQU5BKS5mb3JFYWNoKChba2FuYSwgcm9tYV0pID0+IHtcbiAgICBzZXRUcmFucyhrYW5hLCByb21hKTtcbiAgfSk7XG5cbiAgQU1CSUdVT1VTX1ZPV0VMUy5mb3JFYWNoKChrYW5hKSA9PiB7XG4gICAgc2V0VHJhbnMoYOOCkyR7a2FuYX1gLCBgbicke3N1YnRyZWVPZihrYW5hKVsnJ119YCk7XG4gIH0pO1xuXG4gIC8vIE5PVEU6IGNvdWxkIGJlIHJlLWVuYWJsZWQgd2l0aCBhbiBvcHRpb24/XG4gIC8vIC8vIOOCk+OBsCAtPiBtYm9cbiAgLy8gY29uc3QgTEFCSUFMID0gW1xuICAvLyAgICfjgbAnLCAn44GzJywgJ+OBticsICfjgbknLCAn44G8JyxcbiAgLy8gICAn44GxJywgJ+OBtCcsICfjgbcnLCAn44G6JywgJ+OBvScsXG4gIC8vICAgJ+OBvicsICfjgb8nLCAn44KAJywgJ+OCgScsICfjgoInLFxuICAvLyBdO1xuICAvLyBMQUJJQUwuZm9yRWFjaCgoa2FuYSkgPT4ge1xuICAvLyAgIHNldFRyYW5zKGDjgpMke2thbmF9YCwgYG0ke3N1YnRyZWVPZihrYW5hKVsnJ119YCk7XG4gIC8vIH0pO1xuXG4gIHJldHVybiBPYmplY3QuZnJlZXplKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocm9tYWppVHJlZSkpKTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVRzdSh0cmVlKSB7XG4gIHJldHVybiBPYmplY3QuZW50cmllcyh0cmVlKS5yZWR1Y2UoKHRzdVRyZWUsIFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmICgha2V5KSB7XG4gICAgICAvLyB3ZSBoYXZlIHJlYWNoZWQgdGhlIGJvdHRvbSBvZiB0aGlzIGJyYW5jaFxuICAgICAgY29uc3QgY29uc29uYW50ID0gdmFsdWUuY2hhckF0KDApO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICB0c3VUcmVlW2tleV0gPSBPYmplY3Qua2V5cyhTT0tVT05fV0hJVEVMSVNUKS5pbmNsdWRlcyhjb25zb25hbnQpXG4gICAgICAgID8gU09LVU9OX1dISVRFTElTVFtjb25zb25hbnRdICsgdmFsdWVcbiAgICAgICAgOiB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbW9yZSBzdWJ0cmVlc1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICB0c3VUcmVlW2tleV0gPSByZXNvbHZlVHN1KHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRzdVRyZWU7XG4gIH0sIHt9KTtcbn1cbiIsICJpbXBvcnQgbWVtb2l6ZU9uZSBmcm9tICdtZW1vaXplLW9uZSc7XG5pbXBvcnQgeyBkZXF1YWwgfSBmcm9tICdkZXF1YWwnO1xuXG5pbXBvcnQgbWVyZ2VXaXRoRGVmYXVsdE9wdGlvbnMgZnJvbSAnLi91dGlscy9tZXJnZVdpdGhEZWZhdWx0T3B0aW9ucyc7XG5pbXBvcnQga2F0YWthbmFUb0hpcmFnYW5hIGZyb20gJy4vdXRpbHMva2F0YWthbmFUb0hpcmFnYW5hJztcbmltcG9ydCBpc0thdGFrYW5hIGZyb20gJy4vaXNLYXRha2FuYSc7XG5pbXBvcnQgeyBnZXRLYW5hVG9Sb21hamlUcmVlIH0gZnJvbSAnLi91dGlscy9rYW5hVG9Sb21hamlNYXAnO1xuaW1wb3J0IHsgYXBwbHlNYXBwaW5nLCBtZXJnZUN1c3RvbU1hcHBpbmcgfSBmcm9tICcuL3V0aWxzL2thbmFNYXBwaW5nJztcblxuLy8gbWVtb2l6ZSBhbmQgZGVlcGx5IGNvbXBhcmUgYXJncyBzbyB3ZSBvbmx5IHJlY3JlYXRlIHdoZW4gbmVjZXNzYXJ5XG5leHBvcnQgY29uc3QgY3JlYXRlS2FuYVRvUm9tYWppTWFwID0gbWVtb2l6ZU9uZShcbiAgKHJvbWFuaXphdGlvbiwgY3VzdG9tUm9tYWppTWFwcGluZykgPT4ge1xuICAgIGxldCBtYXAgPSBnZXRLYW5hVG9Sb21hamlUcmVlKHJvbWFuaXphdGlvbik7XG5cbiAgICBpZiAoY3VzdG9tUm9tYWppTWFwcGluZykge1xuICAgICAgbWFwID0gbWVyZ2VDdXN0b21NYXBwaW5nKG1hcCwgY3VzdG9tUm9tYWppTWFwcGluZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hcDtcbiAgfSxcbiAgZGVxdWFsXG4pO1xuXG4vKipcbiAqIENvbnZlcnQga2FuYSB0byByb21hamlcbiAqIEBwYXJhbSAge1N0cmluZ30ga2FuYSB0ZXh0IGlucHV0XG4gKiBAcGFyYW0gIHtEZWZhdWx0T3B0aW9uc30gW29wdGlvbnM9ZGVmYXVsdE9wdGlvbnNdXG4gKiBAcGFyYW0gIHtPYmplY3QuPHN0cmluZywgc3RyaW5nPn0gW21hcF0gY3VzdG9tIG1hcHBpbmdcbiAqIEByZXR1cm4ge1N0cmluZ30gY29udmVydGVkIHRleHRcbiAqIEBleGFtcGxlXG4gKiB0b1JvbWFqaSgn44Gy44KJ44GM44Gq44CA44Kr44K/44Kr44OKJylcbiAqIC8vID0+ICdoaXJhZ2FuYSBrYXRha2FuYSdcbiAqIHRvUm9tYWppKCfjgZLjg7zjgoDjgIDjgrLjg7zjg6AnKVxuICogLy8gPT4gJ2dlLW11IGdlZW11J1xuICogdG9Sb21hamkoJ+OBsuOCieOBjOOBquOAgOOCq+OCv+OCq+ODiicsIHsgdXBjYXNlS2F0YWthbmE6IHRydWUgfSlcbiAqIC8vID0+ICdoaXJhZ2FuYSBLQVRBS0FOQSdcbiAqIHRvUm9tYWppKCfjgaTjgZjjgY7jgoonLCB7IGN1c3RvbVJvbWFqaU1hcHBpbmc6IHsg44GYOiAnemknLCDjgaQ6ICd0dScsIOOCijogJ2xpJyB9IH0pO1xuICogLy8gPT4gJ3R1emlnaWxpJ1xuICovXG5leHBvcnQgZnVuY3Rpb24gdG9Sb21hamkoaW5wdXQgPSAnJywgb3B0aW9ucyA9IHt9LCBtYXApIHtcbiAgY29uc3QgY29uZmlnID0gbWVyZ2VXaXRoRGVmYXVsdE9wdGlvbnMob3B0aW9ucyk7XG5cbiAgaWYgKCFtYXApIHtcbiAgICBtYXAgPSBjcmVhdGVLYW5hVG9Sb21hamlNYXAoXG4gICAgICBjb25maWcucm9tYW5pemF0aW9uLFxuICAgICAgY29uZmlnLmN1c3RvbVJvbWFqaU1hcHBpbmdcbiAgICApO1xuICB9XG5cbiAgLy8ganVzdCB0aHJvdyBhd2F5IHRoZSBzdWJzdHJpbmcgaW5kZXggaW5mb3JtYXRpb24gYW5kIHNpbXBseSBjb25jYXRlbmF0ZSBhbGwgdGhlIGthbmFcbiAgcmV0dXJuIHNwbGl0SW50b1JvbWFqaShpbnB1dCwgY29uZmlnLCBtYXApXG4gICAgLm1hcCgocm9tYWppVG9rZW4pID0+IHtcbiAgICAgIGNvbnN0IFtzdGFydCwgZW5kLCByb21hamldID0gcm9tYWppVG9rZW47XG4gICAgICBjb25zdCBtYWtlVXBwZXJDYXNlID0gY29uZmlnLnVwY2FzZUthdGFrYW5hICYmIGlzS2F0YWthbmEoaW5wdXQuc2xpY2Uoc3RhcnQsIGVuZCkpO1xuICAgICAgcmV0dXJuIG1ha2VVcHBlckNhc2UgPyByb21hamkudG9VcHBlckNhc2UoKSA6IHJvbWFqaTtcbiAgICB9KVxuICAgIC5qb2luKCcnKTtcbn1cblxuZnVuY3Rpb24gc3BsaXRJbnRvUm9tYWppKGlucHV0LCBvcHRpb25zLCBtYXApIHtcbiAgaWYgKCFtYXApIHtcbiAgICBtYXAgPSBjcmVhdGVLYW5hVG9Sb21hamlNYXAoXG4gICAgICBvcHRpb25zLnJvbWFuaXphdGlvbixcbiAgICAgIG9wdGlvbnMuY3VzdG9tUm9tYWppTWFwcGluZ1xuICAgICk7XG4gIH1cblxuICBjb25zdCBjb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB7IGlzRGVzdGluYXRpb25Sb21hamk6IHRydWUgfSwgb3B0aW9ucyk7XG5cbiAgcmV0dXJuIGFwcGx5TWFwcGluZyhcbiAgICBrYXRha2FuYVRvSGlyYWdhbmEoaW5wdXQsIHRvUm9tYWppLCBjb25maWcpLFxuICAgIG1hcCxcbiAgICAhb3B0aW9ucy5JTUVNb2RlXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvUm9tYWppO1xuIiwgImltcG9ydCBpc0VtcHR5IGZyb20gJy4vaXNFbXB0eSc7XG5pbXBvcnQgeyBFTl9QVU5DVFVBVElPTl9SQU5HRVMgfSBmcm9tICcuLi9jb25zdGFudHMudHMnO1xuaW1wb3J0IGlzQ2hhckluUmFuZ2UgZnJvbSAnLi9pc0NoYXJJblJhbmdlJztcblxuLyoqXG4gKiBUZXN0cyBhIGNoYXJhY3Rlci4gUmV0dXJucyB0cnVlIGlmIHRoZSBjaGFyYWN0ZXIgaXMgY29uc2lkZXJlZCBFbmdsaXNoIHB1bmN0dWF0aW9uLlxuICogQHBhcmFtICB7U3RyaW5nfSBjaGFyIGNoYXJhY3RlciBzdHJpbmcgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNDaGFyRW5nbGlzaFB1bmN0dWF0aW9uKGNoYXIgPSAnJykge1xuICBpZiAoaXNFbXB0eShjaGFyKSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRU5fUFVOQ1RVQVRJT05fUkFOR0VTLnNvbWUoKFtzdGFydCwgZW5kXSkgPT4gaXNDaGFySW5SYW5nZShjaGFyLCBzdGFydCwgZW5kKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzQ2hhckVuZ2xpc2hQdW5jdHVhdGlvbjtcbiIsICJpbXBvcnQgbWVyZ2VXaXRoRGVmYXVsdE9wdGlvbnMgZnJvbSAnLi91dGlscy9tZXJnZVdpdGhEZWZhdWx0T3B0aW9ucyc7XG5pbXBvcnQga2F0YWthbmFUb0hpcmFnYW5hIGZyb20gJy4vdXRpbHMva2F0YWthbmFUb0hpcmFnYW5hJztcbmltcG9ydCBpc0NoYXJFbmdsaXNoUHVuY3R1YXRpb24gZnJvbSAnLi91dGlscy9pc0NoYXJFbmdsaXNoUHVuY3R1YXRpb24nO1xuaW1wb3J0IGlzUm9tYWppIGZyb20gJy4vaXNSb21hamknO1xuaW1wb3J0IGlzTWl4ZWQgZnJvbSAnLi9pc01peGVkJztcbmltcG9ydCB0b0thbmEgZnJvbSAnLi90b0thbmEnO1xuaW1wb3J0IHRvUm9tYWppIGZyb20gJy4vdG9Sb21hamknO1xuXG4vKipcbiAqIENvbnZlcnQgaW5wdXQgdG8gW0hpcmFnYW5hXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9IaXJhZ2FuYSlcbiAqIEBwYXJhbSAge1N0cmluZ30gW2lucHV0PScnXSB0ZXh0XG4gKiBAcGFyYW0gIHtEZWZhdWx0T3B0aW9uc30gW29wdGlvbnM9ZGVmYXVsdE9wdGlvbnNdXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGNvbnZlcnRlZCB0ZXh0XG4gKiBAZXhhbXBsZVxuICogdG9IaXJhZ2FuYSgndG91a3lvdSwg44Kq44Kq44K144KrJylcbiAqIC8vID0+ICfjgajjgYbjgY3jgofjgYbjgIHjgIDjgYrjgYrjgZXjgYsnXG4gKiB0b0hpcmFnYW5hKCdvbmx5IOOCq+ODiicsIHsgcGFzc1JvbWFqaTogdHJ1ZSB9KVxuICogLy8gPT4gJ29ubHkg44GL44GqJ1xuICogdG9IaXJhZ2FuYSgnd2knKVxuICogLy8gPT4gJ+OBhuOBgydcbiAqIHRvSGlyYWdhbmEoJ3dpJywgeyB1c2VPYnNvbGV0ZUthbmE6IHRydWUgfSlcbiAqIC8vID0+ICfjgpAnXG4gKi9cbmZ1bmN0aW9uIHRvSGlyYWdhbmEoaW5wdXQgPSAnJywgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IGNvbmZpZyA9IG1lcmdlV2l0aERlZmF1bHRPcHRpb25zKG9wdGlvbnMpO1xuICBpZiAoY29uZmlnLnBhc3NSb21hamkpIHtcbiAgICByZXR1cm4ga2F0YWthbmFUb0hpcmFnYW5hKGlucHV0LCB0b1JvbWFqaSwgY29uZmlnKTtcbiAgfVxuXG4gIGlmIChpc01peGVkKGlucHV0LCB7IHBhc3NLYW5qaTogdHJ1ZSB9KSkge1xuICAgIGNvbnN0IGNvbnZlcnRlZEthdGFrYW5hID0ga2F0YWthbmFUb0hpcmFnYW5hKGlucHV0LCB0b1JvbWFqaSwgY29uZmlnKTtcbiAgICByZXR1cm4gdG9LYW5hKGNvbnZlcnRlZEthdGFrYW5hLnRvTG93ZXJDYXNlKCksIGNvbmZpZyk7XG4gIH1cblxuICBpZiAoaXNSb21hamkoaW5wdXQpIHx8IGlzQ2hhckVuZ2xpc2hQdW5jdHVhdGlvbihpbnB1dCkpIHtcbiAgICByZXR1cm4gdG9LYW5hKGlucHV0LnRvTG93ZXJDYXNlKCksIGNvbmZpZyk7XG4gIH1cblxuICByZXR1cm4ga2F0YWthbmFUb0hpcmFnYW5hKGlucHV0LCB0b1JvbWFqaSwgY29uZmlnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9IaXJhZ2FuYTtcbiIsICJpbXBvcnQgbWVyZ2VXaXRoRGVmYXVsdE9wdGlvbnMgZnJvbSAnLi91dGlscy9tZXJnZVdpdGhEZWZhdWx0T3B0aW9ucyc7XG5pbXBvcnQgaGlyYWdhbmFUb0thdGFrYW5hIGZyb20gJy4vdXRpbHMvaGlyYWdhbmFUb0thdGFrYW5hJztcbmltcG9ydCBpc0NoYXJFbmdsaXNoUHVuY3R1YXRpb24gZnJvbSAnLi91dGlscy9pc0NoYXJFbmdsaXNoUHVuY3R1YXRpb24nO1xuaW1wb3J0IHRvS2FuYSBmcm9tICcuL3RvS2FuYSc7XG5pbXBvcnQgaXNSb21hamkgZnJvbSAnLi9pc1JvbWFqaSc7XG5pbXBvcnQgaXNNaXhlZCBmcm9tICcuL2lzTWl4ZWQnO1xuXG4vKipcbiAqIENvbnZlcnQgaW5wdXQgdG8gW0thdGFrYW5hXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9LYXRha2FuYSlcbiAqIEBwYXJhbSAge1N0cmluZ30gW2lucHV0PScnXSB0ZXh0XG4gKiBAcGFyYW0gIHtEZWZhdWx0T3B0aW9uc30gW29wdGlvbnM9ZGVmYXVsdE9wdGlvbnNdXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGNvbnZlcnRlZCB0ZXh0XG4gKiBAZXhhbXBsZVxuICogdG9LYXRha2FuYSgndG91a3lvdSwg44GK44GK44GV44GLJylcbiAqIC8vID0+ICfjg4jjgqbjgq3jg6fjgqbjgIHjgIDjgqrjgqrjgrXjgqsnXG4gKiB0b0thdGFrYW5hKCdvbmx5IOOBi+OBqicsIHsgcGFzc1JvbWFqaTogdHJ1ZSB9KVxuICogLy8gPT4gJ29ubHkg44Kr44OKJ1xuICogdG9LYXRha2FuYSgnd2knKVxuICogLy8gPT4gJ+OCpuOCoydcbiAqIHRvS2F0YWthbmEoJ3dpJywgeyB1c2VPYnNvbGV0ZUthbmE6IHRydWUgfSlcbiAqIC8vID0+ICfjg7AnXG4gKi9cbmZ1bmN0aW9uIHRvS2F0YWthbmEoaW5wdXQgPSAnJywgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IG1lcmdlZE9wdGlvbnMgPSBtZXJnZVdpdGhEZWZhdWx0T3B0aW9ucyhvcHRpb25zKTtcbiAgaWYgKG1lcmdlZE9wdGlvbnMucGFzc1JvbWFqaSkge1xuICAgIHJldHVybiBoaXJhZ2FuYVRvS2F0YWthbmEoaW5wdXQpO1xuICB9XG5cbiAgaWYgKGlzTWl4ZWQoaW5wdXQpIHx8IGlzUm9tYWppKGlucHV0KSB8fCBpc0NoYXJFbmdsaXNoUHVuY3R1YXRpb24oaW5wdXQpKSB7XG4gICAgY29uc3QgaGlyYWdhbmEgPSB0b0thbmEoaW5wdXQudG9Mb3dlckNhc2UoKSwgbWVyZ2VkT3B0aW9ucyk7XG4gICAgcmV0dXJuIGhpcmFnYW5hVG9LYXRha2FuYShoaXJhZ2FuYSk7XG4gIH1cblxuICByZXR1cm4gaGlyYWdhbmFUb0thdGFrYW5hKGlucHV0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9LYXRha2FuYTtcbiIsICJpbXBvcnQgaXNFbXB0eSBmcm9tICcuL2lzRW1wdHknO1xuaW1wb3J0IHsgSkFfUFVOQ1RVQVRJT05fUkFOR0VTIH0gZnJvbSAnLi4vY29uc3RhbnRzLnRzJztcbmltcG9ydCBpc0NoYXJJblJhbmdlIGZyb20gJy4vaXNDaGFySW5SYW5nZSc7XG5pbXBvcnQgaXNDaGFySXRlcmF0aW9uTWFyayBmcm9tICcuL2lzQ2hhckl0ZXJhdGlvbk1hcmsnO1xuXG4vKipcbiAqIFRlc3RzIGEgY2hhcmFjdGVyLiBSZXR1cm5zIHRydWUgaWYgdGhlIGNoYXJhY3RlciBpcyBjb25zaWRlcmVkIEphcGFuZXNlIHB1bmN0dWF0aW9uLlxuICogQHBhcmFtICB7U3RyaW5nfSBjaGFyIGNoYXJhY3RlciBzdHJpbmcgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNDaGFySmFwYW5lc2VQdW5jdHVhdGlvbihjaGFyID0gJycpIHtcbiAgaWYgKGlzRW1wdHkoY2hhcikgfHwgaXNDaGFySXRlcmF0aW9uTWFyayhjaGFyKSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gSkFfUFVOQ1RVQVRJT05fUkFOR0VTLnNvbWUoKFtzdGFydCwgZW5kXSkgPT4gaXNDaGFySW5SYW5nZShjaGFyLCBzdGFydCwgZW5kKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzQ2hhckphcGFuZXNlUHVuY3R1YXRpb247XG4iLCAiaW1wb3J0IGlzRW1wdHkgZnJvbSAnLi91dGlscy9pc0VtcHR5JztcbmltcG9ydCBpc0NoYXJFbmdsaXNoUHVuY3R1YXRpb24gZnJvbSAnLi91dGlscy9pc0NoYXJFbmdsaXNoUHVuY3R1YXRpb24nO1xuaW1wb3J0IGlzQ2hhckphcGFuZXNlUHVuY3R1YXRpb24gZnJvbSAnLi91dGlscy9pc0NoYXJKYXBhbmVzZVB1bmN0dWF0aW9uJztcbmltcG9ydCBpc0NoYXJSb21hamkgZnJvbSAnLi91dGlscy9pc0NoYXJSb21hamknO1xuaW1wb3J0IGlzQ2hhckthbmppIGZyb20gJy4vdXRpbHMvaXNDaGFyS2FuamknO1xuaW1wb3J0IGlzQ2hhckhpcmFnYW5hIGZyb20gJy4vdXRpbHMvaXNDaGFySGlyYWdhbmEnO1xuaW1wb3J0IGlzQ2hhckthdGFrYW5hIGZyb20gJy4vdXRpbHMvaXNDaGFyS2F0YWthbmEnO1xuaW1wb3J0IGlzQ2hhckphcGFuZXNlIGZyb20gJy4vdXRpbHMvaXNDaGFySmFwYW5lc2UnO1xuXG5jb25zdCBpc0NoYXJFblNwYWNlID0gKHgpID0+IHggPT09ICcgJztcbmNvbnN0IGlzQ2hhckphU3BhY2UgPSAoeCkgPT4geCA9PT0gJ+OAgCc7XG5jb25zdCBpc0NoYXJKYU51bSA9ICh4KSA9PiAvW++8kC3vvJldLy50ZXN0KHgpO1xuY29uc3QgaXNDaGFyRW5OdW0gPSAoeCkgPT4gL1swLTldLy50ZXN0KHgpO1xuXG5jb25zdCBUT0tFTl9UWVBFUyA9IHtcbiAgRU46ICdlbicsXG4gIEpBOiAnamEnLFxuICBFTl9OVU06ICdlbmdsaXNoTnVtZXJhbCcsXG4gIEpBX05VTTogJ2phcGFuZXNlTnVtZXJhbCcsXG4gIEVOX1BVTkM6ICdlbmdsaXNoUHVuY3R1YXRpb24nLFxuICBKQV9QVU5DOiAnamFwYW5lc2VQdW5jdHVhdGlvbicsXG4gIEtBTkpJOiAna2FuamknLFxuICBISVJBR0FOQTogJ2hpcmFnYW5hJyxcbiAgS0FUQUtBTkE6ICdrYXRha2FuYScsXG4gIFNQQUNFOiAnc3BhY2UnLFxuICBPVEhFUjogJ290aGVyJyxcbn07XG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuZXhwb3J0IGZ1bmN0aW9uIGdldFR5cGUoaW5wdXQsIGNvbXBhY3QgPSBmYWxzZSkge1xuICBjb25zdCB7XG4gICAgRU4sIEpBLCBFTl9OVU0sIEpBX05VTSwgRU5fUFVOQywgSkFfUFVOQywgS0FOSkksIEhJUkFHQU5BLCBLQVRBS0FOQSwgU1BBQ0UsIE9USEVSLFxuICB9ID0gVE9LRU5fVFlQRVM7XG5cbiAgaWYgKGNvbXBhY3QpIHtcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2UgaXNDaGFySmFOdW0oaW5wdXQpOiByZXR1cm4gT1RIRVI7XG4gICAgICBjYXNlIGlzQ2hhckVuTnVtKGlucHV0KTogcmV0dXJuIE9USEVSO1xuICAgICAgY2FzZSBpc0NoYXJFblNwYWNlKGlucHV0KTogcmV0dXJuIEVOO1xuICAgICAgY2FzZSBpc0NoYXJFbmdsaXNoUHVuY3R1YXRpb24oaW5wdXQpOiByZXR1cm4gT1RIRVI7XG4gICAgICBjYXNlIGlzQ2hhckphU3BhY2UoaW5wdXQpOiByZXR1cm4gSkE7XG4gICAgICBjYXNlIGlzQ2hhckphcGFuZXNlUHVuY3R1YXRpb24oaW5wdXQpOiByZXR1cm4gT1RIRVI7XG4gICAgICBjYXNlIGlzQ2hhckphcGFuZXNlKGlucHV0KTogcmV0dXJuIEpBO1xuICAgICAgY2FzZSBpc0NoYXJSb21hamkoaW5wdXQpOiByZXR1cm4gRU47XG4gICAgICBkZWZhdWx0OiByZXR1cm4gT1RIRVI7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgY2FzZSBpc0NoYXJKYVNwYWNlKGlucHV0KTogcmV0dXJuIFNQQUNFO1xuICAgICAgY2FzZSBpc0NoYXJFblNwYWNlKGlucHV0KTogcmV0dXJuIFNQQUNFO1xuICAgICAgY2FzZSBpc0NoYXJKYU51bShpbnB1dCk6IHJldHVybiBKQV9OVU07XG4gICAgICBjYXNlIGlzQ2hhckVuTnVtKGlucHV0KTogcmV0dXJuIEVOX05VTTtcbiAgICAgIGNhc2UgaXNDaGFyRW5nbGlzaFB1bmN0dWF0aW9uKGlucHV0KTogcmV0dXJuIEVOX1BVTkM7XG4gICAgICBjYXNlIGlzQ2hhckphcGFuZXNlUHVuY3R1YXRpb24oaW5wdXQpOiByZXR1cm4gSkFfUFVOQztcbiAgICAgIGNhc2UgaXNDaGFyS2FuamkoaW5wdXQpOiByZXR1cm4gS0FOSkk7XG4gICAgICBjYXNlIGlzQ2hhckhpcmFnYW5hKGlucHV0KTogcmV0dXJuIEhJUkFHQU5BO1xuICAgICAgY2FzZSBpc0NoYXJLYXRha2FuYShpbnB1dCk6IHJldHVybiBLQVRBS0FOQTtcbiAgICAgIGNhc2UgaXNDaGFySmFwYW5lc2UoaW5wdXQpOiByZXR1cm4gSkE7XG4gICAgICBjYXNlIGlzQ2hhclJvbWFqaShpbnB1dCk6IHJldHVybiBFTjtcbiAgICAgIGRlZmF1bHQ6IHJldHVybiBPVEhFUjtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBTcGxpdHMgaW5wdXQgaW50byBhcnJheSBvZiBzdHJpbmdzIHNlcGFyYXRlZCBieSBvcGluaW9uYXRlZCB0b2tlbiB0eXBlc1xuICogYCdlbicsICdqYScsICdlbmdsaXNoTnVtZXJhbCcsICdqYXBhbmVzZU51bWVyYWwnLCdlbmdsaXNoUHVuY3R1YXRpb24nLCAnamFwYW5lc2VQdW5jdHVhdGlvbicsJ2thbmppJywgJ2hpcmFnYW5hJywgJ2thdGFrYW5hJywgJ3NwYWNlJywgJ290aGVyJ2AuXG4gKiBJZiBgeyBjb21wYWN0OiB0cnVlIH1gIHRoZW4gbWFueSBzYW1lLWxhbmd1YWdlIHRva2VucyBhcmUgY29tYmluZWQgKHNwYWNlcyArIHRleHQsIGthbmppICsga2FuYSwgbnVtZXJhbCArIHB1bmN0dWF0aW9uKS5cbiAqIElmIGB7IGRldGFpbGVkOiB0cnVlIH1gIHRoZW4gcmV0dXJuIGFycmF5IHdpbGwgY29udGFpbiBgeyB0eXBlLCB2YWx1ZSB9YCBpbnN0ZWFkIG9mIGAndmFsdWUnYFxuICogQHBhcmFtICB7U3RyaW5nfSBpbnB1dCB0ZXh0XG4gKiBAcGFyYW0gIHt7Y29tcGFjdDogQm9vbGVhbiB8IHVuZGVmaW5lZCwgZGV0YWlsZWQ6IEJvb2xlYW4gfCB1bmRlZmluZWR9fSBbb3B0aW9ucz17IGNvbXBhY3Q6IGZhbHNlLCBkZXRhaWxlZDogZmFsc2V9XSBvcHRpb25zIHRvIG1vZGlmeSBvdXRwdXQgc3R5bGVcbiAqIEByZXR1cm4geyhTdHJpbmdbXXxBcnJheS48e3R5cGU6IFN0cmluZywgdmFsdWU6IFN0cmluZ30+KX0gdGV4dCBzcGxpdCBpbnRvIHRva2VucyBjb250YWluaW5nIHZhbHVlcywgb3IgZGV0YWlsZWQgb2JqZWN0XG4gKiBAZXhhbXBsZVxuICogdG9rZW5pemUoJ+OBteOBteODleODlScpXG4gKiAvLyBbJ+OBteOBtScsICfjg5Xjg5UnXVxuICpcbiAqIHRva2VuaXplKCfmhJ/jgZgnKVxuICogLy8gWyfmhJ8nLCAn44GYJ11cbiAqXG4gKiB0b2tlbml6ZSgn5Lq644CFJylcbiAqIC8vIFsn5Lq644CFJ11cbiAqXG4gKiB0b2tlbml6ZSgndHJ1bHkg56eB44Gv5oKy44GX44GEJylcbiAqIC8vIFsndHJ1bHknLCAnICcsICfnp4EnLCAn44GvJywgJ+aCsicsICfjgZfjgYQnXVxuICpcbiAqIHRva2VuaXplKCd0cnVseSDnp4Hjga/mgrLjgZfjgYQnLCB7IGNvbXBhY3Q6IHRydWUgfSlcbiAqIC8vIFsndHJ1bHkgJywgJ+engeOBr+aCsuOBl+OBhCddXG4gKlxuICogdG9rZW5pemUoJzVyb21hamkgaGVyZS4uLiE/5Lq644CF5ryi5a2X44Gy44KJ44GM44Gq44Kr44K/44CA44Kr44OK77yU44CM77yz77yo77yp77yv44CN44CC77yBJylcbiAqIC8vIFsgJzUnLCAncm9tYWppJywgJyAnLCAnaGVyZScsICcuLi4hPycsICfkurrjgIXmvKLlrZcnLCAn44Gy44KJ44GM44GqJywgJ+OCq+OCvycsICfjgIAnLCAn44Kr44OKJywgJ++8lCcsICfjgIwnLCAn77yz77yo77yp77yvJywgJ+OAjeOAgu+8gSddXG4gKlxuICogdG9rZW5pemUoJzVyb21hamkgaGVyZS4uLiE/5Lq644CF5ryi5a2X44Gy44KJ44GM44Gq44Kr44K/44CA44Kr44OK77yU44CM77yz77yo77yp77yv44CN44CC77yBJywgeyBjb21wYWN0OiB0cnVlIH0pXG4gKiAvLyBbICc1JywgJ3JvbWFqaSBoZXJlJywgJy4uLiE/JywgJ+S6uuOAhea8ouWtl+OBsuOCieOBjOOBquOCq+OCv+OAgOOCq+ODiicsICfvvJTjgIwnLCAn77yz77yo77yp77yvJywgJ+OAjeOAgu+8gSddXG4gKlxuICogdG9rZW5pemUoJzVyb21hamkgaGVyZS4uLiE/5Lq644CF5ryi5a2X44Gy44KJ44GM44Gq44Kr44K/44CA44Kr44OK77yU44CM77yz77yo77yp77yv44CN44CC77yBINmE2YbYsNmH2KgnLCB7IGRldGFpbGVkOiB0cnVlIH0pXG4gKiAvLyBbXG4gKiAgeyB0eXBlOiAnZW5nbGlzaE51bWVyYWwnLCB2YWx1ZTogJzUnIH0sXG4gKiAgeyB0eXBlOiAnZW4nLCB2YWx1ZTogJ3JvbWFqaScgfSxcbiAqICB7IHR5cGU6ICdzcGFjZScsIHZhbHVlOiAnICcgfSxcbiAqICB7IHR5cGU6ICdlbicsIHZhbHVlOiAnaGVyZScgfSxcbiAqICB7IHR5cGU6ICdlbmdsaXNoUHVuY3R1YXRpb24nLCB2YWx1ZTogJy4uLiE/JyB9LFxuICogIHsgdHlwZTogJ2thbmppJywgdmFsdWU6ICfkurrjgIXmvKLlrZcnIH0sXG4gKiAgeyB0eXBlOiAnaGlyYWdhbmEnLCB2YWx1ZTogJ+OBsuOCieOBjOOBqicgfSxcbiAqICB7IHR5cGU6ICdrYXRha2FuYScsIHZhbHVlOiAn44Kr44K/JyB9LFxuICogIHsgdHlwZTogJ3NwYWNlJywgdmFsdWU6ICfjgIAnIH0sXG4gKiAgeyB0eXBlOiAna2F0YWthbmEnLCB2YWx1ZTogJ+OCq+ODiicgfSxcbiAqICB7IHR5cGU6ICdqYXBhbmVzZU51bWVyYWwnLCB2YWx1ZTogJ++8lCcgfSxcbiAqICB7IHR5cGU6ICdqYXBhbmVzZVB1bmN0dWF0aW9uJywgdmFsdWU6ICfjgIwnIH0sXG4gKiAgeyB0eXBlOiAnamEnLCB2YWx1ZTogJ++8s++8qO+8qe+8rycgfSxcbiAqICB7IHR5cGU6ICdqYXBhbmVzZVB1bmN0dWF0aW9uJywgdmFsdWU6ICfjgI3jgILvvIEnIH0sXG4gKiAgeyB0eXBlOiAnc3BhY2UnLCB2YWx1ZTogJyAnIH0sXG4gKiAgeyB0eXBlOiAnb3RoZXInLCB2YWx1ZTogJ9mE2YbYsNmH2KgnIH0sXG4gKiBdXG4gKlxuICogdG9rZW5pemUoJzVyb21hamkgaGVyZS4uLiE/5Lq644CF5ryi5a2X44Gy44KJ44GM44Gq44Kr44K/44CA44Kr44OK77yU44CM77yz77yo77yp77yv44CN44CC77yBINmE2YbYsNmH2KgnLCB7IGNvbXBhY3Q6IHRydWUsIGRldGFpbGVkOiB0cnVlfSlcbiAqIC8vIFtcbiAqICB7IHR5cGU6ICdvdGhlcicsIHZhbHVlOiAnNScgfSxcbiAqICB7IHR5cGU6ICdlbicsIHZhbHVlOiAncm9tYWppIGhlcmUnIH0sXG4gKiAgeyB0eXBlOiAnb3RoZXInLCB2YWx1ZTogJy4uLiE/JyB9LFxuICogIHsgdHlwZTogJ2phJywgdmFsdWU6ICfkurrjgIXmvKLlrZfjgbLjgonjgYzjgarjgqvjgr/jgIDjgqvjg4onIH0sXG4gKiAgeyB0eXBlOiAnb3RoZXInLCB2YWx1ZTogJ++8lOOAjCcgfSxcbiAqICB7IHR5cGU6ICdqYScsIHZhbHVlOiAn77yz77yo77yp77yvJyB9LFxuICogIHsgdHlwZTogJ290aGVyJywgdmFsdWU6ICfjgI3jgILvvIEnIH0sXG4gKiAgeyB0eXBlOiAnZW4nLCB2YWx1ZTogJyAnIH0sXG4gKiAgeyB0eXBlOiAnb3RoZXInLCB2YWx1ZTogJ9mE2YbYsNmH2KgnIH0sXG4gKl1cbiAqL1xuZnVuY3Rpb24gdG9rZW5pemUoaW5wdXQsIHsgY29tcGFjdCA9IGZhbHNlLCBkZXRhaWxlZCA9IGZhbHNlIH0gPSB7fSkge1xuICBpZiAoaW5wdXQgPT0gbnVsbCB8fCBpc0VtcHR5KGlucHV0KSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBjb25zdCBjaGFycyA9IFsuLi5pbnB1dF07XG4gIGxldCBpbml0aWFsID0gY2hhcnMuc2hpZnQoKTtcbiAgbGV0IHByZXZUeXBlID0gZ2V0VHlwZShpbml0aWFsLCBjb21wYWN0KTtcbiAgaW5pdGlhbCA9IGRldGFpbGVkID8geyB0eXBlOiBwcmV2VHlwZSwgdmFsdWU6IGluaXRpYWwgfSA6IGluaXRpYWw7XG5cbiAgY29uc3QgcmVzdWx0ID0gY2hhcnMucmVkdWNlKFxuICAgICh0b2tlbnMsIGNoYXIpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJUeXBlID0gZ2V0VHlwZShjaGFyLCBjb21wYWN0KTtcbiAgICAgIGNvbnN0IHNhbWVUeXBlID0gY3VyclR5cGUgPT09IHByZXZUeXBlO1xuICAgICAgcHJldlR5cGUgPSBjdXJyVHlwZTtcbiAgICAgIGxldCBuZXdWYWx1ZSA9IGNoYXI7XG5cbiAgICAgIGlmIChzYW1lVHlwZSkge1xuICAgICAgICBuZXdWYWx1ZSA9IChkZXRhaWxlZCA/IHRva2Vucy5wb3AoKS52YWx1ZSA6IHRva2Vucy5wb3AoKSkgKyBuZXdWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRldGFpbGVkXG4gICAgICAgID8gdG9rZW5zLmNvbmNhdCh7IHR5cGU6IGN1cnJUeXBlLCB2YWx1ZTogbmV3VmFsdWUgfSlcbiAgICAgICAgOiB0b2tlbnMuY29uY2F0KG5ld1ZhbHVlKTtcbiAgICB9LFxuICAgIFtpbml0aWFsXVxuICApO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b2tlbml6ZTtcbiIsICJpbXBvcnQgaXNKYXBhbmVzZSBmcm9tICcuL2lzSmFwYW5lc2UnO1xuaW1wb3J0IGlzS2FuYSBmcm9tICcuL2lzS2FuYSc7XG5pbXBvcnQgaXNLYW5qaSBmcm9tICcuL2lzS2FuamknO1xuaW1wb3J0IHRva2VuaXplIGZyb20gJy4vdG9rZW5pemUnO1xuXG5jb25zdCBpc0xlYWRpbmdXaXRob3V0SW5pdGlhbEthbmEgPSAoaW5wdXQsIGxlYWRpbmcpID0+IGxlYWRpbmcgJiYgIWlzS2FuYShpbnB1dFswXSk7XG5jb25zdCBpc1RyYWlsaW5nV2l0aG91dEZpbmFsS2FuYSA9IChpbnB1dCwgbGVhZGluZykgPT4gIWxlYWRpbmcgJiYgIWlzS2FuYShpbnB1dFtpbnB1dC5sZW5ndGggLSAxXSk7XG5jb25zdCBpc0ludmFsaWRNYXRjaGVyID0gKGlucHV0LCBtYXRjaEthbmppKSA9PlxuICAobWF0Y2hLYW5qaSAmJiAhWy4uLm1hdGNoS2FuamldLnNvbWUoaXNLYW5qaSkpIHx8ICghbWF0Y2hLYW5qaSAmJiBpc0thbmEoaW5wdXQpKTtcblxuLyoqXG4gKiBTdHJpcHMgW09rdXJpZ2FuYV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvT2t1cmlnYW5hKVxuICogQHBhcmFtICB7U3RyaW5nfSBpbnB1dCB0ZXh0XG4gKiBAcGFyYW0gIHt7IGxlYWRpbmc6IEJvb2xlYW4gfCB1bmRlZmluZWQsIG1hdGNoS2Fuamk6IHN0cmluZyB8IHVuZGVmaW5lZCB9fSBbb3B0aW9ucz17IGxlYWRpbmc6IGZhbHNlLCBtYXRjaEthbmppOiAnJyB9XSBvcHRpb25hbCBjb25maWdcbiAqIEByZXR1cm4ge1N0cmluZ30gdGV4dCB3aXRoIG9rdXJpZ2FuYSByZW1vdmVkXG4gKiBAZXhhbXBsZVxuICogc3RyaXBPa3VyaWdhbmEoJ+i4j+OBv+i+vOOCgCcpXG4gKiAvLyA9PiAn6LiP44G/6L68J1xuICogc3RyaXBPa3VyaWdhbmEoJ+OBiuelneOBhCcpXG4gKiAvLyA9PiAn44GK56WdJ1xuICogc3RyaXBPa3VyaWdhbmEoJ+OBiuiFuScsIHsgbGVhZGluZzogdHJ1ZSB9KTtcbiAqIC8vID0+ICfohbknXG4gKiBzdHJpcE9rdXJpZ2FuYSgn44G144G/44GT44KAJywgeyBtYXRjaEthbmppOiAn6LiP44G/6L6844KAJyB9KTtcbiAqIC8vID0+ICfjgbXjgb/jgZMnXG4gKiBzdHJpcE9rdXJpZ2FuYSgn44GK44G/44G+44GEJywgeyBtYXRjaEthbmppOiAn44GK56Wd44GEJywgbGVhZGluZzogdHJ1ZSB9KTtcbiAqIC8vID0+ICfjgb/jgb7jgYQnXG4gKi9cbmZ1bmN0aW9uIHN0cmlwT2t1cmlnYW5hKGlucHV0ID0gJycsIHsgbGVhZGluZyA9IGZhbHNlLCBtYXRjaEthbmppID0gJycgfSA9IHt9KSB7XG4gIGlmIChcbiAgICAhaXNKYXBhbmVzZShpbnB1dCkgfHxcbiAgICBpc0xlYWRpbmdXaXRob3V0SW5pdGlhbEthbmEoaW5wdXQsIGxlYWRpbmcpIHx8XG4gICAgaXNUcmFpbGluZ1dpdGhvdXRGaW5hbEthbmEoaW5wdXQsIGxlYWRpbmcpIHx8XG4gICAgaXNJbnZhbGlkTWF0Y2hlcihpbnB1dCwgbWF0Y2hLYW5qaSlcbiAgKSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG5cbiAgY29uc3QgY2hhcnMgPSBtYXRjaEthbmppIHx8IGlucHV0O1xuICBjb25zdCBva3VyaWdhbmFSZWdleCA9IG5ldyBSZWdFeHAoXG4gICAgbGVhZGluZyA/IGBeJHt0b2tlbml6ZShjaGFycykuc2hpZnQoKX1gIDogYCR7dG9rZW5pemUoY2hhcnMpLnBvcCgpfSRgXG4gICk7XG4gIHJldHVybiBpbnB1dC5yZXBsYWNlKG9rdXJpZ2FuYVJlZ2V4LCAnJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmlwT2t1cmlnYW5hO1xuIiwgImV4cG9ydCBmdW5jdGlvbiBkZWRlbnQoXG4gIHRlbXBsOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSB8IHN0cmluZyxcbiAgLi4udmFsdWVzOiB1bmtub3duW11cbik6IHN0cmluZyB7XG4gIGxldCBzdHJpbmdzID0gQXJyYXkuZnJvbSh0eXBlb2YgdGVtcGwgPT09ICdzdHJpbmcnID8gW3RlbXBsXSA6IHRlbXBsKTtcblxuICAvLyAxLiBSZW1vdmUgdHJhaWxpbmcgd2hpdGVzcGFjZS5cbiAgc3RyaW5nc1tzdHJpbmdzLmxlbmd0aCAtIDFdID0gc3RyaW5nc1tzdHJpbmdzLmxlbmd0aCAtIDFdLnJlcGxhY2UoXG4gICAgL1xccj9cXG4oW1xcdCBdKikkLyxcbiAgICAnJyxcbiAgKTtcblxuICAvLyAyLiBGaW5kIGFsbCBsaW5lIGJyZWFrcyB0byBkZXRlcm1pbmUgdGhlIGhpZ2hlc3QgY29tbW9uIGluZGVudGF0aW9uIGxldmVsLlxuICBjb25zdCBpbmRlbnRMZW5ndGhzID0gc3RyaW5ncy5yZWR1Y2UoKGFyciwgc3RyKSA9PiB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHN0ci5tYXRjaCgvXFxuKFtcXHQgXSt8KD8hXFxzKS4pL2cpO1xuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICByZXR1cm4gYXJyLmNvbmNhdChcbiAgICAgICAgbWF0Y2hlcy5tYXAoKG1hdGNoKSA9PiBtYXRjaC5tYXRjaCgvW1xcdCBdL2cpPy5sZW5ndGggPz8gMCksXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9LCA8bnVtYmVyW10+W10pO1xuXG4gIC8vIDMuIFJlbW92ZSB0aGUgY29tbW9uIGluZGVudGF0aW9uIGZyb20gYWxsIHN0cmluZ3MuXG4gIGlmIChpbmRlbnRMZW5ndGhzLmxlbmd0aCkge1xuICAgIGNvbnN0IHBhdHRlcm4gPSBuZXcgUmVnRXhwKGBcXG5bXFx0IF17JHtNYXRoLm1pbiguLi5pbmRlbnRMZW5ndGhzKX19YCwgJ2cnKTtcblxuICAgIHN0cmluZ3MgPSBzdHJpbmdzLm1hcCgoc3RyKSA9PiBzdHIucmVwbGFjZShwYXR0ZXJuLCAnXFxuJykpO1xuICB9XG5cbiAgLy8gNC4gUmVtb3ZlIGxlYWRpbmcgd2hpdGVzcGFjZS5cbiAgc3RyaW5nc1swXSA9IHN0cmluZ3NbMF0ucmVwbGFjZSgvXlxccj9cXG4vLCAnJyk7XG5cbiAgLy8gNS4gUGVyZm9ybSBpbnRlcnBvbGF0aW9uLlxuICBsZXQgc3RyaW5nID0gc3RyaW5nc1swXTtcblxuICB2YWx1ZXMuZm9yRWFjaCgodmFsdWUsIGkpID0+IHtcbiAgICAvLyA1LjEgUmVhZCBjdXJyZW50IGluZGVudGF0aW9uIGxldmVsXG4gICAgY29uc3QgZW5kZW50YXRpb25zID0gc3RyaW5nLm1hdGNoKC8oPzpefFxcbikoICopJC8pXG4gICAgY29uc3QgZW5kZW50YXRpb24gPSBlbmRlbnRhdGlvbnMgPyBlbmRlbnRhdGlvbnNbMV0gOiAnJ1xuICAgIGxldCBpbmRlbnRlZFZhbHVlID0gdmFsdWVcbiAgICAvLyA1LjIgQWRkIGluZGVudGF0aW9uIHRvIHZhbHVlcyB3aXRoIG11bHRpbGluZSBzdHJpbmdzXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuaW5jbHVkZXMoJ1xcbicpKSB7XG4gICAgICBpbmRlbnRlZFZhbHVlID0gU3RyaW5nKHZhbHVlKVxuICAgICAgICAuc3BsaXQoJ1xcbicpXG4gICAgICAgIC5tYXAoKHN0ciwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiBpID09PSAwID8gc3RyIDogYCR7ZW5kZW50YXRpb259JHtzdHJ9YFxuICAgICAgICB9KVxuICAgICAgICAuam9pbignXFxuJyk7XG4gICAgfVxuXG4gICAgc3RyaW5nICs9IGluZGVudGVkVmFsdWUgKyBzdHJpbmdzW2kgKyAxXTtcbiAgfSk7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVkZW50O1xuIiwgImltcG9ydCBmcyBmcm9tIFwibm9kZTpmc1wiO1xuaW1wb3J0IHsgREJfUEFUSCwgU1FMSVRFX1dBU01fUEFUSCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGluaXRTcWxKcywgeyBEYXRhYmFzZSB9IGZyb20gXCJzcWwuanNcIjtcbmltcG9ydCB7IEFjdGlvbiwgQWN0aW9uUGFuZWwsIGNsb3NlTWFpbldpbmRvdywgbGF1bmNoQ29tbWFuZCwgTGF1bmNoUHJvcHMsIExhdW5jaFR5cGUsIExpc3QgfSBmcm9tIFwiQHJheWNhc3QvYXBpXCI7XG5pbXBvcnQgeyBub3JtYWxpemVLYW5hIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCB7IGlzSmFwYW5lc2UsIGlzS2FuYSB9IGZyb20gXCJ3YW5ha2FuYVwiO1xuaW1wb3J0IHsgc2VhcmNoRW5nbGlzaCwgc2VhcmNoS2FuYSwgc2VhcmNoS2FuamkgfSBmcm9tIFwiLi9kaWN0aW9uYXJ5L3NlYXJjaFwiO1xuaW1wb3J0IHsgRGljdGlvbmFyeUVudHJ5LCBEaWN0aW9uYXJ5U2Vuc2UgfSBmcm9tIFwiLi9kaWN0aW9uYXJ5L3R5cGVzXCI7XG5pbXBvcnQgZGVkZW50IGZyb20gXCJ0cy1kZWRlbnRcIjtcblxudHlwZSBGb3JtYXR0ZWRLYW5qaUl0ZW0gPSB7XG4gIGlkOiBzdHJpbmc7XG4gIGthbmE6IHN0cmluZztcbiAga2Fuamk/OiBzdHJpbmc7XG4gIGRlZmluaXRpb24/OiBzdHJpbmc7XG4gIGRldGFpbDogc3RyaW5nO1xufTtcblxudHlwZSBMYXVuY2hDb250ZXh0ID0ge1xuICBxdWVyeT86IHN0cmluZztcbiAgdGV4dD86IHN0cmluZyB8IG51bGw7XG4gIGVycm9yPzogc3RyaW5nO1xufTtcblxuZnVuY3Rpb24gaXNEYlNldHVwKCkge1xuICByZXR1cm4gZnMuZXhpc3RzU3luYyhEQl9QQVRIKTtcbn1cblxubGV0IGRiOiBEYXRhYmFzZSB8IHVuZGVmaW5lZDtcbmFzeW5jIGZ1bmN0aW9uIGdldERiKCkge1xuICBpZiAoZGIpIHJldHVybiBkYjtcblxuICAvLyBTdGFydCBwcm9taXNlcyBpbiBwYXJhbGxlbFxuICBjb25zdCByZWFkV2FzbSA9IGZzLnByb21pc2VzLnJlYWRGaWxlKFNRTElURV9XQVNNX1BBVEgpO1xuICBjb25zdCByZWFkRGIgPSBmcy5wcm9taXNlcy5yZWFkRmlsZShEQl9QQVRIKTtcblxuICBjb25zdCBTUUwgPSBhd2FpdCBpbml0U3FsSnMoeyB3YXNtQmluYXJ5OiBhd2FpdCByZWFkV2FzbSB9KTtcbiAgZGIgPSBuZXcgU1FMLkRhdGFiYXNlKGF3YWl0IHJlYWREYik7XG4gIHJldHVybiBkYjtcbn1cblxuZnVuY3Rpb24gc2VhcmNoKGRiOiBEYXRhYmFzZSwgcXVlcnk6IHN0cmluZykge1xuICBjb25zdCBqYXBhbmVzZVF1ZXJ5ID0gbm9ybWFsaXplS2FuYShxdWVyeSk7XG4gIGlmICghaXNKYXBhbmVzZShqYXBhbmVzZVF1ZXJ5KSkge1xuICAgIHJldHVybiBzZWFyY2hFbmdsaXNoKGRiLCBxdWVyeSk7XG4gIH1cblxuICBpZiAoaXNLYW5hKGphcGFuZXNlUXVlcnkpKSB7XG4gICAgcmV0dXJuIHNlYXJjaEthbmEoZGIsIGphcGFuZXNlUXVlcnkpO1xuICB9XG5cbiAgcmV0dXJuIHNlYXJjaEthbmppKGRiLCBqYXBhbmVzZVF1ZXJ5KTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0S2FuamlJdGVtKGl0ZW06IERpY3Rpb25hcnlFbnRyeSk6IEZvcm1hdHRlZEthbmppSXRlbSB7XG4gIGNvbnN0IGthbmppID0gaXRlbS50ZXJtICE9PSBpdGVtLnJlYWRpbmcgPyBpdGVtLnRlcm0gOiB1bmRlZmluZWQ7XG4gIGNvbnN0IGthbmEgPSBpdGVtLnJlYWRpbmc7XG4gIGNvbnN0IGRlZmluaXRpb24gPSBpdGVtLnNlbnNlcy5hdCgwKT8uZ2xvc3Nlcy5hdCgwKTtcblxuICBsZXQgZ2xvc3NDb3VudCA9IDA7XG4gIGNvbnN0IGZvcm1hdEdsb3NzZXMgPSAoc2Vuc2U6IERpY3Rpb25hcnlTZW5zZSkgPT4ge1xuICAgIGNvbnN0IGZvcm1hdHRlZEdsb3NzZXMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGdsb3NzIG9mIHNlbnNlLmdsb3NzZXMpIHtcbiAgICAgIGdsb3NzQ291bnQgKz0gMTtcbiAgICAgIGZvcm1hdHRlZEdsb3NzZXMucHVzaChgJHtnbG9zc0NvdW50fS4gJHtnbG9zc31gKTtcbiAgICB9XG5cbiAgICBjb25zdCBleGFtcGxlID0gc2Vuc2UuZXhhbXBsZTtcbiAgICByZXR1cm4gZGVkZW50YFxuICAgICAgJHtmb3JtYXR0ZWRHbG9zc2VzLmpvaW4oXCJcXG5cIil9XG4gICAgICAgID4gJHtleGFtcGxlPy5qYXBhbmVzZSB8fCBcIlwifVxuICAgICAgICA+XG4gICAgICAgID4gJHtleGFtcGxlPy5lbmdsaXNoIHx8IFwiXCJ9XG4gICAgYDtcbiAgfTtcblxuICBjb25zdCBmb3JtYXRTZW5zZSA9IChzZW5zZTogRGljdGlvbmFyeVNlbnNlKSA9PiB7XG4gICAgY29uc3QgcG9zID0gc2Vuc2UucGFydE9mU3BlZWNoLmpvaW4oXCIsIFwiKTtcblxuICAgIHJldHVybiBkZWRlbnRgXG4gICAgICAke3BvcyA/IGAjIyMjIyAke3Bvc31gIDogXCJcIn1cbiAgICAgICR7Zm9ybWF0R2xvc3NlcyhzZW5zZSl9XG4gICAgYDtcbiAgfTtcblxuICBjb25zdCBzZW5zZXNNYXJrZG93biA9IGl0ZW0uc2Vuc2VzLm1hcChmb3JtYXRTZW5zZSkuam9pbihcIlxcblxcblwiKTtcblxuICBjb25zdCBkZXRhaWwgPSBkZWRlbnRgXG4gICAgIyMgJHtrYW5qaSB8fCBrYW5hfVxuICAgICR7a2FuamkgPyBrYW5hIDogXCJcIn1cblxuICAgICR7c2Vuc2VzTWFya2Rvd259XG4gIGA7XG5cbiAgcmV0dXJuIHtcbiAgICBpZDogaXRlbS5pZCxcbiAgICBrYW5qaSxcbiAgICBrYW5hLFxuICAgIGRlZmluaXRpb24sXG4gICAgZGV0YWlsLFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRJbml0aWFsUXVlcnkobGF1bmNoQ29udGV4dD86IExhdW5jaENvbnRleHQsIGZhbGxiYWNrVGV4dD86IHN0cmluZykge1xuICByZXR1cm4gbGF1bmNoQ29udGV4dD8ucXVlcnkgPz8gbGF1bmNoQ29udGV4dD8udGV4dD8udHJpbSgpID8/IGZhbGxiYWNrVGV4dCA/PyBcIlwiO1xufVxuXG5mdW5jdGlvbiBoYXNJbnZhbGlkT0NSQ29udGV4dChsYXVuY2hDb250ZXh0PzogTGF1bmNoQ29udGV4dCkge1xuICByZXR1cm4gQm9vbGVhbihsYXVuY2hDb250ZXh0Py5lcnJvciB8fCBsYXVuY2hDb250ZXh0Py50ZXh0ID09PSBudWxsIHx8IGxhdW5jaENvbnRleHQ/LnRleHQ/LnRyaW0oKSA9PT0gXCJcIik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbW1hbmQoeyBsYXVuY2hDb250ZXh0LCBmYWxsYmFja1RleHQgfTogTGF1bmNoUHJvcHM8eyBsYXVuY2hDb250ZXh0PzogTGF1bmNoQ29udGV4dCB9Pikge1xuICBpZiAoaGFzSW52YWxpZE9DUkNvbnRleHQobGF1bmNoQ29udGV4dCkpIHtcbiAgICB2b2lkIGNsb3NlTWFpbldpbmRvdygpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgW2lzU2V0dXBdID0gdXNlU3RhdGUoaXNEYlNldHVwKTtcbiAgaWYgKCFpc1NldHVwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaXN0PlxuICAgICAgICA8TGlzdC5FbXB0eVZpZXdcbiAgICAgICAgICB0aXRsZT1cIkRpY3Rpb25hcnkgbm90IHNldCB1cFwiXG4gICAgICAgICAgZGVzY3JpcHRpb249J1ByZXNzIFwiUmV0dXJuXCIgdG8gc2V0IHVwIHRoZSBkaWN0aW9uYXJ5LidcbiAgICAgICAgICBhY3Rpb25zPXtcbiAgICAgICAgICAgIDxBY3Rpb25QYW5lbD5cbiAgICAgICAgICAgICAgPEFjdGlvblxuICAgICAgICAgICAgICAgIHRpdGxlPVwiVXBkYXRlIERpY3Rpb25hcnlcIlxuICAgICAgICAgICAgICAgIG9uQWN0aW9uPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBsYXVuY2hDb21tYW5kKHsgbmFtZTogXCJ1cGRhdGUtZGljdGlvbmFyeVwiLCB0eXBlOiBMYXVuY2hUeXBlLlVzZXJJbml0aWF0ZWQgfSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQWN0aW9uUGFuZWw+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgPC9MaXN0PlxuICAgICk7XG4gIH1cblxuICBjb25zdCBbZGIsIHNldERiXSA9IHVzZVN0YXRlPERhdGFiYXNlPigpO1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKGdldEluaXRpYWxRdWVyeShsYXVuY2hDb250ZXh0LCBmYWxsYmFja1RleHQpKTtcbiAgY29uc3QgW3Nob3dpbmdEZXRhaWwsIHNldFNob3dpbmdEZXRhaWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0RGIoKS50aGVuKChkYikgPT4gc2V0RGIoZGIpKTtcbiAgICByZXR1cm4gKCkgPT4gZGI/LmNsb3NlKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCByZXN1bHRzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKCFkYiB8fCBxdWVyeS50cmltKCkgPT09IFwiXCIpIHJldHVybiBbXTtcbiAgICBjb25zdCByZXMgPSBzZWFyY2goZGIsIHF1ZXJ5KTtcbiAgICByZXR1cm4gcmVzO1xuICB9LCBbZGIsIHF1ZXJ5XSk7XG5cbiAgY29uc3QgZm9ybWF0dGVkRGF0YSA9IGRiID8gcmVzdWx0cy5tYXAoKGl0ZW0pID0+IGZvcm1hdEthbmppSXRlbShpdGVtKSkgOiBbXTtcblxuICByZXR1cm4gKFxuICAgIDxMaXN0XG4gICAgICBuYXZpZ2F0aW9uVGl0bGU9XCJUcmFuc2xhdGUgSmFwYW5lc2VcIlxuICAgICAgc2VhcmNoQmFyUGxhY2Vob2xkZXI9XCJTZWFyY2ggWW9taWNhc3QuLi5cIlxuICAgICAgc2VhcmNoVGV4dD17cXVlcnl9XG4gICAgICBvblNlYXJjaFRleHRDaGFuZ2U9e3NldFF1ZXJ5fVxuICAgICAgaXNTaG93aW5nRGV0YWlsPXtzaG93aW5nRGV0YWlsfVxuICAgID5cbiAgICAgIHtmb3JtYXR0ZWREYXRhLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICA8TGlzdC5JdGVtXG4gICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgIHRpdGxlPXtpdGVtLmthbmppID8/IGl0ZW0ua2FuYX1cbiAgICAgICAgICBzdWJ0aXRsZT17aXRlbS5rYW5qaSAmJiAhc2hvd2luZ0RldGFpbCA/IGl0ZW0ua2FuYSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICBhY2Nlc3Nvcmllcz17W3sgdGV4dDogaXRlbS5kZWZpbml0aW9uIH1dfVxuICAgICAgICAgIGRldGFpbD17PExpc3QuSXRlbS5EZXRhaWwgbWFya2Rvd249e2l0ZW0uZGV0YWlsfSAvPn1cbiAgICAgICAgICBhY3Rpb25zPXtcbiAgICAgICAgICAgIDxBY3Rpb25QYW5lbD5cbiAgICAgICAgICAgICAgPEFjdGlvbiB0aXRsZT1cIlRvZ2dsZSBEZXRhaWxcIiBvbkFjdGlvbj17KCkgPT4gc2V0U2hvd2luZ0RldGFpbCghc2hvd2luZ0RldGFpbCl9IC8+XG4gICAgICAgICAgICA8L0FjdGlvblBhbmVsPlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvTGlzdD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgcGF0aCBmcm9tIFwibm9kZTpwYXRoXCI7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gXCJAcmF5Y2FzdC9hcGlcIjtcblxuZXhwb3J0IGNvbnN0IERPV05MT0FEX1BBVEggPSBwYXRoLmpvaW4oZW52aXJvbm1lbnQuc3VwcG9ydFBhdGgsIFwiaml0ZW5kZXgteW9taXRhbi56aXBcIik7XG5leHBvcnQgY29uc3QgREJfUEFUSCA9IHBhdGguam9pbihlbnZpcm9ubWVudC5zdXBwb3J0UGF0aCwgXCJqaXRlbmRleC5kYlwiKTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfV0FTTV9QQVRIID0gcGF0aC5qb2luKGVudmlyb25tZW50LmFzc2V0c1BhdGgsIFwic3FsLXdhc20tZnRzNS53YXNtXCIpO1xuIiwgImltcG9ydCB3YW5ha2FuYSBmcm9tIFwid2FuYWthbmFcIjtcblxuLyoqXG4gKiBBIHRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFsIGZvciBTUUwgc3RyaW5ncyB0byBhbGxvdyBmb3IgZm9ybWF0dGluZyBhbmQgc3ludGF4XG4gKiBoaWdobGlnaHRpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcWwoc3RyaW5nczogVGVtcGxhdGVTdHJpbmdzQXJyYXksIC4uLmV4cHI6IHVua25vd25bXSkge1xuICByZXR1cm4gc3RyaW5ncy5tYXAoKHN0ciwgaW5kZXgpID0+IHN0ciArIChleHByLmxlbmd0aCA+IGluZGV4ID8gU3RyaW5nKGV4cHJbaW5kZXhdKSA6IFwiXCIpKS5qb2luKFwiXCIpO1xufVxuXG4vKiogTm9ybWFsaXplcyBhIHJvbWFqaSBvciBrYXRha2FuYSBzdHJpbmcgdG8gaGlyYWdhbmEgZm9yIHNlYXJjaGluZyBhbmQgaW5kZXhpbmcuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplS2FuYSh0ZXh0OiBzdHJpbmcpIHtcbiAgY29uc3QgdHJpbW1lZFRleHQgPSB0ZXh0LnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gd2FuYWthbmEudG9IaXJhZ2FuYSh0cmltbWVkVGV4dCwge1xuICAgIC8vIERvbid0IGNvbnZlcnQgbG9uZyB2b3dlbCBtYXJrcyB0byBoaXJhZ2FuYVxuICAgIC8vIChlLmcuIFx1MzBCMVx1MzBGQ1x1MzBBRCAtPiBcdTMwNTFcdTMwNDhcdTMwNEQuIEluc3RlYWQsIGl0IHNob3VsZCBiZSBcdTMwNTFcdTMwRkNcdTMwNEQpXG4gICAgY29udmVydExvbmdWb3dlbE1hcms6IGZhbHNlLFxuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBEaWN0aW9uYXJ5RW50cnkgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgQmluZFBhcmFtcywgRGF0YWJhc2UgfSBmcm9tIFwic3FsLmpzXCI7XG5pbXBvcnQgeyBzcWwgfSBmcm9tIFwiLi4vdXRpbHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaEthbmEoZGI6IERhdGFiYXNlLCBxdWVyeTogc3RyaW5nKSB7XG4gIHJldHVybiBxdWVyeUVudHJpZXMoXG4gICAgZGIsXG4gICAgc3FsYFxuICAgICAgU0VMRUNUIERJU1RJTkNUIGRhdGEgRlJPTSBlbnRyaWVzIFdIRVJFIGVudHJ5X2lkIElOIChcbiAgICAgICAgU0VMRUNUIGVudHJ5X2lkIEZST00ga2FuYV9pbmRleCBXSEVSRSBrYW5hX3RleHQgTElLRSA6cXVlcnkgTElNSVQgMjBcbiAgICAgIClgLFxuICAgIHsgXCI6cXVlcnlcIjogYCR7cXVlcnl9JWAgfSxcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaEthbmppKGRiOiBEYXRhYmFzZSwgcXVlcnk6IHN0cmluZykge1xuICByZXR1cm4gcXVlcnlFbnRyaWVzKFxuICAgIGRiLFxuICAgIHNxbGBcbiAgICAgIFNFTEVDVCBESVNUSU5DVCBkYXRhIEZST00gZW50cmllcyBXSEVSRSBlbnRyeV9pZCBJTiAoXG4gICAgICAgIFNFTEVDVCBlbnRyeV9pZCBGUk9NIGthbmppX2luZGV4IFdIRVJFIGthbmppX3RleHQgTElLRSA6cXVlcnkgTElNSVQgMjBcbiAgICAgIClgLFxuICAgIHsgXCI6cXVlcnlcIjogYCR7cXVlcnl9JWAgfSxcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaEVuZ2xpc2goZGI6IERhdGFiYXNlLCBxdWVyeTogc3RyaW5nKSB7XG4gIHJldHVybiBxdWVyeUVudHJpZXMoXG4gICAgZGIsXG4gICAgc3FsYFxuICAgICAgU0VMRUNUXG4gICAgICAgIGUuZGF0YSxcbiAgICAgICAgLS0gQm9vc3QgKGxvd2VyIHJhbmspIGZvciBlbnRyaWVzIHdpdGggbWFueSBjb21tb24gZm9ybXMuXG4gICAgICAgIC0tIEJvb3N0IChsb3dlciByYW5rKSBmb3IgZW50cmllcyB3aXRoIGthbmppLlxuICAgICAgICAtLSBQZW5hbGl6ZSAoaGlnaGVyIHJhbmspIGZvciBub24tcHJpbWFyeSBzZW5zZXMuXG4gICAgICAgIE1JTihnZi5yYW5rIC0gY29tbW9uX2Zvcm1zX2NvdW50IC0gZS5oYXNfa2FuamkgKyAoZ2Yuc2Vuc2VfaWR4ICogMC4yKSkgQVMgcmFua1xuICAgICAgRlJPTSBnbG9zc19mdHNfaW5kZXggZ2ZcbiAgICAgIEpPSU4gZW50cmllcyBlIE9OIGdmLmVudHJ5X2lkID0gZS5lbnRyeV9pZFxuICAgICAgV0hFUkUgZ2YuZ2xvc3NfZnRzX2luZGV4IE1BVENIIDpxdWVyeVxuICAgICAgR1JPVVAgQlkgZS5lbnRyeV9pZCAtLSBHZXQgb25lIHJlc3VsdCBwZXIgZGljdGlvbmFyeSBlbnRyeVxuICAgICAgT1JERVIgQlkgcmFuayBBU0MgTElNSVQgMjBcbiAgICBgLFxuICAgIHsgXCI6cXVlcnlcIjogYFwiJHtxdWVyeX1cImAgfSxcbiAgKTtcbn1cblxuZnVuY3Rpb24gcXVlcnlFbnRyaWVzKGRiOiBEYXRhYmFzZSwgc3FsOiBzdHJpbmcsIHBhcmFtcz86IEJpbmRQYXJhbXMpIHtcbiAgY29uc3Qgc3RtdCA9IGRiLnByZXBhcmUoc3FsLCBwYXJhbXMpO1xuICBjb25zdCByZXN1bHRzOiBEaWN0aW9uYXJ5RW50cnlbXSA9IFtdO1xuICB3aGlsZSAoc3RtdC5zdGVwKCkpIHtcbiAgICBjb25zdCByZXN1bHQgPSBzdG10LmdldEFzT2JqZWN0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlc3VsdC5kYXRhIGFzIHN0cmluZykgYXMgRGljdGlvbmFyeUVudHJ5O1xuICAgICAgcmVzdWx0cy5wdXNoKGRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcGFyc2luZyBKU09OOlwiLCBlcnJvcik7XG4gICAgfVxuICB9XG4gIHN0bXQuZnJlZSgpO1xuICByZXR1cm4gcmVzdWx0cztcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUEseUNBQUFBLFVBQUFDLFNBQUE7QUFhQSxRQUFJLG1CQUFtQjtBQUV2QixRQUFJQyxhQUFZLFNBQVUsY0FBYztBQUVwQyxVQUFJLGtCQUFpQjtBQUNuQixlQUFPO0FBQUEsTUFDVDtBQUVBLHlCQUFtQixJQUFJLFFBQVEsU0FBVSxlQUFlLFFBQVE7QUFZNUQsWUFBSSxTQUFTLE9BQU8saUJBQWlCLGNBQWMsZUFBZSxDQUFDO0FBSW5FLFlBQUksMEJBQTBCLE9BQU8sU0FBUztBQUM5QyxlQUFPLFNBQVMsSUFBSSxTQUFVLHNCQUFzQjtBQUNoRCxpQkFBTyxJQUFJLE1BQU0sb0JBQW9CLENBQUM7QUFDdEMsY0FBSSx5QkFBd0I7QUFDMUIsb0NBQXdCLG9CQUFvQjtBQUFBLFVBQzlDO0FBQUEsUUFDSjtBQUVBLGVBQU8sU0FBUyxJQUFJLE9BQU8sU0FBUyxLQUFLLENBQUM7QUFDMUMsZUFBTyxTQUFTLEVBQUUsS0FBSyxXQUFZO0FBRS9CLHdCQUFjLE1BQU07QUFBQSxRQUN4QixDQUFDO0FBa0JELFFBQUFELFVBQVM7QUFJakIsWUFBSTtBQUFFLGNBQUksT0FBTyxVQUFVLGNBQWMsU0FBUyxDQUFDO0FBQUUsWUFBSSxLQUFHLFlBQVUsT0FBTyxRQUFP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QUssRUFBRSxLQUFHLEVBQUMsS0FBSSxFQUFDLE1BQUssRUFBQyxJQUFHLEVBQUUsR0FBRyxJQUFHLElBQUcsRUFBRSxHQUFHLElBQUcsUUFBTyxFQUFFLEdBQUcsUUFBTyxJQUFHLEVBQUUsR0FBRyxJQUFHLFFBQU8sRUFBRSxHQUFHLFFBQU8sUUFBTyxFQUFFLEdBQUcsUUFBTyxPQUFNLEVBQUUsR0FBRyxPQUFNLFNBQVEsRUFBRSxHQUFHLFNBQVEsU0FBUSxFQUFFLEdBQUcsUUFBTyxHQUFFLFFBQU8sRUFBQyxJQUFHLEVBQUUsR0FBRyxHQUFFLEVBQUMsR0FBRSxNQUFLLEVBQUMsTUFBSyxFQUFDLElBQUcsRUFBRSxHQUFHLElBQUcsSUFBRyxFQUFFLEdBQUcsR0FBRSxHQUFFLFFBQU8sRUFBQyxJQUFHLEVBQUUsR0FBRyxJQUFHLE1BQUssRUFBRSxHQUFHLE1BQUssT0FBTSxFQUFFLEdBQUcsT0FBTSxJQUFHLEVBQUUsR0FBRyxJQUFHLElBQUcsRUFBRSxHQUFHLEdBQUUsRUFBQyxHQUFFLE1BQUssRUFBQyxNQUFLLEVBQUMsSUFBRyxFQUFFLEdBQUcsSUFBRyxJQUFHLEVBQUUsR0FBRyxJQUFHLFVBQVMsRUFBRSxHQUFHLFNBQVEsR0FBRSxRQUFPLENBQUMsRUFBQyxHQUFFLElBQUcsRUFBQyxNQUFLLEVBQUMsSUFBRyxFQUFFLEdBQUcsSUFBRyxJQUFHLEVBQUUsR0FBRyxHQUFFLEdBQUUsUUFBTyxHQUFFLEVBQUM7QUFBRyxjQUFFLEdBQUcsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFFLFlBQUUsRUFBRSxJQUFJLEtBQUcsRUFBRSxLQUFHLEVBQUUsR0FBRyxJQUFJLE1BQUssRUFBRSxLQUFHLEVBQUUsR0FBRyxJQUFJLFFBQU8sRUFBRSxLQUFHLENBQUMsS0FBRyxXQUM3ZSxFQUFFLE9BQUssVUFBUSxFQUFFLEtBQUcsRUFBRSxHQUFHLEtBQUssTUFBSyxFQUFFLEtBQUcsRUFBRSxHQUFHLEtBQUssUUFBTyxFQUFFLEtBQUcsR0FBRSxFQUFFLEtBQUcsUUFBTSxXQUFTLEVBQUUsT0FBSyxVQUFRLEVBQUUsS0FBRyxFQUFFLEdBQUcsS0FBSyxNQUFLLEVBQUUsS0FBRyxFQUFFLEdBQUcsS0FBSyxVQUFRLFVBQVEsRUFBRSxPQUFLLFdBQVMsRUFBRSxLQUFHLEVBQUUsR0FBRyxHQUFHLE1BQUssRUFBRSxLQUFHLEVBQUUsR0FBRyxHQUFHO0FBQVEsWUFBRSxRQUFNLEVBQUUsUUFBTSxFQUFFLFFBQU0sS0FBSyxJQUFJO0FBQUUsZ0JBQUksRUFBRSxHQUFHLENBQUMsSUFBRSxHQUFFLEVBQUUsUUFBTSxFQUFFLFFBQU0sRUFBRSxRQUFNLEVBQUU7QUFBTyxpQkFBTztBQUFBLFFBQUMsR0FBRSxHQUFHLEdBQUU7QUFBQyxpQkFBTyxFQUFFLEtBQUcsRUFBRSxHQUFHLFdBQVMsRUFBRSxHQUFHLFNBQVMsR0FBRSxFQUFFLEVBQUUsSUFBRSxJQUFJLFdBQVcsRUFBRSxFQUFFLElBQUUsSUFBSSxXQUFXLENBQUM7QUFBQSxRQUFDLEdBQUUsSUFBRyxFQUFDLEdBQUcsR0FBRTtBQUFDLGNBQUksSUFBRSxDQUFDO0FBQUUsWUFBRSxNQUFJLFVBQVEsRUFBRSxPQUFLLFNBQU8sRUFBRSxLQUFHO0FBQUUsWUFBRSxNQUFJLEVBQUU7QUFBRyxZQUFFLE9BQUssRUFBRTtBQUFLLFlBQUUsUUFBTTtBQUFFLFlBQUUsTUFBSTtBQUFFLFlBQUUsTUFBSTtBQUFFLFlBQUUsT0FDbmYsRUFBRTtBQUFLLFlBQUUsRUFBRSxJQUFJLElBQUUsRUFBRSxPQUFLLE9BQUssV0FBUyxFQUFFLE9BQUssU0FBTyxFQUFFLE9BQUssRUFBRSxLQUFHLFdBQVMsRUFBRSxPQUFLLFNBQU8sRUFBRSxPQUFLLEVBQUUsS0FBSyxTQUFPLEVBQUUsT0FBSztBQUFFLFlBQUUsUUFBTSxJQUFJLEtBQUssRUFBRSxLQUFLO0FBQUUsWUFBRSxRQUFNLElBQUksS0FBSyxFQUFFLEtBQUs7QUFBRSxZQUFFLFFBQU0sSUFBSSxLQUFLLEVBQUUsS0FBSztBQUFFLFlBQUUsVUFBUTtBQUFLLFlBQUUsU0FBTyxLQUFLLEtBQUssRUFBRSxPQUFLLEVB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QUFFO0FBQUUsZ0JBQUksS0FBRztBQUFLLGdCQUFJLEtBQUc7QUFBSyxpQkFBTztBQUFBLFFBQUMsR0FBRSxLQUFHLE1BQUssS0FBRyxDQUFDLEdBQUUsS0FBRyxDQUFDLEdBQUUsS0FBRyxHQUFFLElBQUUsTUFBSyxLQUFHLE9BQUcsS0FBRyxNQUFHLEtBQUcsQ0FBQyxHQUFFLElBQUUsTUFBSztBQUFBLFVBQUMsT0FBSztBQUFBLFVBQWEsWUFBWSxHQUFFO0FBQUMsaUJBQUssS0FBRztBQUFBLFVBQUM7QUFBQSxRQUFDLEdBQUUsS0FBRyxNQUFLO0FBQUEsVUFBQyxLQUFHLENBQUM7QUFBQSxVQUFFLE9BQUs7QUFBQSxVQUFLLElBQUksUUFBTztBQUFDLG1CQUFPLEtBQUssR0FBRztBQUFBLFVBQUs7QUFBQSxVQUFDLElBQUksTUFBTSxHQUFFO0FBQUMsaUJBQUssR0FBRyxRQUNwakI7QUFBQSxVQUFDO0FBQUEsVUFBQyxJQUFJLFdBQVU7QUFBQyxtQkFBTyxLQUFLLEdBQUc7QUFBQSxVQUFRO0FBQUEsVUFBQyxJQUFJLFNBQVMsR0FBRTtBQUFDLGlCQUFLLEdBQUcsV0FBUztBQUFBLFVBQUM7QUFBQSxRQUFDLEdBQUUsS0FBRyxNQUFLO0FBQUEsVUFBQyxLQUFHLENBQUM7QUFBQSxVQUFFLEtBQUcsQ0FBQztBQUFBLFVBQUUsS0FBRztBQUFBLFVBQUssWUFBWSxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsa0JBQUk7QUFBSyxpQkFBSyxTQUFPO0FBQUUsaUJBQUssS0FBRyxFQUFFO0FBQUcsaUJBQUssS0FBRztBQUFLLGlCQUFLLE9BQUs7QUFBRSxpQkFBSyxPQUFLO0FBQUUsaUJBQUssT0FBSztBQUFFLGlCQUFLLFFBQU0sS0FBSyxRQUFNLEtBQUssUUFBTSxLQUFLLElBQUk7QUFBQSxVQUFDO0FBQUEsVUFBQyxJQUFJLE9BQU07QUFBQyxtQkFBTyxTQUFPLEtBQUssT0FBSztBQUFBLFVBQUk7QUFBQSxVQUFDLElBQUksS0FBSyxHQUFFO0FBQUMsZ0JBQUUsS0FBSyxRQUFNLE1BQUksS0FBSyxR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QUFHLEVBQUUsRUFBRSxPQUFLLFFBQU0sRUFBRSxTQUFTLEdBQUcsS0FBRyxFQUFFLEVBQUUsT0FBSyxJQUFJLFFBQU87QUFBQSxVQUFDLE1BQU0sUUFBTztBQUFFLGlCQUFPO0FBQUEsUUFBQztBQUFDLGlCQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsY0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBTztBQUFHLGNBQUc7QUFBQyxtQkFBTyxFQUFFLEdBQUUsQ0FBQyxHQUFFO0FBQUEsVUFBRSxTQUFPLEdBQUU7QUFBQSxVQUFDO0FBQUMsaUJBQU8sR0FBRyxHQUFFLElBQUk7QUFBQSxRQUFDO0FBQUMsaUJBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLGNBQUc7QUFBQyxnQkFBSSxJQUFFLEVBQUUsR0FBRSxDQUFDO0FBQUEsVUFBQyxTQUFPLEdBQUU7QUFBQyxtQkFBTyxFQUFFO0FBQUEsVUFBRTtBQUFDLGNBQUcsSUFBRSxHQUFHLEdBQUUsSUFBSSxFQUFFLFFBQU87QUFBRSxjQUFHLEdBQUU7QUFBQyxnQkFBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBTztBQUFHLGdCQUFHLE1BQUksRUFBRSxVQUFRLFFBQU0sR0FBRyxDQUFDLEVBQUUsUUFBTztBQUFBLFVBQUUsV0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQU87QUFBRyxpQkFBTztBQUFBLFFBQUM7QUFBQyxpQkFBUyxHQUFHLEdBQUU7QUFBQyxjQUFHLENBQUMsRUFBRSxPQUFNLElBQUksRUFBRSxFQUFFO0FBQUUsaUJBQU87QUFBQSxRQUFDO0FBQ3JlLGlCQUFTLEVBQUUsR0FBRTtBQUFDLGNBQUUsR0FBRyxDQUFDO0FBQUUsY0FBRyxDQUFDLEVBQUUsT0FBTSxJQUFJLEVBQUUsQ0FBQztBQUFFLGlCQUFPO0FBQUEsUUFBQztBQUFDLGlCQUFTLEdBQUcsR0FBRSxJQUFFLElBQUc7QUFBQyxjQUFFLE9BQU8sT0FBTyxJQUFJLE1BQUcsQ0FBQztBQUFFLGNBQUcsTUFBSSxFQUFFLElBQUU7QUFBQyxpQkFBSSxJQUFFLEdBQUUsUUFBTSxHQUFFLElBQUksS0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU07QUFBRSxrQkFBTSxJQUFJLEVBQUUsRUFBRTtBQUFBLFVBQUU7QUFBQyxZQUFFLEtBQUc7QUFBRSxpQkFBTyxHQUFHLENBQUMsSUFBRTtBQUFBLFFBQUM7QUFBQyxpQkFBUyxHQUFHLEdBQUUsSUFBRSxJQUFHO0FBQUMsY0FBRSxHQUFHLEdBQUUsQ0FBQztBQUFFLFlBQUUsSUFBSSxLQUFLLENBQUM7QUFBRSxpQkFBTztBQUFBLFFBQUM7QUFBQyxpQkFBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsY0FBSSxJQUFFLEdBQUcsR0FBRztBQUFHLGNBQUUsSUFBRSxJQUFFO0FBQUUsZ0JBQUksRUFBRSxHQUFHO0FBQUcsYUFBRyxDQUFDO0FBQUUsWUFBRSxHQUFFLENBQUM7QUFBQSxRQUFDO0FBQUMsWUFBSSxLQUFHLEVBQUMsS0FBSyxHQUFFO0FBQUMsWUFBRSxLQUFHLEdBQUcsRUFBRSxLQUFLLElBQUksRUFBRTtBQUFHLFlBQUUsR0FBRyxPQUFPLENBQUM7QUFBQSxRQUFDLEdBQUUsS0FBSTtBQUFDLGdCQUFNLElBQUksRUFBRSxFQUFFO0FBQUEsUUFBRSxFQUFDO0FBQUUsaUJBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxhQUFHLENBQUMsSUFBRSxFQUFDLElBQUcsRUFBQztBQUFBLFFBQUM7QUFDaGEsaUJBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxjQUFJLElBQUUsUUFBTTtBQUFFLGNBQUcsS0FBRyxHQUFHLE9BQU0sSUFBSSxFQUFFLEVBQUU7QUFBRSxjQUFHLENBQUMsS0FBRyxHQUFFO0FBQUMsZ0JBQUksSUFBRSxFQUFFLEdBQUUsRUFBQyxJQUFHLE1BQUUsQ0FBQztBQUFFLGdCQUFFLEVBQUU7QUFBSyxnQkFBRSxFQUFFO0FBQUssZ0JBQUcsRUFBRSxHQUFHLE9BQU0sSUFBSSxFQUFFLEVBQUU7QUFBRSxnQkFBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTSxJQUFJLEVBQUUsRUFBRTtBQUFBLFVBQUU7QUFBQyxjQUFFLEVBQUMsTUFBSyxHQUFFLElBQUcsQ0FBQyxHQUFFLElBQUcsR0FBRSxJQUFHLENBQUMsRUFBQztBQUFFLGNBQUUsRUFBRSxHQUFHLENBQUM7QUFBRSxZQUFFLEtBQUc7QUFBRSxZQUFFLE9BQUs7QUFBRSxjQUFFLEtBQUcsSUFBRSxNQUFJLEVBQUUsS0FBRyxHQUFFLEVBQUUsTUFBSSxFQUFFLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFBQSxRQUFFO0FBQUMsaUJBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLGNBQUksSUFBRSxFQUFFLEdBQUUsRUFBQyxRQUFPLEtBQUUsQ0FBQyxFQUFFO0FBQUssY0FBRSxHQUFHLENBQUM7QUFBRSxjQUFHLENBQUMsRUFBRSxPQUFNLElBQUksRUFBRSxFQUFFO0FBQUUsY0FBRyxRQUFNLEtBQUcsU0FBTyxFQUFFLE9BQU0sSUFBSSxFQUFFLEVBQUU7QUFBRSxjQUFJLElBQUUsR0FBRyxHQUFFLENBQUM7QUFBRSxjQUFHLEVBQUUsT0FBTSxJQUFJLEVBQUUsQ0FBQztBQUFFLGNBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxPQUFNLElBQUksRUFBRSxFQUFFO0FBQUUsaUJBQU8sRUFBRSxHQUFHLEdBQUcsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFBLFFBQUM7QUFDcGMsaUJBQVMsR0FBRyxHQUFFLElBQUUsS0FBSTtBQUFDLGlCQUFPLEdBQUcsR0FBRSxJQUFFLE9BQUssT0FBTSxDQUFDO0FBQUEsUUFBQztBQUFDLGlCQUFTLEVBQUUsR0FBRSxJQUFFLEtBQUk7QUFBQyxpQkFBTyxHQUFHLEdBQUUsSUFBRSxPQUFLLE9BQU0sQ0FBQztBQUFBLFFBQUM7QUFBQyxpQkFBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMseUJBQWEsT0FBTyxNQUFJLElBQUUsR0FBRSxJQUFFO0FBQUssYUFBRyxHQUFFLElBQUUsTUFBSyxDQUFDO0FBQUEsUUFBQztBQUFDLGlCQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsY0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU0sSUFBSSxFQUFFLEVBQUU7QUFBRSxjQUFJLElBQUUsRUFBRSxHQUFFLEVBQUMsUUFBTyxLQUFFLENBQUMsRUFBRTtBQUFLLGNBQUcsQ0FBQyxFQUFFLE9BQU0sSUFBSSxFQUFFLEVBQUU7QUFBRSxjQUFFLEdBQUcsQ0FBQztBQUFFLGNBQUksSUFBRSxHQUFHLEdBQUUsQ0FBQztBQUFFLGNBQUcsRUFBRSxPQUFNLElBQUksRUFBRSxDQUFDO0FBQUUsY0FBRyxDQUFDLEVBQUUsR0FBRyxRQUFRLE9BQU0sSUFBSSxFQUFFLEVBQUU7QUFBRSxZQUFFLEdBQUcsUUFBUSxHQUFFLEdBQUUsQ0FBQztBQUFBLFFBQUM7QUFDalcsaUJBQVMsR0FBRyxHQUFFO0FBQUMsY0FBSSxJQUFFLEVBQUUsR0FBRSxFQUFDLFFBQU8sS0FBRSxDQUFDLEVBQUU7QUFBSyxjQUFFLEdBQUcsQ0FBQztBQUFFLGNBQUksSUFBRSxFQUFFLEdBQUUsQ0FBQyxHQUFFLElBQUUsR0FBRyxHQUFFLEdBQUUsSUFBRTtBQUFFLGNBQUcsRUFBRSxPQUFNLElBQUksRUFBRSxDQUFDO0FBQUUsY0FBRyxDQUFDLEVBQUUsR0FBRyxNQUFNLE9BQU0sSUFBSSxFQUFFLEVBQUU7QUFBRSxjQUFHLEVBQUUsR0FBRyxPQUFNLElBQUksRUFBRSxFQUFFO0FBQUUsWUFBRSxHQUFHLE1BQU0sR0FBRSxDQUFDO0FBQUUsYUFBRyxDQUFDO0FBQUEsUUFBQztBQUFDLGlCQUFTLEdBQUcsR0FBRTtBQUFDLGNBQUksSUFBRSxFQUFFLEdBQUUsRUFBQyxRQUFPLEtBQUUsQ0FBQyxFQUFFO0FBQUssY0FBRyxDQUFDLEVBQUUsT0FBTSxJQUFJLEVBQUUsRUFBRTtBQUFFLGNBQUUsR0FBRyxDQUFDO0FBQUUsY0FBSSxJQUFFLEVBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRSxHQUFHLEdBQUUsR0FBRSxLQUFFO0FBQUUsY0FBRyxFQUFFLE9BQU0sSUFBSSxFQUFFLENBQUM7QUFBRSxjQUFHLENBQUMsRUFBRSxHQUFHLE9BQU8sT0FBTSxJQUFJLEVBQUUsRUFBRTtB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RSxDQUFDLEVBQUUsT0FBSyxHQUFFLEdBQUcsTUFBSyxHQUFFLENBQUM7QUFBRyxlQUFHO0FBQVEsY0FBRSxHQUFHLEVBQUMsTUFBSyxHQUFFLE1BQUssR0FBRyxDQUFDLEdBQUUsT0FBTSxHQUFFLFVBQVMsTUFBRyxVQUFTLEdBQUUsSUFBRyxFQUFFLElBQUcsSUFBRyxDQUFDLEdBQUUsT0FBTSxNQUFFLENBQUM7QUFBRSxZQUFFLEdBQUcsUUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDO0FBQUUsZUFBRyxHQUFHLEdBQUUsSUFBRSxHQUFHO0FBQUUsV0FBQyxFQUFFLGdCQUFjLElBQUUsS0FBRyxLQUFLLE9BQUssR0FBRyxDQUFDLElBQUU7QUFBRyxpQkFBTztBQUFBLFFBQUM7QUFBQyxpQkFBUyxHQUFHLEdBQUU7QUFBQyxjQUFHLFNBQU8sRUFBRSxHQUFHLE9BQU0sSUFBSSxFQUFFLENBQUM7QUFBRSxZQUFFLE9BQUssRUFBRSxLQUFHO0FBQU0sY0FBRztBQUFDLGNBQUUsR0FBRyxTQUFPLEVBQUUsR0FBRyxNQUFNLENBQUM7QUFBQSxVQUFDLFNBQU8sR0FBRTtBQUFDLGtCQUFNO0FBQUEsVUFBRSxVQUFDO0FBQVEsZUFBRyxFQUFFLEVBQUUsSUFBRTtBQUFBLFVBQUk7QUFBQyxZQUFFLEtBQUc7QUFBQSxRQUFJO0FBQ2pmLGlCQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxjQUFHLFNBQU8sRUFBRSxHQUFHLE9BQU0sSUFBSSxFQUFFLENBQUM7QUFBRSxjQUFHLENBQUMsRUFBRSxZQUFVLENBQUMsRUFBRSxHQUFHLEdBQUcsT0FBTSxJQUFJLEVBQUUsRUFBRTtBQUFFLGNBQUcsS0FBRyxLQUFHLEtBQUcsS0FBRyxLQUFHLEVBQUUsT0FBTSxJQUFJLEVBQUUsRUFBRTtBQUFFLFlBQUUsV0FBUyxFQUFFLEdBQUcsR0FBRyxHQUFFLEdBQUUsQ0FBQztBQUFFLFlBQUUsS0FBRyxDQUFDO0FBQUEsUUFBQztBQUFDLGlCQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsY0FBRyxJ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LFFBQVYsRUFBaUIsVUFBVSxLQUFLLFFBQVE7QUFBQSxVQUNqRCxTQUNFLDRDQUFDLDJCQUNDLHNEQUFDLHNCQUFPLE9BQU0saUJBQWdCLFVBQVUsTUFBTSxpQkFBaUIsQ0FBQyxhQUFhLEdBQUcsR0FDbEY7QUFBQTtBQUFBLFFBUkcsS0FBSztBQUFBLE1BVVosQ0FDRDtBQUFBO0FBQUEsRUFDSDtBQUVKOyIsCiAgIm5hbWVzIjogWyJleHBvcnRzIiwgIm1vZHVsZSIsICJpbml0U3FsSnMiLCAiZnMiLCAiZGIiLCAiaXNKYXBhbmVzZSIsICJpc0VxdWFsIiwgIlNQRUNJQUxfU1lNQk9MUyIsICJTTUFMTF9ZIiwgImNyZWF0ZVJvbWFqaVRvS2FuYU1hcCIsICJvbklucHV0IiwgImlzS2FuYSIsICJ0b1JvbWFqaSIsICJkZWRlbnQiLCAiaSIsICJleHBvcnRzIiwgInBhdGgiLCAiaW1wb3J0X2FwaSIsICJ3YW5ha2FuYSIsICJpbXBvcnRfd2FuYWthbmEiLCAiZGIiLCAic3FsIiwgImZzIiwgImluaXRTcWxKcyIsICJkYiIsICJkZWRlbnQiXQp9Cg==
