import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Quizz } from '../components/quizz/models/quizz';
import * as data from '../../assets/data/quizz_questions.json';
@Injectable({
  providedIn: 'root',
})
export class QuizzService {
  private quiz_data: Quizz[] = this.removeInvalidData(
    Object.values(data)
  ) as Quizz[];

  constructor() {}

  getQuizzData(id: number): Observable<Quizz> {
    if (id <= 0) {
      throw new Error('Invalid quiz index');
    }

    const res = this.quiz_data.find((quiz) => quiz.id === id);
    if (res) {
      return of(res);
    } else {
      throw new Error('Quiz not found');
    }
  }

  getQuizzResult(answers: string[], quizz_index: number): Observable<string> {
    const result = this.checkResult(answers);
    return of(this.quiz_data[quizz_index].results[result]);
  }

  getQuizzesTitles(
    currentQuizIndex: number
  ): Observable<{ id: number; title: string }[]> {
    return of(
      this.quiz_data
        .filter((quiz) => {
          return quiz.id !== currentQuizIndex;
        })
        .map((quiz) => ({
          id: quiz.id,
          title: quiz.title,
        }))
    );
  }

  private checkResult(anwsers: string[]) {
    const result = anwsers.reduce((previous, current, i, arr) => {
      if (
        arr.filter((item) => item === previous).length >
        arr.filter((item) => item === current).length
      ) {
        return previous;
      } else {
        return current;
      }
    });

    return result;
  }

  private removeInvalidData(quiz_arr: Quizz[]): Quizz[] {
    return quiz_arr
      .filter((quiz) => quiz.title) // Remove objetos sem a propriedade `title`
      .map((quiz) => ({ ...quiz }));
  }
}
