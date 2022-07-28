import * as jspb from 'google-protobuf'

import * as prober_models_pb from '../prober/models_pb';
import * as cloud_models_pb from '../cloud/models_pb';
import * as error_models_pb from '../error/models_pb';


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
  }
}

