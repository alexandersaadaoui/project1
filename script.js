function showAlert() {
    alert('Hello! Thank you for playing my short, text-based game, True or False! This is based on the reality TV show "Moment of Truth". Windows95 font is from arnesava.com, images from shutterstock and VectorShock, images edited in 8bitworkshop.com, audio is from pixabay.com, audio is edited in websim.com. Hint: 211112');
}

function start() {
    var game = 'question1.html';
    window.location.href = game;
}

function start2() {
    var game = 'question2.html';
    window.location.href = game;
}

function start3() {
    var game = 'question3.html';
    window.location.href = game;
}

function start4() {
    var game = 'question4.html';
    window.location.href = game;
}

function start5() {
    var game = 'question5.html';
    window.location.href = game;
}

function start6() {
    var game = 'question6.html';
    window.location.href = game;
}


function end() {
    var game = 'theend.html';
    window.location.href = game;
}

function lose() {
    var game = 'incorrect.html';
    window.location.href = game;
}

function restart() {
    var game = 'index.html';
    window.location.href = game;
}

function playAudio(audioSrc) {
    var audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = audioSrc;
    audioPlayer.play();
}