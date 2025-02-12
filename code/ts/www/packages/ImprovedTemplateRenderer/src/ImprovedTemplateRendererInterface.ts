

export interface ImprovedTemplateRendererInterface {


  //@preprocess templates texts: placeholders never parse texts, just set multidimArray[pointer] = .methodAnyToTextToArrayOfChars ( variable placeholder from json in the .render() method )
  // 1. 


  //@rename
  //@whyTheBest 
  //              The main aim of the Poject with this ts tool is to be able to style on site big Json data over 100 MB.
  //              The need is not known, but why not to code the lib with this feature)) 
  //              when developing, data can be not yet paged like in productive mode sites, and the site can do, even when https json response of very big size.
  // 
  //              I try to reduce copies by value of the texts when concatenating, 
  //              and number of the texts bufs reallocations when growing concatenated, 
  //              since the copying, too, and every text symbol.
  //              Uint16Array class exemplar is an art of js class Object, 
  //              and is being copied by reference, 
  //              what is then one variable of 64 bits or fewer assigned the entire text 
  //              ( when a text 50 symbols long this is 20 times nicer when copied once. 
  //              and then every time the copy made or a variable assigned, times 20, 
  //              or set as an array elem)
  //@purpose 
  getArrayOfChars( value: any ): Uint16Array;


  // Avoid innerHTML when inserting many elements (use DocumentFragment)
  // charcode table array example: [key: number] = "A";
  // when a symbol, I have to sort fast the symbols, and I can not today, since the algo not written yet.
  // and impl fast search algorythm.



  // when with char code from symbols table array with poionter,
  // and there was no symbol set,
  // another method to invoke .fillCharcodeRange( charcode: number(2bytes) ) 
  // this class constructor() invokes similar to .fillCharcodeRange for small charcode ranges, with these the texts often published on sites.
  getTextFromArrrayOfChars( chars: Uint16Array ): string;


  // 
  fillCharcodeRange( charcode: number ): undefined;

  fillCharcodeRangeByCountryCode(): undefined;


  // .split() or easy for or while .indexOf("{{ ") and so on,
  // when templateConf .isWithPlaceholder === 1 )
  // 
  splitTemplateToPlaceholdersJpathAndStaticTexts( templateText: string ): any[];


  // JPath value is the placeholder text.
  // one art the placeholder variable name,
  // other arts, JPath expression,
  // the parsing takes time,
  // and the ready array of keys, assigned to templateConf elem,
  // to get the inner multilevel js obj prop,
  // reduces cost
  // improves performance
  // improves User Experience when visiting Site with this UI Tool.
  parseJPath( jpath: string ): any[];







  //@preprocess to obtain INFOS about multidim feature of the html doc tree in the Site UI beig rendered.
  // 2. when preprocess INFOS array.
  sumTaggedGroupSize(): number; // .end - .start , INFOS prop, return when the prop value applied.
  sumTaggedGroupIterations(): number; // ( for of data when invoking the callback, method render() 3rd or 4th for level 1) data.length;
  sumTaggedGroupRenderedTemplates(): number; // sumTaggedGroupSize() * sumTaggedGroupIterations();
  










  //  .r.1  when .render() runs.
  //@retval @multidim array
  // at render time, 
  // .sumTaggedGroupIterations() is the data.length for the node multiple.
  // .sumTaggedGroupRenderedTemplates() and add to the prop for sumRenderedTemplates();
  // then may declare array to keep all rendered ( multidim, too ) templates,
  // and set every rendered template to this array by reference.
  // the higher level arrays are all declared, since the hodler templates INFO is before,
  // and, the for data for this template nested nodes knows the number of data elems before for data and before the callback invoked for every nested tagged group.
  sumTaggedGroupRenderedTemplates(): number; 
  

  // .r.2   after main for level 1 in the .render(), before finish method .render();
  //@retval @flatArray
  //@protected class prop number required be ready and @prop status true this value was ready summarized. @prop flat array fixed size.
  sumRenderedTemplates(): number; // the Getter method, available @after: the multidim array all templates rendered due to data number of the data arrays elems and the templates in the tagged group.

  // .r.3
  //@retVal @flatArray
  multidimArrayToFlatArray(): any[]; // declared retVal array with size = .sumRenderedTemplates(), multidim subcalls ready multidim array with all rendered templates, counter++ = retVal[counter] = current for elem template;

  // the rendered templates are ready and in the flat array.
  // can call .join() or smth like this.
  // retVal @html = .render() target method.


  // .r.4 all join(), 
  // and before the one template rendering, 
  // the methods to build Uint16 arrays from texts have to be already invoked, 
  // or, each placeholder is like this: "{{ variable }}" the separate template, 
  // and preprocessed, note to be set, this template when rendered, 
  // is the pure placeholder value, and/or JPath array added to the templateConf, too. 
  // to be mapped by dataArray elem pointer to the placeholder prop of the templateConf 

















}





