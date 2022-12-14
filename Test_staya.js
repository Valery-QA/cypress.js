describe('Тестирование staya', function () {
    
    it('Позитивный кейс: валидный логин, корректный пароль, вход, мои заказы', function () {
        cy.visit('https://staya.dog/');
        cy.get('.CookieNotification__button').click();
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('lerrrrrok@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('Ds3TmD1993');
        cy.get('.auth-form__submit').click();
        cy.contains('Мои заказы')
        
        })

    it('Негативный кейс: валидный логин, некорректный пароль, вход, мои заказы', function () {
        cy.get('button.profile__nav-link').click();
        cy.get('.box__button_ok').click();
        cy.get('.CookieNotification__button').click();
        cy.get('.header-bottom__right--link').click();
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('lerrrrrok@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('Ds3TmD1991');
        cy.get('.auth-form__submit').click();
        cy.contains('Невозможно войти с предоставленными учетными данными');
        
        
        })
        
})
