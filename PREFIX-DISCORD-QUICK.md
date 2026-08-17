# ĐỔI PREFIX TRỰC TIẾP TRÊN DISCORD

Mặc định:
`j`

Đổi sang `!`:
`jprefix !`

Sau đó dùng:
`!play`
`!p`
`!skip`
`!s`
`!leave`
`!lv`

Xem prefix:
`!prefix`

Reset:
`!prefix reset`

Quyền:
- Manage Server hoặc Administrator.

QUAN TRỌNG:
- Prefix command chạy độc lập với Lavalink. Lavalink offline/429 không ngăn `jprefix`.
- Nếu log có `[PREFIX] Default=j`, hãy dùng `jprefix !`.
- Nếu bạn đã đặt PREFIX trong Railway/Render thành `!`, lệnh ban đầu là `!prefix .`.
- Nếu bot không phản hồi cả `jping`, kiểm tra Discord Developer Portal -> Bot -> Message Content Intent = ON.

Lavalink 429:
`Unexpected server response: 429`
là lỗi/rate-limit ở kết nối Lavalink, KHÔNG phải lỗi custom prefix. Cần giảm reconnect hoặc sửa host/port/password/Lavalink endpoint.
