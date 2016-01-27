# zmqnodeTest


nano  /etc/apt/sources.list
deb http://httpredir.debian.org/debian/ experimental main contrib non-free
deb-src http://httpredir.debian.org/debian/ experimental main contrib 
non-free
apt-get update
apt-get install libzmq5-dev

Install ZMQ:
apt-get install pkg-config 

NPM
install needs to run as NON ROOT; otherwise ZMQ would not install correctly
npm install
