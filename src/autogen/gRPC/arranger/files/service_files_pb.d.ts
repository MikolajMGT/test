import * as jspb from 'google-protobuf'

import * as arranger_files_models_pb from '../../arranger/files/models_pb';
import * as prober_models_pb from '../../prober/models_pb';
import * as error_models_pb from '../../error/models_pb';
import * as google_api_annotations_pb from '../../google/api/annotations_pb';
import * as protoc$gen$openapiv2_options_annotations_pb from '../../protoc-gen-openapiv2/options/annotations_pb';


export class GetRequest extends jspb.Message {
  getOwnerId(): string;
  setOwnerId(value: string): GetRequest;

  getName(): string;
  setName(value: string): GetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRequest): GetRequest.AsObject;
  static serializeBinaryToWriter(message: GetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRequest;
  static deserializeBinaryFromReader(message: GetRequest, reader: jspb.BinaryReader): GetRequest;
}

export namespace GetRequest {
  export type AsObject = {
    ownerId: string,
    name: string,
  }
}

export class GetResponse extends jspb.Message {
  getFile(): arranger_files_models_pb.File | undefined;
  setFile(value?: arranger_files_models_pb.File): GetResponse;
  hasFile(): boolean;
  clearFile(): GetResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetResponse;
  hasError(): boolean;
  clearError(): GetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetResponse): GetResponse.AsObject;
  static serializeBinaryToWriter(message: GetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResponse;
  static deserializeBinaryFromReader(message: GetResponse, reader: jspb.BinaryReader): GetResponse;
}

export namespace GetResponse {
  export type AsObject = {
    file?: arranger_files_models_pb.File.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListRequest extends jspb.Message {
  getOwnerId(): string;
  setOwnerId(value: string): ListRequest;

  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): ListRequest;
  clearNamesList(): ListRequest;
  addNames(value: string, index?: number): ListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRequest): ListRequest.AsObject;
  static serializeBinaryToWriter(message: ListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRequest;
  static deserializeBinaryFromReader(message: ListRequest, reader: jspb.BinaryReader): ListRequest;
}

export namespace ListRequest {
  export type AsObject = {
    ownerId: string,
    namesList: Array<string>,
  }
}

export class ListResponse extends jspb.Message {
  getFilesList(): Array<arranger_files_models_pb.File>;
  setFilesList(value: Array<arranger_files_models_pb.File>): ListResponse;
  clearFilesList(): ListResponse;
  addFiles(value?: arranger_files_models_pb.File, index?: number): arranger_files_models_pb.File;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListResponse;
  hasError(): boolean;
  clearError(): ListResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResponse): ListResponse.AsObject;
  static serializeBinaryToWriter(message: ListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResponse;
  static deserializeBinaryFromReader(message: ListResponse, reader: jspb.BinaryReader): ListResponse;
}

export namespace ListResponse {
  export type AsObject = {
    filesList: Array<arranger_files_models_pb.File.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteRequest extends jspb.Message {
  getOwnerId(): string;
  setOwnerId(value: string): DeleteRequest;

  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): DeleteRequest;
  clearNamesList(): DeleteRequest;
  addNames(value: string, index?: number): DeleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRequest): DeleteRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRequest;
  static deserializeBinaryFromReader(message: DeleteRequest, reader: jspb.BinaryReader): DeleteRequest;
}

export namespace DeleteRequest {
  export type AsObject = {
    ownerId: string,
    namesList: Array<string>,
  }
}

export class DeleteResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteResponse;
  hasError(): boolean;
  clearError(): DeleteResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteResponse): DeleteResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteResponse;
  static deserializeBinaryFromReader(message: DeleteResponse, reader: jspb.BinaryReader): DeleteResponse;
}

export namespace DeleteResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class InitUploadRequest extends jspb.Message {
  getName(): string;
  setName(value: string): InitUploadRequest;

