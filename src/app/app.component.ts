/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import {Component, OnInit} from '@angular/core';
import {AnalyticsService} from './@core/utils/analytics.service';
import {SeoService} from './@core/utils/seo.service';
import {NbThemeService} from '@nebular/theme';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService,
              private seoService: SeoService,
              private themeService: NbThemeService) {
  }

  ngOnInit(): void {
    this.themeService.changeTheme('dark');
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
  }
}
