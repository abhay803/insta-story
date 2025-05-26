describe('Home Page', () => {
  it('loads stories', () => {
    cy.visit('http://localhost:5173');
    cy.contains('POC Stories');
  });
});

describe('Story Viewer', () => {
  it('opens and closes story viewer', () => {
    cy.visit('http://localhost:5173');
    cy.get('.stories-list-container').should('be.visible');
    
    // Click on the first story to open the viewer
    cy.get('.stories-list .story-preview').first().click();
    cy.get('.story-viewer-container').should('be.visible');

    // Close the story viewer
    cy.get('.story-viewer-container .close-button').click();
    cy.get('.story-viewer-container').should('not.be.visible');
  });
});

describe('Story Navigation', () => {
  it('navigates between stories', () => {
    cy.visit('http://localhost:5173');
    
    // Open the first story
    cy.get('.stories-list .story-preview').first().click();
    cy.get('.story-viewer-container').should('be.visible');

    // Navigate to the next story
    cy.get('.nav-button.next').click();
    cy.get('.story-viewer-container').should('be.visible');

    // Navigate to the previous story
    cy.get('.nav-button.prev').click();
    cy.get('.story-viewer-container').should('be.visible');
  });
}
);

describe('Story Previews', () => {
  it('displays story previews correctly', () => {
    cy.visit('http://localhost:5173');
    
    // Check if story previews are visible
    cy.get('.stories-list .story-preview').should('have.length.greaterThan', 0);
    
    // Check if the first story preview has an image
    cy.get('.stories-list .story-preview').first().find('img').should('be.visible');
  });
}
);
