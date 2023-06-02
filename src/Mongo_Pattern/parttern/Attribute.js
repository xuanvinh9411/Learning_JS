/*
    ------------Ý tưởng -----------
    Là nhóm nhiều trường thành mảng .
    Mảng chứa các tài liệu lần lượt các cập key và value
    cần ít chỉ mục index hơn truy vấn dễ hơn và nhanh hơn

    ex: 
        {   
            name : 'điện thooại' 
            atributes : {
                    color : 'Silver',
                    model : 'ipohone 11',,
                    hight : 79
                }
        },
        {   
            name : 'túi xách ' 
            atributes : {
                    size : 'L',
                    material : 'Demi',
                    brand : : 'levis'
                }
        }
        => Nếu đánh index cho atributes thì phải color : 1 , model : 1 , hight : 1 , size : 1 , material : 1 , brand : 1 
        => Dùng Attribute 
         {   
            name : 'điện thooại' 
            atributes : [
                    {K : 'color',V : 'Silver },
                    {K : 'model',V : 'ipohone 11 },
                    {K : 'hight',V : '79 , u : 'mm' },
            ]
        },
        {   
            name : 'túi xách ' 
            atributes : [
                    {K : 'size',V : 'L },
                    {K : 'material',V : 'Demi },
                    {K : 'brand',V : 'levis },
            ]
        }
        => bây giờ chỉ cần đánh index k : 1 , v : 1

    ** Nhược điểm truy vấn nhiều cấp hơn ở lv 1 , lv 2
*/