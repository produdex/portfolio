import { Component, OnInit, HostListener } from '@angular/core';
@Component({
  selector: 'app-section-home',
  templateUrl: './section-home.component.html',
  styleUrls: ['./section-home.component.scss']
})

export class SectionHomeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    jQuery(document).ready(function ($) {
      var $timeline_block = $('.cd-timeline-block');

      //hide timeline blocks which are outside the viewport
      $timeline_block.each(function () {
        if ($(this).offset().top > $(window).scrollTop() + $(window).height() * 0.75) {
          $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        }
      });

      //on scolling, show/animate timeline blocks when enter the viewport
      $(window).on('scroll', function () {
        $timeline_block.each(function () {
          if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden')) {
            $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
          }
        });
      });
    });

    $(document).ready(function () {
      const sectionIds = $('div.cd-timeline-block');
      $(document).scroll(function () {
        sectionIds.each(function () {
          if ($(window).scrollTop() > 500) {
            $('.bg').addClass('show');
          } else {
            $('.bg').removeClass('show');
          }
          if ($(window).scrollTop() > 700) {
            $('.bg1').addClass('show');
          } else {
            $('.bg1').removeClass('show');
          }
          if ($(window).scrollTop() > 900) {
            $('.bg2').addClass('show');
          } else {
            $('.bg2').removeClass('show');
          }
          if ($(window).scrollTop() > 1350) {
            $('.bg3').addClass('show');
          } else {
            $('.bg3').removeClass('show');
          }
        });
      });
    });
  }
}
