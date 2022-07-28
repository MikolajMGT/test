import * as jspb from 'google-protobuf'

import * as cloud_models_pb from '../cloud/models_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class FileInfo extends jspb.Message {
  getFormat(): FormatInfo | undefined;
  setFormat(value?: FormatInfo): FileInfo;
  hasFormat(): boolean;
  clearFormat(): FileInfo;

  getStreamsList(): Array<StreamInfo>;
  setStreamsList(value: Array<StreamInfo>): FileInfo;
  clearStreamsList(): FileInfo;
  addStreams(value?: StreamInfo, index?: number): StreamInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FileInfo): FileInfo.AsObject;
  static serializeBinaryToWriter(message: FileInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileInfo;
  static deserializeBinaryFromReader(message: FileInfo, reader: jspb.BinaryReader): FileInfo;
}

export namespace FileInfo {
  export type AsObject = {
    format?: FormatInfo.AsObject,
    streamsList: Array<StreamInfo.AsObject>,
  }
}

export class StreamInfo extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): StreamInfo;

  getCodecName(): string;
  setCodecName(value: string): StreamInfo;

  getCodecLongName(): string;
  setCodecLongName(value: string): StreamInfo;

  getProfile(): string;
  setProfile(value: string): StreamInfo;

  getCodecType(): string;
  setCodecType(value: string): StreamInfo;

  getCodecTimeBase(): string;
  setCodecTimeBase(value: string): StreamInfo;

  getCodecTagString(): string;
  setCodecTagString(value: string): StreamInfo;

  getCodecTag(): string;
  setCodecTag(value: string): StreamInfo;

  getWidth(): number;
  setWidth(value: number): StreamInfo;

  getHeight(): number;
  setHeight(value: number): StreamInfo;

  getCodedWidth(): number;
  setCodedWidth(value: number): StreamInfo;

  getCodedHeight(): number;
  setCodedHeight(value: number): StreamInfo;

  getClosedCaptions(): number;
  setClosedCaptions(value: number): StreamInfo;

  getHasBFrames(): number;
  setHasBFrames(value: number): StreamInfo;

  getSampleAspectRatio(): string;
  setSampleAspectRatio(value: string): StreamInfo;

  getDisplayAspectRatio(): string;
  setDisplayAspectRatio(value: string): StreamInfo;

  getPixFmt(): string;
  setPixFmt(value: string): StreamInfo;

  getLevel(): number;
  setLevel(value: number): StreamInfo;

  getColorRange(): string;
  setColorRange(value: string): StreamInfo;

  getColorSpace(): string;
  setColorSpace(value: string): StreamInfo;

  getColorTransfer(): string;
  setColorTransfer(value: string): StreamInfo;

  getColorPrimaries(): string;
  setColorPrimaries(value: string): StreamInfo;

  getChromaLocation(): string;
  setChromaLocation(value: string): StreamInfo;

  getRefs(): number;
  setRefs(value: number): StreamInfo;

  getIsAvc(): boolean;
  setIsAvc(value: boolean): StreamInfo;

  getNalLengthSize(): number;
  setNalLengthSize(value: number): StreamInfo;

  getRFrameRate(): string;
  setRFrameRate(value: string): StreamInfo;

  getAvgFrameRate(): string;
  setAvgFrameRate(value: string): StreamInfo;

  getTimeBase(): string;
  setTimeBase(value: string): StreamInfo;

  getStartPts(): number;
  setStartPts(value: number): StreamInfo;

  getStartTime(): string;
  setStartTime(value: string): StreamInfo;

  getDurationTs(): number;
  setDurationTs(value: number): StreamInfo;

  getDuration(): number;
  setDuration(value: number): StreamInfo;

  getBitRate(): number;
  setBitRate(value: number): StreamInfo;

  getMaxBitRate(): number;
  setMaxBitRate(value: number): StreamInfo;

  getBitsPerRawSample(): number;
  setBitsPerRawSample(value: number): StreamInfo;

  getNbFrames(): number;
  setNbFrames(value: number): StreamInfo;

  getSampleFmt(): string;
  setSampleFmt(value: string): StreamInfo;

  getSampleRate(): number;
  setSampleRate(value: number): StreamInfo;

  getChannels(): number;
  setChannels(value: number): StreamInfo;

  getBitsPerSample(): number;
  setBitsPerSample(value: number): StreamInfo;

  getChannelLayout(): string;
  setChannelLayout(value: string): StreamInfo;

  getId(): number;
  setId(value: number): StreamInfo;

  getTagsMap(): jspb.Map<string, string>;
  clearTagsMap(): StreamInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamInfo.AsObject;
  static toObject(includeInstance: boolean, msg: StreamInfo): StreamInfo.AsObject;
  static serializeBinaryToWriter(message: StreamInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamInfo;
  static deserializeBinaryFromReader(message: StreamInfo, reader: jspb.BinaryReader): StreamInfo;
}

export namespace StreamInfo {
  export type AsObject = {
    index: number,
    codecName: string,
    codecLongName: string,
    profile: string,
    codecType: string,
    codecTimeBase: string,
    codecTagString: string,
    codecTag: string,
    width: number,
    height: number,
    codedWidth: number,
    codedHeight: number,
    closedCaptions: number,
    hasBFrames: number,
    sampleAspectRatio: string,
    displayAspectRatio: string,
    pixFmt: string,
    level: number,
    colorRange: string,
    colorSpace: string,
    colorTransfer: string,
    colorPrimaries: string,
    chromaLocation: string,
    refs: number,
    isAvc: boolean,
    nalLengthSize: number,
    rFrameRate: string,
    avgFrameRate: string,
    timeBase: string,
    startPts: number,
    startTime: string,
    durationTs: number,
    duration: number,
    bitRate: number,
    maxBitRate: number,
    bitsPerRawSample: number,
    nbFrames: number,
    sampleFmt: string,
    sampleRate: number,
    channels: number,
    bitsPerSample: number,
    channelLayout: string,
    id: number,
    tagsMap: Array<[string, string]>,
  }
}

export class FormatInfo extends jspb.Message {
  getFileName(): string;
  setFileName(value: string): FormatInfo;

  getNbStreams(): number;
  setNbStreams(value: number): FormatInfo;

  getFormatName(): string;
  setFormatName(value: string): FormatInfo;

  getFormatLongName(): string;
  setFormatLongName(value: string): FormatInfo;

  getStartTime(): number;
  setStartTime(value: number): FormatInfo;

  getDuration(): number;
  setDuration(value: number): FormatInfo;

  getDurationTs(): number;
  setDurationTs(value: number): FormatInfo;

  getSize(): number;
  setSize(value: number): FormatInfo;

  getBitRate(): number;
  setBitRate(value: number): FormatInfo;

  getProbeScore(): number;
  setProbeScore(value: number): FormatInfo;

  getTagsMap(): jspb.Map<string, string>;
  clearTagsMap(): FormatInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FormatInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FormatInfo): FormatInfo.AsObject;
  static serializeBinaryToWriter(message: FormatInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FormatInfo;
  static deserializeBinaryFromReader(message: FormatInfo, reader: jspb.BinaryReader): FormatInfo;
}

export namespace FormatInfo {
  export type AsObject = {
    fileName: string,
    nbStreams: number,
    formatName: string,
    formatLongName: string,
    startTime: number,
    duration: number,
    durationTs: number,
    size: number,
    bitRate: number,
    probeScore: number,
    tagsMap: Array<[string, string]>,
  }
}

export class InputInfo extends jspb.Message {
  getPath(): string;
  setPath(value: string): InputInfo;

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

