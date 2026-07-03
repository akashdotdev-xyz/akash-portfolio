---
title: "Kafka Storage Architecture Replica"
description: "An educational implementation exploring append-only logs, segments, indexes, partitions, and recovery."
technologies:
  - Go
  - Storage Engines
  - Distributed Systems
featured: true
order: 1
githubUrl: ""
---

## Why I Built This

I have worked with Kafka in production systems, but I wanted to understand what happens beneath the producer and consumer APIs.

The goal of this project is to explore how a distributed log can be represented on disk and how concepts such as segments, offsets, sparse indexes, and recovery work together.

## Architecture

The storage system is organized around a hierarchy:

**Topic → Partition → Segments → Log Records**

Each partition owns an ordered sequence of records. As the log grows, records are split across immutable segment files.

The active segment accepts new writes while older segments remain read-only.

## Key Components

### Append-only Log

Records are written sequentially to the active segment.

The append-only model simplifies writes and takes advantage of sequential disk access patterns.

### Segment Manager

A partition log is divided into multiple segments.

When the active segment reaches its configured size threshold, a new segment is created.

### Sparse Index

Instead of storing an index entry for every record, the storage engine maintains periodic mappings between logical offsets and physical file positions.

This reduces index size while keeping lookup efficient.

### Recovery

When the process restarts, the storage engine scans existing segment metadata and reconstructs the partition state.

## Technical Decisions

### Why append-only storage?

Random updates would introduce significantly more complexity around synchronization and disk layout.

An append-only model keeps the write path simple and predictable.

### Why segment files?

A single ever-growing file becomes difficult to manage.

Segments make operations such as retention, cleanup, recovery, and compaction easier to reason about.

### Why sparse indexing?

A full index provides faster direct lookup but consumes significantly more memory and disk space.

Sparse indexing provides a practical trade-off between lookup performance and storage overhead.

## What I Learned

Building storage primitives gives a very different understanding of Kafka compared with only operating it through producers and consumers.

The most useful learning was understanding how simple primitives—append-only files, offsets, segments, and indexes—compose into a scalable storage abstraction.