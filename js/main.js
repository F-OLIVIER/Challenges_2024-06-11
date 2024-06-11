var video = document.getElementById("toto");
var img = document.getElementById("img");

video.addEventListener('timeupdate', function() {
    var hours=parseInt(video.currentTime/(60*60),10);
    var minutes = parseInt(video.currentTime / 60, 10);
    var seconds = video.currentTime % 60;
    let Timer = hours + ":" + minutes + ":" + seconds;

    if (Timer.includes("0:0:6")) {
        img.style.display = 'block';
    }else if (Timer.includes    ("0:0:8")) {
        img.style.display = 'none';
    }
});