const Page = require('./page');

class HomePage extends Page {

	get inputSearch () { return $('#search-input') }
	get btnSubmit () { return $('[value=Buscar]') }
	get btnphisical()  {return $('label=Ocupacional')}

	pageUrl = 'https://develop.terapeutica.digital/#/';


	doEmptySearch(){

		this.inputSearch.waitForClickable({ timeout: 15000 });
		this.btnSubmit.waitForClickable({ timeout: 15000 });
		this.inputSearch.setValue('');
		this.btnSubmit.click();
		
	}

	doSearchByTherapist(){
		this.btnphisical.waitForClickable({ timeout: 15000 });
		this.btnphisical.click();
		
	}

	doSearchByTherapistName(name){
		this.btnSubmit.waitForClickable({ timeout: 15000 });
		this.inputSearch.setValue(name);
		this.btnSubmit.click();
		

	}



	open () {
    	    return super.open(this.pageUrl);
    	}


	}


module.exports = new HomePage();
