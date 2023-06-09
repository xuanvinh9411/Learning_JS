/*
    - Lưu trữ đánh giá sản phảm 
    - Load những comment hiển thị đầu tiên một cách nhanh nhất 
    - Trong mongodb dữ liệu nào sử dụng nhiều nhất dc bỏ vào dữ liệu đệm
    ==> khi truy vẫn mongodb sẽ kiểm tra dữ liệu có trong bộ nhớ hay chưa
        +    nếu có sẽ lấy mongodb trong bộ nhớ đệm truy vấn được phục vụ một cách nhanh chóng
        +    Nếu không có mongodb sẽ lấy từ disk tạo ra lowdisk . 
        Tranh tình trạng truy cập đĩa thường xuyên làm giảm hiệu xuất . mongodb sẽ giữ càng nhiều dữ liệu trong bộ đệm
    ==> Giải pháp tạm thời thêm ram cho máy chủ 
        Bộ đệm mongodb là bộ đệm writetiger. Nó là quản lí bộ nhớ được sử dụng bới nhóm làm việc

    **Trong mongodb WORKING SET là phần cơ sở dữ liệu được hiển thị tích cực và dc lưu trữ trong bộ nhớ đệm csdl 
*/