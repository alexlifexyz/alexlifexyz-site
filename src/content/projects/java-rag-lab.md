---
title: "Java RAG Lab"
summary: "Java 21 文档问答：解析、混合检索、带引用回答；依据不足防幻觉拒答。可在 rag.alexai.top 直接试用。"
status: live
stack:
  - Java 21
  - Spring Boot 3
  - Hybrid RAG
  - Citations
  - Cloudflare
year: "2026"
featured: true
links:
  demo: "https://rag.alexai.top"
  repo: "https://github.com/alexlifexyz/java-rag-lab"
---

这是将企业文档问答落地为生产级架构的开源实践，基于 Java 21 与 Spring Boot 3 构建高可用工程闭环，而非仅停留在 Python 实验脚本。

核心工程特性：

- **解析与切分**：Markdown / TXT / PDF 进库，按句切块。
- **混合检索**：关键词（BM25）和向量召回一起用，减少制度名、型号这类漏检。
- **引用与拒答**：回答带 chunk 级引用；相关依据不足就明确拒绝，不让模型编造制度。
- **可替换客户端**：Embedding / LLM 是接口。没有 API key 也能跑测试和演示页。

部署在 Docker + Cloudflare Tunnel 上，不暴露公网端口。

试用：[rag.alexai.top](https://rag.alexai.top)。代码：[github.com/alexlifexyz/java-rag-lab](https://github.com/alexlifexyz/java-rag-lab)。
