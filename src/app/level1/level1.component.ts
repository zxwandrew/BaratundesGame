import { Component, OnInit } from '@angular/core';
import { SentenceService } from '../sentence.service';

@Component({
  selector: 'app-level1',
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.scss']
})
export class Level1Component implements OnInit {

  sentences: any;
  size: number;
  caller: string;
  target: string;
  activity: string;
  isTouch:boolean

  constructor(private sentenceService:SentenceService) { }

  async ngOnInit() {
    this.isTouch = this.is_touch_device();
    this.sentences = await this.sentenceService.getSentences();
    this.size = this.sentences.length;
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
    let pos = Math.floor(Math.random()*this.size)
    console.log(this.sentences)
    let sentence = this.sentences[pos];
    this.caller = sentence.caller;
    this.target = sentence.target;
    this.activity = sentence.activity;
  }

}
