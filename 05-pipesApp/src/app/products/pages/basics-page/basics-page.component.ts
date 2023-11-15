import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styles: [
  ]
})
export class BasicsPageComponent {

  public nameLower = "chemi";
  public nameUpper = "CHEMI";
  public fullname = "cHemI";
  public customDate: Date = new Date();

}
