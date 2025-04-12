import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quizz-header',
  templateUrl: './quizz-header.component.html',
  styleUrls: ['./quizz-header.component.css']
})
export class QuizzHeaderComponent implements OnInit {
  @Input() otherQuizzesTitles: { id: number; title: string }[] = [];
  @Input() title: string = '';
  @Output() playQuizIndex: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onClick($event: number) {
    this.playQuizIndex.emit($event);
  }

}
