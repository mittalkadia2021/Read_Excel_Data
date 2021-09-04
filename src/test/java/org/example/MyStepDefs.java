package org.example;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import object_oriented_page.Login_Page;

public class MyStepDefs {

    Login_Page login_page=new Login_Page();
    Home_Page home_page=new Home_Page();

    @Given("^User on homepage$")
    public void user_on_homepage() {
        home_page.signIn_Button();

    }

    @When("^User login with following username and password from excel at\"([^\"]*)\"$")
    public void user_login_with_following_username_and_password_from_excel_at(String path){
login_page.enter_Username();
    }

    @Then("^User able to login successfully$")
    public void user_able_to_login_successfully() {

    }

}
