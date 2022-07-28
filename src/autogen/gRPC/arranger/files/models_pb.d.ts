import * as jspb from 'google-protobuf'



export class File extends jspb.Message {
  getOwnerId(): string;
  setOwnerId(value: string): File;

  getName(): string;
  setName(value: string): File;

  getUrl(): string;
  setUrl(value: string): File;

  getType(): string;
  setType(value: string): File;

  getSize(): number;
  setSize(value: number): File;

  getCreatedAt(): number;
  setCreatedAt(value: number): File;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): File;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): File.AsObject;
  static toObject(includeInstance: boolean, msg: File): File.AsObject;
  static serializeBinaryToWriter(message: File, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): File;
  static deserializeBinaryFromReader(message: File, reader: jspb.BinaryReader): File;
}

export namespace File {
  export type AsObject = {
    ownerId: string,
    name: string,
    url: string,
    type: string,
    size: number,
    createdAt: number,
    updatedAt: number,
  }
}

export class Part extends jspb.Message {
  getPartNumber(): number;
  setPartNumber(value: number): Part;

  getETag(): string;
  setETag(value: string): Part;

  getSize(): number;
  setSize(value: number): Part;

  getLastModified(): number;
  setLastModified(value: number): Part;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Part.AsObject;
  static toObject(includeInstance: boolean, msg: Part): Part.AsObject;
  static serializeBinaryToWriter(message: Part, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Part;
  static deserializeBinaryFromReader(message: Part, reader: jspb.BinaryReader): Part;
}

export namespace Part {
  export type AsObject = {
    partNumber: number,
    eTag: string,
    size: number,
    lastModified: number,
  }
}

