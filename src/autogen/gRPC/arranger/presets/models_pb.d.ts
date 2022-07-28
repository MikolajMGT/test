import * as jspb from 'google-protobuf'

import * as arranger_presets_enums_pb from '../../arranger/presets/enums_pb';
import * as scheduler_models_pb from '../../scheduler/models_pb';
import * as scheduler_enums_pb from '../../scheduler/enums_pb';


export class Preset extends jspb.Message {
  getId(): string;
  setId(value: string): Preset;

  getBaseId(): string;
  setBaseId(value: string): Preset;

  getOwnerId(): string;
  setOwnerId(value: string): Preset;

  getName(): string;
  setName(value: string): Preset;

  getNodePoolName(): string;
  setNodePoolName(value: string): Preset;

  getCategory(): arranger_presets_enums_pb.Category;
  setCategory(value: arranger_presets_enums_pb.Category): Preset;

  getBlueprint(): Blueprint | undefined;
  setBlueprint(value?: Blueprint): Preset;
  hasBlueprint(): boolean;
  clearBlueprint(): Preset;

  getCreatedAt(): number;
  setCreatedAt(value: number): Preset;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): Preset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Preset.AsObject;
  static toObject(includeInstance: boolean, msg: Preset): Preset.AsObject;
  static serializeBinaryToWriter(message: Preset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Preset;
  static deserializeBinaryFromReader(message: Preset, reader: jspb.BinaryReader): Preset;
}

export namespace Preset {
  export type AsObject = {
    id: string,
    baseId: string,
    ownerId: string,
    name: string,
    nodePoolName: string,
    category: arranger_presets_enums_pb.Category,
    blueprint?: Blueprint.AsObject,
    createdAt: number,
    updatedAt: number,
  }
}

export class NameValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): NameValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NameValue.AsObject;
  static toObject(includeInstance: boolean, msg: NameValue): NameValue.AsObject;
  static serializeBinaryToWriter(message: NameValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NameValue;
  static deserializeBinaryFromReader(message: NameValue, reader: jspb.BinaryReader): NameValue;
}

export namespace NameValue {
  export type AsObject = {
    value: string,
  }
}

export class NodePoolNameValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): NodePoolNameValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodePoolNameValue.AsObject;
  static toObject(includeInstance: boolean, msg: NodePoolNameValue): NodePoolNameValue.AsObject;
  static serializeBinaryToWriter(message: NodePoolNameValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodePoolNameValue;
  static deserializeBinaryFromReader(message: NodePoolNameValue, reader: jspb.BinaryReader): NodePoolNameValue;
}

export namespace NodePoolNameValue {
  export type AsObject = {
    value: string,
  }
}

export class CategoryValue extends jspb.Message {
  getValue(): arranger_presets_enums_pb.Category;
  setValue(value: arranger_presets_enums_pb.Category): CategoryValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryValue.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryValue): CategoryValue.AsObject;
  static serializeBinaryToWriter(message: CategoryValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryValue;
  static deserializeBinaryFromReader(message: CategoryValue, reader: jspb.BinaryReader): CategoryValue;
}

export namespace CategoryValue {
  export type AsObject = {
    value: arranger_presets_enums_pb.Category,
  }
}

export class Blueprint extends jspb.Message {
  getFileOutputsMap(): jspb.Map<string, FileOutput>;
  clearFileOutputsMap(): Blueprint;

  getAudioOutputsMap(): jspb.Map<string, AudioOutput>;
  clearAudioOutputsMap(): Blueprint;

