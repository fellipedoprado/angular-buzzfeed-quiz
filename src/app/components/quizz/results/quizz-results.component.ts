import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz-results',
  templateUrl: './quizz-results.component.html',
  styleUrls: ['./quizz-results.component.css'],
})
export class QuizzResultsComponent implements OnInit {
  @Input() result!: string;

  constructor() { }

  ngOnInit() {
  }

}
