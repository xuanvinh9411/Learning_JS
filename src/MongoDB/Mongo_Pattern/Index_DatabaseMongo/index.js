/*
        **MongoDB indexes use a B-tree data structure 
          + Binary-tree : Mỗi cha chỉ 2 nút con
                          Đưa vào key array lấy item giữa so sánh nếu lớn hơn 
                          phần tử giữa thì chọn bên phải . tiếp túc 
                          lấy phần tử ở giữa bên phải so sánh  .bé hơn 
                          thì lấy bên trái giống vậy
          + B-tree  : Có nhiều nút con .
                      Mỗi nút sẽ lưu trữ 4 khóa và 5 con trỏ
                      khóa là n thì con trỏ là n + 1

        Collection nhỏ thì ko nên đánh index
        Nên tính toán ở BE , DB có nhiều tác vụ

        => Tối đa nên đánh 5 index

        => Mongodb chỉ hổ trợ cho phép 1024 byte trên ram để đánh index
        => 1 document limited là 16 mb
        => object nexted là 100 object
        **check index collection
        exp :
                var exp = db.product.explain()
                exp.find({productName:"Tip"})
                => winningPlan.stage : 'COLLSCAN' : scan toàn bộ collection
                => winningPlan.stage : 'IXSCAN'   : scan theo index
                
        ** isMultikey : true , là collection có 2 index trở lên 

        ** Không được đánh 2 index của 2 array d

        ** Trong mongo db cần truy phép chỉ mục bên trái  

        ** câu lệnh check storageSize : db.collectionName.stats({indexDetails : true})

        mongo lưu 32T
*/