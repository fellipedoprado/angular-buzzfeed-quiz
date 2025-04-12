import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizzComponent } from './quizz.component';
import { QuizzHeaderComponent } from './header/quizz-header.component';
import { QuizzResultsComponent } from './results/quizz-results.component';
import { QuizzQuestionsComponent } from './questions/quizz-questions.component';
import { QuizzOptionsComponent } from './options/quizz-options.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    QuizzComponent,
    QuizzHeaderComponent,
    QuizzResultsComponent,
    QuizzQuestionsComponent,
    QuizzOptionsComponent,
  ],
  exports: [QuizzComponent],
})
export class QuizzModule {}
