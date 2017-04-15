const computerGenerateFireModel = {

    retTargetValue: "",
    lastComputerFireHit: [false],

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

        return (tar >= 0 && tar <= 9) ? target = "0" + String(tar) : target = String(tar);
    },

    //Computer check target with all playerShips
    checkComputerHitPlayerShip: function(tar) {
        //remember all shoots, and remove value from allCells. Thanks that when I'm debug, I'm sure that computer never use the same value.
        let target = this.rememberComputerShots(tar);
        //remove target from allCells. Computer never choose the same value
        this.removeOneCellFromAllCells(target);
        console.log("target: " + target);
        for (let i = 0; i < playerModel.ships.length; i++) {
            for (let j = 0; j < playerModel.ships[i].location.length; j++) {
                if (playerModel.ships[i].location[j] == target) {
                    this.setShootedShip(i);
                    this.lastComputerFireHit[0] = true;
                    this.lastComputerFireHit[1] = target;
                    console.log(this.lastComputerFireHit);
                    return target;
                }
            }
        }
        this.lastComputerFireHit[0] = false;
        this.lastComputerFireHit[1] = "";
        return target;
    },

    checkComputerShootWhenHitEnemyShip: function(target) {
        var tar = this.rememberComputerShotsWhenHit(target);
        this.removeOneCellFromAllCells(tar);

        for (var i = 0; i < playerModel.ships.length; i++) {
            for (var j = 0; j < playerModel.ships[i].location.length; j++) {
                if (playerModel.ships[i].location[j] == tar) {
                    this.setShootedShip(i);
                    this.lastComputerFireHit[0] = true;
                    this.lastComputerFireHit[1] = tar;

                    return tar;
                }
            }
        }
        this.lastComputerFireHit[0] = false;
        this.lastComputerFireHit[1] = "";

        return tar;
    },

    rememberComputerShots: function(target) {
        let aim = parseInt(target);
        let valueFromIndex = computerGenerateFireModel.allCells[aim];
        //remember all computer shoots
        computerGenerateFireModel.shoots.push(valueFromIndex);
        retTargetValue = valueFromIndex;

        return valueFromIndex;
    },

    rememberComputerShotsWhenHit: function(target) {
        var index = computerGenerateFireModel.allCells.indexOf(target);
        if (index >= 0) {
            computerGenerateFireModel.shoots.push(target);
        }

        retTargetValue = target;

        return target;
    },

    removeOneCellFromAllCells: function(target) {
        let index = computerGenerateFireModel.allCells.indexOf(target);

        if (index >= 0) {
            //remove one row in array, remove value
            computerGenerateFireModel.allCells.splice(index, 1);
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

    //if last computer shoot hit the enemy ship generate new value around last hit.
    shotAroundTheHitEnemyShip: function(hitItShip) {
        let row = parseInt(hitItShip.charAt(0));
        let col = parseInt(hitItShip.charAt(1));
        let lowerRow = parseInt(row) - 1;
        let higherRow = parseInt(row) + 1;
        let lowerCol = parseInt(col) - 1;
        let higherCol = parseInt(col) + 1;
        let newTarget = "";
        let _bool = false;

        //Notes
        //Check four times every possible shot around the hit ship.
        //For example, last hit was C3, so computer should choose random number like C4, C2, B3, D3...

        if (higherCol <= 9) {
            newTarget = row + "" + higherCol;
        } else if (lowerCol >= 0) {
            newTarget = row + "" + lowerCol;
        } else if (higherRow <= 9) {
            newTarget = higherRow + "" + col;
        } else if (lowerRow >= 0) {
            newTarget = lowerRow + "" + col;
        }

        for (let i = 0; i < computerGenerateFireModel.shoots.length; i++) {
            if (newTarget === computerGenerateFireModel.shoots[i]) {
                newTarget = this.generateComputerCellToFire();
                newTarget = this.checkComputerHitPlayerShip(newTarget);
                _bool = true;
                break;
            }
        }

        if (_bool === false) {
            newTarget = this.checkComputerShootWhenHitEnemyShip(newTarget);
        }



        return newTarget;
    },

}