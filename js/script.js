/*==================================================
/*印象編 6-3 スクロールすると画面分割した左右がそれぞれ動く*/
/*===================================*/

$("#wrapper").multiscroll({
  sectionsColor: [
    "#0f7fa7",
    "#504237",
    "#504237",
    "#504237",
    "#504237",
    "#504237",
  ], //セクションごとの背景色設定
  anchors: ["area1", "area2", "area3", "area4", "area5", "area6"], //セクションとリンクするページ内アンカーになる名前
  menu: "#menu", //上部ナビゲーションのメニュー設定
  navigation: true, //右のナビゲーション出現、非表示は false
  //navigationTooltips:['Area1', 'Area2', 'Area3','Area4','Area5'],//右のナビゲーション現在地時に入るテキスト
  //loopTop: true,//最初のセクションを上にスクロールして最後のセクションまでスクロールするかどうかを定義します。
  loopBottom: true, //最後のセクションを下にスクロールして最初のセクションまでスクロールするかどうかを定義します。
  //※以下は今回のプラグインの組み合わせのみで使用。ページの途中でリロードしてもトップのタイピング出現
  afterLoad: function (anchorLink, index) {
    if (index == 1) {
      TextTypingAnime();
    }
  },
});

/*===========================================================*/
/*印象編 8-10 テキストがタイピング風に出現*/
/*===========================================================*/

// TextTypingというクラス名がついている子要素（span）を表示から非表示にする定義
// タイピングアニメーション関数（自動で<span>分割 + スクロールで発火）
function TextTypingAnime() {
  $(".TextTyping").each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();

    // 画面内に入ったらアニメーション実行
    if (scroll >= elemPos - windowHeight) {
      // まだ処理済みじゃなかったら、1文字ずつ<span>に分割
      if (!$(this).hasClass("typed")) {
        $(this).addClass("typed"); // 処理済みマーク

        var text = $(this).html(); // 現在のHTML（テキスト）を取得
        var textbox = "";

        // 1文字ずつ処理（スペースはそのまま）
        text.split("").forEach(function (t) {
          if (t !== " ") {
            textbox += "<span>" + t + "</span>";
          } else {
            textbox += t; // スペースはそのまま（複数文字の間隔を保つため）
          }
        });

        $(this).html(textbox); // 分割したHTMLに置き換え
      }

      // <span>を1つずつフェードイン
      $(this)
        .children("span")
        .each(function (i) {
          var time = 80; // 1文字ごとの遅延（80ms = 速め、100msでゆったり）
          $(this)
            .delay(time * i)
            .fadeIn(time);
        });
    } else {
      // 画面外に出たらリセット（スクロールで戻ったときに再アニメ可能）
      $(this).children("span").css("opacity", "0"); // 非表示（display:noneだとレイアウト崩れやすい）
    }
  });
}

// ページ読み込み時とスクロール時に実行
$(window).on("load", function () {
  TextTypingAnime();
});

$(window).scroll(function () {
  TextTypingAnime();
});
