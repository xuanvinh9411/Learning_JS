docker images : list images
docker search ubuntu

docker pull ubuntu:16.04 : 16.04 là version 
docker image rm :id

// tạo vào chạy connainer 
docker run thamso IMAGE command thamsolenh

ex: docker run -it :id-image

//check version container sau run 
cat /etc/*release

// list container run
docker ps

//list all docker 
docker ps -a 
 
docker start :id

trỏ vào docker container

# kiểm tra phiên bản
docker --version

# liệt kê các image
docker images -a

# xóa một image (phải không container nào đang dùng)
docker images rm imageid

# tải về một image (imagename) từ hub.docker.com
docker pull imagename

======================================

# liệt kê các container
docker container ls -a

# xóa container
docker container rm containerid

# tạo mới một container
docker run -it imageid 

# thoát termial vẫn giữ container đang chạy
CTRL +P, CTRL + Q

# Vào termial container đang chạy
docker container attach containerid

# Chạy container đang dừng
docker container start -i containerid

# Chạy một lệnh trên container đang chạy
docker exec -it containerid command

# dừng container
docker stop mycontainer

# lưu ra file, có thể chỉ ra đường dẫn đầy đủ nơi lưu file
docker save --output myimage.tar myimage

# thoát khỏi docker
ctrl + P + Q