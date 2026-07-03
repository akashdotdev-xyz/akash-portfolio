---
title: "AI JEE Learning Platform"
description: "A structured learning platform combining chapters, PYQs, flashcards, formula sheets, and AI-powered doubt solving."
technologies:
  - Go
  - LLM
  - RAG
  - PostgreSQL
featured: true
order: 2
githubUrl: ""
---

## Problem

Students preparing for JEE often switch between multiple disconnected resources for theory, previous-year questions, revision, formulas, and doubt solving.

The goal of this project is to bring these learning workflows into one structured platform.

## Core Ideas

The platform organizes learning around chapters and concepts.

Each chapter can contain:

- Structured learning content
- Previous-year questions
- Flashcards
- Formula sheets
- AI-assisted doubt solving

## Architecture Direction

The system separates static educational content from dynamic user activity.

Static chapter content can be version-controlled and independently deployed, while user progress, attempts, and personalized learning data are stored separately.

## What I Am Exploring

The project is helping me explore:

- RAG for educational content
- Structured content pipelines
- Context-aware doubt solving
- Personalized revision workflows