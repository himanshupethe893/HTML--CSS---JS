function switchF()
{
    document.getElementById("bulb_light").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("cat").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switchstatus").textContent="Switch Off";
    document.getElementById("switchoff").style.background="red";
    document.getElementById("on_switch").style.background="gray";
    document.getElementById("hello").style.background="black";
}

function switchO()
{
    document.getElementById("bulb_light").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("cat").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switchstatus").textContent="Switch ON";
    document.getElementById("switchoff").style.background="gray";
    document.getElementById("on_switch").style.background="green";
    document.getElementById("hello").style.background="white";
}

const time=new Date().getHours();
let greetings;
if(time<11){
    greetings="sunrise.png";
}
else if(time<17){
    greetings="afternoon.png";
}
else if(time<19){
    greetings="sunset.png";
}
else{
    greetings="moon.png";
}

document.getElementById("day").src=greetings;