

export interface ImprovedTemplateRendererInterface {




//@after INFOS ready
// can write now 

  //@preprocess to obtain INFOS about multidim feature of the html doc tree in the Site UI being rendered.
  // 2. when preprocess INFOS array.
  sumTaggedGroupSize(): number; // .end - .start , INFOS prop, return when the prop value applied.
  sumTaggedGroupIterations(): number; // ( for of data when invoking the callback, method render() 3rd or 4th for level 1) data.length;

  //  .r.1  when .render() runs.
  // sumTaggedGroupSize() * sumTaggedGroupIterations();
  // at render time, 
  // .sumTaggedGroupIterations() is the data.length for the node multiple.
  // .sumTaggedGroupRenderedTemplates() and add to the prop for sumRenderedTemplates();
  // then may declare array to keep all rendered ( multidim, too ) templates,
  // and set every rendered template to this array by reference.
  // the higher level arrays are all declared, since the hodler templates INFO is before,
  // and, the for data for this template nested nodes knows the number of data elems before for data and before the callback invoked for every nested tagged group.
  sumTaggedGroupRenderedTemplates(): number; 

  // .r.2   after main for level 1 in the .render(), before finish method .render();
  //@retval number
  //@protected class prop number required be ready and @prop status true this value was ready summarized. @prop flat array fixed size.
  // the Getter method, available @after: the multidim array all templates rendered due to data number of the data arrays elems and the templates in the tagged group.
  getSumRenderedTemplates(): number;




  // .r.3
  //@purpose: rendered templates multidim to fixed size flat array of all rendered templates
  //@retVal @flatArray the flat one dimensional array of rendered templates, 
  //                    and every template was already an html encoded to UTF_16LE 
  //                    and stored as one Uint16Array variable, 
  //                    containing 16bits short int charcodes.
  // declared retVal array with size = .getSumRenderedTemplates(), 
  // multidim subcalls ready multidim array with all rendered templates, 
  // counter++ = retVal[counter] = current for elem template;
  multidimArrayToFlatArray(
    flatArraySize: number,
    multidimArray: any
  ): Uint16Array[]; 



  // the rendered templates are ready and in the flat array.
  // can call .join() or smth like this.
  // retVal @html = .render() target method.


  // .r.4 all join(), 
  // and before the one template rendering, 
  // the methods to build Uint16 arrays from texts have to be already invoked, 
  // or, each placeholder is like this: "{{ variable }}" the separate template, 
  // and preprocessed, note to be set, this template when rendered, 
  // is the pure placeholder value, and/or JPath array added to the templateConf, too. 
  // to be mapped by dataArray elem ref to the placeholder prop of the templateConf 




  //@finish
  //@after .join and other,
  //          DocumentFragment is very efficient.
  //          @task: read infos on DocumentFragment, how to apply the rendered html Uint16Array[].









  //@FUTURE TASKS
  // of grate use, since already know the performace improvals:
  // 1. a placeholder is readable text, 
  //          however at runtime may not be processed, 
  //          but rather just set the Json data value by ref 
  //          to the placeholder's rendered templates array ref.
  //          @task: templatesConf prop or INFOS prop the target array ref 
  //                  where to set the json prop value Uint16Array by ref.


  //@future_improvals
  // .split() or easy for or while .indexOf("{{ ") and so on,
  // when templateConf .isWithPlaceholder === 1 )
  // 
  splitTemplateToPlaceholdersJpathAndStaticTexts( templateText: string ): any[];


  //@bug: now the JPath in placeholders not supported.
  //          {{ placeholderValue.somejpathElem[0].somejpathElem }}
  //@future_improvals
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

}









