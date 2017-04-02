document.addEventListener("DOMContentLoaded", function(): void {
    console.log("test");
    
    
    let board: HTMLElement = document.createElement("section");
    document.body.appendChild(board);
    
    for (var i: number = 0; i < 64; i++) {
        let field: HTMLDivElement = document.createElement("div");
        board.appendChild(field);
        
        console.log(i);
        
        }
    
    });