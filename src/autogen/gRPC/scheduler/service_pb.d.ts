import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as scheduler_enums_pb from '../scheduler/enums_pb';
import * as scheduler_models_pb from '../scheduler/models_pb';
import * as error_models_pb from '../error/models_pb';
import * as cloud_models_pb from '../cloud/models_pb';


export class CreateJobResultsRequest extends jspb.Message {
  getRequestsList(): Array<CreateJobResultRequest>;
  setRequestsList(value: Array<CreateJobResultRequest>): CreateJobResultsRequest;
  clearRequestsList(): CreateJobResultsRequest;
  addRequests(value?: CreateJobResultRequest, index?: number): CreateJobResultRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateJobResultsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateJobResultsRequest): CreateJobResultsRequest.AsObject;
  static serializeBinaryToWriter(message: CreateJobResultsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateJobResultsRequest;
  static deserializeBinaryFromReader(message: CreateJobResultsRequest, reader: jspb.BinaryReader): CreateJobResultsRequest;
}

export namespace CreateJobResultsRequest {
  export type AsObject = {
    requestsList: Array<CreateJobResultRequest.AsObject>,
  }
}

export class CreateJobResultRequest extends jspb.Message {
  getJobId(): string;
  setJobId(value: string): CreateJobResultRequest;

  getResultsList(): Array<scheduler_models_pb.ResultInfo>;
  setResultsList(value: Array<scheduler_models_pb.ResultInfo>): CreateJobResultRequest;
  clearResultsList(): CreateJobResultRequest;
  addResults(value?: scheduler_models_pb.ResultInfo, index?: number): scheduler_models_pb.ResultInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateJobResultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateJobResultRequest): CreateJobResultRequest.AsObject;
  static serializeBinaryToWriter(message: CreateJobResultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateJobResultRequest;
  static deserializeBinaryFromReader(message: CreateJobResultRequest, reader: jspb.BinaryReader): CreateJobResultRequest;
}

export namespace CreateJobResultRequest {
  export type AsObject = {
    jobId: string,
    resultsList: Array<scheduler_models_pb.ResultInfo.AsObject>,
  }
}

export class CreateJobResultsResponse extends jspb.Message {
  getJobResultsList(): Array<scheduler_models_pb.JobResultInfo>;
  setJobResultsList(value: Array<scheduler_models_pb.JobResultInfo>): CreateJobResultsResponse;
  clearJobResultsList(): CreateJobResultsResponse;
  addJobResults(value?: scheduler_models_pb.JobResultInfo, index?: number): scheduler_models_pb.JobResultInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateJobResultsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateJobResultsResponse): CreateJobResultsResponse.AsObject;
  static serializeBinaryToWriter(message: CreateJobResultsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateJobResultsResponse;
  static deserializeBinaryFromReader(message: CreateJobResultsResponse, reader: jspb.BinaryReader): CreateJobResultsResponse;
}

export namespace CreateJobResultsResponse {
  export type AsObject = {
    jobResultsList: Array<scheduler_models_pb.JobResultInfo.AsObject>,
  }
}

export class GetJobResultRequest extends jspb.Message {
  getJobId(): string;
  setJobId(value: string): GetJobResultRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJobResultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetJobResultRequest): GetJobResultRequest.AsObject;
  static serializeBinaryToWriter(message: GetJobResultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJobResultRequest;
  static deserializeBinaryFromReader(message: GetJobResultRequest, reader: jspb.BinaryReader): GetJobResultRequest;
}

export namespace GetJobResultRequest {
  export type AsObject = {
    jobId: string,
  }
}

export class GetJobResultResponse extends jspb.Message {
  getJobResultInfo(): scheduler_models_pb.JobResultInfo | undefined;
  setJobResultInfo(value?: scheduler_models_pb.JobResultInfo): GetJobResultResponse;
  hasJobResultInfo(): boolean;
  clearJobResultInfo(): GetJobResultResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJobResultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetJobResultResponse): GetJobResultResponse.AsObject;
  static serializeBinaryToWriter(message: GetJobResultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJobResultResponse;
  static deserializeBinaryFromReader(message: GetJobResultResponse, reader: jspb.BinaryReader): GetJobResultResponse;
}

export namespace GetJobResultResponse {
  export type AsObject = {
    jobResultInfo?: scheduler_models_pb.JobResultInfo.AsObject,
  }
}

