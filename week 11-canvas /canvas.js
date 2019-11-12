var Airplain = new Image();
function init() {
  Airplain.src = 'https://www.searchpng.com/wp-content/uploads/2019/01/Planes-PNG-image-1-715x241.png';
   window.requestAnimationFrame(draw);
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0,400, 600); // clear canvas

  ctx.fillStyle = "#b40ef7";
  ctx.strokeStyle = "#b20ef7";
  ctx.save();
  ctx.translate(150, 150);

  

  // Canvas
  ctx.save();
  ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
  ctx.translate(0, 28.5);
  ctx.drawImage(Airplain, 3.5, 3.5);
  ctx.restore();

  ctx.restore();

  ctx.beginPath();
  ctx.arc(150, 150, 105, 0, Math.PI * 2, false); 
  ctx.stroke();

  ctx.drawImage(Airplain, 0, 0, 300, 300);

  window.requestAnimationFrame(draw);
}

init();

        const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = "#d5f9f9";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 6;
        ctx.shadowColor = "#8f8578";
        ctx.fillStyle = "#fbf7de";
        ctx.fillRect(40, 40, 300, 300);

        ctx.font = "34px Arial";
ctx.strokeText("Cabo San Lucas", 65, 180);



//draw 
ctx.beginPath();
ctx.moveTo(0, 600);
 ctx.fillRect(25, 25, 100, 100);
ctx.clearRect(45, 45, 60, 60);
 ctx.strokeRect(50, 50, 50, 50);
        
      
      
      


