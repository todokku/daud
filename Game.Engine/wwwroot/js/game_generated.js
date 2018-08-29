// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var Game = Game || {};

/**
 * @const
 * @namespace
 */
Game.Engine = Game.Engine || {};

/**
 * @const
 * @namespace
 */
Game.Engine.Networking = Game.Engine.Networking || {};

/**
 * @const
 * @namespace
 */
Game.Engine.Networking.FlatBuffers = Game.Engine.Networking.FlatBuffers || {};

/**
 * @constructor
 */
Game.Engine.Networking.FlatBuffers.WorldView = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Game.Engine.Networking.FlatBuffers.WorldView}
 */
Game.Engine.Networking.FlatBuffers.WorldView.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Game.Engine.Networking.FlatBuffers.WorldView=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.WorldView}
 */
Game.Engine.Networking.FlatBuffers.WorldView.getRootAsWorldView = function(bb, obj) {
  return (obj || new Game.Engine.Networking.FlatBuffers.WorldView).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {flatbuffers.Long}
 */
Game.Engine.Networking.FlatBuffers.WorldView.prototype.time = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.WorldView.prototype.playerCount = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readInt16(this.bb_pos + offset) : 0;
};

/**
 * @returns {boolean}
 */
Game.Engine.Networking.FlatBuffers.WorldView.prototype.isAlive = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? !!this.bb.readInt8(this.bb_pos + offset) : true;
};

/**
 * @param {number} index
 * @param {Game.Engine.Networking.FlatBuffers.Body=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.Body}
 */
