# Bảng Affiliate

- **Tên bảng:** `affiliates`
- **Loại:** `collectionType`
- **Tên hiển thị:** Affiliate

## Các trường

| Tên trường   | Kiểu dữ liệu | Chi tiết                                |
| ------------ | ------------ | --------------------------------------- |
| `user_id`    | `relation`   | oneToOne với `plugin::users-permissions.user` |
| `code`       | `string`     |                                         |
| `commission` | `decimal`    |                                         |
| `balance`    | `decimal`    |                                         |
| `is_active`  | `boolean`    |                                         |