export class ListJobResultsRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListJobResultsRequest;
  clearIdsList(): ListJobResultsRequest;
  addIds(value: string, index?: number): ListJobResultsRequest;

  getOffset(): number;
  setOffset(value: number): ListJobResultsRequest;

  getLimit(): number;
  setLimit(value: number): ListJobResultsRequest;

  getOrder(): string;
  setOrder(value: string): ListJobResultsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListJobResultsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListJobResultsRequest): ListJobResultsRequest.AsObject;
  static serializeBinaryToWriter(message: ListJobResultsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListJobResultsRequest;
  static deserializeBinaryFromReader(message: ListJobResultsRequest, reader: jspb.BinaryReader): ListJobResultsRequest;
}

export namespace ListJobResultsRequest {
  export type AsObject = {
    idsList: Array<string>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListJobResultsResponse extends jspb.Message {
  getJobResultsList(): Array<scheduler_models_pb.JobResultInfo>;
  setJobResultsList(value: Array<scheduler_models_pb.JobResultInfo>): ListJobResultsResponse;
  clearJobResultsList(): ListJobResultsResponse;
  addJobResults(value?: scheduler_models_pb.JobResultInfo, index?: number): scheduler_models_pb.JobResultInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListJobResultsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListJobResultsResponse): ListJobResultsResponse.AsObject;
  static serializeBinaryToWriter(message: ListJobResultsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListJobResultsResponse;
  static deserializeBinaryFromReader(message: ListJobResultsResponse, reader: jspb.BinaryReader): ListJobResultsResponse;
}

export namespace ListJobResultsResponse {
  export type AsObject = {
    jobResultsList: Array<scheduler_models_pb.JobResultInfo.AsObject>,
  }
}

export class ReportJobPartCompleteRequest extends jspb.Message {
  getJobId(): string;
  setJobId(value: string): ReportJobPartCompleteRequest;

  getJobPartId(): string;
  setJobPartId(value: string): ReportJobPartCompleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportJobPartCompleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReportJobPartCompleteRequest): ReportJobPartCompleteRequest.AsObject;
  static serializeBinaryToWriter(message: ReportJobPartCompleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportJobPartCompleteRequest;
  static deserializeBinaryFromReader(message: ReportJobPartCompleteRequest, reader: jspb.BinaryReader): ReportJobPartCompleteRequest;
}

export namespace ReportJobPartCompleteRequest {
  export type AsObject = {
    jobId: string,
    jobPartId: string,
  }
}

export class GetJobPartRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetJobPartRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJobPartRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetJobPartRequest): GetJobPartRequest.AsObject;
  static serializeBinaryToWriter(message: GetJobPartRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJobPartRequest;
  static deserializeBinaryFromReader(message: GetJobPartRequest, reader: jspb.BinaryReader): GetJobPartRequest;
}

export namespace GetJobPartRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetJobPartResponse extends jspb.Message {
  getJobPartInfo(): scheduler_models_pb.JobPartInfo | undefined;
  setJobPartInfo(value?: scheduler_models_pb.JobPartInfo): GetJobPartResponse;
  hasJobPartInfo(): boolean;
  clearJobPartInfo(): GetJobPartResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJobPartResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetJobPartResponse): GetJobPartResponse.AsObject;
  static serializeBinaryToWriter(message: GetJobPartResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJobPartResponse;
  static deserializeBinaryFromReader(message: GetJobPartResponse, reader: jspb.BinaryReader): GetJobPartResponse;
}

export namespace GetJobPartResponse {
  export type AsObject = {
    jobPartInfo?: scheduler_models_pb.JobPartInfo.AsObject,
  }
}

export class GetJobRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetJobRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetJobRequest): GetJobRequest.AsObject;
  static serializeBinaryToWriter(message: GetJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJobRequest;
  static deserializeBinaryFromReader(message: GetJobRequest, reader: jspb.BinaryReader): GetJobRequest;
}

export namespace GetJobRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetJobResponse extends jspb.Message {
  getJobInfo(): scheduler_models_pb.JobInfo | undefined;
  setJobInfo(value?: scheduler_models_pb.JobInfo): GetJobResponse;
  hasJobInfo(): boolean;
  clearJobInfo(): GetJobResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetJobResponse): GetJobResponse.AsObject;
  static serializeBinaryToWriter(message: GetJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJobResponse;
  static deserializeBinaryFromReader(message: GetJobResponse, reader: jspb.BinaryReader): GetJobResponse;
}

export namespace GetJobResponse {
  export type AsObject = {
    jobInfo?: scheduler_models_pb.JobInfo.AsObject,
  }
}

