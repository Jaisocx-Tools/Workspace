// Good day,
// this tests file doesn't cover nearly no tests.
// I've just started the functional tests feature,
// and these tests are just the placeholders for the .html examples files
// in the root of the sandbox.brightday.email to extend the functional tests later.


describe('Homepage', () => {
  it('loads and contains expected text', () => {
    cy.visit('/');
    cy.contains('examples');
  });
});


describe('Example_EmailHtmlInliner_Images', () => {
  it('loads and contains expected text', () => {
    cy.visit('/Example_EmailHtmlInliner_Images.html');
    cy.contains('Good day');
  });
});



describe('ExampleCss_CssCodeSnippet_minimal', () => {
  it('loads and contains expected text', () => {
    cy.visit('/ExampleCss_CssCodeSnippet_minimal.html');
    cy.contains("import { AppComponent } from './app.component';");
  });
});



describe('ExampleCss_CssCodeSnippet', () => {
  it('loads and contains expected text', () => {
    cy.visit('/ExampleCss_CssCodeSnippet.html');
    cy.contains("import { AppComponent } from './app.component';");
  });
});



describe('ExampleCss_CssTable_JaisocxFolderListing_NoJS', () => {
  it('loads and contains expected text', () => {
    cy.visit('/ExampleCss_CssTable_JaisocxFolderListing_NoJS.html');
    cy.contains("example-theme-basic-long.html");
  });
});



describe('ExampleCss_CssTable_4fields', () => {
  it('loads and contains expected text', () => {
    cy.visit('/ExampleCss_CssTable_4fields.html');
    cy.contains("description");
  });
});



describe('ExampleCss_CssTable_12fields', () => {
  it('loads and contains expected text', () => {
    cy.visit('/ExampleCss_CssTable_12fields.html');
    cy.contains("CssCleanStart");
  });
});



describe('ExampleCss_CssTable', () => {
  it('loads and contains expected text', () => {
    cy.visit('/ExampleCss_CssTable.html');
    cy.contains("description");
  });
});







describe('ExampleSimple_CharcodeConverter', () => {
  it('loads and contains expected text', () => {
    cy.visit('/ExampleSimple_CharcodeConverter.html');
    cy.contains("Under development");
  });
});



describe('ExampleSimple_ImprovedTemplateRenderer_Test', () => {
  it('loads and contains expected text', () => {
    cy.visit('/ExampleSimple_ImprovedTemplateRenderer_Test.html');
    cy.contains("to render json data");
  });
});



describe('ExampleSimple_ObjData', () => {
  it('loads and contains expected text', () => {
    cy.visit('/ExampleSimple_ObjData.html');
    cy.contains("This example is to research");
  });
});



describe('ExampleSimple_ObjDataByPhpEndpoint', () => {
  it('loads and contains expected text', () => {
    cy.visit('/ExampleSimple_ObjDataByPhpEndpoint.html');
    cy.contains("\"@type\": \"NewsArticle\"");
  });
});



describe('ExampleSimple_ResponsiveSizes', () => {
  it('loads and contains expected text', () => {
    cy.visit('/ExampleSimple_ResponsiveSizes.html');
    cy.contains("\"size\": \"responsive_size_");
  });
});



describe('ExampleSimple_TemplateRenderer', () => {
  it('loads and contains expected text', () => {
    cy.visit('/ExampleSimple_TemplateRenderer.html');
    cy.contains("<h3>Hello World!</h3>");
  });
});



describe('ExampleSimple_Tooltip', () => {
  it('loads and contains expected text', () => {
    cy.visit('/ExampleSimple_Tooltip.html');
    cy.contains("Tooltip Example");
  });
});



describe('ExampleSimple_TreeRenderingModeConf_old', () => {
  it('loads and contains expected text', () => {
    cy.visit('/ExampleSimple_TreeRenderingModeConf_old.html');
    cy.contains("html 1");
  });
});



describe('ExampleSimple_TreeRenderingModeConf', () => {
  it('loads and contains expected text', () => {
    cy.visit('/ExampleSimple_TreeRenderingModeConf.html');
    cy.contains("html 1");
  });
});




describe('ExampleSimple_TreeRenderingModeEase', () => {
  it('loads and contains expected text', () => {
    cy.visit('/ExampleSimple_TreeRenderingModeEase.html');
    cy.contains("\"@type\": \"NewsArticle\"");
  });
});



describe('ExampleSimple_WorkspaceTreeWalker', () => {
  it('loads and contains expected text', () => {
    cy.visit('/ExampleSimple_WorkspaceTreeWalker.html');
    cy.contains("\"text\": \"Hello 1\"");
  });
});



describe('ExampleWebpack_Tooltip_minimal', () => {
  it('loads and contains expected text', () => {
    cy.visit('/ExampleWebpack_Tooltip_minimal.html');
    cy.contains("Tooltip Example");
  });
});



describe('ExampleWebpack_Tooltip_withCssCleanStart-webpack', () => {
  it('loads and contains expected text', () => {
    cy.visit('/ExampleWebpack_Tooltip_withCssCleanStart-webpack.html');
    cy.contains("Tooltip Example");
  });
});



describe('ExampleWebpack_Tooltip_withCssCleanStart', () => {
  it('loads and contains expected text', () => {
    cy.visit('/ExampleWebpack_Tooltip_withCssCleanStart.html');
    cy.contains("Tooltip Example");
  });
});




describe('ExampleWebpack_Tooltip', () => {
  it('loads and contains expected text', () => {
    cy.visit('/ExampleWebpack_Tooltip.html');
    cy.contains("Tooltip Example");
  });
});




// Encommented, since the Tree loads too heavy data, no need every time tests run.
// I shall build one other tests file testing once not very often, jsut before release.
// describe('ExampleWebpack_Tree_BigTestData', () => {
//   it('loads and contains expected text', () => {
//     cy.visit('/ExampleWebpack_Tree_BigTestData.html');
//     cy.contains("");
//   });
// });



describe('ExampleWebpack_Tree', () => {
  it('loads and contains expected text', () => {
    cy.visit('/ExampleWebpack_Tree.html');
    cy.contains("Json Root");
  });
});







