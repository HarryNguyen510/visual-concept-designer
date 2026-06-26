# Visual Concept Designer (Trình thiết kế Khái niệm Trực quan)

<p align="left">
  <a href="README.md">English</a> •
  <b>Tiếng Việt</b> •
  <a href="README.es.md">Español</a> •
  <a href="README.ja.md">日本語</a> •
  <a href="README.zh.md">简体中文</a>
</p>

---

Visual Concept Designer là một **Agent Skill** giúp chuyển đổi các ghi chú, bài viết, khung tư duy, quy trình (SOP) và ý tưởng kinh doanh thành các hình ảnh minh họa dạng sketchnote sinh động, lưới Bento hiện đại, hoặc ảnh bìa bài viết tối giản — dưới dạng ảnh được tạo tự động, mã vẽ Vector SVG, hoặc các câu lệnh (prompts) tối ưu sẵn.

Dự án này được thiết kế dành cho:

- Tóm tắt trực quan các nội dung dài (bài đăng blog, slide thuyết trình, bài đăng mạng xã hội).
- Ảnh bìa bài viết tối giản: tiêu đề + phụ đề + họa tiết ẩn dụ trừu tượng.
- Hình ảnh minh họa cho các buổi workshop và thuyết trình.
- Khung tư duy kinh doanh và bản đồ chiến lược.
- Hỗ trợ đầu ra cả tiếng Việt và tiếng Anh (xử lý nghiêm ngặt dấu tiếng Việt tránh bị lỗi chữ trên ảnh).

---

## Cách hoạt động

Khi bạn cung cấp nội dung và yêu cầu, Skill sẽ thực hiện:

1.  **Chắt lọc nội dung (Distill)**: Rút gọn các bài viết dài thành thông điệp cốt lõi và các nhãn chữ hiển thị trên ảnh (cam kết không tự bịa thông tin).
2.  **Chọn Phong cách (Style Selection)**: Tự động chọn 1 trong 9 phong cách phù hợp nhất bên dưới (hoặc dùng phong cách bạn chỉ định).
3.  **Tạo Prompt chương trình (Programmatic Compile)**: Chạy script biên dịch tự động để sinh ra prompt chính xác tuyệt đối về mã màu HEX, tỷ lệ khung hình, và các tham số kỹ thuật riêng cho Midjourney v6 hoặc DALL-E 3.
4.  **Kiểm tra ký tự**: Đọc lại chữ trên ảnh được tạo ra (bao gồm cả dấu tiếng Việt) và tự động yêu cầu vẽ lại tối đa 2 lần nếu chữ bị lỗi dấu hoặc sai chính tả.

---

## Nên chọn Phong cách (Style) nào?

*   **Ảnh bìa blog/bài viết (chỉ có tiêu đề + phụ đề)?** $\rightarrow$ Chọn `WEC`
*   **So sánh Trước/Sau, Thủ công vs AI?** $\rightarrow$ Chọn `ACD`
*   **Trích dẫn hoặc một thông điệp suy ngẫm duy nhất?** $\rightarrow$ Chọn `SBS`
*   **Danh sách bài học hoặc mẹo nhỏ?** $\rightarrow$ Chọn `SB`
*   **Quy trình từng bước / SOP / Luồng tự động hóa?** $\rightarrow$ Chọn `FBW`
*   **Poster giáo dục / Tóm tắt nhiều khái niệm dạng thẻ?** $\rightarrow$ Chọn `EIS`
*   **Sơ đồ tư duy dạng tối tối giản (Bento Grid) cho SaaS/Tech?** $\rightarrow$ Chọn `BGL`
*   **Khung tư duy kinh doanh / Bản đồ chiến lược?** $\rightarrow$ Chọn `BLD`
*   **Bản đồ tri thức phân tích chuyên sâu?** $\rightarrow$ Chọn `VTK`

