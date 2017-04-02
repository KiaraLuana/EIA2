document.addEventListener("DOMContentLoaded", function() {
    
    var n: number = 64;
    var rice: number = 1;
    
    for (let i = 0; n < 64; n++); {
        let field: HTMLDivELement = document.createElement("div");
        let row: number = 1;
       
        if (row % 2 != 0) {
            if (i % 2 == 0) {
            color = "#000000";
            }
        
        else {
            color = "#FFFFFF";
    }
           }
        else {
            if (i % 2 == 0) {
                color = "#FFFFFF";
                }
            else {
                color = "#000000";
                }
            if (i % 8 == 0) {
            row++;
            }
            rice: number == Math.pow(2, i);
            document.getElementsByTagName("DIV").textContent[i] = "" + rice;
            
            }
      }  
        }
    });