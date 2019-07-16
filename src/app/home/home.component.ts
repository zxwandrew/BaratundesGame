import { Component, OnInit } from '@angular/core';
import { SentenceService } from '../sentence.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sentences: any;
  constructor(private sentenceService:SentenceService) { }

  async ngOnInit() {
    this.sentences = await this.sentenceService.getSentences()
    console.log(this.sentences)
  }

}
