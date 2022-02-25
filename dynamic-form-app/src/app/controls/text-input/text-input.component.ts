import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from '../control-base';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent implements OnInit {
  @Input() meta!: ControlBase;
  @Input() form!: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
