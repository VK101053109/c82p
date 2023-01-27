canvas=document.getElementById("mycanvas");
pen=canvas.getContext("2d");
var mouseevent="";
pen_color="black";
line_width="1";
radius=10;


canvas.addEventListener("mousedown",my_md);
function my_md(e){
    pen_color=document.getElementById("color").value;
    line_width=document.getElementById("lw").value;
    radius=document.getElementById("radius").value
    mouseevent="mousedown";

}
canvas.addEventListener("mouseup",my_mu);
function my_mu(e){
    mouseevent="mouseup";
}
canvas.addEventListener("mouseleave",my_ml);
function my_ml(e){
    mouseevent="mouseleave";
}
canvas.addEventListener("mousemove",my_mm);
function my_mm(e){
    cx=e.clientX-canvas.offsetLeft;
    cy=e.clientY-canvas.offsetTop;
    if(mouseevent=="mousedown"){
        pen.beginPath();
        pen.strokeStyle=pen_color;
        pen.lineWidth=line_width;
        pen.arc(cx,cy,radius,0,2*Math.PI);
        pen.stroke();
    }
   

}
function cleararea(){
    pen.clearRect(0,0,canvas.width,canvas.height);
}


