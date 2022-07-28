// source: arranger/jobs/enums.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.jobs.api.v1.Status', null, global);
/**
 * @enum {number}
 */
proto.jobs.api.v1.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_PENDING: 1,
  STATUS_DOWNLOADING: 2,
  STATUS_ANALYSING: 3,
  STATUS_ANALYZED: 4,
  STATUS_TRANSCODING: 5,
  STATUS_TRANSCODED: 6,
  STATUS_MUXING: 7,
  STATUS_FINISHED: 8,
  STATUS_CANCELLED: 9,
  STATUS_FAILED: 10
};

goog.object.extend(exports, proto.jobs.api.v1);
