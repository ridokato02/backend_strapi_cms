# Bảng User

- **Tên bảng:** `up_users`
- **Loại:** `collectionType`
- **Tên hiển thị:** User

## Các trường

| Tên trường | Kiểu dữ liệu | Chi tiết |
| --- | --- | --- |
| `username` | `string` | (minLength: 3, unique, required) |
| `email` | `email` | (minLength: 6, required) |
| `provider` | `string` | |
| `password` | `password` | (minLength: 6, private, searchable: false) |
| `resetPasswordToken` | `string` | (private, searchable: false) |
| `confirmationToken` | `string` | (private, searchable: false) |
| `confirmed` | `boolean` | (default: false) |
| `blocked` | `boolean` | (default: false) |
| `phone_number` | `biginteger` | |
| `country` | `string` | |
| `city` | `string` | |
| `ward` | `string` | |
| `address_line` | `text` | |
| `postal_code` | `string` | |

## Quan hệ

| Tên trường | Kiểu quan hệ | Tên bảng liên kết |
| --- | --- | --- |
| `role` | manyToOne | `role` |
| `orders` | oneToMany | `order` |
| `cart` | oneToOne | `cart` |
| `payments` | oneToMany | `payment` |
