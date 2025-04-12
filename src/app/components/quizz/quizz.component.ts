import { Component, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/services/quizz.service';
import { Quizz } from './models/quizz';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css'],
})
export class QuizzComponent implements OnInit {
  idCurrentQuiz = 0;
  quiz: Quizz = {
    title: '',
    questions: [],
    results: {},
    id: 0,
  };

  answers: string[] = [];
  answerSelected: string = '';

  questionIndex: number = 0;
  questionMaxIndex: number = 0;

  finished: boolean = false;

  otherQuizzesTitles: { id: number; title: string }[] = [];

  constructor(private quizzService: QuizzService) {}

  ngOnInit(): void {
    const id = this.idCurrentQuiz === 0 ? 1 : this.idCurrentQuiz;
    this.getQuizData(id);
    this.getQuizzesTitles(id);
  }

  private getQuizzesTitles(idCurrentQuiz: number) {
    this.quizzService.getQuizzesTitles(idCurrentQuiz).subscribe((res) => {
      this.otherQuizzesTitles = res;
    });
  }

  private getQuizData(index: number): void {
    this.quizzService.getQuizzData(index).subscribe((quiz) => {
      this.quiz = quiz;
      this.finished = false;
      this.questionIndex = 0;
      this.questionMaxIndex = quiz.questions ? quiz.questions.length : 0;
    });
  }

  onAnswerSelected(answer: string) {
    this.answers.push(answer);
    this.nextStep();
  }

  async nextStep() {
    this.questionIndex += 1;
    if (this.questionMaxIndex <= this.questionIndex) {
      this.finished = true;
      this.quizzService
        .getQuizzResult(this.answers, this.idCurrentQuiz)
        .subscribe((res) => {
          this.answerSelected = res;
        });
    }
  }

  onClick($event: number) {
    this.getQuizData($event);
    this.getQuizzesTitles($event);
  }
}
