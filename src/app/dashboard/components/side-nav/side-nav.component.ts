import { Component, NgZone, OnInit } from '@angular/core';

//const MAX_WIDTH_BREAKPOINT = 720;


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  private mediaMatcher:MediaQueryList = matchMedia("(max-width: 720px)");
  //private mql= window.matchMedia(`(max-with: ${MAX_WIDTH_BREAKPOINT}px))`);
  links = [{
    name: 'Invoices',
    url: 'invoices'
  }, {
    name: 'Clients',
    url: 'clients'
  }]

  constructor(_zone: NgZone) {
    this.mediaMatcher.addEventListener("change", (mql:any) => {
      _zone.run( () => this.mediaMatcher = mql)
    })
   }

  ngOnInit(): void {
  }

  isScreenSmall(){
    return this.mediaMatcher.matches;

   }

}
