# Ghi chú cá nhân mini (React Native + Expo)

Đây là ứng dụng ghi chú đơn giản được xây dựng bằng React Native và Expo CLI, thực hiện trong tuần 10 của môn học *Lập trình Web và Ứng dụng di động*.

## Tính năng chính
- Nhập và thêm ghi chú mới
- Đánh dấu hoàn thành từng ghi chú
- Lọc ghi chú chưa hoàn thành bằng Switch
- Danh sách có thể cuộn và phản hồi khi nhấn

## Công nghệ sử dụng
- React Native
- Expo CLI
- Component-based architecture (View, Text, TextInput, FlatList, Pressable, Switch...)

## Cách chạy ứng dụng

```bash
npm install
npx expo start --tunnel
```

Sau đó dùng ứng dụng **Expo Go** trên điện thoại để quét mã QR và chạy app.

## Cấu trúc thư mục

```
.
├── App.js
├── components/
│   └── NoteItem.js
├── package.json
├── app.json
├── babel.config.js
```
