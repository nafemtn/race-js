'use strict';

let player1Element = document.querySelector('.player1');
let player2Element = document.querySelector('.player2');
let playerIdElement = document.querySelector('.playerId');

let startbtnElement = document.querySelector('.start');
startbtnElement.addEventListener('click', start);

let stopbtnElement = document.querySelector('.stop');
stopbtnElement.addEventListener('click', stop);

let startAgainElement = document.querySelector('.start0');
startAgainElement.addEventListener('click', startAgain);

let newPlayerBtnElement = document.querySelector('.btn-player');
getRandomColor(newPlayerBtnElement.addEventListener('click', newPlayer ));

let deletePlayerBtnElement = document.querySelector('.btn-delete');
deletePlayerBtnElement.addEventListener('click', deletePlayer )


let racerInterval; 
let i = 0;

function start() {
    racerInterval = setInterval(() => {
    //   console.log('test');
    i += 20;
    player1Element.style.marginLeft = i + 'px';
    player2Element.style.marginLeft = i + 'px';
    playerIdElement.style.marginLeft = i + 'px';
    player1Element.style.rotate = i +'deg';
    player2Element.style.rotate = i +'deg';
    playerIdElement.style.rotate = i +'deg';
    }, 1000);
}

function stop() {
    // console.log('test2');
    clearInterval(racerInterval)
    player1Element.style.marginLeft = i + 'px';
    player2Element.style.marginLeft = i + 'px';
    playerIdElement.style.marginLeft = i + 'px';
}

function startAgain() {
    
    player1Element.style.marginLeft = '0px';
    player2Element.style.marginLeft = '0px';
    playerIdElement.style.marginLeft = '0px';
    player1Element.style.rotate = '0deg';
    
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomColor() {
    $("#colorpad").css("background-color", getRandomColor());
}


function newPlayer() {
playerIdElement.classList.remove('hidden');
deletePlayerBtnElement.classList.remove('hidden');
}

function deletePlayer() {
playerIdElement.classList.add('hidden');
deletePlayerBtnElement.classList.add('hidden');
}