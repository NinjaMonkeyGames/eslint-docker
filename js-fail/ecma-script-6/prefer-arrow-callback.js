/* eslint prefer-arrow-callback: [ "error", { "allowUnboundThis": false } ] */
/* eslint-env es6 */

foo(function() { this.a; });

foo(function() { (() => this); });

someArray.map(function(itm) { return this.doSomething(itm); }, someObject);