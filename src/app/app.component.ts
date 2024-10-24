import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import gsap from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'optionFive';

  notificationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.notificationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.notificationForm.valid) {
      console.log(this.notificationForm.value);
    }
  }

  tl = gsap.timeline();

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
