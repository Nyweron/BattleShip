const playerView = {
    validateSelectListOptions: function(num, idName) {
        if (num === 0) {
            document.getElementById(idName).style.border = "red solid 3px";
        } else {
            document.getElementById(idName).style.border = "";
        }
    },

    displayMsgHitOrMisst: function(val, message) {
        if (val === 1) {
            document.getElementById(message).innerHTML = "Statek już znajduję się w tym miejscu. Podaj inną lokację";
            document.getElementById(message).style.color = "#8B0000"; //dark red

        } else if (val === 2) {
            document.getElementById(message).innerHTML = "Wybierz statek!";
            document.getElementById(message).style.color = "#8B0000"; //dark red
        } else if (val === 3) {
            document.getElementById(message).innerHTML = "Wybierz pionowo/poziomo!";
            document.getElementById(message).style.color = "#8B0000"; //dark red
        } else if (val === 4) {
            document.getElementById(message).innerHTML = "Podaj literę i cyfrę!";
            document.getElementById(message).style.color = "#8B0000"; //dark red
        } else if (val === 5) {
            document.getElementById(message).innerHTML = "Statek poza planszą! wybierz jeszcze raz.";
            document.getElementById(message).style.color = "#8B0000"; //dark red
        } else {
            document.getElementById(message).innerHTML = "";
            document.getElementById(message).style.color = "white"; //dark red
        }
    },


    validateSelectListOptions: function(num, idName) {
        if (num === 0) {
            document.getElementById(idName).style.border = "#3B3738 solid 3px";
        } else {
            document.getElementById(idName).style.border = "";
        }
    },

    displayShipAllCells: function(val, target, boardName) {
        if (boardName == "tableBoard2") {
            for (let i = 0; i < target.length; i++) {

                let td = document.getElementById(target[i] + "" + 1);
                if (val === 1) {
                    td.style.background = '#FF121B'; //red
                } else if (val === 2) {
                    td.style.background = '#013190'; //blue
                } else if (val === 3) {
                    td.style.background = '#FF121B'; //red
                } else {
                    td.style.background = '#404040'; //dark grey
                }
            }
        }
    },

    blockButton: function(idName, val) {
        document.getElementById(idName).disabled = val;
    },

    clearBoard: function() {
        for (let i = 0; i <= 9; i++) {
            for (let j = 0; j <= 9; j++) {
                let td = document.getElementById(i + "" + j + "" + 1);
                td.style.background = '';
            }
        }
    },

}