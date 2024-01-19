import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {

  constructor() { }

  currentPlayState : any = {
    currentPlayer : "Player 1",
    currentBoard : {
      Player1 : [
        ["","",""],
        ["","",""],
        ["","",""]
      ],
      Player2 : [
        ["","",""],
        ["","",""],
        ["","",""]
      ]
    },
    gameOver : false,
    winner : ""
  }

  setGameState(state : any) : void{
    this.currentPlayState = {...this.currentPlayState, ...state};
  }

}
