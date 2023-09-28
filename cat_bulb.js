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

const time1 = new Date();
time1.setTime(time1.getTime() + (0 * 60 * 60 * 1000)); // Add 1 hour to the current time
const hour = time1.getHours();
let greeting;

if (hour < 11) {
    greeting = "sunrise.png";
} else if (hour < 17) {
    greeting = "afternoon.png";
} else if (hour < 19) {
    greeting = "sunset.png";
} else {
    greeting = "moon.png";
}

document.getElementById("day").src = greeting;
console.log(hour);
