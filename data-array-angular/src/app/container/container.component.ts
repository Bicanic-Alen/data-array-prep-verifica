import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  macchine : String [];

  constructor() {

    this.macchine = ["ruspa","gru","rullo","bettoniera","escavatore"];

  }

  ngOnInit() {
  }

}
