import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SentenceService } from '../sentence.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-level3',
  templateUrl: './level3.component.html',
  styleUrls: ['./level3.component.scss']
})
export class Level3Component implements OnInit, AfterViewInit {
  @ViewChild("activityInput", {static:true}) activityInput: ElementRef

  realSentences: any[]
  pos: number = 0
  currentSentence: any
  reversedcaller: string
  reversedtarget: string
  activity: string
  typewriterSentence: string = ""
  typewriterState: string = ""

  constructor(
    private sentenceService: SentenceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.realSentences = this.sentenceService.getRealSentences()
    this.populateCurrentSentence()
    this.typewriterSentence = this.currentSentence.activity
  }
  ngAfterViewInit(){
    this.initialPopulateSentence()
  }
  initialPopulateSentence() {
    this.typeWriter()
  }
  populateCurrentSentence() {
    this.currentSentence = this.realSentences[this.pos]
    this.reversedcaller = this.currentSentence.target;
    this.reversedtarget = this.currentSentence.caller;
    this.activity = this.currentSentence.activity;
  }
  typeWriter() {
    //old activity and highlight
    // this.typewriterSentence = this.currentSentence.activity
    setTimeout(() => {
      this.typewriterState = "selected"
    }, 1000)

    //remove old activity and highlighting
    setTimeout(() => {
      this.typewriterSentence = ""
      this.typewriterState = ""
    }, 2000)

    //start typing
    let split = "Making oat milk while riding unicycle".split("")
    let time = 2000
    let space = Math.floor(time / split.length)
    for (let i = 0; i < split.length; i++) {
      setTimeout(() => {
        this.typewriterSentence += split[i]
      }, space * i + 2000)
    }

    //hide tyepwriter and show
    setTimeout(()=>{
      this.typewriterState="hidden"
      this.activityInput.nativeElement.focus()
    }, 5000)
  }

  keyDownFunction(event) {
    console.log("key", event.keyCode)
    if(event.keyCode == 13) {
      this.next()
    }
  }
  next(){
    this.pos++;
    if(this.pos<=3){
      this.activityInput.nativeElement.value = ""
      this.populateCurrentSentence()
    }else{
      this.router.navigate(['level3end'])
    }
  }

}
