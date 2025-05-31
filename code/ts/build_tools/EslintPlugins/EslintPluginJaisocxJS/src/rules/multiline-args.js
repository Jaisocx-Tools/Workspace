// lib/rules/multiline-args.js
export const MultilineArgs = {
  meta: {
    type: "layout",
    docs: {
      description: "Enforce multiline arguments in function definitions and calls",
      category: "Stylistic Issues",
      recommended: false,
    },
    fixable: "whitespace",
    schema: [
      { "args-chars-max-number": { type: "number" } }, 
    ]
  },
  create: function (context) {
    const indentRuleConfig = context.settings?.["indent"] || [2, 2]; // Default to 2 spaces
    const argsCharsMaxNumber = context.settings?.["args-chars-max-number"] || 24;
    const eslintConfigIdentPrefixSizeForOneLevel = Array.isArray(indentRuleConfig) ? indentRuleConfig[1] : 2;

    // Helper function to enforce that each argument is on a new line.
    function enforceNewLines(node, args) {
      let applyRule = true;
      
      let argsLen = args.length;
      if ( argsLen < 2 ) {
        applyRule = false;
      }

      let arg = {};
      let src = context.getSourceCode();
      let argName = "";
      let argNameSize = 0;

      let nodeArgsTextsSize = 0;
      let sumPrev = 0;

      if ( applyRule ) {
        for ( let i = 0; i < args.length; i++ ) {

          arg = args[i];

          argName = src.getText(arg);
          argNameSize = argName.length;

          nodeArgsTextsSize = ( sumPrev + argNameSize );
          sumPrev = nodeArgsTextsSize;
        }
      }

      if ( nodeArgsTextsSize < argsCharsMaxNumber ) {
        applyRule = false;
      }

      if ( applyRule === false ) {
        return;
      }

      args.forEach((arg, index) => {
        const previousToken = context.getSourceCode().getTokenBefore(arg);
        
        if (previousToken.loc.end.line === arg.loc.start.line) {
          context.report({
            node: arg,
            message: "Each argument should be on a new line.",
            fix(fixer) {
              return fixer.insertTextBefore(arg, "\n" + " ".repeat(node.loc.start.column + eslintConfigIdentPrefixSizeForOneLevel));
            }
          });
        }
      });

      const lastArg = args[args.length - 1];
      const closingParen = src.getTokenAfter(lastArg, token => token.value === ')');

      if (closingParen && closingParen.loc.start.line === lastArg.loc.end.line) {
        context.report({
          node: closingParen,
          message: "Closing parenthesis should be on a new line after the last argument.",
          fix(fixer) {
            return fixer.insertTextBefore(closingParen, "\n" + " ".repeat(node.loc.start.column));
          }
        });
      }

    }

    return {
      // Check for function declarations
      FunctionDeclaration(node) {
        if (node.params.length > 1) {
          enforceNewLines(node, node.params);
        }
      },

      // Check for function expressions (like arrow functions)
      FunctionExpression(node) {
        if (node.params.length > 1) {
          enforceNewLines(node, node.params);
        }
      },

      // Check for method definitions within classes
      MethodDefinition(node) {
        if (node.value.params.length > 1) {
          enforceNewLines(node, node.value.params);
        }
      },

      // Check for function calls
      CallExpression(node) {
        if (node.arguments.length > 1) {
          enforceNewLines(node, node.arguments);
        }
      },

      // Check for JSON-like object literals
      ObjectExpression(node) {
        node.properties.forEach((property, index) => {
          if (index > 0) {
            const prevProperty = node.properties[index - 1];
            if (prevProperty.loc.end.line === property.loc.start.line) {
              context.report({
                node: property,
                message: "Each property in an object should be on a new line.",
                fix(fixer) {
                  return fixer.insertTextBefore(property, "\n" + " ".repeat(node.loc.start.column + 2));
                }
              });
            }
          }
        });
      }
    };
  }
};
