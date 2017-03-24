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
}