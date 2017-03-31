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


}