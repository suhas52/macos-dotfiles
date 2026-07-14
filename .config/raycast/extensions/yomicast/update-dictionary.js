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

// node_modules/adm-zip/util/constants.js
var require_constants = __commonJS({
  "node_modules/adm-zip/util/constants.js"(exports2, module2) {
    module2.exports = {
      /* The local file header */
      LOCHDR: 30,
      // LOC header size
      LOCSIG: 67324752,
      // "PK\003\004"
      LOCVER: 4,
      // version needed to extract
      LOCFLG: 6,
      // general purpose bit flag
      LOCHOW: 8,
      // compression method
      LOCTIM: 10,
      // modification time (2 bytes time, 2 bytes date)
      LOCCRC: 14,
      // uncompressed file crc-32 value
      LOCSIZ: 18,
      // compressed size
      LOCLEN: 22,
      // uncompressed size
      LOCNAM: 26,
      // filename length
      LOCEXT: 28,
      // extra field length
      /* The Data descriptor */
      EXTSIG: 134695760,
      // "PK\007\008"
      EXTHDR: 16,
      // EXT header size
      EXTCRC: 4,
      // uncompressed file crc-32 value
      EXTSIZ: 8,
      // compressed size
      EXTLEN: 12,
      // uncompressed size
      /* The central directory file header */
      CENHDR: 46,
      // CEN header size
      CENSIG: 33639248,
      // "PK\001\002"
      CENVEM: 4,
      // version made by
      CENVER: 6,
      // version needed to extract
      CENFLG: 8,
      // encrypt, decrypt flags
      CENHOW: 10,
      // compression method
      CENTIM: 12,
      // modification time (2 bytes time, 2 bytes date)
      CENCRC: 16,
      // uncompressed file crc-32 value
      CENSIZ: 20,
      // compressed size
      CENLEN: 24,
      // uncompressed size
      CENNAM: 28,
      // filename length
      CENEXT: 30,
      // extra field length
      CENCOM: 32,
      // file comment length
      CENDSK: 34,
      // volume number start
      CENATT: 36,
      // internal file attributes
      CENATX: 38,
      // external file attributes (host system dependent)
      CENOFF: 42,
      // LOC header offset
      /* The entries in the end of central directory */
      ENDHDR: 22,
      // END header size
      ENDSIG: 101010256,
      // "PK\005\006"
      ENDSUB: 8,
      // number of entries on this disk
      ENDTOT: 10,
      // total number of entries
      ENDSIZ: 12,
      // central directory size in bytes
      ENDOFF: 16,
      // offset of first CEN header
      ENDCOM: 20,
      // zip file comment length
      END64HDR: 20,
      // zip64 END header size
      END64SIG: 117853008,
      // zip64 Locator signature, "PK\006\007"
      END64START: 4,
      // number of the disk with the start of the zip64
      END64OFF: 8,
      // relative offset of the zip64 end of central directory
      END64NUMDISKS: 16,
      // total number of disks
      ZIP64SIG: 101075792,
      // zip64 signature, "PK\006\006"
      ZIP64HDR: 56,
      // zip64 record minimum size
      ZIP64LEAD: 12,
      // leading bytes at the start of the record, not counted by the value stored in ZIP64SIZE
      ZIP64SIZE: 4,
      // zip64 size of the central directory record
      ZIP64VEM: 12,
      // zip64 version made by
      ZIP64VER: 14,
      // zip64 version needed to extract
      ZIP64DSK: 16,
      // zip64 number of this disk
      ZIP64DSKDIR: 20,
      // number of the disk with the start of the record directory
      ZIP64SUB: 24,
      // number of entries on this disk
      ZIP64TOT: 32,
      // total number of entries
      ZIP64SIZB: 40,
      // zip64 central directory size in bytes
      ZIP64OFF: 48,
      // offset of start of central directory with respect to the starting disk number
      ZIP64EXTRA: 56,
      // extensible data sector
      /* Compression methods */
      STORED: 0,
      // no compression
      SHRUNK: 1,
      // shrunk
      REDUCED1: 2,
      // reduced with compression factor 1
      REDUCED2: 3,
      // reduced with compression factor 2
      REDUCED3: 4,
      // reduced with compression factor 3
      REDUCED4: 5,
      // reduced with compression factor 4
      IMPLODED: 6,
      // imploded
      // 7 reserved for Tokenizing compression algorithm
      DEFLATED: 8,
      // deflated
      ENHANCED_DEFLATED: 9,
      // enhanced deflated
      PKWARE: 10,
      // PKWare DCL imploded
      // 11 reserved by PKWARE
      BZIP2: 12,
      //  compressed using BZIP2
      // 13 reserved by PKWARE
      LZMA: 14,
      // LZMA
      // 15-17 reserved by PKWARE
      IBM_TERSE: 18,
      // compressed using IBM TERSE
      IBM_LZ77: 19,
      // IBM LZ77 z
      AES_ENCRYPT: 99,
      // WinZIP AES encryption method
      /* General purpose bit flag */
      // values can obtained with expression 2**bitnr
      FLG_ENC: 1,
      // Bit 0: encrypted file
      FLG_COMP1: 2,
      // Bit 1, compression option
      FLG_COMP2: 4,
      // Bit 2, compression option
      FLG_DESC: 8,
      // Bit 3, data descriptor
      FLG_ENH: 16,
      // Bit 4, enhanced deflating
      FLG_PATCH: 32,
      // Bit 5, indicates that the file is compressed patched data.
      FLG_STR: 64,
      // Bit 6, strong encryption (patented)
      // Bits 7-10: Currently unused.
      FLG_EFS: 2048,
      // Bit 11: Language encoding flag (EFS)
      // Bit 12: Reserved by PKWARE for enhanced compression.
      // Bit 13: encrypted the Central Directory (patented).
      // Bits 14-15: Reserved by PKWARE.
      FLG_MSK: 4096,
      // mask header values
      /* Load type */
      FILE: 2,
      BUFFER: 1,
      NONE: 0,
      /* 4.5 Extensible data fields */
      EF_ID: 0,
      EF_SIZE: 2,
      /* Header IDs */
      ID_ZIP64: 1,
      ID_AVINFO: 7,
      ID_PFS: 8,
      ID_OS2: 9,
      ID_NTFS: 10,
      ID_OPENVMS: 12,
      ID_UNIX: 13,
      ID_FORK: 14,
      ID_PATCH: 15,
      ID_X509_PKCS7: 20,
      ID_X509_CERTID_F: 21,
      ID_X509_CERTID_C: 22,
      ID_STRONGENC: 23,
      ID_RECORD_MGT: 24,
      ID_X509_PKCS7_RL: 25,
      ID_IBM1: 101,
      ID_IBM2: 102,
      ID_POSZIP: 18064,
      EF_ZIP64_OR_32: 4294967295,
      EF_ZIP64_OR_16: 65535,
      EF_ZIP64_SUNCOMP: 0,
      EF_ZIP64_SCOMP: 8,
      EF_ZIP64_RHO: 16,
      EF_ZIP64_DSN: 24
    };
  }
});

// node_modules/adm-zip/util/errors.js
var require_errors = __commonJS({
  "node_modules/adm-zip/util/errors.js"(exports2) {
    var errors = {
      /* Header error messages */
      INVALID_LOC: "Invalid LOC header (bad signature)",
      INVALID_CEN: "Invalid CEN header (bad signature)",
      INVALID_END: "Invalid END header (bad signature)",
      /* Descriptor */
      DESCRIPTOR_NOT_EXIST: "No descriptor present",
      DESCRIPTOR_UNKNOWN: "Unknown descriptor format",
      DESCRIPTOR_FAULTY: "Descriptor data is malformed",
      /* ZipEntry error messages*/
      NO_DATA: "Nothing to decompress",
      BAD_CRC: "CRC32 checksum failed {0}",
      FILE_IN_THE_WAY: "There is a file in the way: {0}",
      UNKNOWN_METHOD: "Invalid/unsupported compression method",
      /* Inflater error messages */
      AVAIL_DATA: "inflate::Available inflate data did not terminate",
      INVALID_DISTANCE: "inflate::Invalid literal/length or distance code in fixed or dynamic block",
      TO_MANY_CODES: "inflate::Dynamic block code description: too many length or distance codes",
      INVALID_REPEAT_LEN: "inflate::Dynamic block code description: repeat more than specified lengths",
      INVALID_REPEAT_FIRST: "inflate::Dynamic block code description: repeat lengths with no first length",
      INCOMPLETE_CODES: "inflate::Dynamic block code description: code lengths codes incomplete",
      INVALID_DYN_DISTANCE: "inflate::Dynamic block code description: invalid distance code lengths",
      INVALID_CODES_LEN: "inflate::Dynamic block code description: invalid literal/length code lengths",
      INVALID_STORE_BLOCK: "inflate::Stored block length did not match one's complement",
      INVALID_BLOCK_TYPE: "inflate::Invalid block type (type == 3)",
      /* ADM-ZIP error messages */
      CANT_EXTRACT_FILE: "Could not extract the file",
      CANT_OVERRIDE: "Target file already exists",
      DISK_ENTRY_TOO_LARGE: "Number of disk entries is too large",
      NO_ZIP: "No zip file was loaded",
      NO_ENTRY: "Entry doesn't exist",
      DIRECTORY_CONTENT_ERROR: "A directory cannot have content",
      FILE_NOT_FOUND: 'File not found: "{0}"',
      NOT_IMPLEMENTED: "Not implemented",
      INVALID_FILENAME: "Invalid filename",
      INVALID_FORMAT: "Invalid or unsupported zip format. No END header found",
      INVALID_PASS_PARAM: "Incompatible password parameter",
      WRONG_PASSWORD: "Wrong Password",
      /* ADM-ZIP */
      COMMENT_TOO_LONG: "Comment is too long",
      // Comment can be max 65535 bytes long (NOTE: some non-US characters may take more space)
      EXTRA_FIELD_PARSE_ERROR: "Extra field parsing error"
    };
    function E(message) {
      return function(...args) {
        if (args.length) {
          message = message.replace(/\{(\d)\}/g, (_, n) => args[n] || "");
        }
        return new Error("ADM-ZIP: " + message);
      };
    }
    for (const msg of Object.keys(errors)) {
      exports2[msg] = E(errors[msg]);
    }
  }
});

// node_modules/adm-zip/util/utils.js
var require_utils = __commonJS({
  "node_modules/adm-zip/util/utils.js"(exports2, module2) {
    var fsystem = require("fs");
    var pth = require("path");
    var Constants = require_constants();
    var Errors = require_errors();
    var isWin = typeof process === "object" && "win32" === process.platform;
    var is_Obj = (obj) => typeof obj === "object" && obj !== null;
    var crcTable = new Uint32Array(256).map((t, c) => {
      for (let k = 0; k < 8; k++) {
        if ((c & 1) !== 0) {
          c = 3988292384 ^ c >>> 1;
        } else {
          c >>>= 1;
        }
      }
      return c >>> 0;
    });
    function Utils(opts) {
      this.sep = pth.sep;
      this.fs = fsystem;
      if (is_Obj(opts)) {
        if (is_Obj(opts.fs) && typeof opts.fs.statSync === "function") {
          this.fs = opts.fs;
        }
      }
    }
    module2.exports = Utils;
    Utils.prototype.makeDir = function(folder) {
      const self2 = this;
      function mkdirSync(fpath) {
        let resolvedPath = fpath.split(self2.sep)[0];
        fpath.split(self2.sep).forEach(function(name) {
          if (!name || name.substr(-1, 1) === ":") return;
          resolvedPath += self2.sep + name;
          var stat;
          try {
            stat = self2.fs.statSync(resolvedPath);
          } catch (e) {
            self2.fs.mkdirSync(resolvedPath);
          }
          if (stat && stat.isFile()) throw Errors.FILE_IN_THE_WAY(`"${resolvedPath}"`);
        });
      }
      mkdirSync(folder);
    };
    Utils.prototype.writeFileTo = function(path2, content, overwrite, attr) {
      const self2 = this;
      if (self2.fs.existsSync(path2)) {
        if (!overwrite) return false;
        var stat = self2.fs.statSync(path2);
        if (stat.isDirectory()) {
          return false;
        }
      }
      var folder = pth.dirname(path2);
      if (!self2.fs.existsSync(folder)) {
        self2.makeDir(folder);
      }
      var fd;
      try {
        fd = self2.fs.openSync(path2, "w", 438);
      } catch (e) {
        self2.fs.chmodSync(path2, 438);
        fd = self2.fs.openSync(path2, "w", 438);
      }
      if (fd) {
        try {
          self2.fs.writeSync(fd, content, 0, content.length, 0);
        } finally {
          self2.fs.closeSync(fd);
        }
      }
      self2.fs.chmodSync(path2, attr || 438);
      return true;
    };
    Utils.prototype.writeFileToAsync = function(path2, content, overwrite, attr, callback) {
      if (typeof attr === "function") {
        callback = attr;
        attr = void 0;
      }
      const self2 = this;
      self2.fs.exists(path2, function(exist) {
        if (exist && !overwrite) return callback(false);
        self2.fs.stat(path2, function(err, stat) {
          if (exist && stat.isDirectory()) {
            return callback(false);
          }
          var folder = pth.dirname(path2);
          self2.fs.exists(folder, function(exists) {
            if (!exists) self2.makeDir(folder);
            self2.fs.open(path2, "w", 438, function(err2, fd) {
              if (err2) {
                self2.fs.chmod(path2, 438, function() {
                  self2.fs.open(path2, "w", 438, function(err3, fd2) {
                    self2.fs.write(fd2, content, 0, content.length, 0, function() {
                      self2.fs.close(fd2, function() {
                        self2.fs.chmod(path2, attr || 438, function() {
                          callback(true);
                        });
                      });
                    });
                  });
                });
              } else if (fd) {
                self2.fs.write(fd, content, 0, content.length, 0, function() {
                  self2.fs.close(fd, function() {
                    self2.fs.chmod(path2, attr || 438, function() {
                      callback(true);
                    });
                  });
                });
              } else {
                self2.fs.chmod(path2, attr || 438, function() {
                  callback(true);
                });
              }
            });
          });
        });
      });
    };
    Utils.prototype.findFiles = function(path2) {
      const self2 = this;
      function findSync(dir, pattern, recursive) {
        if (typeof pattern === "boolean") {
          recursive = pattern;
          pattern = void 0;
        }
        let files = [];
        self2.fs.readdirSync(dir).forEach(function(file) {
          const path3 = pth.join(dir, file);
          const stat = self2.fs.statSync(path3);
          if (!pattern || pattern.test(path3)) {
            files.push(pth.normalize(path3) + (stat.isDirectory() ? self2.sep : ""));
          }
          if (stat.isDirectory() && recursive) files = files.concat(findSync(path3, pattern, recursive));
        });
        return files;
      }
      return findSync(path2, void 0, true);
    };
    Utils.prototype.findFilesAsync = function(dir, cb) {
      const self2 = this;
      let results = [];
      self2.fs.readdir(dir, function(err, list) {
        if (err) return cb(err);
        let list_length = list.length;
        if (!list_length) return cb(null, results);
        list.forEach(function(file) {
          file = pth.join(dir, file);
          self2.fs.stat(file, function(err2, stat) {
            if (err2) return cb(err2);
            if (stat) {
              results.push(pth.normalize(file) + (stat.isDirectory() ? self2.sep : ""));
              if (stat.isDirectory()) {
                self2.findFilesAsync(file, function(err3, res) {
                  if (err3) return cb(err3);
                  results = results.concat(res);
                  if (!--list_length) cb(null, results);
                });
              } else {
                if (!--list_length) cb(null, results);
              }
            }
          });
        });
      });
    };
    Utils.prototype.getAttributes = function() {
    };
    Utils.prototype.setAttributes = function() {
    };
    Utils.crc32update = function(crc, byte) {
      return crcTable[(crc ^ byte) & 255] ^ crc >>> 8;
    };
    Utils.crc32 = function(buf) {
      if (typeof buf === "string") {
        buf = Buffer.from(buf, "utf8");
      }
      let len = buf.length;
      let crc = ~0;
      for (let off = 0; off < len; ) crc = Utils.crc32update(crc, buf[off++]);
      return ~crc >>> 0;
    };
    Utils.methodToString = function(method) {
      switch (method) {
        case Constants.STORED:
          return "STORED (" + method + ")";
        case Constants.DEFLATED:
          return "DEFLATED (" + method + ")";
        default:
          return "UNSUPPORTED (" + method + ")";
      }
    };
    Utils.canonical = function(path2) {
      if (!path2) return "";
      const safeSuffix = pth.posix.normalize("/" + path2.split("\\").join("/"));
      return pth.join(".", safeSuffix);
    };
    Utils.zipnamefix = function(path2) {
      if (!path2) return "";
      const safeSuffix = pth.posix.normalize("/" + path2.split("\\").join("/"));
      return pth.posix.join(".", safeSuffix);
    };
    Utils.findLast = function(arr, callback) {
      if (!Array.isArray(arr)) throw new TypeError("arr is not array");
      const len = arr.length >>> 0;
      for (let i = len - 1; i >= 0; i--) {
        if (callback(arr[i], i, arr)) {
          return arr[i];
        }
      }
      return void 0;
    };
    Utils.sanitize = function(prefix, name) {
      prefix = pth.resolve(pth.normalize(prefix));
      var parts = name.split("/");
      for (var i = 0, l = parts.length; i < l; i++) {
        var path2 = pth.normalize(pth.join(prefix, parts.slice(i, l).join(pth.sep)));
        if (path2.indexOf(prefix) === 0) {
          return path2;
        }
      }
      return pth.normalize(pth.join(prefix, pth.basename(name)));
    };
    Utils.toBuffer = function toBuffer(input, encoder) {
      if (Buffer.isBuffer(input)) {
        return input;
      } else if (input instanceof Uint8Array) {
        return Buffer.from(input);
      } else {
        return typeof input === "string" ? encoder(input) : Buffer.alloc(0);
      }
    };
    Utils.readBigUInt64LE = function(buffer, index) {
      var slice = Buffer.from(buffer.slice(index, index + 8));
      slice.swap64();
      return parseInt(`0x${slice.toString("hex")}`);
    };
    Utils.fromDOS2Date = function(val) {
      return new Date((val >> 25 & 127) + 1980, Math.max((val >> 21 & 15) - 1, 0), Math.max(val >> 16 & 31, 1), val >> 11 & 31, val >> 5 & 63, (val & 31) << 1);
    };
    Utils.fromDate2DOS = function(val) {
      let date = 0;
      let time = 0;
      if (val.getFullYear() > 1979) {
        date = (val.getFullYear() - 1980 & 127) << 9 | val.getMonth() + 1 << 5 | val.getDate();
        time = val.getHours() << 11 | val.getMinutes() << 5 | val.getSeconds() >> 1;
      }
      return date << 16 | time;
    };
    Utils.isWin = isWin;
    Utils.crcTable = crcTable;
  }
});

// node_modules/adm-zip/util/fattr.js
var require_fattr = __commonJS({
  "node_modules/adm-zip/util/fattr.js"(exports2, module2) {
    var pth = require("path");
    module2.exports = function(path2, { fs: fs3 }) {
      var _path = path2 || "", _obj = newAttr(), _stat = null;
      function newAttr() {
        return {
          directory: false,
          readonly: false,
          hidden: false,
          executable: false,
          mtime: 0,
          atime: 0
        };
      }
      if (_path && fs3.existsSync(_path)) {
        _stat = fs3.statSync(_path);
        _obj.directory = _stat.isDirectory();
        _obj.mtime = _stat.mtime;
        _obj.atime = _stat.atime;
        _obj.executable = (73 & _stat.mode) !== 0;
        _obj.readonly = (128 & _stat.mode) === 0;
        _obj.hidden = pth.basename(_path)[0] === ".";
      } else {
        console.warn("Invalid path: " + _path);
      }
      return {
        get directory() {
          return _obj.directory;
        },
        get readOnly() {
          return _obj.readonly;
        },
        get hidden() {
          return _obj.hidden;
        },
        get mtime() {
          return _obj.mtime;
        },
        get atime() {
          return _obj.atime;
        },
        get executable() {
          return _obj.executable;
        },
        decodeAttributes: function() {
        },
        encodeAttributes: function() {
        },
        toJSON: function() {
          return {
            path: _path,
            isDirectory: _obj.directory,
            isReadOnly: _obj.readonly,
            isHidden: _obj.hidden,
            isExecutable: _obj.executable,
            mTime: _obj.mtime,
            aTime: _obj.atime
          };
        },
        toString: function() {
          return JSON.stringify(this.toJSON(), null, "	");
        }
      };
    };
  }
});

// node_modules/adm-zip/util/decoder.js
var require_decoder = __commonJS({
  "node_modules/adm-zip/util/decoder.js"(exports2, module2) {
    module2.exports = {
      efs: true,
      encode: (data) => Buffer.from(data, "utf8"),
      decode: (data) => data.toString("utf8")
    };
  }
});

// node_modules/adm-zip/util/index.js
var require_util = __commonJS({
  "node_modules/adm-zip/util/index.js"(exports2, module2) {
    module2.exports = require_utils();
    module2.exports.Constants = require_constants();
    module2.exports.Errors = require_errors();
    module2.exports.FileAttr = require_fattr();
    module2.exports.decoder = require_decoder();
  }
});

// node_modules/adm-zip/headers/entryHeader.js
var require_entryHeader = __commonJS({
  "node_modules/adm-zip/headers/entryHeader.js"(exports2, module2) {
    var Utils = require_util();
    var Constants = Utils.Constants;
    module2.exports = function() {
      var _verMade = 20, _version = 10, _flags = 0, _method = 0, _time = 0, _crc = 0, _compressedSize = 0, _size = 0, _fnameLen = 0, _extraLen = 0, _comLen = 0, _diskStart = 0, _inattr = 0, _attr = 0, _offset = 0;
      _verMade |= Utils.isWin ? 2560 : 768;
      _flags |= Constants.FLG_EFS;
      const _localHeader = {
        extraLen: 0
      };
      const uint32 = (val) => Math.max(0, val) >>> 0;
      const uint16 = (val) => Math.max(0, val) & 65535;
      const uint8 = (val) => Math.max(0, val) & 255;
      _time = Utils.fromDate2DOS(/* @__PURE__ */ new Date());
      return {
        get made() {
          return _verMade;
        },
        set made(val) {
          _verMade = val;
        },
        get version() {
          return _version;
        },
        set version(val) {
          _version = val;
        },
        get flags() {
          return _flags;
        },
        set flags(val) {
          _flags = val;
        },
        get flags_efs() {
          return (_flags & Constants.FLG_EFS) > 0;
        },
        set flags_efs(val) {
          if (val) {
            _flags |= Constants.FLG_EFS;
          } else {
            _flags &= ~Constants.FLG_EFS;
          }
        },
        get flags_desc() {
          return (_flags & Constants.FLG_DESC) > 0;
        },
        set flags_desc(val) {
          if (val) {
            _flags |= Constants.FLG_DESC;
          } else {
            _flags &= ~Constants.FLG_DESC;
          }
        },
        get method() {
          return _method;
        },
        set method(val) {
          switch (val) {
            case Constants.STORED:
              this.version = 10;
            case Constants.DEFLATED:
            default:
              this.version = 20;
          }
          _method = val;
        },
        get time() {
          return Utils.fromDOS2Date(this.timeval);
        },
        set time(val) {
          this.timeval = Utils.fromDate2DOS(val);
        },
        get timeval() {
          return _time;
        },
        set timeval(val) {
          _time = uint32(val);
        },
        get timeHighByte() {
          return uint8(_time >>> 8);
        },
        get crc() {
          return _crc;
        },
        set crc(val) {
          _crc = uint32(val);
        },
        get compressedSize() {
          return _compressedSize;
        },
        set compressedSize(val) {
          _compressedSize = uint32(val);
        },
        get size() {
          return _size;
        },
        set size(val) {
          _size = uint32(val);
        },
        get fileNameLength() {
          return _fnameLen;
        },
        set fileNameLength(val) {
          _fnameLen = val;
        },
        get extraLength() {
          return _extraLen;
        },
        set extraLength(val) {
          _extraLen = val;
        },
        get extraLocalLength() {
          return _localHeader.extraLen;
        },
        set extraLocalLength(val) {
          _localHeader.extraLen = val;
        },
        get commentLength() {
          return _comLen;
        },
        set commentLength(val) {
          _comLen = val;
        },
        get diskNumStart() {
          return _diskStart;
        },
        set diskNumStart(val) {
          _diskStart = uint32(val);
        },
        get inAttr() {
          return _inattr;
        },
        set inAttr(val) {
          _inattr = uint32(val);
        },
        get attr() {
          return _attr;
        },
        set attr(val) {
          _attr = uint32(val);
        },
        // get Unix file permissions
        get fileAttr() {
          return (_attr || 0) >> 16 & 4095;
        },
        get offset() {
          return _offset;
        },
        set offset(val) {
          _offset = uint32(val);
        },
        get encrypted() {
          return (_flags & Constants.FLG_ENC) === Constants.FLG_ENC;
        },
        get centralHeaderSize() {
          return Constants.CENHDR + _fnameLen + _extraLen + _comLen;
        },
        get realDataOffset() {
          return _offset + Constants.LOCHDR + _localHeader.fnameLen + _localHeader.extraLen;
        },
        get localHeader() {
          return _localHeader;
        },
        loadLocalHeaderFromBinary: function(input) {
          var data = input.slice(_offset, _offset + Constants.LOCHDR);
          if (data.readUInt32LE(0) !== Constants.LOCSIG) {
            throw Utils.Errors.INVALID_LOC();
          }
          _localHeader.version = data.readUInt16LE(Constants.LOCVER);
          _localHeader.flags = data.readUInt16LE(Constants.LOCFLG);
          _localHeader.method = data.readUInt16LE(Constants.LOCHOW);
          _localHeader.time = data.readUInt32LE(Constants.LOCTIM);
          _localHeader.crc = data.readUInt32LE(Constants.LOCCRC);
          _localHeader.compressedSize = data.readUInt32LE(Constants.LOCSIZ);
          _localHeader.size = data.readUInt32LE(Constants.LOCLEN);
          _localHeader.fnameLen = data.readUInt16LE(Constants.LOCNAM);
          _localHeader.extraLen = data.readUInt16LE(Constants.LOCEXT);
          const extraStart = _offset + Constants.LOCHDR + _localHeader.fnameLen;
          const extraEnd = extraStart + _localHeader.extraLen;
          return input.slice(extraStart, extraEnd);
        },
        loadFromBinary: function(data) {
          if (data.length !== Constants.CENHDR || data.readUInt32LE(0) !== Constants.CENSIG) {
            throw Utils.Errors.INVALID_CEN();
          }
          _verMade = data.readUInt16LE(Constants.CENVEM);
          _version = data.readUInt16LE(Constants.CENVER);
          _flags = data.readUInt16LE(Constants.CENFLG);
          _method = data.readUInt16LE(Constants.CENHOW);
          _time = data.readUInt32LE(Constants.CENTIM);
          _crc = data.readUInt32LE(Constants.CENCRC);
          _compressedSize = data.readUInt32LE(Constants.CENSIZ);
          _size = data.readUInt32LE(Constants.CENLEN);
          _fnameLen = data.readUInt16LE(Constants.CENNAM);
          _extraLen = data.readUInt16LE(Constants.CENEXT);
          _comLen = data.readUInt16LE(Constants.CENCOM);
          _diskStart = data.readUInt16LE(Constants.CENDSK);
          _inattr = data.readUInt16LE(Constants.CENATT);
          _attr = data.readUInt32LE(Constants.CENATX);
          _offset = data.readUInt32LE(Constants.CENOFF);
        },
        localHeaderToBinary: function() {
          var data = Buffer.alloc(Constants.LOCHDR);
          data.writeUInt32LE(Constants.LOCSIG, 0);
          data.writeUInt16LE(_version, Constants.LOCVER);
          data.writeUInt16LE(_flags, Constants.LOCFLG);
          data.writeUInt16LE(_method, Constants.LOCHOW);
          data.writeUInt32LE(_time, Constants.LOCTIM);
          data.writeUInt32LE(_crc, Constants.LOCCRC);
          data.writeUInt32LE(_compressedSize, Constants.LOCSIZ);
          data.writeUInt32LE(_size, Constants.LOCLEN);
          data.writeUInt16LE(_fnameLen, Constants.LOCNAM);
          data.writeUInt16LE(_localHeader.extraLen, Constants.LOCEXT);
          return data;
        },
        centralHeaderToBinary: function() {
          var data = Buffer.alloc(Constants.CENHDR + _fnameLen + _extraLen + _comLen);
          data.writeUInt32LE(Constants.CENSIG, 0);
          data.writeUInt16LE(_verMade, Constants.CENVEM);
          data.writeUInt16LE(_version, Constants.CENVER);
          data.writeUInt16LE(_flags, Constants.CENFLG);
          data.writeUInt16LE(_method, Constants.CENHOW);
          data.writeUInt32LE(_time, Constants.CENTIM);
          data.writeUInt32LE(_crc, Constants.CENCRC);
          data.writeUInt32LE(_compressedSize, Constants.CENSIZ);
          data.writeUInt32LE(_size, Constants.CENLEN);
          data.writeUInt16LE(_fnameLen, Constants.CENNAM);
          data.writeUInt16LE(_extraLen, Constants.CENEXT);
          data.writeUInt16LE(_comLen, Constants.CENCOM);
          data.writeUInt16LE(_diskStart, Constants.CENDSK);
          data.writeUInt16LE(_inattr, Constants.CENATT);
          data.writeUInt32LE(_attr, Constants.CENATX);
          data.writeUInt32LE(_offset, Constants.CENOFF);
          return data;
        },
        toJSON: function() {
          const bytes = function(nr) {
            return nr + " bytes";
          };
          return {
            made: _verMade,
            version: _version,
            flags: _flags,
            method: Utils.methodToString(_method),
            time: this.time,
            crc: "0x" + _crc.toString(16).toUpperCase(),
            compressedSize: bytes(_compressedSize),
            size: bytes(_size),
            fileNameLength: bytes(_fnameLen),
            extraLength: bytes(_extraLen),
            commentLength: bytes(_comLen),
            diskNumStart: _diskStart,
            inAttr: _inattr,
            attr: _attr,
            offset: _offset,
            centralHeaderSize: bytes(Constants.CENHDR + _fnameLen + _extraLen + _comLen)
          };
        },
        toString: function() {
          return JSON.stringify(this.toJSON(), null, "	");
        }
      };
    };
  }
});

// node_modules/adm-zip/headers/mainHeader.js
var require_mainHeader = __commonJS({
  "node_modules/adm-zip/headers/mainHeader.js"(exports2, module2) {
    var Utils = require_util();
    var Constants = Utils.Constants;
    module2.exports = function() {
      var _volumeEntries = 0, _totalEntries = 0, _size = 0, _offset = 0, _commentLength = 0;
      return {
        get diskEntries() {
          return _volumeEntries;
        },
        set diskEntries(val) {
          _volumeEntries = _totalEntries = val;
        },
        get totalEntries() {
          return _totalEntries;
        },
        set totalEntries(val) {
          _totalEntries = _volumeEntries = val;
        },
        get size() {
          return _size;
        },
        set size(val) {
          _size = val;
        },
        get offset() {
          return _offset;
        },
        set offset(val) {
          _offset = val;
        },
        get commentLength() {
          return _commentLength;
        },
        set commentLength(val) {
          _commentLength = val;
        },
        get mainHeaderSize() {
          return Constants.ENDHDR + _commentLength;
        },
        loadFromBinary: function(data) {
          if ((data.length !== Constants.ENDHDR || data.readUInt32LE(0) !== Constants.ENDSIG) && (data.length < Constants.ZIP64HDR || data.readUInt32LE(0) !== Constants.ZIP64SIG)) {
            throw Utils.Errors.INVALID_END();
          }
          if (data.readUInt32LE(0) === Constants.ENDSIG) {
            _volumeEntries = data.readUInt16LE(Constants.ENDSUB);
            _totalEntries = data.readUInt16LE(Constants.ENDTOT);
            _size = data.readUInt32LE(Constants.ENDSIZ);
            _offset = data.readUInt32LE(Constants.ENDOFF);
            _commentLength = data.readUInt16LE(Constants.ENDCOM);
          } else {
            _volumeEntries = Utils.readBigUInt64LE(data, Constants.ZIP64SUB);
            _totalEntries = Utils.readBigUInt64LE(data, Constants.ZIP64TOT);
            _size = Utils.readBigUInt64LE(data, Constants.ZIP64SIZE);
            _offset = Utils.readBigUInt64LE(data, Constants.ZIP64OFF);
            _commentLength = 0;
          }
        },
        toBinary: function() {
          var b = Buffer.alloc(Constants.ENDHDR + _commentLength);
          b.writeUInt32LE(Constants.ENDSIG, 0);
          b.writeUInt32LE(0, 4);
          b.writeUInt16LE(_volumeEntries, Constants.ENDSUB);
          b.writeUInt16LE(_totalEntries, Constants.ENDTOT);
          b.writeUInt32LE(_size, Constants.ENDSIZ);
          b.writeUInt32LE(_offset, Constants.ENDOFF);
          b.writeUInt16LE(_commentLength, Constants.ENDCOM);
          b.fill(" ", Constants.ENDHDR);
          return b;
        },
        toJSON: function() {
          const offset = function(nr, len) {
            let offs = nr.toString(16).toUpperCase();
            while (offs.length < len) offs = "0" + offs;
            return "0x" + offs;
          };
          return {
            diskEntries: _volumeEntries,
            totalEntries: _totalEntries,
            size: _size + " bytes",
            offset: offset(_offset, 4),
            commentLength: _commentLength
          };
        },
        toString: function() {
          return JSON.stringify(this.toJSON(), null, "	");
        }
      };
    };
  }
});

// node_modules/adm-zip/headers/index.js
var require_headers = __commonJS({
  "node_modules/adm-zip/headers/index.js"(exports2) {
    exports2.EntryHeader = require_entryHeader();
    exports2.MainHeader = require_mainHeader();
  }
});

// node_modules/adm-zip/methods/deflater.js
var require_deflater = __commonJS({
  "node_modules/adm-zip/methods/deflater.js"(exports2, module2) {
    module2.exports = function(inbuf) {
      var zlib = require("zlib");
      var opts = { chunkSize: (parseInt(inbuf.length / 1024) + 1) * 1024 };
      return {
        deflate: function() {
          return zlib.deflateRawSync(inbuf, opts);
        },
        deflateAsync: function(callback) {
          var tmp = zlib.createDeflateRaw(opts), parts = [], total = 0;
          tmp.on("data", function(data) {
            parts.push(data);
            total += data.length;
          });
          tmp.on("end", function() {
            var buf = Buffer.alloc(total), written = 0;
            buf.fill(0);
            for (var i = 0; i < parts.length; i++) {
              var part = parts[i];
              part.copy(buf, written);
              written += part.length;
            }
            callback && callback(buf);
          });
          tmp.end(inbuf);
        }
      };
    };
  }
});

// node_modules/adm-zip/methods/inflater.js
var require_inflater = __commonJS({
  "node_modules/adm-zip/methods/inflater.js"(exports2, module2) {
    var version = +(process.versions ? process.versions.node : "").split(".")[0] || 0;
    module2.exports = function(inbuf, expectedLength) {
      var zlib = require("zlib");
      const option = version >= 15 && expectedLength > 0 ? { maxOutputLength: expectedLength } : {};
      return {
        inflate: function() {
          return zlib.inflateRawSync(inbuf, option);
        },
        inflateAsync: function(callback) {
          var tmp = zlib.createInflateRaw(option), parts = [], total = 0;
          tmp.on("data", function(data) {
            parts.push(data);
            total += data.length;
          });
          tmp.on("end", function() {
            var buf = Buffer.alloc(total), written = 0;
            buf.fill(0);
            for (var i = 0; i < parts.length; i++) {
              var part = parts[i];
              part.copy(buf, written);
              written += part.length;
            }
            callback && callback(buf);
          });
          tmp.end(inbuf);
        }
      };
    };
  }
});

// node_modules/adm-zip/methods/zipcrypto.js
var require_zipcrypto = __commonJS({
  "node_modules/adm-zip/methods/zipcrypto.js"(exports2, module2) {
    "use strict";
    var { randomFillSync } = require("crypto");
    var Errors = require_errors();
    var crctable = new Uint32Array(256).map((t, crc) => {
      for (let j = 0; j < 8; j++) {
        if (0 !== (crc & 1)) {
          crc = crc >>> 1 ^ 3988292384;
        } else {
          crc >>>= 1;
        }
      }
      return crc >>> 0;
    });
    var uMul = (a, b) => Math.imul(a, b) >>> 0;
    var crc32update = (pCrc32, bval) => {
      return crctable[(pCrc32 ^ bval) & 255] ^ pCrc32 >>> 8;
    };
    var genSalt = () => {
      if ("function" === typeof randomFillSync) {
        return randomFillSync(Buffer.alloc(12));
      } else {
        return genSalt.node();
      }
    };
    genSalt.node = () => {
      const salt = Buffer.alloc(12);
      const len = salt.length;
      for (let i = 0; i < len; i++) salt[i] = Math.random() * 256 & 255;
      return salt;
    };
    var config = {
      genSalt
    };
    function Initkeys(pw) {
      const pass = Buffer.isBuffer(pw) ? pw : Buffer.from(pw);
      this.keys = new Uint32Array([305419896, 591751049, 878082192]);
      for (let i = 0; i < pass.length; i++) {
        this.updateKeys(pass[i]);
      }
    }
    Initkeys.prototype.updateKeys = function(byteValue) {
      const keys = this.keys;
      keys[0] = crc32update(keys[0], byteValue);
      keys[1] += keys[0] & 255;
      keys[1] = uMul(keys[1], 134775813) + 1;
      keys[2] = crc32update(keys[2], keys[1] >>> 24);
      return byteValue;
    };
    Initkeys.prototype.next = function() {
      const k = (this.keys[2] | 2) >>> 0;
      return uMul(k, k ^ 1) >> 8 & 255;
    };
    function make_decrypter(pwd) {
      const keys = new Initkeys(pwd);
      return function(data) {
        const result = Buffer.alloc(data.length);
        let pos = 0;
        for (let c of data) {
          result[pos++] = keys.updateKeys(c ^ keys.next());
        }
        return result;
      };
    }
    function make_encrypter(pwd) {
      const keys = new Initkeys(pwd);
      return function(data, result, pos = 0) {
        if (!result) result = Buffer.alloc(data.length);
        for (let c of data) {
          const k = keys.next();
          result[pos++] = c ^ k;
          keys.updateKeys(c);
        }
        return result;
      };
    }
    function decrypt(data, header, pwd) {
      if (!data || !Buffer.isBuffer(data) || data.length < 12) {
        return Buffer.alloc(0);
      }
      const decrypter = make_decrypter(pwd);
      const salt = decrypter(data.slice(0, 12));
      const verifyByte = (header.flags & 8) === 8 ? header.timeHighByte : header.crc >>> 24;
      if (salt[11] !== verifyByte) {
        throw Errors.WRONG_PASSWORD();
      }
      return decrypter(data.slice(12));
    }
    function _salter(data) {
      if (Buffer.isBuffer(data) && data.length >= 12) {
        config.genSalt = function() {
          return data.slice(0, 12);
        };
      } else if (data === "node") {
        config.genSalt = genSalt.node;
      } else {
        config.genSalt = genSalt;
      }
    }
    function encrypt(data, header, pwd, oldlike = false) {
      if (data == null) data = Buffer.alloc(0);
      if (!Buffer.isBuffer(data)) data = Buffer.from(data.toString());
      const encrypter = make_encrypter(pwd);
      const salt = config.genSalt();
      salt[11] = header.crc >>> 24 & 255;
      if (oldlike) salt[10] = header.crc >>> 16 & 255;
      const result = Buffer.alloc(data.length + 12);
      encrypter(salt, result);
      return encrypter(data, result, 12);
    }
    module2.exports = { decrypt, encrypt, _salter };
  }
});

// node_modules/adm-zip/methods/index.js
var require_methods = __commonJS({
  "node_modules/adm-zip/methods/index.js"(exports2) {
    exports2.Deflater = require_deflater();
    exports2.Inflater = require_inflater();
    exports2.ZipCrypto = require_zipcrypto();
  }
});

// node_modules/adm-zip/zipEntry.js
var require_zipEntry = __commonJS({
  "node_modules/adm-zip/zipEntry.js"(exports2, module2) {
    var Utils = require_util();
    var Headers = require_headers();
    var Constants = Utils.Constants;
    var Methods = require_methods();
    module2.exports = function(options, input) {
      var _centralHeader = new Headers.EntryHeader(), _entryName = Buffer.alloc(0), _comment = Buffer.alloc(0), _isDirectory = false, uncompressedData = null, _extra = Buffer.alloc(0), _extralocal = Buffer.alloc(0), _efs = true;
      const opts = options;
      const decoder = typeof opts.decoder === "object" ? opts.decoder : Utils.decoder;
      _efs = decoder.hasOwnProperty("efs") ? decoder.efs : false;
      function getCompressedDataFromZip() {
        if (!input || !(input instanceof Uint8Array)) {
          return Buffer.alloc(0);
        }
        _extralocal = _centralHeader.loadLocalHeaderFromBinary(input);
        return input.slice(_centralHeader.realDataOffset, _centralHeader.realDataOffset + _centralHeader.compressedSize);
      }
      function crc32OK(data) {
        if (!_centralHeader.flags_desc) {
          if (Utils.crc32(data) !== _centralHeader.localHeader.crc) {
            return false;
          }
        } else {
          const descriptor = {};
          const dataEndOffset = _centralHeader.realDataOffset + _centralHeader.compressedSize;
          if (input.readUInt32LE(dataEndOffset) == Constants.LOCSIG || input.readUInt32LE(dataEndOffset) == Constants.CENSIG) {
            throw Utils.Errors.DESCRIPTOR_NOT_EXIST();
          }
          if (input.readUInt32LE(dataEndOffset) == Constants.EXTSIG) {
            descriptor.crc = input.readUInt32LE(dataEndOffset + Constants.EXTCRC);
            descriptor.compressedSize = input.readUInt32LE(dataEndOffset + Constants.EXTSIZ);
            descriptor.size = input.readUInt32LE(dataEndOffset + Constants.EXTLEN);
          } else if (input.readUInt16LE(dataEndOffset + 12) === 19280) {
            descriptor.crc = input.readUInt32LE(dataEndOffset + Constants.EXTCRC - 4);
            descriptor.compressedSize = input.readUInt32LE(dataEndOffset + Constants.EXTSIZ - 4);
            descriptor.size = input.readUInt32LE(dataEndOffset + Constants.EXTLEN - 4);
          } else {
            throw Utils.Errors.DESCRIPTOR_UNKNOWN();
          }
          if (descriptor.compressedSize !== _centralHeader.compressedSize || descriptor.size !== _centralHeader.size || descriptor.crc !== _centralHeader.crc) {
            throw Utils.Errors.DESCRIPTOR_FAULTY();
          }
          if (Utils.crc32(data) !== descriptor.crc) {
            return false;
          }
        }
        return true;
      }
      function decompress(async, callback, pass) {
        if (typeof callback === "undefined" && typeof async === "string") {
          pass = async;
          async = void 0;
        }
        if (_isDirectory) {
          if (async && callback) {
            callback(Buffer.alloc(0), Utils.Errors.DIRECTORY_CONTENT_ERROR());
          }
          return Buffer.alloc(0);
        }
        var compressedData = getCompressedDataFromZip();
        if (compressedData.length === 0) {
          if (async && callback) callback(compressedData);
          return compressedData;
        }
        if (_centralHeader.encrypted) {
          if ("string" !== typeof pass && !Buffer.isBuffer(pass)) {
            throw Utils.Errors.INVALID_PASS_PARAM();
          }
          compressedData = Methods.ZipCrypto.decrypt(compressedData, _centralHeader, pass);
        }
        var data = Buffer.alloc(_centralHeader.size);
        switch (_centralHeader.method) {
          case Utils.Constants.STORED:
            compressedData.copy(data);
            if (!crc32OK(data)) {
              if (async && callback) callback(data, Utils.Errors.BAD_CRC());
              throw Utils.Errors.BAD_CRC();
            } else {
              if (async && callback) callback(data);
              return data;
            }
          case Utils.Constants.DEFLATED:
            var inflater = new Methods.Inflater(compressedData, _centralHeader.size);
            if (!async) {
              const result = inflater.inflate(data);
              result.copy(data, 0);
              if (!crc32OK(data)) {
                throw Utils.Errors.BAD_CRC(`"${decoder.decode(_entryName)}"`);
              }
              return data;
            } else {
              inflater.inflateAsync(function(result) {
                result.copy(result, 0);
                if (callback) {
                  if (!crc32OK(result)) {
                    callback(result, Utils.Errors.BAD_CRC());
                  } else {
                    callback(result);
                  }
                }
              });
            }
            break;
          default:
            if (async && callback) callback(Buffer.alloc(0), Utils.Errors.UNKNOWN_METHOD());
            throw Utils.Errors.UNKNOWN_METHOD();
        }
      }
      function compress(async, callback) {
        if ((!uncompressedData || !uncompressedData.length) && Buffer.isBuffer(input)) {
          if (async && callback) callback(getCompressedDataFromZip());
          return getCompressedDataFromZip();
        }
        if (uncompressedData.length && !_isDirectory) {
          var compressedData;
          switch (_centralHeader.method) {
            case Utils.Constants.STORED:
              _centralHeader.compressedSize = _centralHeader.size;
              compressedData = Buffer.alloc(uncompressedData.length);
              uncompressedData.copy(compressedData);
              if (async && callback) callback(compressedData);
              return compressedData;
            default:
            case Utils.Constants.DEFLATED:
              var deflater = new Methods.Deflater(uncompressedData);
              if (!async) {
                var deflated = deflater.deflate();
                _centralHeader.compressedSize = deflated.length;
                return deflated;
              } else {
                deflater.deflateAsync(function(data) {
                  compressedData = Buffer.alloc(data.length);
                  _centralHeader.compressedSize = data.length;
                  data.copy(compressedData);
                  callback && callback(compressedData);
                });
              }
              deflater = null;
              break;
          }
        } else if (async && callback) {
          callback(Buffer.alloc(0));
        } else {
          return Buffer.alloc(0);
        }
      }
      function readUInt64LE(buffer, offset) {
        return (buffer.readUInt32LE(offset + 4) << 4) + buffer.readUInt32LE(offset);
      }
      function parseExtra(data) {
        try {
          var offset = 0;
          var signature, size, part;
          while (offset + 4 < data.length) {
            signature = data.readUInt16LE(offset);
            offset += 2;
            size = data.readUInt16LE(offset);
            offset += 2;
            part = data.slice(offset, offset + size);
            offset += size;
            if (Constants.ID_ZIP64 === signature) {
              parseZip64ExtendedInformation(part);
            }
          }
        } catch (error) {
          throw Utils.Errors.EXTRA_FIELD_PARSE_ERROR();
        }
      }
      function parseZip64ExtendedInformation(data) {
        var size, compressedSize, offset, diskNumStart;
        if (data.length >= Constants.EF_ZIP64_SCOMP) {
          size = readUInt64LE(data, Constants.EF_ZIP64_SUNCOMP);
          if (_centralHeader.size === Constants.EF_ZIP64_OR_32) {
            _centralHeader.size = size;
          }
        }
        if (data.length >= Constants.EF_ZIP64_RHO) {
          compressedSize = readUInt64LE(data, Constants.EF_ZIP64_SCOMP);
          if (_centralHeader.compressedSize === Constants.EF_ZIP64_OR_32) {
            _centralHeader.compressedSize = compressedSize;
          }
        }
        if (data.length >= Constants.EF_ZIP64_DSN) {
          offset = readUInt64LE(data, Constants.EF_ZIP64_RHO);
          if (_centralHeader.offset === Constants.EF_ZIP64_OR_32) {
            _centralHeader.offset = offset;
          }
        }
        if (data.length >= Constants.EF_ZIP64_DSN + 4) {
          diskNumStart = data.readUInt32LE(Constants.EF_ZIP64_DSN);
          if (_centralHeader.diskNumStart === Constants.EF_ZIP64_OR_16) {
            _centralHeader.diskNumStart = diskNumStart;
          }
        }
      }
      return {
        get entryName() {
          return decoder.decode(_entryName);
        },
        get rawEntryName() {
          return _entryName;
        },
        set entryName(val) {
          _entryName = Utils.toBuffer(val, decoder.encode);
          var lastChar = _entryName[_entryName.length - 1];
          _isDirectory = lastChar === 47 || lastChar === 92;
          _centralHeader.fileNameLength = _entryName.length;
        },
        get efs() {
          if (typeof _efs === "function") {
            return _efs(this.entryName);
          } else {
            return _efs;
          }
        },
        get extra() {
          return _extra;
        },
        set extra(val) {
          _extra = val;
          _centralHeader.extraLength = val.length;
          parseExtra(val);
        },
        get comment() {
          return decoder.decode(_comment);
        },
        set comment(val) {
          _comment = Utils.toBuffer(val, decoder.encode);
          _centralHeader.commentLength = _comment.length;
          if (_comment.length > 65535) throw Utils.Errors.COMMENT_TOO_LONG();
        },
        get name() {
          var n = decoder.decode(_entryName);
          return _isDirectory ? n.substr(n.length - 1).split("/").pop() : n.split("/").pop();
        },
        get isDirectory() {
          return _isDirectory;
        },
        getCompressedData: function() {
          return compress(false, null);
        },
        getCompressedDataAsync: function(callback) {
          compress(true, callback);
        },
        setData: function(value) {
          uncompressedData = Utils.toBuffer(value, Utils.decoder.encode);
          if (!_isDirectory && uncompressedData.length) {
            _centralHeader.size = uncompressedData.length;
            _centralHeader.method = Utils.Constants.DEFLATED;
            _centralHeader.crc = Utils.crc32(value);
            _centralHeader.changed = true;
          } else {
            _centralHeader.method = Utils.Constants.STORED;
          }
        },
        getData: function(pass) {
          if (_centralHeader.changed) {
            return uncompressedData;
          } else {
            return decompress(false, null, pass);
          }
        },
        getDataAsync: function(callback, pass) {
          if (_centralHeader.changed) {
            callback(uncompressedData);
          } else {
            decompress(true, callback, pass);
          }
        },
        set attr(attr) {
          _centralHeader.attr = attr;
        },
        get attr() {
          return _centralHeader.attr;
        },
        set header(data) {
          _centralHeader.loadFromBinary(data);
        },
        get header() {
          return _centralHeader;
        },
        packCentralHeader: function() {
          _centralHeader.flags_efs = this.efs;
          _centralHeader.extraLength = _extra.length;
          var header = _centralHeader.centralHeaderToBinary();
          var addpos = Utils.Constants.CENHDR;
          _entryName.copy(header, addpos);
          addpos += _entryName.length;
          _extra.copy(header, addpos);
          addpos += _centralHeader.extraLength;
          _comment.copy(header, addpos);
          return header;
        },
        packLocalHeader: function() {
          let addpos = 0;
          _centralHeader.flags_efs = this.efs;
          _centralHeader.extraLocalLength = _extralocal.length;
          const localHeaderBuf = _centralHeader.localHeaderToBinary();
          const localHeader = Buffer.alloc(localHeaderBuf.length + _entryName.length + _centralHeader.extraLocalLength);
          localHeaderBuf.copy(localHeader, addpos);
          addpos += localHeaderBuf.length;
          _entryName.copy(localHeader, addpos);
          addpos += _entryName.length;
          _extralocal.copy(localHeader, addpos);
          addpos += _extralocal.length;
          return localHeader;
        },
        toJSON: function() {
          const bytes = function(nr) {
            return "<" + (nr && nr.length + " bytes buffer" || "null") + ">";
          };
          return {
            entryName: this.entryName,
            name: this.name,
            comment: this.comment,
            isDirectory: this.isDirectory,
            header: _centralHeader.toJSON(),
            compressedData: bytes(input),
            data: bytes(uncompressedData)
          };
        },
        toString: function() {
          return JSON.stringify(this.toJSON(), null, "	");
        }
      };
    };
  }
});

// node_modules/adm-zip/zipFile.js
var require_zipFile = __commonJS({
  "node_modules/adm-zip/zipFile.js"(exports2, module2) {
    var ZipEntry = require_zipEntry();
    var Headers = require_headers();
    var Utils = require_util();
    module2.exports = function(inBuffer, options) {
      var entryList = [], entryTable = {}, _comment = Buffer.alloc(0), mainHeader = new Headers.MainHeader(), loadedEntries = false;
      var password = null;
      const temporary = /* @__PURE__ */ new Set();
      const opts = options;
      const { noSort, decoder } = opts;
      if (inBuffer) {
        readMainHeader(opts.readEntries);
      } else {
        loadedEntries = true;
      }
      function makeTemporaryFolders() {
        const foldersList = /* @__PURE__ */ new Set();
        for (const elem of Object.keys(entryTable)) {
          const elements = elem.split("/");
          elements.pop();
          if (!elements.length) continue;
          for (let i = 0; i < elements.length; i++) {
            const sub = elements.slice(0, i + 1).join("/") + "/";
            foldersList.add(sub);
          }
        }
        for (const elem of foldersList) {
          if (!(elem in entryTable)) {
            const tempfolder = new ZipEntry(opts);
            tempfolder.entryName = elem;
            tempfolder.attr = 16;
            tempfolder.temporary = true;
            entryList.push(tempfolder);
            entryTable[tempfolder.entryName] = tempfolder;
            temporary.add(tempfolder);
          }
        }
      }
      function readEntries() {
        loadedEntries = true;
        entryTable = {};
        if (mainHeader.diskEntries > (inBuffer.length - mainHeader.offset) / Utils.Constants.CENHDR) {
          throw Utils.Errors.DISK_ENTRY_TOO_LARGE();
        }
        entryList = new Array(mainHeader.diskEntries);
        var index = mainHeader.offset;
        for (var i = 0; i < entryList.length; i++) {
          var tmp = index, entry = new ZipEntry(opts, inBuffer);
          entry.header = inBuffer.slice(tmp, tmp += Utils.Constants.CENHDR);
          entry.entryName = inBuffer.slice(tmp, tmp += entry.header.fileNameLength);
          if (entry.header.extraLength) {
            entry.extra = inBuffer.slice(tmp, tmp += entry.header.extraLength);
          }
          if (entry.header.commentLength) entry.comment = inBuffer.slice(tmp, tmp + entry.header.commentLength);
          index += entry.header.centralHeaderSize;
          entryList[i] = entry;
          entryTable[entry.entryName] = entry;
        }
        temporary.clear();
        makeTemporaryFolders();
      }
      function readMainHeader(readNow) {
        var i = inBuffer.length - Utils.Constants.ENDHDR, max = Math.max(0, i - 65535), n = max, endStart = inBuffer.length, endOffset = -1, commentEnd = 0;
        const trailingSpace = typeof opts.trailingSpace === "boolean" ? opts.trailingSpace : false;
        if (trailingSpace) max = 0;
        for (i; i >= n; i--) {
          if (inBuffer[i] !== 80) continue;
          if (inBuffer.readUInt32LE(i) === Utils.Constants.ENDSIG) {
            endOffset = i;
            commentEnd = i;
            endStart = i + Utils.Constants.ENDHDR;
            n = i - Utils.Constants.END64HDR;
            continue;
          }
          if (inBuffer.readUInt32LE(i) === Utils.Constants.END64SIG) {
            n = max;
            continue;
          }
          if (inBuffer.readUInt32LE(i) === Utils.Constants.ZIP64SIG) {
            endOffset = i;
            endStart = i + Utils.readBigUInt64LE(inBuffer, i + Utils.Constants.ZIP64SIZE) + Utils.Constants.ZIP64LEAD;
            break;
          }
        }
        if (endOffset == -1) throw Utils.Errors.INVALID_FORMAT();
        mainHeader.loadFromBinary(inBuffer.slice(endOffset, endStart));
        if (mainHeader.commentLength) {
          _comment = inBuffer.slice(commentEnd + Utils.Constants.ENDHDR);
        }
        if (readNow) readEntries();
      }
      function sortEntries() {
        if (entryList.length > 1 && !noSort) {
          entryList.sort((a, b) => a.entryName.toLowerCase().localeCompare(b.entryName.toLowerCase()));
        }
      }
      return {
        /**
         * Returns an array of ZipEntry objects existent in the current opened archive
         * @return Array
         */
        get entries() {
          if (!loadedEntries) {
            readEntries();
          }
          return entryList.filter((e) => !temporary.has(e));
        },
        /**
         * Archive comment
         * @return {String}
         */
        get comment() {
          return decoder.decode(_comment);
        },
        set comment(val) {
          _comment = Utils.toBuffer(val, decoder.encode);
          mainHeader.commentLength = _comment.length;
        },
        getEntryCount: function() {
          if (!loadedEntries) {
            return mainHeader.diskEntries;
          }
          return entryList.length;
        },
        forEach: function(callback) {
          this.entries.forEach(callback);
        },
        /**
         * Returns a reference to the entry with the given name or null if entry is inexistent
         *
         * @param entryName
         * @return ZipEntry
         */
        getEntry: function(entryName) {
          if (!loadedEntries) {
            readEntries();
          }
          return entryTable[entryName] || null;
        },
        /**
         * Adds the given entry to the entry list
         *
         * @param entry
         */
        setEntry: function(entry) {
          if (!loadedEntries) {
            readEntries();
          }
          entryList.push(entry);
          entryTable[entry.entryName] = entry;
          mainHeader.totalEntries = entryList.length;
        },
        /**
         * Removes the file with the given name from the entry list.
         *
         * If the entry is a directory, then all nested files and directories will be removed
         * @param entryName
         * @returns {void}
         */
        deleteFile: function(entryName, withsubfolders = true) {
          if (!loadedEntries) {
            readEntries();
          }
          const entry = entryTable[entryName];
          const list = this.getEntryChildren(entry, withsubfolders).map((child) => child.entryName);
          list.forEach(this.deleteEntry);
        },
        /**
         * Removes the entry with the given name from the entry list.
         *
         * @param {string} entryName
         * @returns {void}
         */
        deleteEntry: function(entryName) {
          if (!loadedEntries) {
            readEntries();
          }
          const entry = entryTable[entryName];
          const index = entryList.indexOf(entry);
          if (index >= 0) {
            entryList.splice(index, 1);
            delete entryTable[entryName];
            mainHeader.totalEntries = entryList.length;
          }
        },
        /**
         *  Iterates and returns all nested files and directories of the given entry
         *
         * @param entry
         * @return Array
         */
        getEntryChildren: function(entry, subfolders = true) {
          if (!loadedEntries) {
            readEntries();
          }
          if (typeof entry === "object") {
            if (entry.isDirectory && subfolders) {
              const list = [];
              const name = entry.entryName;
              for (const zipEntry of entryList) {
                if (zipEntry.entryName.startsWith(name)) {
                  list.push(zipEntry);
                }
              }
              return list;
            } else {
              return [entry];
            }
          }
          return [];
        },
        /**
         *  How many child elements entry has
         *
         * @param {ZipEntry} entry
         * @return {integer}
         */
        getChildCount: function(entry) {
          if (entry && entry.isDirectory) {
            const list = this.getEntryChildren(entry);
            return list.includes(entry) ? list.length - 1 : list.length;
          }
          return 0;
        },
        /**
         * Returns the zip file
         *
         * @return Buffer
         */
        compressToBuffer: function() {
          if (!loadedEntries) {
            readEntries();
          }
          sortEntries();
          const dataBlock = [];
          const headerBlocks = [];
          let totalSize = 0;
          let dindex = 0;
          mainHeader.size = 0;
          mainHeader.offset = 0;
          let totalEntries = 0;
          for (const entry of this.entries) {
            const compressedData = entry.getCompressedData();
            entry.header.offset = dindex;
            const localHeader = entry.packLocalHeader();
            const dataLength = localHeader.length + compressedData.length;
            dindex += dataLength;
            dataBlock.push(localHeader);
            dataBlock.push(compressedData);
            const centralHeader = entry.packCentralHeader();
            headerBlocks.push(centralHeader);
            mainHeader.size += centralHeader.length;
            totalSize += dataLength + centralHeader.length;
            totalEntries++;
          }
          totalSize += mainHeader.mainHeaderSize;
          mainHeader.offset = dindex;
          mainHeader.totalEntries = totalEntries;
          dindex = 0;
          const outBuffer = Buffer.alloc(totalSize);
          for (const content of dataBlock) {
            content.copy(outBuffer, dindex);
            dindex += content.length;
          }
          for (const content of headerBlocks) {
            content.copy(outBuffer, dindex);
            dindex += content.length;
          }
          const mh = mainHeader.toBinary();
          if (_comment) {
            _comment.copy(mh, Utils.Constants.ENDHDR);
          }
          mh.copy(outBuffer, dindex);
          inBuffer = outBuffer;
          loadedEntries = false;
          return outBuffer;
        },
        toAsyncBuffer: function(onSuccess, onFail, onItemStart, onItemEnd) {
          try {
            if (!loadedEntries) {
              readEntries();
            }
            sortEntries();
            const dataBlock = [];
            const centralHeaders = [];
            let totalSize = 0;
            let dindex = 0;
            let totalEntries = 0;
            mainHeader.size = 0;
            mainHeader.offset = 0;
            const compress2Buffer = function(entryLists) {
              if (entryLists.length > 0) {
                const entry = entryLists.shift();
                const name = entry.entryName + entry.extra.toString();
                if (onItemStart) onItemStart(name);
                entry.getCompressedDataAsync(function(compressedData) {
                  if (onItemEnd) onItemEnd(name);
                  entry.header.offset = dindex;
                  const localHeader = entry.packLocalHeader();
                  const dataLength = localHeader.length + compressedData.length;
                  dindex += dataLength;
                  dataBlock.push(localHeader);
                  dataBlock.push(compressedData);
                  const centalHeader = entry.packCentralHeader();
                  centralHeaders.push(centalHeader);
                  mainHeader.size += centalHeader.length;
                  totalSize += dataLength + centalHeader.length;
                  totalEntries++;
                  compress2Buffer(entryLists);
                });
              } else {
                totalSize += mainHeader.mainHeaderSize;
                mainHeader.offset = dindex;
                mainHeader.totalEntries = totalEntries;
                dindex = 0;
                const outBuffer = Buffer.alloc(totalSize);
                dataBlock.forEach(function(content) {
                  content.copy(outBuffer, dindex);
                  dindex += content.length;
                });
                centralHeaders.forEach(function(content) {
                  content.copy(outBuffer, dindex);
                  dindex += content.length;
                });
                const mh = mainHeader.toBinary();
                if (_comment) {
                  _comment.copy(mh, Utils.Constants.ENDHDR);
                }
                mh.copy(outBuffer, dindex);
                inBuffer = outBuffer;
                loadedEntries = false;
                onSuccess(outBuffer);
              }
            };
            compress2Buffer(Array.from(this.entries));
          } catch (e) {
            onFail(e);
          }
        }
      };
    };
  }
});

// node_modules/adm-zip/adm-zip.js
var require_adm_zip = __commonJS({
  "node_modules/adm-zip/adm-zip.js"(exports2, module2) {
    var Utils = require_util();
    var pth = require("path");
    var ZipEntry = require_zipEntry();
    var ZipFile = require_zipFile();
    var get_Bool = (...val) => Utils.findLast(val, (c) => typeof c === "boolean");
    var get_Str = (...val) => Utils.findLast(val, (c) => typeof c === "string");
    var get_Fun = (...val) => Utils.findLast(val, (c) => typeof c === "function");
    var defaultOptions = {
      // option "noSort" : if true it disables files sorting
      noSort: false,
      // read entries during load (initial loading may be slower)
      readEntries: false,
      // default method is none
      method: Utils.Constants.NONE,
      // file system
      fs: null
    };
    module2.exports = function(input, options) {
      let inBuffer = null;
      const opts = Object.assign(/* @__PURE__ */ Object.create(null), defaultOptions);
      if (input && "object" === typeof input) {
        if (!(input instanceof Uint8Array)) {
          Object.assign(opts, input);
          input = opts.input ? opts.input : void 0;
          if (opts.input) delete opts.input;
        }
        if (Buffer.isBuffer(input)) {
          inBuffer = input;
          opts.method = Utils.Constants.BUFFER;
          input = void 0;
        }
      }
      Object.assign(opts, options);
      const filetools = new Utils(opts);
      if (typeof opts.decoder !== "object" || typeof opts.decoder.encode !== "function" || typeof opts.decoder.decode !== "function") {
        opts.decoder = Utils.decoder;
      }
      if (input && "string" === typeof input) {
        if (filetools.fs.existsSync(input)) {
          opts.method = Utils.Constants.FILE;
          opts.filename = input;
          inBuffer = filetools.fs.readFileSync(input);
        } else {
          throw Utils.Errors.INVALID_FILENAME();
        }
      }
      const _zip = new ZipFile(inBuffer, opts);
      const { canonical, sanitize, zipnamefix } = Utils;
      function getEntry(entry) {
        if (entry && _zip) {
          var item;
          if (typeof entry === "string") item = _zip.getEntry(pth.posix.normalize(entry));
          if (typeof entry === "object" && typeof entry.entryName !== "undefined" && typeof entry.header !== "undefined") item = _zip.getEntry(entry.entryName);
          if (item) {
            return item;
          }
        }
        return null;
      }
      function fixPath(zipPath) {
        const { join, normalize, sep } = pth.posix;
        return join(".", normalize(sep + zipPath.split("\\").join(sep) + sep));
      }
      function filenameFilter(filterfn) {
        if (filterfn instanceof RegExp) {
          return /* @__PURE__ */ function(rx) {
            return function(filename) {
              return rx.test(filename);
            };
          }(filterfn);
        } else if ("function" !== typeof filterfn) {
          return () => true;
        }
        return filterfn;
      }
      const relativePath = (local, entry) => {
        let lastChar = entry.slice(-1);
        lastChar = lastChar === filetools.sep ? filetools.sep : "";
        return pth.relative(local, entry) + lastChar;
      };
      return {
        /**
         * Extracts the given entry from the archive and returns the content as a Buffer object
         * @param {ZipEntry|string} entry ZipEntry object or String with the full path of the entry
         * @param {Buffer|string} [pass] - password
         * @return Buffer or Null in case of error
         */
        readFile: function(entry, pass) {
          var item = getEntry(entry);
          return item && item.getData(pass) || null;
        },
        /**
         * Returns how many child elements has on entry (directories) on files it is always 0
         * @param {ZipEntry|string} entry ZipEntry object or String with the full path of the entry
         * @returns {integer}
         */
        childCount: function(entry) {
          const item = getEntry(entry);
          if (item) {
            return _zip.getChildCount(item);
          }
        },
        /**
         * Asynchronous readFile
         * @param {ZipEntry|string} entry ZipEntry object or String with the full path of the entry
         * @param {callback} callback
         *
         * @return Buffer or Null in case of error
         */
        readFileAsync: function(entry, callback) {
          var item = getEntry(entry);
          if (item) {
            item.getDataAsync(callback);
          } else {
            callback(null, "getEntry failed for:" + entry);
          }
        },
        /**
         * Extracts the given entry from the archive and returns the content as plain text in the given encoding
         * @param {ZipEntry|string} entry - ZipEntry object or String with the full path of the entry
         * @param {string} encoding - Optional. If no encoding is specified utf8 is used
         *
         * @return String
         */
        readAsText: function(entry, encoding) {
          var item = getEntry(entry);
          if (item) {
            var data = item.getData();
            if (data && data.length) {
              return data.toString(encoding || "utf8");
            }
          }
          return "";
        },
        /**
         * Asynchronous readAsText
         * @param {ZipEntry|string} entry ZipEntry object or String with the full path of the entry
         * @param {callback} callback
         * @param {string} [encoding] - Optional. If no encoding is specified utf8 is used
         *
         * @return String
         */
        readAsTextAsync: function(entry, callback, encoding) {
          var item = getEntry(entry);
          if (item) {
            item.getDataAsync(function(data, err) {
              if (err) {
                callback(data, err);
                return;
              }
              if (data && data.length) {
                callback(data.toString(encoding || "utf8"));
              } else {
                callback("");
              }
            });
          } else {
            callback("");
          }
        },
        /**
         * Remove the entry from the file or the entry and all it's nested directories and files if the given entry is a directory
         *
         * @param {ZipEntry|string} entry
         * @returns {void}
         */
        deleteFile: function(entry, withsubfolders = true) {
          var item = getEntry(entry);
          if (item) {
            _zip.deleteFile(item.entryName, withsubfolders);
          }
        },
        /**
         * Remove the entry from the file or directory without affecting any nested entries
         *
         * @param {ZipEntry|string} entry
         * @returns {void}
         */
        deleteEntry: function(entry) {
          var item = getEntry(entry);
          if (item) {
            _zip.deleteEntry(item.entryName);
          }
        },
        /**
         * Adds a comment to the zip. The zip must be rewritten after adding the comment.
         *
         * @param {string} comment
         */
        addZipComment: function(comment) {
          _zip.comment = comment;
        },
        /**
         * Returns the zip comment
         *
         * @return String
         */
        getZipComment: function() {
          return _zip.comment || "";
        },
        /**
         * Adds a comment to a specified zipEntry. The zip must be rewritten after adding the comment
         * The comment cannot exceed 65535 characters in length
         *
         * @param {ZipEntry} entry
         * @param {string} comment
         */
        addZipEntryComment: function(entry, comment) {
          var item = getEntry(entry);
          if (item) {
            item.comment = comment;
          }
        },
        /**
         * Returns the comment of the specified entry
         *
         * @param {ZipEntry} entry
         * @return String
         */
        getZipEntryComment: function(entry) {
          var item = getEntry(entry);
          if (item) {
            return item.comment || "";
          }
          return "";
        },
        /**
         * Updates the content of an existing entry inside the archive. The zip must be rewritten after updating the content
         *
         * @param {ZipEntry} entry
         * @param {Buffer} content
         */
        updateFile: function(entry, content) {
          var item = getEntry(entry);
          if (item) {
            item.setData(content);
          }
        },
        /**
         * Adds a file from the disk to the archive
         *
         * @param {string} localPath File to add to zip
         * @param {string} [zipPath] Optional path inside the zip
         * @param {string} [zipName] Optional name for the file
         * @param {string} [comment] Optional file comment
         */
        addLocalFile: function(localPath2, zipPath, zipName, comment) {
          if (filetools.fs.existsSync(localPath2)) {
            zipPath = zipPath ? fixPath(zipPath) : "";
            const p = pth.win32.basename(pth.win32.normalize(localPath2));
            zipPath += zipName ? zipName : p;
            const _attr = filetools.fs.statSync(localPath2);
            const data = _attr.isFile() ? filetools.fs.readFileSync(localPath2) : Buffer.alloc(0);
            if (_attr.isDirectory()) zipPath += filetools.sep;
            this.addFile(zipPath, data, comment, _attr);
          } else {
            throw Utils.Errors.FILE_NOT_FOUND(localPath2);
          }
        },
        /**
         * Callback for showing if everything was done.
         *
         * @callback doneCallback
         * @param {Error} err - Error object
         * @param {boolean} done - was request fully completed
         */
        /**
         * Adds a file from the disk to the archive
         *
         * @param {(object|string)} options - options object, if it is string it us used as localPath.
         * @param {string} options.localPath - Local path to the file.
         * @param {string} [options.comment] - Optional file comment.
         * @param {string} [options.zipPath] - Optional path inside the zip
         * @param {string} [options.zipName] - Optional name for the file
         * @param {doneCallback} callback - The callback that handles the response.
         */
        addLocalFileAsync: function(options2, callback) {
          options2 = typeof options2 === "object" ? options2 : { localPath: options2 };
          const localPath2 = pth.resolve(options2.localPath);
          const { comment } = options2;
          let { zipPath, zipName } = options2;
          const self2 = this;
          filetools.fs.stat(localPath2, function(err, stats) {
            if (err) return callback(err, false);
            zipPath = zipPath ? fixPath(zipPath) : "";
            const p = pth.win32.basename(pth.win32.normalize(localPath2));
            zipPath += zipName ? zipName : p;
            if (stats.isFile()) {
              filetools.fs.readFile(localPath2, function(err2, data) {
                if (err2) return callback(err2, false);
                self2.addFile(zipPath, data, comment, stats);
                return setImmediate(callback, void 0, true);
              });
            } else if (stats.isDirectory()) {
              zipPath += filetools.sep;
              self2.addFile(zipPath, Buffer.alloc(0), comment, stats);
              return setImmediate(callback, void 0, true);
            }
          });
        },
        /**
         * Adds a local directory and all its nested files and directories to the archive
         *
         * @param {string} localPath - local path to the folder
         * @param {string} [zipPath] - optional path inside zip
         * @param {(RegExp|function)} [filter] - optional RegExp or Function if files match will be included.
         */
        addLocalFolder: function(localPath2, zipPath, filter) {
          filter = filenameFilter(filter);
          zipPath = zipPath ? fixPath(zipPath) : "";
          localPath2 = pth.normalize(localPath2);
          if (filetools.fs.existsSync(localPath2)) {
            const items = filetools.findFiles(localPath2);
            const self2 = this;
            if (items.length) {
              for (const filepath of items) {
                const p = pth.join(zipPath, relativePath(localPath2, filepath));
                if (filter(p)) {
                  self2.addLocalFile(filepath, pth.dirname(p));
                }
              }
            }
          } else {
            throw Utils.Errors.FILE_NOT_FOUND(localPath2);
          }
        },
        /**
         * Asynchronous addLocalFolder
         * @param {string} localPath
         * @param {callback} callback
         * @param {string} [zipPath] optional path inside zip
         * @param {RegExp|function} [filter] optional RegExp or Function if files match will
         *               be included.
         */
        addLocalFolderAsync: function(localPath2, callback, zipPath, filter) {
          filter = filenameFilter(filter);
          zipPath = zipPath ? fixPath(zipPath) : "";
          localPath2 = pth.normalize(localPath2);
          var self2 = this;
          filetools.fs.open(localPath2, "r", function(err) {
            if (err && err.code === "ENOENT") {
              callback(void 0, Utils.Errors.FILE_NOT_FOUND(localPath2));
            } else if (err) {
              callback(void 0, err);
            } else {
              var items = filetools.findFiles(localPath2);
              var i = -1;
              var next = function() {
                i += 1;
                if (i < items.length) {
                  var filepath = items[i];
                  var p = relativePath(localPath2, filepath).split("\\").join("/");
                  p = p.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\x20-\x7E]/g, "");
                  if (filter(p)) {
                    filetools.fs.stat(filepath, function(er0, stats) {
                      if (er0) callback(void 0, er0);
                      if (stats.isFile()) {
                        filetools.fs.readFile(filepath, function(er1, data) {
                          if (er1) {
                            callback(void 0, er1);
                          } else {
                            self2.addFile(zipPath + p, data, "", stats);
                            next();
                          }
                        });
                      } else {
                        self2.addFile(zipPath + p + "/", Buffer.alloc(0), "", stats);
                        next();
                      }
                    });
                  } else {
                    process.nextTick(() => {
                      next();
                    });
                  }
                } else {
                  callback(true, void 0);
                }
              };
              next();
            }
          });
        },
        /**
         * Adds a local directory and all its nested files and directories to the archive
         *
         * @param {object | string} options - options object, if it is string it us used as localPath.
         * @param {string} options.localPath - Local path to the folder.
         * @param {string} [options.zipPath] - optional path inside zip.
         * @param {RegExp|function} [options.filter] - optional RegExp or Function if files match will be included.
         * @param {function|string} [options.namefix] - optional function to help fix filename
         * @param {doneCallback} callback - The callback that handles the response.
         *
         */
        addLocalFolderAsync2: function(options2, callback) {
          const self2 = this;
          options2 = typeof options2 === "object" ? options2 : { localPath: options2 };
          localPath = pth.resolve(fixPath(options2.localPath));
          let { zipPath, filter, namefix } = options2;
          if (filter instanceof RegExp) {
            filter = /* @__PURE__ */ function(rx) {
              return function(filename) {
                return rx.test(filename);
              };
            }(filter);
          } else if ("function" !== typeof filter) {
            filter = function() {
              return true;
            };
          }
          zipPath = zipPath ? fixPath(zipPath) : "";
          if (namefix == "latin1") {
            namefix = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\x20-\x7E]/g, "");
          }
          if (typeof namefix !== "function") namefix = (str) => str;
          const relPathFix = (entry) => pth.join(zipPath, namefix(relativePath(localPath, entry)));
          const fileNameFix = (entry) => pth.win32.basename(pth.win32.normalize(namefix(entry)));
          filetools.fs.open(localPath, "r", function(err) {
            if (err && err.code === "ENOENT") {
              callback(void 0, Utils.Errors.FILE_NOT_FOUND(localPath));
            } else if (err) {
              callback(void 0, err);
            } else {
              filetools.findFilesAsync(localPath, function(err2, fileEntries) {
                if (err2) return callback(err2);
                fileEntries = fileEntries.filter((dir) => filter(relPathFix(dir)));
                if (!fileEntries.length) callback(void 0, false);
                setImmediate(
                  fileEntries.reverse().reduce(function(next, entry) {
                    return function(err3, done) {
                      if (err3 || done === false) return setImmediate(next, err3, false);
                      self2.addLocalFileAsync(
                        {
                          localPath: entry,
                          zipPath: pth.dirname(relPathFix(entry)),
                          zipName: fileNameFix(entry)
                        },
                        next
                      );
                    };
                  }, callback)
                );
              });
            }
          });
        },
        /**
         * Adds a local directory and all its nested files and directories to the archive
         *
         * @param {string} localPath - path where files will be extracted
         * @param {object} props - optional properties
         * @param {string} [props.zipPath] - optional path inside zip
         * @param {RegExp|function} [props.filter] - optional RegExp or Function if files match will be included.
         * @param {function|string} [props.namefix] - optional function to help fix filename
         */
        addLocalFolderPromise: function(localPath2, props) {
          return new Promise((resolve, reject) => {
            this.addLocalFolderAsync2(Object.assign({ localPath: localPath2 }, props), (err, done) => {
              if (err) reject(err);
              if (done) resolve(this);
            });
          });
        },
        /**
         * Allows you to create a entry (file or directory) in the zip file.
         * If you want to create a directory the entryName must end in / and a null buffer should be provided.
         * Comment and attributes are optional
         *
         * @param {string} entryName
         * @param {Buffer | string} content - file content as buffer or utf8 coded string
         * @param {string} [comment] - file comment
         * @param {number | object} [attr] - number as unix file permissions, object as filesystem Stats object
         */
        addFile: function(entryName, content, comment, attr) {
          entryName = zipnamefix(entryName);
          let entry = getEntry(entryName);
          const update = entry != null;
          if (!update) {
            entry = new ZipEntry(opts);
            entry.entryName = entryName;
          }
          entry.comment = comment || "";
          const isStat = "object" === typeof attr && attr instanceof filetools.fs.Stats;
          if (isStat) {
            entry.header.time = attr.mtime;
          }
          var fileattr = entry.isDirectory ? 16 : 0;
          let unix = entry.isDirectory ? 16384 : 32768;
          if (isStat) {
            unix |= 4095 & attr.mode;
          } else if ("number" === typeof attr) {
            unix |= 4095 & attr;
          } else {
            unix |= entry.isDirectory ? 493 : 420;
          }
          fileattr = (fileattr | unix << 16) >>> 0;
          entry.attr = fileattr;
          entry.setData(content);
          if (!update) _zip.setEntry(entry);
          return entry;
        },
        /**
         * Returns an array of ZipEntry objects representing the files and folders inside the archive
         *
         * @param {string} [password]
         * @returns Array
         */
        getEntries: function(password) {
          _zip.password = password;
          return _zip ? _zip.entries : [];
        },
        /**
         * Returns a ZipEntry object representing the file or folder specified by ``name``.
         *
         * @param {string} name
         * @return ZipEntry
         */
        getEntry: function(name) {
          return getEntry(name);
        },
        getEntryCount: function() {
          return _zip.getEntryCount();
        },
        forEach: function(callback) {
          return _zip.forEach(callback);
        },
        /**
         * Extracts the given entry to the given targetPath
         * If the entry is a directory inside the archive, the entire directory and it's subdirectories will be extracted
         *
         * @param {string|ZipEntry} entry - ZipEntry object or String with the full path of the entry
         * @param {string} targetPath - Target folder where to write the file
         * @param {boolean} [maintainEntryPath=true] - If maintainEntryPath is true and the entry is inside a folder, the entry folder will be created in targetPath as well. Default is TRUE
         * @param {boolean} [overwrite=false] - If the file already exists at the target path, the file will be overwriten if this is true.
         * @param {boolean} [keepOriginalPermission=false] - The file will be set as the permission from the entry if this is true.
         * @param {string} [outFileName] - String If set will override the filename of the extracted file (Only works if the entry is a file)
         *
         * @return Boolean
         */
        extractEntryTo: function(entry, targetPath, maintainEntryPath, overwrite, keepOriginalPermission, outFileName) {
          overwrite = get_Bool(false, overwrite);
          keepOriginalPermission = get_Bool(false, keepOriginalPermission);
          maintainEntryPath = get_Bool(true, maintainEntryPath);
          outFileName = get_Str(keepOriginalPermission, outFileName);
          var item = getEntry(entry);
          if (!item) {
            throw Utils.Errors.NO_ENTRY();
          }
          var entryName = canonical(item.entryName);
          var target = sanitize(targetPath, outFileName && !item.isDirectory ? outFileName : maintainEntryPath ? entryName : pth.basename(entryName));
          if (item.isDirectory) {
            var children = _zip.getEntryChildren(item);
            children.forEach(function(child) {
              if (child.isDirectory) return;
              var content2 = child.getData();
              if (!content2) {
                throw Utils.Errors.CANT_EXTRACT_FILE();
              }
              var name = canonical(child.entryName);
              var childName = sanitize(targetPath, maintainEntryPath ? name : pth.basename(name));
              const fileAttr2 = keepOriginalPermission ? child.header.fileAttr : void 0;
              filetools.writeFileTo(childName, content2, overwrite, fileAttr2);
            });
            return true;
          }
          var content = item.getData(_zip.password);
          if (!content) throw Utils.Errors.CANT_EXTRACT_FILE();
          if (filetools.fs.existsSync(target) && !overwrite) {
            throw Utils.Errors.CANT_OVERRIDE();
          }
          const fileAttr = keepOriginalPermission ? entry.header.fileAttr : void 0;
          filetools.writeFileTo(target, content, overwrite, fileAttr);
          return true;
        },
        /**
         * Test the archive
         * @param {string} [pass]
         */
        test: function(pass) {
          if (!_zip) {
            return false;
          }
          for (var entry in _zip.entries) {
            try {
              if (entry.isDirectory) {
                continue;
              }
              var content = _zip.entries[entry].getData(pass);
              if (!content) {
                return false;
              }
            } catch (err) {
              return false;
            }
          }
          return true;
        },
        /**
         * Extracts the entire archive to the given location
         *
         * @param {string} targetPath Target location
         * @param {boolean} [overwrite=false] If the file already exists at the target path, the file will be overwriten if this is true.
         *                  Default is FALSE
         * @param {boolean} [keepOriginalPermission=false] The file will be set as the permission from the entry if this is true.
         *                  Default is FALSE
         * @param {string|Buffer} [pass] password
         */
        extractAllTo: function(targetPath, overwrite, keepOriginalPermission, pass) {
          keepOriginalPermission = get_Bool(false, keepOriginalPermission);
          pass = get_Str(keepOriginalPermission, pass);
          overwrite = get_Bool(false, overwrite);
          if (!_zip) throw Utils.Errors.NO_ZIP();
          _zip.entries.forEach(function(entry) {
            var entryName = sanitize(targetPath, canonical(entry.entryName));
            if (entry.isDirectory) {
              filetools.makeDir(entryName);
              return;
            }
            var content = entry.getData(pass);
            if (!content) {
              throw Utils.Errors.CANT_EXTRACT_FILE();
            }
            const fileAttr = keepOriginalPermission ? entry.header.fileAttr : void 0;
            filetools.writeFileTo(entryName, content, overwrite, fileAttr);
            try {
              filetools.fs.utimesSync(entryName, entry.header.time, entry.header.time);
            } catch (err) {
              throw Utils.Errors.CANT_EXTRACT_FILE();
            }
          });
        },
        /**
         * Asynchronous extractAllTo
         *
         * @param {string} targetPath Target location
         * @param {boolean} [overwrite=false] If the file already exists at the target path, the file will be overwriten if this is true.
         *                  Default is FALSE
         * @param {boolean} [keepOriginalPermission=false] The file will be set as the permission from the entry if this is true.
         *                  Default is FALSE
         * @param {function} callback The callback will be executed when all entries are extracted successfully or any error is thrown.
         */
        extractAllToAsync: function(targetPath, overwrite, keepOriginalPermission, callback) {
          callback = get_Fun(overwrite, keepOriginalPermission, callback);
          keepOriginalPermission = get_Bool(false, keepOriginalPermission);
          overwrite = get_Bool(false, overwrite);
          if (!callback) {
            return new Promise((resolve, reject) => {
              this.extractAllToAsync(targetPath, overwrite, keepOriginalPermission, function(err) {
                if (err) {
                  reject(err);
                } else {
                  resolve(this);
                }
              });
            });
          }
          if (!_zip) {
            callback(Utils.Errors.NO_ZIP());
            return;
          }
          targetPath = pth.resolve(targetPath);
          const getPath = (entry) => sanitize(targetPath, pth.normalize(canonical(entry.entryName)));
          const getError = (msg, file) => new Error(msg + ': "' + file + '"');
          const dirEntries = [];
          const fileEntries = [];
          _zip.entries.forEach((e) => {
            if (e.isDirectory) {
              dirEntries.push(e);
            } else {
              fileEntries.push(e);
            }
          });
          for (const entry of dirEntries) {
            const dirPath = getPath(entry);
            const dirAttr = keepOriginalPermission ? entry.header.fileAttr : void 0;
            try {
              filetools.makeDir(dirPath);
              if (dirAttr) filetools.fs.chmodSync(dirPath, dirAttr);
              filetools.fs.utimesSync(dirPath, entry.header.time, entry.header.time);
            } catch (er) {
              callback(getError("Unable to create folder", dirPath));
            }
          }
          fileEntries.reverse().reduce(function(next, entry) {
            return function(err) {
              if (err) {
                next(err);
              } else {
                const entryName = pth.normalize(canonical(entry.entryName));
                const filePath = sanitize(targetPath, entryName);
                entry.getDataAsync(function(content, err_1) {
                  if (err_1) {
                    next(err_1);
                  } else if (!content) {
                    next(Utils.Errors.CANT_EXTRACT_FILE());
                  } else {
                    const fileAttr = keepOriginalPermission ? entry.header.fileAttr : void 0;
                    filetools.writeFileToAsync(filePath, content, overwrite, fileAttr, function(succ) {
                      if (!succ) {
                        next(getError("Unable to write file", filePath));
                      }
                      filetools.fs.utimes(filePath, entry.header.time, entry.header.time, function(err_2) {
                        if (err_2) {
                          next(getError("Unable to set times", filePath));
                        } else {
                          next();
                        }
                      });
                    });
                  }
                });
              }
            };
          }, callback)();
        },
        /**
         * Writes the newly created zip file to disk at the specified location or if a zip was opened and no ``targetFileName`` is provided, it will overwrite the opened zip
         *
         * @param {string} targetFileName
         * @param {function} callback
         */
        writeZip: function(targetFileName, callback) {
          if (arguments.length === 1) {
            if (typeof targetFileName === "function") {
              callback = targetFileName;
              targetFileName = "";
            }
          }
          if (!targetFileName && opts.filename) {
            targetFileName = opts.filename;
          }
          if (!targetFileName) return;
          var zipData = _zip.compressToBuffer();
          if (zipData) {
            var ok = filetools.writeFileTo(targetFileName, zipData, true);
            if (typeof callback === "function") callback(!ok ? new Error("failed") : null, "");
          }
        },
        /**
                 *
                 * @param {string} targetFileName
                 * @param {object} [props]
                 * @param {boolean} [props.overwrite=true] If the file already exists at the target path, the file will be overwriten if this is true.
                 * @param {boolean} [props.perm] The file will be set as the permission from the entry if this is true.
        
                 * @returns {Promise<void>}
                 */
        writeZipPromise: function(targetFileName, props) {
          const { overwrite, perm } = Object.assign({ overwrite: true }, props);
          return new Promise((resolve, reject) => {
            if (!targetFileName && opts.filename) targetFileName = opts.filename;
            if (!targetFileName) reject("ADM-ZIP: ZIP File Name Missing");
            this.toBufferPromise().then((zipData) => {
              const ret = (done) => done ? resolve(done) : reject("ADM-ZIP: Wasn't able to write zip file");
              filetools.writeFileToAsync(targetFileName, zipData, overwrite, perm, ret);
            }, reject);
          });
        },
        /**
         * @returns {Promise<Buffer>} A promise to the Buffer.
         */
        toBufferPromise: function() {
          return new Promise((resolve, reject) => {
            _zip.toAsyncBuffer(resolve, reject);
          });
        },
        /**
         * Returns the content of the entire zip file as a Buffer object
         *
         * @prop {function} [onSuccess]
         * @prop {function} [onFail]
         * @prop {function} [onItemStart]
         * @prop {function} [onItemEnd]
         * @returns {Buffer}
         */
        toBuffer: function(onSuccess, onFail, onItemStart, onItemEnd) {
          if (typeof onSuccess === "function") {
            _zip.toAsyncBuffer(onSuccess, onFail, onItemStart, onItemEnd);
            return null;
          }
          return _zip.compressToBuffer();
        }
      };
    };
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
    function isJapanese(input = "", allowed) {
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
        if (type === "compositionupdate" && isJapanese(data)) {
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
        [toConvert, tail] = takeWhileAndSlice(toConvert, (char) => !isJapanese(char));
      }
      return [head, toConvert, tail];
    }
    function workFromStart(text, catalystChars) {
      return [
        "",
        ...takeWhileAndSlice(text, (char) => catalystChars.includes(char) || !isJapanese(char, /[0-9]/))
      ];
    }
    function workBackwards(text = "", startIndex = 0) {
      const [toConvert, head] = takeWhileAndSlice([...text.slice(0, startIndex)].reverse(), (char) => !isJapanese(char));
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
      if (!isJapanese(input) || isLeadingWithoutInitialKana(input, leading) || isTrailingWithoutFinalKana(input, leading) || isInvalidMatcher(input, matchKanji)) {
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
    exports2.isJapanese = isJapanese;
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
          var fs3 = require("fs");
          require("path");
          D = __dirname + "/";
          Fa = (a) => {
            a = Ga(a) ? new URL(a) : a;
            return fs3.readFileSync(a);
          };
          Ea = async (a) => {
            a = Ga(a) ? new URL(a) : a;
            return fs3.readFileSync(a, void 0);
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
        var db = "undefined" != typeof TextDecoder ? new TextDecoder() : void 0, B = (a, b = 0, c = NaN) => {
          var d = b + c;
          for (c = b; a[c] && !(c >= d); ) ++c;
          if (16 < c - b && a.buffer && db) return db.decode(a.subarray(b, c));
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
                  c = fs3.readSync(d, b, 0, 256);
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

// src/update-dictionary.ts
var update_dictionary_exports = {};
__export(update_dictionary_exports, {
  default: () => Command
});
module.exports = __toCommonJS(update_dictionary_exports);

// src/dictionary/download.ts
var import_node_fs = __toESM(require("node:fs"));
var import_node_stream = require("node:stream");
var import_promises = require("node:stream/promises");
var import_api = require("@raycast/api");
async function getLatestDictionaryUrl() {
  try {
    const manifestRes = await fetch("https://jitendex.org/static/yomitan.json");
    if (!manifestRes.ok) throw new Error(`Jitendex manifest returned ${manifestRes.status}`);
    const manifest = await manifestRes.json();
    if (!manifest.downloadUrl) throw new Error("Jitendex manifest has no download URL");
    return manifest.downloadUrl;
  } catch (error) {
    console.log("Failed to fetch latest dictionary:", error);
  }
}
async function downloadFile(url, destination, toast, abortSignal) {
  try {
    const res = await fetch(url, { signal: abortSignal });
    if (!res.body) throw new Error("Failed to fetch dictionary: No response body");
    const contentLength = res.headers.get("content-length");
    const totalBytes = contentLength ? parseInt(contentLength, 10) : 0;
    let downloadedBytes = 0;
    console.log("Downloading to", destination);
    const fileStream = import_node_fs.default.createWriteStream(destination, { flags: "w" });
    const readableStream = import_node_stream.Readable.fromWeb(res.body);
    abortSignal.addEventListener(
      "abort",
      () => {
        readableStream.destroy();
        fileStream.destroy();
      },
      { once: true }
    );
    readableStream.on("data", (chunk) => {
      downloadedBytes += chunk.length;
      const progress = totalBytes > 0 ? Math.round(downloadedBytes / totalBytes * 100) : 0;
      toast.message = `Progress: ${progress}%`;
    });
    await (0, import_promises.finished)(readableStream.pipe(fileStream));
    return destination;
  } catch (error) {
    if (abortSignal.aborted) {
      console.log("Download cancelled by user");
      return;
    }
    console.error("Error downloading dictionary:", error);
    toast.style = import_api.Toast.Style.Failure;
    toast.title = "Failed to download dictionary";
    toast.message = "Please try again later.";
  }
}

// src/constants.ts
var import_node_path = __toESM(require("node:path"));
var import_api2 = require("@raycast/api");
var DOWNLOAD_PATH = import_node_path.default.join(import_api2.environment.supportPath, "jitendex-yomitan.zip");
var DB_PATH = import_node_path.default.join(import_api2.environment.supportPath, "jitendex.db");
var SQLITE_WASM_PATH = import_node_path.default.join(import_api2.environment.assetsPath, "sql-wasm-fts5.wasm");

// src/dictionary/populate.ts
var import_adm_zip = __toESM(require_adm_zip());
var import_api3 = require("@raycast/api");
var import_wanakana2 = __toESM(require_cjs());

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

// src/dictionary/jitendex.ts
function findNodes(content, dataContent) {
  if (content === void 0 || typeof content === "string") return [];
  if (Array.isArray(content)) return content.flatMap((item) => findNodes(item, dataContent));
  const matches = content.data?.content === dataContent ? [content] : [];
  return matches.concat(findNodes(content.content, dataContent));
}
function toText(content) {
  if (content === void 0) return "";
  if (typeof content === "string") return content;
  if (Array.isArray(content)) return content.map(toText).join("");
  if (content.tag === "rt") return "";
  return toText(content.content);
}
function parseSense(group) {
  const partOfSpeech = findNodes(group.content, "part-of-speech-info").map((node) => toText(node.content));
  const senseNodes = findNodes(group.content, "sense");
  return senseNodes.flatMap((sense) => {
    const glosses = findNodes(sense.content, "glossary").flatMap((node) => findNodes(node.content, "glossary-item").map((item) => toText(item.content))).filter(Boolean);
    if (glosses.length === 0) {
      for (const glossary of findNodes(sense.content, "glossary")) {
        const items = collectTags(glossary.content, "li").map((item) => toText(item.content));
        glosses.push(...items.filter(Boolean));
      }
    }
    if (glosses.length === 0) {
      glosses.push(
        ...findNodes(sense.content, "info-gloss-content").map((node) => toText(node.content)).filter(Boolean)
      );
    }
    const exampleNode = findNodes(sense.content, "example-sentence").at(0);
    const japanese = findNodes(exampleNode?.content, "example-sentence-a").map((node) => toText(node.content))[0];
    const english = findNodes(exampleNode?.content, "example-sentence-b").map((node) => toText(node.content))[0];
    const example = japanese || english ? { japanese: japanese ?? "", english: english ?? "" } : void 0;
    return glosses.length > 0 ? [{ partOfSpeech, glosses, example }] : [];
  });
}
function collectTags(content, tag) {
  if (content === void 0 || typeof content === "string") return [];
  if (Array.isArray(content)) return content.flatMap((item) => collectTags(item, tag));
  const matches = content.tag === tag ? [content] : [];
  return matches.concat(collectTags(content.content, tag));
}
function parseTerm(term, bankIndex, termIndex) {
  const [expression, reading, , , score, definitions, sequence] = term;
  const senses = definitions.flatMap((definition) => {
    if (typeof definition === "string") {
      return [{ partOfSpeech: [], glosses: [definition] }];
    }
    if (!isStructuredDefinition(definition)) return [];
    const groups = findNodes(definition.content, "sense-group");
    if (groups.length > 0) return groups.flatMap(parseSense);
    const redirect = findNodes(definition.content, "redirect-glossary").at(0);
    const redirectText = toText(redirect?.content).replace(/^⟶/, "").trim();
    return redirectText ? [{ partOfSpeech: [], glosses: [`See ${redirectText}`] }] : [];
  });
  return {
    id: `${sequence}-${bankIndex}-${termIndex}`,
    term: expression,
    reading: reading || expression,
    score,
    senses
  };
}
function isStructuredDefinition(definition) {
  return typeof definition === "object" && definition !== null && !Array.isArray(definition) && "type" in definition && definition.type === "structured-content" && "content" in definition;
}

// src/dictionary/populate.ts
function createTables(db) {
  return db.run(sql`
    DROP TABLE IF EXISTS metadata;
    DROP TABLE IF EXISTS entries;
    DROP TABLE IF EXISTS kanji_index;
    DROP TABLE IF EXISTS kana_index;
    DROP TABLE IF EXISTS gloss_fts_index;

    CREATE TABLE metadata (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL
    );

    CREATE TABLE entries (
      entry_id INTEGER PRIMARY KEY,
      data TEXT NOT NULL,
      common_forms_count INTEGER NOT NULL DEFAULT 0,
      has_kanji BOOLEAN NOT NULL DEFAULT 0
    );

    CREATE TABLE kanji_index (
      kanji_text TEXT NOT NULL,
      entry_id INTEGER NOT NULL,
      PRIMARY KEY (kanji_text, entry_id),
      FOREIGN KEY (entry_id) REFERENCES entries(entry_id) ON DELETE CASCADE
    );
    CREATE INDEX idx_kanji_text_prefix ON kanji_index(kanji_text);

    CREATE TABLE kana_index (
      kana_text TEXT NOT NULL,
      entry_id INTEGER NOT NULL,
      PRIMARY KEY (kana_text, entry_id),
      FOREIGN KEY (entry_id) REFERENCES entries(entry_id) ON DELETE CASCADE
    );
    CREATE INDEX idx_kana_text_prefix ON kana_index(kana_text);

    CREATE VIRTUAL TABLE gloss_fts_index USING fts5(
      entry_id UNINDEXED,
      sense_idx UNINDEXED,
      gloss_content,
      tokenize = 'unicode61'
    );
  `);
}
async function populateTables(db, toast, abortSignal) {
  if (abortSignal.aborted) return false;
  try {
    console.log("Opening Jitendex archive...");
    const zip = new import_adm_zip.default(DOWNLOAD_PATH);
    const indexEntry = zip.getEntry("index.json");
    if (!indexEntry) throw new Error("Jitendex archive has no index.json");
    const metadata = JSON.parse(indexEntry.getData().toString("utf8"));
    const banks = zip.getEntries().filter((entry) => /^term_bank_\d+\.json$/.test(entry.entryName)).sort((a, b) => bankNumber(a.entryName) - bankNumber(b.entryName));
    if (banks.length === 0) throw new Error("Jitendex archive has no term banks");
    console.log("Creating database tables...");
    createTables(db);
    db.run("PRAGMA journal_mode = OFF;");
    db.run("BEGIN TRANSACTION;");
    db.run(
      sql`INSERT INTO metadata (key, value) VALUES ('version', :version), ('date', :date), ('title', :title), ('attribution', :attribution);`,
      {
        ":version": metadata.revision,
        ":date": metadata.revision.split(".").slice(0, 3).join("-"),
        ":title": metadata.title,
        ":attribution": metadata.attribution ?? ""
      }
    );
    const entryStmt = db.prepare(
      sql`INSERT INTO entries (entry_id, data, common_forms_count, has_kanji) VALUES (:entry_id, :data, :common_forms_count, :has_kanji);`
    );
    const kanjiStmt = db.prepare(sql`INSERT INTO kanji_index (kanji_text, entry_id) VALUES (:kanji_text, :entry_id);`);
    const kanaStmt = db.prepare(
      sql`INSERT OR IGNORE INTO kana_index (kana_text, entry_id) VALUES (:kana_text, :entry_id);`
    );
    const glossStmt = db.prepare(
      sql`INSERT INTO gloss_fts_index (entry_id, sense_idx, gloss_content) VALUES (:entry_id, :sense_idx, :gloss_content);`
    );
    let entryId = 0;
    for (const [bankIndex, bank] of banks.entries()) {
      if (abortSignal.aborted) {
        db.run("ROLLBACK;");
        return false;
      }
      const terms = JSON.parse(bank.getData().toString("utf8"));
      terms.forEach((term, termIndex) => {
        const entry = parseTerm(term, bankIndex, termIndex);
        entryId += 1;
        entryStmt.run({
          ":entry_id": entryId,
          ":data": JSON.stringify(entry),
          ":common_forms_count": Number(entry.score > 0),
          ":has_kanji": Number(!(0, import_wanakana2.isKana)(entry.term))
        });
        if ((0, import_wanakana2.isKana)(entry.term)) {
          kanaStmt.run({ ":kana_text": normalizeKana(entry.term), ":entry_id": entryId });
        } else {
          kanjiStmt.run({ ":kanji_text": entry.term, ":entry_id": entryId });
        }
        kanaStmt.run({ ":kana_text": normalizeKana(entry.reading), ":entry_id": entryId });
        entry.senses.forEach((sense, senseIndex) => {
          sense.glosses.forEach((gloss) => {
            glossStmt.run({ ":entry_id": entryId, ":sense_idx": senseIndex, ":gloss_content": gloss });
          });
        });
      });
      toast.title = "Indexing Jitendex...";
      toast.message = `Progress: ${Math.round((bankIndex + 1) / banks.length * 100)}%`;
      toast.style = import_api3.Toast.Style.Animated;
      await new Promise((resolve) => setImmediate(resolve));
    }
    entryStmt.free();
    kanjiStmt.free();
    kanaStmt.free();
    glossStmt.free();
    db.run("COMMIT;");
    console.log(`Indexed ${entryId} Jitendex terms.`);
    return true;
  } catch (error) {
    console.error("Failed to index Jitendex:", error);
    return false;
  }
}
function bankNumber(name) {
  return Number(name.match(/\d+/)?.[0] ?? 0);
}

// src/update-dictionary.ts
var import_api4 = require("@raycast/api");
var import_sql = __toESM(require_sql_wasm());
var import_node_fs2 = __toESM(require("node:fs"));
async function Command() {
  const abortController = new AbortController();
  const { signal: abortSignal } = abortController;
  abortSignal.addEventListener("abort", () => {
    (0, import_api4.showToast)({
      style: import_api4.Toast.Style.Success,
      title: "Dictionary update cancelled",
      message: ""
    });
  });
  const toast = await (0, import_api4.showToast)({
    style: import_api4.Toast.Style.Animated,
    title: "Downloading latest dictionary...",
    message: `Progress: 0%`,
    primaryAction: {
      title: "Cancel Update",
      onAction: () => {
        abortController.abort();
      }
    }
  });
  const dictionaryUrl = await getLatestDictionaryUrl();
  if (!dictionaryUrl) {
    toast.style = import_api4.Toast.Style.Failure;
    toast.title = "Failed to find latest dictionary";
    toast.message = "Please try again later.";
    return;
  }
  const downloadedPath = await downloadFile(dictionaryUrl, DOWNLOAD_PATH, toast, abortSignal);
  if (!downloadedPath || abortSignal.aborted) return;
  const wasmBinary = import_node_fs2.default.readFileSync(SQLITE_WASM_PATH);
  const SQL = await (0, import_sql.default)({ wasmBinary });
  const db = new SQL.Database();
  const success = await populateTables(db, toast, abortSignal);
  if (success) {
    db.run("VACUUM;");
    await import_node_fs2.default.promises.writeFile(DB_PATH, db.export());
    toast.style = import_api4.Toast.Style.Success;
    toast.title = "Dictionary updated successfully";
    toast.message = "";
  } else if (!abortSignal.aborted) {
    toast.style = import_api4.Toast.Style.Failure;
    toast.title = "Failed to update dictionary";
    toast.message = "Please try again later.";
  }
  db.close();
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvYWRtLXppcC91dGlsL2NvbnN0YW50cy5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9hZG0temlwL3V0aWwvZXJyb3JzLmpzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL2FkbS16aXAvdXRpbC91dGlscy5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9hZG0temlwL3V0aWwvZmF0dHIuanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvYWRtLXppcC91dGlsL2RlY29kZXIuanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvYWRtLXppcC91dGlsL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL2FkbS16aXAvaGVhZGVycy9lbnRyeUhlYWRlci5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9hZG0temlwL2hlYWRlcnMvbWFpbkhlYWRlci5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9hZG0temlwL2hlYWRlcnMvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvYWRtLXppcC9tZXRob2RzL2RlZmxhdGVyLmpzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL2FkbS16aXAvbWV0aG9kcy9pbmZsYXRlci5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9hZG0temlwL21ldGhvZHMvemlwY3J5cHRvLmpzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL2FkbS16aXAvbWV0aG9kcy9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9hZG0temlwL3ppcEVudHJ5LmpzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL2FkbS16aXAvemlwRmlsZS5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9hZG0temlwL2FkbS16aXAuanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvc3JjL3V0aWxzL3R5cGVPZi5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9zcmMvdXRpbHMvaXNFbXB0eS5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9zcmMvdXRpbHMvaXNDaGFySW5SYW5nZS5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9zcmMvY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL3NyYy91dGlscy9pc0NoYXJKYXBhbmVzZS5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9zcmMvaXNKYXBhbmVzZS5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9ub2RlX21vZHVsZXMvbWVtb2l6ZS1vbmUvZGlzdC9tZW1vaXplLW9uZS5lc20uanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvbm9kZV9tb2R1bGVzL2RlcXVhbC9kaXN0L2luZGV4Lm1qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9zcmMvdXRpbHMvbWVyZ2VXaXRoRGVmYXVsdE9wdGlvbnMuanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvc3JjL3V0aWxzL2thbmFNYXBwaW5nLmpzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL3NyYy91dGlscy9yb21hamlUb0thbmFNYXAuanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvc3JjL3V0aWxzL2lzQ2hhclVwcGVyQ2FzZS5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9zcmMvdXRpbHMvaXNDaGFyTG9uZ0Rhc2guanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvc3JjL3V0aWxzL2lzQ2hhclNsYXNoRG90LmpzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL3NyYy91dGlscy9pc0NoYXJIaXJhZ2FuYS5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9zcmMvdXRpbHMvaGlyYWdhbmFUb0thdGFrYW5hLmpzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL3NyYy90b0thbmEuanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvc3JjL3V0aWxzL2RvbS5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9zcmMvdXRpbHMvbG9nSW5wdXRFdmVudHMuanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvc3JjL2JpbmQuanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvc3JjL3VuYmluZC5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9zcmMvdXRpbHMvaXNDaGFyUm9tYWppLmpzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL3NyYy9pc1JvbWFqaS5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9zcmMvdXRpbHMvaXNDaGFyS2F0YWthbmEuanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvc3JjL3V0aWxzL2lzQ2hhckthbmEuanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvc3JjL2lzS2FuYS5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9zcmMvaXNIaXJhZ2FuYS5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9zcmMvaXNLYXRha2FuYS5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9zcmMvdXRpbHMvaXNDaGFySXRlcmF0aW9uTWFyay5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9zcmMvdXRpbHMvaXNDaGFyS2FuamkuanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvc3JjL2lzS2FuamkuanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvc3JjL2lzTWl4ZWQuanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvc3JjL3V0aWxzL2thdGFrYW5hVG9IaXJhZ2FuYS5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9zcmMvdXRpbHMva2FuYVRvUm9tYWppTWFwLmpzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL3NyYy90b1JvbWFqaS5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9zcmMvdXRpbHMvaXNDaGFyRW5nbGlzaFB1bmN0dWF0aW9uLmpzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL3NyYy90b0hpcmFnYW5hLmpzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL3NyYy90b0thdGFrYW5hLmpzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL3NyYy91dGlscy9pc0NoYXJKYXBhbmVzZVB1bmN0dWF0aW9uLmpzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy95b21pY2FzdC1jdXN0b20vbm9kZV9tb2R1bGVzL3NyYy90b2tlbml6ZS5qcyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL25vZGVfbW9kdWxlcy9zcmMvc3RyaXBPa3VyaWdhbmEuanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9ub2RlX21vZHVsZXMvc3FsLmpzL2Rpc3Qvc3FsLXdhc20uanMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9zcmMvdXBkYXRlLWRpY3Rpb25hcnkudHMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9zcmMvZGljdGlvbmFyeS9kb3dubG9hZC50cyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL3NyYy9jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL3lvbWljYXN0LWN1c3RvbS9zcmMvZGljdGlvbmFyeS9wb3B1bGF0ZS50cyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL3NyYy91dGlscy50cyIsICIuLi8uLi8uLi8uLi8ubG9jYWwvcmVwb3MveW9taWNhc3QtY3VzdG9tL3NyYy9kaWN0aW9uYXJ5L2ppdGVuZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAvKiBUaGUgbG9jYWwgZmlsZSBoZWFkZXIgKi9cbiAgICBMT0NIRFIgICAgICAgICAgIDogMzAsIC8vIExPQyBoZWFkZXIgc2l6ZVxuICAgIExPQ1NJRyAgICAgICAgICAgOiAweDA0MDM0YjUwLCAvLyBcIlBLXFwwMDNcXDAwNFwiXG4gICAgTE9DVkVSICAgICAgICAgICA6IDQsXHQvLyB2ZXJzaW9uIG5lZWRlZCB0byBleHRyYWN0XG4gICAgTE9DRkxHICAgICAgICAgICA6IDYsIC8vIGdlbmVyYWwgcHVycG9zZSBiaXQgZmxhZ1xuICAgIExPQ0hPVyAgICAgICAgICAgOiA4LCAvLyBjb21wcmVzc2lvbiBtZXRob2RcbiAgICBMT0NUSU0gICAgICAgICAgIDogMTAsIC8vIG1vZGlmaWNhdGlvbiB0aW1lICgyIGJ5dGVzIHRpbWUsIDIgYnl0ZXMgZGF0ZSlcbiAgICBMT0NDUkMgICAgICAgICAgIDogMTQsIC8vIHVuY29tcHJlc3NlZCBmaWxlIGNyYy0zMiB2YWx1ZVxuICAgIExPQ1NJWiAgICAgICAgICAgOiAxOCwgLy8gY29tcHJlc3NlZCBzaXplXG4gICAgTE9DTEVOICAgICAgICAgICA6IDIyLCAvLyB1bmNvbXByZXNzZWQgc2l6ZVxuICAgIExPQ05BTSAgICAgICAgICAgOiAyNiwgLy8gZmlsZW5hbWUgbGVuZ3RoXG4gICAgTE9DRVhUICAgICAgICAgICA6IDI4LCAvLyBleHRyYSBmaWVsZCBsZW5ndGhcblxuICAgIC8qIFRoZSBEYXRhIGRlc2NyaXB0b3IgKi9cbiAgICBFWFRTSUcgICAgICAgICAgIDogMHgwODA3NGI1MCwgLy8gXCJQS1xcMDA3XFwwMDhcIlxuICAgIEVYVEhEUiAgICAgICAgICAgOiAxNiwgLy8gRVhUIGhlYWRlciBzaXplXG4gICAgRVhUQ1JDICAgICAgICAgICA6IDQsIC8vIHVuY29tcHJlc3NlZCBmaWxlIGNyYy0zMiB2YWx1ZVxuICAgIEVYVFNJWiAgICAgICAgICAgOiA4LCAvLyBjb21wcmVzc2VkIHNpemVcbiAgICBFWFRMRU4gICAgICAgICAgIDogMTIsIC8vIHVuY29tcHJlc3NlZCBzaXplXG5cbiAgICAvKiBUaGUgY2VudHJhbCBkaXJlY3RvcnkgZmlsZSBoZWFkZXIgKi9cbiAgICBDRU5IRFIgICAgICAgICAgIDogNDYsIC8vIENFTiBoZWFkZXIgc2l6ZVxuICAgIENFTlNJRyAgICAgICAgICAgOiAweDAyMDE0YjUwLCAvLyBcIlBLXFwwMDFcXDAwMlwiXG4gICAgQ0VOVkVNICAgICAgICAgICA6IDQsIC8vIHZlcnNpb24gbWFkZSBieVxuICAgIENFTlZFUiAgICAgICAgICAgOiA2LCAvLyB2ZXJzaW9uIG5lZWRlZCB0byBleHRyYWN0XG4gICAgQ0VORkxHICAgICAgICAgICA6IDgsIC8vIGVuY3J5cHQsIGRlY3J5cHQgZmxhZ3NcbiAgICBDRU5IT1cgICAgICAgICAgIDogMTAsIC8vIGNvbXByZXNzaW9uIG1ldGhvZFxuICAgIENFTlRJTSAgICAgICAgICAgOiAxMiwgLy8gbW9kaWZpY2F0aW9uIHRpbWUgKDIgYnl0ZXMgdGltZSwgMiBieXRlcyBkYXRlKVxuICAgIENFTkNSQyAgICAgICAgICAgOiAxNiwgLy8gdW5jb21wcmVzc2VkIGZpbGUgY3JjLTMyIHZhbHVlXG4gICAgQ0VOU0laICAgICAgICAgICA6IDIwLCAvLyBjb21wcmVzc2VkIHNpemVcbiAgICBDRU5MRU4gICAgICAgICAgIDogMjQsIC8vIHVuY29tcHJlc3NlZCBzaXplXG4gICAgQ0VOTkFNICAgICAgICAgICA6IDI4LCAvLyBmaWxlbmFtZSBsZW5ndGhcbiAgICBDRU5FWFQgICAgICAgICAgIDogMzAsIC8vIGV4dHJhIGZpZWxkIGxlbmd0aFxuICAgIENFTkNPTSAgICAgICAgICAgOiAzMiwgLy8gZmlsZSBjb21tZW50IGxlbmd0aFxuICAgIENFTkRTSyAgICAgICAgICAgOiAzNCwgLy8gdm9sdW1lIG51bWJlciBzdGFydFxuICAgIENFTkFUVCAgICAgICAgICAgOiAzNiwgLy8gaW50ZXJuYWwgZmlsZSBhdHRyaWJ1dGVzXG4gICAgQ0VOQVRYICAgICAgICAgICA6IDM4LCAvLyBleHRlcm5hbCBmaWxlIGF0dHJpYnV0ZXMgKGhvc3Qgc3lzdGVtIGRlcGVuZGVudClcbiAgICBDRU5PRkYgICAgICAgICAgIDogNDIsIC8vIExPQyBoZWFkZXIgb2Zmc2V0XG5cbiAgICAvKiBUaGUgZW50cmllcyBpbiB0aGUgZW5kIG9mIGNlbnRyYWwgZGlyZWN0b3J5ICovXG4gICAgRU5ESERSICAgICAgICAgICA6IDIyLCAvLyBFTkQgaGVhZGVyIHNpemVcbiAgICBFTkRTSUcgICAgICAgICAgIDogMHgwNjA1NGI1MCwgLy8gXCJQS1xcMDA1XFwwMDZcIlxuICAgIEVORFNVQiAgICAgICAgICAgOiA4LCAvLyBudW1iZXIgb2YgZW50cmllcyBvbiB0aGlzIGRpc2tcbiAgICBFTkRUT1QgICAgICAgICAgIDogMTAsIC8vIHRvdGFsIG51bWJlciBvZiBlbnRyaWVzXG4gICAgRU5EU0laICAgICAgICAgICA6IDEyLCAvLyBjZW50cmFsIGRpcmVjdG9yeSBzaXplIGluIGJ5dGVzXG4gICAgRU5ET0ZGICAgICAgICAgICA6IDE2LCAvLyBvZmZzZXQgb2YgZmlyc3QgQ0VOIGhlYWRlclxuICAgIEVORENPTSAgICAgICAgICAgOiAyMCwgLy8gemlwIGZpbGUgY29tbWVudCBsZW5ndGhcblxuICAgIEVORDY0SERSICAgICAgICAgOiAyMCwgLy8gemlwNjQgRU5EIGhlYWRlciBzaXplXG4gICAgRU5ENjRTSUcgICAgICAgICA6IDB4MDcwNjRiNTAsIC8vIHppcDY0IExvY2F0b3Igc2lnbmF0dXJlLCBcIlBLXFwwMDZcXDAwN1wiXG4gICAgRU5ENjRTVEFSVCAgICAgICA6IDQsIC8vIG51bWJlciBvZiB0aGUgZGlzayB3aXRoIHRoZSBzdGFydCBvZiB0aGUgemlwNjRcbiAgICBFTkQ2NE9GRiAgICAgICAgIDogOCwgLy8gcmVsYXRpdmUgb2Zmc2V0IG9mIHRoZSB6aXA2NCBlbmQgb2YgY2VudHJhbCBkaXJlY3RvcnlcbiAgICBFTkQ2NE5VTURJU0tTICAgIDogMTYsIC8vIHRvdGFsIG51bWJlciBvZiBkaXNrc1xuXG4gICAgWklQNjRTSUcgICAgICAgICA6IDB4MDYwNjRiNTAsIC8vIHppcDY0IHNpZ25hdHVyZSwgXCJQS1xcMDA2XFwwMDZcIlxuICAgIFpJUDY0SERSICAgICAgICAgOiA1NiwgLy8gemlwNjQgcmVjb3JkIG1pbmltdW0gc2l6ZVxuICAgIFpJUDY0TEVBRCAgICAgICAgOiAxMiwgLy8gbGVhZGluZyBieXRlcyBhdCB0aGUgc3RhcnQgb2YgdGhlIHJlY29yZCwgbm90IGNvdW50ZWQgYnkgdGhlIHZhbHVlIHN0b3JlZCBpbiBaSVA2NFNJWkVcbiAgICBaSVA2NFNJWkUgICAgICAgIDogNCwgLy8gemlwNjQgc2l6ZSBvZiB0aGUgY2VudHJhbCBkaXJlY3RvcnkgcmVjb3JkXG4gICAgWklQNjRWRU0gICAgICAgICA6IDEyLCAvLyB6aXA2NCB2ZXJzaW9uIG1hZGUgYnlcbiAgICBaSVA2NFZFUiAgICAgICAgIDogMTQsIC8vIHppcDY0IHZlcnNpb24gbmVlZGVkIHRvIGV4dHJhY3RcbiAgICBaSVA2NERTSyAgICAgICAgIDogMTYsIC8vIHppcDY0IG51bWJlciBvZiB0aGlzIGRpc2tcbiAgICBaSVA2NERTS0RJUiAgICAgIDogMjAsIC8vIG51bWJlciBvZiB0aGUgZGlzayB3aXRoIHRoZSBzdGFydCBvZiB0aGUgcmVjb3JkIGRpcmVjdG9yeVxuICAgIFpJUDY0U1VCICAgICAgICAgOiAyNCwgLy8gbnVtYmVyIG9mIGVudHJpZXMgb24gdGhpcyBkaXNrXG4gICAgWklQNjRUT1QgICAgICAgICA6IDMyLCAvLyB0b3RhbCBudW1iZXIgb2YgZW50cmllc1xuICAgIFpJUDY0U0laQiAgICAgICAgOiA0MCwgLy8gemlwNjQgY2VudHJhbCBkaXJlY3Rvcnkgc2l6ZSBpbiBieXRlc1xuICAgIFpJUDY0T0ZGICAgICAgICAgOiA0OCwgLy8gb2Zmc2V0IG9mIHN0YXJ0IG9mIGNlbnRyYWwgZGlyZWN0b3J5IHdpdGggcmVzcGVjdCB0byB0aGUgc3RhcnRpbmcgZGlzayBudW1iZXJcbiAgICBaSVA2NEVYVFJBICAgICAgIDogNTYsIC8vIGV4dGVuc2libGUgZGF0YSBzZWN0b3JcblxuICAgIC8qIENvbXByZXNzaW9uIG1ldGhvZHMgKi9cbiAgICBTVE9SRUQgICAgICAgICAgIDogMCwgLy8gbm8gY29tcHJlc3Npb25cbiAgICBTSFJVTksgICAgICAgICAgIDogMSwgLy8gc2hydW5rXG4gICAgUkVEVUNFRDEgICAgICAgICA6IDIsIC8vIHJlZHVjZWQgd2l0aCBjb21wcmVzc2lvbiBmYWN0b3IgMVxuICAgIFJFRFVDRUQyICAgICAgICAgOiAzLCAvLyByZWR1Y2VkIHdpdGggY29tcHJlc3Npb24gZmFjdG9yIDJcbiAgICBSRURVQ0VEMyAgICAgICAgIDogNCwgLy8gcmVkdWNlZCB3aXRoIGNvbXByZXNzaW9uIGZhY3RvciAzXG4gICAgUkVEVUNFRDQgICAgICAgICA6IDUsIC8vIHJlZHVjZWQgd2l0aCBjb21wcmVzc2lvbiBmYWN0b3IgNFxuICAgIElNUExPREVEICAgICAgICAgOiA2LCAvLyBpbXBsb2RlZFxuICAgIC8vIDcgcmVzZXJ2ZWQgZm9yIFRva2VuaXppbmcgY29tcHJlc3Npb24gYWxnb3JpdGhtXG4gICAgREVGTEFURUQgICAgICAgICA6IDgsIC8vIGRlZmxhdGVkXG4gICAgRU5IQU5DRURfREVGTEFURUQ6IDksIC8vIGVuaGFuY2VkIGRlZmxhdGVkXG4gICAgUEtXQVJFICAgICAgICAgICA6IDEwLC8vIFBLV2FyZSBEQ0wgaW1wbG9kZWRcbiAgICAvLyAxMSByZXNlcnZlZCBieSBQS1dBUkVcbiAgICBCWklQMiAgICAgICAgICAgIDogMTIsIC8vICBjb21wcmVzc2VkIHVzaW5nIEJaSVAyXG4gICAgLy8gMTMgcmVzZXJ2ZWQgYnkgUEtXQVJFXG4gICAgTFpNQSAgICAgICAgICAgICA6IDE0LCAvLyBMWk1BXG4gICAgLy8gMTUtMTcgcmVzZXJ2ZWQgYnkgUEtXQVJFXG4gICAgSUJNX1RFUlNFICAgICAgICA6IDE4LCAvLyBjb21wcmVzc2VkIHVzaW5nIElCTSBURVJTRVxuICAgIElCTV9MWjc3ICAgICAgICAgOiAxOSwgLy8gSUJNIExaNzcgelxuICAgIEFFU19FTkNSWVBUICAgICAgOiA5OSwgLy8gV2luWklQIEFFUyBlbmNyeXB0aW9uIG1ldGhvZFxuXG4gICAgLyogR2VuZXJhbCBwdXJwb3NlIGJpdCBmbGFnICovXG4gICAgLy8gdmFsdWVzIGNhbiBvYnRhaW5lZCB3aXRoIGV4cHJlc3Npb24gMioqYml0bnJcbiAgICBGTEdfRU5DICAgICAgICAgIDogMSwgICAgLy8gQml0IDA6IGVuY3J5cHRlZCBmaWxlXG4gICAgRkxHX0NPTVAxICAgICAgICA6IDIsICAgIC8vIEJpdCAxLCBjb21wcmVzc2lvbiBvcHRpb25cbiAgICBGTEdfQ09NUDIgICAgICAgIDogNCwgICAgLy8gQml0IDIsIGNvbXByZXNzaW9uIG9wdGlvblxuICAgIEZMR19ERVNDICAgICAgICAgOiA4LCAgICAvLyBCaXQgMywgZGF0YSBkZXNjcmlwdG9yXG4gICAgRkxHX0VOSCAgICAgICAgICA6IDE2LCAgIC8vIEJpdCA0LCBlbmhhbmNlZCBkZWZsYXRpbmdcbiAgICBGTEdfUEFUQ0ggICAgICAgIDogMzIsICAgLy8gQml0IDUsIGluZGljYXRlcyB0aGF0IHRoZSBmaWxlIGlzIGNvbXByZXNzZWQgcGF0Y2hlZCBkYXRhLlxuICAgIEZMR19TVFIgICAgICAgICAgOiA2NCwgICAvLyBCaXQgNiwgc3Ryb25nIGVuY3J5cHRpb24gKHBhdGVudGVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBCaXRzIDctMTA6IEN1cnJlbnRseSB1bnVzZWQuXG4gICAgRkxHX0VGUyAgICAgICAgICA6IDIwNDgsIC8vIEJpdCAxMTogTGFuZ3VhZ2UgZW5jb2RpbmcgZmxhZyAoRUZTKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBCaXQgMTI6IFJlc2VydmVkIGJ5IFBLV0FSRSBmb3IgZW5oYW5jZWQgY29tcHJlc3Npb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJpdCAxMzogZW5jcnlwdGVkIHRoZSBDZW50cmFsIERpcmVjdG9yeSAocGF0ZW50ZWQpLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBCaXRzIDE0LTE1OiBSZXNlcnZlZCBieSBQS1dBUkUuXG4gICAgRkxHX01TSyAgICAgICAgICA6IDQwOTYsIC8vIG1hc2sgaGVhZGVyIHZhbHVlc1xuXG4gICAgLyogTG9hZCB0eXBlICovXG4gICAgRklMRSAgICAgICAgICAgICA6IDIsXG4gICAgQlVGRkVSICAgICAgICAgICA6IDEsXG4gICAgTk9ORSAgICAgICAgICAgICA6IDAsXG5cbiAgICAvKiA0LjUgRXh0ZW5zaWJsZSBkYXRhIGZpZWxkcyAqL1xuICAgIEVGX0lEICAgICAgICAgICAgOiAwLFxuICAgIEVGX1NJWkUgICAgICAgICAgOiAyLFxuXG4gICAgLyogSGVhZGVyIElEcyAqL1xuICAgIElEX1pJUDY0ICAgICAgICAgOiAweDAwMDEsXG4gICAgSURfQVZJTkZPICAgICAgICA6IDB4MDAwNyxcbiAgICBJRF9QRlMgICAgICAgICAgIDogMHgwMDA4LFxuICAgIElEX09TMiAgICAgICAgICAgOiAweDAwMDksXG4gICAgSURfTlRGUyAgICAgICAgICA6IDB4MDAwYSxcbiAgICBJRF9PUEVOVk1TICAgICAgIDogMHgwMDBjLFxuICAgIElEX1VOSVggICAgICAgICAgOiAweDAwMGQsXG4gICAgSURfRk9SSyAgICAgICAgICA6IDB4MDAwZSxcbiAgICBJRF9QQVRDSCAgICAgICAgIDogMHgwMDBmLFxuICAgIElEX1g1MDlfUEtDUzcgICAgOiAweDAwMTQsXG4gICAgSURfWDUwOV9DRVJUSURfRiA6IDB4MDAxNSxcbiAgICBJRF9YNTA5X0NFUlRJRF9DIDogMHgwMDE2LFxuICAgIElEX1NUUk9OR0VOQyAgICAgOiAweDAwMTcsXG4gICAgSURfUkVDT1JEX01HVCAgICA6IDB4MDAxOCxcbiAgICBJRF9YNTA5X1BLQ1M3X1JMIDogMHgwMDE5LFxuICAgIElEX0lCTTEgICAgICAgICAgOiAweDAwNjUsXG4gICAgSURfSUJNMiAgICAgICAgICA6IDB4MDA2NixcbiAgICBJRF9QT1NaSVAgICAgICAgIDogMHg0NjkwLFxuXG4gICAgRUZfWklQNjRfT1JfMzIgICA6IDB4ZmZmZmZmZmYsXG4gICAgRUZfWklQNjRfT1JfMTYgICA6IDB4ZmZmZixcbiAgICBFRl9aSVA2NF9TVU5DT01QIDogMCxcbiAgICBFRl9aSVA2NF9TQ09NUCAgIDogOCxcbiAgICBFRl9aSVA2NF9SSE8gICAgIDogMTYsXG4gICAgRUZfWklQNjRfRFNOICAgICA6IDI0XG59O1xuIiwgImNvbnN0IGVycm9ycyA9IHtcbiAgICAvKiBIZWFkZXIgZXJyb3IgbWVzc2FnZXMgKi9cbiAgICBJTlZBTElEX0xPQzogXCJJbnZhbGlkIExPQyBoZWFkZXIgKGJhZCBzaWduYXR1cmUpXCIsXG4gICAgSU5WQUxJRF9DRU46IFwiSW52YWxpZCBDRU4gaGVhZGVyIChiYWQgc2lnbmF0dXJlKVwiLFxuICAgIElOVkFMSURfRU5EOiBcIkludmFsaWQgRU5EIGhlYWRlciAoYmFkIHNpZ25hdHVyZSlcIixcblxuICAgIC8qIERlc2NyaXB0b3IgKi9cbiAgICBERVNDUklQVE9SX05PVF9FWElTVDogXCJObyBkZXNjcmlwdG9yIHByZXNlbnRcIixcbiAgICBERVNDUklQVE9SX1VOS05PV046IFwiVW5rbm93biBkZXNjcmlwdG9yIGZvcm1hdFwiLFxuICAgIERFU0NSSVBUT1JfRkFVTFRZOiBcIkRlc2NyaXB0b3IgZGF0YSBpcyBtYWxmb3JtZWRcIixcblxuICAgIC8qIFppcEVudHJ5IGVycm9yIG1lc3NhZ2VzKi9cbiAgICBOT19EQVRBOiBcIk5vdGhpbmcgdG8gZGVjb21wcmVzc1wiLFxuICAgIEJBRF9DUkM6IFwiQ1JDMzIgY2hlY2tzdW0gZmFpbGVkIHswfVwiLFxuICAgIEZJTEVfSU5fVEhFX1dBWTogXCJUaGVyZSBpcyBhIGZpbGUgaW4gdGhlIHdheTogezB9XCIsXG4gICAgVU5LTk9XTl9NRVRIT0Q6IFwiSW52YWxpZC91bnN1cHBvcnRlZCBjb21wcmVzc2lvbiBtZXRob2RcIixcblxuICAgIC8qIEluZmxhdGVyIGVycm9yIG1lc3NhZ2VzICovXG4gICAgQVZBSUxfREFUQTogXCJpbmZsYXRlOjpBdmFpbGFibGUgaW5mbGF0ZSBkYXRhIGRpZCBub3QgdGVybWluYXRlXCIsXG4gICAgSU5WQUxJRF9ESVNUQU5DRTogXCJpbmZsYXRlOjpJbnZhbGlkIGxpdGVyYWwvbGVuZ3RoIG9yIGRpc3RhbmNlIGNvZGUgaW4gZml4ZWQgb3IgZHluYW1pYyBibG9ja1wiLFxuICAgIFRPX01BTllfQ09ERVM6IFwiaW5mbGF0ZTo6RHluYW1pYyBibG9jayBjb2RlIGRlc2NyaXB0aW9uOiB0b28gbWFueSBsZW5ndGggb3IgZGlzdGFuY2UgY29kZXNcIixcbiAgICBJTlZBTElEX1JFUEVBVF9MRU46IFwiaW5mbGF0ZTo6RHluYW1pYyBibG9jayBjb2RlIGRlc2NyaXB0aW9uOiByZXBlYXQgbW9yZSB0aGFuIHNwZWNpZmllZCBsZW5ndGhzXCIsXG4gICAgSU5WQUxJRF9SRVBFQVRfRklSU1Q6IFwiaW5mbGF0ZTo6RHluYW1pYyBibG9jayBjb2RlIGRlc2NyaXB0aW9uOiByZXBlYXQgbGVuZ3RocyB3aXRoIG5vIGZpcnN0IGxlbmd0aFwiLFxuICAgIElOQ09NUExFVEVfQ09ERVM6IFwiaW5mbGF0ZTo6RHluYW1pYyBibG9jayBjb2RlIGRlc2NyaXB0aW9uOiBjb2RlIGxlbmd0aHMgY29kZXMgaW5jb21wbGV0ZVwiLFxuICAgIElOVkFMSURfRFlOX0RJU1RBTkNFOiBcImluZmxhdGU6OkR5bmFtaWMgYmxvY2sgY29kZSBkZXNjcmlwdGlvbjogaW52YWxpZCBkaXN0YW5jZSBjb2RlIGxlbmd0aHNcIixcbiAgICBJTlZBTElEX0NPREVTX0xFTjogXCJpbmZsYXRlOjpEeW5hbWljIGJsb2NrIGNvZGUgZGVzY3JpcHRpb246IGludmFsaWQgbGl0ZXJhbC9sZW5ndGggY29kZSBsZW5ndGhzXCIsXG4gICAgSU5WQUxJRF9TVE9SRV9CTE9DSzogXCJpbmZsYXRlOjpTdG9yZWQgYmxvY2sgbGVuZ3RoIGRpZCBub3QgbWF0Y2ggb25lJ3MgY29tcGxlbWVudFwiLFxuICAgIElOVkFMSURfQkxPQ0tfVFlQRTogXCJpbmZsYXRlOjpJbnZhbGlkIGJsb2NrIHR5cGUgKHR5cGUgPT0gMylcIixcblxuICAgIC8qIEFETS1aSVAgZXJyb3IgbWVzc2FnZXMgKi9cbiAgICBDQU5UX0VYVFJBQ1RfRklMRTogXCJDb3VsZCBub3QgZXh0cmFjdCB0aGUgZmlsZVwiLFxuICAgIENBTlRfT1ZFUlJJREU6IFwiVGFyZ2V0IGZpbGUgYWxyZWFkeSBleGlzdHNcIixcbiAgICBESVNLX0VOVFJZX1RPT19MQVJHRTogXCJOdW1iZXIgb2YgZGlzayBlbnRyaWVzIGlzIHRvbyBsYXJnZVwiLFxuICAgIE5PX1pJUDogXCJObyB6aXAgZmlsZSB3YXMgbG9hZGVkXCIsXG4gICAgTk9fRU5UUlk6IFwiRW50cnkgZG9lc24ndCBleGlzdFwiLFxuICAgIERJUkVDVE9SWV9DT05URU5UX0VSUk9SOiBcIkEgZGlyZWN0b3J5IGNhbm5vdCBoYXZlIGNvbnRlbnRcIixcbiAgICBGSUxFX05PVF9GT1VORDogJ0ZpbGUgbm90IGZvdW5kOiBcInswfVwiJyxcbiAgICBOT1RfSU1QTEVNRU5URUQ6IFwiTm90IGltcGxlbWVudGVkXCIsXG4gICAgSU5WQUxJRF9GSUxFTkFNRTogXCJJbnZhbGlkIGZpbGVuYW1lXCIsXG4gICAgSU5WQUxJRF9GT1JNQVQ6IFwiSW52YWxpZCBvciB1bnN1cHBvcnRlZCB6aXAgZm9ybWF0LiBObyBFTkQgaGVhZGVyIGZvdW5kXCIsXG4gICAgSU5WQUxJRF9QQVNTX1BBUkFNOiBcIkluY29tcGF0aWJsZSBwYXNzd29yZCBwYXJhbWV0ZXJcIixcbiAgICBXUk9OR19QQVNTV09SRDogXCJXcm9uZyBQYXNzd29yZFwiLFxuXG4gICAgLyogQURNLVpJUCAqL1xuICAgIENPTU1FTlRfVE9PX0xPTkc6IFwiQ29tbWVudCBpcyB0b28gbG9uZ1wiLCAvLyBDb21tZW50IGNhbiBiZSBtYXggNjU1MzUgYnl0ZXMgbG9uZyAoTk9URTogc29tZSBub24tVVMgY2hhcmFjdGVycyBtYXkgdGFrZSBtb3JlIHNwYWNlKVxuICAgIEVYVFJBX0ZJRUxEX1BBUlNFX0VSUk9SOiBcIkV4dHJhIGZpZWxkIHBhcnNpbmcgZXJyb3JcIlxufTtcblxuLy8gdGVtcGxhdGVcbmZ1bmN0aW9uIEUobWVzc2FnZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICBpZiAoYXJncy5sZW5ndGgpIHsgLy8gQWxsb3cgezB9IC4uIHs5fSBhcmd1bWVudHMgaW4gZXJyb3IgbWVzc2FnZSwgYmFzZWQgb24gYXJndW1lbnQgbnVtYmVyXG4gICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKC9cXHsoXFxkKVxcfS9nLCAoXywgbikgPT4gYXJnc1tuXSB8fCAnJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdBRE0tWklQOiAnICsgbWVzc2FnZSk7XG4gICAgfTtcbn1cblxuLy8gSW5pdCBlcnJvcnMgd2l0aCB0ZW1wbGF0ZVxuZm9yIChjb25zdCBtc2cgb2YgT2JqZWN0LmtleXMoZXJyb3JzKSkge1xuICAgIGV4cG9ydHNbbXNnXSA9IEUoZXJyb3JzW21zZ10pO1xufVxuIiwgImNvbnN0IGZzeXN0ZW0gPSByZXF1aXJlKFwiZnNcIik7XG5jb25zdCBwdGggPSByZXF1aXJlKFwicGF0aFwiKTtcbmNvbnN0IENvbnN0YW50cyA9IHJlcXVpcmUoXCIuL2NvbnN0YW50c1wiKTtcbmNvbnN0IEVycm9ycyA9IHJlcXVpcmUoXCIuL2Vycm9yc1wiKTtcbmNvbnN0IGlzV2luID0gdHlwZW9mIHByb2Nlc3MgPT09IFwib2JqZWN0XCIgJiYgXCJ3aW4zMlwiID09PSBwcm9jZXNzLnBsYXRmb3JtO1xuXG5jb25zdCBpc19PYmogPSAob2JqKSA9PiB0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiICYmIG9iaiAhPT0gbnVsbDtcblxuLy8gZ2VuZXJhdGUgQ1JDMzIgbG9va3VwIHRhYmxlXG5jb25zdCBjcmNUYWJsZSA9IG5ldyBVaW50MzJBcnJheSgyNTYpLm1hcCgodCwgYykgPT4ge1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgODsgaysrKSB7XG4gICAgICAgIGlmICgoYyAmIDEpICE9PSAwKSB7XG4gICAgICAgICAgICBjID0gMHhlZGI4ODMyMCBeIChjID4+PiAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGMgPj4+PSAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjID4+PiAwO1xufSk7XG5cbi8vIFVUSUxTIGZ1bmN0aW9uc1xuXG5mdW5jdGlvbiBVdGlscyhvcHRzKSB7XG4gICAgdGhpcy5zZXAgPSBwdGguc2VwO1xuICAgIHRoaXMuZnMgPSBmc3lzdGVtO1xuXG4gICAgaWYgKGlzX09iaihvcHRzKSkge1xuICAgICAgICAvLyBjdXN0b20gZmlsZXN5c3RlbVxuICAgICAgICBpZiAoaXNfT2JqKG9wdHMuZnMpICYmIHR5cGVvZiBvcHRzLmZzLnN0YXRTeW5jID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZnMgPSBvcHRzLmZzO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFV0aWxzO1xuXG4vLyBJTlNUQU5USUFCTEUgZnVuY3Rpb25zXG5cblV0aWxzLnByb3RvdHlwZS5tYWtlRGlyID0gZnVuY3Rpb24gKC8qU3RyaW5nKi8gZm9sZGVyKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBTeW5jIC0gbWFrZSBkaXJlY3RvcmllcyB0cmVlXG4gICAgZnVuY3Rpb24gbWtkaXJTeW5jKC8qU3RyaW5nKi8gZnBhdGgpIHtcbiAgICAgICAgbGV0IHJlc29sdmVkUGF0aCA9IGZwYXRoLnNwbGl0KHNlbGYuc2VwKVswXTtcbiAgICAgICAgZnBhdGguc3BsaXQoc2VsZi5zZXApLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIGlmICghbmFtZSB8fCBuYW1lLnN1YnN0cigtMSwgMSkgPT09IFwiOlwiKSByZXR1cm47XG4gICAgICAgICAgICByZXNvbHZlZFBhdGggKz0gc2VsZi5zZXAgKyBuYW1lO1xuICAgICAgICAgICAgdmFyIHN0YXQ7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHN0YXQgPSBzZWxmLmZzLnN0YXRTeW5jKHJlc29sdmVkUGF0aCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5mcy5ta2RpclN5bmMocmVzb2x2ZWRQYXRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGF0ICYmIHN0YXQuaXNGaWxlKCkpIHRocm93IEVycm9ycy5GSUxFX0lOX1RIRV9XQVkoYFwiJHtyZXNvbHZlZFBhdGh9XCJgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbWtkaXJTeW5jKGZvbGRlcik7XG59O1xuXG5VdGlscy5wcm90b3R5cGUud3JpdGVGaWxlVG8gPSBmdW5jdGlvbiAoLypTdHJpbmcqLyBwYXRoLCAvKkJ1ZmZlciovIGNvbnRlbnQsIC8qQm9vbGVhbiovIG92ZXJ3cml0ZSwgLypOdW1iZXIqLyBhdHRyKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgaWYgKHNlbGYuZnMuZXhpc3RzU3luYyhwYXRoKSkge1xuICAgICAgICBpZiAoIW92ZXJ3cml0ZSkgcmV0dXJuIGZhbHNlOyAvLyBjYW5ub3Qgb3ZlcndyaXRlXG5cbiAgICAgICAgdmFyIHN0YXQgPSBzZWxmLmZzLnN0YXRTeW5jKHBhdGgpO1xuICAgICAgICBpZiAoc3RhdC5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIGZvbGRlciA9IHB0aC5kaXJuYW1lKHBhdGgpO1xuICAgIGlmICghc2VsZi5mcy5leGlzdHNTeW5jKGZvbGRlcikpIHtcbiAgICAgICAgc2VsZi5tYWtlRGlyKGZvbGRlcik7XG4gICAgfVxuXG4gICAgdmFyIGZkO1xuICAgIHRyeSB7XG4gICAgICAgIGZkID0gc2VsZi5mcy5vcGVuU3luYyhwYXRoLCBcIndcIiwgMG82NjYpOyAvLyAwNjY2XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBzZWxmLmZzLmNobW9kU3luYyhwYXRoLCAwbzY2Nik7XG4gICAgICAgIGZkID0gc2VsZi5mcy5vcGVuU3luYyhwYXRoLCBcIndcIiwgMG82NjYpO1xuICAgIH1cbiAgICBpZiAoZmQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlbGYuZnMud3JpdGVTeW5jKGZkLCBjb250ZW50LCAwLCBjb250ZW50Lmxlbmd0aCwgMCk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBzZWxmLmZzLmNsb3NlU3luYyhmZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2VsZi5mcy5jaG1vZFN5bmMocGF0aCwgYXR0ciB8fCAwbzY2Nik7XG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG5VdGlscy5wcm90b3R5cGUud3JpdGVGaWxlVG9Bc3luYyA9IGZ1bmN0aW9uICgvKlN0cmluZyovIHBhdGgsIC8qQnVmZmVyKi8gY29udGVudCwgLypCb29sZWFuKi8gb3ZlcndyaXRlLCAvKk51bWJlciovIGF0dHIsIC8qRnVuY3Rpb24qLyBjYWxsYmFjaykge1xuICAgIGlmICh0eXBlb2YgYXR0ciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gYXR0cjtcbiAgICAgICAgYXR0ciA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIHNlbGYuZnMuZXhpc3RzKHBhdGgsIGZ1bmN0aW9uIChleGlzdCkge1xuICAgICAgICBpZiAoZXhpc3QgJiYgIW92ZXJ3cml0ZSkgcmV0dXJuIGNhbGxiYWNrKGZhbHNlKTtcblxuICAgICAgICBzZWxmLmZzLnN0YXQocGF0aCwgZnVuY3Rpb24gKGVyciwgc3RhdCkge1xuICAgICAgICAgICAgaWYgKGV4aXN0ICYmIHN0YXQuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhmYWxzZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBmb2xkZXIgPSBwdGguZGlybmFtZShwYXRoKTtcbiAgICAgICAgICAgIHNlbGYuZnMuZXhpc3RzKGZvbGRlciwgZnVuY3Rpb24gKGV4aXN0cykge1xuICAgICAgICAgICAgICAgIGlmICghZXhpc3RzKSBzZWxmLm1ha2VEaXIoZm9sZGVyKTtcblxuICAgICAgICAgICAgICAgIHNlbGYuZnMub3BlbihwYXRoLCBcIndcIiwgMG82NjYsIGZ1bmN0aW9uIChlcnIsIGZkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZnMuY2htb2QocGF0aCwgMG82NjYsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmZzLm9wZW4ocGF0aCwgXCJ3XCIsIDBvNjY2LCBmdW5jdGlvbiAoZXJyLCBmZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmZzLndyaXRlKGZkLCBjb250ZW50LCAwLCBjb250ZW50Lmxlbmd0aCwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5mcy5jbG9zZShmZCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZnMuY2htb2QocGF0aCwgYXR0ciB8fCAwbzY2NiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmZzLndyaXRlKGZkLCBjb250ZW50LCAwLCBjb250ZW50Lmxlbmd0aCwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZnMuY2xvc2UoZmQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5mcy5jaG1vZChwYXRoLCBhdHRyIHx8IDBvNjY2LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZnMuY2htb2QocGF0aCwgYXR0ciB8fCAwbzY2NiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cblV0aWxzLnByb3RvdHlwZS5maW5kRmlsZXMgPSBmdW5jdGlvbiAoLypTdHJpbmcqLyBwYXRoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiBmaW5kU3luYygvKlN0cmluZyovIGRpciwgLypSZWdFeHAqLyBwYXR0ZXJuLCAvKkJvb2xlYW4qLyByZWN1cnNpdmUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwYXR0ZXJuID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgcmVjdXJzaXZlID0gcGF0dGVybjtcbiAgICAgICAgICAgIHBhdHRlcm4gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZpbGVzID0gW107XG4gICAgICAgIHNlbGYuZnMucmVhZGRpclN5bmMoZGlyKS5mb3JFYWNoKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgICAgICBjb25zdCBwYXRoID0gcHRoLmpvaW4oZGlyLCBmaWxlKTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXQgPSBzZWxmLmZzLnN0YXRTeW5jKHBhdGgpO1xuXG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4gfHwgcGF0dGVybi50ZXN0KHBhdGgpKSB7XG4gICAgICAgICAgICAgICAgZmlsZXMucHVzaChwdGgubm9ybWFsaXplKHBhdGgpICsgKHN0YXQuaXNEaXJlY3RvcnkoKSA/IHNlbGYuc2VwIDogXCJcIikpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3RhdC5pc0RpcmVjdG9yeSgpICYmIHJlY3Vyc2l2ZSkgZmlsZXMgPSBmaWxlcy5jb25jYXQoZmluZFN5bmMocGF0aCwgcGF0dGVybiwgcmVjdXJzaXZlKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmlsZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbmRTeW5jKHBhdGgsIHVuZGVmaW5lZCwgdHJ1ZSk7XG59O1xuXG4vKipcbiAqIENhbGxiYWNrIGZvciBzaG93aW5nIGlmIGV2ZXJ5dGhpbmcgd2FzIGRvbmUuXG4gKlxuICogQGNhbGxiYWNrIGZpbGVsaXN0Q2FsbGJhY2tcbiAqIEBwYXJhbSB7RXJyb3J9IGVyciAtIEVycm9yIG9iamVjdFxuICogQHBhcmFtIHtzdHJpbmdbXX0gbGlzdCAtIHdhcyByZXF1ZXN0IGZ1bGx5IGNvbXBsZXRlZFxuICovXG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBkaXJcbiAqIEBwYXJhbSB7ZmlsZWxpc3RDYWxsYmFja30gY2JcbiAqL1xuVXRpbHMucHJvdG90eXBlLmZpbmRGaWxlc0FzeW5jID0gZnVuY3Rpb24gKGRpciwgY2IpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBsZXQgcmVzdWx0cyA9IFtdO1xuICAgIHNlbGYuZnMucmVhZGRpcihkaXIsIGZ1bmN0aW9uIChlcnIsIGxpc3QpIHtcbiAgICAgICAgaWYgKGVycikgcmV0dXJuIGNiKGVycik7XG4gICAgICAgIGxldCBsaXN0X2xlbmd0aCA9IGxpc3QubGVuZ3RoO1xuICAgICAgICBpZiAoIWxpc3RfbGVuZ3RoKSByZXR1cm4gY2IobnVsbCwgcmVzdWx0cyk7XG4gICAgICAgIGxpc3QuZm9yRWFjaChmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICAgICAgZmlsZSA9IHB0aC5qb2luKGRpciwgZmlsZSk7XG4gICAgICAgICAgICBzZWxmLmZzLnN0YXQoZmlsZSwgZnVuY3Rpb24gKGVyciwgc3RhdCkge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHJldHVybiBjYihlcnIpO1xuICAgICAgICAgICAgICAgIGlmIChzdGF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChwdGgubm9ybWFsaXplKGZpbGUpICsgKHN0YXQuaXNEaXJlY3RvcnkoKSA/IHNlbGYuc2VwIDogXCJcIikpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdC5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmZpbmRGaWxlc0FzeW5jKGZpbGUsIGZ1bmN0aW9uIChlcnIsIHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHJldHVybiBjYihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMgPSByZXN1bHRzLmNvbmNhdChyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghLS1saXN0X2xlbmd0aCkgY2IobnVsbCwgcmVzdWx0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghLS1saXN0X2xlbmd0aCkgY2IobnVsbCwgcmVzdWx0cyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG5VdGlscy5wcm90b3R5cGUuZ2V0QXR0cmlidXRlcyA9IGZ1bmN0aW9uICgpIHt9O1xuXG5VdGlscy5wcm90b3R5cGUuc2V0QXR0cmlidXRlcyA9IGZ1bmN0aW9uICgpIHt9O1xuXG4vLyBTVEFUSUMgZnVuY3Rpb25zXG5cbi8vIGNyYzMyIHNpbmdsZSB1cGRhdGUgKGl0IGlzIHBhcnQgb2YgY3JjMzIpXG5VdGlscy5jcmMzMnVwZGF0ZSA9IGZ1bmN0aW9uIChjcmMsIGJ5dGUpIHtcbiAgICByZXR1cm4gY3JjVGFibGVbKGNyYyBeIGJ5dGUpICYgMHhmZl0gXiAoY3JjID4+PiA4KTtcbn07XG5cblV0aWxzLmNyYzMyID0gZnVuY3Rpb24gKGJ1Zikge1xuICAgIGlmICh0eXBlb2YgYnVmID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGJ1ZiA9IEJ1ZmZlci5mcm9tKGJ1ZiwgXCJ1dGY4XCIpO1xuICAgIH1cblxuICAgIGxldCBsZW4gPSBidWYubGVuZ3RoO1xuICAgIGxldCBjcmMgPSB+MDtcbiAgICBmb3IgKGxldCBvZmYgPSAwOyBvZmYgPCBsZW47ICkgY3JjID0gVXRpbHMuY3JjMzJ1cGRhdGUoY3JjLCBidWZbb2ZmKytdKTtcbiAgICAvLyB4b3IgYW5kIGNhc3QgYXMgdWludDMyIG51bWJlclxuICAgIHJldHVybiB+Y3JjID4+PiAwO1xufTtcblxuVXRpbHMubWV0aG9kVG9TdHJpbmcgPSBmdW5jdGlvbiAoLypOdW1iZXIqLyBtZXRob2QpIHtcbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgICBjYXNlIENvbnN0YW50cy5TVE9SRUQ6XG4gICAgICAgICAgICByZXR1cm4gXCJTVE9SRUQgKFwiICsgbWV0aG9kICsgXCIpXCI7XG4gICAgICAgIGNhc2UgQ29uc3RhbnRzLkRFRkxBVEVEOlxuICAgICAgICAgICAgcmV0dXJuIFwiREVGTEFURUQgKFwiICsgbWV0aG9kICsgXCIpXCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gXCJVTlNVUFBPUlRFRCAoXCIgKyBtZXRob2QgKyBcIilcIjtcbiAgICB9XG59O1xuXG4vKipcbiAqIHJlbW92ZXMgXCIuLlwiIHN0eWxlIHBhdGggZWxlbWVudHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gZml4YWJsZSBwYXRoXG4gKiBAcmV0dXJucyBzdHJpbmcgLSBmaXhlZCBmaWxlcGF0aFxuICovXG5VdGlscy5jYW5vbmljYWwgPSBmdW5jdGlvbiAoLypzdHJpbmcqLyBwYXRoKSB7XG4gICAgaWYgKCFwYXRoKSByZXR1cm4gXCJcIjtcbiAgICAvLyB0cmljayBub3JtYWxpemUgdGhpbmsgcGF0aCBpcyBhYnNvbHV0ZVxuICAgIGNvbnN0IHNhZmVTdWZmaXggPSBwdGgucG9zaXgubm9ybWFsaXplKFwiL1wiICsgcGF0aC5zcGxpdChcIlxcXFxcIikuam9pbihcIi9cIikpO1xuICAgIHJldHVybiBwdGguam9pbihcIi5cIiwgc2FmZVN1ZmZpeCk7XG59O1xuXG4vKipcbiAqIGZpeCBmaWxlIG5hbWVzIGluIGFjaGl2ZVxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSBmaXhhYmxlIHBhdGhcbiAqIEByZXR1cm5zIHN0cmluZyAtIGZpeGVkIGZpbGVwYXRoXG4gKi9cblxuVXRpbHMuemlwbmFtZWZpeCA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgaWYgKCFwYXRoKSByZXR1cm4gXCJcIjtcbiAgICAvLyB0cmljayBub3JtYWxpemUgdGhpbmsgcGF0aCBpcyBhYnNvbHV0ZVxuICAgIGNvbnN0IHNhZmVTdWZmaXggPSBwdGgucG9zaXgubm9ybWFsaXplKFwiL1wiICsgcGF0aC5zcGxpdChcIlxcXFxcIikuam9pbihcIi9cIikpO1xuICAgIHJldHVybiBwdGgucG9zaXguam9pbihcIi5cIiwgc2FmZVN1ZmZpeCk7XG59O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuc1xuICovXG5VdGlscy5maW5kTGFzdCA9IGZ1bmN0aW9uIChhcnIsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhcnIgaXMgbm90IGFycmF5XCIpO1xuXG4gICAgY29uc3QgbGVuID0gYXJyLmxlbmd0aCA+Pj4gMDtcbiAgICBmb3IgKGxldCBpID0gbGVuIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKGFycltpXSwgaSwgYXJyKSkge1xuICAgICAgICAgICAgcmV0dXJuIGFycltpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdm9pZCAwO1xufTtcblxuLy8gbWFrZSBhYm9sdXRlIHBhdGhzIHRha2luZyBwcmVmaXggYXMgcm9vdCBmb2xkZXJcblV0aWxzLnNhbml0aXplID0gZnVuY3Rpb24gKC8qc3RyaW5nKi8gcHJlZml4LCAvKnN0cmluZyovIG5hbWUpIHtcbiAgICBwcmVmaXggPSBwdGgucmVzb2x2ZShwdGgubm9ybWFsaXplKHByZWZpeCkpO1xuICAgIHZhciBwYXJ0cyA9IG5hbWUuc3BsaXQoXCIvXCIpO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gcGFydHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhciBwYXRoID0gcHRoLm5vcm1hbGl6ZShwdGguam9pbihwcmVmaXgsIHBhcnRzLnNsaWNlKGksIGwpLmpvaW4ocHRoLnNlcCkpKTtcbiAgICAgICAgaWYgKHBhdGguaW5kZXhPZihwcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHRoLm5vcm1hbGl6ZShwdGguam9pbihwcmVmaXgsIHB0aC5iYXNlbmFtZShuYW1lKSkpO1xufTtcblxuLy8gY29udmVydHMgYnVmZmVyLCBVaW50OEFycmF5LCBzdHJpbmcgdHlwZXMgdG8gYnVmZmVyXG5VdGlscy50b0J1ZmZlciA9IGZ1bmN0aW9uIHRvQnVmZmVyKC8qYnVmZmVyLCBVaW50OEFycmF5LCBzdHJpbmcqLyBpbnB1dCwgLyogZnVuY3Rpb24gKi8gZW5jb2Rlcikge1xuICAgIGlmIChCdWZmZXIuaXNCdWZmZXIoaW5wdXQpKSB7XG4gICAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9IGVsc2UgaWYgKGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSkge1xuICAgICAgICByZXR1cm4gQnVmZmVyLmZyb20oaW5wdXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGV4cGVjdCBzdHJpbmcgYWxsIG90aGVyIHZhbHVlcyBhcmUgaW52YWxpZCBhbmQgcmV0dXJuIGVtcHR5IGJ1ZmZlclxuICAgICAgICByZXR1cm4gdHlwZW9mIGlucHV0ID09PSBcInN0cmluZ1wiID8gZW5jb2RlcihpbnB1dCkgOiBCdWZmZXIuYWxsb2MoMCk7XG4gICAgfVxufTtcblxuVXRpbHMucmVhZEJpZ1VJbnQ2NExFID0gZnVuY3Rpb24gKC8qQnVmZmVyKi8gYnVmZmVyLCAvKmludCovIGluZGV4KSB7XG4gICAgdmFyIHNsaWNlID0gQnVmZmVyLmZyb20oYnVmZmVyLnNsaWNlKGluZGV4LCBpbmRleCArIDgpKTtcbiAgICBzbGljZS5zd2FwNjQoKTtcblxuICAgIHJldHVybiBwYXJzZUludChgMHgke3NsaWNlLnRvU3RyaW5nKFwiaGV4XCIpfWApO1xufTtcblxuVXRpbHMuZnJvbURPUzJEYXRlID0gZnVuY3Rpb24gKHZhbCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSgoKHZhbCA+PiAyNSkgJiAweDdmKSArIDE5ODAsIE1hdGgubWF4KCgodmFsID4+IDIxKSAmIDB4MGYpIC0gMSwgMCksIE1hdGgubWF4KCh2YWwgPj4gMTYpICYgMHgxZiwgMSksICh2YWwgPj4gMTEpICYgMHgxZiwgKHZhbCA+PiA1KSAmIDB4M2YsICh2YWwgJiAweDFmKSA8PCAxKTtcbn07XG5cblV0aWxzLmZyb21EYXRlMkRPUyA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICBsZXQgZGF0ZSA9IDA7XG4gICAgbGV0IHRpbWUgPSAwO1xuICAgIGlmICh2YWwuZ2V0RnVsbFllYXIoKSA+IDE5NzkpIHtcbiAgICAgICAgZGF0ZSA9ICgoKHZhbC5nZXRGdWxsWWVhcigpIC0gMTk4MCkgJiAweDdmKSA8PCA5KSB8ICgodmFsLmdldE1vbnRoKCkgKyAxKSA8PCA1KSB8IHZhbC5nZXREYXRlKCk7XG4gICAgICAgIHRpbWUgPSAodmFsLmdldEhvdXJzKCkgPDwgMTEpIHwgKHZhbC5nZXRNaW51dGVzKCkgPDwgNSkgfCAodmFsLmdldFNlY29uZHMoKSA+PiAxKTtcbiAgICB9XG4gICAgcmV0dXJuIChkYXRlIDw8IDE2KSB8IHRpbWU7XG59O1xuXG5VdGlscy5pc1dpbiA9IGlzV2luOyAvLyBEbyB3ZSBoYXZlIHdpbmRvd3Mgc3lzdGVtXG5VdGlscy5jcmNUYWJsZSA9IGNyY1RhYmxlO1xuIiwgImNvbnN0IHB0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgvKlN0cmluZyovIHBhdGgsIC8qVXRpbHMgb2JqZWN0Ki8geyBmcyB9KSB7XG4gICAgdmFyIF9wYXRoID0gcGF0aCB8fCBcIlwiLFxuICAgICAgICBfb2JqID0gbmV3QXR0cigpLFxuICAgICAgICBfc3RhdCA9IG51bGw7XG5cbiAgICBmdW5jdGlvbiBuZXdBdHRyKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGlyZWN0b3J5OiBmYWxzZSxcbiAgICAgICAgICAgIHJlYWRvbmx5OiBmYWxzZSxcbiAgICAgICAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICAgICAgICBleGVjdXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIG10aW1lOiAwLFxuICAgICAgICAgICAgYXRpbWU6IDBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoX3BhdGggJiYgZnMuZXhpc3RzU3luYyhfcGF0aCkpIHtcbiAgICAgICAgX3N0YXQgPSBmcy5zdGF0U3luYyhfcGF0aCk7XG4gICAgICAgIF9vYmouZGlyZWN0b3J5ID0gX3N0YXQuaXNEaXJlY3RvcnkoKTtcbiAgICAgICAgX29iai5tdGltZSA9IF9zdGF0Lm10aW1lO1xuICAgICAgICBfb2JqLmF0aW1lID0gX3N0YXQuYXRpbWU7XG4gICAgICAgIF9vYmouZXhlY3V0YWJsZSA9ICgwbzExMSAmIF9zdGF0Lm1vZGUpICE9PSAwOyAvLyBmaWxlIGlzIGV4ZWN1dGFibGUgd2hvIGV2ZXIgaGFyIHJpZ2h0IG5vdCBqdXN0IG93bmVyXG4gICAgICAgIF9vYmoucmVhZG9ubHkgPSAoMG8yMDAgJiBfc3RhdC5tb2RlKSA9PT0gMDsgLy8gcmVhZG9ubHkgaWYgb3duZXIgaGFzIG5vIHdyaXRlIHJpZ2h0XG4gICAgICAgIF9vYmouaGlkZGVuID0gcHRoLmJhc2VuYW1lKF9wYXRoKVswXSA9PT0gXCIuXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiSW52YWxpZCBwYXRoOiBcIiArIF9wYXRoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQgZGlyZWN0b3J5KCkge1xuICAgICAgICAgICAgcmV0dXJuIF9vYmouZGlyZWN0b3J5O1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCByZWFkT25seSgpIHtcbiAgICAgICAgICAgIHJldHVybiBfb2JqLnJlYWRvbmx5O1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBoaWRkZW4oKSB7XG4gICAgICAgICAgICByZXR1cm4gX29iai5oaWRkZW47XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IG10aW1lKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9vYmoubXRpbWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGF0aW1lKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9vYmouYXRpbWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGV4ZWN1dGFibGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gX29iai5leGVjdXRhYmxlO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRlY29kZUF0dHJpYnV0ZXM6IGZ1bmN0aW9uICgpIHt9LFxuXG4gICAgICAgIGVuY29kZUF0dHJpYnV0ZXM6IGZ1bmN0aW9uICgpIHt9LFxuXG4gICAgICAgIHRvSlNPTjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYXRoOiBfcGF0aCxcbiAgICAgICAgICAgICAgICBpc0RpcmVjdG9yeTogX29iai5kaXJlY3RvcnksXG4gICAgICAgICAgICAgICAgaXNSZWFkT25seTogX29iai5yZWFkb25seSxcbiAgICAgICAgICAgICAgICBpc0hpZGRlbjogX29iai5oaWRkZW4sXG4gICAgICAgICAgICAgICAgaXNFeGVjdXRhYmxlOiBfb2JqLmV4ZWN1dGFibGUsXG4gICAgICAgICAgICAgICAgbVRpbWU6IF9vYmoubXRpbWUsXG4gICAgICAgICAgICAgICAgYVRpbWU6IF9vYmouYXRpbWVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnRvSlNPTigpLCBudWxsLCBcIlxcdFwiKTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuIiwgIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGVmczogdHJ1ZSxcbiAgICBlbmNvZGU6IChkYXRhKSA9PiBCdWZmZXIuZnJvbShkYXRhLCBcInV0ZjhcIiksXG4gICAgZGVjb2RlOiAoZGF0YSkgPT4gZGF0YS50b1N0cmluZyhcInV0ZjhcIilcbn07XG4iLCAibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcbm1vZHVsZS5leHBvcnRzLkNvbnN0YW50cyA9IHJlcXVpcmUoXCIuL2NvbnN0YW50c1wiKTtcbm1vZHVsZS5leHBvcnRzLkVycm9ycyA9IHJlcXVpcmUoXCIuL2Vycm9yc1wiKTtcbm1vZHVsZS5leHBvcnRzLkZpbGVBdHRyID0gcmVxdWlyZShcIi4vZmF0dHJcIik7XG5tb2R1bGUuZXhwb3J0cy5kZWNvZGVyID0gcmVxdWlyZShcIi4vZGVjb2RlclwiKTtcbiIsICJ2YXIgVXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbFwiKSxcbiAgICBDb25zdGFudHMgPSBVdGlscy5Db25zdGFudHM7XG5cbi8qIFRoZSBjZW50cmFsIGRpcmVjdG9yeSBmaWxlIGhlYWRlciAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92ZXJNYWRlID0gMjAsIC8vIHYyLjBcbiAgICAgICAgX3ZlcnNpb24gPSAxMCwgLy8gdjEuMFxuICAgICAgICBfZmxhZ3MgPSAwLFxuICAgICAgICBfbWV0aG9kID0gMCxcbiAgICAgICAgX3RpbWUgPSAwLFxuICAgICAgICBfY3JjID0gMCxcbiAgICAgICAgX2NvbXByZXNzZWRTaXplID0gMCxcbiAgICAgICAgX3NpemUgPSAwLFxuICAgICAgICBfZm5hbWVMZW4gPSAwLFxuICAgICAgICBfZXh0cmFMZW4gPSAwLFxuICAgICAgICBfY29tTGVuID0gMCxcbiAgICAgICAgX2Rpc2tTdGFydCA9IDAsXG4gICAgICAgIF9pbmF0dHIgPSAwLFxuICAgICAgICBfYXR0ciA9IDAsXG4gICAgICAgIF9vZmZzZXQgPSAwO1xuXG4gICAgX3Zlck1hZGUgfD0gVXRpbHMuaXNXaW4gPyAweDBhMDAgOiAweDAzMDA7XG5cbiAgICAvLyBTZXQgRUZTIGZsYWcgc2luY2UgZmlsZW5hbWUgYW5kIGNvbW1lbnQgZmllbGRzIGFyZSBhbGwgYnkgZGVmYXVsdCBlbmNvZGVkIHVzaW5nIFVURi04LlxuICAgIC8vIFdpdGhvdXQgaXQgZmlsZSBuYW1lcyBtYXkgYmUgY29ycnVwdGVkIGZvciBvdGhlciBhcHBzIHdoZW4gZmlsZSBuYW1lcyB1c2UgdW5pY29kZSBjaGFyc1xuICAgIF9mbGFncyB8PSBDb25zdGFudHMuRkxHX0VGUztcblxuICAgIGNvbnN0IF9sb2NhbEhlYWRlciA9IHtcbiAgICAgICAgZXh0cmFMZW46IDBcbiAgICB9O1xuXG4gICAgLy8gY2FzdGluZ1xuICAgIGNvbnN0IHVpbnQzMiA9ICh2YWwpID0+IE1hdGgubWF4KDAsIHZhbCkgPj4+IDA7XG4gICAgY29uc3QgdWludDE2ID0gKHZhbCkgPT4gTWF0aC5tYXgoMCwgdmFsKSAmIDB4ZmZmZjtcbiAgICBjb25zdCB1aW50OCA9ICh2YWwpID0+IE1hdGgubWF4KDAsIHZhbCkgJiAweGZmO1xuXG4gICAgX3RpbWUgPSBVdGlscy5mcm9tRGF0ZTJET1MobmV3IERhdGUoKSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQgbWFkZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdmVyTWFkZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IG1hZGUodmFsKSB7XG4gICAgICAgICAgICBfdmVyTWFkZSA9IHZhbDtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgdmVyc2lvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBfdmVyc2lvbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IHZlcnNpb24odmFsKSB7XG4gICAgICAgICAgICBfdmVyc2lvbiA9IHZhbDtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgZmxhZ3MoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2ZsYWdzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgZmxhZ3ModmFsKSB7XG4gICAgICAgICAgICBfZmxhZ3MgPSB2YWw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGZsYWdzX2VmcygpIHtcbiAgICAgICAgICAgIHJldHVybiAoX2ZsYWdzICYgQ29uc3RhbnRzLkZMR19FRlMpID4gMDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IGZsYWdzX2Vmcyh2YWwpIHtcbiAgICAgICAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgICAgICAgICBfZmxhZ3MgfD0gQ29uc3RhbnRzLkZMR19FRlM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9mbGFncyAmPSB+Q29uc3RhbnRzLkZMR19FRlM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGZsYWdzX2Rlc2MoKSB7XG4gICAgICAgICAgICByZXR1cm4gKF9mbGFncyAmIENvbnN0YW50cy5GTEdfREVTQykgPiAwO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgZmxhZ3NfZGVzYyh2YWwpIHtcbiAgICAgICAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgICAgICAgICBfZmxhZ3MgfD0gQ29uc3RhbnRzLkZMR19ERVNDO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfZmxhZ3MgJj0gfkNvbnN0YW50cy5GTEdfREVTQztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgbWV0aG9kKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9tZXRob2Q7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBtZXRob2QodmFsKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHZhbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgQ29uc3RhbnRzLlNUT1JFRDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52ZXJzaW9uID0gMTA7XG4gICAgICAgICAgICAgICAgY2FzZSBDb25zdGFudHMuREVGTEFURUQ6XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52ZXJzaW9uID0gMjA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfbWV0aG9kID0gdmFsO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCB0aW1lKCkge1xuICAgICAgICAgICAgcmV0dXJuIFV0aWxzLmZyb21ET1MyRGF0ZSh0aGlzLnRpbWV2YWwpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgdGltZSh2YWwpIHtcbiAgICAgICAgICAgIHRoaXMudGltZXZhbCA9IFV0aWxzLmZyb21EYXRlMkRPUyh2YWwpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCB0aW1ldmFsKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aW1lO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgdGltZXZhbCh2YWwpIHtcbiAgICAgICAgICAgIF90aW1lID0gdWludDMyKHZhbCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IHRpbWVIaWdoQnl0ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB1aW50OChfdGltZSA+Pj4gOCk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBjcmMoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NyYztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IGNyYyh2YWwpIHtcbiAgICAgICAgICAgIF9jcmMgPSB1aW50MzIodmFsKTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgY29tcHJlc3NlZFNpemUoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NvbXByZXNzZWRTaXplO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgY29tcHJlc3NlZFNpemUodmFsKSB7XG4gICAgICAgICAgICBfY29tcHJlc3NlZFNpemUgPSB1aW50MzIodmFsKTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgc2l6ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBfc2l6ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IHNpemUodmFsKSB7XG4gICAgICAgICAgICBfc2l6ZSA9IHVpbnQzMih2YWwpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBmaWxlTmFtZUxlbmd0aCgpIHtcbiAgICAgICAgICAgIHJldHVybiBfZm5hbWVMZW47XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBmaWxlTmFtZUxlbmd0aCh2YWwpIHtcbiAgICAgICAgICAgIF9mbmFtZUxlbiA9IHZhbDtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgZXh0cmFMZW5ndGgoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2V4dHJhTGVuO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgZXh0cmFMZW5ndGgodmFsKSB7XG4gICAgICAgICAgICBfZXh0cmFMZW4gPSB2YWw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGV4dHJhTG9jYWxMZW5ndGgoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2xvY2FsSGVhZGVyLmV4dHJhTGVuO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgZXh0cmFMb2NhbExlbmd0aCh2YWwpIHtcbiAgICAgICAgICAgIF9sb2NhbEhlYWRlci5leHRyYUxlbiA9IHZhbDtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgY29tbWVudExlbmd0aCgpIHtcbiAgICAgICAgICAgIHJldHVybiBfY29tTGVuO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgY29tbWVudExlbmd0aCh2YWwpIHtcbiAgICAgICAgICAgIF9jb21MZW4gPSB2YWw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGRpc2tOdW1TdGFydCgpIHtcbiAgICAgICAgICAgIHJldHVybiBfZGlza1N0YXJ0O1xuICAgICAgICB9LFxuICAgICAgICBzZXQgZGlza051bVN0YXJ0KHZhbCkge1xuICAgICAgICAgICAgX2Rpc2tTdGFydCA9IHVpbnQzMih2YWwpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBpbkF0dHIoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2luYXR0cjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IGluQXR0cih2YWwpIHtcbiAgICAgICAgICAgIF9pbmF0dHIgPSB1aW50MzIodmFsKTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgYXR0cigpIHtcbiAgICAgICAgICAgIHJldHVybiBfYXR0cjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IGF0dHIodmFsKSB7XG4gICAgICAgICAgICBfYXR0ciA9IHVpbnQzMih2YWwpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIGdldCBVbml4IGZpbGUgcGVybWlzc2lvbnNcbiAgICAgICAgZ2V0IGZpbGVBdHRyKCkge1xuICAgICAgICAgICAgcmV0dXJuIChfYXR0ciB8fCAwKSA+PiAxNiAmIDB4ZmZmO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBvZmZzZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gX29mZnNldDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IG9mZnNldCh2YWwpIHtcbiAgICAgICAgICAgIF9vZmZzZXQgPSB1aW50MzIodmFsKTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgZW5jcnlwdGVkKCkge1xuICAgICAgICAgICAgcmV0dXJuIChfZmxhZ3MgJiBDb25zdGFudHMuRkxHX0VOQykgPT09IENvbnN0YW50cy5GTEdfRU5DO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBjZW50cmFsSGVhZGVyU2l6ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBDb25zdGFudHMuQ0VOSERSICsgX2ZuYW1lTGVuICsgX2V4dHJhTGVuICsgX2NvbUxlbjtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgcmVhbERhdGFPZmZzZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gX29mZnNldCArIENvbnN0YW50cy5MT0NIRFIgKyBfbG9jYWxIZWFkZXIuZm5hbWVMZW4gKyBfbG9jYWxIZWFkZXIuZXh0cmFMZW47XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGxvY2FsSGVhZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9sb2NhbEhlYWRlcjtcbiAgICAgICAgfSxcblxuICAgICAgICBsb2FkTG9jYWxIZWFkZXJGcm9tQmluYXJ5OiBmdW5jdGlvbiAoLypCdWZmZXIqLyBpbnB1dCkge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBpbnB1dC5zbGljZShfb2Zmc2V0LCBfb2Zmc2V0ICsgQ29uc3RhbnRzLkxPQ0hEUik7XG4gICAgICAgICAgICAvLyAzMCBieXRlcyBhbmQgc2hvdWxkIHN0YXJ0IHdpdGggXCJQS1xcMDAzXFwwMDRcIlxuICAgICAgICAgICAgaWYgKGRhdGEucmVhZFVJbnQzMkxFKDApICE9PSBDb25zdGFudHMuTE9DU0lHKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVXRpbHMuRXJyb3JzLklOVkFMSURfTE9DKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHZlcnNpb24gbmVlZGVkIHRvIGV4dHJhY3RcbiAgICAgICAgICAgIF9sb2NhbEhlYWRlci52ZXJzaW9uID0gZGF0YS5yZWFkVUludDE2TEUoQ29uc3RhbnRzLkxPQ1ZFUik7XG4gICAgICAgICAgICAvLyBnZW5lcmFsIHB1cnBvc2UgYml0IGZsYWdcbiAgICAgICAgICAgIF9sb2NhbEhlYWRlci5mbGFncyA9IGRhdGEucmVhZFVJbnQxNkxFKENvbnN0YW50cy5MT0NGTEcpO1xuICAgICAgICAgICAgLy8gY29tcHJlc3Npb24gbWV0aG9kXG4gICAgICAgICAgICBfbG9jYWxIZWFkZXIubWV0aG9kID0gZGF0YS5yZWFkVUludDE2TEUoQ29uc3RhbnRzLkxPQ0hPVyk7XG4gICAgICAgICAgICAvLyBtb2RpZmljYXRpb24gdGltZSAoMiBieXRlcyB0aW1lLCAyIGJ5dGVzIGRhdGUpXG4gICAgICAgICAgICBfbG9jYWxIZWFkZXIudGltZSA9IGRhdGEucmVhZFVJbnQzMkxFKENvbnN0YW50cy5MT0NUSU0pO1xuICAgICAgICAgICAgLy8gdW5jb21wcmVzc2VkIGZpbGUgY3JjLTMyIHZhbHVcbiAgICAgICAgICAgIF9sb2NhbEhlYWRlci5jcmMgPSBkYXRhLnJlYWRVSW50MzJMRShDb25zdGFudHMuTE9DQ1JDKTtcbiAgICAgICAgICAgIC8vIGNvbXByZXNzZWQgc2l6ZVxuICAgICAgICAgICAgX2xvY2FsSGVhZGVyLmNvbXByZXNzZWRTaXplID0gZGF0YS5yZWFkVUludDMyTEUoQ29uc3RhbnRzLkxPQ1NJWik7XG4gICAgICAgICAgICAvLyB1bmNvbXByZXNzZWQgc2l6ZVxuICAgICAgICAgICAgX2xvY2FsSGVhZGVyLnNpemUgPSBkYXRhLnJlYWRVSW50MzJMRShDb25zdGFudHMuTE9DTEVOKTtcbiAgICAgICAgICAgIC8vIGZpbGVuYW1lIGxlbmd0aFxuICAgICAgICAgICAgX2xvY2FsSGVhZGVyLmZuYW1lTGVuID0gZGF0YS5yZWFkVUludDE2TEUoQ29uc3RhbnRzLkxPQ05BTSk7XG4gICAgICAgICAgICAvLyBleHRyYSBmaWVsZCBsZW5ndGhcbiAgICAgICAgICAgIF9sb2NhbEhlYWRlci5leHRyYUxlbiA9IGRhdGEucmVhZFVJbnQxNkxFKENvbnN0YW50cy5MT0NFWFQpO1xuXG4gICAgICAgICAgICAvLyByZWFkIGV4dHJhIGRhdGFcbiAgICAgICAgICAgIGNvbnN0IGV4dHJhU3RhcnQgPSBfb2Zmc2V0ICsgQ29uc3RhbnRzLkxPQ0hEUiArIF9sb2NhbEhlYWRlci5mbmFtZUxlbjtcbiAgICAgICAgICAgIGNvbnN0IGV4dHJhRW5kID0gZXh0cmFTdGFydCArIF9sb2NhbEhlYWRlci5leHRyYUxlbjtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC5zbGljZShleHRyYVN0YXJ0LCBleHRyYUVuZCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbG9hZEZyb21CaW5hcnk6IGZ1bmN0aW9uICgvKkJ1ZmZlciovIGRhdGEpIHtcbiAgICAgICAgICAgIC8vIGRhdGEgc2hvdWxkIGJlIDQ2IGJ5dGVzIGFuZCBzdGFydCB3aXRoIFwiUEsgMDEgMDJcIlxuICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoICE9PSBDb25zdGFudHMuQ0VOSERSIHx8IGRhdGEucmVhZFVJbnQzMkxFKDApICE9PSBDb25zdGFudHMuQ0VOU0lHKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVXRpbHMuRXJyb3JzLklOVkFMSURfQ0VOKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJzaW9uIG1hZGUgYnlcbiAgICAgICAgICAgIF92ZXJNYWRlID0gZGF0YS5yZWFkVUludDE2TEUoQ29uc3RhbnRzLkNFTlZFTSk7XG4gICAgICAgICAgICAvLyB2ZXJzaW9uIG5lZWRlZCB0byBleHRyYWN0XG4gICAgICAgICAgICBfdmVyc2lvbiA9IGRhdGEucmVhZFVJbnQxNkxFKENvbnN0YW50cy5DRU5WRVIpO1xuICAgICAgICAgICAgLy8gZW5jcnlwdCwgZGVjcnlwdCBmbGFnc1xuICAgICAgICAgICAgX2ZsYWdzID0gZGF0YS5yZWFkVUludDE2TEUoQ29uc3RhbnRzLkNFTkZMRyk7XG4gICAgICAgICAgICAvLyBjb21wcmVzc2lvbiBtZXRob2RcbiAgICAgICAgICAgIF9tZXRob2QgPSBkYXRhLnJlYWRVSW50MTZMRShDb25zdGFudHMuQ0VOSE9XKTtcbiAgICAgICAgICAgIC8vIG1vZGlmaWNhdGlvbiB0aW1lICgyIGJ5dGVzIHRpbWUsIDIgYnl0ZXMgZGF0ZSlcbiAgICAgICAgICAgIF90aW1lID0gZGF0YS5yZWFkVUludDMyTEUoQ29uc3RhbnRzLkNFTlRJTSk7XG4gICAgICAgICAgICAvLyB1bmNvbXByZXNzZWQgZmlsZSBjcmMtMzIgdmFsdWVcbiAgICAgICAgICAgIF9jcmMgPSBkYXRhLnJlYWRVSW50MzJMRShDb25zdGFudHMuQ0VOQ1JDKTtcbiAgICAgICAgICAgIC8vIGNvbXByZXNzZWQgc2l6ZVxuICAgICAgICAgICAgX2NvbXByZXNzZWRTaXplID0gZGF0YS5yZWFkVUludDMyTEUoQ29uc3RhbnRzLkNFTlNJWik7XG4gICAgICAgICAgICAvLyB1bmNvbXByZXNzZWQgc2l6ZVxuICAgICAgICAgICAgX3NpemUgPSBkYXRhLnJlYWRVSW50MzJMRShDb25zdGFudHMuQ0VOTEVOKTtcbiAgICAgICAgICAgIC8vIGZpbGVuYW1lIGxlbmd0aFxuICAgICAgICAgICAgX2ZuYW1lTGVuID0gZGF0YS5yZWFkVUludDE2TEUoQ29uc3RhbnRzLkNFTk5BTSk7XG4gICAgICAgICAgICAvLyBleHRyYSBmaWVsZCBsZW5ndGhcbiAgICAgICAgICAgIF9leHRyYUxlbiA9IGRhdGEucmVhZFVJbnQxNkxFKENvbnN0YW50cy5DRU5FWFQpO1xuICAgICAgICAgICAgLy8gZmlsZSBjb21tZW50IGxlbmd0aFxuICAgICAgICAgICAgX2NvbUxlbiA9IGRhdGEucmVhZFVJbnQxNkxFKENvbnN0YW50cy5DRU5DT00pO1xuICAgICAgICAgICAgLy8gdm9sdW1lIG51bWJlciBzdGFydFxuICAgICAgICAgICAgX2Rpc2tTdGFydCA9IGRhdGEucmVhZFVJbnQxNkxFKENvbnN0YW50cy5DRU5EU0spO1xuICAgICAgICAgICAgLy8gaW50ZXJuYWwgZmlsZSBhdHRyaWJ1dGVzXG4gICAgICAgICAgICBfaW5hdHRyID0gZGF0YS5yZWFkVUludDE2TEUoQ29uc3RhbnRzLkNFTkFUVCk7XG4gICAgICAgICAgICAvLyBleHRlcm5hbCBmaWxlIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgIF9hdHRyID0gZGF0YS5yZWFkVUludDMyTEUoQ29uc3RhbnRzLkNFTkFUWCk7XG4gICAgICAgICAgICAvLyBMT0MgaGVhZGVyIG9mZnNldFxuICAgICAgICAgICAgX29mZnNldCA9IGRhdGEucmVhZFVJbnQzMkxFKENvbnN0YW50cy5DRU5PRkYpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGxvY2FsSGVhZGVyVG9CaW5hcnk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIExPQyBoZWFkZXIgc2l6ZSAoMzAgYnl0ZXMpXG4gICAgICAgICAgICB2YXIgZGF0YSA9IEJ1ZmZlci5hbGxvYyhDb25zdGFudHMuTE9DSERSKTtcbiAgICAgICAgICAgIC8vIFwiUEtcXDAwM1xcMDA0XCJcbiAgICAgICAgICAgIGRhdGEud3JpdGVVSW50MzJMRShDb25zdGFudHMuTE9DU0lHLCAwKTtcbiAgICAgICAgICAgIC8vIHZlcnNpb24gbmVlZGVkIHRvIGV4dHJhY3RcbiAgICAgICAgICAgIGRhdGEud3JpdGVVSW50MTZMRShfdmVyc2lvbiwgQ29uc3RhbnRzLkxPQ1ZFUik7XG4gICAgICAgICAgICAvLyBnZW5lcmFsIHB1cnBvc2UgYml0IGZsYWdcbiAgICAgICAgICAgIGRhdGEud3JpdGVVSW50MTZMRShfZmxhZ3MsIENvbnN0YW50cy5MT0NGTEcpO1xuICAgICAgICAgICAgLy8gY29tcHJlc3Npb24gbWV0aG9kXG4gICAgICAgICAgICBkYXRhLndyaXRlVUludDE2TEUoX21ldGhvZCwgQ29uc3RhbnRzLkxPQ0hPVyk7XG4gICAgICAgICAgICAvLyBtb2RpZmljYXRpb24gdGltZSAoMiBieXRlcyB0aW1lLCAyIGJ5dGVzIGRhdGUpXG4gICAgICAgICAgICBkYXRhLndyaXRlVUludDMyTEUoX3RpbWUsIENvbnN0YW50cy5MT0NUSU0pO1xuICAgICAgICAgICAgLy8gdW5jb21wcmVzc2VkIGZpbGUgY3JjLTMyIHZhbHVlXG4gICAgICAgICAgICBkYXRhLndyaXRlVUludDMyTEUoX2NyYywgQ29uc3RhbnRzLkxPQ0NSQyk7XG4gICAgICAgICAgICAvLyBjb21wcmVzc2VkIHNpemVcbiAgICAgICAgICAgIGRhdGEud3JpdGVVSW50MzJMRShfY29tcHJlc3NlZFNpemUsIENvbnN0YW50cy5MT0NTSVopO1xuICAgICAgICAgICAgLy8gdW5jb21wcmVzc2VkIHNpemVcbiAgICAgICAgICAgIGRhdGEud3JpdGVVSW50MzJMRShfc2l6ZSwgQ29uc3RhbnRzLkxPQ0xFTik7XG4gICAgICAgICAgICAvLyBmaWxlbmFtZSBsZW5ndGhcbiAgICAgICAgICAgIGRhdGEud3JpdGVVSW50MTZMRShfZm5hbWVMZW4sIENvbnN0YW50cy5MT0NOQU0pO1xuICAgICAgICAgICAgLy8gZXh0cmEgZmllbGQgbGVuZ3RoXG4gICAgICAgICAgICBkYXRhLndyaXRlVUludDE2TEUoX2xvY2FsSGVhZGVyLmV4dHJhTGVuLCBDb25zdGFudHMuTE9DRVhUKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNlbnRyYWxIZWFkZXJUb0JpbmFyeTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ0VOIGhlYWRlciBzaXplICg0NiBieXRlcylcbiAgICAgICAgICAgIHZhciBkYXRhID0gQnVmZmVyLmFsbG9jKENvbnN0YW50cy5DRU5IRFIgKyBfZm5hbWVMZW4gKyBfZXh0cmFMZW4gKyBfY29tTGVuKTtcbiAgICAgICAgICAgIC8vIFwiUEtcXDAwMVxcMDAyXCJcbiAgICAgICAgICAgIGRhdGEud3JpdGVVSW50MzJMRShDb25zdGFudHMuQ0VOU0lHLCAwKTtcbiAgICAgICAgICAgIC8vIHZlcnNpb24gbWFkZSBieVxuICAgICAgICAgICAgZGF0YS53cml0ZVVJbnQxNkxFKF92ZXJNYWRlLCBDb25zdGFudHMuQ0VOVkVNKTtcbiAgICAgICAgICAgIC8vIHZlcnNpb24gbmVlZGVkIHRvIGV4dHJhY3RcbiAgICAgICAgICAgIGRhdGEud3JpdGVVSW50MTZMRShfdmVyc2lvbiwgQ29uc3RhbnRzLkNFTlZFUik7XG4gICAgICAgICAgICAvLyBlbmNyeXB0LCBkZWNyeXB0IGZsYWdzXG4gICAgICAgICAgICBkYXRhLndyaXRlVUludDE2TEUoX2ZsYWdzLCBDb25zdGFudHMuQ0VORkxHKTtcbiAgICAgICAgICAgIC8vIGNvbXByZXNzaW9uIG1ldGhvZFxuICAgICAgICAgICAgZGF0YS53cml0ZVVJbnQxNkxFKF9tZXRob2QsIENvbnN0YW50cy5DRU5IT1cpO1xuICAgICAgICAgICAgLy8gbW9kaWZpY2F0aW9uIHRpbWUgKDIgYnl0ZXMgdGltZSwgMiBieXRlcyBkYXRlKVxuICAgICAgICAgICAgZGF0YS53cml0ZVVJbnQzMkxFKF90aW1lLCBDb25zdGFudHMuQ0VOVElNKTtcbiAgICAgICAgICAgIC8vIHVuY29tcHJlc3NlZCBmaWxlIGNyYy0zMiB2YWx1ZVxuICAgICAgICAgICAgZGF0YS53cml0ZVVJbnQzMkxFKF9jcmMsIENvbnN0YW50cy5DRU5DUkMpO1xuICAgICAgICAgICAgLy8gY29tcHJlc3NlZCBzaXplXG4gICAgICAgICAgICBkYXRhLndyaXRlVUludDMyTEUoX2NvbXByZXNzZWRTaXplLCBDb25zdGFudHMuQ0VOU0laKTtcbiAgICAgICAgICAgIC8vIHVuY29tcHJlc3NlZCBzaXplXG4gICAgICAgICAgICBkYXRhLndyaXRlVUludDMyTEUoX3NpemUsIENvbnN0YW50cy5DRU5MRU4pO1xuICAgICAgICAgICAgLy8gZmlsZW5hbWUgbGVuZ3RoXG4gICAgICAgICAgICBkYXRhLndyaXRlVUludDE2TEUoX2ZuYW1lTGVuLCBDb25zdGFudHMuQ0VOTkFNKTtcbiAgICAgICAgICAgIC8vIGV4dHJhIGZpZWxkIGxlbmd0aFxuICAgICAgICAgICAgZGF0YS53cml0ZVVJbnQxNkxFKF9leHRyYUxlbiwgQ29uc3RhbnRzLkNFTkVYVCk7XG4gICAgICAgICAgICAvLyBmaWxlIGNvbW1lbnQgbGVuZ3RoXG4gICAgICAgICAgICBkYXRhLndyaXRlVUludDE2TEUoX2NvbUxlbiwgQ29uc3RhbnRzLkNFTkNPTSk7XG4gICAgICAgICAgICAvLyB2b2x1bWUgbnVtYmVyIHN0YXJ0XG4gICAgICAgICAgICBkYXRhLndyaXRlVUludDE2TEUoX2Rpc2tTdGFydCwgQ29uc3RhbnRzLkNFTkRTSyk7XG4gICAgICAgICAgICAvLyBpbnRlcm5hbCBmaWxlIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgIGRhdGEud3JpdGVVSW50MTZMRShfaW5hdHRyLCBDb25zdGFudHMuQ0VOQVRUKTtcbiAgICAgICAgICAgIC8vIGV4dGVybmFsIGZpbGUgYXR0cmlidXRlc1xuICAgICAgICAgICAgZGF0YS53cml0ZVVJbnQzMkxFKF9hdHRyLCBDb25zdGFudHMuQ0VOQVRYKTtcbiAgICAgICAgICAgIC8vIExPQyBoZWFkZXIgb2Zmc2V0XG4gICAgICAgICAgICBkYXRhLndyaXRlVUludDMyTEUoX29mZnNldCwgQ29uc3RhbnRzLkNFTk9GRik7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSxcblxuICAgICAgICB0b0pTT046IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGJ5dGVzID0gZnVuY3Rpb24gKG5yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5yICsgXCIgYnl0ZXNcIjtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbWFkZTogX3Zlck1hZGUsXG4gICAgICAgICAgICAgICAgdmVyc2lvbjogX3ZlcnNpb24sXG4gICAgICAgICAgICAgICAgZmxhZ3M6IF9mbGFncyxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFV0aWxzLm1ldGhvZFRvU3RyaW5nKF9tZXRob2QpLFxuICAgICAgICAgICAgICAgIHRpbWU6IHRoaXMudGltZSxcbiAgICAgICAgICAgICAgICBjcmM6IFwiMHhcIiArIF9jcmMudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgY29tcHJlc3NlZFNpemU6IGJ5dGVzKF9jb21wcmVzc2VkU2l6ZSksXG4gICAgICAgICAgICAgICAgc2l6ZTogYnl0ZXMoX3NpemUpLFxuICAgICAgICAgICAgICAgIGZpbGVOYW1lTGVuZ3RoOiBieXRlcyhfZm5hbWVMZW4pLFxuICAgICAgICAgICAgICAgIGV4dHJhTGVuZ3RoOiBieXRlcyhfZXh0cmFMZW4pLFxuICAgICAgICAgICAgICAgIGNvbW1lbnRMZW5ndGg6IGJ5dGVzKF9jb21MZW4pLFxuICAgICAgICAgICAgICAgIGRpc2tOdW1TdGFydDogX2Rpc2tTdGFydCxcbiAgICAgICAgICAgICAgICBpbkF0dHI6IF9pbmF0dHIsXG4gICAgICAgICAgICAgICAgYXR0cjogX2F0dHIsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBfb2Zmc2V0LFxuICAgICAgICAgICAgICAgIGNlbnRyYWxIZWFkZXJTaXplOiBieXRlcyhDb25zdGFudHMuQ0VOSERSICsgX2ZuYW1lTGVuICsgX2V4dHJhTGVuICsgX2NvbUxlbilcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnRvSlNPTigpLCBudWxsLCBcIlxcdFwiKTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuIiwgInZhciBVdGlscyA9IHJlcXVpcmUoXCIuLi91dGlsXCIpLFxuICAgIENvbnN0YW50cyA9IFV0aWxzLkNvbnN0YW50cztcblxuLyogVGhlIGVudHJpZXMgaW4gdGhlIGVuZCBvZiBjZW50cmFsIGRpcmVjdG9yeSAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92b2x1bWVFbnRyaWVzID0gMCxcbiAgICAgICAgX3RvdGFsRW50cmllcyA9IDAsXG4gICAgICAgIF9zaXplID0gMCxcbiAgICAgICAgX29mZnNldCA9IDAsXG4gICAgICAgIF9jb21tZW50TGVuZ3RoID0gMDtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldCBkaXNrRW50cmllcygpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm9sdW1lRW50cmllcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IGRpc2tFbnRyaWVzKC8qTnVtYmVyKi8gdmFsKSB7XG4gICAgICAgICAgICBfdm9sdW1lRW50cmllcyA9IF90b3RhbEVudHJpZXMgPSB2YWw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IHRvdGFsRW50cmllcygpIHtcbiAgICAgICAgICAgIHJldHVybiBfdG90YWxFbnRyaWVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgdG90YWxFbnRyaWVzKC8qTnVtYmVyKi8gdmFsKSB7XG4gICAgICAgICAgICBfdG90YWxFbnRyaWVzID0gX3ZvbHVtZUVudHJpZXMgPSB2YWw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IHNpemUoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3NpemU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBzaXplKC8qTnVtYmVyKi8gdmFsKSB7XG4gICAgICAgICAgICBfc2l6ZSA9IHZhbDtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgb2Zmc2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIF9vZmZzZXQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBvZmZzZXQoLypOdW1iZXIqLyB2YWwpIHtcbiAgICAgICAgICAgIF9vZmZzZXQgPSB2YWw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGNvbW1lbnRMZW5ndGgoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NvbW1lbnRMZW5ndGg7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBjb21tZW50TGVuZ3RoKC8qTnVtYmVyKi8gdmFsKSB7XG4gICAgICAgICAgICBfY29tbWVudExlbmd0aCA9IHZhbDtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgbWFpbkhlYWRlclNpemUoKSB7XG4gICAgICAgICAgICByZXR1cm4gQ29uc3RhbnRzLkVOREhEUiArIF9jb21tZW50TGVuZ3RoO1xuICAgICAgICB9LFxuXG4gICAgICAgIGxvYWRGcm9tQmluYXJ5OiBmdW5jdGlvbiAoLypCdWZmZXIqLyBkYXRhKSB7XG4gICAgICAgICAgICAvLyBkYXRhIHNob3VsZCBiZSAyMiBieXRlcyBhbmQgc3RhcnQgd2l0aCBcIlBLIDA1IDA2XCJcbiAgICAgICAgICAgIC8vIG9yIGJlIDU2KyBieXRlcyBhbmQgc3RhcnQgd2l0aCBcIlBLIDA2IDA2XCIgZm9yIFppcDY0XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKGRhdGEubGVuZ3RoICE9PSBDb25zdGFudHMuRU5ESERSIHx8IGRhdGEucmVhZFVJbnQzMkxFKDApICE9PSBDb25zdGFudHMuRU5EU0lHKSAmJlxuICAgICAgICAgICAgICAgIChkYXRhLmxlbmd0aCA8IENvbnN0YW50cy5aSVA2NEhEUiB8fCBkYXRhLnJlYWRVSW50MzJMRSgwKSAhPT0gQ29uc3RhbnRzLlpJUDY0U0lHKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVXRpbHMuRXJyb3JzLklOVkFMSURfRU5EKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkYXRhLnJlYWRVSW50MzJMRSgwKSA9PT0gQ29uc3RhbnRzLkVORFNJRykge1xuICAgICAgICAgICAgICAgIC8vIG51bWJlciBvZiBlbnRyaWVzIG9uIHRoaXMgdm9sdW1lXG4gICAgICAgICAgICAgICAgX3ZvbHVtZUVudHJpZXMgPSBkYXRhLnJlYWRVSW50MTZMRShDb25zdGFudHMuRU5EU1VCKTtcbiAgICAgICAgICAgICAgICAvLyB0b3RhbCBudW1iZXIgb2YgZW50cmllc1xuICAgICAgICAgICAgICAgIF90b3RhbEVudHJpZXMgPSBkYXRhLnJlYWRVSW50MTZMRShDb25zdGFudHMuRU5EVE9UKTtcbiAgICAgICAgICAgICAgICAvLyBjZW50cmFsIGRpcmVjdG9yeSBzaXplIGluIGJ5dGVzXG4gICAgICAgICAgICAgICAgX3NpemUgPSBkYXRhLnJlYWRVSW50MzJMRShDb25zdGFudHMuRU5EU0laKTtcbiAgICAgICAgICAgICAgICAvLyBvZmZzZXQgb2YgZmlyc3QgQ0VOIGhlYWRlclxuICAgICAgICAgICAgICAgIF9vZmZzZXQgPSBkYXRhLnJlYWRVSW50MzJMRShDb25zdGFudHMuRU5ET0ZGKTtcbiAgICAgICAgICAgICAgICAvLyB6aXAgZmlsZSBjb21tZW50IGxlbmd0aFxuICAgICAgICAgICAgICAgIF9jb21tZW50TGVuZ3RoID0gZGF0YS5yZWFkVUludDE2TEUoQ29uc3RhbnRzLkVORENPTSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIG51bWJlciBvZiBlbnRyaWVzIG9uIHRoaXMgdm9sdW1lXG4gICAgICAgICAgICAgICAgX3ZvbHVtZUVudHJpZXMgPSBVdGlscy5yZWFkQmlnVUludDY0TEUoZGF0YSwgQ29uc3RhbnRzLlpJUDY0U1VCKTtcbiAgICAgICAgICAgICAgICAvLyB0b3RhbCBudW1iZXIgb2YgZW50cmllc1xuICAgICAgICAgICAgICAgIF90b3RhbEVudHJpZXMgPSBVdGlscy5yZWFkQmlnVUludDY0TEUoZGF0YSwgQ29uc3RhbnRzLlpJUDY0VE9UKTtcbiAgICAgICAgICAgICAgICAvLyBjZW50cmFsIGRpcmVjdG9yeSBzaXplIGluIGJ5dGVzXG4gICAgICAgICAgICAgICAgX3NpemUgPSBVdGlscy5yZWFkQmlnVUludDY0TEUoZGF0YSwgQ29uc3RhbnRzLlpJUDY0U0laRSk7XG4gICAgICAgICAgICAgICAgLy8gb2Zmc2V0IG9mIGZpcnN0IENFTiBoZWFkZXJcbiAgICAgICAgICAgICAgICBfb2Zmc2V0ID0gVXRpbHMucmVhZEJpZ1VJbnQ2NExFKGRhdGEsIENvbnN0YW50cy5aSVA2NE9GRik7XG5cbiAgICAgICAgICAgICAgICBfY29tbWVudExlbmd0aCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9CaW5hcnk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBiID0gQnVmZmVyLmFsbG9jKENvbnN0YW50cy5FTkRIRFIgKyBfY29tbWVudExlbmd0aCk7XG4gICAgICAgICAgICAvLyBcIlBLIDA1IDA2XCIgc2lnbmF0dXJlXG4gICAgICAgICAgICBiLndyaXRlVUludDMyTEUoQ29uc3RhbnRzLkVORFNJRywgMCk7XG4gICAgICAgICAgICBiLndyaXRlVUludDMyTEUoMCwgNCk7XG4gICAgICAgICAgICAvLyBudW1iZXIgb2YgZW50cmllcyBvbiB0aGlzIHZvbHVtZVxuICAgICAgICAgICAgYi53cml0ZVVJbnQxNkxFKF92b2x1bWVFbnRyaWVzLCBDb25zdGFudHMuRU5EU1VCKTtcbiAgICAgICAgICAgIC8vIHRvdGFsIG51bWJlciBvZiBlbnRyaWVzXG4gICAgICAgICAgICBiLndyaXRlVUludDE2TEUoX3RvdGFsRW50cmllcywgQ29uc3RhbnRzLkVORFRPVCk7XG4gICAgICAgICAgICAvLyBjZW50cmFsIGRpcmVjdG9yeSBzaXplIGluIGJ5dGVzXG4gICAgICAgICAgICBiLndyaXRlVUludDMyTEUoX3NpemUsIENvbnN0YW50cy5FTkRTSVopO1xuICAgICAgICAgICAgLy8gb2Zmc2V0IG9mIGZpcnN0IENFTiBoZWFkZXJcbiAgICAgICAgICAgIGIud3JpdGVVSW50MzJMRShfb2Zmc2V0LCBDb25zdGFudHMuRU5ET0ZGKTtcbiAgICAgICAgICAgIC8vIHppcCBmaWxlIGNvbW1lbnQgbGVuZ3RoXG4gICAgICAgICAgICBiLndyaXRlVUludDE2TEUoX2NvbW1lbnRMZW5ndGgsIENvbnN0YW50cy5FTkRDT00pO1xuICAgICAgICAgICAgLy8gZmlsbCBjb21tZW50IG1lbW9yeSB3aXRoIHNwYWNlcyBzbyBubyBnYXJiYWdlIGlzIGxlZnQgdGhlcmVcbiAgICAgICAgICAgIGIuZmlsbChcIiBcIiwgQ29uc3RhbnRzLkVOREhEUik7XG5cbiAgICAgICAgICAgIHJldHVybiBiO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRvSlNPTjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gY3JlYXRlcyAweDAwMDAgc3R5bGUgb3V0cHV0XG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSBmdW5jdGlvbiAobnIsIGxlbikge1xuICAgICAgICAgICAgICAgIGxldCBvZmZzID0gbnIudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgd2hpbGUgKG9mZnMubGVuZ3RoIDwgbGVuKSBvZmZzID0gXCIwXCIgKyBvZmZzO1xuICAgICAgICAgICAgICAgIHJldHVybiBcIjB4XCIgKyBvZmZzO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkaXNrRW50cmllczogX3ZvbHVtZUVudHJpZXMsXG4gICAgICAgICAgICAgICAgdG90YWxFbnRyaWVzOiBfdG90YWxFbnRyaWVzLFxuICAgICAgICAgICAgICAgIHNpemU6IF9zaXplICsgXCIgYnl0ZXNcIixcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IG9mZnNldChfb2Zmc2V0LCA0KSxcbiAgICAgICAgICAgICAgICBjb21tZW50TGVuZ3RoOiBfY29tbWVudExlbmd0aFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMudG9KU09OKCksIG51bGwsIFwiXFx0XCIpO1xuICAgICAgICB9XG4gICAgfTtcbn07XG4vLyBNaXNzcGVsbGVkXG4iLCAiZXhwb3J0cy5FbnRyeUhlYWRlciA9IHJlcXVpcmUoXCIuL2VudHJ5SGVhZGVyXCIpO1xuZXhwb3J0cy5NYWluSGVhZGVyID0gcmVxdWlyZShcIi4vbWFpbkhlYWRlclwiKTtcbiIsICJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgvKkJ1ZmZlciovIGluYnVmKSB7XG4gICAgdmFyIHpsaWIgPSByZXF1aXJlKFwiemxpYlwiKTtcblxuICAgIHZhciBvcHRzID0geyBjaHVua1NpemU6IChwYXJzZUludChpbmJ1Zi5sZW5ndGggLyAxMDI0KSArIDEpICogMTAyNCB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVmbGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHpsaWIuZGVmbGF0ZVJhd1N5bmMoaW5idWYsIG9wdHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRlZmxhdGVBc3luYzogZnVuY3Rpb24gKC8qRnVuY3Rpb24qLyBjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIHRtcCA9IHpsaWIuY3JlYXRlRGVmbGF0ZVJhdyhvcHRzKSxcbiAgICAgICAgICAgICAgICBwYXJ0cyA9IFtdLFxuICAgICAgICAgICAgICAgIHRvdGFsID0gMDtcbiAgICAgICAgICAgIHRtcC5vbihcImRhdGFcIiwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgICAgIHRvdGFsICs9IGRhdGEubGVuZ3RoO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0bXAub24oXCJlbmRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBidWYgPSBCdWZmZXIuYWxsb2ModG90YWwpLFxuICAgICAgICAgICAgICAgICAgICB3cml0dGVuID0gMDtcbiAgICAgICAgICAgICAgICBidWYuZmlsbCgwKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0ID0gcGFydHNbaV07XG4gICAgICAgICAgICAgICAgICAgIHBhcnQuY29weShidWYsIHdyaXR0ZW4pO1xuICAgICAgICAgICAgICAgICAgICB3cml0dGVuICs9IHBhcnQubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhidWYpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0bXAuZW5kKGluYnVmKTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuIiwgImNvbnN0IHZlcnNpb24gPSArKHByb2Nlc3MudmVyc2lvbnMgPyBwcm9jZXNzLnZlcnNpb25zLm5vZGUgOiBcIlwiKS5zcGxpdChcIi5cIilbMF0gfHwgMDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoLypCdWZmZXIqLyBpbmJ1ZiwgLypudW1iZXIqLyBleHBlY3RlZExlbmd0aCkge1xuICAgIHZhciB6bGliID0gcmVxdWlyZShcInpsaWJcIik7XG4gICAgY29uc3Qgb3B0aW9uID0gdmVyc2lvbiA+PSAxNSAmJiBleHBlY3RlZExlbmd0aCA+IDAgPyB7IG1heE91dHB1dExlbmd0aDogZXhwZWN0ZWRMZW5ndGggfSA6IHt9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5mbGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHpsaWIuaW5mbGF0ZVJhd1N5bmMoaW5idWYsIG9wdGlvbik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5mbGF0ZUFzeW5jOiBmdW5jdGlvbiAoLypGdW5jdGlvbiovIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgdG1wID0gemxpYi5jcmVhdGVJbmZsYXRlUmF3KG9wdGlvbiksXG4gICAgICAgICAgICAgICAgcGFydHMgPSBbXSxcbiAgICAgICAgICAgICAgICB0b3RhbCA9IDA7XG4gICAgICAgICAgICB0bXAub24oXCJkYXRhXCIsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgcGFydHMucHVzaChkYXRhKTtcbiAgICAgICAgICAgICAgICB0b3RhbCArPSBkYXRhLmxlbmd0aDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdG1wLm9uKFwiZW5kXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYnVmID0gQnVmZmVyLmFsbG9jKHRvdGFsKSxcbiAgICAgICAgICAgICAgICAgICAgd3JpdHRlbiA9IDA7XG4gICAgICAgICAgICAgICAgYnVmLmZpbGwoMCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFydCA9IHBhcnRzW2ldO1xuICAgICAgICAgICAgICAgICAgICBwYXJ0LmNvcHkoYnVmLCB3cml0dGVuKTtcbiAgICAgICAgICAgICAgICAgICAgd3JpdHRlbiArPSBwYXJ0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soYnVmKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdG1wLmVuZChpbmJ1Zik7XG4gICAgICAgIH1cbiAgICB9O1xufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuLy8gbm9kZSBjcnlwdCwgd2UgdXNlIGl0IGZvciBnZW5lcmF0ZSBzYWx0XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm9kZS9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zXG5jb25zdCB7IHJhbmRvbUZpbGxTeW5jIH0gPSByZXF1aXJlKFwiY3J5cHRvXCIpO1xuY29uc3QgRXJyb3JzID0gcmVxdWlyZShcIi4uL3V0aWwvZXJyb3JzXCIpO1xuXG4vLyBnZW5lcmF0ZSBDUkMzMiBsb29rdXAgdGFibGVcbmNvbnN0IGNyY3RhYmxlID0gbmV3IFVpbnQzMkFycmF5KDI1NikubWFwKCh0LCBjcmMpID0+IHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDg7IGorKykge1xuICAgICAgICBpZiAoMCAhPT0gKGNyYyAmIDEpKSB7XG4gICAgICAgICAgICBjcmMgPSAoY3JjID4+PiAxKSBeIDB4ZWRiODgzMjA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjcmMgPj4+PSAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjcmMgPj4+IDA7XG59KTtcblxuLy8gQy1zdHlsZSB1SW50MzIgTXVsdGlwbHkgKGRpc2NhcmRzIGhpZ2hlciBiaXRzLCB3aGVuIEpTIG11bHRpcGx5IGRpc2NhcmRzIGxvd2VyIGJpdHMpXG5jb25zdCB1TXVsID0gKGEsIGIpID0+IE1hdGguaW11bChhLCBiKSA+Pj4gMDtcblxuLy8gY3JjMzIgYnl0ZSBzaW5nbGUgdXBkYXRlIChhY3R1YWxseSBzYW1lIGZ1bmN0aW9uIGlzIHBhcnQgb2YgdXRpbHMuY3JjMzIgZnVuY3Rpb24gOikgKVxuY29uc3QgY3JjMzJ1cGRhdGUgPSAocENyYzMyLCBidmFsKSA9PiB7XG4gICAgcmV0dXJuIGNyY3RhYmxlWyhwQ3JjMzIgXiBidmFsKSAmIDB4ZmZdIF4gKHBDcmMzMiA+Pj4gOCk7XG59O1xuXG4vLyBmdW5jdGlvbiBmb3IgZ2VuZXJhdGluZyBzYWx0IGZvciBlbmNyeXRpb24gaGVhZGVyXG5jb25zdCBnZW5TYWx0ID0gKCkgPT4ge1xuICAgIGlmIChcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiByYW5kb21GaWxsU3luYykge1xuICAgICAgICByZXR1cm4gcmFuZG9tRmlsbFN5bmMoQnVmZmVyLmFsbG9jKDEyKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZmFsbGJhY2sgaWYgZnVuY3Rpb24gaXMgbm90IGRlZmluZWRcbiAgICAgICAgcmV0dXJuIGdlblNhbHQubm9kZSgpO1xuICAgIH1cbn07XG5cbi8vIHNhbHQgZ2VuZXJhdGlvbiB3aXRoIG5vZGUgcmFuZG9tIGZ1bmN0aW9uIChtYWlubHkgYXMgZmFsbGJhY2spXG5nZW5TYWx0Lm5vZGUgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2FsdCA9IEJ1ZmZlci5hbGxvYygxMik7XG4gICAgY29uc3QgbGVuID0gc2FsdC5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykgc2FsdFtpXSA9IChNYXRoLnJhbmRvbSgpICogMjU2KSAmIDB4ZmY7XG4gICAgcmV0dXJuIHNhbHQ7XG59O1xuXG4vLyBnZW5lcmFsIGNvbmZpZ1xuY29uc3QgY29uZmlnID0ge1xuICAgIGdlblNhbHRcbn07XG5cbi8vIENsYXNzIEluaXRrZXlzIGhhbmRsZXMgc2FtZSBiYXNpYyBvcHMgd2l0aCBrZXlzXG5mdW5jdGlvbiBJbml0a2V5cyhwdykge1xuICAgIGNvbnN0IHBhc3MgPSBCdWZmZXIuaXNCdWZmZXIocHcpID8gcHcgOiBCdWZmZXIuZnJvbShwdyk7XG4gICAgdGhpcy5rZXlzID0gbmV3IFVpbnQzMkFycmF5KFsweDEyMzQ1Njc4LCAweDIzNDU2Nzg5LCAweDM0NTY3ODkwXSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXNzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMudXBkYXRlS2V5cyhwYXNzW2ldKTtcbiAgICB9XG59XG5cbkluaXRrZXlzLnByb3RvdHlwZS51cGRhdGVLZXlzID0gZnVuY3Rpb24gKGJ5dGVWYWx1ZSkge1xuICAgIGNvbnN0IGtleXMgPSB0aGlzLmtleXM7XG4gICAga2V5c1swXSA9IGNyYzMydXBkYXRlKGtleXNbMF0sIGJ5dGVWYWx1ZSk7XG4gICAga2V5c1sxXSArPSBrZXlzWzBdICYgMHhmZjtcbiAgICBrZXlzWzFdID0gdU11bChrZXlzWzFdLCAxMzQ3NzU4MTMpICsgMTtcbiAgICBrZXlzWzJdID0gY3JjMzJ1cGRhdGUoa2V5c1syXSwga2V5c1sxXSA+Pj4gMjQpO1xuICAgIHJldHVybiBieXRlVmFsdWU7XG59O1xuXG5Jbml0a2V5cy5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBrID0gKHRoaXMua2V5c1syXSB8IDIpID4+PiAwOyAvLyBrZXlcbiAgICByZXR1cm4gKHVNdWwoaywgayBeIDEpID4+IDgpICYgMHhmZjsgLy8gZGVjb2RlXG59O1xuXG5mdW5jdGlvbiBtYWtlX2RlY3J5cHRlcigvKkJ1ZmZlciovIHB3ZCkge1xuICAgIC8vIDEuIFN0YWdlIGluaXRpYWxpemUga2V5XG4gICAgY29uc3Qga2V5cyA9IG5ldyBJbml0a2V5cyhwd2QpO1xuXG4gICAgLy8gcmV0dXJuIGRlY3J5cHRlciBmdW5jdGlvblxuICAgIHJldHVybiBmdW5jdGlvbiAoLypCdWZmZXIqLyBkYXRhKSB7XG4gICAgICAgIC8vIHJlc3VsdCAtIHdlIGNyZWF0ZSBuZXcgQnVmZmVyIGZvciByZXN1bHRzXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IEJ1ZmZlci5hbGxvYyhkYXRhLmxlbmd0aCk7XG4gICAgICAgIGxldCBwb3MgPSAwO1xuICAgICAgICAvLyBwcm9jZXNzIGlucHV0IGRhdGFcbiAgICAgICAgZm9yIChsZXQgYyBvZiBkYXRhKSB7XG4gICAgICAgICAgICAvL2MgXj0ga2V5cy5uZXh0KCk7XG4gICAgICAgICAgICAvL3Jlc3VsdFtwb3MrK10gPSBjOyAvLyBkZWNvZGUgJiBTYXZlIFZhbHVlXG4gICAgICAgICAgICByZXN1bHRbcG9zKytdID0ga2V5cy51cGRhdGVLZXlzKGMgXiBrZXlzLm5leHQoKSk7IC8vIHVwZGF0ZSBrZXlzIHdpdGggZGVjb2RlZCBieXRlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBtYWtlX2VuY3J5cHRlcigvKkJ1ZmZlciovIHB3ZCkge1xuICAgIC8vIDEuIFN0YWdlIGluaXRpYWxpemUga2V5XG4gICAgY29uc3Qga2V5cyA9IG5ldyBJbml0a2V5cyhwd2QpO1xuXG4gICAgLy8gcmV0dXJuIGVuY3J5cHRpbmcgZnVuY3Rpb24sIHJlc3VsdCBhbmQgcG9zIGlzIGhlcmUgc28gd2UgZG9udCBoYXZlIHRvIG1lcmdlIGJ1ZmZlcnMgbGF0ZXJcbiAgICByZXR1cm4gZnVuY3Rpb24gKC8qQnVmZmVyKi8gZGF0YSwgLypCdWZmZXIqLyByZXN1bHQsIC8qIE51bWJlciAqLyBwb3MgPSAwKSB7XG4gICAgICAgIC8vIHJlc3VsdCAtIHdlIGNyZWF0ZSBuZXcgQnVmZmVyIGZvciByZXN1bHRzXG4gICAgICAgIGlmICghcmVzdWx0KSByZXN1bHQgPSBCdWZmZXIuYWxsb2MoZGF0YS5sZW5ndGgpO1xuICAgICAgICAvLyBwcm9jZXNzIGlucHV0IGRhdGFcbiAgICAgICAgZm9yIChsZXQgYyBvZiBkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBrID0ga2V5cy5uZXh0KCk7IC8vIHNhdmUga2V5IGJ5dGVcbiAgICAgICAgICAgIHJlc3VsdFtwb3MrK10gPSBjIF4gazsgLy8gc2F2ZSB2YWxcbiAgICAgICAgICAgIGtleXMudXBkYXRlS2V5cyhjKTsgLy8gdXBkYXRlIGtleXMgd2l0aCBkZWNvZGVkIGJ5dGVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGRlY3J5cHQoLypCdWZmZXIqLyBkYXRhLCAvKk9iamVjdCovIGhlYWRlciwgLypTdHJpbmcsIEJ1ZmZlciovIHB3ZCkge1xuICAgIGlmICghZGF0YSB8fCAhQnVmZmVyLmlzQnVmZmVyKGRhdGEpIHx8IGRhdGEubGVuZ3RoIDwgMTIpIHtcbiAgICAgICAgcmV0dXJuIEJ1ZmZlci5hbGxvYygwKTtcbiAgICB9XG5cbiAgICAvLyAxLiBXZSBJbml0aWFsaXplIGFuZCBnZW5lcmF0ZSBkZWNyeXB0aW5nIGZ1bmN0aW9uXG4gICAgY29uc3QgZGVjcnlwdGVyID0gbWFrZV9kZWNyeXB0ZXIocHdkKTtcblxuICAgIC8vIDIuIGRlY3J5cHQgc2FsdCB3aGF0IGlzIGFsd2F5cyAxMiBieXRlcyBhbmQgaXMgYSBwYXJ0IG9mIGZpbGUgY29udGVudFxuICAgIGNvbnN0IHNhbHQgPSBkZWNyeXB0ZXIoZGF0YS5zbGljZSgwLCAxMikpO1xuXG4gICAgLy8gaWYgYml0IDMgKDB4MDgpIG9mIHRoZSBnZW5lcmFsLXB1cnBvc2UgZmxhZ3MgZmllbGQgaXMgc2V0LCBjaGVjayBzYWx0WzExXSB3aXRoIHRoZSBoaWdoIGJ5dGUgb2YgdGhlIGhlYWRlciB0aW1lXG4gICAgLy8gMiBieXRlIGRhdGEgYmxvY2sgKGFzIHBlciBJbmZvLVppcCBzcGVjKSwgb3RoZXJ3aXNlIGNoZWNrIHdpdGggdGhlIGhpZ2ggYnl0ZSBvZiB0aGUgaGVhZGVyIGVudHJ5XG4gICAgY29uc3QgdmVyaWZ5Qnl0ZSA9IChoZWFkZXIuZmxhZ3MgJiAweDgpID09PSAweDggPyBoZWFkZXIudGltZUhpZ2hCeXRlIDogaGVhZGVyLmNyYyA+Pj4gMjQ7XG5cbiAgICAvLzMuIGRvZXMgcGFzc3dvcmQgbWVldCBleHBlY3RhdGlvbnNcbiAgICBpZiAoc2FsdFsxMV0gIT09IHZlcmlmeUJ5dGUpIHtcbiAgICAgICAgdGhyb3cgRXJyb3JzLldST05HX1BBU1NXT1JEKCk7XG4gICAgfVxuXG4gICAgLy8gNC4gZGVjb2RlIGNvbnRlbnRcbiAgICByZXR1cm4gZGVjcnlwdGVyKGRhdGEuc2xpY2UoMTIpKTtcbn1cblxuLy8gbGV0cyBhZGQgd2F5IHRvIHBvcHVsYXRlIHNhbHQsIE5PVCBSRUNPTU1FTkRFRCBmb3IgcHJvZHVjdGlvbiBidXQgbWF5YmUgdXNlZnVsIGZvciB0ZXN0aW5nIGdlbmVyYWwgZnVuY3Rpb25hbGl0eVxuZnVuY3Rpb24gX3NhbHRlcihkYXRhKSB7XG4gICAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihkYXRhKSAmJiBkYXRhLmxlbmd0aCA+PSAxMikge1xuICAgICAgICAvLyBiZSBhd2FyZSAtIGN1cnJlbnRseSBzYWx0aW5nIGJ1ZmZlciBkYXRhIGlzIG1vZGlmaWVkXG4gICAgICAgIGNvbmZpZy5nZW5TYWx0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEuc2xpY2UoMCwgMTIpO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAoZGF0YSA9PT0gXCJub2RlXCIpIHtcbiAgICAgICAgLy8gdGVzdCBzYWx0IGdlbmVyYXRpb24gd2l0aCBub2RlIHJhbmRvbSBmdW5jdGlvblxuICAgICAgICBjb25maWcuZ2VuU2FsdCA9IGdlblNhbHQubm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpZiB2YWx1ZSBpcyBub3QgYWNjZXB0YWJsZSBjb25maWcgZ2V0cyByZXNldC5cbiAgICAgICAgY29uZmlnLmdlblNhbHQgPSBnZW5TYWx0O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZW5jcnlwdCgvKkJ1ZmZlciovIGRhdGEsIC8qT2JqZWN0Ki8gaGVhZGVyLCAvKlN0cmluZywgQnVmZmVyKi8gcHdkLCAvKkJvb2xlYW4qLyBvbGRsaWtlID0gZmFsc2UpIHtcbiAgICAvLyAxLiB0ZXN0IGRhdGEgaWYgZGF0YSBpcyBub3QgQnVmZmVyIHdlIG1ha2UgYnVmZmVyIGZyb20gaXRcbiAgICBpZiAoZGF0YSA9PSBudWxsKSBkYXRhID0gQnVmZmVyLmFsbG9jKDApO1xuICAgIC8vIGlmIGRhdGEgaXMgbm90IGJ1ZmZlciBiZSBtYWtlIGJ1ZmZlciBmcm9tIGl0XG4gICAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoZGF0YSkpIGRhdGEgPSBCdWZmZXIuZnJvbShkYXRhLnRvU3RyaW5nKCkpO1xuXG4gICAgLy8gMi4gV2UgSW5pdGlhbGl6ZSBhbmQgZ2VuZXJhdGUgZW5jcnlwdGluZyBmdW5jdGlvblxuICAgIGNvbnN0IGVuY3J5cHRlciA9IG1ha2VfZW5jcnlwdGVyKHB3ZCk7XG5cbiAgICAvLyAzLiBnZW5lcmF0ZSBzYWx0ICgxMi1ieXRlcyBvZiByYW5kb20gZGF0YSlcbiAgICBjb25zdCBzYWx0ID0gY29uZmlnLmdlblNhbHQoKTtcbiAgICBzYWx0WzExXSA9IChoZWFkZXIuY3JjID4+PiAyNCkgJiAweGZmO1xuXG4gICAgLy8gb2xkIGltcGxlbWVudGF0aW9ucyAoYmVmb3JlIFBLWmlwIDIuMDRnKSB1c2VkIHR3byBieXRlIGNoZWNrXG4gICAgaWYgKG9sZGxpa2UpIHNhbHRbMTBdID0gKGhlYWRlci5jcmMgPj4+IDE2KSAmIDB4ZmY7XG5cbiAgICAvLyA0LiBjcmVhdGUgb3V0cHV0XG4gICAgY29uc3QgcmVzdWx0ID0gQnVmZmVyLmFsbG9jKGRhdGEubGVuZ3RoICsgMTIpO1xuICAgIGVuY3J5cHRlcihzYWx0LCByZXN1bHQpO1xuXG4gICAgLy8gZmluYWxseSBlbmNvZGUgY29udGVudFxuICAgIHJldHVybiBlbmNyeXB0ZXIoZGF0YSwgcmVzdWx0LCAxMik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBkZWNyeXB0LCBlbmNyeXB0LCBfc2FsdGVyIH07XG4iLCAiZXhwb3J0cy5EZWZsYXRlciA9IHJlcXVpcmUoXCIuL2RlZmxhdGVyXCIpO1xuZXhwb3J0cy5JbmZsYXRlciA9IHJlcXVpcmUoXCIuL2luZmxhdGVyXCIpO1xuZXhwb3J0cy5aaXBDcnlwdG8gPSByZXF1aXJlKFwiLi96aXBjcnlwdG9cIik7XG4iLCAidmFyIFV0aWxzID0gcmVxdWlyZShcIi4vdXRpbFwiKSxcbiAgICBIZWFkZXJzID0gcmVxdWlyZShcIi4vaGVhZGVyc1wiKSxcbiAgICBDb25zdGFudHMgPSBVdGlscy5Db25zdGFudHMsXG4gICAgTWV0aG9kcyA9IHJlcXVpcmUoXCIuL21ldGhvZHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKC8qKiBvYmplY3QgKi8gb3B0aW9ucywgLypCdWZmZXIqLyBpbnB1dCkge1xuICAgIHZhciBfY2VudHJhbEhlYWRlciA9IG5ldyBIZWFkZXJzLkVudHJ5SGVhZGVyKCksXG4gICAgICAgIF9lbnRyeU5hbWUgPSBCdWZmZXIuYWxsb2MoMCksXG4gICAgICAgIF9jb21tZW50ID0gQnVmZmVyLmFsbG9jKDApLFxuICAgICAgICBfaXNEaXJlY3RvcnkgPSBmYWxzZSxcbiAgICAgICAgdW5jb21wcmVzc2VkRGF0YSA9IG51bGwsXG4gICAgICAgIF9leHRyYSA9IEJ1ZmZlci5hbGxvYygwKSxcbiAgICAgICAgX2V4dHJhbG9jYWwgPSBCdWZmZXIuYWxsb2MoMCksXG4gICAgICAgIF9lZnMgPSB0cnVlO1xuXG4gICAgLy8gYXNzaWduIG9wdGlvbnNcbiAgICBjb25zdCBvcHRzID0gb3B0aW9ucztcblxuICAgIGNvbnN0IGRlY29kZXIgPSB0eXBlb2Ygb3B0cy5kZWNvZGVyID09PSBcIm9iamVjdFwiID8gb3B0cy5kZWNvZGVyIDogVXRpbHMuZGVjb2RlcjtcbiAgICBfZWZzID0gZGVjb2Rlci5oYXNPd25Qcm9wZXJ0eShcImVmc1wiKSA/IGRlY29kZXIuZWZzIDogZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBnZXRDb21wcmVzc2VkRGF0YUZyb21aaXAoKSB7XG4gICAgICAgIC8vaWYgKCFpbnB1dCB8fCAhQnVmZmVyLmlzQnVmZmVyKGlucHV0KSkge1xuICAgICAgICBpZiAoIWlucHV0IHx8ICEoaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5KSkge1xuICAgICAgICAgICAgcmV0dXJuIEJ1ZmZlci5hbGxvYygwKTtcbiAgICAgICAgfVxuICAgICAgICBfZXh0cmFsb2NhbCA9IF9jZW50cmFsSGVhZGVyLmxvYWRMb2NhbEhlYWRlckZyb21CaW5hcnkoaW5wdXQpO1xuICAgICAgICByZXR1cm4gaW5wdXQuc2xpY2UoX2NlbnRyYWxIZWFkZXIucmVhbERhdGFPZmZzZXQsIF9jZW50cmFsSGVhZGVyLnJlYWxEYXRhT2Zmc2V0ICsgX2NlbnRyYWxIZWFkZXIuY29tcHJlc3NlZFNpemUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyYzMyT0soZGF0YSkge1xuICAgICAgICAvLyBpZiBiaXQgMyAoMHgwOCkgb2YgdGhlIGdlbmVyYWwtcHVycG9zZSBmbGFncyBmaWVsZCBpcyBzZXQsIHRoZW4gdGhlIENSQy0zMiBhbmQgZmlsZSBzaXplcyBhcmUgbm90IGtub3duIHdoZW4gdGhlIGxvY2FsIGhlYWRlciBpcyB3cml0dGVuXG4gICAgICAgIGlmICghX2NlbnRyYWxIZWFkZXIuZmxhZ3NfZGVzYykge1xuICAgICAgICAgICAgaWYgKFV0aWxzLmNyYzMyKGRhdGEpICE9PSBfY2VudHJhbEhlYWRlci5sb2NhbEhlYWRlci5jcmMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0ge307XG4gICAgICAgICAgICBjb25zdCBkYXRhRW5kT2Zmc2V0ID0gX2NlbnRyYWxIZWFkZXIucmVhbERhdGFPZmZzZXQgKyBfY2VudHJhbEhlYWRlci5jb21wcmVzc2VkU2l6ZTtcbiAgICAgICAgICAgIC8vIG5vIGRlc2NyaXB0b3IgYWZ0ZXIgY29tcHJlc3NlZCBkYXRhLCBpbnN0ZWFkIG5ldyBsb2NhbCBoZWFkZXJcbiAgICAgICAgICAgIGlmIChpbnB1dC5yZWFkVUludDMyTEUoZGF0YUVuZE9mZnNldCkgPT0gQ29uc3RhbnRzLkxPQ1NJRyB8fCBpbnB1dC5yZWFkVUludDMyTEUoZGF0YUVuZE9mZnNldCkgPT0gQ29uc3RhbnRzLkNFTlNJRykge1xuICAgICAgICAgICAgICAgIHRocm93IFV0aWxzLkVycm9ycy5ERVNDUklQVE9SX05PVF9FWElTVCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBnZXQgZGVjcmlwdG9yIGRhdGFcbiAgICAgICAgICAgIGlmIChpbnB1dC5yZWFkVUludDMyTEUoZGF0YUVuZE9mZnNldCkgPT0gQ29uc3RhbnRzLkVYVFNJRykge1xuICAgICAgICAgICAgICAgIC8vIGRlc2NyaXB0b3Igd2l0aCBzaWduYXR1cmVcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLmNyYyA9IGlucHV0LnJlYWRVSW50MzJMRShkYXRhRW5kT2Zmc2V0ICsgQ29uc3RhbnRzLkVYVENSQyk7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvci5jb21wcmVzc2VkU2l6ZSA9IGlucHV0LnJlYWRVSW50MzJMRShkYXRhRW5kT2Zmc2V0ICsgQ29uc3RhbnRzLkVYVFNJWik7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvci5zaXplID0gaW5wdXQucmVhZFVJbnQzMkxFKGRhdGFFbmRPZmZzZXQgKyBDb25zdGFudHMuRVhUTEVOKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5wdXQucmVhZFVJbnQxNkxFKGRhdGFFbmRPZmZzZXQgKyAxMikgPT09IDB4NGI1MCkge1xuICAgICAgICAgICAgICAgIC8vIGRlc2NyaXB0b3Igd2l0aG91dCBzaWduYXR1cmUgKHdlIGNoZWNrIGlzIG5ldyBoZWFkZXIgc3RhcnRpbmcgd2hlcmUgd2UgZXhwZWN0KVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IuY3JjID0gaW5wdXQucmVhZFVJbnQzMkxFKGRhdGFFbmRPZmZzZXQgKyBDb25zdGFudHMuRVhUQ1JDIC0gNCk7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvci5jb21wcmVzc2VkU2l6ZSA9IGlucHV0LnJlYWRVSW50MzJMRShkYXRhRW5kT2Zmc2V0ICsgQ29uc3RhbnRzLkVYVFNJWiAtIDQpO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0b3Iuc2l6ZSA9IGlucHV0LnJlYWRVSW50MzJMRShkYXRhRW5kT2Zmc2V0ICsgQ29uc3RhbnRzLkVYVExFTiAtIDQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBVdGlscy5FcnJvcnMuREVTQ1JJUFRPUl9VTktOT1dOKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGRhdGEgaW50ZWdyaXR5XG4gICAgICAgICAgICBpZiAoZGVzY3JpcHRvci5jb21wcmVzc2VkU2l6ZSAhPT0gX2NlbnRyYWxIZWFkZXIuY29tcHJlc3NlZFNpemUgfHwgZGVzY3JpcHRvci5zaXplICE9PSBfY2VudHJhbEhlYWRlci5zaXplIHx8IGRlc2NyaXB0b3IuY3JjICE9PSBfY2VudHJhbEhlYWRlci5jcmMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBVdGlscy5FcnJvcnMuREVTQ1JJUFRPUl9GQVVMVFkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChVdGlscy5jcmMzMihkYXRhKSAhPT0gZGVzY3JpcHRvci5jcmMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEBUT0RPOiB6aXA2NCBiaXQgZGVzY3JpcHRvciBmaWVsZHNcbiAgICAgICAgICAgIC8vIGlmIGJpdCAzIGlzIHNldCBhbmQgYW55IHZhbHVlIGluIGxvY2FsIGhlYWRlciBcInppcDY0IEV4dGVuZGVkIGluZm9ybWF0aW9uXCIgZXh0cmEgZmllbGQgYXJlIHNldCAwIChwbGFjZSBob2xkZXIpXG4gICAgICAgICAgICAvLyB0aGVuIDY0LWJpdCBkZXNjcmlwdG9yIGZvcm1hdCBpcyB1c2VkIGluc3RlYWQgb2YgMzItYml0XG4gICAgICAgICAgICAvLyBjZW50cmFsIGhlYWRlciAtIFwiemlwNjQgRXh0ZW5kZWQgaW5mb3JtYXRpb25cIiBleHRyYSBmaWVsZCBzaG91bGQgc3RvcmUgcmVhbCB2YWx1ZXMgYW5kIG5vdCBwbGFjZSBob2xkZXJzXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVjb21wcmVzcygvKkJvb2xlYW4qLyBhc3luYywgLypGdW5jdGlvbiovIGNhbGxiYWNrLCAvKlN0cmluZywgQnVmZmVyKi8gcGFzcykge1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBhc3luYyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcGFzcyA9IGFzeW5jO1xuICAgICAgICAgICAgYXN5bmMgPSB2b2lkIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9pc0RpcmVjdG9yeSkge1xuICAgICAgICAgICAgaWYgKGFzeW5jICYmIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soQnVmZmVyLmFsbG9jKDApLCBVdGlscy5FcnJvcnMuRElSRUNUT1JZX0NPTlRFTlRfRVJST1IoKSk7IC8vc2kgYWRkZWQgZXJyb3IuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gQnVmZmVyLmFsbG9jKDApO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNvbXByZXNzZWREYXRhID0gZ2V0Q29tcHJlc3NlZERhdGFGcm9tWmlwKCk7XG5cbiAgICAgICAgaWYgKGNvbXByZXNzZWREYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gRmlsZSBpcyBlbXB0eSwgbm90aGluZyB0byBkZWNvbXByZXNzLlxuICAgICAgICAgICAgaWYgKGFzeW5jICYmIGNhbGxiYWNrKSBjYWxsYmFjayhjb21wcmVzc2VkRGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gY29tcHJlc3NlZERhdGE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX2NlbnRyYWxIZWFkZXIuZW5jcnlwdGVkKSB7XG4gICAgICAgICAgICBpZiAoXCJzdHJpbmdcIiAhPT0gdHlwZW9mIHBhc3MgJiYgIUJ1ZmZlci5pc0J1ZmZlcihwYXNzKSkge1xuICAgICAgICAgICAgICAgIHRocm93IFV0aWxzLkVycm9ycy5JTlZBTElEX1BBU1NfUEFSQU0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbXByZXNzZWREYXRhID0gTWV0aG9kcy5aaXBDcnlwdG8uZGVjcnlwdChjb21wcmVzc2VkRGF0YSwgX2NlbnRyYWxIZWFkZXIsIHBhc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRhdGEgPSBCdWZmZXIuYWxsb2MoX2NlbnRyYWxIZWFkZXIuc2l6ZSk7XG5cbiAgICAgICAgc3dpdGNoIChfY2VudHJhbEhlYWRlci5tZXRob2QpIHtcbiAgICAgICAgICAgIGNhc2UgVXRpbHMuQ29uc3RhbnRzLlNUT1JFRDpcbiAgICAgICAgICAgICAgICBjb21wcmVzc2VkRGF0YS5jb3B5KGRhdGEpO1xuICAgICAgICAgICAgICAgIGlmICghY3JjMzJPSyhkYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXN5bmMgJiYgY2FsbGJhY2spIGNhbGxiYWNrKGRhdGEsIFV0aWxzLkVycm9ycy5CQURfQ1JDKCkpOyAvL3NpIGFkZGVkIGVycm9yXG4gICAgICAgICAgICAgICAgICAgIHRocm93IFV0aWxzLkVycm9ycy5CQURfQ1JDKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy9zaSBhZGRlZCBvdGhlcndpc2UgZGlkIG5vdCBzZWVtIHRvIHJldHVybiBkYXRhLlxuICAgICAgICAgICAgICAgICAgICBpZiAoYXN5bmMgJiYgY2FsbGJhY2spIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFV0aWxzLkNvbnN0YW50cy5ERUZMQVRFRDpcbiAgICAgICAgICAgICAgICB2YXIgaW5mbGF0ZXIgPSBuZXcgTWV0aG9kcy5JbmZsYXRlcihjb21wcmVzc2VkRGF0YSwgX2NlbnRyYWxIZWFkZXIuc2l6ZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFhc3luYykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBpbmZsYXRlci5pbmZsYXRlKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuY29weShkYXRhLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjcmMzMk9LKGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBVdGlscy5FcnJvcnMuQkFEX0NSQyhgXCIke2RlY29kZXIuZGVjb2RlKF9lbnRyeU5hbWUpfVwiYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5mbGF0ZXIuaW5mbGF0ZUFzeW5jKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5jb3B5KHJlc3VsdCwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNyYzMyT0socmVzdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXN1bHQsIFV0aWxzLkVycm9ycy5CQURfQ1JDKCkpOyAvL3NpIGFkZGVkIGVycm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaWYgKGFzeW5jICYmIGNhbGxiYWNrKSBjYWxsYmFjayhCdWZmZXIuYWxsb2MoMCksIFV0aWxzLkVycm9ycy5VTktOT1dOX01FVEhPRCgpKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBVdGlscy5FcnJvcnMuVU5LTk9XTl9NRVRIT0QoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbXByZXNzKC8qQm9vbGVhbiovIGFzeW5jLCAvKkZ1bmN0aW9uKi8gY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCghdW5jb21wcmVzc2VkRGF0YSB8fCAhdW5jb21wcmVzc2VkRGF0YS5sZW5ndGgpICYmIEJ1ZmZlci5pc0J1ZmZlcihpbnB1dCkpIHtcbiAgICAgICAgICAgIC8vIG5vIGRhdGEgc2V0IG9yIHRoZSBkYXRhIHdhc24ndCBjaGFuZ2VkIHRvIHJlcXVpcmUgcmVjb21wcmVzc2lvblxuICAgICAgICAgICAgaWYgKGFzeW5jICYmIGNhbGxiYWNrKSBjYWxsYmFjayhnZXRDb21wcmVzc2VkRGF0YUZyb21aaXAoKSk7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcHJlc3NlZERhdGFGcm9tWmlwKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodW5jb21wcmVzc2VkRGF0YS5sZW5ndGggJiYgIV9pc0RpcmVjdG9yeSkge1xuICAgICAgICAgICAgdmFyIGNvbXByZXNzZWREYXRhO1xuICAgICAgICAgICAgLy8gTG9jYWwgZmlsZSBoZWFkZXJcbiAgICAgICAgICAgIHN3aXRjaCAoX2NlbnRyYWxIZWFkZXIubWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBVdGlscy5Db25zdGFudHMuU1RPUkVEOlxuICAgICAgICAgICAgICAgICAgICBfY2VudHJhbEhlYWRlci5jb21wcmVzc2VkU2l6ZSA9IF9jZW50cmFsSGVhZGVyLnNpemU7XG5cbiAgICAgICAgICAgICAgICAgICAgY29tcHJlc3NlZERhdGEgPSBCdWZmZXIuYWxsb2ModW5jb21wcmVzc2VkRGF0YS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICB1bmNvbXByZXNzZWREYXRhLmNvcHkoY29tcHJlc3NlZERhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChhc3luYyAmJiBjYWxsYmFjaykgY2FsbGJhY2soY29tcHJlc3NlZERhdGEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29tcHJlc3NlZERhdGE7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjYXNlIFV0aWxzLkNvbnN0YW50cy5ERUZMQVRFRDpcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlZmxhdGVyID0gbmV3IE1ldGhvZHMuRGVmbGF0ZXIodW5jb21wcmVzc2VkRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYXN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWZsYXRlZCA9IGRlZmxhdGVyLmRlZmxhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jZW50cmFsSGVhZGVyLmNvbXByZXNzZWRTaXplID0gZGVmbGF0ZWQubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlZmxhdGVkO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmbGF0ZXIuZGVmbGF0ZUFzeW5jKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJlc3NlZERhdGEgPSBCdWZmZXIuYWxsb2MoZGF0YS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jZW50cmFsSGVhZGVyLmNvbXByZXNzZWRTaXplID0gZGF0YS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5jb3B5KGNvbXByZXNzZWREYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhjb21wcmVzc2VkRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkZWZsYXRlciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGFzeW5jICYmIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhCdWZmZXIuYWxsb2MoMCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIEJ1ZmZlci5hbGxvYygwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlYWRVSW50NjRMRShidWZmZXIsIG9mZnNldCkge1xuICAgICAgICByZXR1cm4gKGJ1ZmZlci5yZWFkVUludDMyTEUob2Zmc2V0ICsgNCkgPDwgNCkgKyBidWZmZXIucmVhZFVJbnQzMkxFKG9mZnNldCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VFeHRyYShkYXRhKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIHZhciBzaWduYXR1cmUsIHNpemUsIHBhcnQ7XG4gICAgICAgICAgICB3aGlsZSAob2Zmc2V0ICsgNCA8IGRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2lnbmF0dXJlID0gZGF0YS5yZWFkVUludDE2TEUob2Zmc2V0KTtcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gMjtcbiAgICAgICAgICAgICAgICBzaXplID0gZGF0YS5yZWFkVUludDE2TEUob2Zmc2V0KTtcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gMjtcbiAgICAgICAgICAgICAgICBwYXJ0ID0gZGF0YS5zbGljZShvZmZzZXQsIG9mZnNldCArIHNpemUpO1xuICAgICAgICAgICAgICAgIG9mZnNldCArPSBzaXplO1xuICAgICAgICAgICAgICAgIGlmIChDb25zdGFudHMuSURfWklQNjQgPT09IHNpZ25hdHVyZSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZVppcDY0RXh0ZW5kZWRJbmZvcm1hdGlvbihwYXJ0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBVdGlscy5FcnJvcnMuRVhUUkFfRklFTERfUEFSU0VfRVJST1IoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vT3ZlcnJpZGUgaGVhZGVyIGZpZWxkIHZhbHVlcyB3aXRoIHZhbHVlcyBmcm9tIHRoZSBaSVA2NCBleHRyYSBmaWVsZFxuICAgIGZ1bmN0aW9uIHBhcnNlWmlwNjRFeHRlbmRlZEluZm9ybWF0aW9uKGRhdGEpIHtcbiAgICAgICAgdmFyIHNpemUsIGNvbXByZXNzZWRTaXplLCBvZmZzZXQsIGRpc2tOdW1TdGFydDtcblxuICAgICAgICBpZiAoZGF0YS5sZW5ndGggPj0gQ29uc3RhbnRzLkVGX1pJUDY0X1NDT01QKSB7XG4gICAgICAgICAgICBzaXplID0gcmVhZFVJbnQ2NExFKGRhdGEsIENvbnN0YW50cy5FRl9aSVA2NF9TVU5DT01QKTtcbiAgICAgICAgICAgIGlmIChfY2VudHJhbEhlYWRlci5zaXplID09PSBDb25zdGFudHMuRUZfWklQNjRfT1JfMzIpIHtcbiAgICAgICAgICAgICAgICBfY2VudHJhbEhlYWRlci5zaXplID0gc2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5sZW5ndGggPj0gQ29uc3RhbnRzLkVGX1pJUDY0X1JITykge1xuICAgICAgICAgICAgY29tcHJlc3NlZFNpemUgPSByZWFkVUludDY0TEUoZGF0YSwgQ29uc3RhbnRzLkVGX1pJUDY0X1NDT01QKTtcbiAgICAgICAgICAgIGlmIChfY2VudHJhbEhlYWRlci5jb21wcmVzc2VkU2l6ZSA9PT0gQ29uc3RhbnRzLkVGX1pJUDY0X09SXzMyKSB7XG4gICAgICAgICAgICAgICAgX2NlbnRyYWxIZWFkZXIuY29tcHJlc3NlZFNpemUgPSBjb21wcmVzc2VkU2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5sZW5ndGggPj0gQ29uc3RhbnRzLkVGX1pJUDY0X0RTTikge1xuICAgICAgICAgICAgb2Zmc2V0ID0gcmVhZFVJbnQ2NExFKGRhdGEsIENvbnN0YW50cy5FRl9aSVA2NF9SSE8pO1xuICAgICAgICAgICAgaWYgKF9jZW50cmFsSGVhZGVyLm9mZnNldCA9PT0gQ29uc3RhbnRzLkVGX1pJUDY0X09SXzMyKSB7XG4gICAgICAgICAgICAgICAgX2NlbnRyYWxIZWFkZXIub2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCA+PSBDb25zdGFudHMuRUZfWklQNjRfRFNOICsgNCkge1xuICAgICAgICAgICAgZGlza051bVN0YXJ0ID0gZGF0YS5yZWFkVUludDMyTEUoQ29uc3RhbnRzLkVGX1pJUDY0X0RTTik7XG4gICAgICAgICAgICBpZiAoX2NlbnRyYWxIZWFkZXIuZGlza051bVN0YXJ0ID09PSBDb25zdGFudHMuRUZfWklQNjRfT1JfMTYpIHtcbiAgICAgICAgICAgICAgICBfY2VudHJhbEhlYWRlci5kaXNrTnVtU3RhcnQgPSBkaXNrTnVtU3RhcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQgZW50cnlOYW1lKCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlY29kZXIuZGVjb2RlKF9lbnRyeU5hbWUpO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgcmF3RW50cnlOYW1lKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9lbnRyeU5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBlbnRyeU5hbWUodmFsKSB7XG4gICAgICAgICAgICBfZW50cnlOYW1lID0gVXRpbHMudG9CdWZmZXIodmFsLCBkZWNvZGVyLmVuY29kZSk7XG4gICAgICAgICAgICB2YXIgbGFzdENoYXIgPSBfZW50cnlOYW1lW19lbnRyeU5hbWUubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBfaXNEaXJlY3RvcnkgPSBsYXN0Q2hhciA9PT0gNDcgfHwgbGFzdENoYXIgPT09IDkyO1xuICAgICAgICAgICAgX2NlbnRyYWxIZWFkZXIuZmlsZU5hbWVMZW5ndGggPSBfZW50cnlOYW1lLmxlbmd0aDtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgZWZzKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBfZWZzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2Vmcyh0aGlzLmVudHJ5TmFtZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBfZWZzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBleHRyYSgpIHtcbiAgICAgICAgICAgIHJldHVybiBfZXh0cmE7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBleHRyYSh2YWwpIHtcbiAgICAgICAgICAgIF9leHRyYSA9IHZhbDtcbiAgICAgICAgICAgIF9jZW50cmFsSGVhZGVyLmV4dHJhTGVuZ3RoID0gdmFsLmxlbmd0aDtcbiAgICAgICAgICAgIHBhcnNlRXh0cmEodmFsKTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgY29tbWVudCgpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWNvZGVyLmRlY29kZShfY29tbWVudCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBjb21tZW50KHZhbCkge1xuICAgICAgICAgICAgX2NvbW1lbnQgPSBVdGlscy50b0J1ZmZlcih2YWwsIGRlY29kZXIuZW5jb2RlKTtcbiAgICAgICAgICAgIF9jZW50cmFsSGVhZGVyLmNvbW1lbnRMZW5ndGggPSBfY29tbWVudC5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoX2NvbW1lbnQubGVuZ3RoID4gMHhmZmZmKSB0aHJvdyBVdGlscy5FcnJvcnMuQ09NTUVOVF9UT09fTE9ORygpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBuYW1lKCkge1xuICAgICAgICAgICAgdmFyIG4gPSBkZWNvZGVyLmRlY29kZShfZW50cnlOYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBfaXNEaXJlY3RvcnlcbiAgICAgICAgICAgICAgICA/IG5cbiAgICAgICAgICAgICAgICAgICAgICAuc3Vic3RyKG4ubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoXCIvXCIpXG4gICAgICAgICAgICAgICAgICAgICAgLnBvcCgpXG4gICAgICAgICAgICAgICAgOiBuLnNwbGl0KFwiL1wiKS5wb3AoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGlzRGlyZWN0b3J5KCkge1xuICAgICAgICAgICAgcmV0dXJuIF9pc0RpcmVjdG9yeTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRDb21wcmVzc2VkRGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXByZXNzKGZhbHNlLCBudWxsKTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRDb21wcmVzc2VkRGF0YUFzeW5jOiBmdW5jdGlvbiAoLypGdW5jdGlvbiovIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjb21wcmVzcyh0cnVlLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0RGF0YTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB1bmNvbXByZXNzZWREYXRhID0gVXRpbHMudG9CdWZmZXIodmFsdWUsIFV0aWxzLmRlY29kZXIuZW5jb2RlKTtcbiAgICAgICAgICAgIGlmICghX2lzRGlyZWN0b3J5ICYmIHVuY29tcHJlc3NlZERhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgX2NlbnRyYWxIZWFkZXIuc2l6ZSA9IHVuY29tcHJlc3NlZERhdGEubGVuZ3RoO1xuICAgICAgICAgICAgICAgIF9jZW50cmFsSGVhZGVyLm1ldGhvZCA9IFV0aWxzLkNvbnN0YW50cy5ERUZMQVRFRDtcbiAgICAgICAgICAgICAgICBfY2VudHJhbEhlYWRlci5jcmMgPSBVdGlscy5jcmMzMih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgX2NlbnRyYWxIZWFkZXIuY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGZvbGRlcnMgYW5kIGJsYW5rIGZpbGVzIHNob3VsZCBiZSBzdG9yZWRcbiAgICAgICAgICAgICAgICBfY2VudHJhbEhlYWRlci5tZXRob2QgPSBVdGlscy5Db25zdGFudHMuU1RPUkVEO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGdldERhdGE6IGZ1bmN0aW9uIChwYXNzKSB7XG4gICAgICAgICAgICBpZiAoX2NlbnRyYWxIZWFkZXIuY2hhbmdlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmNvbXByZXNzZWREYXRhO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVjb21wcmVzcyhmYWxzZSwgbnVsbCwgcGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0RGF0YUFzeW5jOiBmdW5jdGlvbiAoLypGdW5jdGlvbiovIGNhbGxiYWNrLCBwYXNzKSB7XG4gICAgICAgICAgICBpZiAoX2NlbnRyYWxIZWFkZXIuY2hhbmdlZCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHVuY29tcHJlc3NlZERhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZWNvbXByZXNzKHRydWUsIGNhbGxiYWNrLCBwYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBzZXQgYXR0cihhdHRyKSB7XG4gICAgICAgICAgICBfY2VudHJhbEhlYWRlci5hdHRyID0gYXR0cjtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGF0dHIoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NlbnRyYWxIZWFkZXIuYXR0cjtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQgaGVhZGVyKC8qQnVmZmVyKi8gZGF0YSkge1xuICAgICAgICAgICAgX2NlbnRyYWxIZWFkZXIubG9hZEZyb21CaW5hcnkoZGF0YSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IGhlYWRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiBfY2VudHJhbEhlYWRlcjtcbiAgICAgICAgfSxcblxuICAgICAgICBwYWNrQ2VudHJhbEhlYWRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX2NlbnRyYWxIZWFkZXIuZmxhZ3NfZWZzID0gdGhpcy5lZnM7XG4gICAgICAgICAgICBfY2VudHJhbEhlYWRlci5leHRyYUxlbmd0aCA9IF9leHRyYS5sZW5ndGg7XG4gICAgICAgICAgICAvLyAxLiBjcmVhdGUgaGVhZGVyIChidWZmZXIpXG4gICAgICAgICAgICB2YXIgaGVhZGVyID0gX2NlbnRyYWxIZWFkZXIuY2VudHJhbEhlYWRlclRvQmluYXJ5KCk7XG4gICAgICAgICAgICB2YXIgYWRkcG9zID0gVXRpbHMuQ29uc3RhbnRzLkNFTkhEUjtcbiAgICAgICAgICAgIC8vIDIuIGFkZCBmaWxlIG5hbWVcbiAgICAgICAgICAgIF9lbnRyeU5hbWUuY29weShoZWFkZXIsIGFkZHBvcyk7XG4gICAgICAgICAgICBhZGRwb3MgKz0gX2VudHJ5TmFtZS5sZW5ndGg7XG4gICAgICAgICAgICAvLyAzLiBhZGQgZXh0cmEgZGF0YVxuICAgICAgICAgICAgX2V4dHJhLmNvcHkoaGVhZGVyLCBhZGRwb3MpO1xuICAgICAgICAgICAgYWRkcG9zICs9IF9jZW50cmFsSGVhZGVyLmV4dHJhTGVuZ3RoO1xuICAgICAgICAgICAgLy8gNC4gYWRkIGZpbGUgY29tbWVudFxuICAgICAgICAgICAgX2NvbW1lbnQuY29weShoZWFkZXIsIGFkZHBvcyk7XG4gICAgICAgICAgICByZXR1cm4gaGVhZGVyO1xuICAgICAgICB9LFxuXG4gICAgICAgIHBhY2tMb2NhbEhlYWRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IGFkZHBvcyA9IDA7XG4gICAgICAgICAgICBfY2VudHJhbEhlYWRlci5mbGFnc19lZnMgPSB0aGlzLmVmcztcbiAgICAgICAgICAgIF9jZW50cmFsSGVhZGVyLmV4dHJhTG9jYWxMZW5ndGggPSBfZXh0cmFsb2NhbC5sZW5ndGg7XG4gICAgICAgICAgICAvLyAxLiBjb25zdHJ1Y3QgbG9jYWwgaGVhZGVyIEJ1ZmZlclxuICAgICAgICAgICAgY29uc3QgbG9jYWxIZWFkZXJCdWYgPSBfY2VudHJhbEhlYWRlci5sb2NhbEhlYWRlclRvQmluYXJ5KCk7XG4gICAgICAgICAgICAvLyAyLiBsb2NhbEhlYWRlciAtIGNyYXRlIGhlYWRlciBidWZmZXJcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsSGVhZGVyID0gQnVmZmVyLmFsbG9jKGxvY2FsSGVhZGVyQnVmLmxlbmd0aCArIF9lbnRyeU5hbWUubGVuZ3RoICsgX2NlbnRyYWxIZWFkZXIuZXh0cmFMb2NhbExlbmd0aCk7XG4gICAgICAgICAgICAvLyAyLjEgYWRkIGxvY2FsaGVhZGVyXG4gICAgICAgICAgICBsb2NhbEhlYWRlckJ1Zi5jb3B5KGxvY2FsSGVhZGVyLCBhZGRwb3MpO1xuICAgICAgICAgICAgYWRkcG9zICs9IGxvY2FsSGVhZGVyQnVmLmxlbmd0aDtcbiAgICAgICAgICAgIC8vIDIuMiBhZGQgZmlsZSBuYW1lXG4gICAgICAgICAgICBfZW50cnlOYW1lLmNvcHkobG9jYWxIZWFkZXIsIGFkZHBvcyk7XG4gICAgICAgICAgICBhZGRwb3MgKz0gX2VudHJ5TmFtZS5sZW5ndGg7XG4gICAgICAgICAgICAvLyAyLjMgYWRkIGV4dHJhIGZpZWxkXG4gICAgICAgICAgICBfZXh0cmFsb2NhbC5jb3B5KGxvY2FsSGVhZGVyLCBhZGRwb3MpO1xuICAgICAgICAgICAgYWRkcG9zICs9IF9leHRyYWxvY2FsLmxlbmd0aDtcblxuICAgICAgICAgICAgcmV0dXJuIGxvY2FsSGVhZGVyO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRvSlNPTjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgYnl0ZXMgPSBmdW5jdGlvbiAobnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCI8XCIgKyAoKG5yICYmIG5yLmxlbmd0aCArIFwiIGJ5dGVzIGJ1ZmZlclwiKSB8fCBcIm51bGxcIikgKyBcIj5cIjtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZW50cnlOYW1lOiB0aGlzLmVudHJ5TmFtZSxcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgY29tbWVudDogdGhpcy5jb21tZW50LFxuICAgICAgICAgICAgICAgIGlzRGlyZWN0b3J5OiB0aGlzLmlzRGlyZWN0b3J5LFxuICAgICAgICAgICAgICAgIGhlYWRlcjogX2NlbnRyYWxIZWFkZXIudG9KU09OKCksXG4gICAgICAgICAgICAgICAgY29tcHJlc3NlZERhdGE6IGJ5dGVzKGlucHV0KSxcbiAgICAgICAgICAgICAgICBkYXRhOiBieXRlcyh1bmNvbXByZXNzZWREYXRhKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMudG9KU09OKCksIG51bGwsIFwiXFx0XCIpO1xuICAgICAgICB9XG4gICAgfTtcbn07XG4iLCAiY29uc3QgWmlwRW50cnkgPSByZXF1aXJlKFwiLi96aXBFbnRyeVwiKTtcbmNvbnN0IEhlYWRlcnMgPSByZXF1aXJlKFwiLi9oZWFkZXJzXCIpO1xuY29uc3QgVXRpbHMgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgvKkJ1ZmZlcnxudWxsKi8gaW5CdWZmZXIsIC8qKiBvYmplY3QgKi8gb3B0aW9ucykge1xuICAgIHZhciBlbnRyeUxpc3QgPSBbXSxcbiAgICAgICAgZW50cnlUYWJsZSA9IHt9LFxuICAgICAgICBfY29tbWVudCA9IEJ1ZmZlci5hbGxvYygwKSxcbiAgICAgICAgbWFpbkhlYWRlciA9IG5ldyBIZWFkZXJzLk1haW5IZWFkZXIoKSxcbiAgICAgICAgbG9hZGVkRW50cmllcyA9IGZhbHNlO1xuICAgIHZhciBwYXNzd29yZCA9IG51bGw7XG4gICAgY29uc3QgdGVtcG9yYXJ5ID0gbmV3IFNldCgpO1xuXG4gICAgLy8gYXNzaWduIG9wdGlvbnNcbiAgICBjb25zdCBvcHRzID0gb3B0aW9ucztcblxuICAgIGNvbnN0IHsgbm9Tb3J0LCBkZWNvZGVyIH0gPSBvcHRzO1xuXG4gICAgaWYgKGluQnVmZmVyKSB7XG4gICAgICAgIC8vIGlzIGEgbWVtb3J5IGJ1ZmZlclxuICAgICAgICByZWFkTWFpbkhlYWRlcihvcHRzLnJlYWRFbnRyaWVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBub25lLiBpcyBhIG5ldyBmaWxlXG4gICAgICAgIGxvYWRlZEVudHJpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VUZW1wb3JhcnlGb2xkZXJzKCkge1xuICAgICAgICBjb25zdCBmb2xkZXJzTGlzdCA9IG5ldyBTZXQoKTtcblxuICAgICAgICAvLyBNYWtlIGxpc3Qgb2YgYWxsIGZvbGRlcnMgaW4gZmlsZVxuICAgICAgICBmb3IgKGNvbnN0IGVsZW0gb2YgT2JqZWN0LmtleXMoZW50cnlUYWJsZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZWxlbS5zcGxpdChcIi9cIik7XG4gICAgICAgICAgICBlbGVtZW50cy5wb3AoKTsgLy8gZmlsZW5hbWVcbiAgICAgICAgICAgIGlmICghZWxlbWVudHMubGVuZ3RoKSBjb250aW51ZTsgLy8gbm8gZm9sZGVyc1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1YiA9IGVsZW1lbnRzLnNsaWNlKDAsIGkgKyAxKS5qb2luKFwiL1wiKSArIFwiL1wiO1xuICAgICAgICAgICAgICAgIGZvbGRlcnNMaXN0LmFkZChzdWIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY3JlYXRlIG1pc3NpbmcgZm9sZGVycyBhcyB0ZW1wb3JhcnlcbiAgICAgICAgZm9yIChjb25zdCBlbGVtIG9mIGZvbGRlcnNMaXN0KSB7XG4gICAgICAgICAgICBpZiAoIShlbGVtIGluIGVudHJ5VGFibGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcGZvbGRlciA9IG5ldyBaaXBFbnRyeShvcHRzKTtcbiAgICAgICAgICAgICAgICB0ZW1wZm9sZGVyLmVudHJ5TmFtZSA9IGVsZW07XG4gICAgICAgICAgICAgICAgdGVtcGZvbGRlci5hdHRyID0gMHgxMDtcbiAgICAgICAgICAgICAgICB0ZW1wZm9sZGVyLnRlbXBvcmFyeSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZW50cnlMaXN0LnB1c2godGVtcGZvbGRlcik7XG4gICAgICAgICAgICAgICAgZW50cnlUYWJsZVt0ZW1wZm9sZGVyLmVudHJ5TmFtZV0gPSB0ZW1wZm9sZGVyO1xuICAgICAgICAgICAgICAgIHRlbXBvcmFyeS5hZGQodGVtcGZvbGRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWFkRW50cmllcygpIHtcbiAgICAgICAgbG9hZGVkRW50cmllcyA9IHRydWU7XG4gICAgICAgIGVudHJ5VGFibGUgPSB7fTtcbiAgICAgICAgaWYgKG1haW5IZWFkZXIuZGlza0VudHJpZXMgPiAoaW5CdWZmZXIubGVuZ3RoIC0gbWFpbkhlYWRlci5vZmZzZXQpIC8gVXRpbHMuQ29uc3RhbnRzLkNFTkhEUikge1xuICAgICAgICAgICAgdGhyb3cgVXRpbHMuRXJyb3JzLkRJU0tfRU5UUllfVE9PX0xBUkdFKCk7XG4gICAgICAgIH1cbiAgICAgICAgZW50cnlMaXN0ID0gbmV3IEFycmF5KG1haW5IZWFkZXIuZGlza0VudHJpZXMpOyAvLyB0b3RhbCBudW1iZXIgb2YgZW50cmllc1xuICAgICAgICB2YXIgaW5kZXggPSBtYWluSGVhZGVyLm9mZnNldDsgLy8gb2Zmc2V0IG9mIGZpcnN0IENFTiBoZWFkZXJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbnRyeUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0bXAgPSBpbmRleCxcbiAgICAgICAgICAgICAgICBlbnRyeSA9IG5ldyBaaXBFbnRyeShvcHRzLCBpbkJ1ZmZlcik7XG4gICAgICAgICAgICBlbnRyeS5oZWFkZXIgPSBpbkJ1ZmZlci5zbGljZSh0bXAsICh0bXAgKz0gVXRpbHMuQ29uc3RhbnRzLkNFTkhEUikpO1xuXG4gICAgICAgICAgICBlbnRyeS5lbnRyeU5hbWUgPSBpbkJ1ZmZlci5zbGljZSh0bXAsICh0bXAgKz0gZW50cnkuaGVhZGVyLmZpbGVOYW1lTGVuZ3RoKSk7XG5cbiAgICAgICAgICAgIGlmIChlbnRyeS5oZWFkZXIuZXh0cmFMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBlbnRyeS5leHRyYSA9IGluQnVmZmVyLnNsaWNlKHRtcCwgKHRtcCArPSBlbnRyeS5oZWFkZXIuZXh0cmFMZW5ndGgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVudHJ5LmhlYWRlci5jb21tZW50TGVuZ3RoKSBlbnRyeS5jb21tZW50ID0gaW5CdWZmZXIuc2xpY2UodG1wLCB0bXAgKyBlbnRyeS5oZWFkZXIuY29tbWVudExlbmd0aCk7XG5cbiAgICAgICAgICAgIGluZGV4ICs9IGVudHJ5LmhlYWRlci5jZW50cmFsSGVhZGVyU2l6ZTtcblxuICAgICAgICAgICAgZW50cnlMaXN0W2ldID0gZW50cnk7XG4gICAgICAgICAgICBlbnRyeVRhYmxlW2VudHJ5LmVudHJ5TmFtZV0gPSBlbnRyeTtcbiAgICAgICAgfVxuICAgICAgICB0ZW1wb3JhcnkuY2xlYXIoKTtcbiAgICAgICAgbWFrZVRlbXBvcmFyeUZvbGRlcnMoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWFkTWFpbkhlYWRlcigvKkJvb2xlYW4qLyByZWFkTm93KSB7XG4gICAgICAgIHZhciBpID0gaW5CdWZmZXIubGVuZ3RoIC0gVXRpbHMuQ29uc3RhbnRzLkVOREhEUiwgLy8gRU5EIGhlYWRlciBzaXplXG4gICAgICAgICAgICBtYXggPSBNYXRoLm1heCgwLCBpIC0gMHhmZmZmKSwgLy8gMHhGRkZGIGlzIHRoZSBtYXggemlwIGZpbGUgY29tbWVudCBsZW5ndGhcbiAgICAgICAgICAgIG4gPSBtYXgsXG4gICAgICAgICAgICBlbmRTdGFydCA9IGluQnVmZmVyLmxlbmd0aCxcbiAgICAgICAgICAgIGVuZE9mZnNldCA9IC0xLCAvLyBTdGFydCBvZmZzZXQgb2YgdGhlIEVORCBoZWFkZXJcbiAgICAgICAgICAgIGNvbW1lbnRFbmQgPSAwO1xuXG4gICAgICAgIC8vIG9wdGlvbiB0byBzZWFyY2ggaGVhZGVyIGZvcm0gZW50aXJlIGZpbGVcbiAgICAgICAgY29uc3QgdHJhaWxpbmdTcGFjZSA9IHR5cGVvZiBvcHRzLnRyYWlsaW5nU3BhY2UgPT09IFwiYm9vbGVhblwiID8gb3B0cy50cmFpbGluZ1NwYWNlIDogZmFsc2U7XG4gICAgICAgIGlmICh0cmFpbGluZ1NwYWNlKSBtYXggPSAwO1xuXG4gICAgICAgIGZvciAoaTsgaSA+PSBuOyBpLS0pIHtcbiAgICAgICAgICAgIGlmIChpbkJ1ZmZlcltpXSAhPT0gMHg1MCkgY29udGludWU7IC8vIHF1aWNrIGNoZWNrIHRoYXQgdGhlIGJ5dGUgaXMgJ1AnXG4gICAgICAgICAgICBpZiAoaW5CdWZmZXIucmVhZFVJbnQzMkxFKGkpID09PSBVdGlscy5Db25zdGFudHMuRU5EU0lHKSB7XG4gICAgICAgICAgICAgICAgLy8gXCJQS1xcMDA1XFwwMDZcIlxuICAgICAgICAgICAgICAgIGVuZE9mZnNldCA9IGk7XG4gICAgICAgICAgICAgICAgY29tbWVudEVuZCA9IGk7XG4gICAgICAgICAgICAgICAgZW5kU3RhcnQgPSBpICsgVXRpbHMuQ29uc3RhbnRzLkVOREhEUjtcbiAgICAgICAgICAgICAgICAvLyBXZSBhbHJlYWR5IGZvdW5kIGEgcmVndWxhciBzaWduYXR1cmUsIGxldCdzIGxvb2sganVzdCBhIGJpdCBmdXJ0aGVyIHRvIGNoZWNrIGlmIHRoZXJlJ3MgYW55IHppcDY0IHNpZ25hdHVyZVxuICAgICAgICAgICAgICAgIG4gPSBpIC0gVXRpbHMuQ29uc3RhbnRzLkVORDY0SERSO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaW5CdWZmZXIucmVhZFVJbnQzMkxFKGkpID09PSBVdGlscy5Db25zdGFudHMuRU5ENjRTSUcpIHtcbiAgICAgICAgICAgICAgICAvLyBGb3VuZCBhIHppcDY0IHNpZ25hdHVyZSwgbGV0J3MgY29udGludWUgcmVhZGluZyB0aGUgd2hvbGUgemlwNjQgcmVjb3JkXG4gICAgICAgICAgICAgICAgbiA9IG1heDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGluQnVmZmVyLnJlYWRVSW50MzJMRShpKSA9PT0gVXRpbHMuQ29uc3RhbnRzLlpJUDY0U0lHKSB7XG4gICAgICAgICAgICAgICAgLy8gRm91bmQgdGhlIHppcDY0IHJlY29yZCwgbGV0J3MgZGV0ZXJtaW5lIGl0J3Mgc2l6ZVxuICAgICAgICAgICAgICAgIGVuZE9mZnNldCA9IGk7XG4gICAgICAgICAgICAgICAgZW5kU3RhcnQgPSBpICsgVXRpbHMucmVhZEJpZ1VJbnQ2NExFKGluQnVmZmVyLCBpICsgVXRpbHMuQ29uc3RhbnRzLlpJUDY0U0laRSkgKyBVdGlscy5Db25zdGFudHMuWklQNjRMRUFEO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVuZE9mZnNldCA9PSAtMSkgdGhyb3cgVXRpbHMuRXJyb3JzLklOVkFMSURfRk9STUFUKCk7XG5cbiAgICAgICAgbWFpbkhlYWRlci5sb2FkRnJvbUJpbmFyeShpbkJ1ZmZlci5zbGljZShlbmRPZmZzZXQsIGVuZFN0YXJ0KSk7XG4gICAgICAgIGlmIChtYWluSGVhZGVyLmNvbW1lbnRMZW5ndGgpIHtcbiAgICAgICAgICAgIF9jb21tZW50ID0gaW5CdWZmZXIuc2xpY2UoY29tbWVudEVuZCArIFV0aWxzLkNvbnN0YW50cy5FTkRIRFIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFkTm93KSByZWFkRW50cmllcygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNvcnRFbnRyaWVzKCkge1xuICAgICAgICBpZiAoZW50cnlMaXN0Lmxlbmd0aCA+IDEgJiYgIW5vU29ydCkge1xuICAgICAgICAgICAgZW50cnlMaXN0LnNvcnQoKGEsIGIpID0+IGEuZW50cnlOYW1lLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShiLmVudHJ5TmFtZS50b0xvd2VyQ2FzZSgpKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBaaXBFbnRyeSBvYmplY3RzIGV4aXN0ZW50IGluIHRoZSBjdXJyZW50IG9wZW5lZCBhcmNoaXZlXG4gICAgICAgICAqIEByZXR1cm4gQXJyYXlcbiAgICAgICAgICovXG4gICAgICAgIGdldCBlbnRyaWVzKCkge1xuICAgICAgICAgICAgaWYgKCFsb2FkZWRFbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgcmVhZEVudHJpZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlbnRyeUxpc3QuZmlsdGVyKChlKSA9PiAhdGVtcG9yYXJ5LmhhcyhlKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFyY2hpdmUgY29tbWVudFxuICAgICAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICBnZXQgY29tbWVudCgpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWNvZGVyLmRlY29kZShfY29tbWVudCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBjb21tZW50KHZhbCkge1xuICAgICAgICAgICAgX2NvbW1lbnQgPSBVdGlscy50b0J1ZmZlcih2YWwsIGRlY29kZXIuZW5jb2RlKTtcbiAgICAgICAgICAgIG1haW5IZWFkZXIuY29tbWVudExlbmd0aCA9IF9jb21tZW50Lmxlbmd0aDtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRFbnRyeUNvdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIWxvYWRlZEVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFpbkhlYWRlci5kaXNrRW50cmllcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGVudHJ5TGlzdC5sZW5ndGg7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZm9yRWFjaDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmVudHJpZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIGVudHJ5IHdpdGggdGhlIGdpdmVuIG5hbWUgb3IgbnVsbCBpZiBlbnRyeSBpcyBpbmV4aXN0ZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBlbnRyeU5hbWVcbiAgICAgICAgICogQHJldHVybiBaaXBFbnRyeVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0RW50cnk6IGZ1bmN0aW9uICgvKlN0cmluZyovIGVudHJ5TmFtZSkge1xuICAgICAgICAgICAgaWYgKCFsb2FkZWRFbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgcmVhZEVudHJpZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlbnRyeVRhYmxlW2VudHJ5TmFtZV0gfHwgbnVsbDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkcyB0aGUgZ2l2ZW4gZW50cnkgdG8gdGhlIGVudHJ5IGxpc3RcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGVudHJ5XG4gICAgICAgICAqL1xuICAgICAgICBzZXRFbnRyeTogZnVuY3Rpb24gKC8qWmlwRW50cnkqLyBlbnRyeSkge1xuICAgICAgICAgICAgaWYgKCFsb2FkZWRFbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgcmVhZEVudHJpZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVudHJ5TGlzdC5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgIGVudHJ5VGFibGVbZW50cnkuZW50cnlOYW1lXSA9IGVudHJ5O1xuICAgICAgICAgICAgbWFpbkhlYWRlci50b3RhbEVudHJpZXMgPSBlbnRyeUxpc3QubGVuZ3RoO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmVzIHRoZSBmaWxlIHdpdGggdGhlIGdpdmVuIG5hbWUgZnJvbSB0aGUgZW50cnkgbGlzdC5cbiAgICAgICAgICpcbiAgICAgICAgICogSWYgdGhlIGVudHJ5IGlzIGEgZGlyZWN0b3J5LCB0aGVuIGFsbCBuZXN0ZWQgZmlsZXMgYW5kIGRpcmVjdG9yaWVzIHdpbGwgYmUgcmVtb3ZlZFxuICAgICAgICAgKiBAcGFyYW0gZW50cnlOYW1lXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAgICAgKi9cbiAgICAgICAgZGVsZXRlRmlsZTogZnVuY3Rpb24gKC8qU3RyaW5nKi8gZW50cnlOYW1lLCB3aXRoc3ViZm9sZGVycyA9IHRydWUpIHtcbiAgICAgICAgICAgIGlmICghbG9hZGVkRW50cmllcykge1xuICAgICAgICAgICAgICAgIHJlYWRFbnRyaWVzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBlbnRyeSA9IGVudHJ5VGFibGVbZW50cnlOYW1lXTtcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSB0aGlzLmdldEVudHJ5Q2hpbGRyZW4oZW50cnksIHdpdGhzdWJmb2xkZXJzKS5tYXAoKGNoaWxkKSA9PiBjaGlsZC5lbnRyeU5hbWUpO1xuXG4gICAgICAgICAgICBsaXN0LmZvckVhY2godGhpcy5kZWxldGVFbnRyeSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZXMgdGhlIGVudHJ5IHdpdGggdGhlIGdpdmVuIG5hbWUgZnJvbSB0aGUgZW50cnkgbGlzdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGVudHJ5TmFtZVxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgICAgICovXG4gICAgICAgIGRlbGV0ZUVudHJ5OiBmdW5jdGlvbiAoLypTdHJpbmcqLyBlbnRyeU5hbWUpIHtcbiAgICAgICAgICAgIGlmICghbG9hZGVkRW50cmllcykge1xuICAgICAgICAgICAgICAgIHJlYWRFbnRyaWVzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBlbnRyeSA9IGVudHJ5VGFibGVbZW50cnlOYW1lXTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZW50cnlMaXN0LmluZGV4T2YoZW50cnkpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICBlbnRyeUxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgZW50cnlUYWJsZVtlbnRyeU5hbWVdO1xuICAgICAgICAgICAgICAgIG1haW5IZWFkZXIudG90YWxFbnRyaWVzID0gZW50cnlMaXN0Lmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogIEl0ZXJhdGVzIGFuZCByZXR1cm5zIGFsbCBuZXN0ZWQgZmlsZXMgYW5kIGRpcmVjdG9yaWVzIG9mIHRoZSBnaXZlbiBlbnRyeVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gZW50cnlcbiAgICAgICAgICogQHJldHVybiBBcnJheVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0RW50cnlDaGlsZHJlbjogZnVuY3Rpb24gKC8qWmlwRW50cnkqLyBlbnRyeSwgc3ViZm9sZGVycyA9IHRydWUpIHtcbiAgICAgICAgICAgIGlmICghbG9hZGVkRW50cmllcykge1xuICAgICAgICAgICAgICAgIHJlYWRFbnRyaWVzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVudHJ5ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzRGlyZWN0b3J5ICYmIHN1YmZvbGRlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gZW50cnkuZW50cnlOYW1lO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgemlwRW50cnkgb2YgZW50cnlMaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoemlwRW50cnkuZW50cnlOYW1lLnN0YXJ0c1dpdGgobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2goemlwRW50cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsaXN0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbZW50cnldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogIEhvdyBtYW55IGNoaWxkIGVsZW1lbnRzIGVudHJ5IGhhc1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1ppcEVudHJ5fSBlbnRyeVxuICAgICAgICAgKiBAcmV0dXJuIHtpbnRlZ2VyfVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0Q2hpbGRDb3VudDogZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICBpZiAoZW50cnkgJiYgZW50cnkuaXNEaXJlY3RvcnkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsaXN0ID0gdGhpcy5nZXRFbnRyeUNoaWxkcmVuKGVudHJ5KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGlzdC5pbmNsdWRlcyhlbnRyeSkgPyBsaXN0Lmxlbmd0aCAtIDEgOiBsaXN0Lmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSB6aXAgZmlsZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIEJ1ZmZlclxuICAgICAgICAgKi9cbiAgICAgICAgY29tcHJlc3NUb0J1ZmZlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFsb2FkZWRFbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgcmVhZEVudHJpZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNvcnRFbnRyaWVzKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGFCbG9jayA9IFtdO1xuICAgICAgICAgICAgY29uc3QgaGVhZGVyQmxvY2tzID0gW107XG4gICAgICAgICAgICBsZXQgdG90YWxTaXplID0gMDtcbiAgICAgICAgICAgIGxldCBkaW5kZXggPSAwO1xuXG4gICAgICAgICAgICBtYWluSGVhZGVyLnNpemUgPSAwO1xuICAgICAgICAgICAgbWFpbkhlYWRlci5vZmZzZXQgPSAwO1xuICAgICAgICAgICAgbGV0IHRvdGFsRW50cmllcyA9IDA7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgdGhpcy5lbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgLy8gY29tcHJlc3MgZGF0YSBhbmQgc2V0IGxvY2FsIGFuZCBlbnRyeSBoZWFkZXIgYWNjb3JkaW5nbHkuIFJlYXNvbiB3aHkgaXMgY2FsbGVkIGZpcnN0XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcHJlc3NlZERhdGEgPSBlbnRyeS5nZXRDb21wcmVzc2VkRGF0YSgpO1xuICAgICAgICAgICAgICAgIGVudHJ5LmhlYWRlci5vZmZzZXQgPSBkaW5kZXg7XG5cbiAgICAgICAgICAgICAgICAvLyAxLiBjb25zdHJ1Y3QgbG9jYWwgaGVhZGVyXG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxIZWFkZXIgPSBlbnRyeS5wYWNrTG9jYWxIZWFkZXIoKTtcblxuICAgICAgICAgICAgICAgIC8vIDIuIG9mZnNldHNcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhTGVuZ3RoID0gbG9jYWxIZWFkZXIubGVuZ3RoICsgY29tcHJlc3NlZERhdGEubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGRpbmRleCArPSBkYXRhTGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgLy8gMy4gc3RvcmUgdmFsdWVzIGluIHNlcXVlbmNlXG4gICAgICAgICAgICAgICAgZGF0YUJsb2NrLnB1c2gobG9jYWxIZWFkZXIpO1xuICAgICAgICAgICAgICAgIGRhdGFCbG9jay5wdXNoKGNvbXByZXNzZWREYXRhKTtcblxuICAgICAgICAgICAgICAgIC8vIDQuIGNvbnN0cnVjdCBjZW50cmFsIGhlYWRlclxuICAgICAgICAgICAgICAgIGNvbnN0IGNlbnRyYWxIZWFkZXIgPSBlbnRyeS5wYWNrQ2VudHJhbEhlYWRlcigpO1xuICAgICAgICAgICAgICAgIGhlYWRlckJsb2Nrcy5wdXNoKGNlbnRyYWxIZWFkZXIpO1xuICAgICAgICAgICAgICAgIC8vIDUuIHVwZGF0ZSBtYWluIGhlYWRlclxuICAgICAgICAgICAgICAgIG1haW5IZWFkZXIuc2l6ZSArPSBjZW50cmFsSGVhZGVyLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB0b3RhbFNpemUgKz0gZGF0YUxlbmd0aCArIGNlbnRyYWxIZWFkZXIubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHRvdGFsRW50cmllcysrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0b3RhbFNpemUgKz0gbWFpbkhlYWRlci5tYWluSGVhZGVyU2l6ZTsgLy8gYWxzbyBpbmNsdWRlcyB6aXAgZmlsZSBjb21tZW50IGxlbmd0aFxuICAgICAgICAgICAgLy8gcG9pbnQgdG8gZW5kIG9mIGRhdGEgYW5kIGJlZ2lubmluZyBvZiBjZW50cmFsIGRpcmVjdG9yeSBmaXJzdCByZWNvcmRcbiAgICAgICAgICAgIG1haW5IZWFkZXIub2Zmc2V0ID0gZGluZGV4O1xuICAgICAgICAgICAgbWFpbkhlYWRlci50b3RhbEVudHJpZXMgPSB0b3RhbEVudHJpZXM7XG5cbiAgICAgICAgICAgIGRpbmRleCA9IDA7XG4gICAgICAgICAgICBjb25zdCBvdXRCdWZmZXIgPSBCdWZmZXIuYWxsb2ModG90YWxTaXplKTtcbiAgICAgICAgICAgIC8vIHdyaXRlIGRhdGEgYmxvY2tzXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNvbnRlbnQgb2YgZGF0YUJsb2NrKSB7XG4gICAgICAgICAgICAgICAgY29udGVudC5jb3B5KG91dEJ1ZmZlciwgZGluZGV4KTtcbiAgICAgICAgICAgICAgICBkaW5kZXggKz0gY29udGVudC5sZW5ndGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHdyaXRlIGNlbnRyYWwgZGlyZWN0b3J5IGVudHJpZXNcbiAgICAgICAgICAgIGZvciAoY29uc3QgY29udGVudCBvZiBoZWFkZXJCbG9ja3MpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50LmNvcHkob3V0QnVmZmVyLCBkaW5kZXgpO1xuICAgICAgICAgICAgICAgIGRpbmRleCArPSBjb250ZW50Lmxlbmd0aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gd3JpdGUgbWFpbiBoZWFkZXJcbiAgICAgICAgICAgIGNvbnN0IG1oID0gbWFpbkhlYWRlci50b0JpbmFyeSgpO1xuICAgICAgICAgICAgaWYgKF9jb21tZW50KSB7XG4gICAgICAgICAgICAgICAgX2NvbW1lbnQuY29weShtaCwgVXRpbHMuQ29uc3RhbnRzLkVOREhEUik7IC8vIGFkZCB6aXAgZmlsZSBjb21tZW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtaC5jb3B5KG91dEJ1ZmZlciwgZGluZGV4KTtcblxuICAgICAgICAgICAgLy8gU2luY2Ugd2UgdXBkYXRlIGVudHJ5IGFuZCBtYWluIGhlYWRlciBvZmZzZXRzLFxuICAgICAgICAgICAgLy8gdGhleSBhcmUgbm8gbG9uZ2VyIHZhbGlkIGFuZCB3ZSBoYXZlIHRvIHJlc2V0IGNvbnRlbnRcbiAgICAgICAgICAgIC8vIChJc3N1ZSA2NClcblxuICAgICAgICAgICAgaW5CdWZmZXIgPSBvdXRCdWZmZXI7XG4gICAgICAgICAgICBsb2FkZWRFbnRyaWVzID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHJldHVybiBvdXRCdWZmZXI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9Bc3luY0J1ZmZlcjogZnVuY3Rpb24gKC8qRnVuY3Rpb24qLyBvblN1Y2Nlc3MsIC8qRnVuY3Rpb24qLyBvbkZhaWwsIC8qRnVuY3Rpb24qLyBvbkl0ZW1TdGFydCwgLypGdW5jdGlvbiovIG9uSXRlbUVuZCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoIWxvYWRlZEVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVhZEVudHJpZXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc29ydEVudHJpZXMoKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFCbG9jayA9IFtdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbnRyYWxIZWFkZXJzID0gW107XG4gICAgICAgICAgICAgICAgbGV0IHRvdGFsU2l6ZSA9IDA7XG4gICAgICAgICAgICAgICAgbGV0IGRpbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgbGV0IHRvdGFsRW50cmllcyA9IDA7XG5cbiAgICAgICAgICAgICAgICBtYWluSGVhZGVyLnNpemUgPSAwO1xuICAgICAgICAgICAgICAgIG1haW5IZWFkZXIub2Zmc2V0ID0gMDtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXByZXNzMkJ1ZmZlciA9IGZ1bmN0aW9uIChlbnRyeUxpc3RzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeUxpc3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVudHJ5ID0gZW50cnlMaXN0cy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGVudHJ5LmVudHJ5TmFtZSArIGVudHJ5LmV4dHJhLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob25JdGVtU3RhcnQpIG9uSXRlbVN0YXJ0KG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkuZ2V0Q29tcHJlc3NlZERhdGFBc3luYyhmdW5jdGlvbiAoY29tcHJlc3NlZERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob25JdGVtRW5kKSBvbkl0ZW1FbmQobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkuaGVhZGVyLm9mZnNldCA9IGRpbmRleDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDEuIGNvbnN0cnVjdCBsb2NhbCBoZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsb2NhbEhlYWRlciA9IGVudHJ5LnBhY2tMb2NhbEhlYWRlcigpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMi4gb2Zmc2V0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFMZW5ndGggPSBsb2NhbEhlYWRlci5sZW5ndGggKyBjb21wcmVzc2VkRGF0YS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGluZGV4ICs9IGRhdGFMZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAzLiBzdG9yZSB2YWx1ZXMgaW4gc2VxdWVuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQmxvY2sucHVzaChsb2NhbEhlYWRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJsb2NrLnB1c2goY29tcHJlc3NlZERhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2VudHJhbCBoZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZW50YWxIZWFkZXIgPSBlbnRyeS5wYWNrQ2VudHJhbEhlYWRlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRyYWxIZWFkZXJzLnB1c2goY2VudGFsSGVhZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluSGVhZGVyLnNpemUgKz0gY2VudGFsSGVhZGVyLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFNpemUgKz0gZGF0YUxlbmd0aCArIGNlbnRhbEhlYWRlci5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxFbnRyaWVzKys7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcmVzczJCdWZmZXIoZW50cnlMaXN0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsU2l6ZSArPSBtYWluSGVhZGVyLm1haW5IZWFkZXJTaXplOyAvLyBhbHNvIGluY2x1ZGVzIHppcCBmaWxlIGNvbW1lbnQgbGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwb2ludCB0byBlbmQgb2YgZGF0YSBhbmQgYmVnaW5uaW5nIG9mIGNlbnRyYWwgZGlyZWN0b3J5IGZpcnN0IHJlY29yZFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkhlYWRlci5vZmZzZXQgPSBkaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluSGVhZGVyLnRvdGFsRW50cmllcyA9IHRvdGFsRW50cmllcztcblxuICAgICAgICAgICAgICAgICAgICAgICAgZGluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG91dEJ1ZmZlciA9IEJ1ZmZlci5hbGxvYyh0b3RhbFNpemUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJsb2NrLmZvckVhY2goZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LmNvcHkob3V0QnVmZmVyLCBkaW5kZXgpOyAvLyB3cml0ZSBkYXRhIGJsb2Nrc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpbmRleCArPSBjb250ZW50Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VudHJhbEhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbiAoY29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuY29weShvdXRCdWZmZXIsIGRpbmRleCk7IC8vIHdyaXRlIGNlbnRyYWwgZGlyZWN0b3J5IGVudHJpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaW5kZXggKz0gY29udGVudC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWggPSBtYWluSGVhZGVyLnRvQmluYXJ5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2NvbW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29tbWVudC5jb3B5KG1oLCBVdGlscy5Db25zdGFudHMuRU5ESERSKTsgLy8gYWRkIHppcCBmaWxlIGNvbW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbWguY29weShvdXRCdWZmZXIsIGRpbmRleCk7IC8vIHdyaXRlIG1haW4gaGVhZGVyXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHdlIHVwZGF0ZSBlbnRyeSBhbmQgbWFpbiBoZWFkZXIgb2Zmc2V0cywgdGhleSBhcmUgbm9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvbmdlciB2YWxpZCBhbmQgd2UgaGF2ZSB0byByZXNldCBjb250ZW50IHVzaW5nIG91ciBuZXcgYnVmZmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAoSXNzdWUgNjQpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGluQnVmZmVyID0gb3V0QnVmZmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVkRW50cmllcyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3Mob3V0QnVmZmVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBjb21wcmVzczJCdWZmZXIoQXJyYXkuZnJvbSh0aGlzLmVudHJpZXMpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBvbkZhaWwoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufTtcbiIsICJjb25zdCBVdGlscyA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG5jb25zdCBwdGggPSByZXF1aXJlKFwicGF0aFwiKTtcbmNvbnN0IFppcEVudHJ5ID0gcmVxdWlyZShcIi4vemlwRW50cnlcIik7XG5jb25zdCBaaXBGaWxlID0gcmVxdWlyZShcIi4vemlwRmlsZVwiKTtcblxuY29uc3QgZ2V0X0Jvb2wgPSAoLi4udmFsKSA9PiBVdGlscy5maW5kTGFzdCh2YWwsIChjKSA9PiB0eXBlb2YgYyA9PT0gXCJib29sZWFuXCIpO1xuY29uc3QgZ2V0X1N0ciA9ICguLi52YWwpID0+IFV0aWxzLmZpbmRMYXN0KHZhbCwgKGMpID0+IHR5cGVvZiBjID09PSBcInN0cmluZ1wiKTtcbmNvbnN0IGdldF9GdW4gPSAoLi4udmFsKSA9PiBVdGlscy5maW5kTGFzdCh2YWwsIChjKSA9PiB0eXBlb2YgYyA9PT0gXCJmdW5jdGlvblwiKTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgLy8gb3B0aW9uIFwibm9Tb3J0XCIgOiBpZiB0cnVlIGl0IGRpc2FibGVzIGZpbGVzIHNvcnRpbmdcbiAgICBub1NvcnQ6IGZhbHNlLFxuICAgIC8vIHJlYWQgZW50cmllcyBkdXJpbmcgbG9hZCAoaW5pdGlhbCBsb2FkaW5nIG1heSBiZSBzbG93ZXIpXG4gICAgcmVhZEVudHJpZXM6IGZhbHNlLFxuICAgIC8vIGRlZmF1bHQgbWV0aG9kIGlzIG5vbmVcbiAgICBtZXRob2Q6IFV0aWxzLkNvbnN0YW50cy5OT05FLFxuICAgIC8vIGZpbGUgc3lzdGVtXG4gICAgZnM6IG51bGxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKC8qKlN0cmluZyovIGlucHV0LCAvKiogb2JqZWN0ICovIG9wdGlvbnMpIHtcbiAgICBsZXQgaW5CdWZmZXIgPSBudWxsO1xuXG4gICAgLy8gY3JlYXRlIG9iamVjdCBiYXNlZCBkZWZhdWx0IG9wdGlvbnMsIGFsbG93aW5nIHRoZW0gdG8gYmUgb3ZlcndyaXR0ZW5cbiAgICBjb25zdCBvcHRzID0gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKG51bGwpLCBkZWZhdWx0T3B0aW9ucyk7XG5cbiAgICAvLyB0ZXN0IGlucHV0IHZhcmlhYmxlXG4gICAgaWYgKGlucHV0ICYmIFwib2JqZWN0XCIgPT09IHR5cGVvZiBpbnB1dCkge1xuICAgICAgICAvLyBpZiB2YWx1ZSBpcyBub3QgYnVmZmVyIHdlIGFjY2VwdCBpdCB0byBiZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gICAgICAgIGlmICghKGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSkpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ob3B0cywgaW5wdXQpO1xuICAgICAgICAgICAgaW5wdXQgPSBvcHRzLmlucHV0ID8gb3B0cy5pbnB1dCA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmIChvcHRzLmlucHV0KSBkZWxldGUgb3B0cy5pbnB1dDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGlucHV0IGlzIGJ1ZmZlclxuICAgICAgICBpZiAoQnVmZmVyLmlzQnVmZmVyKGlucHV0KSkge1xuICAgICAgICAgICAgaW5CdWZmZXIgPSBpbnB1dDtcbiAgICAgICAgICAgIG9wdHMubWV0aG9kID0gVXRpbHMuQ29uc3RhbnRzLkJVRkZFUjtcbiAgICAgICAgICAgIGlucHV0ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYXNzaWduIG9wdGlvbnNcbiAgICBPYmplY3QuYXNzaWduKG9wdHMsIG9wdGlvbnMpO1xuXG4gICAgLy8gaW5zdGFuY2lhdGUgdXRpbHMgZmlsZXN5c3RlbVxuICAgIGNvbnN0IGZpbGV0b29scyA9IG5ldyBVdGlscyhvcHRzKTtcblxuICAgIGlmICh0eXBlb2Ygb3B0cy5kZWNvZGVyICE9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBvcHRzLmRlY29kZXIuZW5jb2RlICE9PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIG9wdHMuZGVjb2Rlci5kZWNvZGUgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBvcHRzLmRlY29kZXIgPSBVdGlscy5kZWNvZGVyO1xuICAgIH1cblxuICAgIC8vIGlmIGlucHV0IGlzIGZpbGUgbmFtZSB3ZSByZXRyaWV2ZSBpdHMgY29udGVudFxuICAgIGlmIChpbnB1dCAmJiBcInN0cmluZ1wiID09PSB0eXBlb2YgaW5wdXQpIHtcbiAgICAgICAgLy8gbG9hZCB6aXAgZmlsZVxuICAgICAgICBpZiAoZmlsZXRvb2xzLmZzLmV4aXN0c1N5bmMoaW5wdXQpKSB7XG4gICAgICAgICAgICBvcHRzLm1ldGhvZCA9IFV0aWxzLkNvbnN0YW50cy5GSUxFO1xuICAgICAgICAgICAgb3B0cy5maWxlbmFtZSA9IGlucHV0O1xuICAgICAgICAgICAgaW5CdWZmZXIgPSBmaWxldG9vbHMuZnMucmVhZEZpbGVTeW5jKGlucHV0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IFV0aWxzLkVycm9ycy5JTlZBTElEX0ZJTEVOQU1FKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjcmVhdGUgdmFyaWFibGVcbiAgICBjb25zdCBfemlwID0gbmV3IFppcEZpbGUoaW5CdWZmZXIsIG9wdHMpO1xuXG4gICAgY29uc3QgeyBjYW5vbmljYWwsIHNhbml0aXplLCB6aXBuYW1lZml4IH0gPSBVdGlscztcblxuICAgIGZ1bmN0aW9uIGdldEVudHJ5KC8qKk9iamVjdCovIGVudHJ5KSB7XG4gICAgICAgIGlmIChlbnRyeSAmJiBfemlwKSB7XG4gICAgICAgICAgICB2YXIgaXRlbTtcbiAgICAgICAgICAgIC8vIElmIGVudHJ5IHdhcyBnaXZlbiBhcyBhIGZpbGUgbmFtZVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSA9PT0gXCJzdHJpbmdcIikgaXRlbSA9IF96aXAuZ2V0RW50cnkocHRoLnBvc2l4Lm5vcm1hbGl6ZShlbnRyeSkpO1xuICAgICAgICAgICAgLy8gaWYgZW50cnkgd2FzIGdpdmVuIGFzIGEgWmlwRW50cnkgb2JqZWN0XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVudHJ5ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBlbnRyeS5lbnRyeU5hbWUgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGVudHJ5LmhlYWRlciAhPT0gXCJ1bmRlZmluZWRcIikgaXRlbSA9IF96aXAuZ2V0RW50cnkoZW50cnkuZW50cnlOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaXhQYXRoKHppcFBhdGgpIHtcbiAgICAgICAgY29uc3QgeyBqb2luLCBub3JtYWxpemUsIHNlcCB9ID0gcHRoLnBvc2l4O1xuICAgICAgICAvLyBjb252ZXJ0IHdpbmRvd3MgZmlsZSBzZXBhcmF0b3JzIGFuZCBub3JtYWxpemVcbiAgICAgICAgcmV0dXJuIGpvaW4oXCIuXCIsIG5vcm1hbGl6ZShzZXAgKyB6aXBQYXRoLnNwbGl0KFwiXFxcXFwiKS5qb2luKHNlcCkgKyBzZXApKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaWxlbmFtZUZpbHRlcihmaWx0ZXJmbikge1xuICAgICAgICBpZiAoZmlsdGVyZm4gaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgICAgIC8vIGlmIGZpbHRlciBpcyBSZWdFeHAgd3JhcCBpdFxuICAgICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAocngpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGZpbGVuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByeC50ZXN0KGZpbGVuYW1lKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkoZmlsdGVyZm4pO1xuICAgICAgICB9IGVsc2UgaWYgKFwiZnVuY3Rpb25cIiAhPT0gdHlwZW9mIGZpbHRlcmZuKSB7XG4gICAgICAgICAgICAvLyBpZiBmaWx0ZXIgaXMgbm90IGZ1bmN0aW9uIHdlIHdpbGwgcmVwbGFjZSBpdFxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpbHRlcmZuO1xuICAgIH1cblxuICAgIC8vIGtlZXAgbGFzdCBjaGFyYWN0ZXIgb24gZm9sZGVyc1xuICAgIGNvbnN0IHJlbGF0aXZlUGF0aCA9IChsb2NhbCwgZW50cnkpID0+IHtcbiAgICAgICAgbGV0IGxhc3RDaGFyID0gZW50cnkuc2xpY2UoLTEpO1xuICAgICAgICBsYXN0Q2hhciA9IGxhc3RDaGFyID09PSBmaWxldG9vbHMuc2VwID8gZmlsZXRvb2xzLnNlcCA6IFwiXCI7XG4gICAgICAgIHJldHVybiBwdGgucmVsYXRpdmUobG9jYWwsIGVudHJ5KSArIGxhc3RDaGFyO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogRXh0cmFjdHMgdGhlIGdpdmVuIGVudHJ5IGZyb20gdGhlIGFyY2hpdmUgYW5kIHJldHVybnMgdGhlIGNvbnRlbnQgYXMgYSBCdWZmZXIgb2JqZWN0XG4gICAgICAgICAqIEBwYXJhbSB7WmlwRW50cnl8c3RyaW5nfSBlbnRyeSBaaXBFbnRyeSBvYmplY3Qgb3IgU3RyaW5nIHdpdGggdGhlIGZ1bGwgcGF0aCBvZiB0aGUgZW50cnlcbiAgICAgICAgICogQHBhcmFtIHtCdWZmZXJ8c3RyaW5nfSBbcGFzc10gLSBwYXNzd29yZFxuICAgICAgICAgKiBAcmV0dXJuIEJ1ZmZlciBvciBOdWxsIGluIGNhc2Ugb2YgZXJyb3JcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRGaWxlOiBmdW5jdGlvbiAoZW50cnksIHBhc3MpIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gZ2V0RW50cnkoZW50cnkpO1xuICAgICAgICAgICAgcmV0dXJuIChpdGVtICYmIGl0ZW0uZ2V0RGF0YShwYXNzKSkgfHwgbnVsbDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBob3cgbWFueSBjaGlsZCBlbGVtZW50cyBoYXMgb24gZW50cnkgKGRpcmVjdG9yaWVzKSBvbiBmaWxlcyBpdCBpcyBhbHdheXMgMFxuICAgICAgICAgKiBAcGFyYW0ge1ppcEVudHJ5fHN0cmluZ30gZW50cnkgWmlwRW50cnkgb2JqZWN0IG9yIFN0cmluZyB3aXRoIHRoZSBmdWxsIHBhdGggb2YgdGhlIGVudHJ5XG4gICAgICAgICAqIEByZXR1cm5zIHtpbnRlZ2VyfVxuICAgICAgICAgKi9cbiAgICAgICAgY2hpbGRDb3VudDogZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gZ2V0RW50cnkoZW50cnkpO1xuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ppcC5nZXRDaGlsZENvdW50KGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBc3luY2hyb25vdXMgcmVhZEZpbGVcbiAgICAgICAgICogQHBhcmFtIHtaaXBFbnRyeXxzdHJpbmd9IGVudHJ5IFppcEVudHJ5IG9iamVjdCBvciBTdHJpbmcgd2l0aCB0aGUgZnVsbCBwYXRoIG9mIHRoZSBlbnRyeVxuICAgICAgICAgKiBAcGFyYW0ge2NhbGxiYWNrfSBjYWxsYmFja1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIEJ1ZmZlciBvciBOdWxsIGluIGNhc2Ugb2YgZXJyb3JcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRGaWxlQXN5bmM6IGZ1bmN0aW9uIChlbnRyeSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gZ2V0RW50cnkoZW50cnkpO1xuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpdGVtLmdldERhdGFBc3luYyhjYWxsYmFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIFwiZ2V0RW50cnkgZmFpbGVkIGZvcjpcIiArIGVudHJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRXh0cmFjdHMgdGhlIGdpdmVuIGVudHJ5IGZyb20gdGhlIGFyY2hpdmUgYW5kIHJldHVybnMgdGhlIGNvbnRlbnQgYXMgcGxhaW4gdGV4dCBpbiB0aGUgZ2l2ZW4gZW5jb2RpbmdcbiAgICAgICAgICogQHBhcmFtIHtaaXBFbnRyeXxzdHJpbmd9IGVudHJ5IC0gWmlwRW50cnkgb2JqZWN0IG9yIFN0cmluZyB3aXRoIHRoZSBmdWxsIHBhdGggb2YgdGhlIGVudHJ5XG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbmNvZGluZyAtIE9wdGlvbmFsLiBJZiBubyBlbmNvZGluZyBpcyBzcGVjaWZpZWQgdXRmOCBpcyB1c2VkXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4gU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICByZWFkQXNUZXh0OiBmdW5jdGlvbiAoZW50cnksIGVuY29kaW5nKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGdldEVudHJ5KGVudHJ5KTtcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBpdGVtLmdldERhdGEoKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS50b1N0cmluZyhlbmNvZGluZyB8fCBcInV0ZjhcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFzeW5jaHJvbm91cyByZWFkQXNUZXh0XG4gICAgICAgICAqIEBwYXJhbSB7WmlwRW50cnl8c3RyaW5nfSBlbnRyeSBaaXBFbnRyeSBvYmplY3Qgb3IgU3RyaW5nIHdpdGggdGhlIGZ1bGwgcGF0aCBvZiB0aGUgZW50cnlcbiAgICAgICAgICogQHBhcmFtIHtjYWxsYmFja30gY2FsbGJhY2tcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtlbmNvZGluZ10gLSBPcHRpb25hbC4gSWYgbm8gZW5jb2RpbmcgaXMgc3BlY2lmaWVkIHV0ZjggaXMgdXNlZFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgcmVhZEFzVGV4dEFzeW5jOiBmdW5jdGlvbiAoZW50cnksIGNhbGxiYWNrLCBlbmNvZGluZykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBnZXRFbnRyeShlbnRyeSk7XG4gICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0RGF0YUFzeW5jKGZ1bmN0aW9uIChkYXRhLCBlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhLnRvU3RyaW5nKGVuY29kaW5nIHx8IFwidXRmOFwiKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhcIlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIHRoZSBlbnRyeSBmcm9tIHRoZSBmaWxlIG9yIHRoZSBlbnRyeSBhbmQgYWxsIGl0J3MgbmVzdGVkIGRpcmVjdG9yaWVzIGFuZCBmaWxlcyBpZiB0aGUgZ2l2ZW4gZW50cnkgaXMgYSBkaXJlY3RvcnlcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtaaXBFbnRyeXxzdHJpbmd9IGVudHJ5XG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAgICAgKi9cbiAgICAgICAgZGVsZXRlRmlsZTogZnVuY3Rpb24gKGVudHJ5LCB3aXRoc3ViZm9sZGVycyA9IHRydWUpIHtcbiAgICAgICAgICAgIC8vIEBUT0RPOiB0ZXN0IGRlbGV0ZUZpbGVcbiAgICAgICAgICAgIHZhciBpdGVtID0gZ2V0RW50cnkoZW50cnkpO1xuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBfemlwLmRlbGV0ZUZpbGUoaXRlbS5lbnRyeU5hbWUsIHdpdGhzdWJmb2xkZXJzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIHRoZSBlbnRyeSBmcm9tIHRoZSBmaWxlIG9yIGRpcmVjdG9yeSB3aXRob3V0IGFmZmVjdGluZyBhbnkgbmVzdGVkIGVudHJpZXNcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtaaXBFbnRyeXxzdHJpbmd9IGVudHJ5XG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAgICAgKi9cbiAgICAgICAgZGVsZXRlRW50cnk6IGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgLy8gQFRPRE86IHRlc3QgZGVsZXRlRW50cnlcbiAgICAgICAgICAgIHZhciBpdGVtID0gZ2V0RW50cnkoZW50cnkpO1xuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBfemlwLmRlbGV0ZUVudHJ5KGl0ZW0uZW50cnlOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkcyBhIGNvbW1lbnQgdG8gdGhlIHppcC4gVGhlIHppcCBtdXN0IGJlIHJld3JpdHRlbiBhZnRlciBhZGRpbmcgdGhlIGNvbW1lbnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb21tZW50XG4gICAgICAgICAqL1xuICAgICAgICBhZGRaaXBDb21tZW50OiBmdW5jdGlvbiAoY29tbWVudCkge1xuICAgICAgICAgICAgLy8gQFRPRE86IHRlc3QgYWRkWmlwQ29tbWVudFxuICAgICAgICAgICAgX3ppcC5jb21tZW50ID0gY29tbWVudDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgemlwIGNvbW1lbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGdldFppcENvbW1lbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfemlwLmNvbW1lbnQgfHwgXCJcIjtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkcyBhIGNvbW1lbnQgdG8gYSBzcGVjaWZpZWQgemlwRW50cnkuIFRoZSB6aXAgbXVzdCBiZSByZXdyaXR0ZW4gYWZ0ZXIgYWRkaW5nIHRoZSBjb21tZW50XG4gICAgICAgICAqIFRoZSBjb21tZW50IGNhbm5vdCBleGNlZWQgNjU1MzUgY2hhcmFjdGVycyBpbiBsZW5ndGhcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtaaXBFbnRyeX0gZW50cnlcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbW1lbnRcbiAgICAgICAgICovXG4gICAgICAgIGFkZFppcEVudHJ5Q29tbWVudDogZnVuY3Rpb24gKGVudHJ5LCBjb21tZW50KSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGdldEVudHJ5KGVudHJ5KTtcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jb21tZW50ID0gY29tbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgY29tbWVudCBvZiB0aGUgc3BlY2lmaWVkIGVudHJ5XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7WmlwRW50cnl9IGVudHJ5XG4gICAgICAgICAqIEByZXR1cm4gU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBnZXRaaXBFbnRyeUNvbW1lbnQ6IGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBnZXRFbnRyeShlbnRyeSk7XG4gICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmNvbW1lbnQgfHwgXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVcGRhdGVzIHRoZSBjb250ZW50IG9mIGFuIGV4aXN0aW5nIGVudHJ5IGluc2lkZSB0aGUgYXJjaGl2ZS4gVGhlIHppcCBtdXN0IGJlIHJld3JpdHRlbiBhZnRlciB1cGRhdGluZyB0aGUgY29udGVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1ppcEVudHJ5fSBlbnRyeVxuICAgICAgICAgKiBAcGFyYW0ge0J1ZmZlcn0gY29udGVudFxuICAgICAgICAgKi9cbiAgICAgICAgdXBkYXRlRmlsZTogZnVuY3Rpb24gKGVudHJ5LCBjb250ZW50KSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGdldEVudHJ5KGVudHJ5KTtcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5zZXREYXRhKGNvbnRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGRzIGEgZmlsZSBmcm9tIHRoZSBkaXNrIHRvIHRoZSBhcmNoaXZlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbFBhdGggRmlsZSB0byBhZGQgdG8gemlwXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbemlwUGF0aF0gT3B0aW9uYWwgcGF0aCBpbnNpZGUgdGhlIHppcFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3ppcE5hbWVdIE9wdGlvbmFsIG5hbWUgZm9yIHRoZSBmaWxlXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbY29tbWVudF0gT3B0aW9uYWwgZmlsZSBjb21tZW50XG4gICAgICAgICAqL1xuICAgICAgICBhZGRMb2NhbEZpbGU6IGZ1bmN0aW9uIChsb2NhbFBhdGgsIHppcFBhdGgsIHppcE5hbWUsIGNvbW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChmaWxldG9vbHMuZnMuZXhpc3RzU3luYyhsb2NhbFBhdGgpKSB7XG4gICAgICAgICAgICAgICAgLy8gZml4IFppcFBhdGhcbiAgICAgICAgICAgICAgICB6aXBQYXRoID0gemlwUGF0aCA/IGZpeFBhdGgoemlwUGF0aCkgOiBcIlwiO1xuXG4gICAgICAgICAgICAgICAgLy8gcCAtIGxvY2FsIGZpbGUgbmFtZVxuICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBwdGgud2luMzIuYmFzZW5hbWUocHRoLndpbjMyLm5vcm1hbGl6ZShsb2NhbFBhdGgpKTtcblxuICAgICAgICAgICAgICAgIC8vIGFkZCBmaWxlIG5hbWUgaW50byB6aXBwYXRoXG4gICAgICAgICAgICAgICAgemlwUGF0aCArPSB6aXBOYW1lID8gemlwTmFtZSA6IHA7XG5cbiAgICAgICAgICAgICAgICAvLyByZWFkIGZpbGUgYXR0cmlidXRlc1xuICAgICAgICAgICAgICAgIGNvbnN0IF9hdHRyID0gZmlsZXRvb2xzLmZzLnN0YXRTeW5jKGxvY2FsUGF0aCk7XG5cbiAgICAgICAgICAgICAgICAvLyBnZXQgZmlsZSBjb250ZW50XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IF9hdHRyLmlzRmlsZSgpID8gZmlsZXRvb2xzLmZzLnJlYWRGaWxlU3luYyhsb2NhbFBhdGgpIDogQnVmZmVyLmFsbG9jKDApO1xuXG4gICAgICAgICAgICAgICAgLy8gaWYgZm9sZGVyXG4gICAgICAgICAgICAgICAgaWYgKF9hdHRyLmlzRGlyZWN0b3J5KCkpIHppcFBhdGggKz0gZmlsZXRvb2xzLnNlcDtcblxuICAgICAgICAgICAgICAgIC8vIGFkZCBmaWxlIGludG8gemlwIGZpbGVcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEZpbGUoemlwUGF0aCwgZGF0YSwgY29tbWVudCwgX2F0dHIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBVdGlscy5FcnJvcnMuRklMRV9OT1RfRk9VTkQobG9jYWxQYXRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGJhY2sgZm9yIHNob3dpbmcgaWYgZXZlcnl0aGluZyB3YXMgZG9uZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQGNhbGxiYWNrIGRvbmVDYWxsYmFja1xuICAgICAgICAgKiBAcGFyYW0ge0Vycm9yfSBlcnIgLSBFcnJvciBvYmplY3RcbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBkb25lIC0gd2FzIHJlcXVlc3QgZnVsbHkgY29tcGxldGVkXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGRzIGEgZmlsZSBmcm9tIHRoZSBkaXNrIHRvIHRoZSBhcmNoaXZlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7KG9iamVjdHxzdHJpbmcpfSBvcHRpb25zIC0gb3B0aW9ucyBvYmplY3QsIGlmIGl0IGlzIHN0cmluZyBpdCB1cyB1c2VkIGFzIGxvY2FsUGF0aC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubG9jYWxQYXRoIC0gTG9jYWwgcGF0aCB0byB0aGUgZmlsZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNvbW1lbnRdIC0gT3B0aW9uYWwgZmlsZSBjb21tZW50LlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuemlwUGF0aF0gLSBPcHRpb25hbCBwYXRoIGluc2lkZSB0aGUgemlwXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy56aXBOYW1lXSAtIE9wdGlvbmFsIG5hbWUgZm9yIHRoZSBmaWxlXG4gICAgICAgICAqIEBwYXJhbSB7ZG9uZUNhbGxiYWNrfSBjYWxsYmFjayAtIFRoZSBjYWxsYmFjayB0aGF0IGhhbmRsZXMgdGhlIHJlc3BvbnNlLlxuICAgICAgICAgKi9cbiAgICAgICAgYWRkTG9jYWxGaWxlQXN5bmM6IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHR5cGVvZiBvcHRpb25zID09PSBcIm9iamVjdFwiID8gb3B0aW9ucyA6IHsgbG9jYWxQYXRoOiBvcHRpb25zIH07XG4gICAgICAgICAgICBjb25zdCBsb2NhbFBhdGggPSBwdGgucmVzb2x2ZShvcHRpb25zLmxvY2FsUGF0aCk7XG4gICAgICAgICAgICBjb25zdCB7IGNvbW1lbnQgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBsZXQgeyB6aXBQYXRoLCB6aXBOYW1lIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZpbGV0b29scy5mcy5zdGF0KGxvY2FsUGF0aCwgZnVuY3Rpb24gKGVyciwgc3RhdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgLy8gZml4IFppcFBhdGhcbiAgICAgICAgICAgICAgICB6aXBQYXRoID0gemlwUGF0aCA/IGZpeFBhdGgoemlwUGF0aCkgOiBcIlwiO1xuICAgICAgICAgICAgICAgIC8vIHAgLSBsb2NhbCBmaWxlIG5hbWVcbiAgICAgICAgICAgICAgICBjb25zdCBwID0gcHRoLndpbjMyLmJhc2VuYW1lKHB0aC53aW4zMi5ub3JtYWxpemUobG9jYWxQYXRoKSk7XG4gICAgICAgICAgICAgICAgLy8gYWRkIGZpbGUgbmFtZSBpbnRvIHppcHBhdGhcbiAgICAgICAgICAgICAgICB6aXBQYXRoICs9IHppcE5hbWUgPyB6aXBOYW1lIDogcDtcblxuICAgICAgICAgICAgICAgIGlmIChzdGF0cy5pc0ZpbGUoKSkge1xuICAgICAgICAgICAgICAgICAgICBmaWxldG9vbHMuZnMucmVhZEZpbGUobG9jYWxQYXRoLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFkZEZpbGUoemlwUGF0aCwgZGF0YSwgY29tbWVudCwgc3RhdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldEltbWVkaWF0ZShjYWxsYmFjaywgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0cy5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHppcFBhdGggKz0gZmlsZXRvb2xzLnNlcDtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGRGaWxlKHppcFBhdGgsIEJ1ZmZlci5hbGxvYygwKSwgY29tbWVudCwgc3RhdHMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0SW1tZWRpYXRlKGNhbGxiYWNrLCB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGRzIGEgbG9jYWwgZGlyZWN0b3J5IGFuZCBhbGwgaXRzIG5lc3RlZCBmaWxlcyBhbmQgZGlyZWN0b3JpZXMgdG8gdGhlIGFyY2hpdmVcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGxvY2FsUGF0aCAtIGxvY2FsIHBhdGggdG8gdGhlIGZvbGRlclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3ppcFBhdGhdIC0gb3B0aW9uYWwgcGF0aCBpbnNpZGUgemlwXG4gICAgICAgICAqIEBwYXJhbSB7KFJlZ0V4cHxmdW5jdGlvbil9IFtmaWx0ZXJdIC0gb3B0aW9uYWwgUmVnRXhwIG9yIEZ1bmN0aW9uIGlmIGZpbGVzIG1hdGNoIHdpbGwgYmUgaW5jbHVkZWQuXG4gICAgICAgICAqL1xuICAgICAgICBhZGRMb2NhbEZvbGRlcjogZnVuY3Rpb24gKGxvY2FsUGF0aCwgemlwUGF0aCwgZmlsdGVyKSB7XG4gICAgICAgICAgICAvLyBQcmVwYXJlIGZpbHRlclxuICAgICAgICAgICAgZmlsdGVyID0gZmlsZW5hbWVGaWx0ZXIoZmlsdGVyKTtcblxuICAgICAgICAgICAgLy8gZml4IFppcFBhdGhcbiAgICAgICAgICAgIHppcFBhdGggPSB6aXBQYXRoID8gZml4UGF0aCh6aXBQYXRoKSA6IFwiXCI7XG5cbiAgICAgICAgICAgIC8vIG5vcm1hbGl6ZSB0aGUgcGF0aCBmaXJzdFxuICAgICAgICAgICAgbG9jYWxQYXRoID0gcHRoLm5vcm1hbGl6ZShsb2NhbFBhdGgpO1xuXG4gICAgICAgICAgICBpZiAoZmlsZXRvb2xzLmZzLmV4aXN0c1N5bmMobG9jYWxQYXRoKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gZmlsZXRvb2xzLmZpbmRGaWxlcyhsb2NhbFBhdGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGZpbGVwYXRoIG9mIGl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwID0gcHRoLmpvaW4oemlwUGF0aCwgcmVsYXRpdmVQYXRoKGxvY2FsUGF0aCwgZmlsZXBhdGgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIocCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFkZExvY2FsRmlsZShmaWxlcGF0aCwgcHRoLmRpcm5hbWUocCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBVdGlscy5FcnJvcnMuRklMRV9OT1RfRk9VTkQobG9jYWxQYXRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQXN5bmNocm9ub3VzIGFkZExvY2FsRm9sZGVyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbFBhdGhcbiAgICAgICAgICogQHBhcmFtIHtjYWxsYmFja30gY2FsbGJhY2tcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt6aXBQYXRoXSBvcHRpb25hbCBwYXRoIGluc2lkZSB6aXBcbiAgICAgICAgICogQHBhcmFtIHtSZWdFeHB8ZnVuY3Rpb259IFtmaWx0ZXJdIG9wdGlvbmFsIFJlZ0V4cCBvciBGdW5jdGlvbiBpZiBmaWxlcyBtYXRjaCB3aWxsXG4gICAgICAgICAqICAgICAgICAgICAgICAgYmUgaW5jbHVkZWQuXG4gICAgICAgICAqL1xuICAgICAgICBhZGRMb2NhbEZvbGRlckFzeW5jOiBmdW5jdGlvbiAobG9jYWxQYXRoLCBjYWxsYmFjaywgemlwUGF0aCwgZmlsdGVyKSB7XG4gICAgICAgICAgICAvLyBQcmVwYXJlIGZpbHRlclxuICAgICAgICAgICAgZmlsdGVyID0gZmlsZW5hbWVGaWx0ZXIoZmlsdGVyKTtcblxuICAgICAgICAgICAgLy8gZml4IFppcFBhdGhcbiAgICAgICAgICAgIHppcFBhdGggPSB6aXBQYXRoID8gZml4UGF0aCh6aXBQYXRoKSA6IFwiXCI7XG5cbiAgICAgICAgICAgIC8vIG5vcm1hbGl6ZSB0aGUgcGF0aCBmaXJzdFxuICAgICAgICAgICAgbG9jYWxQYXRoID0gcHRoLm5vcm1hbGl6ZShsb2NhbFBhdGgpO1xuXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBmaWxldG9vbHMuZnMub3Blbihsb2NhbFBhdGgsIFwiclwiLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVyciAmJiBlcnIuY29kZSA9PT0gXCJFTk9FTlRcIikge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh1bmRlZmluZWQsIFV0aWxzLkVycm9ycy5GSUxFX05PVF9GT1VORChsb2NhbFBhdGgpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh1bmRlZmluZWQsIGVycik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW1zID0gZmlsZXRvb2xzLmZpbmRGaWxlcyhsb2NhbFBhdGgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IC0xO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCBpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmlsZXBhdGggPSBpdGVtc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IHJlbGF0aXZlUGF0aChsb2NhbFBhdGgsIGZpbGVwYXRoKS5zcGxpdChcIlxcXFxcIikuam9pbihcIi9cIik7IC8vd2luZG93cyBmaXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwID0gcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubm9ybWFsaXplKFwiTkZEXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvW15cXHgyMC1cXHg3RV0vZywgXCJcIik7IC8vIGFjY2VudCBmaXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsdGVyKHApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGV0b29scy5mcy5zdGF0KGZpbGVwYXRoLCBmdW5jdGlvbiAoZXIwLCBzdGF0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVyMCkgY2FsbGJhY2sodW5kZWZpbmVkLCBlcjApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRzLmlzRmlsZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXRvb2xzLmZzLnJlYWRGaWxlKGZpbGVwYXRoLCBmdW5jdGlvbiAoZXIxLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcjEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHVuZGVmaW5lZCwgZXIxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWRkRmlsZSh6aXBQYXRoICsgcCwgZGF0YSwgXCJcIiwgc3RhdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWRkRmlsZSh6aXBQYXRoICsgcCArIFwiL1wiLCBCdWZmZXIuYWxsb2MoMCksIFwiXCIsIHN0YXRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRydWUsIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGRzIGEgbG9jYWwgZGlyZWN0b3J5IGFuZCBhbGwgaXRzIG5lc3RlZCBmaWxlcyBhbmQgZGlyZWN0b3JpZXMgdG8gdGhlIGFyY2hpdmVcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtvYmplY3QgfCBzdHJpbmd9IG9wdGlvbnMgLSBvcHRpb25zIG9iamVjdCwgaWYgaXQgaXMgc3RyaW5nIGl0IHVzIHVzZWQgYXMgbG9jYWxQYXRoLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5sb2NhbFBhdGggLSBMb2NhbCBwYXRoIHRvIHRoZSBmb2xkZXIuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy56aXBQYXRoXSAtIG9wdGlvbmFsIHBhdGggaW5zaWRlIHppcC5cbiAgICAgICAgICogQHBhcmFtIHtSZWdFeHB8ZnVuY3Rpb259IFtvcHRpb25zLmZpbHRlcl0gLSBvcHRpb25hbCBSZWdFeHAgb3IgRnVuY3Rpb24gaWYgZmlsZXMgbWF0Y2ggd2lsbCBiZSBpbmNsdWRlZC5cbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbnxzdHJpbmd9IFtvcHRpb25zLm5hbWVmaXhdIC0gb3B0aW9uYWwgZnVuY3Rpb24gdG8gaGVscCBmaXggZmlsZW5hbWVcbiAgICAgICAgICogQHBhcmFtIHtkb25lQ2FsbGJhY2t9IGNhbGxiYWNrIC0gVGhlIGNhbGxiYWNrIHRoYXQgaGFuZGxlcyB0aGUgcmVzcG9uc2UuXG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBhZGRMb2NhbEZvbGRlckFzeW5jMjogZnVuY3Rpb24gKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMgOiB7IGxvY2FsUGF0aDogb3B0aW9ucyB9O1xuICAgICAgICAgICAgbG9jYWxQYXRoID0gcHRoLnJlc29sdmUoZml4UGF0aChvcHRpb25zLmxvY2FsUGF0aCkpO1xuICAgICAgICAgICAgbGV0IHsgemlwUGF0aCwgZmlsdGVyLCBuYW1lZml4IH0gPSBvcHRpb25zO1xuXG4gICAgICAgICAgICBpZiAoZmlsdGVyIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyID0gKGZ1bmN0aW9uIChyeCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGZpbGVuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcngudGVzdChmaWxlbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSkoZmlsdGVyKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXCJmdW5jdGlvblwiICE9PSB0eXBlb2YgZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBmaXggWmlwUGF0aFxuICAgICAgICAgICAgemlwUGF0aCA9IHppcFBhdGggPyBmaXhQYXRoKHppcFBhdGgpIDogXCJcIjtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgTmFtZWZpeCBmdW5jdGlvblxuICAgICAgICAgICAgaWYgKG5hbWVmaXggPT0gXCJsYXRpbjFcIikge1xuICAgICAgICAgICAgICAgIG5hbWVmaXggPSAoc3RyKSA9PlxuICAgICAgICAgICAgICAgICAgICBzdHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ub3JtYWxpemUoXCJORkRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1teXFx4MjAtXFx4N0VdL2csIFwiXCIpOyAvLyBhY2NlbnQgZml4IChsYXRpbjEgY2hhcmFjZXJzIG9ubHkpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgbmFtZWZpeCAhPT0gXCJmdW5jdGlvblwiKSBuYW1lZml4ID0gKHN0cikgPT4gc3RyO1xuXG4gICAgICAgICAgICAvLyBpbnRlcm5hbCwgY3JlYXRlIHJlbGF0aXZlIHBhdGggKyBmaXggdGhlIG5hbWVcbiAgICAgICAgICAgIGNvbnN0IHJlbFBhdGhGaXggPSAoZW50cnkpID0+IHB0aC5qb2luKHppcFBhdGgsIG5hbWVmaXgocmVsYXRpdmVQYXRoKGxvY2FsUGF0aCwgZW50cnkpKSk7XG4gICAgICAgICAgICBjb25zdCBmaWxlTmFtZUZpeCA9IChlbnRyeSkgPT4gcHRoLndpbjMyLmJhc2VuYW1lKHB0aC53aW4zMi5ub3JtYWxpemUobmFtZWZpeChlbnRyeSkpKTtcblxuICAgICAgICAgICAgZmlsZXRvb2xzLmZzLm9wZW4obG9jYWxQYXRoLCBcInJcIiwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIgJiYgZXJyLmNvZGUgPT09IFwiRU5PRU5UXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodW5kZWZpbmVkLCBVdGlscy5FcnJvcnMuRklMRV9OT1RfRk9VTkQobG9jYWxQYXRoKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodW5kZWZpbmVkLCBlcnIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGV0b29scy5maW5kRmlsZXNBc3luYyhsb2NhbFBhdGgsIGZ1bmN0aW9uIChlcnIsIGZpbGVFbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVFbnRyaWVzID0gZmlsZUVudHJpZXMuZmlsdGVyKChkaXIpID0+IGZpbHRlcihyZWxQYXRoRml4KGRpcikpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZmlsZUVudHJpZXMubGVuZ3RoKSBjYWxsYmFjayh1bmRlZmluZWQsIGZhbHNlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW1tZWRpYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVFbnRyaWVzLnJldmVyc2UoKS5yZWR1Y2UoZnVuY3Rpb24gKG5leHQsIGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXJyLCBkb25lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyIHx8IGRvbmUgPT09IGZhbHNlKSByZXR1cm4gc2V0SW1tZWRpYXRlKG5leHQsIGVyciwgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFkZExvY2FsRmlsZUFzeW5jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxQYXRoOiBlbnRyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgemlwUGF0aDogcHRoLmRpcm5hbWUocmVsUGF0aEZpeChlbnRyeSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6aXBOYW1lOiBmaWxlTmFtZUZpeChlbnRyeSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgY2FsbGJhY2spXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkcyBhIGxvY2FsIGRpcmVjdG9yeSBhbmQgYWxsIGl0cyBuZXN0ZWQgZmlsZXMgYW5kIGRpcmVjdG9yaWVzIHRvIHRoZSBhcmNoaXZlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbFBhdGggLSBwYXRoIHdoZXJlIGZpbGVzIHdpbGwgYmUgZXh0cmFjdGVkXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyAtIG9wdGlvbmFsIHByb3BlcnRpZXNcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy56aXBQYXRoXSAtIG9wdGlvbmFsIHBhdGggaW5zaWRlIHppcFxuICAgICAgICAgKiBAcGFyYW0ge1JlZ0V4cHxmdW5jdGlvbn0gW3Byb3BzLmZpbHRlcl0gLSBvcHRpb25hbCBSZWdFeHAgb3IgRnVuY3Rpb24gaWYgZmlsZXMgbWF0Y2ggd2lsbCBiZSBpbmNsdWRlZC5cbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbnxzdHJpbmd9IFtwcm9wcy5uYW1lZml4XSAtIG9wdGlvbmFsIGZ1bmN0aW9uIHRvIGhlbHAgZml4IGZpbGVuYW1lXG4gICAgICAgICAqL1xuICAgICAgICBhZGRMb2NhbEZvbGRlclByb21pc2U6IGZ1bmN0aW9uIChsb2NhbFBhdGgsIHByb3BzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkTG9jYWxGb2xkZXJBc3luYzIoT2JqZWN0LmFzc2lnbih7IGxvY2FsUGF0aCB9LCBwcm9wcyksIChlcnIsIGRvbmUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb25lKSByZXNvbHZlKHRoaXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsbG93cyB5b3UgdG8gY3JlYXRlIGEgZW50cnkgKGZpbGUgb3IgZGlyZWN0b3J5KSBpbiB0aGUgemlwIGZpbGUuXG4gICAgICAgICAqIElmIHlvdSB3YW50IHRvIGNyZWF0ZSBhIGRpcmVjdG9yeSB0aGUgZW50cnlOYW1lIG11c3QgZW5kIGluIC8gYW5kIGEgbnVsbCBidWZmZXIgc2hvdWxkIGJlIHByb3ZpZGVkLlxuICAgICAgICAgKiBDb21tZW50IGFuZCBhdHRyaWJ1dGVzIGFyZSBvcHRpb25hbFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZW50cnlOYW1lXG4gICAgICAgICAqIEBwYXJhbSB7QnVmZmVyIHwgc3RyaW5nfSBjb250ZW50IC0gZmlsZSBjb250ZW50IGFzIGJ1ZmZlciBvciB1dGY4IGNvZGVkIHN0cmluZ1xuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2NvbW1lbnRdIC0gZmlsZSBjb21tZW50XG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyIHwgb2JqZWN0fSBbYXR0cl0gLSBudW1iZXIgYXMgdW5peCBmaWxlIHBlcm1pc3Npb25zLCBvYmplY3QgYXMgZmlsZXN5c3RlbSBTdGF0cyBvYmplY3RcbiAgICAgICAgICovXG4gICAgICAgIGFkZEZpbGU6IGZ1bmN0aW9uIChlbnRyeU5hbWUsIGNvbnRlbnQsIGNvbW1lbnQsIGF0dHIpIHtcbiAgICAgICAgICAgIGVudHJ5TmFtZSA9IHppcG5hbWVmaXgoZW50cnlOYW1lKTtcbiAgICAgICAgICAgIGxldCBlbnRyeSA9IGdldEVudHJ5KGVudHJ5TmFtZSk7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGUgPSBlbnRyeSAhPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBwcmVwYXJlIG5ldyBlbnRyeVxuICAgICAgICAgICAgaWYgKCF1cGRhdGUpIHtcbiAgICAgICAgICAgICAgICBlbnRyeSA9IG5ldyBaaXBFbnRyeShvcHRzKTtcbiAgICAgICAgICAgICAgICBlbnRyeS5lbnRyeU5hbWUgPSBlbnRyeU5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbnRyeS5jb21tZW50ID0gY29tbWVudCB8fCBcIlwiO1xuXG4gICAgICAgICAgICBjb25zdCBpc1N0YXQgPSBcIm9iamVjdFwiID09PSB0eXBlb2YgYXR0ciAmJiBhdHRyIGluc3RhbmNlb2YgZmlsZXRvb2xzLmZzLlN0YXRzO1xuXG4gICAgICAgICAgICAvLyBsYXN0IG1vZGlmaWNhdGlvbiB0aW1lIGZyb20gZmlsZSBzdGF0c1xuICAgICAgICAgICAgaWYgKGlzU3RhdCkge1xuICAgICAgICAgICAgICAgIGVudHJ5LmhlYWRlci50aW1lID0gYXR0ci5tdGltZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2V0IGZpbGUgYXR0cmlidXRlXG4gICAgICAgICAgICB2YXIgZmlsZWF0dHIgPSBlbnRyeS5pc0RpcmVjdG9yeSA/IDB4MTAgOiAwOyAvLyAoTVMtRE9TIGRpcmVjdG9yeSBmbGFnKVxuXG4gICAgICAgICAgICAvLyBleHRlbmRlZCBhdHRyaWJ1dGVzIGZpZWxkIGZvciBVbml4XG4gICAgICAgICAgICAvLyBzZXQgZmlsZSB0eXBlIGVpdGhlciBTX0lGRElSIC8gU19JRlJFR1xuICAgICAgICAgICAgbGV0IHVuaXggPSBlbnRyeS5pc0RpcmVjdG9yeSA/IDB4NDAwMCA6IDB4ODAwMDtcblxuICAgICAgICAgICAgaWYgKGlzU3RhdCkge1xuICAgICAgICAgICAgICAgIC8vIEZpbGUgYXR0cmlidXRlcyBmcm9tIGZpbGUgc3RhdHNcbiAgICAgICAgICAgICAgICB1bml4IHw9IDB4ZmZmICYgYXR0ci5tb2RlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChcIm51bWJlclwiID09PSB0eXBlb2YgYXR0cikge1xuICAgICAgICAgICAgICAgIC8vIGF0dHIgZnJvbSBnaXZlbiBhdHRyIHZhbHVlc1xuICAgICAgICAgICAgICAgIHVuaXggfD0gMHhmZmYgJiBhdHRyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBEZWZhdWx0IHZhbHVlczpcbiAgICAgICAgICAgICAgICB1bml4IHw9IGVudHJ5LmlzRGlyZWN0b3J5ID8gMG83NTUgOiAwbzY0NDsgLy8gcGVybWlzc2lvbnMgKGRyd3hyLXhyLXgpIG9yICgtci13ci0tci0tKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmaWxlYXR0ciA9IChmaWxlYXR0ciB8ICh1bml4IDw8IDE2KSkgPj4+IDA7IC8vIGFkZCBhdHRyaWJ1dGVzXG5cbiAgICAgICAgICAgIGVudHJ5LmF0dHIgPSBmaWxlYXR0cjtcblxuICAgICAgICAgICAgZW50cnkuc2V0RGF0YShjb250ZW50KTtcbiAgICAgICAgICAgIGlmICghdXBkYXRlKSBfemlwLnNldEVudHJ5KGVudHJ5KTtcblxuICAgICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIFppcEVudHJ5IG9iamVjdHMgcmVwcmVzZW50aW5nIHRoZSBmaWxlcyBhbmQgZm9sZGVycyBpbnNpZGUgdGhlIGFyY2hpdmVcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtwYXNzd29yZF1cbiAgICAgICAgICogQHJldHVybnMgQXJyYXlcbiAgICAgICAgICovXG4gICAgICAgIGdldEVudHJpZXM6IGZ1bmN0aW9uIChwYXNzd29yZCkge1xuICAgICAgICAgICAgX3ppcC5wYXNzd29yZCA9IHBhc3N3b3JkO1xuICAgICAgICAgICAgcmV0dXJuIF96aXAgPyBfemlwLmVudHJpZXMgOiBbXTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIFppcEVudHJ5IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIGZpbGUgb3IgZm9sZGVyIHNwZWNpZmllZCBieSBgYG5hbWVgYC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgICAgICogQHJldHVybiBaaXBFbnRyeVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0RW50cnk6IGZ1bmN0aW9uICgvKipTdHJpbmcqLyBuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0RW50cnkobmFtZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0RW50cnlDb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF96aXAuZ2V0RW50cnlDb3VudCgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIF96aXAuZm9yRWFjaChjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV4dHJhY3RzIHRoZSBnaXZlbiBlbnRyeSB0byB0aGUgZ2l2ZW4gdGFyZ2V0UGF0aFxuICAgICAgICAgKiBJZiB0aGUgZW50cnkgaXMgYSBkaXJlY3RvcnkgaW5zaWRlIHRoZSBhcmNoaXZlLCB0aGUgZW50aXJlIGRpcmVjdG9yeSBhbmQgaXQncyBzdWJkaXJlY3RvcmllcyB3aWxsIGJlIGV4dHJhY3RlZFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ3xaaXBFbnRyeX0gZW50cnkgLSBaaXBFbnRyeSBvYmplY3Qgb3IgU3RyaW5nIHdpdGggdGhlIGZ1bGwgcGF0aCBvZiB0aGUgZW50cnlcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHRhcmdldFBhdGggLSBUYXJnZXQgZm9sZGVyIHdoZXJlIHRvIHdyaXRlIHRoZSBmaWxlXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW21haW50YWluRW50cnlQYXRoPXRydWVdIC0gSWYgbWFpbnRhaW5FbnRyeVBhdGggaXMgdHJ1ZSBhbmQgdGhlIGVudHJ5IGlzIGluc2lkZSBhIGZvbGRlciwgdGhlIGVudHJ5IGZvbGRlciB3aWxsIGJlIGNyZWF0ZWQgaW4gdGFyZ2V0UGF0aCBhcyB3ZWxsLiBEZWZhdWx0IGlzIFRSVUVcbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBbb3ZlcndyaXRlPWZhbHNlXSAtIElmIHRoZSBmaWxlIGFscmVhZHkgZXhpc3RzIGF0IHRoZSB0YXJnZXQgcGF0aCwgdGhlIGZpbGUgd2lsbCBiZSBvdmVyd3JpdGVuIGlmIHRoaXMgaXMgdHJ1ZS5cbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBba2VlcE9yaWdpbmFsUGVybWlzc2lvbj1mYWxzZV0gLSBUaGUgZmlsZSB3aWxsIGJlIHNldCBhcyB0aGUgcGVybWlzc2lvbiBmcm9tIHRoZSBlbnRyeSBpZiB0aGlzIGlzIHRydWUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3V0RmlsZU5hbWVdIC0gU3RyaW5nIElmIHNldCB3aWxsIG92ZXJyaWRlIHRoZSBmaWxlbmFtZSBvZiB0aGUgZXh0cmFjdGVkIGZpbGUgKE9ubHkgd29ya3MgaWYgdGhlIGVudHJ5IGlzIGEgZmlsZSlcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiBCb29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBleHRyYWN0RW50cnlUbzogZnVuY3Rpb24gKGVudHJ5LCB0YXJnZXRQYXRoLCBtYWludGFpbkVudHJ5UGF0aCwgb3ZlcndyaXRlLCBrZWVwT3JpZ2luYWxQZXJtaXNzaW9uLCBvdXRGaWxlTmFtZSkge1xuICAgICAgICAgICAgb3ZlcndyaXRlID0gZ2V0X0Jvb2woZmFsc2UsIG92ZXJ3cml0ZSk7XG4gICAgICAgICAgICBrZWVwT3JpZ2luYWxQZXJtaXNzaW9uID0gZ2V0X0Jvb2woZmFsc2UsIGtlZXBPcmlnaW5hbFBlcm1pc3Npb24pO1xuICAgICAgICAgICAgbWFpbnRhaW5FbnRyeVBhdGggPSBnZXRfQm9vbCh0cnVlLCBtYWludGFpbkVudHJ5UGF0aCk7XG4gICAgICAgICAgICBvdXRGaWxlTmFtZSA9IGdldF9TdHIoa2VlcE9yaWdpbmFsUGVybWlzc2lvbiwgb3V0RmlsZU5hbWUpO1xuXG4gICAgICAgICAgICB2YXIgaXRlbSA9IGdldEVudHJ5KGVudHJ5KTtcbiAgICAgICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgICAgIHRocm93IFV0aWxzLkVycm9ycy5OT19FTlRSWSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgZW50cnlOYW1lID0gY2Fub25pY2FsKGl0ZW0uZW50cnlOYW1lKTtcblxuICAgICAgICAgICAgdmFyIHRhcmdldCA9IHNhbml0aXplKHRhcmdldFBhdGgsIG91dEZpbGVOYW1lICYmICFpdGVtLmlzRGlyZWN0b3J5ID8gb3V0RmlsZU5hbWUgOiBtYWludGFpbkVudHJ5UGF0aCA/IGVudHJ5TmFtZSA6IHB0aC5iYXNlbmFtZShlbnRyeU5hbWUpKTtcblxuICAgICAgICAgICAgaWYgKGl0ZW0uaXNEaXJlY3RvcnkpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSBfemlwLmdldEVudHJ5Q2hpbGRyZW4oaXRlbSk7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLmlzRGlyZWN0b3J5KSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250ZW50ID0gY2hpbGQuZ2V0RGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFV0aWxzLkVycm9ycy5DQU5UX0VYVFJBQ1RfRklMRSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBuYW1lID0gY2Fub25pY2FsKGNoaWxkLmVudHJ5TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGlsZE5hbWUgPSBzYW5pdGl6ZSh0YXJnZXRQYXRoLCBtYWludGFpbkVudHJ5UGF0aCA/IG5hbWUgOiBwdGguYmFzZW5hbWUobmFtZSkpO1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgcmV2ZXJzZSBvcGVyYXRpb24gZm9yIGF0dHIgZGVwZW5kIG9uIG1ldGhvZCBhZGRGaWxlKClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZUF0dHIgPSBrZWVwT3JpZ2luYWxQZXJtaXNzaW9uID8gY2hpbGQuaGVhZGVyLmZpbGVBdHRyIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICBmaWxldG9vbHMud3JpdGVGaWxlVG8oY2hpbGROYW1lLCBjb250ZW50LCBvdmVyd3JpdGUsIGZpbGVBdHRyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBpdGVtLmdldERhdGEoX3ppcC5wYXNzd29yZCk7XG4gICAgICAgICAgICBpZiAoIWNvbnRlbnQpIHRocm93IFV0aWxzLkVycm9ycy5DQU5UX0VYVFJBQ1RfRklMRSgpO1xuXG4gICAgICAgICAgICBpZiAoZmlsZXRvb2xzLmZzLmV4aXN0c1N5bmModGFyZ2V0KSAmJiAhb3ZlcndyaXRlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVXRpbHMuRXJyb3JzLkNBTlRfT1ZFUlJJREUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRoZSByZXZlcnNlIG9wZXJhdGlvbiBmb3IgYXR0ciBkZXBlbmQgb24gbWV0aG9kIGFkZEZpbGUoKVxuICAgICAgICAgICAgY29uc3QgZmlsZUF0dHIgPSBrZWVwT3JpZ2luYWxQZXJtaXNzaW9uID8gZW50cnkuaGVhZGVyLmZpbGVBdHRyIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgZmlsZXRvb2xzLndyaXRlRmlsZVRvKHRhcmdldCwgY29udGVudCwgb3ZlcndyaXRlLCBmaWxlQXR0cik7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUZXN0IHRoZSBhcmNoaXZlXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbcGFzc11cbiAgICAgICAgICovXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uIChwYXNzKSB7XG4gICAgICAgICAgICBpZiAoIV96aXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAodmFyIGVudHJ5IGluIF96aXAuZW50cmllcykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0RpcmVjdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBfemlwLmVudHJpZXNbZW50cnldLmdldERhdGEocGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRXh0cmFjdHMgdGhlIGVudGlyZSBhcmNoaXZlIHRvIHRoZSBnaXZlbiBsb2NhdGlvblxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGFyZ2V0UGF0aCBUYXJnZXQgbG9jYXRpb25cbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBbb3ZlcndyaXRlPWZhbHNlXSBJZiB0aGUgZmlsZSBhbHJlYWR5IGV4aXN0cyBhdCB0aGUgdGFyZ2V0IHBhdGgsIHRoZSBmaWxlIHdpbGwgYmUgb3ZlcndyaXRlbiBpZiB0aGlzIGlzIHRydWUuXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgRGVmYXVsdCBpcyBGQUxTRVxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtrZWVwT3JpZ2luYWxQZXJtaXNzaW9uPWZhbHNlXSBUaGUgZmlsZSB3aWxsIGJlIHNldCBhcyB0aGUgcGVybWlzc2lvbiBmcm9tIHRoZSBlbnRyeSBpZiB0aGlzIGlzIHRydWUuXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgRGVmYXVsdCBpcyBGQUxTRVxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ3xCdWZmZXJ9IFtwYXNzXSBwYXNzd29yZFxuICAgICAgICAgKi9cbiAgICAgICAgZXh0cmFjdEFsbFRvOiBmdW5jdGlvbiAodGFyZ2V0UGF0aCwgb3ZlcndyaXRlLCBrZWVwT3JpZ2luYWxQZXJtaXNzaW9uLCBwYXNzKSB7XG4gICAgICAgICAgICBrZWVwT3JpZ2luYWxQZXJtaXNzaW9uID0gZ2V0X0Jvb2woZmFsc2UsIGtlZXBPcmlnaW5hbFBlcm1pc3Npb24pO1xuICAgICAgICAgICAgcGFzcyA9IGdldF9TdHIoa2VlcE9yaWdpbmFsUGVybWlzc2lvbiwgcGFzcyk7XG4gICAgICAgICAgICBvdmVyd3JpdGUgPSBnZXRfQm9vbChmYWxzZSwgb3ZlcndyaXRlKTtcbiAgICAgICAgICAgIGlmICghX3ppcCkgdGhyb3cgVXRpbHMuRXJyb3JzLk5PX1pJUCgpO1xuXG4gICAgICAgICAgICBfemlwLmVudHJpZXMuZm9yRWFjaChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZW50cnlOYW1lID0gc2FuaXRpemUodGFyZ2V0UGF0aCwgY2Fub25pY2FsKGVudHJ5LmVudHJ5TmFtZSkpO1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0RpcmVjdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICBmaWxldG9vbHMubWFrZURpcihlbnRyeU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBjb250ZW50ID0gZW50cnkuZ2V0RGF0YShwYXNzKTtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgVXRpbHMuRXJyb3JzLkNBTlRfRVhUUkFDVF9GSUxFKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFRoZSByZXZlcnNlIG9wZXJhdGlvbiBmb3IgYXR0ciBkZXBlbmQgb24gbWV0aG9kIGFkZEZpbGUoKVxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVBdHRyID0ga2VlcE9yaWdpbmFsUGVybWlzc2lvbiA/IGVudHJ5LmhlYWRlci5maWxlQXR0ciA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBmaWxldG9vbHMud3JpdGVGaWxlVG8oZW50cnlOYW1lLCBjb250ZW50LCBvdmVyd3JpdGUsIGZpbGVBdHRyKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmaWxldG9vbHMuZnMudXRpbWVzU3luYyhlbnRyeU5hbWUsIGVudHJ5LmhlYWRlci50aW1lLCBlbnRyeS5oZWFkZXIudGltZSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IFV0aWxzLkVycm9ycy5DQU5UX0VYVFJBQ1RfRklMRSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBc3luY2hyb25vdXMgZXh0cmFjdEFsbFRvXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0YXJnZXRQYXRoIFRhcmdldCBsb2NhdGlvblxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvdmVyd3JpdGU9ZmFsc2VdIElmIHRoZSBmaWxlIGFscmVhZHkgZXhpc3RzIGF0IHRoZSB0YXJnZXQgcGF0aCwgdGhlIGZpbGUgd2lsbCBiZSBvdmVyd3JpdGVuIGlmIHRoaXMgaXMgdHJ1ZS5cbiAgICAgICAgICogICAgICAgICAgICAgICAgICBEZWZhdWx0IGlzIEZBTFNFXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2tlZXBPcmlnaW5hbFBlcm1pc3Npb249ZmFsc2VdIFRoZSBmaWxlIHdpbGwgYmUgc2V0IGFzIHRoZSBwZXJtaXNzaW9uIGZyb20gdGhlIGVudHJ5IGlmIHRoaXMgaXMgdHJ1ZS5cbiAgICAgICAgICogICAgICAgICAgICAgICAgICBEZWZhdWx0IGlzIEZBTFNFXG4gICAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIFRoZSBjYWxsYmFjayB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gYWxsIGVudHJpZXMgYXJlIGV4dHJhY3RlZCBzdWNjZXNzZnVsbHkgb3IgYW55IGVycm9yIGlzIHRocm93bi5cbiAgICAgICAgICovXG4gICAgICAgIGV4dHJhY3RBbGxUb0FzeW5jOiBmdW5jdGlvbiAodGFyZ2V0UGF0aCwgb3ZlcndyaXRlLCBrZWVwT3JpZ2luYWxQZXJtaXNzaW9uLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSBnZXRfRnVuKG92ZXJ3cml0ZSwga2VlcE9yaWdpbmFsUGVybWlzc2lvbiwgY2FsbGJhY2spO1xuICAgICAgICAgICAga2VlcE9yaWdpbmFsUGVybWlzc2lvbiA9IGdldF9Cb29sKGZhbHNlLCBrZWVwT3JpZ2luYWxQZXJtaXNzaW9uKTtcbiAgICAgICAgICAgIG92ZXJ3cml0ZSA9IGdldF9Cb29sKGZhbHNlLCBvdmVyd3JpdGUpO1xuICAgICAgICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFjdEFsbFRvQXN5bmModGFyZ2V0UGF0aCwgb3ZlcndyaXRlLCBrZWVwT3JpZ2luYWxQZXJtaXNzaW9uLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFfemlwKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soVXRpbHMuRXJyb3JzLk5PX1pJUCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRhcmdldFBhdGggPSBwdGgucmVzb2x2ZSh0YXJnZXRQYXRoKTtcbiAgICAgICAgICAgIC8vIGNvbnZlcnQgZW50cnlOYW1lIHRvXG4gICAgICAgICAgICBjb25zdCBnZXRQYXRoID0gKGVudHJ5KSA9PiBzYW5pdGl6ZSh0YXJnZXRQYXRoLCBwdGgubm9ybWFsaXplKGNhbm9uaWNhbChlbnRyeS5lbnRyeU5hbWUpKSk7XG4gICAgICAgICAgICBjb25zdCBnZXRFcnJvciA9IChtc2csIGZpbGUpID0+IG5ldyBFcnJvcihtc2cgKyAnOiBcIicgKyBmaWxlICsgJ1wiJyk7XG5cbiAgICAgICAgICAgIC8vIHNlcGFyYXRlIGRpcmVjdG9yaWVzIGZyb20gZmlsZXNcbiAgICAgICAgICAgIGNvbnN0IGRpckVudHJpZXMgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVFbnRyaWVzID0gW107XG4gICAgICAgICAgICBfemlwLmVudHJpZXMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLmlzRGlyZWN0b3J5KSB7XG4gICAgICAgICAgICAgICAgICAgIGRpckVudHJpZXMucHVzaChlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmaWxlRW50cmllcy5wdXNoKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgZGlyZWN0b3J5IGVudHJpZXMgZmlyc3Qgc3luY2hyb25vdXNseVxuICAgICAgICAgICAgLy8gdGhpcyBwcmV2ZW50cyByYWNlIGNvbmRpdGlvbiBhbmQgYXNzdXJlcyBmb2xkZXJzIGFyZSB0aGVyZSBiZWZvcmUgd3JpdGluZyBmaWxlc1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBkaXJFbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlyUGF0aCA9IGdldFBhdGgoZW50cnkpO1xuICAgICAgICAgICAgICAgIC8vIFRoZSByZXZlcnNlIG9wZXJhdGlvbiBmb3IgYXR0ciBkZXBlbmQgb24gbWV0aG9kIGFkZEZpbGUoKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRpckF0dHIgPSBrZWVwT3JpZ2luYWxQZXJtaXNzaW9uID8gZW50cnkuaGVhZGVyLmZpbGVBdHRyIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGV0b29scy5tYWtlRGlyKGRpclBhdGgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGlyQXR0cikgZmlsZXRvb2xzLmZzLmNobW9kU3luYyhkaXJQYXRoLCBkaXJBdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaW4gdW5peCB0aW1lc3RhbXAgd2lsbCBjaGFuZ2UgaWYgZmlsZXMgYXJlIGxhdGVyIGFkZGVkIHRvIGZvbGRlciwgYnV0IHN0aWxsXG4gICAgICAgICAgICAgICAgICAgIGZpbGV0b29scy5mcy51dGltZXNTeW5jKGRpclBhdGgsIGVudHJ5LmhlYWRlci50aW1lLCBlbnRyeS5oZWFkZXIudGltZSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZ2V0RXJyb3IoXCJVbmFibGUgdG8gY3JlYXRlIGZvbGRlclwiLCBkaXJQYXRoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmaWxlRW50cmllcy5yZXZlcnNlKCkucmVkdWNlKGZ1bmN0aW9uIChuZXh0LCBlbnRyeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVudHJ5TmFtZSA9IHB0aC5ub3JtYWxpemUoY2Fub25pY2FsKGVudHJ5LmVudHJ5TmFtZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBzYW5pdGl6ZSh0YXJnZXRQYXRoLCBlbnRyeU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkuZ2V0RGF0YUFzeW5jKGZ1bmN0aW9uIChjb250ZW50LCBlcnJfMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJfMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0KGVycl8xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFjb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQoVXRpbHMuRXJyb3JzLkNBTlRfRVhUUkFDVF9GSUxFKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSByZXZlcnNlIG9wZXJhdGlvbiBmb3IgYXR0ciBkZXBlbmQgb24gbWV0aG9kIGFkZEZpbGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlQXR0ciA9IGtlZXBPcmlnaW5hbFBlcm1pc3Npb24gPyBlbnRyeS5oZWFkZXIuZmlsZUF0dHIgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGV0b29scy53cml0ZUZpbGVUb0FzeW5jKGZpbGVQYXRoLCBjb250ZW50LCBvdmVyd3JpdGUsIGZpbGVBdHRyLCBmdW5jdGlvbiAoc3VjYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzdWNjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dChnZXRFcnJvcihcIlVuYWJsZSB0byB3cml0ZSBmaWxlXCIsIGZpbGVQYXRoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxldG9vbHMuZnMudXRpbWVzKGZpbGVQYXRoLCBlbnRyeS5oZWFkZXIudGltZSwgZW50cnkuaGVhZGVyLnRpbWUsIGZ1bmN0aW9uIChlcnJfMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJfMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0KGdldEVycm9yKFwiVW5hYmxlIHRvIHNldCB0aW1lc1wiLCBmaWxlUGF0aCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSwgY2FsbGJhY2spKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdyaXRlcyB0aGUgbmV3bHkgY3JlYXRlZCB6aXAgZmlsZSB0byBkaXNrIGF0IHRoZSBzcGVjaWZpZWQgbG9jYXRpb24gb3IgaWYgYSB6aXAgd2FzIG9wZW5lZCBhbmQgbm8gYGB0YXJnZXRGaWxlTmFtZWBgIGlzIHByb3ZpZGVkLCBpdCB3aWxsIG92ZXJ3cml0ZSB0aGUgb3BlbmVkIHppcFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGFyZ2V0RmlsZU5hbWVcbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgICAgICovXG4gICAgICAgIHdyaXRlWmlwOiBmdW5jdGlvbiAodGFyZ2V0RmlsZU5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0RmlsZU5hbWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayA9IHRhcmdldEZpbGVOYW1lO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRGaWxlTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRhcmdldEZpbGVOYW1lICYmIG9wdHMuZmlsZW5hbWUpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRGaWxlTmFtZSA9IG9wdHMuZmlsZW5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRhcmdldEZpbGVOYW1lKSByZXR1cm47XG5cbiAgICAgICAgICAgIHZhciB6aXBEYXRhID0gX3ppcC5jb21wcmVzc1RvQnVmZmVyKCk7XG4gICAgICAgICAgICBpZiAoemlwRGF0YSkge1xuICAgICAgICAgICAgICAgIHZhciBvayA9IGZpbGV0b29scy53cml0ZUZpbGVUbyh0YXJnZXRGaWxlTmFtZSwgemlwRGF0YSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSBjYWxsYmFjayghb2sgPyBuZXcgRXJyb3IoXCJmYWlsZWRcIikgOiBudWxsLCBcIlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHRhcmdldEZpbGVOYW1lXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbcHJvcHNdXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Byb3BzLm92ZXJ3cml0ZT10cnVlXSBJZiB0aGUgZmlsZSBhbHJlYWR5IGV4aXN0cyBhdCB0aGUgdGFyZ2V0IHBhdGgsIHRoZSBmaWxlIHdpbGwgYmUgb3ZlcndyaXRlbiBpZiB0aGlzIGlzIHRydWUuXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Byb3BzLnBlcm1dIFRoZSBmaWxlIHdpbGwgYmUgc2V0IGFzIHRoZSBwZXJtaXNzaW9uIGZyb20gdGhlIGVudHJ5IGlmIHRoaXMgaXMgdHJ1ZS5cblxuICAgICAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICAgICAgICovXG4gICAgICAgIHdyaXRlWmlwUHJvbWlzZTogZnVuY3Rpb24gKC8qKlN0cmluZyovIHRhcmdldEZpbGVOYW1lLCAvKiBvYmplY3QgKi8gcHJvcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgb3ZlcndyaXRlLCBwZXJtIH0gPSBPYmplY3QuYXNzaWduKHsgb3ZlcndyaXRlOiB0cnVlIH0sIHByb3BzKTtcblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBmaW5kIGZpbGUgbmFtZVxuICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0RmlsZU5hbWUgJiYgb3B0cy5maWxlbmFtZSkgdGFyZ2V0RmlsZU5hbWUgPSBvcHRzLmZpbGVuYW1lO1xuICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0RmlsZU5hbWUpIHJlamVjdChcIkFETS1aSVA6IFpJUCBGaWxlIE5hbWUgTWlzc2luZ1wiKTtcblxuICAgICAgICAgICAgICAgIHRoaXMudG9CdWZmZXJQcm9taXNlKCkudGhlbigoemlwRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXQgPSAoZG9uZSkgPT4gKGRvbmUgPyByZXNvbHZlKGRvbmUpIDogcmVqZWN0KFwiQURNLVpJUDogV2Fzbid0IGFibGUgdG8gd3JpdGUgemlwIGZpbGVcIikpO1xuICAgICAgICAgICAgICAgICAgICBmaWxldG9vbHMud3JpdGVGaWxlVG9Bc3luYyh0YXJnZXRGaWxlTmFtZSwgemlwRGF0YSwgb3ZlcndyaXRlLCBwZXJtLCByZXQpO1xuICAgICAgICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybnMge1Byb21pc2U8QnVmZmVyPn0gQSBwcm9taXNlIHRvIHRoZSBCdWZmZXIuXG4gICAgICAgICAqL1xuICAgICAgICB0b0J1ZmZlclByb21pc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgX3ppcC50b0FzeW5jQnVmZmVyKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgY29udGVudCBvZiB0aGUgZW50aXJlIHppcCBmaWxlIGFzIGEgQnVmZmVyIG9iamVjdFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcCB7ZnVuY3Rpb259IFtvblN1Y2Nlc3NdXG4gICAgICAgICAqIEBwcm9wIHtmdW5jdGlvbn0gW29uRmFpbF1cbiAgICAgICAgICogQHByb3Age2Z1bmN0aW9ufSBbb25JdGVtU3RhcnRdXG4gICAgICAgICAqIEBwcm9wIHtmdW5jdGlvbn0gW29uSXRlbUVuZF1cbiAgICAgICAgICogQHJldHVybnMge0J1ZmZlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRvQnVmZmVyOiBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWwsIG9uSXRlbVN0YXJ0LCBvbkl0ZW1FbmQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25TdWNjZXNzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBfemlwLnRvQXN5bmNCdWZmZXIob25TdWNjZXNzLCBvbkZhaWwsIG9uSXRlbVN0YXJ0LCBvbkl0ZW1FbmQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIF96aXAuY29tcHJlc3NUb0J1ZmZlcigpO1xuICAgICAgICB9XG4gICAgfTtcbn07XG4iLCAiLyoqXG4gKiBSZXR1cm5zIGRldGFpbGVkIHR5cGUgYXMgc3RyaW5nIChpbnN0ZWFkIG9mIGp1c3QgJ29iamVjdCcgZm9yIGFycmF5cyBldGMpXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHthbnl9IHZhbHVlIGpzIHZhbHVlXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0eXBlIG9mIHZhbHVlXG4gKiBAZXhhbXBsZVxuICogdHlwZU9mKHt9KTsgLy8gJ29iamVjdCdcbiAqIHR5cGVPZihbXSk7IC8vICdhcnJheSdcbiAqIHR5cGVPZihmdW5jdGlvbigpIHt9KTsgLy8gJ2Z1bmN0aW9uJ1xuICogdHlwZU9mKC9hLyk7IC8vICdyZWdleHAnXG4gKiB0eXBlT2YobmV3IERhdGUoKSk7IC8vICdkYXRlJ1xuICogdHlwZU9mKG51bGwpOyAvLyAnbnVsbCdcbiAqIHR5cGVPZih1bmRlZmluZWQpOyAvLyAndW5kZWZpbmVkJ1xuICogdHlwZU9mKCdhJyk7IC8vICdzdHJpbmcnXG4gKiB0eXBlT2YoMSk7IC8vICdudW1iZXInXG4gKiB0eXBlT2YodHJ1ZSk7IC8vICdib29sZWFuJ1xuICogdHlwZU9mKG5ldyBNYXAoKSk7IC8vICdtYXAnXG4gKiB0eXBlT2YobmV3IFNldCgpKTsgLy8gJ21hcCdcbiAqL1xuZnVuY3Rpb24gdHlwZU9mKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiAnbnVsbCc7XG4gIH1cbiAgaWYgKHZhbHVlICE9PSBPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZTtcbiAgfVxuICByZXR1cm4ge30udG9TdHJpbmdcbiAgICAuY2FsbCh2YWx1ZSlcbiAgICAuc2xpY2UoOCwgLTEpXG4gICAgLnRvTG93ZXJDYXNlKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVPZjtcbiIsICJpbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbi8qKlxuICogQ2hlY2tzIGlmIGlucHV0IHN0cmluZyBpcyBlbXB0eVxuICogQHBhcmFtICB7U3RyaW5nfSBpbnB1dCB0ZXh0IGlucHV0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIG5vIGlucHV0XG4gKi9cbmZ1bmN0aW9uIGlzRW1wdHkoaW5wdXQpIHtcbiAgaWYgKHR5cGVPZihpbnB1dCkgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuICFpbnB1dC5sZW5ndGg7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzRW1wdHk7XG4iLCAiaW1wb3J0IGlzRW1wdHkgZnJvbSAnLi9pc0VtcHR5JztcblxuLyoqXG4gKiBUYWtlcyBhIGNoYXJhY3RlciBhbmQgYSB1bmljb2RlIHJhbmdlLiBSZXR1cm5zIHRydWUgaWYgdGhlIGNoYXIgaXMgaW4gdGhlIHJhbmdlLlxuICogQHBhcmFtICB7U3RyaW5nfSAgY2hhciAgdW5pY29kZSBjaGFyYWN0ZXJcbiAqIEBwYXJhbSAge051bWJlcn0gIHN0YXJ0IHVuaWNvZGUgc3RhcnQgcmFuZ2VcbiAqIEBwYXJhbSAge051bWJlcn0gIGVuZCAgIHVuaWNvZGUgZW5kIHJhbmdlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBpc0NoYXJJblJhbmdlKGNoYXIgPSAnJywgc3RhcnQsIGVuZCkge1xuICBpZiAoaXNFbXB0eShjaGFyKSkgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBjb2RlID0gY2hhci5jaGFyQ29kZUF0KDApO1xuICByZXR1cm4gc3RhcnQgPD0gY29kZSAmJiBjb2RlIDw9IGVuZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNDaGFySW5SYW5nZTtcbiIsICJleHBvcnQgY29uc3QgVkVSU0lPTiA9ICc1LjMuMSc7XG5cbmV4cG9ydCBjb25zdCBUT19LQU5BX01FVEhPRFM6IHtcbiAgSElSQUdBTkE6ICd0b0hpcmFnYW5hJyxcbiAgS0FUQUtBTkE6ICd0b0thdGFrYW5hJyxcbn0gPSB7XG4gIEhJUkFHQU5BOiAndG9IaXJhZ2FuYScsXG4gIEtBVEFLQU5BOiAndG9LYXRha2FuYScsXG59O1xuXG5leHBvcnQgY29uc3QgUk9NQU5JWkFUSU9OUzogeyBIRVBCVVJOOiAnaGVwYnVybicgfSA9IHtcbiAgSEVQQlVSTjogJ2hlcGJ1cm4nLFxufTtcblxuZXhwb3J0IHR5cGUgRGVmYXVsdE9wdGlvbnMgPSB7XG4gIHVzZU9ic29sZXRlS2FuYT86IGJvb2xlYW4sXG4gIHBhc3NSb21hamk/OiBib29sZWFuLFxuICBjb252ZXJ0TG9uZ1Zvd2VsTWFyaz86IGJvb2xlYW4sXG4gIHVwY2FzZUthdGFrYW5hPzogYm9vbGVhbixcbiAgSU1FTW9kZT86IGJvb2xlYW4gfCAndG9IaXJhZ2FuYScgfCAndG9LYXRha2FuYScsXG4gIHJvbWFuaXphdGlvbj86ICdoZXBidXJuJyxcbiAgY3VzdG9tS2FuYU1hcHBpbmc/OiB7IFtpbmRleDogc3RyaW5nXTogc3RyaW5nIH1cbiAgY3VzdG9tUm9tYWppTWFwcGluZz86IHsgW2luZGV4OiBzdHJpbmddOiBzdHJpbmcgfVxufTtcblxuLyoqXG4gKiBEZWZhdWx0IGNvbmZpZyBmb3IgV2FuYUthbmEsIHVzZXIgcGFzc2VkIG9wdGlvbnMgd2lsbCBiZSBtZXJnZWQgd2l0aCB0aGVzZVxuICogQHR5cGUge0RlZmF1bHRPcHRpb25zfVxuICogQG5hbWUgRGVmYXVsdE9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gW3VzZU9ic29sZXRlS2FuYT1mYWxzZV0gLSBTZXQgdG8gdHJ1ZSB0byB1c2Ugb2Jzb2xldGUgY2hhcmFjdGVycywgc3VjaCBhcyDjgpAgYW5kIOOCkS5cbiAqIEBleGFtcGxlXG4gKiB0b0hpcmFnYW5hKCd3ZScsIHsgdXNlT2Jzb2xldGVLYW5hOiB0cnVlIH0pXG4gKiAvLyA9PiAn44KRJ1xuICogQHByb3BlcnR5IHtCb29sZWFufSBbcGFzc1JvbWFqaT1mYWxzZV0gLSBTZXQgdG8gdHJ1ZSB0byBwYXNzIHJvbWFqaSB3aGVuIHVzaW5nIG1peGVkIHN5bGxhYmFyaWVzIHdpdGggdG9LYXRha2FuYSgpIG9yIHRvSGlyYWdhbmEoKVxuICogQGV4YW1wbGVcbiAqIHRvSGlyYWdhbmEoJ29ubHkgY29udmVydCB0aGUga2F0YWthbmE6IOODkuODqeOCrOODiicsIHsgcGFzc1JvbWFqaTogdHJ1ZSB9KVxuICogLy8gPT4gXCJvbmx5IGNvbnZlcnQgdGhlIGthdGFrYW5hOiDjgbLjgonjgYzjgapcIlxuICogQHByb3BlcnR5IHtCb29sZWFufSBbY29udmVydExvbmdWb3dlbE1hcms9dHJ1ZV0gLSBTZXQgdG8gZmFsc2UgdG8gcHJldmVudCBjb252ZXJzaW9ucyBvZiAn44O8JyB0byBleHRlbmRlZCB2b3dlbHMgd2l0aCB0b0hpcmFnYW5hKClcbiAqIEBleGFtcGxlXG4gKiB0b0hpcmFnYW5hKCfjg6njg7zjg6Hjg7MnLCB7IGNvbnZlcnRMb25nVm93ZWxNYXJrOiBmYWxzZSB9KTtcbiAqIC8vID0+ICfjgonjg7zjgoHjgpNcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gW3VwY2FzZUthdGFrYW5hPWZhbHNlXSAtIFNldCB0byB0cnVlIHRvIGNvbnZlcnQga2F0YWthbmEgdG8gdXBwZXJjYXNlIHVzaW5nIHRvUm9tYWppKClcbiAqIEBleGFtcGxlXG4gKiB0b1JvbWFqaSgn44Gy44KJ44GM44GqIOOCq+OCv+OCq+ODiicsIHsgdXBjYXNlS2F0YWthbmE6IHRydWUgfSlcbiAqIC8vID0+IFwiaGlyYWdhbmEgS0FUQUtBTkFcIlxuICogQHByb3BlcnR5IHtCb29sZWFuIHwgJ3RvSGlyYWdhbmEnIHwgJ3RvS2F0YWthbmEnfSBbSU1FTW9kZT1mYWxzZV0gLSBTZXQgdG8gdHJ1ZSwgJ3RvSGlyYWdhbmEnLCBvciAndG9LYXRha2FuYScgdG8gaGFuZGxlIGNvbnZlcnNpb24gd2hpbGUgaXQgaXMgYmVpbmcgdHlwZWQuXG4gKiBAcHJvcGVydHkgeydoZXBidXJuJ30gW3JvbWFuaXphdGlvbj0naGVwYnVybiddIC0gY2hvb3NlIHRvUm9tYWppKCkgcm9tYW5pemF0aW9uIG1hcCAoY3VycmVudGx5IG9ubHkgJ2hlcGJ1cm4nKVxuICogQHByb3BlcnR5IHtPYmplY3QuPFN0cmluZywgU3RyaW5nPn0gW2N1c3RvbUthbmFNYXBwaW5nXSAtIGN1c3RvbSBtYXAgd2lsbCBiZSBtZXJnZWQgd2l0aCBkZWZhdWx0IGNvbnZlcnNpb25cbiAqIEBleGFtcGxlXG4gKiB0b0thbmEoJ3dhbmFrYW5hJywgeyBjdXN0b21LYW5hTWFwcGluZzogeyBuYTogJ+OBqycsIGthOiAnQmFuYScgfSkgfTtcbiAqIC8vID0+ICfjgo/jgatCYW5h44GrJ1xuICogQHByb3BlcnR5IHtPYmplY3QuPFN0cmluZywgU3RyaW5nPn0gW2N1c3RvbVJvbWFqaU1hcHBpbmddIC0gY3VzdG9tIG1hcCB3aWxsIGJlIG1lcmdlZCB3aXRoIGRlZmF1bHQgY29udmVyc2lvblxuICogQGV4YW1wbGVcbiAqIHRvUm9tYWppKCfjgaTjgZjjgY7jgoonLCB7IGN1c3RvbVJvbWFqaU1hcHBpbmc6IHsg44GYOiAnemknLCDjgaQ6ICd0dScsIOOCijogJ2xpJyB9KSB9O1xuICogLy8gPT4gJ3R1emlnaWxpJ1xuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9PUFRJT05TOiBEZWZhdWx0T3B0aW9ucyA9IHtcbiAgdXNlT2Jzb2xldGVLYW5hOiBmYWxzZSxcbiAgcGFzc1JvbWFqaTogZmFsc2UsXG4gIGNvbnZlcnRMb25nVm93ZWxNYXJrOiB0cnVlLFxuICB1cGNhc2VLYXRha2FuYTogZmFsc2UsXG4gIElNRU1vZGU6IGZhbHNlLFxuICByb21hbml6YXRpb246IFJPTUFOSVpBVElPTlMuSEVQQlVSTixcbn07XG5cbi8vIENoYXJDb2RlIFJlZmVyZW5jZXNcbi8vIGh0dHA6Ly93d3cucmlrYWkuY29tL2xpYnJhcnkva2Fuaml0YWJsZXMva2FuamlfY29kZXMudW5pY29kZS5zaHRtbFxuLy8gaHR0cDovL3VuaWNvZGUtdGFibGUuY29tXG5cbmV4cG9ydCBjb25zdCBMQVRJTl9MT1dFUkNBU0VfU1RBUlQgPSAweDYxO1xuZXhwb3J0IGNvbnN0IExBVElOX0xPV0VSQ0FTRV9FTkQgPSAweDdhO1xuZXhwb3J0IGNvbnN0IExBVElOX1VQUEVSQ0FTRV9TVEFSVCA9IDB4NDE7XG5leHBvcnQgY29uc3QgTEFUSU5fVVBQRVJDQVNFX0VORCA9IDB4NWE7XG5leHBvcnQgY29uc3QgTE9XRVJDQVNFX1pFTktBS1VfU1RBUlQgPSAweGZmNDE7XG5leHBvcnQgY29uc3QgTE9XRVJDQVNFX1pFTktBS1VfRU5EID0gMHhmZjVhO1xuZXhwb3J0IGNvbnN0IFVQUEVSQ0FTRV9aRU5LQUtVX1NUQVJUID0gMHhmZjIxO1xuZXhwb3J0IGNvbnN0IFVQUEVSQ0FTRV9aRU5LQUtVX0VORCA9IDB4ZmYzYTtcbmV4cG9ydCBjb25zdCBISVJBR0FOQV9TVEFSVCA9IDB4MzA0MTtcbmV4cG9ydCBjb25zdCBISVJBR0FOQV9FTkQgPSAweDMwOTY7XG5leHBvcnQgY29uc3QgS0FUQUtBTkFfU1RBUlQgPSAweDMwYTE7XG5leHBvcnQgY29uc3QgS0FUQUtBTkFfRU5EID0gMHgzMGZjO1xuZXhwb3J0IGNvbnN0IEtBTkpJX1NUQVJUID0gMHg0ZTAwO1xuZXhwb3J0IGNvbnN0IEtBTkpJX0VORCA9IDB4OWZhZjtcblxuZXhwb3J0IGNvbnN0IEtBTkpJX0lURVJBVElPTl9NQVJLID0gMHgzMDA1OyAvLyDjgIVcbmV4cG9ydCBjb25zdCBQUk9MT05HRURfU09VTkRfTUFSSyA9IDB4MzBmYzsgLy8g44O8XG5leHBvcnQgY29uc3QgS0FOQV9TTEFTSF9ET1QgPSAweDMwZmI7IC8vIOODu1xuXG5jb25zdCBaRU5LQUtVX05VTUJFUlMgPSBbMHhmZjEwLCAweGZmMTldO1xuY29uc3QgWkVOS0FLVV9VUFBFUkNBU0UgPSBbVVBQRVJDQVNFX1pFTktBS1VfU1RBUlQsIFVQUEVSQ0FTRV9aRU5LQUtVX0VORF07XG5jb25zdCBaRU5LQUtVX0xPV0VSQ0FTRSA9IFtMT1dFUkNBU0VfWkVOS0FLVV9TVEFSVCwgTE9XRVJDQVNFX1pFTktBS1VfRU5EXTtcbmNvbnN0IFpFTktBS1VfUFVOQ1RVQVRJT05fMSA9IFsweGZmMDEsIDB4ZmYwZl07XG5jb25zdCBaRU5LQUtVX1BVTkNUVUFUSU9OXzIgPSBbMHhmZjFhLCAweGZmMWZdO1xuY29uc3QgWkVOS0FLVV9QVU5DVFVBVElPTl8zID0gWzB4ZmYzYiwgMHhmZjNmXTtcbmNvbnN0IFpFTktBS1VfUFVOQ1RVQVRJT05fNCA9IFsweGZmNWIsIDB4ZmY2MF07XG5jb25zdCBaRU5LQUtVX1NZTUJPTFNfQ1VSUkVOQ1kgPSBbMHhmZmUwLCAweGZmZWVdO1xuXG5jb25zdCBISVJBR0FOQV9DSEFSUyA9IFsweDMwNDAsIDB4MzA5Zl07XG5jb25zdCBLQVRBS0FOQV9DSEFSUyA9IFsweDMwYTAsIDB4MzBmZl07XG5jb25zdCBIQU5LQUtVX0tBVEFLQU5BID0gWzB4ZmY2NiwgMHhmZjlmXTtcbmNvbnN0IEtBVEFLQU5BX1BVTkNUVUFUSU9OID0gWzB4MzBmYiwgMHgzMGZjXTtcbmNvbnN0IEtBTkFfUFVOQ1RVQVRJT04gPSBbMHhmZjYxLCAweGZmNjVdO1xuY29uc3QgQ0pLX1NZTUJPTFNfUFVOQ1RVQVRJT04gPSBbMHgzMDAwLCAweDMwM2ZdO1xuY29uc3QgQ09NTU9OX0NKSyA9IFsweDRlMDAsIDB4OWZmZl07XG5jb25zdCBSQVJFX0NKSyA9IFsweDM0MDAsIDB4NGRiZl07XG5cbmV4cG9ydCBjb25zdCBLQU5BX1JBTkdFUyA9IFtcbiAgSElSQUdBTkFfQ0hBUlMsXG4gIEtBVEFLQU5BX0NIQVJTLFxuICBLQU5BX1BVTkNUVUFUSU9OLFxuICBIQU5LQUtVX0tBVEFLQU5BLFxuXTtcblxuZXhwb3J0IGNvbnN0IEpBX1BVTkNUVUFUSU9OX1JBTkdFUyA9IFtcbiAgQ0pLX1NZTUJPTFNfUFVOQ1RVQVRJT04sXG4gIEtBTkFfUFVOQ1RVQVRJT04sXG4gIEtBVEFLQU5BX1BVTkNUVUFUSU9OLFxuICBaRU5LQUtVX1BVTkNUVUFUSU9OXzEsXG4gIFpFTktBS1VfUFVOQ1RVQVRJT05fMixcbiAgWkVOS0FLVV9QVU5DVFVBVElPTl8zLFxuICBaRU5LQUtVX1BVTkNUVUFUSU9OXzQsXG4gIFpFTktBS1VfU1lNQk9MU19DVVJSRU5DWSxcbl07XG5cbi8vIEFsbCBKYXBhbmVzZSB1bmljb2RlIHN0YXJ0IGFuZCBlbmQgcmFuZ2VzXG4vLyBJbmNsdWRlcyBrYW5qaSwga2FuYSwgemVua2FrdSBsYXRpbiBjaGFycywgcHVuY3R1YXRpb24sIGFuZCBudW1iZXIgcmFuZ2VzLlxuZXhwb3J0IGNvbnN0IEpBUEFORVNFX1JBTkdFUyA9IFtcbiAgLi4uS0FOQV9SQU5HRVMsXG4gIC4uLkpBX1BVTkNUVUFUSU9OX1JBTkdFUyxcbiAgWkVOS0FLVV9VUFBFUkNBU0UsXG4gIFpFTktBS1VfTE9XRVJDQVNFLFxuICBaRU5LQUtVX05VTUJFUlMsXG4gIENPTU1PTl9DSkssXG4gIFJBUkVfQ0pLLFxuXTtcblxuY29uc3QgTU9ERVJOX0VOR0xJU0ggPSBbMHgwMDAwLCAweDAwN2ZdO1xuY29uc3QgSEVQQlVSTl9NQUNST05fUkFOR0VTID0gW1xuICBbMHgwMTAwLCAweDAxMDFdLCAvLyDEgCDEgVxuICBbMHgwMTEyLCAweDAxMTNdLCAvLyDEkiDEk1xuICBbMHgwMTJhLCAweDAxMmJdLCAvLyDEqiDEq1xuICBbMHgwMTRjLCAweDAxNGRdLCAvLyDFjCDFjVxuICBbMHgwMTZhLCAweDAxNmJdLCAvLyDFqiDFq1xuXTtcbmNvbnN0IFNNQVJUX1FVT1RFX1JBTkdFUyA9IFtcbiAgWzB4MjAxOCwgMHgyMDE5XSwgLy8g4oCYIOKAmVxuICBbMHgyMDFjLCAweDIwMWRdLCAvLyDigJwg4oCdXG5dO1xuXG5leHBvcnQgY29uc3QgUk9NQUpJX1JBTkdFUyA9IFtNT0RFUk5fRU5HTElTSCwgLi4uSEVQQlVSTl9NQUNST05fUkFOR0VTXTtcblxuZXhwb3J0IGNvbnN0IEVOX1BVTkNUVUFUSU9OX1JBTkdFUyA9IFtcbiAgWzB4MjAsIDB4MmZdLFxuICBbMHgzYSwgMHgzZl0sXG4gIFsweDViLCAweDYwXSxcbiAgWzB4N2IsIDB4N2VdLFxuICAuLi5TTUFSVF9RVU9URV9SQU5HRVMsXG5dO1xuIiwgImltcG9ydCBpc0NoYXJJblJhbmdlIGZyb20gJy4vaXNDaGFySW5SYW5nZSc7XG5pbXBvcnQgeyBKQVBBTkVTRV9SQU5HRVMgfSBmcm9tICcuLi9jb25zdGFudHMudHMnO1xuXG4vKipcbiAqIFRlc3RzIGEgY2hhcmFjdGVyLiBSZXR1cm5zIHRydWUgaWYgdGhlIGNoYXJhY3RlciBpcyBbS2F0YWthbmFdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0thdGFrYW5hKS5cbiAqIEBwYXJhbSAge1N0cmluZ30gY2hhciBjaGFyYWN0ZXIgc3RyaW5nIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzQ2hhckphcGFuZXNlKGNoYXIgPSAnJykge1xuICByZXR1cm4gSkFQQU5FU0VfUkFOR0VTLnNvbWUoKFtzdGFydCwgZW5kXSkgPT4gaXNDaGFySW5SYW5nZShjaGFyLCBzdGFydCwgZW5kKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzQ2hhckphcGFuZXNlO1xuIiwgImltcG9ydCB0eXBlT2YgZnJvbSAnLi91dGlscy90eXBlT2YnO1xuaW1wb3J0IGlzRW1wdHkgZnJvbSAnLi91dGlscy9pc0VtcHR5JztcbmltcG9ydCBpc0NoYXJKYXBhbmVzZSBmcm9tICcuL3V0aWxzL2lzQ2hhckphcGFuZXNlJztcblxuLyoqXG4gKiBUZXN0IGlmIGBpbnB1dGAgb25seSBpbmNsdWRlcyBbS2FuamldKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0thbmppKSwgW0thbmFdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0thbmEpLCB6ZW5rYWt1IG51bWJlcnMsIGFuZCBKQSBwdW5jdHVhdGlvbi9zeW1ib2xzLuKAnVxuICogQHBhcmFtICB7U3RyaW5nfSBbaW5wdXQ9JyddIHRleHRcbiAqIEBwYXJhbSAge1JlZ0V4cH0gW2FsbG93ZWRdIGFkZGl0aW9uYWwgdGVzdCBhbGxvd2VkIHRvIHBhc3MgZm9yIGVhY2ggY2hhclxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBwYXNzZXMgY2hlY2tzXG4gKiBAZXhhbXBsZVxuICogaXNKYXBhbmVzZSgn5rOj44GN6JmrJylcbiAqIC8vID0+IHRydWVcbiAqIGlzSmFwYW5lc2UoJ+OBguOCoicpXG4gKiAvLyA9PiB0cnVlXG4gKiBpc0phcGFuZXNlKCfvvJLmnIgnKSAvLyBaZW5rYWt1IG51bWJlcnMgYWxsb3dlZFxuICogLy8gPT4gdHJ1ZVxuICogaXNKYXBhbmVzZSgn5rOj44GN6Jmr44CC77yB44Cc77yEJykgLy8gWmVua2FrdS9KQSBwdW5jdHVhdGlvblxuICogLy8gPT4gdHJ1ZVxuICogaXNKYXBhbmVzZSgn5rOj44GN6JmrLiF+JCcpIC8vIExhdGluIHB1bmN0dWF0aW9uIGZhaWxzXG4gKiAvLyA9PiBmYWxzZVxuICogaXNKYXBhbmVzZSgnQeazo+OBjeiZqycpXG4gKiAvLyA9PiBmYWxzZVxuICogaXNKYXBhbmVzZSgn4omq5YG95ous5byn4omrJywgL1viiariiatdLyk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzSmFwYW5lc2UoaW5wdXQgPSAnJywgYWxsb3dlZCkge1xuICBjb25zdCBhdWdtZW50ZWQgPSB0eXBlT2YoYWxsb3dlZCkgPT09ICdyZWdleHAnO1xuICByZXR1cm4gaXNFbXB0eShpbnB1dClcbiAgICA/IGZhbHNlXG4gICAgOiBbLi4uaW5wdXRdLmV2ZXJ5KChjaGFyKSA9PiB7XG4gICAgICBjb25zdCBpc0phID0gaXNDaGFySmFwYW5lc2UoY2hhcik7XG4gICAgICByZXR1cm4gIWF1Z21lbnRlZCA/IGlzSmEgOiBpc0phIHx8IGFsbG93ZWQudGVzdChjaGFyKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNKYXBhbmVzZTtcbiIsICJ2YXIgc2FmZUlzTmFOID0gTnVtYmVyLmlzTmFOIHx8XG4gICAgZnVuY3Rpb24gcG9ueWZpbGwodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdmFsdWUgIT09IHZhbHVlO1xuICAgIH07XG5mdW5jdGlvbiBpc0VxdWFsKGZpcnN0LCBzZWNvbmQpIHtcbiAgICBpZiAoZmlyc3QgPT09IHNlY29uZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHNhZmVJc05hTihmaXJzdCkgJiYgc2FmZUlzTmFOKHNlY29uZCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGFyZUlucHV0c0VxdWFsKG5ld0lucHV0cywgbGFzdElucHV0cykge1xuICAgIGlmIChuZXdJbnB1dHMubGVuZ3RoICE9PSBsYXN0SW5wdXRzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3SW5wdXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghaXNFcXVhbChuZXdJbnB1dHNbaV0sIGxhc3RJbnB1dHNbaV0pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIG1lbW9pemVPbmUocmVzdWx0Rm4sIGlzRXF1YWwpIHtcbiAgICBpZiAoaXNFcXVhbCA9PT0gdm9pZCAwKSB7IGlzRXF1YWwgPSBhcmVJbnB1dHNFcXVhbDsgfVxuICAgIHZhciBjYWNoZSA9IG51bGw7XG4gICAgZnVuY3Rpb24gbWVtb2l6ZWQoKSB7XG4gICAgICAgIHZhciBuZXdBcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBuZXdBcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhY2hlICYmIGNhY2hlLmxhc3RUaGlzID09PSB0aGlzICYmIGlzRXF1YWwobmV3QXJncywgY2FjaGUubGFzdEFyZ3MpKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGUubGFzdFJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbGFzdFJlc3VsdCA9IHJlc3VsdEZuLmFwcGx5KHRoaXMsIG5ld0FyZ3MpO1xuICAgICAgICBjYWNoZSA9IHtcbiAgICAgICAgICAgIGxhc3RSZXN1bHQ6IGxhc3RSZXN1bHQsXG4gICAgICAgICAgICBsYXN0QXJnczogbmV3QXJncyxcbiAgICAgICAgICAgIGxhc3RUaGlzOiB0aGlzLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbGFzdFJlc3VsdDtcbiAgICB9XG4gICAgbWVtb2l6ZWQuY2xlYXIgPSBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgICAgY2FjaGUgPSBudWxsO1xuICAgIH07XG4gICAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG5leHBvcnQgeyBtZW1vaXplT25lIGFzIGRlZmF1bHQgfTtcbiIsICJ2YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gZmluZChpdGVyLCB0YXIsIGtleSkge1xuXHRmb3IgKGtleSBvZiBpdGVyLmtleXMoKSkge1xuXHRcdGlmIChkZXF1YWwoa2V5LCB0YXIpKSByZXR1cm4ga2V5O1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXF1YWwoZm9vLCBiYXIpIHtcblx0dmFyIGN0b3IsIGxlbiwgdG1wO1xuXHRpZiAoZm9vID09PSBiYXIpIHJldHVybiB0cnVlO1xuXG5cdGlmIChmb28gJiYgYmFyICYmIChjdG9yPWZvby5jb25zdHJ1Y3RvcikgPT09IGJhci5jb25zdHJ1Y3Rvcikge1xuXHRcdGlmIChjdG9yID09PSBEYXRlKSByZXR1cm4gZm9vLmdldFRpbWUoKSA9PT0gYmFyLmdldFRpbWUoKTtcblx0XHRpZiAoY3RvciA9PT0gUmVnRXhwKSByZXR1cm4gZm9vLnRvU3RyaW5nKCkgPT09IGJhci50b1N0cmluZygpO1xuXG5cdFx0aWYgKGN0b3IgPT09IEFycmF5KSB7XG5cdFx0XHRpZiAoKGxlbj1mb28ubGVuZ3RoKSA9PT0gYmFyLmxlbmd0aCkge1xuXHRcdFx0XHR3aGlsZSAobGVuLS0gJiYgZGVxdWFsKGZvb1tsZW5dLCBiYXJbbGVuXSkpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGxlbiA9PT0gLTE7XG5cdFx0fVxuXG5cdFx0aWYgKGN0b3IgPT09IFNldCkge1xuXHRcdFx0aWYgKGZvby5zaXplICE9PSBiYXIuc2l6ZSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGxlbiBvZiBmb28pIHtcblx0XHRcdFx0dG1wID0gbGVuO1xuXHRcdFx0XHRpZiAodG1wICYmIHR5cGVvZiB0bXAgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdFx0dG1wID0gZmluZChiYXIsIHRtcCk7XG5cdFx0XHRcdFx0aWYgKCF0bXApIHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWJhci5oYXModG1wKSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKGN0b3IgPT09IE1hcCkge1xuXHRcdFx0aWYgKGZvby5zaXplICE9PSBiYXIuc2l6ZSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGxlbiBvZiBmb28pIHtcblx0XHRcdFx0dG1wID0gbGVuWzBdO1xuXHRcdFx0XHRpZiAodG1wICYmIHR5cGVvZiB0bXAgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdFx0dG1wID0gZmluZChiYXIsIHRtcCk7XG5cdFx0XHRcdFx0aWYgKCF0bXApIHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWRlcXVhbChsZW5bMV0sIGJhci5nZXQodG1wKSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGlmIChjdG9yID09PSBBcnJheUJ1ZmZlcikge1xuXHRcdFx0Zm9vID0gbmV3IFVpbnQ4QXJyYXkoZm9vKTtcblx0XHRcdGJhciA9IG5ldyBVaW50OEFycmF5KGJhcik7XG5cdFx0fSBlbHNlIGlmIChjdG9yID09PSBEYXRhVmlldykge1xuXHRcdFx0aWYgKChsZW49Zm9vLmJ5dGVMZW5ndGgpID09PSBiYXIuYnl0ZUxlbmd0aCkge1xuXHRcdFx0XHR3aGlsZSAobGVuLS0gJiYgZm9vLmdldEludDgobGVuKSA9PT0gYmFyLmdldEludDgobGVuKSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbGVuID09PSAtMTtcblx0XHR9XG5cblx0XHRpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KGZvbykpIHtcblx0XHRcdGlmICgobGVuPWZvby5ieXRlTGVuZ3RoKSA9PT0gYmFyLmJ5dGVMZW5ndGgpIHtcblx0XHRcdFx0d2hpbGUgKGxlbi0tICYmIGZvb1tsZW5dID09PSBiYXJbbGVuXSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbGVuID09PSAtMTtcblx0XHR9XG5cblx0XHRpZiAoIWN0b3IgfHwgdHlwZW9mIGZvbyA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGxlbiA9IDA7XG5cdFx0XHRmb3IgKGN0b3IgaW4gZm9vKSB7XG5cdFx0XHRcdGlmIChoYXMuY2FsbChmb28sIGN0b3IpICYmICsrbGVuICYmICFoYXMuY2FsbChiYXIsIGN0b3IpKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlmICghKGN0b3IgaW4gYmFyKSB8fCAhZGVxdWFsKGZvb1tjdG9yXSwgYmFyW2N0b3JdKSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIE9iamVjdC5rZXlzKGJhcikubGVuZ3RoID09PSBsZW47XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZvbyAhPT0gZm9vICYmIGJhciAhPT0gYmFyO1xufVxuIiwgImltcG9ydCB7IERFRkFVTFRfT1BUSU9OUyB9IGZyb20gJy4uL2NvbnN0YW50cy50cyc7XG4vKipcbiAqIEVhc3kgcmUtdXNlIG9mIG1lcmdpbmcgd2l0aCBkZWZhdWx0IG9wdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIHVzZXIgb3B0aW9uc1xuICogQHJldHVybnMgdXNlciBvcHRpb25zIG1lcmdlZCBvdmVyIGRlZmF1bHQgb3B0aW9uc1xuICovXG5jb25zdCBtZXJnZVdpdGhEZWZhdWx0T3B0aW9ucyA9IChvcHRzID0ge30pID0+IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfT1BUSU9OUywgb3B0cyk7XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlV2l0aERlZmF1bHRPcHRpb25zO1xuIiwgImltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlNYXBwaW5nKHN0cmluZywgbWFwcGluZywgY29udmVydEVuZGluZykge1xuICBjb25zdCByb290ID0gbWFwcGluZztcblxuICBmdW5jdGlvbiBuZXh0U3VidHJlZSh0cmVlLCBuZXh0Q2hhcikge1xuICAgIGNvbnN0IHN1YnRyZWUgPSB0cmVlW25leHRDaGFyXTtcbiAgICBpZiAoc3VidHJlZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvLyBpZiB0aGUgbmV4dCBjaGlsZCBub2RlIGRvZXMgbm90IGhhdmUgYSBub2RlIHZhbHVlLCBzZXQgaXRzIG5vZGUgdmFsdWUgdG8gdGhlIGlucHV0XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyAnJzogdHJlZVsnJ10gKyBuZXh0Q2hhciB9LCB0cmVlW25leHRDaGFyXSk7XG4gIH1cblxuICBmdW5jdGlvbiBuZXdDaHVuayhyZW1haW5pbmcsIGN1cnJlbnRDdXJzb3IpIHtcbiAgICAvLyBzdGFydCBwYXJzaW5nIGEgbmV3IGNodW5rXG4gICAgY29uc3QgZmlyc3RDaGFyID0gcmVtYWluaW5nLmNoYXJBdCgwKTtcblxuICAgIHJldHVybiBwYXJzZShcbiAgICAgIE9iamVjdC5hc3NpZ24oeyAnJzogZmlyc3RDaGFyIH0sIHJvb3RbZmlyc3RDaGFyXSksXG4gICAgICByZW1haW5pbmcuc2xpY2UoMSksXG4gICAgICBjdXJyZW50Q3Vyc29yLFxuICAgICAgY3VycmVudEN1cnNvciArIDFcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2UodHJlZSwgcmVtYWluaW5nLCBsYXN0Q3Vyc29yLCBjdXJyZW50Q3Vyc29yKSB7XG4gICAgaWYgKCFyZW1haW5pbmcpIHtcbiAgICAgIGlmIChjb252ZXJ0RW5kaW5nIHx8IE9iamVjdC5rZXlzKHRyZWUpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAvLyBub3RoaW5nIG1vcmUgdG8gY29uc3VtZSwganVzdCBjb21taXQgdGhlIGxhc3QgY2h1bmsgYW5kIHJldHVybiBpdFxuICAgICAgICAvLyBzbyBhcyB0byBub3QgaGF2ZSBhbiBlbXB0eSBlbGVtZW50IGF0IHRoZSBlbmQgb2YgdGhlIHJlc3VsdFxuICAgICAgICByZXR1cm4gdHJlZVsnJ10gPyBbW2xhc3RDdXJzb3IsIGN1cnJlbnRDdXJzb3IsIHRyZWVbJyddXV0gOiBbXTtcbiAgICAgIH1cbiAgICAgIC8vIGlmIHdlIGRvbid0IHdhbnQgdG8gY29udmVydCB0aGUgZW5kaW5nLCBiZWNhdXNlIHRoZXJlIGFyZSBzdGlsbCBwb3NzaWJsZSBjb250aW51YXRpb25zXG4gICAgICAvLyByZXR1cm4gbnVsbCBhcyB0aGUgZmluYWwgbm9kZSB2YWx1ZVxuICAgICAgcmV0dXJuIFtbbGFzdEN1cnNvciwgY3VycmVudEN1cnNvciwgbnVsbF1dO1xuICAgIH1cblxuICAgIGlmIChPYmplY3Qua2V5cyh0cmVlKS5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiBbW2xhc3RDdXJzb3IsIGN1cnJlbnRDdXJzb3IsIHRyZWVbJyddXV0uY29uY2F0KFxuICAgICAgICBuZXdDaHVuayhyZW1haW5pbmcsIGN1cnJlbnRDdXJzb3IpXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHN1YnRyZWUgPSBuZXh0U3VidHJlZSh0cmVlLCByZW1haW5pbmcuY2hhckF0KDApKTtcblxuICAgIGlmIChzdWJ0cmVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBbW2xhc3RDdXJzb3IsIGN1cnJlbnRDdXJzb3IsIHRyZWVbJyddXV0uY29uY2F0KFxuICAgICAgICBuZXdDaHVuayhyZW1haW5pbmcsIGN1cnJlbnRDdXJzb3IpXG4gICAgICApO1xuICAgIH1cbiAgICAvLyBjb250aW51ZSBjdXJyZW50IGJyYW5jaFxuICAgIHJldHVybiBwYXJzZShzdWJ0cmVlLCByZW1haW5pbmcuc2xpY2UoMSksIGxhc3RDdXJzb3IsIGN1cnJlbnRDdXJzb3IgKyAxKTtcbiAgfVxuXG4gIHJldHVybiBuZXdDaHVuayhzdHJpbmcsIDApO1xufVxuXG4vLyB0cmFuc2Zvcm0gdGhlIHRyZWUsIHNvIHRoYXQgZm9yIGV4YW1wbGUgaGVwYnVyblRyZWVbJ+OClCddWyfjgYEnXVsnJ10gPT09ICd2YSdcbi8vIG9yIGthbmFUcmVlWydrJ11bJ3knXVsnYSddWycnXSA9PT0gJ+OBjeOCgydcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0odHJlZSkge1xuICByZXR1cm4gT2JqZWN0LmVudHJpZXModHJlZSkucmVkdWNlKChtYXAsIFtjaGFyLCBzdWJ0cmVlXSkgPT4ge1xuICAgIGNvbnN0IGVuZE9mQnJhbmNoID0gdHlwZU9mKHN1YnRyZWUpID09PSAnc3RyaW5nJztcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBtYXBbY2hhcl0gPSBlbmRPZkJyYW5jaCA/IHsgJyc6IHN1YnRyZWUgfSA6IHRyYW5zZm9ybShzdWJ0cmVlKTtcbiAgICByZXR1cm4gbWFwO1xuICB9LCB7fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdWJUcmVlT2YodHJlZSwgc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcuc3BsaXQoJycpLnJlZHVjZSgoY29ycmVjdFN1YlRyZWUsIGNoYXIpID0+IHtcbiAgICBpZiAoY29ycmVjdFN1YlRyZWVbY2hhcl0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBjb3JyZWN0U3ViVHJlZVtjaGFyXSA9IHt9O1xuICAgIH1cbiAgICByZXR1cm4gY29ycmVjdFN1YlRyZWVbY2hhcl07XG4gIH0sIHRyZWUpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjdXN0b20gbWFwcGluZyB0cmVlLCByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGEgZGVmYXVsdE1hcCB3aGljaCB0aGUgbmV3bHkgY3JlYXRlZCBjdXN0b21NYXBwaW5nIHdpbGwgYmUgbWVyZ2VkIHdpdGggYW5kIHJldHVybmVkXG4gKiAoY3VzdG9tTWFwKSA9PiAoZGVmYXVsdE1hcCkgPT4gbWVyZ2VkTWFwXG4gKiBAcGFyYW0gIHtPYmplY3R9IGN1c3RvbU1hcCB7ICdrYScgOiAn44GqJyB9XG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gKGRlZmF1bHRNYXApID0+IGRlZmF1bHRNZXJnZWRXaXRoQ3VzdG9tTWFwXG4gKiBAZXhhbXBsZVxuICogY29uc3Qgc2lsbHlNYXAgPSBjcmVhdGVDdXN0b21NYXBwaW5nKHsgJ+OBoeOCgyc6ICd0aW1lJywgJ+iMjic6ICdjb29raWUn44CAfSk7XG4gKiAvLyBzaWxseU1hcCBpcyBwYXNzZWQgZGVmYXVsdE1hcHBpbmcgdG8gbWVyZ2Ugd2l0aCB3aGVuIGNhbGxlZCBpbiB0b1JvbWFqaSgpXG4gKiB0b1JvbWFqaShcIkl0J3Mg6IyOIOOBoeOCgyDjgohcIiwgeyBjdXN0b21Sb21hamlNYXBwaW5nOiBzaWxseU1hcCB9KTtcbiAqIC8vID0+ICdJdCdzIGNvb2tpZSB0aW1lIHlvJztcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUN1c3RvbU1hcHBpbmcoY3VzdG9tTWFwID0ge30pIHtcbiAgY29uc3QgY3VzdG9tVHJlZSA9IHt9O1xuXG4gIGlmICh0eXBlT2YoY3VzdG9tTWFwKSA9PT0gJ29iamVjdCcpIHtcbiAgICBPYmplY3QuZW50cmllcyhjdXN0b21NYXApLmZvckVhY2goKFtyb21hLCBrYW5hXSkgPT4ge1xuICAgICAgbGV0IHN1YlRyZWUgPSBjdXN0b21UcmVlO1xuICAgICAgcm9tYS5zcGxpdCgnJykuZm9yRWFjaCgoY2hhcikgPT4ge1xuICAgICAgICBpZiAoc3ViVHJlZVtjaGFyXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc3ViVHJlZVtjaGFyXSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHN1YlRyZWUgPSBzdWJUcmVlW2NoYXJdO1xuICAgICAgfSk7XG4gICAgICBzdWJUcmVlWycnXSA9IGthbmE7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gbWFrZU1hcChtYXApIHtcbiAgICBjb25zdCBtYXBDb3B5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShtYXApKTtcblxuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybU1hcChtYXBTdWJ0cmVlLCBjdXN0b21TdWJ0cmVlKSB7XG4gICAgICBpZiAobWFwU3VidHJlZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVPZihtYXBTdWJ0cmVlKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGN1c3RvbVN1YnRyZWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMoY3VzdG9tU3VidHJlZSkucmVkdWNlKFxuICAgICAgICAobmV3U3VidHJlZSwgW2NoYXIsIHN1YnRyZWVdKSA9PiB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgbmV3U3VidHJlZVtjaGFyXSA9IHRyYW5zZm9ybU1hcChtYXBTdWJ0cmVlW2NoYXJdLCBzdWJ0cmVlKTtcbiAgICAgICAgICByZXR1cm4gbmV3U3VidHJlZTtcbiAgICAgICAgfSxcbiAgICAgICAgbWFwU3VidHJlZVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJhbnNmb3JtTWFwKG1hcENvcHksIGN1c3RvbVRyZWUpO1xuICB9O1xufVxuXG4vLyBhbGxvdyBjb25zdW1lciB0byBwYXNzIGVpdGhlciBmdW5jdGlvbiBvciBvYmplY3QgYXMgY3VzdG9tTWFwcGluZ1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQ3VzdG9tTWFwcGluZyhtYXAsIGN1c3RvbU1hcHBpbmcpIHtcbiAgaWYgKCFjdXN0b21NYXBwaW5nKSB7XG4gICAgcmV0dXJuIG1hcDtcbiAgfVxuICByZXR1cm4gdHlwZU9mKGN1c3RvbU1hcHBpbmcpID09PSAnZnVuY3Rpb24nXG4gICAgPyBjdXN0b21NYXBwaW5nKG1hcClcbiAgICA6IGNyZWF0ZUN1c3RvbU1hcHBpbmcoY3VzdG9tTWFwcGluZykobWFwKTtcbn1cbiIsICJpbXBvcnQgeyB0cmFuc2Zvcm0sIGdldFN1YlRyZWVPZiwgY3JlYXRlQ3VzdG9tTWFwcGluZyB9IGZyb20gJy4va2FuYU1hcHBpbmcnO1xuXG4vLyBOT1RFOiBub3QgZXhhY3RseSBrdW5yZWkgc2hpa2ksIGZvciBleGFtcGxlIOOBouOCgyAtPiBkeWEgaW5zdGVhZCBvZiB6eWEsIHRvIGF2b2lkIG5hbWUgY2xhc2hpbmdcbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IEJBU0lDX0tVTlJFSSA9IHtcbiAgYTogJ+OBgicsIGk6ICfjgYQnLCB1OiAn44GGJywgZTogJ+OBiCcsIG86ICfjgYonLFxuICBrOiB7IGE6ICfjgYsnLCBpOiAn44GNJywgdTogJ+OBjycsIGU6ICfjgZEnLCBvOiAn44GTJywgfSxcbiAgczogeyBhOiAn44GVJywgaTogJ+OBlycsIHU6ICfjgZknLCBlOiAn44GbJywgbzogJ+OBnScsIH0sXG4gIHQ6IHsgYTogJ+OBnycsIGk6ICfjgaEnLCB1OiAn44GkJywgZTogJ+OBpicsIG86ICfjgagnLCB9LFxuICBuOiB7IGE6ICfjgaonLCBpOiAn44GrJywgdTogJ+OBrCcsIGU6ICfjga0nLCBvOiAn44GuJywgfSxcbiAgaDogeyBhOiAn44GvJywgaTogJ+OBsicsIHU6ICfjgbUnLCBlOiAn44G4JywgbzogJ+OBuycsIH0sXG4gIG06IHsgYTogJ+OBvicsIGk6ICfjgb8nLCB1OiAn44KAJywgZTogJ+OCgScsIG86ICfjgoInLCB9LFxuICB5OiB7IGE6ICfjgoQnLCB1OiAn44KGJywgbzogJ+OCiCcgfSxcbiAgcjogeyBhOiAn44KJJywgaTogJ+OCiicsIHU6ICfjgosnLCBlOiAn44KMJywgbzogJ+OCjScsIH0sXG4gIHc6IHsgYTogJ+OCjycsIGk6ICfjgpAnLCBlOiAn44KRJywgbzogJ+OCkicsIH0sXG4gIGc6IHsgYTogJ+OBjCcsIGk6ICfjgY4nLCB1OiAn44GQJywgZTogJ+OBkicsIG86ICfjgZQnLCB9LFxuICB6OiB7IGE6ICfjgZYnLCBpOiAn44GYJywgdTogJ+OBmicsIGU6ICfjgZwnLCBvOiAn44GeJywgfSxcbiAgZDogeyBhOiAn44GgJywgaTogJ+OBoicsIHU6ICfjgaUnLCBlOiAn44GnJywgbzogJ+OBqScsIH0sXG4gIGI6IHsgYTogJ+OBsCcsIGk6ICfjgbMnLCB1OiAn44G2JywgZTogJ+OBuScsIG86ICfjgbwnLCB9LFxuICBwOiB7IGE6ICfjgbEnLCBpOiAn44G0JywgdTogJ+OBtycsIGU6ICfjgbonLCBvOiAn44G9JywgfSxcbiAgdjogeyBhOiAn44KU44GBJywgaTogJ+OClOOBgycsIHU6ICfjgpQnLCBlOiAn44KU44GHJywgbzogJ+OClOOBiScsIH0sXG59O1xuXG5jb25zdCBTUEVDSUFMX1NZTUJPTFMgPSB7XG4gICcuJzogJ+OAgicsXG4gICcsJzogJ+OAgScsXG4gICc6JzogJ++8micsXG4gICcvJzogJ+ODuycsXG4gICchJzogJ++8gScsXG4gICc/JzogJ++8nycsXG4gICd+JzogJ+OAnCcsXG4gICctJzogJ+ODvCcsXG4gICfigJgnOiAn44CMJyxcbiAgJ+KAmSc6ICfjgI0nLFxuICAn4oCcJzogJ+OAjicsXG4gICfigJ0nOiAn44CPJyxcbiAgJ1snOiAn77y7JyxcbiAgJ10nOiAn77y9JyxcbiAgJygnOiAn77yIJyxcbiAgJyknOiAn77yJJyxcbiAgJ3snOiAn772bJyxcbiAgJ30nOiAn772dJyxcbn07XG5cbmNvbnN0IENPTlNPTkFOVFMgPSB7XG4gIGs6ICfjgY0nLFxuICBzOiAn44GXJyxcbiAgdDogJ+OBoScsXG4gIG46ICfjgasnLFxuICBoOiAn44GyJyxcbiAgbTogJ+OBvycsXG4gIHI6ICfjgoonLFxuICBnOiAn44GOJyxcbiAgejogJ+OBmCcsXG4gIGQ6ICfjgaInLFxuICBiOiAn44GzJyxcbiAgcDogJ+OBtCcsXG4gIHY6ICfjgpQnLFxuICBxOiAn44GPJyxcbiAgZjogJ+OBtScsXG59O1xuY29uc3QgU01BTExfWSA9IHsgeWE6ICfjgoMnLCB5aTogJ+OBgycsIHl1OiAn44KFJywgeWU6ICfjgYcnLCB5bzogJ+OChycgfTtcbmNvbnN0IFNNQUxMX1ZPV0VMUyA9IHsgYTogJ+OBgScsIGk6ICfjgYMnLCB1OiAn44GFJywgZTogJ+OBhycsIG86ICfjgYknIH07XG5cbi8vIHR5cGluZyBvbmUgc2hvdWxkIGJlIHRoZSBzYW1lIGFzIGhhdmluZyB0eXBlZCB0aGUgb3RoZXIgaW5zdGVhZFxuY29uc3QgQUxJQVNFUyA9IHtcbiAgc2g6ICdzeScsIC8vIHNoYSAtPiBzeWFcbiAgY2g6ICd0eScsIC8vIGNobyAtPiB0eW9cbiAgY3k6ICd0eScsIC8vIGN5byAtPiB0eW9cbiAgY2h5OiAndHknLCAvLyBjaHl1IC0+IHR5dVxuICBzaHk6ICdzeScsIC8vIHNoeWEgLT4gc3lhXG4gIGo6ICd6eScsIC8vIGphIC0+IHp5YVxuICBqeTogJ3p5JywgLy8ganllIC0+IHp5ZVxuXG4gIC8vIGV4Y2VwdGlvbnMgdG8gYWJvdmUgcnVsZXNcbiAgc2hpOiAnc2knLFxuICBjaGk6ICd0aScsXG4gIHRzdTogJ3R1JyxcbiAgamk6ICd6aScsXG4gIGZ1OiAnaHUnLFxufTtcblxuLy8geHR1IC0+IOOBo1xuY29uc3QgU01BTExfTEVUVEVSUyA9IE9iamVjdC5hc3NpZ24oXG4gIHtcbiAgICB0dTogJ+OBoycsXG4gICAgd2E6ICfjgo4nLFxuICAgIGthOiAn44O1JyxcbiAgICBrZTogJ+ODticsXG4gIH0sXG4gIFNNQUxMX1ZPV0VMUyxcbiAgU01BTExfWVxuKTtcblxuLy8gZG9uJ3QgZm9sbG93IGFueSBub3RhYmxlIHBhdHRlcm5zXG5jb25zdCBTUEVDSUFMX0NBU0VTID0ge1xuICB5aTogJ+OBhCcsXG4gIHd1OiAn44GGJyxcbiAgeWU6ICfjgYTjgYcnLFxuICB3aTogJ+OBhuOBgycsXG4gIHdlOiAn44GG44GHJyxcbiAga3dhOiAn44GP44GBJyxcbiAgd2h1OiAn44GGJyxcbiAgLy8gYmVjYXVzZSBpdCdzIG5vdCB0aHlhIGZvciDjgabjgoMgYnV0IHRoYVxuICAvLyBhbmQgdGhhIGlzIG5vdCDjgabjgYEsIGJ1dCDjgabjgoNcbiAgdGhhOiAn44Gm44KDJyxcbiAgdGh1OiAn44Gm44KFJyxcbiAgdGhvOiAn44Gm44KHJyxcbiAgZGhhOiAn44Gn44KDJyxcbiAgZGh1OiAn44Gn44KFJyxcbiAgZGhvOiAn44Gn44KHJyxcbn07XG5cbmNvbnN0IEFJVUVPX0NPTlNUUlVDVElPTlMgPSB7XG4gIHdoOiAn44GGJyxcbiAga3c6ICfjgY8nLFxuICBxdzogJ+OBjycsXG4gIHE6ICfjgY8nLFxuICBndzogJ+OBkCcsXG4gIHN3OiAn44GZJyxcbiAgdHM6ICfjgaQnLFxuICB0aDogJ+OBpicsXG4gIHR3OiAn44GoJyxcbiAgZGg6ICfjgacnLFxuICBkdzogJ+OBqScsXG4gIGZ3OiAn44G1JyxcbiAgZjogJ+OBtScsXG59O1xuXG4vKiBlc2xpbnQtZW5hYmxlICovXG5mdW5jdGlvbiBjcmVhdGVSb21hamlUb0thbmFNYXAoKSB7XG4gIGNvbnN0IGthbmFUcmVlID0gdHJhbnNmb3JtKEJBU0lDX0tVTlJFSSk7XG4gIC8vIHBzZXVkbyBwYXJ0aWFsIGFwcGxpY2F0aW9uXG4gIGNvbnN0IHN1YnRyZWVPZiA9IChzdHJpbmcpID0+IGdldFN1YlRyZWVPZihrYW5hVHJlZSwgc3RyaW5nKTtcblxuICAvLyBhZGQgdHlhLCBzeWEsIGV0Yy5cbiAgT2JqZWN0LmVudHJpZXMoQ09OU09OQU5UUykuZm9yRWFjaCgoW2NvbnNvbmFudCwgeUthbmFdKSA9PiB7XG4gICAgT2JqZWN0LmVudHJpZXMoU01BTExfWSkuZm9yRWFjaCgoW3JvbWEsIGthbmFdKSA9PiB7XG4gICAgICAvLyBmb3IgZXhhbXBsZSBreW8gLT4g44GNICsg44KHXG4gICAgICBzdWJ0cmVlT2YoY29uc29uYW50ICsgcm9tYSlbJyddID0geUthbmEgKyBrYW5hO1xuICAgIH0pO1xuICB9KTtcblxuICBPYmplY3QuZW50cmllcyhTUEVDSUFMX1NZTUJPTFMpLmZvckVhY2goKFtzeW1ib2wsIGpzeW1ib2xdKSA9PiB7XG4gICAgc3VidHJlZU9mKHN5bWJvbClbJyddID0ganN5bWJvbDtcbiAgfSk7XG5cbiAgLy8gdGhpbmdzIGxpa2Ug44GG44GDLCDjgY/jgYMsIGV0Yy5cbiAgT2JqZWN0LmVudHJpZXMoQUlVRU9fQ09OU1RSVUNUSU9OUykuZm9yRWFjaCgoW2NvbnNvbmFudCwgYWl1ZW9LYW5hXSkgPT4ge1xuICAgIE9iamVjdC5lbnRyaWVzKFNNQUxMX1ZPV0VMUykuZm9yRWFjaCgoW3Zvd2VsLCBrYW5hXSkgPT4ge1xuICAgICAgY29uc3Qgc3VidHJlZSA9IHN1YnRyZWVPZihjb25zb25hbnQgKyB2b3dlbCk7XG4gICAgICBzdWJ0cmVlWycnXSA9IGFpdWVvS2FuYSArIGthbmE7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIGRpZmZlcmVudCB3YXlzIHRvIHdyaXRlIOOCk1xuICBbJ24nLCBcIm4nXCIsICd4biddLmZvckVhY2goKG5DaGFyKSA9PiB7XG4gICAgc3VidHJlZU9mKG5DaGFyKVsnJ10gPSAn44KTJztcbiAgfSk7XG5cbiAgLy8gYyBpcyBlcXVpdmFsZW50IHRvIGssIGJ1dCBub3QgZm9yIGNoaSwgY2hhLCBldGMuIHRoYXQncyB3aHkgd2UgaGF2ZSB0byBtYWtlIGEgY29weSBvZiBrXG4gIGthbmFUcmVlLmMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGthbmFUcmVlLmspKTtcblxuICBPYmplY3QuZW50cmllcyhBTElBU0VTKS5mb3JFYWNoKChbc3RyaW5nLCBhbHRlcm5hdGl2ZV0pID0+IHtcbiAgICBjb25zdCBhbGxFeGNlcHRMYXN0ID0gc3RyaW5nLnNsaWNlKDAsIHN0cmluZy5sZW5ndGggLSAxKTtcbiAgICBjb25zdCBsYXN0ID0gc3RyaW5nLmNoYXJBdChzdHJpbmcubGVuZ3RoIC0gMSk7XG4gICAgY29uc3QgcGFyZW50VHJlZSA9IHN1YnRyZWVPZihhbGxFeGNlcHRMYXN0KTtcbiAgICAvLyBjb3B5IHRvIGF2b2lkIHJlY3Vyc2l2ZSBjb250YWlubWVudFxuICAgIHBhcmVudFRyZWVbbGFzdF0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHN1YnRyZWVPZihhbHRlcm5hdGl2ZSkpKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gZ2V0QWx0ZXJuYXRpdmVzKHN0cmluZykge1xuICAgIHJldHVybiBbLi4uT2JqZWN0LmVudHJpZXMoQUxJQVNFUyksIC4uLltbJ2MnLCAnayddXV0ucmVkdWNlKFxuICAgICAgKGxpc3QsIFthbHQsIHJvbWFdKSA9PiAoc3RyaW5nLnN0YXJ0c1dpdGgocm9tYSkgPyBsaXN0LmNvbmNhdChzdHJpbmcucmVwbGFjZShyb21hLCBhbHQpKSA6IGxpc3QpLFxuICAgICAgW11cbiAgICApO1xuICB9XG5cbiAgT2JqZWN0LmVudHJpZXMoU01BTExfTEVUVEVSUykuZm9yRWFjaCgoW2t1bnJlaVJvbWEsIGthbmFdKSA9PiB7XG4gICAgY29uc3QgbGFzdCA9IChjaGFyKSA9PiBjaGFyLmNoYXJBdChjaGFyLmxlbmd0aCAtIDEpO1xuICAgIGNvbnN0IGFsbEV4Y2VwdExhc3QgPSAoY2hhcnMpID0+IGNoYXJzLnNsaWNlKDAsIGNoYXJzLmxlbmd0aCAtIDEpO1xuICAgIGNvbnN0IHhSb21hID0gYHgke2t1bnJlaVJvbWF9YDtcbiAgICBjb25zdCB4U3VidHJlZSA9IHN1YnRyZWVPZih4Um9tYSk7XG4gICAgeFN1YnRyZWVbJyddID0ga2FuYTtcblxuICAgIC8vIGx0dSAtPiB4dHUgLT4g44GjXG4gICAgY29uc3QgcGFyZW50VHJlZSA9IHN1YnRyZWVPZihgbCR7YWxsRXhjZXB0TGFzdChrdW5yZWlSb21hKX1gKTtcbiAgICBwYXJlbnRUcmVlW2xhc3Qoa3VucmVpUm9tYSldID0geFN1YnRyZWU7XG5cbiAgICAvLyBsdHN1IC0+IGx0dSAtPiDjgaNcbiAgICBnZXRBbHRlcm5hdGl2ZXMoa3VucmVpUm9tYSkuZm9yRWFjaCgoYWx0Um9tYSkgPT4ge1xuICAgICAgWydsJywgJ3gnXS5mb3JFYWNoKChwcmVmaXgpID0+IHtcbiAgICAgICAgY29uc3QgYWx0UGFyZW50VHJlZSA9IHN1YnRyZWVPZihwcmVmaXggKyBhbGxFeGNlcHRMYXN0KGFsdFJvbWEpKTtcbiAgICAgICAgYWx0UGFyZW50VHJlZVtsYXN0KGFsdFJvbWEpXSA9IHN1YnRyZWVPZihwcmVmaXggKyBrdW5yZWlSb21hKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcblxuICBPYmplY3QuZW50cmllcyhTUEVDSUFMX0NBU0VTKS5mb3JFYWNoKChbc3RyaW5nLCBrYW5hXSkgPT4ge1xuICAgIHN1YnRyZWVPZihzdHJpbmcpWycnXSA9IGthbmE7XG4gIH0pO1xuXG4gIC8vIGFkZCBra2EsIHR0YSwgZXRjLlxuICBmdW5jdGlvbiBhZGRUc3UodHJlZSkge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyh0cmVlKS5yZWR1Y2UoKHRzdVRyZWUsIFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgLy8gd2UgaGF2ZSByZWFjaGVkIHRoZSBib3R0b20gb2YgdGhpcyBicmFuY2hcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIHRzdVRyZWVba2V5XSA9IGDjgaMke3ZhbHVlfWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBtb3JlIHN1YnRyZWVzXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICB0c3VUcmVlW2tleV0gPSBhZGRUc3UodmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRzdVRyZWU7XG4gICAgfSwge30pO1xuICB9XG4gIC8vIGhhdmUgdG8gZXhwbGljaXRseSBuYW1lIGMgaGVyZSwgYmVjYXVzZSB3ZSBtYWRlIGl0IGEgY29weSBvZiBrLCBub3QgYSByZWZlcmVuY2VcbiAgWy4uLk9iamVjdC5rZXlzKENPTlNPTkFOVFMpLCAnYycsICd5JywgJ3cnLCAnaiddLmZvckVhY2goKGNvbnNvbmFudCkgPT4ge1xuICAgIGNvbnN0IHN1YnRyZWUgPSBrYW5hVHJlZVtjb25zb25hbnRdO1xuICAgIHN1YnRyZWVbY29uc29uYW50XSA9IGFkZFRzdShzdWJ0cmVlKTtcbiAgfSk7XG4gIC8vIG5uIHNob3VsZCBub3QgYmUg44Gj44KTXG4gIGRlbGV0ZSBrYW5hVHJlZS5uLm47XG4gIC8vIHNvbGlkaWZ5IHRoZSByZXN1bHRzLCBzbyB0aGF0IHRoZXJlIHRoZXJlIGlzIHJlZmVyZW50aWFsIHRyYW5zcGFyZW5jeSB3aXRoaW4gdGhlIHRyZWVcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShrYW5hVHJlZSkpKTtcbn1cblxubGV0IHJvbWFqaVRvS2FuYU1hcCA9IG51bGw7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb21hamlUb0thbmFUcmVlKCkge1xuICBpZiAocm9tYWppVG9LYW5hTWFwID09IG51bGwpIHtcbiAgICByb21hamlUb0thbmFNYXAgPSBjcmVhdGVSb21hamlUb0thbmFNYXAoKTtcbiAgfVxuICByZXR1cm4gcm9tYWppVG9LYW5hTWFwO1xufVxuXG5leHBvcnQgY29uc3QgVVNFX09CU09MRVRFX0tBTkFfTUFQID0gY3JlYXRlQ3VzdG9tTWFwcGluZyh7XG4gIHdpOiAn44KQJyxcbiAgd2U6ICfjgpEnLFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBJTUVfTU9ERV9NQVAobWFwKSB7XG4gIC8vIGluIElNRSBtb2RlLCB3ZSBkbyBub3Qgd2FudCB0byBjb252ZXJ0IHNpbmdsZSBuc1xuICBjb25zdCBtYXBDb3B5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShtYXApKTtcbiAgbWFwQ29weS5uLm4gPSB7ICcnOiAn44KTJyB9O1xuICBtYXBDb3B5Lm5bJyAnXSA9IHsgJyc6ICfjgpMnIH07XG4gIHJldHVybiBtYXBDb3B5O1xufVxuIiwgImltcG9ydCBpc0VtcHR5IGZyb20gJy4vaXNFbXB0eSc7XG5pbXBvcnQgaXNDaGFySW5SYW5nZSBmcm9tICcuL2lzQ2hhckluUmFuZ2UnO1xuaW1wb3J0IHsgTEFUSU5fVVBQRVJDQVNFX1NUQVJULCBMQVRJTl9VUFBFUkNBU0VfRU5EIH0gZnJvbSAnLi4vY29uc3RhbnRzLnRzJztcblxuLyoqXG4gKiBUZXN0cyBpZiBjaGFyIGlzIGluIEVuZ2xpc2ggdW5pY29kZSB1cHBlcmNhc2UgcmFuZ2VcbiAqIEBwYXJhbSAge1N0cmluZ30gY2hhclxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNDaGFyVXBwZXJDYXNlKGNoYXIgPSAnJykge1xuICBpZiAoaXNFbXB0eShjaGFyKSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gaXNDaGFySW5SYW5nZShjaGFyLCBMQVRJTl9VUFBFUkNBU0VfU1RBUlQsIExBVElOX1VQUEVSQ0FTRV9FTkQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc0NoYXJVcHBlckNhc2U7XG4iLCAiaW1wb3J0IGlzRW1wdHkgZnJvbSAnLi9pc0VtcHR5JztcbmltcG9ydCB7IFBST0xPTkdFRF9TT1VORF9NQVJLIH0gZnJvbSAnLi4vY29uc3RhbnRzLnRzJztcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgY2hhciBpcyAn44O8J1xuICogQHBhcmFtICB7U3RyaW5nfSBjaGFyIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzQ2hhckxvbmdEYXNoKGNoYXIgPSAnJykge1xuICBpZiAoaXNFbXB0eShjaGFyKSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gY2hhci5jaGFyQ29kZUF0KDApID09PSBQUk9MT05HRURfU09VTkRfTUFSSztcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNDaGFyTG9uZ0Rhc2g7XG4iLCAiaW1wb3J0IGlzRW1wdHkgZnJvbSAnLi9pc0VtcHR5JztcbmltcG9ydCB7IEtBTkFfU0xBU0hfRE9UIH0gZnJvbSAnLi4vY29uc3RhbnRzLnRzJztcblxuLyoqXG4gKiBUZXN0cyBpZiBjaGFyIGlzICfjg7snXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGNoYXJcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgJ+ODuydcbiAqL1xuZnVuY3Rpb24gaXNDaGFyU2xhc2hEb3QoY2hhciA9ICcnKSB7XG4gIGlmIChpc0VtcHR5KGNoYXIpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBjaGFyLmNoYXJDb2RlQXQoMCkgPT09IEtBTkFfU0xBU0hfRE9UO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc0NoYXJTbGFzaERvdDtcbiIsICJpbXBvcnQgaXNFbXB0eSBmcm9tICcuL2lzRW1wdHknO1xuaW1wb3J0IGlzQ2hhckxvbmdEYXNoIGZyb20gJy4vaXNDaGFyTG9uZ0Rhc2gnO1xuaW1wb3J0IGlzQ2hhckluUmFuZ2UgZnJvbSAnLi9pc0NoYXJJblJhbmdlJztcbmltcG9ydCB7XG4gIEhJUkFHQU5BX1NUQVJULFxuICBISVJBR0FOQV9FTkQsXG59IGZyb20gJy4uL2NvbnN0YW50cy50cyc7XG5cbi8qKlxuICogVGVzdHMgYSBjaGFyYWN0ZXIuIFJldHVybnMgdHJ1ZSBpZiB0aGUgY2hhcmFjdGVyIGlzIFtIaXJhZ2FuYV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSGlyYWdhbmEpLlxuICogQHBhcmFtICB7U3RyaW5nfSBjaGFyIGNoYXJhY3RlciBzdHJpbmcgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNDaGFySGlyYWdhbmEoY2hhciA9ICcnKSB7XG4gIGlmIChpc0VtcHR5KGNoYXIpKSByZXR1cm4gZmFsc2U7XG4gIGlmIChpc0NoYXJMb25nRGFzaChjaGFyKSkgcmV0dXJuIHRydWU7XG4gIHJldHVybiBpc0NoYXJJblJhbmdlKGNoYXIsIEhJUkFHQU5BX1NUQVJULCBISVJBR0FOQV9FTkQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc0NoYXJIaXJhZ2FuYTtcbiIsICJpbXBvcnQgeyBLQVRBS0FOQV9TVEFSVCwgSElSQUdBTkFfU1RBUlQgfSBmcm9tICcuLi9jb25zdGFudHMudHMnO1xuXG5pbXBvcnQgaXNDaGFyTG9uZ0Rhc2ggZnJvbSAnLi9pc0NoYXJMb25nRGFzaCc7XG5pbXBvcnQgaXNDaGFyU2xhc2hEb3QgZnJvbSAnLi9pc0NoYXJTbGFzaERvdCc7XG5pbXBvcnQgaXNDaGFySGlyYWdhbmEgZnJvbSAnLi9pc0NoYXJIaXJhZ2FuYSc7XG5cbi8qKlxuICogQ29udmVydCBbSGlyYWdhbmFdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0hpcmFnYW5hKSB0byBbS2F0YWthbmFdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0thdGFrYW5hKVxuICogUGFzc2VzIHRocm91Z2ggYW55IG5vbi1oaXJhZ2FuYSBjaGFyc1xuICogQHByaXZhdGVcbiAqIEBwYXJhbSAge1N0cmluZ30gW2lucHV0PScnXSB0ZXh0IGlucHV0XG4gKiBAcmV0dXJuIHtTdHJpbmd9IGNvbnZlcnRlZCB0ZXh0XG4gKiBAZXhhbXBsZVxuICogaGlyYWdhbmFUb0thdGFrYW5hKCfjgbLjgonjgYzjgaonKVxuICogLy8gPT4gXCLjg5Ljg6njgqzjg4pcIlxuICogaGlyYWdhbmFUb0thdGFrYW5hKCfjgbLjgonjgYzjgaogaXMgYSB0eXBlIG9mIGthbmEnKVxuICogLy8gPT4gXCLjg5Ljg6njgqzjg4ogaXMgYSB0eXBlIG9mIGthbmFcIlxuICovXG5mdW5jdGlvbiBoaXJhZ2FuYVRvS2F0YWthbmEoaW5wdXQgPSAnJykge1xuICBjb25zdCBrYXRhID0gW107XG4gIGlucHV0LnNwbGl0KCcnKS5mb3JFYWNoKChjaGFyKSA9PiB7XG4gICAgLy8gU2hvcnQgY2lyY3VpdCB0byBhdm9pZCBpbmNvcnJlY3QgY29kZXNoaWZ0IGZvciAn44O8JyBhbmQgJ+ODuydcbiAgICBpZiAoaXNDaGFyTG9uZ0Rhc2goY2hhcikgfHwgaXNDaGFyU2xhc2hEb3QoY2hhcikpIHtcbiAgICAgIGthdGEucHVzaChjaGFyKTtcbiAgICB9IGVsc2UgaWYgKGlzQ2hhckhpcmFnYW5hKGNoYXIpKSB7XG4gICAgICAvLyBTaGlmdCBjaGFyY29kZS5cbiAgICAgIGNvbnN0IGNvZGUgPSBjaGFyLmNoYXJDb2RlQXQoMCkgKyAoS0FUQUtBTkFfU1RBUlQgLSBISVJBR0FOQV9TVEFSVCk7XG4gICAgICBjb25zdCBrYXRhQ2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSk7XG4gICAgICBrYXRhLnB1c2goa2F0YUNoYXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBQYXNzIG5vbi1oaXJhZ2FuYSBjaGFycyB0aHJvdWdoXG4gICAgICBrYXRhLnB1c2goY2hhcik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGthdGEuam9pbignJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhpcmFnYW5hVG9LYXRha2FuYTtcbiIsICJpbXBvcnQgbWVtb2l6ZU9uZSBmcm9tICdtZW1vaXplLW9uZSc7XG5pbXBvcnQgeyBkZXF1YWwgfSBmcm9tICdkZXF1YWwnO1xuXG5pbXBvcnQgeyBUT19LQU5BX01FVEhPRFMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgbWVyZ2VXaXRoRGVmYXVsdE9wdGlvbnMgZnJvbSAnLi91dGlscy9tZXJnZVdpdGhEZWZhdWx0T3B0aW9ucyc7XG5pbXBvcnQge1xuICBnZXRSb21hamlUb0thbmFUcmVlLFxuICBJTUVfTU9ERV9NQVAsXG4gIFVTRV9PQlNPTEVURV9LQU5BX01BUCxcbn0gZnJvbSAnLi91dGlscy9yb21hamlUb0thbmFNYXAnO1xuaW1wb3J0IHsgYXBwbHlNYXBwaW5nLCBtZXJnZUN1c3RvbU1hcHBpbmcgfSBmcm9tICcuL3V0aWxzL2thbmFNYXBwaW5nJztcbmltcG9ydCBpc0NoYXJVcHBlckNhc2UgZnJvbSAnLi91dGlscy9pc0NoYXJVcHBlckNhc2UnO1xuaW1wb3J0IGhpcmFnYW5hVG9LYXRha2FuYSBmcm9tICcuL3V0aWxzL2hpcmFnYW5hVG9LYXRha2FuYSc7XG5cbi8vIG1lbW9pemUgYW5kIGRlZXBseSBjb21wYXJlIGFyZ3Mgc28gd2Ugb25seSByZWNyZWF0ZSB3aGVuIG5lY2Vzc2FyeVxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvbWFqaVRvS2FuYU1hcCA9IG1lbW9pemVPbmUoXG4gIChJTUVNb2RlLCB1c2VPYnNvbGV0ZUthbmEsIGN1c3RvbUthbmFNYXBwaW5nKSA9PiB7XG4gICAgbGV0IG1hcCA9IGdldFJvbWFqaVRvS2FuYVRyZWUoKTtcblxuICAgIG1hcCA9IElNRU1vZGUgPyBJTUVfTU9ERV9NQVAobWFwKSA6IG1hcDtcbiAgICBtYXAgPSB1c2VPYnNvbGV0ZUthbmEgPyBVU0VfT0JTT0xFVEVfS0FOQV9NQVAobWFwKSA6IG1hcDtcblxuICAgIGlmIChjdXN0b21LYW5hTWFwcGluZykge1xuICAgICAgbWFwID0gbWVyZ2VDdXN0b21NYXBwaW5nKG1hcCwgY3VzdG9tS2FuYU1hcHBpbmcpO1xuICAgIH1cblxuICAgIHJldHVybiBtYXA7XG4gIH0sXG4gIGRlcXVhbFxuKTtcblxuLyoqXG4gKiBDb252ZXJ0IFtSb21hamldKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1JvbWFqaSkgdG8gW0thbmFdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0thbmEpLCBsb3dlcmNhc2UgdGV4dCB3aWxsIHJlc3VsdCBpbiBbSGlyYWdhbmFdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0hpcmFnYW5hKSBhbmQgdXBwZXJjYXNlIHRleHQgd2lsbCByZXN1bHQgaW4gW0thdGFrYW5hXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9LYXRha2FuYSkuXG4gKiBAcGFyYW0gIHtTdHJpbmd9IFtpbnB1dD0nJ10gdGV4dFxuICogQHBhcmFtICB7RGVmYXVsdE9wdGlvbnN9IFtvcHRpb25zPWRlZmF1bHRPcHRpb25zXVxuICogQHBhcmFtICB7T2JqZWN0LjxzdHJpbmcsIHN0cmluZz59IFttYXBdIGN1c3RvbSBtYXBwaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGNvbnZlcnRlZCB0ZXh0XG4gKiBAZXhhbXBsZVxuICogdG9LYW5hKCdvbmFqaSBCVVRUU1VVSkknKVxuICogLy8gPT4gJ+OBiuOBquOBmCDjg5bjg4Pjg4TjgqbjgrgnXG4gKiB0b0thbmEoJ09OQUpJIGJ1dHRzdXVqaScpXG4gKiAvLyA9PiAn44Kq44OK44K4IOOBtuOBo+OBpOOBhuOBmCdcbiAqIHRvS2FuYSgn5bqn56aF4oCYemF6ZW7igJnjgrnjgr/jgqTjg6snKVxuICogLy8gPT4gJ+W6p+emheOAjOOBluOBnOOCk+OAjeOCueOCv+OCpOODqydcbiAqIHRvS2FuYSgnYmF0c3VnZS1tdScpXG4gKiAvLyA9PiAn44Gw44Gk44GS44O844KAJ1xuICogdG9LYW5hKCchPy46Lyx+LeKAmOKAmeKAnOKAnVtdKCl7fScpIC8vIFB1bmN0dWF0aW9uIGNvbnZlcnNpb25cbiAqIC8vID0+ICfvvIHvvJ/jgILvvJrjg7vjgIHjgJzjg7zjgIzjgI3jgI7jgI/vvLvvvL3vvIjvvInvvZvvvZ0nXG4gKiB0b0thbmEoJ3dlJywgeyB1c2VPYnNvbGV0ZUthbmE6IHRydWUgfSlcbiAqIC8vID0+ICfjgpEnXG4gKiB0b0thbmEoJ3dhbmFrYW5hJywgeyBjdXN0b21LYW5hTWFwcGluZzogeyBuYTogJ+OBqycsIGthOiAnYmFuYScgfSB9KTtcbiAqIC8vID0+ICfjgo/jgatiYW5h44GrJ1xuICovXG5leHBvcnQgZnVuY3Rpb24gdG9LYW5hKGlucHV0ID0gJycsIG9wdGlvbnMgPSB7fSwgbWFwKSB7XG4gIGxldCBjb25maWc7XG4gIGlmICghbWFwKSB7XG4gICAgY29uZmlnID0gbWVyZ2VXaXRoRGVmYXVsdE9wdGlvbnMob3B0aW9ucyk7XG4gICAgbWFwID0gY3JlYXRlUm9tYWppVG9LYW5hTWFwKFxuICAgICAgY29uZmlnLklNRU1vZGUsXG4gICAgICBjb25maWcudXNlT2Jzb2xldGVLYW5hLFxuICAgICAgY29uZmlnLmN1c3RvbUthbmFNYXBwaW5nXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcgPSBvcHRpb25zO1xuICB9XG5cbiAgLy8gdGhyb3cgYXdheSB0aGUgc3Vic3RyaW5nIGluZGV4IGluZm9ybWF0aW9uIGFuZCBqdXN0IGNvbmNhdGVuYXRlIGFsbCB0aGUga2FuYVxuICByZXR1cm4gc3BsaXRJbnRvQ29udmVydGVkS2FuYShpbnB1dCwgY29uZmlnLCBtYXApXG4gICAgLm1hcCgoa2FuYVRva2VuKSA9PiB7XG4gICAgICBjb25zdCBbc3RhcnQsIGVuZCwga2FuYV0gPSBrYW5hVG9rZW47XG4gICAgICBpZiAoa2FuYSA9PT0gbnVsbCkge1xuICAgICAgICAvLyBoYXZlbid0IGNvbnZlcnRlZCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHNpbmNlIHdlIGFyZSBpbiBJTUUgbW9kZVxuICAgICAgICByZXR1cm4gaW5wdXQuc2xpY2Uoc3RhcnQpO1xuICAgICAgfVxuICAgICAgY29uc3QgZW5mb3JjZUhpcmFnYW5hID0gY29uZmlnLklNRU1vZGUgPT09IFRPX0tBTkFfTUVUSE9EUy5ISVJBR0FOQTtcbiAgICAgIGNvbnN0IGVuZm9yY2VLYXRha2FuYSA9IGNvbmZpZy5JTUVNb2RlID09PSBUT19LQU5BX01FVEhPRFMuS0FUQUtBTkFcbiAgICAgICAgfHwgWy4uLmlucHV0LnNsaWNlKHN0YXJ0LCBlbmQpXS5ldmVyeShpc0NoYXJVcHBlckNhc2UpO1xuXG4gICAgICByZXR1cm4gZW5mb3JjZUhpcmFnYW5hIHx8ICFlbmZvcmNlS2F0YWthbmFcbiAgICAgICAgPyBrYW5hXG4gICAgICAgIDogaGlyYWdhbmFUb0thdGFrYW5hKGthbmEpO1xuICAgIH0pXG4gICAgLmpvaW4oJycpO1xufVxuXG4vKipcbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IFtpbnB1dD0nJ10gaW5wdXQgdGV4dFxuICogQHBhcmFtIHtEZWZhdWx0T3B0aW9uc30gW29wdGlvbnM9ZGVmYXVsdE9wdGlvbnNdIHRvS2FuYSBvcHRpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gW21hcF0gY3VzdG9tIG1hcHBpbmdcbiAqIEByZXR1cm5zIHtBcnJheVtdfSBbW3N0YXJ0LCBlbmQsIHRva2VuXV1cbiAqIEBleGFtcGxlXG4gKiBzcGxpdEludG9Db252ZXJ0ZWRLYW5hKCdidXR0c3V1amknKVxuICogLy8gPT4gW1swLCAyLCAn44G2J10sIFsyLCA2LCAn44Gj44GkJ10sIFs2LCA3LCAn44GGJ10sIFs3LCA5LCAn44GYJ11dXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcGxpdEludG9Db252ZXJ0ZWRLYW5hKGlucHV0ID0gJycsIG9wdGlvbnMgPSB7fSwgbWFwKSB7XG4gIGNvbnN0IHsgSU1FTW9kZSwgdXNlT2Jzb2xldGVLYW5hLCBjdXN0b21LYW5hTWFwcGluZyB9ID0gb3B0aW9ucztcblxuICBpZiAoIW1hcCkge1xuICAgIG1hcCA9IGNyZWF0ZVJvbWFqaVRvS2FuYU1hcChJTUVNb2RlLCB1c2VPYnNvbGV0ZUthbmEsIGN1c3RvbUthbmFNYXBwaW5nKTtcbiAgfVxuXG4gIHJldHVybiBhcHBseU1hcHBpbmcoaW5wdXQudG9Mb3dlckNhc2UoKSwgbWFwLCAhSU1FTW9kZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvS2FuYTtcbiIsICJpbXBvcnQgaXNKYXBhbmVzZSBmcm9tICcuLi9pc0phcGFuZXNlJztcbmltcG9ydCB0b0thbmEsIHsgY3JlYXRlUm9tYWppVG9LYW5hTWFwIH0gZnJvbSAnLi4vdG9LYW5hJztcbmltcG9ydCBtZXJnZVdpdGhEZWZhdWx0T3B0aW9ucyBmcm9tICcuL21lcmdlV2l0aERlZmF1bHRPcHRpb25zJztcblxubGV0IExJU1RFTkVSUyA9IFtdO1xuLyoqXG4gKiBBdXRvbWFnaWNhbGx5IHJlcGxhY2VzIGlucHV0IHZhbHVlcyB3aXRoIGNvbnZlcnRlZCB0ZXh0IHRvIGthbmFcbiAqIEBwYXJhbSAge2RlZmF1bHRPcHRpb25zfSBbb3B0aW9uc10gdXNlciBjb25maWcgb3ZlcnJpZGVzLCBkZWZhdWx0IGNvbnZlcnNpb24gaXMgdG9LYW5hKClcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBldmVudCBoYW5kbGVyIHdpdGggYm91bmQgb3B0aW9uc1xuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VPbklucHV0KG9wdGlvbnMpIHtcbiAgbGV0IHByZXZJbnB1dDtcblxuICAvLyBFbmZvcmNlIElNRU1vZGUgaWYgbm90IGFscmVhZHkgc3BlY2lmaWVkXG4gIGNvbnN0IG1lcmdlZENvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIG1lcmdlV2l0aERlZmF1bHRPcHRpb25zKG9wdGlvbnMpLCB7XG4gICAgSU1FTW9kZTogb3B0aW9ucy5JTUVNb2RlIHx8IHRydWUsXG4gIH0pO1xuXG4gIGNvbnN0IHByZUNvbmZpZ3VyZWRNYXAgPSBjcmVhdGVSb21hamlUb0thbmFNYXAoXG4gICAgbWVyZ2VkQ29uZmlnLklNRU1vZGUsXG4gICAgbWVyZ2VkQ29uZmlnLnVzZU9ic29sZXRlS2FuYSxcbiAgICBtZXJnZWRDb25maWcuY3VzdG9tS2FuYU1hcHBpbmdcbiAgKTtcblxuICBjb25zdCB0cmlnZ2VycyA9IFtcbiAgICAuLi5PYmplY3Qua2V5cyhwcmVDb25maWd1cmVkTWFwKSxcbiAgICAuLi5PYmplY3Qua2V5cyhwcmVDb25maWd1cmVkTWFwKS5tYXAoKGNoYXIpID0+IGNoYXIudG9VcHBlckNhc2UoKSksXG4gIF07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIG9uSW5wdXQoeyB0YXJnZXQgfSkge1xuICAgIGlmIChcbiAgICAgIHRhcmdldC52YWx1ZSAhPT0gcHJldklucHV0XG4gICAgICAmJiB0YXJnZXQuZGF0YXNldC5pZ25vcmVDb21wb3NpdGlvbiAhPT0gJ3RydWUnXG4gICAgKSB7XG4gICAgICBjb252ZXJ0SW5wdXQodGFyZ2V0LCBtZXJnZWRDb25maWcsIHByZUNvbmZpZ3VyZWRNYXAsIHRyaWdnZXJzLCBwcmV2SW5wdXQpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRJbnB1dCh0YXJnZXQsIG9wdGlvbnMsIG1hcCwgdHJpZ2dlcnMsIHByZXZJbnB1dCkge1xuICBjb25zdCBbaGVhZCwgdGV4dFRvQ29udmVydCwgdGFpbF0gPSBzcGxpdElucHV0KFxuICAgIHRhcmdldC52YWx1ZSxcbiAgICB0YXJnZXQuc2VsZWN0aW9uRW5kLFxuICAgIHRyaWdnZXJzXG4gICk7XG4gIGNvbnN0IGNvbnZlcnRlZFRleHQgPSB0b0thbmEodGV4dFRvQ29udmVydCwgb3B0aW9ucywgbWFwKTtcbiAgY29uc3QgY2hhbmdlZCA9IHRleHRUb0NvbnZlcnQgIT09IGNvbnZlcnRlZFRleHQ7XG5cbiAgaWYgKGNoYW5nZWQpIHtcbiAgICBjb25zdCBuZXdDdXJzb3IgPSBoZWFkLmxlbmd0aCArIGNvbnZlcnRlZFRleHQubGVuZ3RoO1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gaGVhZCArIGNvbnZlcnRlZFRleHQgKyB0YWlsO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHRhcmdldC52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHByZXZJbnB1dCA9IG5ld1ZhbHVlO1xuXG4gICAgaWYgKHRhaWwubGVuZ3RoKSB7XG4gICAgICAvLyBwdXNoIGxhdGVyIG9uIGV2ZW50IGxvb3AgKG90aGVyd2lzZSBtaWQtdGV4dCBpbnNlcnRpb24gY2FuIGJlIDEgY2hhciB0b28gZmFyIHRvIHRoZSByaWdodClcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGFyZ2V0LnNldFNlbGVjdGlvblJhbmdlKG5ld0N1cnNvciwgbmV3Q3Vyc29yKSwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC5zZXRTZWxlY3Rpb25SYW5nZShuZXdDdXJzb3IsIG5ld0N1cnNvcik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHByZXZJbnB1dCA9IHRhcmdldC52YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Db21wb3NpdGlvbih7IHR5cGUsIHRhcmdldCwgZGF0YSB9KSB7XG4gIC8vIG5hdmlnYXRvci5wbGF0Zm9ybSBpcyBub3QgMTAwJSByZWxpYWJsZSBmb3Igc2luZ2xpbmcgb3V0IGFsbCBPUyxcbiAgLy8gYnV0IGZvciBkZXRlcm1pbmluZyBkZXNrdG9wIFwiTWFjIE9TXCIgaXQgaXMgZWZmZWN0aXZlIGVub3VnaC5cbiAgY29uc3QgaXNNYWNPUyA9IC9NYWMvLnRlc3Qod2luZG93Lm5hdmlnYXRvciAmJiB3aW5kb3cubmF2aWdhdG9yLnBsYXRmb3JtKTtcbiAgLy8gV2UgZG9uJ3Qgd2FudCB0byBpZ25vcmUgb24gQW5kcm9pZDpcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL1dhbmlLYW5pL1dhbmFLYW5hL2lzc3Vlcy84MlxuICAvLyBCdXQgTWFjT1MgSU1FIGF1dG8tY2xvc2VzIGlmIHdlIGRvbid0IGlnbm9yZTpcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL1dhbmlLYW5pL1dhbmFLYW5hL2lzc3Vlcy83MVxuICAvLyBPdGhlciBwbGF0Zm9ybSBKYXBhbmVzZSBJTUVzIHBhc3MgdGhyb3VnaCBoYXBwaWx5XG4gIGlmIChpc01hY09TKSB7XG4gICAgaWYgKHR5cGUgPT09ICdjb21wb3NpdGlvbnVwZGF0ZScgJiYgaXNKYXBhbmVzZShkYXRhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICB0YXJnZXQuZGF0YXNldC5pZ25vcmVDb21wb3NpdGlvbiA9ICd0cnVlJztcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ2NvbXBvc2l0aW9uZW5kJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICB0YXJnZXQuZGF0YXNldC5pZ25vcmVDb21wb3NpdGlvbiA9ICdmYWxzZSc7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFja0xpc3RlbmVycyhpZCwgaW5wdXRIYW5kbGVyLCBjb21wb3NpdGlvbkhhbmRsZXIpIHtcbiAgTElTVEVORVJTID0gTElTVEVORVJTLmNvbmNhdCh7XG4gICAgaWQsXG4gICAgaW5wdXRIYW5kbGVyLFxuICAgIGNvbXBvc2l0aW9uSGFuZGxlcixcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnRyYWNrTGlzdGVuZXJzKHsgaWQ6IHRhcmdldElkIH0pIHtcbiAgTElTVEVORVJTID0gTElTVEVORVJTLmZpbHRlcigoeyBpZCB9KSA9PiBpZCAhPT0gdGFyZ2V0SWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZExpc3RlbmVycyhlbCkge1xuICByZXR1cm4gKFxuICAgIGVsICYmIExJU1RFTkVSUy5maW5kKCh7IGlkIH0pID0+IGlkID09PSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtd2FuYWthbmEtaWQnKSlcbiAgKTtcbn1cblxuLy8gSGFuZGxlIG5vbi10ZXJtaW5hbCBpbnNlcnRlZCBpbnB1dCBjb252ZXJzaW9uOlxuLy8gfCAtPiDjgo98IC0+IOOCj+OBs3wgLT4g44KPfOOBsyAtPiDjgo9zfOOBsyAtPiDjgo9zaHzjgbMgLT4g44KPc2hpfOOBsyAtPiDjgo/jgZd844GzXG4vLyBvciBtdWx0aXBsZSBhbWJpZ3VvdXMgcG9zaXRpb25pbmcgKHRvIHNlbGVjdCB3aGljaCBcInNcIiB0byB3b3JrIGZyb20pXG4vLyDjgZNz44GTc3zjgZNz44GTIC0+IOOBk3PjgZNzb3zjgZNz44GTIC0+IOOBk3PjgZPjgZ1844GTc+OBk1xuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0SW5wdXQodGV4dCA9ICcnLCBjdXJzb3IgPSAwLCB0cmlnZ2VycyA9IFtdKSB7XG4gIGxldCBoZWFkO1xuICBsZXQgdG9Db252ZXJ0O1xuICBsZXQgdGFpbDtcblxuICBpZiAoY3Vyc29yID09PSAwICYmIHRyaWdnZXJzLmluY2x1ZGVzKHRleHRbMF0pKSB7XG4gICAgW2hlYWQsIHRvQ29udmVydCwgdGFpbF0gPSB3b3JrRnJvbVN0YXJ0KHRleHQsIHRyaWdnZXJzKTtcbiAgfSBlbHNlIGlmIChjdXJzb3IgPiAwKSB7XG4gICAgW2hlYWQsIHRvQ29udmVydCwgdGFpbF0gPSB3b3JrQmFja3dhcmRzKHRleHQsIGN1cnNvcik7XG4gIH0gZWxzZSB7XG4gICAgW2hlYWQsIHRvQ29udmVydF0gPSB0YWtlV2hpbGVBbmRTbGljZShcbiAgICAgIHRleHQsXG4gICAgICAoY2hhcikgPT4gIXRyaWdnZXJzLmluY2x1ZGVzKGNoYXIpXG4gICAgKTtcbiAgICBbdG9Db252ZXJ0LCB0YWlsXSA9IHRha2VXaGlsZUFuZFNsaWNlKFxuICAgICAgdG9Db252ZXJ0LFxuICAgICAgKGNoYXIpID0+ICFpc0phcGFuZXNlKGNoYXIpXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBbaGVhZCwgdG9Db252ZXJ0LCB0YWlsXTtcbn1cblxuZnVuY3Rpb24gd29ya0Zyb21TdGFydCh0ZXh0LCBjYXRhbHlzdENoYXJzKSB7XG4gIHJldHVybiBbXG4gICAgJycsXG4gICAgLi4udGFrZVdoaWxlQW5kU2xpY2UoXG4gICAgICB0ZXh0LFxuICAgICAgKGNoYXIpID0+IGNhdGFseXN0Q2hhcnMuaW5jbHVkZXMoY2hhcikgfHwgIWlzSmFwYW5lc2UoY2hhciwgL1swLTldLylcbiAgICApLFxuICBdO1xufVxuXG5mdW5jdGlvbiB3b3JrQmFja3dhcmRzKHRleHQgPSAnJywgc3RhcnRJbmRleCA9IDApIHtcbiAgY29uc3QgW3RvQ29udmVydCwgaGVhZF0gPSB0YWtlV2hpbGVBbmRTbGljZShcbiAgICBbLi4udGV4dC5zbGljZSgwLCBzdGFydEluZGV4KV0ucmV2ZXJzZSgpLFxuICAgIChjaGFyKSA9PiAhaXNKYXBhbmVzZShjaGFyKVxuICApO1xuICByZXR1cm4gW1xuICAgIGhlYWQucmV2ZXJzZSgpLmpvaW4oJycpLFxuICAgIHRvQ29udmVydFxuICAgICAgLnNwbGl0KCcnKVxuICAgICAgLnJldmVyc2UoKVxuICAgICAgLmpvaW4oJycpLFxuICAgIHRleHQuc2xpY2Uoc3RhcnRJbmRleCksXG4gIF07XG59XG5cbmZ1bmN0aW9uIHRha2VXaGlsZUFuZFNsaWNlKHNvdXJjZSA9IHt9LCBwcmVkaWNhdGUgPSAoeCkgPT4gISF4KSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBjb25zdCB7IGxlbmd0aCB9ID0gc291cmNlO1xuICBsZXQgaSA9IDA7XG4gIHdoaWxlIChpIDwgbGVuZ3RoICYmIHByZWRpY2F0ZShzb3VyY2VbaV0sIGkpKSB7XG4gICAgcmVzdWx0LnB1c2goc291cmNlW2ldKTtcbiAgICBpICs9IDE7XG4gIH1cbiAgcmV0dXJuIFtyZXN1bHQuam9pbignJyksIHNvdXJjZS5zbGljZShpKV07XG59XG4iLCAiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuY29uc3Qgb25JbnB1dCA9ICh7IHRhcmdldDogeyB2YWx1ZSwgc2VsZWN0aW9uU3RhcnQsIHNlbGVjdGlvbkVuZCB9IH0pID0+IGNvbnNvbGUubG9nKCdpbnB1dDonLCB7IHZhbHVlLCBzZWxlY3Rpb25TdGFydCwgc2VsZWN0aW9uRW5kIH0pO1xuY29uc3Qgb25Db21wb3NpdGlvblN0YXJ0ID0gKCkgPT4gY29uc29sZS5sb2coJ2NvbXBvc2l0aW9uc3RhcnQnKTtcbmNvbnN0IG9uQ29tcG9zaXRpb25VcGRhdGUgPSAoe1xuICB0YXJnZXQ6IHsgdmFsdWUsIHNlbGVjdGlvblN0YXJ0LCBzZWxlY3Rpb25FbmQgfSxcbiAgZGF0YSxcbn0pID0+IGNvbnNvbGUubG9nKCdjb21wb3NpdGlvbnVwZGF0ZScsIHtcbiAgZGF0YSxcbiAgdmFsdWUsXG4gIHNlbGVjdGlvblN0YXJ0LFxuICBzZWxlY3Rpb25FbmQsXG59KTtcbmNvbnN0IG9uQ29tcG9zaXRpb25FbmQgPSAoKSA9PiBjb25zb2xlLmxvZygnY29tcG9zaXRpb25lbmQnKTtcblxuY29uc3QgZXZlbnRzID0ge1xuICBpbnB1dDogb25JbnB1dCxcbiAgY29tcG9zaXRpb25zdGFydDogb25Db21wb3NpdGlvblN0YXJ0LFxuICBjb21wb3NpdGlvbnVwZGF0ZTogb25Db21wb3NpdGlvblVwZGF0ZSxcbiAgY29tcG9zaXRpb25lbmQ6IG9uQ29tcG9zaXRpb25FbmQsXG59O1xuXG5leHBvcnQgY29uc3QgYWRkRGVidWdMaXN0ZW5lcnMgPSAoaW5wdXQpID0+IHtcbiAgT2JqZWN0LmVudHJpZXMoZXZlbnRzKS5mb3JFYWNoKChbZXZlbnQsIGhhbmRsZXJdKSA9PiBpbnB1dC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZURlYnVnTGlzdGVuZXJzID0gKGlucHV0KSA9PiB7XG4gIE9iamVjdC5lbnRyaWVzKGV2ZW50cykuZm9yRWFjaCgoW2V2ZW50LCBoYW5kbGVyXSkgPT4gaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcilcbiAgKTtcbn07XG4iLCAiaW1wb3J0IHsgbWFrZU9uSW5wdXQsIG9uQ29tcG9zaXRpb24sIHRyYWNrTGlzdGVuZXJzIH0gZnJvbSAnLi91dGlscy9kb20nO1xuaW1wb3J0IHsgYWRkRGVidWdMaXN0ZW5lcnMgfSBmcm9tICcuL3V0aWxzL2xvZ0lucHV0RXZlbnRzJztcblxuY29uc3QgRUxFTUVOVFMgPSBbJ1RFWFRBUkVBJywgJ0lOUFVUJ107XG5cbmxldCBpZENvdW50ZXIgPSAwO1xuY29uc3QgbmV3SWQgPSAoKSA9PiB7XG4gIGlkQ291bnRlciArPSAxO1xuICByZXR1cm4gYCR7RGF0ZS5ub3coKX0ke2lkQ291bnRlcn1gO1xufTtcblxuLyoqXG4gKiBCaW5kcyBldmVudExpc3RlbmVyIGZvciAnaW5wdXQnIGV2ZW50cyB0byBhbiBpbnB1dCBmaWVsZCB0byBhdXRvbWFnaWNhbGx5IHJlcGxhY2UgdmFsdWVzIHdpdGgga2FuYVxuICogQ2FuIHBhc3MgYHsgSU1FTW9kZTogJ3RvSGlyYWdhbmEnIHx8ICd0b0thdGFrYW5hJyB9YCB0byBlbmZvcmNlIGthbmEgY29udmVyc2lvbiB0eXBlXG4gKiBAcGFyYW0gIHtIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudH0gZWxlbWVudCB0ZXh0YXJlYSwgaW5wdXRbdHlwZT1cInRleHRcIl0gZXRjXG4gKiBAcGFyYW0gIHtEZWZhdWx0T3B0aW9uc30gW29wdGlvbnM9ZGVmYXVsdE9wdGlvbnNdIGRlZmF1bHRzIHRvIHsgSU1FTW9kZTogdHJ1ZSB9IHVzaW5nIGB0b0thbmFgXG4gKiBAZXhhbXBsZVxuICogYmluZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXlJbnB1dCcpKTtcbiAqL1xuZnVuY3Rpb24gYmluZChlbGVtZW50ID0ge30sIG9wdGlvbnMgPSB7fSwgZGVidWcgPSBmYWxzZSkge1xuICBpZiAoIUVMRU1FTlRTLmluY2x1ZGVzKGVsZW1lbnQubm9kZU5hbWUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYEVsZW1lbnQgcHJvdmlkZWQgdG8gV2FuYWthbmEgYmluZCgpIHdhcyBub3QgYSB2YWxpZCBpbnB1dCBvciB0ZXh0YXJlYSBlbGVtZW50LlxcbiBSZWNlaXZlZDogKCR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgIGVsZW1lbnRcbiAgICAgICl9KWBcbiAgICApO1xuICB9XG4gIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS13YW5ha2FuYS1pZCcpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IG9uSW5wdXQgPSBtYWtlT25JbnB1dChvcHRpb25zKTtcbiAgY29uc3QgaWQgPSBuZXdJZCgpO1xuICBjb25zdCBhdHRyaWJ1dGVzID0gW1xuICAgIHsgbmFtZTogJ2RhdGEtd2FuYWthbmEtaWQnLCB2YWx1ZTogaWQgfSxcbiAgICB7IG5hbWU6ICdsYW5nJywgdmFsdWU6ICdqYScgfSxcbiAgICB7IG5hbWU6ICdhdXRvQ2FwaXRhbGl6ZScsIHZhbHVlOiAnbm9uZScgfSxcbiAgICB7IG5hbWU6ICdhdXRvQ29ycmVjdCcsIHZhbHVlOiAnb2ZmJyB9LFxuICAgIHsgbmFtZTogJ2F1dG9Db21wbGV0ZScsIHZhbHVlOiAnb2ZmJyB9LFxuICAgIHsgbmFtZTogJ3NwZWxsQ2hlY2snLCB2YWx1ZTogJ2ZhbHNlJyB9LFxuICBdO1xuICBjb25zdCBwcmV2aW91c0F0dHJpYnV0ZXMgPSB7fTtcbiAgYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICBwcmV2aW91c0F0dHJpYnV0ZXNbYXR0cmlidXRlLm5hbWVdID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlLm5hbWUpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZS5uYW1lLCBhdHRyaWJ1dGUudmFsdWUpO1xuICB9KTtcbiAgZWxlbWVudC5kYXRhc2V0LnByZXZpb3VzQXR0cmlidXRlcyA9IEpTT04uc3RyaW5naWZ5KHByZXZpb3VzQXR0cmlidXRlcyk7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBvbklucHV0KTtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb21wb3NpdGlvbnVwZGF0ZScsIG9uQ29tcG9zaXRpb24pO1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbXBvc2l0aW9uZW5kJywgb25Db21wb3NpdGlvbik7XG4gIHRyYWNrTGlzdGVuZXJzKGlkLCBvbklucHV0LCBvbkNvbXBvc2l0aW9uKTtcbiAgaWYgKGRlYnVnID09PSB0cnVlKSB7XG4gICAgYWRkRGVidWdMaXN0ZW5lcnMoZWxlbWVudCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYmluZDtcbiIsICJpbXBvcnQgeyBmaW5kTGlzdGVuZXJzLCB1bnRyYWNrTGlzdGVuZXJzIH0gZnJvbSAnLi91dGlscy9kb20nO1xuaW1wb3J0IHsgcmVtb3ZlRGVidWdMaXN0ZW5lcnMgfSBmcm9tICcuL3V0aWxzL2xvZ0lucHV0RXZlbnRzJztcblxuLyoqXG4gKiBVbmJpbmRzIGV2ZW50TGlzdGVuZXIgZnJvbSBpbnB1dCBmaWVsZFxuICogQHBhcmFtICB7SFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnR9IGVsZW1lbnQgdGV4dGFyZWEsIGlucHV0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bmJpbmQoZWxlbWVudCwgZGVidWcgPSBmYWxzZSkge1xuICBjb25zdCBsaXN0ZW5lcnMgPSBmaW5kTGlzdGVuZXJzKGVsZW1lbnQpO1xuICBpZiAobGlzdGVuZXJzID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgRWxlbWVudCBwcm92aWRlZCB0byBXYW5ha2FuYSB1bmJpbmQoKSBoYWQgbm8gbGlzdGVuZXIgcmVnaXN0ZXJlZC5cXG4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgIGVsZW1lbnRcbiAgICAgICl9YFxuICAgICk7XG4gIH1cbiAgY29uc3QgeyBpbnB1dEhhbmRsZXIsIGNvbXBvc2l0aW9uSGFuZGxlciB9ID0gbGlzdGVuZXJzO1xuICBjb25zdCBhdHRyaWJ1dGVzID0gSlNPTi5wYXJzZShlbGVtZW50LmRhdGFzZXQucHJldmlvdXNBdHRyaWJ1dGVzKTtcbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKGF0dHJpYnV0ZXNba2V5XSkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgIH1cbiAgfSk7XG4gIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXByZXZpb3VzLWF0dHJpYnV0ZXMnKTtcbiAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtaWdub3JlLWNvbXBvc2l0aW9uJyk7XG4gIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBpbnB1dEhhbmRsZXIpO1xuICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbXBvc2l0aW9uc3RhcnQnLCBjb21wb3NpdGlvbkhhbmRsZXIpO1xuICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbXBvc2l0aW9udXBkYXRlJywgY29tcG9zaXRpb25IYW5kbGVyKTtcbiAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb21wb3NpdGlvbmVuZCcsIGNvbXBvc2l0aW9uSGFuZGxlcik7XG4gIHVudHJhY2tMaXN0ZW5lcnMobGlzdGVuZXJzKTtcbiAgaWYgKGRlYnVnID09PSB0cnVlKSB7XG4gICAgcmVtb3ZlRGVidWdMaXN0ZW5lcnMoZWxlbWVudCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdW5iaW5kO1xuIiwgImltcG9ydCBpc0VtcHR5IGZyb20gJy4vaXNFbXB0eSc7XG5pbXBvcnQgaXNDaGFySW5SYW5nZSBmcm9tICcuL2lzQ2hhckluUmFuZ2UnO1xuaW1wb3J0IHsgUk9NQUpJX1JBTkdFUyB9IGZyb20gJy4uL2NvbnN0YW50cy50cyc7XG5cbi8qKlxuICogVGVzdHMgYSBjaGFyYWN0ZXIuIFJldHVybnMgdHJ1ZSBpZiB0aGUgY2hhcmFjdGVyIGlzIFtSb21hamldKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1JvbWFqaSkgKGFsbG93aW5nIFtIZXBidXJuIHJvbWFuaXNhdGlvbl0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSGVwYnVybl9yb21hbml6YXRpb24pKVxuICogQHBhcmFtICB7U3RyaW5nfSBjaGFyIGNoYXJhY3RlciBzdHJpbmcgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNDaGFyUm9tYWppKGNoYXIgPSAnJykge1xuICBpZiAoaXNFbXB0eShjaGFyKSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gUk9NQUpJX1JBTkdFUy5zb21lKChbc3RhcnQsIGVuZF0pID0+IGlzQ2hhckluUmFuZ2UoY2hhciwgc3RhcnQsIGVuZCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc0NoYXJSb21hamk7XG4iLCAiaW1wb3J0IHR5cGVPZiBmcm9tICcuL3V0aWxzL3R5cGVPZic7XG5pbXBvcnQgaXNFbXB0eSBmcm9tICcuL3V0aWxzL2lzRW1wdHknO1xuaW1wb3J0IGlzQ2hhclJvbWFqaSBmcm9tICcuL3V0aWxzL2lzQ2hhclJvbWFqaSc7XG5cbi8qKlxuICogVGVzdCBpZiBgaW5wdXRgIGlzIFtSb21hamldKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1JvbWFqaSkgKGFsbG93aW5nIFtIZXBidXJuIHJvbWFuaXNhdGlvbl0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSGVwYnVybl9yb21hbml6YXRpb24pKVxuICogQHBhcmFtICB7U3RyaW5nfSBbaW5wdXQ9JyddIHRleHRcbiAqIEBwYXJhbSAge1JlZ0V4cH0gW2FsbG93ZWRdIGFkZGl0aW9uYWwgdGVzdCBhbGxvd2VkIHRvIHBhc3MgZm9yIGVhY2ggY2hhclxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBbUm9tYWppXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Sb21hamkpXG4gKiBAZXhhbXBsZVxuICogaXNSb21hamkoJ1TFjWt5xY0gYW5kIMWMc2FrYScpXG4gKiAvLyA9PiB0cnVlXG4gKiBpc1JvbWFqaSgnMTJhKmImYy1kJylcbiAqIC8vID0+IHRydWVcbiAqIGlzUm9tYWppKCfjgYLjgqJBJylcbiAqIC8vID0+IGZhbHNlXG4gKiBpc1JvbWFqaSgn44GK6aGY44GEJylcbiAqIC8vID0+IGZhbHNlXG4gKiBpc1JvbWFqaSgnYe+8gWImY+ODvGQnKSAvLyBaZW5rYWt1IHB1bmN0dWF0aW9uIGZhaWxzXG4gKiAvLyA9PiBmYWxzZVxuICogaXNSb21hamkoJ2HvvIFiJmPjg7xkJywgL1vvvIHjg7xdLylcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNSb21hamkoaW5wdXQgPSAnJywgYWxsb3dlZCkge1xuICBjb25zdCBhdWdtZW50ZWQgPSB0eXBlT2YoYWxsb3dlZCkgPT09ICdyZWdleHAnO1xuICByZXR1cm4gaXNFbXB0eShpbnB1dClcbiAgICA/IGZhbHNlXG4gICAgOiBbLi4uaW5wdXRdLmV2ZXJ5KChjaGFyKSA9PiB7XG4gICAgICBjb25zdCBpc1JvbWEgPSBpc0NoYXJSb21hamkoY2hhcik7XG4gICAgICByZXR1cm4gIWF1Z21lbnRlZCA/IGlzUm9tYSA6IGlzUm9tYSB8fCBhbGxvd2VkLnRlc3QoY2hhcik7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzUm9tYWppO1xuIiwgImltcG9ydCB7XG4gIEtBVEFLQU5BX1NUQVJULFxuICBLQVRBS0FOQV9FTkQsXG59IGZyb20gJy4uL2NvbnN0YW50cy50cyc7XG5cbmltcG9ydCBpc0NoYXJJblJhbmdlIGZyb20gJy4vaXNDaGFySW5SYW5nZSc7XG5cbi8qKlxuICogVGVzdHMgYSBjaGFyYWN0ZXIuIFJldHVybnMgdHJ1ZSBpZiB0aGUgY2hhcmFjdGVyIGlzIFtLYXRha2FuYV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvS2F0YWthbmEpLlxuICogQHBhcmFtICB7U3RyaW5nfSBjaGFyIGNoYXJhY3RlciBzdHJpbmcgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNDaGFyS2F0YWthbmEoY2hhciA9ICcnKSB7XG4gIHJldHVybiBpc0NoYXJJblJhbmdlKGNoYXIsIEtBVEFLQU5BX1NUQVJULCBLQVRBS0FOQV9FTkQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc0NoYXJLYXRha2FuYTtcbiIsICJpbXBvcnQgaXNFbXB0eSBmcm9tICcuL2lzRW1wdHknO1xuaW1wb3J0IGlzQ2hhckhpcmFnYW5hIGZyb20gJy4vaXNDaGFySGlyYWdhbmEnO1xuaW1wb3J0IGlzQ2hhckthdGFrYW5hIGZyb20gJy4vaXNDaGFyS2F0YWthbmEnO1xuXG4vKipcbiAqIFRlc3RzIGEgY2hhcmFjdGVyLiBSZXR1cm5zIHRydWUgaWYgdGhlIGNoYXJhY3RlciBpcyBbSGlyYWdhbmFdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0hpcmFnYW5hKSBvciBbS2F0YWthbmFdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0thdGFrYW5hKS5cbiAqIEBwYXJhbSAge1N0cmluZ30gY2hhciBjaGFyYWN0ZXIgc3RyaW5nIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzQ2hhckthbmEoY2hhciA9ICcnKSB7XG4gIGlmIChpc0VtcHR5KGNoYXIpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBpc0NoYXJIaXJhZ2FuYShjaGFyKSB8fCBpc0NoYXJLYXRha2FuYShjaGFyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNDaGFyS2FuYTtcbiIsICJpbXBvcnQgaXNFbXB0eSBmcm9tICcuL3V0aWxzL2lzRW1wdHknO1xuaW1wb3J0IGlzQ2hhckthbmEgZnJvbSAnLi91dGlscy9pc0NoYXJLYW5hJztcblxuLyoqXG4gKiBUZXN0IGlmIGBpbnB1dGAgaXMgW0thbmFdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0thbmEpIChbS2F0YWthbmFdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0thdGFrYW5hKSBhbmQvb3IgW0hpcmFnYW5hXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9IaXJhZ2FuYSkpXG4gKiBAcGFyYW0gIHtTdHJpbmd9IFtpbnB1dD0nJ10gdGV4dFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBhbGwgW0thbmFdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0thbmEpXG4gKiBAZXhhbXBsZVxuICogaXNLYW5hKCfjgYInKVxuICogLy8gPT4gdHJ1ZVxuICogaXNLYW5hKCfjgqInKVxuICogLy8gPT4gdHJ1ZVxuICogaXNLYW5hKCfjgYLjg7zjgqInKVxuICogLy8gPT4gdHJ1ZVxuICogaXNLYW5hKCdBJylcbiAqIC8vID0+IGZhbHNlXG4gKiBpc0thbmEoJ+OBgkHjgqInKVxuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNLYW5hKGlucHV0ID0gJycpIHtcbiAgaWYgKGlzRW1wdHkoaW5wdXQpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBbLi4uaW5wdXRdLmV2ZXJ5KGlzQ2hhckthbmEpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc0thbmE7XG4iLCAiaW1wb3J0IGlzRW1wdHkgZnJvbSAnLi91dGlscy9pc0VtcHR5JztcbmltcG9ydCBpc0NoYXJIaXJhZ2FuYSBmcm9tICcuL3V0aWxzL2lzQ2hhckhpcmFnYW5hJztcblxuLyoqXG4gKiBUZXN0IGlmIGBpbnB1dGAgaXMgW0hpcmFnYW5hXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9IaXJhZ2FuYSlcbiAqIEBwYXJhbSAge1N0cmluZ30gW2lucHV0PScnXSB0ZXh0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGFsbCBbSGlyYWdhbmFdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0hpcmFnYW5hKVxuICogQGV4YW1wbGVcbiAqIGlzSGlyYWdhbmEoJ+OBkuODvOOCgCcpXG4gKiAvLyA9PiB0cnVlXG4gKiBpc0hpcmFnYW5hKCdBJylcbiAqIC8vID0+IGZhbHNlXG4gKiBpc0hpcmFnYW5hKCfjgYLjgqInKVxuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNIaXJhZ2FuYShpbnB1dCA9ICcnKSB7XG4gIGlmIChpc0VtcHR5KGlucHV0KSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gWy4uLmlucHV0XS5ldmVyeShpc0NoYXJIaXJhZ2FuYSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzSGlyYWdhbmE7XG4iLCAiaW1wb3J0IGlzRW1wdHkgZnJvbSAnLi91dGlscy9pc0VtcHR5JztcbmltcG9ydCBpc0NoYXJLYXRha2FuYSBmcm9tICcuL3V0aWxzL2lzQ2hhckthdGFrYW5hJztcblxuLyoqXG4gKiBUZXN0IGlmIGBpbnB1dGAgaXMgW0thdGFrYW5hXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9LYXRha2FuYSlcbiAqIEBwYXJhbSAge1N0cmluZ30gW2lucHV0PScnXSB0ZXh0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGFsbCBbS2F0YWthbmFdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0thdGFrYW5hKVxuICogQGV4YW1wbGVcbiAqIGlzS2F0YWthbmEoJ+OCsuODvOODoCcpXG4gKiAvLyA9PiB0cnVlXG4gKiBpc0thdGFrYW5hKCfjgYInKVxuICogLy8gPT4gZmFsc2VcbiAqIGlzS2F0YWthbmEoJ0EnKVxuICogLy8gPT4gZmFsc2VcbiAqIGlzS2F0YWthbmEoJ+OBguOCoicpXG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0thdGFrYW5hKGlucHV0ID0gJycpIHtcbiAgaWYgKGlzRW1wdHkoaW5wdXQpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBbLi4uaW5wdXRdLmV2ZXJ5KGlzQ2hhckthdGFrYW5hKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNLYXRha2FuYTtcbiIsICJpbXBvcnQgaXNFbXB0eSBmcm9tICcuL2lzRW1wdHknO1xuaW1wb3J0IHsgS0FOSklfSVRFUkFUSU9OX01BUksgfSBmcm9tICcuLi9jb25zdGFudHMudHMnO1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBjaGFyIGlzICfjgIUnXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGNoYXIgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNDaGFySXRlcmF0aW9uTWFyayhjaGFyID0gJycpIHtcbiAgaWYgKGlzRW1wdHkoY2hhcikpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGNoYXIuY2hhckNvZGVBdCgwKSA9PT0gS0FOSklfSVRFUkFUSU9OX01BUks7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzQ2hhckl0ZXJhdGlvbk1hcms7XG4iLCAiaW1wb3J0IHsgS0FOSklfU1RBUlQsIEtBTkpJX0VORCB9IGZyb20gJy4uL2NvbnN0YW50cy50cyc7XG5cbmltcG9ydCBpc0NoYXJJblJhbmdlIGZyb20gJy4vaXNDaGFySW5SYW5nZSc7XG5pbXBvcnQgaXNDaGFySXRlcmF0aW9uTWFyayBmcm9tICcuL2lzQ2hhckl0ZXJhdGlvbk1hcmsnO1xuLyoqXG4gKiBUZXN0cyBhIGNoYXJhY3Rlci4gUmV0dXJucyB0cnVlIGlmIHRoZSBjaGFyYWN0ZXIgaXMgYSBDSksgaWRlb2dyYXBoIChrYW5qaSkuXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGNoYXIgY2hhcmFjdGVyIHN0cmluZyB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBpc0NoYXJLYW5qaShjaGFyID0gJycpIHtcbiAgcmV0dXJuIGlzQ2hhckluUmFuZ2UoY2hhciwgS0FOSklfU1RBUlQsIEtBTkpJX0VORCkgfHwgaXNDaGFySXRlcmF0aW9uTWFyayhjaGFyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNDaGFyS2Fuamk7XG4iLCAiaW1wb3J0IGlzRW1wdHkgZnJvbSAnLi91dGlscy9pc0VtcHR5JztcbmltcG9ydCBpc0NoYXJLYW5qaSBmcm9tICcuL3V0aWxzL2lzQ2hhckthbmppJztcblxuLyoqXG4gKiBUZXN0cyBpZiBgaW5wdXRgIGlzIFtLYW5qaV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvS2FuamkpIChbSmFwYW5lc2UgQ0pLIGlkZW9ncmFwaHNdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NKS19VbmlmaWVkX0lkZW9ncmFwaHMpKVxuICogQHBhcmFtICB7U3RyaW5nfSBbaW5wdXQ9JyddIHRleHRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYWxsIFtLYW5qaV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvS2FuamkpXG4gKiBAZXhhbXBsZVxuICogaXNLYW5qaSgn5YiAJylcbiAqIC8vID0+IHRydWVcbiAqIGlzS2FuamkoJ+WIh+iFuScpXG4gKiAvLyA9PiB0cnVlXG4gKiBpc0thbmppKCfli6LjgYQnKVxuICogLy8gPT4gZmFsc2VcbiAqIGlzS2FuamkoJ+OBgkHjgqInKVxuICogLy8gPT4gZmFsc2VcbiAqIGlzS2FuamkoJ/CfkLgnKVxuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNLYW5qaShpbnB1dCA9ICcnKSB7XG4gIGlmIChpc0VtcHR5KGlucHV0KSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gWy4uLmlucHV0XS5ldmVyeShpc0NoYXJLYW5qaSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzS2Fuamk7XG4iLCAiaW1wb3J0IGlzS2FuamkgZnJvbSAnLi9pc0thbmppJztcbmltcG9ydCBpc0hpcmFnYW5hIGZyb20gJy4vaXNIaXJhZ2FuYSc7XG5pbXBvcnQgaXNLYXRha2FuYSBmcm9tICcuL2lzS2F0YWthbmEnO1xuaW1wb3J0IGlzUm9tYWppIGZyb20gJy4vaXNSb21hamknO1xuXG4vKipcbiAqIFRlc3QgaWYgYGlucHV0YCBjb250YWlucyBhIG1peCBvZiBbUm9tYWppXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Sb21hamkpICphbmQqIFtLYW5hXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9LYW5hKSwgZGVmYXVsdHMgdG8gcGFzcyB0aHJvdWdoIFtLYW5qaV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvS2FuamkpXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGlucHV0IHRleHRcbiAqIEBwYXJhbSAge3sgcGFzc0thbmppOiBCb29sZWFufX0gW29wdGlvbnM9eyBwYXNzS2Fuamk6IHRydWUgfV0gb3B0aW9uYWwgY29uZmlnIHRvIHBhc3MgdGhyb3VnaCBrYW5qaVxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBtaXhlZFxuICogQGV4YW1wbGVcbiAqIGlzTWl4ZWQoJ0Fi44GC44KiJykpXG4gKiAvLyA9PiB0cnVlXG4gKiBpc01peGVkKCfjgYrohblBJykpIC8vIGlnbm9yZXMga2FuamkgYnkgZGVmYXVsdFxuICogLy8gPT4gdHJ1ZVxuICogaXNNaXhlZCgn44GK6IW5QScsIHsgcGFzc0thbmppOiBmYWxzZSB9KSlcbiAqIC8vID0+IGZhbHNlXG4gKiBpc01peGVkKCdhYicpKVxuICogLy8gPT4gZmFsc2VcbiAqIGlzTWl4ZWQoJ+OBguOCoicpKVxuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNNaXhlZChpbnB1dCA9ICcnLCBvcHRpb25zID0geyBwYXNzS2Fuamk6IHRydWUgfSkge1xuICBjb25zdCBjaGFycyA9IFsuLi5pbnB1dF07XG4gIGxldCBoYXNLYW5qaSA9IGZhbHNlO1xuICBpZiAoIW9wdGlvbnMucGFzc0thbmppKSB7XG4gICAgaGFzS2FuamkgPSBjaGFycy5zb21lKGlzS2FuamkpO1xuICB9XG4gIHJldHVybiAoY2hhcnMuc29tZShpc0hpcmFnYW5hKSB8fCBjaGFycy5zb21lKGlzS2F0YWthbmEpKSAmJiBjaGFycy5zb21lKGlzUm9tYWppKSAmJiAhaGFzS2Fuamk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzTWl4ZWQ7XG4iLCAiaW1wb3J0IHsgS0FUQUtBTkFfU1RBUlQsIEhJUkFHQU5BX1NUQVJUIH0gZnJvbSAnLi4vY29uc3RhbnRzLnRzJztcblxuaW1wb3J0IGlzQ2hhckxvbmdEYXNoIGZyb20gJy4vaXNDaGFyTG9uZ0Rhc2gnO1xuaW1wb3J0IGlzQ2hhclNsYXNoRG90IGZyb20gJy4vaXNDaGFyU2xhc2hEb3QnO1xuaW1wb3J0IGlzQ2hhckthdGFrYW5hIGZyb20gJy4vaXNDaGFyS2F0YWthbmEnO1xuY29uc3QgaXNDaGFySW5pdGlhbExvbmdEYXNoID0gKGNoYXIsIGluZGV4KSA9PiBpc0NoYXJMb25nRGFzaChjaGFyKSAmJiBpbmRleCA8IDE7XG5jb25zdCBpc0NoYXJJbm5lckxvbmdEYXNoID0gKGNoYXIsIGluZGV4KSA9PiBpc0NoYXJMb25nRGFzaChjaGFyKSAmJiBpbmRleCA+IDA7XG5jb25zdCBpc0thbmFBc1N5bWJvbCA9IChjaGFyKSA9PiBbJ+ODticsICfjg7UnXS5pbmNsdWRlcyhjaGFyKTtcbmNvbnN0IExPTkdfVk9XRUxTID0ge1xuICBhOiAn44GCJyxcbiAgaTogJ+OBhCcsXG4gIHU6ICfjgYYnLFxuICBlOiAn44GIJyxcbiAgbzogJ+OBhicsXG59O1xuXG4vLyBpbmplY3QgdG9Sb21hamkgdG8gYXZvaWQgY2lyY3VsYXIgZGVwZW5kZW5jeSBiZXR3ZWVuIHRvUm9tYWppIDwtPiBrYXRha2FuYVRvSGlyYWdhbmFcbmZ1bmN0aW9uIGthdGFrYW5hVG9IaXJhZ2FuYShcbiAgaW5wdXQgPSAnJyxcbiAgdG9Sb21hamksXG4gIHsgaXNEZXN0aW5hdGlvblJvbWFqaSwgY29udmVydExvbmdWb3dlbE1hcmsgfSA9IHt9XG4pIHtcbiAgbGV0IHByZXZpb3VzS2FuYSA9ICcnO1xuXG4gIHJldHVybiBpbnB1dFxuICAgIC5zcGxpdCgnJylcbiAgICAucmVkdWNlKChoaXJhLCBjaGFyLCBpbmRleCkgPT4ge1xuICAgICAgLy8gU2hvcnQgY2lyY3VpdCB0byBhdm9pZCBpbmNvcnJlY3QgY29kZXNoaWZ0IGZvciAn44O8JyBhbmQgJ+ODuydcbiAgICAgIGlmIChcbiAgICAgICAgaXNDaGFyU2xhc2hEb3QoY2hhcilcbiAgICAgICAgfHwgaXNDaGFySW5pdGlhbExvbmdEYXNoKGNoYXIsIGluZGV4KVxuICAgICAgICB8fCBpc0thbmFBc1N5bWJvbChjaGFyKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBoaXJhLmNvbmNhdChjaGFyKTtcbiAgICAgIH1cblxuICAgICAgLy8gVHJhbnNmb3JtIGxvbmcgdm93ZWxzOiAn44Kq44O8JyB0byAn44GK44GGJ1xuICAgICAgaWYgKFxuICAgICAgICBjb252ZXJ0TG9uZ1Zvd2VsTWFya1xuICAgICAgICAmJiBwcmV2aW91c0thbmFcbiAgICAgICAgJiYgaXNDaGFySW5uZXJMb25nRGFzaChjaGFyLCBpbmRleClcbiAgICAgICkge1xuICAgICAgICAvLyBUcmFuc2Zvcm0gcHJldmlvdXNLYW5hIGJhY2sgdG8gcm9tYWppLCBhbmQgc2xpY2Ugb2ZmIHRoZSB2b3dlbFxuICAgICAgICBjb25zdCByb21hamkgPSB0b1JvbWFqaShwcmV2aW91c0thbmEpLnNsaWNlKC0xKTtcbiAgICAgICAgLy8gSG93ZXZlciwgZW5zdXJlICfjgqrjg7wnID0+ICfjgYrjgYonID0+ICdvbycgaWYgdGhpcyBpcyBhIHRyYW5zZm9ybSBvbiB0aGUgd2F5IHRvIHJvbWFqaVxuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNDaGFyS2F0YWthbmEoaW5wdXRbaW5kZXggLSAxXSlcbiAgICAgICAgICAmJiByb21hamkgPT09ICdvJ1xuICAgICAgICAgICYmIGlzRGVzdGluYXRpb25Sb21hamlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIGhpcmEuY29uY2F0KCfjgYonKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGlyYS5jb25jYXQoTE9OR19WT1dFTFNbcm9tYWppXSk7XG4gICAgICAgIC8vIFRyYW5zZm9ybSBhbGwgb3RoZXIgY2hhcnNcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc0NoYXJMb25nRGFzaChjaGFyKSAmJiBpc0NoYXJLYXRha2FuYShjaGFyKSkge1xuICAgICAgICBjb25zdCBjb2RlID0gY2hhci5jaGFyQ29kZUF0KDApICsgKEhJUkFHQU5BX1NUQVJUIC0gS0FUQUtBTkFfU1RBUlQpO1xuICAgICAgICBjb25zdCBoaXJhQ2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSk7XG4gICAgICAgIHByZXZpb3VzS2FuYSA9IGhpcmFDaGFyO1xuICAgICAgICByZXR1cm4gaGlyYS5jb25jYXQoaGlyYUNoYXIpO1xuICAgICAgfVxuXG4gICAgICAvLyBQYXNzIG5vbiBrYXRha2FuYSBjaGFycyB0aHJvdWdoXG4gICAgICBwcmV2aW91c0thbmEgPSAnJztcbiAgICAgIHJldHVybiBoaXJhLmNvbmNhdChjaGFyKTtcbiAgICB9LCBbXSlcbiAgICAuam9pbignJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGthdGFrYW5hVG9IaXJhZ2FuYTtcbiIsICJpbXBvcnQgeyB0cmFuc2Zvcm0sIGdldFN1YlRyZWVPZiB9IGZyb20gJy4va2FuYU1hcHBpbmcnO1xuaW1wb3J0IHsgUk9NQU5JWkFUSU9OUyB9IGZyb20gJy4uL2NvbnN0YW50cy50cyc7XG5cbmxldCBrYW5hVG9IZXBidXJuTWFwID0gbnVsbDtcblxuLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIHByZXR0aWVyLWlnbm9yZVxuY29uc3QgQkFTSUNfUk9NQUpJID0ge1xuICDjgYI6J2EnLCAgICDjgYQ6J2knLCAgIOOBhjondScsICAg44GIOidlJywgICAg44GKOidvJyxcbiAg44GLOidrYScsICAg44GNOidraScsICDjgY86J2t1JywgIOOBkTona2UnLCAgIOOBkzona28nLFxuICDjgZU6J3NhJywgICDjgZc6J3NoaScsIOOBmTonc3UnLCAg44GbOidzZScsICAg44GdOidzbycsXG4gIOOBnzondGEnLCAgIOOBoTonY2hpJywg44GkOid0c3UnLCDjgaY6J3RlJywgICDjgag6J3RvJyxcbiAg44GqOiduYScsICAg44GrOiduaScsICDjgaw6J251JywgIOOBrTonbmUnLCAgIOOBrjonbm8nLFxuICDjga86J2hhJywgICDjgbI6J2hpJywgIOOBtTonZnUnLCAg44G4OidoZScsICAg44G7OidobycsXG4gIOOBvjonbWEnLCAgIOOBvzonbWknLCAg44KAOidtdScsICDjgoE6J21lJywgICDjgoI6J21vJyxcbiAg44KJOidyYScsICAg44KKOidyaScsICDjgos6J3J1JywgIOOCjDoncmUnLCAgIOOCjToncm8nLFxuICDjgoQ6J3lhJywgICDjgoY6J3l1JywgIOOCiDoneW8nLFxuICDjgo86J3dhJywgICDjgpA6J3dpJywgIOOCkTond2UnLCAg44KSOid3bycsXG4gIOOCkzogJ24nLFxuICDjgYw6J2dhJywgICDjgY46J2dpJywgIOOBkDonZ3UnLCAg44GSOidnZScsICAg44GUOidnbycsXG4gIOOBljonemEnLCAgIOOBmDonamknLCAg44GaOid6dScsICDjgZw6J3plJywgICDjgZ46J3pvJyxcbiAg44GgOidkYScsICAg44GiOidqaScsICDjgaU6J3p1JywgIOOBpzonZGUnLCAgIOOBqTonZG8nLFxuICDjgbA6J2JhJywgICDjgbM6J2JpJywgIOOBtjonYnUnLCAg44G5OidiZScsICAg44G8OidibycsXG4gIOOBsToncGEnLCAgIOOBtDoncGknLCAg44G3OidwdScsICDjgbo6J3BlJywgICDjgb06J3BvJyxcbiAg44KU44GBOid2YScsIOOClOOBgzondmknLCDjgpQ6J3Z1JywgIOOClOOBhzondmUnLCDjgpTjgYk6J3ZvJyxcbn07XG4vKiBlc2xpbnQtZW5hYmxlICAqL1xuXG5jb25zdCBTUEVDSUFMX1NZTUJPTFMgPSB7XG4gICfjgIInOiAnLicsXG4gICfjgIEnOiAnLCcsXG4gICfvvJonOiAnOicsXG4gICfjg7snOiAnLycsXG4gICfvvIEnOiAnIScsXG4gICfvvJ8nOiAnPycsXG4gICfjgJwnOiAnficsXG4gICfjg7wnOiAnLScsXG4gICfjgIwnOiAn4oCYJyxcbiAgJ+OAjSc6ICfigJknLFxuICAn44COJzogJ+KAnCcsXG4gICfjgI8nOiAn4oCdJyxcbiAgJ++8uyc6ICdbJyxcbiAgJ++8vSc6ICddJyxcbiAgJ++8iCc6ICcoJyxcbiAgJ++8iSc6ICcpJyxcbiAgJ++9myc6ICd7JyxcbiAgJ++9nSc6ICd9JyxcbiAgJ+OAgCc6ICcgJyxcbn07XG5cbi8vIOOCk+OBhCAtPiBuJ2lcbmNvbnN0IEFNQklHVU9VU19WT1dFTFMgPSBbJ+OBgicsICfjgYQnLCAn44GGJywgJ+OBiCcsICfjgYonLCAn44KEJywgJ+OChicsICfjgognXTtcbmNvbnN0IFNNQUxMX1kgPSB7IOOCgzogJ3lhJywg44KFOiAneXUnLCDjgoc6ICd5bycgfTtcbmNvbnN0IFNNQUxMX1lfRVhUUkEgPSB7IOOBgzogJ3lpJywg44GHOiAneWUnIH07XG5jb25zdCBTTUFMTF9BSVVFTyA9IHtcbiAg44GBOiAnYScsXG4gIOOBgzogJ2knLFxuICDjgYU6ICd1JyxcbiAg44GHOiAnZScsXG4gIOOBiTogJ28nLFxufTtcbmNvbnN0IFlPT05fS0FOQSA9IFtcbiAgJ+OBjScsXG4gICfjgasnLFxuICAn44GyJyxcbiAgJ+OBvycsXG4gICfjgoonLFxuICAn44GOJyxcbiAgJ+OBsycsXG4gICfjgbQnLFxuICAn44KUJyxcbiAgJ+OBjycsXG4gICfjgbUnLFxuXTtcbmNvbnN0IFlPT05fRVhDRVBUSU9OUyA9IHtcbiAg44GXOiAnc2gnLFxuICDjgaE6ICdjaCcsXG4gIOOBmDogJ2onLFxuICDjgaI6ICdqJyxcbn07XG5jb25zdCBTTUFMTF9LQU5BID0ge1xuICDjgaM6ICcnLFxuICDjgoM6ICd5YScsXG4gIOOChTogJ3l1JyxcbiAg44KHOiAneW8nLFxuICDjgYE6ICdhJyxcbiAg44GDOiAnaScsXG4gIOOBhTogJ3UnLFxuICDjgYc6ICdlJyxcbiAg44GJOiAnbycsXG59O1xuXG4vLyBnb2luZyB3aXRoIHRoZSBpbnR1aXRpdmUgKHlldCBpbmNvcnJlY3QpIHNvbHV0aW9uIHdoZXJlIOOBo+OChCAtPiB5eWEgYW5kIOOBo+OBgyAtPiBpaVxuLy8gaW4gb3RoZXIgd29yZHMsIGp1c3QgYXNzdW1lIHRoZSBzb2t1b24gY291bGQgaGF2ZSBiZWVuIGFwcGxpZWQgdG8gYW55dGhpbmdcbmNvbnN0IFNPS1VPTl9XSElURUxJU1QgPSB7XG4gIGI6ICdiJyxcbiAgYzogJ3QnLFxuICBkOiAnZCcsXG4gIGY6ICdmJyxcbiAgZzogJ2cnLFxuICBoOiAnaCcsXG4gIGo6ICdqJyxcbiAgazogJ2snLFxuICBtOiAnbScsXG4gIHA6ICdwJyxcbiAgcTogJ3EnLFxuICByOiAncicsXG4gIHM6ICdzJyxcbiAgdDogJ3QnLFxuICB2OiAndicsXG4gIHc6ICd3JyxcbiAgeDogJ3gnLFxuICB6OiAneicsXG59O1xuXG5mdW5jdGlvbiBnZXRLYW5hVG9IZXBidXJuVHJlZSgpIHtcbiAgaWYgKGthbmFUb0hlcGJ1cm5NYXAgPT0gbnVsbCkge1xuICAgIGthbmFUb0hlcGJ1cm5NYXAgPSBjcmVhdGVLYW5hVG9IZXBidXJuTWFwKCk7XG4gIH1cbiAgcmV0dXJuIGthbmFUb0hlcGJ1cm5NYXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRLYW5hVG9Sb21hamlUcmVlKHJvbWFuaXphdGlvbikge1xuICBzd2l0Y2ggKHJvbWFuaXphdGlvbikge1xuICAgIGNhc2UgUk9NQU5JWkFUSU9OUy5IRVBCVVJOOlxuICAgICAgcmV0dXJuIGdldEthbmFUb0hlcGJ1cm5UcmVlKCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7fTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVLYW5hVG9IZXBidXJuTWFwKCkge1xuICBjb25zdCByb21hamlUcmVlID0gdHJhbnNmb3JtKEJBU0lDX1JPTUFKSSk7XG5cbiAgY29uc3Qgc3VidHJlZU9mID0gKHN0cmluZykgPT4gZ2V0U3ViVHJlZU9mKHJvbWFqaVRyZWUsIHN0cmluZyk7XG4gIGNvbnN0IHNldFRyYW5zID0gKHN0cmluZywgdHJhbnNsaXRlcmF0aW9uKSA9PiB7XG4gICAgc3VidHJlZU9mKHN0cmluZylbJyddID0gdHJhbnNsaXRlcmF0aW9uO1xuICB9O1xuXG4gIE9iamVjdC5lbnRyaWVzKFNQRUNJQUxfU1lNQk9MUykuZm9yRWFjaCgoW2pzeW1ib2wsIHN5bWJvbF0pID0+IHtcbiAgICBzdWJ0cmVlT2YoanN5bWJvbClbJyddID0gc3ltYm9sO1xuICB9KTtcblxuICBbLi4uT2JqZWN0LmVudHJpZXMoU01BTExfWSksIC4uLk9iamVjdC5lbnRyaWVzKFNNQUxMX0FJVUVPKV0uZm9yRWFjaChcbiAgICAoW3JvbWEsIGthbmFdKSA9PiB7XG4gICAgICBzZXRUcmFucyhyb21hLCBrYW5hKTtcbiAgICB9XG4gICk7XG5cbiAgLy8g44GN44KDIC0+IGt5YVxuICBZT09OX0tBTkEuZm9yRWFjaCgoa2FuYSkgPT4ge1xuICAgIGNvbnN0IGZpcnN0Um9tYWppQ2hhciA9IHN1YnRyZWVPZihrYW5hKVsnJ11bMF07XG4gICAgT2JqZWN0LmVudHJpZXMoU01BTExfWSkuZm9yRWFjaCgoW3lLYW5hLCB5Um9tYV0pID0+IHtcbiAgICAgIHNldFRyYW5zKGthbmEgKyB5S2FuYSwgZmlyc3RSb21hamlDaGFyICsgeVJvbWEpO1xuICAgIH0pO1xuICAgIC8vIOOBjeOBgyAtPiBreWlcbiAgICBPYmplY3QuZW50cmllcyhTTUFMTF9ZX0VYVFJBKS5mb3JFYWNoKChbeUthbmEsIHlSb21hXSkgPT4ge1xuICAgICAgc2V0VHJhbnMoa2FuYSArIHlLYW5hLCBmaXJzdFJvbWFqaUNoYXIgKyB5Um9tYSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIE9iamVjdC5lbnRyaWVzKFlPT05fRVhDRVBUSU9OUykuZm9yRWFjaCgoW2thbmEsIHJvbWFdKSA9PiB7XG4gICAgLy8g44GY44KDIC0+IGphXG4gICAgT2JqZWN0LmVudHJpZXMoU01BTExfWSkuZm9yRWFjaCgoW3lLYW5hLCB5Um9tYV0pID0+IHtcbiAgICAgIHNldFRyYW5zKGthbmEgKyB5S2FuYSwgcm9tYSArIHlSb21hWzFdKTtcbiAgICB9KTtcbiAgICAvLyDjgZjjgYMgLT4ganlpLCDjgZjjgYcgLT4gamVcbiAgICBzZXRUcmFucyhgJHtrYW5hfeOBg2AsIGAke3JvbWF9eWlgKTtcbiAgICBzZXRUcmFucyhgJHtrYW5hfeOBh2AsIGAke3JvbWF9ZWApO1xuICB9KTtcblxuICByb21hamlUcmVlWyfjgaMnXSA9IHJlc29sdmVUc3Uocm9tYWppVHJlZSk7XG5cbiAgT2JqZWN0LmVudHJpZXMoU01BTExfS0FOQSkuZm9yRWFjaCgoW2thbmEsIHJvbWFdKSA9PiB7XG4gICAgc2V0VHJhbnMoa2FuYSwgcm9tYSk7XG4gIH0pO1xuXG4gIEFNQklHVU9VU19WT1dFTFMuZm9yRWFjaCgoa2FuYSkgPT4ge1xuICAgIHNldFRyYW5zKGDjgpMke2thbmF9YCwgYG4nJHtzdWJ0cmVlT2Yoa2FuYSlbJyddfWApO1xuICB9KTtcblxuICAvLyBOT1RFOiBjb3VsZCBiZSByZS1lbmFibGVkIHdpdGggYW4gb3B0aW9uP1xuICAvLyAvLyDjgpPjgbAgLT4gbWJvXG4gIC8vIGNvbnN0IExBQklBTCA9IFtcbiAgLy8gICAn44GwJywgJ+OBsycsICfjgbYnLCAn44G5JywgJ+OBvCcsXG4gIC8vICAgJ+OBsScsICfjgbQnLCAn44G3JywgJ+OBuicsICfjgb0nLFxuICAvLyAgICfjgb4nLCAn44G/JywgJ+OCgCcsICfjgoEnLCAn44KCJyxcbiAgLy8gXTtcbiAgLy8gTEFCSUFMLmZvckVhY2goKGthbmEpID0+IHtcbiAgLy8gICBzZXRUcmFucyhg44KTJHtrYW5hfWAsIGBtJHtzdWJ0cmVlT2Yoa2FuYSlbJyddfWApO1xuICAvLyB9KTtcblxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZShKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJvbWFqaVRyZWUpKSk7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVUc3UodHJlZSkge1xuICByZXR1cm4gT2JqZWN0LmVudHJpZXModHJlZSkucmVkdWNlKCh0c3VUcmVlLCBba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoIWtleSkge1xuICAgICAgLy8gd2UgaGF2ZSByZWFjaGVkIHRoZSBib3R0b20gb2YgdGhpcyBicmFuY2hcbiAgICAgIGNvbnN0IGNvbnNvbmFudCA9IHZhbHVlLmNoYXJBdCgwKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgdHN1VHJlZVtrZXldID0gT2JqZWN0LmtleXMoU09LVU9OX1dISVRFTElTVCkuaW5jbHVkZXMoY29uc29uYW50KVxuICAgICAgICA/IFNPS1VPTl9XSElURUxJU1RbY29uc29uYW50XSArIHZhbHVlXG4gICAgICAgIDogdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG1vcmUgc3VidHJlZXNcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgdHN1VHJlZVtrZXldID0gcmVzb2x2ZVRzdSh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB0c3VUcmVlO1xuICB9LCB7fSk7XG59XG4iLCAiaW1wb3J0IG1lbW9pemVPbmUgZnJvbSAnbWVtb2l6ZS1vbmUnO1xuaW1wb3J0IHsgZGVxdWFsIH0gZnJvbSAnZGVxdWFsJztcblxuaW1wb3J0IG1lcmdlV2l0aERlZmF1bHRPcHRpb25zIGZyb20gJy4vdXRpbHMvbWVyZ2VXaXRoRGVmYXVsdE9wdGlvbnMnO1xuaW1wb3J0IGthdGFrYW5hVG9IaXJhZ2FuYSBmcm9tICcuL3V0aWxzL2thdGFrYW5hVG9IaXJhZ2FuYSc7XG5pbXBvcnQgaXNLYXRha2FuYSBmcm9tICcuL2lzS2F0YWthbmEnO1xuaW1wb3J0IHsgZ2V0S2FuYVRvUm9tYWppVHJlZSB9IGZyb20gJy4vdXRpbHMva2FuYVRvUm9tYWppTWFwJztcbmltcG9ydCB7IGFwcGx5TWFwcGluZywgbWVyZ2VDdXN0b21NYXBwaW5nIH0gZnJvbSAnLi91dGlscy9rYW5hTWFwcGluZyc7XG5cbi8vIG1lbW9pemUgYW5kIGRlZXBseSBjb21wYXJlIGFyZ3Mgc28gd2Ugb25seSByZWNyZWF0ZSB3aGVuIG5lY2Vzc2FyeVxuZXhwb3J0IGNvbnN0IGNyZWF0ZUthbmFUb1JvbWFqaU1hcCA9IG1lbW9pemVPbmUoXG4gIChyb21hbml6YXRpb24sIGN1c3RvbVJvbWFqaU1hcHBpbmcpID0+IHtcbiAgICBsZXQgbWFwID0gZ2V0S2FuYVRvUm9tYWppVHJlZShyb21hbml6YXRpb24pO1xuXG4gICAgaWYgKGN1c3RvbVJvbWFqaU1hcHBpbmcpIHtcbiAgICAgIG1hcCA9IG1lcmdlQ3VzdG9tTWFwcGluZyhtYXAsIGN1c3RvbVJvbWFqaU1hcHBpbmcpO1xuICAgIH1cblxuICAgIHJldHVybiBtYXA7XG4gIH0sXG4gIGRlcXVhbFxuKTtcblxuLyoqXG4gKiBDb252ZXJ0IGthbmEgdG8gcm9tYWppXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGthbmEgdGV4dCBpbnB1dFxuICogQHBhcmFtICB7RGVmYXVsdE9wdGlvbnN9IFtvcHRpb25zPWRlZmF1bHRPcHRpb25zXVxuICogQHBhcmFtICB7T2JqZWN0LjxzdHJpbmcsIHN0cmluZz59IFttYXBdIGN1c3RvbSBtYXBwaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGNvbnZlcnRlZCB0ZXh0XG4gKiBAZXhhbXBsZVxuICogdG9Sb21hamkoJ+OBsuOCieOBjOOBquOAgOOCq+OCv+OCq+ODiicpXG4gKiAvLyA9PiAnaGlyYWdhbmEga2F0YWthbmEnXG4gKiB0b1JvbWFqaSgn44GS44O844KA44CA44Ky44O844OgJylcbiAqIC8vID0+ICdnZS1tdSBnZWVtdSdcbiAqIHRvUm9tYWppKCfjgbLjgonjgYzjgarjgIDjgqvjgr/jgqvjg4onLCB7IHVwY2FzZUthdGFrYW5hOiB0cnVlIH0pXG4gKiAvLyA9PiAnaGlyYWdhbmEgS0FUQUtBTkEnXG4gKiB0b1JvbWFqaSgn44Gk44GY44GO44KKJywgeyBjdXN0b21Sb21hamlNYXBwaW5nOiB7IOOBmDogJ3ppJywg44GkOiAndHUnLCDjgoo6ICdsaScgfSB9KTtcbiAqIC8vID0+ICd0dXppZ2lsaSdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvUm9tYWppKGlucHV0ID0gJycsIG9wdGlvbnMgPSB7fSwgbWFwKSB7XG4gIGNvbnN0IGNvbmZpZyA9IG1lcmdlV2l0aERlZmF1bHRPcHRpb25zKG9wdGlvbnMpO1xuXG4gIGlmICghbWFwKSB7XG4gICAgbWFwID0gY3JlYXRlS2FuYVRvUm9tYWppTWFwKFxuICAgICAgY29uZmlnLnJvbWFuaXphdGlvbixcbiAgICAgIGNvbmZpZy5jdXN0b21Sb21hamlNYXBwaW5nXG4gICAgKTtcbiAgfVxuXG4gIC8vIGp1c3QgdGhyb3cgYXdheSB0aGUgc3Vic3RyaW5nIGluZGV4IGluZm9ybWF0aW9uIGFuZCBzaW1wbHkgY29uY2F0ZW5hdGUgYWxsIHRoZSBrYW5hXG4gIHJldHVybiBzcGxpdEludG9Sb21hamkoaW5wdXQsIGNvbmZpZywgbWFwKVxuICAgIC5tYXAoKHJvbWFqaVRva2VuKSA9PiB7XG4gICAgICBjb25zdCBbc3RhcnQsIGVuZCwgcm9tYWppXSA9IHJvbWFqaVRva2VuO1xuICAgICAgY29uc3QgbWFrZVVwcGVyQ2FzZSA9IGNvbmZpZy51cGNhc2VLYXRha2FuYSAmJiBpc0thdGFrYW5hKGlucHV0LnNsaWNlKHN0YXJ0LCBlbmQpKTtcbiAgICAgIHJldHVybiBtYWtlVXBwZXJDYXNlID8gcm9tYWppLnRvVXBwZXJDYXNlKCkgOiByb21hamk7XG4gICAgfSlcbiAgICAuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIHNwbGl0SW50b1JvbWFqaShpbnB1dCwgb3B0aW9ucywgbWFwKSB7XG4gIGlmICghbWFwKSB7XG4gICAgbWFwID0gY3JlYXRlS2FuYVRvUm9tYWppTWFwKFxuICAgICAgb3B0aW9ucy5yb21hbml6YXRpb24sXG4gICAgICBvcHRpb25zLmN1c3RvbVJvbWFqaU1hcHBpbmdcbiAgICApO1xuICB9XG5cbiAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgeyBpc0Rlc3RpbmF0aW9uUm9tYWppOiB0cnVlIH0sIG9wdGlvbnMpO1xuXG4gIHJldHVybiBhcHBseU1hcHBpbmcoXG4gICAga2F0YWthbmFUb0hpcmFnYW5hKGlucHV0LCB0b1JvbWFqaSwgY29uZmlnKSxcbiAgICBtYXAsXG4gICAgIW9wdGlvbnMuSU1FTW9kZVxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b1JvbWFqaTtcbiIsICJpbXBvcnQgaXNFbXB0eSBmcm9tICcuL2lzRW1wdHknO1xuaW1wb3J0IHsgRU5fUFVOQ1RVQVRJT05fUkFOR0VTIH0gZnJvbSAnLi4vY29uc3RhbnRzLnRzJztcbmltcG9ydCBpc0NoYXJJblJhbmdlIGZyb20gJy4vaXNDaGFySW5SYW5nZSc7XG5cbi8qKlxuICogVGVzdHMgYSBjaGFyYWN0ZXIuIFJldHVybnMgdHJ1ZSBpZiB0aGUgY2hhcmFjdGVyIGlzIGNvbnNpZGVyZWQgRW5nbGlzaCBwdW5jdHVhdGlvbi5cbiAqIEBwYXJhbSAge1N0cmluZ30gY2hhciBjaGFyYWN0ZXIgc3RyaW5nIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzQ2hhckVuZ2xpc2hQdW5jdHVhdGlvbihjaGFyID0gJycpIHtcbiAgaWYgKGlzRW1wdHkoY2hhcikpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEVOX1BVTkNUVUFUSU9OX1JBTkdFUy5zb21lKChbc3RhcnQsIGVuZF0pID0+IGlzQ2hhckluUmFuZ2UoY2hhciwgc3RhcnQsIGVuZCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc0NoYXJFbmdsaXNoUHVuY3R1YXRpb247XG4iLCAiaW1wb3J0IG1lcmdlV2l0aERlZmF1bHRPcHRpb25zIGZyb20gJy4vdXRpbHMvbWVyZ2VXaXRoRGVmYXVsdE9wdGlvbnMnO1xuaW1wb3J0IGthdGFrYW5hVG9IaXJhZ2FuYSBmcm9tICcuL3V0aWxzL2thdGFrYW5hVG9IaXJhZ2FuYSc7XG5pbXBvcnQgaXNDaGFyRW5nbGlzaFB1bmN0dWF0aW9uIGZyb20gJy4vdXRpbHMvaXNDaGFyRW5nbGlzaFB1bmN0dWF0aW9uJztcbmltcG9ydCBpc1JvbWFqaSBmcm9tICcuL2lzUm9tYWppJztcbmltcG9ydCBpc01peGVkIGZyb20gJy4vaXNNaXhlZCc7XG5pbXBvcnQgdG9LYW5hIGZyb20gJy4vdG9LYW5hJztcbmltcG9ydCB0b1JvbWFqaSBmcm9tICcuL3RvUm9tYWppJztcblxuLyoqXG4gKiBDb252ZXJ0IGlucHV0IHRvIFtIaXJhZ2FuYV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSGlyYWdhbmEpXG4gKiBAcGFyYW0gIHtTdHJpbmd9IFtpbnB1dD0nJ10gdGV4dFxuICogQHBhcmFtICB7RGVmYXVsdE9wdGlvbnN9IFtvcHRpb25zPWRlZmF1bHRPcHRpb25zXVxuICogQHJldHVybiB7U3RyaW5nfSBjb252ZXJ0ZWQgdGV4dFxuICogQGV4YW1wbGVcbiAqIHRvSGlyYWdhbmEoJ3RvdWt5b3UsIOOCquOCquOCteOCqycpXG4gKiAvLyA9PiAn44Go44GG44GN44KH44GG44CB44CA44GK44GK44GV44GLJ1xuICogdG9IaXJhZ2FuYSgnb25seSDjgqvjg4onLCB7IHBhc3NSb21hamk6IHRydWUgfSlcbiAqIC8vID0+ICdvbmx5IOOBi+OBqidcbiAqIHRvSGlyYWdhbmEoJ3dpJylcbiAqIC8vID0+ICfjgYbjgYMnXG4gKiB0b0hpcmFnYW5hKCd3aScsIHsgdXNlT2Jzb2xldGVLYW5hOiB0cnVlIH0pXG4gKiAvLyA9PiAn44KQJ1xuICovXG5mdW5jdGlvbiB0b0hpcmFnYW5hKGlucHV0ID0gJycsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCBjb25maWcgPSBtZXJnZVdpdGhEZWZhdWx0T3B0aW9ucyhvcHRpb25zKTtcbiAgaWYgKGNvbmZpZy5wYXNzUm9tYWppKSB7XG4gICAgcmV0dXJuIGthdGFrYW5hVG9IaXJhZ2FuYShpbnB1dCwgdG9Sb21hamksIGNvbmZpZyk7XG4gIH1cblxuICBpZiAoaXNNaXhlZChpbnB1dCwgeyBwYXNzS2Fuamk6IHRydWUgfSkpIHtcbiAgICBjb25zdCBjb252ZXJ0ZWRLYXRha2FuYSA9IGthdGFrYW5hVG9IaXJhZ2FuYShpbnB1dCwgdG9Sb21hamksIGNvbmZpZyk7XG4gICAgcmV0dXJuIHRvS2FuYShjb252ZXJ0ZWRLYXRha2FuYS50b0xvd2VyQ2FzZSgpLCBjb25maWcpO1xuICB9XG5cbiAgaWYgKGlzUm9tYWppKGlucHV0KSB8fCBpc0NoYXJFbmdsaXNoUHVuY3R1YXRpb24oaW5wdXQpKSB7XG4gICAgcmV0dXJuIHRvS2FuYShpbnB1dC50b0xvd2VyQ2FzZSgpLCBjb25maWcpO1xuICB9XG5cbiAgcmV0dXJuIGthdGFrYW5hVG9IaXJhZ2FuYShpbnB1dCwgdG9Sb21hamksIGNvbmZpZyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvSGlyYWdhbmE7XG4iLCAiaW1wb3J0IG1lcmdlV2l0aERlZmF1bHRPcHRpb25zIGZyb20gJy4vdXRpbHMvbWVyZ2VXaXRoRGVmYXVsdE9wdGlvbnMnO1xuaW1wb3J0IGhpcmFnYW5hVG9LYXRha2FuYSBmcm9tICcuL3V0aWxzL2hpcmFnYW5hVG9LYXRha2FuYSc7XG5pbXBvcnQgaXNDaGFyRW5nbGlzaFB1bmN0dWF0aW9uIGZyb20gJy4vdXRpbHMvaXNDaGFyRW5nbGlzaFB1bmN0dWF0aW9uJztcbmltcG9ydCB0b0thbmEgZnJvbSAnLi90b0thbmEnO1xuaW1wb3J0IGlzUm9tYWppIGZyb20gJy4vaXNSb21hamknO1xuaW1wb3J0IGlzTWl4ZWQgZnJvbSAnLi9pc01peGVkJztcblxuLyoqXG4gKiBDb252ZXJ0IGlucHV0IHRvIFtLYXRha2FuYV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvS2F0YWthbmEpXG4gKiBAcGFyYW0gIHtTdHJpbmd9IFtpbnB1dD0nJ10gdGV4dFxuICogQHBhcmFtICB7RGVmYXVsdE9wdGlvbnN9IFtvcHRpb25zPWRlZmF1bHRPcHRpb25zXVxuICogQHJldHVybiB7U3RyaW5nfSBjb252ZXJ0ZWQgdGV4dFxuICogQGV4YW1wbGVcbiAqIHRvS2F0YWthbmEoJ3RvdWt5b3UsIOOBiuOBiuOBleOBiycpXG4gKiAvLyA9PiAn44OI44Km44Kt44On44Km44CB44CA44Kq44Kq44K144KrJ1xuICogdG9LYXRha2FuYSgnb25seSDjgYvjgaonLCB7IHBhc3NSb21hamk6IHRydWUgfSlcbiAqIC8vID0+ICdvbmx5IOOCq+ODiidcbiAqIHRvS2F0YWthbmEoJ3dpJylcbiAqIC8vID0+ICfjgqbjgqMnXG4gKiB0b0thdGFrYW5hKCd3aScsIHsgdXNlT2Jzb2xldGVLYW5hOiB0cnVlIH0pXG4gKiAvLyA9PiAn44OwJ1xuICovXG5mdW5jdGlvbiB0b0thdGFrYW5hKGlucHV0ID0gJycsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCBtZXJnZWRPcHRpb25zID0gbWVyZ2VXaXRoRGVmYXVsdE9wdGlvbnMob3B0aW9ucyk7XG4gIGlmIChtZXJnZWRPcHRpb25zLnBhc3NSb21hamkpIHtcbiAgICByZXR1cm4gaGlyYWdhbmFUb0thdGFrYW5hKGlucHV0KTtcbiAgfVxuXG4gIGlmIChpc01peGVkKGlucHV0KSB8fCBpc1JvbWFqaShpbnB1dCkgfHwgaXNDaGFyRW5nbGlzaFB1bmN0dWF0aW9uKGlucHV0KSkge1xuICAgIGNvbnN0IGhpcmFnYW5hID0gdG9LYW5hKGlucHV0LnRvTG93ZXJDYXNlKCksIG1lcmdlZE9wdGlvbnMpO1xuICAgIHJldHVybiBoaXJhZ2FuYVRvS2F0YWthbmEoaGlyYWdhbmEpO1xuICB9XG5cbiAgcmV0dXJuIGhpcmFnYW5hVG9LYXRha2FuYShpbnB1dCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvS2F0YWthbmE7XG4iLCAiaW1wb3J0IGlzRW1wdHkgZnJvbSAnLi9pc0VtcHR5JztcbmltcG9ydCB7IEpBX1BVTkNUVUFUSU9OX1JBTkdFUyB9IGZyb20gJy4uL2NvbnN0YW50cy50cyc7XG5pbXBvcnQgaXNDaGFySW5SYW5nZSBmcm9tICcuL2lzQ2hhckluUmFuZ2UnO1xuaW1wb3J0IGlzQ2hhckl0ZXJhdGlvbk1hcmsgZnJvbSAnLi9pc0NoYXJJdGVyYXRpb25NYXJrJztcblxuLyoqXG4gKiBUZXN0cyBhIGNoYXJhY3Rlci4gUmV0dXJucyB0cnVlIGlmIHRoZSBjaGFyYWN0ZXIgaXMgY29uc2lkZXJlZCBKYXBhbmVzZSBwdW5jdHVhdGlvbi5cbiAqIEBwYXJhbSAge1N0cmluZ30gY2hhciBjaGFyYWN0ZXIgc3RyaW5nIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzQ2hhckphcGFuZXNlUHVuY3R1YXRpb24oY2hhciA9ICcnKSB7XG4gIGlmIChpc0VtcHR5KGNoYXIpIHx8IGlzQ2hhckl0ZXJhdGlvbk1hcmsoY2hhcikpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEpBX1BVTkNUVUFUSU9OX1JBTkdFUy5zb21lKChbc3RhcnQsIGVuZF0pID0+IGlzQ2hhckluUmFuZ2UoY2hhciwgc3RhcnQsIGVuZCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc0NoYXJKYXBhbmVzZVB1bmN0dWF0aW9uO1xuIiwgImltcG9ydCBpc0VtcHR5IGZyb20gJy4vdXRpbHMvaXNFbXB0eSc7XG5pbXBvcnQgaXNDaGFyRW5nbGlzaFB1bmN0dWF0aW9uIGZyb20gJy4vdXRpbHMvaXNDaGFyRW5nbGlzaFB1bmN0dWF0aW9uJztcbmltcG9ydCBpc0NoYXJKYXBhbmVzZVB1bmN0dWF0aW9uIGZyb20gJy4vdXRpbHMvaXNDaGFySmFwYW5lc2VQdW5jdHVhdGlvbic7XG5pbXBvcnQgaXNDaGFyUm9tYWppIGZyb20gJy4vdXRpbHMvaXNDaGFyUm9tYWppJztcbmltcG9ydCBpc0NoYXJLYW5qaSBmcm9tICcuL3V0aWxzL2lzQ2hhckthbmppJztcbmltcG9ydCBpc0NoYXJIaXJhZ2FuYSBmcm9tICcuL3V0aWxzL2lzQ2hhckhpcmFnYW5hJztcbmltcG9ydCBpc0NoYXJLYXRha2FuYSBmcm9tICcuL3V0aWxzL2lzQ2hhckthdGFrYW5hJztcbmltcG9ydCBpc0NoYXJKYXBhbmVzZSBmcm9tICcuL3V0aWxzL2lzQ2hhckphcGFuZXNlJztcblxuY29uc3QgaXNDaGFyRW5TcGFjZSA9ICh4KSA9PiB4ID09PSAnICc7XG5jb25zdCBpc0NoYXJKYVNwYWNlID0gKHgpID0+IHggPT09ICfjgIAnO1xuY29uc3QgaXNDaGFySmFOdW0gPSAoeCkgPT4gL1vvvJAt77yZXS8udGVzdCh4KTtcbmNvbnN0IGlzQ2hhckVuTnVtID0gKHgpID0+IC9bMC05XS8udGVzdCh4KTtcblxuY29uc3QgVE9LRU5fVFlQRVMgPSB7XG4gIEVOOiAnZW4nLFxuICBKQTogJ2phJyxcbiAgRU5fTlVNOiAnZW5nbGlzaE51bWVyYWwnLFxuICBKQV9OVU06ICdqYXBhbmVzZU51bWVyYWwnLFxuICBFTl9QVU5DOiAnZW5nbGlzaFB1bmN0dWF0aW9uJyxcbiAgSkFfUFVOQzogJ2phcGFuZXNlUHVuY3R1YXRpb24nLFxuICBLQU5KSTogJ2thbmppJyxcbiAgSElSQUdBTkE6ICdoaXJhZ2FuYScsXG4gIEtBVEFLQU5BOiAna2F0YWthbmEnLFxuICBTUEFDRTogJ3NwYWNlJyxcbiAgT1RIRVI6ICdvdGhlcicsXG59O1xuXG4vLyBwcmV0dGllci1pZ25vcmVcbmV4cG9ydCBmdW5jdGlvbiBnZXRUeXBlKGlucHV0LCBjb21wYWN0ID0gZmFsc2UpIHtcbiAgY29uc3Qge1xuICAgIEVOLCBKQSwgRU5fTlVNLCBKQV9OVU0sIEVOX1BVTkMsIEpBX1BVTkMsIEtBTkpJLCBISVJBR0FOQSwgS0FUQUtBTkEsIFNQQUNFLCBPVEhFUixcbiAgfSA9IFRPS0VOX1RZUEVTO1xuXG4gIGlmIChjb21wYWN0KSB7XG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICBjYXNlIGlzQ2hhckphTnVtKGlucHV0KTogcmV0dXJuIE9USEVSO1xuICAgICAgY2FzZSBpc0NoYXJFbk51bShpbnB1dCk6IHJldHVybiBPVEhFUjtcbiAgICAgIGNhc2UgaXNDaGFyRW5TcGFjZShpbnB1dCk6IHJldHVybiBFTjtcbiAgICAgIGNhc2UgaXNDaGFyRW5nbGlzaFB1bmN0dWF0aW9uKGlucHV0KTogcmV0dXJuIE9USEVSO1xuICAgICAgY2FzZSBpc0NoYXJKYVNwYWNlKGlucHV0KTogcmV0dXJuIEpBO1xuICAgICAgY2FzZSBpc0NoYXJKYXBhbmVzZVB1bmN0dWF0aW9uKGlucHV0KTogcmV0dXJuIE9USEVSO1xuICAgICAgY2FzZSBpc0NoYXJKYXBhbmVzZShpbnB1dCk6IHJldHVybiBKQTtcbiAgICAgIGNhc2UgaXNDaGFyUm9tYWppKGlucHV0KTogcmV0dXJuIEVOO1xuICAgICAgZGVmYXVsdDogcmV0dXJuIE9USEVSO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2UgaXNDaGFySmFTcGFjZShpbnB1dCk6IHJldHVybiBTUEFDRTtcbiAgICAgIGNhc2UgaXNDaGFyRW5TcGFjZShpbnB1dCk6IHJldHVybiBTUEFDRTtcbiAgICAgIGNhc2UgaXNDaGFySmFOdW0oaW5wdXQpOiByZXR1cm4gSkFfTlVNO1xuICAgICAgY2FzZSBpc0NoYXJFbk51bShpbnB1dCk6IHJldHVybiBFTl9OVU07XG4gICAgICBjYXNlIGlzQ2hhckVuZ2xpc2hQdW5jdHVhdGlvbihpbnB1dCk6IHJldHVybiBFTl9QVU5DO1xuICAgICAgY2FzZSBpc0NoYXJKYXBhbmVzZVB1bmN0dWF0aW9uKGlucHV0KTogcmV0dXJuIEpBX1BVTkM7XG4gICAgICBjYXNlIGlzQ2hhckthbmppKGlucHV0KTogcmV0dXJuIEtBTkpJO1xuICAgICAgY2FzZSBpc0NoYXJIaXJhZ2FuYShpbnB1dCk6IHJldHVybiBISVJBR0FOQTtcbiAgICAgIGNhc2UgaXNDaGFyS2F0YWthbmEoaW5wdXQpOiByZXR1cm4gS0FUQUtBTkE7XG4gICAgICBjYXNlIGlzQ2hhckphcGFuZXNlKGlucHV0KTogcmV0dXJuIEpBO1xuICAgICAgY2FzZSBpc0NoYXJSb21hamkoaW5wdXQpOiByZXR1cm4gRU47XG4gICAgICBkZWZhdWx0OiByZXR1cm4gT1RIRVI7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogU3BsaXRzIGlucHV0IGludG8gYXJyYXkgb2Ygc3RyaW5ncyBzZXBhcmF0ZWQgYnkgb3BpbmlvbmF0ZWQgdG9rZW4gdHlwZXNcbiAqIGAnZW4nLCAnamEnLCAnZW5nbGlzaE51bWVyYWwnLCAnamFwYW5lc2VOdW1lcmFsJywnZW5nbGlzaFB1bmN0dWF0aW9uJywgJ2phcGFuZXNlUHVuY3R1YXRpb24nLCdrYW5qaScsICdoaXJhZ2FuYScsICdrYXRha2FuYScsICdzcGFjZScsICdvdGhlcidgLlxuICogSWYgYHsgY29tcGFjdDogdHJ1ZSB9YCB0aGVuIG1hbnkgc2FtZS1sYW5ndWFnZSB0b2tlbnMgYXJlIGNvbWJpbmVkIChzcGFjZXMgKyB0ZXh0LCBrYW5qaSArIGthbmEsIG51bWVyYWwgKyBwdW5jdHVhdGlvbikuXG4gKiBJZiBgeyBkZXRhaWxlZDogdHJ1ZSB9YCB0aGVuIHJldHVybiBhcnJheSB3aWxsIGNvbnRhaW4gYHsgdHlwZSwgdmFsdWUgfWAgaW5zdGVhZCBvZiBgJ3ZhbHVlJ2BcbiAqIEBwYXJhbSAge1N0cmluZ30gaW5wdXQgdGV4dFxuICogQHBhcmFtICB7e2NvbXBhY3Q6IEJvb2xlYW4gfCB1bmRlZmluZWQsIGRldGFpbGVkOiBCb29sZWFuIHwgdW5kZWZpbmVkfX0gW29wdGlvbnM9eyBjb21wYWN0OiBmYWxzZSwgZGV0YWlsZWQ6IGZhbHNlfV0gb3B0aW9ucyB0byBtb2RpZnkgb3V0cHV0IHN0eWxlXG4gKiBAcmV0dXJuIHsoU3RyaW5nW118QXJyYXkuPHt0eXBlOiBTdHJpbmcsIHZhbHVlOiBTdHJpbmd9Pil9IHRleHQgc3BsaXQgaW50byB0b2tlbnMgY29udGFpbmluZyB2YWx1ZXMsIG9yIGRldGFpbGVkIG9iamVjdFxuICogQGV4YW1wbGVcbiAqIHRva2VuaXplKCfjgbXjgbXjg5Xjg5UnKVxuICogLy8gWyfjgbXjgbUnLCAn44OV44OVJ11cbiAqXG4gKiB0b2tlbml6ZSgn5oSf44GYJylcbiAqIC8vIFsn5oSfJywgJ+OBmCddXG4gKlxuICogdG9rZW5pemUoJ+S6uuOAhScpXG4gKiAvLyBbJ+S6uuOAhSddXG4gKlxuICogdG9rZW5pemUoJ3RydWx5IOengeOBr+aCsuOBl+OBhCcpXG4gKiAvLyBbJ3RydWx5JywgJyAnLCAn56eBJywgJ+OBrycsICfmgrInLCAn44GX44GEJ11cbiAqXG4gKiB0b2tlbml6ZSgndHJ1bHkg56eB44Gv5oKy44GX44GEJywgeyBjb21wYWN0OiB0cnVlIH0pXG4gKiAvLyBbJ3RydWx5ICcsICfnp4Hjga/mgrLjgZfjgYQnXVxuICpcbiAqIHRva2VuaXplKCc1cm9tYWppIGhlcmUuLi4hP+S6uuOAhea8ouWtl+OBsuOCieOBjOOBquOCq+OCv+OAgOOCq+ODiu+8lOOAjO+8s++8qO+8qe+8r+OAjeOAgu+8gScpXG4gKiAvLyBbICc1JywgJ3JvbWFqaScsICcgJywgJ2hlcmUnLCAnLi4uIT8nLCAn5Lq644CF5ryi5a2XJywgJ+OBsuOCieOBjOOBqicsICfjgqvjgr8nLCAn44CAJywgJ+OCq+ODiicsICfvvJQnLCAn44CMJywgJ++8s++8qO+8qe+8rycsICfjgI3jgILvvIEnXVxuICpcbiAqIHRva2VuaXplKCc1cm9tYWppIGhlcmUuLi4hP+S6uuOAhea8ouWtl+OBsuOCieOBjOOBquOCq+OCv+OAgOOCq+ODiu+8lOOAjO+8s++8qO+8qe+8r+OAjeOAgu+8gScsIHsgY29tcGFjdDogdHJ1ZSB9KVxuICogLy8gWyAnNScsICdyb21hamkgaGVyZScsICcuLi4hPycsICfkurrjgIXmvKLlrZfjgbLjgonjgYzjgarjgqvjgr/jgIDjgqvjg4onLCAn77yU44CMJywgJ++8s++8qO+8qe+8rycsICfjgI3jgILvvIEnXVxuICpcbiAqIHRva2VuaXplKCc1cm9tYWppIGhlcmUuLi4hP+S6uuOAhea8ouWtl+OBsuOCieOBjOOBquOCq+OCv+OAgOOCq+ODiu+8lOOAjO+8s++8qO+8qe+8r+OAjeOAgu+8gSDZhNmG2LDZh9ioJywgeyBkZXRhaWxlZDogdHJ1ZSB9KVxuICogLy8gW1xuICogIHsgdHlwZTogJ2VuZ2xpc2hOdW1lcmFsJywgdmFsdWU6ICc1JyB9LFxuICogIHsgdHlwZTogJ2VuJywgdmFsdWU6ICdyb21hamknIH0sXG4gKiAgeyB0eXBlOiAnc3BhY2UnLCB2YWx1ZTogJyAnIH0sXG4gKiAgeyB0eXBlOiAnZW4nLCB2YWx1ZTogJ2hlcmUnIH0sXG4gKiAgeyB0eXBlOiAnZW5nbGlzaFB1bmN0dWF0aW9uJywgdmFsdWU6ICcuLi4hPycgfSxcbiAqICB7IHR5cGU6ICdrYW5qaScsIHZhbHVlOiAn5Lq644CF5ryi5a2XJyB9LFxuICogIHsgdHlwZTogJ2hpcmFnYW5hJywgdmFsdWU6ICfjgbLjgonjgYzjgaonIH0sXG4gKiAgeyB0eXBlOiAna2F0YWthbmEnLCB2YWx1ZTogJ+OCq+OCvycgfSxcbiAqICB7IHR5cGU6ICdzcGFjZScsIHZhbHVlOiAn44CAJyB9LFxuICogIHsgdHlwZTogJ2thdGFrYW5hJywgdmFsdWU6ICfjgqvjg4onIH0sXG4gKiAgeyB0eXBlOiAnamFwYW5lc2VOdW1lcmFsJywgdmFsdWU6ICfvvJQnIH0sXG4gKiAgeyB0eXBlOiAnamFwYW5lc2VQdW5jdHVhdGlvbicsIHZhbHVlOiAn44CMJyB9LFxuICogIHsgdHlwZTogJ2phJywgdmFsdWU6ICfvvLPvvKjvvKnvvK8nIH0sXG4gKiAgeyB0eXBlOiAnamFwYW5lc2VQdW5jdHVhdGlvbicsIHZhbHVlOiAn44CN44CC77yBJyB9LFxuICogIHsgdHlwZTogJ3NwYWNlJywgdmFsdWU6ICcgJyB9LFxuICogIHsgdHlwZTogJ290aGVyJywgdmFsdWU6ICfZhNmG2LDZh9ioJyB9LFxuICogXVxuICpcbiAqIHRva2VuaXplKCc1cm9tYWppIGhlcmUuLi4hP+S6uuOAhea8ouWtl+OBsuOCieOBjOOBquOCq+OCv+OAgOOCq+ODiu+8lOOAjO+8s++8qO+8qe+8r+OAjeOAgu+8gSDZhNmG2LDZh9ioJywgeyBjb21wYWN0OiB0cnVlLCBkZXRhaWxlZDogdHJ1ZX0pXG4gKiAvLyBbXG4gKiAgeyB0eXBlOiAnb3RoZXInLCB2YWx1ZTogJzUnIH0sXG4gKiAgeyB0eXBlOiAnZW4nLCB2YWx1ZTogJ3JvbWFqaSBoZXJlJyB9LFxuICogIHsgdHlwZTogJ290aGVyJywgdmFsdWU6ICcuLi4hPycgfSxcbiAqICB7IHR5cGU6ICdqYScsIHZhbHVlOiAn5Lq644CF5ryi5a2X44Gy44KJ44GM44Gq44Kr44K/44CA44Kr44OKJyB9LFxuICogIHsgdHlwZTogJ290aGVyJywgdmFsdWU6ICfvvJTjgIwnIH0sXG4gKiAgeyB0eXBlOiAnamEnLCB2YWx1ZTogJ++8s++8qO+8qe+8rycgfSxcbiAqICB7IHR5cGU6ICdvdGhlcicsIHZhbHVlOiAn44CN44CC77yBJyB9LFxuICogIHsgdHlwZTogJ2VuJywgdmFsdWU6ICcgJyB9LFxuICogIHsgdHlwZTogJ290aGVyJywgdmFsdWU6ICfZhNmG2LDZh9ioJyB9LFxuICpdXG4gKi9cbmZ1bmN0aW9uIHRva2VuaXplKGlucHV0LCB7IGNvbXBhY3QgPSBmYWxzZSwgZGV0YWlsZWQgPSBmYWxzZSB9ID0ge30pIHtcbiAgaWYgKGlucHV0ID09IG51bGwgfHwgaXNFbXB0eShpbnB1dCkpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgY29uc3QgY2hhcnMgPSBbLi4uaW5wdXRdO1xuICBsZXQgaW5pdGlhbCA9IGNoYXJzLnNoaWZ0KCk7XG4gIGxldCBwcmV2VHlwZSA9IGdldFR5cGUoaW5pdGlhbCwgY29tcGFjdCk7XG4gIGluaXRpYWwgPSBkZXRhaWxlZCA/IHsgdHlwZTogcHJldlR5cGUsIHZhbHVlOiBpbml0aWFsIH0gOiBpbml0aWFsO1xuXG4gIGNvbnN0IHJlc3VsdCA9IGNoYXJzLnJlZHVjZShcbiAgICAodG9rZW5zLCBjaGFyKSA9PiB7XG4gICAgICBjb25zdCBjdXJyVHlwZSA9IGdldFR5cGUoY2hhciwgY29tcGFjdCk7XG4gICAgICBjb25zdCBzYW1lVHlwZSA9IGN1cnJUeXBlID09PSBwcmV2VHlwZTtcbiAgICAgIHByZXZUeXBlID0gY3VyclR5cGU7XG4gICAgICBsZXQgbmV3VmFsdWUgPSBjaGFyO1xuXG4gICAgICBpZiAoc2FtZVR5cGUpIHtcbiAgICAgICAgbmV3VmFsdWUgPSAoZGV0YWlsZWQgPyB0b2tlbnMucG9wKCkudmFsdWUgOiB0b2tlbnMucG9wKCkpICsgbmV3VmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXRhaWxlZFxuICAgICAgICA/IHRva2Vucy5jb25jYXQoeyB0eXBlOiBjdXJyVHlwZSwgdmFsdWU6IG5ld1ZhbHVlIH0pXG4gICAgICAgIDogdG9rZW5zLmNvbmNhdChuZXdWYWx1ZSk7XG4gICAgfSxcbiAgICBbaW5pdGlhbF1cbiAgKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9rZW5pemU7XG4iLCAiaW1wb3J0IGlzSmFwYW5lc2UgZnJvbSAnLi9pc0phcGFuZXNlJztcbmltcG9ydCBpc0thbmEgZnJvbSAnLi9pc0thbmEnO1xuaW1wb3J0IGlzS2FuamkgZnJvbSAnLi9pc0thbmppJztcbmltcG9ydCB0b2tlbml6ZSBmcm9tICcuL3Rva2VuaXplJztcblxuY29uc3QgaXNMZWFkaW5nV2l0aG91dEluaXRpYWxLYW5hID0gKGlucHV0LCBsZWFkaW5nKSA9PiBsZWFkaW5nICYmICFpc0thbmEoaW5wdXRbMF0pO1xuY29uc3QgaXNUcmFpbGluZ1dpdGhvdXRGaW5hbEthbmEgPSAoaW5wdXQsIGxlYWRpbmcpID0+ICFsZWFkaW5nICYmICFpc0thbmEoaW5wdXRbaW5wdXQubGVuZ3RoIC0gMV0pO1xuY29uc3QgaXNJbnZhbGlkTWF0Y2hlciA9IChpbnB1dCwgbWF0Y2hLYW5qaSkgPT5cbiAgKG1hdGNoS2FuamkgJiYgIVsuLi5tYXRjaEthbmppXS5zb21lKGlzS2FuamkpKSB8fCAoIW1hdGNoS2FuamkgJiYgaXNLYW5hKGlucHV0KSk7XG5cbi8qKlxuICogU3RyaXBzIFtPa3VyaWdhbmFdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL09rdXJpZ2FuYSlcbiAqIEBwYXJhbSAge1N0cmluZ30gaW5wdXQgdGV4dFxuICogQHBhcmFtICB7eyBsZWFkaW5nOiBCb29sZWFuIHwgdW5kZWZpbmVkLCBtYXRjaEthbmppOiBzdHJpbmcgfCB1bmRlZmluZWQgfX0gW29wdGlvbnM9eyBsZWFkaW5nOiBmYWxzZSwgbWF0Y2hLYW5qaTogJycgfV0gb3B0aW9uYWwgY29uZmlnXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHRleHQgd2l0aCBva3VyaWdhbmEgcmVtb3ZlZFxuICogQGV4YW1wbGVcbiAqIHN0cmlwT2t1cmlnYW5hKCfouI/jgb/ovrzjgoAnKVxuICogLy8gPT4gJ+i4j+OBv+i+vCdcbiAqIHN0cmlwT2t1cmlnYW5hKCfjgYrnpZ3jgYQnKVxuICogLy8gPT4gJ+OBiuelnSdcbiAqIHN0cmlwT2t1cmlnYW5hKCfjgYrohbknLCB7IGxlYWRpbmc6IHRydWUgfSk7XG4gKiAvLyA9PiAn6IW5J1xuICogc3RyaXBPa3VyaWdhbmEoJ+OBteOBv+OBk+OCgCcsIHsgbWF0Y2hLYW5qaTogJ+i4j+OBv+i+vOOCgCcgfSk7XG4gKiAvLyA9PiAn44G144G/44GTJ1xuICogc3RyaXBPa3VyaWdhbmEoJ+OBiuOBv+OBvuOBhCcsIHsgbWF0Y2hLYW5qaTogJ+OBiuelneOBhCcsIGxlYWRpbmc6IHRydWUgfSk7XG4gKiAvLyA9PiAn44G/44G+44GEJ1xuICovXG5mdW5jdGlvbiBzdHJpcE9rdXJpZ2FuYShpbnB1dCA9ICcnLCB7IGxlYWRpbmcgPSBmYWxzZSwgbWF0Y2hLYW5qaSA9ICcnIH0gPSB7fSkge1xuICBpZiAoXG4gICAgIWlzSmFwYW5lc2UoaW5wdXQpIHx8XG4gICAgaXNMZWFkaW5nV2l0aG91dEluaXRpYWxLYW5hKGlucHV0LCBsZWFkaW5nKSB8fFxuICAgIGlzVHJhaWxpbmdXaXRob3V0RmluYWxLYW5hKGlucHV0LCBsZWFkaW5nKSB8fFxuICAgIGlzSW52YWxpZE1hdGNoZXIoaW5wdXQsIG1hdGNoS2FuamkpXG4gICkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuXG4gIGNvbnN0IGNoYXJzID0gbWF0Y2hLYW5qaSB8fCBpbnB1dDtcbiAgY29uc3Qgb2t1cmlnYW5hUmVnZXggPSBuZXcgUmVnRXhwKFxuICAgIGxlYWRpbmcgPyBgXiR7dG9rZW5pemUoY2hhcnMpLnNoaWZ0KCl9YCA6IGAke3Rva2VuaXplKGNoYXJzKS5wb3AoKX0kYFxuICApO1xuICByZXR1cm4gaW5wdXQucmVwbGFjZShva3VyaWdhbmFSZWdleCwgJycpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpcE9rdXJpZ2FuYTtcbiIsICJcbi8vIFdlIGFyZSBtb2R1bGFyaXppbmcgdGhpcyBtYW51YWxseSBiZWNhdXNlIHRoZSBjdXJyZW50IG1vZHVsYXJpemUgc2V0dGluZyBpbiBFbXNjcmlwdGVuIGhhcyBzb21lIGlzc3Vlczpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9rcmlwa2VuL2Vtc2NyaXB0ZW4vaXNzdWVzLzU4MjBcbi8vIEluIGFkZGl0aW9uLCBXaGVuIHlvdSB1c2UgZW1jYydzIG1vZHVsYXJpemF0aW9uLCBpdCBzdGlsbCBleHBlY3RzIHRvIGV4cG9ydCBhIGdsb2JhbCBvYmplY3QgY2FsbGVkIGBNb2R1bGVgLFxuLy8gd2hpY2ggaXMgYWJsZSB0byBiZSB1c2VkL2NhbGxlZCBiZWZvcmUgdGhlIFdBU00gaXMgbG9hZGVkLlxuLy8gVGhlIG1vZHVsYXJpemF0aW9uIGJlbG93IGV4cG9ydHMgYSBwcm9taXNlIHRoYXQgbG9hZHMgYW5kIHJlc29sdmVzIHRvIHRoZSBhY3R1YWwgc3FsLmpzIG1vZHVsZS5cbi8vIFRoYXQgd2F5LCB0aGlzIG1vZHVsZSBjYW4ndCBiZSB1c2VkIGJlZm9yZSB0aGUgV0FTTSBpcyBmaW5pc2hlZCBsb2FkaW5nLlxuXG4vLyBXZSBhcmUgZ29pbmcgdG8gZGVmaW5lIGEgZnVuY3Rpb24gdGhhdCBhIHVzZXIgd2lsbCBjYWxsIHRvIHN0YXJ0IGxvYWRpbmcgaW5pdGlhbGl6aW5nIG91ciBTcWwuanMgbGlicmFyeVxuLy8gSG93ZXZlciwgdGhhdCBmdW5jdGlvbiBtaWdodCBiZSBjYWxsZWQgbXVsdGlwbGUgdGltZXMsIGFuZCBvbiBzdWJzZXF1ZW50IGNhbGxzLCB3ZSBkb24ndCBhY3R1YWxseSB3YW50IGl0IHRvIGluc3RhbnRpYXRlIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBNb2R1bGVcbi8vIEluc3RlYWQsIHdlIHdhbnQgdG8gcmV0dXJuIHRoZSBwcmV2aW91c2x5IGxvYWRlZCBtb2R1bGVcblxuLy8gVE9ETzogTWFrZSB0aGlzIG5vdCBkZWNsYXJlIGEgZ2xvYmFsIGlmIHVzZWQgaW4gdGhlIGJyb3dzZXJcbnZhciBpbml0U3FsSnNQcm9taXNlID0gdW5kZWZpbmVkO1xuXG52YXIgaW5pdFNxbEpzID0gZnVuY3Rpb24gKG1vZHVsZUNvbmZpZykge1xuXG4gICAgaWYgKGluaXRTcWxKc1Byb21pc2Upe1xuICAgICAgcmV0dXJuIGluaXRTcWxKc1Byb21pc2U7XG4gICAgfVxuICAgIC8vIElmIHdlJ3JlIGhlcmUsIHdlJ3ZlIG5ldmVyIGNhbGxlZCB0aGlzIGZ1bmN0aW9uIGJlZm9yZVxuICAgIGluaXRTcWxKc1Byb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZU1vZHVsZSwgcmVqZWN0KSB7XG5cbiAgICAgICAgLy8gV2UgYXJlIG1vZHVsYXJpemluZyB0aGlzIG1hbnVhbGx5IGJlY2F1c2UgdGhlIGN1cnJlbnQgbW9kdWxhcml6ZSBzZXR0aW5nIGluIEVtc2NyaXB0ZW4gaGFzIHNvbWUgaXNzdWVzOlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20va3JpcGtlbi9lbXNjcmlwdGVuL2lzc3Vlcy81ODIwXG5cbiAgICAgICAgLy8gVGhlIHdheSB0byBhZmZlY3QgdGhlIGxvYWRpbmcgb2YgZW1jYyBjb21waWxlZCBtb2R1bGVzIGlzIHRvIGNyZWF0ZSBhIHZhcmlhYmxlIGNhbGxlZCBgTW9kdWxlYCBhbmQgYWRkXG4gICAgICAgIC8vIHByb3BlcnRpZXMgdG8gaXQsIGxpa2UgYHByZVJ1bmAsIGBwb3N0UnVuYCwgZXRjXG4gICAgICAgIC8vIFdlIGFyZSB1c2luZyB0aGF0IHRvIGdldCBub3RpZmllZCB3aGVuIHRoZSBXQVNNIGhhcyBmaW5pc2hlZCBsb2FkaW5nLlxuICAgICAgICAvLyBPbmx5IHRoZW4gd2lsbCB3ZSByZXR1cm4gb3VyIHByb21pc2VcblxuICAgICAgICAvLyBJZiB0aGV5IHBhc3NlZCBpbiBhIG1vZHVsZUNvbmZpZyBvYmplY3QsIHVzZSB0aGF0XG4gICAgICAgIC8vIE90aGVyd2lzZSwgaW5pdGlhbGl6ZSBNb2R1bGUgdG8gdGhlIGVtcHR5IG9iamVjdFxuICAgICAgICB2YXIgTW9kdWxlID0gdHlwZW9mIG1vZHVsZUNvbmZpZyAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGVDb25maWcgOiB7fTtcblxuICAgICAgICAvLyBFTUNDIG9ubHkgYWxsb3dzIGZvciBhIHNpbmdsZSBvbkFib3J0IGZ1bmN0aW9uIChub3QgYW4gYXJyYXkgb2YgZnVuY3Rpb25zKVxuICAgICAgICAvLyBTbyBpZiB0aGUgdXNlciBkZWZpbmVkIHRoZWlyIG93biBvbkFib3J0IGZ1bmN0aW9uLCB3ZSByZW1lbWJlciBpdCBhbmQgY2FsbCBpdFxuICAgICAgICB2YXIgb3JpZ2luYWxPbkFib3J0RnVuY3Rpb24gPSBNb2R1bGVbJ29uQWJvcnQnXTtcbiAgICAgICAgTW9kdWxlWydvbkFib3J0J10gPSBmdW5jdGlvbiAoZXJyb3JUaGF0Q2F1c2VkQWJvcnQpIHtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXJyb3JUaGF0Q2F1c2VkQWJvcnQpKTtcbiAgICAgICAgICAgIGlmIChvcmlnaW5hbE9uQWJvcnRGdW5jdGlvbil7XG4gICAgICAgICAgICAgIG9yaWdpbmFsT25BYm9ydEZ1bmN0aW9uKGVycm9yVGhhdENhdXNlZEFib3J0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBNb2R1bGVbJ3Bvc3RSdW4nXSA9IE1vZHVsZVsncG9zdFJ1biddIHx8IFtdO1xuICAgICAgICBNb2R1bGVbJ3Bvc3RSdW4nXS5wdXNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFdoZW4gRW1zY3JpcHRlZCBjYWxscyBwb3N0UnVuLCB0aGlzIHByb21pc2UgcmVzb2x2ZXMgd2l0aCB0aGUgYnVpbHQgTW9kdWxlXG4gICAgICAgICAgICByZXNvbHZlTW9kdWxlKE1vZHVsZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFRoZXJlIGlzIGEgc2VjdGlvbiBvZiBjb2RlIGluIHRoZSBlbWNjLWdlbmVyYXRlZCBjb2RlIGJlbG93IHRoYXQgbG9va3MgbGlrZSB0aGlzOlxuICAgICAgICAvLyAoTm90ZSB0aGF0IHRoaXMgaXMgbG93ZXJjYXNlIGBtb2R1bGVgKVxuICAgICAgICAvLyBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gICAgIG1vZHVsZVsnZXhwb3J0cyddID0gTW9kdWxlO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIFdoZW4gdGhhdCBydW5zLCBpdCdzIGdvaW5nIHRvIG92ZXJ3cml0ZSBvdXIgb3duIG1vZHVsYXJpemF0aW9uIGV4cG9ydCBlZmZvcnRzIGluIHNoZWxsLXBvc3QuanMhXG4gICAgICAgIC8vIFRoZSBvbmx5IHdheSB0byB0ZWxsIGVtY2Mgbm90IHRvIGVtaXQgaXQgaXMgdG8gcGFzcyB0aGUgTU9EVUxBUklaRT0xIG9yIE1PRFVMQVJJWkVfSU5TVEFOQ0U9MSBmbGFncyxcbiAgICAgICAgLy8gYnV0IHRoYXQgY2FycmllcyB3aXRoIGl0IGFkZGl0aW9uYWwgdW5uZWNlc3NhcnkgYmFnZ2FnZS9idWdzIHdlIGRvbid0IHdhbnQgZWl0aGVyLlxuICAgICAgICAvLyBTbywgd2UgaGF2ZSB0aHJlZSBvcHRpb25zOlxuICAgICAgICAvLyAxKSBXZSB1bmRlZmluZSBgbW9kdWxlYFxuICAgICAgICAvLyAyKSBXZSByZW1lbWJlciB3aGF0IGBtb2R1bGVbJ2V4cG9ydHMnXWAgd2FzIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhpcyBmdW5jdGlvbiBhbmQgd2UgcmVzdG9yZSBpdCBsYXRlclxuICAgICAgICAvLyAzKSBXZSB3cml0ZSBhIHNjcmlwdCB0byByZW1vdmUgdGhvc2UgbGluZXMgb2YgY29kZSBhcyBwYXJ0IG9mIHRoZSBNYWtlIHByb2Nlc3MuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIFNpbmNlIHRob3NlIGFyZSB0aGUgb25seSBsaW5lcyBvZiBjb2RlIHRoYXQgY2FyZSBhYm91dCBtb2R1bGUsIHdlIHdpbGwgdW5kZWZpbmUgaXQuIEl0J3MgdGhlIG1vc3Qgc3RyYWlnaHRmb3J3YXJkXG4gICAgICAgIC8vIG9mIHRoZSBvcHRpb25zLCBhbmQgaGFzIHRoZSBzaWRlIGVmZmVjdCBvZiByZWR1Y2luZyBlbWNjJ3MgZWZmb3J0cyB0byBtb2RpZnkgdGhlIG1vZHVsZSBpZiBpdHMgb3V0cHV0IHdlcmUgdG8gY2hhbmdlIGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFRoYXQncyBhIG5pY2Ugc2lkZSBlZmZlY3Qgc2luY2Ugd2UncmUgaGFuZGxpbmcgdGhlIG1vZHVsYXJpemF0aW9uIGVmZm9ydHMgb3Vyc2VsdmVzXG4gICAgICAgIG1vZHVsZSA9IHVuZGVmaW5lZDtcblxuICAgICAgICAvLyBUaGUgZW1jYy1nZW5lcmF0ZWQgY29kZSBhbmQgc2hlbGwtcG9zdC5qcyBjb2RlIGdvZXMgYmVsb3csXG4gICAgICAgIC8vIG1lYW5pbmcgdGhhdCBhbGwgb2YgaXQgcnVucyBpbnNpZGUgb2YgdGhpcyBwcm9taXNlLiBJZiBhbnl0aGluZyB0aHJvd3MgYW4gZXhjZXB0aW9uLCBvdXIgcHJvbWlzZSB3aWxsIGFib3J0XG52YXIgZjtmfHw9dHlwZW9mIE1vZHVsZSAhPSAndW5kZWZpbmVkJyA/IE1vZHVsZSA6IHt9O3ZhciBhYT1cIm9iamVjdFwiPT10eXBlb2Ygd2luZG93LGJhPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBXb3JrZXJHbG9iYWxTY29wZSxjYT1cIm9iamVjdFwiPT10eXBlb2YgcHJvY2VzcyYmXCJvYmplY3RcIj09dHlwZW9mIHByb2Nlc3MudmVyc2lvbnMmJlwic3RyaW5nXCI9PXR5cGVvZiBwcm9jZXNzLnZlcnNpb25zLm5vZGUmJlwicmVuZGVyZXJcIiE9cHJvY2Vzcy50eXBlO1widXNlIHN0cmljdFwiO1xuZi5vblJ1bnRpbWVJbml0aWFsaXplZD1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoZyxsKXtzd2l0Y2godHlwZW9mIGwpe2Nhc2UgXCJib29sZWFuXCI6ZGMoZyxsPzE6MCk7YnJlYWs7Y2FzZSBcIm51bWJlclwiOmVjKGcsbCk7YnJlYWs7Y2FzZSBcInN0cmluZ1wiOmZjKGcsbCwtMSwtMSk7YnJlYWs7Y2FzZSBcIm9iamVjdFwiOmlmKG51bGw9PT1sKWxiKGcpO2Vsc2UgaWYobnVsbCE9bC5sZW5ndGgpe3ZhciBuPWRhKGwsZWEpO2djKGcsbixsLmxlbmd0aCwtMSk7ZmEobil9ZWxzZSB2YShnLFwiV3JvbmcgQVBJIHVzZSA6IHRyaWVkIHRvIHJldHVybiBhIHZhbHVlIG9mIGFuIHVua25vd24gdHlwZSAoXCIrbCtcIikuXCIsLTEpO2JyZWFrO2RlZmF1bHQ6bGIoZyl9fWZ1bmN0aW9uIGIoZyxsKXtmb3IodmFyIG49W10scj0wO3I8ZztyKz0xKXt2YXIgdD1tKGwrNCpyLFwiaTMyXCIpLHk9aGModCk7aWYoMT09PXl8fDI9PT15KXQ9aWModCk7ZWxzZSBpZigzPT09eSl0PWpjKHQpO2Vsc2UgaWYoND09PXkpe3k9dDtcbnQ9a2MoeSk7eT1sYyh5KTtmb3IodmFyIEw9bmV3IFVpbnQ4QXJyYXkodCksSj0wO0o8dDtKKz0xKUxbSl09cFt5K0pdO3Q9TH1lbHNlIHQ9bnVsbDtuLnB1c2godCl9cmV0dXJuIG59ZnVuY3Rpb24gYyhnLGwpe3RoaXMuUWE9Zzt0aGlzLmRiPWw7dGhpcy5PYT0xO3RoaXMubGI9W119ZnVuY3Rpb24gZChnLGwpe3RoaXMuZGI9bDtsPWhhKGcpKzE7dGhpcy5lYj1pYShsKTtpZihudWxsPT09dGhpcy5lYil0aHJvdyBFcnJvcihcIlVuYWJsZSB0byBhbGxvY2F0ZSBtZW1vcnkgZm9yIHRoZSBTUUwgc3RyaW5nXCIpO3UoZyx4LHRoaXMuZWIsbCk7dGhpcy5rYj10aGlzLmViO3RoaXMuWmE9dGhpcy5wYj1udWxsfWZ1bmN0aW9uIGUoZyl7dGhpcy5maWxlbmFtZT1cImRiZmlsZV9cIisoNDI5NDk2NzI5NSpNYXRoLnJhbmRvbSgpPj4+MCk7aWYobnVsbCE9Zyl7dmFyIGw9dGhpcy5maWxlbmFtZSxuPVwiL1wiLHI9bDtuJiYobj1cInN0cmluZ1wiPT10eXBlb2Ygbj9uOmphKG4pLHI9bD9rYShuK1wiL1wiK2wpOlxubik7bD1sYSghMCwhMCk7cj1tYShyLGwpO2lmKGcpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBnKXtuPUFycmF5KGcubGVuZ3RoKTtmb3IodmFyIHQ9MCx5PWcubGVuZ3RoO3Q8eTsrK3Qpblt0XT1nLmNoYXJDb2RlQXQodCk7Zz1ufW5hKHIsbHwxNDYpO249b2Eociw1NzcpO3BhKG4sZywwLGcubGVuZ3RoLDApO3FhKG4pO25hKHIsbCl9fXRoaXMuaGFuZGxlRXJyb3IocSh0aGlzLmZpbGVuYW1lLGgpKTt0aGlzLmRiPW0oaCxcImkzMlwiKTtvYih0aGlzLmRiKTt0aGlzLmZiPXt9O3RoaXMuU2E9e319dmFyIGg9eig0KSxrPWYuY3dyYXAscT1rKFwic3FsaXRlM19vcGVuXCIsXCJudW1iZXJcIixbXCJzdHJpbmdcIixcIm51bWJlclwiXSksdz1rKFwic3FsaXRlM19jbG9zZV92MlwiLFwibnVtYmVyXCIsW1wibnVtYmVyXCJdKSx2PWsoXCJzcWxpdGUzX2V4ZWNcIixcIm51bWJlclwiLFtcIm51bWJlclwiLFwic3RyaW5nXCIsXCJudW1iZXJcIixcIm51bWJlclwiLFwibnVtYmVyXCJdKSxDPWsoXCJzcWxpdGUzX2NoYW5nZXNcIixcIm51bWJlclwiLFtcIm51bWJlclwiXSksXG5HPWsoXCJzcWxpdGUzX3ByZXBhcmVfdjJcIixcIm51bWJlclwiLFtcIm51bWJlclwiLFwic3RyaW5nXCIsXCJudW1iZXJcIixcIm51bWJlclwiLFwibnVtYmVyXCJdKSxwYj1rKFwic3FsaXRlM19zcWxcIixcInN0cmluZ1wiLFtcIm51bWJlclwiXSksbmM9ayhcInNxbGl0ZTNfbm9ybWFsaXplZF9zcWxcIixcInN0cmluZ1wiLFtcIm51bWJlclwiXSkscWI9ayhcInNxbGl0ZTNfcHJlcGFyZV92MlwiLFwibnVtYmVyXCIsW1wibnVtYmVyXCIsXCJudW1iZXJcIixcIm51bWJlclwiLFwibnVtYmVyXCIsXCJudW1iZXJcIl0pLG9jPWsoXCJzcWxpdGUzX2JpbmRfdGV4dFwiLFwibnVtYmVyXCIsW1wibnVtYmVyXCIsXCJudW1iZXJcIixcIm51bWJlclwiLFwibnVtYmVyXCIsXCJudW1iZXJcIl0pLHJiPWsoXCJzcWxpdGUzX2JpbmRfYmxvYlwiLFwibnVtYmVyXCIsW1wibnVtYmVyXCIsXCJudW1iZXJcIixcIm51bWJlclwiLFwibnVtYmVyXCIsXCJudW1iZXJcIl0pLHBjPWsoXCJzcWxpdGUzX2JpbmRfZG91YmxlXCIsXCJudW1iZXJcIixbXCJudW1iZXJcIixcIm51bWJlclwiLFwibnVtYmVyXCJdKSxxYz1rKFwic3FsaXRlM19iaW5kX2ludFwiLFxuXCJudW1iZXJcIixbXCJudW1iZXJcIixcIm51bWJlclwiLFwibnVtYmVyXCJdKSxyYz1rKFwic3FsaXRlM19iaW5kX3BhcmFtZXRlcl9pbmRleFwiLFwibnVtYmVyXCIsW1wibnVtYmVyXCIsXCJzdHJpbmdcIl0pLHNjPWsoXCJzcWxpdGUzX3N0ZXBcIixcIm51bWJlclwiLFtcIm51bWJlclwiXSksdGM9ayhcInNxbGl0ZTNfZXJybXNnXCIsXCJzdHJpbmdcIixbXCJudW1iZXJcIl0pLHVjPWsoXCJzcWxpdGUzX2NvbHVtbl9jb3VudFwiLFwibnVtYmVyXCIsW1wibnVtYmVyXCJdKSx2Yz1rKFwic3FsaXRlM19kYXRhX2NvdW50XCIsXCJudW1iZXJcIixbXCJudW1iZXJcIl0pLHdjPWsoXCJzcWxpdGUzX2NvbHVtbl9kb3VibGVcIixcIm51bWJlclwiLFtcIm51bWJlclwiLFwibnVtYmVyXCJdKSxzYj1rKFwic3FsaXRlM19jb2x1bW5fdGV4dFwiLFwic3RyaW5nXCIsW1wibnVtYmVyXCIsXCJudW1iZXJcIl0pLHhjPWsoXCJzcWxpdGUzX2NvbHVtbl9ibG9iXCIsXCJudW1iZXJcIixbXCJudW1iZXJcIixcIm51bWJlclwiXSkseWM9ayhcInNxbGl0ZTNfY29sdW1uX2J5dGVzXCIsXCJudW1iZXJcIixbXCJudW1iZXJcIixcblwibnVtYmVyXCJdKSx6Yz1rKFwic3FsaXRlM19jb2x1bW5fdHlwZVwiLFwibnVtYmVyXCIsW1wibnVtYmVyXCIsXCJudW1iZXJcIl0pLEFjPWsoXCJzcWxpdGUzX2NvbHVtbl9uYW1lXCIsXCJzdHJpbmdcIixbXCJudW1iZXJcIixcIm51bWJlclwiXSksQmM9ayhcInNxbGl0ZTNfcmVzZXRcIixcIm51bWJlclwiLFtcIm51bWJlclwiXSksQ2M9ayhcInNxbGl0ZTNfY2xlYXJfYmluZGluZ3NcIixcIm51bWJlclwiLFtcIm51bWJlclwiXSksRGM9ayhcInNxbGl0ZTNfZmluYWxpemVcIixcIm51bWJlclwiLFtcIm51bWJlclwiXSksdGI9ayhcInNxbGl0ZTNfY3JlYXRlX2Z1bmN0aW9uX3YyXCIsXCJudW1iZXJcIixcIm51bWJlciBzdHJpbmcgbnVtYmVyIG51bWJlciBudW1iZXIgbnVtYmVyIG51bWJlciBudW1iZXIgbnVtYmVyXCIuc3BsaXQoXCIgXCIpKSxoYz1rKFwic3FsaXRlM192YWx1ZV90eXBlXCIsXCJudW1iZXJcIixbXCJudW1iZXJcIl0pLGtjPWsoXCJzcWxpdGUzX3ZhbHVlX2J5dGVzXCIsXCJudW1iZXJcIixbXCJudW1iZXJcIl0pLGpjPWsoXCJzcWxpdGUzX3ZhbHVlX3RleHRcIixcblwic3RyaW5nXCIsW1wibnVtYmVyXCJdKSxsYz1rKFwic3FsaXRlM192YWx1ZV9ibG9iXCIsXCJudW1iZXJcIixbXCJudW1iZXJcIl0pLGljPWsoXCJzcWxpdGUzX3ZhbHVlX2RvdWJsZVwiLFwibnVtYmVyXCIsW1wibnVtYmVyXCJdKSxlYz1rKFwic3FsaXRlM19yZXN1bHRfZG91YmxlXCIsXCJcIixbXCJudW1iZXJcIixcIm51bWJlclwiXSksbGI9ayhcInNxbGl0ZTNfcmVzdWx0X251bGxcIixcIlwiLFtcIm51bWJlclwiXSksZmM9ayhcInNxbGl0ZTNfcmVzdWx0X3RleHRcIixcIlwiLFtcIm51bWJlclwiLFwic3RyaW5nXCIsXCJudW1iZXJcIixcIm51bWJlclwiXSksZ2M9ayhcInNxbGl0ZTNfcmVzdWx0X2Jsb2JcIixcIlwiLFtcIm51bWJlclwiLFwibnVtYmVyXCIsXCJudW1iZXJcIixcIm51bWJlclwiXSksZGM9ayhcInNxbGl0ZTNfcmVzdWx0X2ludFwiLFwiXCIsW1wibnVtYmVyXCIsXCJudW1iZXJcIl0pLHZhPWsoXCJzcWxpdGUzX3Jlc3VsdF9lcnJvclwiLFwiXCIsW1wibnVtYmVyXCIsXCJzdHJpbmdcIixcIm51bWJlclwiXSksdWI9ayhcInNxbGl0ZTNfYWdncmVnYXRlX2NvbnRleHRcIixcIm51bWJlclwiLFxuW1wibnVtYmVyXCIsXCJudW1iZXJcIl0pLG9iPWsoXCJSZWdpc3RlckV4dGVuc2lvbkZ1bmN0aW9uc1wiLFwibnVtYmVyXCIsW1wibnVtYmVyXCJdKSx2Yj1rKFwic3FsaXRlM191cGRhdGVfaG9va1wiLFwibnVtYmVyXCIsW1wibnVtYmVyXCIsXCJudW1iZXJcIixcIm51bWJlclwiXSk7Yy5wcm90b3R5cGUuYmluZD1mdW5jdGlvbihnKXtpZighdGhpcy5RYSl0aHJvd1wiU3RhdGVtZW50IGNsb3NlZFwiO3RoaXMucmVzZXQoKTtyZXR1cm4gQXJyYXkuaXNBcnJheShnKT90aGlzLkNiKGcpOm51bGwhPWcmJlwib2JqZWN0XCI9PT10eXBlb2YgZz90aGlzLkRiKGcpOiEwfTtjLnByb3RvdHlwZS5zdGVwPWZ1bmN0aW9uKCl7aWYoIXRoaXMuUWEpdGhyb3dcIlN0YXRlbWVudCBjbG9zZWRcIjt0aGlzLk9hPTE7dmFyIGc9c2ModGhpcy5RYSk7c3dpdGNoKGcpe2Nhc2UgMTAwOnJldHVybiEwO2Nhc2UgMTAxOnJldHVybiExO2RlZmF1bHQ6dGhyb3cgdGhpcy5kYi5oYW5kbGVFcnJvcihnKTt9fTtjLnByb3RvdHlwZS53Yj1mdW5jdGlvbihnKXtudWxsPT1cbmcmJihnPXRoaXMuT2EsdGhpcy5PYSs9MSk7cmV0dXJuIHdjKHRoaXMuUWEsZyl9O2MucHJvdG90eXBlLkdiPWZ1bmN0aW9uKGcpe251bGw9PWcmJihnPXRoaXMuT2EsdGhpcy5PYSs9MSk7Zz1zYih0aGlzLlFhLGcpO2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBCaWdJbnQpdGhyb3cgRXJyb3IoXCJCaWdJbnQgaXMgbm90IHN1cHBvcnRlZFwiKTtyZXR1cm4gQmlnSW50KGcpfTtjLnByb3RvdHlwZS5IYj1mdW5jdGlvbihnKXtudWxsPT1nJiYoZz10aGlzLk9hLHRoaXMuT2ErPTEpO3JldHVybiBzYih0aGlzLlFhLGcpfTtjLnByb3RvdHlwZS5nZXRCbG9iPWZ1bmN0aW9uKGcpe251bGw9PWcmJihnPXRoaXMuT2EsdGhpcy5PYSs9MSk7dmFyIGw9eWModGhpcy5RYSxnKTtnPXhjKHRoaXMuUWEsZyk7Zm9yKHZhciBuPW5ldyBVaW50OEFycmF5KGwpLHI9MDtyPGw7cis9MSluW3JdPXBbZytyXTtyZXR1cm4gbn07Yy5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKGcsbCl7bD1sfHx7fTtudWxsIT1nJiZcbnRoaXMuYmluZChnKSYmdGhpcy5zdGVwKCk7Zz1bXTtmb3IodmFyIG49dmModGhpcy5RYSkscj0wO3I8bjtyKz0xKXN3aXRjaCh6Yyh0aGlzLlFhLHIpKXtjYXNlIDE6dmFyIHQ9bC51c2VCaWdJbnQ/dGhpcy5HYihyKTp0aGlzLndiKHIpO2cucHVzaCh0KTticmVhaztjYXNlIDI6Zy5wdXNoKHRoaXMud2IocikpO2JyZWFrO2Nhc2UgMzpnLnB1c2godGhpcy5IYihyKSk7YnJlYWs7Y2FzZSA0OmcucHVzaCh0aGlzLmdldEJsb2IocikpO2JyZWFrO2RlZmF1bHQ6Zy5wdXNoKG51bGwpfXJldHVybiBnfTtjLnByb3RvdHlwZS5nZXRDb2x1bW5OYW1lcz1mdW5jdGlvbigpe2Zvcih2YXIgZz1bXSxsPXVjKHRoaXMuUWEpLG49MDtuPGw7bis9MSlnLnB1c2goQWModGhpcy5RYSxuKSk7cmV0dXJuIGd9O2MucHJvdG90eXBlLmdldEFzT2JqZWN0PWZ1bmN0aW9uKGcsbCl7Zz10aGlzLmdldChnLGwpO2w9dGhpcy5nZXRDb2x1bW5OYW1lcygpO2Zvcih2YXIgbj17fSxyPTA7cjxsLmxlbmd0aDtyKz1cbjEpbltsW3JdXT1nW3JdO3JldHVybiBufTtjLnByb3RvdHlwZS5nZXRTUUw9ZnVuY3Rpb24oKXtyZXR1cm4gcGIodGhpcy5RYSl9O2MucHJvdG90eXBlLmdldE5vcm1hbGl6ZWRTUUw9ZnVuY3Rpb24oKXtyZXR1cm4gbmModGhpcy5RYSl9O2MucHJvdG90eXBlLnJ1bj1mdW5jdGlvbihnKXtudWxsIT1nJiZ0aGlzLmJpbmQoZyk7dGhpcy5zdGVwKCk7cmV0dXJuIHRoaXMucmVzZXQoKX07Yy5wcm90b3R5cGUuc2I9ZnVuY3Rpb24oZyxsKXtudWxsPT1sJiYobD10aGlzLk9hLHRoaXMuT2ErPTEpO2c9cmEoZyk7dmFyIG49ZGEoZyxlYSk7dGhpcy5sYi5wdXNoKG4pO3RoaXMuZGIuaGFuZGxlRXJyb3Iob2ModGhpcy5RYSxsLG4sZy5sZW5ndGgtMSwwKSl9O2MucHJvdG90eXBlLkJiPWZ1bmN0aW9uKGcsbCl7bnVsbD09bCYmKGw9dGhpcy5PYSx0aGlzLk9hKz0xKTt2YXIgbj1kYShnLGVhKTt0aGlzLmxiLnB1c2gobik7dGhpcy5kYi5oYW5kbGVFcnJvcihyYih0aGlzLlFhLGwsbixnLmxlbmd0aCxcbjApKX07Yy5wcm90b3R5cGUucmI9ZnVuY3Rpb24oZyxsKXtudWxsPT1sJiYobD10aGlzLk9hLHRoaXMuT2ErPTEpO3RoaXMuZGIuaGFuZGxlRXJyb3IoKGc9PT0oZ3wwKT9xYzpwYykodGhpcy5RYSxsLGcpKX07Yy5wcm90b3R5cGUuRWI9ZnVuY3Rpb24oZyl7bnVsbD09ZyYmKGc9dGhpcy5PYSx0aGlzLk9hKz0xKTtyYih0aGlzLlFhLGcsMCwwLDApfTtjLnByb3RvdHlwZS50Yj1mdW5jdGlvbihnLGwpe251bGw9PWwmJihsPXRoaXMuT2EsdGhpcy5PYSs9MSk7c3dpdGNoKHR5cGVvZiBnKXtjYXNlIFwic3RyaW5nXCI6dGhpcy5zYihnLGwpO3JldHVybjtjYXNlIFwibnVtYmVyXCI6dGhpcy5yYihnLGwpO3JldHVybjtjYXNlIFwiYmlnaW50XCI6dGhpcy5zYihnLnRvU3RyaW5nKCksbCk7cmV0dXJuO2Nhc2UgXCJib29sZWFuXCI6dGhpcy5yYihnKzAsbCk7cmV0dXJuO2Nhc2UgXCJvYmplY3RcIjppZihudWxsPT09Zyl7dGhpcy5FYihsKTtyZXR1cm59aWYobnVsbCE9Zy5sZW5ndGgpe3RoaXMuQmIoZyxcbmwpO3JldHVybn19dGhyb3dcIldyb25nIEFQSSB1c2UgOiB0cmllZCB0byBiaW5kIGEgdmFsdWUgb2YgYW4gdW5rbm93biB0eXBlIChcIitnK1wiKS5cIjt9O2MucHJvdG90eXBlLkRiPWZ1bmN0aW9uKGcpe3ZhciBsPXRoaXM7T2JqZWN0LmtleXMoZykuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgcj1yYyhsLlFhLG4pOzAhPT1yJiZsLnRiKGdbbl0scil9KTtyZXR1cm4hMH07Yy5wcm90b3R5cGUuQ2I9ZnVuY3Rpb24oZyl7Zm9yKHZhciBsPTA7bDxnLmxlbmd0aDtsKz0xKXRoaXMudGIoZ1tsXSxsKzEpO3JldHVybiEwfTtjLnByb3RvdHlwZS5yZXNldD1mdW5jdGlvbigpe3RoaXMuZnJlZW1lbSgpO3JldHVybiAwPT09Q2ModGhpcy5RYSkmJjA9PT1CYyh0aGlzLlFhKX07Yy5wcm90b3R5cGUuZnJlZW1lbT1mdW5jdGlvbigpe2Zvcih2YXIgZzt2b2lkIDAhPT0oZz10aGlzLmxiLnBvcCgpKTspZmEoZyl9O2MucHJvdG90eXBlLmZyZWU9ZnVuY3Rpb24oKXt0aGlzLmZyZWVtZW0oKTt2YXIgZz1cbjA9PT1EYyh0aGlzLlFhKTtkZWxldGUgdGhpcy5kYi5mYlt0aGlzLlFhXTt0aGlzLlFhPTA7cmV0dXJuIGd9O2QucHJvdG90eXBlLm5leHQ9ZnVuY3Rpb24oKXtpZihudWxsPT09dGhpcy5lYilyZXR1cm57ZG9uZTohMH07bnVsbCE9PXRoaXMuWmEmJih0aGlzLlphLmZyZWUoKSx0aGlzLlphPW51bGwpO2lmKCF0aGlzLmRiLmRiKXRocm93IHRoaXMubWIoKSxFcnJvcihcIkRhdGFiYXNlIGNsb3NlZFwiKTt2YXIgZz1zYSgpLGw9eig0KTt0YShoKTt0YShsKTt0cnl7dGhpcy5kYi5oYW5kbGVFcnJvcihxYih0aGlzLmRiLmRiLHRoaXMua2IsLTEsaCxsKSk7dGhpcy5rYj1tKGwsXCJpMzJcIik7dmFyIG49bShoLFwiaTMyXCIpO2lmKDA9PT1uKXJldHVybiB0aGlzLm1iKCkse2RvbmU6ITB9O3RoaXMuWmE9bmV3IGMobix0aGlzLmRiKTt0aGlzLmRiLmZiW25dPXRoaXMuWmE7cmV0dXJue3ZhbHVlOnRoaXMuWmEsZG9uZTohMX19Y2F0Y2gocil7dGhyb3cgdGhpcy5wYj11YSh0aGlzLmtiKSx0aGlzLm1iKCksXG5yO31maW5hbGx5e3dhKGcpfX07ZC5wcm90b3R5cGUubWI9ZnVuY3Rpb24oKXtmYSh0aGlzLmViKTt0aGlzLmViPW51bGx9O2QucHJvdG90eXBlLmdldFJlbWFpbmluZ1NRTD1mdW5jdGlvbigpe3JldHVybiBudWxsIT09dGhpcy5wYj90aGlzLnBiOnVhKHRoaXMua2IpfTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT09dHlwZW9mIFN5bWJvbC5pdGVyYXRvciYmKGQucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30pO2UucHJvdG90eXBlLnJ1bj1mdW5jdGlvbihnLGwpe2lmKCF0aGlzLmRiKXRocm93XCJEYXRhYmFzZSBjbG9zZWRcIjtpZihsKXtnPXRoaXMucHJlcGFyZShnLGwpO3RyeXtnLnN0ZXAoKX1maW5hbGx5e2cuZnJlZSgpfX1lbHNlIHRoaXMuaGFuZGxlRXJyb3Iodih0aGlzLmRiLGcsMCwwLGgpKTtyZXR1cm4gdGhpc307ZS5wcm90b3R5cGUuZXhlYz1mdW5jdGlvbihnLGwsbil7aWYoIXRoaXMuZGIpdGhyb3dcIkRhdGFiYXNlIGNsb3NlZFwiO1xudmFyIHI9c2EoKSx0PW51bGw7dHJ5e3ZhciB5PXhhKGcpLEw9eig0KTtmb3IoZz1bXTswIT09bSh5LFwiaThcIik7KXt0YShoKTt0YShMKTt0aGlzLmhhbmRsZUVycm9yKHFiKHRoaXMuZGIseSwtMSxoLEwpKTt2YXIgSj1tKGgsXCJpMzJcIik7eT1tKEwsXCJpMzJcIik7aWYoMCE9PUope3ZhciBJPW51bGw7dD1uZXcgYyhKLHRoaXMpO2ZvcihudWxsIT1sJiZ0LmJpbmQobCk7dC5zdGVwKCk7KW51bGw9PT1JJiYoST17Y29sdW1uczp0LmdldENvbHVtbk5hbWVzKCksdmFsdWVzOltdfSxnLnB1c2goSSkpLEkudmFsdWVzLnB1c2godC5nZXQobnVsbCxuKSk7dC5mcmVlKCl9fXJldHVybiBnfWNhdGNoKE0pe3Rocm93IHQmJnQuZnJlZSgpLE07fWZpbmFsbHl7d2Eocil9fTtlLnByb3RvdHlwZS5lYWNoPWZ1bmN0aW9uKGcsbCxuLHIsdCl7XCJmdW5jdGlvblwiPT09dHlwZW9mIGwmJihyPW4sbj1sLGw9dm9pZCAwKTtnPXRoaXMucHJlcGFyZShnLGwpO3RyeXtmb3IoO2cuc3RlcCgpOyluKGcuZ2V0QXNPYmplY3QobnVsbCxcbnQpKX1maW5hbGx5e2cuZnJlZSgpfWlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiByKXJldHVybiByKCl9O2UucHJvdG90eXBlLnByZXBhcmU9ZnVuY3Rpb24oZyxsKXt0YShoKTt0aGlzLmhhbmRsZUVycm9yKEcodGhpcy5kYixnLC0xLGgsMCkpO2c9bShoLFwiaTMyXCIpO2lmKDA9PT1nKXRocm93XCJOb3RoaW5nIHRvIHByZXBhcmVcIjt2YXIgbj1uZXcgYyhnLHRoaXMpO251bGwhPWwmJm4uYmluZChsKTtyZXR1cm4gdGhpcy5mYltnXT1ufTtlLnByb3RvdHlwZS5pdGVyYXRlU3RhdGVtZW50cz1mdW5jdGlvbihnKXtyZXR1cm4gbmV3IGQoZyx0aGlzKX07ZS5wcm90b3R5cGVbXCJleHBvcnRcIl09ZnVuY3Rpb24oKXtPYmplY3QudmFsdWVzKHRoaXMuZmIpLmZvckVhY2goZnVuY3Rpb24obCl7bC5mcmVlKCl9KTtPYmplY3QudmFsdWVzKHRoaXMuU2EpLmZvckVhY2goQSk7dGhpcy5TYT17fTt0aGlzLmhhbmRsZUVycm9yKHcodGhpcy5kYikpO3ZhciBnPXlhKHRoaXMuZmlsZW5hbWUpO3RoaXMuaGFuZGxlRXJyb3IocSh0aGlzLmZpbGVuYW1lLFxuaCkpO3RoaXMuZGI9bShoLFwiaTMyXCIpO29iKHRoaXMuZGIpO3JldHVybiBnfTtlLnByb3RvdHlwZS5jbG9zZT1mdW5jdGlvbigpe251bGwhPT10aGlzLmRiJiYoT2JqZWN0LnZhbHVlcyh0aGlzLmZiKS5mb3JFYWNoKGZ1bmN0aW9uKGcpe2cuZnJlZSgpfSksT2JqZWN0LnZhbHVlcyh0aGlzLlNhKS5mb3JFYWNoKEEpLHRoaXMuU2E9e30sdGhpcy5ZYSYmKEEodGhpcy5ZYSksdGhpcy5ZYT12b2lkIDApLHRoaXMuaGFuZGxlRXJyb3Iodyh0aGlzLmRiKSksemEoXCIvXCIrdGhpcy5maWxlbmFtZSksdGhpcy5kYj1udWxsKX07ZS5wcm90b3R5cGUuaGFuZGxlRXJyb3I9ZnVuY3Rpb24oZyl7aWYoMD09PWcpcmV0dXJuIG51bGw7Zz10Yyh0aGlzLmRiKTt0aHJvdyBFcnJvcihnKTt9O2UucHJvdG90eXBlLmdldFJvd3NNb2RpZmllZD1mdW5jdGlvbigpe3JldHVybiBDKHRoaXMuZGIpfTtlLnByb3RvdHlwZS5jcmVhdGVfZnVuY3Rpb249ZnVuY3Rpb24oZyxsKXtPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5TYSxcbmcpJiYoQSh0aGlzLlNhW2ddKSxkZWxldGUgdGhpcy5TYVtnXSk7dmFyIG49QWEoZnVuY3Rpb24ocix0LHkpe3Q9Yih0LHkpO3RyeXt2YXIgTD1sLmFwcGx5KG51bGwsdCl9Y2F0Y2goSil7dmEocixKLC0xKTtyZXR1cm59YShyLEwpfSxcInZpaWlcIik7dGhpcy5TYVtnXT1uO3RoaXMuaGFuZGxlRXJyb3IodGIodGhpcy5kYixnLGwubGVuZ3RoLDEsMCxuLDAsMCwwKSk7cmV0dXJuIHRoaXN9O2UucHJvdG90eXBlLmNyZWF0ZV9hZ2dyZWdhdGU9ZnVuY3Rpb24oZyxsKXt2YXIgbj1sLmluaXR8fGZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9LHI9bC5maW5hbGl6ZXx8ZnVuY3Rpb24oSSl7cmV0dXJuIEl9LHQ9bC5zdGVwO2lmKCF0KXRocm93XCJBbiBhZ2dyZWdhdGUgZnVuY3Rpb24gbXVzdCBoYXZlIGEgc3RlcCBmdW5jdGlvbiBpbiBcIitnO3ZhciB5PXt9O09iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuU2EsZykmJihBKHRoaXMuU2FbZ10pLGRlbGV0ZSB0aGlzLlNhW2ddKTtsPWcrXCJfX2ZpbmFsaXplXCI7XG5PYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLlNhLGwpJiYoQSh0aGlzLlNhW2xdKSxkZWxldGUgdGhpcy5TYVtsXSk7dmFyIEw9QWEoZnVuY3Rpb24oSSxNLFJhKXt2YXIgWD11YihJLDEpO09iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHksWCl8fCh5W1hdPW4oKSk7TT1iKE0sUmEpO009W3lbWF1dLmNvbmNhdChNKTt0cnl7eVtYXT10LmFwcGx5KG51bGwsTSl9Y2F0Y2goRmMpe2RlbGV0ZSB5W1hdLHZhKEksRmMsLTEpfX0sXCJ2aWlpXCIpLEo9QWEoZnVuY3Rpb24oSSl7dmFyIE09dWIoSSwxKTt0cnl7dmFyIFJhPXIoeVtNXSl9Y2F0Y2goWCl7ZGVsZXRlIHlbTV07dmEoSSxYLC0xKTtyZXR1cm59YShJLFJhKTtkZWxldGUgeVtNXX0sXCJ2aVwiKTt0aGlzLlNhW2ddPUw7dGhpcy5TYVtsXT1KO3RoaXMuaGFuZGxlRXJyb3IodGIodGhpcy5kYixnLHQubGVuZ3RoLTEsMSwwLDAsTCxKLDApKTtyZXR1cm4gdGhpc307ZS5wcm90b3R5cGUudXBkYXRlSG9vaz1mdW5jdGlvbihnKXt0aGlzLllhJiZcbih2Yih0aGlzLmRiLDAsMCksQSh0aGlzLllhKSx0aGlzLllhPXZvaWQgMCk7ZyYmKHRoaXMuWWE9QWEoZnVuY3Rpb24obCxuLHIsdCx5KXtzd2l0Y2gobil7Y2FzZSAxODpsPVwiaW5zZXJ0XCI7YnJlYWs7Y2FzZSAyMzpsPVwidXBkYXRlXCI7YnJlYWs7Y2FzZSA5Omw9XCJkZWxldGVcIjticmVhaztkZWZhdWx0OnRocm93XCJ1bmtub3duIG9wZXJhdGlvbkNvZGUgaW4gdXBkYXRlSG9vayBjYWxsYmFjazogXCIrbjt9cj1yP0IoeCxyKTpcIlwiO3Q9dD9CKHgsdCk6XCJcIjtpZih5Pk51bWJlci5NQVhfU0FGRV9JTlRFR0VSKXRocm93XCJyb3dJZCB0b28gYmlnIHRvIGZpdCBpbnNpZGUgYSBOdW1iZXJcIjtnKGwscix0LE51bWJlcih5KSl9LFwidmlpaWlqXCIpLHZiKHRoaXMuZGIsdGhpcy5ZYSwwKSl9O2YuRGF0YWJhc2U9ZX07dmFyIEJhPXsuLi5mfSxDYT1cIi4vdGhpcy5wcm9ncmFtXCIsRGE9KGEsYik9Pnt0aHJvdyBiO30sRD1cIlwiLEVhLEZhO1xuaWYoY2Epe3ZhciBmcz1yZXF1aXJlKFwiZnNcIik7cmVxdWlyZShcInBhdGhcIik7RD1fX2Rpcm5hbWUrXCIvXCI7RmE9YT0+e2E9R2EoYSk/bmV3IFVSTChhKTphO3JldHVybiBmcy5yZWFkRmlsZVN5bmMoYSl9O0VhPWFzeW5jIGE9PnthPUdhKGEpP25ldyBVUkwoYSk6YTtyZXR1cm4gZnMucmVhZEZpbGVTeW5jKGEsdm9pZCAwKX07IWYudGhpc1Byb2dyYW0mJjE8cHJvY2Vzcy5hcmd2Lmxlbmd0aCYmKENhPXByb2Nlc3MuYXJndlsxXS5yZXBsYWNlKC9cXFxcL2csXCIvXCIpKTtwcm9jZXNzLmFyZ3Yuc2xpY2UoMik7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmKG1vZHVsZS5leHBvcnRzPWYpO0RhPShhLGIpPT57cHJvY2Vzcy5leGl0Q29kZT1hO3Rocm93IGI7fX1lbHNlIGlmKGFhfHxiYSliYT9EPXNlbGYubG9jYXRpb24uaHJlZjpcInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQmJmRvY3VtZW50LmN1cnJlbnRTY3JpcHQmJihEPWRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjKSxEPUQuc3RhcnRzV2l0aChcImJsb2I6XCIpP1xuXCJcIjpELnNsaWNlKDAsRC5yZXBsYWNlKC9bPyNdLiovLFwiXCIpLmxhc3RJbmRleE9mKFwiL1wiKSsxKSxiYSYmKEZhPWE9Pnt2YXIgYj1uZXcgWE1MSHR0cFJlcXVlc3Q7Yi5vcGVuKFwiR0VUXCIsYSwhMSk7Yi5yZXNwb25zZVR5cGU9XCJhcnJheWJ1ZmZlclwiO2Iuc2VuZChudWxsKTtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYi5yZXNwb25zZSl9KSxFYT1hc3luYyBhPT57aWYoR2EoYSkpcmV0dXJuIG5ldyBQcm9taXNlKChjLGQpPT57dmFyIGU9bmV3IFhNTEh0dHBSZXF1ZXN0O2Uub3BlbihcIkdFVFwiLGEsITApO2UucmVzcG9uc2VUeXBlPVwiYXJyYXlidWZmZXJcIjtlLm9ubG9hZD0oKT0+ezIwMD09ZS5zdGF0dXN8fDA9PWUuc3RhdHVzJiZlLnJlc3BvbnNlP2MoZS5yZXNwb25zZSk6ZChlLnN0YXR1cyl9O2Uub25lcnJvcj1kO2Uuc2VuZChudWxsKX0pO3ZhciBiPWF3YWl0IGZldGNoKGEse2NyZWRlbnRpYWxzOlwic2FtZS1vcmlnaW5cIn0pO2lmKGIub2spcmV0dXJuIGIuYXJyYXlCdWZmZXIoKTt0aHJvdyBFcnJvcihiLnN0YXR1cytcblwiIDogXCIrYi51cmwpO307dmFyIEhhPWYucHJpbnR8fGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSksSWE9Zi5wcmludEVycnx8Y29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUpO09iamVjdC5hc3NpZ24oZixCYSk7QmE9bnVsbDtmLnRoaXNQcm9ncmFtJiYoQ2E9Zi50aGlzUHJvZ3JhbSk7dmFyIEphPWYud2FzbUJpbmFyeSxLYSxMYT0hMSxNYSxwLHgsTmEsRSxGLE9hLEgsUGEsR2E9YT0+YS5zdGFydHNXaXRoKFwiZmlsZTovL1wiKTtcbmZ1bmN0aW9uIFFhKCl7dmFyIGE9S2EuYnVmZmVyO2YuSEVBUDg9cD1uZXcgSW50OEFycmF5KGEpO2YuSEVBUDE2PU5hPW5ldyBJbnQxNkFycmF5KGEpO2YuSEVBUFU4PXg9bmV3IFVpbnQ4QXJyYXkoYSk7Zi5IRUFQVTE2PW5ldyBVaW50MTZBcnJheShhKTtmLkhFQVAzMj1FPW5ldyBJbnQzMkFycmF5KGEpO2YuSEVBUFUzMj1GPW5ldyBVaW50MzJBcnJheShhKTtmLkhFQVBGMzI9T2E9bmV3IEZsb2F0MzJBcnJheShhKTtmLkhFQVBGNjQ9UGE9bmV3IEZsb2F0NjRBcnJheShhKTtmLkhFQVA2ND1IPW5ldyBCaWdJbnQ2NEFycmF5KGEpO2YuSEVBUFU2ND1uZXcgQmlnVWludDY0QXJyYXkoYSl9dmFyIEs9MCxTYT1udWxsO2Z1bmN0aW9uIFRhKGEpe2Yub25BYm9ydD8uKGEpO2E9XCJBYm9ydGVkKFwiK2ErXCIpXCI7SWEoYSk7TGE9ITA7dGhyb3cgbmV3IFdlYkFzc2VtYmx5LlJ1bnRpbWVFcnJvcihhK1wiLiBCdWlsZCB3aXRoIC1zQVNTRVJUSU9OUyBmb3IgbW9yZSBpbmZvLlwiKTt9dmFyIFVhO1xuYXN5bmMgZnVuY3Rpb24gVmEoYSl7aWYoIUphKXRyeXt2YXIgYj1hd2FpdCBFYShhKTtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYil9Y2F0Y2h7fWlmKGE9PVVhJiZKYSlhPW5ldyBVaW50OEFycmF5KEphKTtlbHNlIGlmKEZhKWE9RmEoYSk7ZWxzZSB0aHJvd1wiYm90aCBhc3luYyBhbmQgc3luYyBmZXRjaGluZyBvZiB0aGUgd2FzbSBmYWlsZWRcIjtyZXR1cm4gYX1hc3luYyBmdW5jdGlvbiBXYShhLGIpe3RyeXt2YXIgYz1hd2FpdCBWYShhKTtyZXR1cm4gYXdhaXQgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUoYyxiKX1jYXRjaChkKXtJYShgZmFpbGVkIHRvIGFzeW5jaHJvbm91c2x5IHByZXBhcmUgd2FzbTogJHtkfWApLFRhKGQpfX1cbmFzeW5jIGZ1bmN0aW9uIFhhKGEpe3ZhciBiPVVhO2lmKCFKYSYmXCJmdW5jdGlvblwiPT10eXBlb2YgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcmJiFHYShiKSYmIWNhKXRyeXt2YXIgYz1mZXRjaChiLHtjcmVkZW50aWFsczpcInNhbWUtb3JpZ2luXCJ9KTtyZXR1cm4gYXdhaXQgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcoYyxhKX1jYXRjaChkKXtJYShgd2FzbSBzdHJlYW1pbmcgY29tcGlsZSBmYWlsZWQ6ICR7ZH1gKSxJYShcImZhbGxpbmcgYmFjayB0byBBcnJheUJ1ZmZlciBpbnN0YW50aWF0aW9uXCIpfXJldHVybiBXYShiLGEpfWNsYXNzIFlhe25hbWU9XCJFeGl0U3RhdHVzXCI7Y29uc3RydWN0b3IoYSl7dGhpcy5tZXNzYWdlPWBQcm9ncmFtIHRlcm1pbmF0ZWQgd2l0aCBleGl0KCR7YX0pYDt0aGlzLnN0YXR1cz1hfX1cbnZhciBaYT1hPT57Zm9yKDswPGEubGVuZ3RoOylhLnNoaWZ0KCkoZil9LCRhPVtdLGFiPVtdLGJiPSgpPT57dmFyIGE9Zi5wcmVSdW4uc2hpZnQoKTthYi51bnNoaWZ0KGEpfTtmdW5jdGlvbiBtKGEsYj1cImk4XCIpe2IuZW5kc1dpdGgoXCIqXCIpJiYoYj1cIipcIik7c3dpdGNoKGIpe2Nhc2UgXCJpMVwiOnJldHVybiBwW2FdO2Nhc2UgXCJpOFwiOnJldHVybiBwW2FdO2Nhc2UgXCJpMTZcIjpyZXR1cm4gTmFbYT4+MV07Y2FzZSBcImkzMlwiOnJldHVybiBFW2E+PjJdO2Nhc2UgXCJpNjRcIjpyZXR1cm4gSFthPj4zXTtjYXNlIFwiZmxvYXRcIjpyZXR1cm4gT2FbYT4+Ml07Y2FzZSBcImRvdWJsZVwiOnJldHVybiBQYVthPj4zXTtjYXNlIFwiKlwiOnJldHVybiBGW2E+PjJdO2RlZmF1bHQ6VGEoYGludmFsaWQgdHlwZSBmb3IgZ2V0VmFsdWU6ICR7Yn1gKX19dmFyIGNiPWYubm9FeGl0UnVudGltZXx8ITA7XG5mdW5jdGlvbiB0YShhKXt2YXIgYj1cImkzMlwiO2IuZW5kc1dpdGgoXCIqXCIpJiYoYj1cIipcIik7c3dpdGNoKGIpe2Nhc2UgXCJpMVwiOnBbYV09MDticmVhaztjYXNlIFwiaThcIjpwW2FdPTA7YnJlYWs7Y2FzZSBcImkxNlwiOk5hW2E+PjFdPTA7YnJlYWs7Y2FzZSBcImkzMlwiOkVbYT4+Ml09MDticmVhaztjYXNlIFwiaTY0XCI6SFthPj4zXT1CaWdJbnQoMCk7YnJlYWs7Y2FzZSBcImZsb2F0XCI6T2FbYT4+Ml09MDticmVhaztjYXNlIFwiZG91YmxlXCI6UGFbYT4+M109MDticmVhaztjYXNlIFwiKlwiOkZbYT4+Ml09MDticmVhaztkZWZhdWx0OlRhKGBpbnZhbGlkIHR5cGUgZm9yIHNldFZhbHVlOiAke2J9YCl9fVxudmFyIGRiPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBUZXh0RGVjb2Rlcj9uZXcgVGV4dERlY29kZXI6dm9pZCAwLEI9KGEsYj0wLGM9TmFOKT0+e3ZhciBkPWIrYztmb3IoYz1iO2FbY10mJiEoYz49ZCk7KSsrYztpZigxNjxjLWImJmEuYnVmZmVyJiZkYilyZXR1cm4gZGIuZGVjb2RlKGEuc3ViYXJyYXkoYixjKSk7Zm9yKGQ9XCJcIjtiPGM7KXt2YXIgZT1hW2IrK107aWYoZSYxMjgpe3ZhciBoPWFbYisrXSY2MztpZigxOTI9PShlJjIyNCkpZCs9U3RyaW5nLmZyb21DaGFyQ29kZSgoZSYzMSk8PDZ8aCk7ZWxzZXt2YXIgaz1hW2IrK10mNjM7ZT0yMjQ9PShlJjI0MCk/KGUmMTUpPDwxMnxoPDw2fGs6KGUmNyk8PDE4fGg8PDEyfGs8PDZ8YVtiKytdJjYzOzY1NTM2PmU/ZCs9U3RyaW5nLmZyb21DaGFyQ29kZShlKTooZS09NjU1MzYsZCs9U3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NnxlPj4xMCw1NjMyMHxlJjEwMjMpKX19ZWxzZSBkKz1TdHJpbmcuZnJvbUNoYXJDb2RlKGUpfXJldHVybiBkfSxcbnVhPShhLGIpPT5hP0IoeCxhLGIpOlwiXCIsZWI9KGEsYik9Pntmb3IodmFyIGM9MCxkPWEubGVuZ3RoLTE7MDw9ZDtkLS0pe3ZhciBlPWFbZF07XCIuXCI9PT1lP2Euc3BsaWNlKGQsMSk6XCIuLlwiPT09ZT8oYS5zcGxpY2UoZCwxKSxjKyspOmMmJihhLnNwbGljZShkLDEpLGMtLSl9aWYoYilmb3IoO2M7Yy0tKWEudW5zaGlmdChcIi4uXCIpO3JldHVybiBhfSxrYT1hPT57dmFyIGI9XCIvXCI9PT1hLmNoYXJBdCgwKSxjPVwiL1wiPT09YS5zbGljZSgtMSk7KGE9ZWIoYS5zcGxpdChcIi9cIikuZmlsdGVyKGQ9PiEhZCksIWIpLmpvaW4oXCIvXCIpKXx8Ynx8KGE9XCIuXCIpO2EmJmMmJihhKz1cIi9cIik7cmV0dXJuKGI/XCIvXCI6XCJcIikrYX0sZmI9YT0+e3ZhciBiPS9eKFxcLz98KShbXFxzXFxTXSo/KSgoPzpcXC57MSwyfXxbXlxcL10rP3wpKFxcLlteLlxcL10qfCkpKD86W1xcL10qKSQvLmV4ZWMoYSkuc2xpY2UoMSk7YT1iWzBdO2I9YlsxXTtpZighYSYmIWIpcmV0dXJuXCIuXCI7YiYmPWIuc2xpY2UoMCwtMSk7cmV0dXJuIGErYn0sXG5nYj1hPT5hJiZhLm1hdGNoKC8oW15cXC9dK3xcXC8pXFwvKiQvKVsxXSxoYj0oKT0+e2lmKGNhKXt2YXIgYT1yZXF1aXJlKFwiY3J5cHRvXCIpO3JldHVybiBiPT5hLnJhbmRvbUZpbGxTeW5jKGIpfXJldHVybiBiPT5jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGIpfSxpYj1hPT57KGliPWhiKCkpKGEpfSxqYj0oLi4uYSk9Pntmb3IodmFyIGI9XCJcIixjPSExLGQ9YS5sZW5ndGgtMTstMTw9ZCYmIWM7ZC0tKXtjPTA8PWQ/YVtkXTpcIi9cIjtpZihcInN0cmluZ1wiIT10eXBlb2YgYyl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXJndW1lbnRzIHRvIHBhdGgucmVzb2x2ZSBtdXN0IGJlIHN0cmluZ3NcIik7aWYoIWMpcmV0dXJuXCJcIjtiPWMrXCIvXCIrYjtjPVwiL1wiPT09Yy5jaGFyQXQoMCl9Yj1lYihiLnNwbGl0KFwiL1wiKS5maWx0ZXIoZT0+ISFlKSwhYykuam9pbihcIi9cIik7cmV0dXJuKGM/XCIvXCI6XCJcIikrYnx8XCIuXCJ9LGtiPVtdLGhhPWE9Pntmb3IodmFyIGI9MCxjPTA7YzxhLmxlbmd0aDsrK2Mpe3ZhciBkPWEuY2hhckNvZGVBdChjKTtcbjEyNz49ZD9iKys6MjA0Nz49ZD9iKz0yOjU1Mjk2PD1kJiY1NzM0Mz49ZD8oYis9NCwrK2MpOmIrPTN9cmV0dXJuIGJ9LHU9KGEsYixjLGQpPT57aWYoISgwPGQpKXJldHVybiAwO3ZhciBlPWM7ZD1jK2QtMTtmb3IodmFyIGg9MDtoPGEubGVuZ3RoOysraCl7dmFyIGs9YS5jaGFyQ29kZUF0KGgpO2lmKDU1Mjk2PD1rJiY1NzM0Mz49ayl7dmFyIHE9YS5jaGFyQ29kZUF0KCsraCk7az02NTUzNisoKGsmMTAyMyk8PDEwKXxxJjEwMjN9aWYoMTI3Pj1rKXtpZihjPj1kKWJyZWFrO2JbYysrXT1rfWVsc2V7aWYoMjA0Nz49ayl7aWYoYysxPj1kKWJyZWFrO2JbYysrXT0xOTJ8az4+Nn1lbHNle2lmKDY1NTM1Pj1rKXtpZihjKzI+PWQpYnJlYWs7YltjKytdPTIyNHxrPj4xMn1lbHNle2lmKGMrMz49ZClicmVhaztiW2MrK109MjQwfGs+PjE4O2JbYysrXT0xMjh8az4+MTImNjN9YltjKytdPTEyOHxrPj42JjYzfWJbYysrXT0xMjh8ayY2M319YltjXT0wO3JldHVybiBjLWV9LHJhPShhLGIpPT5cbnt2YXIgYz1BcnJheShoYShhKSsxKTthPXUoYSxjLDAsYy5sZW5ndGgpO2ImJihjLmxlbmd0aD1hKTtyZXR1cm4gY30sbWI9W107ZnVuY3Rpb24gbmIoYSxiKXttYlthXT17aW5wdXQ6W10sb3V0cHV0OltdLGNiOmJ9O3diKGEseGIpfVxudmFyIHhiPXtvcGVuKGEpe3ZhciBiPW1iW2Eubm9kZS5yZGV2XTtpZighYil0aHJvdyBuZXcgTig0Myk7YS50dHk9YjthLnNlZWthYmxlPSExfSxjbG9zZShhKXthLnR0eS5jYi5mc3luYyhhLnR0eSl9LGZzeW5jKGEpe2EudHR5LmNiLmZzeW5jKGEudHR5KX0scmVhZChhLGIsYyxkKXtpZighYS50dHl8fCFhLnR0eS5jYi54Yil0aHJvdyBuZXcgTig2MCk7Zm9yKHZhciBlPTAsaD0wO2g8ZDtoKyspe3RyeXt2YXIgaz1hLnR0eS5jYi54YihhLnR0eSl9Y2F0Y2gocSl7dGhyb3cgbmV3IE4oMjkpO31pZih2b2lkIDA9PT1rJiYwPT09ZSl0aHJvdyBuZXcgTig2KTtpZihudWxsPT09a3x8dm9pZCAwPT09aylicmVhaztlKys7YltjK2hdPWt9ZSYmKGEubm9kZS5hdGltZT1EYXRlLm5vdygpKTtyZXR1cm4gZX0sd3JpdGUoYSxiLGMsZCl7aWYoIWEudHR5fHwhYS50dHkuY2IucWIpdGhyb3cgbmV3IE4oNjApO3RyeXtmb3IodmFyIGU9MDtlPGQ7ZSsrKWEudHR5LmNiLnFiKGEudHR5LGJbYytlXSl9Y2F0Y2goaCl7dGhyb3cgbmV3IE4oMjkpO1xufWQmJihhLm5vZGUubXRpbWU9YS5ub2RlLmN0aW1lPURhdGUubm93KCkpO3JldHVybiBlfX0seWI9e3hiKCl7YTp7aWYoIWtiLmxlbmd0aCl7dmFyIGE9bnVsbDtpZihjYSl7dmFyIGI9QnVmZmVyLmFsbG9jKDI1NiksYz0wLGQ9cHJvY2Vzcy5zdGRpbi5mZDt0cnl7Yz1mcy5yZWFkU3luYyhkLGIsMCwyNTYpfWNhdGNoKGUpe2lmKGUudG9TdHJpbmcoKS5pbmNsdWRlcyhcIkVPRlwiKSljPTA7ZWxzZSB0aHJvdyBlO30wPGMmJihhPWIuc2xpY2UoMCxjKS50b1N0cmluZyhcInV0Zi04XCIpKX1lbHNlXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmXCJmdW5jdGlvblwiPT10eXBlb2Ygd2luZG93LnByb21wdCYmKGE9d2luZG93LnByb21wdChcIklucHV0OiBcIiksbnVsbCE9PWEmJihhKz1cIlxcblwiKSk7aWYoIWEpe2E9bnVsbDticmVhayBhfWtiPXJhKGEsITApfWE9a2Iuc2hpZnQoKX1yZXR1cm4gYX0scWIoYSxiKXtudWxsPT09Ynx8MTA9PT1iPyhIYShCKGEub3V0cHV0KSksYS5vdXRwdXQ9W10pOlxuMCE9YiYmYS5vdXRwdXQucHVzaChiKX0sZnN5bmMoYSl7MDxhLm91dHB1dD8ubGVuZ3RoJiYoSGEoQihhLm91dHB1dCkpLGEub3V0cHV0PVtdKX0sVGIoKXtyZXR1cm57T2I6MjU4NTYsUWI6NSxOYjoxOTEsUGI6MzUzODcsTWI6WzMsMjgsMTI3LDIxLDQsMCwxLDAsMTcsMTksMjYsMCwxOCwxNSwyMywyMiwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwXX19LFViKCl7cmV0dXJuIDB9LFZiKCl7cmV0dXJuWzI0LDgwXX19LHpiPXtxYihhLGIpe251bGw9PT1ifHwxMD09PWI/KElhKEIoYS5vdXRwdXQpKSxhLm91dHB1dD1bXSk6MCE9YiYmYS5vdXRwdXQucHVzaChiKX0sZnN5bmMoYSl7MDxhLm91dHB1dD8ubGVuZ3RoJiYoSWEoQihhLm91dHB1dCkpLGEub3V0cHV0PVtdKX19LE89e1dhOm51bGwsWGEoKXtyZXR1cm4gTy5jcmVhdGVOb2RlKG51bGwsXCIvXCIsMTY4OTUsMCl9LGNyZWF0ZU5vZGUoYSxiLGMsZCl7aWYoMjQ1NzY9PT0oYyY2MTQ0MCl8fDQwOTY9PT0oYyY2MTQ0MCkpdGhyb3cgbmV3IE4oNjMpO1xuTy5XYXx8KE8uV2E9e2Rpcjp7bm9kZTp7VGE6Ty5MYS5UYSxVYTpPLkxhLlVhLGxvb2t1cDpPLkxhLmxvb2t1cCxoYjpPLkxhLmhiLHJlbmFtZTpPLkxhLnJlbmFtZSx1bmxpbms6Ty5MYS51bmxpbmsscm1kaXI6Ty5MYS5ybWRpcixyZWFkZGlyOk8uTGEucmVhZGRpcixzeW1saW5rOk8uTGEuc3ltbGlua30sc3RyZWFtOntWYTpPLk1hLlZhfX0sZmlsZTp7bm9kZTp7VGE6Ty5MYS5UYSxVYTpPLkxhLlVhfSxzdHJlYW06e1ZhOk8uTWEuVmEscmVhZDpPLk1hLnJlYWQsd3JpdGU6Ty5NYS53cml0ZSxpYjpPLk1hLmliLGpiOk8uTWEuamJ9fSxsaW5rOntub2RlOntUYTpPLkxhLlRhLFVhOk8uTGEuVWEscmVhZGxpbms6Ty5MYS5yZWFkbGlua30sc3RyZWFtOnt9fSx1Yjp7bm9kZTp7VGE6Ty5MYS5UYSxVYTpPLkxhLlVhfSxzdHJlYW06QWJ9fSk7Yz1CYihhLGIsYyxkKTtQKGMubW9kZSk/KGMuTGE9Ty5XYS5kaXIubm9kZSxjLk1hPU8uV2EuZGlyLnN0cmVhbSxjLk5hPXt9KTozMjc2OD09PVxuKGMubW9kZSY2MTQ0MCk/KGMuTGE9Ty5XYS5maWxlLm5vZGUsYy5NYT1PLldhLmZpbGUuc3RyZWFtLGMuUmE9MCxjLk5hPW51bGwpOjQwOTYwPT09KGMubW9kZSY2MTQ0MCk/KGMuTGE9Ty5XYS5saW5rLm5vZGUsYy5NYT1PLldhLmxpbmsuc3RyZWFtKTo4MTkyPT09KGMubW9kZSY2MTQ0MCkmJihjLkxhPU8uV2EudWIubm9kZSxjLk1hPU8uV2EudWIuc3RyZWFtKTtjLmF0aW1lPWMubXRpbWU9Yy5jdGltZT1EYXRlLm5vdygpO2EmJihhLk5hW2JdPWMsYS5hdGltZT1hLm10aW1lPWEuY3RpbWU9Yy5hdGltZSk7cmV0dXJuIGN9LFNiKGEpe3JldHVybiBhLk5hP2EuTmEuc3ViYXJyYXk/YS5OYS5zdWJhcnJheSgwLGEuUmEpOm5ldyBVaW50OEFycmF5KGEuTmEpOm5ldyBVaW50OEFycmF5KDApfSxMYTp7VGEoYSl7dmFyIGI9e307Yi5kZXY9ODE5Mj09PShhLm1vZGUmNjE0NDApP2EuaWQ6MTtiLmlubz1hLmlkO2IubW9kZT1hLm1vZGU7Yi5ubGluaz0xO2IudWlkPTA7Yi5naWQ9MDtiLnJkZXY9XG5hLnJkZXY7UChhLm1vZGUpP2Iuc2l6ZT00MDk2OjMyNzY4PT09KGEubW9kZSY2MTQ0MCk/Yi5zaXplPWEuUmE6NDA5NjA9PT0oYS5tb2RlJjYxNDQwKT9iLnNpemU9YS5saW5rLmxlbmd0aDpiLnNpemU9MDtiLmF0aW1lPW5ldyBEYXRlKGEuYXRpbWUpO2IubXRpbWU9bmV3IERhdGUoYS5tdGltZSk7Yi5jdGltZT1uZXcgRGF0ZShhLmN0aW1lKTtiLmJsa3NpemU9NDA5NjtiLmJsb2Nrcz1NYXRoLmNlaWwoYi5zaXplL2IuYmxrc2l6ZSk7cmV0dXJuIGJ9LFVhKGEsYil7Zm9yKHZhciBjIG9mW1wibW9kZVwiLFwiYXRpbWVcIixcIm10aW1lXCIsXCJjdGltZVwiXSludWxsIT1iW2NdJiYoYVtjXT1iW2NdKTt2b2lkIDAhPT1iLnNpemUmJihiPWIuc2l6ZSxhLlJhIT1iJiYoMD09Yj8oYS5OYT1udWxsLGEuUmE9MCk6KGM9YS5OYSxhLk5hPW5ldyBVaW50OEFycmF5KGIpLGMmJmEuTmEuc2V0KGMuc3ViYXJyYXkoMCxNYXRoLm1pbihiLGEuUmEpKSksYS5SYT1iKSkpfSxsb29rdXAoKXt0aHJvdyBPLnZiO1xufSxoYihhLGIsYyxkKXtyZXR1cm4gTy5jcmVhdGVOb2RlKGEsYixjLGQpfSxyZW5hbWUoYSxiLGMpe3RyeXt2YXIgZD1RKGIsYyl9Y2F0Y2goaCl7fWlmKGQpe2lmKFAoYS5tb2RlKSlmb3IodmFyIGUgaW4gZC5OYSl0aHJvdyBuZXcgTig1NSk7Q2IoZCl9ZGVsZXRlIGEucGFyZW50Lk5hW2EubmFtZV07Yi5OYVtjXT1hO2EubmFtZT1jO2IuY3RpbWU9Yi5tdGltZT1hLnBhcmVudC5jdGltZT1hLnBhcmVudC5tdGltZT1EYXRlLm5vdygpfSx1bmxpbmsoYSxiKXtkZWxldGUgYS5OYVtiXTthLmN0aW1lPWEubXRpbWU9RGF0ZS5ub3coKX0scm1kaXIoYSxiKXt2YXIgYz1RKGEsYiksZDtmb3IoZCBpbiBjLk5hKXRocm93IG5ldyBOKDU1KTtkZWxldGUgYS5OYVtiXTthLmN0aW1lPWEubXRpbWU9RGF0ZS5ub3coKX0scmVhZGRpcihhKXtyZXR1cm5bXCIuXCIsXCIuLlwiLC4uLk9iamVjdC5rZXlzKGEuTmEpXX0sc3ltbGluayhhLGIsYyl7YT1PLmNyZWF0ZU5vZGUoYSxiLDQxNDcxLDApO2EubGluaz1cbmM7cmV0dXJuIGF9LHJlYWRsaW5rKGEpe2lmKDQwOTYwIT09KGEubW9kZSY2MTQ0MCkpdGhyb3cgbmV3IE4oMjgpO3JldHVybiBhLmxpbmt9fSxNYTp7cmVhZChhLGIsYyxkLGUpe3ZhciBoPWEubm9kZS5OYTtpZihlPj1hLm5vZGUuUmEpcmV0dXJuIDA7YT1NYXRoLm1pbihhLm5vZGUuUmEtZSxkKTtpZig4PGEmJmguc3ViYXJyYXkpYi5zZXQoaC5zdWJhcnJheShlLGUrYSksYyk7ZWxzZSBmb3IoZD0wO2Q8YTtkKyspYltjK2RdPWhbZStkXTtyZXR1cm4gYX0sd3JpdGUoYSxiLGMsZCxlLGgpe2IuYnVmZmVyPT09cC5idWZmZXImJihoPSExKTtpZighZClyZXR1cm4gMDthPWEubm9kZTthLm10aW1lPWEuY3RpbWU9RGF0ZS5ub3coKTtpZihiLnN1YmFycmF5JiYoIWEuTmF8fGEuTmEuc3ViYXJyYXkpKXtpZihoKXJldHVybiBhLk5hPWIuc3ViYXJyYXkoYyxjK2QpLGEuUmE9ZDtpZigwPT09YS5SYSYmMD09PWUpcmV0dXJuIGEuTmE9Yi5zbGljZShjLGMrZCksYS5SYT1kO2lmKGUrZDw9YS5SYSlyZXR1cm4gYS5OYS5zZXQoYi5zdWJhcnJheShjLFxuYytkKSxlKSxkfWg9ZStkO3ZhciBrPWEuTmE/YS5OYS5sZW5ndGg6MDtrPj1ofHwoaD1NYXRoLm1heChoLGsqKDEwNDg1NzY+az8yOjEuMTI1KT4+PjApLDAhPWsmJihoPU1hdGgubWF4KGgsMjU2KSksaz1hLk5hLGEuTmE9bmV3IFVpbnQ4QXJyYXkoaCksMDxhLlJhJiZhLk5hLnNldChrLnN1YmFycmF5KDAsYS5SYSksMCkpO2lmKGEuTmEuc3ViYXJyYXkmJmIuc3ViYXJyYXkpYS5OYS5zZXQoYi5zdWJhcnJheShjLGMrZCksZSk7ZWxzZSBmb3IoaD0wO2g8ZDtoKyspYS5OYVtlK2hdPWJbYytoXTthLlJhPU1hdGgubWF4KGEuUmEsZStkKTtyZXR1cm4gZH0sVmEoYSxiLGMpezE9PT1jP2IrPWEucG9zaXRpb246Mj09PWMmJjMyNzY4PT09KGEubm9kZS5tb2RlJjYxNDQwKSYmKGIrPWEubm9kZS5SYSk7aWYoMD5iKXRocm93IG5ldyBOKDI4KTtyZXR1cm4gYn0saWIoYSxiLGMsZCxlKXtpZigzMjc2OCE9PShhLm5vZGUubW9kZSY2MTQ0MCkpdGhyb3cgbmV3IE4oNDMpO2E9YS5ub2RlLk5hO1xuaWYoZSYyfHwhYXx8YS5idWZmZXIhPT1wLmJ1ZmZlcil7ZT0hMDtkPTY1NTM2Kk1hdGguY2VpbChiLzY1NTM2KTt2YXIgaD1EYig2NTUzNixkKTtoJiZ4LmZpbGwoMCxoLGgrZCk7ZD1oO2lmKCFkKXRocm93IG5ldyBOKDQ4KTtpZihhKXtpZigwPGN8fGMrYjxhLmxlbmd0aClhLnN1YmFycmF5P2E9YS5zdWJhcnJheShjLGMrYik6YT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhLGMsYytiKTtwLnNldChhLGQpfX1lbHNlIGU9ITEsZD1hLmJ5dGVPZmZzZXQ7cmV0dXJue0tiOmQsQWI6ZX19LGpiKGEsYixjLGQpe08uTWEud3JpdGUoYSxiLDAsZCxjLCExKTtyZXR1cm4gMH19fSxsYT0oYSxiKT0+e3ZhciBjPTA7YSYmKGN8PTM2NSk7YiYmKGN8PTE0Nik7cmV0dXJuIGN9LEViPW51bGwsRmI9e30sR2I9W10sSGI9MSxSPW51bGwsSWI9ITEsSmI9ITAsS2I9e30sTj1jbGFzc3tuYW1lPVwiRXJybm9FcnJvclwiO2NvbnN0cnVjdG9yKGEpe3RoaXMuUGE9YX19LExiPWNsYXNze2diPXt9O25vZGU9bnVsbDtnZXQgZmxhZ3MoKXtyZXR1cm4gdGhpcy5nYi5mbGFnc31zZXQgZmxhZ3MoYSl7dGhpcy5nYi5mbGFncz1cbmF9Z2V0IHBvc2l0aW9uKCl7cmV0dXJuIHRoaXMuZ2IucG9zaXRpb259c2V0IHBvc2l0aW9uKGEpe3RoaXMuZ2IucG9zaXRpb249YX19LE1iPWNsYXNze0xhPXt9O01hPXt9O2FiPW51bGw7Y29uc3RydWN0b3IoYSxiLGMsZCl7YXx8PXRoaXM7dGhpcy5wYXJlbnQ9YTt0aGlzLlhhPWEuWGE7dGhpcy5pZD1IYisrO3RoaXMubmFtZT1iO3RoaXMubW9kZT1jO3RoaXMucmRldj1kO3RoaXMuYXRpbWU9dGhpcy5tdGltZT10aGlzLmN0aW1lPURhdGUubm93KCl9Z2V0IHJlYWQoKXtyZXR1cm4gMzY1PT09KHRoaXMubW9kZSYzNjUpfXNldCByZWFkKGEpe2E/dGhpcy5tb2RlfD0zNjU6dGhpcy5tb2RlJj0tMzY2fWdldCB3cml0ZSgpe3JldHVybiAxNDY9PT0odGhpcy5tb2RlJjE0Nil9c2V0IHdyaXRlKGEpe2E/dGhpcy5tb2RlfD0xNDY6dGhpcy5tb2RlJj0tMTQ3fX07XG5mdW5jdGlvbiBTKGEsYj17fSl7aWYoIWEpdGhyb3cgbmV3IE4oNDQpO2IubmI/PyhiLm5iPSEwKTtcIi9cIj09PWEuY2hhckF0KDApfHwoYT1cIi8vXCIrYSk7dmFyIGM9MDthOmZvcig7NDA+YztjKyspe2E9YS5zcGxpdChcIi9cIikuZmlsdGVyKHE9PiEhcSk7Zm9yKHZhciBkPUViLGU9XCIvXCIsaD0wO2g8YS5sZW5ndGg7aCsrKXt2YXIgaz1oPT09YS5sZW5ndGgtMTtpZihrJiZiLnBhcmVudClicmVhaztpZihcIi5cIiE9PWFbaF0paWYoXCIuLlwiPT09YVtoXSllPWZiKGUpLGQ9ZC5wYXJlbnQ7ZWxzZXtlPWthKGUrXCIvXCIrYVtoXSk7dHJ5e2Q9UShkLGFbaF0pfWNhdGNoKHEpe2lmKDQ0PT09cT8uUGEmJmsmJmIuSmIpcmV0dXJue3BhdGg6ZX07dGhyb3cgcTt9IWQuYWJ8fGsmJiFiLm5ifHwoZD1kLmFiLnJvb3QpO2lmKDQwOTYwPT09KGQubW9kZSY2MTQ0MCkmJigha3x8Yi4kYSkpe2lmKCFkLkxhLnJlYWRsaW5rKXRocm93IG5ldyBOKDUyKTtkPWQuTGEucmVhZGxpbmsoZCk7XCIvXCI9PT1kLmNoYXJBdCgwKXx8XG4oZD1mYihlKStcIi9cIitkKTthPWQrXCIvXCIrYS5zbGljZShoKzEpLmpvaW4oXCIvXCIpO2NvbnRpbnVlIGF9fX1yZXR1cm57cGF0aDplLG5vZGU6ZH19dGhyb3cgbmV3IE4oMzIpO31mdW5jdGlvbiBqYShhKXtmb3IodmFyIGI7Oyl7aWYoYT09PWEucGFyZW50KXJldHVybiBhPWEuWGEuemIsYj9cIi9cIiE9PWFbYS5sZW5ndGgtMV0/YCR7YX0vJHtifWA6YStiOmE7Yj1iP2Ake2EubmFtZX0vJHtifWA6YS5uYW1lO2E9YS5wYXJlbnR9fWZ1bmN0aW9uIE5iKGEsYil7Zm9yKHZhciBjPTAsZD0wO2Q8Yi5sZW5ndGg7ZCsrKWM9KGM8PDUpLWMrYi5jaGFyQ29kZUF0KGQpfDA7cmV0dXJuKGErYz4+PjApJVIubGVuZ3RofWZ1bmN0aW9uIENiKGEpe3ZhciBiPU5iKGEucGFyZW50LmlkLGEubmFtZSk7aWYoUltiXT09PWEpUltiXT1hLmJiO2Vsc2UgZm9yKGI9UltiXTtiOyl7aWYoYi5iYj09PWEpe2IuYmI9YS5iYjticmVha31iPWIuYmJ9fVxuZnVuY3Rpb24gUShhLGIpe3ZhciBjPVAoYS5tb2RlKT8oYz1PYihhLFwieFwiKSk/YzphLkxhLmxvb2t1cD8wOjI6NTQ7aWYoYyl0aHJvdyBuZXcgTihjKTtmb3IoYz1SW05iKGEuaWQsYildO2M7Yz1jLmJiKXt2YXIgZD1jLm5hbWU7aWYoYy5wYXJlbnQuaWQ9PT1hLmlkJiZkPT09YilyZXR1cm4gY31yZXR1cm4gYS5MYS5sb29rdXAoYSxiKX1mdW5jdGlvbiBCYihhLGIsYyxkKXthPW5ldyBNYihhLGIsYyxkKTtiPU5iKGEucGFyZW50LmlkLGEubmFtZSk7YS5iYj1SW2JdO3JldHVybiBSW2JdPWF9ZnVuY3Rpb24gUChhKXtyZXR1cm4gMTYzODQ9PT0oYSY2MTQ0MCl9ZnVuY3Rpb24gUGIoYSl7dmFyIGI9W1wiclwiLFwid1wiLFwicndcIl1bYSYzXTthJjUxMiYmKGIrPVwid1wiKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIE9iKGEsYil7aWYoSmIpcmV0dXJuIDA7aWYoIWIuaW5jbHVkZXMoXCJyXCIpfHxhLm1vZGUmMjkyKXtpZihiLmluY2x1ZGVzKFwid1wiKSYmIShhLm1vZGUmMTQ2KXx8Yi5pbmNsdWRlcyhcInhcIikmJiEoYS5tb2RlJjczKSlyZXR1cm4gMn1lbHNlIHJldHVybiAyO3JldHVybiAwfWZ1bmN0aW9uIFFiKGEsYil7aWYoIVAoYS5tb2RlKSlyZXR1cm4gNTQ7dHJ5e3JldHVybiBRKGEsYiksMjB9Y2F0Y2goYyl7fXJldHVybiBPYihhLFwid3hcIil9ZnVuY3Rpb24gUmIoYSxiLGMpe3RyeXt2YXIgZD1RKGEsYil9Y2F0Y2goZSl7cmV0dXJuIGUuUGF9aWYoYT1PYihhLFwid3hcIikpcmV0dXJuIGE7aWYoYyl7aWYoIVAoZC5tb2RlKSlyZXR1cm4gNTQ7aWYoZD09PWQucGFyZW50fHxcIi9cIj09PWphKGQpKXJldHVybiAxMH1lbHNlIGlmKFAoZC5tb2RlKSlyZXR1cm4gMzE7cmV0dXJuIDB9ZnVuY3Rpb24gU2IoYSl7aWYoIWEpdGhyb3cgbmV3IE4oNjMpO3JldHVybiBhfVxuZnVuY3Rpb24gVChhKXthPUdiW2FdO2lmKCFhKXRocm93IG5ldyBOKDgpO3JldHVybiBhfWZ1bmN0aW9uIFRiKGEsYj0tMSl7YT1PYmplY3QuYXNzaWduKG5ldyBMYixhKTtpZigtMT09YilhOntmb3IoYj0wOzQwOTY+PWI7YisrKWlmKCFHYltiXSlicmVhayBhO3Rocm93IG5ldyBOKDMzKTt9YS5mZD1iO3JldHVybiBHYltiXT1hfWZ1bmN0aW9uIFViKGEsYj0tMSl7YT1UYihhLGIpO2EuTWE/LlJiPy4oYSk7cmV0dXJuIGF9ZnVuY3Rpb24gVmIoYSxiLGMpe3ZhciBkPWE/Lk1hLlVhO2E9ZD9hOmI7ZD8/PWIuTGEuVWE7U2IoZCk7ZChhLGMpfXZhciBBYj17b3BlbihhKXthLk1hPUZiW2Eubm9kZS5yZGV2XS5NYTthLk1hLm9wZW4/LihhKX0sVmEoKXt0aHJvdyBuZXcgTig3MCk7fX07ZnVuY3Rpb24gd2IoYSxiKXtGYlthXT17TWE6Yn19XG5mdW5jdGlvbiBXYihhLGIpe3ZhciBjPVwiL1wiPT09YjtpZihjJiZFYil0aHJvdyBuZXcgTigxMCk7aWYoIWMmJmIpe3ZhciBkPVMoYix7bmI6ITF9KTtiPWQucGF0aDtkPWQubm9kZTtpZihkLmFiKXRocm93IG5ldyBOKDEwKTtpZighUChkLm1vZGUpKXRocm93IG5ldyBOKDU0KTt9Yj17dHlwZTphLFdiOnt9LHpiOmIsSWI6W119O2E9YS5YYShiKTthLlhhPWI7Yi5yb290PWE7Yz9FYj1hOmQmJihkLmFiPWIsZC5YYSYmZC5YYS5JYi5wdXNoKGIpKX1mdW5jdGlvbiBYYihhLGIsYyl7dmFyIGQ9UyhhLHtwYXJlbnQ6ITB9KS5ub2RlO2E9Z2IoYSk7aWYoIWEpdGhyb3cgbmV3IE4oMjgpO2lmKFwiLlwiPT09YXx8XCIuLlwiPT09YSl0aHJvdyBuZXcgTigyMCk7dmFyIGU9UWIoZCxhKTtpZihlKXRocm93IG5ldyBOKGUpO2lmKCFkLkxhLmhiKXRocm93IG5ldyBOKDYzKTtyZXR1cm4gZC5MYS5oYihkLGEsYixjKX1cbmZ1bmN0aW9uIG1hKGEsYj00Mzgpe3JldHVybiBYYihhLGImNDA5NXwzMjc2OCwwKX1mdW5jdGlvbiBVKGEsYj01MTEpe3JldHVybiBYYihhLGImMTAyM3wxNjM4NCwwKX1mdW5jdGlvbiBZYihhLGIsYyl7XCJ1bmRlZmluZWRcIj09dHlwZW9mIGMmJihjPWIsYj00MzgpO1hiKGEsYnw4MTkyLGMpfWZ1bmN0aW9uIFpiKGEsYil7aWYoIWpiKGEpKXRocm93IG5ldyBOKDQ0KTt2YXIgYz1TKGIse3BhcmVudDohMH0pLm5vZGU7aWYoIWMpdGhyb3cgbmV3IE4oNDQpO2I9Z2IoYik7dmFyIGQ9UWIoYyxiKTtpZihkKXRocm93IG5ldyBOKGQpO2lmKCFjLkxhLnN5bWxpbmspdGhyb3cgbmV3IE4oNjMpO2MuTGEuc3ltbGluayhjLGIsYSl9XG5mdW5jdGlvbiAkYihhKXt2YXIgYj1TKGEse3BhcmVudDohMH0pLm5vZGU7YT1nYihhKTt2YXIgYz1RKGIsYSksZD1SYihiLGEsITApO2lmKGQpdGhyb3cgbmV3IE4oZCk7aWYoIWIuTGEucm1kaXIpdGhyb3cgbmV3IE4oNjMpO2lmKGMuYWIpdGhyb3cgbmV3IE4oMTApO2IuTGEucm1kaXIoYixhKTtDYihjKX1mdW5jdGlvbiB6YShhKXt2YXIgYj1TKGEse3BhcmVudDohMH0pLm5vZGU7aWYoIWIpdGhyb3cgbmV3IE4oNDQpO2E9Z2IoYSk7dmFyIGM9UShiLGEpLGQ9UmIoYixhLCExKTtpZihkKXRocm93IG5ldyBOKGQpO2lmKCFiLkxhLnVubGluayl0aHJvdyBuZXcgTig2Myk7aWYoYy5hYil0aHJvdyBuZXcgTigxMCk7Yi5MYS51bmxpbmsoYixhKTtDYihjKX1mdW5jdGlvbiBhYyhhLGIpe2E9UyhhLHskYTohYn0pLm5vZGU7cmV0dXJuIFNiKGEuTGEuVGEpKGEpfVxuZnVuY3Rpb24gYmMoYSxiLGMsZCl7VmIoYSxiLHttb2RlOmMmNDA5NXxiLm1vZGUmLTQwOTYsY3RpbWU6RGF0ZS5ub3coKSxGYjpkfSl9ZnVuY3Rpb24gbmEoYSxiKXthPVwic3RyaW5nXCI9PXR5cGVvZiBhP1MoYSx7JGE6ITB9KS5ub2RlOmE7YmMobnVsbCxhLGIpfWZ1bmN0aW9uIGNjKGEsYixjKXtpZihQKGIubW9kZSkpdGhyb3cgbmV3IE4oMzEpO2lmKDMyNzY4IT09KGIubW9kZSY2MTQ0MCkpdGhyb3cgbmV3IE4oMjgpO3ZhciBkPU9iKGIsXCJ3XCIpO2lmKGQpdGhyb3cgbmV3IE4oZCk7VmIoYSxiLHtzaXplOmMsdGltZXN0YW1wOkRhdGUubm93KCl9KX1cbmZ1bmN0aW9uIG9hKGEsYixjPTQzOCl7aWYoXCJcIj09PWEpdGhyb3cgbmV3IE4oNDQpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiKXt2YXIgZD17cjowLFwicitcIjoyLHc6NTc3LFwidytcIjo1NzgsYToxMDg5LFwiYStcIjoxMDkwfVtiXTtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgZCl0aHJvdyBFcnJvcihgVW5rbm93biBmaWxlIG9wZW4gbW9kZTogJHtifWApO2I9ZH1jPWImNjQ/YyY0MDk1fDMyNzY4OjA7aWYoXCJvYmplY3RcIj09dHlwZW9mIGEpZD1hO2Vsc2V7dmFyIGU9YS5lbmRzV2l0aChcIi9cIik7YT1TKGEseyRhOiEoYiYxMzEwNzIpLEpiOiEwfSk7ZD1hLm5vZGU7YT1hLnBhdGh9dmFyIGg9ITE7aWYoYiY2NClpZihkKXtpZihiJjEyOCl0aHJvdyBuZXcgTigyMCk7fWVsc2V7aWYoZSl0aHJvdyBuZXcgTigzMSk7ZD1YYihhLGN8NTExLDApO2g9ITB9aWYoIWQpdGhyb3cgbmV3IE4oNDQpOzgxOTI9PT0oZC5tb2RlJjYxNDQwKSYmKGImPS01MTMpO2lmKGImNjU1MzYmJiFQKGQubW9kZSkpdGhyb3cgbmV3IE4oNTQpO1xuaWYoIWgmJihlPWQ/NDA5NjA9PT0oZC5tb2RlJjYxNDQwKT8zMjpQKGQubW9kZSkmJihcInJcIiE9PVBiKGIpfHxiJjU3Nik/MzE6T2IoZCxQYihiKSk6NDQpKXRocm93IG5ldyBOKGUpO2ImNTEyJiYhaCYmKGU9ZCxlPVwic3RyaW5nXCI9PXR5cGVvZiBlP1MoZSx7JGE6ITB9KS5ub2RlOmUsY2MobnVsbCxlLDApKTtiJj0tMTMxNzEzO2U9VGIoe25vZGU6ZCxwYXRoOmphKGQpLGZsYWdzOmIsc2Vla2FibGU6ITAscG9zaXRpb246MCxNYTpkLk1hLExiOltdLGVycm9yOiExfSk7ZS5NYS5vcGVuJiZlLk1hLm9wZW4oZSk7aCYmbmEoZCxjJjUxMSk7IWYubG9nUmVhZEZpbGVzfHxiJjF8fGEgaW4gS2J8fChLYlthXT0xKTtyZXR1cm4gZX1mdW5jdGlvbiBxYShhKXtpZihudWxsPT09YS5mZCl0aHJvdyBuZXcgTig4KTthLm9iJiYoYS5vYj1udWxsKTt0cnl7YS5NYS5jbG9zZSYmYS5NYS5jbG9zZShhKX1jYXRjaChiKXt0aHJvdyBiO31maW5hbGx5e0diW2EuZmRdPW51bGx9YS5mZD1udWxsfVxuZnVuY3Rpb24gbWMoYSxiLGMpe2lmKG51bGw9PT1hLmZkKXRocm93IG5ldyBOKDgpO2lmKCFhLnNlZWthYmxlfHwhYS5NYS5WYSl0aHJvdyBuZXcgTig3MCk7aWYoMCE9YyYmMSE9YyYmMiE9Yyl0aHJvdyBuZXcgTigyOCk7YS5wb3NpdGlvbj1hLk1hLlZhKGEsYixjKTthLkxiPVtdfWZ1bmN0aW9uIEVjKGEsYixjLGQsZSl7aWYoMD5kfHwwPmUpdGhyb3cgbmV3IE4oMjgpO2lmKG51bGw9PT1hLmZkKXRocm93IG5ldyBOKDgpO2lmKDE9PT0oYS5mbGFncyYyMDk3MTU1KSl0aHJvdyBuZXcgTig4KTtpZihQKGEubm9kZS5tb2RlKSl0aHJvdyBuZXcgTigzMSk7aWYoIWEuTWEucmVhZCl0aHJvdyBuZXcgTigyOCk7dmFyIGg9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGU7aWYoIWgpZT1hLnBvc2l0aW9uO2Vsc2UgaWYoIWEuc2Vla2FibGUpdGhyb3cgbmV3IE4oNzApO2I9YS5NYS5yZWFkKGEsYixjLGQsZSk7aHx8KGEucG9zaXRpb24rPWIpO3JldHVybiBifVxuZnVuY3Rpb24gcGEoYSxiLGMsZCxlKXtpZigwPmR8fDA+ZSl0aHJvdyBuZXcgTigyOCk7aWYobnVsbD09PWEuZmQpdGhyb3cgbmV3IE4oOCk7aWYoMD09PShhLmZsYWdzJjIwOTcxNTUpKXRocm93IG5ldyBOKDgpO2lmKFAoYS5ub2RlLm1vZGUpKXRocm93IG5ldyBOKDMxKTtpZighYS5NYS53cml0ZSl0aHJvdyBuZXcgTigyOCk7YS5zZWVrYWJsZSYmYS5mbGFncyYxMDI0JiZtYyhhLDAsMik7dmFyIGg9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGU7aWYoIWgpZT1hLnBvc2l0aW9uO2Vsc2UgaWYoIWEuc2Vla2FibGUpdGhyb3cgbmV3IE4oNzApO2I9YS5NYS53cml0ZShhLGIsYyxkLGUsdm9pZCAwKTtofHwoYS5wb3NpdGlvbis9Yik7cmV0dXJuIGJ9XG5mdW5jdGlvbiB5YShhKXt2YXIgYj1cImJpbmFyeVwiO2lmKFwidXRmOFwiIT09YiYmXCJiaW5hcnlcIiE9PWIpdGhyb3cgRXJyb3IoYEludmFsaWQgZW5jb2RpbmcgdHlwZSBcIiR7Yn1cImApO3ZhciBjO3ZhciBkPW9hKGEsZHx8MCk7YT1hYyhhKS5zaXplO3ZhciBlPW5ldyBVaW50OEFycmF5KGEpO0VjKGQsZSwwLGEsMCk7XCJ1dGY4XCI9PT1iP2M9QihlKTpcImJpbmFyeVwiPT09YiYmKGM9ZSk7cWEoZCk7cmV0dXJuIGN9XG5mdW5jdGlvbiBWKGEsYixjKXthPWthKFwiL2Rldi9cIithKTt2YXIgZD1sYSghIWIsISFjKTtWLnliPz8oVi55Yj02NCk7dmFyIGU9Vi55YisrPDw4fDA7d2IoZSx7b3BlbihoKXtoLnNlZWthYmxlPSExfSxjbG9zZSgpe2M/LmJ1ZmZlcj8ubGVuZ3RoJiZjKDEwKX0scmVhZChoLGsscSx3KXtmb3IodmFyIHY9MCxDPTA7Qzx3O0MrKyl7dHJ5e3ZhciBHPWIoKX1jYXRjaChwYil7dGhyb3cgbmV3IE4oMjkpO31pZih2b2lkIDA9PT1HJiYwPT09dil0aHJvdyBuZXcgTig2KTtpZihudWxsPT09R3x8dm9pZCAwPT09RylicmVhazt2Kys7a1txK0NdPUd9diYmKGgubm9kZS5hdGltZT1EYXRlLm5vdygpKTtyZXR1cm4gdn0sd3JpdGUoaCxrLHEsdyl7Zm9yKHZhciB2PTA7djx3O3YrKyl0cnl7YyhrW3Erdl0pfWNhdGNoKEMpe3Rocm93IG5ldyBOKDI5KTt9dyYmKGgubm9kZS5tdGltZT1oLm5vZGUuY3RpbWU9RGF0ZS5ub3coKSk7cmV0dXJuIHZ9fSk7WWIoYSxkLGUpfXZhciBXPXt9O1xuZnVuY3Rpb24gR2MoYSxiLGMpe2lmKFwiL1wiPT09Yi5jaGFyQXQoMCkpcmV0dXJuIGI7YT0tMTAwPT09YT9cIi9cIjpUKGEpLnBhdGg7aWYoMD09Yi5sZW5ndGgpe2lmKCFjKXRocm93IG5ldyBOKDQ0KTtyZXR1cm4gYX1yZXR1cm4gYStcIi9cIitifVxuZnVuY3Rpb24gSGMoYSxiKXtFW2E+PjJdPWIuZGV2O0VbYSs0Pj4yXT1iLm1vZGU7RlthKzg+PjJdPWIubmxpbms7RVthKzEyPj4yXT1iLnVpZDtFW2ErMTY+PjJdPWIuZ2lkO0VbYSsyMD4+Ml09Yi5yZGV2O0hbYSsyND4+M109QmlnSW50KGIuc2l6ZSk7RVthKzMyPj4yXT00MDk2O0VbYSszNj4+Ml09Yi5ibG9ja3M7dmFyIGM9Yi5hdGltZS5nZXRUaW1lKCksZD1iLm10aW1lLmdldFRpbWUoKSxlPWIuY3RpbWUuZ2V0VGltZSgpO0hbYSs0MD4+M109QmlnSW50KE1hdGguZmxvb3IoYy8xRTMpKTtGW2ErNDg+PjJdPWMlMUUzKjFFNjtIW2ErNTY+PjNdPUJpZ0ludChNYXRoLmZsb29yKGQvMUUzKSk7RlthKzY0Pj4yXT1kJTFFMyoxRTY7SFthKzcyPj4zXT1CaWdJbnQoTWF0aC5mbG9vcihlLzFFMykpO0ZbYSs4MD4+Ml09ZSUxRTMqMUU2O0hbYSs4OD4+M109QmlnSW50KGIuaW5vKTtyZXR1cm4gMH1cbnZhciBJYz12b2lkIDAsSmM9KCk9Pnt2YXIgYT1FWytJYz4+Ml07SWMrPTQ7cmV0dXJuIGF9LEtjPTAsTGM9WzAsMzEsNjAsOTEsMTIxLDE1MiwxODIsMjEzLDI0NCwyNzQsMzA1LDMzNV0sTWM9WzAsMzEsNTksOTAsMTIwLDE1MSwxODEsMjEyLDI0MywyNzMsMzA0LDMzNF0sTmM9e30sT2M9YT0+e01hPWE7Y2J8fDA8S2N8fChmLm9uRXhpdD8uKGEpLExhPSEwKTtEYShhLG5ldyBZYShhKSl9LFBjPWE9PntpZighTGEpdHJ5e2lmKGEoKSwhKGNifHwwPEtjKSl0cnl7TWE9YT1NYSxPYyhhKX1jYXRjaChiKXtiIGluc3RhbmNlb2YgWWF8fFwidW53aW5kXCI9PWJ8fERhKDEsYil9fWNhdGNoKGIpe2IgaW5zdGFuY2VvZiBZYXx8XCJ1bndpbmRcIj09Ynx8RGEoMSxiKX19LFFjPXt9LFNjPSgpPT57aWYoIVJjKXt2YXIgYT17VVNFUjpcIndlYl91c2VyXCIsTE9HTkFNRTpcIndlYl91c2VyXCIsUEFUSDpcIi9cIixQV0Q6XCIvXCIsSE9NRTpcIi9ob21lL3dlYl91c2VyXCIsTEFORzooXCJvYmplY3RcIj09dHlwZW9mIG5hdmlnYXRvciYmXG5uYXZpZ2F0b3IubGFuZ3VhZ2VzJiZuYXZpZ2F0b3IubGFuZ3VhZ2VzWzBdfHxcIkNcIikucmVwbGFjZShcIi1cIixcIl9cIikrXCIuVVRGLThcIixfOkNhfHxcIi4vdGhpcy5wcm9ncmFtXCJ9LGI7Zm9yKGIgaW4gUWMpdm9pZCAwPT09UWNbYl0/ZGVsZXRlIGFbYl06YVtiXT1RY1tiXTt2YXIgYz1bXTtmb3IoYiBpbiBhKWMucHVzaChgJHtifT0ke2FbYl19YCk7UmM9Y31yZXR1cm4gUmN9LFJjLHhhPWE9Pnt2YXIgYj1oYShhKSsxLGM9eihiKTt1KGEseCxjLGIpO3JldHVybiBjfSxUYz0oYSxiLGMsZCk9Pnt2YXIgZT17c3RyaW5nOnY9Pnt2YXIgQz0wO251bGwhPT12JiZ2b2lkIDAhPT12JiYwIT09diYmKEM9eGEodikpO3JldHVybiBDfSxhcnJheTp2PT57dmFyIEM9eih2Lmxlbmd0aCk7cC5zZXQodixDKTtyZXR1cm4gQ319O2E9ZltcIl9cIithXTt2YXIgaD1bXSxrPTA7aWYoZClmb3IodmFyIHE9MDtxPGQubGVuZ3RoO3ErKyl7dmFyIHc9ZVtjW3FdXTt3PygwPT09ayYmKGs9c2EoKSksaFtxXT13KGRbcV0pKTpcbmhbcV09ZFtxXX1jPWEoLi4uaCk7cmV0dXJuIGM9ZnVuY3Rpb24odil7MCE9PWsmJndhKGspO3JldHVyblwic3RyaW5nXCI9PT1iP3Y/Qih4LHYpOlwiXCI6XCJib29sZWFuXCI9PT1iPyEhdjp2fShjKX0sZWE9MCxkYT0oYSxiKT0+e2I9MT09Yj96KGEubGVuZ3RoKTppYShhLmxlbmd0aCk7YS5zdWJhcnJheXx8YS5zbGljZXx8KGE9bmV3IFVpbnQ4QXJyYXkoYSkpO3guc2V0KGEsYik7cmV0dXJuIGJ9LFVjLFZjPVtdLFksQT1hPT57VWMuZGVsZXRlKFkuZ2V0KGEpKTtZLnNldChhLG51bGwpO1ZjLnB1c2goYSl9LEFhPShhLGIpPT57aWYoIVVjKXtVYz1uZXcgV2Vha01hcDt2YXIgYz1ZLmxlbmd0aDtpZihVYylmb3IodmFyIGQ9MDtkPDArYztkKyspe3ZhciBlPVkuZ2V0KGQpO2UmJlVjLnNldChlLGQpfX1pZihjPVVjLmdldChhKXx8MClyZXR1cm4gYztpZihWYy5sZW5ndGgpYz1WYy5wb3AoKTtlbHNle3RyeXtZLmdyb3coMSl9Y2F0Y2godyl7aWYoISh3IGluc3RhbmNlb2YgUmFuZ2VFcnJvcikpdGhyb3cgdztcbnRocm93XCJVbmFibGUgdG8gZ3JvdyB3YXNtIHRhYmxlLiBTZXQgQUxMT1dfVEFCTEVfR1JPV1RILlwiO31jPVkubGVuZ3RoLTF9dHJ5e1kuc2V0KGMsYSl9Y2F0Y2godyl7aWYoISh3IGluc3RhbmNlb2YgVHlwZUVycm9yKSl0aHJvdyB3O2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIFdlYkFzc2VtYmx5LkZ1bmN0aW9uKXt2YXIgaD1XZWJBc3NlbWJseS5GdW5jdGlvbjtkPXtpOlwiaTMyXCIsajpcImk2NFwiLGY6XCJmMzJcIixkOlwiZjY0XCIsZTpcImV4dGVybnJlZlwiLHA6XCJpMzJcIn07ZT17cGFyYW1ldGVyczpbXSxyZXN1bHRzOlwidlwiPT1iWzBdP1tdOltkW2JbMF1dXX07Zm9yKHZhciBrPTE7azxiLmxlbmd0aDsrK2spZS5wYXJhbWV0ZXJzLnB1c2goZFtiW2tdXSk7Yj1uZXcgaChlLGEpfWVsc2V7ZD1bMV07ZT1iLnNsaWNlKDAsMSk7Yj1iLnNsaWNlKDEpO2s9e2k6MTI3LHA6MTI3LGo6MTI2LGY6MTI1LGQ6MTI0LGU6MTExfTtkLnB1c2goOTYpO3ZhciBxPWIubGVuZ3RoOzEyOD5xP2QucHVzaChxKTpkLnB1c2gocSVcbjEyOHwxMjgscT4+Nyk7Zm9yKGggb2YgYilkLnB1c2goa1toXSk7XCJ2XCI9PWU/ZC5wdXNoKDApOmQucHVzaCgxLGtbZV0pO2I9WzAsOTcsMTE1LDEwOSwxLDAsMCwwLDFdO2g9ZC5sZW5ndGg7MTI4Pmg/Yi5wdXNoKGgpOmIucHVzaChoJTEyOHwxMjgsaD4+Nyk7Yi5wdXNoKC4uLmQpO2IucHVzaCgyLDcsMSwxLDEwMSwxLDEwMiwwLDAsNyw1LDEsMSwxMDIsMCwwKTtiPW5ldyBXZWJBc3NlbWJseS5Nb2R1bGUobmV3IFVpbnQ4QXJyYXkoYikpO2I9KG5ldyBXZWJBc3NlbWJseS5JbnN0YW5jZShiLHtlOntmOmF9fSkpLmV4cG9ydHMuZn1ZLnNldChjLGIpfVVjLnNldChhLGMpO3JldHVybiBjfTtSPUFycmF5KDQwOTYpO1diKE8sXCIvXCIpO1UoXCIvdG1wXCIpO1UoXCIvaG9tZVwiKTtVKFwiL2hvbWUvd2ViX3VzZXJcIik7XG4oZnVuY3Rpb24oKXtVKFwiL2RldlwiKTt3YigyNTkse3JlYWQ6KCk9PjAsd3JpdGU6KGQsZSxoLGspPT5rLFZhOigpPT4wfSk7WWIoXCIvZGV2L251bGxcIiwyNTkpO25iKDEyODAseWIpO25iKDE1MzYsemIpO1liKFwiL2Rldi90dHlcIiwxMjgwKTtZYihcIi9kZXYvdHR5MVwiLDE1MzYpO3ZhciBhPW5ldyBVaW50OEFycmF5KDEwMjQpLGI9MCxjPSgpPT57MD09PWImJihpYihhKSxiPWEuYnl0ZUxlbmd0aCk7cmV0dXJuIGFbLS1iXX07VihcInJhbmRvbVwiLGMpO1YoXCJ1cmFuZG9tXCIsYyk7VShcIi9kZXYvc2htXCIpO1UoXCIvZGV2L3NobS90bXBcIil9KSgpO1xuKGZ1bmN0aW9uKCl7VShcIi9wcm9jXCIpO3ZhciBhPVUoXCIvcHJvYy9zZWxmXCIpO1UoXCIvcHJvYy9zZWxmL2ZkXCIpO1diKHtYYSgpe3ZhciBiPUJiKGEsXCJmZFwiLDE2ODk1LDczKTtiLk1hPXtWYTpPLk1hLlZhfTtiLkxhPXtsb29rdXAoYyxkKXtjPStkO3ZhciBlPVQoYyk7Yz17cGFyZW50Om51bGwsWGE6e3piOlwiZmFrZVwifSxMYTp7cmVhZGxpbms6KCk9PmUucGF0aH0saWQ6YysxfTtyZXR1cm4gYy5wYXJlbnQ9Y30scmVhZGRpcigpe3JldHVybiBBcnJheS5mcm9tKEdiLmVudHJpZXMoKSkuZmlsdGVyKChbLGNdKT0+YykubWFwKChbY10pPT5jLnRvU3RyaW5nKCkpfX07cmV0dXJuIGJ9fSxcIi9wcm9jL3NlbGYvZmRcIil9KSgpO08udmI9bmV3IE4oNDQpO08udmIuc3RhY2s9XCI8Z2VuZXJpYyBlcnJvciwgbm8gc3RhY2s+XCI7XG52YXIgWGM9e2E6KGEsYixjLGQpPT5UYShgQXNzZXJ0aW9uIGZhaWxlZDogJHthP0IoeCxhKTpcIlwifSwgYXQ6IGArW2I/Yj9CKHgsYik6XCJcIjpcInVua25vd24gZmlsZW5hbWVcIixjLGQ/ZD9CKHgsZCk6XCJcIjpcInVua25vd24gZnVuY3Rpb25cIl0pLGk6ZnVuY3Rpb24oYSxiKXt0cnl7cmV0dXJuIGE9YT9CKHgsYSk6XCJcIixuYShhLGIpLDB9Y2F0Y2goYyl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFd8fFwiRXJybm9FcnJvclwiIT09Yy5uYW1lKXRocm93IGM7cmV0dXJuLWMuUGF9fSxMOmZ1bmN0aW9uKGEsYixjKXt0cnl7Yj1iP0IoeCxiKTpcIlwiO2I9R2MoYSxiKTtpZihjJi04KXJldHVybi0yODt2YXIgZD1TKGIseyRhOiEwfSkubm9kZTtpZighZClyZXR1cm4tNDQ7YT1cIlwiO2MmNCYmKGErPVwiclwiKTtjJjImJihhKz1cIndcIik7YyYxJiYoYSs9XCJ4XCIpO3JldHVybiBhJiZPYihkLGEpPy0yOjB9Y2F0Y2goZSl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFd8fFwiRXJybm9FcnJvclwiIT09ZS5uYW1lKXRocm93IGU7XG5yZXR1cm4tZS5QYX19LGo6ZnVuY3Rpb24oYSxiKXt0cnl7dmFyIGM9VChhKTtiYyhjLGMubm9kZSxiLCExKTtyZXR1cm4gMH1jYXRjaChkKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgV3x8XCJFcnJub0Vycm9yXCIhPT1kLm5hbWUpdGhyb3cgZDtyZXR1cm4tZC5QYX19LGg6ZnVuY3Rpb24oYSl7dHJ5e3ZhciBiPVQoYSk7VmIoYixiLm5vZGUse3RpbWVzdGFtcDpEYXRlLm5vdygpLEZiOiExfSk7cmV0dXJuIDB9Y2F0Y2goYyl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFd8fFwiRXJybm9FcnJvclwiIT09Yy5uYW1lKXRocm93IGM7cmV0dXJuLWMuUGF9fSxiOmZ1bmN0aW9uKGEsYixjKXtJYz1jO3RyeXt2YXIgZD1UKGEpO3N3aXRjaChiKXtjYXNlIDA6dmFyIGU9SmMoKTtpZigwPmUpYnJlYWs7Zm9yKDtHYltlXTspZSsrO3JldHVybiBVYihkLGUpLmZkO2Nhc2UgMTpjYXNlIDI6cmV0dXJuIDA7Y2FzZSAzOnJldHVybiBkLmZsYWdzO2Nhc2UgNDpyZXR1cm4gZT1KYygpLGQuZmxhZ3N8PWUsMDtcbmNhc2UgMTI6cmV0dXJuIGU9SmMoKSxOYVtlKzA+PjFdPTIsMDtjYXNlIDEzOmNhc2UgMTQ6cmV0dXJuIDB9cmV0dXJuLTI4fWNhdGNoKGgpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBXfHxcIkVycm5vRXJyb3JcIiE9PWgubmFtZSl0aHJvdyBoO3JldHVybi1oLlBhfX0sZzpmdW5jdGlvbihhLGIpe3RyeXt2YXIgYz1UKGEpLGQ9Yy5ub2RlLGU9Yy5NYS5UYTthPWU/YzpkO2U/Pz1kLkxhLlRhO1NiKGUpO3ZhciBoPWUoYSk7cmV0dXJuIEhjKGIsaCl9Y2F0Y2goayl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFd8fFwiRXJybm9FcnJvclwiIT09ay5uYW1lKXRocm93IGs7cmV0dXJuLWsuUGF9fSxIOmZ1bmN0aW9uKGEsYil7Yj0tOTAwNzE5OTI1NDc0MDk5Mj5ifHw5MDA3MTk5MjU0NzQwOTkyPGI/TmFOOk51bWJlcihiKTt0cnl7aWYoaXNOYU4oYikpcmV0dXJuIDYxO3ZhciBjPVQoYSk7aWYoMD5ifHwwPT09KGMuZmxhZ3MmMjA5NzE1NSkpdGhyb3cgbmV3IE4oMjgpO2NjKGMsYy5ub2RlLGIpO1xucmV0dXJuIDB9Y2F0Y2goZCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFd8fFwiRXJybm9FcnJvclwiIT09ZC5uYW1lKXRocm93IGQ7cmV0dXJuLWQuUGF9fSxHOmZ1bmN0aW9uKGEsYil7dHJ5e2lmKDA9PT1iKXJldHVybi0yODt2YXIgYz1oYShcIi9cIikrMTtpZihiPGMpcmV0dXJuLTY4O3UoXCIvXCIseCxhLGIpO3JldHVybiBjfWNhdGNoKGQpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBXfHxcIkVycm5vRXJyb3JcIiE9PWQubmFtZSl0aHJvdyBkO3JldHVybi1kLlBhfX0sSzpmdW5jdGlvbihhLGIpe3RyeXtyZXR1cm4gYT1hP0IoeCxhKTpcIlwiLEhjKGIsYWMoYSwhMCkpfWNhdGNoKGMpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBXfHxcIkVycm5vRXJyb3JcIiE9PWMubmFtZSl0aHJvdyBjO3JldHVybi1jLlBhfX0sQzpmdW5jdGlvbihhLGIsYyl7dHJ5e3JldHVybiBiPWI/Qih4LGIpOlwiXCIsYj1HYyhhLGIpLFUoYixjKSwwfWNhdGNoKGQpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBXfHxcIkVycm5vRXJyb3JcIiE9PVxuZC5uYW1lKXRocm93IGQ7cmV0dXJuLWQuUGF9fSxKOmZ1bmN0aW9uKGEsYixjLGQpe3RyeXtiPWI/Qih4LGIpOlwiXCI7dmFyIGU9ZCYyNTY7Yj1HYyhhLGIsZCY0MDk2KTtyZXR1cm4gSGMoYyxlP2FjKGIsITApOmFjKGIpKX1jYXRjaChoKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgV3x8XCJFcnJub0Vycm9yXCIhPT1oLm5hbWUpdGhyb3cgaDtyZXR1cm4taC5QYX19LHg6ZnVuY3Rpb24oYSxiLGMsZCl7SWM9ZDt0cnl7Yj1iP0IoeCxiKTpcIlwiO2I9R2MoYSxiKTt2YXIgZT1kP0pjKCk6MDtyZXR1cm4gb2EoYixjLGUpLmZkfWNhdGNoKGgpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBXfHxcIkVycm5vRXJyb3JcIiE9PWgubmFtZSl0aHJvdyBoO3JldHVybi1oLlBhfX0sdjpmdW5jdGlvbihhLGIsYyxkKXt0cnl7Yj1iP0IoeCxiKTpcIlwiO2I9R2MoYSxiKTtpZigwPj1kKXJldHVybi0yODt2YXIgZT1TKGIpLm5vZGU7aWYoIWUpdGhyb3cgbmV3IE4oNDQpO2lmKCFlLkxhLnJlYWRsaW5rKXRocm93IG5ldyBOKDI4KTtcbnZhciBoPWUuTGEucmVhZGxpbmsoZSk7dmFyIGs9TWF0aC5taW4oZCxoYShoKSkscT1wW2Mra107dShoLHgsYyxkKzEpO3BbYytrXT1xO3JldHVybiBrfWNhdGNoKHcpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBXfHxcIkVycm5vRXJyb3JcIiE9PXcubmFtZSl0aHJvdyB3O3JldHVybi13LlBhfX0sdTpmdW5jdGlvbihhKXt0cnl7cmV0dXJuIGE9YT9CKHgsYSk6XCJcIiwkYihhKSwwfWNhdGNoKGIpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBXfHxcIkVycm5vRXJyb3JcIiE9PWIubmFtZSl0aHJvdyBiO3JldHVybi1iLlBhfX0sZjpmdW5jdGlvbihhLGIpe3RyeXtyZXR1cm4gYT1hP0IoeCxhKTpcIlwiLEhjKGIsYWMoYSkpfWNhdGNoKGMpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBXfHxcIkVycm5vRXJyb3JcIiE9PWMubmFtZSl0aHJvdyBjO3JldHVybi1jLlBhfX0scjpmdW5jdGlvbihhLGIsYyl7dHJ5e3JldHVybiBiPWI/Qih4LGIpOlwiXCIsYj1HYyhhLGIpLDA9PT1jP3phKGIpOjUxMj09PWM/JGIoYik6XG5UYShcIkludmFsaWQgZmxhZ3MgcGFzc2VkIHRvIHVubGlua2F0XCIpLDB9Y2F0Y2goZCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFd8fFwiRXJybm9FcnJvclwiIT09ZC5uYW1lKXRocm93IGQ7cmV0dXJuLWQuUGF9fSxxOmZ1bmN0aW9uKGEsYixjKXt0cnl7Yj1iP0IoeCxiKTpcIlwiO2I9R2MoYSxiLCEwKTt2YXIgZD1EYXRlLm5vdygpLGUsaDtpZihjKXt2YXIgaz1GW2M+PjJdKzQyOTQ5NjcyOTYqRVtjKzQ+PjJdLHE9RVtjKzg+PjJdOzEwNzM3NDE4MjM9PXE/ZT1kOjEwNzM3NDE4MjI9PXE/ZT1udWxsOmU9MUUzKmsrcS8xRTY7Yys9MTY7az1GW2M+PjJdKzQyOTQ5NjcyOTYqRVtjKzQ+PjJdO3E9RVtjKzg+PjJdOzEwNzM3NDE4MjM9PXE/aD1kOjEwNzM3NDE4MjI9PXE/aD1udWxsOmg9MUUzKmsrcS8xRTZ9ZWxzZSBoPWU9ZDtpZihudWxsIT09KGg/P2UpKXthPWU7dmFyIHc9UyhiLHskYTohMH0pLm5vZGU7U2Iody5MYS5VYSkodyx7YXRpbWU6YSxtdGltZTpofSl9cmV0dXJuIDB9Y2F0Y2godil7aWYoXCJ1bmRlZmluZWRcIj09XG50eXBlb2YgV3x8XCJFcnJub0Vycm9yXCIhPT12Lm5hbWUpdGhyb3cgdjtyZXR1cm4tdi5QYX19LG06KCk9PlRhKFwiXCIpLGw6KCk9PntjYj0hMTtLYz0wfSxBOmZ1bmN0aW9uKGEsYil7YT0tOTAwNzE5OTI1NDc0MDk5Mj5hfHw5MDA3MTk5MjU0NzQwOTkyPGE/TmFOOk51bWJlcihhKTthPW5ldyBEYXRlKDFFMyphKTtFW2I+PjJdPWEuZ2V0U2Vjb25kcygpO0VbYis0Pj4yXT1hLmdldE1pbnV0ZXMoKTtFW2IrOD4+Ml09YS5nZXRIb3VycygpO0VbYisxMj4+Ml09YS5nZXREYXRlKCk7RVtiKzE2Pj4yXT1hLmdldE1vbnRoKCk7RVtiKzIwPj4yXT1hLmdldEZ1bGxZZWFyKCktMTkwMDtFW2IrMjQ+PjJdPWEuZ2V0RGF5KCk7dmFyIGM9YS5nZXRGdWxsWWVhcigpO0VbYisyOD4+Ml09KDAhPT1jJTR8fDA9PT1jJTEwMCYmMCE9PWMlNDAwP01jOkxjKVthLmdldE1vbnRoKCldK2EuZ2V0RGF0ZSgpLTF8MDtFW2IrMzY+PjJdPS0oNjAqYS5nZXRUaW1lem9uZU9mZnNldCgpKTtjPShuZXcgRGF0ZShhLmdldEZ1bGxZZWFyKCksXG42LDEpKS5nZXRUaW1lem9uZU9mZnNldCgpO3ZhciBkPShuZXcgRGF0ZShhLmdldEZ1bGxZZWFyKCksMCwxKSkuZ2V0VGltZXpvbmVPZmZzZXQoKTtFW2IrMzI+PjJdPShjIT1kJiZhLmdldFRpbWV6b25lT2Zmc2V0KCk9PU1hdGgubWluKGQsYykpfDB9LHk6ZnVuY3Rpb24oYSxiLGMsZCxlLGgsayl7ZT0tOTAwNzE5OTI1NDc0MDk5Mj5lfHw5MDA3MTk5MjU0NzQwOTkyPGU/TmFOOk51bWJlcihlKTt0cnl7aWYoaXNOYU4oZSkpcmV0dXJuIDYxO3ZhciBxPVQoZCk7aWYoMCE9PShiJjIpJiYwPT09KGMmMikmJjIhPT0ocS5mbGFncyYyMDk3MTU1KSl0aHJvdyBuZXcgTigyKTtpZigxPT09KHEuZmxhZ3MmMjA5NzE1NSkpdGhyb3cgbmV3IE4oMik7aWYoIXEuTWEuaWIpdGhyb3cgbmV3IE4oNDMpO2lmKCFhKXRocm93IG5ldyBOKDI4KTt2YXIgdz1xLk1hLmliKHEsYSxlLGIsYyk7dmFyIHY9dy5LYjtFW2g+PjJdPXcuQWI7RltrPj4yXT12O3JldHVybiAwfWNhdGNoKEMpe2lmKFwidW5kZWZpbmVkXCI9PVxudHlwZW9mIFd8fFwiRXJybm9FcnJvclwiIT09Qy5uYW1lKXRocm93IEM7cmV0dXJuLUMuUGF9fSx6OmZ1bmN0aW9uKGEsYixjLGQsZSxoKXtoPS05MDA3MTk5MjU0NzQwOTkyPmh8fDkwMDcxOTkyNTQ3NDA5OTI8aD9OYU46TnVtYmVyKGgpO3RyeXt2YXIgaz1UKGUpO2lmKGMmMil7Yz1oO2lmKDMyNzY4IT09KGsubm9kZS5tb2RlJjYxNDQwKSl0aHJvdyBuZXcgTig0Myk7aWYoIShkJjIpKXt2YXIgcT14LnNsaWNlKGEsYStiKTtrLk1hLmpiJiZrLk1hLmpiKGsscSxjLGIsZCl9fX1jYXRjaCh3KXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgV3x8XCJFcnJub0Vycm9yXCIhPT13Lm5hbWUpdGhyb3cgdztyZXR1cm4tdy5QYX19LG46KGEsYik9PntOY1thXSYmKGNsZWFyVGltZW91dChOY1thXS5pZCksZGVsZXRlIE5jW2FdKTtpZighYilyZXR1cm4gMDt2YXIgYz1zZXRUaW1lb3V0KCgpPT57ZGVsZXRlIE5jW2FdO1BjKCgpPT5XYyhhLHBlcmZvcm1hbmNlLm5vdygpKSl9LGIpO05jW2FdPXtpZDpjLFxuWGI6Yn07cmV0dXJuIDB9LEI6KGEsYixjLGQpPT57dmFyIGU9KG5ldyBEYXRlKS5nZXRGdWxsWWVhcigpLGg9KG5ldyBEYXRlKGUsMCwxKSkuZ2V0VGltZXpvbmVPZmZzZXQoKTtlPShuZXcgRGF0ZShlLDYsMSkpLmdldFRpbWV6b25lT2Zmc2V0KCk7RlthPj4yXT02MCpNYXRoLm1heChoLGUpO0VbYj4+Ml09TnVtYmVyKGghPWUpO2I9az0+e3ZhciBxPU1hdGguYWJzKGspO3JldHVybmBVVEMkezA8PWs/XCItXCI6XCIrXCJ9JHtTdHJpbmcoTWF0aC5mbG9vcihxLzYwKSkucGFkU3RhcnQoMixcIjBcIil9JHtTdHJpbmcocSU2MCkucGFkU3RhcnQoMixcIjBcIil9YH07YT1iKGgpO2I9YihlKTtlPGg/KHUoYSx4LGMsMTcpLHUoYix4LGQsMTcpKToodShhLHgsZCwxNyksdShiLHgsYywxNykpfSxkOigpPT5EYXRlLm5vdygpLHM6KCk9PjIxNDc0ODM2NDgsYzooKT0+cGVyZm9ybWFuY2Uubm93KCksbzphPT57dmFyIGI9eC5sZW5ndGg7YT4+Pj0wO2lmKDIxNDc0ODM2NDg8YSlyZXR1cm4hMTtmb3IodmFyIGM9XG4xOzQ+PWM7Yyo9Mil7dmFyIGQ9YiooMSsuMi9jKTtkPU1hdGgubWluKGQsYSsxMDA2NjMyOTYpO2E6e2Q9KE1hdGgubWluKDIxNDc0ODM2NDgsNjU1MzYqTWF0aC5jZWlsKE1hdGgubWF4KGEsZCkvNjU1MzYpKS1LYS5idWZmZXIuYnl0ZUxlbmd0aCs2NTUzNSkvNjU1MzZ8MDt0cnl7S2EuZ3JvdyhkKTtRYSgpO3ZhciBlPTE7YnJlYWsgYX1jYXRjaChoKXt9ZT12b2lkIDB9aWYoZSlyZXR1cm4hMH1yZXR1cm4hMX0sRTooYSxiKT0+e3ZhciBjPTA7U2MoKS5mb3JFYWNoKChkLGUpPT57dmFyIGg9YitjO2U9RlthKzQqZT4+Ml09aDtmb3IoaD0wO2g8ZC5sZW5ndGg7KytoKXBbZSsrXT1kLmNoYXJDb2RlQXQoaCk7cFtlXT0wO2MrPWQubGVuZ3RoKzF9KTtyZXR1cm4gMH0sRjooYSxiKT0+e3ZhciBjPVNjKCk7RlthPj4yXT1jLmxlbmd0aDt2YXIgZD0wO2MuZm9yRWFjaChlPT5kKz1lLmxlbmd0aCsxKTtGW2I+PjJdPWQ7cmV0dXJuIDB9LGU6ZnVuY3Rpb24oYSl7dHJ5e3ZhciBiPVQoYSk7XG5xYShiKTtyZXR1cm4gMH1jYXRjaChjKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgV3x8XCJFcnJub0Vycm9yXCIhPT1jLm5hbWUpdGhyb3cgYztyZXR1cm4gYy5QYX19LHA6ZnVuY3Rpb24oYSxiKXt0cnl7dmFyIGM9VChhKTtwW2JdPWMudHR5PzI6UChjLm1vZGUpPzM6NDA5NjA9PT0oYy5tb2RlJjYxNDQwKT83OjQ7TmFbYisyPj4xXT0wO0hbYis4Pj4zXT1CaWdJbnQoMCk7SFtiKzE2Pj4zXT1CaWdJbnQoMCk7cmV0dXJuIDB9Y2F0Y2goZCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFd8fFwiRXJybm9FcnJvclwiIT09ZC5uYW1lKXRocm93IGQ7cmV0dXJuIGQuUGF9fSx3OmZ1bmN0aW9uKGEsYixjLGQpe3RyeXthOnt2YXIgZT1UKGEpO2E9Yjtmb3IodmFyIGgsaz1iPTA7azxjO2srKyl7dmFyIHE9RlthPj4yXSx3PUZbYSs0Pj4yXTthKz04O3ZhciB2PUVjKGUscCxxLHcsaCk7aWYoMD52KXt2YXIgQz0tMTticmVhayBhfWIrPXY7aWYodjx3KWJyZWFrO1widW5kZWZpbmVkXCIhPXR5cGVvZiBoJiZcbihoKz12KX1DPWJ9RltkPj4yXT1DO3JldHVybiAwfWNhdGNoKEcpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBXfHxcIkVycm5vRXJyb3JcIiE9PUcubmFtZSl0aHJvdyBHO3JldHVybiBHLlBhfX0sRDpmdW5jdGlvbihhLGIsYyxkKXtiPS05MDA3MTk5MjU0NzQwOTkyPmJ8fDkwMDcxOTkyNTQ3NDA5OTI8Yj9OYU46TnVtYmVyKGIpO3RyeXtpZihpc05hTihiKSlyZXR1cm4gNjE7dmFyIGU9VChhKTttYyhlLGIsYyk7SFtkPj4zXT1CaWdJbnQoZS5wb3NpdGlvbik7ZS5vYiYmMD09PWImJjA9PT1jJiYoZS5vYj1udWxsKTtyZXR1cm4gMH1jYXRjaChoKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgV3x8XCJFcnJub0Vycm9yXCIhPT1oLm5hbWUpdGhyb3cgaDtyZXR1cm4gaC5QYX19LEk6ZnVuY3Rpb24oYSl7dHJ5e3ZhciBiPVQoYSk7cmV0dXJuIGIuTWE/LmZzeW5jP2IuTWEuZnN5bmMoYik6MH1jYXRjaChjKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgV3x8XCJFcnJub0Vycm9yXCIhPT1jLm5hbWUpdGhyb3cgYztcbnJldHVybiBjLlBhfX0sdDpmdW5jdGlvbihhLGIsYyxkKXt0cnl7YTp7dmFyIGU9VChhKTthPWI7Zm9yKHZhciBoLGs9Yj0wO2s8YztrKyspe3ZhciBxPUZbYT4+Ml0sdz1GW2ErND4+Ml07YSs9ODt2YXIgdj1wYShlLHAscSx3LGgpO2lmKDA+dil7dmFyIEM9LTE7YnJlYWsgYX1iKz12O2lmKHY8dylicmVhaztcInVuZGVmaW5lZFwiIT10eXBlb2YgaCYmKGgrPXYpfUM9Yn1GW2Q+PjJdPUM7cmV0dXJuIDB9Y2F0Y2goRyl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFd8fFwiRXJybm9FcnJvclwiIT09Ry5uYW1lKXRocm93IEc7cmV0dXJuIEcuUGF9fSxrOk9jfSxaO1xuKGFzeW5jIGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShjKXtaPWMuZXhwb3J0cztLYT1aLk07UWEoKTtZPVouTztLLS07Zi5tb25pdG9yUnVuRGVwZW5kZW5jaWVzPy4oSyk7MD09SyYmU2EmJihjPVNhLFNhPW51bGwsYygpKTtyZXR1cm4gWn1LKys7Zi5tb25pdG9yUnVuRGVwZW5kZW5jaWVzPy4oSyk7dmFyIGI9e2E6WGN9O2lmKGYuaW5zdGFudGlhdGVXYXNtKXJldHVybiBuZXcgUHJvbWlzZShjPT57Zi5pbnN0YW50aWF0ZVdhc20oYiwoZCxlKT0+e2EoZCxlKTtjKGQuZXhwb3J0cyl9KX0pO1VhPz89Zi5sb2NhdGVGaWxlP2YubG9jYXRlRmlsZShcInNxbC13YXNtLndhc21cIixEKTpEK1wic3FsLXdhc20ud2FzbVwiO3JldHVybiBhKChhd2FpdCBYYShiKSkuaW5zdGFuY2UpfSkoKTtmLl9zcWxpdGUzX2ZyZWU9YT0+KGYuX3NxbGl0ZTNfZnJlZT1aLlApKGEpO2YuX3NxbGl0ZTNfdmFsdWVfdGV4dD1hPT4oZi5fc3FsaXRlM192YWx1ZV90ZXh0PVouUSkoYSk7XG5mLl9zcWxpdGUzX3ByZXBhcmVfdjI9KGEsYixjLGQsZSk9PihmLl9zcWxpdGUzX3ByZXBhcmVfdjI9Wi5SKShhLGIsYyxkLGUpO2YuX3NxbGl0ZTNfc3RlcD1hPT4oZi5fc3FsaXRlM19zdGVwPVouUykoYSk7Zi5fc3FsaXRlM19yZXNldD1hPT4oZi5fc3FsaXRlM19yZXNldD1aLlQpKGEpO2YuX3NxbGl0ZTNfZXhlYz0oYSxiLGMsZCxlKT0+KGYuX3NxbGl0ZTNfZXhlYz1aLlUpKGEsYixjLGQsZSk7Zi5fc3FsaXRlM19maW5hbGl6ZT1hPT4oZi5fc3FsaXRlM19maW5hbGl6ZT1aLlYpKGEpO2YuX3NxbGl0ZTNfY29sdW1uX25hbWU9KGEsYik9PihmLl9zcWxpdGUzX2NvbHVtbl9uYW1lPVouVykoYSxiKTtmLl9zcWxpdGUzX2NvbHVtbl90ZXh0PShhLGIpPT4oZi5fc3FsaXRlM19jb2x1bW5fdGV4dD1aLlgpKGEsYik7Zi5fc3FsaXRlM19jb2x1bW5fdHlwZT0oYSxiKT0+KGYuX3NxbGl0ZTNfY29sdW1uX3R5cGU9Wi5ZKShhLGIpO1xuZi5fc3FsaXRlM19lcnJtc2c9YT0+KGYuX3NxbGl0ZTNfZXJybXNnPVouWikoYSk7Zi5fc3FsaXRlM19jbGVhcl9iaW5kaW5ncz1hPT4oZi5fc3FsaXRlM19jbGVhcl9iaW5kaW5ncz1aLl8pKGEpO2YuX3NxbGl0ZTNfdmFsdWVfYmxvYj1hPT4oZi5fc3FsaXRlM192YWx1ZV9ibG9iPVouJCkoYSk7Zi5fc3FsaXRlM192YWx1ZV9ieXRlcz1hPT4oZi5fc3FsaXRlM192YWx1ZV9ieXRlcz1aLmFhKShhKTtmLl9zcWxpdGUzX3ZhbHVlX2RvdWJsZT1hPT4oZi5fc3FsaXRlM192YWx1ZV9kb3VibGU9Wi5iYSkoYSk7Zi5fc3FsaXRlM192YWx1ZV9pbnQ9YT0+KGYuX3NxbGl0ZTNfdmFsdWVfaW50PVouY2EpKGEpO2YuX3NxbGl0ZTNfdmFsdWVfdHlwZT1hPT4oZi5fc3FsaXRlM192YWx1ZV90eXBlPVouZGEpKGEpO2YuX3NxbGl0ZTNfcmVzdWx0X2Jsb2I9KGEsYixjLGQpPT4oZi5fc3FsaXRlM19yZXN1bHRfYmxvYj1aLmVhKShhLGIsYyxkKTtcbmYuX3NxbGl0ZTNfcmVzdWx0X2RvdWJsZT0oYSxiKT0+KGYuX3NxbGl0ZTNfcmVzdWx0X2RvdWJsZT1aLmZhKShhLGIpO2YuX3NxbGl0ZTNfcmVzdWx0X2Vycm9yPShhLGIsYyk9PihmLl9zcWxpdGUzX3Jlc3VsdF9lcnJvcj1aLmdhKShhLGIsYyk7Zi5fc3FsaXRlM19yZXN1bHRfaW50PShhLGIpPT4oZi5fc3FsaXRlM19yZXN1bHRfaW50PVouaGEpKGEsYik7Zi5fc3FsaXRlM19yZXN1bHRfaW50NjQ9KGEsYik9PihmLl9zcWxpdGUzX3Jlc3VsdF9pbnQ2ND1aLmlhKShhLGIpO2YuX3NxbGl0ZTNfcmVzdWx0X251bGw9YT0+KGYuX3NxbGl0ZTNfcmVzdWx0X251bGw9Wi5qYSkoYSk7Zi5fc3FsaXRlM19yZXN1bHRfdGV4dD0oYSxiLGMsZCk9PihmLl9zcWxpdGUzX3Jlc3VsdF90ZXh0PVoua2EpKGEsYixjLGQpO2YuX3NxbGl0ZTNfYWdncmVnYXRlX2NvbnRleHQ9KGEsYik9PihmLl9zcWxpdGUzX2FnZ3JlZ2F0ZV9jb250ZXh0PVoubGEpKGEsYik7XG5mLl9zcWxpdGUzX2NvbHVtbl9jb3VudD1hPT4oZi5fc3FsaXRlM19jb2x1bW5fY291bnQ9Wi5tYSkoYSk7Zi5fc3FsaXRlM19kYXRhX2NvdW50PWE9PihmLl9zcWxpdGUzX2RhdGFfY291bnQ9Wi5uYSkoYSk7Zi5fc3FsaXRlM19jb2x1bW5fYmxvYj0oYSxiKT0+KGYuX3NxbGl0ZTNfY29sdW1uX2Jsb2I9Wi5vYSkoYSxiKTtmLl9zcWxpdGUzX2NvbHVtbl9ieXRlcz0oYSxiKT0+KGYuX3NxbGl0ZTNfY29sdW1uX2J5dGVzPVoucGEpKGEsYik7Zi5fc3FsaXRlM19jb2x1bW5fZG91YmxlPShhLGIpPT4oZi5fc3FsaXRlM19jb2x1bW5fZG91YmxlPVoucWEpKGEsYik7Zi5fc3FsaXRlM19iaW5kX2Jsb2I9KGEsYixjLGQsZSk9PihmLl9zcWxpdGUzX2JpbmRfYmxvYj1aLnJhKShhLGIsYyxkLGUpO2YuX3NxbGl0ZTNfYmluZF9kb3VibGU9KGEsYixjKT0+KGYuX3NxbGl0ZTNfYmluZF9kb3VibGU9Wi5zYSkoYSxiLGMpO1xuZi5fc3FsaXRlM19iaW5kX2ludD0oYSxiLGMpPT4oZi5fc3FsaXRlM19iaW5kX2ludD1aLnRhKShhLGIsYyk7Zi5fc3FsaXRlM19iaW5kX3RleHQ9KGEsYixjLGQsZSk9PihmLl9zcWxpdGUzX2JpbmRfdGV4dD1aLnVhKShhLGIsYyxkLGUpO2YuX3NxbGl0ZTNfYmluZF9wYXJhbWV0ZXJfaW5kZXg9KGEsYik9PihmLl9zcWxpdGUzX2JpbmRfcGFyYW1ldGVyX2luZGV4PVoudmEpKGEsYik7Zi5fc3FsaXRlM19zcWw9YT0+KGYuX3NxbGl0ZTNfc3FsPVoud2EpKGEpO2YuX3NxbGl0ZTNfbm9ybWFsaXplZF9zcWw9YT0+KGYuX3NxbGl0ZTNfbm9ybWFsaXplZF9zcWw9Wi54YSkoYSk7Zi5fc3FsaXRlM19jaGFuZ2VzPWE9PihmLl9zcWxpdGUzX2NoYW5nZXM9Wi55YSkoYSk7Zi5fc3FsaXRlM19jbG9zZV92Mj1hPT4oZi5fc3FsaXRlM19jbG9zZV92Mj1aLnphKShhKTtcbmYuX3NxbGl0ZTNfY3JlYXRlX2Z1bmN0aW9uX3YyPShhLGIsYyxkLGUsaCxrLHEsdyk9PihmLl9zcWxpdGUzX2NyZWF0ZV9mdW5jdGlvbl92Mj1aLkFhKShhLGIsYyxkLGUsaCxrLHEsdyk7Zi5fc3FsaXRlM191cGRhdGVfaG9vaz0oYSxiLGMpPT4oZi5fc3FsaXRlM191cGRhdGVfaG9vaz1aLkJhKShhLGIsYyk7Zi5fc3FsaXRlM19vcGVuPShhLGIpPT4oZi5fc3FsaXRlM19vcGVuPVouQ2EpKGEsYik7dmFyIGlhPWYuX21hbGxvYz1hPT4oaWE9Zi5fbWFsbG9jPVouRGEpKGEpLGZhPWYuX2ZyZWU9YT0+KGZhPWYuX2ZyZWU9Wi5FYSkoYSk7Zi5fUmVnaXN0ZXJFeHRlbnNpb25GdW5jdGlvbnM9YT0+KGYuX1JlZ2lzdGVyRXh0ZW5zaW9uRnVuY3Rpb25zPVouRmEpKGEpO3ZhciBEYj0oYSxiKT0+KERiPVouR2EpKGEsYiksV2M9KGEsYik9PihXYz1aLkhhKShhLGIpLHdhPWE9Pih3YT1aLklhKShhKSx6PWE9Pih6PVouSmEpKGEpLHNhPSgpPT4oc2E9Wi5LYSkoKTtcbmYuc3RhY2tTYXZlPSgpPT5zYSgpO2Yuc3RhY2tSZXN0b3JlPWE9PndhKGEpO2Yuc3RhY2tBbGxvYz1hPT56KGEpO2YuY3dyYXA9KGEsYixjLGQpPT57dmFyIGU9IWN8fGMuZXZlcnkoaD0+XCJudW1iZXJcIj09PWh8fFwiYm9vbGVhblwiPT09aCk7cmV0dXJuXCJzdHJpbmdcIiE9PWImJmUmJiFkP2ZbXCJfXCIrYV06KC4uLmgpPT5UYyhhLGIsYyxoKX07Zi5hZGRGdW5jdGlvbj1BYTtmLnJlbW92ZUZ1bmN0aW9uPUE7Zi5VVEY4VG9TdHJpbmc9dWE7Zi5BTExPQ19OT1JNQUw9ZWE7Zi5hbGxvY2F0ZT1kYTtmLmFsbG9jYXRlVVRGOE9uU3RhY2s9eGE7XG5mdW5jdGlvbiBZYygpe2Z1bmN0aW9uIGEoKXtmLmNhbGxlZFJ1bj0hMDtpZighTGEpe2lmKCFmLm5vRlNJbml0JiYhSWIpe3ZhciBiLGM7SWI9ITA7ZD8/PWYuc3RkaW47Yj8/PWYuc3Rkb3V0O2M/Pz1mLnN0ZGVycjtkP1YoXCJzdGRpblwiLGQpOlpiKFwiL2Rldi90dHlcIixcIi9kZXYvc3RkaW5cIik7Yj9WKFwic3Rkb3V0XCIsbnVsbCxiKTpaYihcIi9kZXYvdHR5XCIsXCIvZGV2L3N0ZG91dFwiKTtjP1YoXCJzdGRlcnJcIixudWxsLGMpOlpiKFwiL2Rldi90dHkxXCIsXCIvZGV2L3N0ZGVyclwiKTtvYShcIi9kZXYvc3RkaW5cIiwwKTtvYShcIi9kZXYvc3Rkb3V0XCIsMSk7b2EoXCIvZGV2L3N0ZGVyclwiLDEpfVouTigpO0piPSExO2Yub25SdW50aW1lSW5pdGlhbGl6ZWQ/LigpO2lmKGYucG9zdFJ1bilmb3IoXCJmdW5jdGlvblwiPT10eXBlb2YgZi5wb3N0UnVuJiYoZi5wb3N0UnVuPVtmLnBvc3RSdW5dKTtmLnBvc3RSdW4ubGVuZ3RoOyl7dmFyIGQ9Zi5wb3N0UnVuLnNoaWZ0KCk7JGEudW5zaGlmdChkKX1aYSgkYSl9fVxuaWYoMDxLKVNhPVljO2Vsc2V7aWYoZi5wcmVSdW4pZm9yKFwiZnVuY3Rpb25cIj09dHlwZW9mIGYucHJlUnVuJiYoZi5wcmVSdW49W2YucHJlUnVuXSk7Zi5wcmVSdW4ubGVuZ3RoOyliYigpO1phKGFiKTswPEs/U2E9WWM6Zi5zZXRTdGF0dXM/KGYuc2V0U3RhdHVzKFwiUnVubmluZy4uLlwiKSxzZXRUaW1lb3V0KCgpPT57c2V0VGltZW91dCgoKT0+Zi5zZXRTdGF0dXMoXCJcIiksMSk7YSgpfSwxKSk6YSgpfX1pZihmLnByZUluaXQpZm9yKFwiZnVuY3Rpb25cIj09dHlwZW9mIGYucHJlSW5pdCYmKGYucHJlSW5pdD1bZi5wcmVJbml0XSk7MDxmLnByZUluaXQubGVuZ3RoOylmLnByZUluaXQucG9wKCkoKTtZYygpO1xuXG5cbiAgICAgICAgLy8gVGhlIHNoZWxsLXByZS5qcyBhbmQgZW1jYy1nZW5lcmF0ZWQgY29kZSBnb2VzIGFib3ZlXG4gICAgICAgIHJldHVybiBNb2R1bGU7XG4gICAgfSk7IC8vIFRoZSBlbmQgb2YgdGhlIHByb21pc2UgYmVpbmcgcmV0dXJuZWRcblxuICByZXR1cm4gaW5pdFNxbEpzUHJvbWlzZTtcbn0gLy8gVGhlIGVuZCBvZiBvdXIgaW5pdFNxbEpzIGZ1bmN0aW9uXG5cbi8vIFRoaXMgYml0IGJlbG93IGlzIGNvcGllZCBhbG1vc3QgZXhhY3RseSBmcm9tIHdoYXQgeW91IGdldCB3aGVuIHlvdSB1c2UgdGhlIE1PRFVMQVJJWkU9MSBmbGFnIHdpdGggZW1jY1xuLy8gSG93ZXZlciwgd2UgZG9uJ3Qgd2FudCB0byB1c2UgdGhlIGVtY2MgbW9kdWxhcml6YXRpb24uIFNlZSBzaGVsbC1wcmUuanNcbmlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpe1xuICAgIG1vZHVsZS5leHBvcnRzID0gaW5pdFNxbEpzO1xuICAgIC8vIFRoaXMgd2lsbCBhbGxvdyB0aGUgbW9kdWxlIHRvIGJlIHVzZWQgaW4gRVM2IG9yIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGluaXRTcWxKcztcbn1cbmVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lWydhbWQnXSkge1xuICAgIGRlZmluZShbXSwgZnVuY3Rpb24oKSB7IHJldHVybiBpbml0U3FsSnM7IH0pO1xufVxuZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKXtcbiAgICBleHBvcnRzW1wiTW9kdWxlXCJdID0gaW5pdFNxbEpzO1xufVxuIiwgImltcG9ydCB7IGRvd25sb2FkRmlsZSwgZ2V0TGF0ZXN0RGljdGlvbmFyeVVybCB9IGZyb20gXCIuL2RpY3Rpb25hcnkvZG93bmxvYWRcIjtcbmltcG9ydCB7IERPV05MT0FEX1BBVEgsIERCX1BBVEgsIFNRTElURV9XQVNNX1BBVEggfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHBvcHVsYXRlVGFibGVzIH0gZnJvbSBcIi4vZGljdGlvbmFyeS9wb3B1bGF0ZVwiO1xuaW1wb3J0IHsgc2hvd1RvYXN0LCBUb2FzdCB9IGZyb20gXCJAcmF5Y2FzdC9hcGlcIjtcbmltcG9ydCBpbml0U3FsSnMgZnJvbSBcInNxbC5qc1wiO1xuaW1wb3J0IGZzIGZyb20gXCJub2RlOmZzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIENvbW1hbmQoKSB7XG4gIC8vIFVzZSBhYm9ydCBjb250cm9sbGVyIHRvIGFsbG93IGNhbmNlbGxhdGlvbiBvZiB1cGRhdGUgcHJvY2Vzc1xuICBjb25zdCBhYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gIGNvbnN0IHsgc2lnbmFsOiBhYm9ydFNpZ25hbCB9ID0gYWJvcnRDb250cm9sbGVyO1xuICBhYm9ydFNpZ25hbC5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgKCkgPT4ge1xuICAgIHNob3dUb2FzdCh7XG4gICAgICBzdHlsZTogVG9hc3QuU3R5bGUuU3VjY2VzcyxcbiAgICAgIHRpdGxlOiBcIkRpY3Rpb25hcnkgdXBkYXRlIGNhbmNlbGxlZFwiLFxuICAgICAgbWVzc2FnZTogXCJcIixcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgdG9hc3QgPSBhd2FpdCBzaG93VG9hc3Qoe1xuICAgIHN0eWxlOiBUb2FzdC5TdHlsZS5BbmltYXRlZCxcbiAgICB0aXRsZTogXCJEb3dubG9hZGluZyBsYXRlc3QgZGljdGlvbmFyeS4uLlwiLFxuICAgIG1lc3NhZ2U6IGBQcm9ncmVzczogMCVgLFxuICAgIHByaW1hcnlBY3Rpb246IHtcbiAgICAgIHRpdGxlOiBcIkNhbmNlbCBVcGRhdGVcIixcbiAgICAgIG9uQWN0aW9uOiAoKSA9PiB7XG4gICAgICAgIGFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xuICAgICAgfSxcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBkaWN0aW9uYXJ5VXJsID0gYXdhaXQgZ2V0TGF0ZXN0RGljdGlvbmFyeVVybCgpO1xuICBpZiAoIWRpY3Rpb25hcnlVcmwpIHtcbiAgICB0b2FzdC5zdHlsZSA9IFRvYXN0LlN0eWxlLkZhaWx1cmU7XG4gICAgdG9hc3QudGl0bGUgPSBcIkZhaWxlZCB0byBmaW5kIGxhdGVzdCBkaWN0aW9uYXJ5XCI7XG4gICAgdG9hc3QubWVzc2FnZSA9IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIjtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBkb3dubG9hZGVkUGF0aCA9IGF3YWl0IGRvd25sb2FkRmlsZShkaWN0aW9uYXJ5VXJsLCBET1dOTE9BRF9QQVRILCB0b2FzdCwgYWJvcnRTaWduYWwpO1xuICBpZiAoIWRvd25sb2FkZWRQYXRoIHx8IGFib3J0U2lnbmFsLmFib3J0ZWQpIHJldHVybjtcblxuICBjb25zdCB3YXNtQmluYXJ5ID0gZnMucmVhZEZpbGVTeW5jKFNRTElURV9XQVNNX1BBVEgpO1xuICBjb25zdCBTUUwgPSBhd2FpdCBpbml0U3FsSnMoeyB3YXNtQmluYXJ5IH0pO1xuICBjb25zdCBkYiA9IG5ldyBTUUwuRGF0YWJhc2UoKTtcblxuICBjb25zdCBzdWNjZXNzID0gYXdhaXQgcG9wdWxhdGVUYWJsZXMoZGIsIHRvYXN0LCBhYm9ydFNpZ25hbCk7XG4gIGlmIChzdWNjZXNzKSB7XG4gICAgZGIucnVuKFwiVkFDVVVNO1wiKTtcbiAgICBhd2FpdCBmcy5wcm9taXNlcy53cml0ZUZpbGUoREJfUEFUSCwgZGIuZXhwb3J0KCkpO1xuICAgIHRvYXN0LnN0eWxlID0gVG9hc3QuU3R5bGUuU3VjY2VzcztcbiAgICB0b2FzdC50aXRsZSA9IFwiRGljdGlvbmFyeSB1cGRhdGVkIHN1Y2Nlc3NmdWxseVwiO1xuICAgIHRvYXN0Lm1lc3NhZ2UgPSBcIlwiO1xuICB9IGVsc2UgaWYgKCFhYm9ydFNpZ25hbC5hYm9ydGVkKSB7XG4gICAgdG9hc3Quc3R5bGUgPSBUb2FzdC5TdHlsZS5GYWlsdXJlO1xuICAgIHRvYXN0LnRpdGxlID0gXCJGYWlsZWQgdG8gdXBkYXRlIGRpY3Rpb25hcnlcIjtcbiAgICB0b2FzdC5tZXNzYWdlID0gXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiO1xuICB9XG5cbiAgZGIuY2xvc2UoKTtcbn1cbiIsICJpbXBvcnQgZnMgZnJvbSBcIm5vZGU6ZnNcIjtcbmltcG9ydCB7IFJlYWRhYmxlIH0gZnJvbSBcIm5vZGU6c3RyZWFtXCI7XG5pbXBvcnQgeyBmaW5pc2hlZCB9IGZyb20gXCJub2RlOnN0cmVhbS9wcm9taXNlc1wiO1xuaW1wb3J0IHsgVG9hc3QgfSBmcm9tIFwiQHJheWNhc3QvYXBpXCI7XG5cbnR5cGUgSml0ZW5kZXhNYW5pZmVzdCA9IHtcbiAgZG93bmxvYWRVcmw6IHN0cmluZztcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMYXRlc3REaWN0aW9uYXJ5VXJsKCkge1xuICB0cnkge1xuICAgIGNvbnN0IG1hbmlmZXN0UmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2ppdGVuZGV4Lm9yZy9zdGF0aWMveW9taXRhbi5qc29uXCIpO1xuICAgIGlmICghbWFuaWZlc3RSZXMub2spIHRocm93IG5ldyBFcnJvcihgSml0ZW5kZXggbWFuaWZlc3QgcmV0dXJuZWQgJHttYW5pZmVzdFJlcy5zdGF0dXN9YCk7XG4gICAgY29uc3QgbWFuaWZlc3QgPSAoYXdhaXQgbWFuaWZlc3RSZXMuanNvbigpKSBhcyBKaXRlbmRleE1hbmlmZXN0O1xuICAgIGlmICghbWFuaWZlc3QuZG93bmxvYWRVcmwpIHRocm93IG5ldyBFcnJvcihcIkppdGVuZGV4IG1hbmlmZXN0IGhhcyBubyBkb3dubG9hZCBVUkxcIik7XG4gICAgcmV0dXJuIG1hbmlmZXN0LmRvd25sb2FkVXJsO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkIHRvIGZldGNoIGxhdGVzdCBkaWN0aW9uYXJ5OlwiLCBlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRvd25sb2FkRmlsZSh1cmw6IHN0cmluZywgZGVzdGluYXRpb246IHN0cmluZywgdG9hc3Q6IFRvYXN0LCBhYm9ydFNpZ25hbDogQWJvcnRTaWduYWwpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHsgc2lnbmFsOiBhYm9ydFNpZ25hbCB9KTtcbiAgICBpZiAoIXJlcy5ib2R5KSB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggZGljdGlvbmFyeTogTm8gcmVzcG9uc2UgYm9keVwiKTtcblxuICAgIGNvbnN0IGNvbnRlbnRMZW5ndGggPSByZXMuaGVhZGVycy5nZXQoXCJjb250ZW50LWxlbmd0aFwiKTtcbiAgICBjb25zdCB0b3RhbEJ5dGVzID0gY29udGVudExlbmd0aCA/IHBhcnNlSW50KGNvbnRlbnRMZW5ndGgsIDEwKSA6IDA7XG4gICAgbGV0IGRvd25sb2FkZWRCeXRlcyA9IDA7XG5cbiAgICBjb25zb2xlLmxvZyhcIkRvd25sb2FkaW5nIHRvXCIsIGRlc3RpbmF0aW9uKTtcbiAgICBjb25zdCBmaWxlU3RyZWFtID0gZnMuY3JlYXRlV3JpdGVTdHJlYW0oZGVzdGluYXRpb24sIHsgZmxhZ3M6IFwid1wiIH0pO1xuICAgIGNvbnN0IHJlYWRhYmxlU3RyZWFtID0gUmVhZGFibGUuZnJvbVdlYihyZXMuYm9keSk7XG5cbiAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgYWJvcnRTaWduYWwuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiYWJvcnRcIixcbiAgICAgICgpID0+IHtcbiAgICAgICAgcmVhZGFibGVTdHJlYW0uZGVzdHJveSgpO1xuICAgICAgICBmaWxlU3RyZWFtLmRlc3Ryb3koKTtcbiAgICAgIH0sXG4gICAgICB7IG9uY2U6IHRydWUgfSxcbiAgICApO1xuXG4gICAgcmVhZGFibGVTdHJlYW0ub24oXCJkYXRhXCIsIChjaHVuaykgPT4ge1xuICAgICAgZG93bmxvYWRlZEJ5dGVzICs9IGNodW5rLmxlbmd0aDtcbiAgICAgIGNvbnN0IHByb2dyZXNzID0gdG90YWxCeXRlcyA+IDAgPyBNYXRoLnJvdW5kKChkb3dubG9hZGVkQnl0ZXMgLyB0b3RhbEJ5dGVzKSAqIDEwMCkgOiAwO1xuICAgICAgdG9hc3QubWVzc2FnZSA9IGBQcm9ncmVzczogJHtwcm9ncmVzc30lYDtcbiAgICB9KTtcblxuICAgIGF3YWl0IGZpbmlzaGVkKHJlYWRhYmxlU3RyZWFtLnBpcGUoZmlsZVN0cmVhbSkpO1xuICAgIHJldHVybiBkZXN0aW5hdGlvbjtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoYWJvcnRTaWduYWwuYWJvcnRlZCkge1xuICAgICAgY29uc29sZS5sb2coXCJEb3dubG9hZCBjYW5jZWxsZWQgYnkgdXNlclwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZG93bmxvYWRpbmcgZGljdGlvbmFyeTpcIiwgZXJyb3IpO1xuICAgIHRvYXN0LnN0eWxlID0gVG9hc3QuU3R5bGUuRmFpbHVyZTtcbiAgICB0b2FzdC50aXRsZSA9IFwiRmFpbGVkIHRvIGRvd25sb2FkIGRpY3Rpb25hcnlcIjtcbiAgICB0b2FzdC5tZXNzYWdlID0gXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiO1xuICB9XG59XG4iLCAiaW1wb3J0IHBhdGggZnJvbSBcIm5vZGU6cGF0aFwiO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tIFwiQHJheWNhc3QvYXBpXCI7XG5cbmV4cG9ydCBjb25zdCBET1dOTE9BRF9QQVRIID0gcGF0aC5qb2luKGVudmlyb25tZW50LnN1cHBvcnRQYXRoLCBcImppdGVuZGV4LXlvbWl0YW4uemlwXCIpO1xuZXhwb3J0IGNvbnN0IERCX1BBVEggPSBwYXRoLmpvaW4oZW52aXJvbm1lbnQuc3VwcG9ydFBhdGgsIFwiaml0ZW5kZXguZGJcIik7XG5leHBvcnQgY29uc3QgU1FMSVRFX1dBU01fUEFUSCA9IHBhdGguam9pbihlbnZpcm9ubWVudC5hc3NldHNQYXRoLCBcInNxbC13YXNtLWZ0czUud2FzbVwiKTtcbiIsICJpbXBvcnQgQWRtWmlwIGZyb20gXCJhZG0temlwXCI7XG5pbXBvcnQgeyBEYXRhYmFzZSB9IGZyb20gXCJzcWwuanNcIjtcbmltcG9ydCB7IERPV05MT0FEX1BBVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCJAcmF5Y2FzdC9hcGlcIjtcbmltcG9ydCB7IGlzS2FuYSB9IGZyb20gXCJ3YW5ha2FuYVwiO1xuaW1wb3J0IHsgbm9ybWFsaXplS2FuYSwgc3FsIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5pbXBvcnQgeyBwYXJzZVRlcm0gfSBmcm9tIFwiLi9qaXRlbmRleFwiO1xuaW1wb3J0IHsgWW9taXRhblRlcm0gfSBmcm9tIFwiLi90eXBlc1wiO1xuXG50eXBlIEppdGVuZGV4SW5kZXggPSB7XG4gIHJldmlzaW9uOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGF0dHJpYnV0aW9uPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhYmxlcyhkYjogRGF0YWJhc2UpIHtcbiAgcmV0dXJuIGRiLnJ1bihzcWxgXG4gICAgRFJPUCBUQUJMRSBJRiBFWElTVFMgbWV0YWRhdGE7XG4gICAgRFJPUCBUQUJMRSBJRiBFWElTVFMgZW50cmllcztcbiAgICBEUk9QIFRBQkxFIElGIEVYSVNUUyBrYW5qaV9pbmRleDtcbiAgICBEUk9QIFRBQkxFIElGIEVYSVNUUyBrYW5hX2luZGV4O1xuICAgIERST1AgVEFCTEUgSUYgRVhJU1RTIGdsb3NzX2Z0c19pbmRleDtcblxuICAgIENSRUFURSBUQUJMRSBtZXRhZGF0YSAoXG4gICAgICBrZXkgVEVYVCBQUklNQVJZIEtFWSxcbiAgICAgIHZhbHVlIFRFWFQgTk9UIE5VTExcbiAgICApO1xuXG4gICAgQ1JFQVRFIFRBQkxFIGVudHJpZXMgKFxuICAgICAgZW50cnlfaWQgSU5URUdFUiBQUklNQVJZIEtFWSxcbiAgICAgIGRhdGEgVEVYVCBOT1QgTlVMTCxcbiAgICAgIGNvbW1vbl9mb3Jtc19jb3VudCBJTlRFR0VSIE5PVCBOVUxMIERFRkFVTFQgMCxcbiAgICAgIGhhc19rYW5qaSBCT09MRUFOIE5PVCBOVUxMIERFRkFVTFQgMFxuICAgICk7XG5cbiAgICBDUkVBVEUgVEFCTEUga2FuamlfaW5kZXggKFxuICAgICAga2FuamlfdGV4dCBURVhUIE5PVCBOVUxMLFxuICAgICAgZW50cnlfaWQgSU5URUdFUiBOT1QgTlVMTCxcbiAgICAgIFBSSU1BUlkgS0VZIChrYW5qaV90ZXh0LCBlbnRyeV9pZCksXG4gICAgICBGT1JFSUdOIEtFWSAoZW50cnlfaWQpIFJFRkVSRU5DRVMgZW50cmllcyhlbnRyeV9pZCkgT04gREVMRVRFIENBU0NBREVcbiAgICApO1xuICAgIENSRUFURSBJTkRFWCBpZHhfa2FuamlfdGV4dF9wcmVmaXggT04ga2FuamlfaW5kZXgoa2FuamlfdGV4dCk7XG5cbiAgICBDUkVBVEUgVEFCTEUga2FuYV9pbmRleCAoXG4gICAgICBrYW5hX3RleHQgVEVYVCBOT1QgTlVMTCxcbiAgICAgIGVudHJ5X2lkIElOVEVHRVIgTk9UIE5VTEwsXG4gICAgICBQUklNQVJZIEtFWSAoa2FuYV90ZXh0LCBlbnRyeV9pZCksXG4gICAgICBGT1JFSUdOIEtFWSAoZW50cnlfaWQpIFJFRkVSRU5DRVMgZW50cmllcyhlbnRyeV9pZCkgT04gREVMRVRFIENBU0NBREVcbiAgICApO1xuICAgIENSRUFURSBJTkRFWCBpZHhfa2FuYV90ZXh0X3ByZWZpeCBPTiBrYW5hX2luZGV4KGthbmFfdGV4dCk7XG5cbiAgICBDUkVBVEUgVklSVFVBTCBUQUJMRSBnbG9zc19mdHNfaW5kZXggVVNJTkcgZnRzNShcbiAgICAgIGVudHJ5X2lkIFVOSU5ERVhFRCxcbiAgICAgIHNlbnNlX2lkeCBVTklOREVYRUQsXG4gICAgICBnbG9zc19jb250ZW50LFxuICAgICAgdG9rZW5pemUgPSAndW5pY29kZTYxJ1xuICAgICk7XG4gIGApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9wdWxhdGVUYWJsZXMoZGI6IERhdGFiYXNlLCB0b2FzdDogVG9hc3QsIGFib3J0U2lnbmFsOiBBYm9ydFNpZ25hbCkge1xuICBpZiAoYWJvcnRTaWduYWwuYWJvcnRlZCkgcmV0dXJuIGZhbHNlO1xuXG4gIHRyeSB7XG4gICAgY29uc29sZS5sb2coXCJPcGVuaW5nIEppdGVuZGV4IGFyY2hpdmUuLi5cIik7XG4gICAgY29uc3QgemlwID0gbmV3IEFkbVppcChET1dOTE9BRF9QQVRIKTtcbiAgICBjb25zdCBpbmRleEVudHJ5ID0gemlwLmdldEVudHJ5KFwiaW5kZXguanNvblwiKTtcbiAgICBpZiAoIWluZGV4RW50cnkpIHRocm93IG5ldyBFcnJvcihcIkppdGVuZGV4IGFyY2hpdmUgaGFzIG5vIGluZGV4Lmpzb25cIik7XG5cbiAgICBjb25zdCBtZXRhZGF0YSA9IEpTT04ucGFyc2UoaW5kZXhFbnRyeS5nZXREYXRhKCkudG9TdHJpbmcoXCJ1dGY4XCIpKSBhcyBKaXRlbmRleEluZGV4O1xuICAgIGNvbnN0IGJhbmtzID0gemlwXG4gICAgICAuZ2V0RW50cmllcygpXG4gICAgICAuZmlsdGVyKChlbnRyeSkgPT4gL150ZXJtX2JhbmtfXFxkK1xcLmpzb24kLy50ZXN0KGVudHJ5LmVudHJ5TmFtZSkpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYmFua051bWJlcihhLmVudHJ5TmFtZSkgLSBiYW5rTnVtYmVyKGIuZW50cnlOYW1lKSk7XG4gICAgaWYgKGJhbmtzLmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKFwiSml0ZW5kZXggYXJjaGl2ZSBoYXMgbm8gdGVybSBiYW5rc1wiKTtcblxuICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRpbmcgZGF0YWJhc2UgdGFibGVzLi4uXCIpO1xuICAgIGNyZWF0ZVRhYmxlcyhkYik7XG4gICAgZGIucnVuKFwiUFJBR01BIGpvdXJuYWxfbW9kZSA9IE9GRjtcIik7XG4gICAgZGIucnVuKFwiQkVHSU4gVFJBTlNBQ1RJT047XCIpO1xuICAgIGRiLnJ1bihcbiAgICAgIHNxbGBJTlNFUlQgSU5UTyBtZXRhZGF0YSAoa2V5LCB2YWx1ZSkgVkFMVUVTICgndmVyc2lvbicsIDp2ZXJzaW9uKSwgKCdkYXRlJywgOmRhdGUpLCAoJ3RpdGxlJywgOnRpdGxlKSwgKCdhdHRyaWJ1dGlvbicsIDphdHRyaWJ1dGlvbik7YCxcbiAgICAgIHtcbiAgICAgICAgXCI6dmVyc2lvblwiOiBtZXRhZGF0YS5yZXZpc2lvbixcbiAgICAgICAgXCI6ZGF0ZVwiOiBtZXRhZGF0YS5yZXZpc2lvbi5zcGxpdChcIi5cIikuc2xpY2UoMCwgMykuam9pbihcIi1cIiksXG4gICAgICAgIFwiOnRpdGxlXCI6IG1ldGFkYXRhLnRpdGxlLFxuICAgICAgICBcIjphdHRyaWJ1dGlvblwiOiBtZXRhZGF0YS5hdHRyaWJ1dGlvbiA/PyBcIlwiLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgZW50cnlTdG10ID0gZGIucHJlcGFyZShcbiAgICAgIHNxbGBJTlNFUlQgSU5UTyBlbnRyaWVzIChlbnRyeV9pZCwgZGF0YSwgY29tbW9uX2Zvcm1zX2NvdW50LCBoYXNfa2FuamkpIFZBTFVFUyAoOmVudHJ5X2lkLCA6ZGF0YSwgOmNvbW1vbl9mb3Jtc19jb3VudCwgOmhhc19rYW5qaSk7YCxcbiAgICApO1xuICAgIGNvbnN0IGthbmppU3RtdCA9IGRiLnByZXBhcmUoc3FsYElOU0VSVCBJTlRPIGthbmppX2luZGV4IChrYW5qaV90ZXh0LCBlbnRyeV9pZCkgVkFMVUVTICg6a2FuamlfdGV4dCwgOmVudHJ5X2lkKTtgKTtcbiAgICBjb25zdCBrYW5hU3RtdCA9IGRiLnByZXBhcmUoXG4gICAgICBzcWxgSU5TRVJUIE9SIElHTk9SRSBJTlRPIGthbmFfaW5kZXggKGthbmFfdGV4dCwgZW50cnlfaWQpIFZBTFVFUyAoOmthbmFfdGV4dCwgOmVudHJ5X2lkKTtgLFxuICAgICk7XG4gICAgY29uc3QgZ2xvc3NTdG10ID0gZGIucHJlcGFyZShcbiAgICAgIHNxbGBJTlNFUlQgSU5UTyBnbG9zc19mdHNfaW5kZXggKGVudHJ5X2lkLCBzZW5zZV9pZHgsIGdsb3NzX2NvbnRlbnQpIFZBTFVFUyAoOmVudHJ5X2lkLCA6c2Vuc2VfaWR4LCA6Z2xvc3NfY29udGVudCk7YCxcbiAgICApO1xuXG4gICAgbGV0IGVudHJ5SWQgPSAwO1xuICAgIGZvciAoY29uc3QgW2JhbmtJbmRleCwgYmFua10gb2YgYmFua3MuZW50cmllcygpKSB7XG4gICAgICBpZiAoYWJvcnRTaWduYWwuYWJvcnRlZCkge1xuICAgICAgICBkYi5ydW4oXCJST0xMQkFDSztcIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdGVybXMgPSBKU09OLnBhcnNlKGJhbmsuZ2V0RGF0YSgpLnRvU3RyaW5nKFwidXRmOFwiKSkgYXMgWW9taXRhblRlcm1bXTtcbiAgICAgIHRlcm1zLmZvckVhY2goKHRlcm0sIHRlcm1JbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBlbnRyeSA9IHBhcnNlVGVybSh0ZXJtLCBiYW5rSW5kZXgsIHRlcm1JbmRleCk7XG4gICAgICAgIGVudHJ5SWQgKz0gMTtcbiAgICAgICAgZW50cnlTdG10LnJ1bih7XG4gICAgICAgICAgXCI6ZW50cnlfaWRcIjogZW50cnlJZCxcbiAgICAgICAgICBcIjpkYXRhXCI6IEpTT04uc3RyaW5naWZ5KGVudHJ5KSxcbiAgICAgICAgICBcIjpjb21tb25fZm9ybXNfY291bnRcIjogTnVtYmVyKGVudHJ5LnNjb3JlID4gMCksXG4gICAgICAgICAgXCI6aGFzX2thbmppXCI6IE51bWJlcighaXNLYW5hKGVudHJ5LnRlcm0pKSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGlzS2FuYShlbnRyeS50ZXJtKSkge1xuICAgICAgICAgIGthbmFTdG10LnJ1bih7IFwiOmthbmFfdGV4dFwiOiBub3JtYWxpemVLYW5hKGVudHJ5LnRlcm0pLCBcIjplbnRyeV9pZFwiOiBlbnRyeUlkIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGthbmppU3RtdC5ydW4oeyBcIjprYW5qaV90ZXh0XCI6IGVudHJ5LnRlcm0sIFwiOmVudHJ5X2lkXCI6IGVudHJ5SWQgfSk7XG4gICAgICAgIH1cbiAgICAgICAga2FuYVN0bXQucnVuKHsgXCI6a2FuYV90ZXh0XCI6IG5vcm1hbGl6ZUthbmEoZW50cnkucmVhZGluZyksIFwiOmVudHJ5X2lkXCI6IGVudHJ5SWQgfSk7XG5cbiAgICAgICAgZW50cnkuc2Vuc2VzLmZvckVhY2goKHNlbnNlLCBzZW5zZUluZGV4KSA9PiB7XG4gICAgICAgICAgc2Vuc2UuZ2xvc3Nlcy5mb3JFYWNoKChnbG9zcykgPT4ge1xuICAgICAgICAgICAgZ2xvc3NTdG10LnJ1bih7IFwiOmVudHJ5X2lkXCI6IGVudHJ5SWQsIFwiOnNlbnNlX2lkeFwiOiBzZW5zZUluZGV4LCBcIjpnbG9zc19jb250ZW50XCI6IGdsb3NzIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB0b2FzdC50aXRsZSA9IFwiSW5kZXhpbmcgSml0ZW5kZXguLi5cIjtcbiAgICAgIHRvYXN0Lm1lc3NhZ2UgPSBgUHJvZ3Jlc3M6ICR7TWF0aC5yb3VuZCgoKGJhbmtJbmRleCArIDEpIC8gYmFua3MubGVuZ3RoKSAqIDEwMCl9JWA7XG4gICAgICB0b2FzdC5zdHlsZSA9IFRvYXN0LlN0eWxlLkFuaW1hdGVkO1xuICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldEltbWVkaWF0ZShyZXNvbHZlKSk7XG4gICAgfVxuXG4gICAgZW50cnlTdG10LmZyZWUoKTtcbiAgICBrYW5qaVN0bXQuZnJlZSgpO1xuICAgIGthbmFTdG10LmZyZWUoKTtcbiAgICBnbG9zc1N0bXQuZnJlZSgpO1xuICAgIGRiLnJ1bihcIkNPTU1JVDtcIik7XG4gICAgY29uc29sZS5sb2coYEluZGV4ZWQgJHtlbnRyeUlkfSBKaXRlbmRleCB0ZXJtcy5gKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGluZGV4IEppdGVuZGV4OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGJhbmtOdW1iZXIobmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBOdW1iZXIobmFtZS5tYXRjaCgvXFxkKy8pPy5bMF0gPz8gMCk7XG59XG4iLCAiaW1wb3J0IHdhbmFrYW5hIGZyb20gXCJ3YW5ha2FuYVwiO1xuXG4vKipcbiAqIEEgdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWwgZm9yIFNRTCBzdHJpbmdzIHRvIGFsbG93IGZvciBmb3JtYXR0aW5nIGFuZCBzeW50YXhcbiAqIGhpZ2hsaWdodGluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNxbChzdHJpbmdzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgLi4uZXhwcjogdW5rbm93bltdKSB7XG4gIHJldHVybiBzdHJpbmdzLm1hcCgoc3RyLCBpbmRleCkgPT4gc3RyICsgKGV4cHIubGVuZ3RoID4gaW5kZXggPyBTdHJpbmcoZXhwcltpbmRleF0pIDogXCJcIikpLmpvaW4oXCJcIik7XG59XG5cbi8qKiBOb3JtYWxpemVzIGEgcm9tYWppIG9yIGthdGFrYW5hIHN0cmluZyB0byBoaXJhZ2FuYSBmb3Igc2VhcmNoaW5nIGFuZCBpbmRleGluZy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVLYW5hKHRleHQ6IHN0cmluZykge1xuICBjb25zdCB0cmltbWVkVGV4dCA9IHRleHQudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiB3YW5ha2FuYS50b0hpcmFnYW5hKHRyaW1tZWRUZXh0LCB7XG4gICAgLy8gRG9uJ3QgY29udmVydCBsb25nIHZvd2VsIG1hcmtzIHRvIGhpcmFnYW5hXG4gICAgLy8gKGUuZy4gXHUzMEIxXHUzMEZDXHUzMEFEIC0+IFx1MzA1MVx1MzA0OFx1MzA0RC4gSW5zdGVhZCwgaXQgc2hvdWxkIGJlIFx1MzA1MVx1MzBGQ1x1MzA0RClcbiAgICBjb252ZXJ0TG9uZ1Zvd2VsTWFyazogZmFsc2UsXG4gIH0pO1xufVxuIiwgImltcG9ydCB7IERpY3Rpb25hcnlFbnRyeSwgRGljdGlvbmFyeVNlbnNlLCBTdHJ1Y3R1cmVkQ29udGVudCwgU3RydWN0dXJlZENvbnRlbnROb2RlLCBZb21pdGFuVGVybSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmZ1bmN0aW9uIGZpbmROb2Rlcyhjb250ZW50OiBTdHJ1Y3R1cmVkQ29udGVudCB8IHVuZGVmaW5lZCwgZGF0YUNvbnRlbnQ6IHN0cmluZyk6IFN0cnVjdHVyZWRDb250ZW50Tm9kZVtdIHtcbiAgaWYgKGNvbnRlbnQgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIFtdO1xuICBpZiAoQXJyYXkuaXNBcnJheShjb250ZW50KSkgcmV0dXJuIGNvbnRlbnQuZmxhdE1hcCgoaXRlbSkgPT4gZmluZE5vZGVzKGl0ZW0sIGRhdGFDb250ZW50KSk7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQuZGF0YT8uY29udGVudCA9PT0gZGF0YUNvbnRlbnQgPyBbY29udGVudF0gOiBbXTtcbiAgcmV0dXJuIG1hdGNoZXMuY29uY2F0KGZpbmROb2Rlcyhjb250ZW50LmNvbnRlbnQsIGRhdGFDb250ZW50KSk7XG59XG5cbmZ1bmN0aW9uIHRvVGV4dChjb250ZW50OiBTdHJ1Y3R1cmVkQ29udGVudCB8IHVuZGVmaW5lZCk6IHN0cmluZyB7XG4gIGlmIChjb250ZW50ID09PSB1bmRlZmluZWQpIHJldHVybiBcIlwiO1xuICBpZiAodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHJldHVybiBjb250ZW50O1xuICBpZiAoQXJyYXkuaXNBcnJheShjb250ZW50KSkgcmV0dXJuIGNvbnRlbnQubWFwKHRvVGV4dCkuam9pbihcIlwiKTtcbiAgaWYgKGNvbnRlbnQudGFnID09PSBcInJ0XCIpIHJldHVybiBcIlwiO1xuICByZXR1cm4gdG9UZXh0KGNvbnRlbnQuY29udGVudCk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlU2Vuc2UoZ3JvdXA6IFN0cnVjdHVyZWRDb250ZW50Tm9kZSk6IERpY3Rpb25hcnlTZW5zZVtdIHtcbiAgY29uc3QgcGFydE9mU3BlZWNoID0gZmluZE5vZGVzKGdyb3VwLmNvbnRlbnQsIFwicGFydC1vZi1zcGVlY2gtaW5mb1wiKS5tYXAoKG5vZGUpID0+IHRvVGV4dChub2RlLmNvbnRlbnQpKTtcbiAgY29uc3Qgc2Vuc2VOb2RlcyA9IGZpbmROb2Rlcyhncm91cC5jb250ZW50LCBcInNlbnNlXCIpO1xuXG4gIHJldHVybiBzZW5zZU5vZGVzLmZsYXRNYXAoKHNlbnNlKSA9PiB7XG4gICAgY29uc3QgZ2xvc3NlcyA9IGZpbmROb2RlcyhzZW5zZS5jb250ZW50LCBcImdsb3NzYXJ5XCIpXG4gICAgICAuZmxhdE1hcCgobm9kZSkgPT4gZmluZE5vZGVzKG5vZGUuY29udGVudCwgXCJnbG9zc2FyeS1pdGVtXCIpLm1hcCgoaXRlbSkgPT4gdG9UZXh0KGl0ZW0uY29udGVudCkpKVxuICAgICAgLmZpbHRlcihCb29sZWFuKTtcblxuICAgIC8vIEdsb3NzYXJ5IGxpc3QgaXRlbXMgZG8gbm90IGN1cnJlbnRseSBjYXJyeSBhIGRhdGEgbWFya2VyLlxuICAgIGlmIChnbG9zc2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZm9yIChjb25zdCBnbG9zc2FyeSBvZiBmaW5kTm9kZXMoc2Vuc2UuY29udGVudCwgXCJnbG9zc2FyeVwiKSkge1xuICAgICAgICBjb25zdCBpdGVtcyA9IGNvbGxlY3RUYWdzKGdsb3NzYXJ5LmNvbnRlbnQsIFwibGlcIikubWFwKChpdGVtKSA9PiB0b1RleHQoaXRlbS5jb250ZW50KSk7XG4gICAgICAgIGdsb3NzZXMucHVzaCguLi5pdGVtcy5maWx0ZXIoQm9vbGVhbikpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChnbG9zc2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZ2xvc3Nlcy5wdXNoKFxuICAgICAgICAuLi5maW5kTm9kZXMoc2Vuc2UuY29udGVudCwgXCJpbmZvLWdsb3NzLWNvbnRlbnRcIilcbiAgICAgICAgICAubWFwKChub2RlKSA9PiB0b1RleHQobm9kZS5jb250ZW50KSlcbiAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBleGFtcGxlTm9kZSA9IGZpbmROb2RlcyhzZW5zZS5jb250ZW50LCBcImV4YW1wbGUtc2VudGVuY2VcIikuYXQoMCk7XG4gICAgY29uc3QgamFwYW5lc2UgPSBmaW5kTm9kZXMoZXhhbXBsZU5vZGU/LmNvbnRlbnQsIFwiZXhhbXBsZS1zZW50ZW5jZS1hXCIpLm1hcCgobm9kZSkgPT4gdG9UZXh0KG5vZGUuY29udGVudCkpWzBdO1xuICAgIGNvbnN0IGVuZ2xpc2ggPSBmaW5kTm9kZXMoZXhhbXBsZU5vZGU/LmNvbnRlbnQsIFwiZXhhbXBsZS1zZW50ZW5jZS1iXCIpLm1hcCgobm9kZSkgPT4gdG9UZXh0KG5vZGUuY29udGVudCkpWzBdO1xuICAgIGNvbnN0IGV4YW1wbGUgPSBqYXBhbmVzZSB8fCBlbmdsaXNoID8geyBqYXBhbmVzZTogamFwYW5lc2UgPz8gXCJcIiwgZW5nbGlzaDogZW5nbGlzaCA/PyBcIlwiIH0gOiB1bmRlZmluZWQ7XG5cbiAgICByZXR1cm4gZ2xvc3Nlcy5sZW5ndGggPiAwID8gW3sgcGFydE9mU3BlZWNoLCBnbG9zc2VzLCBleGFtcGxlIH1dIDogW107XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjb2xsZWN0VGFncyhjb250ZW50OiBTdHJ1Y3R1cmVkQ29udGVudCB8IHVuZGVmaW5lZCwgdGFnOiBzdHJpbmcpOiBTdHJ1Y3R1cmVkQ29udGVudE5vZGVbXSB7XG4gIGlmIChjb250ZW50ID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHJldHVybiBbXTtcbiAgaWYgKEFycmF5LmlzQXJyYXkoY29udGVudCkpIHJldHVybiBjb250ZW50LmZsYXRNYXAoKGl0ZW0pID0+IGNvbGxlY3RUYWdzKGl0ZW0sIHRhZykpO1xuICBjb25zdCBtYXRjaGVzID0gY29udGVudC50YWcgPT09IHRhZyA/IFtjb250ZW50XSA6IFtdO1xuICByZXR1cm4gbWF0Y2hlcy5jb25jYXQoY29sbGVjdFRhZ3MoY29udGVudC5jb250ZW50LCB0YWcpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVGVybSh0ZXJtOiBZb21pdGFuVGVybSwgYmFua0luZGV4OiBudW1iZXIsIHRlcm1JbmRleDogbnVtYmVyKTogRGljdGlvbmFyeUVudHJ5IHtcbiAgY29uc3QgW2V4cHJlc3Npb24sIHJlYWRpbmcsICwgLCBzY29yZSwgZGVmaW5pdGlvbnMsIHNlcXVlbmNlXSA9IHRlcm07XG4gIGNvbnN0IHNlbnNlcyA9IGRlZmluaXRpb25zLmZsYXRNYXAoKGRlZmluaXRpb24pID0+IHtcbiAgICBpZiAodHlwZW9mIGRlZmluaXRpb24gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHJldHVybiBbeyBwYXJ0T2ZTcGVlY2g6IFtdLCBnbG9zc2VzOiBbZGVmaW5pdGlvbl0gfV07XG4gICAgfVxuICAgIGlmICghaXNTdHJ1Y3R1cmVkRGVmaW5pdGlvbihkZWZpbml0aW9uKSkgcmV0dXJuIFtdO1xuXG4gICAgY29uc3QgZ3JvdXBzID0gZmluZE5vZGVzKGRlZmluaXRpb24uY29udGVudCwgXCJzZW5zZS1ncm91cFwiKTtcbiAgICBpZiAoZ3JvdXBzLmxlbmd0aCA+IDApIHJldHVybiBncm91cHMuZmxhdE1hcChwYXJzZVNlbnNlKTtcblxuICAgIGNvbnN0IHJlZGlyZWN0ID0gZmluZE5vZGVzKGRlZmluaXRpb24uY29udGVudCwgXCJyZWRpcmVjdC1nbG9zc2FyeVwiKS5hdCgwKTtcbiAgICBjb25zdCByZWRpcmVjdFRleHQgPSB0b1RleHQocmVkaXJlY3Q/LmNvbnRlbnQpLnJlcGxhY2UoL15cdTI3RjYvLCBcIlwiKS50cmltKCk7XG4gICAgcmV0dXJuIHJlZGlyZWN0VGV4dCA/IFt7IHBhcnRPZlNwZWVjaDogW10sIGdsb3NzZXM6IFtgU2VlICR7cmVkaXJlY3RUZXh0fWBdIH1dIDogW107XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgaWQ6IGAke3NlcXVlbmNlfS0ke2JhbmtJbmRleH0tJHt0ZXJtSW5kZXh9YCxcbiAgICB0ZXJtOiBleHByZXNzaW9uLFxuICAgIHJlYWRpbmc6IHJlYWRpbmcgfHwgZXhwcmVzc2lvbixcbiAgICBzY29yZSxcbiAgICBzZW5zZXMsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzU3RydWN0dXJlZERlZmluaXRpb24oXG4gIGRlZmluaXRpb246IHVua25vd24sXG4pOiBkZWZpbml0aW9uIGlzIHsgdHlwZTogXCJzdHJ1Y3R1cmVkLWNvbnRlbnRcIjsgY29udGVudDogU3RydWN0dXJlZENvbnRlbnQgfSB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIGRlZmluaXRpb24gPT09IFwib2JqZWN0XCIgJiZcbiAgICBkZWZpbml0aW9uICE9PSBudWxsICYmXG4gICAgIUFycmF5LmlzQXJyYXkoZGVmaW5pdGlvbikgJiZcbiAgICBcInR5cGVcIiBpbiBkZWZpbml0aW9uICYmXG4gICAgZGVmaW5pdGlvbi50eXBlID09PSBcInN0cnVjdHVyZWQtY29udGVudFwiICYmXG4gICAgXCJjb250ZW50XCIgaW4gZGVmaW5pdGlvblxuICApO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSwyQ0FBQUEsVUFBQUMsU0FBQTtBQUFBLElBQUFBLFFBQU8sVUFBVTtBQUFBO0FBQUEsTUFFYixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFFBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFFBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFFBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBO0FBQUEsTUFHbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFFBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFFBQW1CO0FBQUE7QUFBQTtBQUFBLE1BR25CLFFBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFFBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFFBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFFBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFFBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFFBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUE7QUFBQSxNQUduQixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFFBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFFBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUEsTUFFbkIsVUFBbUI7QUFBQTtBQUFBLE1BQ25CLFVBQW1CO0FBQUE7QUFBQSxNQUNuQixZQUFtQjtBQUFBO0FBQUEsTUFDbkIsVUFBbUI7QUFBQTtBQUFBLE1BQ25CLGVBQW1CO0FBQUE7QUFBQSxNQUVuQixVQUFtQjtBQUFBO0FBQUEsTUFDbkIsVUFBbUI7QUFBQTtBQUFBLE1BQ25CLFdBQW1CO0FBQUE7QUFBQSxNQUNuQixXQUFtQjtBQUFBO0FBQUEsTUFDbkIsVUFBbUI7QUFBQTtBQUFBLE1BQ25CLFVBQW1CO0FBQUE7QUFBQSxNQUNuQixVQUFtQjtBQUFBO0FBQUEsTUFDbkIsYUFBbUI7QUFBQTtBQUFBLE1BQ25CLFVBQW1CO0FBQUE7QUFBQSxNQUNuQixVQUFtQjtBQUFBO0FBQUEsTUFDbkIsV0FBbUI7QUFBQTtBQUFBLE1BQ25CLFVBQW1CO0FBQUE7QUFBQSxNQUNuQixZQUFtQjtBQUFBO0FBQUE7QUFBQSxNQUduQixRQUFtQjtBQUFBO0FBQUEsTUFDbkIsUUFBbUI7QUFBQTtBQUFBLE1BQ25CLFVBQW1CO0FBQUE7QUFBQSxNQUNuQixVQUFtQjtBQUFBO0FBQUEsTUFDbkIsVUFBbUI7QUFBQTtBQUFBLE1BQ25CLFVBQW1CO0FBQUE7QUFBQSxNQUNuQixVQUFtQjtBQUFBO0FBQUE7QUFBQSxNQUVuQixVQUFtQjtBQUFBO0FBQUEsTUFDbkIsbUJBQW1CO0FBQUE7QUFBQSxNQUNuQixRQUFtQjtBQUFBO0FBQUE7QUFBQSxNQUVuQixPQUFtQjtBQUFBO0FBQUE7QUFBQSxNQUVuQixNQUFtQjtBQUFBO0FBQUE7QUFBQSxNQUVuQixXQUFtQjtBQUFBO0FBQUEsTUFDbkIsVUFBbUI7QUFBQTtBQUFBLE1BQ25CLGFBQW1CO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJbkIsU0FBbUI7QUFBQTtBQUFBLE1BQ25CLFdBQW1CO0FB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QUFDLEtBQUssR0FBRTtBQUFDLGNBQUksSUFBRSxHQUFHLEVBQUUsS0FBSyxJQUFJO0FBQUUsY0FBRyxDQUFDLEVBQUUsT0FBTSxJQUFJLEVBQUUsRUFBRTtBQUFFLFlBQUUsTUFBSTtBQUFFLFlBQUUsV0FBUztBQUFBLFFBQUUsR0FBRSxNQUFNLEdBQUU7QUFBQyxZQUFFLElBQUksR0FBRyxNQUFNLEVBQUUsR0FBRztBQUFBLFFBQUMsR0FBRSxNQUFNLEdBQUU7QUFBQyxZQUFFLElBQUksR0FBRyxNQUFNLEVBQUUsR0FBRztBQUFBLFFBQUMsR0FBRSxLQUFLLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxjQUFHLENBQUMsRUFBRSxPQUFLLENBQUMsRUFBRSxJQUFJLEdBQUcsR0FBRyxPQUFNLElBQUksRUFBRSxFQUFFO0FBQUUsbUJBQVEsSUFBRSxHQUFFLElBQUUsR0FBRSxJQUFFLEdBQUUsS0FBSTtBQUFDLGdCQUFHO0FBQUMsa0JBQUksSUFBRSxFQUFFLElBQUksR0FBRyxHQUFHLEVBQUUsR0FBRztBQUFBLFlBQUMsU0FBTyxHQUFFO0FBQUMsb0JBQU0sSUFBSSxFQUFFLEVBQUU7QUFBQSxZQUFFO0FBQUMsZ0JBQUcsV0FBUyxLQUFHLE1BQUksRUFBRSxPQUFNLElBQUksRUFBRSxDQUFDO0FBQUUsZ0JBQUcsU0FBTyxLQUFHLFdBQVMsRUFBRTtBQUFNO0FBQUksY0FBRSxJQUFFLENBQUMsSUFBRTtBQUFBLFVBQUM7QUFBQyxnQkFBSSxFQUFFLEtBQUssUUFBTSxLQUFLLElBQUk7QUFBRyxpQkFBTztBQUFBLFFBQUMsR0FBRSxNQUFNLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxjQUFHLENBQUMsRUFBRSxPQUFLLENBQUMsRUFBRSxJQUFJLEdBQUcsR0FBRyxPQUFNLElBQUksRUFBRSxFQUFFO0FBQUUsY0FBRztBQUFDLHFCQUFRLElBQUUsR0FBRSxJQUFFLEdBQUUsSUFBSSxHQUFFLElBQUksR0FBRyxHQUFHLEVBQUUsS0FBSSxFQUFFLElBQUUsQ0FBQyxDQUFDO0FBQUEsVUFBQyxTQUFPLEdBQUU7QUFBQyxrQkFBTSxJQUFJLEVBQUUsRUFBRTtBQUFBLFVBQy9nQjtBQUFDLGdCQUFJLEVBQUUsS0FBSyxRQUFNLEVBQUUsS0FBSyxRQUFNLEtBQUssSUFBSTtBQUFHLGlCQUFPO0FBQUEsUUFBQyxFQUFDLEdBQUUsS0FBRyxFQUFDLEtBQUk7QUFBQyxhQUFFO0FBQUMsZ0JBQUcsQ0FBQyxHQUFHLFFBQU87QUFBQyxrQkFBSSxJQUFFO0FBQUssa0JBQUcsSUFBRztBQUFDLG9CQUFJLElBQUUsT0FBTyxNQUFNLEdBQUcsR0FBRSxJQUFFLEdBQUUsSUFBRSxRQUFRLE1BQU07QUFBRyxvQkFBRztBQUFDLHNCQUFFRSxJQUFHLFNBQVMsR0FBRSxHQUFFLEdBQUUsR0FBRztBQUFBLGdCQUFDLFNBQU8sR0FBRTtBQUFDLHNCQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsS0FBSyxFQUFFLEtBQUU7QUFBQSxzQkFBTyxPQUFNO0FBQUEsZ0JBQUU7QUFBQyxvQkFBRSxNQUFJLElBQUUsRUFBRSxNQUFNLEdBQUUsQ0FBQyxFQUFFLFNBQVMsT0FBTztBQUFBLGNBQUUsTUFBSyxnQkFBYSxPQUFPLFVBQVEsY0FBWSxPQUFPLE9BQU8sV0FBUyxJQUFFLE9BQU8sT0FBTyxTQUFTLEdBQUUsU0FBTyxNQUFJLEtBQUc7QUFBTyxrQkFBRyxDQUFDLEdBQUU7QUFBQyxvQkFBRTtBQUFLLHNCQUFNO0FBQUEsY0FBQztBQUFDLG1CQUFHLEdBQUcsR0FBRSxJQUFFO0FBQUEsWUFBQztBQUFDLGdCQUFFLEdBQUcsTUFBTTtBQUFBLFVBQUM7QUFBQyxpQkFBTztBQUFBLFFBQUMsR0FBRSxHQUFHLEdBQUUsR0FBRTtBQUFDLG1CQUFPLEtBQUcsT0FBSyxLQUFHLEdBQUcsRUFBRSxFQUFFLE1BQU0sQ0FBQyxHQUFFLEVBQUUsU0FBTyxDQUFDLEtBQ2xmLEtBQUcsS0FBRyxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQUEsUUFBQyxHQUFFLE1BQU0sR0FBRTtBQUFDLGNBQUUsRUFBRSxRQUFRLFdBQVMsR0FBRyxFQUFFLEVBQUUsTUFBTSxDQUFDLEdBQUUsRUFBRSxTQUFPLENBQUM7QUFBQSxRQUFFLEdBQUUsS0FBSTtBQUFDLGlCQUFNLEVBQUMsSUFBRyxPQUFNLElBQUcsR0FBRSxJQUFHLEtBQUksSUFBRyxPQUFNLElBQUcsQ0FBQyxHQUFFLElBQUcsS0FBSSxJQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRyxJQUFHLElBQUcsR0FBRSxJQUFHLElBQUcsSUFBRyxJQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLENBQUMsRUFBQztBQUFBLFFBQUMsR0FBRSxLQUFJO0FBQUMsaUJBQU87QUFBQSxRQUFDLEdBQUUsS0FBSTtBQUFDLGlCQUFNLENBQUMsSUFBRyxFQUFFO0FBQUEsUUFBQyxFQUFDLEdBQUUsS0FBRyxFQUFDLEdBQUcsR0FBRSxHQUFFO0FBQUMsbUJBQU8sS0FBRyxPQUFLLEtBQUcsR0FBRyxFQUFFLEVBQUUsTUFBTSxDQUFDLEdBQUUsRUFBRSxTQUFPLENBQUMsS0FBRyxLQUFHLEtBQUcsRUFBRSxPQUFPLEtBQUssQ0FBQztBQUFBLFFBQUMsR0FBRSxNQUFNLEdBQUU7QUFBQyxjQUFFLEVBQUUsUUFBUSxXQUFTLEdBQUcsRUFBRSxFQUFFLE1BQU0sQ0FBQyxHQUFFLEVBQUUsU0FBTyxDQUFDO0FBQUEsUUFBRSxFQUFDLEdBQUUsSUFBRSxFQUFDLElBQUcsTUFBSyxLQUFJO0FBQUMsaUJBQU8sRUFBRSxXQUFXLE1BQUssS0FBSSxPQUFNLENBQUM7QUFBQSxRQUFDLEdBQUUsV0FBVyxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsY0FBRyxXQUFTLElBQUUsVUFBUSxVQUFRLElBQUUsT0FBTyxPQUFNLElBQUksRUFBRSxFQUFFO0FBQ3BnQixZQUFFLE9BQUssRUFBRSxLQUFHLEVBQUMsS0FBSSxFQUFDLE1BQUssRUFBQyxJQUFHLEVBQUUsR0FBRyxJQUFHLElBQUcsRUFBRSxHQUFHLElBQUcsUUFBTyxFQUFFLEdBQUcsUUFBTyxJQUFHLEVBQUUsR0FBRyxJQUFHLFFBQU8sRUFBRSxHQUFHLFFBQU8sUUFBTyxFQUFFLEdBQUcsUUFBTyxPQUFNLEVBQUUsR0FBRyxPQUFNLFNBQVEsRUFBRSxHQUFHLFNBQVEsU0FBUSxFQUFFLEdBQUcsUUFBTyxHQUFFLFFBQU8sRUFBQyxJQUFHLEVBQUUsR0FBRyxHQUFFLEVBQUMsR0FBRSxNQUFLLEVBQUMsTUFBSyxFQUFDLElBQUcsRUFBRSxHQUFHLElBQUcsSUFBRyxFQUFFLEdBQUcsR0FBRSxHQUFFLFFBQU8sRUFBQyxJQUFHLEVBQUUsR0FBRyxJQUFHLE1BQUssRUFBRSxHQUFHLE1BQUssT0FBTSxFQUFFLEdBQUcsT0FBTSxJQUFHLEVBQUUsR0FBRyxJQUFHLElBQUcsRUFBRSxHQUFHLEdBQUUsRUFBQyxHQUFFLE1BQUssRUFBQyxNQUFLLEVBQUMsSUFBRyxFQUFFLEdBQUcsSUFBRyxJQUFHLEVBQUUsR0FBRyxJQUFHLFVBQVMsRUFBRSxHQUFHLFNBQVEsR0FBRSxRQUFPLENBQUMsRUFBQyxHQUFFLElBQUcsRUFBQyxNQUFLLEVBQUMsSUFBRyxFQUFFLEdBQUcsSUFBRyxJQUFHLEVBQUUsR0FBRyxHQUFFLEdBQUUsUUFBTyxHQUFFLEVBQUM7QUFBRyxjQUFFLEdBQUcsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFFLFlBQUUsRUFBRSxJQUFJLEtBQUcsRUFBRSxLQUFHLEVBQUUsR0FBRyxJQUFJLE1BQUssRUFBRSxLQUFHLEVBQUUsR0FBRyxJQUFJLFFBQU8sRUFBRSxLQUFHLENBQUMsS0FBRyxXQUM3ZSxFQUFFLE9BQUssVUFBUSxFQUFFLEtBQUcsRUFBRSxHQUFHLEtBQUssTUFBSyxFQUFFLEtBQUcsRUFBRSxHQUFHLEtBQUssUUFBTyxFQUFFLEtBQUcsR0FBRSxFQUFFLEtBQUcsUUFBTSxXQUFTLEVBQUUsT0FBSyxVQUFRLEVBQUUsS0FBRyxFQUFFLEdBQUcsS0FBSyxNQUFLLEVBQUUsS0FBRyxFQUFFLEdBQUcsS0FBSyxVQUFRLFVBQVEsRUFBRSxPQUFLLFdBQVMsRUFBRSxLQUFHLEVBQUUsR0FB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QUFFLEtBQUc7QUFBRSxZQUFFLE9BQUs7QUFBRSxjQUFFLEtBQUcsSUFBRSxNQUFJLEVBQUUsS0FBRyxHQUFFLEVBQUUsTUFBSSxFQUFFLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFBQSxRQUFFO0FBQUMsaUJBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLGNBQUksSUFBRSxFQUFFLEdBQUUsRUFBQyxRQUFPLEtBQUUsQ0FBQyxFQUFFO0FBQUssY0FBRSxHQUFHLENBQUM7QUFBRSxjQUFHLENBQUMsRUFBRSxPQUFNLElBQUksRUFBRSxFQUFFO0FBQUUsY0FBRyxRQUFNLEtBQUcsU0FBTyxFQUFFLE9BQU0sSUFBSSxFQUFFLEVBQUU7QUFBRSxjQUFJLElBQUUsR0FBRyxHQUFFLENBQUM7QUFBRSxjQUFHLEVBQUUsT0FBTSxJQUFJLEVBQUUsQ0FBQztBQUFFLGNBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxPQUFNLElBQUksRUFBRSxFQUFFO0FBQUUsaUJBQU8sRUFBRSxHQUFHLEdBQUcsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFBLFFBQUM7QUFDcGMsaUJBQVMsR0FBRyxHQUFFLElBQUUsS0FBSTtBQUFDLGlCQUFPLEdBQUcsR0FBRSxJQUFFLE9BQUssT0FBTSxDQUFDO0FBQUEsUUFBQztBQUFDLGlCQUFTLEVBQUUsR0FBRSxJQUFFLEtBQUk7QUFBQyxpQkFBTyxHQUFHLEdBQUUsSUFBRSxPQUFLLE9BQU0sQ0FBQztBQUFBLFFBQUM7QUFBQyxpQkFBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMseUJBQWEsT0FBTyxNQUFJLElBQUUsR0FBRSxJQUFFO0FBQUssYUFBRyxHQUFFLElBQUUsTUFBSyxDQUFDO0FBQUEsUUFBQztBQUFDLGlCQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsY0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU0sSUFBSSxFQUFFLEVBQUU7QUFBRSxjQUFJLElBQUUsRUFBRSxHQUFFLEVBQUMsUUFBTyxLQUFFLENBQUMsRUFBRTtBQUFLLGNBQUcsQ0FBQyxFQUFFLE9BQU0sSUFBSSxFQUFFLEVBQUU7QUFBRSxjQUFFLEdBQUcsQ0FBQztBQUFFLGNBQUksSUFBRSxHQUFHLEdBQUUsQ0FBQztBQUFFLGNBQUcsRUFBRSxPQUFNLElBQUksRUFBRSxDQUFDO0FBQUUsY0FBRyxDQUFDLEVBQUUsR0FBRyxRQUFRLE9BQU0sSUFBSSxFQUFFLEVBQUU7QUFBRSxZQUFFLEdBQUcsUUFBUSxHQUFFLEdBQUUsQ0FBQztBQUFBLFFBQUM7QUFDalcsaUJBQVMsR0FBRyxHQUFFO0FBQUMsY0FBSSxJQUFFLEVBQUUsR0FBRSxFQUFDLFFBQU8sS0FBRSxDQUFDLEVBQUU7QUFBSyxjQUFFLEdBQUcsQ0FBQztBQUFFLGNBQUksSUFBRSxFQUFFLEdBQUUsQ0FBQyxHQUFFLElBQUUsR0FBRyxHQUFFLEdBQUUsSUFBRTtBQUFFLGNBQUcsRUFBRSxPQUFNLElBQUksRUFBRSxDQUFDO0FBQUUsY0FBRyxDQUFDLEVBQUUsR0FBRyxNQUFNLE9BQU0sSUFBSSxFQUFFLEVBQUU7QUFBRSxjQUFHLEVBQUUsR0FBRyxPQUFNLElBQUksRUFBRSxFQUFFO0FBQUUsWUFBRSxHQUFHLE1BQU0sR0FBRSxDQUFDO0FBQUUsYUFBRyxDQUFDO0FBQUEsUUFBQztBQUFDLGlCQUFTLEdBQUcsR0FBRTtBQUFDLGNBQUksSUFBRSxFQUFFLEdBQUUsRUFBQyxRQUFPLEtBQUUsQ0FBQyxFQUFFO0FBQUssY0FBRyxDQUFDLEVBQUUsT0FBTSxJQUFJLEVBQUUsRUFBRTtBQUFFLGNBQUUsR0FBRyxDQUFDO0FBQUUsY0FBSSxJQUFFLEVBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRSxHQUFHLEdBQUUsR0FBRSxLQUFFO0FBQUUsY0FBRyxFQUFFLE9BQU0sSUFBSSxFQUFFLENBQUM7QUFBRSxjQUFHLENBQUMsRUFBRSxHQUFHLE9BQU8sT0FBTSxJQUFJLEVBQUUsRUFBRTtBQUFFLGNBQUcsRUFBRSxHQUFHLE9BQU0sSUFBSSxFQUFFLEVBQUU7QUFBRSxZQUFFLEdBQUcsT0FBTyxHQUFFLENBQUM7QUFBRSxhQUFHLENBQUM7QUFBQSxRQUFDO0FBQUMsaUJB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T0FBTSxHQUFFLFVBQVMsTUFBRyxVQUFTLEdBQUUsSUFBRyxFQUFFLElBQUcsSUFBRyxDQUFDLEdBQUUsT0FBTSxNQUFFLENBQUM7QUFBRSxZQUFFLEdBQUcsUUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDO0FBQUUsZUFBRyxHQUFHLEdBQUUsSUFBRSxHQUFHO0FBQUUsV0FBQyxFQUFFLGdCQUFjLElBQUUsS0FBRyxLQUFLLE9BQUssR0FBRyxDQUFDLElBQUU7QUFBRyxpQkFBTztBQUFBLFFBQUM7QUFBQyxpQkFBUyxHQUFHLEdBQUU7QUFBQyxjQUFHLFNBQU8sRUFBRSxHQUFHLE9BQU0sSUFBSSxFQUFFLENBQUM7QUFBRSxZQUFFLE9BQUssRUFBRSxLQUFHO0FBQU0sY0FBRztBQUFDLGNBQUUsR0FBRyxTQUFPLEVBQUUsR0FBRyxNQUFNLENBQUM7QUFBQSxVQUFDLFNBQU8sR0FBRTtBQUFDLGtCQUFNO0FBQUEsVUFBRSxVQUFDO0FBQVEsZUFBRyxFQUFFLEVBQUUsSUFBRTtBQUFBLFVBQUk7QUFBQyxZQUFFLEtBQUc7QUFBQSxRQUFJO0FBQ2pmLGlCQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxjQUFHLFNBQU8sRUFBRSxHQUFHLE9BQU0sSUFBSSxFQUFFLENBQUM7QUFBRSxjQUFHLENBQUMsRUFBRSxZQUFVLENBQUMsRUFBRSxHQUFHLEdBQUcsT0FBTSxJQUFJLEVBQUUsRUFBRTtBQUFFLGNBQUcsS0FBRyxLQUFHLEtBQUcsS0FBRyxLQUFHLEVBQUUsT0FBTSxJQUFJLEVBQUUsRUFBRTtBQUFFLFlBQUUsV0FBUyxFQUFFLEdBQUcsR0FBRyxHQUFFLEdBQUUsQ0FBQztBQUFFLFlBQUUsS0FBRyxDQUFDO0FBQUEsUUFBQztBQUFDLGlCQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsY0FBRyxJQUFFLEtBQUcsSUFBRSxFQUFFLE9BQU0sSUFBSSxFQUFFLEVBQUU7QUFBRSxjQUFHLFNBQU8sRUFBRSxHQUFHLE9BQU0sSUFBSSxFQUFFLENBQUM7QUFBRSxjQUFHLE9BQUssRUFB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QUFBQyxnQkFBSSxJQUFFLEVBQUUsRUFBRSxNQUFNO0FBQUUsY0FBRSxJQUFJLEdBQUUsQ0FBQztBQUFFLG1CQUFPO0FBQUEsVUFBQyxFQUFDO0FBQUUsY0FBRSxFQUFFLE1BQUksQ0FBQztBQUFFLGNBQUksSUFBRSxDQUFDLEdBQUUsSUFBRTtBQUFFLGNBQUcsRUFBRSxVQUFRLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxLQUFJO0FBQUMsZ0JBQUksSUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQUUsaUJBQUcsTUFBSSxNQUFJLElBQUUsR0FBRyxJQUFHLEVBQUUsQ0FBQyxJQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FDeGYsRUFBRSxDQUFDLElBQUUsRUFBRSxDQUFDO0FBQUEsVUFBQztBQUFDLGNBQUUsRUFBRSxHQUFHLENBQUM7QUFBRSxpQkFBTyxJQUFFLFNBQVMsR0FBRTtBQUFDLGtCQUFJLEtBQUcsR0FBRyxDQUFDO0FBQUUsbUJBQU0sYUFBVyxJQUFFLElBQUUsRUFBRSxHQUFFLENBQUMsSUFBRSxLQUFHLGNBQVksSUFBRSxDQUFDLENBQUMsSUFBRTtBQUFBLFVBQUMsRUFBRSxDQUFDO0FBQUEsUUFBQyxHQUFFLEtBQUcsR0FBRSxLQUFHLENBQUMsR0FBRSxNQUFJO0FBQUMsY0FBRSxLQUFHLElBQUUsRUFBRSxFQUFFLE1BQU0sSUFBRSxHQUFHLEVBQUUsTUFBTTtBQUFFLFlBQUUsWUFBVSxFQUFFLFVBQVEsSUFBRSxJQUFJLFdBQVcsQ0FBQztBQUFHLFlBQUUsSUFBSSxHQUFFLENBQUM7QUFBRSxpQkFBTztBQUFBLFFBQUMsR0FBRSxJQUFHLEtBQUcsQ0FBQyxHQUFFLEdBQUUsSUFBRSxPQUFHO0FBQUMsYUFBRyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFBRSxZQUFFLElBQUksR0FBRSxJQUFJO0FBQUUsYUFBRyxLQUFLLENBQUM7QUFBQSxRQUFDLEdBQUUsS0FBRyxDQUFDLEdBQUUsTUFBSTtBQUFDLGNBQUcsQ0FBQyxJQUFHO0FBQUMsaUJBQUcsb0JBQUk7QUFBUSxnQkFB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TSxVQUFVO0FBQUEsRUFDbEIsV0FBVyxDQUFDLFlBQVksU0FBUztBQUMvQixVQUFNLFFBQVEsa0JBQU0sTUFBTTtBQUMxQixVQUFNLFFBQVE7QUFDZCxVQUFNLFVBQVU7QUFBQSxFQUNsQjtBQUVBLEtBQUcsTUFBTTtBQUNYOyIsCiAgIm5hbWVzIjogWyJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgInNlbGYiLCAicGF0aCIsICJlcnIiLCAiZmQiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAicGF0aCIsICJmcyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAibG9jYWxQYXRoIiwgIm9wdGlvbnMiLCAic2VsZiIsICJlcnIiLCAiY29udGVudCIsICJmaWxlQXR0ciIsICJpc0VxdWFsIiwgIlNQRUNJQUxfU1lNQk9MUyIsICJTTUFMTF9ZIiwgImNyZWF0ZVJvbWFqaVRvS2FuYU1hcCIsICJvbklucHV0IiwgImlzS2FuYSIsICJ0b1JvbWFqaSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJpbml0U3FsSnMiLCAiZnMiLCAiZnMiLCAiaW1wb3J0X2FwaSIsICJwYXRoIiwgImltcG9ydF9hcGkiLCAiaW1wb3J0X3dhbmFrYW5hIiwgIndhbmFrYW5hIiwgIkFkbVppcCIsICJpbXBvcnRfYXBpIiwgImltcG9ydF9ub2RlX2ZzIiwgImZzIiwgImluaXRTcWxKcyJdCn0K
