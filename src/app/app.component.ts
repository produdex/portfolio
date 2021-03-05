import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Calculator App';
  num1: number;
  num2: number;
  result: number;
  isShow: boolean;
  topPosToStartShowing = 1;
  ngOnInit() {
    setTimeout(this.showPage, 3000);
    this.hireMe();
  }
  showPage() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('myDiv').style.display = 'block';
    document.getElementById('myDiv1').style.display = 'block';

  }
  hireMe() {
    const doc = document;
    const overlay = doc.querySelector('.overlay');

    // Open the modal
    // tslint:disable-next-line: only-arrow-functions
    doc.querySelector('.open').addEventListener('click', () => {
      overlay.classList.add('show');
    });

    // Close the modal
    doc.querySelector('.close').addEventListener('click', () => {
      overlay.classList.remove('show');
    });
  }
  @HostListener('window:scroll')
  checkScroll() {

    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
