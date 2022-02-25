import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from '../controls/control-base';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
})
export class ControlComponent implements OnInit {
  @Input() control!: ControlBase;
  @Input() form!: FormGroup;

  ngOnInit(): void {}
}
