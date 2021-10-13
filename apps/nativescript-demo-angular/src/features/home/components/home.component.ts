import { Component } from '@angular/core';
import { ObservableArray, ItemEventData } from '@nativescript/core';
import { setStatusBarColor } from '../../../utils';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  items: ObservableArray<any>;

  ngOnInit() {
    setStatusBarColor('dark', '#97d9e9');
    this.items = new ObservableArray([
      { id: 1, comment: 'tests', author: 'owen' },
      { id: 2, comment: 'awesome', author: 'nathan' },
      { id: 3, comment: 'amazing', author: 'eduardo' },
    ]);
  }

  itemLoading(args: ItemEventData) {
    console.log('itemLoading:', args.index);
  }
}
