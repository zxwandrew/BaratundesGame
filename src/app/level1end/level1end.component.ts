import { Component, OnInit } from '@angular/core';
import { SentenceService } from '../sentence.service';

@Component({
  selector: 'app-level1end',
  templateUrl: './level1end.component.html',
  styleUrls: ['./level1end.component.scss']
})
export class Level1endComponent implements OnInit {
  randomSentences: any[];

  constructor(private sentenceService: SentenceService) { }

  ngOnInit() {
    this.randomSentences = this.sentenceService.getRandomSentences()
  }

}
