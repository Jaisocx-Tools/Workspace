import { EventEmitter } from "@jaisocx/event-emitter";
import { CharcodeConverter } from "@jaisocx/charcode-converter";
import { WorkspaceTreeWalker, JPath, JPathData, WorkspaceTreeWalkerPayload } from "@jaisocx/workspace-tree-walker";
import { TemplateParser } from "./lib/TemplateParser.js";
export class ImprovedTemplateRenderer extends EventEmitter {
    EVENT_NAME__AFTER_RENDER;
    _templatesObject;
    _templatesConf;
    _dataConf;
    // props for technique purposes.
    _preparedTemplatesObject;
    _renderedTemplatesTemporaryArray;
    _renderedHtmlArray;
    _renderedHtml;
    _sumTemplatesSizes;
    templateParser;
    charcodeConverter;
    constructor() {
        super();
        this.EVENT_NAME__AFTER_RENDER = "afterRender";
        this._templatesObject = {};
        this._templatesConf = {};
        this._dataConf = [];
        // props for technique purposes.
        this._preparedTemplatesObject = {};
        this._renderedTemplatesTemporaryArray = [];
        this._renderedHtmlArray = [];
        this._renderedHtml = "";
        this._sumTemplatesSizes = 0;
        this.templateParser = TemplateParser.getInstance();
        this.charcodeConverter = CharcodeConverter.getInstance();
    }
    setDebug(debug) {
        this.debug = debug;
        return this;
    }
    setTemplatesObject(templates) {
        this._templatesObject = templates;
        return this;
    }
    setTemplateConf(templatesConf) {
        this._templatesConf = templatesConf;
        return this;
    }
    setDataConf(dataConf) {
        this._dataConf = dataConf;
        return this;
    }
    render(inoutobj, mainTemplateConfigTag) {
        //@ready
        //@info   1. prepares placeolders to JPath objects 
        //        for fast handling placeholders 
        //        like {{ obj.prop1[2].someProp }}
        //        2. converts to Uint16Array
        this.prepareTemplates();
        this.templatesConfigTreeWalk(mainTemplateConfigTag);
        inoutobj.retVal = this._renderedHtmlArray.join("");
        // writes into this._renderedTemplatesTemporaryArray
        //this.renderTemplates( inoutobj );
        // inoutobj.bufs = this._renderedTemplatesTemporaryArray;
        // const result: any = this.charcodeConverter.join (
        //   inoutobj.bufs
        // );
        //return result;
    }
    getDataconfByTemplateName(templateName) {
        return this._dataConf.find((conf) => conf.template === templateName);
    }
    getOrderedTemplatesNames() {
        return [
            ...this._dataConf.map((conf) => conf.template)
        ];
    }
    //@ready
    //@info 
    //        1. if no placeholder, templatesObject[templateName] = CharcodeConverter.toArray()
    //        2. split templates with placeholders.
    prepareTemplates() {
        const toAutoloadCharsets = 1;
        const orderedTemplatesNames = this.getOrderedTemplatesNames();
        let templateConf;
        let templateName = "";
        let templateHtml = "";
        let placeholderName = null;
        let preparedTemplate = null;
        for (templateName of orderedTemplatesNames) {
            templateConf = this._templatesConf[templateName];
            templateHtml = this._templatesObject[templateName];
            placeholderName = templateConf.placeholder;
            if (placeholderName) {
                preparedTemplate = this.templateParser.parse(templateHtml, placeholderName);
            }
            else {
                preparedTemplate = this.charcodeConverter.stringToArray(templateHtml, toAutoloadCharsets);
            }
            this._preparedTemplatesObject[templateName] = preparedTemplate;
        }
    }
    templatesConfigTreeWalk(mainTemplateConfigTag) {
        const renderedTemplates = [];
        this._templatesConf;
        this._dataConf;
        const orderedTemplatesNames = this.getOrderedTemplatesNames();
        const templatesConf = [
            ...orderedTemplatesNames
                .map((templateName) => {
                const conf = this._templatesConf[templateName];
                return {
                    ...conf,
                    templateName
                };
            })
        ];
        const callbackWalkRepeated = (inOutPayload) => {
            console.log(inOutPayload);
            // const templateConf: TemplateConf = ( treeData as TemplateConf );
            // if ( templateConf.placeholder ) {
            //   const dataConf: DataConf = this._dataConf.find( ( conf: DataConf ) => ( conf.template === templateConf.templateName ) );
            //   const placeholderData: any = dataConf.placeholderData;
            //   const preparedTemplate: any[] = this._preparedTemplatesObject[templateConf.templateName];
            //   for ( let template of preparedTemplate ) {
            //     if ( template instanceof Uint16Array ) {
            //       //@advanced this._renderedTemplatesTemporaryArray.push( template );
            //       this._renderedHtmlArray.push( this.charcodeConverter.arrayToString( template, 0 ) );
            //     } else if ( template instanceof JPathData ) {
            //       const jpathObj: JPathData = ( template as JPathData );
            //       const placeholderDataByJpath: any = JPath.getByJPath ( 
            //         jpathObj.getJPath(), 
            //         placeholderData );
            //       //@advanced const placeholderDataBitsbuf: Uint16Array = this.charcodeConverter.stringToArray( 
            //       //   placeholderDataByJpath, 
            //       //   0 );
            //       // this._renderedTemplatesTemporaryArray.push( placeholderDataBitsbuf ); 
            //       this._renderedHtmlArray.push( this.charcodeConverter.arrayToString( placeholderDataByJpath, 0 ) );
            //     }
            //   }
            // }
            // if ( templateConf.startRepeat ) {
            //   const dataConf: DataConf = this._dataConf.find( ( conf: DataConf ) => ( conf.template === templateConf.templateName ) );
            //   const placeholderData: any = dataConf.placeholderData;
            // }
            let templateConf = inOutPayload.dataElem;
            let templateName = templateConf.templateName;
            //let templateConf: TemplateConf = this._templatesConf[templateName];
            if (!templateName) {
                return;
            }
            //@temp test block
            let dataConf = this._dataConf.find((conf) => {
                const matches = (conf.template === templateConf.templateName);
                return matches;
            });
            let repeatData = null;
            let repeatDataNormalized = [];
            //@ts-ignore
            let repeatDataInfo = {};
            if (templateConf.startRepeat === true) {
                if (templateConf.repeatTagConfDataApplies === true) {
                    repeatData = dataConf.repeatTagData;
                }
                else {
                    repeatData = inOutPayload.repeatDataElem;
                }
                repeatDataInfo = WorkspaceTreeWalker.getNodeInfo(repeatData);
                if (repeatDataInfo.isArray === true) {
                    inOutPayload.repeatData = repeatData;
                }
                else {
                    repeatDataNormalized = WorkspaceTreeWalker.normalizeNodes(repeatData, repeatDataInfo);
                    inOutPayload.repeatData = repeatDataNormalized;
                }
                inOutPayload.repeatTimes = inOutPayload.repeatData.length;
            }
            let placeholderData = dataConf.placeholderData;
            if (!placeholderData && (templateConf.placeholder) && inOutPayload.repeatDataElem) {
                placeholderData = inOutPayload.repeatDataElem;
            }
            const placeholderName = templateConf.placeholder;
            const preparedTemplate = this._preparedTemplatesObject[templateConf.templateName];
            if (preparedTemplate instanceof Uint16Array) {
                this._renderedHtmlArray.push(this.charcodeConverter.arrayToString(preparedTemplate, 0));
            }
            else {
                for (let template of preparedTemplate) {
                    if (template instanceof Uint16Array) {
                        this._renderedHtmlArray.push(this.charcodeConverter.arrayToString(template, 0));
                    }
                    else if ((templateConf.placeholder) && (template instanceof JPathData)) {
                        const jpathData = template;
                        let placeholderDataByJpath = [];
                        if (jpathData.isPlaceholderValue()) {
                            placeholderDataByJpath = placeholderData;
                        }
                        else {
                            placeholderDataByJpath = JPath.getByJPath(jpathData.getJPath(), placeholderData);
                        }
                        const placeholderInfo = WorkspaceTreeWalker.getNodeInfo(placeholderDataByJpath);
                        if (placeholderInfo.datatype === WorkspaceTreeWalker.DATATYPE_OBJECT) {
                            placeholderDataByJpath = JSON.stringify(placeholderDataByJpath);
                        }
                        //@advanced const placeholderDataBitsbuf: Uint16Array = this.charcodeConverter.stringToArray( 
                        //   placeholderDataByJpath, 
                        //   0 );
                        // this._renderedTemplatesTemporaryArray.push( placeholderDataBitsbuf ); 
                        this._renderedHtmlArray.push(placeholderDataByJpath);
                    }
                }
            }
        };
        const treeWalker = new WorkspaceTreeWalker();
        let inOutPayload = new WorkspaceTreeWalkerPayload();
        inOutPayload.dataset = templatesConf;
        inOutPayload.parentId = mainTemplateConfigTag;
        inOutPayload.id = "main";
        inOutPayload.parentIdForNestedNodes = "branchRepeatTag";
        inOutPayload.parentIdProperyName = "tag";
        inOutPayload.idProperyName = "branchRepeatTag";
        treeWalker.walkFlatRepeating(inOutPayload, callbackWalkRepeated);
        console.log("TREE WALKER RESULT");
        console.log(inOutPayload);
    }
    getFieldValue(dataElem) {
        const info = WorkspaceTreeWalker.getNodeInfo(dataElem);
        const normalizedRecord = WorkspaceTreeWalker.normalizeNodes(dataElem, info);
        return normalizedRecord;
    }
}
//# sourceMappingURL=ImprovedTemplateRenderer.js.map