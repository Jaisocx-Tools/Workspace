class CssSelectorWeight {

    calculateOneRuleSpecificity(selectorText) {

        // Remove strings to avoid confusion with quotes inside selectors
        let selector = selectorText.replace(/["'][^"']*["']/g, "");
        let selectorWithoutNot = selector.replace(/:not\([^)]+\)/g, "");
        let a = 0;
        let b = 0;
        let c = 0;
        let d = 0;
        let e = 0;
        let f = 0;


        // Count ID selectors: #id
        let matchingIDs = (selectorWithoutNot.match(/#[\w-]+/g) || []);
        b += matchingIDs.length;
        let matchingClassNames = (selectorWithoutNot.match(/.[\w-]+/g) || []);
        c += matchingClassNames.length;


        // Count pseudo-classes: :hover, :nth-child(), etc. (but not pseudo-elements)
        let matchingHoverlike = (selectorWithoutNot.match(/:(?!:)[\w-]+(\(.*?\))?/g) || []);
        c += matchingHoverlike.length;


        // Count attribute selectors: [type="text"]
        let matchingAttributes = (selectorWithoutNot.match(/\[[^\]]+\]/g) || []);
        d += matchingAttributes.length;


        // Count element names: div, h1, etc. (ignores *, .class, #id, etc.)
        // This is a bit naive — we filter by words not preceded by . # [ : or *
        let matchingElementsNames = (selectorWithoutNot.match(/(^|[\s>+~])([a-zA-Z][\w-]*)/g) || []);
        e += matchingElementsNames.length;


        // Count ::before, ::after, others
        let matchingAfterlike = (selectorWithoutNot.match(/::[\w-]+/g) || []);
        e += matchingAfterlike.length;


        // exactness level of the css rule, nodes positions in the DOM tree
        // > ~ +
        f += (selector.match(/[>+~]+/g) || []).length;


        return [a, b, c, d, e, f];
    }



    updateSpecifityByCssProperty(
        ruleStyle,
        cssPropertyName,
        inSpecifity
    ) {
        let locSpecifity = [...inSpecifity];


        // !important
        let propertyPriority = ruleStyle.getPropertyPriority(cssPropertyName);
        let a = (propertyPriority === "important") ? 1 : 0;
        locSpecifity[0] = a;


        return locSpecifity;
    }



    compareSpecificity(specificity1, specificity2) {
        let comparisonValue = 0;
        let i = 0;
        let maxIterationsNumber = 6;
        let num1 = 0;
        let num2 = 0;

        loop: for (i = 0; i < maxIterationsNumber; i++) {
            num1 = specificity1[i];
            num2 = specificity2[i];

            if (num1 !== num2) {
                comparisonValue = (num1 - num2);
                break loop;
            }
        }


        return comparisonValue;
    }


    // @description: used by Inliner, this is the custom method.
    // @return { "specifity": [], "cssSelector": "" }[]
    calculateSpecifities(selectorText) {
        let selector = selectorText.replace(/["'][^"']*["']/g, "");
        let selectors = new Array();
        let s = "";
        let specifitiesAndSelectors = new Array();
        let specifity = new Array(6);


        // new Array(6) as number[]
        let objTemplate = { "specifity": [],
            "cssSelector": "" };
        let obj = { ...objTemplate };

        if (selector.includes(",") === false) {
            specifity = this.calculateOneRuleSpecificity(selector);
            obj.specifity = [...specifity];
            obj.cssSelector = selector;
            specifitiesAndSelectors.push(obj);
        }
        else {
            selectors = selector
                .split(",")
                .map(s => {
                    return s.trim();
                })
                .map(s => {
                    return s.replace(/["'][^"']*["']/g, "");
                });

            for (s of selectors) {
                specifity = this.calculateOneRuleSpecificity(s);
                obj = { ...objTemplate };
                obj.specifity = specifity;
                obj.cssSelector = s;
                specifitiesAndSelectors.push(obj);
            }
        }


        return specifitiesAndSelectors;
    }
}


