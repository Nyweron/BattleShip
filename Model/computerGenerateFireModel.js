const computerGenerateFireModel = {



    //Generate all 99 cells.
    generateAllCells: function() {
        let allCells = [];
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                allCells.push(i + "" + j);
            }
        }
        return allCells;
    },

    //From allCells computer will get index and
    //under this index computer will get value.
    generateComputerCellToFire: function() {
        let target = "";
        let tar = Math.floor((Math.random() * computerGenerateFireModel.allCells.length) + 0);

        target = (tar >= 0 && tar <= 9) ? target = "0" + String(tar) : target = String(tar);
        console.log("computer target to shot: " + target);

        return target;
    },

    //Computer check target with all playersShip
    checkComputerHitPlayerShip: function(tar) {
        for (let i = 0; i < playerModel.ships.length; i++) {
            for (let j = 0; j < playerModel.ships[i].location.length; j++) {
                if (playerModel.ships[i].location[j] == tar) {
                    this.setShootedShip(i);

                    return tar;
                }
            }
        }
        return tar;
    },

    //If computer hit player ship then mark those ship hit=1
    setShootedShip: function(i) {
        for (let j = 0; j < playerModel.ships[i].hits.length; j++) {
            if (playerModel.ships[i].hits[j] === 0) {
                playerModel.ships[i].hits[j] = 1;
                return true;
            }
        }
    },

}