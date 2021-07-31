# AC 學期 2-3 ｜ A13 Middleware 實作練習

利用 Node.js 和 Express 打造一個簡單的Middleware。

## 安裝套件

- Node.js: 10.24.1
- Express: 4.17.1
- body-parser: 1.19.0

## 基本功能

(1) 使用題目指定的 app.js 內容
(2) 在路由裡加入一支 middleware
(3) 伺服器接到任一請求時，server log 上能正確印出 (log 數量不限)：
- 時間戳記 (time-stamps) - 以當地時間 (台北) 顯示
- 請求的 HTTP 方法
- URL

## Getting Started
Clone respository to your local computer
```
$ git clone https://github.com/WeiHsin-Chen/middleware-datalog.git
```
Install by npm
```
$ npm install
```
Execute
```
$ npm run dev
```
Terminal show the message
```
Express is running on localhost:3000
```
Now you can browse the website on
```
http://localhost:3000
```
