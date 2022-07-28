import * as jspb from 'google-protobuf'

import * as scheduler_enums_pb from '../scheduler/enums_pb';
import * as cloud_models_pb from '../cloud/models_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class FileOutput extends jspb.Message {
  getName(): string;
  setName(value: string): FileOutput;

  getFileName(): string;
  setFileName(value: string): FileOutput;

  getSettingsMap(): jspb.Map<string, string>;
  clearSettingsMap(): FileOutput;

  getVideoAudioMapList(): Array<VideoAudioStreamMapping>;
  setVideoAudioMapList(value: Array<VideoAudioStreamMapping>): FileOutput;
  clearVideoAudioMapList(): FileOutput;
  addVideoAudioMap(value?: VideoAudioStreamMapping, index?: number): VideoAudioStreamMapping;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileOutput.AsObject;
  static toObject(includeInstance: boolean, msg: FileOutput): FileOutput.AsObject;
  static serializeBinaryToWriter(message: FileOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileOutput;
  static deserializeBinaryFromReader(message: FileOutput, reader: jspb.BinaryReader): FileOutput;
}

export namespace FileOutput {
  export type AsObject = {
    name: string,
    fileName: string,
    settingsMap: Array<[string, string]>,
    videoAudioMapList: Array<VideoAudioStreamMapping.AsObject>,
  }
}

export class VideoAudioStreamMapping extends jspb.Message {
  getVideo(): string;
  setVideo(value: string): VideoAudioStreamMapping;

  getAudio(): string;
  setAudio(value: string): VideoAudioStreamMapping;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoAudioStreamMapping.AsObject;
  static toObject(includeInstance: boolean, msg: VideoAudioStreamMapping): VideoAudioStreamMapping.AsObject;
  static serializeBinaryToWriter(message: VideoAudioStreamMapping, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoAudioStreamMapping;
  static deserializeBinaryFromReader(message: VideoAudioStreamMapping, reader: jspb.BinaryReader): VideoAudioStreamMapping;
}

export namespace VideoAudioStreamMapping {
  export type AsObject = {
    video: string,
    audio: string,
  }
}

export class Rational extends jspb.Message {
  getNum(): number;
  setNum(value: number): Rational;

  getDen(): number;
  setDen(value: number): Rational;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Rational.AsObject;
  static toObject(includeInstance: boolean, msg: Rational): Rational.AsObject;
  static serializeBinaryToWriter(message: Rational, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Rational;
  static deserializeBinaryFromReader(message: Rational, reader: jspb.BinaryReader): Rational;
}

export namespace Rational {
  export type AsObject = {
    num: number,
    den: number,
  }
}

export class Preset extends jspb.Message {
  getName(): string;
  setName(value: string): Preset;

  getVideoOutputsList(): Array<PresetVideoOutput>;
  setVideoOutputsList(value: Array<PresetVideoOutput>): Preset;
  clearVideoOutputsList(): Preset;
  addVideoOutputs(value?: PresetVideoOutput, index?: number): PresetVideoOutput;

  getAudioOutputsList(): Array<PresetAudioOutput>;
  setAudioOutputsList(value: Array<PresetAudioOutput>): Preset;
  clearAudioOutputsList(): Preset;
  addAudioOutputs(value?: PresetAudioOutput, index?: number): PresetAudioOutput;

  getFileOutputsList(): Array<FileOutput>;
  setFileOutputsList(value: Array<FileOutput>): Preset;
  clearFileOutputsList(): Preset;
  addFileOutputs(value?: FileOutput, index?: number): FileOutput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Preset.AsObject;
  static toObject(includeInstance: boolean, msg: Preset): Preset.AsObject;
  static serializeBinaryToWriter(message: Preset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Preset;
  static deserializeBinaryFromReader(message: Preset, reader: jspb.BinaryReader): Preset;
}

export namespace Preset {
  export type AsObject = {
    name: string,
    videoOutputsList: Array<PresetVideoOutput.AsObject>,
    audioOutputsList: Array<PresetAudioOutput.AsObject>,
    fileOutputsList: Array<FileOutput.AsObject>,
  }
}

export class Resources extends jspb.Message {
  getRequestsCpu(): number;
  setRequestsCpu(value: number): Resources;

  getRequestsGpu(): number;
  setRequestsGpu(value: number): Resources;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Resources.AsObject;
  static toObject(includeInstance: boolean, msg: Resources): Resources.AsObject;
  static serializeBinaryToWriter(message: Resources, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Resources;
  static deserializeBinaryFromReader(message: Resources, reader: jspb.BinaryReader): Resources;
}

export namespace Resources {
  export type AsObject = {
    requestsCpu: number,
    requestsGpu: number,
  }
}

export class PresetVideoOutput extends jspb.Message {
  getName(): string;
  setName(value: string): PresetVideoOutput;

