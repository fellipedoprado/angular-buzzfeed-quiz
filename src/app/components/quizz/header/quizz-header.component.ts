import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz-header',
  templateUrl: './quizz-header.component.html',
  styleUrls: ['./quizz-header.component.css']
})
export class QuizzHeaderComponent implements OnInit {
  @Input() title: string = '';

  constructor() { }

  ngOnInit() {
  }

}
