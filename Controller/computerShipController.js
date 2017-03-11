var computerShipController = {
    init: function() {
        computerShipModel.boardSize = 10;
        computerShipModel.ships = shipModel.actuallyShip();
        computerShipModel.numShips = computerShipModel.ships.length;
        computerShipModel.directions = [computerShipModel.numShips];
        computerShipModel.shoots = [];
        computerShipModel.generateShipLocations();
    },
}