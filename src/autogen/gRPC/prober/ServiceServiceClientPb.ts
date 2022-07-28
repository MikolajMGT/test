/**
 * @fileoverview gRPC-Web generated client stub for prober.api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as prober_service_pb from '../prober/service_pb';


export class ProberServiceClient {
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

  methodInfoProbe = new grpcWeb.MethodDescriptor(
    '/prober.api.v1.ProberService/Probe',
    grpcWeb.MethodType.UNARY,
    prober_service_pb.ProbeRequest,
    prober_service_pb.ProbeResponse,
    (request: prober_service_pb.ProbeRequest) => {
      return request.serializeBinary();
    },
    prober_service_pb.ProbeResponse.deserializeBinary
  );

  probe(
    request: prober_service_pb.ProbeRequest,
    metadata: grpcWeb.Metadata | null): Promise<prober_service_pb.ProbeResponse>;

  probe(
    request: prober_service_pb.ProbeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: prober_service_pb.ProbeResponse) => void): grpcWeb.ClientReadableStream<prober_service_pb.ProbeResponse>;

  probe(
    request: prober_service_pb.ProbeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: prober_service_pb.ProbeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/prober.api.v1.ProberService/Probe',
        request,
        metadata || {},
        this.methodInfoProbe,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/prober.api.v1.ProberService/Probe',
    request,
    metadata || {},
    this.methodInfoProbe);
  }

}

