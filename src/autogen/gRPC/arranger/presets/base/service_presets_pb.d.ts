import * as jspb from 'google-protobuf'

import * as arranger_presets_enums_pb from '../../../arranger/presets/enums_pb';
import * as arranger_presets_models_pb from '../../../arranger/presets/models_pb';
import * as error_models_pb from '../../../error/models_pb';
import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb';


export class GetRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRequest): GetRequest.AsObject;
  static serializeBinaryToWriter(message: GetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRequest;
  static deserializeBinaryFromReader(message: GetRequest, reader: jspb.BinaryReader): GetRequest;
}

export namespace GetRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetResponse extends jspb.Message {
  getPreset(): arranger_presets_models_pb.Preset | undefined;
  setPreset(value?: arranger_presets_models_pb.Preset): GetResponse;
  hasPreset(): boolean;
  clearPreset(): GetResponse;

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
    preset?: arranger_presets_models_pb.Preset.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListRequest;
  clearIdsList(): ListRequest;
  addIds(value: string, index?: number): ListRequest;

  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): ListRequest;
  clearNamesList(): ListRequest;
  addNames(value: string, index?: number): ListRequest;

  getCategoriesList(): Array<arranger_presets_enums_pb.Category>;
  setCategoriesList(value: Array<arranger_presets_enums_pb.Category>): ListRequest;
  clearCategoriesList(): ListRequest;
  addCategories(value: arranger_presets_enums_pb.Category, index?: number): ListRequest;

  getOffset(): number;
  setOffset(value: number): ListRequest;

  getLimit(): number;
  setLimit(value: number): ListRequest;

  getOrder(): string;
  setOrder(value: string): ListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRequest): ListRequest.AsObject;
  static serializeBinaryToWriter(message: ListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRequest;
  static deserializeBinaryFromReader(message: ListRequest, reader: jspb.BinaryReader): ListRequest;
}

export namespace ListRequest {
  export type AsObject = {
    idsList: Array<string>,
    namesList: Array<string>,
    categoriesList: Array<arranger_presets_enums_pb.Category>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListResponse extends jspb.Message {
  getPresetsList(): Array<arranger_presets_models_pb.Preset>;
  setPresetsList(value: Array<arranger_presets_models_pb.Preset>): ListResponse;
  clearPresetsList(): ListResponse;
  addPresets(value?: arranger_presets_models_pb.Preset, index?: number): arranger_presets_models_pb.Preset;

  getTotal(): number;
  setTotal(value: number): ListResponse;

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
    presetsList: Array<arranger_presets_models_pb.Preset.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountRequest;
  clearIdsList(): CountRequest;
  addIds(value: string, index?: number): CountRequest;

  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): CountRequest;
  clearNamesList(): CountRequest;
  addNames(value: string, index?: number): CountRequest;

  getCategoriesList(): Array<arranger_presets_enums_pb.Category>;
  setCategoriesList(value: Array<arranger_presets_enums_pb.Category>): CountRequest;
  clearCategoriesList(): CountRequest;
  addCategories(value: arranger_presets_enums_pb.Category, index?: number): CountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountRequest): CountRequest.AsObject;
  static serializeBinaryToWriter(message: CountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountRequest;
  static deserializeBinaryFromReader(message: CountRequest, reader: jspb.BinaryReader): CountRequest;
}

export namespace CountRequest {
  export type AsObject = {
    idsList: Array<string>,
    namesList: Array<string>,
    categoriesList: Array<arranger_presets_enums_pb.Category>,
  }
}

export class CountResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountResponse;
  hasError(): boolean;
  clearError(): CountResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountResponse): CountResponse.AsObject;
  static serializeBinaryToWriter(message: CountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountResponse;
  static deserializeBinaryFromReader(message: CountResponse, reader: jspb.BinaryReader): CountResponse;
}

