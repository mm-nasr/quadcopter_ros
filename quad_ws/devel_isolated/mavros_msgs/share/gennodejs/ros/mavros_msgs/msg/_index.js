
"use strict";

let OnboardComputerStatus = require('./OnboardComputerStatus.js');
let DebugValue = require('./DebugValue.js');
let FileEntry = require('./FileEntry.js');
let Thrust = require('./Thrust.js');
let LandingTarget = require('./LandingTarget.js');
let CompanionProcessStatus = require('./CompanionProcessStatus.js');
let HilControls = require('./HilControls.js');
let Vibration = require('./Vibration.js');
let MountControl = require('./MountControl.js');
let BatteryStatus = require('./BatteryStatus.js');
let RCOut = require('./RCOut.js');
let OverrideRCIn = require('./OverrideRCIn.js');
let HilActuatorControls = require('./HilActuatorControls.js');
let Trajectory = require('./Trajectory.js');
let RTCM = require('./RTCM.js');
let Param = require('./Param.js');
let LogEntry = require('./LogEntry.js');
let PositionTarget = require('./PositionTarget.js');
let State = require('./State.js');
let CamIMUStamp = require('./CamIMUStamp.js');
let LogData = require('./LogData.js');
let WaypointList = require('./WaypointList.js');
let Mavlink = require('./Mavlink.js');
let StatusText = require('./StatusText.js');
let HomePosition = require('./HomePosition.js');
let ADSBVehicle = require('./ADSBVehicle.js');
let HilSensor = require('./HilSensor.js');
let VFR_HUD = require('./VFR_HUD.js');
let AttitudeTarget = require('./AttitudeTarget.js');
let Altitude = require('./Altitude.js');
let GlobalPositionTarget = require('./GlobalPositionTarget.js');
let VehicleInfo = require('./VehicleInfo.js');
let ExtendedState = require('./ExtendedState.js');
let RCIn = require('./RCIn.js');
let TimesyncStatus = require('./TimesyncStatus.js');
let ActuatorControl = require('./ActuatorControl.js');
let WheelOdomStamped = require('./WheelOdomStamped.js');
let EstimatorStatus = require('./EstimatorStatus.js');
let Waypoint = require('./Waypoint.js');
let ParamValue = require('./ParamValue.js');
let HilStateQuaternion = require('./HilStateQuaternion.js');
let CommandCode = require('./CommandCode.js');
let WaypointReached = require('./WaypointReached.js');
let OpticalFlowRad = require('./OpticalFlowRad.js');
let HilGPS = require('./HilGPS.js');
let RadioStatus = require('./RadioStatus.js');
let ManualControl = require('./ManualControl.js');

module.exports = {
  OnboardComputerStatus: OnboardComputerStatus,
  DebugValue: DebugValue,
  FileEntry: FileEntry,
  Thrust: Thrust,
  LandingTarget: LandingTarget,
  CompanionProcessStatus: CompanionProcessStatus,
  HilControls: HilControls,
  Vibration: Vibration,
  MountControl: MountControl,
  BatteryStatus: BatteryStatus,
  RCOut: RCOut,
  OverrideRCIn: OverrideRCIn,
  HilActuatorControls: HilActuatorControls,
  Trajectory: Trajectory,
  RTCM: RTCM,
  Param: Param,
  LogEntry: LogEntry,
  PositionTarget: PositionTarget,
  State: State,
  CamIMUStamp: CamIMUStamp,
  LogData: LogData,
  WaypointList: WaypointList,
  Mavlink: Mavlink,
  StatusText: StatusText,
  HomePosition: HomePosition,
  ADSBVehicle: ADSBVehicle,
  HilSensor: HilSensor,
  VFR_HUD: VFR_HUD,
  AttitudeTarget: AttitudeTarget,
  Altitude: Altitude,
  GlobalPositionTarget: GlobalPositionTarget,
  VehicleInfo: VehicleInfo,
  ExtendedState: ExtendedState,
  RCIn: RCIn,
  TimesyncStatus: TimesyncStatus,
  ActuatorControl: ActuatorControl,
  WheelOdomStamped: WheelOdomStamped,
  EstimatorStatus: EstimatorStatus,
  Waypoint: Waypoint,
  ParamValue: ParamValue,
  HilStateQuaternion: HilStateQuaternion,
  CommandCode: CommandCode,
  WaypointReached: WaypointReached,
  OpticalFlowRad: OpticalFlowRad,
  HilGPS: HilGPS,
  RadioStatus: RadioStatus,
  ManualControl: ManualControl,
};
