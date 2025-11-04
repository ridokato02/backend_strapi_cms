# Bảng Categorie

- **Tên bảng:** `categories`
- **Loại:** `collectionType`
- **Tên hiển thị:** Categorie

## Các trường

| Tên trường              | Kiểu dữ liệu  | Chi tiết                                   |
| ----------------------- | ------------- | ------------------------------------------ |
| `name`                  | `string`      |                                            |
| `slug`                  | `text`        | (unique)                                   |
| `categorie_id`          | `relation`    | oneToOne với `api::categorie.categorie`      |
| `description_categorie` | `text`        |                                            |
| `image_url_categorie`   | `media`       | (multiple) allowedTypes: `["images", "files", "videos", "audios"]` |
| `status_categorie`      | `enumeration` | `["Active", "Inactive"]`                   |