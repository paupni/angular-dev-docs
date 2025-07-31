import { Component } from '@angular/core';
import {HousingLocation} from '../housing-location/housing-location';

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  template: `
      <section>
        <form>
          <input type="text" placeholder="Filter by city" />
          <button class="primary" type="button">Search</button>
          <app-housing-location></app-housing-location>
        </form>
      </section>
    `,
  // styles: ``,
  styleUrl: 'home.css'
})
export class Home {

}
