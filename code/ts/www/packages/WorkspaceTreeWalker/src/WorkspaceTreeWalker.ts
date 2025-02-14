import { WorkspaceTreeWalkerPayload } from "./types/WorkspaceTreeWalkerPayload.js";
import { IterableInfo } from "./types/IterableInfo.js";


export class WorkspaceTreeWalker {

  public static DATATYPE_OBJECT: string = "object";

  public static getNodeInfo( elem: any ): IterableInfo {

    let elemsNumber: number = 0;
    let keys: any[] = [];
    let datatype: string = typeof( elem );
    let isObject: boolean = ( datatype === WorkspaceTreeWalker.DATATYPE_OBJECT );
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

    result.isArray = Array.isArray( elem );

    if ( result.isArray ) {
      elemsNumber = elem.length;
      const arrayKeys = (new Array<number>(elemsNumber));
      for ( let i=0; i < elemsNumber; i++ ) {
        arrayKeys[i] = i;
      }
      result.keys = arrayKeys;

    } else {
      result.keys = Object.keys( elem );
      elemsNumber = keys.length;

    }

    result.length = elemsNumber;

    return result;
  }

  public static normalizeNodes ( 
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
        function ( key: any ) { 
          let keyText: string = "";
          let result: any = {};

          //@ts-ignore
          if ( this.nodeInfo.isArray ) {
            keyText = "" + key;
            //@ts-ignore
            result = { [keyText]: this.nodes[key], };

          } else {
            //@ts-ignore
            result = { [key]: this.nodes[key], };

          }

          return result;
        }.bind({ nodeInfo, 
          nodes, })
      ),
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
        "main",
        treeData,
        result,
        callback
      );
      
    } else {

      this.walkWhenSubtreePropName (
        "main",
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

    let info: IterableInfo = WorkspaceTreeWalker.getNodeInfo ( treeData );
    let normalizedNodes: any = WorkspaceTreeWalker.normalizeNodes ( 
      treeData, 
      info );

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

      nodeInfo = WorkspaceTreeWalker.getNodeInfo ( node );
      keyNode = Object.keys( node )[0];
      nodeValue = node[keyNode];

      if ( ( nodeInfo as IterableInfo ).length === 0 ) {
        //@ts-ignore
        inOutPayload.push ( callback( 
          keyNode,
          nodeValue,
          nodeInfo,
          null ) );

        continue loop;
      } 


      subtreeNodeNormalizedNodes = WorkspaceTreeWalker.normalizeNodes ( 
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

    let info: IterableInfo = WorkspaceTreeWalker.getNodeInfo ( treeData );
    let normalizedNodes: any[] = WorkspaceTreeWalker.normalizeNodes( 
      treeData, 
      info );

    //@ts-ignore
    inOutPayload.push ( callback( 
      key,
      treeData,
      info,
      normalizedNodes ) );

    let subtreeIndex: number = 0;
    let keyFound = info.keys.find( 
      (k: any, i: number) => {
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

      keyNode = Object.keys( node )[0];
      nodeValue = node[keyNode];
      nodeInfo = WorkspaceTreeWalker.getNodeInfo ( nodeValue );

      if ( ( nodeInfo as IterableInfo ).length === 0 ) {
        subtreeNodeNormalizedNodes = null;

      } else {
        subtreeNodeNormalizedNodes = WorkspaceTreeWalker.normalizeNodes ( 
          nodeValue,
          //@ts-ignore
          nodeInfo
        );

      }

      inOutPayload.push ( 
        //@ts-ignore
        callback ( 
          keyNode,
          nodeValue,
          nodeInfo,
          subtreeNodeNormalizedNodes 
        ) 
      );

      if ( !keyFound ) {
        continue loop;
      }

      if ( keyNode === subtreePropertyName ) {
        this.walkWhenSubtreePropName (
          subtreePropertyName,
          nodeValue,
          subtreePropertyName,
          inOutPayload,
          callback
        );

      }

    }

  }


  public walkFlat (
    holderId: any,
    treeData: any,
    holderIdProperyName: string,
    idProperyName: string,
    inOutPayload: any,
    callbackWalkRepeated: Function|undefined|null
  ): undefined {

    let info: IterableInfo = WorkspaceTreeWalker.getNodeInfo ( treeData );
    let normalizedRootData: any[] = WorkspaceTreeWalker.normalizeNodes( 
      treeData, 
      info );


    this.walkFlatSubcall (
      holderId,
      normalizedRootData,
      holderIdProperyName,
      idProperyName,
      inOutPayload,
      callbackWalkRepeated
    );

  }

  public walkFlatSubcall (
    holderId: any,
    normalizedRootData: any,
    holderIdProperyName: string,
    idProperyName: string,
    inOutPayload: any[],
    callback: Function|undefined|null
  ): undefined {

    const filteredRootNodes: any[] = [
      ...normalizedRootData
        .filter(
          ( node: any ) => {
            const subtreeKey = Object.keys( node )[0];
            const flatRecursionDataRecord: any = node[subtreeKey];

            const matchesHolderId: boolean = ( flatRecursionDataRecord[idProperyName] === holderId );

            return matchesHolderId;
          }
        ),
    ];

    if ( (!filteredRootNodes) || ( filteredRootNodes.length === 0 ) ) {
      return;
    }


    let node: any  = null;
    let subtreeKey: any = null;
    let flatRecursionDataRecord: any = null;
    let nodeInfo: IterableInfo|Object = {};
    let subtreeNodeNormalizedNodes: any = null;
    let recordId: any = null;


    loop: for ( node of filteredRootNodes ) {

      subtreeKey = Object.keys( node )[0];
      flatRecursionDataRecord = node[subtreeKey];
      recordId = flatRecursionDataRecord[holderIdProperyName];

      nodeInfo = WorkspaceTreeWalker.getNodeInfo ( flatRecursionDataRecord );
      subtreeNodeNormalizedNodes = WorkspaceTreeWalker.normalizeNodes ( 
        flatRecursionDataRecord, 
        ( 
                                     nodeInfo as IterableInfo )
      );
  
      //@ts-ignore
      inOutPayload.push ( callback( 
        subtreeKey,
        flatRecursionDataRecord,
        nodeInfo,
        subtreeNodeNormalizedNodes,
        filteredRootNodes
      ) );
  
      this.walkFlatSubcall (
        recordId,
        normalizedRootData,
        holderIdProperyName,
        idProperyName,
        inOutPayload,
        callback
      );

    }

  }

  public walkFlatRepeating (
    inOutPayload: WorkspaceTreeWalkerPayload,
    callback: CallableFunction
  ): undefined {

    let info: IterableInfo = WorkspaceTreeWalker.getNodeInfo ( inOutPayload.flatDataset );
    let normalizedRootData: any[] = WorkspaceTreeWalker.normalizeNodes( 
      inOutPayload.flatDataset, 
      info 
    );

    inOutPayload.flatDatasetNormalized = normalizedRootData;

    this.walkFlatRepeatingSubcall (
      inOutPayload,
      callback
    );

  }


  public walkFlatRepeatingSubcall (
    inOutPayload: WorkspaceTreeWalkerPayload,
    callback: CallableFunction
  ): undefined {

    const filteredRootNodes: any[] = [
      ...inOutPayload.flatDatasetNormalized
        .filter(
          function ( node: any ): boolean {
            const subtreeKey = Object.keys( node )[0];
            const flatRecursionDataRecord: any = node[subtreeKey];

            //@ts-ignore
            const matchesHolderId: boolean = ( flatRecursionDataRecord[inOutPayload.parentIdProperyName] === inOutPayload.id );

            return matchesHolderId;
          }
        ),
    ];

    if ( (!filteredRootNodes) || ( filteredRootNodes.length === 0 ) ) {
      return;
    }


    let node: any  = null;
    let nodeInfo: IterableInfo|Object = {};
    
    inOutPayload.currentGroupNormalized = filteredRootNodes;

    loop: for ( node of filteredRootNodes ) {

      const payloadLocal: WorkspaceTreeWalkerPayload = new WorkspaceTreeWalkerPayload();
      for ( let propName in inOutPayload ) {
        //@ts-ignore
        payloadLocal[propName] = inOutPayload[propName];
      }

      payloadLocal.flatDataElemKey        = Object.keys( node )[0];
      payloadLocal.flatDataElem           = node[payloadLocal.flatDataElemKey];
      payloadLocal.id                     = payloadLocal.flatDataElem[payloadLocal.idProperyName];
      payloadLocal.parentId               = payloadLocal.flatDataElem[payloadLocal.parentIdProperyName];
      payloadLocal.parentIdForNestedNodes = payloadLocal.flatDataElem[payloadLocal.parentIdProperyName];

      nodeInfo = WorkspaceTreeWalker.getNodeInfo ( payloadLocal.flatDataElem );

      payloadLocal.flatDataElemNormalized = WorkspaceTreeWalker.normalizeNodes ( 
        payloadLocal.flatDataElem, 
        ( 
                                              nodeInfo as IterableInfo )
      );

      callback (
        payloadLocal
      );

      let repeatTimes: number = 1;
      let isRepeatDataApplied: boolean = false;
      //@ts-ignore
      let repeatedDataInfo: IterableInfo = {};

      if ( 
        ( payloadLocal.repeatTimes ) && 
        ( payloadLocal.payloadRepeatData )
      ) {
        repeatTimes = payloadLocal.repeatTimes;
        isRepeatDataApplied = ( ( payloadLocal.repeatTimes !== 0 ) && ( payloadLocal.payloadRepeatData.length !== 0 ) ) as boolean;
      }

      let step: number = 0;
      for (
        step = 0;
        step < repeatTimes;
        step++
      ) {

        // inOutPayload.step = step;

        let subtreeInoutPayload: WorkspaceTreeWalkerPayload = new WorkspaceTreeWalkerPayload();
        for ( let propName in payloadLocal ) {
          //@ts-ignore
          subtreeInoutPayload[propName] = payloadLocal[propName];
        }
        subtreeInoutPayload.step = step;


        if ( isRepeatDataApplied === true ) {
          //@ts-ignore
          subtreeInoutPayload.payloadDataElem = payloadLocal.payloadRepeatData[step];
          repeatedDataInfo = WorkspaceTreeWalker.getNodeInfo( subtreeInoutPayload.payloadDataElem );

          if ( !repeatedDataInfo.isArray && ( repeatedDataInfo.datatype === IterableInfo.DATATYPE_OBJECT ) ) {
            subtreeInoutPayload.payloadDataElem = WorkspaceTreeWalker.normalizeNodes(
              subtreeInoutPayload.payloadDataElem,
              repeatedDataInfo
            );

            subtreeInoutPayload.repeatTimes = subtreeInoutPayload.payloadDataElem.length;
            subtreeInoutPayload.step = 0;
          }
          
        } else {
          subtreeInoutPayload = payloadLocal;
        }

        this.walkFlatRepeatingSubcall (
          subtreeInoutPayload,
          callback
        );
      }

    }

  }
}




