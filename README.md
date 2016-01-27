# zmqnodeTest


INSTALL ZMQ FROM PACKET
nano  /etc/apt/sources.list
deb http://httpredir.debian.org/debian/ experimental main contrib non-free
deb-src http://httpredir.debian.org/debian/ experimental main contrib 
non-free
apt-get update
apt-get install libzmq5-dev
apt-get install pkg-config 

INSTALL FROM SOURCE
./configure                 (with a parameter to use not the lib...)
make && make install
sudo ldconfig

NPM
install needs to run as NON ROOT; otherwise ZMQ would not install correctly
npm install