  getEncoderName(): string;
  setEncoderName(value: string): PresetVideoOutput;

  getMaxGop(): number;
  setMaxGop(value: number): PresetVideoOutput;

  getWidth(): number;
  setWidth(value: number): PresetVideoOutput;

  getHeight(): number;
  setHeight(value: number): PresetVideoOutput;

  getBitrate(): number;
  setBitrate(value: number): PresetVideoOutput;

  getRefs(): number;
  setRefs(value: number): PresetVideoOutput;

  getPixelFormat(): scheduler_enums_pb.PixelFormat;
  setPixelFormat(value: scheduler_enums_pb.PixelFormat): PresetVideoOutput;

  getFrameRate(): Rational | undefined;
  setFrameRate(value?: Rational): PresetVideoOutput;
  hasFrameRate(): boolean;
  clearFrameRate(): PresetVideoOutput;

  getTimeBase(): Rational | undefined;
  setTimeBase(value?: Rational): PresetVideoOutput;
  hasTimeBase(): boolean;
  clearTimeBase(): PresetVideoOutput;

  getFilter(): string;
  setFilter(value: string): PresetVideoOutput;

  getLevel(): number;
  setLevel(value: number): PresetVideoOutput;

  getColorSpace(): scheduler_enums_pb.ColorSpace;
  setColorSpace(value: scheduler_enums_pb.ColorSpace): PresetVideoOutput;

  getPassMode(): scheduler_enums_pb.PassMode;
  setPassMode(value: scheduler_enums_pb.PassMode): PresetVideoOutput;

  getRcMaxBitrate(): number;
  setRcMaxBitrate(value: number): PresetVideoOutput;

  getRcMinBitrate(): number;
  setRcMinBitrate(value: number): PresetVideoOutput;

  getResources(): Resources | undefined;
  setResources(value?: Resources): PresetVideoOutput;
  hasResources(): boolean;
  clearResources(): PresetVideoOutput;

  getBufSize(): number;
  setBufSize(value: number): PresetVideoOutput;

  getMaxBFrames(): number;
  setMaxBFrames(value: number): PresetVideoOutput;

  getKeyIntMin(): number;
  setKeyIntMin(value: number): PresetVideoOutput;

  getPrivDataMap(): jspb.Map<string, string>;
  clearPrivDataMap(): PresetVideoOutput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PresetVideoOutput.AsObject;
  static toObject(includeInstance: boolean, msg: PresetVideoOutput): PresetVideoOutput.AsObject;
  static serializeBinaryToWriter(message: PresetVideoOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PresetVideoOutput;
  static deserializeBinaryFromReader(message: PresetVideoOutput, reader: jspb.BinaryReader): PresetVideoOutput;
}

export namespace PresetVideoOutput {
  export type AsObject = {
    name: string,
    encoderName: string,
    maxGop: number,
    width: number,
    height: number,
    bitrate: number,
    refs: number,
    pixelFormat: scheduler_enums_pb.PixelFormat,
    frameRate?: Rational.AsObject,
    timeBase?: Rational.AsObject,
    filter: string,
    level: number,
    colorSpace: scheduler_enums_pb.ColorSpace,
    passMode: scheduler_enums_pb.PassMode,
    rcMaxBitrate: number,
    rcMinBitrate: number,
    resources?: Resources.AsObject,
    bufSize: number,
    maxBFrames: number,
    keyIntMin: number,
    privDataMap: Array<[string, string]>,
  }
}

export class PresetAudioOutput extends jspb.Message {
  getName(): string;
  setName(value: string): PresetAudioOutput;

  getEncoderName(): string;
  setEncoderName(value: string): PresetAudioOutput;

  getBitrate(): number;
  setBitrate(value: number): PresetAudioOutput;

  getChannelLayout(): scheduler_enums_pb.ChannelLayout;
  setChannelLayout(value: scheduler_enums_pb.ChannelLayout): PresetAudioOutput;

  getSampleFormat(): scheduler_enums_pb.SampleFormat;
  setSampleFormat(value: scheduler_enums_pb.SampleFormat): PresetAudioOutput;

  getChannels(): number;
  setChannels(value: number): PresetAudioOutput;

  getSampleRate(): number;
  setSampleRate(value: number): PresetAudioOutput;

  getTimeBase(): Rational | undefined;
  setTimeBase(value?: Rational): PresetAudioOutput;
  hasTimeBase(): boolean;
  clearTimeBase(): PresetAudioOutput;

