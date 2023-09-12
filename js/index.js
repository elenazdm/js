// function calcSpace(amount, unit = "px") {
//     return `${amount * 4}${unit}`
// }


function playTrackById(trackId) {
    /// get file of song and play
}
function stopTrackById(trackId) {
    /// stop track on pause
}

function play(trackName, trackId) {
    console.log(`Begining ${trackName}`)
    playTrackById(trackId)
}

function end(oldTrackName, newTrackName) {
    console.log(`End to play ${oldTrackName}`)
    console.log(`Next track ${newTrackName}`)

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
function pauseStopByTrack(trackName, trackId) {

    return () => {
        stopTrackById(trackName);
        console.log(`Track ${trackId} on pause`)
    }

}
const pauseStop123 = function pauseStopByTrack(originTrackId, originTrackName) {
    stopTrackById(originTrackId);
    console.log(`Track ${originTrackName} on pause`);
};
pauseStop123();
const pauseStop456 = pauseStopByTrack(`IT - Consol log`);
pauseStop456();
const runCommand = function (command, errorFn) {
    const result = command();
    if (!result) {
        return errorFn()
    }
}
runCommand(
    () => {
        console.log('Start of programm');
        return 1 - 1;
    },
    () => console.log("Mistake")
);
// var test = 0;
// const testFunc = () => {
//     if (true) {
//         let test = 10;

//         test += 30;
//     }
//     return test;
// };
// console.log(testFunc())

