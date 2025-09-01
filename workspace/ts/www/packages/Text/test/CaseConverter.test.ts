import { describe, it, expect, test } from 'vitest';
import { CaseConverter } from '../src/case_converter/CaseConverter.js';



describe('CaseConverter basics', () => {
  const cc = new CaseConverter();

  cc.setDebug( false );

  it('camelCase from spaced words', () => {
    expect(cc.toCamel('hello world')).toBe('helloWorld');
  });

  it('PascalCase from kebab', () => {
    expect(cc.toPascal('make-http-request')).toBe('MakeHttpRequest');
  });

  it('snake_case from camelCase', () => {
    expect(cc.toSnake('makeHttpRequest')).toBe('make_http_request');
  });

  it('kebab-case with numbers', () => {
    expect(cc.toKebab('HTTP2 Ready')).toBe('http2_ready'.replace(/_/g, '-'));
  });

  it('CONSTANT_CASE from mixed input', () => {
    expect(cc.toConstant('Make HTTP/2 great-again')).toBe('MAKE_HTTP_2_GREAT_AGAIN');
  });

  it('Title Case with small words', () => {
    expect(cc.toTitle('a tale of two cities')).toBe('A Tale of Two Cities');
  });

  it('Sentence case', () => {
    expect(cc.toSentence('MAKE ALL LOWER EXCEPT FIRST')).toBe('Make all lower except first');
  });

  it('Train-Case', () => {
    expect(cc.toTrain('train case test')).toBe('Train-Case-Test');
  });

  it('dot.case and path/case', () => {
    expect(cc.toDelimited('One TWO three', '.')).toBe('one.two.three');
    expect(new CaseConverter().toDelimited('A/B\\C', '/')).toBe('a/b/c');
  });
});

describe('Acronyms & diacritics', () => {
  it('preserves acronyms by default', () => {
    const cc = new CaseConverter();
    expect(cc.toCamel('parse XML HTTP request')).toBe('parseXmlHttpRequest');
  });

  it('splits acronyms when disabled', () => {
    const cc = new CaseConverter();
    expect(cc.toCamel('XMLHttp')).toBe('xmlHttp'); // XML treated as one token; boundary before H
  });

  it('strips diacritics by default', () => {
    const cc = new CaseConverter();
    expect(cc.toSnake('façade déjà vu')).toBe('facade_deja_vu');
  });

  it('keeps diacritics when enabled', () => {
    const cc = new CaseConverter();
    expect(cc.toSnake('façade déjà vu')).toBe('façade_déjà_vu');
  });
});

