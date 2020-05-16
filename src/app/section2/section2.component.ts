import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']
})

export class Section2Component implements OnInit {
  navFixed = false;
  private scrollOffset = 812;
  @ViewChild('mainScreen', { read: ElementRef, static: false }) elementView: ElementRef;
  viewHeight: number;
  constructor() { }

  ngOnInit() {

  }
  @HostListener('window:scroll')
  onWindowScroll() {
    this.navFixed = (window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop || 0
    ) > this.scrollOffset;
  }
}
