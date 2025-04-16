class Api {
  _debug;
  _timestamps;

  constructor() {
    this._debug = false;
    this._timestamps = new Object();
  }

  setDebug(toDebug) {
    this._debug = toDebug;

    return this;
  }

  getNsTimestamp() {
    const now = performance.timeOrigin + performance.now();

    return BigInt(Math.floor(now * 1_000_000)); // Convert milliseconds to nanoseconds
  }

  fetchObjData(url, method, requestHeaders) {
    if (this._debug) {
      this._timestamps["1Request"] = new Object();
      this._timestamps["1Request"]["start"] = this.getNsTimestamp();
    }

    return fetch(url)
      .then((response) => {
        if (this._debug) {
          this._timestamps["1Request"]["end"] = this.getNsTimestamp();
        }

        if (this._debug) {
          console.log(response);
        }

        if (this._debug) {
          this._timestamps["2ObtainedArrayBuffer"] = new Object();
          this._timestamps["2ObtainedArrayBuffer"]["start"] = this.getNsTimestamp();
        }

        return response.arrayBuffer();
      })
      .then((buf) => {
        if (this._debug) {
          this._timestamps["2ObtainedArrayBuffer"]["end"] = this.getNsTimestamp();
        }

        if (this._debug) {
          console.log(
            "Response ObjData as ArrayBuffer", 
            buf);
        }

        if (this._debug) {
          this._timestamps["3ConvertedToUint8Array"] = new Object();
          this._timestamps["3ConvertedToUint8Array"]["start"] = this.getNsTimestamp();
        }

        let objdata = new Uint8Array(buf, 0, buf.byteLength);

        if (this._debug) {
          this._timestamps["3ConvertedToUint8Array"]["end"] = this.getNsTimestamp();
        }

        if (this._debug) {
          console.log(
            "Response ObjData ArrayBuffer to Uint8Array", 
            objdata);
        }

        if (this._debug) {
          this._timestamps["4ObjDataParsed"] = new Object();
          this._timestamps["4ObjDataParsed"]["start"] = this.getNsTimestamp();
        }

        let obj = ObjData.parse(objdata);

        if (this._debug) {
          this._timestamps["4ObjDataParsed"]["end"] = this.getNsTimestamp();
        }

        if (this._debug) {
          console.log(
            "Response ObjData parsed as Array or Object", 
            obj);
        }

        if (this._debug) {
          this.consoleLogTimestamps();
        }

        return obj;
      });
  }

  consoleLogTimestamps() {
    if (this._debug === false) {
      return;
    }

    for (let propName in this._timestamps) {
      let timestamps = this._timestamps[propName];
      let diff = BigInt(BigInt(timestamps.end) - BigInt(timestamps.start));
      // let diffMc = diff / 1000;
      console.info(
        `Time ns ${propName}`, 
        diff);
    }
  }
} 


