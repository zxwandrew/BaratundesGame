import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-level3end',
  templateUrl: './level3end.component.html',
  styleUrls: ['./level3end.component.scss']
})
export class Level3endComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  next(){
    this.router.navigate(['level4'])
  }
}
