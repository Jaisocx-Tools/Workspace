import { WorkspaceTreeWalkerPayload } from "./types/WorkspaceTreeWalkerPayload.js";
import { IterableInfo } from "./types/IterableInfo.js";
import { JPathData } from "./types/JPathData.js";
import { JPath } from "./lib/JPath.js";


export class WorkspaceTreeWalker {

  public static DATATYPE_OBJECT: string = "object";

  public static WALK_MODE = class {
    public static WALK_MODE_EASE: string = "ease";
    public static WALK_MODE_WHEN_SUBTREE_PROPNAME: string = "subtree_propname";
    public static WALK_MODE_FLAT: string = "flat";
    public static WALK_MODE_FLAT_REPEATING: string = "flat_repeating";
  };



  public walk (
    walkMode: string,
    inOutPayload: WorkspaceTreeWalkerPayload,
    callback: CallableFunction
  ): any {

    if ( walkMode === WorkspaceTreeWalker.WALK_MODE.WALK_MODE_EASE ) {
      this.walkEasy (
        inOutPayload,
        callback
      );
    } else if ( walkMode === WorkspaceTreeWalker.WALK_MODE.WALK_MODE_WHEN_SUBTREE_PROPNAME ) {
      this.walkWhenSubtreePropName (
        inOutPayload,
        callback
      );
    } else if ( walkMode === WorkspaceTreeWalker.WALK_MODE.WALK_MODE_FLAT ) {
      this.walkFlat (
        inOutPayload,
        callback
      );
    } else if ( walkMode === WorkspaceTreeWalker.WALK_MODE.WALK_MODE_FLAT_REPEATING ) {
      this.walkFlatRepeating (
        inOutPayload,
        callback
      );
    }

  }



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

  public walkEasy (
    inOutPayload: WorkspaceTreeWalkerPayload,
    callback: CallableFunction
  ): undefined {

    let info: IterableInfo = WorkspaceTreeWalker.getNodeInfo ( inOutPayload.flatDataset );
    let normalizedNodes: any = WorkspaceTreeWalker.normalizeNodes ( 
      inOutPayload.flatDataset, 
      info );

    callback( inOutPayload );

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
        callback( inOutPayload );

        continue loop;
      } 


      subtreeNodeNormalizedNodes = WorkspaceTreeWalker.normalizeNodes ( 
        nodeValue,
        //@ts-ignore
        nodeInfo
      );


      callback( inOutPayload );


      this.walkEasy (
        inOutPayload,
        callback
      );

    }

  }

  public walkWhenSubtreePropName (
    inOutPayload: WorkspaceTreeWalkerPayload,
    callback: CallableFunction
  ): undefined {

    let info: IterableInfo = WorkspaceTreeWalker.getNodeInfo ( inOutPayload.flatDataset );
    let normalizedNodes: any[] = WorkspaceTreeWalker.normalizeNodes( 
      inOutPayload.flatDataset, 
      info );

    callback( inOutPayload );

    let subtreeIndex: number = 0;
    let keyFound = info.keys.find( 
      (k: any, i: number) => {
        let matches: boolean = ( k === inOutPayload.subtreePropertyName );
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

      callback( inOutPayload );

      if ( !keyFound ) {
        continue loop;
      }

      if ( keyNode === inOutPayload.subtreePropertyName ) {
        this.walkWhenSubtreePropName (
          inOutPayload,
          callback
        );

      }

    }

  }

  public walkFlat (
    inOutPayload: WorkspaceTreeWalkerPayload,
    callback: CallableFunction
  ): undefined {

    let info: IterableInfo = WorkspaceTreeWalker.getNodeInfo ( inOutPayload.flatDataset );
    let normalizedRootData: any[] = WorkspaceTreeWalker.normalizeNodes( 
      inOutPayload.flatDataset, 
      info 
    );

    inOutPayload.jpathData.getJPath().push( inOutPayload.id );

    inOutPayload.flatDatasetNormalized = normalizedRootData;

    this.walkFlatSubcall (
      inOutPayload,
      callback
    );

  }


  public walkFlatSubcall (
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

      //payloadLocal.jpathData.getJPath().push("subtree");
      const jpathData: JPathData = payloadLocal.jpathData;
      const path: any[] = jpathData.getJPath();

      let newJpath = path.reduce ( 
        ( jpathCurrent: any, key: any, ix: number, reducedPath: any[] ): any => {
          const _jpathLen: number = jpathCurrent.length;
          const _jpathLastIx: number = _jpathLen - 1;
          let lastSavedJpathKey: any = null;

          if ( _jpathLastIx > (-1) ) {
            lastSavedJpathKey = jpathCurrent[_jpathLastIx];
          }

          if ( key === payloadLocal.parentId ) {
            jpathCurrent.push ( payloadLocal.parentId );
            jpathCurrent.push ( payloadLocal.id );

          } else if ( lastSavedJpathKey === payloadLocal.id ) {
            true;

          } else if ( lastSavedJpathKey === payloadLocal.parentId ) {
            jpathCurrent.push ( payloadLocal.id );

          } else {
            jpathCurrent.push ( key );

          }

          return [...jpathCurrent,];
        }, 
        []
      );

      const newJpathData: JPathData = new JPathData();
      newJpathData.setJPath( newJpath );

      payloadLocal.jpathData = newJpathData;
      // payloadLocal.jpathData.setIsPlaceholderValue(0);

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

  public walkFlatRepeating (
    inOutPayload: WorkspaceTreeWalkerPayload,
    callback: CallableFunction
  ): undefined {

    let info: IterableInfo = WorkspaceTreeWalker.getNodeInfo ( inOutPayload.flatDataset );
    let normalizedRootData: any[] = WorkspaceTreeWalker.normalizeNodes( 
      inOutPayload.flatDataset, 
      info 
    );

    inOutPayload.jpathData.getJPath().push( inOutPayload.id );

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

      //payloadLocal.jpathData.getJPath().push("subtree");
      const jpathData: JPathData = payloadLocal.jpathData;
      const path: any[] = jpathData.getJPath();

      let newJpath = path.reduce ( 
        ( jpathCurrent: any, key: any, ix: number, reducedPath: any[] ): any => {
          const _jpathLen: number = jpathCurrent.length;
          const _jpathLastIx: number = _jpathLen - 1;
          let lastSavedJpathKey: any = null;

          if ( _jpathLastIx > (-1) ) {
            lastSavedJpathKey = jpathCurrent[_jpathLastIx];
          }

          if ( key === payloadLocal.parentId ) {
            jpathCurrent.push ( payloadLocal.parentId );
            jpathCurrent.push ( payloadLocal.id );

          } else if ( lastSavedJpathKey === payloadLocal.id ) {
            true;

          } else if ( lastSavedJpathKey === payloadLocal.parentId ) {
            jpathCurrent.push ( payloadLocal.id );

          } else {
            jpathCurrent.push ( key );

          }

          return [...jpathCurrent,];
        }, 
        []
      );

      const newJpathData: JPathData = new JPathData();
      newJpathData.setJPath( newJpath );

      payloadLocal.jpathData = newJpathData;
      // payloadLocal.jpathData.setIsPlaceholderValue(0);

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




