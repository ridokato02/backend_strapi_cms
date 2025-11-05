# Bảng Affiliate

- **Tên bảng:** `affiliates`
- **Loại:** `collectionType`
- **Tên hiển thị:** Affiliate

## Các trường

| Tên trường | Kiểu dữ liệu | Chi tiết |
| --- | --- | --- |
| `code` | `string` | |
| `commission` | `decimal` | |
| `balance` | `decimal` | |
| `is_active` | `boolean` | |

## Quan hệ

| Tên trường | Kiểu quan hệ | Tên bảng liên kết |
| --- | --- | --- |
| `user_id` | oneToOne | `user` |
| `orders` | oneToMany | `order` |
