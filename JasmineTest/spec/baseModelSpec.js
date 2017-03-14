describe("baseModelSpec", function() {

    it("checkNewShipsWithExistsShips() should be able to return new location ship", function() {
        let shipModelObj = { location: ["44"], hits: [0], locationAroundShip: [] };
        let newValue = baseModel.checkNewShipsWithExistsShips(["66"], shipModelObj);

        expect(newValue).toEqual(["66"]);
    });

});