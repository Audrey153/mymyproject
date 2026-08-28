# 廖奥迎 · 个人作品集

黑底 + 荧光绿 + 芭比粉主题的 React + Vite 个人网站，主要面向导师和同学。

## 启动方式

```bash
# 安装依赖（首次）
npm install

# 开发模式（默认 http://localhost:5173）
npm run dev

# 生产构建
npm run build

# 本地预览构建产物
npm run preview
```

## 目录结构

```
我的个人网站/
├─ 个人简历.docx                # 原始简历（保留）
├─ 屏幕截图 2026-08-28 181720.jpg  # 班长竞选 PPT 截图（保留）
├─ 屏幕截图 2026-08-28 200848.jpg  # 星际战机截图（保留）
├─ public/
│  └─ assets/img/                # 网站用到的图片（从原始截图复制而来）
├─ src/
│  ├─ components/Nav.jsx
│  ├─ sections/                  # 六大模块
│  │  ├─ Hero.jsx
│  │  ├─ About.jsx
│  │  ├─ Experience.jsx
│  │  ├─ Projects.jsx
│  │  ├─ Advantages.jsx
│  │  └─ Contact.jsx
│  ├─ data/profile.js            # 所有内容数据
│  └─ styles/index.css
├─ index.html
├─ vite.config.js
└─ package.json
```

## 缺失 / 待补充的信息

简历中没有明确给出的内容统一用「待补充」标记，主要包括：
- 个人头像（网站用「LY」渐变占位）
- 具体专业 / 学院（高考志愿以录取通知为准）
- 大学入学时间（2026 级）
- 个人头像照片、视频背景素材

请把照片 / 视频放到 `public/assets/img/` 与 `public/assets/video/` 后，
在 `src/sections/About.jsx` 与 `src/sections/Hero.jsx` 中替换对应位置即可。
