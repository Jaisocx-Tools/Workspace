export interface CaseOptions {
  /** Keep accented characters instead of stripping combining marks */
  keepDiacritics?: boolean;
  /** Attempt to preserve acronyms (contiguous capitals) as single tokens */
  preserveAcronyms?: boolean;
  /** Trim leading/trailing separators before processing */
  trim?: boolean;
  /** Locale for case operations (e.g. 'tr', 'en-US'). Defaults to undefined. */
  locale?: string | string[];
}

