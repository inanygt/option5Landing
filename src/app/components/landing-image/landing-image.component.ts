import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-landing-image',
  templateUrl: './landing-image.component.html',
  styleUrl: './landing-image.component.scss',
})
export class LandingImageComponent implements OnInit {
  animateRocket() {
    gsap.from('.rocket', {
      delay: 3.5,
      duration: 1.5,
      x: -400,
      y: 400,
      opacity: 0,
      scale: 0.5,
      transformOrigin: 'center',
    });
  }

  animateLandingImage() {
    gsap.from('.landing_img', {
      delay: 3,
      opacity: 0,
      x: 200,
      ease: 'elastic.out',
      duration: 4,
    });
  }

  ngOnInit(): void {
    this.animateRocket();
    this.animateLandingImage();
  }
}
