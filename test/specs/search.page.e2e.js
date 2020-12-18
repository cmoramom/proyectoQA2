const SearchPage = require('../pageobjects/search.page');



describe('Terapeutica Search Page', () => {

	beforeEach( () => {
        browser.reloadSession();
        SearchPage.open();
    });



    it('Check specialities button behavior', () => {

    	PhisicalURL = 'https://develop.terapeutica.digital/#/search?sp=phisical';
    	LanguajeURL = 'https://develop.terapeutica.digital/#/search?sp=language';
    	OcupacionalURL = 'https://develop.terapeutica.digital/#/search?sp=ocupational';

        
        SearchPage.doClickBtn(SearchPage.btnPhisical);
        expect(browser).toHaveUrl(PhisicalURL);

        SearchPage.doClickBtn(SearchPage.btnLanguaje);
        expect(browser).toHaveUrl(LanguajeURL);

        SearchPage.doClickBtn(SearchPage.btnOcupacional);
        expect(browser).toHaveUrl(OcupacionalURL);  

              


    });

    it('Search for specialist Maria', () => {
        
        SearchPage.doSearchBySpecialistName('Maria');
        expect(SearchPage.therapistList).toHaveText('Maria José Miranda');

              


    });


    it('Hide Maps when therepist grill', () => {
        
        SearchPage.doClickBtn(SearchPage.btnMaps);
        browser.debug();

              


    });


});