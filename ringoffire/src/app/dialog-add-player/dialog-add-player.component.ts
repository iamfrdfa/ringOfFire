import {Component} from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent} from '@angular/material/dialog';
import {MatFormField, MatInputModule, MatLabel} from '@angular/material/input';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'app-dialog-add-player',
    imports: [
        MatDialogClose,
        MatDialogActions,
        MatLabel,
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
