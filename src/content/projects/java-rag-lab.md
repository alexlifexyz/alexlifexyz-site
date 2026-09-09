---
title: "Java RAG Lab"
summary: "基于 Java 21 与 Spring Boot 3 的生产级 RAG 知识库检索系统，集成了混合检索（BM25 关键词 + 稠密向量）、动态 RRF 融合重排与防幻觉精准证据溯源。"
status: live
stack:
  - Java 21
  - Spring Boot 3
  - DeepSeek V4
  - Hybrid RAG
  - Cloudflare
year: "2026"
featured: true
links:
  demo: "https://rag.alexai.top"
  repo: "https://github.com/alexlifexyz/java-rag-lab"
---

这是我在企业级私有知识库场景下深度打磨的 Java Native RAG 实践。

不同于市面上常见的简易 Python Demo，该项目立足于高并发、高可用与企业合规诉求，重点攻克了以下核心工程难题：

- **Java 21 现代化特性**: 结合高版本语言特性与轻量级架构，构建高吞吐的多格式文档解析流水线（支持 PDF/Markdown/TXT）。
- **混合检索（Hybrid Retrieval）**: 融合 BM25 精确关键词检索与向量语义检索，采用加权融合算法，彻底解决专业术语、公司制度、工单规章难以召回的痛点。
- **防幻觉证据溯源（Anti-Hallucination & Citations）**: 设计了动态置信度阈值判定机制，在相关依据不足时主动安全拒答；并在回答中精准注入段落级别的溯源标记 `[chunkId: doc#index]`。
- **边缘零信任云原生部署**: 配合 GCP 实例、Docker 容器化与 Cloudflare Tunnel 实现了零公网暴露的高安全穿透部署。

你可以访问 [rag.alexai.top](https://rag.alexai.top) 直接上传文档并体验带引用的实时问答。
