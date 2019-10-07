/* Para resolução eu assumi que o robô conhece o destino, e segue uma estratégia para alcançar esse destino,
o robô também guarda um histórico das posições visitadas para não repetir posições, somente se chegar em um beco sem saida,ai ele consegue dar um ou mais passos atrás.*/


const map = [
  [1,1,1,1],
  [0,1,1,0],
  [0,1,0,1],
  [0,1,9,1],
  [1,1,1,1]
];

const robot = {
  posY: 0,
  posX: 0,
  path: [],
  history: [
    '0,0'
  ],
}

const destiny = {
  posY: 3,
  posX: 2
}

// Print success message.
const printSuccess = () => {
  console.log(`
    The robot has reached the goal:
    Position X:${robot.posX} Y:${robot.posY}
    end of program...
  `)
}

//Try always get to columns first
while (map[robot.posY][robot.posX] !== map[destiny.posY][destiny.posX]) {
  console.log(`Robot position: X:${robot.posX} Y:${robot.posY}`)

  //look surroundings
  if (map[robot.posY + 1]) {
    if (map[robot.posY + 1][robot.posX] && map[robot.posY + 1][robot.posX] === 9) {
      robot.posY++;
      break;
    }
  }
  if (map[robot.posY][robot.posX + 1] && map[robot.posY][robot.posX + 1] === 9) {
    robot.posX++;
    break;
  }
  if (map[robot.posY - 1]) {
    if (map[robot.posY - 1][robot.posX] && map[robot.posY - 1][robot.posX] === 9) {
      robot.posY--;
      break;
    }
  }
  if (map[robot.posY][robot.posX - 1] && map[robot.posY][robot.posX - 1] === 9) {
    robot.posX--;
    break;
  }


  //Start walk
  if (robot.posY < destiny.posY) {
    if (
      map[robot.posY + 1] 
      && map[robot.posY + 1][robot.posX] !== 0 
      && robot.history.lastIndexOf(`${robot.posX},${robot.posY + 1}`) === -1 //Search on history path backwards
    ) { //if exists and isn't a 0 and the position isn't visited yet
      robot.posY++
      robot.history.push(`${robot.posX},${robot.posY}`)
      robot.path.push(`${robot.posX},${robot.posY}`)
    }
    else if (
      map[robot.posY][robot.posX + 1] 
      && map[robot.posY][robot.posX + 1] !== 0 
      && robot.history.lastIndexOf(`${robot.posX + 1},${robot.posY}`) === -1
    ) { //if exists and isn't a 0 and the position isn't visited yet
      robot.posX++
      robot.history.push(`${robot.posX},${robot.posY}`)
      robot.path.push(`${robot.posX},${robot.posY}`)
    }
    else { // step backwards if hits a dead end
      robot.path.pop()
      robot.posX = robot.path[robot.path.length - 1].posX
      robot.posY = robot.path[robot.path.length - 1].posY
    }
  }
  else if (robot.posY > destiny.posY) {
    if (
      map[robot.posY - 1] 
      && map[robot.posY - 1][robot.posX] !== 0 
      && robot.history.lastIndexOf(`${robot.posX},${robot.posY - 1}`) === -1 //Search on history path backwards
    ) { //if exists and isn't a 0 and the position isn't visited yet
      robot.posY--
      robot.history.push(`${robot.posX},${robot.posY}`)
      robot.path.push(`${robot.posX},${robot.posY}`)
    }
    else if (
      map[robot.posY][robot.posX + 1] 
      && map[robot.posY][robot.posX + 1] !== 0 
      && robot.history.lastIndexOf(`${robot.posX + 1},${robot.posY}`) === -1
    ) { //if exists and isn't a 0 and the position isn't visited yet
      robot.posX++
      robot.history.push(`${robot.posX},${robot.posY}`)
      robot.path.push(`${robot.posX},${robot.posY}`)
    }
    else { // step backwards if hits a dead end
      robot.path.pop()
      robot.posX = robot.path[robot.path.length - 1].posX
      robot.posY = robot.path[robot.path.length - 1].posY
    }
  }
  else if (robot.posX < destiny.posX) {
    if (
      map[robot.posY][robot.posX + 1] 
      && map[robot.posY][robot.posX + 1] !== 0 
      && robot.history.lastIndexOf(`${robot.posX + 1},${robot.posY}`) === -1
    ) { //if exists and isn't a 0 and the position isn't visited yet
      robot.posX++
      robot.history.push(`${robot.posX},${robot.posY}`)
      robot.path.push(`${robot.posX},${robot.posY}`)
    }
    else if (
      map[robot.posY + 1] 
      && map[robot.posY + 1][robot.posX] !== 0 
      && robot.history.lastIndexOf(`${robot.posX},${robot.posY + 1}`) === -1 //Search on history path backwards
    ) { //if exists and isn't a 0 and the position isn't visited yet
      robot.posY++
      robot.history.push(`${robot.posX},${robot.posY}`)
      robot.path.push(`${robot.posX},${robot.posY}`)
    }
    else { // step backwards if hits a dead end
      robot.path.pop()
      robot.posX = robot.path[robot.path.length - 1].posX
      robot.posY = robot.path[robot.path.length - 1].posY
    }
  }
  else if (robot.posX > destiny.posX) {
    if (
      map[robot.posY][robot.posX - 1] 
      && map[robot.posY][robot.posX - 1] !== 0 
      && robot.history.lastIndexOf(`${robot.posX - 1},${robot.posY}`) === -1
    ) { //if exists and isn't a 0 and the position isn't visited yet
      robot.posX--
      robot.history.push(`${robot.posX},${robot.posY}`)
      robot.path.push(`${robot.posX},${robot.posY}`)
    }
    else if (
      map[robot.posY + 1] 
      && map[robot.posY + 1][robot.posX] !== 0 
      && robot.history.lastIndexOf(`${robot.posX},${robot.posY + 1}`) === -1 //Search on history path backwards
    ) { //if exists and isn't a 0 and the position isn't visited yet
      robot.posY++
      robot.history.push(`${robot.posX},${robot.posY}`)
      robot.path.push(`${robot.posX},${robot.posY}`)
    }
    else { // step backwards if hits a dead end
      robot.path.pop()
      robot.posX = robot.path[robot.path.length - 1].posX
      robot.posY = robot.path[robot.path.length - 1].posY
    }
  }
}

printSuccess();




