# 园区首轮家庭区域实现与模型缺口

## 本轮范围与状态

本轮仅改造 `/home/ubuntu/anthatlas/src/campus/`，生成 `assets/js/campus.bundle.js`，另新增 `assets/campus-refinement.css`。主页 CSS 挂载和分支说明由 parent 处理；本轮未修改任何主页、产品页、产品模块、目录 manifest、package 或部署文件，未执行 Git commit / push、合并 main、发布或外部消息。参考为真实 `Paulshellby/anthrise-energy` main `476132c45a6c5262715efe096c9282c0f8412871` 的工作副本，以及指定的园区白天 / 黑夜标准图。

**这是已实现的一个区域网格验证，不是全园区照片级交付，也不是厂家 CAD、施工模型或真实客户案例。** 原有 home / commercial / offgrid 与 overview 坐标空间、产品入口和桥接保持；工商业和离网区主要修正灯光与车辆状态，未重新制作全园区建筑。

## 已完成的实际改动

### 家庭建筑与承托

新增 `homeRefinement.ts`，由 `campusWorld.ts` 挂入既有 homeBody 和屋顶父组。旧住宅技术翼实心大方块替换为真实空心壳体：地板、后墙、左右墙、侧窗真实开口、窗台、玻璃、窗框和横梃。保留居住翼开放剖视，不遮挡原有电器负载。新增入口推拉窗细框、地轨、门把、石质门槛和侧立面木格栅。

屋面仍为原 footprint 与坡向。新增 338 个实例化瓦块、檐口、封边、两侧和后侧坡屋面墙体收口、雨槽和接到雨槽的落水管。8 块原住宅 PV 模块挂入与屋面完全相同的旋转父组，设置可见支轨与夹件，不再各自用近似高度拼放。PV 是程序化表面和实体框架，不是整张参考图或白底产品照片贴方块。

原 inverter / battery 拓扑与锚点不变。逆变器原背面在墙体内的问题通过建筑服务凹槽和概念安装轨处理，不添加产品后背接口、钻孔或内部结构。电池原四只脚轮完整保留；新增承托石板和四处极弱接触暗部。脚轮最低接触平面为世界 y=0.258 m，石板顶面也为 0.258 m；住宅台座含倒角顶面调整为约 0.25 m，避免原脚轮被台座埋住。电池和逆变器位置未因此上移，管线端点与热点仍按原拓扑工作。

家庭入口与庭院新增适量多瓣高细分灌木、花盆空口、盆沿与土面；现有树枝细分由 7 提升到 14，树叶仍是实例化叶片而非完整场景平面图。庭院植物避开电池前方维护区域。网格细化只验证建筑表现，不代表植物物种、工程维护净距或结构设计已获核准。

### 昼夜与照明

`campusWorld.setNightFactor(0)` 将 warmGlow / solarLamp emissive 全部设为 **0**，所有实际灯光 intensity 也为 **0**。`detailLayer` 露营灯初始 emissive 为 0，夜间才亮。静态车辆头灯采用独立不发光材质，不再共享露营灯 glow，夜间也不自动点亮。

`CampusScene.setTime('day')` 同步关闭灯具，即使背景仍在夜→昼交叉淡化；避免名义白天有残留灯光。夜景背景改为 `#06152F`，降低白色室内 IBL、环境光和边光，使夜景不再由高环境照明漂成灰白。昼夜只改灯光、颜色和运行层，不移动建筑、硬件、车辆或植物。

场景实际照明共 12 盏 PointLight / SpotLight，全部有有限 distance 与 decay=2。住宅入口两盏建筑壁灯、两盏自主 PV 步道柱灯、既有庭院柱灯、路灯、室内灯和露营灯按夜间系数开关。道路原假发光圆片已删除，地面亮区由实际灯光照到接收表面的结果产生；接触阴影辅助只用于电池脚轮。太阳能柱灯 / 步道灯不新增任何连接家用电池的管线，新增壁灯为非 SKU 建筑示意，不冒称已确认新产品型号。

灯强为本轮视觉调校值，不是产品 lumen / candela 参数或现场照度验收。没有 IES / LDT、灯具配光曲线、反射率与现场照度资料，不能声明真实光学准确。

### 无车辆行驶

删除 detailLayer 的 time、speed、dir、phase、车道偏移、曲线采样、轮轴更新以及 update 接口；删除 CampusScene 的 vehicleAnimating 和 detailLayer.update。道路曲线只用于静态道路 / 边缘网格，不用于车辆。

