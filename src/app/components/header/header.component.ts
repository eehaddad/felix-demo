import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
public mobileNavClosed = true;
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }
public toggleMenu(){
this.mobileNavClosed = !this.mobileNavClosed;
this.document.body.classList.toggle('main-nav-open');
}
}
