import * as jspb from 'google-protobuf'

import * as arranger_jobs_models_pb from '../../arranger/jobs/models_pb';
import * as arranger_presets_models_pb from '../../arranger/presets/models_pb';
import * as arranger_jobs_enums_pb from '../../arranger/jobs/enums_pb';
import * as scheduler_models_pb from '../../scheduler/models_pb';
import * as error_models_pb from '../../error/models_pb';
import * as google_api_annotations_pb from '../../google/api/annotations_pb';
import * as protoc$gen$openapiv2_options_annotations_pb from '../../protoc-gen-openapiv2/options/annotations_pb';


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
  getJob(): arranger_jobs_models_pb.Job | undefined;
  setJob(value?: arranger_jobs_models_pb.Job): GetResponse;
  hasJob(): boolean;
  clearJob(): GetResponse;

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
    job?: arranger_jobs_models_pb.Job.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListRequest;
  clearIdsList(): ListRequest;
  addIds(value: string, index?: number): ListRequest;

  getOwnerIdsList(): Array<string>;
  setOwnerIdsList(value: Array<string>): ListRequest;
  clearOwnerIdsList(): ListRequest;
  addOwnerIds(value: string, index?: number): ListRequest;

  getStatusesList(): Array<arranger_jobs_enums_pb.Status>;
  setStatusesList(value: Array<arranger_jobs_enums_pb.Status>): ListRequest;
  clearStatusesList(): ListRequest;
  addStatuses(value: arranger_jobs_enums_pb.Status, index?: number): ListRequest;

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
    ownerIdsList: Array<string>,
    statusesList: Array<arranger_jobs_enums_pb.Status>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListResponse extends jspb.Message {
  getJobsList(): Array<arranger_jobs_models_pb.Job>;
  setJobsList(value: Array<arranger_jobs_models_pb.Job>): ListResponse;
  clearJobsList(): ListResponse;
  addJobs(value?: arranger_jobs_models_pb.Job, index?: number): arranger_jobs_models_pb.Job;

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
    jobsList: Array<arranger_jobs_models_pb.Job.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountRequest;
  clearIdsList(): CountRequest;
  addIds(value: string, index?: number): CountRequest;

  getOwnerIdsList(): Array<string>;
  setOwnerIdsList(value: Array<string>): CountRequest;
  clearOwnerIdsList(): CountRequest;
  addOwnerIds(value: string, index?: number): CountRequest;

  getStatusesList(): Array<arranger_jobs_enums_pb.Status>;
  setStatusesList(value: Array<arranger_jobs_enums_pb.Status>): CountRequest;
  clearStatusesList(): CountRequest;
  addStatuses(value: arranger_jobs_enums_pb.Status, index?: number): CountRequest;

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
    ownerIdsList: Array<string>,
    statusesList: Array<arranger_jobs_enums_pb.Status>,
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

  getBasePresetId(): string;
  setBasePresetId(value: string): CreateRequest;

  getNodePoolName(): string;
  setNodePoolName(value: string): CreateRequest;

  getInputInfo(): scheduler_models_pb.InputInfo | undefined;
  setInputInfo(value?: scheduler_models_pb.InputInfo): CreateRequest;
  hasInputInfo(): boolean;
  clearInputInfo(): CreateRequest;

  getOutputInfo(): scheduler_models_pb.OutputInfo | undefined;
  setOutputInfo(value?: scheduler_models_pb.OutputInfo): CreateRequest;
  hasOutputInfo(): boolean;
  clearOutputInfo(): CreateRequest;

  getOverride(): arranger_presets_models_pb.BlueprintOverride | undefined;
  setOverride(value?: arranger_presets_models_pb.BlueprintOverride): CreateRequest;
  hasOverride(): boolean;
  clearOverride(): CreateRequest;

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
    basePresetId: string,
    nodePoolName: string,
    inputInfo?: scheduler_models_pb.InputInfo.AsObject,
    outputInfo?: scheduler_models_pb.OutputInfo.AsObject,
    override?: arranger_presets_models_pb.BlueprintOverride.AsObject,
  }
}

export class CreateResponse extends jspb.Message {
  getJobsList(): Array<arranger_jobs_models_pb.Job>;
  setJobsList(value: Array<arranger_jobs_models_pb.Job>): CreateResponse;
  clearJobsList(): CreateResponse;
  addJobs(value?: arranger_jobs_models_pb.Job, index?: number): arranger_jobs_models_pb.Job;

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
    jobsList: Array<arranger_jobs_models_pb.Job.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateRequests extends jspb.Message {
  getRequestsList(): Array<CreateRequest>;
  setRequestsList(value: Array<CreateRequest>): CreateRequests;
  clearRequestsList(): CreateRequests;
  addRequests(value?: CreateRequest, index?: number): CreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRequests.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRequests): CreateRequests.AsObject;
  static serializeBinaryToWriter(message: CreateRequests, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRequests;
  static deserializeBinaryFromReader(message: CreateRequests, reader: jspb.BinaryReader): CreateRequests;
}

export namespace CreateRequests {
  export type AsObject = {
    requestsList: Array<CreateRequest.AsObject>,
  }
}

export class CancelRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CancelRequest;
  clearIdsList(): CancelRequest;
  addIds(value: string, index?: number): CancelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelRequest): CancelRequest.AsObject;
  static serializeBinaryToWriter(message: CancelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelRequest;
  static deserializeBinaryFromReader(message: CancelRequest, reader: jspb.BinaryReader): CancelRequest;
}

export namespace CancelRequest {
  export type AsObject = {
    idsList: Array<string>,
  }
}

export class CancelResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CancelResponse;
  hasError(): boolean;
  clearError(): CancelResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelResponse): CancelResponse.AsObject;
  static serializeBinaryToWriter(message: CancelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelResponse;
  static deserializeBinaryFromReader(message: CancelResponse, reader: jspb.BinaryReader): CancelResponse;
}

export namespace CancelResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): DeleteRequest;
  clearIdsList(): DeleteRequest;
  addIds(value: string, index?: number): DeleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRequest): DeleteRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRequest;
  static deserializeBinaryFromReader(message: DeleteRequest, reader: jspb.BinaryReader): DeleteRequest;
}

export namespace DeleteRequest {
  export type AsObject = {
    idsList: Array<string>,
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

