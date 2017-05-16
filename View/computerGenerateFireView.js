const computerGenerateFireView = {
    displayMsgHitOrMisst: function(val, message) {
        if (val === 1) {
            document.getElementById(message).innerHTML = "Komputer Trafił Twój statek";
            document.getElementById(message).style.color = "#8B0000"; //dark red
        } else if (val === 2) {
            document.getElementById(message).innerHTML = "Komputer WYGRAŁ";
            document.getElementById(message).style.color = "#8B0000"; //dark red
        } else {
            document.getElementById(message).innerHTML = "";
            document.getElementById(message).style.color = "#white";
        }
    },

    enemyFireYourBoard: function(val, target, boardName) {
        if (boardName == "tableBoard2") {
            target = target + "" + "1";
            console.log("computerGenerateFireView: " + target);
            let td = document.getElementById(target);

            if (val === 1) {
                td.style.background = 'url(./Pictures/cross-solid.png) no-repeat'; //cross, hit
                td.style.backgroundSize = "contain";
            } else if (val === 2) {
                td.style.background = 'url(./Pictures/minus.png) no-repeat'; //minus, miss
                td.style.backgroundSize = "contain";
            } else {
                td.style.background = 'pink';
            }
        }
    },
}