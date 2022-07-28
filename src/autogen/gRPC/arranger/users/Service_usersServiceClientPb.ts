/**
 * @fileoverview gRPC-Web generated client stub for users.api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as arranger_users_service_users_pb from '../../arranger/users/service_users_pb';


export class UsersServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGet = new grpcWeb.MethodDescriptor(
    '/users.api.v1.UsersService/Get',
    grpcWeb.MethodType.UNARY,
    arranger_users_service_users_pb.GetRequest,
    arranger_users_service_users_pb.GetResponse,
    (request: arranger_users_service_users_pb.GetRequest) => {
      return request.serializeBinary();
    },
    arranger_users_service_users_pb.GetResponse.deserializeBinary
  );

  get(
    request: arranger_users_service_users_pb.GetRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_users_service_users_pb.GetResponse>;

  get(
    request: arranger_users_service_users_pb.GetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_users_service_users_pb.GetResponse) => void): grpcWeb.ClientReadableStream<arranger_users_service_users_pb.GetResponse>;

  get(
    request: arranger_users_service_users_pb.GetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_users_service_users_pb.GetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.UsersService/Get',
        request,
        metadata || {},
        this.methodInfoGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.UsersService/Get',
    request,
    metadata || {},
    this.methodInfoGet);
  }

  methodInfoList = new grpcWeb.MethodDescriptor(
    '/users.api.v1.UsersService/List',
    grpcWeb.MethodType.UNARY,
    arranger_users_service_users_pb.ListRequest,
    arranger_users_service_users_pb.ListResponse,
    (request: arranger_users_service_users_pb.ListRequest) => {
      return request.serializeBinary();
    },
    arranger_users_service_users_pb.ListResponse.deserializeBinary
  );

  list(
    request: arranger_users_service_users_pb.ListRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_users_service_users_pb.ListResponse>;

  list(
    request: arranger_users_service_users_pb.ListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_users_service_users_pb.ListResponse) => void): grpcWeb.ClientReadableStream<arranger_users_service_users_pb.ListResponse>;

  list(
    request: arranger_users_service_users_pb.ListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_users_service_users_pb.ListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.UsersService/List',
        request,
        metadata || {},
        this.methodInfoList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.UsersService/List',
    request,
    metadata || {},
    this.methodInfoList);
  }

  methodInfoCount = new grpcWeb.MethodDescriptor(
    '/users.api.v1.UsersService/Count',
    grpcWeb.MethodType.UNARY,
    arranger_users_service_users_pb.CountRequest,
    arranger_users_service_users_pb.CountResponse,
    (request: arranger_users_service_users_pb.CountRequest) => {
      return request.serializeBinary();
    },
    arranger_users_service_users_pb.CountResponse.deserializeBinary
  );

  count(
    request: arranger_users_service_users_pb.CountRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_users_service_users_pb.CountResponse>;

  count(
    request: arranger_users_service_users_pb.CountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_users_service_users_pb.CountResponse) => void): grpcWeb.ClientReadableStream<arranger_users_service_users_pb.CountResponse>;

  count(
    request: arranger_users_service_users_pb.CountRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_users_service_users_pb.CountResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.UsersService/Count',
        request,
        metadata || {},
        this.methodInfoCount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.UsersService/Count',
    request,
    metadata || {},
    this.methodInfoCount);
  }

  methodInfoCreate = new grpcWeb.MethodDescriptor(
    '/users.api.v1.UsersService/Create',
    grpcWeb.MethodType.UNARY,
    arranger_users_service_users_pb.CreateRequest,
    arranger_users_service_users_pb.CreateResponse,
    (request: arranger_users_service_users_pb.CreateRequest) => {
      return request.serializeBinary();
    },
    arranger_users_service_users_pb.CreateResponse.deserializeBinary
  );

  create(
    request: arranger_users_service_users_pb.CreateRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_users_service_users_pb.CreateResponse>;

  create(
    request: arranger_users_service_users_pb.CreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_users_service_users_pb.CreateResponse) => void): grpcWeb.ClientReadableStream<arranger_users_service_users_pb.CreateResponse>;

  create(
    request: arranger_users_service_users_pb.CreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_users_service_users_pb.CreateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.UsersService/Create',
        request,
        metadata || {},
        this.methodInfoCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.UsersService/Create',
    request,
    metadata || {},
    this.methodInfoCreate);
  }

  methodInfoUpdate = new grpcWeb.MethodDescriptor(
    '/users.api.v1.UsersService/Update',
    grpcWeb.MethodType.UNARY,
    arranger_users_service_users_pb.UpdateRequest,
    arranger_users_service_users_pb.UpdateResponse,
    (request: arranger_users_service_users_pb.UpdateRequest) => {
      return request.serializeBinary();
    },
    arranger_users_service_users_pb.UpdateResponse.deserializeBinary
  );

  update(
    request: arranger_users_service_users_pb.UpdateRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_users_service_users_pb.UpdateResponse>;

  update(
    request: arranger_users_service_users_pb.UpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_users_service_users_pb.UpdateResponse) => void): grpcWeb.ClientReadableStream<arranger_users_service_users_pb.UpdateResponse>;

  update(
    request: arranger_users_service_users_pb.UpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_users_service_users_pb.UpdateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.UsersService/Update',
        request,
        metadata || {},
        this.methodInfoUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.UsersService/Update',
    request,
    metadata || {},
    this.methodInfoUpdate);
  }

  methodInfoDelete = new grpcWeb.MethodDescriptor(
    '/users.api.v1.UsersService/Delete',
    grpcWeb.MethodType.UNARY,
    arranger_users_service_users_pb.DeleteRequest,
    arranger_users_service_users_pb.DeleteResponse,
    (request: arranger_users_service_users_pb.DeleteRequest) => {
      return request.serializeBinary();
    },
    arranger_users_service_users_pb.DeleteResponse.deserializeBinary
  );

  delete(
    request: arranger_users_service_users_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_users_service_users_pb.DeleteResponse>;

  delete(
    request: arranger_users_service_users_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_users_service_users_pb.DeleteResponse) => void): grpcWeb.ClientReadableStream<arranger_users_service_users_pb.DeleteResponse>;

  delete(
    request: arranger_users_service_users_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_users_service_users_pb.DeleteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.UsersService/Delete',
        request,
        metadata || {},
        this.methodInfoDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.UsersService/Delete',
    request,
    metadata || {},
    this.methodInfoDelete);
  }

  methodInfoRegister = new grpcWeb.MethodDescriptor(
    '/users.api.v1.UsersService/Register',
    grpcWeb.MethodType.UNARY,
    arranger_users_service_users_pb.RegisterRequest,
    arranger_users_service_users_pb.RegisterResponse,
    (request: arranger_users_service_users_pb.RegisterRequest) => {
      return request.serializeBinary();
    },
    arranger_users_service_users_pb.RegisterResponse.deserializeBinary
  );

  register(
    request: arranger_users_service_users_pb.RegisterRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_users_service_users_pb.RegisterResponse>;

  register(
    request: arranger_users_service_users_pb.RegisterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_users_service_users_pb.RegisterResponse) => void): grpcWeb.ClientReadableStream<arranger_users_service_users_pb.RegisterResponse>;

  register(
    request: arranger_users_service_users_pb.RegisterRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_users_service_users_pb.RegisterResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.UsersService/Register',
        request,
        metadata || {},
        this.methodInfoRegister,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.UsersService/Register',
    request,
    metadata || {},
    this.methodInfoRegister);
  }

  methodInfoResetPassword = new grpcWeb.MethodDescriptor(
    '/users.api.v1.UsersService/ResetPassword',
    grpcWeb.MethodType.UNARY,
    arranger_users_service_users_pb.ResetPasswordRequest,
    arranger_users_service_users_pb.ResetPasswordResponse,
    (request: arranger_users_service_users_pb.ResetPasswordRequest) => {
      return request.serializeBinary();
    },
    arranger_users_service_users_pb.ResetPasswordResponse.deserializeBinary
  );

  resetPassword(
    request: arranger_users_service_users_pb.ResetPasswordRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_users_service_users_pb.ResetPasswordResponse>;

  resetPassword(
    request: arranger_users_service_users_pb.ResetPasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_users_service_users_pb.ResetPasswordResponse) => void): grpcWeb.ClientReadableStream<arranger_users_service_users_pb.ResetPasswordResponse>;

  resetPassword(
    request: arranger_users_service_users_pb.ResetPasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_users_service_users_pb.ResetPasswordResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.UsersService/ResetPassword',
        request,
        metadata || {},
        this.methodInfoResetPassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.UsersService/ResetPassword',
    request,
    metadata || {},
    this.methodInfoResetPassword);
  }

  methodInfoRemindPassword = new grpcWeb.MethodDescriptor(
    '/users.api.v1.UsersService/RemindPassword',
    grpcWeb.MethodType.UNARY,
    arranger_users_service_users_pb.RemindPasswordRequest,
    arranger_users_service_users_pb.RemindPasswordResponse,
    (request: arranger_users_service_users_pb.RemindPasswordRequest) => {
      return request.serializeBinary();
    },
    arranger_users_service_users_pb.RemindPasswordResponse.deserializeBinary
  );

  remindPassword(
    request: arranger_users_service_users_pb.RemindPasswordRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_users_service_users_pb.RemindPasswordResponse>;

  remindPassword(
    request: arranger_users_service_users_pb.RemindPasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_users_service_users_pb.RemindPasswordResponse) => void): grpcWeb.ClientReadableStream<arranger_users_service_users_pb.RemindPasswordResponse>;

  remindPassword(
    request: arranger_users_service_users_pb.RemindPasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_users_service_users_pb.RemindPasswordResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.UsersService/RemindPassword',
        request,
        metadata || {},
        this.methodInfoRemindPassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.UsersService/RemindPassword',
    request,
    metadata || {},
    this.methodInfoRemindPassword);
  }

}