| Mã (Code) | Phong cách | Phù hợp nhất cho |
| :--- | :--- | :--- |
| **ACD** | AI Contrast Drama | So sánh trước/sau, thủ công vs tự động hóa, ảnh kịch tính |
| **WEC** | Watercolor Editorial Cover | Ảnh bìa màu nước thanh lịch, recap sự kiện, banner premium |
| **SBS** | Sketchnote Charcoal & Gold Story | Nét vẽ tay phấn trắng nền tối kèm nhấn vàng kim cho 1 trích dẫn/bài học |
| **SB** | Sketchnote Charcoal & Gold | Trang sổ vẽ tay nền tối cho danh sách bài học/mẹo nhỏ (3-6 ý) |
| **FBW** | FlowBot Watercolor | Minh họa quy trình, SOP, luồng tự động hóa bằng nét vẽ màu nước |
| **EIS** | Educational Infographic Sketchnote | Poster giáo dục, bảng tra cứu nhanh, 6-9 thẻ khái niệm |
| **BLD** | Business Line Diagram | Sơ đồ khối tối giản, sơ đồ kiến trúc hệ thống, bản đồ chiến lược |
| **VTK** | Visual Thinking Knowledge | Bản đồ tri thức phân tích sâu với nhiều nhánh kết nối |
| **BGL** | Bento Grid Layout | Lưới Bento hiện đại hiển thị tính năng sản phẩm, số liệu SaaS |

---

## Hướng dẫn Cài đặt

Skill này được đóng gói trong thư mục `skill/visual-concept-designer` và tuân theo định dạng chuẩn của Agent Skill (`SKILL.md` kèm YAML frontmatter), tương thích với mọi môi trường chạy Agent hỗ trợ định dạng này.

### Môi trường Codex (Windows PowerShell):
```powershell
Copy-Item -Recurse .\skill\visual-concept-designer C:\Users\<Tên_User>\.agents\skills\visual-concept-designer
```

### Môi trường Claude Code:
```powershell
Copy-Item -Recurse .\skill\visual-concept-designer C:\Users\<Tên_User>\.claude\skills\visual-concept-designer
```

Sau khi copy xong, hãy **khởi động lại Agent** để kích hoạt. Để kiểm tra xem skill hoạt động chưa, hãy gõ lệnh:
> *Use visual-concept-designer to create a sketchnote for: "Tools amplify the workflow you already have."*

---

## Cách sử dụng nhanh

### 1. Tạo hình vẽ (Charcoal & Gold):
> *Use visual-concept-designer to create a sketchnote for this business framework: [Nội dung của bạn]*

### 2. Vẽ hình Vector chuẩn SVG trực tiếp:
> *Use visual-concept-designer to generate an SVG vector graphic for: [Nội dung của bạn]*

### 3. Chỉ xuất Prompt biên dịch (Không vẽ ảnh):
> *Use visual-concept-designer and return only the image prompt for this article: [Nội dung]*

---

## Biên dịch Prompt bằng Script (Chuyên nghiệp)

Để sinh prompt chuẩn xác tuyệt đối không bị lỗi màu hoặc sai lệch bố cục, bạn có thể chạy trực tiếp script Node.js trong dự án:

```bash
# Tạo prompt Midjourney v6
node scripts/compile-prompt.mjs --style BGL --title "Tên Dự Án" --labels "Nhãn 1, Nhãn 2, Nhãn 3" --model midjourney --signature "#mybrand"

# Tạo prompt DALL-E 3
node scripts/compile-prompt.mjs --style SBS --title "Ý tưởng chính" --labels "Nội dung 1, Nội dung 2" --model dalle3
```

---

## Giấy phép (License)
*   Mã nguồn và tài liệu hướng dẫn được phân phối dưới giấy phép **MIT License** (Xem tệp [LICENSE](LICENSE)).
*   Các hình ảnh mẫu tham chiếu trong thư mục `assets/` được tạo tự động bởi AI và tuân thủ theo chính sách trong [ASSET_LICENSE.md](ASSET_LICENSE.md).
