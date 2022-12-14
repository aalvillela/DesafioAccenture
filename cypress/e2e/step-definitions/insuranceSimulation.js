import {
    Given,
    When,
    Then,    
  } from "@badeball/cypress-cucumber-preprocessor";
import vehicleDataPage from "../pages/VehicleDataPage"; 
import insurantDataPage from "../pages/InsurantDataPage";
import productDataPage from "../pages/ProductDataPage";
import priceOptionPage from "../pages/PriceOptionPage";
import sendQuotePage from "../pages/SendQuotePage";

  Given("A web browser is at the tricentis sample application", () => {
    cy.visit('101/app.php');    
  });

  When("You see the forms empty fill all the fields as requested", () => {
    vehicleDataPage.selectMake()
    vehicleDataPage.selectModel()
    vehicleDataPage.inputCylinderCap()
    vehicleDataPage.inputEnginePerf()
    vehicleDataPage.inputDateManufac()
    vehicleDataPage.inputNumberOfSeats()
    vehicleDataPage.selectRightHandDriver()
    vehicleDataPage.inputNumberofSeatsMoto()
    vehicleDataPage.selectFuelType()
    vehicleDataPage.inputPayload()
    vehicleDataPage.inputTotalWeight()
    vehicleDataPage.inputListPrice()
    vehicleDataPage.inputPlateNumber()
    vehicleDataPage.inputAnnualMileage()
    vehicleDataPage.nextStepVehicleData()    
    cy.title('eq', "Enter Insurant Data")
    insurantDataPage.inputFirstName()
    insurantDataPage.inputLastName()
    insurantDataPage.inputBirthDate()
    insurantDataPage.selectGender()
    insurantDataPage.inputAddress()
    insurantDataPage.selectCountry()
    insurantDataPage.inputZipCode()
    insurantDataPage.inputCity()
    insurantDataPage.selectOccupation()
    insurantDataPage.selectHobbies()
    insurantDataPage.nextStepInsurantData()
    cy.title('eq', "Enter Product Data")
    productDataPage.inputStartDate()
    productDataPage.selectInsuranceSum()
    productDataPage.selectMeritRating()
    productDataPage.selectDamageInsurance()
    productDataPage.selectOptionalProducts()
    productDataPage.selectCourtesyCar()
    productDataPage.nextStepProductData()
    cy.title('eq', "Select Price Option")
    priceOptionPage.selectUltimateBtn()
    priceOptionPage.nextStepPriceOption()
    sendQuotePage.inputEmail()
    sendQuotePage.inputPhone()
    sendQuotePage.inputUsername()
    sendQuotePage.inputPassword()
    sendQuotePage.inputConfirmPassword()
    sendQuotePage.sendQuote()
    sendQuotePage.assertMessage()
  });  

  Then("The user will be able to send a cotation at the end and get a confirmation e-mail", () => {    
  });