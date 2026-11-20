# Bing Webmaster Tools (必应网站管理员工具) 完整配置与收录操作指南

本指南专为域名 **`https://fanqianjichang.blog`** 针对 Bing 自然搜索引擎流量优化而编写。请按照以下步骤完成站长验证、Sitemap 提交与抓取监控。

---

## 一、登录与添加站点（需要人工登录）

1. **访问官网**：打开 [Bing Webmaster Tools (https://www.bing.com/webmasters)](https://www.bing.com/webmasters)。
2. **账号登录**：使用您的 Microsoft 账号、Google 账号或 Facebook 账号登录。
3. **添加站点**：
   - 在左上角选择“添加站点 (Add a site)”。
   - 输入正式站点 URL：`https://fanqianjichang.blog`。

---

## 二、所有权验证 (Site Verification)

Bing 提供三种验证方式，推荐采用 **HTML 标记验证** 或 **DNS 验证**：

### 推荐方法 A：HTML 元标记验证 (无需等待 DNS)
1. 在 Bing 验证页面选择“HTML Meta 标记”；
2. 复制形如 `<meta name="msvalidate.01" content="xxxxxxxxxxxxxxxx" />` 的代码；
3. 将该元标签添加到项目的 `index.html` 头部，或告知开发团队为您一键追加到构建脚本中；
4. 部署生效后，在 Bing 界面点击“验证 (Verify)”。

### 推荐方法 B：Cloudflare / DNS CNAME 验证 (最稳定)
1. 在 DNS 解析商（如 Cloudflare）添加一条 Bing 指定的 CNAME 或 TXT 解析记录；
2. 稍等 1-2 分钟生效后点击“验证”。

---

## 三、提交 XML 网站地图 (Sitemap Submission)

网站已自动生成标准且经过严格去重与合规过滤的 Sitemap 文件：
- **主要站点地图**：`https://fanqianjichang.blog/sitemap.xml`
- **站点地图索引**：`https://fanqianjichang.blog/sitemap-index.xml`

### 操作步骤：
1. 登录 Bing Webmaster Tools 后台，在左侧菜单栏点击 **“Sitemaps (站点地图)”**；
2. 点击右上角 **“Submit sitemap (提交站点地图)”**；
3. 分别输入：
   - `https://fanqianjichang.blog/sitemap.xml`
   - `https://fanqianjichang.blog/sitemap-index.xml`
4. 点击“提交”，状态将显示为“已处理 (Processing)”或“成功 (Success)”。

---

## 四、IndexNow 实时推送配置与验证

网站已内建完整的 IndexNow 自动化功能：
- **API Key**：`fa74b93198cf4cbb8f420658fa9cf21e`
- **Key 验证文件**：`https://fanqianjichang.blog/fa74b93198cf4cbb8f420658fa9cf21e.txt`

### 如何在本地或服务器主动触发推送：
```bash
# 提交默认的核心主页与排行榜更新
npm run indexnow

# 或者指定提交特定新增页面
node scripts/indexnow.js https://fanqianjichang.blog/blog/how-to-choose-reliable-airport/
```

### Bing 界面查看 IndexNow 状态：
在 Bing Webmaster 后台左侧菜单点击 **“IndexNow”**，可直观查看 Bing 接收到的实时推送 URL 数量、接收时间及 HTTP 200/202 成功率。

---

## 五、URL 检查工具 (URL Inspection)

当您发布了新的独立评测或更新了推荐排行时：
1. 点击左侧 **“URL Inspection (URL 检查)”**；
2. 输入要检查的链接（例如 `https://fanqianjichang.blog/ranking/value/`）；
3. 检查 Bing 蜘蛛是否能正常获取 HTML、是否存在移动端适应性问题；
4. 点击 **“Request Indexing (请求编入索引)”**，加速单页抓取排队。

---

## 六、搜索表现与收录健康度追踪 (Search Performance & Index Coverage)

- **Search Performance (搜索表现)**：追踪关键词如 `机场推荐`、`性价比机场`、`梯子推荐` 的展现量 (Impressions)、点击量 (Clicks) 和平均排名。
- **Index Coverage (索引覆盖)**：每周检查一次是否有页面被判定为“排除 (Excluded)”或“已发现但未编入索引”。
- **Crawl Issues (抓取故障)**：确保无 4xx / 5xx 错误。全站因采用标准纯静态架构，加载速度极快，抓取耗时极低。
