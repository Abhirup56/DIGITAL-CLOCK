let hrs = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
    let time = new Date();
    hrs.innerHTML= (time.getHours()<10?"0":"")+time.getHours();
    min.innerHTML = (time.getMinutes() < 10 ? "0" : "") + time.getMinutes();
    sec.innerHTML = (time.getSeconds() < 10 ? "0" : "") + time.getSeconds();

    if (hrs.innerHTML>= 20 || hrs.innerHTML < 4) {
        document.querySelector(".all").style.backgroundImage = "url('nightsky.jpg')";
    } else if (hrs.innerHTML >= 16) {
        document.querySelector(".all").style.backgroundImage = "url('evening.jpg')";
    } else if (hrs.innerHTML >= 8) {
        document.querySelector(".all").style.backgroundImage = "url('noon1.jpg')";
    } else {
        document.querySelector(".all").style.backgroundImage = "url('morning.jpg')";
    }
}, 1000);