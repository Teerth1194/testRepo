describe ('launch my url', ()=>{
    it('app testing', ()=>{
        cy.visit('https://www.freshworks.com/')
        cy.contains('FREE TRIAL')
        cy.contains('FREE TRIAL').click()
        cy.url().should('include', '/products/')
    })
})