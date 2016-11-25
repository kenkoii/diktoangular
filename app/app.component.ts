import {Component} from '@angular/core';
// Add the RxJS Observable operators.
import './rxjs-operators';


@Component({
    selector: 'my-app',
    template: ` <breadcrumb></breadcrumb>
    			<list></list>
    			<control-bar></control-bar>`
})

export class AppComponent {

	name= "Tidert";

}
