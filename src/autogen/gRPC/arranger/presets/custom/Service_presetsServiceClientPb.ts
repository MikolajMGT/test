/**
 * @fileoverview gRPC-Web generated client stub for presets.custom.api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as arranger_presets_custom_service_presets_pb from '../../../arranger/presets/custom/service_presets_pb';


export class CustomPresetsServiceClient {
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
    '/presets.custom.api.v1.CustomPresetsService/Get',
    grpcWeb.MethodType.UNARY,
    arranger_presets_custom_service_presets_pb.GetRequest,
    arranger_presets_custom_service_presets_pb.GetResponse,
    (request: arranger_presets_custom_service_presets_pb.GetRequest) => {
      return request.serializeBinary();
    },
    arranger_presets_custom_service_presets_pb.GetResponse.deserializeBinary
  );

  get(
    request: arranger_presets_custom_service_presets_pb.GetRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_presets_custom_service_presets_pb.GetResponse>;

  get(
    request: arranger_presets_custom_service_presets_pb.GetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_presets_custom_service_presets_pb.GetResponse) => void): grpcWeb.ClientReadableStream<arranger_presets_custom_service_presets_pb.GetResponse>;

  get(
    request: arranger_presets_custom_service_presets_pb.GetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_presets_custom_service_presets_pb.GetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/presets.custom.api.v1.CustomPresetsService/Get',
        request,
        metadata || {},
        this.methodInfoGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/presets.custom.api.v1.CustomPresetsService/Get',
    request,
    metadata || {},
    this.methodInfoGet);
  }

  methodInfoList = new grpcWeb.MethodDescriptor(
    '/presets.custom.api.v1.CustomPresetsService/List',
    grpcWeb.MethodType.UNARY,
    arranger_presets_custom_service_presets_pb.ListRequest,
    arranger_presets_custom_service_presets_pb.ListResponse,
    (request: arranger_presets_custom_service_presets_pb.ListRequest) => {
      return request.serializeBinary();
    },
    arranger_presets_custom_service_presets_pb.ListResponse.deserializeBinary
  );

  list(
    request: arranger_presets_custom_service_presets_pb.ListRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_presets_custom_service_presets_pb.ListResponse>;

  list(
    request: arranger_presets_custom_service_presets_pb.ListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_presets_custom_service_presets_pb.ListResponse) => void): grpcWeb.ClientReadableStream<arranger_presets_custom_service_presets_pb.ListResponse>;

  list(
    request: arranger_presets_custom_service_presets_pb.ListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_presets_custom_service_presets_pb.ListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/presets.custom.api.v1.CustomPresetsService/List',
        request,
        metadata || {},
        this.methodInfoList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/presets.custom.api.v1.CustomPresetsService/List',
    request,
    metadata || {},
    this.methodInfoList);
  }

  methodInfoCount = new grpcWeb.MethodDescriptor(
    '/presets.custom.api.v1.CustomPresetsService/Count',
    grpcWeb.MethodType.UNARY,
    arranger_presets_custom_service_presets_pb.CountRequest,
    arranger_presets_custom_service_presets_pb.CountResponse,
    (request: arranger_presets_custom_service_presets_pb.CountRequest) => {
      return request.serializeBinary();
    },
    arranger_presets_custom_service_presets_pb.CountResponse.deserializeBinary
  );

  count(
    request: arranger_presets_custom_service_presets_pb.CountRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_presets_custom_service_presets_pb.CountResponse>;

  count(
    request: arranger_presets_custom_service_presets_pb.CountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_presets_custom_service_presets_pb.CountResponse) => void): grpcWeb.ClientReadableStream<arranger_presets_custom_service_presets_pb.CountResponse>;

  count(
    request: arranger_presets_custom_service_presets_pb.CountRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_presets_custom_service_presets_pb.CountResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/presets.custom.api.v1.CustomPresetsService/Count',
        request,
        metadata || {},
        this.methodInfoCount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/presets.custom.api.v1.CustomPresetsService/Count',
    request,
    metadata || {},
    this.methodInfoCount);
  }

  methodInfoCreate = new grpcWeb.MethodDescriptor(
    '/presets.custom.api.v1.CustomPresetsService/Create',
    grpcWeb.MethodType.UNARY,
    arranger_presets_custom_service_presets_pb.CreateRequest,
    arranger_presets_custom_service_presets_pb.CreateResponse,
    (request: arranger_presets_custom_service_presets_pb.CreateRequest) => {
      return request.serializeBinary();
    },
    arranger_presets_custom_service_presets_pb.CreateResponse.deserializeBinary
  );

  create(
    request: arranger_presets_custom_service_presets_pb.CreateRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_presets_custom_service_presets_pb.CreateResponse>;

  create(
    request: arranger_presets_custom_service_presets_pb.CreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_presets_custom_service_presets_pb.CreateResponse) => void): grpcWeb.ClientReadableStream<arranger_presets_custom_service_presets_pb.CreateResponse>;

  create(
    request: arranger_presets_custom_service_presets_pb.CreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_presets_custom_service_presets_pb.CreateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/presets.custom.api.v1.CustomPresetsService/Create',
        request,
        metadata || {},
        this.methodInfoCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/presets.custom.api.v1.CustomPresetsService/Create',
    request,
    metadata || {},
    this.methodInfoCreate);
  }

  methodInfoUpdate = new grpcWeb.MethodDescriptor(
    '/presets.custom.api.v1.CustomPresetsService/Update',
    grpcWeb.MethodType.UNARY,
    arranger_presets_custom_service_presets_pb.UpdateRequest,
    arranger_presets_custom_service_presets_pb.UpdateResponse,
    (request: arranger_presets_custom_service_presets_pb.UpdateRequest) => {
      return request.serializeBinary();
    },
    arranger_presets_custom_service_presets_pb.UpdateResponse.deserializeBinary
  );

  update(
    request: arranger_presets_custom_service_presets_pb.UpdateRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_presets_custom_service_presets_pb.UpdateResponse>;

  update(
    request: arranger_presets_custom_service_presets_pb.UpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_presets_custom_service_presets_pb.UpdateResponse) => void): grpcWeb.ClientReadableStream<arranger_presets_custom_service_presets_pb.UpdateResponse>;

  update(
    request: arranger_presets_custom_service_presets_pb.UpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_presets_custom_service_presets_pb.UpdateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/presets.custom.api.v1.CustomPresetsService/Update',
        request,
        metadata || {},
        this.methodInfoUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/presets.custom.api.v1.CustomPresetsService/Update',
    request,
    metadata || {},
    this.methodInfoUpdate);
  }

  methodInfoDelete = new grpcWeb.MethodDescriptor(
    '/presets.custom.api.v1.CustomPresetsService/Delete',
    grpcWeb.MethodType.UNARY,
    arranger_presets_custom_service_presets_pb.DeleteRequest,
    arranger_presets_custom_service_presets_pb.DeleteResponse,
    (request: arranger_presets_custom_service_presets_pb.DeleteRequest) => {
      return request.serializeBinary();
    },
    arranger_presets_custom_service_presets_pb.DeleteResponse.deserializeBinary
  );

  delete(
    request: arranger_presets_custom_service_presets_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_presets_custom_service_presets_pb.DeleteResponse>;

  delete(
    request: arranger_presets_custom_service_presets_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_presets_custom_service_presets_pb.DeleteResponse) => void): grpcWeb.ClientReadableStream<arranger_presets_custom_service_presets_pb.DeleteResponse>;

  delete(
    request: arranger_presets_custom_service_presets_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_presets_custom_service_presets_pb.DeleteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/presets.custom.api.v1.CustomPresetsService/Delete',
        request,
        metadata || {},
        this.methodInfoDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/presets.custom.api.v1.CustomPresetsService/Delete',
    request,
    metadata || {},
    this.methodInfoDelete);
  }

}

export class ExternalCustomPresetsServiceClient {
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
    '/presets.custom.api.v1.ExternalCustomPresetsService/Get',
    grpcWeb.MethodType.UNARY,
    arranger_presets_custom_service_presets_pb.GetRequest,
    arranger_presets_custom_service_presets_pb.GetResponse,
    (request: arranger_presets_custom_service_presets_pb.GetRequest) => {
      return request.serializeBinary();
    },
    arranger_presets_custom_service_presets_pb.GetResponse.deserializeBinary
  );

  get(
    request: arranger_presets_custom_service_presets_pb.GetRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_presets_custom_service_presets_pb.GetResponse>;

  get(
    request: arranger_presets_custom_service_presets_pb.GetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_presets_custom_service_presets_pb.GetResponse) => void): grpcWeb.ClientReadableStream<arranger_presets_custom_service_presets_pb.GetResponse>;

  get(
    request: arranger_presets_custom_service_presets_pb.GetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_presets_custom_service_presets_pb.GetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/presets.custom.api.v1.ExternalCustomPresetsService/Get',
        request,
        metadata || {},
        this.methodInfoGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/presets.custom.api.v1.ExternalCustomPresetsService/Get',
    request,
    metadata || {},
    this.methodInfoGet);
  }

  methodInfoList = new grpcWeb.MethodDescriptor(
    '/presets.custom.api.v1.ExternalCustomPresetsService/List',
    grpcWeb.MethodType.UNARY,
    arranger_presets_custom_service_presets_pb.ListRequest,
    arranger_presets_custom_service_presets_pb.ListResponse,
    (request: arranger_presets_custom_service_presets_pb.ListRequest) => {
      return request.serializeBinary();
    },
    arranger_presets_custom_service_presets_pb.ListResponse.deserializeBinary
  );

  list(
    request: arranger_presets_custom_service_presets_pb.ListRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_presets_custom_service_presets_pb.ListResponse>;

  list(
    request: arranger_presets_custom_service_presets_pb.ListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_presets_custom_service_presets_pb.ListResponse) => void): grpcWeb.ClientReadableStream<arranger_presets_custom_service_presets_pb.ListResponse>;

  list(
    request: arranger_presets_custom_service_presets_pb.ListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_presets_custom_service_presets_pb.ListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/presets.custom.api.v1.ExternalCustomPresetsService/List',
        request,
        metadata || {},
        this.methodInfoList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/presets.custom.api.v1.ExternalCustomPresetsService/List',
    request,
    metadata || {},
    this.methodInfoList);
  }

  methodInfoCount = new grpcWeb.MethodDescriptor(
    '/presets.custom.api.v1.ExternalCustomPresetsService/Count',
    grpcWeb.MethodType.UNARY,
    arranger_presets_custom_service_presets_pb.CountRequest,
    arranger_presets_custom_service_presets_pb.CountResponse,
    (request: arranger_presets_custom_service_presets_pb.CountRequest) => {
      return request.serializeBinary();
    },
    arranger_presets_custom_service_presets_pb.CountResponse.deserializeBinary
  );

  count(
    request: arranger_presets_custom_service_presets_pb.CountRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_presets_custom_service_presets_pb.CountResponse>;

  count(
    request: arranger_presets_custom_service_presets_pb.CountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_presets_custom_service_presets_pb.CountResponse) => void): grpcWeb.ClientReadableStream<arranger_presets_custom_service_presets_pb.CountResponse>;

  count(
    request: arranger_presets_custom_service_presets_pb.CountRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_presets_custom_service_presets_pb.CountResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/presets.custom.api.v1.ExternalCustomPresetsService/Count',
        request,
        metadata || {},
        this.methodInfoCount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/presets.custom.api.v1.ExternalCustomPresetsService/Count',
    request,
    metadata || {},
    this.methodInfoCount);
  }

  methodInfoCreate = new grpcWeb.MethodDescriptor(
    '/presets.custom.api.v1.ExternalCustomPresetsService/Create',
    grpcWeb.MethodType.UNARY,
    arranger_presets_custom_service_presets_pb.CreateRequest,
    arranger_presets_custom_service_presets_pb.CreateResponse,
    (request: arranger_presets_custom_service_presets_pb.CreateRequest) => {
      return request.serializeBinary();
    },
    arranger_presets_custom_service_presets_pb.CreateResponse.deserializeBinary
  );

  create(
    request: arranger_presets_custom_service_presets_pb.CreateRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_presets_custom_service_presets_pb.CreateResponse>;

  create(
    request: arranger_presets_custom_service_presets_pb.CreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_presets_custom_service_presets_pb.CreateResponse) => void): grpcWeb.ClientReadableStream<arranger_presets_custom_service_presets_pb.CreateResponse>;

  create(
    request: arranger_presets_custom_service_presets_pb.CreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_presets_custom_service_presets_pb.CreateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/presets.custom.api.v1.ExternalCustomPresetsService/Create',
        request,
        metadata || {},
        this.methodInfoCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/presets.custom.api.v1.ExternalCustomPresetsService/Create',
    request,
    metadata || {},
    this.methodInfoCreate);
  }

  methodInfoUpdate = new grpcWeb.MethodDescriptor(
    '/presets.custom.api.v1.ExternalCustomPresetsService/Update',
    grpcWeb.MethodType.UNARY,
    arranger_presets_custom_service_presets_pb.UpdateRequest,
    arranger_presets_custom_service_presets_pb.UpdateResponse,
    (request: arranger_presets_custom_service_presets_pb.UpdateRequest) => {
      return request.serializeBinary();
    },
    arranger_presets_custom_service_presets_pb.UpdateResponse.deserializeBinary
  );

  update(
    request: arranger_presets_custom_service_presets_pb.UpdateRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_presets_custom_service_presets_pb.UpdateResponse>;

  update(
    request: arranger_presets_custom_service_presets_pb.UpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_presets_custom_service_presets_pb.UpdateResponse) => void): grpcWeb.ClientReadableStream<arranger_presets_custom_service_presets_pb.UpdateResponse>;

  update(
    request: arranger_presets_custom_service_presets_pb.UpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_presets_custom_service_presets_pb.UpdateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/presets.custom.api.v1.ExternalCustomPresetsService/Update',
        request,
        metadata || {},
        this.methodInfoUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/presets.custom.api.v1.ExternalCustomPresetsService/Update',
    request,
    metadata || {},
    this.methodInfoUpdate);
  }

  methodInfoDelete = new grpcWeb.MethodDescriptor(
    '/presets.custom.api.v1.ExternalCustomPresetsService/Delete',
    grpcWeb.MethodType.UNARY,
    arranger_presets_custom_service_presets_pb.DeleteRequest,
    arranger_presets_custom_service_presets_pb.DeleteResponse,
    (request: arranger_presets_custom_service_presets_pb.DeleteRequest) => {
      return request.serializeBinary();
    },
    arranger_presets_custom_service_presets_pb.DeleteResponse.deserializeBinary
  );

  delete(
    request: arranger_presets_custom_service_presets_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_presets_custom_service_presets_pb.DeleteResponse>;

  delete(
    request: arranger_presets_custom_service_presets_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_presets_custom_service_presets_pb.DeleteResponse) => void): grpcWeb.ClientReadableStream<arranger_presets_custom_service_presets_pb.DeleteResponse>;

  delete(
    request: arranger_presets_custom_service_presets_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_presets_custom_service_presets_pb.DeleteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/presets.custom.api.v1.ExternalCustomPresetsService/Delete',
        request,
        metadata || {},
        this.methodInfoDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/presets.custom.api.v1.ExternalCustomPresetsService/Delete',
    request,
    metadata || {},
    this.methodInfoDelete);
  }

}

