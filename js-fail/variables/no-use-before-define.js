/*eslint no-use-before-define: "error"*/
/*eslint-env es6*/

alert(a);
var a = 10;

f();
function f() {}

function g() {
    return b;
}
var b = 1;

// With blockBindings: true
{
    alert(c);
    let c = 1;
}