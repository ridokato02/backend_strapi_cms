# Bảng Categorie

- **Tên bảng:** `categories`
- **Loại:** `collectionType`
- **Tên hiển thị:** Categorie

## Các trường

| Tên trường | Kiểu dữ liệu | Chi tiết |
| --- | --- | --- |
| `name` | `string` | |
| `slug` | `text` | (unique) |
| `description_categorie` | `text` | |
| `image_url_categorie` | `media` | (multiple) allowedTypes: `["images", "files", "videos", "audios"]` |
| `status_categorie` | `enumeration` | `["Active", "Inactive"]` |

## Quan hệ

| Tên trường | Kiểu quan hệ | Tên bảng liên kết |
| --- | --- | --- |
| `categorie_id` | oneToOne | `categorie` |
