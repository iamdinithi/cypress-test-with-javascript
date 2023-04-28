class LoginPage{

    //Login Page Elements

    getUsername (){ 
        return cy.get('#userName');
    }
    getPassword (){
        return cy.get('#password');
    }
    getBtnSignIn (){
        return cy.get('#login');
    }
    getPageTitle(){
        return cy.get('.main-header');
    }
    
    //Login Method
    
    login(email,password){
        this.getUsername().type(email);
        this.getPassword().type(password);

        //click Sign In Button
        this.getBtnSignIn().click();
    }
}

export default LoginPage;