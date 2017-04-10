const computerGenerateFireController = {
    init: function() {
        computerGenerateFireModel.shoots = [];
        computerGenerateFireModel.allCells = computerGenerateFireModel.generateAllCells();
    },
}