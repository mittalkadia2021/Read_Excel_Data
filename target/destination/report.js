$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/login.feature");
formatter.feature({
  "line": 3,
  "name": "Login Functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 11311473700,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should be login with a valid credential",
  "description": "",
  "id": "login-functionality;user-should-be-login-with-a-valid-credential",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User login with following username and password from excel at\" C:\\Users\\Dell\\Desktop\\\\Elsevier Excel File\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_on_homepage()"
});
formatter.result({
  "duration": 14501653700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " C:\\Users\\Dell\\Desktop\\\\Elsevier Excel File",
      "offset": 62
    }
  ],
  "location": "MyStepDefs.user_login_with_following_username_and_password_from_excel_at(String)"
});
formatter.result({
  "duration": 21412934600,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using css selector\u003dinput#login-passwd\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027E5570\u0027, ip: \u0027192.168.0.29\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.example.Utils.enterText(Utils.java:9)\r\n\tat object_oriented_page.Login_Page.enter_Username(Login_Page.java:19)\r\n\tat org.example.MyStepDefs.user_login_with_following_username_and_password_from_excel_at(MyStepDefs.java:21)\r\n\tat ✽.When User login with following username and password from excel at\" C:\\Users\\Dell\\Desktop\\\\Elsevier Excel File\"(src/test/resources/login.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepDefs.user_able_to_login_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 22500,
  "status": "passed"
});
});