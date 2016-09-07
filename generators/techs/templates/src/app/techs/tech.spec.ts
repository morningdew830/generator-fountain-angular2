/// <reference path="../../../typings/index.d.ts"/>

import {TechComponent} from './tech';
import {TestBed} from '@angular/core/testing';

describe('tech component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TechComponent
      ]
    });
  });

  it('should render Gulp', () => {
    const fixture = TestBed.createComponent(TechComponent);
    fixture.componentInstance.tech = {
      title: 'Gulp',
      logo: 'http://fountainjs.io/assets/imgs/gulp.png',
      text1: 'The streaming build system',
      text2: 'Automate and enhance your workflow'
    };
    fixture.detectChanges();
    const tech = fixture.nativeElement;
    expect(tech.querySelector('h3').textContent.trim()).toBe('Gulp');
  });
});
