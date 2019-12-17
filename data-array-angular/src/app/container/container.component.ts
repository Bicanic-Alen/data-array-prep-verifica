import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  macchines : String [];

  constructor() {

    this.macchines = ["ruspa","gru","rullo","bettoniera","escavatore"];

  }

  ngOnInit() {
  }

}
