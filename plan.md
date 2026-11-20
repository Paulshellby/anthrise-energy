# Anthrise 首轮分支预览

基线：Paulshellby/anthrise-energy main `476132c45a6c5262715efe096c9282c0f8412871`。工作分支 `feat/anthrise-atlas-campus-20261120`。附件为已指定的实现方向；先交付一个实际产品完整详情与园区局部验证，不合并 main、不发布、不发送外部询盘。

## 实现

保持静态 HTML/CSS/JS 与 three 0.187.0 / esbuild 0.25.0。产品真值继续从 assets/product-catalog.js、活跃产品页及 showroom-catalog.js 读取，不创建另一套目录。共享产品 Atlas 模块以 ess16 为主，验证 hybrid6、series_horizon、origAEV2500、jcLight28，保留其全部本地化 URL、canonical、hreflang、结构化数据与原有下载、询盘、SEO 内容。无真实模型时明确为产品视图，360 控件不可用，禁止平面旋转冒充模型。

园区复用 src/campus/ 的真实网格与原镜头、热点桥接，在家庭区域重点完善建筑与安装细节、昼夜灯光和能量层。已有程序化外形只作概念应用示意，不能声称达到照片级施工模型精度。删除现有车辆行驶更新；可保留静态停放车辆。住宅、工商业、离网空间与产品位置昼夜不变，太阳能灯保持自身供电架构。绝不将附件整张图作为最终自由镜头场景。

## 设计

采用附件“暖白精密工业产品图鉴”风格：暖白底 #F6F3EB、墨蓝文字 #16263A、青绿主行动 #007F68。细边框、编辑式层级、充分留白与展示区微弱雾蓝渐变。实际 Anthrise Logo 与产品原色不变。英文展示字体 Newsreader，正文 Nunito Sans，中文使用系统中文无衬线字体并有远程字体失败回退。桌面三栏约 220px / 自适应 / 360px，平板保留可打开的分类，手机展示区在参数上方并允许页面和参数滚动。

交互只服务产品检视：完整图库、缩放、复位、专注/退出、展台深浅背景、搜索、真实 SKU 切换。减弱动效偏好下不自动旋转、无惯性或持续装饰动效，产品静止稳定。展台灯光与园区昼夜是独立状态。

## 结构

- products/：保留活跃详情 URL 与静态 SEO 内容；接入共享 Atlas。
- assets/product-atlas.*：隔离样式及数据驱动交互。
- assets/product-model-manifest.json：全目录模型与图库来源、缺口、展示模式。
- src/campus/：原 Three.js 渲染、空间、安装与能量系统；局部改进。
- scripts/build-campus.cjs：现有园区构建；assets/js/campus.bundle.js 为静态输出。
- docs/：源码访问报告、模型缺口和首轮交付测试记录。
- manus-routes.json：预览全部页面路由声明。

开发预览使用隔离容器，实际 GitHub 改动只推送新分支，不改域名、CNAME 或官网部署工作流。
