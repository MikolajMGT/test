import * as jspb from 'google-protobuf'

import * as arranger_users_models_pb from '../../arranger/users/models_pb';
import * as arranger_users_enums_pb from '../../arranger/users/enums_pb';
import * as error_models_pb from '../../error/models_pb';


export class GetRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetRequest;

  getAuthId(): string;
  setAuthId(value: string): GetRequest;

  getEmail(): string;
  setEmail(value: string): GetRequest;

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
    authId: string,
    email: string,
  }
}

export class GetResponse extends jspb.Message {
  getUser(): arranger_users_models_pb.User | undefined;
  setUser(value?: arranger_users_models_pb.User): GetResponse;
  hasUser(): boolean;
  clearUser(): GetResponse;

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
    user?: arranger_users_models_pb.User.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListRequest;
  clearIdsList(): ListRequest;
  addIds(value: string, index?: number): ListRequest;

  getEmailsList(): Array<string>;
  setEmailsList(value: Array<string>): ListRequest;
  clearEmailsList(): ListRequest;
  addEmails(value: string, index?: number): ListRequest;

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
    emailsList: Array<string>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListResponse extends jspb.Message {
  getUsersList(): Array<arranger_users_models_pb.User>;
  setUsersList(value: Array<arranger_users_models_pb.User>): ListResponse;
  clearUsersList(): ListResponse;
  addUsers(value?: arranger_users_models_pb.User, index?: number): arranger_users_models_pb.User;

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
    usersList: Array<arranger_users_models_pb.User.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountRequest;
  clearIdsList(): CountRequest;
  addIds(value: string, index?: number): CountRequest;

  getEmailsList(): Array<string>;
  setEmailsList(value: Array<string>): CountRequest;
  clearEmailsList(): CountRequest;
  addEmails(value: string, index?: number): CountRequest;

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
    emailsList: Array<string>,
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
  getEmail(): string;
  setEmail(value: string): CreateRequest;

  getFirstname(): string;
  setFirstname(value: string): CreateRequest;

  getLastname(): string;
  setLastname(value: string): CreateRequest;

  getCompany(): string;
  setCompany(value: string): CreateRequest;

  getPassword(): string;
  setPassword(value: string): CreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRequest;
  static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
  export type AsObject = {
    email: string,
    firstname: string,
    lastname: string,
    company: string,
    password: string,
  }
}

export class CreateResponse extends jspb.Message {
  getUser(): arranger_users_models_pb.User | undefined;
  setUser(value?: arranger_users_models_pb.User): CreateResponse;
  hasUser(): boolean;
  clearUser(): CreateResponse;

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
    user?: arranger_users_models_pb.User.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class UpdateRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateRequest;

  getEmail(): arranger_users_models_pb.EmailVal | undefined;
  setEmail(value?: arranger_users_models_pb.EmailVal): UpdateRequest;
  hasEmail(): boolean;
  clearEmail(): UpdateRequest;

  getFirstname(): arranger_users_models_pb.FirstnameVal | undefined;
  setFirstname(value?: arranger_users_models_pb.FirstnameVal): UpdateRequest;
  hasFirstname(): boolean;
  clearFirstname(): UpdateRequest;

  getLastname(): arranger_users_models_pb.LastnameVal | undefined;
  setLastname(value?: arranger_users_models_pb.LastnameVal): UpdateRequest;
  hasLastname(): boolean;
  clearLastname(): UpdateRequest;

  getCompany(): arranger_users_models_pb.CompanyVal | undefined;
  setCompany(value?: arranger_users_models_pb.CompanyVal): UpdateRequest;
  hasCompany(): boolean;
  clearCompany(): UpdateRequest;

  getTimezone(): arranger_users_models_pb.TimezoneVal | undefined;
  setTimezone(value?: arranger_users_models_pb.TimezoneVal): UpdateRequest;
  hasTimezone(): boolean;
  clearTimezone(): UpdateRequest;

  getType(): arranger_users_models_pb.TypeVal | undefined;
  setType(value?: arranger_users_models_pb.TypeVal): UpdateRequest;
  hasType(): boolean;
  clearType(): UpdateRequest;

  getRole(): arranger_users_models_pb.RoleVal | undefined;
  setRole(value?: arranger_users_models_pb.RoleVal): UpdateRequest;
  hasRole(): boolean;
  clearRole(): UpdateRequest;

