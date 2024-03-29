var canvas = document.getElementById("Game");
var ctx = canvas.getContext("2d");

//seperate interface
var screenHeight = canvas.height - 45;



//ball specs
var ballX = canvas.width/2;
var ballY = canvas.height/2; 
var ballColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
var ballRadius = 60;
var speedX = 5;
var speedY = 3;
var directionDown = true;
var directionRight = true;


function animate(event){
    ctx.fillStyle = 'rgb(189, 186, 8)';
    ctx.fillRect(0, 0, canvas.width, screenHeight + 10);
    ctx.beginPath();
    ctx.fillStyle = ballColor;
    ctx.strokeStyle = 'red';
    ctx.arc(ballX, ballY, ballRadius, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    if(ballX + ballRadius >= canvas.width || ballX - ballRadius <= 0 ) {
        directionRight = !directionRight;
    }

    if(directionRight){
        ballX += speedX;
    }
    else {
        ballX -= speedX;
    }


    if(ballY + ballRadius >= screenHeight || ballY - ballRadius <= 0) {
        directionDown = !directionDown;
    }
    if(directionDown){
        ballY += speedY;
    }
    else {
        ballY -= speedY;
    }

    window.requestAnimationFrame(animate);
}

animate();

//Ball color change
function randColor(){





}


//Score counter

ctx.font = "bold 15px Tahoma";
 ctx.fillStyle = "#ff3c00";
 ctx.fillText("SCORE: ", 150, 580);

canvas.addEventListener("click", function(event){

    var distX = Math.abs(ballX - event.clientX);
    var distY = Math.abs(ballY - event.clientY);

    if(distX < ballRadius && distY < ballRadius){
        changeScore();
    }
})
    var clicks = 0;
    function changeScore() {
        clicks = clicks + 1;
        ctx.clearRect(140,12,150,580)
        ctx.font = "bold 15px Tahoma";
        ctx.fillStyle = "#ff3c00";
        ctx.fillText("SCORE: " + clicks, 150, 580);
}

//Ball speed increase   

canvas.addEventListener("click", function(event){

    var distX = Math.abs(ballX - event.clientX);
    var distY = Math.abs(ballY - event.clientY);

    if(distX < ballRadius && distY < ballRadius){

        speedX *= 1.01, speedY *= 1.01;} 
    }) 


//Ball size increase/decrease 


canvas.addEventListener("click", function(event){

    var distX = Math.abs(ballX - event.clientX);
    var distY = Math.abs(ballY - event.clientY);

    if(distX < ballRadius && distY < ballRadius){        
        ballRadius *= 1.005;} 

    else{ ballRadius *= .97;}
    })





       