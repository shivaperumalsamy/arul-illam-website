import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

   contactViewType = "CONTACT_WITH_MAP";

  constructor() { }

  ngOnInit() {
  }

}
