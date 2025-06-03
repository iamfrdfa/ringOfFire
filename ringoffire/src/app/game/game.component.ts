import { Component } from '@angular/core';
import {NgForOf, NgIf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-game',
    imports: [
        NgForOf,
        NgStyle,
        NgIf
    ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
    pickCardAnimation: boolean = false;

    takeCard() {
        this.pickCardAnimation = true;
    }
}
