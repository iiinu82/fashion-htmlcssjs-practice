左右分割スクロールのファッションブランドサイト（練習サンプル）

書籍『動くWebデザインアイディア帳』の印象編を参考に作成した、アパレルブランドの2025秋冬コレクション紹介ページです。  
画面を左右に分割し、スクロールで左右が独立して動くユニークな演出 + パーティクル（雪・花びら） + タイピングアニメーションで高級感を演出しています。

## デモ（ライブプレビュー）



## 主な実装機能
- **左右分割スクロール**（multiscroll.js） - 左右のセクションが独立して動く豪華な演出
- **パーティクルアニメーション**（particles.js）
  - 雪が降る（pt1, pt2）
  - 花びらが舞う/上がる（pt3〜pt6）
- **タイピング風テキスト出現** - 「Smart Fashion 2025 AW Collection Lookbook」が1文字ずつフェードイン
- **ナビゲーション** - 上部メニュー + 右側ドットナビでセクション間移動
- **レスポンシブ対応** - スマホでは通常の縦スクロールに切り替わる（sp-top/sp-bottomクラス）

## 使用技術・ライブラリ
- HTML5 / CSS3
- jQuery 3.4.1
- [multiscroll.js](https://github.com/alvarotrigo/multiscroll.js) - 左右分割スクロール
- [particles.js](https://github.com/VincentGarreau/particles.js/) - 雪・花びらアニメーション
- Google Fonts（Oswald）
