import {Component} from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule} from '@angular/material/dialog';
import {MatFormField, MatInputModule, MatLabel} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'app-dialog-add-player',
    imports: [
        MatDialogClose,
        MatDialogActions,
        MatLabel,
        MatDialogModule,
        MatDialogContent,
        MatButtonModule,
        MatFormField,
        MatDialogContent,
        MatInputModule,
        FormsModule
    ],
    templateUrl: './dialog-add-player.component.html',
    styleUrl: './dialog-add-player.component.scss'
})
export class DialogAddPlayerComponent {
    name: string = '';

    onNoClick() {

    }
}
