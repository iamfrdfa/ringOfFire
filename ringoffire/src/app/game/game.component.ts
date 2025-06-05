import {Component} from '@angular/core';
import {NgForOf, NgIf, NgStyle} from '@angular/common';
import {Game} from '../models/game';
import {PlayerComponent} from '../player/player.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import {DialogAddPlayerComponent} from '../dialog-add-player/dialog-add-player.component';
import {MatDialogModule} from '@angular/material/dialog';


@Component({
    selector: 'app-game',
    imports: [
        NgForOf,
        NgStyle,
        NgIf,
        PlayerComponent,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
    ],
    templateUrl: './game.component.html',
    styleUrl: './game.component.scss'
})

export class GameComponent {
    pickCardAnimation: boolean = false;
    game: Game | undefined;
    currentCard: string = "";

    constructor(public dialog: MatDialog) {
    }

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

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogAddPlayerComponent, { });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
