let state = {};

const canvas = document.getElementById("game");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#4A3C68";

// ctx.fillRect(200, 200, 440, 320);
ctx.lineWidth;
//path building methods
ctx.lineWidth = 16;
// ctx.beginPath();
ctx.moveTo(100, 350);
ctx.quadraticCurveTo(300, 500, 500, 350);
ctx.stroke();
//start a new game and retart a game
newGame();
//initial state

const newGame = () => {
  state = {
    //phase of the player for aiming
    phase: "aiming",
    //current player
    currentPlayer: 1,
    //array to hold background buildings
    backgroundBuilding: [],
    //array to hold buildings
    buildings: [],
    //array to hold blast holes
    blastHoles: [],
    //bomb
    bomb: {
      x: undefined,
      y: undefined,
      radius: 0,
      rotation: 0,
      velocity: { x: 0, y: 0 },
    },
  };

  for (let i = 0; i < 11; i++) {
    //Generate the background buildings
    generateBackgroundBuilding();
  }
  for (let i = 0; i < 8; i++) {
    //Generate the buildings
    generateBuilding();
  }
  initializeBombPositions();
  //Draw funcion used to paint the background buildings
  draw();
};

const draw = () => {
  //transalte method to shift
  ctx.translate(0, window.length);
};