  getPrivDataMap(): jspb.Map<string, string>;
  clearPrivDataMap(): PresetAudioOutput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PresetAudioOutput.AsObject;
  static toObject(includeInstance: boolean, msg: PresetAudioOutput): PresetAudioOutput.AsObject;
  static serializeBinaryToWriter(message: PresetAudioOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PresetAudioOutput;
  static deserializeBinaryFromReader(message: PresetAudioOutput, reader: jspb.BinaryReader): PresetAudioOutput;
}

export namespace PresetAudioOutput {
  export type AsObject = {
    name: string,
    encoderName: string,
    bitrate: number,
    channelLayout: scheduler_enums_pb.ChannelLayout,
    sampleFormat: scheduler_enums_pb.SampleFormat,
    channels: number,
    sampleRate: number,
    timeBase?: Rational.AsObject,
    privDataMap: Array<[string, string]>,
  }
}

export class JobInfo extends jspb.Message {
  getId(): string;
  setId(value: string): JobInfo;

  getStatus(): scheduler_enums_pb.JobStatus;
  setStatus(value: scheduler_enums_pb.JobStatus): JobInfo;

  getInputInfo(): InputInfo | undefined;
  setInputInfo(value?: InputInfo): JobInfo;
  hasInputInfo(): boolean;
  clearInputInfo(): JobInfo;

  getPreset(): Preset | undefined;
  setPreset(value?: Preset): JobInfo;
  hasPreset(): boolean;
  clearPreset(): JobInfo;

  getOutputInfo(): OutputInfo | undefined;
  setOutputInfo(value?: OutputInfo): JobInfo;
  hasOutputInfo(): boolean;
  clearOutputInfo(): JobInfo;

  getProgress(): number;
  setProgress(value: number): JobInfo;

  getMaxPartDurationInSeconds(): number;
  setMaxPartDurationInSeconds(value: number): JobInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): JobInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): JobInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobInfo.AsObject;
  static toObject(includeInstance: boolean, msg: JobInfo): JobInfo.AsObject;
  static serializeBinaryToWriter(message: JobInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobInfo;
  static deserializeBinaryFromReader(message: JobInfo, reader: jspb.BinaryReader): JobInfo;
}

export namespace JobInfo {
  export type AsObject = {
    id: string,
    status: scheduler_enums_pb.JobStatus,
    inputInfo?: InputInfo.AsObject,
    preset?: Preset.AsObject,
    outputInfo?: OutputInfo.AsObject,
    progress: number,
    maxPartDurationInSeconds: number,
    createdAt: number,
    updatedAt: number,
  }
}

export class JobPartInfo extends jspb.Message {
  getId(): string;
  setId(value: string): JobPartInfo;

  getJobId(): string;
  setJobId(value: string): JobPartInfo;

  getStatus(): scheduler_enums_pb.JobPartStatus;
  setStatus(value: scheduler_enums_pb.JobPartStatus): JobPartInfo;

  getProgress(): number;
  setProgress(value: number): JobPartInfo;

  getStartPts(): number;
  setStartPts(value: number): JobPartInfo;

  getEndPts(): number;
  setEndPts(value: number): JobPartInfo;

  getEndDts(): number;
  setEndDts(value: number): JobPartInfo;

  getPresetOutputName(): string;
  setPresetOutputName(value: string): JobPartInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): JobPartInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): JobPartInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobPartInfo.AsObject;
  static toObject(includeInstance: boolean, msg: JobPartInfo): JobPartInfo.AsObject;
  static serializeBinaryToWriter(message: JobPartInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobPartInfo;
  static deserializeBinaryFromReader(message: JobPartInfo, reader: jspb.BinaryReader): JobPartInfo;
}

export namespace JobPartInfo {
  export type AsObject = {
    id: string,
    jobId: string,
    status: scheduler_enums_pb.JobPartStatus,
    progress: number,
    startPts: number,
    endPts: number,
    endDts: number,
    presetOutputName: string,
    createdAt: number,
    updatedAt: number,
  }
}

export class OutputInfo extends jspb.Message {
  getPath(): string;
  setPath(value: string): OutputInfo;

  getGcs(): cloud_models_pb.GoogleStorageConfig | undefined;
  setGcs(value?: cloud_models_pb.GoogleStorageConfig): OutputInfo;
  hasGcs(): boolean;
  clearGcs(): OutputInfo;

  getAzure(): cloud_models_pb.AzureStorageConfig | undefined;
  setAzure(value?: cloud_models_pb.AzureStorageConfig): OutputInfo;
  hasAzure(): boolean;
  clearAzure(): OutputInfo;

  getS3(): cloud_models_pb.S3StorageConfig | undefined;
  setS3(value?: cloud_models_pb.S3StorageConfig): OutputInfo;
  hasS3(): boolean;
  clearS3(): OutputInfo;

