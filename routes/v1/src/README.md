# Src

主要的資料處理、系統服務都會放在這邊。依據不同性質來做一一描述、使用。

釐清資料流、與架構設計等等資源也會放置在這邊。

---

## Project Layout

```
app.js
routes/
└───route.js
    v1/
    └── apis.js
        static.js
        categories/
        └─── credit_routes.js
             user_routes.js
             ...
        src/
        └── core.js
            modules/
            └── users.js
                project.js
                credit.js
                ... 
                db.js
                models/
                └── config.js
                    credit.js
                    project.js
                    user.js
                    ...
        test/
        └── (modules' name)/
            └── (unit test).js
            ...
```

* `routes/`: 主要後端程式進入點（ route.js 作為 "API" 與 "前端" 頁面主要分水嶺 ）
* `routes/v1/`: 表示 version 1 的設計放置於此（e.g. 階段1 所提供的服務）
* `routes/v1/categories/`: 用以表示 api calls 的分類，依據不同的功能與用途，做出分檔的動作。 主要由 `apis.js` 所呼叫
* `routes/v1/src/`： 主要 routes 接收外部指令後，針對後端資料庫、以及系統服務的資料流的處理會放在這。主要以 `core.js` 對同一層資料夾 `modules/` 底下的程式碼做封裝，成為整個系統主要的運行單元。
* `routes/v1/src/modules/`： 提供 `core.js` 內部功能實作。
* `routes/v1/src/modules/models/`： 為內部功能實作中，涉及 database 操作的相關程式碼，讓 database 的操作較好做管理、延伸。
* `routes/v1/test/`： 提供 core.js 相關單元測試項目，確認其是否可執行、以及其行為是否正確。

---

## `Core.js`
針對虛擬薪資系統設計的核心，主要處理金流（income）與薪資（outcome）的平衡

### Features

* 支援獨立運行（本質上 core 能夠在 `local 端` 測試）
* 透過 export function call 讓外部 services 可以呼叫使用（藉此支援 RESTful API server）

---

