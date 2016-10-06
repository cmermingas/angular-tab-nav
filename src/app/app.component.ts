import {Component, style, state, animate, transition, trigger} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('flyIn', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(100%)'}),
        animate(100)
      ])
    ])
  ]

})
export class AppComponent {
  title = 'Angular Nav Tabs';
  activeTab = 1;

  clickTab(tabNumber) {
    this.activeTab = tabNumber;
  }
}
