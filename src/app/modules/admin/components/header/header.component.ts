import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private api:ServiceService) { }

  ngOnInit(): void {
  }
  logout(){
    this.api.logout();
      }


}
