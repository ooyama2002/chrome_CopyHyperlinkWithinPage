# CopyHyperlinkWithinPage
`CopyHyperlinkWithinPage` はchrome/opera用のアドオンです。  
アクティブなタブのページ内のハイパーリンクをクリップボードにコピーします。  

## 使い方
![README_image_01](https://github.com/user-attachments/assets/9e9cddc2-a270-4815-b1d5-e80f2e60a5a1)  
以下の形式でコピーされます  
normalの場合  
```
リンクテキスト
URL
```
markdownの場合  
```
[リンクテキスト](URL)
```
pukiwikiの場合  
```
[[リンクテキスト:URL]]
```
htmlの場合  
```
<a href="URL">リンクテキスト</a>
```

## インストール方法
### chromeの場合
- CopyHyperlinkWithinPageフォルダ を任意の場所に配置します  
  フォルダの場所を変えると拡張機能が読み込めなくなるので  
  変更しない場所に配置してください
- URLに`chrome://extensions/`と入力し拡張機能の管理画面を開きます
- 右上の[デベロッパーモード]をONにします
- [パッケージ化されていない拡張機能を読み込む]を選択し
  CopyHyperlinkWithinPageフォルダ を選択します
### operaの場合
- CopyHyperlinkWithinPageフォルダ を任意の場所に配置します  
  フォルダの場所を変えると拡張機能が読み込めなくなるので  
  変更しない場所に配置してください
- URLに`opera://extensions/`と入力し拡張機能の管理画面を開きます
- 左上の[開発者モード]をONにします
- [パッケージ化されていない拡張機能を読み込む]を選択し
  CopyHyperlinkWithinPageフォルダ を選択します
