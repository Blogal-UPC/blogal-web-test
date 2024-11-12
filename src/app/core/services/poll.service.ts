import { Injectable } from '@angular/core';
import { Poll } from '../../shared/models/poll.model'

@Injectable({
  providedIn: 'root'
})
export class PollService {
  private polls: Poll[] = [
    {
      id: 1,
      question: '¿Cuál es tu lenguaje de programación favorito?',
      options: [
        { text: 'JavaScript', votes: 1 },
        { text: 'TypeScript', votes: 3 },
        { text: 'Python', votes: 5 },
        { text: 'Java', votes: 0 }
      ],
      author: 'John',
      description: 'Esta encuesta trata sobre lenguajes de programación',
      publishDate: new Date('2023-01-01')
    },
    {
      id: 2,
      question: '¿Cuál es tu deporte favorito?',
      options: [
        {text: 'Fútbol', votes: 6},
        {text: 'Baloncesto', votes: 4},
        {text: 'Tenis', votes: 3},
        {text: 'Natación', votes: 2}
      ],
      author: 'Carlos',
      description: 'Esta encuesta trata sobre deportes favoritos',
      publishDate: new Date('2023-02-01')
    },
    {
      id: 3,
      question: '¿Cuál es tu tipo de música favorito?',
      options: [
        {text: 'Rock', votes: 5},
        {text: 'Pop', votes: 8},
        {text: 'Jazz', votes: 2},
        {text: 'Clásica', votes: 1}
      ],
      author: 'Pablo',
      description: 'Esta encuesta trata sobre géneros musicales',
      publishDate: new Date('2023-03-01')
    },
    {
      id: 4,
      question: '¿Qué red social prefieres?',
      options: [
        {text: 'Facebook', votes: 7},
        {text: 'Twitter', votes: 5},
        {text: 'Instagram', votes: 6},
        {text: 'LinkedIn', votes: 3}
      ],
      author: 'Pedro',
      description: 'Esta encuesta trata sobre preferencias en redes sociales',
      publishDate: new Date('2023-04-01')
    },
    {
      id: 5,
      question: '¿Cuál es tu sistema operativo favorito?',
      options: [
        {text: 'Windows', votes: 4},
        {text: 'macOS', votes: 2},
        {text: 'Linux', votes: 9},
        {text: 'Otros', votes: 1}
      ],
      author: 'Juan',
      description: 'Esta encuesta trata sobre preferencias de sistemas operativos',
      publishDate: new Date('2023-05-01')
    }
  ];

  constructor() { }

  getPolls(): Poll[] {
    return this.polls;
  }

  getPollById(id: number): Poll | undefined {
    return this.polls.find(poll => poll.id === id);
  }

  vote(pollId: number, optionText: string): void {
    const poll = this.getPollById(pollId);
    if (poll) {
      const option = poll.options.find(o => o.text === optionText);
      if (option) {
        option.votes += 1;
      }
    }
  }

  resetPoll(pollId: number): void {
    const poll = this.getPollById(pollId);
    if (poll) {
      poll.options.forEach(option => option.votes = 0);
    }
  }

  addPoll(poll: Poll): void {
    const newPoll = { ...poll, id: this.polls.length + 1 };
    this.polls.push(newPoll);
  }

  deletePoll(pollId: number): void {
    this.polls = this.polls.filter(poll => poll.id !== pollId);
  }
}
