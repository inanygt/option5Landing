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
      opacity: 0,
      ease: 'power2.inOut',
    });
  }

  animateSubscribeButton() {
    gsap.from('input', {
      y: 300,
      duration: 1,
      delay: 0.5,
      ease: 'power2.inOut',
      opacity: 0,
      stagger: 0.5,
    });
  }

  animateLandingImage() {
    gsap.from('.img_landing', {
      x: 200,
      ease: 'elastic.out',
      duration: 3,
    });
  }

  animateSocialMediaIcons() {
    gsap.from('.socials-container img', {
      x: 300,
      duration: 1,
      stagger: 0.3,
    });
  }

  ngOnInit(): void {
    this.animateSubheading();
    this.animateSubscribeButton();
    this.animateLandingImage();
    this.animateSocialMediaIcons();
  }
}