  getType(): string;
  setType(value: string): InitUploadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitUploadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InitUploadRequest): InitUploadRequest.AsObject;
  static serializeBinaryToWriter(message: InitUploadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitUploadRequest;
  static deserializeBinaryFromReader(message: InitUploadRequest, reader: jspb.BinaryReader): InitUploadRequest;
}

export namespace InitUploadRequest {
  export type AsObject = {
    name: string,
    type: string,
  }
}

export class InitUploadResponse extends jspb.Message {
  getUploadId(): string;
  setUploadId(value: string): InitUploadResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): InitUploadResponse;
  hasError(): boolean;
  clearError(): InitUploadResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitUploadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InitUploadResponse): InitUploadResponse.AsObject;
  static serializeBinaryToWriter(message: InitUploadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitUploadResponse;
  static deserializeBinaryFromReader(message: InitUploadResponse, reader: jspb.BinaryReader): InitUploadResponse;
}

export namespace InitUploadResponse {
  export type AsObject = {
    uploadId: string,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListUploadPartsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ListUploadPartsRequest;

  getUploadId(): string;
  setUploadId(value: string): ListUploadPartsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUploadPartsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUploadPartsRequest): ListUploadPartsRequest.AsObject;
  static serializeBinaryToWriter(message: ListUploadPartsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUploadPartsRequest;
  static deserializeBinaryFromReader(message: ListUploadPartsRequest, reader: jspb.BinaryReader): ListUploadPartsRequest;
}

export namespace ListUploadPartsRequest {
  export type AsObject = {
    name: string,
    uploadId: string,
  }
}

export class ListUploadPartsResponse extends jspb.Message {
  getPartsList(): Array<arranger_files_models_pb.Part>;
  setPartsList(value: Array<arranger_files_models_pb.Part>): ListUploadPartsResponse;
  clearPartsList(): ListUploadPartsResponse;
  addParts(value?: arranger_files_models_pb.Part, index?: number): arranger_files_models_pb.Part;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListUploadPartsResponse;
  hasError(): boolean;
  clearError(): ListUploadPartsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUploadPartsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUploadPartsResponse): ListUploadPartsResponse.AsObject;
  static serializeBinaryToWriter(message: ListUploadPartsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUploadPartsResponse;
  static deserializeBinaryFromReader(message: ListUploadPartsResponse, reader: jspb.BinaryReader): ListUploadPartsResponse;
}

export namespace ListUploadPartsResponse {
  export type AsObject = {
    partsList: Array<arranger_files_models_pb.Part.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ArrangeUploadPartRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ArrangeUploadPartRequest;

  getHash(): string;
  setHash(value: string): ArrangeUploadPartRequest;

  getUploadId(): string;
  setUploadId(value: string): ArrangeUploadPartRequest;

  getPartNumber(): number;
  setPartNumber(value: number): ArrangeUploadPartRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrangeUploadPartRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ArrangeUploadPartRequest): ArrangeUploadPartRequest.AsObject;
  static serializeBinaryToWriter(message: ArrangeUploadPartRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrangeUploadPartRequest;
  static deserializeBinaryFromReader(message: ArrangeUploadPartRequest, reader: jspb.BinaryReader): ArrangeUploadPartRequest;
}

export namespace ArrangeUploadPartRequest {
  export type AsObject = {
    name: string,
    hash: string,
    uploadId: string,
    partNumber: number,
  }
}

export class ArrangeUploadPartResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): ArrangeUploadPartResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ArrangeUploadPartResponse;
  hasError(): boolean;
  clearError(): ArrangeUploadPartResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrangeUploadPartResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ArrangeUploadPartResponse): ArrangeUploadPartResponse.AsObject;
  static serializeBinaryToWriter(message: ArrangeUploadPartResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrangeUploadPartResponse;
  static deserializeBinaryFromReader(message: ArrangeUploadPartResponse, reader: jspb.BinaryReader): ArrangeUploadPartResponse;
}

