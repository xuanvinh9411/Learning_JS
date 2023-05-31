/*
        **MongoDB indexes use a B-tree data structure 
          + Binary-tree : Mỗi cha chỉ 2 nút con
                          Đưa vào key array lấy item giữa so sánh nếu lớn hơn 
                          phần tử giữa thì chọn bên phải . tiếp túc 
                          lấy phần tử ở giữa bên phải so sánh  .bé hơn 
                          thì lấy bên trái giống vậy
          + B-tree  : Có nhiều nút con .
                      Mỗi nút sẽ lưu trữ 4 khóa và 5 con trỏ
        Tối đa nên đánh 5 index
        Nên tính toán ở BE , DB có nhiều tác vụ
        collection nhỏ thì ko nên đánh index

        + khóa là n thì con trỏ là n + 1

        + mongodb chỉ hổ trợ cho phép 1024 byte trên ram để đánh index
*/