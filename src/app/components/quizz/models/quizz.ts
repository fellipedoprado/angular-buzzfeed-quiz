import { Question } from "./question"
import { Results } from "./results"

export interface Quizz {
  title: string
  questions: Question[]
  results: Results
}
