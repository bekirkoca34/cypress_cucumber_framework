Feature: login_with_manager_creds

@manager_id
Scenario: manager_id
    Given user is on the application page
    And user login with below data
    |username |password   |
    |manager  |Manager1!  |
    And clicks on login button
    Then verify dafault page is displayed

@manager_id2
Scenario: manager_id2
    Given user is on the application page
    And user login with below data
    |username |password   |
    |manager2  |Manager2!  |
    And clicks on login button
    Then verify dafault page is displayed