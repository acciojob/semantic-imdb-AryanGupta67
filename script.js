cy.visit(baseUrl + "/main.html");

cy.get('section').eq(1).then(ans => {
  expect(ans.text().trim().length).to.gt(0);
});

cy.get('#quote').then(ans => {
  expect(ans.text().trim().length).to.gt(0);
});

