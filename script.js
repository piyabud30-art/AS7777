// ดึง element วิดีโอ
var video = document.getElementById("bgVideo");

// ดึงปุ่ม
var playBtn = document.getElementById("playBtn");
var stopBtn = document.getElementById("stopBtn");

// ปุ่ม Play
playBtn.addEventListener("click", function () {
    video.play();
});

// ปุ่ม Stop (Pause)
stopBtn.addEventListener("click", function () {
    video.pause();
});
document.getElementById("bgVideo");