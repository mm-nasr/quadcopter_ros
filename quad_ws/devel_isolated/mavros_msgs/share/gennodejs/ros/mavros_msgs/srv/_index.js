
"use strict";

let FileClose = require('./FileClose.js')
let CommandBool = require('./CommandBool.js')
let WaypointPush = require('./WaypointPush.js')
let WaypointSetCurrent = require('./WaypointSetCurrent.js')
let ParamPull = require('./ParamPull.js')
let MessageInterval = require('./MessageInterval.js')
let FileChecksum = require('./FileChecksum.js')
let CommandHome = require('./CommandHome.js')
let StreamRate = require('./StreamRate.js')
let WaypointClear = require('./WaypointClear.js')
let CommandInt = require('./CommandInt.js')
let CommandTriggerInterval = require('./CommandTriggerInterval.js')
let SetMavFrame = require('./SetMavFrame.js')
let FileRead = require('./FileRead.js')
let LogRequestEnd = require('./LogRequestEnd.js')
let LogRequestList = require('./LogRequestList.js')
let CommandLong = require('./CommandLong.js')
let FileMakeDir = require('./FileMakeDir.js')
let FileOpen = require('./FileOpen.js')
let FileTruncate = require('./FileTruncate.js')
let ParamSet = require('./ParamSet.js')
let FileRemove = require('./FileRemove.js')
let FileList = require('./FileList.js')
let ParamGet = require('./ParamGet.js')
let MountConfigure = require('./MountConfigure.js')
let CommandVtolTransition = require('./CommandVtolTransition.js')
let ParamPush = require('./ParamPush.js')
let SetMode = require('./SetMode.js')
let FileRename = require('./FileRename.js')
let FileRemoveDir = require('./FileRemoveDir.js')
let WaypointPull = require('./WaypointPull.js')
let CommandTriggerControl = require('./CommandTriggerControl.js')
let LogRequestData = require('./LogRequestData.js')
let VehicleInfoGet = require('./VehicleInfoGet.js')
let FileWrite = require('./FileWrite.js')
let CommandTOL = require('./CommandTOL.js')

module.exports = {
  FileClose: FileClose,
  CommandBool: CommandBool,
  WaypointPush: WaypointPush,
  WaypointSetCurrent: WaypointSetCurrent,
  ParamPull: ParamPull,
  MessageInterval: MessageInterval,
  FileChecksum: FileChecksum,
  CommandHome: CommandHome,
  StreamRate: StreamRate,
  WaypointClear: WaypointClear,
  CommandInt: CommandInt,
  CommandTriggerInterval: CommandTriggerInterval,
  SetMavFrame: SetMavFrame,
  FileRead: FileRead,
  LogRequestEnd: LogRequestEnd,
  LogRequestList: LogRequestList,
  CommandLong: CommandLong,
  FileMakeDir: FileMakeDir,
  FileOpen: FileOpen,
  FileTruncate: FileTruncate,
  ParamSet: ParamSet,
  FileRemove: FileRemove,
  FileList: FileList,
  ParamGet: ParamGet,
  MountConfigure: MountConfigure,
  CommandVtolTransition: CommandVtolTransition,
  ParamPush: ParamPush,
  SetMode: SetMode,
  FileRename: FileRename,
  FileRemoveDir: FileRemoveDir,
  WaypointPull: WaypointPull,
  CommandTriggerControl: CommandTriggerControl,
  LogRequestData: LogRequestData,
  VehicleInfoGet: VehicleInfoGet,
  FileWrite: FileWrite,
  CommandTOL: CommandTOL,
};
