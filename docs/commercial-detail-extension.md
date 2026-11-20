# Commercial architectural detail extension

## Scope and integration

This is an incremental **commercial architectural mesh extension**, not a whole-campus or whole-photo-quality claim. It adds only `src/campus/commercialArchitectureDetail.ts` and this document. No existing source, packages, bundles, test files, Git state, roof/PV/cable/product anchors, lights, night logic, or vehicles were edited. No source textures were downloaded, browser launched, full build run, merge performed, or preview published.

The exported contract is:

```ts
createCommercialArchitectureDetail(
  worldRoot: THREE.Group,
  textures: TextureBundle
): { root: THREE.Group; dispose: () => void }
```

The parent should call it **after the commercial building and its two cabinet groups exist**, once per world. It resolves the actual 9.6 × 5.2 × 8.2 m `BoxGeometry` warehouse and the two existing `MeshProduct-horizon` groups; it throws rather than adding details to guessed coordinates when those anchors are absent. The returned `root` is already attached to the existing `ciBuilding`; do not reparent it to `worldRoot`. Call its idempotent `dispose()` before the parent tears down shared materials/textures. Integration into `campusWorld` is intentionally left to the parent.

## Actual coordinates

All distances are scene metres. Coordinates below are campus-world coordinates under the current, unchanged group transforms.

| Existing anchor | Position or bounds |
| --- | --- |
| C&I zone | `(19.0, 0.0, -7.0)` |
| `ciBuilding` / new detail root origin | `(19.8, 0.26, -8.6)` |
| Warehouse solid shell | X `11.8…21.4`, Y `0.26…5.46`, Z `-12.7…-4.5` |
| Actual warehouse local shell | X `-8.0…1.6`, Y `0…5.2`, Z `-4.1…4.1` |
| Existing cabinet group origins | `(12.2, 0.2, -3.45)`, `(13.7, 0.2, -3.45)` |
| Existing inverter group origin | `(15.6, 1.6, -3.45)` |
| Existing switchgear center | `(17.7, 1.28, -3.45)` |
| Existing C&I rounded pad top | approximately Y `0.31`, including its original bevel |

The new service subgroup translates by `(-0.8, -0.26, +1.6)` inside the building-detail root so its coordinates match the existing C&I zone. Cabinet-derived walkway centers therefore do not reuse the detached legacy detail layer's offset coordinates.

## Added entities

**Roof edge:** three actual extruded folded metal cap/drip sections on the warehouse front, rear, and exposed west edges. Front/rear runs are 9.6 m; the west run is 7.97 m. Their inward flanges embed 3 mm into the unchanged shell roof; the tops rise 14 mm above it and the outer returns drop 120 mm. The west run stops 115 mm from each corner, leaving a 5 mm joint to the 110 mm front/rear inward flanges rather than coincident top surfaces. There is no new roof deck, PV rack, HVAC support, gutter/downpipe, or certified drainage claim.

**Panel joints and flashing:** one instanced mesh contains 16 volumetric panel-joint segments on the actual warehouse front and west walls. The 24 mm joints are clipped above or around the new closed-door assemblies; horizontal joints stop short of the west corner flashing. Two continuous extruded L-section metal flashings finish only the exposed west-front and west-rear corners. They rise from building-local Y `0.10` to `5.08`; no flashing is placed inside the curtain-wall office overlap.

**Closed roller door:** mounted on the actual **west wall**, with group origin `(11.8, 0.26, -8.6)` and local Y rotation `-π/2`. Its 3.00 × 3.30 m leaf, deep guide jambs, head casing, lower seal, grounded threshold, and 22 instanced raised slat ribs are real 3D geometry. The leaf's rear face intersects the existing wall by 6 mm, so it is neither a floating plane nor a coincident wall overlay. The threshold bottom is world Y `0.30`, embedded in the existing pad; the opening is not cut through the original solid shell.

**Closed personnel door:** mounted directly on the actual warehouse front at group origin `(19.15, 0.26, -4.5)`. Its 0.98 × 2.20 m leaf has stepped jamb/head casing, a grounded sill, metal backplate/neck/lever handle, and three instanced hinge barrels. The leaf intersects the shell by 7 mm; the sill bottom is world Y `0.30`. This is architectural door hardware, not a product connector or manufacturer-specified interface.

**Cabinet service walkway:** a 3.90 × 1.45 m bedding volume is centered at `(13.05, 0.293, -1.90)`, underneath 24 jointed pavers. Bedding bounds are X `11.10…15.00`, Y `0.25…0.336`, Z `-2.625…-1.175`. It embeds in the actual original pad and stays inside that pad's footprint; it does not extend beneath cabinet feet. Paver tops are at world Y `0.36`. The nearest existing front cable run is centered at Z `-2.83`; headless AABB checks confirmed bedding does not intersect any existing C&I cable or either cabinet. Two dark-steel cylindrical guard bollards sit on embedded base plates near the front walkway corners, at X `11.28` and `14.82`, Z `-1.32`. Their modeled protection/mounting is illustrative, not impact-rated or certified.

