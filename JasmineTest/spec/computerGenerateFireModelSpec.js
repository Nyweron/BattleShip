describe("computerGenerateFireModelSpec", function() {

    const tempAllCells = computerGenerateFireModel.generateAllCells();
    computerGenerateFireModel.allCells = tempAllCells;

    it("generateAllCells() generate 99 cells in variable allCells ", function() {
        expect(tempAllCells.length).toEqual(100);
    });

    it("generateComputerCellToFire() generate one of 99 avaiable cells ", function() {
        let cell = computerGenerateFireModel.generateComputerCellToFire();
        expect(tempAllCells).toContain(cell);
    });

    //TO DO rememberComputerShots

});