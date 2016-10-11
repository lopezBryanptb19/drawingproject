var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

/*Background*/
canvas.fillStyle = "brown";
canvas.fillRect(0,0,2000,2000);

canvas.fillStyle = "black";
canvas.fillRect(700,300,20,20);
canvas.fillRect(720,320,20,20);
canvas.fillRect(720,280,20,20);
canvas.fillRect(740,300,20,20);
canvas.fillRect(720,300,20,20);

canvas.fillRect(500,300,20,20);
canvas.fillRect(520,320,20,20);
canvas.fillRect(520,280,20,20);
canvas.fillRect(540,300,20,20);
canvas.fillRect(520,300,20,20);

canvas.beginPath();
canvas.fillStyle = "white";
canvas.arc(200,200,50,0,2*Math.PI,true);
canvas.fill();  
