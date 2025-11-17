$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(400,600,200,8)
    createPlatform(200,500,200,8)
    createPlatform(400,400,200,8)
    createPlatform(600,300,200,8)
    createPlatform(350,200,200,8)




    // TODO 3 - Create Collectables
    
    createCollectable("diamond",300,700);
    createCollectable("grace",500,500);
    createCollectable("kennedi",250,450);
    createCollectable("max",500,350);
    createCollectable("steve",450,100);
    



    
    // TODO 4 - Create Cannons
   createCannon('left',300,1500);
   createCannon('top',800,1500);           
   createCannon('right',500, 1500); 

    



    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
