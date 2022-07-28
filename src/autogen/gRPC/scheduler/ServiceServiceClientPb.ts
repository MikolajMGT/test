/**
 * @fileoverview gRPC-Web generated client stub for scheduler.api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as scheduler_service_pb from '../scheduler/service_pb';


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

  methodInfoGetJob = new grpcWeb.MethodDescriptor(
    '/scheduler.api.v1.JobsService/GetJob',
    grpcWeb.MethodType.UNARY,
    scheduler_service_pb.GetJobRequest,
    scheduler_service_pb.GetJobResponse,
    (request: scheduler_service_pb.GetJobRequest) => {
      return request.serializeBinary();
    },
    scheduler_service_pb.GetJobResponse.deserializeBinary
  );

  getJob(
    request: scheduler_service_pb.GetJobRequest,
    metadata: grpcWeb.Metadata | null): Promise<scheduler_service_pb.GetJobResponse>;

  getJob(
    request: scheduler_service_pb.GetJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: scheduler_service_pb.GetJobResponse) => void): grpcWeb.ClientReadableStream<scheduler_service_pb.GetJobResponse>;

  getJob(
    request: scheduler_service_pb.GetJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: scheduler_service_pb.GetJobResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/scheduler.api.v1.JobsService/GetJob',
        request,
        metadata || {},
        this.methodInfoGetJob,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/scheduler.api.v1.JobsService/GetJob',
    request,
    metadata || {},
    this.methodInfoGetJob);
  }

  methodInfoListJobs = new grpcWeb.MethodDescriptor(
    '/scheduler.api.v1.JobsService/ListJobs',
    grpcWeb.MethodType.UNARY,
    scheduler_service_pb.ListJobsRequest,
    scheduler_service_pb.ListJobsResponse,
    (request: scheduler_service_pb.ListJobsRequest) => {
      return request.serializeBinary();
    },
    scheduler_service_pb.ListJobsResponse.deserializeBinary
  );

  listJobs(
    request: scheduler_service_pb.ListJobsRequest,
    metadata: grpcWeb.Metadata | null): Promise<scheduler_service_pb.ListJobsResponse>;

  listJobs(
    request: scheduler_service_pb.ListJobsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: scheduler_service_pb.ListJobsResponse) => void): grpcWeb.ClientReadableStream<scheduler_service_pb.ListJobsResponse>;

  listJobs(
    request: scheduler_service_pb.ListJobsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: scheduler_service_pb.ListJobsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/scheduler.api.v1.JobsService/ListJobs',
        request,
        metadata || {},
        this.methodInfoListJobs,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/scheduler.api.v1.JobsService/ListJobs',
    request,
    metadata || {},
    this.methodInfoListJobs);
  }

  methodInfoCreateJobs = new grpcWeb.MethodDescriptor(
    '/scheduler.api.v1.JobsService/CreateJobs',
    grpcWeb.MethodType.UNARY,
    scheduler_service_pb.CreateJobsRequest,
    scheduler_service_pb.CreateJobsResponse,
    (request: scheduler_service_pb.CreateJobsRequest) => {
      return request.serializeBinary();
    },
    scheduler_service_pb.CreateJobsResponse.deserializeBinary
  );

  createJobs(
    request: scheduler_service_pb.CreateJobsRequest,
    metadata: grpcWeb.Metadata | null): Promise<scheduler_service_pb.CreateJobsResponse>;

  createJobs(
    request: scheduler_service_pb.CreateJobsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: scheduler_service_pb.CreateJobsResponse) => void): grpcWeb.ClientReadableStream<scheduler_service_pb.CreateJobsResponse>;

  createJobs(
    request: scheduler_service_pb.CreateJobsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: scheduler_service_pb.CreateJobsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/scheduler.api.v1.JobsService/CreateJobs',
        request,
        metadata || {},
        this.methodInfoCreateJobs,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/scheduler.api.v1.JobsService/CreateJobs',
    request,
    metadata || {},
    this.methodInfoCreateJobs);
  }

  methodInfoCancelJobs = new grpcWeb.MethodDescriptor(
    '/scheduler.api.v1.JobsService/CancelJobs',
    grpcWeb.MethodType.UNARY,
    scheduler_service_pb.CancelJobsRequest,
    scheduler_service_pb.CancelJobsResponse,
    (request: scheduler_service_pb.CancelJobsRequest) => {
      return request.serializeBinary();
    },
    scheduler_service_pb.CancelJobsResponse.deserializeBinary
  );

  cancelJobs(
    request: scheduler_service_pb.CancelJobsRequest,
    metadata: grpcWeb.Metadata | null): Promise<scheduler_service_pb.CancelJobsResponse>;

  cancelJobs(
    request: scheduler_service_pb.CancelJobsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: scheduler_service_pb.CancelJobsResponse) => void): grpcWeb.ClientReadableStream<scheduler_service_pb.CancelJobsResponse>;

  cancelJobs(
    request: scheduler_service_pb.CancelJobsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: scheduler_service_pb.CancelJobsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/scheduler.api.v1.JobsService/CancelJobs',
        request,
        metadata || {},
        this.methodInfoCancelJobs,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/scheduler.api.v1.JobsService/CancelJobs',
    request,
    metadata || {},
    this.methodInfoCancelJobs);
  }

  methodInfoUpdateJob = new grpcWeb.MethodDescriptor(
    '/scheduler.api.v1.JobsService/UpdateJob',
    grpcWeb.MethodType.UNARY,
    scheduler_service_pb.UpdateJobRequest,
    google_protobuf_empty_pb.Empty,
    (request: scheduler_service_pb.UpdateJobRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  updateJob(
    request: scheduler_service_pb.UpdateJobRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  updateJob(
    request: scheduler_service_pb.UpdateJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  updateJob(
    request: scheduler_service_pb.UpdateJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/scheduler.api.v1.JobsService/UpdateJob',
        request,
        metadata || {},
        this.methodInfoUpdateJob,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/scheduler.api.v1.JobsService/UpdateJob',
    request,
    metadata || {},
    this.methodInfoUpdateJob);
  }

  methodInfoGetJobPart = new grpcWeb.MethodDescriptor(
    '/scheduler.api.v1.JobsService/GetJobPart',
    grpcWeb.MethodType.UNARY,
    scheduler_service_pb.GetJobPartRequest,
    scheduler_service_pb.GetJobPartResponse,
    (request: scheduler_service_pb.GetJobPartRequest) => {
      return request.serializeBinary();
    },
    scheduler_service_pb.GetJobPartResponse.deserializeBinary
  );

  getJobPart(
    request: scheduler_service_pb.GetJobPartRequest,
    metadata: grpcWeb.Metadata | null): Promise<scheduler_service_pb.GetJobPartResponse>;

  getJobPart(
    request: scheduler_service_pb.GetJobPartRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: scheduler_service_pb.GetJobPartResponse) => void): grpcWeb.ClientReadableStream<scheduler_service_pb.GetJobPartResponse>;

  getJobPart(
    request: scheduler_service_pb.GetJobPartRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: scheduler_service_pb.GetJobPartResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/scheduler.api.v1.JobsService/GetJobPart',
        request,
        metadata || {},
        this.methodInfoGetJobPart,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/scheduler.api.v1.JobsService/GetJobPart',
    request,
    metadata || {},
    this.methodInfoGetJobPart);
  }

  methodInfoCreateJobParts = new grpcWeb.MethodDescriptor(
    '/scheduler.api.v1.JobsService/CreateJobParts',
    grpcWeb.MethodType.UNARY,
    scheduler_service_pb.CreateJobPartsRequest,
    scheduler_service_pb.CreateJobPartsResponse,
    (request: scheduler_service_pb.CreateJobPartsRequest) => {
      return request.serializeBinary();
    },
    scheduler_service_pb.CreateJobPartsResponse.deserializeBinary
  );

  createJobParts(
    request: scheduler_service_pb.CreateJobPartsRequest,
    metadata: grpcWeb.Metadata | null): Promise<scheduler_service_pb.CreateJobPartsResponse>;

  createJobParts(
    request: scheduler_service_pb.CreateJobPartsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: scheduler_service_pb.CreateJobPartsResponse) => void): grpcWeb.ClientReadableStream<scheduler_service_pb.CreateJobPartsResponse>;

  createJobParts(
    request: scheduler_service_pb.CreateJobPartsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: scheduler_service_pb.CreateJobPartsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/scheduler.api.v1.JobsService/CreateJobParts',
        request,
        metadata || {},
        this.methodInfoCreateJobParts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/scheduler.api.v1.JobsService/CreateJobParts',
    request,
    metadata || {},
    this.methodInfoCreateJobParts);
  }

  methodInfoListJobParts = new grpcWeb.MethodDescriptor(
    '/scheduler.api.v1.JobsService/ListJobParts',
    grpcWeb.MethodType.UNARY,
    scheduler_service_pb.ListJobPartsRequest,
    scheduler_service_pb.ListJobPartsResponse,
    (request: scheduler_service_pb.ListJobPartsRequest) => {
      return request.serializeBinary();
    },
    scheduler_service_pb.ListJobPartsResponse.deserializeBinary
  );

  listJobParts(
    request: scheduler_service_pb.ListJobPartsRequest,
    metadata: grpcWeb.Metadata | null): Promise<scheduler_service_pb.ListJobPartsResponse>;

  listJobParts(
    request: scheduler_service_pb.ListJobPartsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: scheduler_service_pb.ListJobPartsResponse) => void): grpcWeb.ClientReadableStream<scheduler_service_pb.ListJobPartsResponse>;

  listJobParts(
    request: scheduler_service_pb.ListJobPartsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: scheduler_service_pb.ListJobPartsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/scheduler.api.v1.JobsService/ListJobParts',
        request,
        metadata || {},
        this.methodInfoListJobParts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/scheduler.api.v1.JobsService/ListJobParts',
    request,
    metadata || {},
    this.methodInfoListJobParts);
  }

  methodInfoUpdateJobPart = new grpcWeb.MethodDescriptor(
    '/scheduler.api.v1.JobsService/UpdateJobPart',
    grpcWeb.MethodType.UNARY,
    scheduler_service_pb.UpdateJobPartRequest,
    google_protobuf_empty_pb.Empty,
    (request: scheduler_service_pb.UpdateJobPartRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  updateJobPart(
    request: scheduler_service_pb.UpdateJobPartRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  updateJobPart(
    request: scheduler_service_pb.UpdateJobPartRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  updateJobPart(
    request: scheduler_service_pb.UpdateJobPartRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/scheduler.api.v1.JobsService/UpdateJobPart',
        request,
        metadata || {},
        this.methodInfoUpdateJobPart,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/scheduler.api.v1.JobsService/UpdateJobPart',
    request,
    metadata || {},
    this.methodInfoUpdateJobPart);
  }

  methodInfoReportJobPartComplete = new grpcWeb.MethodDescriptor(
    '/scheduler.api.v1.JobsService/ReportJobPartComplete',
    grpcWeb.MethodType.UNARY,
    scheduler_service_pb.ReportJobPartCompleteRequest,
    google_protobuf_empty_pb.Empty,
    (request: scheduler_service_pb.ReportJobPartCompleteRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  reportJobPartComplete(
    request: scheduler_service_pb.ReportJobPartCompleteRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  reportJobPartComplete(
    request: scheduler_service_pb.ReportJobPartCompleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  reportJobPartComplete(
    request: scheduler_service_pb.ReportJobPartCompleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/scheduler.api.v1.JobsService/ReportJobPartComplete',
        request,
        metadata || {},
        this.methodInfoReportJobPartComplete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/scheduler.api.v1.JobsService/ReportJobPartComplete',
    request,
    metadata || {},
    this.methodInfoReportJobPartComplete);
  }

  methodInfoGetJobResults = new grpcWeb.MethodDescriptor(
    '/scheduler.api.v1.JobsService/GetJobResults',
    grpcWeb.MethodType.UNARY,
    scheduler_service_pb.GetJobResultRequest,
    scheduler_service_pb.GetJobResultResponse,
    (request: scheduler_service_pb.GetJobResultRequest) => {
      return request.serializeBinary();
    },
    scheduler_service_pb.GetJobResultResponse.deserializeBinary
  );

  getJobResults(
    request: scheduler_service_pb.GetJobResultRequest,
    metadata: grpcWeb.Metadata | null): Promise<scheduler_service_pb.GetJobResultResponse>;

  getJobResults(
    request: scheduler_service_pb.GetJobResultRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: scheduler_service_pb.GetJobResultResponse) => void): grpcWeb.ClientReadableStream<scheduler_service_pb.GetJobResultResponse>;

  getJobResults(
    request: scheduler_service_pb.GetJobResultRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: scheduler_service_pb.GetJobResultResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/scheduler.api.v1.JobsService/GetJobResults',
        request,
        metadata || {},
        this.methodInfoGetJobResults,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/scheduler.api.v1.JobsService/GetJobResults',
    request,
    metadata || {},
    this.methodInfoGetJobResults);
  }

  methodInfoListJobResults = new grpcWeb.MethodDescriptor(
    '/scheduler.api.v1.JobsService/ListJobResults',
    grpcWeb.MethodType.UNARY,
    scheduler_service_pb.ListJobResultsRequest,
    scheduler_service_pb.ListJobResultsResponse,
    (request: scheduler_service_pb.ListJobResultsRequest) => {
      return request.serializeBinary();
    },
    scheduler_service_pb.ListJobResultsResponse.deserializeBinary
  );

  listJobResults(
    request: scheduler_service_pb.ListJobResultsRequest,
    metadata: grpcWeb.Metadata | null): Promise<scheduler_service_pb.ListJobResultsResponse>;

  listJobResults(
    request: scheduler_service_pb.ListJobResultsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: scheduler_service_pb.ListJobResultsResponse) => void): grpcWeb.ClientReadableStream<scheduler_service_pb.ListJobResultsResponse>;

  listJobResults(
    request: scheduler_service_pb.ListJobResultsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: scheduler_service_pb.ListJobResultsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/scheduler.api.v1.JobsService/ListJobResults',
        request,
        metadata || {},
        this.methodInfoListJobResults,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/scheduler.api.v1.JobsService/ListJobResults',
    request,
    metadata || {},
    this.methodInfoListJobResults);
  }

  methodInfoCreateJobResults = new grpcWeb.MethodDescriptor(
    '/scheduler.api.v1.JobsService/CreateJobResults',
    grpcWeb.MethodType.UNARY,
    scheduler_service_pb.CreateJobResultsRequest,
    scheduler_service_pb.CreateJobResultsResponse,
    (request: scheduler_service_pb.CreateJobResultsRequest) => {
      return request.serializeBinary();
    },
    scheduler_service_pb.CreateJobResultsResponse.deserializeBinary
  );

  createJobResults(
    request: scheduler_service_pb.CreateJobResultsRequest,
    metadata: grpcWeb.Metadata | null): Promise<scheduler_service_pb.CreateJobResultsResponse>;

  createJobResults(
    request: scheduler_service_pb.CreateJobResultsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: scheduler_service_pb.CreateJobResultsResponse) => void): grpcWeb.ClientReadableStream<scheduler_service_pb.CreateJobResultsResponse>;

  createJobResults(
    request: scheduler_service_pb.CreateJobResultsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: scheduler_service_pb.CreateJobResultsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/scheduler.api.v1.JobsService/CreateJobResults',
        request,
        metadata || {},
        this.methodInfoCreateJobResults,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/scheduler.api.v1.JobsService/CreateJobResults',
    request,
    metadata || {},
    this.methodInfoCreateJobResults);
  }

}

