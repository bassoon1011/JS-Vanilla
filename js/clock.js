const remainTime = document.querySelector("#remain-time");

function dayDiff() {
    const christmasTime = new Date("2023-12-24");
    const todayTime = new Date();
    const diff = christmasTime - todayTime;

    const dayDiff = Math.floor(diff / (1000*60*60*24));
    const hourDiff = Math.floor((diff / (1000*60*60)) % 24);
    const minDiff = Math.floor((diff / (1000*60)) % 60);
    const secDiff = Math.floor(diff / 1000 % 60);

    remainTime.innerText = `${dayDiff}days ${hourDiff}hours ${minDiff}minutes ${secDiff}seconds`;
}

dayDiff();
setInterval(dayDiff, 1000);