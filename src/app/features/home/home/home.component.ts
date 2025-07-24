import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // item$: Observable<Item[]>;
  // constructor() {
  //   let firestore = inject(Firestore);
  //   let itemCollection = collection(firestore, 'items');
  //   this.item$ = collectionData<Item>(itemCollection);
  // }
}

interface Item {
  name?: string
};