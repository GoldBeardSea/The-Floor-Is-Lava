(function(){

  var buffer, context, drawMap, map, size;

//buffer to allow for resizing without breaks in images
  buffer = document.createElement('canvas').getContext('2d');
  context = document.querySelector('canvas').getContext('2d');

  map = [1,1,1,1,1,1,1,1,1,1,1,
         1,0,0,0,0,0,0,0,0,0,1,
         1,0,0,0,0,0,0,0,0,0,1,
         1,0,0,0,0,0,0,0,0,0,1,
         1,1,1,1,1,1,1,1,1,1,1,];

  size = 4;

  // set buffer values to the size of tilemap dimension
  buffer.canvas.width = 11;
  buffer.canvas.heigth = 4;

  drawMap = function (){
    for (let index = 0; index < map.length; index++){
      //draw a black tile for 1s and white for anythng else
      buffer.fillStyle = (map[index]===1)?'#000000':'#ffffff';
      buffer.fillRect((index % 11) * size, Math.floor(index/11) * size, size, size, size);
    }

    context.drawImage(buffer.canvas, 0, 0, buffer.canvas.width, buffer.canvas.height);

    drawMap;
  };
});