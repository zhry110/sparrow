import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created with chour <b><a href="https://akveo.page.link/8V2f" target="_blank">@your company</a></b> 2021
    </span>
  `,
})
export class FooterComponent {
}
