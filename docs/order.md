# Bảng Order

- **Tên bảng:** `orders`
- **Loại:** `collectionType`
- **Tên hiển thị:** Order

## Các trường

| Tên trường     | Kiểu dữ liệu  | Chi tiết                                   |
| -------------- | ------------- | ------------------------------------------ |
| `users_id`     | `relation`    | oneToOne với `plugin::users-permissions.user` |
| `status_order` | `enumeration` | `["đang chờ xử lý", "đã xử lý", "đã giao hàng", "hủy đơn hàng"]` |
| `shipping_fee` | `decimal`     |                                            |
| `total`        | `decimal`     |                                            |
| `payment_id`   | `relation`    | oneToOne với `api::payment.payment`          |
| `coupon_id`    | `relation`    | oneToOne với `api::coupon.coupon`            |
| `affiliate_id` | `relation`    | oneToOne với `api::affiliate.affiliate`      |
| `canceled_at`  | `datetime`    |                                            |
| `completed_at` | `datetime`    |                                            |
| `delivery_at`  | `datetime`    |                                            |