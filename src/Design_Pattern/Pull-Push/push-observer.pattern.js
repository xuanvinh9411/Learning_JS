/*
    Ưu nhược điểm của Push Strategy
    +++ Nhược điểm 
        - Tỷ lệ ghi cao (lãng phí DB), ví dụ Cr7 có 1m followers thì 1 triệu bản ghi
        - Tốc độ nhận tin của người followers có thể chậm hơn người người khác
        => sẽ đánh dấu user nào là thân thuộc để load trước 

    +++ Ưu Điểm
        - Chỉ cần truy cập vào danh sách new feed của mình là có data
        - Nhanh, gọn lẹ
*/ 