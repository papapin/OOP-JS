import {BaseElement} from './base-element.js';

export class Image extends BaseElement {

	constructor(fileName){

		super();
		this.fileName = fileName;
	}

	getElementString() {

		return ` <img src="${this.fileName}" alt=""  style="width: 100%" /> `;
	}

}