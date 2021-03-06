# 圖片處理服務 (Image Processing Service)

本系統目標為建置後端應用服務(RESTful API)來支援[圖片上傳系統](https://github.com/jjhuang2017/image-upload-system)的各種核心功能，包含上傳圖片裁剪結果到伺服器儲存、縮放圖片裁剪的像素尺寸以及根據需求提供圖片裁剪的縮址。

## 系統功能與技術說明

* 前端系統：
前端統採用React.js開發框架，提供高維護性與效能性的網頁介面。(系統專案[image-upload-system](https://github.com/jjhuang2017/image-upload-system))

* 後端系統：
後端系統採用node.js與Express來開發RESTful API服務，提供上傳圖片剪裁結果與回傳圖片縮址功能。

## 系統安裝說明

* step1：安裝[node.js](https://nodejs.org/en/)

* step2：建立目錄並切換到建立完成的目錄
```shell
$ mkdir myapp
$ cd myapp
```
* step3：安裝位於專案的套件(package.json)
```shell
$ npm install
```
若在Windows環境無法安裝[Sharp](https://www.npmjs.com/package/sharp)(圖片處理套件)，請執行下列命令安裝`Windows Build Tools`來建置編譯環境：
```
$ npm install --global --production windows-build-tools
$ npm config set msvs_version 2015 --global
```

* step4：啟動位於專案的程式
```shell
$ npm start
```

* step5：服務位址
```
http://localhost:3003
```

## 圖片處理服務的應用程式介面(API)說明

圖片上傳與圖片縮放處理服務介面：
本服務介面提供剪裁圖片上傳與圖片縮放處理功能，用戶可根據需求取得各種尺寸的圖片縮址。本服務介面主要提供三種尺寸圖片縮址服務介面(RESTful API)如下：

* 大圖示(large)處裡服務介面
```
URL：http://localhost:3003/Image-Upload-Service/large
Type：POST
```
* 中圖示(medium)處裡服務介面
```
URL：http://localhost:3003/Image-Upload-Service/medium
Type：POST
```
* 小圖示(small)處裡服務介面
```
URL：http://localhost:3003/Image-Upload-Service/small
Type：POST
```
