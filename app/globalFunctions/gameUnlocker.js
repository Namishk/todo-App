let game1 = false;
let game2 = false;

const game1Unlocker = (gameName) => {

    if(gameName == 'Game1Unlock') game1 = true;
    else if(gameName == 'Game2Unlock') game2 = true;

}

export default game1Unlocker;
export {game1, game2};