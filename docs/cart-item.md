# Bảng CartItem

- **Tên bảng:** `cart_items`
- **Loại:** `collectionType`
- **Tên hiển thị:** CartItem

## Các trường

| Tên trường | Kiểu dữ liệu | Chi tiết |
| --- | --- | --- |
| `quantity` | `integer` | |
| `price_cart` | `decimal` | |

## Quan hệ

| Tên trường | Kiểu quan hệ | Tên bảng liên kết |
| --- | --- | --- |
| `product_id` | manyToOne | `product` |
| `cart` | manyToOne | `cart` |
