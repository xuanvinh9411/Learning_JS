/*
Làm db là phải hiểu từng tệp và chức năng của nó như sau: 

*WiredTiger: tệp phiên bản WiredTiger
            Tệp văn bản này chứa phiên bản WiredTiger được sử dụng để tạo cơ sở dữ liệu và được WiredTiger sử dụng khi khởi động để xác định xem có cơ sở dữ liệu hay không.
*WiredTiger.wt: tệp siêu dữ liệu WiredTiger
               Tệp siêu dữ liệu chính theo dõi thông tin về bộ sưu tập và chỉ mục nào tồn tại trong cơ sở dữ liệu,
                cũng như bản cập nhật lâu bền gần đây nhất (điểm kiểm tra) cho từng bộ sưu tập và chỉ mục đó.
*WiredTiger.turtle: tệp cấu hình công cụ cho tệp WiredTiger.wt 
                        Tệp văn bản này chứa cấu hình công cụ WiredTiger cho tệp siêu dữ liệu được mô tả ở trên. WiredTiger.wt 
Làm db là phải hiểu từng tệp và chức năng của nó như sau: 

- WiredTiger: tệp phiên bản WiredTiger
              Tệp văn bản này chứa phiên bản WiredTiger được sử dụng để tạo cơ sở dữ liệu 
              và được WiredTiger sử dụng khi khởi động để xác định xem có cơ sở dữ liệu hay không.
-WiredTiger.wt: tệp siêu dữ liệu WiredTiger
                Tệp siêu dữ liệu chính theo dõi thông tin về bộ sưu tập và chỉ mục nào tồn tại trong cơ sở dữ liệu, 
                cũng như bản cập nhật lâu bền gần đây nhất (điểm kiểm tra) cho từng bộ sưu tập và chỉ mục đó.
-WiredTiger.turtle: tệp cấu hình công cụ cho tệp WiredTiger.wt 
                    Tệp văn bản này chứa cấu hình công cụ WiredTiger cho tệp siêu dữ liệu được mô tả ở trên. WiredTiger.wt 
-collection-X-XXX.wt và : Các tệp chỉ mục và bộ sưu tập MongoDB index-X-XXX.wt
                    Mỗi bộ sưu tập MongoDB được lưu trữ trong một tệp và mỗi chỉ mục MongoDB được lưu trữ trong một tệp. 
                    Các phần của tên tập tin đại diện cho một số ngẫu nhiên được sử dụng bởi WiredTiger như một định danh nội độc đáo. 
                    Nếu MongoDB được khởi động với tùy chọn này, 
                    các tệp này có thể xuất hiện trong thư mục con của . 
                    collection-X-XXX.wt  index-X-XXX.wt  X-XXX --directoryPerDB  dbpath
*/