import {squareArray} from './squareArray.js'

document.addEventListener('DOMContentLoaded', () =>{

    const gameBoardOppnonent = document.querySelector(".opposing-player-container")
    const gameBoardPlayer = document.querySelector(".player-container")

    //global var

    const myShips = []
    const opponentShips = []
    const targets = []
    const opponentTargets = []

    //create your board

    function createBoardOpponent() {
        for (let i = 0; i < squareArray.length; i++) {
            let opponentSquare = document.createElement('img')
            opponentSquare.setAttribute('src', 'images/water.svg')
            opponentSquare.setAttribute('data-id', i)
            opponentSquare.addEventListener('contextmenu', youShot)
            opponentSquare.addEventListener('click', missTarget)
            opponentSquare.addEventListener('dblclick', resetSquare)
            gameBoardOppnonent.appendChild(opponentSquare) 
        }
    }
    function createBoardPlayer() {
        for (let i = 0; i < squareArray.length; i++) {
            let square = document.createElement('img')
            square.setAttribute('src', 'images/water.svg')
            square.setAttribute('data-id', i)
            square.addEventListener('contextmenu', buildYourShips)
            square.addEventListener('click', shotByPlayer)
            square.addEventListener('dblclick', resetSquare)
            gameBoardPlayer.appendChild(square) 
        }
    }

    function CreateBoard() {
        createBoardOpponent()
        createBoardPlayer()
    }

    //reset square

    function resetSquare() {
        let shipId = this.getAttribute('data-id');
        myShips.splice(squareArray[shipId],1)
        this.setAttribute('src', 'images/water.svg')
    }

    //you shot
    function youShot(e) {
        e.preventDefault();
        let opponentTargetId = this.getAttribute('data-id');
        opponentTargets.push(squareArray[opponentTargetId])
        this.setAttribute('src', 'images/ship.svg') //ship found
    }

    //miss
    function missTarget() {
        let opponentTargetId = this.getAttribute('data-id'); //get square id
        opponentTargets.push(squareArray[opponentTargetId])
        this.setAttribute('src', 'images/miss.svg')
    }



    //build your ships

    function buildYourShips(e) {
        //stop real right-menu
        e.preventDefault();
        let shipId = this.getAttribute('data-id'); //get ship id
        myShips.push(squareArray[shipId])
        this.setAttribute('src', 'images/ship.svg') //build ship
    }

    //shot by player

    function shotByPlayer() {
        let targetId = this.getAttribute('data-id'); //get square id
        targets.push(squareArray[targetId])
        if (myShips.includes(squareArray[targetId])) {
            this.setAttribute('src', 'images/target.svg')
        } else {
            this.setAttribute('src', 'images/miss.svg')
        }
    }

    CreateBoard()
})