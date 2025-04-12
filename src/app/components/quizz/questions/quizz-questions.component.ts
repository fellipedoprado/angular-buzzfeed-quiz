import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz-questions',
  templateUrl: './quizz-questions.component.html',
  styleUrls: ['./quizz-questions.component.css']
})
export class QuizzQuestionsComponent implements OnInit {
  @Input() question!: string;

  constructor() { }

  ngOnInit() {
  }

}
