
export type DataRecordLabel = {
  id: string;
  ix: number;
  isActive: boolean;
}

export type SimpleDataRecord = {
  recordLabel: DataRecordLabel;
  data: any;
}

export type TypedDataRecord = {
  recordLabel: DataRecordLabel;
  recordType: DataRecordType;
  data: any;
}

export type SignedDataRecord = {
  recordLabel: DataRecordLabel;
  recordType: DataRecordType;
  data: any;
  recordSignature: DataRecordSignature;
}

export type DataRecordType = {
  recordLabel: DataRecordLabel;

  isNumber: boolean;
  isCode: boolean;
  isScience: boolean;

  mimeType: string;

  dataType: any;
  dataValueUnit: any;
  dataValueBitsNumber: any;
  dataValueOctetsNumber: any;

  scienceNamespace: any;
  scienceArt: any;

  codeProgrammingLanguage: any;
  isRemotePublished: boolean;
  centralCodeRepo_ProgrammingLanguage_Url: any;
  codeRepo_Urls: any;
  namespace: any;
  className: any;
}

export type DataRecordSignature = {
  signature: any;
  keys: any;
  info: any;
  hints: any;
}


