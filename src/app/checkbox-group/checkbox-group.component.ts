import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Checkbox } from '../checkboxItem';

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.sass']
})
export class CheckboxGroupComponent implements OnInit {
  @Input() options: Checkbox[];
  @Output() toggle = new EventEmitter<any[]>();

  selectedValues;
  constructor() { }

  ngOnInit(): void {
    
  }

  onToggle() {
    const checkedOptions = this.options.filter(x => x.checked);
    this.selectedValues = checkedOptions.map(x => x.value);
    this.toggle.emit(checkedOptions.map(x => x.value));
  }

}
