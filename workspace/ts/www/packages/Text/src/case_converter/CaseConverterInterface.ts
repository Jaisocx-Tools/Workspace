/**
 * CaseConverter — robust text case transformations in TypeScript
 *
 * Features
 * - Handles camelCase/PascalCase/snake_case/kebab-case/CONSTANT_CASE/Train-Case/dot.case/path/case
 * - Unicode-aware tokenization (letters & numbers), optional diacritic stripping
 * - Sensible acronym handling (e.g., "parseXMLHttpRequest" -> ["parse", "XML", "Http", "Request"])
 * - Configurable locale for casing and options per call
 */

import { CaseOptions } from "./CaseOptions.js";



export interface CaseConverterInterface {

  /** Core public API (static convenience) */
  //@ts-ignore
  static camel(input: string, options?: CaseOptions): string;

  //@ts-ignore
  static pascal(input: string, options?: CaseOptions): string;

  //@ts-ignore
  static snake(input: string, options?: CaseOptions): string;

  //@ts-ignore
  static kebab(input: string, options?: CaseOptions): string;

  //@ts-ignore
  static constant(input: string, options?: CaseOptions): string;

  //@ts-ignore
  static title(input: string, options?: CaseOptions): string;

  //@ts-ignore
  static sentence(input: string, options?: CaseOptions): string;

  //@ts-ignore
  static dot(input: string, options?: CaseOptions): string;

  //@ts-ignore
  static path(input: string, options?: CaseOptions): string;

  //@ts-ignore
  static train(input: string, options?: CaseOptions): string;



  /** Instance methods */
  toCamel(input: string): string;

  toPascal(input: string): string;

  toSnake(input: string): string;

  toKebab(input: string): string;

  toConstant(input: string): string;

  toTitle(input: string): string;

  toSentence(input: string): string;

  toTrain(input: string): string;

  toDelimited(input: string, delimiter: string): string;

  /**
   * Tokenize an input string into words, honoring acronyms and numbers.
   * Example: "parseXMLHttp2Response" => ["parse","XML","Http","2","Response"]
   */
  tokens(input: string): string[];

  /** Normalize string, optionally strip diacritics */
  //@ts-ignore
  protected normalize(input: string): string;

  //@ts-ignore
  protected cap(t: string): string;

}

/**
 * Quick usage examples
 *
 * const cc = new CaseConverter();
 * cc.toCamel('  parse XML HTTP request  '); // => 'parseXmlHttpRequest'
 * cc.toSnake('Make HTTP/2 GREAT-again!');   // => 'make_http_2_great_again'
 * CaseConverter.constant('fooBarBaz');      // => 'FOO_BAR_BAZ'
 * CaseConverter.title('a tale of two cities'); // => 'A Tale of Two Cities'
 */
/**
 * CaseConverter — robust text case transformations in TypeScript
 *
 * Features
 * - Handles camelCase/PascalCase/snake_case/kebab-case/CONSTANT_CASE/Train-Case/dot.case/path/case
 * - Unicode-aware tokenization (letters & numbers), optional diacritic stripping
 * - Sensible acronym handling (e.g., "parseXMLHttpRequest" -> ["parse", "XML", "Http", "Request"])
 * - Configurable locale for casing and options per call
 */


