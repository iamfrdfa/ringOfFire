import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule} from '@angular/material/dialog';
import {MatFormField, MatInputModule, MatLabel} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';

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
export class DialogAddPlayerComponent implements OnInit {
    name: string = '';

    constructor(public dialogRef: MatDialogRef<DialogAddPlayerComponent>) {
    }

    ngOnInit(): void {
    }

    onNoClick() {
        this.dialogRef.close();
    }
}
