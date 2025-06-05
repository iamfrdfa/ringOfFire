import {Component} from '@angular/core';
import {NgForOf, NgIf, NgStyle} from '@angular/common';
import {Game} from '../models/game';
import {PlayerComponent} from '../player/player.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
    selector: 'app-game',
    imports: [
        NgForOf,
        NgStyle,
        NgIf,
        PlayerComponent,
        MatButtonModule,
        MatIconModule,
    ],
    templateUrl: './game.component.html',
    styleUrl: './game.component.scss'
})

export class GameComponent {
    pickCardAnimation: boolean = false;
    game: Game | undefined;
    currentCard: string = "";

    ngOnInit(): void {
        this.newGame();
    }

    newGame() {
        this.game = new Game();
        console.log(this.game);
    }

    takeCard() {
        if (!this.pickCardAnimation) {
            // @ts-ignore
            this.currentCard = this.game.stack.pop();
            this.pickCardAnimation = true;
            console.log('New Card: ' + this.currentCard);
            console.log('Game is: ', this.game);

            setTimeout(() => {
                this.game?.playedCards.push(this.currentCard)
                this.pickCardAnimation = false;
            }, 1000)
        }
    }
}
