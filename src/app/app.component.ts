import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  res: string = "";
  a: number = 0;
  operator: string;

  tab = [];


  btnadd() {
    // this.a = parseInt(this.res);
    // this.b = parseInt(this.res);
    //   this.operator = '+';
    // this.tab.push(this.res);
    // this.res = "";

    // console.log(this.a);




    // this.b = parseInt(this.res);


    // this.s =  (this.s + parseInt(this.res));

    this.res += "+";

  }

  btnminus() {
    this.res += "-";
  }
  btndiv() {
    this.res += "/";
  }

  btnmultiply() {
    this.res += "*";
  }

  btnclear() {
    this.res = "";
  }

  btnequal() {
    this.res = eval(this.res);
  }

  btn1() {

    this.res += "1";
  }

  btn2() {

    this.res += "2";
  }
  btn3() {

    this.res += "3";
  }
  btn4() {

    this.res += "4";
  }
  btn5() {

    this.res += "5";
  }
  btn6() {

    this.res += "6";
  }
  btn7() {

    this.res += "7";
  }
  btn8() {

    this.res += "8";
  }
  btn9() {

    this.res += "9";
  }
  btn0() {

    this.res += "0";
  }
  btndot() {

    this.res = this.res + ".";
  }

}
