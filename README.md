# Astro + Vue 專案架構

該專案是基於 **Astro** 開發的多頁面應用程式 (MPA)，整合 Vue3 Composition API 和多種工具構建。

---

## 專案特性

### 框架與工具

- **Astro** 管理路由與頁面結構。
- **Vite** 作為構建工具，實現快速開發與高效打包。
- **TypeScript** 提供靜態類型檢查，提升代碼可讀性及可維護性。
- **Pinia** 管理跨元件資料。
- **i18n** 管理多國語言。

### UI 和設計

- **Tailwind CSS** 與 **shadcn-ui** 建構現代化響應式設計。
- **Storybook** 管理和展示 UI 元件規格。

### 測試與代碼品管

- 使用 **Mock API** 模擬後端交互。
- 使用 **Jest** 進行單元測試。
- 使用 **ESLint Standard** 管理代碼風格，保持一致性。

### 套件與環境

- 使用 **pnpm** 進行套件管理。
- 使用 **nvm** 管理 Node.js 版本。

---

## 資料夾結構

```plaintext
project-root/
├── src/                   # 主程式碼
│   ├── apis/              # 模組化 API 管理
│   ├── assets/            # 靜態資源與全域樣式 (包含 Tailwind 配置)
│   ├── components/        # Vue3 通用元件
│   ├── layouts/           # 頁面佈局模板
│   ├── locales/           # 多國語系 (i18n 文件)
│   ├── pages/             # Astro 頁面及 Vue 主要元件 (管理路由)
│   ├── stores/            # Pinia 狀態管理
│   ├── stories/           # Storybook 管理 UI 規格
│   ├── tests/             # 測試相關文件 (使用 Jest)
│   └── utils/             # 工具函數
├── public/                # 編譯檔案以及 Mock API 存放處
├── .storybook/            # Storybook 配置
├── .env                   # 環境變數
├── .eslintrc.js           # ESLint 配置
├── astro.config.mjs       # astro 配置文件(絕對路徑設置以及 Vue、Tailwind 導入)
├── jest.config.mjs        # Jest 配置文件
├── package.json           # 套件與腳本
├── README.md              # 專案說明文件
├── tailwind.config.js     # Tailwind CSS 配置文件
└── tsconfig.json          # TypeScript 配置
```

---

## 啟動方式

### 環境準備

1. 確保安裝以下工具：
   - **Node.js** (推薦使用 **nvm** 管理，版本見 `.nvmrc`)
   - **pnpm** (安裝命令：`npm install -g pnpm`)

2. 安裝套件：

   ```bash
   nvm use 22
   pnpm install
   ```

### 啟動開發伺服器

1. 啟動本地開發伺服器：

    ```bash
    pnpm dev
    ```

2. 開啟 Storybook 以檢視 UI 元件：

    ```bash
    pnpm storybook
    ```

### 打包與部署

1. 打包靜態資源

    ```bash
    pnpm build
    ```

2. 預覽打包樣式

    ```bash
    pnpm preview
    ```

---

## 測試

1. 進行單元測試

    ```bash
    pnpm test
    ```

---

## 說明

### Mock API

所有 Mock 資料位於 public/mocks/。

### API 管理

API 編寫模式透過 axios.create 實體化管理，並透過 Pinia 發送。

此外，全域的錯誤透過 interceptors.request.use / interceptors.response.use 進行 API 發送前後的狀態的狀態管理。

### Layouts

Layouts 資料夾內含 VueLayout.vue 檔案。

該元件用於導入 Tailwind。

### 路由管理

本專案透過 Astro 取代 Vue Router 進行路由管理。

Astro 會透過 pages 資料夾內自動生成路由。

例如：@/pages/index.astro 路徑為 domain/; @/pages/about/index.astro 路徑為 domain/about。依此類推

Astro 僅為控制路由使用，具體開發仍然以 Vue 為主，僅需在 index.astro 引入 Vue 元件即可。

要注意的是引入元件後記得加入 client:load 標籤，讓元件在使用者端進行加載，否則元件無法正常使用。

### Pinia 跨元件狀態管理

所有 Pinia 儲存庫皆位於 stores 資料夾，由於 Astro 框架 SSR 渲染的特殊性，無法在 Layout 元件初始化 Pinia，因此使用 Pinia 前需先 import store.ts 檔案，手動將 Pinia 初始化。

    ```bash
    import { pinia } from "@/stores/store";
    import { exampleStore } from "@/store/example";

    const example = exampleStore(pinia);
    ```

### 多國語系

所有語言文件位於 src/locales/，通過 i18n 自動切換語言。
