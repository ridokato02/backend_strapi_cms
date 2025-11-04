# Bảng CartItem

- **Tên bảng:** `cart_items`
- **Loại:** `collectionType`
- **Tên hiển thị:** CartItem

## Các trường

| Tên trường   | Kiểu dữ liệu | Chi tiết                      |
| ------------ | ------------ | ----------------------------- |
| `cart_id`    | `relation`   | oneToOne với `api::cart.cart`   |
| `product_id` | `relation`   | oneToOne với `api::product.product` |
| `quantity`   | `integer`    |                               |
| `price_cart` | `biginteger` |                               |