const playerModel = {

    rememberAllShotsPlayer: function(target) {
        let aim = parseInt(target);
        for (let i = 0; i < playerModel.allRememberedShoots.length; i++) {
            if (playerModel.allRememberedShoots[i] == aim) {
                shipView.displayMsgHitOrMisst(4, "messageArea");
                return false;
            }
        }
        playerModel.allRememberedShoots.push(aim);
    },

    validateSelectOptions: function(idName) {
        if (document.getElementById(idName).value == -1) {
            playerView.validateSelectListOptions(0, idName);
            return false;
        } else {
            playerView.validateSelectListOptions(1, idName);
        }
    },

    validateInput: function(idName) {
        if (document.getElementById(idName).value == "") {
            playerView.validateSelectListOptions(0, idName);
            return false;
        } else {
            playerView.validateSelectListOptions(1, idName);
        }
    },

    setLocationShip: function(ship, cell, verticalHorizontalShip) {
        let chosenShipUser = ship.options[ship.selectedIndex].value;
        // 1 - horizontal row, 0 - vertical col
        let setVerHorOfShip = verticalHorizontalShip;
        let generateLocShip = this.generateShipPlayer(chosenShipUser, cell, setVerHorOfShip, playerModel.cntShips)

        if (this.shipOutsideTheBoard(generateLocShip) === false) {
            generateLocShip = "";
            return 5;
        }

        let dots = baseModel.generateDots(generateLocShip, playerModel.cntShips, playerModel.directions);
        if (playerModel.cntShips != 0) {
            if (baseModel.checkNewShipsWithExistsShips(generateLocShip, playerModel.ships) === 1) {
                generateLocShip = ""
                dots = "";
                return false;
            }
            if (baseModel.collision(generateLocShip, dots, playerModel.ships) == false) {
                generateLocShip = ""
                dots = "";
                return false;
            }
        }

        if (chosenShipUser == "1") {
            if (playerModel.cntShipsOne < 4) {
                playerModel.ships.push({ location: generateLocShip, hits: [0], locationAroundShip: dots });
                playerModel.turnOffListShip("setLengthShip", 1);
            }
            playerModel.cntShipsOne++;
        } else if (chosenShipUser == "2") {
            if (playerModel.cntShipsTwo < 3) {
                playerModel.ships.push({ location: generateLocShip, hits: [0, 0], locationAroundShip: dots });
                playerModel.turnOffListShip("setLengthShip", 2);
            }
            playerModel.cntShipsTwo++;
        } else if (chosenShipUser == "3") {
            if (playerModel.cntShipsThree < 2) {
                playerModel.ships.push({ location: generateLocShip, hits: [0, 0, 0], locationAroundShip: dots });
                playerModel.turnOffListShip("setLengthShip", 3);
            }
            playerModel.cntShipsThree++;
        } else if (chosenShipUser == "4") {
            if (playerModel.cntShipsFour < 1) {
                playerModel.cntShipsFour++;
                playerModel.ships.push({ location: generateLocShip, hits: [0, 0, 0, 0], locationAroundShip: dots });
                playerModel.turnOffListShip("setLengthShip", 4);
            }
        } else if (chosenShipUser == "5") {
            if (playerModel.cntShipsFive < 1) {
                playerModel.cntShipsFive++;
                playerModel.ships.push({ location: generateLocShip, hits: [0, 0, 0, 0, 0], locationAroundShip: dots });
                playerModel.turnOffListShip("setLengthShip", 5);
            }
        }
        playerModel.cntShips++;
    },

    //generate position ship and return new array with position which player set
    generateShipPlayer: function(i, cell, verticalHorizontalShip, cntShips) {
        let direction = parseInt(verticalHorizontalShip.value);
        this.directions[cntShips] = direction;
        let row = parseInt(cell.charAt(0));
        let col = parseInt(cell.charAt(1));
        let newShipLocations = [];
        let actuallyShip = parseInt(i);

        for (let j = 0; j < actuallyShip; j++) {
            if (direction === 1) {
                newShipLocations.push(row + "" + (col + j));
            } else {
                newShipLocations.push((row + j) + "" + col);
            }
        }

        return newShipLocations.sort();
    },

    //if ship has three digits in one cell, that mean ship is outside the board
    shipOutsideTheBoard: function(shipLocation) {
        for (let i = 0; i < shipLocation.length; i++) {
            if (shipLocation[i].length >= 3) {
                return false;
            }
        }
    },

    //hide select with available ship
    turnOffListShip: function(idSelectName, lenShip) {
        let op = document.getElementById(idSelectName).getElementsByTagName("option");
        if (lenShip === 1 && this.cntShipsOne === 3) {
            op[1].disabled = true;
        }
        if (lenShip === 2 && this.cntShipsTwo === 2) {
            op[2].disabled = true;
        }
        if (lenShip === 3 && this.cntShipsThree === 1) {
            op[3].disabled = true;
        }
        if (lenShip === 4 && this.cntShipsFour === 0) {
            op[4].disabled = true;
        }
        if (lenShip === 5 && this.cntShipsFive === 0) {
            op[5].disabled = true;
        }
    },

    //as long as ships are available in select option, button will be visible
    blockBtnSinceShipWillBeSet: function(idName, shipsAreSet) {
        if (shipsAreSet === 0) {
            playerView.blockButton(idName, true);
        } else {
            playerView.blockButton(idName, false);
        }
    },





    generateShipLocations: function() {
        console.log("generateShipLocationsPlayer");
        let location, dots;
        for (let i = 0; i < this.numShips; i++) {
            let y = false;
            do {
                y = false;
                location = this.generateShip(i);
                dots = baseModel.generateDots(location, i, this.directions);

                if (baseModel.collision(location, dots, this.randomShips) == true) {
                    y = true;
                }

            } while (y != true);

            this.randomShips[i].location = location;
            console.log("Player location: " + location);
            this.randomShips[i].locationAroundShip = dots;
            console.log("Player dots: " + dots);
            playerView.displayShipAllCells(1, location, "tableBoard2");
            playerView.displayShipAllCells(2, dots, "tableBoard2");
        }
    },

    // 0 ships are vertical "30", 40" "row-col" 
    generateShip: function(i) {
        console.log("generateShipPlayer");
        let direction = Math.floor(Math.random() * 2);
        let row = 0;
        let col = 0;
        let newShipLocations = [];
        let actuallyShip = this.randomShips[i].location.length;

        if (direction === 1) {
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - actuallyShip));
        } else {
            row = Math.floor(Math.random() * (this.boardSize - actuallyShip));
            col = Math.floor(Math.random() * this.boardSize);
        }

        this.directions[i] = direction;
        for (let j = 0; j < actuallyShip; j++) {
            if (direction === 1) {
                newShipLocations.push(row + "" + (col + j));
            } else {
                newShipLocations.push((row + j) + "" + col);
            }
        }

        let newShipLoc = baseModel.checkNewShipsWithExistsShips(newShipLocations, this.randomShips);

        return newShipLoc == 1 ? this.generateShip(i) : newShipLoc;
    },


}