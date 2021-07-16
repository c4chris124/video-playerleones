const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $back = document.querySelector('#back')
const $forward = document.querySelector('#forward')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)

function handlePlay(){
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('You clicked play button');
}
function handlePause(){
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
    console.log('You clicked pause button');
}

$back.addEventListener('click', handleBack )

function handleBack(){
    $video.currentTime -= 10
    console.log('back 10s', $video.currentTime);
}
$forward.addEventListener('click', handleForward )
function handleForward(){
    $video.currentTime += 10
    console.log('forward 10s',  $video.currentTime);
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded(){
    $progress.max = $video.duration
    console.log("Video it's been loaded", $video.duration);
}

function handleTimeUpdate(){
    $progress.value = $video.currentTime
    // console.log("Time update", $video.currentTime);
}


$progress.addEventListener('input', handleInput)

function handleInput (){
    $video.currentTime = $progress.value
    console.log($progress.value);
}