The measured bounds of **all new geometry** are approximately:

```text
minimum: (11.10, 0.25, -12.765)
maximum: (21.40, 5.474, -1.175)
```

The existing building envelope/footprint and pad geometry are unchanged. Small projecting trim and threshold reliefs remain inside the existing commercial pad footprint.

## PBR and resource ownership

The module reuses the **existing paving PBR set only**, for the walkway and grounded door thresholds. Timber and plaster are not relabeled as industrial metal or concrete. Actual existing slate roof/office slab, dark-steel mullion, aluminum HVAC, and warehouse cladding material styles are cloned into module-owned materials without changing their originals.

Paving starts as untextured, nonemissive architectural material. Only after `TextureBundle.homePbrReady` resolves does it clone `homePbr.paving` color, normal, roughness, and optional AO maps. This avoids cloning loader placeholders before their image/source is ready. If readiness is absent, rejected, or resolves after disposal, the module keeps its fallback and creates no late resources.

The owned map clones use repeat wrapping and a declared **0.75 m per tile** scale. Textured geometries have dominant-axis metric UVs plus matching `uv1` for AO. The color map uses `THREE.SRGBColorSpace`; normal/roughness/AO use `THREE.NoColorSpace`; AO explicitly uses channel 1. The mapped material color is white, roughness multiplier is 1, normal scale is `(0.55, 0.55)`, and AO intensity is 0.65. Source images are shared by the clones, but their sampler/color-space transforms and disposal are independent. External textures and original materials/geometries are never disposed by this module.

Cleanup detaches and clears the detail root, disposes six instanced-mesh resources, all 11 owned geometries, six owned materials, and up to four owned PBR texture clones. Repeated disposal is a no-op.

## Validation performed

Validation used the project's installed **Three.js revision 187**, **`@types/three` 0.187.0**, **TypeScript 5.9.3**, and **esbuild 0.25.0**. The module passed strict type-checking against the actual types, including library checking:

```sh
npx --no-install tsc --noEmit --strict --skipLibCheck false \
  --target ES2020 --module ESNext --moduleResolution Bundler \
  --lib ES2020,DOM src/campus/commercialArchitectureDetail.ts
```

esbuild bundled the module in memory with `write: false`. A separate inline headless validation bundled the actual current `createCampusWorld`, existing `createDetailLayer`, and this module in memory. DOM/image loading was stubbed; geometry used the real Three.js scene graph. No renderer was created and no validation script/artifact was written.

| Metric | Result |
| --- | ---: |
| Mesh objects / nominal geometry draws | **26** |
| Instanced meshes | **6** |
| Expanded triangles, including all instances | **1,224**, below 18,000 |
| Expanded geometry vertices | **2,480** |
| Unique owned geometries | **11** |
| Owned materials | **6** |
| Owned paving texture clones after readiness | **4** |
| Added lights / nonzero emissive materials / animation callbacks | **0 / 0 / 0** |

All position/normal/UV attributes, indices, geometry bounds, instance bounds, and scene bounds were finite and valid. Metric UVs and AO `uv1` were checked. Existing source geometry positions and every existing object's parent/position/quaternion/scale remained unchanged. Day/night switching preserved every new transform and material state; the module contributes no night setter or emissive lighting. Deferred, resolved, missing, rejected, and dispose-before-ready texture states passed. Cleanup generated exactly 11 geometry, six material, four clone-texture, and six instanced-mesh disposal events, with **zero external resource disposal events**.

## Known model gaps

The warehouse remains its original solid box; the new closed doors are anchored reliefs, not openings, navigable interiors, or operating mechanisms. The west roller door is not guaranteed to be visible from the existing front/east-biased commercial camera. The shell/office overlap, older detached front loading-bay/panel overlays in `detailLayer.ts`, existing rooftop approximation, and equipment-yard product meshes are deliberately untouched. Those legacy overlays are around world Z `-2.97…-2.70`, not the true warehouse front Z `-4.5`; this module does not attach its new wall details to them or silently remove them.

No manufacturer CAD, verified port/fixing layout, new catalogue dimensions, product data, engineering certification, clearance standard, drainage calculation, or crash-protection rating is claimed. Architectural additions are illustrative. Software-GPU suitability is supported only by the modest incremental mesh/triangle budget and absence of additional lights/animation; no GPU timing or day/night visual screenshot validation was performed for this extension. The previously verified home sample is not represented as proof of commercial photo quality.
