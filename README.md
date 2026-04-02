# Srijan Gupta | Portfolio Website

This repository contains the source code for my personal portfolio website.

Live site: (https://personal-website-srijan.vercel.app/)

## About Me

I am a Computer Science, Data Science, and Economics student at the University of Wisconsin-Madison. My work sits across machine learning, backend systems, real-time infrastructure, product analytics, quantitative finance, and applied econometrics.

I like building systems end to end. That means not just training a model or writing an API, but also thinking through data flow, reliability, latency, deployment, monitoring, and whether the final product is actually useful to someone. This website is the public-facing version of that work. It brings together the projects, experience, resume, and contact information that best represent how I build.

## What This Site Includes

- A homepage with a concise technical profile and direct navigation into projects, experience, resume, and contact.
- A projects section with modal case-study views covering problem, approach, outcome, highlights, and stack.
- An experience section focused on engineering, analytics, and infrastructure work.
- An about page with a fuller background and skills overview.
- A resume page and direct contact links for email, phone, LinkedIn, and GitHub.

## Project Coverage

The site currently includes **62 projects** grouped across the following areas.

### ML & AI Systems

This section covers production ML systems, LLM tooling, document intelligence, evaluation infrastructure, and applied predictive modeling.

- ClearClause - Production Legal RAG Search
- AI Trend Radar - Social Trend Detection & Marketing Insights
- Real-Time Fraud Detection API
- Customer Churn Prediction & Intervention
- Analysis of Factors Influencing Song Popularity on Spotify
- SpecMe - AI Product Copilot
- Production ML Serving Infrastructure
- LLM Evaluation Inference Stack
- Recommendation System Infrastructure
- Browser Agent Runtime
- Layout-Aware Document Intelligence Platform
- Multimodal Agent Evaluation Stack
- Clinical Prompt Evaluation Suite
- Human Data Collection Platform
- Reward Modeling and Preference Data Lab
- ML Data Preparation Pipeline
- Ads Integrity Content Moderation Platform

### Full-Stack & Real-Time

This section focuses on collaboration systems, API-heavy products, live event flows, and full-stack product engineering.

- BuckyConnect - Real-Time Collaboration Platform
- E-Commerce Backend System
- BadgerHub: Cross-Platform AI-Powered Chat Application
- Virtual Study Group Manager
- Real-Time Service Platform
- Production Service API Platform
- Restaurant Discovery Platform
- Event Management System

### Quantitative Finance

This section covers trading infrastructure, derivatives pricing, backtesting, and systematic strategy research.

- Algorithmic Trading Strategy Backtest
- Options Pricing & Greeks Engine
- Statistical Arbitrage Pairs Trading
- Low-Latency Matching Engine and Market Data Feed
- Backtest Engineering Framework
- Portfolio Rebalancing and Risk Management

### Econometrics

This section covers causal reasoning, policy analysis, and statistically rigorous experimental design.

- Healthcare Spending and Life-Expectancy Modeling
- Causal Inference with Difference-in-Differences
- Experimental Design and Power Analysis Tool

### Data Science

This section covers forecasting, elasticity, experimentation, and broader analytics workflows built around clean data and decision support.

- Retail Demand Forecasting
- Retail Demand Elasticity
- E-Commerce Conversion Optimization
- Randomized Controlled Trial Evaluation
- Minimum Wage Employment Effects
- Accounting Operations Platform
- Multi-Source Data Integration
- Census Data Analytics and Visualization

### Product Analytics

This section focuses on metrics design, dashboarding, attribution, and growth-oriented analytics.

- Product Metrics & Analytics Framework
- Usage Analytics Dashboard
- Marketing Attribution Response Modeling

### Mobile

This section includes mobile-first product work across Android and React Native.

- ConnecTech App
- Mobile Health Tracker (React Native)
- Habit Tracker with Social Features

### Cloud & Infrastructure

This section focuses on deployment systems, distributed pipelines, systems performance, and production infrastructure.

- Interactive Agent Orchestration Platform
- Cloud Native Production Platform
- High Performance Storage Infrastructure
- Real-Time Data Processing Platform
- Secure Data Processing Service
- Kubernetes Monitoring and Autoscaling Stack
- Multimodal OCR and VLM Serving Stack
- Linux Latency Diagnostics and Scheduler Profiler
- Device Telemetry SDK and Recorder
- Distributed Data Acquisition System
- Real-Time Control System
- Geometry Processing Pipeline
- Firmware Build and Verification Tooling
- Infrastructure Automation Framework

## How the Portfolio Is Structured

Most of the site content is driven by source data rather than being hard-coded page by page.

- `src/data/projects.ts`: full project inventory with title, subtitle, category, stack, problem, approach, outcome, highlights, and links
- `src/data/experience.ts`: experience timeline content
- `src/data/contact.ts`: email, phone, LinkedIn, GitHub, and resume-related contact data
- `src/pages/`: page-level UI for Home, Projects, Experience, About, Contact, and Resume
- `src/components/`: reusable UI like cards, modals, navbar, footer, and timeline components

## Tech Stack

- Frontend: React, TypeScript, Vite
- UI and animation: Tailwind-based styling, Lucide icons, Motion
- Data/content model: local TypeScript data modules
- Deployment: Vercel

## Deployment

The site is deployed on Vercel:

[https://personal-website-srijan.vercel.app/](https://personal-website-srijan.vercel.app/)

When the repo is linked correctly, pushing to the production branch or running `vercel --prod` updates the live site.
