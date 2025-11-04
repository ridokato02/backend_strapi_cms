# Bảng User

- **Tên bảng:** `up_users`
- **Loại:** `collectionType`
- **Tên hiển thị:** User

## Các trường

| Tên trường           | Kiểu dữ liệu | Chi tiết                                   |
| -------------------- | ------------ | ------------------------------------------ |
| `username`           | `string`     | (minLength: 3, unique, required)           |
| `email`              | `email`      | (minLength: 6, required)                   |
| `provider`           | `string`     |                                            |
| `password`           | `password`   | (minLength: 6, private, searchable: false) |
| `resetPasswordToken` | `string`     | (private, searchable: false)               |
| `confirmationToken`  | `string`     | (private, searchable: false)               |
| `confirmed`          | `boolean`    | (default: false)                           |
| `blocked`            | `boolean`    | (default: false)                           |
| `role`               | `relation`   | manyToOne với `plugin::users-permissions.role` (inversedBy: `users`) |
| `address`            | `text`       |                                            |
| `city`               | `string`     |                                            |
| `country`            | `string`     |                                            |
| `postal_code`        | `string`     |                                            |
| `phone_number`       | `biginteger` |                                            |