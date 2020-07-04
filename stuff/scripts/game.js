var gameStarted = true;
var index = 0;
var startTime = 0;

function correct(correct) {
    if (correct) {
        $(`#words .word:nth-child(${index + 1})`).removeClass("red");
        $("#input-field").removeClass("wrong");
    } else {
        $(`#words .word:nth-child(${index + 1})`).addClass("red");
        $("#input-field").addClass("wrong");
    }
}

function endGame() {
    $("#input-field").off();

    var wpm = Math.floor(index / ((Date.now() - startTime) / 1000 / 60));
    $("#progress").text(wpm);
}

function startGame() {
    console.log("🚀 Game started!");
    gameStarted = true;
    index = 0;
    startTime = Date.now();

    $("#input-field").removeAttr("disabled");
    $(`#words .word:nth-child(${index + 1})`).addClass("bold");
    $("#input-field").focus();

    $("#input-field").on("input", () => {
        var val = $("#input-field").val() + ""
        const lastChar = val.substring(val.length - 1);

        if (wordList[index]) {
            if (lastChar == " ") {
                $("#input-field").val(val.substring(0, val.length - 1));
                if ($("#input-field").val() == wordList[index]) {
                    $(`#words .word:nth-child(${index + 1})`).addClass("green");
                    $("#input-field").val("");
                    $(`#words .word:nth-child(${index + 1})`).removeClass("bold");
                    index++;
                    $(`#words .word:nth-child(${index + 1})`).addClass("bold");
                } else {
                    correct(false);
                }
            } else {
                // Check for current correctness
                correct(wordList[index].startsWith(val))
            }
            if (!wordList[index]) {
                endGame();
            }
        }
    });
}

startGame();