() => {
  cy.visit(baseUrl + "/main.html");

  // Check that the second <section> (index 1) has some non-empty text
  cy.get('section').eq(1).then(ans => {
    expect(ans.text().trim().length).to.gt(0);
  });

  // Check that the element with id="quote" has non-empty text
  cy.get('#quote').then(ans => {
    expect(ans.text().trim().length).to.gt(0);
  });
}

