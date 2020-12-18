const HomePage = require('../pageobjects/home.page');
const SearchPage = require('../pageobjects/search.page');





describe('Terapeutica Home Page', () => {


	
    beforeEach( () => {
        browser.reloadSession();
        HomePage.open();
    })






    it('NO redirect when search is blank', () => {
       
        HomePage.doEmptySearch();
        expect(browser).toHaveUrl(HomePage.pageUrl);        


    });

    it('Search by therapist check to be focused', () => {
        
        HomePage.doSearchByTherapist();
        expect(HomePage.inputSearch).toBeFocused();
        
           


    });

    it('Search by therapist check Placeholder', () => {
        
        HomePage.doSearchByTherapist();        
        expect(HomePage.inputSearch).toHaveAttribute('placeholder', '¿Buscas a alguien o algo en específico?');
           


    });

    it('Search by therapist Name Maria check results matches', () => {
        
        HomePage.doSearchByTherapistName('Maria');
        expect(SearchPage.therapistList).toHaveText('Maria José Miranda');

        
           


    });




});

