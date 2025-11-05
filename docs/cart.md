# Bảng Cart

- **Tên bảng:** `carts`
- **Loại:** `collectionType`
- **Tên hiển thị:** Cart

## Quan hệ

| Tên trường | Kiểu quan hệ | Tên bảng liên kết |
| --- | --- | --- |
| `users_id` | oneToOne | `user` |
| `cart_items` | oneToMany | `cart-item` |
