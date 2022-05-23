import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor() {}

  setStyle(key: string, href: string) {
    this.getLinkElementForKey(key).setAttribute('href', href);
  }

  getLinkElementForKey(key: string) {
    return this.getExistingLinkElementByKey(key) || this.createLinkElementWithKey(key);
  }

  getExistingLinkElementByKey(key: string) {
    return document.head.querySelector(
      `link[rel="stylesheet"].${this.getClassNameForKey(key)}`
    );
  }

  createLinkElementWithKey(key: string) {
    const linkEl = document.createElement('link');
    linkEl.setAttribute('rel', 'stylesheet');
    linkEl.setAttribute('type', 'text/css');
    linkEl.classList.add(this.getClassNameForKey(key));
    document.head.appendChild(linkEl);
    return linkEl;
  }

  getClassNameForKey(key: string) {
    return `style-manager-${key}`;
  }
}
