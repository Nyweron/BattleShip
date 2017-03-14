var baseModel = {



    checkNewShipsWithExistsShips: function(newShipLocations, ships) {
        let lengthNewShip = newShipLocations.length;
        for (let c = 0; c < ships.length; c++) {
            for (let v = 0; v < lengthNewShip; v++) {
                for (let k = 0; k < ships[c].location.length; k++) {
                    if (newShipLocations[v] == ships[c].location[k]) {
                        return 1;
                    }
                }
            }
        }
        return newShipLocations;
    },

    deleteDuplicateInArray: function(list) {
        var result = [];
        $.each(list, function(i, e) {
            if ($.inArray(e, result) == -1) result.push(e);
        });
        return result;
    },

    generateDots: function(location, i, dirctions) {
        let newShipDotsLocations = [];
        let k = 0;

        if (location.length == 1) {
            for (let j = 0; j < location.length; j++) {
                let row = parseInt(location[j].charAt(0));
                let col = parseInt(location[j].charAt(1));
                let lowerRow = parseInt(row) - 1;
                let higherRow = parseInt(row) + 1;
                let lowerCol = parseInt(col) - 1;
                let higherCol = parseInt(col) + 1;

                if (k === 0) {
                    if (col === 0 && row === 0) {
                        newShipDotsLocations.push(row + "" + higherCol);
                        newShipDotsLocations.push(higherRow + "" + higherCol);
                        newShipDotsLocations.push(higherRow + "" + col);
                    }
                    if (col === 9 && row === 9) {
                        newShipDotsLocations.push(row + "" + lowerCol);
                        newShipDotsLocations.push(lowerRow + "" + lowerCol);
                        newShipDotsLocations.push(lowerRow + "" + col);
                    }
                    if (col === 9 && row === 0) {
                        newShipDotsLocations.push(row + "" + lowerCol);
                        newShipDotsLocations.push(higherRow + "" + lowerCol);
                        newShipDotsLocations.push(higherRow + "" + col);
                    }
                    if (col === 0 && row === 9) {
                        newShipDotsLocations.push(row + "" + higherCol);
                        newShipDotsLocations.push(lowerRow + "" + higherCol);
                        newShipDotsLocations.push(lowerRow + "" + col);
                    }
                    if (row === 9 && lowerCol >= 0 && higherCol <= 9 && lowerRow >= 0) {
                        newShipDotsLocations.push(lowerRow + "" + lowerCol);
                        newShipDotsLocations.push(row + "" + lowerCol);
                        newShipDotsLocations.push(lowerRow + "" + col);
                        newShipDotsLocations.push(lowerRow + "" + higherCol);
                        newShipDotsLocations.push(row + "" + higherCol);
                    }
                    if (row === 0 && lowerCol >= 0 && higherCol <= 9 && higherRow <= 9) {
                        newShipDotsLocations.push(higherRow + "" + lowerCol);
                        newShipDotsLocations.push(row + "" + lowerCol);
                        newShipDotsLocations.push(higherRow + "" + col);
                        newShipDotsLocations.push(higherRow + "" + higherCol);
                        newShipDotsLocations.push(row + "" + higherCol);
                    }
                    if (higherCol <= 9 && higherRow <= 9 && lowerRow >= 0) {
                        newShipDotsLocations.push(higherRow + "" + col);
                        newShipDotsLocations.push(row + "" + higherCol);
                        newShipDotsLocations.push(higherRow + "" + higherCol);
                        newShipDotsLocations.push(lowerRow + "" + higherCol);
                        newShipDotsLocations.push(lowerRow + "" + col);
                    }
                    if (lowerCol >= 0 && higherRow <= 9 && lowerRow >= 0) {
                        newShipDotsLocations.push(higherRow + "" + col);
                        newShipDotsLocations.push(row + "" + lowerCol);
                        newShipDotsLocations.push(higherRow + "" + lowerCol);
                        newShipDotsLocations.push(lowerRow + "" + lowerCol);
                        newShipDotsLocations.push(lowerRow + "" + col);
                    }
                }
                k++;

            }
        }

        let sortShipDotsLoc = newShipDotsLocations.sort();

        return this.deleteDuplicateInArray(sortShipDotsLoc);
    }

}