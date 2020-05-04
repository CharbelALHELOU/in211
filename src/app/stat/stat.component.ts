import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {

  @Input() value: number;
  @Input() name: string;
  constructor() {
  }

  ngOnInit(): void {
  }

}
