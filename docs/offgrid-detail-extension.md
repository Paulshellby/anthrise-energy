# Off-grid cabin architectural detail extension

## Scope and integration

Only `src/campus/offgridArchitectureDetail.ts` and this note are added. The existing preview, scene integration, world source, packages, texture files, Git configuration/branch, and deployment remain untouched. No full build, browser session, publishing, main merge, lights, emitters, vehicles, animation, plants, product ports, or screenshot-plane structures are introduced.

The module exports the requested contract:

```ts
createOffgridArchitectureDetail(
  worldRoot: THREE.Group,
  textures: TextureBundle
): { root: THREE.Group; dispose: () => void }
```

The integrating parent can call it once after the original world exists:

```ts
const offgridDetail = createOffgridArchitectureDetail(world.root, textures);
// root is ALREADY attached under the existing Zone 03 group; do not add/reparent it again.
// At teardown, before world.dispose() and textures.dispose():
offgridDetail.dispose();
```

If called inside `createCampusWorld`, pass that function's completed `root` instead. There is no import of `campusWorld`, avoiding a circular integration dependency. The cabin and terrain are located using their actual current primitive dimensions/anchors; a missing or changed layout and a duplicate attachment throw rather than invent a replacement shelter. The existing PBR-ready render invalidation should remain in the parent; there is no new frame/update hook.

## Actual scene coordinates retained

Coordinates below are **metres in the existing Zone 03 local axes**, unless explicitly marked roof-local or world. `+Y` is up, the open front is toward `+Z`, and the added steps extend toward `+X/east`.

The current Zone 03 origin is world `(21, 1.08, 15.2)`. For the unchanged identity world root, add that offset to zone-local coordinates. Parent translation, Y rotation, and nonuniform scale were also tested without drifting the local anchors.

| Existing item | Original position | Original geometry/rotation, unchanged |
|---|---|---|
| Timber cabin back | `(1.2, 1.68, -1.65)` | `5.2 × 2.75 × 0.24` box |
| East cabin side | `(3.7, 1.68, -0.15)` | `0.24 × 2.75 × 3.2` box |
| Mono-pitch roof | `(1.2, 3.22, -0.1)` | `6.2 × 0.2 × 4.2`, X rotation `0.14 rad`; low eave toward `+Z` |
| Original rounded deck | `(0.2, 0.02, 0)` | Nominal `10.6 × 6.8`, extrusion `0.28`, original bevels; measured top `0.350000013` |
| Original product bench | `(-0.9, 0.36, 1.65)` | `3.8 × 0.22 × 1.15`; measured top `0.469999999` |
| Main portable station | `(0.55, 0.48, 2.05)` | Original procedural hardware untouched; measured lowest foot vertices `0.480000000` |
| Seed battery | `(-2.1, 0.48, 1.65)` | Original hardware untouched |
| Off-grid PV rack | `(-5.2, 0.1, -0.7)` | All original panel/leg transforms untouched |
| Folding panel | `(2, 0.65, 3.6)` | Original X rotation `0.6 rad`, geometry untouched |
| Rear controller box | `(-0.6, 1.4, -1.78)` | Original box and cable attachment retained |
| Trailhead light pole | `(5.8, 2.15, 1.3)` | Original pole, fittings, lighting state retained |

All existing cable meshes, routes, device groups, emissions, geometry buffers, and material properties remain unchanged. No products are reparented or translated. The secondary portable station/worktable in `detailLayer` is not touched.

## New tangible geometry

### Siding and roof edge

There are **69 thin timber battens** in three instanced meshes: 27 on the visible inner back face, 25 on the exterior back face, and 17 on the east face. Each batten is `0.038 × 2.61 × 0.024`, centered at local `y=1.68`. Back battens are centered at `z=-1.521/-1.779`, with `5.2/27` metre pitch along X. East battens use X center `3.829`, `3.2/17` metre pitch along Z, and rotate Y by `π/2`. Two exterior strips are omitted around the existing rear controller; no siding covers its face. Base trims and two slender rear corner stops meet the existing wall/deck edges.

