describe("playerModel", function() {

    playerModel.allRememberedShoots = Array.from(new Array(50), (x, i) => i);

    it("rememberAllShotsPlayer(target) if shoot does not exist in array then push, if exist error", function() {
        const playerValue = 62;
        const findValue = playerModel.allRememberedShoots.findIndex(x => x === playerValue)
        expect(findValue).toEqual(-1);

        playerModel.rememberAllShotsPlayer(playerValue);

        const didInsertValue = playerModel.allRememberedShoots.find(x => x === playerValue)
        expect(didInsertValue).toEqual(playerValue);
    });

});