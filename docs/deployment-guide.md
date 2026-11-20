# Cloudflare Pages 与 GitHub 部署完整指南

本项目为纯原生、极速秒开的纯静态 HTML/CSS 中文机场博客系统，能够完美契合 **Cloudflare Pages** 的全球边缘分发网络。

---

## 一、方案 A：关联 GitHub 仓库自动部署（推荐）

通过与本次指定的 GitHub 远程仓库 (`https://github.com/tangtang856/fanqianjichang.blog`) 绑定，每次代码推送即可自动触发全球部署。

### 步骤详解：

1. **登录 Cloudflare Dashboard**：
   - 访问 [Cloudflare 控制台 (https://dash.cloudflare.com/)](https://dash.cloudflare.com/) 并登录。
2. **进入 Pages 管理**：
   - 在左侧主菜单点击 **“Compute (Workers & Pages)”** → **“Overview”** → 点击 **“Create application (创建应用程序)”**。
   - 选择 **“Pages”** 标签页，点击 **“Connect to Git (连接到 Git)”**。
3. **授权与选择仓库**：
   - 选择 GitHub 账号，授权并选中 `tangtang856/fanqianjichang.blog` 仓库。
   - 点击 **“Begin setup (开始设置)”**。
4. **构建设置 (Build settings)**：
   - **Project name (项目名称)**：`fanqianjichang-blog`
   - **Production branch (生产分支)**：`main`
   - **Framework preset (框架预设)**：选择 **None (无)**
   - **Build command (构建命令)**：`npm run build` (或者直接留空，因为仓库内已预先构建好所有静态 HTML 文件)
   - **Build output directory (构建输出目录)**：留空或者填入 `.` （即根目录）
5. **点击 “Save and Deploy (保存并部署)”**：
   - Cloudflare 会在数十秒内自动同步并完成全球全球 CDN 边缘节点分发。

---

## 二、配置正式独立域名 (fanqianjichang.blog)

部署成功后，Cloudflare 会生成一个临时二级域名（如 `fanqianjichang-blog.pages.dev`），必须绑定正式域名：

1. 在 Pages 项目主页中，切换到 **“Custom domains (自定义域)”** 标签页；
2. 点击 **“Set up a custom domain (设置自定义域)”**；
3. 输入域名：`fanqianjichang.blog`；
4. 如果您的域名本身就在 Cloudflare 托管解析，系统会自动添加对应的 CNAME 记录；如果托管在腾讯云/阿里云/Namesilo等其他注册商，按照提示在 DNS 解析后台添加一条 CNAME 指向即可；
5. 等待 SSL 证书签发完成（通常只需 2-5 分钟），状态将变为 **Active (有效)**。

---

## 三、性能与缓存推荐优化

在 Cloudflare 域名管理控制台中进行以下优化（进一步提升 Bing 爬虫抓取效率与 TTFB 响应）：

- **SSL/TLS 加密模式**：设置为 **Full (完全)** 或 **Strict (严格)**；
- **Always Use HTTPS (始终使用 HTTPS)**：开启；
- **Brotli 压缩**：开启（Cloudflare 默认开启，本站纯文本 HTML/CSS 将获得高达 80% 的体积压缩比）；
- **Auto Minify (自动压缩)**：可勾选 HTML、CSS、JS。

---

## 四、本地直接双击预览与离线使用

本项目严格遵循了标准的相对路径规范：
- 本地解压或克隆后，在 Windows 文件资源管理器中**直接双击任何一个 `.html` 文件**（例如根目录的 `index.html` 或 `recommend/budget/index.html`），均可通过 `file://` 协议完美渲染所有样式、脚本并平滑点击所有站内导航，绝无任何样式丢失或路径 404 错误。
