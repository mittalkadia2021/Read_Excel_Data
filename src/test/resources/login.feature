@Login

Feature: Login Functionality
  Scenario Outline: User should be login with a valid credential
    Given   User on homepage
    When    User login with following "<SheetName>" and <RowNumber>
    And     user click on next button
    Then    User able to login successfully
  Examples:
    |SheetName|RowNumber|
    | Credential |0       |