The eave subgroup copies the **original roof position, quaternion, and scale**. All its dimensions below are roof-local. Four fascia boxes sit at `z=±2.112` or `x=±3.112`, with 35 mm thickness and 200 mm height. Thirty-two instanced soffit boards, each `0.3815 × 0.026 × 0.42`, run in two jointed rows at `z=±1.88`, center `y=-0.11`. Six rafter tails are `0.065 × 0.09 × 0.58`, at X `-2.65/0/2.65`, Z `±1.81`, Y `-0.144`; their tops seat into the original roof underside and their ends meet the fascia. A real closed extruded folded drip profile, approximately 1.2 mm thick, runs 6.2 m along roof-local X on the low front edge. These are architectural concepts, not manufacturer roof specifications.

### Open entry/window surrounds

**The current cabin has no original door leaf or glazing pane.** None is invented, filled in, removed, or replaced. The left cutaway remains open. The unobstructed right bay receives an open-air window-height surround and a separate access portal—not opaque/glazed wall replacements.

The access jambs are at X `2.2/3.48`, Z `1.35`, from the deck top to `y=2.804675`. The header top is derived from the sloping roof underside at the actual front plane: `y=2.914675`. Timber jamb/head reveals have physical depth. The stone threshold is `1.215 × 0.032 × 0.3`, centered at `(2.84, deckTop+0.016, 1.375)`, with its bottom touching the deck. The metal grab handle at `(3.48, 1.27, 1.49)` and two seats attach to the **new architectural jamb**, not an imaginary door leaf or product fitting.

The open window-height frame has stiles at X `1.13/2.13`, rails at Y `1.25/2.45`, Z `1.35`, and a projecting timber sill. It is clear of the portable station and existing field cables. There is no new glass or luminous interior material.

### Terrain-bearing foundation and entry

Ten conceptual `0.42 × 0.42` foundation blocks sit at every combination of X `-4.45/-1.3/1.2/3.6/4.9` and Z `-2.6/+2.6`. They are merged into one mesh with actual-size UVs. Each bottom is **45 mm below the minimum of a 5 × 5 sample grid on the original terrain mesh**; each top is `y=0.035`, reaching the original deck underside and two bearer beams. Bottoms in the current scene range approximately `-0.306931 … -0.165912` zone-local Y. Two conceptual `9.9 × 0.18 × 0.14` bearers sit at `(0.2, -0.06, ±2.6)`. Hidden joint intersections are intentional; the original deck/soil meshes are not cut or reshaped.

Four solid east-side steps span X `5.430000 … 6.870000`, Z `-1.275 … -0.025`. The first tread overlaps the existing bevel edge by 130 mm to avoid a floating/gapped attachment. Each run is 360 mm; stair width is 1.25 m. Step tops are `0.350000`, `0.181225`, `0.012450`, and `-0.156325`. Every block extends 45 mm below its sampled terrain minimum and receives a recessed metal nosing. The sampled lower approach is `y=-0.325100`; calculated riser height is `0.168775`, total approach-to-deck rise `0.675100`.

In current world coordinates the stair spans X `26.430000 … 27.870000`, Z `13.925 … 15.175`; tread tops are world Y `1.430000`, `1.261225`, `1.092450`, `0.923675`. It is on the side clear of the PV rack, front folding panel, cable routes, camp worktable/tent, and pole. No plants are added to already occupied buffers.

Because the measured stair has four risers and 675 mm total rise, **one short sloping stair handrail** is added along Z `-1.19`: two 42 mm diameter posts, 20 mm embedded into the first/last solid treads, and a 48 mm diameter rail at 880 mm center height above those tread centers. There is no perimeter railing or claim of guard/code compliance.

### Existing portable station support

The original portable mesh has **four rubber feet and no wheels**. A `1.12 × 0.74` conceptual steel service/support plate, centered at X/Z `(0.55, 2.05)`, fills only the measured bench-to-foot gap: bottom `0.469999999`, top `0.480000000`, thickness `0.010000001`. All four original foot rectangles remain wholly above and supported by the plate; none is buried or moved.

Two `0.07 × 0.07` short supports at `(0.06, 2.36)` and `(1.04, 2.36)` in X/Z bear the front overhang from the original deck top to the plate underside. The rear plate bears on the existing bench. No capacity, installation certification, fixing pattern, product clearance, or manufacturer footprint is asserted. A changed unsafe contact gap causes the plate to be omitted, not the product to be moved.

