import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'CalcU';

	num1:number;
	num2:number;

	symbol:string;

	result:string;


//{{num1}} {{symbol}} {{num2}} = {{result}}	
	calc(opt){
		let value = this.operation(opt)
		this.result = this.num1 + ' ' + this.symbol + ' ' + this.num2 + ' = ' + value;
	}

	operation(opt){
		switch(opt){
			case 1: // sum
				this.symbol = '+';
				return +this.num1 + +this.num2;
			break;
			case 2: // substration
				this.symbol = '-';
				return this.num1 - this.num2;
			break;
			case 3: // multiplication
				this.symbol = '*';
				return this.num1 * this.num2;
			break;
			case 4: // division
				this.symbol = '/';
				return this.num1 / this.num2;
			break;

		}
	}


}
