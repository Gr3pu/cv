import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-pl',
  templateUrl: './home-pl.component.html',
  styleUrls: ['./home-pl.component.scss']
})
export class HomePlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  print(): void {
    window.print()
  }

}
