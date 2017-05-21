var shipView = {

    displayShip: function(val, target) {
        for (let i = 0; i < target.length; i++) {
            let td = document.getElementById(target[i]);
            if (val === 1) {
                td.style.background = '#FF121B'; //red
            } else if (val === 2) {
                // td.style.background = '#013190'; //blue
            } else {
                td.style.background = '#404040'; //dark grey
            }
        }
    },

    displayMsgHitOrMisst: function(val, divID) {
        if (val === 1) {
            document.getElementById(divID).innerHTML = "TRAFIONY";
            document.getElementById(divID).style.color = "#F99B2C";
        } else if (val === 2) {
            document.getElementById(divID).innerHTML = "ZATOPIŁEŚ, WSZYSTKIE STATKI! <br /> Koniec Gry <br /> Ilość strzałów: " + playerModel.allRememberedShoots.length;
            document.getElementById(divID).style.color = "#F99B2C";
        } else if (val === 3) {
            document.getElementById(divID).innerHTML = "ZATOPIONY!";
            document.getElementById(divID).style.color = "#F99B2C";
        } else if (val === 4) {
            document.getElementById(divID).innerHTML = "Oddałeś strzał już w tą komórkę. Wybierz inny cel!";
            document.getElementById(divID).style.color = "White";
        } else if (val === -1) {
            document.getElementById(divID).innerHTML = "Podaj literę oraz liczbę. <br /> Literę od A do J.<br /> Liczbę od 0 do 9";
            document.getElementById(divID).style.color = "White";
        } else if (val === -2) {
            document.getElementById(divID).innerHTML = "PUDŁO";
            document.getElementById(divID).style.color = '#404040'; //dark grey
        } else if (val === -3) {
            document.getElementById(divID).innerHTML = "";
        } else if (val === -4) {
            document.getElementById(divID).value = "";
        } else {
            document.getElementById(divID).value = "ERROR, coś poszło nie tak :(";
        }
    },

    displayShipOneCell: function(val, target) {
        var td = document.getElementById(target);
        if (val === 1) {
            td.style.background = '#FF121B'; //red
        } else if (val === 2) {
            //  td.style.background = '#013190'; //blue
        } else if (val === 3) {
            td.style.background = '#FF121B'; //red
        } else {
            td.style.background = '#404040'; //dark grey
        }
    },

    clearBoard: function() {
        for (let i = 0; i <= 9; i++) {
            for (let j = 0; j <= 9; j++) {
                let td = document.getElementById(i + "" + j);
                td.style.background = '';
            }
        }
    },

}