  getVideoOutputsMap(): jspb.Map<string, VideoOutput>;
  clearVideoOutputsMap(): Blueprint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Blueprint.AsObject;
  static toObject(includeInstance: boolean, msg: Blueprint): Blueprint.AsObject;
  static serializeBinaryToWriter(message: Blueprint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Blueprint;
  static deserializeBinaryFromReader(message: Blueprint, reader: jspb.BinaryReader): Blueprint;
}

export namespace Blueprint {
  export type AsObject = {
    fileOutputsMap: Array<[string, FileOutput.AsObject]>,
    audioOutputsMap: Array<[string, AudioOutput.AsObject]>,
    videoOutputsMap: Array<[string, VideoOutput.AsObject]>,
  }
}

export class BlueprintValue extends jspb.Message {
  getValue(): Blueprint | undefined;
  setValue(value?: Blueprint): BlueprintValue;
  hasValue(): boolean;
  clearValue(): BlueprintValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlueprintValue.AsObject;
  static toObject(includeInstance: boolean, msg: BlueprintValue): BlueprintValue.AsObject;
  static serializeBinaryToWriter(message: BlueprintValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlueprintValue;
  static deserializeBinaryFromReader(message: BlueprintValue, reader: jspb.BinaryReader): BlueprintValue;
}

export namespace BlueprintValue {
  export type AsObject = {
    value?: Blueprint.AsObject,
  }
}

export class FileOutputsValue extends jspb.Message {
  getValueMap(): jspb.Map<string, FileOutput>;
  clearValueMap(): FileOutputsValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileOutputsValue.AsObject;
  static toObject(includeInstance: boolean, msg: FileOutputsValue): FileOutputsValue.AsObject;
  static serializeBinaryToWriter(message: FileOutputsValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileOutputsValue;
  static deserializeBinaryFromReader(message: FileOutputsValue, reader: jspb.BinaryReader): FileOutputsValue;
}

export namespace FileOutputsValue {
  export type AsObject = {
    valueMap: Array<[string, FileOutput.AsObject]>,
  }
}

export class AudioOutputsValue extends jspb.Message {
  getValueMap(): jspb.Map<string, AudioOutput>;
  clearValueMap(): AudioOutputsValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AudioOutputsValue.AsObject;
  static toObject(includeInstance: boolean, msg: AudioOutputsValue): AudioOutputsValue.AsObject;
  static serializeBinaryToWriter(message: AudioOutputsValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AudioOutputsValue;
  static deserializeBinaryFromReader(message: AudioOutputsValue, reader: jspb.BinaryReader): AudioOutputsValue;
}

export namespace AudioOutputsValue {
  export type AsObject = {
    valueMap: Array<[string, AudioOutput.AsObject]>,
  }
}

export class VideoOutputsValue extends jspb.Message {
  getValueMap(): jspb.Map<string, VideoOutput>;
  clearValueMap(): VideoOutputsValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoOutputsValue.AsObject;
  static toObject(includeInstance: boolean, msg: VideoOutputsValue): VideoOutputsValue.AsObject;
  static serializeBinaryToWriter(message: VideoOutputsValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoOutputsValue;
  static deserializeBinaryFromReader(message: VideoOutputsValue, reader: jspb.BinaryReader): VideoOutputsValue;
}

export namespace VideoOutputsValue {
  export type AsObject = {
    valueMap: Array<[string, VideoOutput.AsObject]>,
  }
}

export class FileOutput extends jspb.Message {
  getFormatName(): string;
  setFormatName(value: string): FileOutput;

  getVideoAudioMapList(): Array<scheduler_models_pb.VideoAudioStreamMapping>;
  setVideoAudioMapList(value: Array<scheduler_models_pb.VideoAudioStreamMapping>): FileOutput;
  clearVideoAudioMapList(): FileOutput;
  addVideoAudioMap(value?: scheduler_models_pb.VideoAudioStreamMapping, index?: number): scheduler_models_pb.VideoAudioStreamMapping;

  getPrivateDataMap(): jspb.Map<string, string>;
  clearPrivateDataMap(): FileOutput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileOutput.AsObject;
  static toObject(includeInstance: boolean, msg: FileOutput): FileOutput.AsObject;
  static serializeBinaryToWriter(message: FileOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileOutput;
  static deserializeBinaryFromReader(message: FileOutput, reader: jspb.BinaryReader): FileOutput;
}

export namespace FileOutput {
  export type AsObject = {
    formatName: string,
    videoAudioMapList: Array<scheduler_models_pb.VideoAudioStreamMapping.AsObject>,
    privateDataMap: Array<[string, string]>,
  }
}

export class AudioOutput extends jspb.Message {
  getEncoderName(): string;
  setEncoderName(value: string): AudioOutput;

  getBitRate(): IntProperty | undefined;
  setBitRate(value?: IntProperty): AudioOutput;
  hasBitRate(): boolean;
  clearBitRate(): AudioOutput;

  getChannelLayout(): ChannelLayoutProperty | undefined;
  setChannelLayout(value?: ChannelLayoutProperty): AudioOutput;
  hasChannelLayout(): boolean;
  clearChannelLayout(): AudioOutput;

  getSampleFormat(): SampleFormatProperty | undefined;
  setSampleFormat(value?: SampleFormatProperty): AudioOutput;
  hasSampleFormat(): boolean;
  clearSampleFormat(): AudioOutput;

  getChannels(): UintProperty | undefined;
  setChannels(value?: UintProperty): AudioOutput;
  hasChannels(): boolean;
  clearChannels(): AudioOutput;

  getSampleRate(): UintProperty | undefined;
  setSampleRate(value?: UintProperty): AudioOutput;
  hasSampleRate(): boolean;
  clearSampleRate(): AudioOutput;

