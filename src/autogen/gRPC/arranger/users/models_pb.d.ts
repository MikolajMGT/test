import * as jspb from 'google-protobuf'

import * as arranger_users_enums_pb from '../../arranger/users/enums_pb';


export class User extends jspb.Message {
  getId(): string;
  setId(value: string): User;

  getAuthId(): string;
  setAuthId(value: string): User;

  getEmail(): string;
  setEmail(value: string): User;

  getFirstname(): string;
  setFirstname(value: string): User;

  getLastname(): string;
  setLastname(value: string): User;

  getCompany(): string;
  setCompany(value: string): User;

  getTimezone(): string;
  setTimezone(value: string): User;

  getType(): arranger_users_enums_pb.Type;
  setType(value: arranger_users_enums_pb.Type): User;

  getRole(): number;
  setRole(value: number): User;

  getApiKey(): string;
  setApiKey(value: string): User;

  getCreatedAt(): number;
  setCreatedAt(value: number): User;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: string,
    authId: string,
    email: string,
    firstname: string,
    lastname: string,
    company: string,
    timezone: string,
    type: arranger_users_enums_pb.Type,
    role: number,
    apiKey: string,
    createdAt: number,
    updatedAt: number,
  }
}

export class EmailVal extends jspb.Message {
  getValue(): string;
  setValue(value: string): EmailVal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailVal.AsObject;
  static toObject(includeInstance: boolean, msg: EmailVal): EmailVal.AsObject;
  static serializeBinaryToWriter(message: EmailVal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailVal;
  static deserializeBinaryFromReader(message: EmailVal, reader: jspb.BinaryReader): EmailVal;
}

export namespace EmailVal {
  export type AsObject = {
    value: string,
  }
}

export class FirstnameVal extends jspb.Message {
  getValue(): string;
  setValue(value: string): FirstnameVal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FirstnameVal.AsObject;
  static toObject(includeInstance: boolean, msg: FirstnameVal): FirstnameVal.AsObject;
  static serializeBinaryToWriter(message: FirstnameVal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FirstnameVal;
  static deserializeBinaryFromReader(message: FirstnameVal, reader: jspb.BinaryReader): FirstnameVal;
}

export namespace FirstnameVal {
  export type AsObject = {
    value: string,
  }
}

export class LastnameVal extends jspb.Message {
  getValue(): string;
  setValue(value: string): LastnameVal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LastnameVal.AsObject;
  static toObject(includeInstance: boolean, msg: LastnameVal): LastnameVal.AsObject;
  static serializeBinaryToWriter(message: LastnameVal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LastnameVal;
  static deserializeBinaryFromReader(message: LastnameVal, reader: jspb.BinaryReader): LastnameVal;
}

export namespace LastnameVal {
  export type AsObject = {
    value: string,
  }
}

export class CompanyVal extends jspb.Message {
  getValue(): string;
  setValue(value: string): CompanyVal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompanyVal.AsObject;
  static toObject(includeInstance: boolean, msg: CompanyVal): CompanyVal.AsObject;
  static serializeBinaryToWriter(message: CompanyVal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompanyVal;
  static deserializeBinaryFromReader(message: CompanyVal, reader: jspb.BinaryReader): CompanyVal;
}

export namespace CompanyVal {
  export type AsObject = {
    value: string,
  }
}

export class TimezoneVal extends jspb.Message {
  getValue(): string;
  setValue(value: string): TimezoneVal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimezoneVal.AsObject;
  static toObject(includeInstance: boolean, msg: TimezoneVal): TimezoneVal.AsObject;
  static serializeBinaryToWriter(message: TimezoneVal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimezoneVal;
  static deserializeBinaryFromReader(message: TimezoneVal, reader: jspb.BinaryReader): TimezoneVal;
}

export namespace TimezoneVal {
  export type AsObject = {
    value: string,
  }
}

export class TypeVal extends jspb.Message {
  getValue(): arranger_users_enums_pb.Type;
  setValue(value: arranger_users_enums_pb.Type): TypeVal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypeVal.AsObject;
  static toObject(includeInstance: boolean, msg: TypeVal): TypeVal.AsObject;
  static serializeBinaryToWriter(message: TypeVal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypeVal;
  static deserializeBinaryFromReader(message: TypeVal, reader: jspb.BinaryReader): TypeVal;
}

export namespace TypeVal {
  export type AsObject = {
    value: arranger_users_enums_pb.Type,
  }
}

export class RoleVal extends jspb.Message {
  getValue(): number;
  setValue(value: number): RoleVal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleVal.AsObject;
  static toObject(includeInstance: boolean, msg: RoleVal): RoleVal.AsObject;
  static serializeBinaryToWriter(message: RoleVal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleVal;
  static deserializeBinaryFromReader(message: RoleVal, reader: jspb.BinaryReader): RoleVal;
}

export namespace RoleVal {
  export type AsObject = {
    value: number,
  }
}

export class PasswordVal extends jspb.Message {
  getValue(): string;
  setValue(value: string): PasswordVal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PasswordVal.AsObject;
  static toObject(includeInstance: boolean, msg: PasswordVal): PasswordVal.AsObject;
  static serializeBinaryToWriter(message: PasswordVal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PasswordVal;
  static deserializeBinaryFromReader(message: PasswordVal, reader: jspb.BinaryReader): PasswordVal;
}

export namespace PasswordVal {
  export type AsObject = {
    value: string,
  }
}

