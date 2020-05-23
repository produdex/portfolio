import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']
})

export class Section2Component implements OnInit {
  navFixed = false;
  private scrollOffset = 813;
  viewHeight: number;
  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      const sectionIds = $('a.nav-link');
      $(document).scroll(function () {
        sectionIds.each(function () {
          const container = $(this).attr('href');
          const containerOffset = $(container).offset().top;
          const containerHeight = $(container).outerHeight();
          const containerBottom = containerOffset + containerHeight;
          const scrollPosition = $(document).scrollTop();
          if (scrollPosition < containerBottom - 80 && scrollPosition >= containerOffset - 80) {
            $(this).addClass('active');
          } else {
            $(this).removeClass('active');
          }
          if ($(window).scrollTop() > 300) {

            $('.ng').addClass('show');

          } else {

            $('.ng').removeClass('show');

          }
        });
      });
    });
  }
  @HostListener('window:scroll')
  onWindowScroll() {
    this.navFixed = (window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop || 0
    ) > this.scrollOffset;
  }
}