  getTimeBase(): RationalProperty | undefined;
  setTimeBase(value?: RationalProperty): AudioOutput;
  hasTimeBase(): boolean;
  clearTimeBase(): AudioOutput;

  getPrivateDataMap(): jspb.Map<string, StringProperty>;
  clearPrivateDataMap(): AudioOutput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AudioOutput.AsObject;
  static toObject(includeInstance: boolean, msg: AudioOutput): AudioOutput.AsObject;
  static serializeBinaryToWriter(message: AudioOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AudioOutput;
  static deserializeBinaryFromReader(message: AudioOutput, reader: jspb.BinaryReader): AudioOutput;
}

export namespace AudioOutput {
  export type AsObject = {
    encoderName: string,
    bitRate?: IntProperty.AsObject,
    channelLayout?: ChannelLayoutProperty.AsObject,
    sampleFormat?: SampleFormatProperty.AsObject,
    channels?: UintProperty.AsObject,
    sampleRate?: UintProperty.AsObject,
    timeBase?: RationalProperty.AsObject,
    privateDataMap: Array<[string, StringProperty.AsObject]>,
  }
}

export class VideoOutput extends jspb.Message {
  getEncoderName(): string;
  setEncoderName(value: string): VideoOutput;

  getMaxGop(): IntProperty | undefined;
  setMaxGop(value?: IntProperty): VideoOutput;
  hasMaxGop(): boolean;
  clearMaxGop(): VideoOutput;

  getWidth(): IntProperty | undefined;
  setWidth(value?: IntProperty): VideoOutput;
  hasWidth(): boolean;
  clearWidth(): VideoOutput;

  getHeight(): IntProperty | undefined;
  setHeight(value?: IntProperty): VideoOutput;
  hasHeight(): boolean;
  clearHeight(): VideoOutput;

  getBitRate(): IntProperty | undefined;
  setBitRate(value?: IntProperty): VideoOutput;
  hasBitRate(): boolean;
  clearBitRate(): VideoOutput;

  getRefs(): IntProperty | undefined;
  setRefs(value?: IntProperty): VideoOutput;
  hasRefs(): boolean;
  clearRefs(): VideoOutput;

  getPixelFormat(): PixelFormatProperty | undefined;
  setPixelFormat(value?: PixelFormatProperty): VideoOutput;
  hasPixelFormat(): boolean;
  clearPixelFormat(): VideoOutput;

  getFrameRate(): RationalProperty | undefined;
  setFrameRate(value?: RationalProperty): VideoOutput;
  hasFrameRate(): boolean;
  clearFrameRate(): VideoOutput;

  getTimeBase(): RationalProperty | undefined;
  setTimeBase(value?: RationalProperty): VideoOutput;
  hasTimeBase(): boolean;
  clearTimeBase(): VideoOutput;

  getFilter(): StringProperty | undefined;
  setFilter(value?: StringProperty): VideoOutput;
  hasFilter(): boolean;
  clearFilter(): VideoOutput;

  getLevel(): IntProperty | undefined;
  setLevel(value?: IntProperty): VideoOutput;
  hasLevel(): boolean;
  clearLevel(): VideoOutput;

  getColorSpace(): ColorSpaceProperty | undefined;
  setColorSpace(value?: ColorSpaceProperty): VideoOutput;
  hasColorSpace(): boolean;
  clearColorSpace(): VideoOutput;

  getPassMode(): PassModeProperty | undefined;
  setPassMode(value?: PassModeProperty): VideoOutput;
  hasPassMode(): boolean;
  clearPassMode(): VideoOutput;

  getRcMaxBitrate(): IntProperty | undefined;
  setRcMaxBitrate(value?: IntProperty): VideoOutput;
  hasRcMaxBitrate(): boolean;
  clearRcMaxBitrate(): VideoOutput;

  getRcMinBitrate(): IntProperty | undefined;
  setRcMinBitrate(value?: IntProperty): VideoOutput;
  hasRcMinBitrate(): boolean;
  clearRcMinBitrate(): VideoOutput;

  getResources(): ResourcesProperty | undefined;
  setResources(value?: ResourcesProperty): VideoOutput;
  hasResources(): boolean;
  clearResources(): VideoOutput;

  getBufSize(): IntProperty | undefined;
  setBufSize(value?: IntProperty): VideoOutput;
  hasBufSize(): boolean;
  clearBufSize(): VideoOutput;

  getMaxBFrames(): IntProperty | undefined;
  setMaxBFrames(value?: IntProperty): VideoOutput;
  hasMaxBFrames(): boolean;
  clearMaxBFrames(): VideoOutput;

