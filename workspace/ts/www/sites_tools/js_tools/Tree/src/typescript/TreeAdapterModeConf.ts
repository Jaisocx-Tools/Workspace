import { TreeAdapter } from "./TreeAdapter.js";
import { TreeConstants } from "./TreeConstants.js";
import { IRenderTemplateRendererData, ITreeAdapter } from "./Types.js";



export class TreeAdapterModeConf extends TreeAdapter implements ITreeAdapter {

  getSubtreeNodeToRender(
    _loopPropertyValue: any,
    _loopPropertyKey: any
  ): any {
    return _loopPropertyValue;
  }



  getDataForRendering(
    node: any,
    flatNodeClone: any,
    dataTypeString: any,
    hasSubtree: boolean
  ): IRenderTemplateRendererData {
    const SYMBOL_BACKGROUND_SPACE: string = String.fromCharCode( 32 );

    let openButtonClassName: any = "";

    if (!hasSubtree) {
      openButtonClassName = TreeConstants.TreeCssClassNames.CLASS_WITHOUT_SUBTREE;


      // @ts-ignore
    } else if (
      (this.nodesOpenedMode === TreeConstants.NodesOpenedMode.ALL_SHOWN)
    ) {
      openButtonClassName = TreeConstants.TreeCssClassNames.CLASS_OPENED;
    } else if (
      (node[this.conf.NODE__OPENED] === true)
      && (this.nodesOpenedMode === TreeConstants.NodesOpenedMode.JSON_DATA_DEFINED)
    ) {
      openButtonClassName = TreeConstants.TreeCssClassNames.CLASS_OPENED;
    }

    const cssClasses: any = this.getTreeNodeCssClasses (
      dataTypeString,
      node
    );



    let confImageSrc: string = node[this.conf.NODE_ICON__SRC] || "";
    let isMiniImagesTagShown: boolean = this.nodesWithIcons;
    let isConfImageSrc: boolean = ( confImageSrc.length !== 0 );

    confImageSrc = ( isMiniImagesTagShown && isConfImageSrc ) ? confImageSrc : "";
    isConfImageSrc = ( isMiniImagesTagShown && isConfImageSrc );

    let isMiniImageTagImg: boolean = ( isMiniImagesTagShown && isConfImageSrc );
    let tagImageCssClassnames: string[] = new Array() as string[];

    if ( isMiniImagesTagShown ) {
      tagImageCssClassnames.push( TreeConstants.TreeCssClassNames.CLASS_ICON_SHOW );
    } else {
      tagImageCssClassnames.push( TreeConstants.TreeCssClassNames.CLASS_ICON_HIDE );
    }

    if ( isMiniImageTagImg ) {
      tagImageCssClassnames.push( TreeConstants.TreeCssClassNames.CLASS_ICON_TAG_IMG );
    }

    const dataForRendering: IRenderTemplateRendererData = {
      dataId: node[this.conf.NODE__ID],
      dataHolderId: node[this.conf.NODE__HOLDER_ID],
      dataOrder: node[this.conf.NODE__ORDER],
      dataJson: this.escapeHTMLForAttribute(JSON.stringify(flatNodeClone)),
      openButtonStateClassName: openButtonClassName,
      cssClasses,
      iconSrc: confImageSrc,
      iconShowClassName: tagImageCssClassnames.join( SYMBOL_BACKGROUND_SPACE ),
      labelText: node[this.conf.NODE_LABEL__TEXT],
      hyperlink: node[this.conf.NODE__HYPERLINK] ?? "javascript: void(0);",
      hasSubtree
    };


    return dataForRendering;
  }



  getTreeNodeCssClasses__dataTypesCssClassesEnabled (
    dataTypeString: any,
    node: any
  ): any {
    const cssClassesNodeValue: any = node[this.conf.NODE__CSS_CLASS_NAME];

    const cssClassesArray: any[] = [
      ("class=\""),
      (cssClassesNodeValue),
      (" "),
      (TreeConstants.TreeCssClassNames.PREFIX__CLASS_DATATYPE),
      (dataTypeString),
      ("\"")
    ];

    const cssClasses: any = cssClassesArray.join("");


    return cssClasses;
  }



  getTreeNodeCssClasses__dataTypesCssClassesDisabled(
    _dataTypeString: any,
    _node: any
  ): any {
    const cssClassesNodeValue: any = _node[this.conf.NODE__CSS_CLASS_NAME];

    const cssClassesArray: any[] = [
      ("class=\""),
      (cssClassesNodeValue),
      ("\"")
    ];

    const cssClasses: any = cssClassesArray.join("");


    return cssClasses;
  }


  // dummy placeholders
  escapeHTMLForAttribute(_arg: any): any {
    throw new Error("Method not implemented.");
  }



  getTreeNodeCssClasses(
    _dataTypeString: any,
    _value: any
  ): any {
    throw new Error("Method not implemented.");
  }


  // finish dummy placeholders
}
