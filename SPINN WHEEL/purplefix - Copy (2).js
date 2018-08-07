var rndAngle
x="skyblue,green,yellow,orange,red,pink,purple,darkblue".split(",")
var count =1
var colors = ["red","orange","yellow","green","skyblue","darkblue","purple","pink"];
window.onload=function()
{
    var wheel=document.getElementById("wheel")
}


function spin()
{
    rndAngle=((Math.floor(Math.random()*8)*(45))-22.5)+1440*count
    count++
    wheel.style.transform="rotate("+rndAngle+"deg)"
    if((x[Math.abs(((rndAngle+22.5)/22.5)%16)/2])==document.getElementsByTagName("select")[0].value)
    {
        setTimeout(function(){alert("Are bhai bhai bhai JEET gaye 2,00,000")},1900)
    }
    con();

}
function con() {
    if((x[Math.abs(((rndAngle+22.5)/22.5)%16)/2])==colors[0]){
        setTimeout(function(){alert("CONGO YOU HAVE WON 2,00,000RS")},1900);
    }
    else if((x[Math.abs(((rndAngle+22.5)/22.5)%16)/2])==colors[1]){
        setTimeout(function(){alert("OPSSSS IT/'/S NOT YOUR DAY TODADY" )},1900);
    }
    else if((x[Math.abs(((rndAngle+22.5)/22.5)%16)/2])==colors[2]){
        setTimeout(function(){alert("OPSS TRY NEXT TIME")},1900);
    }
    else if((x[Math.abs(((rndAngle+22.5)/22.5)%16)/2])==colors[3]){
        setTimeout(function(){alert("YOU HAVE WON A HARLEY BIKE ||||||| ")},500);
    }
    else if((x[Math.abs(((rndAngle+22.5)/22.5)%16)/2])==colors[4]){
        setTimeout(function(){alert("YOU ARE NOT LUCKY TODAY")},1900);
    }
    else if((x[Math.abs(((rndAngle+22.5)/22.5)%16)/2])==colors[5]){
        setTimeout(function(){alert("YOU CAN TRY NEXT TIME")},1900);
    }
    else if((x[Math.abs(((rndAngle+22.5)/22.5)%16)/2])==colors[6]){
        setTimeout(function(){alert("YOU ARE UNLUCKY TODAY")},1900);
    }
    else if((x[Math.abs(((rndAngle+22.5)/22.5)%16)/2])==colors[7]){
        setTimeout(function(){alert("OPSSSSSSS")},1900);
    }
}