const playerController = {

    errorInfoPlayer: "errorInfoPlayer",

    init: function() {
        playerModel.allRememberedShoots = [];
    },



    checkLengthFire: function(valueToFire) {
        return (valueToFire.value.length > 3) ? true : false;
    },

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


    },




}