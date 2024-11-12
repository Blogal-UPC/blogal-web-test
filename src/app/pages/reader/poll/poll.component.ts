import { Component, OnInit } from '@angular/core';
import { Poll, PollOption } from '../../../shared/models/poll.model';
import {PollService} from '../../../core/services/poll.service';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatButton } from '@angular/material/button';
import {DatePipe, NgForOf, NgIf} from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-poll',
  standalone: true,
  imports: [
    MatSelectionList,
    MatListOption,
    MatProgressBar,
    MatButton,
    NgIf,
    NgForOf,
    MatCardModule,
    MatIconModule,
    MatDivider,
    DatePipe
  ],
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss'],
})
export class PollComponent implements OnInit {
  polls: Poll[] = [];
  selectedOptions: { [pollId: number]: PollOption | null } = {};
  hasVoted: { [pollId: number]: boolean } = {};

  constructor(private pollService: PollService) {}

  ngOnInit(): void {
    this.loadPolls();
  }

  loadPolls(): void {
    this.polls = this.pollService.getPolls();
  }

  vote(pollId: number, option: PollOption): void {
    this.selectedOptions[pollId] = option;
  }

  submitVote(pollId: number): void {
    const selectedOption = this.selectedOptions[pollId];
    if (selectedOption && !this.hasVoted[pollId]) {
      this.pollService.vote(pollId, selectedOption.text);
      this.hasVoted[pollId] = true;
    }
  }

  getPercentage(poll: Poll, votes: number): number {
    const totalVotes = poll.options.reduce((sum, option) => sum + option.votes, 0) || 0;
    return totalVotes ? Math.round((votes / totalVotes) * 10000) / 100 : 0;
  }
}
