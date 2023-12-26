Feature: End to End ECommerce Validation

    Application Regression
    @Regression
    Scenario: Ecommerce Products Delivery
    Given I open ECommerce Page
    When I add items to cart
    And Validate the total prices
    Then Select the country submit and verify Thankyou
