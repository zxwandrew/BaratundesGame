import { Component, OnInit } from '@angular/core';
import { SentenceService } from '../sentence.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-level3',
  templateUrl: './level3.component.html',
  styleUrls: ['./level3.component.scss']
})
export class Level3Component implements OnInit {

  realSentences: any[]
  numReal: number
  pos: number = 0
  currentSentence: any
  reversedcaller: string
  reversedtarget:string
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
    this.reversedcaller = this.currentSentence.target;
    this.reversedtarget = this.currentSentence.caller;
    this.activity = this.currentSentence.activity;
    this.reverseState = true;
  }

}
