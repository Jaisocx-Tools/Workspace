class TemplateConf {
  //
  templateName;
  //@purpose 
  // name of the templates group 
  tag;
  //@purpose 
  // the name to the variable in the placeholder.
  // this variable value is equal with the prop "data" in the instance of this class.
  // then the placeholder "tableRecord" in the template e.g. like this: 
  // <any-html>{{ tableRecord.name }} {{ tableRecord.family_name }}</any-html>
  placeholder;
  startRepeat;
  repeatTagConfDataApplies;
  useRepeatCallback;
  repeatDataCallback;
  branchRepeatTag;
  //@purpose
  // to minimize replace() invoke times,
  // when this prop set zero,
  // the template is not processed,
  // and just added it's ref to the resulting array of rendered to html templates.
  hasPlaceholders;
  //@requiredWhen .hasPlaceholders = true; 
  //@purpose
  // the placeholder's data placed into template when being rendered
  data;
  //@preparedResult
  info;
  //@calculated
  //@preprocessing
  //@info mark whether a placeholder's jpath expression was parsed,
  //          and the template is now array of datatype any[], 
  //          string html and JPath class instance where was placeholder.
  placeholdersPrepared;
  //@calculated
  //@preprocessing
  //@purpose
  // to know the number of placeholders, 
  // this is the .replace() or similar calls number
  // when rendering templates in a loop with very many elems.
  placeholdersNumber;

  constructor() {
    this.templateName = "";
    this.tag = "";
    this.placeholder = null;
    this.startRepeat = false;
    this.repeatTagConfDataApplies = false;
    this.useRepeatCallback = false;
    this.repeatDataCallback = null;
    this.branchRepeatTag = null;
    this.hasPlaceholders = false;
    this.data = null;
    this.info = null;
    this.placeholdersPrepared = false;
    this.placeholdersNumber = 0;
  }
} 


