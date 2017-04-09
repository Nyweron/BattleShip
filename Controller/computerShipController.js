const computerShipController = {
    init: function() {
        computerShipModel.boardSize = 10;
        computerShipModel.ships = shipModel.actuallyShip();
        computerShipModel.numShips = computerShipModel.ships.length;
        computerShipModel.directions = [computerShipModel.numShips];
        computerShipModel.shoots = [];
        computerShipModel.generateShipLocations();
    },


    clearGame: function() {
        computerShipModel.boardSize = 0;
        computerShipModel.numShips = 0
        computerShipModel.directions = [];
        computerShipModel.ships = '';
        computerShipModel.shoots = [];
        shipView.displayMsgHitOrMisst(-3, "messageArea");
        shipView.displayMsgHitOrMisst(-3, "winInfo");
        shipView.displayMsgHitOrMisst(-4, "valueToFire");
        shipView.clearBoard();
    },

    checkPlayerFireWithComputerShips: function(fire) {
        for (let i = 0; i < computerShipModel.ships.length; i++) {
            for (let j = 0; j < computerShipModel.ships[i].location.length; j++) {
                if (fire === computerShipModel.ships[i].location[j]) {
                    this.setShootedComputerShip(i);
                    if (this.computerShipIsSink(i) === true) {
                        this.displayDotsWhenComputerShipIsSink(i);
                        return 3;
                    }
                    return 1;
                    //method check ship is sink and mark fired ship
                }
            }
        }
        return -2;
    },

    setShootedComputerShip: function(i) {
        for (let j = 0; j < computerShipModel.ships[i].hits.length; j++) {
            if (computerShipModel.ships[i].hits[j] === 0) {
                computerShipModel.ships[i].hits[j] = 1;
                break;
            }
        }
    },

    computerShipIsSink: function(i) {
        for (var j = 0; j < computerShipModel.ships[i].hits.length; j++) {
            if (computerShipModel.ships[i].hits[j] !== 1) {
                return false;
            }
        }
        this.allComputerShipsSink();
        return true;
    },

    cntAllComputerShipsHits: function() {
        let cntAllHits = 0;
        for (let i = 0; i < computerShipModel.ships.length; i++) {
            for (let j = 0; j < computerShipModel.ships[i].hits.length; j++) {
                cntAllHits++;
            }
        }
        return cntAllHits;
    },

    allComputerShipsSink: function() {
        const cntAllHits = this.cntAllComputerShipsHits();
        let cntAllHitsSinkShips = 0;

        for (let i = 0; i < computerShipModel.ships.length; i++) {
            for (let j = 0; j < computerShipModel.ships[i].hits.length; j++) {
                if (computerShipModel.ships[i].hits[j] === 1) {
                    cntAllHitsSinkShips++;
                }
            }
        }

        if (cntAllHitsSinkShips === cntAllHits) {
            shipView.displayMsgHitOrMisst(2, "winInfo")
        }
    },

    displayDotsWhenComputerShipIsSink: function(i) {
        for (let j = 0; j < computerShipModel.ships[i].locationAroundShip.length; j++) {
            shipView.displayShipOneCell(2, computerShipModel.ships[i].locationAroundShip[j]);
        }
    },


}