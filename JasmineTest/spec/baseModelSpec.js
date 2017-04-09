describe("baseModelSpec", function() {


    let shipExist = { location: ["44", "45", "46"], hits: [1, 1, 1], locationAroundShip: ["43", "33", "34", "35", "36", "37", "47", "57", "56", "55", "54", "53"] };
    let newShip = { location: ["66"], hits: [1], locationAroundShip: ["55", "56", "57", "65", "67", "75", "76", "77"] };

    it("checkNewShipsWithExistsShips() should be able to return new location ship", function() {
        let shipModelObj = { location: ["44"], hits: [0], locationAroundShip: [] };
        const newValue = baseModel.checkNewShipsWithExistsShips(["66"], shipModelObj);

        expect(newValue).toEqual(["66"]);
    });

    it("checkDotsAroundsShipWithNewLocationShip(ship, loc) return true when new ship.location is no equal with exist locationAroundShip", function() {
        const func = baseModel.checkDotsAroundsShipWithNewLocationShip(shipExist, newShip.location);
        expect(func).toBe(true);
    });

    it("checkAllShipsWithNewDots(ship, dot, iterator) return true when new dots is no equal with exist ships", function() {
        for (let index = 0; index < shipExist.location.length; index++) {
            const func = baseModel.checkAllShipsWithNewDots(shipExist, newShip.locationAroundShip, index);
            expect(func).toBe(true);
        }
    });

    it("collision(location, dots, ships)  return true when checkDotsAroundsShipWithNewLocationShip() and checkAllShipsWithNewDots() are true", function() {
        let shipArray = new Array();
        shipArray.push(shipExist);
        const func = baseModel.collision(newShip.location, newShip.locationAroundShip, shipArray);
        expect(func).toBe(true);
    });

    it("cntAllShipsHits(ships) return length hits in ships", function() {
        let shipArray = new Array();
        shipArray.push(shipExist);
        const func = baseModel.cntAllShipsHits(shipArray);
        expect(func).toEqual(3);
    });

    it("allShipsSink(ships) return true when all ships have hits equal 1", function() {
        let shipArray = new Array();
        shipArray.push(shipExist);
        shipArray.push(newShip);
        const func = baseModel.allShipsSink(shipArray);
        expect(func).toBe(true);
    });

});