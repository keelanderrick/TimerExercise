function countdown (num) {
    let timer = setInterval(function() {
        num--;
        if(num <= 0) {
            clearInterval(timer);
            console.log('DONE!');
        }
        else {
            console.log(time);
        }
    }, 1000)
}

function randomGame() {
    let num;
    let attempts = 0;
    let timer = setInterval(function() {
        num = Math.random();
        attempts++;
        if(num > 0.75) {
            clearInterval(timer);
            console.log("It took "  + attempts + "attempts");
        }
    },1000)
}
