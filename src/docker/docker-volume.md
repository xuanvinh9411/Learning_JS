# Liệt kê danh sách các ổ đĩa:
docker volume ls

# Tạo một ổ đĩa:
docker volume create name_volume

# Xem thông tin chi tiết về đĩa:
docker volume inspect name_volume

# Xóa một ổ đĩa:
docker volume rm name_volume

# Mount ổ đĩa vào container
# container truy cập tại /home/firstdisk

docker run -it --mount source=firstdisk,target=/home/firstdisk  ubuntu


