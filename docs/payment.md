# Bảng Payment

- **Tên bảng:** `payments`
- **Loại:** `collectionType`
- **Tên hiển thị:** Payment

## Các trường

| Tên trường | Kiểu dữ liệu | Chi tiết |
| --- | --- | --- |
| `method` | `enumeration` | `["cod", "credit_card", "paypal", "bank_transfer", "momo", "vnpay"]` |
| `transaction_id` | `text` | |
| `amount` | `decimal` | |
| `status_payment` | `enumeration` | `["pending", "successful", "failed", "refunded"]` |
| `paid_at` | `datetime` | |

## Quan hệ

| Tên trường | Kiểu quan hệ | Tên bảng liên kết |
| --- | --- | --- |
| `order` | manyToOne | `order` |
| `users_permissions_user` | manyToOne | `user` |
