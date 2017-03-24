const baseController = {
    run: function() {
        computerShipController.init();
        playerController.init();
    },
}

window.onload = baseController.run();