# ANTHRISE ENERGY · 昂旭新能源

ANTHRISE（昂旭新能源）双语静态展示官网。主页：`index.html`，产品图片资源：`images/`。

## ANTHRISE LIGHTING · 昂旭照明系列

- **独立图库**：[lighting.html](./lighting.html)，统一纳入 ANTHRISE LIGHTING 品牌网站架构。
- **30 款、30 张图片**：当前来源为仓库 `images/jc-lighting/`，全部图片已核对存在，并已逐款对应。
- **5 个子系列**：安防与路灯（8）、庭院景观（3）、氛围装饰（7）、离网便携（9）、商用交流照明（3）。
- **交互功能**：中英文切换、产品搜索与分类、查看大图、选择多款灯具、复制询盘清单、导出 TXT。
- **图文对照表**：[lighting-inventory.csv](./lighting-inventory.csv)，使用 ANTHRISE 站内选品编码 AL-001 至 AL-030。
- 首页 `index.html` 已加入独立图库入口。图片来源和产品参数仍按供应链参考资料标示，并不代表已经获得品牌定制、商标或图片授权。

**关于 D 盘素材**：这个 GitHub 仓库目前能核实的 JC Lighting 产品图为 30 张。若本机 D 盘还有未上传照片，请先整理为 ZIP，核实来源及使用授权，再补充进 `images/jc-lighting/`；不要直接假定 D 盘剩余图片已上传。

## 网站功能 / Website Features

- **64 个产品展示条目**：家储（16/32kWh 等）、商用储能、逆变器、光伏、太阳能灯具、Volt 便携电源、Core 低压电池、Ray 光伏产品及配件，保留原站 22 款产品，并整合 JC Lighting 产品目录参考素材。
- **中英文切换 / Chinese & English**：支持页面文本、产品名称与选型内容切换。
- **产品搜索与分类**：按储能、逆变器、光伏、照明、便携电源、配件筛选；灯具可按子类进一步筛选。
- **场景选品 / Solution Finder**：家庭、工商业、离网、太阳能照明及便携场景的初步推荐。
- **最多 3 款产品对比**：支持将所选产品加入商务询盘，并可导出对比 CSV。
- **产品目录导出 CSV**：按当前筛选条件导出，便于商业询价整理。
- **储能容量与供电时间估算**：供沟通参考，不属于工程设计或技术承诺。
- **商务询盘生成器**：在浏览器中生成、复制或保存 TXT，不会自动发送至公司或上传服务器。
- **响应式布局**：桌面及手机浏览。

> 重要：本网站含概念产品、供应链展示及第三方目录参考图。所有电气规格、认证、制造商、价格、供货与售后条件须在正式报价与规格书中逐项核实。除非另行配置表单处理服务，网站询盘功能不会收集或发送数据。

## 用 Google Chrome 打开网站（GitHub Pages）

目前网站代码已推送到 `main`，但 GitHub Pages 仍需要仓库管理员**开启一次**：

1. 进入 **[本仓库 Pages 设置](https://github.com/Paulshellby/anthrise-energy/settings/pages)**。
2. 在 **Build and deployment → Source** 中选择 **Deploy from a branch**。
3. **Branch** 选择 `main`，目录选择 `/(root)`，点击 **Save**。
4. 部署完成后，在 Chrome 打开：**https://paulshellby.github.io/anthrise-energy/**。
5. 日后更新 `main/index.html` 或 `images/`，网页会跟随发布设置更新。

GitHub 官方教程：[Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。

**未启用 Pages 之前，上述网址可能显示 404。** 仓库代码已经存在与网页公开部署属于两种不同状态。

## 下载源码 / Download Source

- GitHub → Code → Download ZIP，或使用 [下载整个项目 ZIP](https://github.com/Paulshellby/anthrise-energy/archive/refs/heads/main.zip)。
- 解压后双击 `index.html`，用 Chrome 打开。
- 为确保产品照片显示，必须保留 `images/` 文件夹与 `index.html` 的相对目录结构；部分浏览器功能在本地文件模式下可能受限，正式展示建议使用 GitHub Pages。

## 备份与维护

- 本次合并前的旧站首页保存在分支：`backup/pre-2026-11-09-merge`。
- 更新入口：`main/index.html`；产品详情页：`product.html`。
- 不要向公开仓库提交客户隐私、商业报价、未经授权的认证声明或真实合同。
