# Bảng Cart

- **Tên bảng:** `carts`
- **Loại:** `collectionType`
- **Tên hiển thị:** Cart

## Các trường

| Tên trường | Kiểu dữ liệu | Chi tiết                                |
| ---------- | ------------ | --------------------------------------- |
| `users_id` | `relation`   | oneToOne với `plugin::users-permissions.user` |