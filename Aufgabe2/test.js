document.addEventListener("DOMContentLoaded", function () {
    console.log("test");
    let board = document.createElement("section");
    document.body.appendChild(board);
    for (var i = 0; i < 64; i++) {
        let field = document.createElement("div");
        board.appendChild(field);
        console.log(i);
    }
});
//# sourceMappingURL=test.js.map