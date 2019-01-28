import { Component, OnInit } from '@angular/core';
import { ScreenMeasureService } from 'src/app/Services/screen-measure.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

screenWidth: number;

private screenSubscription: Subscription;
constructor(private serviceScreen: ScreenMeasureService) {}

  ngOnInit() {this.screenSubscription = this.serviceScreen.onResize$
    .subscribe(size => this.screenWidth = size.window.innerWidth); }
}
