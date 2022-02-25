import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CheckBoxControl } from './checkbox-control';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
  @Input() meta!: CheckBoxControl;
  @Input() form!: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
