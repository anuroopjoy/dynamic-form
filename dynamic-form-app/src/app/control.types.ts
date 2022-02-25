import { CheckBoxControl } from './controls/checkbox/checkbox-control';
import { ControlBase } from './controls/control-base';
import { DropDownControl } from './controls/dropdown/dropdown-control';
import { LabelControl } from './controls/label/label-control';

export type ControlType =
  | ControlBase
  | DropDownControl
  | CheckBoxControl
  | LabelControl;
