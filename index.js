const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(gameArray){
  let winningGame = gameArray.find(gameObj => gameObj.result ==="W")
  if (winningGame){
    return winningGame.year
  } else {
    return undefined
  }
}