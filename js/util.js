
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //The maximum is inclusive and the minimum is inclusive
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

// function getTime(){}

// function countNegs(){}

function getMat(rowsCount, colsCount) {

    var mat = [];
    for (var i = 0; i < rowsCount; i++) {
        mat[i] = [];
        for (var j = 0; j < colsCount; j++) {
            mat[i][j] = getRandomIntInclusive(1, 100)
        }
    }
    return mat
}

function copyMat(mat) {
    var newMat = [];
    for (var i = 0; i < mat.length; i++) {
        newMat[i] = [];
        for (var j = 0; j < mat[0].length; j++) {
            newMat[i][j] = mat[i][j];
        }
    }
    return newMat;
}

function drawNum() {
    return gNums.pop()
}

function drawNum2() {
    var idx = getRandomInt(0, gNums2.length)
    var num = gNums2[idx]
    gNums2.splice(idx, 1)
    return num
}

function shuffle(items) {
    var randIdx, keep
    for (var i = items.length - 1; i > 0; i--) {
        randIdx = getRandomInt(0, items.length - 1);

        keep = items[i];
        items[i] = items[randIdx];
        items[randIdx] = keep;
    }
    return items;
}


// function printMat


function startTimer() {
    var elTens = document.getElementById("tens")
    var elSeconds = document.getElementById("seconds")
    gtens++;
    if (gtens <= 9) {
        elTens.innerHTML = "0" + gtens;
    }
    if (gtens > 9) {
        elTens.innerHTML = gtens;
    }
    if (gtens > 99) {
        gseconds++;
        elSeconds.innerHTML = "0" + gseconds;
        gtens = 0;
        elTens.innerHTML = "0" + 0;
    }
    if (gseconds > 9) {
        elSeconds.innerHTML = gseconds;
    }
}

function clearTimer() {
    clearInterval(gInterval);
    //update model
    gtens = 0;
    gseconds = 0;
    //update dom
    var elTens = document.getElementById("tens")
    var elSeconds = document.getElementById("seconds")
    elTens.innerHTML = "00";
    elSeconds.innerHTML = "00";

}
function createBoard() {

    var board = [];
    for (var i = 0; i < 3; i++) {
        board[i] = [];
        for (var j = 0; j < 3; j++) {
            board[i][j] = ''
        }
    }
    return board
}

function getMaxInMat(mat) {
    console.table(mat);
    var max = -Infinity;

    for (var i = 0; i < mat.length; i++) {
        var currRow = mat[i];
        console.log('currRow', currRow);
        for (var j = 0; j < currRow.length; j++) {
            var currCell = currRow[j];
            console.log('currCell', currCell)
            if (currCell > max) {
                max = currCell
            }
        }
    }
    return max
}