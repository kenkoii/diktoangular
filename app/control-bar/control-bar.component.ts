import {Component} from '@angular/core';

@Component({
    selector: 'control-bar',
    templateUrl: 'app/control-bar/control-bar.component.html'
})

export class ControlBarComponent {
	flag: boolean;
	showModal(){
		this.flag = !this.flag;
	}

	addCategory(){
		console.log("Tidert")
	}
}
