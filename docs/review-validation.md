# 首轮检查记录

检查时间：2026-11-20。基线：main `476132c45a6c5262715efe096c9282c0f8412871`。工作分支：`feat/anthrise-atlas-campus-20261120`。

## 已完成的自动检查

| 检查 | 结果与范围 |
|---|---|
| build:campus | esbuild 使用原 three 0.187.0 / esbuild 0.25.0 成功输出静态 bundle |
| JS 语法 | product-atlas.js、branch-preview.js、审计/回归脚本均通过 node --check |
| 目录与模型 | 76 条记录；304 个实际四语言 SKU URL 均存在；图库没有缺失文件；0 个已识别 GLB/GLTF/FBX/OBJ；所有展示模式明确 gallery |
| 原文件保留 | 10 个指定目录、Risey/展厅控制器、CNAME、sitemap、robots 与 GitHub Actions 文件 SHA-256 与 main 基线一致 |
| SEO | 20 个增强产品页 canonical、alternate/hreflang、Product JSON-LD 与基线一致；原静态信息、应用、下载及相关产品仍保留 |
| 路由 | 319 个当前源码 HTML 路由声明，均可对应真实文件 |
| 场景图 | 12 个有限 range/decay 的实际局部灯、9 个暖光材质日间强度精确 0；昼夜所有物体 transform 不变；三个静态停车车辆无运动 update；两柜侧散热保留；338 屋瓦与 8 PV 模块安装；原 ESS/逆变器锚点和脚轮接触保留 |
| 电气与能量 | 检查 7 个 PV 门控轨迹；请求 night 立即关闭 PV 发电 packets；隐藏、显示、暂停和 reduced-motion 行为通过场景结构检查 |

`docs/static-checks.json` 和 `docs/campus-structural-checks.json` 是实际检查输出。场景三角形估计为 262436，不能将此当作 FPS 测量。

## 已实际执行的浏览器检查

1440×900、768×1024、390×844 检查 ess16 三栏/平板分类入口/手机纵向布局，完整产品图 contain 无裁掉脚轮。手机页面与右侧参数区域分别允许滚动，下方资料与询盘可达。最终桌面和手机截图已替换为浮层修复后的版本；平板截图为同一布局在初轮捕获，尺寸规则未改变。

图鉴真实 DOM 操作：图库从 01/03 切到 02/03；放大显示 125%；0 复位到 100%；专注状态为 true，Escape 后退出；展台背景变 dark；照明分类返回 33 项；搜索 AE-I-HYBRID-6K 返回真实 hybrid6 中文路径；未知 SKU 显示 0 个匹配及空状态。对比原 category 内两产品产生实际规格表（ess16 对比共 32 个对齐字段），明确不构成兼容性判断。完整图 dialog 实际打开且指向 primary 完整图，不把细节 crop 重命名为新角度。三个 ess16 下载链接返回 HTTP 200。

通过实际全球语言选择器从 ess16 中文切到 `/products/ess16-es.html`，模型保持 AE-E-DAWN-16，19 条规格仍完整。另检查 hybrid6-en、Horizon-ru、Volt2500-es、jcLight28-zh 实际图像和参数版式。`ess16-en.html?lang=fr` 旧扩展语言路径在原全站 lang mutation 后仍保留整个图鉴；核心技术数据回退英文，不声称新增完整法语翻译。

询盘实际预填 `[产品咨询] 16kWh 家用储能 / 型号: AE-E-DAWN-16`。加入仅测试的 `[preview-test]` 文本后，经全球 picker 切换到英文 `/?inquire=ess16#project-inquiry`，草稿和型号均真实恢复。随后已删除测试内容及专用 sessionStorage 测试记录。未点击发送、准备邮件或提交表单。

园区原按钮实际切换：day→night，flowVisible false→true，暂停 aria-pressed=true，区域 overview→home，bridge 状态同步。夜景渲染初期出现软件 GPU 交叉淡化超时；加入 4/6/全部的自适应局部光源预算和软件 GPU 即时昼夜后，1440×900 夜景实际截图成功，家庭门廊/步道可见有限灯光照亮地面，场景没有整张参考图贴底。

原 Products 流程实际推进：`frontFacingIdle → runningRight → categoriesReady → pointingAndCharging → showroom`。原 Risey front-idle 图层存在，展厅内 companion is-yielded=true。储能 25 条、光伏/逆变器 18 条、照明 33 条从原目录显示。暂停旋转按钮从“暂停旋转”变“恢复旋转”，分页由第 1 页进入“第 2 / 7 页 · 共 25 款”，展厅详情 data-detail-open=true，真实完整页链接指向当前分页所选的 series_root-zh.html。

## 浏览器发现后已修复的问题

初版 language capture 无作用域，closest('[data-lang]') 会匹配图鉴 root，导致全部内部点击导航刷新。现已限定 header 原控件与全球 picker 的 data-language；上述真实操作复测全部生效。原 site-polish 会处理所有 data-product-id，因此图鉴根节点改为专用 data-atlas-product-id，防止整个组件被写成链接文本。修复全球语言切换丢失询盘 SKU/草稿，补齐本地 sessionStorage 恢复。旧 WhatsApp 快捷浮层只在图鉴页面隐藏，联系渠道仍在原页脚/询盘。原动态外壳晚加载的退役 #stories 链接在同步后修正到实际园区，不恢复 Application Stories。

## 不应冒充通过的部分

没有完成所有设备上的逐帧 FPS、内存/触控手势测量。手机/平板主要完成版式检查，未在真实触屏硬件逐项操作所有拖动、焦点循环和系统邮件客户端。原 Risey 控制器及资产完全保留，入场/圆盘流程已测；呼吸、眨眼、左右跑、所有舞蹈和电球动作没有逐项录像验收。

TypeScript 原工程缺正确的 Three 类型声明，宿主 LSP 的部分 Three API 声明也与真实 runtime 不符。当前 esbuild 和实际 Three 场景图检查通过，但不声称严格 tsc/LSP 全部通过，不用伪造 `.d.ts` 来掩盖。原设备概念几何未按厂家 CAD 校准，也未验收照片级园区精度或电气适配。

截图存放 `docs/screenshots/`：ess16-desktop、ess16-tablet、ess16-mobile、campus-day、campus-night、locale-legacy-regression。部分初次实时浏览器截图先于 deferred scene 加载完成，不用其空白画面充当最终成品；本记录引用的是成功渲染的静态版式/夜景证据。
