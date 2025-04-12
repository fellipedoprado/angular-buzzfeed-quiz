import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-other-quizzes-list',
  templateUrl: './other-quizzes-list.component.html',
  styleUrls: ['./other-quizzes-list.component.css'],
})
export class OtherQuizzesListComponent implements OnInit {
  @Input() otherQuizzesTitles: { id: number; title: string }[] = [];
  @Output() playQuizIndex: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  onClick(index: number) {
    this.playQuizIndex.emit(index);
  }
}
