import {Component} from '@angular/core';
import {ListService} from '../services/list.service'
import { Category } from '../models/category.model'

@Component({
    selector: 'list',
    templateUrl: 'app/list/list.component.html',
    providers: [ListService]
})

export class ListComponent {
	public categories: Categories[];

	errorMessage: string;

	constructor(private listService: ListService){
		const categories$ = this.listService.getCategories();

		categories$.subscribe(
			categories => { console.log(categories); this.categories = categories },
			err => console.error(err),
			() => console.log(this.categories)
		);
	}



}
// ,
// // 							error => this.errorMessage = <any>error
// (data) => this.categories = data,
// 							(error) => alert(error),
// 							() => console.log("async completed")
