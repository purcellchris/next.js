module.exports=function(e,t){"use strict";var n={};function __webpack_require__(t){if(n[t]){return n[t].exports}var o=n[t]={i:t,l:false,exports:{}};e[t].call(o.exports,o,o.exports,__webpack_require__);o.l=true;return o.exports}__webpack_require__.ab=__dirname+"/";function startup(){return __webpack_require__(88)}return startup()}({71:function(e,t,n){"use strict";function asyncGeneratorStep(e,t,n,o,i,r,a){try{var s=e[r](a);var c=s.value}catch(e){n(e);return}if(s.done){t(c)}else{Promise.resolve(c).then(o,i)}}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise(function(o,i){var r=e.apply(t,n);function _next(e){asyncGeneratorStep(r,o,i,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(r,o,i,_next,_throw,"throw",e)}_next(undefined)})}}const o=n(747);const i=n(87);const r=n(622);const a=n(761);const s=n(417);const c=n(327);const l=n(844);const u=n(198);const p=n(605);let f=null;const d=u(o.readFile);const b=u(o.writeFile);const h=u(a.gunzip);const y=u(a.gzip);const m=u(c);const g=function(){var e=_asyncToGenerator(function*(e,t){const n=yield d(e+(t?".gz":""));const o=t?yield h(n):n;return JSON.parse(o.toString())});return function read(t,n){return e.apply(this,arguments)}}();const w=function(){var e=_asyncToGenerator(function*(e,t,n){const o=JSON.stringify(n);const i=t?yield y(o):o;return yield b(e+(t?".gz":""),i)});return function write(t,n,o){return e.apply(this,arguments)}}();const x=function(e,t,n){const o=s.createHash("md4");const i=JSON.stringify({source:e,options:n,identifier:t});o.update(i);return o.digest("hex")+".json"};const _=function(){var e=_asyncToGenerator(function*(e,t){const{source:n,options:o={},cacheIdentifier:a,cacheDirectory:s,cacheCompression:c}=t;const l=r.join(e,x(n,a,o));try{return yield g(l,c)}catch(e){}const u=typeof s!=="string"&&e!==i.tmpdir();try{yield m(e)}catch(e){if(u){return _(i.tmpdir(),t)}throw e}const f=yield p(n,o);try{yield w(l,c,f)}catch(e){if(u){return _(i.tmpdir(),t)}throw e}return f});return function handleCache(t,n){return e.apply(this,arguments)}}();e.exports=function(){var e=_asyncToGenerator(function*(e){let t;if(typeof e.cacheDirectory==="string"){t=e.cacheDirectory}else{if(f===null){f=l({name:"babel-loader"})||i.tmpdir()}t=f}return yield _(t,e)});return function(t){return e.apply(this,arguments)}}()},87:function(e){e.exports=require("os")},88:function(e,t,n){"use strict";function asyncGeneratorStep(e,t,n,o,i,r,a){try{var s=e[r](a);var c=s.value}catch(e){n(e);return}if(s.done){t(c)}else{Promise.resolve(c).then(o,i)}}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise(function(o,i){var r=e.apply(t,n);function _next(e){asyncGeneratorStep(r,o,i,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(r,o,i,_next,_throw,"throw",e)}_next(undefined)})}}let o;try{o=n(671)}catch(e){if(e.code==="MODULE_NOT_FOUND"){e.message+="\n babel-loader@8 requires Babel 7.x (the package '@babel/core'). "+"If you'd like to use Babel 6.x ('babel-core'), you should install 'babel-loader@7'."}throw e}if(/^6\./.test(o.version)){throw new Error("\n babel-loader@8 will not work with the '@babel/core@6' bridge package. "+"If you want to use Babel 6.x, install 'babel-loader@7'.")}const{version:i}=n(302);const r=n(71);const a=n(605);const s=n(972);const c=n(445);const{isAbsolute:l}=n(622);const u=n(710);const p=n(225);function subscribe(e,t,n){if(n[e]){n[e](t)}}e.exports=makeLoader();e.exports.custom=makeLoader;function makeLoader(e){const t=e?e(o):undefined;return function(e,n){const o=this.async();loader.call(this,e,n,t).then(e=>o(null,...e),e=>o(e))}}function loader(e,t,n){return _loader.apply(this,arguments)}function _loader(){_loader=_asyncToGenerator(function*(e,t,n){const f=this.resourcePath;let d=u.getOptions(this)||{};p(c,d,{name:"Babel loader"});if(d.customize!=null){if(typeof d.customize!=="string"){throw new Error("Customized loaders must be implemented as standalone modules.")}if(!l(d.customize)){throw new Error("Customized loaders must be passed as absolute paths, since "+"babel-loader has no way to know what they would be relative to.")}if(n){throw new Error("babel-loader's 'customize' option is not available when already "+"using a customized babel-loader wrapper.")}let e=require(d.customize);if(e.__esModule)e=e.default;if(typeof e!=="function"){throw new Error("Custom overrides must be functions.")}n=e(o)}let b;if(n&&n.customOptions){const o=yield n.customOptions.call(this,d,{source:e,map:t});b=o.custom;d=o.loader}if("forceEnv"in d){console.warn("The option `forceEnv` has been removed in favor of `envName` in Babel 7.")}if(typeof d.babelrc==="string"){console.warn("The option `babelrc` should not be set to a string anymore in the babel-loader config. "+"Please update your configuration and set `babelrc` to true or false.\n"+"If you want to specify a specific babel config file to inherit config from "+"please use the `extends` option.\nFor more information about this options see "+"https://babeljs.io/docs/core-packages/#options")}if(Object.prototype.hasOwnProperty.call(d,"sourceMap")&&!Object.prototype.hasOwnProperty.call(d,"sourceMaps")){d=Object.assign({},d,{sourceMaps:d.sourceMap});delete d.sourceMap}const h=Object.assign({},d,{filename:f,inputSourceMap:t||undefined,sourceMaps:d.sourceMaps===undefined?this.sourceMap:d.sourceMaps,sourceFileName:f});delete h.customize;delete h.cacheDirectory;delete h.cacheIdentifier;delete h.cacheCompression;delete h.metadataSubscribers;if(!o.loadPartialConfig){throw new Error(`babel-loader ^8.0.0-beta.3 requires @babel/core@7.0.0-beta.41, but `+`you appear to be using "${o.version}". Either update your `+`@babel/core version, or pin you babel-loader version to 8.0.0-beta.2`)}const y=o.loadPartialConfig(s(h,this.target));if(y){let o=y.options;if(n&&n.config){o=yield n.config.call(this,y,{source:e,map:t,customOptions:b})}if(o.sourceMaps==="inline"){o.sourceMaps=true}const{cacheDirectory:s=null,cacheIdentifier:c=JSON.stringify({options:o,"@babel/core":a.version,"@babel/loader":i}),cacheCompression:l=true,metadataSubscribers:u=[]}=d;let p;if(s){p=yield r({source:e,options:o,transform:a,cacheDirectory:s,cacheIdentifier:c,cacheCompression:l})}else{p=yield a(e,o)}if(typeof y.babelrc==="string"){this.addDependency(y.babelrc)}if(p){if(n&&n.result){p=yield n.result.call(this,p,{source:e,map:t,customOptions:b,config:y,options:o})}const{code:i,map:r,metadata:a}=p;u.forEach(e=>{subscribe(e,a,this)});return[i,r]}}return[e,t]});return _loader.apply(this,arguments)}},198:function(e){"use strict";const t=(e,t)=>(function(...n){const o=t.promiseModule;return new o((o,i)=>{if(t.multiArgs){n.push((...e)=>{if(t.errorFirst){if(e[0]){i(e)}else{e.shift();o(e)}}else{o(e)}})}else if(t.errorFirst){n.push((e,t)=>{if(e){i(e)}else{o(t)}})}else{n.push(o)}e.apply(this,n)})});e.exports=((e,n)=>{n=Object.assign({exclude:[/.+(Sync|Stream)$/],errorFirst:true,promiseModule:Promise},n);const o=typeof e;if(!(e!==null&&(o==="object"||o==="function"))){throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${e===null?"null":o}\``)}const i=e=>{const t=t=>typeof t==="string"?e===t:t.test(e);return n.include?n.include.some(t):!n.exclude.some(t)};let r;if(o==="function"){r=function(...o){return n.excludeMain?e(...o):t(e,n).apply(this,o)}}else{r=Object.create(Object.getPrototypeOf(e))}for(const o in e){const a=e[o];r[o]=typeof a==="function"&&i(o)?t(a,n):a}return r})},225:function(e){e.exports=require("next/dist/compiled/schema-utils")},302:function(e){e.exports={name:"babel-loader",version:"8.1.0",description:"babel module loader for webpack",files:["lib"],main:"lib/index.js",engines:{node:">= 6.9"},dependencies:{"find-cache-dir":"^2.1.0","loader-utils":"^1.4.0",mkdirp:"^0.5.3",pify:"^4.0.1","schema-utils":"^2.6.5"},peerDependencies:{"@babel/core":"^7.0.0",webpack:">=2"},devDependencies:{"@babel/cli":"^7.2.0","@babel/core":"^7.2.0","@babel/preset-env":"^7.2.0",ava:"^2.4.0","babel-eslint":"^10.0.1","babel-plugin-istanbul":"^5.1.0","babel-plugin-react-intl":"^4.1.19","cross-env":"^6.0.0",eslint:"^6.5.1","eslint-config-babel":"^9.0.0","eslint-config-prettier":"^6.3.0","eslint-plugin-flowtype":"^4.3.0","eslint-plugin-prettier":"^3.0.0",husky:"^3.0.7","lint-staged":"^9.4.1",nyc:"^14.1.1",prettier:"^1.15.3",react:"^16.0.0","react-intl":"^3.3.2","react-intl-webpack-plugin":"^0.3.0",rimraf:"^3.0.0",webpack:"^4.0.0"},scripts:{clean:"rimraf lib/",build:"babel src/ --out-dir lib/ --copy-files",format:"prettier --write --trailing-comma all 'src/**/*.js' 'test/**/*.test.js' 'test/helpers/*.js' && prettier --write --trailing-comma es5 'scripts/*.js'",lint:"eslint src test",precommit:"lint-staged",prepublish:"yarn run clean && yarn run build",preversion:"yarn run test",test:"yarn run lint && cross-env BABEL_ENV=test yarn run build && yarn run test-only","test-only":"nyc ava"},repository:{type:"git",url:"https://github.com/babel/babel-loader.git"},keywords:["webpack","loader","babel","es6","transpiler","module"],author:"Luis Couto <hello@luiscouto.pt>",license:"MIT",bugs:{url:"https://github.com/babel/babel-loader/issues"},homepage:"https://github.com/babel/babel-loader",nyc:{all:true,include:["src/**/*.js"],reporter:["text","json"],sourceMap:false,instrument:false},ava:{files:["test/**/*.test.js","!test/fixtures/**/*","!test/helpers/**/*"],helpers:["**/helpers/**/*"],sources:["src/**/*.js"]},"lint-staged":{"scripts/*.js":["prettier --trailing-comma es5 --write","git add"],"src/**/*.js":["prettier --trailing-comma all --write","git add"],"test/**/*.test.js":["prettier --trailing-comma all --write","git add"],"test/helpers/*.js":["prettier --trailing-comma all --write","git add"],"package.json":["node ./scripts/yarn-install.js","git add yarn.lock"]}}},327:function(e){e.exports=require("next/dist/compiled/mkdirp")},417:function(e){e.exports=require("crypto")},427:function(e){"use strict";const t=/^[^:]+: /;const n=e=>{if(e instanceof SyntaxError){e.name="SyntaxError";e.message=e.message.replace(t,"");e.hideStack=true}else if(e instanceof TypeError){e.name=null;e.message=e.message.replace(t,"");e.hideStack=true}return e};class LoaderError extends Error{constructor(e){super();const{name:t,message:o,codeFrame:i,hideStack:r}=n(e);this.name="BabelLoaderError";this.message=`${t?`${t}: `:""}${o}\n\n${i}\n`;this.hideStack=r;Error.captureStackTrace(this,this.constructor)}}e.exports=LoaderError},445:function(e){e.exports={type:"object",properties:{cacheDirectory:{oneOf:[{type:"boolean"},{type:"string"}],default:false},cacheIdentifier:{type:"string"},cacheCompression:{type:"boolean",default:true},customize:{type:"string",default:null}},additionalProperties:true}},605:function(e,t,n){"use strict";function asyncGeneratorStep(e,t,n,o,i,r,a){try{var s=e[r](a);var c=s.value}catch(e){n(e);return}if(s.done){t(c)}else{Promise.resolve(c).then(o,i)}}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise(function(o,i){var r=e.apply(t,n);function _next(e){asyncGeneratorStep(r,o,i,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(r,o,i,_next,_throw,"throw",e)}_next(undefined)})}}const o=n(671);const i=n(198);const r=n(427);const a=i(o.transform);e.exports=function(){var e=_asyncToGenerator(function*(e,t){let n;try{n=yield a(e,t)}catch(e){throw e.message&&e.codeFrame?new r(e):e}if(!n)return null;const{ast:o,code:i,map:s,metadata:c,sourceType:l}=n;if(s&&(!s.sourcesContent||!s.sourcesContent.length)){s.sourcesContent=[e]}return{ast:o,code:i,map:s,metadata:c,sourceType:l}});return function(t,n){return e.apply(this,arguments)}}();e.exports.version=o.version},622:function(e){e.exports=require("path")},671:function(e){e.exports=require("@babel/core")},710:function(e){e.exports=require("loader-utils")},747:function(e){e.exports=require("fs")},761:function(e){e.exports=require("zlib")},844:function(e){e.exports=require("next/dist/compiled/find-cache-dir")},972:function(e,t,n){"use strict";const o=n(671);e.exports=function injectCaller(e,t){if(!supportsCallerOption())return e;return Object.assign({},e,{caller:Object.assign({name:"babel-loader",target:t,supportsStaticESM:true,supportsDynamicImport:true,supportsTopLevelAwait:true},e.caller)})};let i=undefined;function supportsCallerOption(){if(i===undefined){try{o.loadPartialConfig({caller:undefined,babelrc:false,configFile:false});i=true}catch(e){i=false}}return i}}});