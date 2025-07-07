console.log("Debugging mode enabled!");

var unusedVar = 42;

function tooManyParams(a, b, c, d, e, f) {
    if (a > 0) {
        if (b > 0) {
            if (c > 0) {
                console.log("Nested too deep");
            }
        }
    }
}

function duplicate1() {
    let x = 0;
    x++;
    x++;
    x++;
}

function duplicate2() {
    let x = 0;
    x++;
    x++;
    x++;
}

try {
    riskyOperation();
} catch (e) {
}

function riskyOperation() {
    return 1 / 0;
}

tooManyParams(1, 2, 3, 4, 5, 6);
