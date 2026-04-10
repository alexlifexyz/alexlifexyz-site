# Decisions Bridge

这个文件不是站点决策主文件。

主事实源仍然是：`docs/DECISIONS.md`

## DEC-001 增加 `.ai/` 作为快速恢复入口

- date: `2026-04-10`
- status: `accepted`
- context: 该项目已经有完整 docs 体系，但在多设备、多模型切换时，仍然缺一个统一的快速恢复入口
- decision: 增加 `.ai/` 目录，作为面向 AI 工具的薄层上下文，不替代现有 `docs/DECISIONS.md` 和 `docs/SESSION-HANDOFF.md`
- consequence:
  - 新会话恢复更快
  - docs 体系继续保持正式事实源地位
  - 需要避免 `.ai/` 和 `docs/` 出现内容漂移
- related files:
  - `.ai/project-context.md`
  - `.ai/next-step.md`
  - `.ai/session-log.md`
  - `.ai/handoff.md`
  - `docs/DECISIONS.md`
  - `docs/SESSION-HANDOFF.md`
