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

  isSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.notificationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.notificationForm.valid) {
      console.log(this.notificationForm.value);
    }
  }

  animateSubheading() {
    gsap.from('.subheading', {
      x: -300,
      duration: 4,
      opacity: 0,
      ease: 'elastic.out',
    });
  }

  animateSocialMediaIcons() {
    gsap.from('.socials-container img', {
      delay: 3,
      x: 300,
      duration: 1,
      stagger: 0.3,
      opacity: 0,
    });
  }

  ngOnInit(): void {
    this.animateSubheading();
    this.animateSocialMediaIcons();
  }
}
