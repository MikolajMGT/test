import * as jspb from 'google-protobuf'

import * as arranger_presets_models_pb from '../../arranger/presets/models_pb';
import * as arranger_jobs_enums_pb from '../../arranger/jobs/enums_pb';
import * as scheduler_models_pb from '../../scheduler/models_pb';


export class Job extends jspb.Message {
  getId(): string;
  setId(value: string): Job;

  getOwnerId(): string;
  setOwnerId(value: string): Job;

  getName(): string;
  setName(value: string): Job;

  getProgress(): number;
  setProgress(value: number): Job;

  getStatus(): arranger_jobs_enums_pb.Status;
  setStatus(value: arranger_jobs_enums_pb.Status): Job;

  getInputInfo(): scheduler_models_pb.InputInfo | undefined;
  setInputInfo(value?: scheduler_models_pb.InputInfo): Job;
  hasInputInfo(): boolean;
  clearInputInfo(): Job;

  getOutputInfo(): scheduler_models_pb.OutputInfo | undefined;
  setOutputInfo(value?: scheduler_models_pb.OutputInfo): Job;
  hasOutputInfo(): boolean;
  clearOutputInfo(): Job;

  getResultInfosList(): Array<scheduler_models_pb.ResultInfo>;
  setResultInfosList(value: Array<scheduler_models_pb.ResultInfo>): Job;
  clearResultInfosList(): Job;
  addResultInfos(value?: scheduler_models_pb.ResultInfo, index?: number): scheduler_models_pb.ResultInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): Job;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): Job;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Job.AsObject;
  static toObject(includeInstance: boolean, msg: Job): Job.AsObject;
  static serializeBinaryToWriter(message: Job, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Job;
  static deserializeBinaryFromReader(message: Job, reader: jspb.BinaryReader): Job;
}

export namespace Job {
  export type AsObject = {
    id: string,
    ownerId: string,
    name: string,
    progress: number,
    status: arranger_jobs_enums_pb.Status,
    inputInfo?: scheduler_models_pb.InputInfo.AsObject,
    outputInfo?: scheduler_models_pb.OutputInfo.AsObject,
    resultInfosList: Array<scheduler_models_pb.ResultInfo.AsObject>,
    createdAt: number,
    updatedAt: number,
  }
}

