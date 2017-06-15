import {...} from '...'

@Component({
  selector: 'my-app',
  template: `
  <div>
    <h2>A Wikipedia Search</h2>
    <input type="text" [formControl]="term" >
    <ul>
      <li *ngFor='let item of items | async'>{{item}}</li>
    </ul>
  </div>
  `
})

import class App {
  items: Observable<Array<string>>
  term = new FormControl()
  constructor(private wikipediaService: WikipediaService) {
    this.term.valueChanges
             .debounceTime(400)
             .distinctUntilChanged()
             .switchMap(term => this.wikipediaService.search(term))
             .subscribe(items => this.items = items)
  }
}
