const { wordList } = require("random-words");

var gameStarted = true;
var index = 0;

function startGame() {
    index = 0;
    gameStarted = true

    $("#input-field").removeAttr("disabled")
    $("#input-field").focus()

    $("#input-field").on("change", () => {
        const val = $(this).val()
        const lastChar = val.splice(-1);

        // Check for current correctness
        if (!wordList[index].startsWith(val.substring(0, val.length - 1))) {
            $(`#words:nth-child(${index - 1})`).removeClass("red")
        }

        if (lastChar == " ") {
            $(this).val(val.substring(0, val.length - 1));
            if ($(this).val == wordList[index]) {
                $(`#words:nth-child(${index - 1})`).removeClass("red").addClass("green")
                index++;
            }
        } else {
            if (wordList[index].startsWith(val)) {
                
            }
        }
    });
}