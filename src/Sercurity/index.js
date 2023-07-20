/**
 * ! Security API 
 *  1 - JWT 
 *  2 - Timestamp mechanism (cơ chế dấu thời gian )
 *  3 - Signature Generation (sign - chống thay đổi payload)
 *  4 - Nonce - Replay attack (Replay attack là tấn công api theo kiểu gửi 
 *                             lại nguyên vẹn endpoint đã thực hiện trước đó bao gồm hacker và chính người dùng )
 *  5 - Rate Limits ( Hạn chế request tới server N lần trên x phút)
 *  6 - Ip access limit
 *  7 - BlackList
 *  8 - WhileList
 */