import { Component, OnInit } from '@angular/core';

import gsap from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'optionFive';

  animateSubheading() {
    gsap.from('.subheading', {
      x: -300,
      duration: 1,
      ease: 'power2.inOut',
    });
  }

  ngOnInit(): void {
    this.animateSubheading();
  }
}
