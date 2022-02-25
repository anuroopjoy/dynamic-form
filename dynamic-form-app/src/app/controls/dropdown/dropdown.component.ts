import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DropDownControl } from './dropdown-control';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Input() meta!: DropDownControl;
  @Input() form!: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