  getKeyIntMin(): IntProperty | undefined;
  setKeyIntMin(value?: IntProperty): VideoOutput;
  hasKeyIntMin(): boolean;
  clearKeyIntMin(): VideoOutput;

  getPrivateDataMap(): jspb.Map<string, StringProperty>;
  clearPrivateDataMap(): VideoOutput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoOutput.AsObject;
  static toObject(includeInstance: boolean, msg: VideoOutput): VideoOutput.AsObject;
  static serializeBinaryToWriter(message: VideoOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoOutput;
  static deserializeBinaryFromReader(message: VideoOutput, reader: jspb.BinaryReader): VideoOutput;
}

export namespace VideoOutput {
  export type AsObject = {
    encoderName: string,
    maxGop?: IntProperty.AsObject,
    width?: IntProperty.AsObject,
    height?: IntProperty.AsObject,
    bitRate?: IntProperty.AsObject,
    refs?: IntProperty.AsObject,
    pixelFormat?: PixelFormatProperty.AsObject,
    frameRate?: RationalProperty.AsObject,
    timeBase?: RationalProperty.AsObject,
    filter?: StringProperty.AsObject,
    level?: IntProperty.AsObject,
    colorSpace?: ColorSpaceProperty.AsObject,
    passMode?: PassModeProperty.AsObject,
    rcMaxBitrate?: IntProperty.AsObject,
    rcMinBitrate?: IntProperty.AsObject,
    resources?: ResourcesProperty.AsObject,
    bufSize?: IntProperty.AsObject,
    maxBFrames?: IntProperty.AsObject,
    keyIntMin?: IntProperty.AsObject,
    privateDataMap: Array<[string, StringProperty.AsObject]>,
  }
}

export class PropertyDetails extends jspb.Message {
  getRequired(): boolean;
  setRequired(value: boolean): PropertyDetails;

  getEditable(): boolean;
  setEditable(value: boolean): PropertyDetails;

  getHidden(): boolean;
  setHidden(value: boolean): PropertyDetails;

  getInputType(): string;
  setInputType(value: string): PropertyDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropertyDetails.AsObject;
  static toObject(includeInstance: boolean, msg: PropertyDetails): PropertyDetails.AsObject;
  static serializeBinaryToWriter(message: PropertyDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropertyDetails;
  static deserializeBinaryFromReader(message: PropertyDetails, reader: jspb.BinaryReader): PropertyDetails;
}

export namespace PropertyDetails {
  export type AsObject = {
    required: boolean,
    editable: boolean,
    hidden: boolean,
    inputType: string,
  }
}

export class IntProperty extends jspb.Message {
  getValue(): number;
  setValue(value: number): IntProperty;

  getDetails(): PropertyDetails | undefined;
  setDetails(value?: PropertyDetails): IntProperty;
  hasDetails(): boolean;
  clearDetails(): IntProperty;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntProperty.AsObject;
  static toObject(includeInstance: boolean, msg: IntProperty): IntProperty.AsObject;
  static serializeBinaryToWriter(message: IntProperty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntProperty;
  static deserializeBinaryFromReader(message: IntProperty, reader: jspb.BinaryReader): IntProperty;
}

export namespace IntProperty {
  export type AsObject = {
    value: number,
    details?: PropertyDetails.AsObject,
  }
}

export class UintProperty extends jspb.Message {
  getValue(): number;
  setValue(value: number): UintProperty;

  getDetails(): PropertyDetails | undefined;
  setDetails(value?: PropertyDetails): UintProperty;
  hasDetails(): boolean;
  clearDetails(): UintProperty;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UintProperty.AsObject;
  static toObject(includeInstance: boolean, msg: UintProperty): UintProperty.AsObject;
  static serializeBinaryToWriter(message: UintProperty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UintProperty;
  static deserializeBinaryFromReader(message: UintProperty, reader: jspb.BinaryReader): UintProperty;
}

export namespace UintProperty {
  export type AsObject = {
    value: number,
    details?: PropertyDetails.AsObject,
  }
}

export class StringProperty extends jspb.Message {
  getValue(): string;
  setValue(value: string): StringProperty;

  getDetails(): PropertyDetails | undefined;
  setDetails(value?: PropertyDetails): StringProperty;
  hasDetails(): boolean;
  clearDetails(): StringProperty;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringProperty.AsObject;
  static toObject(includeInstance: boolean, msg: StringProperty): StringProperty.AsObject;
  static serializeBinaryToWriter(message: StringProperty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringProperty;
  static deserializeBinaryFromReader(message: StringProperty, reader: jspb.BinaryReader): StringProperty;
}

export namespace StringProperty {
  export type AsObject = {
    value: string,
    details?: PropertyDetails.AsObject,
  }
}

export class PixelFormatProperty extends jspb.Message {
  getValue(): scheduler_enums_pb.PixelFormat;
  setValue(value: scheduler_enums_pb.PixelFormat): PixelFormatProperty;

