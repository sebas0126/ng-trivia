import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trivia-content',
  templateUrl: './trivia-content.component.html',
  styleUrls: ['./trivia-content.component.sass']
})
export class TriviaContentComponent implements OnInit {

  private currentIndex = 0;
  private correctAnswers = []
  private showScore = false;
  private score = 0;

  private trivia = [
    {
      question: "¿Cual es la respuesta 1?",
      correctAnswer: 0,
      answers: [
        "Respuesta 1",
        "Respuesta 2",
        "Respuesta 3",
        "Respuesta 4"
      ]
    },
    {
      question: "¿Cual es la respuesta 2?",
      correctAnswer: 2,
      answers: [
        "Respuesta 1",
        "Respuesta 2",
        "Respuesta 3",
        "Respuesta 4"
      ]
    },
    {
      question: "¿Cual es la respuesta 3?",
      correctAnswer: 3,
      answers: [
        "Respuesta 1",
        "Respuesta 2",
        "Respuesta 3",
        "Respuesta 4"
      ]
    }
  ];

  private currentQuestion = this.trivia[this.currentIndex];

  constructor() { }

  verifyAnswer(index: number){
    this.correctAnswers[this.currentIndex] = this.currentQuestion.correctAnswer === index;
  }

  verifyScore(){
    this.correctAnswers.forEach((current) => this.score += current ? 1 : 0)
  }

  nextQuestion(){
    if(this.currentIndex < this.trivia.length - 1){
      this.currentIndex++;
    }else{
      this.showScore = true;
      this.verifyScore();
    }
    this.currentQuestion = this.trivia[this.currentIndex];
  }

  ngOnInit() {
  }

}
