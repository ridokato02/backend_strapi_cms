# Bảng Product_Asset

- **Tên bảng:** `product_assets`
- **Loại:** `collectionType`
- **Tên hiển thị:** Product_Asset

## Các trường

| Tên trường   | Kiểu dữ liệu | Chi tiết                        |
| ------------ | ------------ | ------------------------------- |
| `product_id` | `relation`   | oneToOne với `api::product.product` |
| `asset_id`   | `relation`   | oneToOne với `api::asset.asset`     |
| `type`       | `string`     |                                 |
