# Project Context

## Summary

- project: `alexlifexyz-site`
- purpose: 个人网站、公开简历、项目展示、个人品牌站
- current stage: `Astro MVP 已落地，部署在线，继续补内容与首页表达`
- target user:
  - 招聘方
  - 面试官
  - 技术同行
  - 潜在合作方
  - 来自公众号的读者
- main success metric: 访客能在首屏快速理解 Alex 的身份、转型方向和值得继续看的理由

## Existing Source Of Truth

这个仓库已经有一套较完整的 docs 体系，下面这些文件仍然是主事实源：

1. `AGENTS.md`
2. `docs/PROJECT-BRIEF.md`
3. `docs/MVP-SCOPE.md`
4. `docs/ROADMAP.md`
5. `docs/SESSION-HANDOFF.md`
6. `docs/DECISIONS.md`
7. `README.md`

`.ai/` 的作用不是替代它们，而是提供一个更适合多模型、多设备快速恢复现场的薄层入口。

## Repo Info

- local path: `~/studio/30-products/alexlifexyz-site`
- remote: `https://github.com/alexlifexyz/alexlifexyz-site`
- default branch: `main`
- current branch: `main`

## Important Files

- `AGENTS.md`: 项目身份和协作规则
- `docs/SESSION-HANDOFF.md`: 当前 handoff 主文件
- `docs/DECISIONS.md`: 产品和架构决策
- `src/`: 站点源码
- `src/pages/resume.astro`: 公开简历页

## Collaboration Rule

- 产品和架构层面的正式决策，优先继续写入 `docs/DECISIONS.md`
- 会话接力和当前动作，优先继续写入 `docs/SESSION-HANDOFF.md`
- `.ai/` 只做快速恢复和跨模型入口，不与 docs 体系争夺主事实源
