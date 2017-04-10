const baseController = {
    run: function() {
        computerGenerateFireController.init();
        computerShipController.init();
        playerController.init();
    },
}

window.onload = baseController.run();