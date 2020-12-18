const Page = require('./page');

class SearchPage extends Page {

	get therapistList () { return $('h3*=Maria')}
	get btnPhisical () { return $('a=Física')}
	get btnLanguaje () { return $('a=Lenguaje')}
	get btnOcupacional () { return $('a=Ocupacional')}
	get inputSearch () { return $('.form-control') }
	get btnSubmit () { return $('[value=Buscar]') }
	get btnMaps () { return $('.icon-map-1') }

	

	pageUrl = 'https://develop.terapeutica.digital/#/search';


	
	getTherapistName(){
		return this.therapistList.getText();
	}

	doSearchBySpecialistName(name){

		this.inputSearch.setValue(name);
		this.btnSubmit.waitForClickable({ timeout: 10000 });
		this.btnSubmit.click();
		

	}


	doClickBtn(btn){
		btn.waitForClickable({ timeout: 10000 });
		btn.click();
		

	}

	open () {
    	    return super.open(this.pageUrl);
    	}


	}


module.exports = new SearchPage();
