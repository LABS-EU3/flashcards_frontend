/* eslint-disable no-undef */
describe('flashCards', () => {
  describe('app landing page', () => {
    it('page can visit the app', () => {
      cy.visit('/');
    });

    it('page should have title', () => {
      cy.visit('/');
      cy.get('#welcomeTitle').should('have.text', 'Welcome to Quick Decks');
    });

    it('page should have text', () => {
      cy.visit('/');
      cy.get('#welcomeText').should(
        'have.text',
        'Here’s what you’ll be getting into',
      );
    });

    it('can visit sign up page by clicking on sign up button', () => {
      cy.visit('/')
        .findByText('Sign Up')
        .click()
        .location('pathname')
        .should('eq', '/signup');
    });

    it('can visit login page by clicking on login button', () => {
      cy.visit('/')
        .findByText('Login')
        .click()
        .location('pathname')
        .should('eq', '/login');
    });
  });

  describe('app sign up page', () => {
    it('page should go back to landing page when back arror is clicked', () => {
      cy.visit('https://site.quickdecksapp.com/signup');
      cy.get('#bArrow1')
        .should('have.attr', 'src')
        .and('match', /[https://site.quickdecksapp.com/]/);
    });

    it('page should have title', () => {
      cy.visit('https://site.quickdecksapp.com/signup');
      cy.queryByText('Create an Account').should('exist');
    });

    it('app can sign up user', () => {
      cy.visit('https://site.quickdecksapp.com/signup');
      cy.get('input[name="fullName"]').type('Testing123');
      cy.get('input[name="email"]').type('testEmail@gmail.com');
      cy.get('input[name="password"]').type('123456789');
      cy.get('input[name="password2"]').type('123456789');
      cy.findByText('Sign Up')
        .click()
        .location('pathname')
        .should('eq', '/dashboard');
    });

    it('page should have text', () => {
      cy.visit('https://site.quickdecksapp.com/signup');
      cy.queryByText('Already a user?').should('exist');
    });

    it('app can visit login page by clicking on login link', () => {
      cy.visit('https://site.quickdecksapp.com/signup')
        .findByText('Login')
        .click()
        .location('pathname')
        .should('eq', '/login');
    });
  });
  describe('app login up page', () => {
    it('page should go back to landing page when back arror is clicked', () => {
      cy.visit('https://site.quickdecksapp.com/login');
      cy.get('#bArrow2')
        .should('have.attr', 'src')
        .and('match', /[https://site.quickdecksapp.com/]/);
    });

    it('page should have title', () => {
      cy.visit('https://site.quickdecksapp.com/login');
      cy.get('#login2').should('have.text', 'Login');
    });

    it('app can login user', () => {
      cy.visit('https://site.quickdecksapp.com/login');
      cy.get('input[name="email"]').type('testEmail@gmail.com');
      cy.get('input[name="password"]').type('123456789');
      cy.get('#login1')
        .click()
        .location('pathname')
        .should('eq', '/dashboard');
    });

    it('page should have text', () => {
      cy.visit('https://site.quickdecksapp.com/login');
      cy.queryByText('Do not have an account?').should('exist');
    });

    it('app can visit sign up page by clicking on sign up link', () => {
      cy.visit('https://site.quickdecksapp.com/login')
        .findByText('Sign Up')
        .click()
        .location('pathname')
        .should('eq', '/signup');
    });

    it('app can visit forgot password page by clicking on forgot password link', () => {
      cy.visit('https://site.quickdecksapp.com/login')
        .findByText('Forgot Password?')
        .click()
        .location('pathname')
        .should('eq', '/forgot');
    });
  });
  describe('app forgot password up page', () => {
    it('page should have title', () => {
      cy.visit('https://site.quickdecksapp.com/forgot');
      cy.get('#forgotPasswordTitle').should('have.text', 'Forgot Password');
    });

    it('page should have text', () => {
      cy.visit('https://site.quickdecksapp.com/forgot');
      cy.get('#forgotPasswordText').should(
        'have.text',
        'Enter your email linked to your account. A message will be sent to your email to reset your password',
      );
    });

    it('if user email found, send mail to user and show success message', () => {
      cy.visit('https://site.quickdecksapp.com/forgot');
      cy.get('input[name="email"]').type('testEmail@gmail.com');
      cy.get('#sendEmail')
        .click()
        .get('#found')
        .should('match', /['Successfully sent your reset link to your email.]/);
    });
    it('if user email not found, error message', () => {
      cy.visit('https://site.quickdecksapp.com/forgot');
      cy.get('input[name="email"]').type('notFound@gmail.com');
      cy.get('#sendEmail')
        .click()
        .get('#notFound')
        .should('have.text', ' Email address could not be found');
    });
  });
});
