describe('Test dropdown', () => {
    it.skip('drop down without select tag', ()=>{
        cy.visit('https://www.globalsqa.com/demo-site/select-dropdown-menu/')
        cy.get("#post-2646 > div.twelve.columns > div > div > div > p > select").select('Albania')
    })
})