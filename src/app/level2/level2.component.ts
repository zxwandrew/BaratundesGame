import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SentenceService } from '../sentence.service';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.scss'],
  animations: [
    trigger('flip', [
      state('callerTop', style({
        top: 0
      })),
      state('callerBottom', style({
        top: '{{offset}}'
      }), {params: {offset: '0px'}}),

      state('targetBottom', style({
        top: 0
      })),
      state('targetTop', style({
        top: '{{offset}}'
      }), {params: {offset: '0px'}}),
      
      state('actionNormal', style({
        top: 0
      })),
      state('actionShifted', style({
        top: '{{offset}}'
      }), {params: {offset: '0px'}}),
      
      transition('callerTop => callerBottom', [
        animate('1s')
      ]),
      transition('targetBottom => targetTop', [
        animate('1s')
      ]),
      transition('actionNormal => actionShifted', [
        animate('0s')
      ]),
      
    ]),
  ]
})
export class Level2Component implements OnInit {
  @ViewChild("callerContainer", {static:true}) callerContainer: ElementRef
  @ViewChild("targetContainer", {static:true}) targetContainer: ElementRef


  realSentences: any[]
  currentSentence: any
  numReal: number
  pos: number = 0
  caller: string
  target:string
  activity:string
  reverseState: boolean =true
  callerOffset:any = "0px"
  actionOffset:any = "0px"
  targetOffset:any = "0px"
  

  constructor(
    private sentenceService: SentenceService,
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
    let callerDiv = this.callerContainer.nativeElement
    let targetDiv = this.targetContainer.nativeElement

    let heightDiff = callerDiv.offsetHeight - targetDiv.offsetHeight
    let offsetAmount = targetDiv.offsetTop - callerDiv.offsetTop
    
    if(heightDiff>0){
      //caller is taller
      this.callerOffset = offsetAmount-heightDiff +"px"
      this.targetOffset = -offsetAmount +"px"
      this.actionOffset = -heightDiff +"px"
    }else if(heightDiff<0){
      //target is taller
      this.callerOffset = offsetAmount-heightDiff +"px"
      this.targetOffset = -offsetAmount +"px"
      this.actionOffset = -heightDiff +"px"
    }else{
      this.callerOffset = offsetAmount +"px"
      this.targetOffset = -offsetAmount +"px"
      this.actionOffset = "0px"
    }
    this.reverseState = false;
    this.pos++
  }
  next(){
    this.populateCurrentSentence()
    if(this.pos>=3){
      this.router.navigate(['level3'])
    }
  }

}