  getDetails(): PropertyDetails | undefined;
  setDetails(value?: PropertyDetails): PixelFormatProperty;
  hasDetails(): boolean;
  clearDetails(): PixelFormatProperty;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PixelFormatProperty.AsObject;
  static toObject(includeInstance: boolean, msg: PixelFormatProperty): PixelFormatProperty.AsObject;
  static serializeBinaryToWriter(message: PixelFormatProperty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PixelFormatProperty;
  static deserializeBinaryFromReader(message: PixelFormatProperty, reader: jspb.BinaryReader): PixelFormatProperty;
}

export namespace PixelFormatProperty {
  export type AsObject = {
    value: scheduler_enums_pb.PixelFormat,
    details?: PropertyDetails.AsObject,
  }
}

export class RationalProperty extends jspb.Message {
  getValue(): scheduler_models_pb.Rational | undefined;
  setValue(value?: scheduler_models_pb.Rational): RationalProperty;
  hasValue(): boolean;
  clearValue(): RationalProperty;

  getDetails(): PropertyDetails | undefined;
  setDetails(value?: PropertyDetails): RationalProperty;
  hasDetails(): boolean;
  clearDetails(): RationalProperty;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RationalProperty.AsObject;
  static toObject(includeInstance: boolean, msg: RationalProperty): RationalProperty.AsObject;
  static serializeBinaryToWriter(message: RationalProperty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RationalProperty;
  static deserializeBinaryFromReader(message: RationalProperty, reader: jspb.BinaryReader): RationalProperty;
}

export namespace RationalProperty {
  export type AsObject = {
    value?: scheduler_models_pb.Rational.AsObject,
    details?: PropertyDetails.AsObject,
  }
}

export class ColorSpaceProperty extends jspb.Message {
  getValue(): scheduler_enums_pb.ColorSpace;
  setValue(value: scheduler_enums_pb.ColorSpace): ColorSpaceProperty;

  getDetails(): PropertyDetails | undefined;
  setDetails(value?: PropertyDetails): ColorSpaceProperty;
  hasDetails(): boolean;
  clearDetails(): ColorSpaceProperty;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ColorSpaceProperty.AsObject;
  static toObject(includeInstance: boolean, msg: ColorSpaceProperty): ColorSpaceProperty.AsObject;
  static serializeBinaryToWriter(message: ColorSpaceProperty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ColorSpaceProperty;
  static deserializeBinaryFromReader(message: ColorSpaceProperty, reader: jspb.BinaryReader): ColorSpaceProperty;
}

export namespace ColorSpaceProperty {
  export type AsObject = {
    value: scheduler_enums_pb.ColorSpace,
    details?: PropertyDetails.AsObject,
  }
}

export class PassModeProperty extends jspb.Message {
  getValue(): scheduler_enums_pb.PassMode;
  setValue(value: scheduler_enums_pb.PassMode): PassModeProperty;

  getDetails(): PropertyDetails | undefined;
  setDetails(value?: PropertyDetails): PassModeProperty;
  hasDetails(): boolean;
  clearDetails(): PassModeProperty;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PassModeProperty.AsObject;
  static toObject(includeInstance: boolean, msg: PassModeProperty): PassModeProperty.AsObject;
  static serializeBinaryToWriter(message: PassModeProperty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PassModeProperty;
  static deserializeBinaryFromReader(message: PassModeProperty, reader: jspb.BinaryReader): PassModeProperty;
}

export namespace PassModeProperty {
  export type AsObject = {
    value: scheduler_enums_pb.PassMode,
    details?: PropertyDetails.AsObject,
  }
}

export class ResourcesProperty extends jspb.Message {
  getValue(): scheduler_models_pb.Resources | undefined;
  setValue(value?: scheduler_models_pb.Resources): ResourcesProperty;
  hasValue(): boolean;
  clearValue(): ResourcesProperty;

  getDetails(): PropertyDetails | undefined;
  setDetails(value?: PropertyDetails): ResourcesProperty;
  hasDetails(): boolean;
  clearDetails(): ResourcesProperty;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourcesProperty.AsObject;
  static toObject(includeInstance: boolean, msg: ResourcesProperty): ResourcesProperty.AsObject;
  static serializeBinaryToWriter(message: ResourcesProperty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourcesProperty;
  static deserializeBinaryFromReader(message: ResourcesProperty, reader: jspb.BinaryReader): ResourcesProperty;
}

export namespace ResourcesProperty {
  export type AsObject = {
    value?: scheduler_models_pb.Resources.AsObject,
    details?: PropertyDetails.AsObject,
  }
}

export class ChannelLayoutProperty extends jspb.Message {
  getValue(): scheduler_enums_pb.ChannelLayout;
  setValue(value: scheduler_enums_pb.ChannelLayout): ChannelLayoutProperty;

