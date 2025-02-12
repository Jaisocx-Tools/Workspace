import { EventEmitter } from "@jaisocx/event-emitter";
import { CharcodeConverter } from "@jaisocx/charcode-converter";
export class ImprovedTemplateRenderer extends EventEmitter {
    EVENT_NAME__AFTER_RENDER;
    templatesObject;
    templatesConf;
    dataConf;
    // props for technique purposes.
    isStandardCallback;
    constructor() {
        super();
        this.EVENT_NAME__AFTER_RENDER = "afterRender";
        this.templatesObject = {};
        this.templatesConf = {};
        this.dataConf = [];
        // props for technique purposes.
        this.isStandardCallback = 1;
    }
    setDebug(debug) {
        this.debug = debug;
        return this;
    }
    setTemplatesObject(templates) {
        this.templatesObject = templates;
        return this;
    }
    setTemplatesConf(templatesConf) {
        this.templatesConf = templatesConf;
        return this;
    }
    setDataConf(dataConf) {
        this.dataConf = dataConf;
        return this;
    }
    render(inoutobj) {
        // the result variable is declared.
        // the result is the rendered html,
        // all templates where placeholders replaced with the according data,
        // and the templates, these are thought to be repeated with data of datatype array,
        // are produced in the cycle, too.
        let renderedTemplatesHtml = "";
        let resultArrayFlat = [];
        let resultArrayRecursive = [];
        //@info   1. prepares placeolders to JPath objects 
        //        for fast handling placeholders 
        //        like {{ obj.prop1[2].someProp }}
        //        2. converts to Uint16Array
        this.prepareTemplates();
        //let preparedTaggedGroupsInfos: any[] = this.prepareTaggedGroupsInfos();
        let resultArrayRecursiveElemsNumber = 0;
        //resultArrayRecursiveElemsNumber = this.calculateResultArrayRecursiveNumber();
        resultArrayRecursive = this.renderTemplates();
        //@rewrite
        resultArrayFlat = resultArrayRecursive;
        // const obj: any = { bufs: resultArrayFlat, retVal: {} };
        inoutobj.bufs = resultArrayFlat;
        const joinResult = this.workaroundJoin(inoutobj);
        // for ( let renderedBitsBuf of resultArrayFlat ) {
        // }
        // return renderedTemplatesHtml;
        return 1;
    }
    workaroundJoin(inoutObj) {
        const converter = CharcodeConverter.getInstance();
        const autoload = 0;
        let resultStringLength = 0;
        for (let bitsbuf of inoutObj.bufs) {
            resultStringLength += bitsbuf.length;
        }
        const resultStringArray = new Array(resultStringLength);
        let implGetChar = autoload ? converter.getCharAndAutoload.bind(converter) : converter.getChar.bind(converter);
        let charcode = 0;
        let char = "";
        let resultStringIndex = 0;
        let bufSize = 0;
        let resultOffset = 0;
        let loopFinish = 0;
        for (let bitsbuf of inoutObj.bufs) {
            bufSize = bitsbuf.length;
            // loopFinish = resultOffset + bufSize;
            for (resultStringIndex = 0; resultStringIndex < bufSize; resultStringIndex++) {
                charcode = bitsbuf[resultStringIndex];
                char = implGetChar(charcode);
                resultStringArray[resultOffset] = char;
                resultOffset++;
            }
        }
        const EMPTY_STRING = (new String("")).valueOf();
        inoutObj.retVal = resultStringArray.join(EMPTY_STRING);
        return 1;
    }
    renderTemplates() {
        let resultArrayRecursive = [];
        const converter = CharcodeConverter.getInstance();
        const CHARSETS_AUTOLOAD_TRUE = 1;
        const CHARSETS_AUTOLOAD_FALSE = 0;
        for (let dataConfItem of this.dataConf) {
            const templateName = dataConfItem["templateName"];
            const templateConfItem = this.templatesConf[templateName];
            const template = this.templatesObject[templateName]; // ( Uint16Array | array of (Uint16Array|JPath)[] )
            let renderedTemplate = "";
            let renderedTemplateCharBuf = null;
            if (templateConfItem.isWithPlaceholders === 1) {
                // here means is prepared, 
                // and is array, 
                // and placeholder is JPath class instance
                // then foreach
                // for ( elem of templateSplittedPrepared ) {}
                //@rewrite 
                renderedTemplate = (converter.arrayToString(template, CHARSETS_AUTOLOAD_FALSE)).replaceAll(`{{ ${templateConfItem.placeholder} }}`, dataConfItem.data);
                //@rewrite 
                renderedTemplateCharBuf = converter.stringToArray(renderedTemplate, CHARSETS_AUTOLOAD_FALSE);
            }
            else {
                renderedTemplateCharBuf = template;
            }
            resultArrayRecursive.push(renderedTemplateCharBuf);
        }
        return resultArrayRecursive;
    }
    //@info 
    //        1. if no placeholder, templatesObject[templateName] = CharcodeConverter.toArray()
    //        2. split templates with placeholders.
    prepareTemplates() {
        const converter = CharcodeConverter.getInstance();
        for (let templateName in this.templatesObject) {
            const templateText = this.templatesObject[templateName];
            const templateConfItem = this.templatesConf[templateName];
            this.templatesObject[templateName] = converter.stringToArray(templateText, 0);
            continue;
            // if with placeholders, poduces JPath array for faster placeholders' data processing and applying to rendered html templates Uint16Array[]
            if (templateConfItem.isWithPlaceholders === 1) {
                // subcall let templatesPrepared: string[] = this.splitTemplateText( templateText );
                //        1. while(): .indexOf("{{ "); .indexOf(" }}") + 3; result.push( .substring() ); if indexOf, result.push( new JPath( .substring() ) );
                //        2. JPath.constructor( jpathExpessionText ) { this.jpathArray = JPath.parse( jpathExpressionText ) }
                // subcall const jPathArray: any[] = helper.parseJpath( placeholderJpathExpressionText );
                // replace current templateText: this.templatesObject[templateName] = templatesPrepared; 
                // later, this.templatesObject prop can be of type string or any[], when with placeholders. 
                // the templatesConf item can have prop .placeholdersParsed = 1 | 0;
            }
        }
    }
    // r.1 render() method first task 
    // to gather infos and statistics on nested templates, 
    // to plan the render tasks flow 
    // and to know the target arrays sizes.
    prepareTaggedGroupsInfos() {
        // int incs on first match attr "tag" with the LATEST_NESTED_TAGNAME attr for level1 since the step before.
        // decs on first time, there was no the tag in the attr "tag" or did not match the  LATEST_NESTED_TAGNAME
        let methodStatus_CurrentNestedLevel = 0;
        let methodStatus_CurrentInfosIndex = 0;
        // attr.nestedTag is set at once, when the node attr "nestedTag" exists. 
        let methodStatus_CurrentTagName = "";
        let methodStatus_CurrentTagNameOnceMatched = 0;
        let methodStatus_CurrentTagNamesArray = [];
        //@target 
        // OR OBJ just cumulating. no deletions or replaces. 
        let methodStatus_TargetResult_InfosArray = [];
        // dataConf loop, the order the templates will be appended to result html.
        let loop_1_dataConf_Step = 0;
        const loop_1_dataConf_length = this.dataConf.length;
        // same key in objects: templatesObject and templateConf
        let templateName = "";
        // html with placeholder(s)
        let template = "";
        // conf
        let templateConfItem;
        // data for template, to replace placeholder by value 
        let dataConfItem = {};
        // maybe to create the first INFOS Item for the entire html doc.
        for_1: for (loop_1_dataConf_Step = 0; loop_1_dataConf_Step < loop_1_dataConf_length; loop_1_dataConf_Step++) {
            dataConfItem = this.dataConf[loop_1_dataConf_Step];
            templateName = dataConfItem["templateName"];
            templateConfItem = this.templatesConf[templateName];
            // procesing nested templates,
            if (methodStatus_CurrentNestedLevel !== 0) {
                const currentTemplate_Tags = templateConfItem["tag"];
                // if no tag, coul be the level 0, and finishes taggedGroup
                if (!currentTemplate_Tags || currentTemplate_Tags.length === 0) {
                    // finish tagged group!
                    // subcall out of the tagged group one level up.
                    methodStatus_CurrentNestedLevel = 0;
                    methodStatus_CurrentInfosIndex = 0;
                    methodStatus_CurrentTagName = "";
                    methodStatus_CurrentTagNameOnceMatched = 0;
                    methodStatus_CurrentTagNamesArray = [];
                    // the first level INFOS item updates the end numeric key in the templates object.
                    // methodStatus_TargetResult_InfosArray[0].end = loop_1_dataConf_Step;
                }
                else {
                    // templatesConf item.tag was not null or empty.
                    // matching the methodStatus_CurrentTagName
                    let tagMatches = 0;
                    // dataConfItem.tag can be a string or string[] array of tags.
                    if (typeof (currentTemplate_Tags) === "string") {
                        tagMatches = (currentTemplate_Tags === methodStatus_CurrentTagName) ? 1 : 0;
                    }
                    else if (Array.isArray(currentTemplate_Tags) === true) {
                        tagMatches = (currentTemplate_Tags.find((tag) => tag === methodStatus_CurrentTagName)) ? 1 : 0;
                    }
                    if (tagMatches) {
                        if (methodStatus_CurrentTagNameOnceMatched === 1) {
                        }
                        else {
                            // tag matches, but once matched is 0,
                            // means, the tag is matched by the first template in this tagedGroup the first time,
                            // 
                            // if the first time, INFOS set start
                            const info = {
                                holderTemplateName: "",
                                tag: methodStatus_CurrentTagName,
                                holderIndex: 0,
                                nestedLevel: methodStatus_CurrentNestedLevel,
                                nestedMultipleTaggedIndexes: {
                                    startIndex: loop_1_dataConf_Step,
                                    endIndex: loop_1_dataConf_Step,
                                },
                                nestedMultipleTaggedNames: [],
                                calculatedNumberOfNestedTemplatesIterations: 0,
                                calculatedNumberOfNestedTemplates: 0,
                            };
                            // next nested level.
                            // when had INFO nested level, index = 5.
                            // out of the nested level, methodStatus_CurrentInfosIndex--; length of the ONFOS remains same.
                            // when a level inside the new nested group,
                            // not methodStatus_CurrentInfosIndex++;
                            // since the length plus one, and the prev pos was already minus one. now plus 2 or what? 
                            // just the last array elem index. length - 1;
                            // .push returns the new .length
                            methodStatus_CurrentInfosIndex = methodStatus_TargetResult_InfosArray.push(info) - 1;
                            // set status 1 since this step created Infos obja and added to array.
                            methodStatus_CurrentTagNameOnceMatched = 1;
                        }
                        // every next time, INFOS update end. 
                        // //@rewrite later, when tested on unhandled exceptions, so that the .end never unset when a for loop broke.
                    }
                    else {
                        // this template is went out of the taggedGroup 
                        methodStatus_CurrentNestedLevel--;
                        methodStatus_CurrentInfosIndex--;
                        methodStatus_CurrentTagNamesArray.pop();
                        methodStatus_CurrentTagName = methodStatus_CurrentTagNamesArray[(methodStatus_CurrentTagNamesArray.length - 1)];
                    }
                }
            }
            // logics: when attr nestedTag,
            // set to vars outside the loop, and continue.
            // here we don't need setting INFOS props, 
            // since INFOS props are set just when processing nested templates.
            const nestedTag = templateConfItem.nestedTag;
            if (nestedTag) {
                // set nested tag, 
                methodStatus_CurrentTagName = nestedTag;
                methodStatus_CurrentTagNamesArray.push(nestedTag);
                methodStatus_CurrentTagNameOnceMatched = 0;
                // inc neted level
                methodStatus_CurrentNestedLevel++;
                // continue
                continue for_1;
            }
            continue for_1;
            // forLevel_1 loop code block finish.
        }
        return methodStatus_TargetResult_InfosArray;
    }
}
//# sourceMappingURL=ImprovedTemplateRenderer.js.map