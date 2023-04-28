import Global from "../pages/global";
import LoginPage from "../pages/loginPage";


describe('Login Test Suite', () => {

  const global = new Global();
  const loginPage = new LoginPage();
    
  it('YPMS-TC-1 : Verify that user can login with valid email and valid password',() => {

    cy.on('uncaught:exception', () => false)

    //Get Data from Fixtures
    cy.fixture('data.json').then((data)=> {

      //Call Login Function  
      global.login(data.url,data.username,data.password);
            
    });

    //Verify login success
    loginPage.getPageTitle().should('have.text','Profile');
    
    });
      
})