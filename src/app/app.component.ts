import { Component, OnInit } from '@angular/core';

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
}
