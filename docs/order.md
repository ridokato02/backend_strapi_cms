# Bảng Order

- **Tên bảng:** `orders`
- **Loại:** `collectionType`
- **Tên hiển thị:** Order

## Các trường

| Tên trường | Kiểu dữ liệu | Chi tiết |
| --- | --- | --- |
| `status_order` | `enumeration` | `["đang chờ xử lý", "đã xử lý", "đã giao hàng", "hủy đơn hàng"]` |
| `shipping_fee` | `decimal` | |
| `total` | `decimal` | |
| `canceled_at` | `datetime` | |
| `completed_at` | `datetime` | |
| `delivery_at` | `datetime` | |

## Quan hệ

| Tên trường | Kiểu quan hệ | Tên bảng liên kết |
| --- | --- | --- |
| `users_id` | manyToOne | `user` |
| `payment_ids` | oneToMany | `payment` |
| `coupon_id` | manyToOne | `coupon` |
| `affiliate_id` | manyToOne | `affiliate` |
| `order_items` | oneToMany | `order-item` |
