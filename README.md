# Getting Started with Create React App
# Movies List

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
一个基于 React 的电影搜索与观影记录应用。用户可以通过 OMDb API 搜索电影、查看详情、为电影打分，并将“已观看”列表持久化到浏览器本地存储。  
A React-based movie search and watchlist app. Users can search movies via the OMDb API, view details, rate movies, and persist a watched list in browser local storage.

## Available Scripts
---

In the project directory, you can run:
## 中文说明

### `npm start`
### 项目简介

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
`usePopcorn`（本仓库）是一个以组件化和自定义 Hook 为核心的前端练习项目，主要实现以下流程：

The page will reload when you make changes.\
You may also see any lint errors in the console.
1. 输入关键词搜索电影
2. 查看搜索结果列表
3. 点击电影查看详情
4. 打分并加入“已观看”列表
5. 在“已观看”列表中查看统计信息和删除条目
6. 刷新页面后仍保留“已观看”数据（localStorage 持久化）

### `npm test`
### 主要功能

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
- **电影搜索（OMDb API）**
  - 输入至少 3 个字符后发起搜索请求
  - 支持加载状态与错误提示
  - 通过 `AbortController` 避免快速输入时的竞态问题

### `npm run build`
- **电影详情展示**
  - 通过 IMDb ID 拉取详情（上映时间、片长、评分、剧情、演员、导演等）
  - 详情页打开时会动态修改浏览器标题

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
- **星级评分（可复用组件）**
  - 可配置最大星数、颜色、大小、默认值
  - 支持 hover 预览和点击确认评分

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
- **已观看列表管理**
  - 添加电影到已观看列表
  - 显示用户评分与 IMDb 评分
  - 支持删除已观看电影
  - 汇总统计：电影数量、平均 IMDb 评分、平均用户评分、平均时长

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
- **键盘快捷操作**
  - `Enter`：快速聚焦搜索框并清空查询
  - `Escape`：关闭电影详情面板

### `npm run eject`
### 技术栈

**Note: this is a one-way operation. Once you `eject`, you can't go back!**
- React 18
- Create React App
- JavaScript (ES6+)
- CSS
- OMDb API

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
### 项目结构

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
```text
Movies-List/
├─ public/
├─ src/
│  ├─ App.js                    # 主应用与主要 UI 逻辑
│  ├─ StarRating.js             # 通用星级评分组件
│  ├─ useMovies.js              # 电影搜索数据请求 Hook
│  ├─ useLocalStorageState.js   # localStorage 状态持久化 Hook
│  ├─ useKey.js                 # 键盘事件 Hook
│  ├─ index.js                  # 应用入口
│  └─ index.css                 # 样式
├─ package.json
└─ README.md
```

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
### 运行方式

## Learn More
#### 1) 安装依赖

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
```bash
npm install
```

To learn React, check out the [React documentation](https://reactjs.org/).
#### 2) 启动开发环境

### Code Splitting
```bash
npm start
```

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
默认访问地址：<http://localhost:3000>

### Analyzing the Bundle Size
#### 3) 生产构建

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
```bash
npm run build
```

### Making a Progressive Web App
#### 4) 运行测试

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
```bash
npm test
```

### Advanced Configuration
> 注意：`npm test` 在 CRA 默认配置下通常以交互 watch 模式启动。

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
### 环境变量与 API Key

### Deployment
当前代码中 OMDb API Key 写在源码中（`src/App.js` 与 `src/useMovies.js`）。如果用于正式项目，建议迁移到环境变量，例如：

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
```bash
# .env
REACT_APP_OMDB_API_KEY=your_key_here
```

### `npm run build` fails to minify
并在代码中通过 `process.env.REACT_APP_OMDB_API_KEY` 读取。

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
### 可改进方向

- 增加分页与更多筛选条件（类型、年份等）
- 优化错误提示（网络异常、限流、空数据）
- 增加单元测试与集成测试覆盖
- 加入路由和详情页面 URL 直达能力
- 使用 TypeScript 提升可维护性

---

## English Documentation

### Overview

`usePopcorn` (this repository) is a React application focused on component composition and custom hooks. It supports the following workflow:

1. Search movies by keyword
2. Browse movie results
3. Open detailed movie information
4. Rate a movie and add it to the watched list
5. Review statistics and remove entries from watched list
6. Keep watched data after page refresh (localStorage persistence)

### Key Features

- **Movie Search (OMDb API)**
  - Sends requests only when query length is at least 3 characters
  - Handles loading and error states
  - Uses `AbortController` to avoid race conditions during fast typing

- **Movie Details View**
  - Fetches detail data by IMDb ID (release date, runtime, rating, plot, cast, director, etc.)
  - Updates browser document title when detail view is open

- **Reusable Star Rating Component**
  - Configurable max rating, color, size, and default rating
  - Supports hover preview and click-to-rate interaction

- **Watched List Management**
  - Add movies to watched list
  - Show both IMDb rating and user rating
  - Remove watched items
  - Summary stats: count, average IMDb rating, average user rating, average runtime

- **Keyboard Shortcuts**
  - `Enter`: focus search box and clear current query
  - `Escape`: close movie details panel

### Tech Stack

- React 18
- Create React App
- JavaScript (ES6+)
- CSS
- OMDb API

### Project Structure

```text
Movies-List/
├─ public/
├─ src/
│  ├─ App.js                    # Main app and primary UI logic
│  ├─ StarRating.js             # Reusable star rating component
│  ├─ useMovies.js              # Movie search data-fetching hook
│  ├─ useLocalStorageState.js   # localStorage persistence hook
│  ├─ useKey.js                 # Keyboard event hook
│  ├─ index.js                  # App entry point
│  └─ index.css                 # Styles
├─ package.json
└─ README.md
```

### Getting Started

#### 1) Install dependencies

```bash
npm install
```

#### 2) Start development server

```bash
npm start
```

Default URL: <http://localhost:3000>

#### 3) Build for production

```bash
npm run build
```

#### 4) Run tests

```bash
npm test
```

> Note: In default CRA setup, `npm test` usually starts in interactive watch mode.

### Environment Variables and API Key

The OMDb API key is currently hardcoded in source files (`src/App.js` and `src/useMovies.js`). For production usage, move it to environment variables:

```bash
# .env
REACT_APP_OMDB_API_KEY=your_key_here
```

Then read it via `process.env.REACT_APP_OMDB_API_KEY` in code.

### Future Improvements

- Add pagination and advanced filters (genre/year/etc.)
- Improve error UX (network failures, rate limits, empty states)
- Add unit/integration tests
- Add routing and direct-link detail pages
- Migrate to TypeScript for maintainability

---

## License

This project is for learning/demo purposes. Add your preferred license (e.g., MIT) if needed.

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