  getConfigCase(): OutputInfo.ConfigCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutputInfo.AsObject;
  static toObject(includeInstance: boolean, msg: OutputInfo): OutputInfo.AsObject;
  static serializeBinaryToWriter(message: OutputInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutputInfo;
  static deserializeBinaryFromReader(message: OutputInfo, reader: jspb.BinaryReader): OutputInfo;
}

export namespace OutputInfo {
  export type AsObject = {
    path: string,
    gcs?: cloud_models_pb.GoogleStorageConfig.AsObject,
    azure?: cloud_models_pb.AzureStorageConfig.AsObject,
    s3?: cloud_models_pb.S3StorageConfig.AsObject,
  }

  export enum ConfigCase { 
    CONFIG_NOT_SET = 0,
    GCS = 20,
    AZURE = 21,
    S3 = 22,
  }
}

export class InputInfo extends jspb.Message {
  getPath(): string;
  setPath(value: string): InputInfo;

  getVideoStream(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setVideoStream(value?: google_protobuf_wrappers_pb.Int64Value): InputInfo;
  hasVideoStream(): boolean;
  clearVideoStream(): InputInfo;

  getAudioStream(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAudioStream(value?: google_protobuf_wrappers_pb.Int64Value): InputInfo;
  hasAudioStream(): boolean;
  clearAudioStream(): InputInfo;

  getGcs(): cloud_models_pb.GoogleStorageConfig | undefined;
  setGcs(value?: cloud_models_pb.GoogleStorageConfig): InputInfo;
  hasGcs(): boolean;
  clearGcs(): InputInfo;

  getAzure(): cloud_models_pb.AzureStorageConfig | undefined;
  setAzure(value?: cloud_models_pb.AzureStorageConfig): InputInfo;
  hasAzure(): boolean;
  clearAzure(): InputInfo;

  getS3(): cloud_models_pb.S3StorageConfig | undefined;
  setS3(value?: cloud_models_pb.S3StorageConfig): InputInfo;
  hasS3(): boolean;
  clearS3(): InputInfo;

  getHttp(): cloud_models_pb.HttpStorageConfig | undefined;
  setHttp(value?: cloud_models_pb.HttpStorageConfig): InputInfo;
  hasHttp(): boolean;
  clearHttp(): InputInfo;

  getConfigCase(): InputInfo.ConfigCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InputInfo.AsObject;
  static toObject(includeInstance: boolean, msg: InputInfo): InputInfo.AsObject;
  static serializeBinaryToWriter(message: InputInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InputInfo;
  static deserializeBinaryFromReader(message: InputInfo, reader: jspb.BinaryReader): InputInfo;
}

export namespace InputInfo {
  export type AsObject = {
    path: string,
    videoStream?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    audioStream?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    gcs?: cloud_models_pb.GoogleStorageConfig.AsObject,
    azure?: cloud_models_pb.AzureStorageConfig.AsObject,
    s3?: cloud_models_pb.S3StorageConfig.AsObject,
    http?: cloud_models_pb.HttpStorageConfig.AsObject,
  }

  export enum ConfigCase { 
    CONFIG_NOT_SET = 0,
    GCS = 20,
    AZURE = 21,
    S3 = 22,
    HTTP = 23,
  }
}

export class JobResultInfo extends jspb.Message {
  getJobId(): string;
  setJobId(value: string): JobResultInfo;

  getResultsList(): Array<ResultInfo>;
  setResultsList(value: Array<ResultInfo>): JobResultInfo;
  clearResultsList(): JobResultInfo;
  addResults(value?: ResultInfo, index?: number): ResultInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): JobResultInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): JobResultInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobResultInfo.AsObject;
  static toObject(includeInstance: boolean, msg: JobResultInfo): JobResultInfo.AsObject;
  static serializeBinaryToWriter(message: JobResultInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobResultInfo;
  static deserializeBinaryFromReader(message: JobResultInfo, reader: jspb.BinaryReader): JobResultInfo;
}

export namespace JobResultInfo {
  export type AsObject = {
    jobId: string,
    resultsList: Array<ResultInfo.AsObject>,
    createdAt: number,
    updatedAt: number,
  }
}

export class ResultInfo extends jspb.Message {
  getOutput(): string;
  setOutput(value: string): ResultInfo;

  getOutputPathsList(): Array<string>;
  setOutputPathsList(value: Array<string>): ResultInfo;
  clearOutputPathsList(): ResultInfo;
  addOutputPaths(value: string, index?: number): ResultInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResultInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ResultInfo): ResultInfo.AsObject;
  static serializeBinaryToWriter(message: ResultInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResultInfo;
  static deserializeBinaryFromReader(message: ResultInfo, reader: jspb.BinaryReader): ResultInfo;
}

export namespace ResultInfo {
  export type AsObject = {
    output: string,
    outputPathsList: Array<string>,
  }
}

