execute_process(COMMAND "/home/mazen/quadcopter_ros/quad_ws/build_isolated/mavros/catkin_generated/python_distutils_install.sh" RESULT_VARIABLE res)

if(NOT res EQUAL 0)
  message(FATAL_ERROR "execute_process(/home/mazen/quadcopter_ros/quad_ws/build_isolated/mavros/catkin_generated/python_distutils_install.sh) returned error code ")
endif()