export class ListJobPartsRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListJobPartsRequest;
  clearIdsList(): ListJobPartsRequest;
  addIds(value: string, index?: number): ListJobPartsRequest;

  getJobId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setJobId(value?: google_protobuf_wrappers_pb.StringValue): ListJobPartsRequest;
  hasJobId(): boolean;
  clearJobId(): ListJobPartsRequest;

  getOffset(): number;
  setOffset(value: number): ListJobPartsRequest;

  getLimit(): number;
  setLimit(value: number): ListJobPartsRequest;

  getOrder(): string;
  setOrder(value: string): ListJobPartsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListJobPartsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListJobPartsRequest): ListJobPartsRequest.AsObject;
  static serializeBinaryToWriter(message: ListJobPartsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListJobPartsRequest;
  static deserializeBinaryFromReader(message: ListJobPartsRequest, reader: jspb.BinaryReader): ListJobPartsRequest;
}

export namespace ListJobPartsRequest {
  export type AsObject = {
    idsList: Array<string>,
    jobId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListJobPartsResponse extends jspb.Message {
  getJobpartsList(): Array<scheduler_models_pb.JobPartInfo>;
  setJobpartsList(value: Array<scheduler_models_pb.JobPartInfo>): ListJobPartsResponse;
  clearJobpartsList(): ListJobPartsResponse;
  addJobparts(value?: scheduler_models_pb.JobPartInfo, index?: number): scheduler_models_pb.JobPartInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListJobPartsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListJobPartsResponse): ListJobPartsResponse.AsObject;
  static serializeBinaryToWriter(message: ListJobPartsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListJobPartsResponse;
  static deserializeBinaryFromReader(message: ListJobPartsResponse, reader: jspb.BinaryReader): ListJobPartsResponse;
}

export namespace ListJobPartsResponse {
  export type AsObject = {
    jobpartsList: Array<scheduler_models_pb.JobPartInfo.AsObject>,
  }
}

export class UpdateJobRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateJobRequest;

  getStatus(): scheduler_enums_pb.JobStatusValue | undefined;
  setStatus(value?: scheduler_enums_pb.JobStatusValue): UpdateJobRequest;
  hasStatus(): boolean;
  clearStatus(): UpdateJobRequest;

  getProgress(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setProgress(value?: google_protobuf_wrappers_pb.FloatValue): UpdateJobRequest;
  hasProgress(): boolean;
  clearProgress(): UpdateJobRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateJobRequest): UpdateJobRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateJobRequest;
  static deserializeBinaryFromReader(message: UpdateJobRequest, reader: jspb.BinaryReader): UpdateJobRequest;
}

export namespace UpdateJobRequest {
  export type AsObject = {
    id: string,
    status?: scheduler_enums_pb.JobStatusValue.AsObject,
    progress?: google_protobuf_wrappers_pb.FloatValue.AsObject,
  }
}

export class CreateJobPartRequest extends jspb.Message {
  getJobId(): string;
  setJobId(value: string): CreateJobPartRequest;

  getStartPts(): number;
  setStartPts(value: number): CreateJobPartRequest;

  getEndPts(): number;
  setEndPts(value: number): CreateJobPartRequest;

  getEndDts(): number;
  setEndDts(value: number): CreateJobPartRequest;

  getPresetOutputName(): string;
  setPresetOutputName(value: string): CreateJobPartRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateJobPartRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateJobPartRequest): CreateJobPartRequest.AsObject;
  static serializeBinaryToWriter(message: CreateJobPartRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateJobPartRequest;
  static deserializeBinaryFromReader(message: CreateJobPartRequest, reader: jspb.BinaryReader): CreateJobPartRequest;
}

export namespace CreateJobPartRequest {
  export type AsObject = {
    jobId: string,
    startPts: number,
    endPts: number,
    endDts: number,
    presetOutputName: string,
  }
}

export class CreateJobPartsRequest extends jspb.Message {
  getRequestsList(): Array<CreateJobPartRequest>;
  setRequestsList(value: Array<CreateJobPartRequest>): CreateJobPartsRequest;
  clearRequestsList(): CreateJobPartsRequest;
  addRequests(value?: CreateJobPartRequest, index?: number): CreateJobPartRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateJobPartsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateJobPartsRequest): CreateJobPartsRequest.AsObject;
  static serializeBinaryToWriter(message: CreateJobPartsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateJobPartsRequest;
  static deserializeBinaryFromReader(message: CreateJobPartsRequest, reader: jspb.BinaryReader): CreateJobPartsRequest;
}

export namespace CreateJobPartsRequest {
  export type AsObject = {
    requestsList: Array<CreateJobPartRequest.AsObject>,
  }
}

export class CreateJobPartsResponse extends jspb.Message {
  getJobPartsList(): Array<scheduler_models_pb.JobPartInfo>;
  setJobPartsList(value: Array<scheduler_models_pb.JobPartInfo>): CreateJobPartsResponse;
  clearJobPartsList(): CreateJobPartsResponse;
  addJobParts(value?: scheduler_models_pb.JobPartInfo, index?: number): scheduler_models_pb.JobPartInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateJobPartsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateJobPartsResponse): CreateJobPartsResponse.AsObject;
  static serializeBinaryToWriter(message: CreateJobPartsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateJobPartsResponse;
  static deserializeBinaryFromReader(message: CreateJobPartsResponse, reader: jspb.BinaryReader): CreateJobPartsResponse;
}

export namespace CreateJobPartsResponse {
  export type AsObject = {
    jobPartsList: Array<scheduler_models_pb.JobPartInfo.AsObject>,
  }
}

export class UpdateJobPartRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateJobPartRequest;

