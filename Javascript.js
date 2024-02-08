var circle = document.getElementById("circle");
var upbtn = document.getElementById("upbtn");
var downbtn = document.getElementById("downbtn");

var rotateValue = circle.style.transform;
var rotetaSum;
upbtn.onclick = function()
{
    rotetaSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotetaSum;
    rotateValue = rotetaSum;
}

downbtn.onclick = function()
{
    rotetaSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotetaSum;
    rotateValue = rotetaSum;
}
