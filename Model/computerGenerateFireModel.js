const computerGenerateFireModel = {

    retTargetValue: "",

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
        console.log("checkComputerHitPlayerShip.tar " + tar);
        //remember all shoots, and remove value from allCells. Thanks that when I'm debug, I'm sure that computer never use the same value.
        let target = this.rememberComputerShots(tar);
        console.log("checkComputerHitPlayerShip.target " + target);
        //remove target from allCells. Computer never choose the same value
        this.removeOneCellFromAllCells(target);

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

    rememberComputerShots: function(target) {
        console.log("rememberComputerShots.target " + target);
        let aim = parseInt(target);
        console.log("rememberComputerShots.aim " + aim);
        let valueFromIndex = computerGenerateFireModel.allCells[aim];
        console.log("rememberComputerShots.valueFromIndex " + valueFromIndex);
        //remember all computer shoots
        computerGenerateFireModel.shoots.push(valueFromIndex);
        retTargetValue = valueFromIndex;

        return valueFromIndex;
    },

    removeOneCellFromAllCells: function(target) {
        console.log("removeOneCellFromAllCells.target " + target);

        let index = computerGenerateFireModel.allCells.indexOf(target);
        console.log("removeOneCellFromAllCells.index " + index);
        if (index >= 0) {
            console.log("removeOneCellFromAllCells " + computerGenerateFireModel.allCells);
            //remove one row in array, remove value
            computerGenerateFireModel.allCells.splice(index, 1);
            console.log("removeOneCellFromAllCells " + computerGenerateFireModel.allCells);

        }
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