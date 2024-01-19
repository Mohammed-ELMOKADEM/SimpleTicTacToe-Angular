import { Component } from '@angular/core';
import { GameStateService } from '../services/game-state.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {
  constructor(public gameState : GameStateService){}

  resetGame() {
    this.gameState.setGameState({});
    window.location.reload();
  }

}
