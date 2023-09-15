// function calcSpace(amount, unit = "px") {
//     return `${amount * 4}${unit}`
// }


function playTrackById(trackId) {
    /// get file of song and play
}
function stopTrackById(trackId) {
    /// stop track on pause
    console.log(`get file track song with ID ${trackId} and stop`)
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
// function reloadDataTrack(amount) {
//     if (amount <= 0) {
//         console.log(`This update shows the number of times`)
//     } else {
//         console.log(`Second update shows the number of times`)
//         ////////code for update data
//         reloadDataTrack(amount - 1);
//     }
// }
// reloadDataTrack(5);
function pauseStopByTrack(trackName, trackId) {
    let isPause = null;
    return () => {
        if (isPause == true) {
            return;
        }

        stopTrackById(trackId);
        console.log(`Track ${trackName} on pause`);
        isPause = true;
    }

}
const pauseStop456 = pauseStopByTrack(`IT - Consol log`, 10);
pauseStop456();
pauseStop456();
pauseStop456();
// const pauseStop123 = function pauseStopByTrack(originTrackId, originTrackName) {
//     stopTrackById(originTrackId);
//     console.log(`Track ${originTrackName} on pause`);
// };
// pauseStop123();

// const runCommand = function (command, errorFn) {
//     const result = command();
//     if (!result) {
//         return errorFn()
//     }
// }
// runCommand(
//     () => {
//         console.log('Start of programm');
//         return 1 - 1;
//     },
//     () => console.log("Mistake")
// );
// var test = 0;
// const testFunc = () => {
//     if (true) {
//         let test = 10;

//         test += 30;
//     }
//     return test;
// };
// console.log(testFunc())
const memoCalcSpace = (oldAmount = null, oldUnit = null, oldResult = null) => {
    return (amount, unit = "px") => {
        if (oldAmount === amount && unit === oldUnit) {
            console.log("Memo")
            return oldResult;
        }

        oldResult = `${amount * 4}${unit}`;
        oldAmount = amount;
        oldUnit = unit;
        return oldResult;


    };
}
const calcSpace = memoCalcSpace();
console.log(calcSpace(4))
console.log(calcSpace(4))
const getSpaceFromDesign = (componentName) => {
    switch (componentName) {
        case 'button':
            return 4;
        case 'card':
            return 3;
        default:
            return 2;
    }
}

const isMobile = true;
const amount = getSpaceFromDesign('button')
const amountMobile = isMobile ? amount / 2 : amount;
const amountInPx = calcSpace(amount);
const calcSpaceFromDesign = (componentName) => {
    const result = getSpaceFromDesign(componentName);
    return calcSpace(isMobile ? result / 2 : result);
};
console.log("///");
console.log(amountInPx);