## PBR and ownership

Only existing `TextureBundle.homePbr.timber/plaster/paving` sources are used. Geometry UV and AO `uv1` coordinates are in metres; one texture tile covers one metre. Textured geometry is created at physical dimensions, with no scaled unit-box UV stretching. Repeated siding/soffit/tail instances use unit scale; differing-height footing blocks are merged after making physical-size UVs.

`homePbrReady` is awaited **before any clones or map assignments**. A second width/height guard checks every needed color/normal/roughness/AO image. A missing promise is supported only when the same guard confirms loaded sources. Incomplete/rejected loads keep solid fallback materials; disposal before readiness prevents late clones or reattachment.

The module owns 11 loaded-source texture clones when PBR is ready: timber four channels, plaster three, paving four. Clone color maps are sRGB; normal/roughness/AO data are `NoColorSpace`; AO selects channel 1. Source wrap/repeat/color-space settings and borrowed textures are not edited or disposed. Textured material tint becomes white, roughness multiplier becomes 1, and metalness becomes 0, avoiding multiplication by the earlier fallback's dark timber/stone color. Normal strengths are deliberately restrained; AO intensity is 0.55. Nothing emits light.

Disposal is idempotent: detach only the new root, dispose instanced-mesh resources, unique owned geometries/materials/texture clones exactly once, and clear the new children. No original scene resources or texture images are destroyed.

## Isolated validation results

Final counts are **42 meshes, 2,012 expanded triangles**, including all 111 instances in six instanced meshes. There are 40 distinct owned geometries, six materials, and 11 PBR texture clones. This is below the 60-mesh / 18,000-expanded-triangle limit.

Strict isolated typecheck passed using installed TypeScript 5.9.3 and official `@types/three` 0.187.0, with library checking enabled:

```sh
node_modules/.bin/tsc --noEmit --strict --skipLibCheck false \
  --module ESNext --moduleResolution Bundler --target ES2020 \
  --lib ES2020,DOM src/campus/offgridArchitectureDetail.ts
```

esbuild 0.25.0 bundled the module in a temporary directory, externalizing the installed Three 0.187.0 runtime. A temporary CPU-only harness instantiated the **actual existing `createCampusWorld` geometry**, not a replacement cabin. Existing home canvas-shadow and logo-loader calls were stubbed solely so that world geometry could be constructed in Node. There was no browser, WebGL renderer, preview change, asset request, or full/site build.

Assertions passed for finite positions/normals/UVs/indices/local and world matrices/bounds; valid index ranges; expanded instance budgets; 9 × 9 independent terrain-contact checks per footing/tread; step tops above ground; exact bench/foot/plate contact; unchanged original parents/transforms/buffers/materials; loaded-only clone assignment, color spaces, metric repeat/AO channels; exactly-once disposal and zero borrowed-source disposal; early disposal, rejected/incomplete-ready/no-promise paths; duplicate/missing-layout guards; and translated/rotated/nonuniform parent-world placement. The handrail bases are embedded into the actual new solid treads. Temporary validation files are not part of the deliverable.

## Remaining data and review gaps

This is a bounded architectural/civil **concept extension**, not a construction or installation drawing. Manufacturer CAD, verified portable-station dimensions/foot layout/load-bearing surface, exact installation clearances, product mounting/bracket/port drawings, and load ratings remain unavailable. The existing procedural hardware and cable endpoint topology are preserved, not certified; no new manufacturer connections are inferred.

Terrain contact is measured against the current generated 190 m, 72 × 72-segment mesh. The analytic zone datum is 1.08 m, but the coarser rendered triangles differ locally; that is why actual triangle intersections are used. These are scene coordinates, not field-survey elevations. Real slope/drainage, soil bearing, footing depth, frost/waterproofing, deck/roof connections, wind loading, threshold accessibility, handrail extensions, perimeter guard/fall risk, and local-code compliance need professional site measurements and design. Existing wall-to-roof intersections and the broad open/cutaway shell are not rebuilt to resolve legacy modeling simplifications.

No new day/night visual acceptance is claimed: this task intentionally did not use the browser or rerun the already accepted home camera/PBR tests. The parent still needs to integrate the module and inspect the unchanged off-grid camera/day/night view before wider detail rollout or publication.
