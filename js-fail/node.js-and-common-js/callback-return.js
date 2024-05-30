/*eslint callback-return: ["error", ["done", "send.error", "send.success"]]*/

function foo(err, done) {
    if (err) {
        done(err);
    }
    done();
}

function bar(err, send) {
    if (err) {
        send.error(err);
    }
    send.success();
}