  getDetails(): PropertyDetails | undefined;
  setDetails(value?: PropertyDetails): ChannelLayoutProperty;
  hasDetails(): boolean;
  clearDetails(): ChannelLayoutProperty;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChannelLayoutProperty.AsObject;
  static toObject(includeInstance: boolean, msg: ChannelLayoutProperty): ChannelLayoutProperty.AsObject;
  static serializeBinaryToWriter(message: ChannelLayoutProperty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChannelLayoutProperty;
  static deserializeBinaryFromReader(message: ChannelLayoutProperty, reader: jspb.BinaryReader): ChannelLayoutProperty;
}

export namespace ChannelLayoutProperty {
  export type AsObject = {
    value: scheduler_enums_pb.ChannelLayout,
    details?: PropertyDetails.AsObject,
  }
}

export class SampleFormatProperty extends jspb.Message {
  getValue(): scheduler_enums_pb.SampleFormat;
  setValue(value: scheduler_enums_pb.SampleFormat): SampleFormatProperty;

  getDetails(): PropertyDetails | undefined;
  setDetails(value?: PropertyDetails): SampleFormatProperty;
  hasDetails(): boolean;
  clearDetails(): SampleFormatProperty;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SampleFormatProperty.AsObject;
  static toObject(includeInstance: boolean, msg: SampleFormatProperty): SampleFormatProperty.AsObject;
  static serializeBinaryToWriter(message: SampleFormatProperty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SampleFormatProperty;
  static deserializeBinaryFromReader(message: SampleFormatProperty, reader: jspb.BinaryReader): SampleFormatProperty;
}

export namespace SampleFormatProperty {
  export type AsObject = {
    value: scheduler_enums_pb.SampleFormat,
    details?: PropertyDetails.AsObject,
  }
}

export class BlueprintOverride extends jspb.Message {
  getFileOutputsMap(): jspb.Map<string, FileOutputOverride>;
  clearFileOutputsMap(): BlueprintOverride;

  getAudioOutputsMap(): jspb.Map<string, AudioOutputOverride>;
  clearAudioOutputsMap(): BlueprintOverride;

  getVideoOutputsMap(): jspb.Map<string, VideoOutputOverride>;
  clearVideoOutputsMap(): BlueprintOverride;

  getDisabledMap(): jspb.Map<string, DisabledMappings>;
  clearDisabledMap(): BlueprintOverride;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlueprintOverride.AsObject;
  static toObject(includeInstance: boolean, msg: BlueprintOverride): BlueprintOverride.AsObject;
  static serializeBinaryToWriter(message: BlueprintOverride, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlueprintOverride;
  static deserializeBinaryFromReader(message: BlueprintOverride, reader: jspb.BinaryReader): BlueprintOverride;
}

export namespace BlueprintOverride {
  export type AsObject = {
    fileOutputsMap: Array<[string, FileOutputOverride.AsObject]>,
    audioOutputsMap: Array<[string, AudioOutputOverride.AsObject]>,
    videoOutputsMap: Array<[string, VideoOutputOverride.AsObject]>,
    disabledMap: Array<[string, DisabledMappings.AsObject]>,
  }
}

export class DisabledMappings extends jspb.Message {
  getValuesList(): Array<scheduler_models_pb.VideoAudioStreamMapping>;
  setValuesList(value: Array<scheduler_models_pb.VideoAudioStreamMapping>): DisabledMappings;
  clearValuesList(): DisabledMappings;
  addValues(value?: scheduler_models_pb.VideoAudioStreamMapping, index?: number): scheduler_models_pb.VideoAudioStreamMapping;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisabledMappings.AsObject;
  static toObject(includeInstance: boolean, msg: DisabledMappings): DisabledMappings.AsObject;
  static serializeBinaryToWriter(message: DisabledMappings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisabledMappings;
  static deserializeBinaryFromReader(message: DisabledMappings, reader: jspb.BinaryReader): DisabledMappings;
}

export namespace DisabledMappings {
  export type AsObject = {
    valuesList: Array<scheduler_models_pb.VideoAudioStreamMapping.AsObject>,
  }
}

export class BlueprintOverrideValue extends jspb.Message {
  getOverride(): BlueprintOverride | undefined;
  setOverride(value?: BlueprintOverride): BlueprintOverrideValue;
  hasOverride(): boolean;
  clearOverride(): BlueprintOverrideValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlueprintOverrideValue.AsObject;
  static toObject(includeInstance: boolean, msg: BlueprintOverrideValue): BlueprintOverrideValue.AsObject;
  static serializeBinaryToWriter(message: BlueprintOverrideValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlueprintOverrideValue;
  static deserializeBinaryFromReader(message: BlueprintOverrideValue, reader: jspb.BinaryReader): BlueprintOverrideValue;
}

export namespace BlueprintOverrideValue {
  export type AsObject = {
    override?: BlueprintOverride.AsObject,
  }
}

export class FileOutputOverride extends jspb.Message {
  getDisabled(): boolean;
  setDisabled(value: boolean): FileOutputOverride;

