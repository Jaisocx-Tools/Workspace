# TASKS

## Status of .ts dir

. automation_base_class:      ready, built, tested
. constants:                  ready, built, tested
. css_file_with_sizes_names:  ready, built, tested, encommented
. css_imports_file:           ready, built, tested, encommented
. main:                       ready, built, tested
. responsive_files_set:       in development, not built, not tested
. ts_file_with_sizes_names:   encommented, not built, not tested


## Bugs encounrered

### imports relative

. import constants first line, wrong file name

. imported files don't have the SitesTool name in the file name

### imports webpack

  the same bugs as in the imports relative

### Constants file

#### Status

the css constants file has the constants names, these are not with tool name, and this is the right thing.

Bugfix: the csss constants file name doesn't have to contain in the file name the SitesTool name,
and just the one css constants file name is needed,
since the responsive sizes are never just for one SitesTool,
however for the project and all sites, like a documentation lookup css doc.
and therefore can be moved to a cdn.


### Responsive Css files set with media queries

#### Status

. file contents: norm

. file name: nearly norm

    . the css file with media query for portrait preceeds normally the word landscape. Maybe to adjust later the alphabetic filename keyword as the _e02_ in the filename responsive_size_e02_mobile_xs_landscape_CssToolTemplate.css











## Workarounds

### 1. joining bitbufs arrays by reference

. The changed one letter to lower case did not work. since then when other texts produced, already the letter was changed.
          Where: method producing get methods names as getStyleNameMediaSize... was getstylename...





### 2. to refine the architecture

. Methods and props names are all same and I'm not able to know what method what.

. whether the props in constants class are with private level symbol hashtag #

. to write the interface for the constants get methods, where methods are just the fixed array of bitbufs constants class props.

. to write the interface methods, these methods build first:
  . bitbufs arrays, first Uint8Arrays, since already the class works as is with Uint8Arrays. whether later Buffer() class suits.


. 2 dimension bitbufs arrays to pack at once to a bitbuf array one dimension



```
class Constants {

// easy to set and to review.
#keywordStyle: string = "style";
#keywordStyleBibtuf: Uint8Array = this.textEncoder.encode( this.#keywordStyle );


// cases like this:

#propnameMediaQuery = [
  this.#keywordOne,
  this.#keywordTwo,
  this.#keywordThree,
  this.#keywordFour,
  "placeholder1",
  "placeholder2"
];



constructor() {

  this.#prefixPlaceholderOne = this.getPrefixPlaceholderOne();

  this.#propnameMediaQuery = [
    this.#prefixPlaceholderOne,
    "placeholder1",
    this.#otherProp
  ];

}



getPrefixPlaceholderOne(): Uint8Array {
  this.#prefixPlaceholderOne: Uint8Array = this.mergeBitbufs (
    [
      this.#keywordOne,
      this.#keywordTwo,
      this.#keywordThree,
      this.#keywordFour
    ]
  );

}

```


entsorgung@schmidt-transporte.ch



044 850 14 80





