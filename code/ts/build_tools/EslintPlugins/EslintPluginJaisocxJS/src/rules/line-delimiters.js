// eslint-plugin-custom/rules/line-delimiters.js
export const LineDelimiters = {
  meta: {
    type: "layout",
    docs: {
      description: "Enforce line delimiters around blocks and method definitions",
      category: "Stylistic Issues",
      recommended: false
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          "class": {
            type: "object",
            properties: {
              "lines_before": {
                type: "number",
                minimum: 1
              },
              "lines_before_on_block_start": {
                type: "number",
                minimum: 0
              },
            },
            additionalProperties: false
          },
          "methods": {
            type: "object",
            properties: {
              "lines_before": {
                type: "number",
                minimum: 1
              },
              "lines_before_on_block_start": {
                type: "number",
                minimum: 0
              },
            },
            additionalProperties: false
          },
          "blocks": {
            type: "object",
            properties: {
              "lines_before": { 
                type: "number", 
                minimum: 1 
              },
              "lines_before_on_block_start": {
                type: "number",
                minimum: 0
              },
            },
            additionalProperties: false
          },
          "return": {
            type: "object",
            properties: {
              "lines_before": {
                type: "number",
                minimum: 1
              },
              "lines_before_on_block_start": {
                type: "number",
                minimum: 0
              },
            },
            additionalProperties: false
          },
          "above_comments": {
            type: "object",
            properties: {
              "lines_before": { 
                type: "number", 
                minimum: 1 
              },
              "lines_before_on_block_start": {
                type: "number",
                minimum: 0
              },
            },
            additionalProperties: false
          },
          "code_lines": {
            type: "object",
            properties: {
              "lines_before": { 
                type: "number", 
                minimum: 1 
              },
              "lines_before_on_block_start": {
                type: "number",
                minimum: 0
              },
            },
            additionalProperties: false
          }
        },
        additionalProperties: false
      }
    ]
  },
  create: function (context) {

    const TSC_OUTPUT_INDENTATION_SIZE = 4; // Matches tsc indent rule fixed value, tsc cannot be configured
    const ESLINT_CONFIG_INDENTATION_SIZE = 2; // Matches tsc indent rule fixed value, tsc cannot be configured
    const sourceCode = context.getSourceCode();
    
    const keywordPunctuator = "Punctuator";
    const keywordKeyword = "Keyword";
    const keywordExport = "export";
    const keywordColon = ":";
    const keywordBlockStart = "{";
    const keywordBlockEnd = "}";
    
    const labeledBlocksNames = [
      "WhileStatement",
      "ForStatement",
      "ForInStatement",
      "ForOfStatement"
    ];
    
    
    // here we get eslintrc.js config rules
    const indentRuleConfig = (context && context.settings && context.settings.indent) || [ESLINT_CONFIG_INDENTATION_SIZE, ESLINT_CONFIG_INDENTATION_SIZE]; // Default to ESLINT_CONFIG_INDENTATION_SIZE spaces
    const eslintConfigIdentPrefixSizeForOneLevel = Array.isArray(indentRuleConfig) ? indentRuleConfig[1] : ESLINT_CONFIG_INDENTATION_SIZE;

    
    
    function checkBlockSpacing(
      node,
      spacingType
    ) {
      console.log(node.type);
      
      const optionsDefaults = {
        "class": {
          "lines_before": 3,
          "lines_before_on_block_start": 0
        },
        "methods": {
          "lines_before": 3,
          "lines_before_on_block_start": 1
        },
        "blocks": {
          "lines_before": 1,
          "lines_before_on_block_start": 0
        },
        "return": {
          "lines_before": 2,
          "lines_before_on_block_start": 0
        },
        "above_comments": {
          "lines_before": 2,
          "lines_before_on_block_start": 0
        },
        "code_lines": {
          "lines_before": 2,
          "lines_before_on_block_start": 1
        }
      };

      const options = context.options[0] || {};

      const spacing = {
        "class": options.class || optionsDefaults.class,
        "methods": options.methods || optionsDefaults.methods,
        "blocks": options.blocks || optionsDefaults.blocks,
        "return": options["return"] || optionsDefaults["return"],
        "above_comments": options.above_comments || optionsDefaults.above_comments,
        "code_lines": options.code_lines || optionsDefaults.code_lines
      };

      let linesRequired = 0;
      let newLineCharsNumber = 0;

      let locSpacingType = spacingType;
      let spacingApplied = spacing[locSpacingType];
      if (spacingApplied === undefined ) {
        locSpacingType = "code_lines";
        spacingApplied = spacing[locSpacingType];
      }
      
      let mode = "before";
      let before = {};
      
      try {
        before = sourceCode.getTokenBefore(node, { includeComments: true });
      } catch (e) {
        before = false;
      }

      let isFirstInBlock = true;

      if (before && (before.value === keywordBlockStart)) {
        isFirstInBlock = true;
        linesRequired = spacingApplied.lines_before_on_block_start;
        
      } else {
        isFirstInBlock = false;
        linesRequired = spacingApplied.lines_before;
      }

      newLineCharsNumber = linesRequired + 1;

      const lineDiff = {
        before: 0,
        after: 0
      };
      
      
      let lineStartToken = {};
      let lineStartTokenBefore = {};

      let labelToken = {};
      let labelTokenBefore = {};

      let exportKeywordToken = {};
      let exportKeywordTokenBefore = {};

      if (labeledBlocksNames.includes(node.type) && (before.value === keywordColon)) {
        labelToken = sourceCode.getTokenBefore(before);
        labelTokenBefore = sourceCode.getTokenBefore(labelToken);
        
        lineStartToken = labelToken;
        lineStartTokenBefore = labelTokenBefore;
        
      } else if ((before.type === keywordKeyword) && (before.value === keywordExport)) {
        exportKeywordToken = before;
        exportKeywordTokenBefore = sourceCode.getTokenBefore( exportKeywordToken );
        
        lineStartToken = exportKeywordToken;
        lineStartTokenBefore = exportKeywordTokenBefore;
      } else {
        lineStartToken = node;
        lineStartTokenBefore = before;
      }

      lineDiff.before = lineStartToken.loc.start.line - (lineStartTokenBefore ? lineStartTokenBefore.loc.end.line : 0) - 1;

      
      
      let toSetLinesNumber = true;
      if (node.type === "IfStatement") {
        toSetLinesNumber = !((before.type === "Keyword") && (before.value === "else"));

      } else if (locSpacingType === "code_lines") {
        // toSetLinesNumber = ((lineDiff.before > 0) && (lineDiff.before !== linesRequired));
        toSetLinesNumber = ((lineDiff.before > linesRequired));

      } else if (locSpacingType === "return") {
        toSetLinesNumber = (lineDiff.before !== linesRequired);
        
      } else {
        toSetLinesNumber = (lineDiff.before !== linesRequired);

      }
      
      
      
      let rangeStart = 0;
      let rangeEnd = 0;
      let range = [0, 0];
      let whiteSpacesNumber = 0;
      let linesReplacement = "";

      if ((toSetLinesNumber === true)) {
        console.log(node, lineStartToken, linesRequired);

        rangeStart = lineStartTokenBefore ? lineStartTokenBefore.range[1] : 0;
        rangeEnd = lineStartToken.range[0];
        whiteSpacesNumber = lineStartToken.loc.start.column;

        if (rangeStart && rangeEnd ) {

          whiteSpacesNumber = lineStartToken.loc.start.column;
          linesReplacement = "\n".repeat(newLineCharsNumber) + " ".repeat(whiteSpacesNumber);
          range = [rangeStart, rangeEnd];
          mode = "before";
          let text = `Expected ${linesRequired} empty line${linesRequired > 1 ? "s" : ""} found ${lineDiff.before} ${mode} block.`;
          console.log(text);
          
          context.report({
            node,
            range,
            message: "Hoi!", //`Expected ${linesRequired} empty line${linesRequired > 1 ? "s" : ""} found ${lineDiff.before} ${mode} block.`,
            fix(fixer) {
              return fixer.replaceTextRange(range, linesReplacement );
            }
          });

        }
      }
      
      
      return;

      let after = {};
      
      try {
        after = sourceCode.getTokenAfter(node, { includeComments: true });
      } catch (e) {
        after = false;
      }

      if (!after) {
        return;
      }

      const typeAfter = after.type;
      let isLastInParent = (node.parent && node.parent.body && (node.parent.body.length > 0) && (node.parent.body[(node.parent.body.length - 1)] === node));

      if ((typeAfter === searchKey) && (after.value === blockEnd)) {
        isLastInParent = true;
      }

      lineDiff.after = after.loc.start.line - node.loc.end.line;

      if (!isLastInParent && (mode === BEFORE_AND_AFTER) && (lineDiff.after !== newLineCharsNumber)) {
        let rangeEnd = 0;

        whiteSpacesNumber = after.loc.start.column;
        rangeEnd = after.start;

        // if ( node.end && rangeEnd ) {

        //   if ( spacingType === "methods" ) { console.log( "invokes " ); }
          
        //   identationLevel = (whiteSpacesNumber / eslintConfigIdentPrefixSizeForOneLevel);
        //   mustWhitespacesNumber = (identationLevel * eslintConfigIdentPrefixSizeForOneLevel);
        //   linesReplacement = "\n".repeat(newLineCharsNumber) + " ".repeat(mustWhitespacesNumber);
        //   range = [node.end, rangeEnd];
        //   mode = "after";
        //   text = `Expected ${newLineCharsNumber} empty line${newLineCharsNumber > 1 ? "s" : ""} ${mode} block.`;
        //   console.log(text);

        //   context.report({
        //     node,
        //     range,
        //     message: `Expected ${newLineCharsNumber} empty line${newLineCharsNumber > 1 ? "s" : ""} ${mode} block.`,
        //     fix(fixer) {

        //       return fixer.replaceTextRange(
        //         range,
        //         linesReplacement
        //       );

        //     }

        //   });
          
        // }
      }

    }


    function checkBlockSpacingAllTokens(
      node,
      spacingType
    ) {

      // console.log(node.type);

      let handledTokensNames = [
        "ClassDeclaration",
        "MethodDefinition",
        "FunctionDeclaration",
        "IfStatement",
        "WhileStatement",
        "ForStatement",
        "ForInStatement",
        "ForOfStatement",
        "ReturnStatement",
      ];

      let allTokens = sourceCode.getTokens(node).filter(
        (token) => {
          return (handledTokensNames.includes(token.type) === false);
        }
      );

      allTokens.forEach(
        (t) => {
          checkBlockSpacing(
            t,
            spacingType
          );
        }
      );

    }
    
    
    return {
      // ClassDeclaration: Keyword class after keyword export
      // FunctionExpression: function body
      // FunctionDeclaration: function args block in round braces
      ClassDeclaration: function (node) {
        checkBlockSpacing(
          node,
          "class"
        );
      },
      MethodDefinition: function (node) {
        checkBlockSpacing(
          node,
          "methods"
        );
      },
      FunctionExpression: function (node) {
        checkBlockSpacingAllTokens(
          node,
          "code_lines"
        );
      },
      IfStatement: function (node) {
        checkBlockSpacing(
          node,
          "blocks"
        );
      },
      WhileStatement: function (node) {
        checkBlockSpacing(
          node,
          "blocks"
        );
      },
      ForStatement: function (node) {
        checkBlockSpacing(
          node,
          "blocks"
        );
      },
      ForInStatement: function (node) {
        checkBlockSpacing(
          node,
          "blocks"
        );
      },
      ForOfStatement: function (node) {
        checkBlockSpacing(
          node,
          "blocks"
        );
      },
      ReturnStatement: function (node) {
        checkBlockSpacing(
          node,
          "return"
        );
      }
    };
  }

};





// Program() {
//   const allComments = sourceCode.getAllComments();

//   allComments.forEach((comment) => {
//     checkBlockSpacing(
//       comment,
//       BEFORE,
//       "above_comments"
//     );
//   });
// },