  getFileName(): string;
  setFileName(value: string): FileOutputOverride;

  getPrivateDataMap(): jspb.Map<string, string>;
  clearPrivateDataMap(): FileOutputOverride;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileOutputOverride.AsObject;
  static toObject(includeInstance: boolean, msg: FileOutputOverride): FileOutputOverride.AsObject;
  static serializeBinaryToWriter(message: FileOutputOverride, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileOutputOverride;
  static deserializeBinaryFromReader(message: FileOutputOverride, reader: jspb.BinaryReader): FileOutputOverride;
}

export namespace FileOutputOverride {
  export type AsObject = {
    disabled: boolean,
    fileName: string,
    privateDataMap: Array<[string, string]>,
  }
}

export class AudioOutputOverride extends jspb.Message {
  getDisabled(): boolean;
  setDisabled(value: boolean): AudioOutputOverride;

  getBitRate(): IntProperty | undefined;
  setBitRate(value?: IntProperty): AudioOutputOverride;
  hasBitRate(): boolean;
  clearBitRate(): AudioOutputOverride;

  getChannelLayout(): ChannelLayoutProperty | undefined;
  setChannelLayout(value?: ChannelLayoutProperty): AudioOutputOverride;
  hasChannelLayout(): boolean;
  clearChannelLayout(): AudioOutputOverride;

  getSampleFormat(): SampleFormatProperty | undefined;
  setSampleFormat(value?: SampleFormatProperty): AudioOutputOverride;
  hasSampleFormat(): boolean;
  clearSampleFormat(): AudioOutputOverride;

  getChannels(): UintProperty | undefined;
  setChannels(value?: UintProperty): AudioOutputOverride;
  hasChannels(): boolean;
  clearChannels(): AudioOutputOverride;

  getSampleRate(): UintProperty | undefined;
  setSampleRate(value?: UintProperty): AudioOutputOverride;
  hasSampleRate(): boolean;
  clearSampleRate(): AudioOutputOverride;

  getTimeBase(): RationalProperty | undefined;
  setTimeBase(value?: RationalProperty): AudioOutputOverride;
  hasTimeBase(): boolean;
  clearTimeBase(): AudioOutputOverride;

  getPrivateDataMap(): jspb.Map<string, StringProperty>;
  clearPrivateDataMap(): AudioOutputOverride;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AudioOutputOverride.AsObject;
  static toObject(includeInstance: boolean, msg: AudioOutputOverride): AudioOutputOverride.AsObject;
  static serializeBinaryToWriter(message: AudioOutputOverride, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AudioOutputOverride;
  static deserializeBinaryFromReader(message: AudioOutputOverride, reader: jspb.BinaryReader): AudioOutputOverride;
}

export namespace AudioOutputOverride {
  export type AsObject = {
    disabled: boolean,
    bitRate?: IntProperty.AsObject,
    channelLayout?: ChannelLayoutProperty.AsObject,
    sampleFormat?: SampleFormatProperty.AsObject,
    channels?: UintProperty.AsObject,
    sampleRate?: UintProperty.AsObject,
    timeBase?: RationalProperty.AsObject,
    privateDataMap: Array<[string, StringProperty.AsObject]>,
  }
}

export class VideoOutputOverride extends jspb.Message {
  getDisabled(): boolean;
  setDisabled(value: boolean): VideoOutputOverride;

  getMaxGop(): IntProperty | undefined;
  setMaxGop(value?: IntProperty): VideoOutputOverride;
  hasMaxGop(): boolean;
  clearMaxGop(): VideoOutputOverride;

  getWidth(): IntProperty | undefined;
  setWidth(value?: IntProperty): VideoOutputOverride;
  hasWidth(): boolean;
  clearWidth(): VideoOutputOverride;

  getHeight(): IntProperty | undefined;
  setHeight(value?: IntProperty): VideoOutputOverride;
  hasHeight(): boolean;
  clearHeight(): VideoOutputOverride;

