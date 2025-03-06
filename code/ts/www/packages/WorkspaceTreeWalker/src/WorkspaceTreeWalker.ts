import { WorkspaceTreeWalkerPayload } from "./types/WorkspaceTreeWalkerPayload.js";
import { IterableInfo } from "./types/IterableInfo.js";
import { JPathData } from "./types/JPathData.js";
import { JPath } from "./lib/JPath.js";


export class WorkspaceTreeWalker {

  public static DATATYPE_OBJECT: string = "object";

  public static WALK_MODE = class {
    public static WALK_MODE_EASE: string = "ease";
    public static WALK_MODE_WHEN_SUBTREE_PROPNAME: string = "branch_propname";
    public static WALK_MODE_FLAT: string = "flat";
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

    let info: IterableInfo = WorkspaceTreeWalker.getNodeInfo ( inOutPayload.dataset );
    let normalizedNodes: any = WorkspaceTreeWalker.normalizeNodes ( 
      inOutPayload.dataset, 
      info );

    callback( inOutPayload );

    let node: any  = null;
    let keyNode: any = null;
    let nodeValue: any = null;
    let nodeInfo: IterableInfo|Object = {};
    let branchNodeNormalizedNodes: any = null;

    loop: for ( node of normalizedNodes ) {

      nodeInfo = WorkspaceTreeWalker.getNodeInfo ( node );
      keyNode = Object.keys( node )[0];
      nodeValue = node[keyNode];

      if ( ( nodeInfo as IterableInfo ).length === 0 ) {
        callback( inOutPayload );

        continue loop;
      } 


      branchNodeNormalizedNodes = WorkspaceTreeWalker.normalizeNodes ( 
        nodeValue,
        //@ts-ignore
        nodeInfo
      );


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

    let info: IterableInfo = WorkspaceTreeWalker.getNodeInfo ( inOutPayload.dataset );
    let normalizedNodes: any[] = WorkspaceTreeWalker.normalizeNodes( 
      inOutPayload.dataset, 
      info );

    callback( inOutPayload );

    let branchIndex: number = 0;
    let keyFound = info.keys.find( 
      (k: any, i: number) => {
        let matches: boolean = ( k === inOutPayload.branchName );
        if ( matches === true ) branchIndex = i;
        return matches;
      } 
    );

    let node: any  = null;
    let keyNode: any = null;
    let nodeValue: any = null;
    let nodeInfo: IterableInfo|Object = {};
    let branchNodeNormalizedNodes: any = null;


    loop: for ( node of normalizedNodes ) {

      keyNode = Object.keys( node )[0];
      nodeValue = node[keyNode];
      nodeInfo = WorkspaceTreeWalker.getNodeInfo ( nodeValue );

      if ( ( nodeInfo as IterableInfo ).length === 0 ) {
        branchNodeNormalizedNodes = null;

      } else {
        branchNodeNormalizedNodes = WorkspaceTreeWalker.normalizeNodes ( 
          nodeValue,
          //@ts-ignore
          nodeInfo
        );

      }

      callback( inOutPayload );

      if ( !keyFound ) {
        continue loop;
      }

      if ( keyNode === inOutPayload.branchName ) {
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

    let info: IterableInfo = WorkspaceTreeWalker.getNodeInfo ( inOutPayload.dataset );
    let normalizedRootData: any[] = WorkspaceTreeWalker.normalizeNodes( 
      inOutPayload.dataset, 
      info 
    );

    inOutPayload.jpathData.getJPath().push( inOutPayload.id );

    inOutPayload.datasetNormalized = normalizedRootData;

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
      ...inOutPayload.datasetNormalized
        .filter(
          function ( node: any ): boolean {
            const branchKey = Object.keys( node )[0];
            const flatRecursionDataRecord: any = node[branchKey];

            //@ts-ignore
            const matchesHolderId: boolean = ( flatRecursionDataRecord[inOutPayload.nameHolderId] === inOutPayload.id );

            return matchesHolderId;
          }
        ),
    ];

    if ( (!filteredRootNodes) || ( filteredRootNodes.length === 0 ) ) {
      return;
    }


    let node: any  = null;
    let nodeInfo: IterableInfo|Object = {};
    
    inOutPayload.currentDatasetNormalized = filteredRootNodes;

    for ( node of filteredRootNodes ) {

      const payloadLocal: WorkspaceTreeWalkerPayload = new WorkspaceTreeWalkerPayload();
      for ( let propName in inOutPayload ) {
        //@ts-ignore
        payloadLocal[propName] = inOutPayload[propName];
      }

      payloadLocal.dataName       = Object.keys( node )[0];
      payloadLocal.data           = node[payloadLocal.dataName];
      payloadLocal.id             = payloadLocal.data[payloadLocal.nameId];
      payloadLocal.holderId       = payloadLocal.data[payloadLocal.nameHolderId];


      //payloadLocal.jpathData.getJPath().push("branch");
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

          if ( key === payloadLocal.holderId ) {
            jpathCurrent.push ( payloadLocal.holderId );
            jpathCurrent.push ( payloadLocal.id );

          } else if ( lastSavedJpathKey === payloadLocal.id ) {
            true;

          } else if ( lastSavedJpathKey === payloadLocal.holderId ) {
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

      nodeInfo = WorkspaceTreeWalker.getNodeInfo ( payloadLocal.data );

      payloadLocal.dataNormalized = WorkspaceTreeWalker.normalizeNodes ( 
        payloadLocal.data, 
        ( 
                                              nodeInfo as IterableInfo )
      );

      callback (
        payloadLocal
      );

      let iterationNumber: number = 1;
      let iteration = 0;
      let isMultipleDataApplied: boolean = false;
      //@ts-ignore
      let multipleDataInfo: IterableInfo = {};

      if ( 
        ( payloadLocal.iterationsNumber ) && 
        ( payloadLocal.iterationsDataset )
      ) {
        iterationNumber = payloadLocal.iterationsNumber;
        isMultipleDataApplied = ( ( payloadLocal.iterationsNumber !== 0 ) && ( payloadLocal.iterationsDataset.length !== 0 ) ) as boolean;
      }

      for ( iteration = 0; iteration < iterationNumber; iteration++ ) {

        let branchInoutPayload: WorkspaceTreeWalkerPayload = new WorkspaceTreeWalkerPayload();
        
        if ( isMultipleDataApplied === true ) {

          for ( let propName in payloadLocal ) {
            //@ts-ignore
            branchInoutPayload[propName] = payloadLocal[propName];
          }
  
          //@ts-ignore
          branchInoutPayload.iterationsDataset = payloadLocal.iterationsDataset[iteration];
          multipleDataInfo = WorkspaceTreeWalker.getNodeInfo( branchInoutPayload.iterationsDataset );

          if ( !multipleDataInfo.isArray && ( multipleDataInfo.datatype === IterableInfo.DATATYPE_OBJECT ) ) {
            branchInoutPayload.iterationsDataset = WorkspaceTreeWalker.normalizeNodes(
              branchInoutPayload.iterationsDataset,
              multipleDataInfo
            );

            branchInoutPayload.iterationsNumber = branchInoutPayload.iterationsDataset.length;
            //...
          }
          
        } else {
          branchInoutPayload = payloadLocal;

        }

        this.walkFlatSubcall (
          branchInoutPayload,
          callback
        );
      }

    }

  }


  public static callbackWalkFlatTransformToMultilevel (
    inOutPayload: WorkspaceTreeWalkerPayload
  ) {

    JPath.setByJPathWalkFlatRebuild (
      inOutPayload.transformedDataset,
      inOutPayload.jpathData.getJPath(),
      inOutPayload.data,
      inOutPayload.nameHolderId,
      inOutPayload.nameId,
      inOutPayload.branchName
    );

  }

}






