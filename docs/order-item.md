# Bảng OrderItem

- **Tên bảng:** `order_items`
- **Loại:** `collectionType`
- **Tên hiển thị:** OrderItem

## Các trường

| Tên trường | Kiểu dữ liệu | Chi tiết |
| --- | --- | --- |
| `name` | `string` | |
| `quantity` | `integer` | |
| `price` | `decimal` | |

## Quan hệ

| Tên trường | Kiểu quan hệ | Tên bảng liên kết |
| --- | --- | --- |
| `order_id` | manyToOne | `order` |
| `product_id` | manyToOne | `product` |
