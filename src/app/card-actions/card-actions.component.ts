import { Component, OnInit } from '@angular/core';
import { TravelAppService } from '../services/travel-app.service';

@Component({
  selector: 'app-card-actions',
  templateUrl: './card-actions.component.html',
  styleUrls: ['./card-actions.component.scss']
})
export class CardActionsComponent implements OnInit {
  public travelAppSelectedArticles: any = null;

  constructor(
    private travelAppService: TravelAppService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.travelAppService.getData('SelectedArticles').subscribe(data => this.travelAppSelectedArticles = data);
  }
}