  getBitRate(): IntProperty | undefined;
  setBitRate(value?: IntProperty): VideoOutputOverride;
  hasBitRate(): boolean;
  clearBitRate(): VideoOutputOverride;

  getRefs(): IntProperty | undefined;
  setRefs(value?: IntProperty): VideoOutputOverride;
  hasRefs(): boolean;
  clearRefs(): VideoOutputOverride;

  getPixelFormat(): PixelFormatProperty | undefined;
  setPixelFormat(value?: PixelFormatProperty): VideoOutputOverride;
  hasPixelFormat(): boolean;
  clearPixelFormat(): VideoOutputOverride;

  getFrameRate(): RationalProperty | undefined;
  setFrameRate(value?: RationalProperty): VideoOutputOverride;
  hasFrameRate(): boolean;
  clearFrameRate(): VideoOutputOverride;

  getTimeBase(): RationalProperty | undefined;
  setTimeBase(value?: RationalProperty): VideoOutputOverride;
  hasTimeBase(): boolean;
  clearTimeBase(): VideoOutputOverride;

  getFilter(): StringProperty | undefined;
  setFilter(value?: StringProperty): VideoOutputOverride;
  hasFilter(): boolean;
  clearFilter(): VideoOutputOverride;

  getLevel(): IntProperty | undefined;
  setLevel(value?: IntProperty): VideoOutputOverride;
  hasLevel(): boolean;
  clearLevel(): VideoOutputOverride;

  getColorSpace(): ColorSpaceProperty | undefined;
  setColorSpace(value?: ColorSpaceProperty): VideoOutputOverride;
  hasColorSpace(): boolean;
  clearColorSpace(): VideoOutputOverride;

  getPassMode(): PassModeProperty | undefined;
  setPassMode(value?: PassModeProperty): VideoOutputOverride;
  hasPassMode(): boolean;
  clearPassMode(): VideoOutputOverride;

  getRcMaxBitrate(): IntProperty | undefined;
  setRcMaxBitrate(value?: IntProperty): VideoOutputOverride;
  hasRcMaxBitrate(): boolean;
  clearRcMaxBitrate(): VideoOutputOverride;

  getRcMinBitrate(): IntProperty | undefined;
  setRcMinBitrate(value?: IntProperty): VideoOutputOverride;
  hasRcMinBitrate(): boolean;
  clearRcMinBitrate(): VideoOutputOverride;

  getBufSize(): IntProperty | undefined;
  setBufSize(value?: IntProperty): VideoOutputOverride;
  hasBufSize(): boolean;
  clearBufSize(): VideoOutputOverride;

  getMaxBFrames(): IntProperty | undefined;
  setMaxBFrames(value?: IntProperty): VideoOutputOverride;
  hasMaxBFrames(): boolean;
  clearMaxBFrames(): VideoOutputOverride;

  getKeyIntMin(): IntProperty | undefined;
  setKeyIntMin(value?: IntProperty): VideoOutputOverride;
  hasKeyIntMin(): boolean;
  clearKeyIntMin(): VideoOutputOverride;

  getPrivateDataMap(): jspb.Map<string, StringProperty>;
  clearPrivateDataMap(): VideoOutputOverride;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoOutputOverride.AsObject;
  static toObject(includeInstance: boolean, msg: VideoOutputOverride): VideoOutputOverride.AsObject;
  static serializeBinaryToWriter(message: VideoOutputOverride, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoOutputOverride;
  static deserializeBinaryFromReader(message: VideoOutputOverride, reader: jspb.BinaryReader): VideoOutputOverride;
}

export namespace VideoOutputOverride {
  export type AsObject = {
    disabled: boolean,
    maxGop?: IntProperty.AsObject,
    width?: IntProperty.AsObject,
    height?: IntProperty.AsObject,
    bitRate?: IntProperty.AsObject,
    refs?: IntProperty.AsObject,
    pixelFormat?: PixelFormatProperty.AsObject,
    frameRate?: RationalProperty.AsObject,
    timeBase?: RationalProperty.AsObject,
    filter?: StringProperty.AsObject,
    level?: IntProperty.AsObject,
    colorSpace?: ColorSpaceProperty.AsObject,
    passMode?: PassModeProperty.AsObject,
    rcMaxBitrate?: IntProperty.AsObject,
    rcMinBitrate?: IntProperty.AsObject,
    bufSize?: IntProperty.AsObject,
    maxBFrames?: IntProperty.AsObject,
    keyIntMin?: IntProperty.AsObject,
    privateDataMap: Array<[string, StringProperty.AsObject]>,
  }
}

