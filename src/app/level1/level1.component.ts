import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { SentenceService } from '../sentence.service';

@Component({
  selector: 'app-level1',
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.scss']
})
export class Level1Component implements OnInit {

  randomSentences: any;
  caller: string;
  target: string;
  activity: string;
  isTouch:boolean;
  questions: boolean;
  pos: number = 0;
  totalNumber: number = 10;
  currentSentence: any;
  round1Score: number = 0;

  constructor(private sentenceService:SentenceService, private router:Router) { }

  async ngOnInit() {
    this.isTouch = this.is_touch_device();
    this.randomSentences = await this.sentenceService.getRandomSentences();
    this.populateSentence();
  }

  is_touch_device() {
    //SO magic
    //https://stackoverflow.com/questions/4817029/whats-the-best-way-to-detect-a-touch-screen-device-using-javascript
    var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
    var mq = function(query) {
      return window.matchMedia(query).matches;
    }
    if (('ontouchstart' in window)) {
      return true;
    }
    var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
    return mq(query);
  }

  populateSentence(){
    this.currentSentence= this.randomSentences[this.pos]
    this.caller = this.currentSentence.caller;
    this.target = this.currentSentence.target;
    this.activity = this.currentSentence.activity;
  }

  onSwipe(direction){
    //swiped true
    console.log(this.pos, direction, this.currentSentence.real)
    if(this.currentSentence && this.currentSentence.real===direction){
      this.round1Score++
      this.sentenceService.updateSentenceAnswer(this.pos, true)
    }else{
      this.sentenceService.updateSentenceAnswer(this.pos, false)
    }
    this.pos++
    if(this.pos<this.totalNumber){
      this.populateSentence()
    }else{
      console.log(this.randomSentences)
      this.router.navigate(['level1end', {score: this.round1Score}])
    }
  }
}