  getPassword(): arranger_users_models_pb.PasswordVal | undefined;
  setPassword(value?: arranger_users_models_pb.PasswordVal): UpdateRequest;
  hasPassword(): boolean;
  clearPassword(): UpdateRequest;

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
    email?: arranger_users_models_pb.EmailVal.AsObject,
    firstname?: arranger_users_models_pb.FirstnameVal.AsObject,
    lastname?: arranger_users_models_pb.LastnameVal.AsObject,
    company?: arranger_users_models_pb.CompanyVal.AsObject,
    timezone?: arranger_users_models_pb.TimezoneVal.AsObject,
    type?: arranger_users_models_pb.TypeVal.AsObject,
    role?: arranger_users_models_pb.RoleVal.AsObject,
    password?: arranger_users_models_pb.PasswordVal.AsObject,
  }
}

export class UpdateResponse extends jspb.Message {
  getUser(): arranger_users_models_pb.User | undefined;
  setUser(value?: arranger_users_models_pb.User): UpdateResponse;
  hasUser(): boolean;
  clearUser(): UpdateResponse;

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
    user?: arranger_users_models_pb.User.AsObject,
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

export class RegisterRequest extends jspb.Message {
  getAuthId(): string;
  setAuthId(value: string): RegisterRequest;

  getEmail(): string;
  setEmail(value: string): RegisterRequest;

  getFirstname(): string;
  setFirstname(value: string): RegisterRequest;

  getLastname(): string;
  setLastname(value: string): RegisterRequest;

  getCompany(): string;
  setCompany(value: string): RegisterRequest;

  getTimezone(): string;
  setTimezone(value: string): RegisterRequest;

  getType(): arranger_users_enums_pb.Type;
  setType(value: arranger_users_enums_pb.Type): RegisterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterRequest): RegisterRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterRequest;
  static deserializeBinaryFromReader(message: RegisterRequest, reader: jspb.BinaryReader): RegisterRequest;
}

export namespace RegisterRequest {
  export type AsObject = {
    authId: string,
    email: string,
    firstname: string,
    lastname: string,
    company: string,
    timezone: string,
    type: arranger_users_enums_pb.Type,
  }
}

export class RegisterResponse extends jspb.Message {
  getUser(): arranger_users_models_pb.User | undefined;
  setUser(value?: arranger_users_models_pb.User): RegisterResponse;
  hasUser(): boolean;
  clearUser(): RegisterResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): RegisterResponse;
  hasError(): boolean;
  clearError(): RegisterResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterResponse): RegisterResponse.AsObject;
  static serializeBinaryToWriter(message: RegisterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterResponse;
  static deserializeBinaryFromReader(message: RegisterResponse, reader: jspb.BinaryReader): RegisterResponse;
}

export namespace RegisterResponse {
  export type AsObject = {
    user?: arranger_users_models_pb.User.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ResetPasswordRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): ResetPasswordRequest;

  getPassword(): string;
  setPassword(value: string): ResetPasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetPasswordRequest): ResetPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: ResetPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetPasswordRequest;
  static deserializeBinaryFromReader(message: ResetPasswordRequest, reader: jspb.BinaryReader): ResetPasswordRequest;
}

export namespace ResetPasswordRequest {
  export type AsObject = {
    token: string,
    password: string,
  }
}

export class ResetPasswordResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ResetPasswordResponse;
  hasError(): boolean;
  clearError(): ResetPasswordResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetPasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResetPasswordResponse): ResetPasswordResponse.AsObject;
  static serializeBinaryToWriter(message: ResetPasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetPasswordResponse;
  static deserializeBinaryFromReader(message: ResetPasswordResponse, reader: jspb.BinaryReader): ResetPasswordResponse;
}

export namespace ResetPasswordResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class RemindPasswordRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): RemindPasswordRequest;

  getReturnUrl(): string;
  setReturnUrl(value: string): RemindPasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemindPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemindPasswordRequest): RemindPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: RemindPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemindPasswordRequest;
  static deserializeBinaryFromReader(message: RemindPasswordRequest, reader: jspb.BinaryReader): RemindPasswordRequest;
}

export namespace RemindPasswordRequest {
  export type AsObject = {
    email: string,
    returnUrl: string,
  }
}

export class RemindPasswordResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): RemindPasswordResponse;
  hasError(): boolean;
  clearError(): RemindPasswordResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemindPasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemindPasswordResponse): RemindPasswordResponse.AsObject;
  static serializeBinaryToWriter(message: RemindPasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemindPasswordResponse;
  static deserializeBinaryFromReader(message: RemindPasswordResponse, reader: jspb.BinaryReader): RemindPasswordResponse;
}

export namespace RemindPasswordResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

