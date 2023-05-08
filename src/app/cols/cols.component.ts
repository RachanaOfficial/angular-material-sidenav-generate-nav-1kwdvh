import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-cols',
  templateUrl: './cols.component.html',
  styleUrls: ['./cols.component.css']
})
export class ColsComponent implements OnInit {

 

  ngOnInit() {
  }
  constructor(private sanitizer: DomSanitizer) {}

  col = [
    {
      
      // "col_loc": "<iframe src='https://stackblitz.com/edit/angular-hello-world?file=app%2Fapp.component.ts' width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>",

      // "col_loc": "<iframe src=' https://plnkr.co/edit/?open=app%2Fapp.component.ts&preview' width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>",

      "col_loc": "<iframe src='https://stackblitz.com/edit/devinco-ag-grid-server-side-olglzp?file=src/app/app.component.ts' width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>",

      
     
     
    }
  ];

  safeHTML(content) {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}