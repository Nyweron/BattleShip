const playerController = {

    errorInfoPlayer: "errorInfoPlayer",

    init: function() {
        playerModel.ships = [];
        playerModel.allRememberedShoots = [];
        playerModel.cntShips = 0;
        playerModel.directions = []; //Direction mean row, or col, horizontal or vertical. 0 ships are vertical - col
        playerModel.cntShips = 0;
        playerModel.cntShipsOne = 0;
        playerModel.cntShipsTwo = 0;
        playerModel.cntShipsThree = 0;
        playerModel.cntShipsFour = -1;
        playerModel.cntShipsFive = -1;
        playerModel.blockBtnSinceShipWillBeSet("fireBtn", 0); //1 - false, 0 -true
        playerModel.blockBtnSinceShipWillBeSet("valToFire", 0);
    },



    checkLengthFire: function(valueToFire) {
        return (valueToFire.value.length > 3) ? true : false;
    },

    //Check value which player introduce, if value is correct then display info on board
    checkValueToFire: function(valueToFire) {
        let fireVal = document.getElementById(valueToFire.id);
        if (this.checkLengthFire(fireVal)) {
            //msg about bad values to fire
            shipView.displayMsgHitOrMisst(666, "messageArea");
            return false;
        }

        let charValue = fireVal.value[0];
        let digitValue = fireVal.value[1];

        if (charValue == undefined || digitValue == undefined) {
            shipView.displayMsgHitOrMisst(-1, "messageArea");
            return false;
        }

        let regexLetter = /^[a-jA-J]+$/;
        let regexDigit = /[0-9]/g;

        if (regexLetter.test(charValue)) {
            if (digitValue.match(regexDigit)) {
                const newTarget = baseModel.changeLetterToDigit(charValue) + digitValue;
                if (newTarget === -1) {
                    return false;
                }
                if (playerModel.rememberAllShotsPlayer(newTarget) === false) {
                    return false;
                }

                const info = computerShipController.checkPlayerFireWithComputerShips(newTarget);
                shipView.displayMsgHitOrMisst(info, "messageArea");
                shipView.displayShipOneCell(info, newTarget);

            } else {
                shipView.displayMsgHitOrMisst(-1, "messageArea");
                return false;
            }
        } else {
            shipView.displayMsgHitOrMisst(-1, "messageArea");
            return false;
        }




    },

    //Check ship which player try set on board
    checkShip: function(setShipCell, setLengthShip, verticalHorizontalShip) {
        if (playerModel.validateSelectOptions(setLengthShip.id) == false) {
            playerView.displayMsgHitOrMisst(2, this.errorInfoPlayer);
            return false;
        } else {
            playerView.displayMsgHitOrMisst(0, this.errorInfoPlayer);
        }

        if (playerModel.validateSelectOptions(verticalHorizontalShip.id) == false) {
            playerView.displayMsgHitOrMisst(3, this.errorInfoPlayer);
            return false;
        } else {
            playerView.displayMsgHitOrMisst(0, this.errorInfoPlayer);
        }

        if (playerModel.validateInput(setShipCell.id) == false) {
            playerView.displayMsgHitOrMisst(4, this.errorInfoPlayer);
            return false;
        } else {
            playerView.displayMsgHitOrMisst(0, this.errorInfoPlayer);
        }

        let setLenShip = document.getElementById(setLengthShip.id);

        if (setLenShip < 1 && setLenShip > 5) {
            return false;
        }

        let setShipLocat = document.getElementById(setShipCell.id);
        let setVerticalHorizontalShip = document.getElementById(verticalHorizontalShip.id);

        let charValue = setShipLocat.value[0];
        let digitValue = setShipLocat.value[1];
        let playerShip = "";
        let newTarget = ""

        if (charValue == undefined || digitValue == undefined) {
            shipView.displayMsgHitOrMisst(-1, "messageAreaPlayer");
            return false;
        }

        let myRegexLetter = /^[a-jA-J]+$/;
        let myRegexDigit = /[0-9]/g;

        if (myRegexLetter.test(charValue)) {
            if (digitValue.match(myRegexDigit)) {
                newTarget = baseModel.changeLetterToDigit(charValue) + digitValue;
                if (newTarget === -1) {
                    return false;
                }
            } else {
                shipView.displayMsgHitOrMisst(-1, "messageAreaPlayer");
                return false;
            }
        } else {
            shipView.displayMsgHitOrMisst(-1, "messageAreaPlayer");
            return false;
        }

        playerShip = playerModel.setLocationShip(setLenShip, newTarget, setVerticalHorizontalShip);
        if (playerShip == false) {
            playerView.displayMsgHitOrMisst(1, "errorInfoPlayer");
        } else if (playerShip === 5) {
            playerView.displayMsgHitOrMisst(5, "errorInfoPlayer");
        } else {
            let currentShip = playerModel.ships;
            playerView.displayShipAllCells(1, currentShip[playerModel.cntShips - 1].location, "tableBoard2");
            playerView.displayShipAllCells(2, currentShip[playerModel.cntShips - 1].locationAroundShip, "tableBoard2");
        }

        setLenShip.value = -1;
        setShipLocat.value = "";
        setVerticalHorizontalShip.value = -1;
        if (playerModel.ships.length === shipModel.numShips) {
            var temp = "Rozpocznij grę";
            playerModel.blockBtnSinceShipWillBeSet("fireBtn", 1);
            playerModel.blockBtnSinceShipWillBeSet("valToFire", 1);
        }

    },




}