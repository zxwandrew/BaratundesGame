import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SentenceService } from '../sentence.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-level4',
  templateUrl: './level4.component.html',
  styleUrls: ['./level4.component.scss']
})
export class Level4Component implements OnInit {
  @ViewChild("actionInput", {static:true}) activityInput: ElementRef

  typewriterState: string;
  typewriterSentence: string;
  realSentences: any;
  pos: any =0;
  currentSentence: any;
  target: any;
  caller: any;
  activity: any;
  nextDisabled: boolean = true;

  constructor(
    private sentenceService: SentenceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.realSentences = this.sentenceService.getRealSentences()
    this.populateCurrentSentence()
    this.typewriterSentence = "Called police on"
  }
  ngAfterViewInit(){
    this.initialPopulateSentence()
  }
  initialPopulateSentence() {
    this.typeWriter()
  }
  populateCurrentSentence() {
    this.currentSentence = this.realSentences[this.pos]
    this.caller = this.currentSentence.caller;
    this.target = this.currentSentence.target;
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
    let split = "Minded their business while".split("")
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
      this.nextDisabled = false
    }, 5000)
  }

  keyDownFunction(event) {
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
      this.router.navigate(['level4end'])
    }
  }

}
