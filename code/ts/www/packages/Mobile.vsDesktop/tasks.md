# TASKS

## Workarounds

### 1. joining bitbufs arrays by reference

. The changed one letter to lower case did not work. since then when other texts produced, already the letter was changed.
          Where: method producing get methods names as getStyleNameMediaSize... was getstylename...



### 2. renamings: 

1. I don't like today "rule" and "media" in one property name.
. to write the keywords for responsive styles:
    . media query
    . css 
    . style(s)
    . doc
    . 



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













