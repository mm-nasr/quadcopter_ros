#!/bin/sh

if [ -n "$DESTDIR" ] ; then
    case $DESTDIR in
        /*) # ok
            ;;
        *)
            /bin/echo "DESTDIR argument must be absolute... "
            /bin/echo "otherwise python's distutils will bork things."
            exit 1
    esac
fi

echo_and_run() { echo "+ $@" ; "$@" ; }

echo_and_run cd "/home/mazen/quadcopter_ros/quad_ws/src/mavros/mavros"

# ensure that Python install destination exists
echo_and_run mkdir -p "$DESTDIR/home/mazen/quadcopter_ros/quad_ws/install_isolated/lib/python2.7/dist-packages"

# Note that PYTHONPATH is pulled from the environment to support installing
# into one location when some dependencies were installed in another
# location, #123.
echo_and_run /usr/bin/env \
    PYTHONPATH="/home/mazen/quadcopter_ros/quad_ws/install_isolated/lib/python2.7/dist-packages:/home/mazen/quadcopter_ros/quad_ws/build_isolated/mavros/lib/python2.7/dist-packages:$PYTHONPATH" \
    CATKIN_BINARY_DIR="/home/mazen/quadcopter_ros/quad_ws/build_isolated/mavros" \
    "/usr/bin/python2" \
    "/home/mazen/quadcopter_ros/quad_ws/src/mavros/mavros/setup.py" \
    build --build-base "/home/mazen/quadcopter_ros/quad_ws/build_isolated/mavros" \
    install \
    --root="${DESTDIR-/}" \
    --install-layout=deb --prefix="/home/mazen/quadcopter_ros/quad_ws/install_isolated" --install-scripts="/home/mazen/quadcopter_ros/quad_ws/install_isolated/bin"
