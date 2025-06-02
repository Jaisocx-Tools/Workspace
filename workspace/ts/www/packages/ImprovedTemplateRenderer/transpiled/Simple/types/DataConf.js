class DataConf {
  //@purpose 
  // name of the template.
  template;
  //@purpose the data, assigned to the template, used by placeholder
  // can be an object, too,
  // and jpath expressions are supported.
  placeholderData;
  //@purpose the iterable data, used to repeat templates, in a group, marked by same tag. 
  repeatTagData;
  //@purpose can be used to add free comments ad dscriptions.
  comment;

  constructor() {
    this.template = "";
    this.placeholderData = null;
    this.repeatTagData = null;
    this.comment = "";
  }
} 


