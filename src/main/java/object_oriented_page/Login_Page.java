package object_oriented_page;

import org.example.Utils;
import org.openqa.selenium.By;

public class Login_Page extends Utils {

    private By _userName=By.cssSelector("#login-username");
    private By _next=By.cssSelector("input#login-signin");
    private By _password=By.cssSelector("input#login-passwd");
    private By _next_password=By.cssSelector("button#login-signin");
    String user="C:\\Users\\Dell\\Desktop\\ElsevierExcelFile.xlsx";



    public void enter_Username(){
        enterText(_userName,user);
        clickOnElement(_next);
        enterText(_password,user);
        clickOnElement(_next_password);

    }
}
