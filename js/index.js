// function calcSpace(amount, unit = "px") {
//     return `${amount * 4}${unit}`
// }


function playTrackById(trackId) {
    /// get file of song and play
}

function play(trackName, trackId) {
    console.log(`Begining ${trackName}`)
    playTrackById(trackId)
}

function end(oldTrackName, newTrackName) {
    console.log(`End to play ${oldTrackName}`)
    console.log(`Next track ${newTrackName}`)

}
function pauseStop(currentTrackName) {
    console.log(`Track ${currentTrackName} on pause`)
}
function pausePlay(currentTrackName) {
    console.log(`Track ${currentTrackName} on pause`)
    reloadDataTrack();
    play();
}
function reloadDataTrack(amount) {
    if (amount <= 0) {
        console.log(`This update shows the number of times`)
    } else {
        console.log(`Second update shows the number of times`)
        ////////code for update data
        reloadDataTrack(amount - 1);
    }
}
reloadDataTrack(5);