  getStatus(): scheduler_enums_pb.JobPartStatusValue | undefined;
  setStatus(value?: scheduler_enums_pb.JobPartStatusValue): UpdateJobPartRequest;
  hasStatus(): boolean;
  clearStatus(): UpdateJobPartRequest;

  getProgress(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setProgress(value?: google_protobuf_wrappers_pb.FloatValue): UpdateJobPartRequest;
  hasProgress(): boolean;
  clearProgress(): UpdateJobPartRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateJobPartRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateJobPartRequest): UpdateJobPartRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateJobPartRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateJobPartRequest;
  static deserializeBinaryFromReader(message: UpdateJobPartRequest, reader: jspb.BinaryReader): UpdateJobPartRequest;
}

export namespace UpdateJobPartRequest {
  export type AsObject = {
    id: string,
    status?: scheduler_enums_pb.JobPartStatusValue.AsObject,
    progress?: google_protobuf_wrappers_pb.FloatValue.AsObject,
  }
}

export class ListJobsRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListJobsRequest;
  clearIdsList(): ListJobsRequest;
  addIds(value: string, index?: number): ListJobsRequest;

  getStatusesList(): Array<scheduler_enums_pb.JobStatus>;
  setStatusesList(value: Array<scheduler_enums_pb.JobStatus>): ListJobsRequest;
  clearStatusesList(): ListJobsRequest;
  addStatuses(value: scheduler_enums_pb.JobStatus, index?: number): ListJobsRequest;

  getOffset(): number;
  setOffset(value: number): ListJobsRequest;

  getLimit(): number;
  setLimit(value: number): ListJobsRequest;

  getOrder(): string;
  setOrder(value: string): ListJobsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListJobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListJobsRequest): ListJobsRequest.AsObject;
  static serializeBinaryToWriter(message: ListJobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListJobsRequest;
  static deserializeBinaryFromReader(message: ListJobsRequest, reader: jspb.BinaryReader): ListJobsRequest;
}

