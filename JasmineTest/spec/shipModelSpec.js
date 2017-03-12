describe("shipModel", function() {

    it("actuallyShip() should be able to return length all actuall ships", function() {
        let shipModelObj = shipModel.actuallyShip().length;
        expect(shipModelObj).toEqual(3);
    });

});