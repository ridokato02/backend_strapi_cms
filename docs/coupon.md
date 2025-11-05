# Bảng Coupon

- **Tên bảng:** `coupons`
- **Loại:** `collectionType`
- **Tên hiển thị:** Coupon

## Các trường

| Tên trường | Kiểu dữ liệu | Chi tiết |
| --- | --- | --- |
| `coupon_code` | `string` | (unique) |
| `coupon_type` | `enumeration` | `["percent", "fixed_amount"]` |
| `coupon_value` | `decimal` | |
| `coupon_start_date` | `datetime` | |
| `coupon_end_date` | `datetime` | |
| `coupon_min_spend` | `decimal` | |
| `coupon_max_spend` | `decimal` | |
| `coupon_uses_per_customer` | `biginteger` | |
| `coupon_uses_per_coupon` | `biginteger` | |
| `coupon_status` | `enumeration` | `["active", "expired", "disabled"]` |

## Quan hệ

| Tên trường | Kiểu quan hệ | Tên bảng liên kết |
| --- | --- | --- |
| `orders` | oneToMany | `order` |
