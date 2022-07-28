/**
 * @fileoverview gRPC-Web generated client stub for jobs.api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as arranger_jobs_service_jobs_pb from '../../arranger/jobs/service_jobs_pb';


export class JobsServiceClient {
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
    '/jobs.api.v1.JobsService/Get',
    grpcWeb.MethodType.UNARY,
    arranger_jobs_service_jobs_pb.GetRequest,
    arranger_jobs_service_jobs_pb.GetResponse,
    (request: arranger_jobs_service_jobs_pb.GetRequest) => {
      return request.serializeBinary();
    },
    arranger_jobs_service_jobs_pb.GetResponse.deserializeBinary
  );

  get(
    request: arranger_jobs_service_jobs_pb.GetRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_jobs_service_jobs_pb.GetResponse>;

  get(
    request: arranger_jobs_service_jobs_pb.GetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_jobs_service_jobs_pb.GetResponse) => void): grpcWeb.ClientReadableStream<arranger_jobs_service_jobs_pb.GetResponse>;

  get(
    request: arranger_jobs_service_jobs_pb.GetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_jobs_service_jobs_pb.GetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jobs.api.v1.JobsService/Get',
        request,
        metadata || {},
        this.methodInfoGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jobs.api.v1.JobsService/Get',
    request,
    metadata || {},
    this.methodInfoGet);
  }

  methodInfoList = new grpcWeb.MethodDescriptor(
    '/jobs.api.v1.JobsService/List',
    grpcWeb.MethodType.UNARY,
    arranger_jobs_service_jobs_pb.ListRequest,
    arranger_jobs_service_jobs_pb.ListResponse,
    (request: arranger_jobs_service_jobs_pb.ListRequest) => {
      return request.serializeBinary();
    },
    arranger_jobs_service_jobs_pb.ListResponse.deserializeBinary
  );

  list(
    request: arranger_jobs_service_jobs_pb.ListRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_jobs_service_jobs_pb.ListResponse>;

  list(
    request: arranger_jobs_service_jobs_pb.ListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_jobs_service_jobs_pb.ListResponse) => void): grpcWeb.ClientReadableStream<arranger_jobs_service_jobs_pb.ListResponse>;

  list(
    request: arranger_jobs_service_jobs_pb.ListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_jobs_service_jobs_pb.ListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jobs.api.v1.JobsService/List',
        request,
        metadata || {},
        this.methodInfoList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jobs.api.v1.JobsService/List',
    request,
    metadata || {},
    this.methodInfoList);
  }

  methodInfoCount = new grpcWeb.MethodDescriptor(
    '/jobs.api.v1.JobsService/Count',
    grpcWeb.MethodType.UNARY,
    arranger_jobs_service_jobs_pb.CountRequest,
    arranger_jobs_service_jobs_pb.CountResponse,
    (request: arranger_jobs_service_jobs_pb.CountRequest) => {
      return request.serializeBinary();
    },
    arranger_jobs_service_jobs_pb.CountResponse.deserializeBinary
  );

  count(
    request: arranger_jobs_service_jobs_pb.CountRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_jobs_service_jobs_pb.CountResponse>;

  count(
    request: arranger_jobs_service_jobs_pb.CountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_jobs_service_jobs_pb.CountResponse) => void): grpcWeb.ClientReadableStream<arranger_jobs_service_jobs_pb.CountResponse>;

  count(
    request: arranger_jobs_service_jobs_pb.CountRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_jobs_service_jobs_pb.CountResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jobs.api.v1.JobsService/Count',
        request,
        metadata || {},
        this.methodInfoCount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jobs.api.v1.JobsService/Count',
    request,
    metadata || {},
    this.methodInfoCount);
  }

  methodInfoCreate = new grpcWeb.MethodDescriptor(
    '/jobs.api.v1.JobsService/Create',
    grpcWeb.MethodType.UNARY,
    arranger_jobs_service_jobs_pb.CreateRequests,
    arranger_jobs_service_jobs_pb.CreateResponse,
    (request: arranger_jobs_service_jobs_pb.CreateRequests) => {
      return request.serializeBinary();
    },
    arranger_jobs_service_jobs_pb.CreateResponse.deserializeBinary
  );

  create(
    request: arranger_jobs_service_jobs_pb.CreateRequests,
    metadata: grpcWeb.Metadata | null): Promise<arranger_jobs_service_jobs_pb.CreateResponse>;

  create(
    request: arranger_jobs_service_jobs_pb.CreateRequests,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_jobs_service_jobs_pb.CreateResponse) => void): grpcWeb.ClientReadableStream<arranger_jobs_service_jobs_pb.CreateResponse>;

  create(
    request: arranger_jobs_service_jobs_pb.CreateRequests,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_jobs_service_jobs_pb.CreateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jobs.api.v1.JobsService/Create',
        request,
        metadata || {},
        this.methodInfoCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jobs.api.v1.JobsService/Create',
    request,
    metadata || {},
    this.methodInfoCreate);
  }

  methodInfoCancel = new grpcWeb.MethodDescriptor(
    '/jobs.api.v1.JobsService/Cancel',
    grpcWeb.MethodType.UNARY,
    arranger_jobs_service_jobs_pb.CancelRequest,
    arranger_jobs_service_jobs_pb.CancelResponse,
    (request: arranger_jobs_service_jobs_pb.CancelRequest) => {
      return request.serializeBinary();
    },
    arranger_jobs_service_jobs_pb.CancelResponse.deserializeBinary
  );

  cancel(
    request: arranger_jobs_service_jobs_pb.CancelRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_jobs_service_jobs_pb.CancelResponse>;

  cancel(
    request: arranger_jobs_service_jobs_pb.CancelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_jobs_service_jobs_pb.CancelResponse) => void): grpcWeb.ClientReadableStream<arranger_jobs_service_jobs_pb.CancelResponse>;

  cancel(
    request: arranger_jobs_service_jobs_pb.CancelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_jobs_service_jobs_pb.CancelResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jobs.api.v1.JobsService/Cancel',
        request,
        metadata || {},
        this.methodInfoCancel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jobs.api.v1.JobsService/Cancel',
    request,
    metadata || {},
    this.methodInfoCancel);
  }

  methodInfoDelete = new grpcWeb.MethodDescriptor(
    '/jobs.api.v1.JobsService/Delete',
    grpcWeb.MethodType.UNARY,
    arranger_jobs_service_jobs_pb.DeleteRequest,
    arranger_jobs_service_jobs_pb.DeleteResponse,
    (request: arranger_jobs_service_jobs_pb.DeleteRequest) => {
      return request.serializeBinary();
    },
    arranger_jobs_service_jobs_pb.DeleteResponse.deserializeBinary
  );

  delete(
    request: arranger_jobs_service_jobs_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_jobs_service_jobs_pb.DeleteResponse>;

  delete(
    request: arranger_jobs_service_jobs_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_jobs_service_jobs_pb.DeleteResponse) => void): grpcWeb.ClientReadableStream<arranger_jobs_service_jobs_pb.DeleteResponse>;

  delete(
    request: arranger_jobs_service_jobs_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_jobs_service_jobs_pb.DeleteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jobs.api.v1.JobsService/Delete',
        request,
        metadata || {},
        this.methodInfoDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jobs.api.v1.JobsService/Delete',
    request,
    metadata || {},
    this.methodInfoDelete);
  }

}

export class ExternalJobsServiceClient {
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
    '/jobs.api.v1.ExternalJobsService/Get',
    grpcWeb.MethodType.UNARY,
    arranger_jobs_service_jobs_pb.GetRequest,
    arranger_jobs_service_jobs_pb.GetResponse,
    (request: arranger_jobs_service_jobs_pb.GetRequest) => {
      return request.serializeBinary();
    },
    arranger_jobs_service_jobs_pb.GetResponse.deserializeBinary
  );

  get(
    request: arranger_jobs_service_jobs_pb.GetRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_jobs_service_jobs_pb.GetResponse>;

  get(
    request: arranger_jobs_service_jobs_pb.GetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_jobs_service_jobs_pb.GetResponse) => void): grpcWeb.ClientReadableStream<arranger_jobs_service_jobs_pb.GetResponse>;

  get(
    request: arranger_jobs_service_jobs_pb.GetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_jobs_service_jobs_pb.GetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jobs.api.v1.ExternalJobsService/Get',
        request,
        metadata || {},
        this.methodInfoGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jobs.api.v1.ExternalJobsService/Get',
    request,
    metadata || {},
    this.methodInfoGet);
  }

  methodInfoList = new grpcWeb.MethodDescriptor(
    '/jobs.api.v1.ExternalJobsService/List',
    grpcWeb.MethodType.UNARY,
    arranger_jobs_service_jobs_pb.ListRequest,
    arranger_jobs_service_jobs_pb.ListResponse,
    (request: arranger_jobs_service_jobs_pb.ListRequest) => {
      return request.serializeBinary();
    },
    arranger_jobs_service_jobs_pb.ListResponse.deserializeBinary
  );

  list(
    request: arranger_jobs_service_jobs_pb.ListRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_jobs_service_jobs_pb.ListResponse>;

  list(
    request: arranger_jobs_service_jobs_pb.ListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_jobs_service_jobs_pb.ListResponse) => void): grpcWeb.ClientReadableStream<arranger_jobs_service_jobs_pb.ListResponse>;

  list(
    request: arranger_jobs_service_jobs_pb.ListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_jobs_service_jobs_pb.ListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jobs.api.v1.ExternalJobsService/List',
        request,
        metadata || {},
        this.methodInfoList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jobs.api.v1.ExternalJobsService/List',
    request,
    metadata || {},
    this.methodInfoList);
  }

  methodInfoCount = new grpcWeb.MethodDescriptor(
    '/jobs.api.v1.ExternalJobsService/Count',
    grpcWeb.MethodType.UNARY,
    arranger_jobs_service_jobs_pb.CountRequest,
    arranger_jobs_service_jobs_pb.CountResponse,
    (request: arranger_jobs_service_jobs_pb.CountRequest) => {
      return request.serializeBinary();
    },
    arranger_jobs_service_jobs_pb.CountResponse.deserializeBinary
  );

  count(
    request: arranger_jobs_service_jobs_pb.CountRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_jobs_service_jobs_pb.CountResponse>;

  count(
    request: arranger_jobs_service_jobs_pb.CountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_jobs_service_jobs_pb.CountResponse) => void): grpcWeb.ClientReadableStream<arranger_jobs_service_jobs_pb.CountResponse>;

  count(
    request: arranger_jobs_service_jobs_pb.CountRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_jobs_service_jobs_pb.CountResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jobs.api.v1.ExternalJobsService/Count',
        request,
        metadata || {},
        this.methodInfoCount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jobs.api.v1.ExternalJobsService/Count',
    request,
    metadata || {},
    this.methodInfoCount);
  }

  methodInfoCreate = new grpcWeb.MethodDescriptor(
    '/jobs.api.v1.ExternalJobsService/Create',
    grpcWeb.MethodType.UNARY,
    arranger_jobs_service_jobs_pb.CreateRequests,
    arranger_jobs_service_jobs_pb.CreateResponse,
    (request: arranger_jobs_service_jobs_pb.CreateRequests) => {
      return request.serializeBinary();
    },
    arranger_jobs_service_jobs_pb.CreateResponse.deserializeBinary
  );

  create(
    request: arranger_jobs_service_jobs_pb.CreateRequests,
    metadata: grpcWeb.Metadata | null): Promise<arranger_jobs_service_jobs_pb.CreateResponse>;

  create(
    request: arranger_jobs_service_jobs_pb.CreateRequests,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_jobs_service_jobs_pb.CreateResponse) => void): grpcWeb.ClientReadableStream<arranger_jobs_service_jobs_pb.CreateResponse>;

  create(
    request: arranger_jobs_service_jobs_pb.CreateRequests,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_jobs_service_jobs_pb.CreateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jobs.api.v1.ExternalJobsService/Create',
        request,
        metadata || {},
        this.methodInfoCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jobs.api.v1.ExternalJobsService/Create',
    request,
    metadata || {},
    this.methodInfoCreate);
  }

  methodInfoCancel = new grpcWeb.MethodDescriptor(
    '/jobs.api.v1.ExternalJobsService/Cancel',
    grpcWeb.MethodType.UNARY,
    arranger_jobs_service_jobs_pb.CancelRequest,
    arranger_jobs_service_jobs_pb.CancelResponse,
    (request: arranger_jobs_service_jobs_pb.CancelRequest) => {
      return request.serializeBinary();
    },
    arranger_jobs_service_jobs_pb.CancelResponse.deserializeBinary
  );

  cancel(
    request: arranger_jobs_service_jobs_pb.CancelRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_jobs_service_jobs_pb.CancelResponse>;

  cancel(
    request: arranger_jobs_service_jobs_pb.CancelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_jobs_service_jobs_pb.CancelResponse) => void): grpcWeb.ClientReadableStream<arranger_jobs_service_jobs_pb.CancelResponse>;

  cancel(
    request: arranger_jobs_service_jobs_pb.CancelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_jobs_service_jobs_pb.CancelResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jobs.api.v1.ExternalJobsService/Cancel',
        request,
        metadata || {},
        this.methodInfoCancel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jobs.api.v1.ExternalJobsService/Cancel',
    request,
    metadata || {},
    this.methodInfoCancel);
  }

  methodInfoDelete = new grpcWeb.MethodDescriptor(
    '/jobs.api.v1.ExternalJobsService/Delete',
    grpcWeb.MethodType.UNARY,
    arranger_jobs_service_jobs_pb.DeleteRequest,
    arranger_jobs_service_jobs_pb.DeleteResponse,
    (request: arranger_jobs_service_jobs_pb.DeleteRequest) => {
      return request.serializeBinary();
    },
    arranger_jobs_service_jobs_pb.DeleteResponse.deserializeBinary
  );

  delete(
    request: arranger_jobs_service_jobs_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_jobs_service_jobs_pb.DeleteResponse>;

  delete(
    request: arranger_jobs_service_jobs_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_jobs_service_jobs_pb.DeleteResponse) => void): grpcWeb.ClientReadableStream<arranger_jobs_service_jobs_pb.DeleteResponse>;

  delete(
    request: arranger_jobs_service_jobs_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_jobs_service_jobs_pb.DeleteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jobs.api.v1.ExternalJobsService/Delete',
        request,
        metadata || {},
        this.methodInfoDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jobs.api.v1.ExternalJobsService/Delete',
    request,
    metadata || {},
    this.methodInfoDelete);
  }

}

