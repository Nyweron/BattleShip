const computerGenerateFireView = {
    displayMsgHitOrMisst: function(val, message) {
        if (val === 1) {
            document.getElementById(message).innerHTML = "Komputer Trafił Twój statek";
            document.getElementById(message).style.color = "#8B0000"; //dark red
        } else {
            document.getElementById(message).innerHTML = "";
            document.getElementById(message).style.color = "#white";
        }
    },
}