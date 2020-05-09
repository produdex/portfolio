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
  }
  showPage() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('myDiv').style.display = 'block';
    document.getElementById('myDiv1').style.display = 'block';

  }

}
