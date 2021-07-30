describe("Home page", () => {
  beforeEach(() => {
      cy.visit('/')
  })
// it("header contains recipe heading with a message that there are no recipes", () => {
//   cy.findByRole('heading').should('contain', 'My Recipes')
//   cy.get('p')
//     .findByText('There are no recipes to list.')
//     .should('exist')
// }),
// it("contains an add recipe button that when clicked opens a form", () => {
//     cy.findByRole('button').click();
    
//     cy.get('form') 
//       .findByRole('button')
//       .should('exist')
//   }),
//   it("contains a form with fields 'Recipe Name' and 'Recipe Instructions' after clicking the 'Add Recipe' button", () => {
//     cy.findByRole('button').click();
//     expect(cy.findByRole('textbox', {name: /Recipe name/i})).toExist()
//     cy.findByRole('textbox', {name: /instructions/i}).should('exist')
//   }),
  it("displays all recipes under the 'My Recipes' heading after it has been added through the 'Add Recipe' form", () => {
    const recipeName = 'Tofu Scramble Tacos';
    const recipeName2 = 'Yerba Tea'

    cy.findByRole('button').click()
    cy.findByRole('textbox', {name: /Recipe name/i}).type(recipeName)    
    cy.findByRole('textbox', {name: /instructions/i}).type("1. heat a skillet on medium with a dollop of coconut oil {enter} 2. warm flour tortillas")

    cy.findByRole('button').click()
    cy.findByRole('button').click()
    cy.findByRole('textbox', {name: /Recipe name/i}).type(recipeName2)    
    cy.findByRole('textbox', {name: /instructions/i}).type("1. heat a skillet on medium with a dollop of coconut oil {enter} 2. warm flour tortillas")
    
    return cy.findByRole('button').click()
      .then(() => {
        cy.get('ul li').should('have.length', 2)
      // expect(cy.findByRole('listitem', /tofu scramble tacos/i)).toExist();
       })
    //   .then(() => {
    //     expect(cy.findByRole('listitem', /yerba tea/i)).toExist();
    //  })
  })
  // it('should close form when submit is clicked', () => {
  //   const recipeName = 'Tofu Scramble Tacos';
  //   cy.findByRole('button').click()
  //   cy.findByRole('textbox', {name: /Recipe name/i}).type(recipeName)
  //   cy.findByRole('textbox', {name: /instructions/i}).type("1. heat a skillet on medium with a dollop of coconut oil {enter} 2. warm flour tortillas")
    
  //   return cy.findByRole('button').click()
  //     .then(() => {
  //     cy.get('form').should('not.exist')
  //     })
  // })
})