var offset = 0;
var userInput = ""

function readForm(){
    var radioButtons = document.getElementsByName("tz");
            
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked == true) {
            userInput = " - " + radioButtons[i].value;
        }
    }
    switch (userInput) {
        case " - NST":
            offset = 4;
            break;
        case " - AST":
            offset = 3;
            break;
        case " - EST":
            offset = 2;
            break;
        case " - CST":
            offset = 1;
            break;
        case " - PST":
            offset = -1;
            break;
        default:
            offset = 0;
            break;
    }
}