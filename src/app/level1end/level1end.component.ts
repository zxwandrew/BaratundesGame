import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { SentenceService } from '../sentence.service';
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-level1end',
  templateUrl: './level1end.component.html',
  styleUrls: ['./level1end.component.scss']
})
export class Level1endComponent implements OnInit {
  randomSentences: any[];
  score: any;
  constructor(
    private sentenceService: SentenceService,
    private route: ActivatedRoute, 
    private router:Router
    ) { }

  ngOnInit() {
    this.randomSentences = this.sentenceService.getRandomSentences()
    this.score = this.randomSentences.reduce((prev, cur)=>{
      return cur.correct ? prev+1 : prev
    }, 0)
  }
  gotoLevel2(){
    this.router.navigate(['level2'])
  }
}
