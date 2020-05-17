# quadcopter_ros
Quadcopter project using ROS, MoveIt, Gazebo, and implementation to the erlecopter quadrotor.


## The command below can be used to launch the simulation and connect ROS to it via MAVROS, where fcu_url is the IP / port of the computer running the simulation:
roslaunch mavros px4.launch fcu_url:="udp://:14540@192.168.1.36:14557"

##First start the simulator using the command below: 
no_sim=1 make px4_sitl_default gazebo

##Now start Gazebo like you would when working with ROS and insert the Iris quadcopter model. Once the Iris is loaded it will automatically connect to the px4 app.

roslaunch gazebo_ros empty_world.launch world_name:=$(pwd)/Tools/sitl_gazebo/worlds/iris.world

## To Launch QControl, in quadcopter_ros 
./QGroundControl.AppImage

