# Bảng Product

- **Tên bảng:** `products`
- **Loại:** `collectionType`
- **Tên hiển thị:** Product

## Các trường

| Tên trường | Kiểu dữ liệu | Chi tiết |
| --- | --- | --- |
| `name` | `string` | |
| `slug` | `text` | (unique) |
| `description_product` | `text` | |
| `price` | `decimal` | |
| `image_url` | `media` | (multiple) allowedTypes: `["images", "files", "videos", "audios"]` |
| `discount` | `decimal` | |
| `quantity` | `integer` | |
| `sold` | `integer` | |
| `status_product` | `enumeration` | `["ngừng kinh doanh", "kích hoạt"]` |
| `featured` | `enumeration` | `["không", "có"]` |

## Quan hệ

| Tên trường | Kiểu quan hệ | Tên bảng liên kết |
| --- | --- | --- |
| `category_id` | oneToOne | `categorie` |
| `order_items` | oneToMany | `order-item` |
| `cart_items` | oneToMany | `cart-item` |
