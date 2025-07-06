import {Component} from '@angular/core';
import {NgForOf, NgIf, NgStyle} from '@angular/common';
import {Game} from '../models/game';
import {PlayerComponent} from '../player/player.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import {DialogAddPlayerComponent} from '../dialog-add-player/dialog-add-player.component';
import {MatDialogModule} from '@angular/material/dialog';
import {GameInfoComponent} from '../game-info/game-info.component';
import {AngularFirestore} from '@angular/fire/compat/firestore';

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
        GameInfoComponent,
    ],
    templateUrl: './game.component.html',
    styleUrl: './game.component.scss'
})

export class GameComponent {
    pickCardAnimation: boolean = false;
    game: Game | undefined;
    currentCard: string | undefined = "";

    constructor(private firestore: AngularFirestore, public dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.newGame();
        this
            .firestore
            .collection('games')
            .valueChanges()
            .subscribe((game) => {
                console.log('Game Update: ', game);
            });
    }

    newGame() {
        this.game = new Game();
        console.log(this.game);
    }

    takeCard() {
        if (!this.pickCardAnimation && this.game) {  // Prüfen ob this.game existiert
            this.currentCard = this.game.stack.pop();
            this.pickCardAnimation = true;
            console.log('New Card: ' + this.currentCard);
            console.log('Game is: ', this.game);

            this.game.currentPlayer++;  // Jetzt sicher, da wir this.game überprüft haben
            this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;

            setTimeout(() => {
                if (this.currentCard != null) {
                    this.game?.playedCards.push(this.currentCard)
                }
                this.pickCardAnimation = false;
            }, 1000)
        }
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogAddPlayerComponent, {});

        dialogRef.afterClosed().subscribe((name: string) => {
            if (name && name.length > 0) {
                this.game?.players.push(name);
            }
        });
    }
}
