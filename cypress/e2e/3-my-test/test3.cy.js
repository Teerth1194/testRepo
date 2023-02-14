describe( 'different methods', ()=>{


    it('Test 1', ()=>{

        cy.visit('https://www.freshworks.com/')
        cy.contains('FREE TRIAL').click()
        cy.url().should('contain', '/products/')

    })

} )