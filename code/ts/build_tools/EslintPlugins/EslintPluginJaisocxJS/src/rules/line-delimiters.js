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
              "lines": {
                type: "number",
                minimum: 1
              }
            },
            additionalProperties: false
          },
          "methods": {
            type: "object",
            properties: {
              "lines": {
                type: "number",
                minimum: 1
              }
            },
            additionalProperties: false
          },
          "blocks": {
            type: "object",
            properties: {
              "lines": { 
                type: "number", 
                minimum: 1 
              }
            },
            additionalProperties: false
          },
          "return": {
            type: "object",
            properties: {
              "lines": {
                type: "number",
                minimum: 1
              }
            },
            additionalProperties: false
          },
          "above_comments": {
            type: "object",
            properties: {
              "lines": { 
                type: "number", 
                minimum: 1 
              }
            },
            additionalProperties: false
          },
          "minmax_newlines": {
            type: "object",
            properties: {
              "lines": { 
                type: "number", 
                minimum: 1 
              }
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
    const BEFORE = 1;
    const BEFORE_AND_AFTER = 2;
    const sourceCode = context.getSourceCode();
    
    const keywordPuctuator = "Punctuator";
    const keywordKeyword = "Keyword";
    const keywordExport = "export";
    const keywordColon = ":";
    
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
      mode,
      spacingType
    ) {
      // console.log( node.type );

      const options = context.options[0] || {};

      const spacing = {
        "class": options.class.lines,
        "methods": options.methods.lines,
        "blocks": options.blocks.lines,
        "above_comments": options.above_comments.lines,
        "minmax_newlines": options.minmax_newlines.lines
      };

      let linesRequired = 0;
      let newLineCharsNumber = 0;

      let locSpacingType = spacingType;
      linesRequired = spacing[locSpacingType];
      if ( linesRequired === undefined ) {
        locSpacingType = "minmax_newlines";
        linesRequired = spacing[locSpacingType];
      }

      newLineCharsNumber = linesRequired + 1;


      let before = {};
      
      try {
        before = sourceCode.getTokenBefore(node, { includeComments: true });
      } catch (e) {
        before = false;
      }
      
      // if (!before) {
      //   return;
      // }

      const searchKey = "Punctuator";
      const blockStart = "{";
      const blockEnd = "}";
      // const typeBefore = before.type.substring(0, searchKey.length);
      const typeBefore = before ? before.type : "";

      let whiteSpacesNumber = 0;

      let isFirstInBlock = (node.parent && node.parent.body && (node.parent.body.length > 0) && (node.parent.body[0] === node));

      if ((typeBefore === searchKey) && before && (before.value === blockStart)) {
        isFirstInBlock = true;
      }

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

      //if (isFirstInBlock === false) {
        lineDiff.before = lineStartToken.loc.start.line - (lineStartTokenBefore ? lineStartTokenBefore.loc.end.line : 0) - 1;
      //}
      
      
      let toSetLinesNumber = true;
      if (node.type === "IfStatement") {
        toSetLinesNumber = !((before.type === "Keyword") && (before.value === "else"));

      } else if (locSpacingType === "minmax_newlines") {
        // toSetLinesNumber = ((lineDiff.before > 0) && (lineDiff.before !== linesRequired));
        toSetLinesNumber = ((lineDiff.before > linesRequired));

      } else {
        toSetLinesNumber = (lineDiff.before !== linesRequired);

      }
      
      

      if ((toSetLinesNumber === true) && (locSpacingType === "return" ) ) {
        console.log(node.type, locSpacingType, linesRequired);
        console.log(before, node.type);


        let rangeStart = 0;
        let rangeEnd = 0;

        rangeStart = lineStartTokenBefore ? lineStartTokenBefore.range[1] : 0;
        rangeEnd = lineStartToken.range[0];
        whiteSpacesNumber = lineStartToken.loc.start.column;
        

        if (rangeStart && rangeEnd ) {

          let mustWhitespacesNumber = lineStartToken.loc.start.column;
          let linesReplacement = "\n".repeat(newLineCharsNumber) + " ".repeat(mustWhitespacesNumber);
          let range = [rangeStart, rangeEnd];
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
      mode,
      spacingType
    ) {

      console.log(node.type);

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

      console.log(allTokens);

      allTokens.forEach(
        (t) => {
          console.log(t.type);
          checkBlockSpacing(
            t,
            BEFORE,
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
          BEFORE,
          "class"
        );
      },
      MethodDefinition: function (node) {
        checkBlockSpacing(
          node,
          BEFORE,
          "methods"
        );
      },
      FunctionExpression: function (node) {
        checkBlockSpacingAllTokens(
          node,
          BEFORE,
          "minmax_newlines"
        );
      },
      IfStatement: function (node) {
        checkBlockSpacing(
          node,
          BEFORE_AND_AFTER,
          "blocks"
        );
      },
      WhileStatement: function (node) {
        checkBlockSpacing(
          node,
          BEFORE_AND_AFTER,
          "blocks"
        );
      },
      ForStatement: function (node) {
        checkBlockSpacing(
          node,
          BEFORE_AND_AFTER,
          "blocks"
        );
      },
      ForInStatement: function (node) {
        checkBlockSpacing(
          node,
          BEFORE_AND_AFTER,
          "blocks"
        );
      },
      ForOfStatement: function (node) {
        checkBlockSpacing(
          node,
          BEFORE_AND_AFTER,
          "blocks"
        );
      },
      // ReturnStatement: function (node) {
      //   checkBlockSpacing(
      //     node,
      //     BEFORE,
      //     "return"
      //   );
      // }
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





