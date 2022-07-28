import * as jspb from 'google-protobuf'



export class JobStatusValue extends jspb.Message {
  getStatus(): JobStatus;
  setStatus(value: JobStatus): JobStatusValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobStatusValue.AsObject;
  static toObject(includeInstance: boolean, msg: JobStatusValue): JobStatusValue.AsObject;
  static serializeBinaryToWriter(message: JobStatusValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobStatusValue;
  static deserializeBinaryFromReader(message: JobStatusValue, reader: jspb.BinaryReader): JobStatusValue;
}

export namespace JobStatusValue {
  export type AsObject = {
    status: JobStatus,
  }
}

export class JobPartStatusValue extends jspb.Message {
  getStatus(): JobPartStatus;
  setStatus(value: JobPartStatus): JobPartStatusValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobPartStatusValue.AsObject;
  static toObject(includeInstance: boolean, msg: JobPartStatusValue): JobPartStatusValue.AsObject;
  static serializeBinaryToWriter(message: JobPartStatusValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobPartStatusValue;
  static deserializeBinaryFromReader(message: JobPartStatusValue, reader: jspb.BinaryReader): JobPartStatusValue;
}

export namespace JobPartStatusValue {
  export type AsObject = {
    status: JobPartStatus,
  }
}

export enum SampleFormat { 
  SAMPLEFORMAT_UNKNOWN = 0,
  SAMPLEFORMAT_U8 = 1,
  SAMPLEFORMAT_S16 = 2,
  SAMPLEFORMAT_S32 = 3,
  SAMPLEFORMAT_FLT = 4,
  SAMPLEFORMAT_U8P = 5,
  SAMPLEFORMAT_S16P = 6,
  SAMPLEFORMAT_S32P = 7,
  SAMPLEFORMAT_FLTP = 8,
  SAMPLEFORMAT_NONE = 9,
}
export enum ChannelLayout { 
  CHANNELLAYOUT_UNKNOWN = 0,
  CHANNELLAYOUT_STEREO = 1,
  CHANNELLAYOUT_MONO = 2,
  CHANNELLAYOUT_2_1 = 3,
  CHANNELLAYOUT_3_1 = 4,
  CHANNELLAYOUT_5_1 = 5,
  CHANNELLAYOUT_7_1 = 6,
}
export enum PassMode { 
  PASSMODE_SINGLE = 0,
  PASSMODE_MULTI = 1,
}
export enum JobStatus { 
  JOBSTATUS_UNKNOWN = 0,
  JOBSTATUS_PENDING = 1,
  JOBSTATUS_DOWNLOADING = 2,
  JOBSTATUS_ANALYSING = 3,
  JOBSTATUS_ANALYZED = 4,
  JOBSTATUS_TRANSCODING = 5,
  JOBSTATUS_TRANSCODED = 6,
  JOBSTATUS_MUXING = 7,
  JOBSTATUS_FINISHED = 8,
  JOBSTATUS_CANCELLED = 9,
  JOBSTATUS_FAILED = 10,
}
export enum JobPartStatus { 
  JOBPARTSTATUS_UNKNOWN = 0,
  JOBPARTSTATUS_PENDING = 1,
  JOBPARTSTATUS_RUNNING = 2,
  JOBPARTSTATUS_RESCHEDULING = 3,
  JOBPARTSTATUS_FINISHED = 4,
  JOBPARTSTATUS_CANCELLED = 5,
  JOBPARTSTATUS_FAILED = 6,
}
export enum InputLocationType { 
  INPUTLOCATIONTYPE_UNKNOWN = 0,
  INPUTLOCATIONTYPE_HTTP = 1,
}
export enum PixelFormat { 
  PIXELFORMAT_UNKNOWN = 0,
  PIXELFORMAT_COPY = 1,
  PIXELFORMAT_BGR24 = 2,
  PIXELFORMAT_RGB24 = 4,
  PIXELFORMAT_RGBA = 5,
  PIXELFORMAT_YUV420P = 6,
  PIXELFORMAT_YUVJ420P = 7,
  PIXELFORMAT_YUYV422 = 8,
  PIXELFORMAT_YUV422P = 9,
  PIXELFORMAT_YUV444P = 10,
}
export enum ColorSpace { 
  COLORSPACE_UNKNOWN = 0,
  COLORSPACE_COPY = 1,
  COLORSPACE_RGB = 2,
  COLORSPACE_BT709 = 3,
  COLORSPACE_BT2020_NCL = 4,
  COLORSPACE_BT2020_CL = 5,
  COLORSPACE_ICTCPL = 6,
}
