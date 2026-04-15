# Getting Started with Create React App

# usePopcorn (Movies List)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

> 一个基于 React 的电影搜索与观影记录应用。  
> A React-based movie search and watched-list application.
> ⚠️注意，OMDB API一天只能调用1000次，如果用了一段时间后出现“Something went wrong with fetching movies”，很可能是API调用次数已用完。
> ⚠️Note that the OMDB API can only be called 1000 times per day. If you encounter the error message "Something went wrong with fetching movies" after using it for some time, it is likely that the number of API calls has been exhausted.

## Available Scripts

---

In the project directory, you can run:

## 中文文档（Chinese）

### `npm start`

### 1. 项目简介

- 按关键词搜索电影
- 查看电影详情（剧情、演员、导演、IMDb 评分等）
- 给电影打分
- 管理“已观看”列表
- 在刷新页面后保留“已观看”数据

该项目适合作为 React 组件化、状态管理、自定义 Hook、异步请求与本地存储实践案例。

### 2. 主要功能

### `npm run build`

1. **电影搜索（OMDb API）**
   - 输入关键词后获取电影列表
   - 包含 loading 与错误状态处理
2. **电影详情查看**
   - 点击电影加载详情信息
3. **评分功能**
   - 使用可复用 `StarRating` 组件进行星级评分
4. **已观看列表**
   - 将电影加入“已观看”
   - 删除已观看电影
   - 展示统计信息（数量、平均评分、平均时长）
5. **本地持久化**
   - “已观看”列表使用 `localStorage` 保存
6. **键盘快捷键**
   - `Enter`：聚焦搜索框
   - `Escape`：关闭详情面板

### 3. 技术栈

- React 18
- Create React App
- JavaScript (ES6+)
- CSS
- OMDb API

### 4. 项目结构

```text
Movies-List/
├─ public/
├─ src/
│  ├─ App.js
│  ├─ StarRating.js
│  ├─ useMovies.js
│  ├─ useLocalStorageState.js
│  ├─ useKey.js
│  ├─ index.js
│  └─ index.css
├─ package.json
└─ README.md
```

### 5. 使用方式

#### 5.1 安装依赖

```bash
npm install
```

#### 5.2 本地开发运行

```bash
npm start
```

默认打开：<http://localhost:3000>

#### 5.3 打包构建

### Code Splitting

```bash
npm run build
```

#### 5.4 运行测试

```bash
npm test
```

> CRA 默认测试通常以交互 watch 模式运行。

### 6. 环境变量配置（推荐）

该项目已通过 Vercel Serverless Function 代理 OMDb 请求，避免把 API Key 写在前端代码中。

建议在项目根目录创建 `.env.local`：

```bash
OMDB_API_KEY=your_api_key
```

> 如果你使用 `npm start`（CRA dev server），`/api/*` 不会自动提供。
> 本地联调 Vercel Function 请使用 `vercel dev`。

配置后请重启开发服务或重新部署。

### 7. 部署说明（Vercel）

- 该项目已使用 HTTPS 请求 OMDb（避免 Mixed Content）。
- 在 Vercel 项目设置中配置环境变量：
  - `OMDB_API_KEY`
- 前端通过 `/api/omdb?s=...` 与 `/api/omdb?i=...` 调用服务端代理，再由服务端访问 OMDb。

## English Documentation

### 1. Overview

`usePopcorn` is a small React project that lets users:

- search movies by keyword,
- view movie details (plot, cast, director, IMDb rating),
- rate movies,
- manage a watched list,
- keep watched data after refresh.

This repo is a practical example for React components, state management, custom hooks, async fetching, and local storage persistence.

### 2. Key Features

1. **Movie Search (OMDb API)**
   - Fetches movie list based on search text
   - Handles loading and error states
2. **Movie Details**
   - Loads full movie detail when an item is selected
3. **Rating**
   - Reusable `StarRating` component for user ratings
4. **Watched List**
   - Add/remove watched movies
   - Show summary stats (count, average ratings, average runtime)
5. **Persistence**
   - Watched list is stored in `localStorage`
6. **Keyboard Shortcuts**
   - `Enter`: focus search input
   - `Escape`: close details panel

### 3. Tech Stack

- React 18
- Create React App
- JavaScript (ES6+)
- CSS
- OMDb API

### 4. Project Structure

```text
Movies-List/
├─ public/
├─ src/
│  ├─ App.js
│  ├─ StarRating.js
│  ├─ useMovies.js
│  ├─ useLocalStorageState.js
│  ├─ useKey.js
│  ├─ index.js
│  └─ index.css
├─ package.json
└─ README.md
```

### 5. Usage

#### 5.1 Install dependencies

````bash
npm install

#### 5.2 Run in development

```bash
npm start
````

Default URL: <http://localhost:3000>

#### 5.3 Build for production

````bash
npm run build

#### 5.4 Run tests

```bash
npm test
````

> CRA tests usually run in interactive watch mode by default.

### 6. Environment Variables (Recommended)

This project now uses a Vercel Serverless Function as an OMDb proxy, so the key is not hardcoded in client code.

Create a `.env.local` file in project root:

```bash
OMDB_API_KEY=your_api_key
```

> If you run `npm start` (CRA dev server), `/api/*` routes are not served automatically.
> For local end-to-end testing with serverless functions, run `vercel dev`.

Restart your local server or redeploy after setting env vars.

### 7. Deployment Notes (Vercel)

- The app uses HTTPS for OMDb requests to avoid mixed-content issues.
- Set this env var in Vercel project settings:
  - `OMDB_API_KEY`
- Client calls `/api/omdb?s=...` and `/api/omdb?i=...`; the serverless function requests OMDb using the server-side key.

---

## License

For learning/demo purposes. Add an explicit license (e.g. MIT) if needed.
