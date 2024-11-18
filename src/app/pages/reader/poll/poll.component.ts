import { Component, inject, OnInit } from '@angular/core';
import { Poll, PollOption } from '../../../shared/models/poll.model';
import {PollService} from '../../../core/services/poll.service';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatButton, MatButtonModule, MatIconButton } from '@angular/material/button';
import {DatePipe, Location, NgForOf, NgIf} from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

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
    DatePipe,
    MatTabGroup,
    MatTab,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatIconButton,
  ],
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss'],
})
export class PollComponent implements OnInit {
  polls: Poll[] = [];
  selectedOptions: { [pollId: number]: PollOption | null } = {};
  hasVoted: { [pollId: number]: boolean } = {};
  private location = inject(Location);
  constructor(private pollService: PollService) {}

  ngOnInit(): void {
    this.loadPolls();
  }
  goBack(): void {
    this.location.back();
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