export namespace CountResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateRequest;

  getNodePoolName(): string;
  setNodePoolName(value: string): CreateRequest;

  getCategory(): arranger_presets_enums_pb.Category;
  setCategory(value: arranger_presets_enums_pb.Category): CreateRequest;

  getBlueprint(): arranger_presets_models_pb.Blueprint | undefined;
  setBlueprint(value?: arranger_presets_models_pb.Blueprint): CreateRequest;
  hasBlueprint(): boolean;
  clearBlueprint(): CreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRequest;
  static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
  export type AsObject = {
    name: string,
    nodePoolName: string,
    category: arranger_presets_enums_pb.Category,
    blueprint?: arranger_presets_models_pb.Blueprint.AsObject,
  }
}

export class CreateResponse extends jspb.Message {
  getPreset(): arranger_presets_models_pb.Preset | undefined;
  setPreset(value?: arranger_presets_models_pb.Preset): CreateResponse;
  hasPreset(): boolean;
  clearPreset(): CreateResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateResponse;
  hasError(): boolean;
  clearError(): CreateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateResponse): CreateResponse.AsObject;
  static serializeBinaryToWriter(message: CreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateResponse;
  static deserializeBinaryFromReader(message: CreateResponse, reader: jspb.BinaryReader): CreateResponse;
}

export namespace CreateResponse {
  export type AsObject = {
    preset?: arranger_presets_models_pb.Preset.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class UpdateRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateRequest;

  getOverride(): boolean;
  setOverride(value: boolean): UpdateRequest;

  getName(): arranger_presets_models_pb.NameValue | undefined;
  setName(value?: arranger_presets_models_pb.NameValue): UpdateRequest;
  hasName(): boolean;
  clearName(): UpdateRequest;

  getNodePoolName(): arranger_presets_models_pb.NodePoolNameValue | undefined;
  setNodePoolName(value?: arranger_presets_models_pb.NodePoolNameValue): UpdateRequest;
  hasNodePoolName(): boolean;
  clearNodePoolName(): UpdateRequest;

  getCategory(): arranger_presets_models_pb.CategoryValue | undefined;
  setCategory(value?: arranger_presets_models_pb.CategoryValue): UpdateRequest;
  hasCategory(): boolean;
  clearCategory(): UpdateRequest;

  getBlueprint(): arranger_presets_models_pb.BlueprintValue | undefined;
  setBlueprint(value?: arranger_presets_models_pb.BlueprintValue): UpdateRequest;
  hasBlueprint(): boolean;
  clearBlueprint(): UpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRequest): UpdateRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRequest;
  static deserializeBinaryFromReader(message: UpdateRequest, reader: jspb.BinaryReader): UpdateRequest;
}

export namespace UpdateRequest {
  export type AsObject = {
    id: string,
    override: boolean,
    name?: arranger_presets_models_pb.NameValue.AsObject,
    nodePoolName?: arranger_presets_models_pb.NodePoolNameValue.AsObject,
    category?: arranger_presets_models_pb.CategoryValue.AsObject,
    blueprint?: arranger_presets_models_pb.BlueprintValue.AsObject,
  }
}

export class UpdateResponse extends jspb.Message {
  getPreset(): arranger_presets_models_pb.Preset | undefined;
  setPreset(value?: arranger_presets_models_pb.Preset): UpdateResponse;
  hasPreset(): boolean;
  clearPreset(): UpdateResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): UpdateResponse;
  hasError(): boolean;
  clearError(): UpdateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateResponse): UpdateResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateResponse;
  static deserializeBinaryFromReader(message: UpdateResponse, reader: jspb.BinaryReader): UpdateResponse;
}

export namespace UpdateResponse {
  export type AsObject = {
    preset?: arranger_presets_models_pb.Preset.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRequest): DeleteRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRequest;
  static deserializeBinaryFromReader(message: DeleteRequest, reader: jspb.BinaryReader): DeleteRequest;
}

export namespace DeleteRequest {
  export type AsObject = {
    id: string,
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

