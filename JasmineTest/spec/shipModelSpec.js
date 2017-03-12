describe("shipModel", function() {

    it("generateShip() should be able to return length all actuall ships", function() {
        let shipModelObj = shipModel.actuallyShip().length;
        expect(shipModelObj).toEqual(3);
    });

});