import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-tour',
  templateUrl: './virtual-tour.component.html',
  styleUrls: ['./virtual-tour.component.css']
})
export class VirtualTourComponent implements OnInit {

  constructor() { }
  iFrameModel = "https://www.klapty.com/tour/tunnel/Fpu0P7qcMs";

  ngOnInit(): void {
  }

}