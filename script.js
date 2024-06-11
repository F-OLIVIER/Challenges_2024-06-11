var img = document.getElementById("video-link");
function handleAdd() {
    var video = document.getElementById("video");

    video.addEventListener('timeupdate', function () {
        var hours = parseInt(video.currentTime / (60 * 60), 10);
        var minutes = parseInt(video.currentTime / 60, 10);
        var seconds = video.currentTime % 60;



        if (seconds >= 16) {
            if (minutes == 1) {
                img.style.display = 'none';
                const end_link = document.getElementById('end-link');
                end_link.style.display = 'block';
            }
        } else {
            img.style.display = 'block';
            document.getElementById('end-link').style.display = 'none';
        }
    });
}

setInterval(() => {
    var currentTime = video.currentTime * 1000;
    const percentage = ((currentTime - start_timecode) / (end_timecode - start_timecode)) * 100;
    // console.log("🚀 ~ percentage:", percentage)
    const newPosition = calcPosition(min_possition, max_possition, percentage);
    if (newPosition.x >= 0 && newPosition.y >= 0) {
        img.style.right = `${newPosition.x}px`;
        img.style.top = `${newPosition.y}px`;
    }
}, 1);

const videoWidth = document.getElementById('video').offsetWidth;
const videoHeight = document.getElementById('video').offsetHeight;

const min_possition = {
    x: 0,
    y: 0
}

const max_possition = {
    x: videoWidth/2,
    y: videoHeight/2
}

const calcPosition = (min, max, percentage) => {
    const x_position = min.x + (percentage / 100) * (max.x - min.x);
    const y_position = min.y + (percentage / 100) * (max.y - min.y);
    return { x: x_position, y: y_position };
}

const start_timecode = 70000;
const end_timecode = 75000;



handleAdd();