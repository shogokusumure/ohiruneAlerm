
var allsheep = Math.floor(show_result() * 60 / 7.3);
document.getElementById('willpass').innerHTML = allsheep;
console.log(Math.floor(allsheep));

var audio = document.getElementById('music');

var sheep = document.getElementById('sheep');
var countsheep = 0;
var posX = -80;
document.getElementById('sheep').style.left= posX + "px";

function sheeprun() {
    posX += 5;
    sheep.style.left = posX + "px";
    if (posX > 570){
        posX = -160;
        countsheep += 1
        document.getElementById('passed').innerHTML = countsheep;
        document.getElementById('willpass').innerHTML = allsheep - countsheep;
        if (allsheep == countsheep){
            owari();
            allSheepGone();
        }
    }
}
var i = 0
var fireFunc = setInterval(function(){
    sheeprun();
}, 50);

setTimeout(function() {
    audio.play();
    document.getElementById('finished').style.display = "block";
}, 1000);

// owari
function  owari() {
    audio.pause();
    clearInterval(fireFunc);
    document.getElementById('finished').style.display = "none";
    document.getElementById('restart').style.display = "block";
}

function restart() {
    window.location.href = 'index.html';
}

// 全部羊がいなくなったら
function allSheepGone() {
    document.getElementById('msg').style.top = "50%";
}