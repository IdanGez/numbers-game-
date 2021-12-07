'use strict'
var gNums = [];
var gDifficulty = 0;
var gInsertedNums = gDifficulty ** 2;
var gCount = 1;
var gInterval;

//timer gVars
var gtens = 0;
var gseconds = 0;


function init() {   
    gInsertedNums = gDifficulty ** 2
    renderBoard(gDifficulty)
    getGNums()
    shuffle(gNums)
    numbersToTable(gNums)
    clearTimer()
}

function getGNums() {
    for (var i = 0; i < gInsertedNums; i++) {
        gNums.push(i + 1);
    }
    return gNums;
}

function numbersToTable(gNums) {
    var elCells = document.querySelectorAll('td')
    for (var i = 0; i < elCells.length; i++) {
        var elCell = elCells[i];
        elCell.innerText = gNums.pop()
    }
}
function cellClicked(clickedNum) {
    console.log(clickedNum)
    console.log(gCount)
    if (+clickedNum.innerText === gCount) {
        console.log(gCount)
        clickedNum.classList.add("clicked")
        if (+clickedNum.innerText === 1) gInterval = setInterval(startTimer, 10);
        gCount++
        if (+clickedNum.innerText === gInsertedNums) {
            clearInterval(gInterval);
        }
        var elHeaders = document.querySelectorAll('.nextnum')
        for (var i = 0; i < elHeaders.length; i++) {
            var elHeader = elHeaders[i];
            if (i === 0) elHeader.innerText = `Next Number: ${gCount}`
        }
    }
}

function restartGame() {
    gCount = 1;
    init()
}

function difficulty(elBtn) {
    clearInterval(gInterval);
    gCount = 1;
    if (elBtn.innerText === 'Easy') { gDifficulty = 4 }
    else if (elBtn.innerText === 'Hard') { gDifficulty = 5 }
    else if (elBtn.innerText === 'Extreme') { gDifficulty = 6 }
    init()
}

function renderBoard() {
    var strHTML = `
            <th colspan="${gDifficulty}"> Choose your level
            <button onclick="difficulty(this)">Easy</button>
            <button onclick="difficulty(this)">Hard</button>
            <button onclick="difficulty(this)">Extreme</button></th></tr>
            <tr><th colspan="${gDifficulty / 2}" class= "timer">Game Time: <span id="seconds">00</span>:<span id="tens">00</span></th>
            <th colspan="${gDifficulty / 2}" class="nextnum"> Next Number:  </th></tr>`;
    for (var i = 0; i < gDifficulty; i++) {
        strHTML += '<tr>';
        for (var j = 0; j < gDifficulty; j++) {
            strHTML += `<td onclick="cellClicked(this)"></td>`
        }
        strHTML += `</tr>`
    }
    var elTable = document.querySelector('tbody')
    elTable.innerHTML = strHTML;
}
