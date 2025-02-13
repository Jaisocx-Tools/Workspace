import { IterableInfo } from "../types/IterableInfo.js";


export class TreeWalker {

  public static DATATYPE_OBJECT: string = "object";

  public getNodeInfo( elem: any ): IterableInfo {

    let elemsNumber: number = 0;
    let keys: any[] = [];
    let datatype: string = typeof( elem );
    let isObject: boolean = ( datatype === TreeWalker.DATATYPE_OBJECT );
    let isArray: boolean = false;

    //@thoughts whether for simple datatype to return this object,
    //  a little more cost,
    //  but already asked datatype and can use this info.
    const result: IterableInfo = new class implements IterableInfo {
      length: number = elemsNumber;
      keys: any[] = keys;
      datatype: string = datatype;
      isArray: boolean = isArray;
    };

    if ( isObject === false ) {
      return result;
    }

    isArray = Array.isArray( elem );

    if ( isArray ) {
      elemsNumber = elem.length;
      const arrayKeys = (new Array<number>(elemsNumber));
      keys = arrayKeys.map( ( zero: number, index: number ) => index );

    } else {
      keys = Object.keys( elem );
      elemsNumber = keys.length;

    }

    return result;
  }

  public normalizeNodes ( 
    nodes: any, 
    nodeInfo: IterableInfo 
  ): any {

    const elemsNumber: number = nodeInfo.length;
    
    let result: any[] = [];

    if ( nodeInfo.length === 0 ) {
      result = nodes;
    }

    result = [
      ...nodeInfo.keys.map (
        ( key: any ) => { 
          let keyText: string = '';
          let result: any = {};

          if ( nodeInfo.isArray ) {
            keyText = '' + key;
            result = { [keyText]: nodes[key] };

          } else {
            result = { [key]: nodes[key] };

          }

          return result;
        }
      )
    ];

    return result;
  }

  public walk (
    treeData: any,
    subtreePropertyName: string|undefined|null,
    callback: Function|undefined|null
  ): any {

    let result: any = {};

    if ( !subtreePropertyName ) {

      this.walkEasy (
        'main',
        treeData,
        result,
        callback
      );
      
    } else {

      this.walkWhenSubtreePropName (
        'main',
        treeData,
        subtreePropertyName,
        result,
        callback
      );

    }

    return result;
  }

  public walkEasy (
    key: any,
    treeData: any,
    inOutPayload: any[],
    callback: Function|undefined|null
  ): undefined {

    let info: IterableInfo = this.getNodeInfo ( treeData );
    let normalizedNodes: any = this.normalizeNodes ( treeData, info );

    //@ts-ignore
    inOutPayload.push ( callback( 
      key,
      treeData,
      info,
      normalizedNodes
    ) );

    let node: any  = null;
    let keyNode: any = null;
    let nodeValue: any = null;
    let nodeInfo: IterableInfo|Object = {};
    let subtreeNodeNormalizedNodes: any = null;

    loop: for ( node of normalizedNodes ) {

      nodeInfo = this.getNodeInfo ( node );
      keyNode = Object.keys( node )[0];
      nodeValue = node[key];

      if ( ( nodeInfo as IterableInfo ).length === 0 ) {
        //@ts-ignore
        inOutPayload.push ( callback( 
          keyNode,
          nodeValue,
          nodeInfo,
          null ) );

          continue loop;
      } 


      subtreeNodeNormalizedNodes = this.normalizeNodes ( 
        nodeValue,
        //@ts-ignore
        nodeInfo
        );


      //@ts-ignore
      inOutPayload.push ( callback( 
        keyNode,
        nodeValue,
        nodeInfo,
        subtreeNodeNormalizedNodes ) );


      this.walkEasy (
        keyNode,
        nodeValue,
        inOutPayload,
        callback
      );

    }

  }


  public walkWhenSubtreePropName (
    key: any,
    treeData: any,
    subtreePropertyName: string|undefined|null,
    inOutPayload: any[],
    callback: Function|undefined|null
  ): undefined {

    let info: IterableInfo = this.getNodeInfo ( treeData );
    let normalizedNodes: any[] = this.normalizeNodes( treeData, info );

    //@ts-ignore
    inOutPayload.push ( callback( 
      key,
      treeData,
      info,
      normalizedNodes ) );

    let subtreeIndex: number = 0;
    let keyFound = info.keys.find( (k: any, i: number) => {
        let matches: boolean = ( k === subtreePropertyName );
        if ( matches === true ) subtreeIndex = i;
        return matches;
      } 
    );

    let node: any  = null;
    let keyNode: any = null;
    let nodeValue: any = null;
    let nodeInfo: IterableInfo|Object = {};
    let subtreeNodeNormalizedNodes: any = null;


    loop: for ( node of normalizedNodes ) {

      nodeInfo = this.getNodeInfo ( node );
      keyNode = Object.keys( node )[0];
      nodeValue = node[key];

      if ( ( keyFound ) && ( keyNode === subtreePropertyName ) ) {
        continue loop;
      }

      if ( ( nodeInfo as IterableInfo ).length === 0 ) {
        //@ts-ignore
        inOutPayload.push ( callback( 
          keyNode,
          nodeValue,
          nodeInfo,
          null ) );

      }

    }

    if ( !keyFound ) {
      return;
    }


    //@ts-ignore
    nodeValue = treeData[subtreePropertyName];
    nodeInfo = this.getNodeInfo ( treeData );

    subtreeNodeNormalizedNodes = this.normalizeNodes ( 
      nodeValue,
      //@ts-ignore
      nodeInfo
    );


    this.walkWhenSubtreePropName (
      subtreePropertyName,
      nodeValue,
      subtreePropertyName,
      inOutPayload,
      callback
    );

  }

}




