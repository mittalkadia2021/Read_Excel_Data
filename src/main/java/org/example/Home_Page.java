package org.example;

import org.openqa.selenium.By;

public class Home_Page extends Utils{
    private By _signIn=By.xpath("(//a[contains(text(), 'Sign in')])[1]");
    private By _acceptAll=By.xpath("//button[@type=\"submit\"]");

    public void signIn_Button(){
        clickOnElement(_acceptAll);
        clickOnElement(_signIn);

    }
}
