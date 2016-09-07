/// <reference path="../../typings/index.d.ts"/>

import {FooterComponent} from './footer';
import {TestBed} from '@angular/core/testing';

describe('footer component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        FooterComponent
      ]
    });
  });

  it('should render \'FountainJS team\'', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    const footer = fixture.nativeElement;
    expect(footer.querySelector('a').textContent.trim()).toBe('FountainJS team');
  });
});
