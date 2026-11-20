# Anthrise 源码访问与资产缺口

## 已实际访问的 GitHub 基线

仓库 `Paulshellby/anthrise-energy`，分支 `main`，提交 `476132c45a6c5262715efe096c9282c0f8412871`。GitHub 返回提交时间 `2026-11-20T04:20:17Z`，提交说明为 `Restore original Risey animations and remove homepage stories`。与附件交接基线一致。通过已授权的 GitHub CLI 实际克隆源码，不以附件源码包代替远程仓库。

## 入口与实现

| 位置 | 实际职责 |
|---|---|
| index.html、home-zh.html、home-es.html、home-ru.html | 四语言主页；header、hero-section、campus-canvas-host、投影热点、昼夜/能量/暂停控件、询盘表单与 Products 全屏展厅 |
| CNAME | 当前官网域名 anthrise-tech.com；本次不更改 |
| assets/product-catalog.js | window.ANTHRISE_PRODUCTS 与 ANTHRISE_DETAIL_COPY；型号、名称、描述、图库、参数的真值 |
| assets/js/showroom-catalog.js | window.ANTHRISE_SHOWROOM_CATALOG；三系列展厅数据、产品本地化详情链接与热点桥接 |
| products/ess16-zh.html 等 | ANTHRISE_PAGE 指定 SKU 和语言，原页 inline renderer 渲染图库/参数/下载；保留 canonical/hreflang/Product JSON-LD 与静态 SEO 内容 |
| assets/js/anthrise.js | 主页场景控制桥、导航、Products 状态机、匀速圆盘、拖动分页、展厅内详情、询盘桥接与 Risey 原动作 |
| assets/risey.js、assets/risey-companion.js | 旧产品页与全站外壳的已有 Risey 行为，不能被静态图片替换 |
| src/campus/index.ts | 获取主页 DOM，mountCampusScene 并向 window.ANTHRISE_CAMPUS 暴露 bridge |
| src/campus/CampusScene.ts | WebGLRenderer、真实 Three.js scene/camera、昼夜环境、能量层、镜头、投影热点及资源释放 |
| src/campus/campusWorld.ts、detailLayer.ts | 真实程序化建筑、植物、产品外形与场景细节；并非厂家 CAD 或实景建筑模型 |
| scripts/build-campus.cjs | 使用 esbuild 打包 src/campus/index.ts，输出 assets/js/campus.bundle.js |
| package.json | 现有 three 0.187.0、esbuild 0.25.0；没有迁移框架或加入第二版本 |

```text
anthrise-energy/
├── index.html、home-{zh,es,ru}.html
├── official-site.html、energy*.html、lighting*.html、bess-project.html
├── products/                   # 活跃四语言详情页
├── assets/
│   ├── product-catalog.js、product-resources.js、product-angles.js
│   ├── product-views/、product-views-v2/
│   └── js/anthrise.js、showroom-catalog.js、campus.bundle.js
├── images/                     # 实际 Logo、产品及应用图片
├── downloads/                  # 目录资料与选型 PDF
├── src/campus/                 # 12 个原 Three.js 源码模块
├── scripts/build-campus.cjs
├── CNAME、sitemap.xml、robots.txt
└── package.json
```

## 当前目录统计

重新运行实际目录：76 条产品记录。原始类别为 storage 19、portable 6、inverter 11、solar 7、lighting 33。映射到三系列：储能含便携共 25、光伏与逆变器共 18、太阳能照明 33。页面从数据计算数量，不硬编码历史目录。

## 模型真值与缺口

在 GitHub 网站文件树中未发现本地 `.glb`、`.gltf`、`.fbx`、`.obj` 产品模型。当前图库只有少量产品视图，不是完整有序转台。首轮真实展示模式为 gallery / 产品视图，360 不可用，不把图片镜像、裁切或平面旋转当三维。

| SKU | 实际型号 | 模型缺口 |
|---|---|---|
| ess16 | AE-E-DAWN-16 | 缺完整厂家三维外壳、后背/端子/脚轮安装定位与校准纹理；现有 480×235×874 mm 参数不能自动证明程序化外形准确 |
| hybrid6 | AE-I-HYBRID-6K | 缺真实背部挂架、接线腔与端口定位及厂家模型 |
| series_horizon | AE-E-HORIZON | 缺完整柜体/侧置散热模块/开门内舱/外置逆变器安装图；参数明确高压电池柜 + 外置逆变器，不能把 50 kW AC 与纯电池 DC 功率混同 |
| origAEV2500 | AE-E-VOLT-2500 | 缺实际完整接口、后背、提手及材质模型；不能复用 Volt 1000 外形冒充精确 Volt 2500 |
| jcLight28 | AE-L-BLOOM-01 | 缺完整灯头/柱体安装、光伏模块与自身储能模型，光学分布文件 IES/LDT 及安装图 |

全目录的文件存在性、图库关联、模型空值、展示模式和缺口见 `assets/product-model-manifest.json`。`verifiedViews` 只验证本地文件存在且关联目录，不代表厂家验证了拍摄角度或完整几何。目录中 `visualStatus=design-illustration` 应继续保留其设计示意身份。

园区附件是视觉标准，不是施工图或真实案例。本次只能交付实际网格局部概念验证，不能宣称已达到附件的照片级建筑可视化精度。继续提高精度需要统一尺度的建筑/植被/PBR 场景资产、厂家产品 CAD 或 GLB、安装及走线图、产品光学数据。电气匹配仍需核对电压、电流、BMS/固件、负载、当地安装要求；16 kWh 不意味着自动兼容任何 6 kW 逆变器。

## 分支与外部动作边界

所选仓库改动只在 `feat/anthrise-atlas-campus-20261120`。隔离开发预览不改变官网 CNAME、托管方式或工作流。本次不推送 main、不合并、不发布，也不发送邮件或客户消息。
