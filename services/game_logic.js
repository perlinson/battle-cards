import * as constants from './contants'

class GameLogic {
  static changePhase(gameState) {
    switch (gameState.phase) {
      case constants.START:
        gameState.phase = constants.DRAW
        break
      case constants.DRAW:
        gameState.phase = constants.STANDBY
        break
      case constants.STANDBY:
        gameState.phase = constants.FIRST_MAIN
        break
      case constants.FIRST_MAIN:
        gameState.phase = constants.BATTLE
        break
      case constants.BATTLE:
        if (gameState.skipBattle) {
          gameState.phase = constants.END
        } else {
          gameState.phase = constants.SECOND_MAIN
        }
        break
      case constants.SECOND_MAIN:
        gameState.phase = constants.END
        break
    }
    return gameState
  }
}
