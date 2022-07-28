import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class GoogleStorageConfig extends jspb.Message {
  getServiceAccountCredentialsMap(): jspb.Map<string, string>;
  clearServiceAccountCredentialsMap(): GoogleStorageConfig;

  getBucketPolicyOnly(): boolean;
  setBucketPolicyOnly(value: boolean): GoogleStorageConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoogleStorageConfig.AsObject;
  static toObject(includeInstance: boolean, msg: GoogleStorageConfig): GoogleStorageConfig.AsObject;
  static serializeBinaryToWriter(message: GoogleStorageConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoogleStorageConfig;
  static deserializeBinaryFromReader(message: GoogleStorageConfig, reader: jspb.BinaryReader): GoogleStorageConfig;
}

export namespace GoogleStorageConfig {
  export type AsObject = {
    serviceAccountCredentialsMap: Array<[string, string]>,
    bucketPolicyOnly: boolean,
  }
}

export class AzureStorageConfig extends jspb.Message {
  getAccount(): string;
  setAccount(value: string): AzureStorageConfig;

  getKey(): string;
  setKey(value: string): AzureStorageConfig;

  getChunkSize(): string;
  setChunkSize(value: string): AzureStorageConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AzureStorageConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AzureStorageConfig): AzureStorageConfig.AsObject;
  static serializeBinaryToWriter(message: AzureStorageConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AzureStorageConfig;
  static deserializeBinaryFromReader(message: AzureStorageConfig, reader: jspb.BinaryReader): AzureStorageConfig;
}

export namespace AzureStorageConfig {
  export type AsObject = {
    account: string,
    key: string,
    chunkSize: string,
  }
}

export class HttpStorageConfig extends jspb.Message {
  getMethod(): string;
  setMethod(value: string): HttpStorageConfig;

  getHeadersMap(): jspb.Map<string, string>;
  clearHeadersMap(): HttpStorageConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HttpStorageConfig.AsObject;
  static toObject(includeInstance: boolean, msg: HttpStorageConfig): HttpStorageConfig.AsObject;
  static serializeBinaryToWriter(message: HttpStorageConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HttpStorageConfig;
  static deserializeBinaryFromReader(message: HttpStorageConfig, reader: jspb.BinaryReader): HttpStorageConfig;
}

export namespace HttpStorageConfig {
  export type AsObject = {
    method: string,
    headersMap: Array<[string, string]>,
  }
}

export class S3StorageConfig extends jspb.Message {
  getAccessKeyId(): string;
  setAccessKeyId(value: string): S3StorageConfig;

  getSecretAccessKey(): string;
  setSecretAccessKey(value: string): S3StorageConfig;

  getEndpoint(): string;
  setEndpoint(value: string): S3StorageConfig;

  getProvider(): string;
  setProvider(value: string): S3StorageConfig;

  getRegion(): string;
  setRegion(value: string): S3StorageConfig;

  getChunkSize(): string;
  setChunkSize(value: string): S3StorageConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): S3StorageConfig.AsObject;
  static toObject(includeInstance: boolean, msg: S3StorageConfig): S3StorageConfig.AsObject;
  static serializeBinaryToWriter(message: S3StorageConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): S3StorageConfig;
  static deserializeBinaryFromReader(message: S3StorageConfig, reader: jspb.BinaryReader): S3StorageConfig;
}

export namespace S3StorageConfig {
  export type AsObject = {
    accessKeyId: string,
    secretAccessKey: string,
    endpoint: string,
    provider: string,
    region: string,
    chunkSize: string,
  }
}