export namespace ListJobsRequest {
  export type AsObject = {
    idsList: Array<string>,
    statusesList: Array<scheduler_enums_pb.JobStatus>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListJobsResponse extends jspb.Message {
  getJobsList(): Array<scheduler_models_pb.JobInfo>;
  setJobsList(value: Array<scheduler_models_pb.JobInfo>): ListJobsResponse;
  clearJobsList(): ListJobsResponse;
  addJobs(value?: scheduler_models_pb.JobInfo, index?: number): scheduler_models_pb.JobInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListJobsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListJobsResponse): ListJobsResponse.AsObject;
  static serializeBinaryToWriter(message: ListJobsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListJobsResponse;
  static deserializeBinaryFromReader(message: ListJobsResponse, reader: jspb.BinaryReader): ListJobsResponse;
}

export namespace ListJobsResponse {
  export type AsObject = {
    jobsList: Array<scheduler_models_pb.JobInfo.AsObject>,
  }
}

export class CreateJobsRequest extends jspb.Message {
  getRequestsList(): Array<CreateJobRequest>;
  setRequestsList(value: Array<CreateJobRequest>): CreateJobsRequest;
  clearRequestsList(): CreateJobsRequest;
  addRequests(value?: CreateJobRequest, index?: number): CreateJobRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateJobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateJobsRequest): CreateJobsRequest.AsObject;
  static serializeBinaryToWriter(message: CreateJobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateJobsRequest;
  static deserializeBinaryFromReader(message: CreateJobsRequest, reader: jspb.BinaryReader): CreateJobsRequest;
}

export namespace CreateJobsRequest {
  export type AsObject = {
    requestsList: Array<CreateJobRequest.AsObject>,
  }
}

export class CreateJobRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateJobRequest;

  getInputInfo(): scheduler_models_pb.InputInfo | undefined;
  setInputInfo(value?: scheduler_models_pb.InputInfo): CreateJobRequest;
  hasInputInfo(): boolean;
  clearInputInfo(): CreateJobRequest;

  getOutputInfo(): scheduler_models_pb.OutputInfo | undefined;
  setOutputInfo(value?: scheduler_models_pb.OutputInfo): CreateJobRequest;
  hasOutputInfo(): boolean;
  clearOutputInfo(): CreateJobRequest;

  getPreset(): scheduler_models_pb.Preset | undefined;
  setPreset(value?: scheduler_models_pb.Preset): CreateJobRequest;
  hasPreset(): boolean;
  clearPreset(): CreateJobRequest;

  getNodePoolName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setNodePoolName(value?: google_protobuf_wrappers_pb.StringValue): CreateJobRequest;
  hasNodePoolName(): boolean;
  clearNodePoolName(): CreateJobRequest;

  getMaxPartDurInSeconds(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setMaxPartDurInSeconds(value?: google_protobuf_wrappers_pb.Int64Value): CreateJobRequest;
  hasMaxPartDurInSeconds(): boolean;
  clearMaxPartDurInSeconds(): CreateJobRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateJobRequest): CreateJobRequest.AsObject;
  static serializeBinaryToWriter(message: CreateJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateJobRequest;
  static deserializeBinaryFromReader(message: CreateJobRequest, reader: jspb.BinaryReader): CreateJobRequest;
}

export namespace CreateJobRequest {
  export type AsObject = {
    name: string,
    inputInfo?: scheduler_models_pb.InputInfo.AsObject,
    outputInfo?: scheduler_models_pb.OutputInfo.AsObject,
    preset?: scheduler_models_pb.Preset.AsObject,
    nodePoolName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    maxPartDurInSeconds?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class CreateJobsResponse extends jspb.Message {
  getJobsList(): Array<scheduler_models_pb.JobInfo>;
  setJobsList(value: Array<scheduler_models_pb.JobInfo>): CreateJobsResponse;
  clearJobsList(): CreateJobsResponse;
  addJobs(value?: scheduler_models_pb.JobInfo, index?: number): scheduler_models_pb.JobInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateJobsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateJobsResponse): CreateJobsResponse.AsObject;
  static serializeBinaryToWriter(message: CreateJobsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateJobsResponse;
  static deserializeBinaryFromReader(message: CreateJobsResponse, reader: jspb.BinaryReader): CreateJobsResponse;
}

export namespace CreateJobsResponse {
  export type AsObject = {
    jobsList: Array<scheduler_models_pb.JobInfo.AsObject>,
  }
}

export class CancelJobsRequest extends jspb.Message {
  getJobIdList(): Array<string>;
  setJobIdList(value: Array<string>): CancelJobsRequest;
  clearJobIdList(): CancelJobsRequest;
  addJobId(value: string, index?: number): CancelJobsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelJobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelJobsRequest): CancelJobsRequest.AsObject;
  static serializeBinaryToWriter(message: CancelJobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelJobsRequest;
  static deserializeBinaryFromReader(message: CancelJobsRequest, reader: jspb.BinaryReader): CancelJobsRequest;
}

export namespace CancelJobsRequest {
  export type AsObject = {
    jobIdList: Array<string>,
  }
}

export class CancelJobsResponse extends jspb.Message {
  getJobsList(): Array<scheduler_models_pb.JobInfo>;
  setJobsList(value: Array<scheduler_models_pb.JobInfo>): CancelJobsResponse;
  clearJobsList(): CancelJobsResponse;
  addJobs(value?: scheduler_models_pb.JobInfo, index?: number): scheduler_models_pb.JobInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelJobsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelJobsResponse): CancelJobsResponse.AsObject;
  static serializeBinaryToWriter(message: CancelJobsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelJobsResponse;
  static deserializeBinaryFromReader(message: CancelJobsResponse, reader: jspb.BinaryReader): CancelJobsResponse;
}

export namespace CancelJobsResponse {
  export type AsObject = {
    jobsList: Array<scheduler_models_pb.JobInfo.AsObject>,
  }
}

