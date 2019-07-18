import { Component, OnInit } from '@angular/core';
import { SentenceService } from '../sentence.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.scss']
})
export class Level2Component implements OnInit {
  realSentences: any[]
  currentSentence: any
  numReal: number
  pos: number = 0
  caller: string
  target:string
  activity:string
  reverseState: boolean =true

  constructor(
    private sentenceService: SentenceService,
    private route: ActivatedRoute, 
    private router:Router
    ) { }

  ngOnInit() {
    this.realSentences = this.sentenceService.getRealSentences()
    this.numReal = this.realSentences.length
    this.populateCurrentSentence()
  }
  populateCurrentSentence(){
    this.currentSentence = this.realSentences[this.pos]
    this.caller = this.currentSentence.caller;
    this.target = this.currentSentence.target;
    this.activity = this.currentSentence.activity;
    this.reverseState = true;
  }
  reverse(){
    let tmp = this.caller
    this.caller = this.target
    this.target = tmp
    this.reverseState = false;
    this.pos++
  }
  next(){
    this.populateCurrentSentence()
    console.log(this.pos)
    if(this.pos>3){
      this.router.navigate(['level3'])
    }
  }

}