Game.Engine.Networking.FlatBuffers.WorldView.prototype.updates = function(index, obj) {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? (obj || new Game.Engine.Networking.FlatBuffers.Body).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.WorldView.prototype.updatesLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @returns {flatbuffers.Long}
 */
Game.Engine.Networking.FlatBuffers.WorldView.prototype.deletes = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? this.bb.readInt64(this.bb.__vector(this.bb_pos + offset) + index * 8) : this.bb.createLong(0, 0);
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.WorldView.prototype.deletesLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @param {Game.Engine.Networking.FlatBuffers.Message=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.Message}
 */
Game.Engine.Networking.FlatBuffers.WorldView.prototype.messages = function(index, obj) {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? (obj || new Game.Engine.Networking.FlatBuffers.Message).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.WorldView.prototype.messagesLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @param {Game.Engine.Networking.FlatBuffers.Body=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.Body}
 */
Game.Engine.Networking.FlatBuffers.WorldView.prototype.camera = function(index, obj) {
  var offset = this.bb.__offset(this.bb_pos, 16);
  return offset ? (obj || new Game.Engine.Networking.FlatBuffers.Body).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.WorldView.prototype.cameraLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 16);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Game.Engine.Networking.FlatBuffers.WorldView.startWorldView = function(builder) {
  builder.startObject(7);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} time
 */
Game.Engine.Networking.FlatBuffers.WorldView.addTime = function(builder, time) {
  builder.addFieldInt64(0, time, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} playerCount
 */
Game.Engine.Networking.FlatBuffers.WorldView.addPlayerCount = function(builder, playerCount) {
  builder.addFieldInt16(1, playerCount, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {boolean} isAlive
 */
Game.Engine.Networking.FlatBuffers.WorldView.addIsAlive = function(builder, isAlive) {
  builder.addFieldInt8(2, +isAlive, +true);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} updatesOffset
 */
Game.Engine.Networking.FlatBuffers.WorldView.addUpdates = function(builder, updatesOffset) {
  builder.addFieldOffset(3, updatesOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Offset>} data
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.WorldView.createUpdatesVector = function(builder, data) {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Game.Engine.Networking.FlatBuffers.WorldView.startUpdatesVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} deletesOffset
 */
Game.Engine.Networking.FlatBuffers.WorldView.addDeletes = function(builder, deletesOffset) {
  builder.addFieldOffset(4, deletesOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Long>} data
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.WorldView.createDeletesVector = function(builder, data) {
  builder.startVector(8, data.length, 8);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt64(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Game.Engine.Networking.FlatBuffers.WorldView.startDeletesVector = function(builder, numElems) {
  builder.startVector(8, numElems, 8);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} messagesOffset
 */
Game.Engine.Networking.FlatBuffers.WorldView.addMessages = function(builder, messagesOffset) {
  builder.addFieldOffset(5, messagesOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Offset>} data
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.WorldView.createMessagesVector = function(builder, data) {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Game.Engine.Networking.FlatBuffers.WorldView.startMessagesVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} cameraOffset
 */
Game.Engine.Networking.FlatBuffers.WorldView.addCamera = function(builder, cameraOffset) {
  builder.addFieldOffset(6, cameraOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Offset>} data
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.WorldView.createCameraVector = function(builder, data) {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Game.Engine.Networking.FlatBuffers.WorldView.startCameraVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.WorldView.endWorldView = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
Game.Engine.Networking.FlatBuffers.WorldView.finishWorldViewBuffer = function(builder, offset) {
  builder.finish(offset);
};

/**
 * @constructor
 */
Game.Engine.Networking.FlatBuffers.Body = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Game.Engine.Networking.FlatBuffers.Body}
 */
Game.Engine.Networking.FlatBuffers.Body.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Game.Engine.Networking.FlatBuffers.Body=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.Body}
 */
Game.Engine.Networking.FlatBuffers.Body.getRootAsBody = function(bb, obj) {
  return (obj || new Game.Engine.Networking.FlatBuffers.Body).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {flatbuffers.Long}
 */
Game.Engine.Networking.FlatBuffers.Body.prototype.id = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {flatbuffers.Long}
 */
Game.Engine.Networking.FlatBuffers.Body.prototype.definitionTime = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.Body.prototype.size = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
Game.Engine.Networking.FlatBuffers.Body.prototype.sprite = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
Game.Engine.Networking.FlatBuffers.Body.prototype.color = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
Game.Engine.Networking.FlatBuffers.Body.prototype.caption = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.Body.prototype.angle = function() {
  var offset = this.bb.__offset(this.bb_pos, 16);
  return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0.0;
};

/**
 * @param {Game.Engine.Networking.FlatBuffers.Vec2=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.Vec2|null}
 */
Game.Engine.Networking.FlatBuffers.Body.prototype.momentum = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 18);
  return offset ? (obj || new Game.Engine.Networking.FlatBuffers.Vec2).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @param {Game.Engine.Networking.FlatBuffers.Vec2=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.Vec2|null}
 */
Game.Engine.Networking.FlatBuffers.Body.prototype.orignialPosition = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 20);
  return offset ? (obj || new Game.Engine.Networking.FlatBuffers.Vec2).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Game.Engine.Networking.FlatBuffers.Body.startBody = function(builder) {
  builder.startObject(9);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} id
 */
Game.Engine.Networking.FlatBuffers.Body.addId = function(builder, id) {
  builder.addFieldInt64(0, id, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} definitionTime
 */
Game.Engine.Networking.FlatBuffers.Body.addDefinitionTime = function(builder, definitionTime) {
  builder.addFieldInt64(1, definitionTime, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} size
 */
Game.Engine.Networking.FlatBuffers.Body.addSize = function(builder, size) {
  builder.addFieldInt32(2, size, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} spriteOffset
 */
Game.Engine.Networking.FlatBuffers.Body.addSprite = function(builder, spriteOffset) {
  builder.addFieldOffset(3, spriteOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} colorOffset
 */
Game.Engine.Networking.FlatBuffers.Body.addColor = function(builder, colorOffset) {
  builder.addFieldOffset(4, colorOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} captionOffset
 */
Game.Engine.Networking.FlatBuffers.Body.addCaption = function(builder, captionOffset) {
  builder.addFieldOffset(5, captionOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} angle
 */
Game.Engine.Networking.FlatBuffers.Body.addAngle = function(builder, angle) {
  builder.addFieldFloat32(6, angle, 0.0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} momentumOffset
 */
Game.Engine.Networking.FlatBuffers.Body.addMomentum = function(builder, momentumOffset) {
  builder.addFieldStruct(7, momentumOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} orignialPositionOffset
 */
Game.Engine.Networking.FlatBuffers.Body.addOrignialPosition = function(builder, orignialPositionOffset) {
  builder.addFieldStruct(8, orignialPositionOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.Body.endBody = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
Game.Engine.Networking.FlatBuffers.Message = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Game.Engine.Networking.FlatBuffers.Message}
 */
Game.Engine.Networking.FlatBuffers.Message.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Game.Engine.Networking.FlatBuffers.Message=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.Message}
 */
Game.Engine.Networking.FlatBuffers.Message.getRootAsMessage = function(bb, obj) {
  return (obj || new Game.Engine.Networking.FlatBuffers.Message).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
Game.Engine.Networking.FlatBuffers.Message.prototype.message = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Game.Engine.Networking.FlatBuffers.Message.startMessage = function(builder) {
  builder.startObject(1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} messageOffset
 */
Game.Engine.Networking.FlatBuffers.Message.addMessage = function(builder, messageOffset) {
  builder.addFieldOffset(0, messageOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.Message.endMessage = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
Game.Engine.Networking.FlatBuffers.Vec2 = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Game.Engine.Networking.FlatBuffers.Vec2}
 */
Game.Engine.Networking.FlatBuffers.Vec2.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.Vec2.prototype.x = function() {
  return this.bb.readFloat32(this.bb_pos);
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.Vec2.prototype.y = function() {
  return this.bb.readFloat32(this.bb_pos + 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} x
 * @param {number} y
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.Vec2.createVec2 = function(builder, x, y) {
  builder.prep(4, 8);
  builder.writeFloat32(y);
  builder.writeFloat32(x);
  return builder.offset();
};

// Exports for Node.js and RequireJS
this.Game = Game;
