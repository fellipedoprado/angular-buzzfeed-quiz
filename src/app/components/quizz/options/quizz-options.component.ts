import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quizz-options',
  templateUrl: './quizz-options.component.html',
  styleUrls: ['./quizz-options.component.css']
})
export class QuizzOptionsComponent implements OnInit {
  @Input() quizzOptions: any;
  @Output() quizzAnswer: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public playerChoose(option: string) {
    this.quizzAnswer.emit(option);
  }

}
