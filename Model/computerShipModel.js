var computerShipModel = {

    generateShipLocations: function() {
        let location, dots;
        for (let i = 0; i < this.numShips; i++) {
            let y = false;
            do {
                y = false;
                location = this.generateShip(i);
                dots = baseModel.generateDots(location, i, this.directions);

                if (baseModel.collision(location, dots, this.ships) == true) {
                    y = true;
                }

            } while (y != true);

            this.ships[i].location = location;
            console.log("location: " + location);
            this.ships[i].locationAroundShip = dots;
            console.log("dots: " + dots);
            // shipView.displayShip(1, location);
            //shipView.displayShip(2, dots);
        }
    },

    // 0 ships are vertical "30", 40" "row-col" 
    generateShip: function(i) {
        let direction = Math.floor(Math.random() * 2);
        let row = 0;
        let col = 0;
        let newShipLocations = [];
        let actuallyShip = this.ships[i].location.length;

        if (direction === 1) {
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - actuallyShip));
        } else {
            row = Math.floor(Math.random() * (this.boardSize - actuallyShip));
            col = Math.floor(Math.random() * this.boardSize);
        }

        this.directions[i] = direction;
        for (let j = 0; j < actuallyShip; j++) {
            if (direction === 1) {
                newShipLocations.push(row + "" + (col + j));
            } else {
                newShipLocations.push((row + j) + "" + col);
            }
        }

        let newShipLoc = baseModel.checkNewShipsWithExistsShips(newShipLocations, this.ships);

        return newShipLoc == 1 ? this.generateShip(i) : newShipLoc;
    },


}