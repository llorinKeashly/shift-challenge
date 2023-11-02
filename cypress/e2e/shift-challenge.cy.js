describe("Redbrick take home tests", () => {

  beforeEach(() => {
    //setting the url to visit before each test run. BaseUrl can be found in cypress.config file
    const baseUrl = Cypress.config('baseUrl');
    cy.visit(baseUrl);
  });

  it("Should navigate to www.rdbrck.com from rdbrck.com", () => {
    cy.url().should("eq", "https://www.rdbrck.com/");
  });

  it("Should navigate to the 'Careers' page and validate that there is 'Lead QA Automation Developer' job card" , () => {
    cy.get('header nav a[href="/careers"]').click();
    cy.url().should("eq", "https://www.rdbrck.com/careers");
    cy.get('.type-h5').should("contain", "Lead QA Automation Developer");
  });
});