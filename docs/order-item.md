# Bảng OrderItem

- **Tên bảng:** `order_items`
- **Loại:** `collectionType`
- **Tên hiển thị:** OrderItem

## Các trường

| Tên trường   | Kiểu dữ liệu | Chi tiết                      |
| ------------ | ------------ | ----------------------------- |
| `order_id`   | `relation`   | oneToOne với `api::order.order` |
| `product_id` | `relation`   | oneToOne với `api::product.product` |
| `name`       | `string`     |                               |
| `quantity`   | `integer`    |                               |
| `price`      | `decimal`    |                               |