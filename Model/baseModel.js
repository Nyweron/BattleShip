var baseModel = {



    checkNewShipsWithExistsShips: function(newShipLocations, ships) {
        let lengthNewShip = newShipLocations.length;
        for (let c = 0; c < ships.length; c++) {
            for (let v = 0; v < lengthNewShip; v++) {
                for (let k = 0; k < ships[c].location.length; k++) {
                    if (newShipLocations[v] == ships[c].location[k]) {
                        return 1;
                    }
                }
            }
        }
        return newShipLocations;
    },

    generateDots: function(location, i, dirctions) {

    }

}