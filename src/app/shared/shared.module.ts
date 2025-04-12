import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherQuizzesListComponent } from './components/other-quizzes-list/other-quizzes-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    OtherQuizzesListComponent,
  ],
  exports: [OtherQuizzesListComponent],
})
export class SharedModule {}
