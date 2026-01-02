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

/*===========================================================*/
/*印象編 5-5 雪が降る*/
/*===========================================================*/
/*雪1*/
particlesJS("pt1", {
  particles: {
    number: {
      value: 150 /*この数値を変更すると雪の数が増減できる*/,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "image" /*形状は画像を指定*/,
      stroke: {
        width: 3,
        color: "#fff",
      },
      image: {
        src: "img/snow.png" /*画像を指定*/,
        width: 120,
        height: 120,
      },
    },
    opacity: {
      value: 0.7,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 20,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 3 /*この数値を小さくするとゆっくりな動きになる*/,
      direction: "bottom" /*下に向かって落ちる*/,
      random: true /*動きはランダム*/,
      straight: false /*動きをとどめない*/,
      out_mode: "out" /*画面の外に出るように描写*/,
      bounce: false /*跳ね返りなし*/,
      attract: {
        enable: true,
        rotateX: 300,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
      },
      resize: true,
    },
  },
  retina_detect: true,
});

/*雪2*/
particlesJS("pt2", {
  particles: {
    number: {
      value: 150 /*この数値を変更すると雪の数が増減できる*/,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "image" /*形状は画像を指定*/,
      stroke: {
        width: 3,
        color: "#fff",
      },
      image: {
        src: "img/snow.png" /*画像を指定*/,
        width: 120,
        height: 120,
      },
    },
    opacity: {
      value: 0.7,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 20,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 3 /*この数値を小さくするとゆっくりな動きになる*/,
      direction: "bottom" /*下に向かって落ちる*/,
      random: true /*動きはランダム*/,
      straight: false /*動きをとどめない*/,
      out_mode: "out" /*画面の外に出るように描写*/,
      bounce: false /*跳ね返りなし*/,
      attract: {
        enable: true,
        rotateX: 300,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
      },
      resize: true,
    },
  },
  retina_detect: true,
});

/*===========================================================*/
/*印象編 5-6 落ち葉*/
/*===========================================================*/
particlesJS("pt3", {
  particles: {
    number: {
      value: 15 /*この数値を変更すると落ち葉の数が増減できる*/,
      density: {
        enable: true,
        value_area: 1121.6780303333778,
      },
    },
    color: {
      value: "#fff",
    },
    shape: {
      type: "image" /*形状は画像を指定*/,
      stroke: {
        width: 0,
      },
      image: {
        src: "img/flower.png" /*画像を指定*/,
        width: 190,
        height: 204,
      },
    },
    opacity: {
      value: 0.06409588744762158,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 12,
      random: true /*サイズをランダムに*/,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 7 /*この数値を小さくするとゆっくりな動きになる*/,
      direction: "bottom-right" /*右下に向かって落ちる*/,
      random: false /*動きはランダムにしない*/,
      straight: false /*動きをとどめない*/,
      out_mode: "out" /*画面の外に出るように描写*/,
      bounce: false /*跳ね返りなし*/,
      attract: {
        enable: false,
        rotateX: 281.9177489524316,
        rotateY: 127.670995809726,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
      },
      resize: true,
    },
  },
  retina_detect: false,
});

/*落ち葉2*/
particlesJS("pt4", {
  particles: {
    number: {
      value: 30 /*この数値を変更すると落ち葉の数が増減できる*/,
      density: {
        enable: true,
        value_area: 1121.6780303333778,
      },
    },
    color: {
      value: "#fff",
    },
    shape: {
      type: "image" /*形状は画像を指定*/,
      stroke: {
        width: 0,
      },
      image: {
        src: "img/flower.png" /*画像を指定*/,
        width: 190,
        height: 204,
      },
    },
    opacity: {
      value: 0.06409588744762158,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 12,
      random: true /*サイズをランダムに*/,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 10 /*この数値を小さくするとゆっくりな動きになる*/,
      direction: "bottom-right" /*右下に向かって落ちる*/,
      random: false /*動きはランダムにしない*/,
      straight: false /*動きをとどめない*/,
      out_mode: "out" /*画面の外に出るように描写*/,
      bounce: false /*跳ね返りなし*/,
      attract: {
        enable: false,
        rotateX: 281.9177489524316,
        rotateY: 127.670995809726,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
      },
      resize: true,
    },
  },
  retina_detect: false,
});

/*落ち葉3*/
particlesJS("pt5", {
  particles: {
    number: {
      value: 15 /*この数値を変更すると落ち葉の数が増減できる*/,
      density: {
        enable: true,
        value_area: 1121.6780303333778,
      },
    },
    color: {
      value: "#fff",
    },
    shape: {
      type: "image" /*形状は画像を指定*/,
      stroke: {
        width: 0,
      },
      image: {
        src: "img/flower.png" /*画像を指定*/,
        width: 190,
        height: 204,
      },
    },
    opacity: {
      value: 0.06409588744762158,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 12,
      random: true /*サイズをランダムに*/,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 7 /*この数値を小さくするとゆっくりな動きになる*/,
      direction: "bottom-right" /*右下に向かって落ちる*/,
      random: false /*動きはランダムにしない*/,
      straight: false /*動きをとどめない*/,
      out_mode: "out" /*画面の外に出るように描写*/,
      bounce: false /*跳ね返りなし*/,
      attract: {
        enable: false,
        rotateX: 281.9177489524316,
        rotateY: 127.670995809726,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
      },
      resize: true,
    },
  },
  retina_detect: false,
});

/*落ち葉4*/
particlesJS("pt6", {
  particles: {
    number: {
      value: 50 /*この数値を変更すると落ち葉の数が増減できる*/,
      density: {
        enable: true,
        value_area: 1121.6780303333778,
      },
    },
    color: {
      value: "#fff",
    },
    shape: {
      type: "image" /*形状は画像を指定*/,
      stroke: {
        width: 0,
      },
      image: {
        src: "img/flower.png" /*画像を指定*/,
        width: 190,
        height: 204,
      },
    },
    opacity: {
      value: 0.06409588744762158,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 12,
      random: true /*サイズをランダムに*/,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 12 /*この数値を小さくするとゆっくりな動きになる*/,
      direction: "top" /*右下に向かって落ちる*/,
      random: true /*動きはランダムにしない*/,
      straight: false /*動きをとどめない*/,
      out_mode: "out" /*画面の外に出るように描写*/,
      bounce: false /*跳ね返りなし*/,
      attract: {
        enable: false,
        rotateX: 281.9177489524316,
        rotateY: 127.670995809726,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
      },
      resize: true,
    },
  },
  retina_detect: false,
});
