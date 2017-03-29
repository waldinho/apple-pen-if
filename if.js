for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("applepen");
    } else if (i % 3 === 0) {
        console.log("apple");
    } else if (i % 5 === 0) {
        console.log("pen");
    } else {
        console.log(i);
    }
}
