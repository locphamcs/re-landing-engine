# Assets – The Reflection Westlake

Đặt ảnh vào thư mục này. Tên file phải khớp chính xác với đường dẫn đã khai báo trong
`lib/projects/the-reflection-westlake.ts`.

## Danh sách ảnh cần chuẩn bị

| Tên file          | Kích thước tối ưu | Mô tả                                               |
| ----------------- | ----------------- | --------------------------------------------------- |
| `hero.jpg`        | 1920 × 1080 px    | Ảnh banner trang chủ dự án – full screen hero       |
| `og-image.jpg`    | 1200 × 630 px     | Open Graph thumbnail cho mạng xã hội / SEO          |
| `masterplan.jpg`  | 1200 × 1200 px    | Mặt bằng tổng thể (square hoặc landscape)           |
| `gallery-01.jpg`  | 1600 × 900 px     | Phối cảnh tổng thể ban đêm                          |
| `gallery-02.jpg`  | 1200 × 1200 px    | Hồ bơi vô cực tầng 5                               |
| `gallery-03.jpg`  | 1200 × 1200 px    | Lobby Tháp A – 5 sao                                |
| `gallery-04.jpg`  | 1200 × 1200 px    | Nội thất căn hộ 2 phòng ngủ                         |
| `gallery-05.jpg`  | 1200 × 1200 px    | Sky Lounge tầng 44                                  |
| `gallery-06.jpg`  | 1600 × 900 px     | Penthouse view Hồ Tây                               |
| `gallery-07.jpg`  | 1200 × 1200 px    | Phòng gym & Spa 1.200m²                             |
| `gallery-08.jpg`  | 1200 × 1200 px    | Công viên nội khu 8.000m²                           |

## Lưu ý

- Định dạng: **JPG** hoặc **WebP** (Next.js Image Optimization sẽ tự convert).
- Nén ảnh trước khi đặt vào để tối ưu build time (TinyPNG / Squoosh).
- Nếu chưa có ảnh thật, trang vẫn **load bình thường** – phần ảnh sẽ hiển thị nền tối fallback.
- Không cần commit ảnh vào Git – thêm vào `.gitignore` nếu cần.

## Thêm ảnh mới

Chỉ cần đặt file vào thư mục này và cập nhật đường dẫn tương ứng trong config:
`lib/projects/the-reflection-westlake.ts` → trường `gallery.images[].src`.

