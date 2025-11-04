# Bảng Product

- **Tên bảng:** `products`
- **Loại:** `collectionType`
- **Tên hiển thị:** Product

## Các trường

| Tên trường          | Kiểu dữ liệu        | Chi tiết                               |
| ------------------- | ------------------- | -------------------------------------- |
| `category_id`       | `relation`          | oneToOne với `api::categorie.categorie` |
| `name`              | `string`            |                                        |
| `slug`              | `text`              | (unique)                               |
| `description_product` | `text`              |                                        |
| `price`             | `decimal`           |                                        |
| `image_url`         | `media`             | (multiple) allowedTypes: `["images", "files", "videos", "audios"]` |
| `discount`          | `decimal`           |                                        |
| `quantity`          | `biginteger`        |                                        |
| `sold`              | `biginteger`        |                                        |
| `status_product`    | `enumeration`       | `["ngừng kinh doanh", "kích hoạt"]`     |
| `featured`          | `enumeration`       | `["không", "có"]`                      |