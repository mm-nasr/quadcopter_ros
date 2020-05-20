# First setup instructions

## Initial Setup

To setup your system for the first time, please follow these steps:

### __[Install the Firmware](https://dev.px4.io/master/en/setup/dev_env_linux_ubuntu.html)__

1. Clone Firmware github inside the quadcopter_ros repo and run the bash file

```
git clone https://github.com/PX4/Firmware.git

cd Firmware

bash ./Tools/setup/ubuntu.sh
```

2. Restart the computer on completion

3. Verify NuttX installation
```
arm-none-eabi-gcc --version
```

### Install ROS and Gazebo dependencies

Inside the quadcopter_ros repo:
```
bash ./ubuntu_sim_ros_melodic.sh
```


**AT THIS POINT TRY THE FOLLOWING:**

```
cd ./Firmware

make px4_sitl jmavsim
```

If this works, try the following:

```
make px4_sitl gazebo
```

### __[Install QGroundControl](https://docs.qgroundcontrol.com/en/getting_started/download_and_install.html)__


### __[Install MAVROS](https://dev.px4.io/master/en/ros/mavros_installation.html)__