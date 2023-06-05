/*
    ------------Ý tưởng -----------
    Dùng để ghi Log . mỗi ngày server ghi hàng ngìn dòng log
    Phần tích hành vi request nào fail , success

    {
        _id : ObjectId("123567"),
        data_received : 2023-03-30T12:00:00.000z,
        server_id: '1111-2222-3333-55',
        infor : {
            ip : '11.22.333.xxx'
            cpu : 'xx',
            ram : 'xx'
        },
        request_calls : 10000,
        failed_calls : 10000,
        data_in_gb: 12,
        data_out_gb: 48,
    },
     {
        _id : ObjectId("123568"),
        data_received : 2023-03-30T12:00:00.000z,
        server_id: '1111-2222-3333-55',
        infor : {
            ip : '11.22.333.xxx'
            cpu : 'xx',
            ram : 'xx'
        },
        request_calls : 10000,
        failed_calls : 10000,
        data_in_gb: 11,
        data_out_gb: 33,
    }

    =======>>>>>>>>>> Cách cơ bản ghi log
    {
        data_received : 2023-03-30T12:00:00.000z, time send log
        server_id: '1111-2222-3333-55', id of server
        infor : {                       |
            ip : '11.22.333.xxx'        | info server
            cpu : 'xx',                 |
            ram : 'xx'                  |
        },
        request_calls : 10000 totla request / 1 minutes
        failed_calls : 1000,   failed request / 1 minutes
        data_in_gb: 11, inbound data traffic request / 1 minutes
        data_out_gb: 33, outbound data traffic request / 1 minutes
    }
    ++ 1 phút = 1 documents
       1 giờ = 60 documents
       1 ngày = 24 * 60  =  1400 documents
    => chi phí quá lớn để lưu trữ thống kê

    =======>>>>>>>>>> Level 1 use Bucket

    {
        data_received : 2023-03-30T12:00:00.000z,
        server_id: '1111-2222-3333-55',
        infor : {
            ip : '11.22.333.xxx'
            cpu : 'xx',
            ram : 'xx'
        },
        request_calls : [100000,1200,3,5,.....], Đãi diện cho 60 phút
        failed_calls : 10000,
        data_in_gb: 11,
        data_out_gb: 33,
    }

*/

