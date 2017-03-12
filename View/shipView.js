var shipView = {

    displayShip: function(val, target) {
        for (let i = 0; i < target.length; i++) {
            let td = document.getElementById(target[i]);
            if (val === 1) {
                td.style.background = '#FF121B'; //red
            } else if (val === 2) {
                td.style.background = '#013190'; //blue
            } else {
                td.style.background = '#404040'; //dark grey
            }
        }
    },
}