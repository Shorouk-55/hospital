import { Component, input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { VaildationsPipe } from '../../pipes/vaildations-pipe';


@Component({
  selector: 'app-error',
  imports: [VaildationsPipe],
  templateUrl: './error.html',
  styleUrl: './error.css',
})
export class Error {
  control = input.required<AbstractControl>();
  submitted = input<boolean>(false);
}
