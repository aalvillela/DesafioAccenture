Feature: End-to-end simulation

    Background:
        Given A web browser is at the tricentis sample application    
    Scenario: End to End simulation flow
        When You see the forms empty fill all the fields as requested
        Then The user will be able to send a cotation at the end and get a confirmation e-mail