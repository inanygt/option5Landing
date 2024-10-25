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
      delay: 2,
      duration: 2,
      x: -400,
      y: 400,
      opacity: 0,
      scale: 0.1,
      transformOrigin: 'center',
    });
  }

  animateLandingImage() {
    gsap.from('.landing_img', {
      delay: 2,
      opacity: 0,
      x: 200,
      duration: 2,
    });
  }

  ngOnInit(): void {
    this.animateRocket();
    this.animateLandingImage();
  }
}
