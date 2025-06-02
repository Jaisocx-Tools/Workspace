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
          "ret": {
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

    // here we get eslintrc.js config rules
    const indentRuleConfig = (context && context.settings && context.settings.indent) || [ESLINT_CONFIG_INDENTATION_SIZE, ESLINT_CONFIG_INDENTATION_SIZE]; // Default to ESLINT_CONFIG_INDENTATION_SIZE spaces
    const eslintConfigIdentPrefixSizeForOneLevel = Array.isArray(indentRuleConfig) ? indentRuleConfig[1] : ESLINT_CONFIG_INDENTATION_SIZE;

    function checkBlockSpacing (
      node,
      mode,
      spacingType
    ) {

      const options = context.options[0] || {};

      const spacing = {
        methods: options.methods.lines,
        blocks: options.blocks.lines,
        above_comments: options.above_comments.lines,
        minmax_newlines: options.minmax_newlines.lines
      };

      let linesRequired = 0;

      let locSpacingType = spacingType;
      linesRequired = spacing[locSpacingType];
      if ( linesRequired === undefined ) {
        locSpacingType = "minmax_newlines";
        linesRequired = spacing[locSpacingType];
      }

      let before = {};
      
      try {
        before = sourceCode.getTokenBefore(node, { includeComments: true });
      } catch (e) {
        before = false;
      }
      
      if (!before) {
        return;
      }

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

      let linesNumberToSet = 0;

      //if (isFirstInBlock === false) {
        lineDiff.before = node.loc.start.line - ( before ? before.loc.end.line : 0 );
        linesNumberToSet = linesRequired + 1;
      //}
      
      
      let toBypass = false;
      if (node.type === "IfStatement") {
        //let beforeBefore = sourceCode.getTokenBefore(before);
        toBypass = ((before.type === "Keyword") && (before.value === "else"));
        // console.log( beforeBefore, before, node.type, toBypass );
      } else if (locSpacingType === "minmax_newlines") {
        toBypass = !((lineDiff.before > 1) && (lineDiff.before !== linesNumberToSet));
        if ( toBypass !== true ) {
          console.log(node.type, locSpacingType, linesNumberToSet);
          console.log( before, node.type);
        }
      }


      if ((toBypass !== true) && (lineDiff.before !== linesNumberToSet ) ) {
        // if ((isFirstInBlock === false) && (lineDiff.before !== linesNumberToSet)) {
        let rangeStart = 0;
        let rangeEnd = 0;

        rangeStart = before ? before.range[1] : 0;
        rangeEnd = node.range[0];
        
        whiteSpacesNumber = node.loc.start.column;

        if (rangeStart && rangeEnd ) {

          let mustWhitespacesNumber = node.loc.start.column;
          let linesReplacement = "\n".repeat(linesNumberToSet) + " ".repeat(mustWhitespacesNumber);
          let range = [rangeStart, rangeEnd];
          mode = "before";
          let text = `Expected ${linesNumberToSet} empty line${linesNumberToSet > 1 ? "s" : ""} found ${lineDiff.before} ${mode} block.`;
          console.log(text);
          
          context.report({
            node,
            range,
            message: `Expected ${linesNumberToSet} empty line${linesNumberToSet > 1 ? "s" : ""} found ${lineDiff.before} ${mode} block.`,
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

      if (!isLastInParent && (mode === BEFORE_AND_AFTER) && (lineDiff.after !== linesNumberToSet)) {
        let rangeEnd = 0;

        whiteSpacesNumber = after.loc.start.column;
        rangeEnd = after.start;

        // if ( node.end && rangeEnd ) {

        //   if ( spacingType === "methods" ) { console.log( "invokes " ); }
          
        //   identationLevel = (whiteSpacesNumber / eslintConfigIdentPrefixSizeForOneLevel);
        //   mustWhitespacesNumber = (identationLevel * eslintConfigIdentPrefixSizeForOneLevel);
        //   linesReplacement = "\n".repeat(linesNumberToSet) + " ".repeat(mustWhitespacesNumber);
        //   range = [node.end, rangeEnd];
        //   mode = "after";
        //   text = `Expected ${linesNumberToSet} empty line${linesNumberToSet > 1 ? "s" : ""} ${mode} block.`;
        //   console.log(text);

        //   context.report({
        //     node,
        //     range,
        //     message: `Expected ${linesNumberToSet} empty line${linesNumberToSet > 1 ? "s" : ""} ${mode} block.`,
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

    return {
      FunctionDeclaration: function (node) {
        checkBlockSpacing(
          node,
          BEFORE,
          "methods"
        );
      },
      ArrowFunctionExpression: function (node) {
        if (node.parent && node.parent.type === "VariableDeclarator") {
          checkBlockSpacing(
            node,
            BEFORE,
            "blocks"
          );
        }
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
      ReturnStatement: function (node) {
        checkBlockSpacing(
          node,
          BEFORE,
          "ret"
        );
      }
    };
  }

};



      // ExportNamedDeclaration: function(node) {
      //   const types = [
      //     "IfStatement",
      //     "WhileStatement",
      //     "ForStatement",
      //     "ForInStatement",
      //     "ForOfStatement",
      //     "ReturnStatement",
      //     "FunctionDeclaration",
      //     "FunctionExpression",
      //     "ArrowFunctionExpression",
      //   ];

      //   let allTokens = sourceCode.getTokens(node).filter(
      //     (n) => {
      //       return (types.includes(n.type) === false);
      //     }
      //   );

      //   allTokens.forEach((n) => {
      //     checkBlockSpacing(
      //       n,
      //       BEFORE,
      //       "minmax_newlines"
      //     );
      //   });

      //   checkBlockSpacing(
      //     node,
      //     BEFORE,
      //     "minmax_newlines"
      //   );

// },



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



// FunctionExpression: function (node) {
//   if (node.parent && node.parent.type === "VariableDeclarator") {
//     checkBlockSpacing(
//       node,
//       BEFORE,
//       "blocks"
//     );
//   }
// },







