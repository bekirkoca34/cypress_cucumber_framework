Feature: Amazon Search

 Scenario Outline: searching the teapot, flower and computer

    Given user is on the amazon page
    When user search for "<searching items>"
    Then verify the result has "<searching items>"

  Examples: data
  |searching items|
  |teapot         |
  |flower         |
  |computer       |
 