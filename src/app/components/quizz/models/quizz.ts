import { Question } from "./question"
import { Results } from "./results"

export interface Quizz {
  id: number
  title: string
  questions: Question[]
  results: Results
}
