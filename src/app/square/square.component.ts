import { Component, Input } from '@angular/core';
import { GameStateService } from '../services/game-state.service';
import { BoardComponent } from '../board/board.component';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {

  constructor(public gameState: GameStateService , private board : BoardComponent){}

  @Input() i !: number;
  @Input() j !: number;

  boardPlayer1 : String[][] = [[],[],[]];
  boardPlayer2 : String[][] = [[],[],[]];

  currentPlay ='';
 

  setCurrentPlay(){
    let currentPlayer = this.gameState.currentPlayState.currentPlayer;
    if(currentPlayer == "Player 1"){
      this.currentPlay = 'X';
      this.boardPlayer1 = this.gameState.currentPlayState.currentBoard.Player1;
      this.boardPlayer2 = this.gameState.currentPlayState.currentBoard.Player2;
      this.boardPlayer1[this.i][this.j] = this.currentPlay;
      this.gameState.setGameState({
        currentPlayer : "Player 2",
        currentBoard : {
          Player1 : this.boardPlayer1,
          Player2 : this.boardPlayer2
        }
      })
    }
    else{
      this.currentPlay = 'O';
      this.boardPlayer1 = this.gameState.currentPlayState.currentBoard.Player1;
      this.boardPlayer2 = this.gameState.currentPlayState.currentBoard.Player2;
      this.boardPlayer2[this.i][this.j] = this.currentPlay;
      this.gameState.setGameState({
        currentPlayer : "Player 1",
        currentBoard : {
          Player1 : this.boardPlayer1,
          Player2 : this.boardPlayer2
        }
      })
    }
    let winner = this.board.winning(currentPlayer);
    console.log(winner);
  }
}
