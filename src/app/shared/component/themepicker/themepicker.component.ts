import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ThemeService } from 'src/app/service/theme.service';


export interface SiteTheme {
  name: string;
  displayName?: string;
  accent: string;
  primary: string;
  isDefault?: boolean;
}


@Component({
  selector: 'app-themepicker',
  templateUrl: './themepicker.component.html',
  styleUrls: ['./themepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ThemepickerComponent implements OnInit {
  public currentTheme: any;

  themes: SiteTheme[] = [
    {
      primary: '#673AB7',
      accent: '#FFC107',
      displayName: 'Deep Purple & Amber',
      name: 'deeppurple-amber',
    },
    {
      primary: '#3F51B5',
      accent: '#E91E63',
      displayName: 'Indigo & Pink',
      name: 'indigo-pink',
    },
    {
      primary: '#E91E63',
      accent: '#607D8B',
      displayName: 'Pink & Blue-grey',
      name: 'pink-bluegrey',
    },
    {
      primary: '#9C27B0',
      accent: '#4CAF50',
      displayName: 'Purple & Green',
      name: 'purple-green',
    },
  ];
  constructor(private themeServices: ThemeService) { }

  ngOnInit(): void {
    this.applyTheme('indigo-pink');
  }

  applyTheme(themeName: string): void {
    this.currentTheme = this.themes.find(theme => theme.name === themeName);
    if (!this.currentTheme) {
      return;
    }
    this.themeServices.setStyle('theme', `${this.currentTheme.name}.css`);
  }
}
