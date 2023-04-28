import LoginPage from '../pages/loginPage';

class Global {

    login (url, email, password){
        this.visitUrl(url);
        const loginPage = new LoginPage();
        loginPage.login(email, password);
    }

    visitUrl(url){
        cy.visit(url);
    }
}
export default Global;