import { describe, it, expect, test } from 'vitest';
import { CaseConverter } from '../src/case_converter/CaseConverter.js';



describe('CaseConverter basics', () => {
  const cc = new CaseConverter();

  cc.setDebug( true );


  it('snake_case from PascalCase', () => {
    expect(cc.toSnake('MakeHttpRequest')).toBe('make_http_request');
  });

  it('camelCase to spaced words', () => {
    expect(cc.toSentence('helloWorld')).toBe('Hello world');
  });

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

  it('PascalCase with numbers', () => {
    expect(cc.toPascal('HTTP2Ready')).toBe('Http2Ready');
  });

  it('Train-Case with numbers', () => {
    expect(cc.toTrain('HTTP2Ready')).toBe('Http-2-Ready');
  });

  it('CONSTANT_CASE from mixed input', () => {
    expect(cc.toConstant('Make HTTP/2 great-again')).toBe('MAKE_HTTP_2_GREAT_AGAIN');
  });

  it('Sentence case', () => {
    expect(cc.toSentence('MAKE ALL LOWER EXCEPT FIRST')).toBe('Make all lower except first');
  });

  it('Train-Case', () => {
    expect(CaseConverter.train('train case test')).toBe('Train-Case-Test');
  });

  it('camelCase to Sentence case', () => {
    expect(cc.toSentence('XMLHttpRequest')).toBe('Xml http request');
  });

  it('dot.case and path/case', () => {
    expect( CaseConverter.dot('One TWO three')).toBe('one.two.three');
    expect( CaseConverter.path('A/B\\C')).toBe('a/b/c');
  });
});

