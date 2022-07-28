/**
 * @fileoverview gRPC-Web generated client stub for files.api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as arranger_files_service_files_pb from '../../arranger/files/service_files_pb';


export class FilesServiceClient {
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
    '/files.api.v1.FilesService/Get',
    grpcWeb.MethodType.UNARY,
    arranger_files_service_files_pb.GetRequest,
    arranger_files_service_files_pb.GetResponse,
    (request: arranger_files_service_files_pb.GetRequest) => {
      return request.serializeBinary();
    },
    arranger_files_service_files_pb.GetResponse.deserializeBinary
  );

  get(
    request: arranger_files_service_files_pb.GetRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_files_service_files_pb.GetResponse>;

  get(
    request: arranger_files_service_files_pb.GetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_files_service_files_pb.GetResponse) => void): grpcWeb.ClientReadableStream<arranger_files_service_files_pb.GetResponse>;

  get(
    request: arranger_files_service_files_pb.GetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_files_service_files_pb.GetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/files.api.v1.FilesService/Get',
        request,
        metadata || {},
        this.methodInfoGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/files.api.v1.FilesService/Get',
    request,
    metadata || {},
    this.methodInfoGet);
  }

  methodInfoList = new grpcWeb.MethodDescriptor(
    '/files.api.v1.FilesService/List',
    grpcWeb.MethodType.UNARY,
    arranger_files_service_files_pb.ListRequest,
    arranger_files_service_files_pb.ListResponse,
    (request: arranger_files_service_files_pb.ListRequest) => {
      return request.serializeBinary();
    },
    arranger_files_service_files_pb.ListResponse.deserializeBinary
  );

  list(
    request: arranger_files_service_files_pb.ListRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_files_service_files_pb.ListResponse>;

  list(
    request: arranger_files_service_files_pb.ListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_files_service_files_pb.ListResponse) => void): grpcWeb.ClientReadableStream<arranger_files_service_files_pb.ListResponse>;

  list(
    request: arranger_files_service_files_pb.ListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_files_service_files_pb.ListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/files.api.v1.FilesService/List',
        request,
        metadata || {},
        this.methodInfoList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/files.api.v1.FilesService/List',
    request,
    metadata || {},
    this.methodInfoList);
  }

  methodInfoDelete = new grpcWeb.MethodDescriptor(
    '/files.api.v1.FilesService/Delete',
    grpcWeb.MethodType.UNARY,
    arranger_files_service_files_pb.DeleteRequest,
    arranger_files_service_files_pb.DeleteResponse,
    (request: arranger_files_service_files_pb.DeleteRequest) => {
      return request.serializeBinary();
    },
    arranger_files_service_files_pb.DeleteResponse.deserializeBinary
  );

  delete(
    request: arranger_files_service_files_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_files_service_files_pb.DeleteResponse>;

  delete(
    request: arranger_files_service_files_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_files_service_files_pb.DeleteResponse) => void): grpcWeb.ClientReadableStream<arranger_files_service_files_pb.DeleteResponse>;

  delete(
    request: arranger_files_service_files_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_files_service_files_pb.DeleteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/files.api.v1.FilesService/Delete',
        request,
        metadata || {},
        this.methodInfoDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/files.api.v1.FilesService/Delete',
    request,
    metadata || {},
    this.methodInfoDelete);
  }

  methodInfoInitUpload = new grpcWeb.MethodDescriptor(
    '/files.api.v1.FilesService/InitUpload',
    grpcWeb.MethodType.UNARY,
    arranger_files_service_files_pb.InitUploadRequest,
    arranger_files_service_files_pb.InitUploadResponse,
    (request: arranger_files_service_files_pb.InitUploadRequest) => {
      return request.serializeBinary();
    },
    arranger_files_service_files_pb.InitUploadResponse.deserializeBinary
  );

  initUpload(
    request: arranger_files_service_files_pb.InitUploadRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_files_service_files_pb.InitUploadResponse>;

  initUpload(
    request: arranger_files_service_files_pb.InitUploadRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_files_service_files_pb.InitUploadResponse) => void): grpcWeb.ClientReadableStream<arranger_files_service_files_pb.InitUploadResponse>;

  initUpload(
    request: arranger_files_service_files_pb.InitUploadRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_files_service_files_pb.InitUploadResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/files.api.v1.FilesService/InitUpload',
        request,
        metadata || {},
        this.methodInfoInitUpload,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/files.api.v1.FilesService/InitUpload',
    request,
    metadata || {},
    this.methodInfoInitUpload);
  }

  methodInfoListUploadParts = new grpcWeb.MethodDescriptor(
    '/files.api.v1.FilesService/ListUploadParts',
    grpcWeb.MethodType.UNARY,
    arranger_files_service_files_pb.ListUploadPartsRequest,
    arranger_files_service_files_pb.ListUploadPartsResponse,
    (request: arranger_files_service_files_pb.ListUploadPartsRequest) => {
      return request.serializeBinary();
    },
    arranger_files_service_files_pb.ListUploadPartsResponse.deserializeBinary
  );

  listUploadParts(
    request: arranger_files_service_files_pb.ListUploadPartsRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_files_service_files_pb.ListUploadPartsResponse>;

  listUploadParts(
    request: arranger_files_service_files_pb.ListUploadPartsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_files_service_files_pb.ListUploadPartsResponse) => void): grpcWeb.ClientReadableStream<arranger_files_service_files_pb.ListUploadPartsResponse>;

  listUploadParts(
    request: arranger_files_service_files_pb.ListUploadPartsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_files_service_files_pb.ListUploadPartsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/files.api.v1.FilesService/ListUploadParts',
        request,
        metadata || {},
        this.methodInfoListUploadParts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/files.api.v1.FilesService/ListUploadParts',
    request,
    metadata || {},
    this.methodInfoListUploadParts);
  }

  methodInfoArrangeUploadPart = new grpcWeb.MethodDescriptor(
    '/files.api.v1.FilesService/ArrangeUploadPart',
    grpcWeb.MethodType.UNARY,
    arranger_files_service_files_pb.ArrangeUploadPartRequest,
    arranger_files_service_files_pb.ArrangeUploadPartResponse,
    (request: arranger_files_service_files_pb.ArrangeUploadPartRequest) => {
      return request.serializeBinary();
    },
    arranger_files_service_files_pb.ArrangeUploadPartResponse.deserializeBinary
  );

  arrangeUploadPart(
    request: arranger_files_service_files_pb.ArrangeUploadPartRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_files_service_files_pb.ArrangeUploadPartResponse>;

  arrangeUploadPart(
    request: arranger_files_service_files_pb.ArrangeUploadPartRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_files_service_files_pb.ArrangeUploadPartResponse) => void): grpcWeb.ClientReadableStream<arranger_files_service_files_pb.ArrangeUploadPartResponse>;

  arrangeUploadPart(
    request: arranger_files_service_files_pb.ArrangeUploadPartRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_files_service_files_pb.ArrangeUploadPartResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/files.api.v1.FilesService/ArrangeUploadPart',
        request,
        metadata || {},
        this.methodInfoArrangeUploadPart,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/files.api.v1.FilesService/ArrangeUploadPart',
    request,
    metadata || {},
    this.methodInfoArrangeUploadPart);
  }

  methodInfoFinalizeUpload = new grpcWeb.MethodDescriptor(
    '/files.api.v1.FilesService/FinalizeUpload',
    grpcWeb.MethodType.UNARY,
    arranger_files_service_files_pb.FinalizeUploadRequest,
    arranger_files_service_files_pb.FinalizeUploadResponse,
    (request: arranger_files_service_files_pb.FinalizeUploadRequest) => {
      return request.serializeBinary();
    },
    arranger_files_service_files_pb.FinalizeUploadResponse.deserializeBinary
  );

  finalizeUpload(
    request: arranger_files_service_files_pb.FinalizeUploadRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_files_service_files_pb.FinalizeUploadResponse>;

  finalizeUpload(
    request: arranger_files_service_files_pb.FinalizeUploadRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_files_service_files_pb.FinalizeUploadResponse) => void): grpcWeb.ClientReadableStream<arranger_files_service_files_pb.FinalizeUploadResponse>;

  finalizeUpload(
    request: arranger_files_service_files_pb.FinalizeUploadRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_files_service_files_pb.FinalizeUploadResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/files.api.v1.FilesService/FinalizeUpload',
        request,
        metadata || {},
        this.methodInfoFinalizeUpload,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/files.api.v1.FilesService/FinalizeUpload',
    request,
    metadata || {},
    this.methodInfoFinalizeUpload);
  }

  methodInfoCancelUpload = new grpcWeb.MethodDescriptor(
    '/files.api.v1.FilesService/CancelUpload',
    grpcWeb.MethodType.UNARY,
    arranger_files_service_files_pb.CancelUploadRequest,
    arranger_files_service_files_pb.CancelUploadResponse,
    (request: arranger_files_service_files_pb.CancelUploadRequest) => {
      return request.serializeBinary();
    },
    arranger_files_service_files_pb.CancelUploadResponse.deserializeBinary
  );

  cancelUpload(
    request: arranger_files_service_files_pb.CancelUploadRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_files_service_files_pb.CancelUploadResponse>;

  cancelUpload(
    request: arranger_files_service_files_pb.CancelUploadRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_files_service_files_pb.CancelUploadResponse) => void): grpcWeb.ClientReadableStream<arranger_files_service_files_pb.CancelUploadResponse>;

  cancelUpload(
    request: arranger_files_service_files_pb.CancelUploadRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_files_service_files_pb.CancelUploadResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/files.api.v1.FilesService/CancelUpload',
        request,
        metadata || {},
        this.methodInfoCancelUpload,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/files.api.v1.FilesService/CancelUpload',
    request,
    metadata || {},
    this.methodInfoCancelUpload);
  }

  methodInfoProbe = new grpcWeb.MethodDescriptor(
    '/files.api.v1.FilesService/Probe',
    grpcWeb.MethodType.UNARY,
    arranger_files_service_files_pb.ProbeRequest,
    arranger_files_service_files_pb.ProbeResponse,
    (request: arranger_files_service_files_pb.ProbeRequest) => {
      return request.serializeBinary();
    },
    arranger_files_service_files_pb.ProbeResponse.deserializeBinary
  );

  probe(
    request: arranger_files_service_files_pb.ProbeRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_files_service_files_pb.ProbeResponse>;

  probe(
    request: arranger_files_service_files_pb.ProbeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_files_service_files_pb.ProbeResponse) => void): grpcWeb.ClientReadableStream<arranger_files_service_files_pb.ProbeResponse>;

  probe(
    request: arranger_files_service_files_pb.ProbeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_files_service_files_pb.ProbeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/files.api.v1.FilesService/Probe',
        request,
        metadata || {},
        this.methodInfoProbe,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/files.api.v1.FilesService/Probe',
    request,
    metadata || {},
    this.methodInfoProbe);
  }

}

export class ExternalFilesServiceClient {
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
    '/files.api.v1.ExternalFilesService/Get',
    grpcWeb.MethodType.UNARY,
    arranger_files_service_files_pb.GetRequest,
    arranger_files_service_files_pb.GetResponse,
    (request: arranger_files_service_files_pb.GetRequest) => {
      return request.serializeBinary();
    },
    arranger_files_service_files_pb.GetResponse.deserializeBinary
  );

  get(
    request: arranger_files_service_files_pb.GetRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_files_service_files_pb.GetResponse>;

  get(
    request: arranger_files_service_files_pb.GetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_files_service_files_pb.GetResponse) => void): grpcWeb.ClientReadableStream<arranger_files_service_files_pb.GetResponse>;

  get(
    request: arranger_files_service_files_pb.GetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_files_service_files_pb.GetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/files.api.v1.ExternalFilesService/Get',
        request,
        metadata || {},
        this.methodInfoGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/files.api.v1.ExternalFilesService/Get',
    request,
    metadata || {},
    this.methodInfoGet);
  }

  methodInfoList = new grpcWeb.MethodDescriptor(
    '/files.api.v1.ExternalFilesService/List',
    grpcWeb.MethodType.UNARY,
    arranger_files_service_files_pb.ListRequest,
    arranger_files_service_files_pb.ListResponse,
    (request: arranger_files_service_files_pb.ListRequest) => {
      return request.serializeBinary();
    },
    arranger_files_service_files_pb.ListResponse.deserializeBinary
  );

  list(
    request: arranger_files_service_files_pb.ListRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_files_service_files_pb.ListResponse>;

  list(
    request: arranger_files_service_files_pb.ListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_files_service_files_pb.ListResponse) => void): grpcWeb.ClientReadableStream<arranger_files_service_files_pb.ListResponse>;

  list(
    request: arranger_files_service_files_pb.ListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_files_service_files_pb.ListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/files.api.v1.ExternalFilesService/List',
        request,
        metadata || {},
        this.methodInfoList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/files.api.v1.ExternalFilesService/List',
    request,
    metadata || {},
    this.methodInfoList);
  }

  methodInfoDelete = new grpcWeb.MethodDescriptor(
    '/files.api.v1.ExternalFilesService/Delete',
    grpcWeb.MethodType.UNARY,
    arranger_files_service_files_pb.DeleteRequest,
    arranger_files_service_files_pb.DeleteResponse,
    (request: arranger_files_service_files_pb.DeleteRequest) => {
      return request.serializeBinary();
    },
    arranger_files_service_files_pb.DeleteResponse.deserializeBinary
  );

  delete(
    request: arranger_files_service_files_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_files_service_files_pb.DeleteResponse>;

  delete(
    request: arranger_files_service_files_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_files_service_files_pb.DeleteResponse) => void): grpcWeb.ClientReadableStream<arranger_files_service_files_pb.DeleteResponse>;

  delete(
    request: arranger_files_service_files_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_files_service_files_pb.DeleteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/files.api.v1.ExternalFilesService/Delete',
        request,
        metadata || {},
        this.methodInfoDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/files.api.v1.ExternalFilesService/Delete',
    request,
    metadata || {},
    this.methodInfoDelete);
  }

  methodInfoInitUpload = new grpcWeb.MethodDescriptor(
    '/files.api.v1.ExternalFilesService/InitUpload',
    grpcWeb.MethodType.UNARY,
    arranger_files_service_files_pb.InitUploadRequest,
    arranger_files_service_files_pb.InitUploadResponse,
    (request: arranger_files_service_files_pb.InitUploadRequest) => {
      return request.serializeBinary();
    },
    arranger_files_service_files_pb.InitUploadResponse.deserializeBinary
  );

  initUpload(
    request: arranger_files_service_files_pb.InitUploadRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_files_service_files_pb.InitUploadResponse>;

  initUpload(
    request: arranger_files_service_files_pb.InitUploadRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_files_service_files_pb.InitUploadResponse) => void): grpcWeb.ClientReadableStream<arranger_files_service_files_pb.InitUploadResponse>;

  initUpload(
    request: arranger_files_service_files_pb.InitUploadRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_files_service_files_pb.InitUploadResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/files.api.v1.ExternalFilesService/InitUpload',
        request,
        metadata || {},
        this.methodInfoInitUpload,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/files.api.v1.ExternalFilesService/InitUpload',
    request,
    metadata || {},
    this.methodInfoInitUpload);
  }

  methodInfoListUploadParts = new grpcWeb.MethodDescriptor(
    '/files.api.v1.ExternalFilesService/ListUploadParts',
    grpcWeb.MethodType.UNARY,
    arranger_files_service_files_pb.ListUploadPartsRequest,
    arranger_files_service_files_pb.ListUploadPartsResponse,
    (request: arranger_files_service_files_pb.ListUploadPartsRequest) => {
      return request.serializeBinary();
    },
    arranger_files_service_files_pb.ListUploadPartsResponse.deserializeBinary
  );

  listUploadParts(
    request: arranger_files_service_files_pb.ListUploadPartsRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_files_service_files_pb.ListUploadPartsResponse>;

  listUploadParts(
    request: arranger_files_service_files_pb.ListUploadPartsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_files_service_files_pb.ListUploadPartsResponse) => void): grpcWeb.ClientReadableStream<arranger_files_service_files_pb.ListUploadPartsResponse>;

  listUploadParts(
    request: arranger_files_service_files_pb.ListUploadPartsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_files_service_files_pb.ListUploadPartsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/files.api.v1.ExternalFilesService/ListUploadParts',
        request,
        metadata || {},
        this.methodInfoListUploadParts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/files.api.v1.ExternalFilesService/ListUploadParts',
    request,
    metadata || {},
    this.methodInfoListUploadParts);
  }

  methodInfoArrangeUploadPart = new grpcWeb.MethodDescriptor(
    '/files.api.v1.ExternalFilesService/ArrangeUploadPart',
    grpcWeb.MethodType.UNARY,
    arranger_files_service_files_pb.ArrangeUploadPartRequest,
    arranger_files_service_files_pb.ArrangeUploadPartResponse,
    (request: arranger_files_service_files_pb.ArrangeUploadPartRequest) => {
      return request.serializeBinary();
    },
    arranger_files_service_files_pb.ArrangeUploadPartResponse.deserializeBinary
  );

  arrangeUploadPart(
    request: arranger_files_service_files_pb.ArrangeUploadPartRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_files_service_files_pb.ArrangeUploadPartResponse>;

  arrangeUploadPart(
    request: arranger_files_service_files_pb.ArrangeUploadPartRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_files_service_files_pb.ArrangeUploadPartResponse) => void): grpcWeb.ClientReadableStream<arranger_files_service_files_pb.ArrangeUploadPartResponse>;

  arrangeUploadPart(
    request: arranger_files_service_files_pb.ArrangeUploadPartRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_files_service_files_pb.ArrangeUploadPartResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/files.api.v1.ExternalFilesService/ArrangeUploadPart',
        request,
        metadata || {},
        this.methodInfoArrangeUploadPart,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/files.api.v1.ExternalFilesService/ArrangeUploadPart',
    request,
    metadata || {},
    this.methodInfoArrangeUploadPart);
  }

  methodInfoFinalizeUpload = new grpcWeb.MethodDescriptor(
    '/files.api.v1.ExternalFilesService/FinalizeUpload',
    grpcWeb.MethodType.UNARY,
    arranger_files_service_files_pb.FinalizeUploadRequest,
    arranger_files_service_files_pb.FinalizeUploadResponse,
    (request: arranger_files_service_files_pb.FinalizeUploadRequest) => {
      return request.serializeBinary();
    },
    arranger_files_service_files_pb.FinalizeUploadResponse.deserializeBinary
  );

  finalizeUpload(
    request: arranger_files_service_files_pb.FinalizeUploadRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_files_service_files_pb.FinalizeUploadResponse>;

  finalizeUpload(
    request: arranger_files_service_files_pb.FinalizeUploadRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_files_service_files_pb.FinalizeUploadResponse) => void): grpcWeb.ClientReadableStream<arranger_files_service_files_pb.FinalizeUploadResponse>;

  finalizeUpload(
    request: arranger_files_service_files_pb.FinalizeUploadRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_files_service_files_pb.FinalizeUploadResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/files.api.v1.ExternalFilesService/FinalizeUpload',
        request,
        metadata || {},
        this.methodInfoFinalizeUpload,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/files.api.v1.ExternalFilesService/FinalizeUpload',
    request,
    metadata || {},
    this.methodInfoFinalizeUpload);
  }

  methodInfoCancelUpload = new grpcWeb.MethodDescriptor(
    '/files.api.v1.ExternalFilesService/CancelUpload',
    grpcWeb.MethodType.UNARY,
    arranger_files_service_files_pb.CancelUploadRequest,
    arranger_files_service_files_pb.CancelUploadResponse,
    (request: arranger_files_service_files_pb.CancelUploadRequest) => {
      return request.serializeBinary();
    },
    arranger_files_service_files_pb.CancelUploadResponse.deserializeBinary
  );

  cancelUpload(
    request: arranger_files_service_files_pb.CancelUploadRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_files_service_files_pb.CancelUploadResponse>;

  cancelUpload(
    request: arranger_files_service_files_pb.CancelUploadRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_files_service_files_pb.CancelUploadResponse) => void): grpcWeb.ClientReadableStream<arranger_files_service_files_pb.CancelUploadResponse>;

  cancelUpload(
    request: arranger_files_service_files_pb.CancelUploadRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_files_service_files_pb.CancelUploadResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/files.api.v1.ExternalFilesService/CancelUpload',
        request,
        metadata || {},
        this.methodInfoCancelUpload,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/files.api.v1.ExternalFilesService/CancelUpload',
    request,
    metadata || {},
    this.methodInfoCancelUpload);
  }

  methodInfoProbe = new grpcWeb.MethodDescriptor(
    '/files.api.v1.ExternalFilesService/Probe',
    grpcWeb.MethodType.UNARY,
    arranger_files_service_files_pb.ProbeRequest,
    arranger_files_service_files_pb.ProbeResponse,
    (request: arranger_files_service_files_pb.ProbeRequest) => {
      return request.serializeBinary();
    },
    arranger_files_service_files_pb.ProbeResponse.deserializeBinary
  );

  probe(
    request: arranger_files_service_files_pb.ProbeRequest,
    metadata: grpcWeb.Metadata | null): Promise<arranger_files_service_files_pb.ProbeResponse>;

  probe(
    request: arranger_files_service_files_pb.ProbeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: arranger_files_service_files_pb.ProbeResponse) => void): grpcWeb.ClientReadableStream<arranger_files_service_files_pb.ProbeResponse>;

  probe(
    request: arranger_files_service_files_pb.ProbeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: arranger_files_service_files_pb.ProbeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/files.api.v1.ExternalFilesService/Probe',
        request,
        metadata || {},
        this.methodInfoProbe,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/files.api.v1.ExternalFilesService/Probe',
    request,
    metadata || {},
    this.methodInfoProbe);
  }

}

