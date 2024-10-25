import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import gsap from 'gsap';
import { TextPlugin } from 'gsap/all';

gsap.registerPlugin(TextPlugin);

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
      delay: 2,
      x: -300,
      duration: 2,
      opacity: 0,
    });
  }

  animateSocialMediaIcons() {
    gsap.from('.logo', {
      delay: 2,
      y: 100,
      duration: 2,
      stagger: 0.3,
      opacity: 0,
    });
  }

  startCounterAnimation() {
    const tl = gsap.timeline();

    tl.set('.logo_option5', {
      display: 'none',
    });
    tl.to('#counter', {
      text: '000',
      duration: 0.6,
      ease: 'none',
    })
      .to('#counter', {
        text: '010',
        duration: 0.1,
        ease: 'none',
      })
      .to('#counter', {
        text: '020',
        duration: 0.1,
        ease: 'none',
      })
      .to('#counter', {
        text: '030',
        duration: 0.1,
        ease: 'none',
      })
      .to('#counter', {
        text: '040',
        duration: 0.1,
        ease: 'none',
      })
      .to('#counter', {
        text: '050',
        duration: 0.1,
        ease: 'none',
      })
      .to('#counter', {
        text: '060',
        duration: 0.1,
        ease: 'none',
      })
      .to('#counter', {
        text: '070',
        duration: 0.1,
        ease: 'none',
      })
      .to('#counter', {
        text: '080',
        duration: 0.1,
        ease: 'none',
      })
      .to('#counter', {
        text: '090',
        duration: 0.1,
        ease: 'none',
      })
      .to('#counter', {
        text: '100',
        duration: 0.1,
        ease: 'none',
      })
      .to('#counter', {
        y: -300,
        ease: 'power1.inOut',
        opacity: 0,
      })
      .from('.logo_option5', {
        display: 'block',
        x: -200,
        duration: 2,
        opacity: 0,
      });
  }

  ngOnInit(): void {
    this.animateSubheading();
    this.animateSocialMediaIcons();
    this.startCounterAnimation();
  }
}
