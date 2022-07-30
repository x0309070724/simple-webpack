// 参照理解
// {
//     "./src/index.js":{
//         "dependencies":{
//             "./message.js":"./src/message.js"
//         },
//         "code":
//             ""use strict";
//             var _message = _interopRequireDefault(require("./message.js"));
//             function _interopRequireDefault(obj) { 
//                 return obj && obj.__esModule ? obj : { "default": obj }; 
//             }
//             console.log(_message["default"]);"
//         },
//     "./src/message.js":{
//         "dependencies":{
//             "./word.js":"./src/word.js"
//         },
//         "code":"
//             "use strict";
//             Object.defineProperty(exports, "__esModule", {
//                 value: true
//             });
//             exports["default"] = void 0;
//             var _word = require("./word.js");
//             var message = "say ".concat(_word.word);
//             var _default = message;
//             exports["default"] = _default;
//         "
//     },
//     "./src/word.js":{
//         "dependencies":{},
//         "code":"
//             "use strict";
//             Object.defineProperty(exports, "__esModule", {
//                 value: true
//             });
//             exports.word = void 0;
//             var word = 'hello';
//             exports.word = word;
//         "
//     }
// }

// (function (graph) {
//     function require(module) {
//         function localRequire(relativePath) {
//             return require(graph[module].dependencies[relativePath]);
//         }
//         var exports = {};
//         (function (require, exports, code) {
//             eval(code)
//         })(localRequire, exports, graph[module].code);
//         return exports;
//     };
//     require('./src/index.js')
// })({ "./src/index.js": { "dependencies": { "./message.js": "./src/message.js" }, "code": "\"use strict\";\n\nvar _message = _interopRequireDefault(require(\"./message.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nconsole.log(_message[\"default\"]);" }, "./src/message.js": { "dependencies": { "./word.js": "./src/word.js" }, "code": "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _word = require(\"./word.js\");\n\nvar message = \"say \".concat(_word.word);\nvar _default = message;\nexports[\"default\"] = _default;" }, "./src/word.js": { "dependencies": {}, "code": "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.word = void 0;\nvar word = 'hello';\nexports.word = word;" } });