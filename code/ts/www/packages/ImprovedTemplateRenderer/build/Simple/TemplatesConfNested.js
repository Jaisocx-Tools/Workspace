class TemplatesConfNested {
  //@required
  //@whenIsHolder
  //@purpose to group nested nodes by this Tag value
  nestedNodes_Tag;
  //@whenIsHolder
  //@purpose: documentation
  //@explained  just to note for documentation purposes, not used in the rendering multile nestedNodes_
  //        the variable name used in the placehlders in the nested templates. 
  //        Here in this template html the variableName used in the placeholder is the "tableRecord", 
  //        and in the nested templates, the variableName of the object, 
  //        used in the placeholders, will be the "columnConf",
  //        and the TemplateRenderer method, processing inner loops, 
  //        has to set the value of the datatype suitable to columnConf (this is a specific example)
  //        and has to call in the inner loop on nestedTemplates a specific callback, the prop will be here, too.))
  nestedNodes_PlaceholderName;
  //@whenIsHolder 
  //@purpose: type hinting
  //@explained to know whether when this template is the holder, 
  //        and invokes the callback for the nestedNodes_, 
  //        the callback return value matches the right datatype.
  //        the datatype of the data, set in the nested nodes templates placehlders, here nestedNodes_PlaceholderName = "columnConf";
  nestedNodes_PlaceholderDatatype;
  //@calculated
  //@whenIsHolder
  nestedNodes_Amount;
  //@whenIsHolder
  // The Nested Nodes Callback Function, Providing to the Nested Templates Placeholders the Json Data. The Json Data is used when rendering the Nested Templates.
  //@whyOptional since of great use when the holder temlate data for the placehlder is set dynamic possibly in a loop.
  //@purpose 
  //        example: when the holder's template placeholder's data is a table record:
  //                    each record is delivering dynamic in the loop,
  //                    and the next level loop templates data for the placeholders
  //                    is then the field value in this dynamic obtained in the loop record of the holderTemplate.
  //
  //        when there are the nested templates, 
  //        however there are no placeholders in the templates, 
  //        or in the nestedTemplates the placeholders data can be set not by the callback, 
  //        but just with .setTemplateData() method.
  //        the callback is for returning the value for the nestedTemplates their placehlders .data prop one same object, 
  //
  //        to set the function, that processes in loop this template prop value .data, 
  //        or even, an array elem of thisTemplate.data, 
  //        the callback to invoke in the standard impl of the method, 
  //        iterating for multiple nestedNodes_.
  nestedNodes_Callback;

  constructor() {
    this.nestedNodes_Tag = "";
    this.nestedNodes_PlaceholderName = "";
    this.nestedNodes_PlaceholderDatatype = 0;
    this.nestedNodes_Amount = 0;
    this.nestedNodes_Callback = nestedMultipleCallback;
  }
}
//# sourceMappingURL=TemplatesConfNested.js.map