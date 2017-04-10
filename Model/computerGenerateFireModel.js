const computerGenerateFireModel = {



    //Generate all 99 cells. From allCells computer will get index and
    //under this index computer will get value.
    generateAllCells: function() {
        let allCells = [];
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                allCells.push(i + "" + j);
            }
        }
        return allCells;
    },


    generateComputerCellToFire: function() {
        let target = "";
        let tar = Math.floor((Math.random() * computerGenerateFireModel.allCells.length) + 0);

        target = (tar >= 0 && tar <= 9) ? target = "0" + String(tar) : target = String(tar);
        console.log("computer target to shot: " + target);

        return target;
    },


}