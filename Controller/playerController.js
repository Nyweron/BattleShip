var playerController = {

    checkLengthFire: function(valueToFire) {
        if (valueToFire.value.length > 3) {
            return true;
        }
        return false;
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
    },
}