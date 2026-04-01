Movies List
中文说明
项目简介

一个基于 React 的电影搜索与观影记录应用。用户可以通过 OMDb API 搜索电影、查看详细信息、进行评分，并将“已观看”列表持久化到浏览器本地存储，实现简单高效的观影管理体验。

项目使用方式
在搜索框输入关键词（至少 3 个字符）进行电影搜索
浏览搜索结果列表
点击电影查看详细信息（剧情、评分、演员等）
为电影打分并加入“已观看”列表
在已观看列表中查看统计信息或删除条目
刷新页面后数据仍会保留（localStorage 持久化）
主要功能
电影搜索（OMDb API）：支持加载状态、错误处理与请求取消（AbortController）
电影详情展示：基于 IMDb ID 获取完整电影信息，并动态更新页面标题
星级评分组件：支持自定义配置（星数、颜色、大小、默认值）
已观看列表管理：支持添加、删除及统计分析（数量 / 平均评分 / 时长）
键盘快捷操作：提升交互效率（Enter / Escape）
技术栈

React 18 / JavaScript (ES6+) / CSS / Create React App / OMDb API

运行方式
# 安装依赖
npm install

# 启动开发环境
npm start

# 生产构建
npm run build

# 运行测试
npm test


默认访问地址：http://localhost:3000

English Documentation
Overview

A React-based movie search and watchlist application. It integrates the OMDb API to allow users to search for movies, view detailed information, rate them, and manage a persistent watched list using browser local storage.

How to Use
Enter a keyword (at least 3 characters) to search for movies
Browse the search results
Click a movie to view detailed information
Rate the movie and add it to the watched list
Review statistics or remove items from the watched list
Data remains after refresh via localStorage persistence
Key Features
Movie Search (OMDb API): handles loading, error states, and request cancellation
Movie Details View: fetches full movie data by IMDb ID and updates document title
Reusable Star Rating Component: configurable and interactive rating system
Watched List Management: add/remove items with aggregated statistics
Keyboard Shortcuts: improve usability (Enter / Escape)
Tech Stack

React 18 / JavaScript (ES6+) / CSS / Create React App / OMDb API

Getting Started
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test


Default URL: http://localhost:3000
### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
