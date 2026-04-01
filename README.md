# Getting Started with Create React App

# usePopcorn (Movies List)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

> 一个基于 React 的电影搜索与观影记录应用。  
> A React-based movie search and watched-list application.

## Available Scripts

---

In the project directory, you can run:

## 中文文档（Chinese）

### `npm start`

### 1. 项目简介

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
`usePopcorn` 是一个 React 小型项目，核心目标是帮助用户：

The page will reload when you make changes.\
You may also see any lint errors in the console.

- 按关键词搜索电影
- 查看电影详情（剧情、演员、导演、IMDb 评分等）
- 给电影打分
- 管理“已观看”列表
- 在刷新页面后保留“已观看”数据

### `npm test`

该项目适合作为 React 组件化、状态管理、自定义 Hook、异步请求与本地存储实践案例。

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

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

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### 3. 技术栈

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

- React 18
- Create React App
- JavaScript (ES6+)
- CSS
- OMDb API

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### 4. 项目结构

### `npm run eject`

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

### 5. 使用方式

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

#### 5.1 安装依赖

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

```bash
npm install
```

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

#### 5.2 本地开发运行

## Learn More

```bash
npm start
```

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
默认打开：<http://localhost:3000>

To learn React, check out the [React documentation](https://reactjs.org/).

#### 5.3 打包构建

### Code Splitting

```bash
npm run build
```

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### 5.4 运行测试

### Analyzing the Bundle Size

```bash
npm test
```

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

> CRA 默认测试通常以交互 watch 模式运行。

### Making a Progressive Web App

### 6. 环境变量配置（推荐）

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
建议在项目根目录创建 `.env`，配置 OMDb API Key：

### Advanced Configuration

```bash
REACT_APP_OMDB_API_KEY=your_api_key
```

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
然后重新启动开发服务或重新部署（如 Vercel）。

### Deployment

### 7. 部署说明（Vercel）

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

- 该项目已使用 HTTPS 请求 OMDb（避免 Mixed Content）。
- 在 Vercel 项目设置中配置环境变量：
  - `REACT_APP_OMDB_API_KEY`

### `npm run build` fails to minify

---

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

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

Create a `.env` file in project root:

```bash
REACT_APP_OMDB_API_KEY=your_api_key
```

Restart the dev server or redeploy after setting env vars.

### 7. Deployment Notes (Vercel)

- The app uses HTTPS for OMDb requests to avoid mixed-content issues.
- Set this env var in Vercel project settings:
  - `REACT_APP_OMDB_API_KEY`

---

## License

For learning/demo purposes. Add an explicit license (e.g. MIT) if needed.
