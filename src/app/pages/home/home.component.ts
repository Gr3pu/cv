import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lang = "pl";

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if(params['lang'] != null){
        this.lang = params['lang'];
      }
    });
  }

  changeLang(changeTo: string)
  {
    this.router.navigate(['home'], { queryParams: { lang: changeTo } });
  }

}