仅保留三辆静态停车，固定坐标为 (-17.2, 0.24, 8.0)、(26.5, 0.28, -0.4)、(28.5, 0.28, -0.4)。轮胎接触原 driveway / 商业台座顶面。没有行驶路径、双向车流、车道算法或碰撞检测。无能量流、无镜头移动、无昼夜过渡时，不再因车辆进行 renderer.render；官方标志异步加载后通过 onAssetReady 标记一次按需重绘。

### 能量层与交互

删除 index.ts 初始化自动 `.click()` 能量按钮。能量层默认隐藏，原按钮或 `ANTHRISE_CAMPUS.setFlowVisible` 才开启。保留 `setTime / setFlowVisible / setMotionPaused / setZone / getState` 以及原有 suspend、language、hotspot API，没有替换 Risey 或 Products 控制器。

保留现有 energyFlow 的 `when: day / night / both` 门控、实体管线和热点。将运行模式与光照淡化分离：请求 night 立即按夜间门控，不在过渡期间继续显示 PV 发电粒子；夜间储能→逆变器方向保持。暂停 / reduced-motion 显示静态方向箭头，隐藏运动粒子；隐藏能量时整个 group 隐藏。为 conduit、arrows、packets 添加名字以支持结构检查，没有发明新的产品接线。

画布宿主加 tabindex=0，聚焦场景后方向键微调视角，Home 复位视角，Escape 关闭热点。按键仅在事件 target 为画布宿主时截获；不全页拦截方向键或滚轮。拖动保留 6px 保护并补齐 pointer capture、pointercancel / lostpointercapture、多指身份保护和销毁清理。热点添加 aria-controls、region 标签；Escape 在热点容器内关闭并把焦点还给对应 pin。长热点参数弹窗按上下可用空间限制高度并滚动。

新 CSS 仅 `#hero-section` 园区作用域，处理焦点、触摸纵向滚动、HUD 最小宽度、768 / 1024 断点和长弹窗，不修改主页整体布局或产品样式。parent 已负责在四语言主页 head 挂载。

## 核对到的具体产品资料缺口

来源为只读的现有 `assets/product-catalog.js` 的 ess16 / hybrid6 记录；没有新建第二套目录，也没有修改目录真值。

| 对象 | 当前已核对资料 | 本轮网格 / 资料差异 | 后续必需输入 |
|---|---|---|---|
| ess16 / AE-E-DAWN-16 | W×D×H 480×235×874 mm；51.2 V；314 Ah / 16.07 kWh；充电 150 A、放电 200 A；净重 120 kg | 原 enclosure 为 900×440×1650 mm，约 1.9 倍展示比例，外加原脚轮与接头；本轮保留，不称精准模型 | 厂家 GLB / STEP 或六面正交外形图；尺寸究竟含脚轮与接头的定义；脚轮直径 / 承重 / 锁止与防倾倒；真实侧背接口、端子定义、散热、维护和安装净距 |
| hybrid6 / AE-I-HYBRID-6K | W×D×H 330×228×433 mm；6 kW；电池窗口 40–60 V；充放电上限 135 A；净重 17 kg | 原 enclosure 900×540×1180 mm，为放大示意；原底部接头和侧散热不等于厂家的已验证端子布局 | 厂家外形 / 安装孔位图、挂板与墙体固定要求、六面图和真实后背 / 底部端口、线径 / 保护器件规范、BMS CAN / RS-485 协议配置与批准匹配表 |
| home PV / AE-R400 | 现有 SKU / 400W 入口保留 | 原网格每块约 2.55×1.9 m；不是已验证组件尺寸。新增支轨夹件为建筑安装示意 | 真实组件规格 / 长宽厚、边框、背面接线盒与端子位置、支架承载、夹持范围、檩条和屋面荷载资料 |
| HORIZON / hybrid50 | 原工商业入口与两柜保留 | 原机柜侧置散热箱及完整格栅保留，没有重绘成无侧散热的平箱；整个尺度和端子布局仍是原示意 | 厂家机柜 / 散热 CAD、侧置模块外形与维护净距、系统单线图与项目配置确认 |
| 庭院 / 道路 / 壁灯 / 露营灯 | 原现有灯具 SKU / 独立架构保留 | 新建筑壁灯和步道小灯没有绑定为新 SKU；强度与配光为视觉调校 | IES / LDT、安装高度、配光、真实 PV / 内置电池布局、日夜控制策略、产品机械图 |
| 离网 SEED / Volt 应用 | 原隔离区域和原管线保持 | 首轮未验证 SEED→外部设备的电压 / 充电接口兼容，不能把概念走线视为直接接线建议 | 输入电压窗口、控制器与保护方案、真实充电和输出接口、允许的系统组合与线径 |
| 全园区建筑 / 地形 | 两张附件是视觉标准，不是施工图 | 本轮 home 网格可自由拖动；办公楼、工厂、露营与地形仍为程序化概念，不是场址测绘模型 | 场址总平面、建筑各层立面 / 剖面 / 材质、地形测量、高质量 PBR 材料与经授权模型 |

