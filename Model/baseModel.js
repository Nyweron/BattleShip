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

    generateDots: function(location, i, directions) {
        let newShipDotsLocations = [];
        let k = 0;



        if (location.length == 2) {
            for (var j = 0; j < location.length; j++) {
                var row = parseInt(location[j].charAt(0));
                var col = parseInt(location[j].charAt(1));
                var lowerRow = parseInt(row) - 1;
                var higherRow = parseInt(row) + 1;
                var lowerCol = parseInt(col) - 1;
                var higherCol = parseInt(col) + 1;


                if (directions[i] === 0) {
                    if (k === 0) {
                        if (lowerCol >= 0 && row >= 0 && row <= 9) {
                            newShipDotsLocations.push(row + "" + lowerCol);
                        }
                        if (col >= 0 && col <= 9 && row >= 0 && row <= 9 && higherCol <= 9) {
                            newShipDotsLocations.push(row + "" + higherCol);
                        }
                        if (lowerRow >= 0 && col >= 0) {
                            newShipDotsLocations.push(lowerRow + "" + col);
                        }
                        if (lowerRow >= 0 && higherRow <= 9 && lowerCol >= 0 && higherCol <= 9) {
                            newShipDotsLocations.push(lowerRow + "" + higherCol);
                            newShipDotsLocations.push(row + "" + higherCol); //row
                            newShipDotsLocations.push(lowerRow + "" + lowerCol); //row
                        }

                        if (col == 9 && row == 0) {
                            newShipDotsLocations.push(row + "" + lowerCol);
                        }

                        if (lowerRow >= 0 && lowerRow <= 9 && lowerCol >= 0 && lowerCol <= 9) {
                            newShipDotsLocations.push(lowerRow + "" + lowerCol)
                        }
                        if (higherCol >= 0 && higherCol <= 9 && lowerRow >= 0) {
                            newShipDotsLocations.push(lowerRow + "" + higherCol)
                        }
                    } else if (k === 1) {
                        if (lowerCol < 0 && row >= 0 && row <= 9 && higherCol <= 9) {
                            newShipDotsLocations.push(row + "" + higherCol);
                        }
                        if (higherRow <= 9 && lowerCol < 0) {
                            newShipDotsLocations.push(higherRow + "" + col);
                        }
                        if (row >= 0 && row <= 9 && col >= 0 && col <= 9 && lowerCol >= 0 && higherCol <= 9) {
                            newShipDotsLocations.push(row + "" + lowerCol);
                            newShipDotsLocations.push(row + "" + higherCol);
                        }
                        if (higherRow <= 9 && higherCol >= 0 && higherCol <= 9 && lowerCol >= 0) {
                            newShipDotsLocations.push(higherRow + "" + lowerCol);
                            newShipDotsLocations.push(higherRow + "" + col);
                            newShipDotsLocations.push(higherRow + "" + higherCol);
                        }

                        if (col == 9 && row >= 0 && row <= 9 && lowerCol >= 0) {
                            newShipDotsLocations.push(row + "" + lowerCol);
                        }

                        if (lowerCol <= 9 && lowerCol >= 0 && higherRow >= 0 && higherRow <= 9) {
                            newShipDotsLocations.push(higherRow + "" + lowerCol);
                            newShipDotsLocations.push(higherRow + "" + col);
                        }

                        if (row == 9 && col == 9) {
                            newShipDotsLocations.push(row + "" + lowerCol);
                        }

                        if (higherCol >= 0 && higherCol <= 9 && higherRow >= 0 && higherRow <= 9) {
                            newShipDotsLocations.push(higherRow + "" + higherCol);
                        }
                    }
                } else {
                    if (k === 0) {
                        if (col === 0 && row === 0) {
                            newShipDotsLocations.push(higherRow + "" + col);
                        }
                        if (lowerCol >= 0 && lowerCol <= 9 && row === 0 && higherRow <= 9) {
                            newShipDotsLocations.push(row + "" + lowerCol);
                            newShipDotsLocations.push(higherRow + "" + lowerCol);
                            newShipDotsLocations.push(higherRow + "" + col);
                        }
                        if (row === 9 && col === 0 && lowerRow >= 0) {
                            newShipDotsLocations.push(lowerRow + "" + col);
                        }
                        if (lowerRow >= 0 && lowerCol >= 0 && row === 9) {
                            newShipDotsLocations.push(row + "" + lowerCol);
                            newShipDotsLocations.push(lowerRow + "" + lowerCol);
                            newShipDotsLocations.push(lowerRow + "" + col);
                        }
                        if (col === 0 && lowerRow >= 0 && higherRow <= 9 && higherCol <= 9) {
                            newShipDotsLocations.push(lowerRow + "" + col);
                            newShipDotsLocations.push(higherRow + "" + col);
                        }
                        if (higherCol <= 9 && lowerCol >= 0 && higherRow <= 9 && lowerRow >= 0) {
                            newShipDotsLocations.push(lowerRow + "" + col);
                            newShipDotsLocations.push(lowerRow + "" + lowerCol);
                            newShipDotsLocations.push(row + "" + lowerCol);
                            newShipDotsLocations.push(higherRow + "" + lowerCol);
                            newShipDotsLocations.push(higherRow + "" + col);
                        }

                    } else if (k === 1) {
                        if (lowerCol === 0 && row === 0 && higherCol <= 9 && higherRow <= 9) {
                            newShipDotsLocations.push(higherRow + "" + col);
                            newShipDotsLocations.push(higherRow + "" + higherCol);
                            newShipDotsLocations.push(row + "" + higherCol);
                        }
                        if (row === 0 && col === 9 && higherRow <= 9) {
                            newShipDotsLocations.push(higherRow + "" + col);
                        }
                        if (lowerCol >= 0 && row === 0 && higherCol <= 9 && higherRow <= 9) {
                            newShipDotsLocations.push(higherRow + "" + col);
                            newShipDotsLocations.push(higherRow + "" + higherCol);
                            newShipDotsLocations.push(row + "" + higherCol);
                        }
                        if (row === 9 && lowerRow >= 0 && higherCol <= 9) {
                            newShipDotsLocations.push(lowerRow + "" + col);
                            newShipDotsLocations.push(lowerRow + "" + higherCol);
                            newShipDotsLocations.push(row + "" + higherCol);
                        }
                        if (col === 9 && row === 9) {
                            newShipDotsLocations.push(lowerRow + "" + col);
                        }
                        if (lowerRow >= 0 && higherRow <= 9 && higherCol <= 9) {
                            newShipDotsLocations.push(lowerRow + "" + col);
                            newShipDotsLocations.push(higherRow + "" + col);
                            newShipDotsLocations.push(higherRow + "" + higherCol);
                            newShipDotsLocations.push(row + "" + higherCol);
                            newShipDotsLocations.push(lowerRow + "" + higherCol);
                        }
                        if (col === 9 && lowerRow >= 0 && higherRow <= 9 && lowerCol >= 0) {
                            newShipDotsLocations.push(higherRow + "" + col);
                            newShipDotsLocations.push(lowerRow + "" + col);
                        }
                    }

                }
                k++;
            }
        }

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