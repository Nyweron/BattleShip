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
            document.getElementById(idName).style.border = "red solid 3px";
        } else {
            document.getElementById(idName).style.border = "";
        }
    },

}