以上缺口已在 home HUD 和 inverter / battery 热点中明确提示，并在 hardware.userData 记录示意状态与已核对目录尺寸。**不能按 16 kWh 推断必配 6 kW；本轮只保留原场景搭配，实际 51.2 V / 电流 / BMS / 负载 / 安装条件仍需系统工程确认。** 未新增未知产品后背接口；原 illustrative fittings 保留不等于已验证。

## 实际验证与边界

构建使用已安装的 three 0.187.0 / esbuild 0.25.0，执行原 `npm run build:campus` 成功，输出 `assets/js/campus.bundle.js`。没有安装新依赖或改 package。

保存了可复用非浏览器检查脚本 `src/campus/validate-campus.cjs`，执行方式：

```bash
npm run build:campus
node src/campus/validate-campus.cjs
tsc --noEmit --target es2022 --module esnext --moduleResolution bundler --lib es2022,dom --skipLibCheck --noImplicitAny false src/campus/*.ts
```

该脚本在内存中打包真实 Three.js 源码，stub 仅为 DOM canvas 和异步图片加载，不写临时 bundle、不修改目录 / package / 页面。已通过断言：12 盏灯日间 intensity 精确为 0、9 个暖色 emitter 日间 emissive 精确为 0；夜间 lights intensity>0 / 有限 distance / decay=2；昼夜全部 object position / rotation / scale 不变；三辆静态车没有 update 接口、车灯不发光；338 瓦块、8 PV 模块和四脚轮接触；住宅台座低于原脚轮接触面；原 battery 世界位置 (-14.25,0.26,4.68)、inverter (-15.8,2.21,4.6)；两个工商业柜原侧散热；7 条 PV 昼夜门控、night 家庭 PV 与充电 packet slots 隐藏；show / hide / pause / reduced-motion 静态箭头；stage-local 键盘与 pointercancel 源码保护。桌面分支场景估算约 262,436 三角形，使用实例化屋瓦 / 植物；这不是实测 FPS。

本地 parent 3000 服务的 bundle / 新 CSS 请求均 HTTP 200。CLI 检查命令在 `--noImplicitAny false` 下退出 0；但项目缺少正确 three 类型声明，严格 tsc 出现 TS7016，宿主 LSP 也把 Object3D.position / scale 等实际 API 误识别为不存在。因此 **不能声称完整严格类型检查无错**；未为消除提示改 package、安装 @types 或伪造宽泛 .d.ts。真实 Three 场景图构造与断言已通过。

**未使用共享浏览器，未做截图或声称 1440 / 768 / 390 浏览器验收通过。** parent 后续应核对家庭区域画面、夜景地面照明 / 产品可见性、长热点面板不遮挡行动、昼夜按钮 aria 与桥接、能量显示 / 暂停、自由拖动取消和键盘焦点，以及 Risey / Products 全部既有动作与链接。该测试边界有意保留，不能以结构测试冒充最终视觉或全站回归验收。

## 本轮文件

- 修改：`src/campus/CampusScene.ts`、`campusWorld.ts`、`detailLayer.ts`、`energyFlow.ts`、`hotspots.ts`、`index.ts`、`productHardware.ts`、`roadLayout.ts`、`types.ts`。
- 新增：`src/campus/homeRefinement.ts`、`src/campus/validate-campus.cjs`、`assets/campus-refinement.css`、本报告。
- 构建输出：`assets/js/campus.bundle.js`。
- 未改：`src/campus/cableRoutes.ts`、`cameraRig.ts`、原产品 / Risey 模块、四语言主页、package、目录 manifest、部署与域名。
