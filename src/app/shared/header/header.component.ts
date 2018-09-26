import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  brandName = 'Teste';

  profile = {name: 'Jhon Davis', user: 'Jhon123456', email: 'jhon@gmail.com'};

  constructor() { }

  ngOnInit() {
  }

}