export namespace ArrangeUploadPartResponse {
  export type AsObject = {
    token: string,
    error?: error_models_pb.Error.AsObject,
  }
}

export class FinalizeUploadRequest extends jspb.Message {
  getName(): string;
  setName(value: string): FinalizeUploadRequest;

  getUploadId(): string;
  setUploadId(value: string): FinalizeUploadRequest;

  getPartsMap(): jspb.Map<number, string>;
  clearPartsMap(): FinalizeUploadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinalizeUploadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FinalizeUploadRequest): FinalizeUploadRequest.AsObject;
  static serializeBinaryToWriter(message: FinalizeUploadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinalizeUploadRequest;
  static deserializeBinaryFromReader(message: FinalizeUploadRequest, reader: jspb.BinaryReader): FinalizeUploadRequest;
}

export namespace FinalizeUploadRequest {
  export type AsObject = {
    name: string,
    uploadId: string,
    partsMap: Array<[number, string]>,
  }
}

export class FinalizeUploadResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): FinalizeUploadResponse;
  hasError(): boolean;
  clearError(): FinalizeUploadResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinalizeUploadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FinalizeUploadResponse): FinalizeUploadResponse.AsObject;
  static serializeBinaryToWriter(message: FinalizeUploadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinalizeUploadResponse;
  static deserializeBinaryFromReader(message: FinalizeUploadResponse, reader: jspb.BinaryReader): FinalizeUploadResponse;
}

export namespace FinalizeUploadResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class CancelUploadRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CancelUploadRequest;

  getUploadId(): string;
  setUploadId(value: string): CancelUploadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelUploadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelUploadRequest): CancelUploadRequest.AsObject;
  static serializeBinaryToWriter(message: CancelUploadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelUploadRequest;
  static deserializeBinaryFromReader(message: CancelUploadRequest, reader: jspb.BinaryReader): CancelUploadRequest;
}

export namespace CancelUploadRequest {
  export type AsObject = {
    name: string,
    uploadId: string,
  }
}

export class CancelUploadResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CancelUploadResponse;
  hasError(): boolean;
  clearError(): CancelUploadResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelUploadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelUploadResponse): CancelUploadResponse.AsObject;
  static serializeBinaryToWriter(message: CancelUploadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelUploadResponse;
  static deserializeBinaryFromReader(message: CancelUploadResponse, reader: jspb.BinaryReader): CancelUploadResponse;
}

export namespace CancelUploadResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class ProbeRequest extends jspb.Message {
  getInputInfo(): prober_models_pb.InputInfo | undefined;
  setInputInfo(value?: prober_models_pb.InputInfo): ProbeRequest;
  hasInputInfo(): boolean;
  clearInputInfo(): ProbeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProbeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProbeRequest): ProbeRequest.AsObject;
  static serializeBinaryToWriter(message: ProbeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProbeRequest;
  static deserializeBinaryFromReader(message: ProbeRequest, reader: jspb.BinaryReader): ProbeRequest;
}

export namespace ProbeRequest {
  export type AsObject = {
    inputInfo?: prober_models_pb.InputInfo.AsObject,
  }
}

export class ProbeResponse extends jspb.Message {
  getFileInfo(): prober_models_pb.FileInfo | undefined;
  setFileInfo(value?: prober_models_pb.FileInfo): ProbeResponse;
  hasFileInfo(): boolean;
  clearFileInfo(): ProbeResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ProbeResponse;
  hasError(): boolean;
  clearError(): ProbeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProbeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProbeResponse): ProbeResponse.AsObject;
  static serializeBinaryToWriter(message: ProbeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProbeResponse;
  static deserializeBinaryFromReader(message: ProbeResponse, reader: jspb.BinaryReader): ProbeResponse;
}

export namespace ProbeResponse {
  export type AsObject = {
    fileInfo?: prober_models_pb.FileInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

