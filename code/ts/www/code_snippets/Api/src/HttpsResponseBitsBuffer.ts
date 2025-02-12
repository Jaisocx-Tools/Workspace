

//@onDemand
import axios from "axios";


//@purpose usage with ObjData serialized object or class' instnce props 
// sent via api, 
// obtained in the response payload 
// of datatype BitsBuffer Uint8Array
class HttpsResponseBitsBuffer {

  static example(): undefined {

    // Example Usage
    const url = "https://example.com/binary-file"; // Replace with actual URL

    // 1. Using Axios
    HttpBinaryFetcher.fetchWithAxios(url).then(data => {
      console.log("Axios Uint8Array:", data);
    });

    // 2. Using Fetch with async/await
    (async () => {
      const data = await HttpBinaryFetcher.fetchWithFetch(url);
      console.log("Fetch (async/await) Uint8Array:", data);
    })();

    // 3. Using Fetch with `.then()`
    HttpBinaryFetcher.fetchWithFetchThen(url).then(data => {
      console.log("Fetch (Promise then) Uint8Array:", data);
    });

  }


  /**
   * Fetches a binary response using Axios and assigns it to a Uint8Array.
   * @param url The URL to request.
   * @returns Promise<Uint8Array>
   */
  static async fetchWithAxios(url: string): Promise<Uint8Array> {
    const response = await axios.get(url, { responseType: "arraybuffer" });
    return new Uint8Array(response.data);
  }

  /**
   * Fetches a binary response using Fetch API with async/await and assigns it to a Uint8Array.
   * @param url The URL to request.
   * @returns Promise<Uint8Array>
   */
  static async fetchWithFetch(url: string): Promise<Uint8Array> {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    return new Uint8Array(buffer);
  }

  /**
   * Fetches a binary response using Fetch API with Promise `.then()`, without async/await.
   * @param url The URL to request.
   * @returns Promise<Uint8Array>
   */
  static fetchWithFetchThen(url: string): Promise<Uint8Array> {
    return fetch(url)
      .then(response => response.arrayBuffer())
      .then(buffer => new Uint8Array(buffer));
  }

}
