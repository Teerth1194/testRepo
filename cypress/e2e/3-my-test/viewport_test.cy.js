describe('testing diff view port', ()=>{

    before(()=>{

        console.log('running my test')

    })

    beforeEach(()=>{

        cy.visit('https://www.google.com')

    })

    it('open in mac-13', () => {
        cy.viewport('macbook-13')
        cy.screenshot()
        cy.wait(200)
    })

    it('open in mac-15', () => {
        cy.viewport('macbook-15')
        cy.screenshot()
        cy.wait(200)
    })

    it('open in iphone-8', () => {
        cy.viewport('iphone-8')
        cy.screenshot()
        cy.wait(200)
    })
    
    it('open in custome', () => {
        cy.viewport(550, 750)
        cy.screenshot()
        cy.wait(200)
    })

    it('open in custome', () => {
        cy.viewport(550, 740)
        cy.screenshot()
        cy.wait(200)
    })
    cy.wai

})