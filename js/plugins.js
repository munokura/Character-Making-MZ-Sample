// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"PluginCommonBase","status":true,"description":"パラメータ解析を提供する共通基盤です","parameters":{}},
{"name":"EventLabel","status":true,"description":"イベントラベルプラグイン","parameters":{"showDefault":"false","hideNoImage":"true","hideNameEv":"true","fontSize":"16","backColor":"rgba(0,0,0,0.1)","padding":"2"}},
{"name":"111_InputForm","status":true,"description":"フォーム作って文字入力（修正版）","parameters":{}},
{"name":"MPP_ChoiceEX","status":true,"description":"選択肢の機能を拡張します。","parameters":{"Max Page Row":"6","Disabled Position":"none"}},
{"name":"MNKR_ChoiceColsMZ","status":true,"description":"選択肢の列数を変更する機能を追加します。","parameters":{"choiceColsVariableId":"11"}},
{"name":"MNKR_RandomActorNameMZ","status":true,"description":"アクターの名前をランダムに変更します。","parameters":{"variableId":"12","nameLists":"[\"{\\\"listName\\\":\\\"list1\\\",\\\"actorNames\\\":\\\"[\\\\\\\"アーサー\\\\\\\",\\\\\\\"アーネスト\\\\\\\",\\\\\\\"アーノルド\\\\\\\",\\\\\\\"アービン\\\\\\\",\\\\\\\"アーロン\\\\\\\",\\\\\\\"アイザック\\\\\\\",\\\\\\\"アイバン\\\\\\\",\\\\\\\"アシュトン\\\\\\\",\\\\\\\"アドルフ\\\\\\\",\\\\\\\"アラスター\\\\\\\",\\\\\\\"アラステア\\\\\\\",\\\\\\\"アリエル\\\\\\\",\\\\\\\"アリスター\\\\\\\",\\\\\\\"アルバート\\\\\\\",\\\\\\\"アルビン\\\\\\\",\\\\\\\"アレクシス\\\\\\\",\\\\\\\"アレックス\\\\\\\",\\\\\\\"アンガス\\\\\\\",\\\\\\\"アンソニー\\\\\\\",\\\\\\\"アントン\\\\\\\",\\\\\\\"イーサン\\\\\\\",\\\\\\\"イーノック\\\\\\\",\\\\\\\"ウィリアム\\\\\\\",\\\\\\\"ウェスリー\\\\\\\",\\\\\\\"ウォーレン\\\\\\\",\\\\\\\"ウォルター\\\\\\\",\\\\\\\"エイブラム\\\\\\\",\\\\\\\"エイベル\\\\\\\",\\\\\\\"エグバート\\\\\\\",\\\\\\\"エドウィン\\\\\\\",\\\\\\\"エドガー\\\\\\\",\\\\\\\"エドワード\\\\\\\",\\\\\\\"エリアル\\\\\\\",\\\\\\\"エリオット\\\\\\\",\\\\\\\"エルトン\\\\\\\",\\\\\\\"エルビス\\\\\\\",\\\\\\\"オーウェン\\\\\\\",\\\\\\\"オーガスト\\\\\\\",\\\\\\\"オーブリー\\\\\\\",\\\\\\\"オスニエル\\\\\\\",\\\\\\\"オズワルド\\\\\\\",\\\\\\\"カーティス\\\\\\\",\\\\\\\"ガドフリー\\\\\\\",\\\\\\\"カルビン\\\\\\\",\\\\\\\"キャルビン\\\\\\\",\\\\\\\"ギルバート\\\\\\\",\\\\\\\"クラーク\\\\\\\",\\\\\\\"クライド\\\\\\\",\\\\\\\"クラレンス\\\\\\\",\\\\\\\"クリフトン\\\\\\\",\\\\\\\"グレアム\\\\\\\",\\\\\\\"グレゴリー\\\\\\\",\\\\\\\"ゴードン\\\\\\\",\\\\\\\"コンラッド\\\\\\\",\\\\\\\"サイモン\\\\\\\",\\\\\\\"サイラス\\\\\\\",\\\\\\\"サミュエル\\\\\\\",\\\\\\\"サンディー\\\\\\\",\\\\\\\"ジェイコブ\\\\\\\",\\\\\\\"ジェイソン\\\\\\\",\\\\\\\"ジェームズ\\\\\\\",\\\\\\\"ジェラルド\\\\\\\",\\\\\\\"シミオン\\\\\\\",\\\\\\\"ジャクソン\\\\\\\",\\\\\\\"ジャスパー\\\\\\\",\\\\\\\"ジュード\\\\\\\",\\\\\\\"ジュリアン\\\\\\\",\\\\\\\"ジョエル\\\\\\\",\\\\\\\"ジョージ\\\\\\\",\\\\\\\"ショーン\\\\\\\",\\\\\\\"ジョシュア\\\\\\\",\\\\\\\"ジョスリン\\\\\\\",\\\\\\\"ジョナサン\\\\\\\",\\\\\\\"スコット\\\\\\\",\\\\\\\"スタンリー\\\\\\\",\\\\\\\"スティーブ\\\\\\\",\\\\\\\"スペンサー\\\\\\\",\\\\\\\"セオドア\\\\\\\",\\\\\\\"ソロモン\\\\\\\",\\\\\\\"ダグラス\\\\\\\",\\\\\\\"ダスティン\\\\\\\",\\\\\\\"ダニエル\\\\\\\",\\\\\\\"ダライアス\\\\\\\",\\\\\\\"ダンカン\\\\\\\",\\\\\\\"チェスター\\\\\\\",\\\\\\\"チャールズ\\\\\\\",\\\\\\\"ディーン\\\\\\\",\\\\\\\"ディック\\\\\\\",\\\\\\\"デービッド\\\\\\\",\\\\\\\"デクスター\\\\\\\",\\\\\\\"デズモンド\\\\\\\",\\\\\\\"デューク\\\\\\\",\\\\\\\"デリック\\\\\\\",\\\\\\\"テレンス\\\\\\\",\\\\\\\"ドウェイン\\\\\\\",\\\\\\\"トーマス\\\\\\\",\\\\\\\"ドミニク\\\\\\\",\\\\\\\"トラビス\\\\\\\",\\\\\\\"トリスタン\\\\\\\",\\\\\\\"ナイジェル\\\\\\\",\\\\\\\"ニコラス\\\\\\\",\\\\\\\"ネイサン\\\\\\\",\\\\\\\"ノーマン\\\\\\\",\\\\\\\"バーナード\\\\\\\",\\\\\\\"ハーバート\\\\\\\",\\\\\\\"ハーベイ\\\\\\\",\\\\\\\"ハーマン\\\\\\\",\\\\\\\"バイロン\\\\\\\",\\\\\\\"パスカル\\\\\\\",\\\\\\\"パトリック\\\\\\\",\\\\\\\"ハミルトン\\\\\\\",\\\\\\\"ハリソン\\\\\\\",\\\\\\\"ハロルド\\\\\\\",\\\\\\\"ハワード\\\\\\\",\\\\\\\"ハンフリー\\\\\\\",\\\\\\\"ビクター\\\\\\\",\\\\\\\"ヒューゴー\\\\\\\",\\\\\\\"ビンセント\\\\\\\",\\\\\\\"フィリップ\\\\\\\",\\\\\\\"ブライアン\\\\\\\",\\\\\\\"ブランドン\\\\\\\",\\\\\\\"ブルース\\\\\\\",\\\\\\\"ブレンダン\\\\\\\",\\\\\\\"ブレント\\\\\\\",\\\\\\\"ブレンドン\\\\\\\",\\\\\\\"ベイジル\\\\\\\",\\\\\\\"ヘイデン\\\\\\\",\\\\\\\"マーカス\\\\\\\",\\\\\\\"マーティン\\\\\\\",\\\\\\\"マイケル\\\\\\\",\\\\\\\"マイルズ\\\\\\\",\\\\\\\"マックス\\\\\\\",\\\\\\\"マヌエル\\\\\\\",\\\\\\\"マルコム\\\\\\\",\\\\\\\"メイナード\\\\\\\",\\\\\\\"メルビン\\\\\\\",\\\\\\\"メレディス\\\\\\\",\\\\\\\"モーガン\\\\\\\",\\\\\\\"モーリス\\\\\\\",\\\\\\\"モンタギュー\\\\\\\",\\\\\\\"ユーイン\\\\\\\",\\\\\\\"ユリシーズ\\\\\\\",\\\\\\\"ライオネル\\\\\\\",\\\\\\\"ライナス\\\\\\\",\\\\\\\"ラッセル\\\\\\\",\\\\\\\"ラフェエル\\\\\\\",\\\\\\\"ランドル\\\\\\\",\\\\\\\"リーアム\\\\\\\",\\\\\\\"リーバイ\\\\\\\",\\\\\\\"リチャード\\\\\\\",\\\\\\\"ルーカス\\\\\\\",\\\\\\\"ルーシャン\\\\\\\",\\\\\\\"ルーパート\\\\\\\",\\\\\\\"ルーファス\\\\\\\",\\\\\\\"ルシアン\\\\\\\",\\\\\\\"ルパート\\\\\\\",\\\\\\\"レイモンド\\\\\\\",\\\\\\\"レックス\\\\\\\",\\\\\\\"レナード\\\\\\\",\\\\\\\"ロードリック\\\\\\\",\\\\\\\"ローマン\\\\\\\",\\\\\\\"ローランド\\\\\\\",\\\\\\\"ローレンス\\\\\\\",\\\\\\\"ロナルド\\\\\\\",\\\\\\\"ロバート\\\\\\\"]\\\"}\",\"{\\\"listName\\\":\\\"list2\\\",\\\"actorNames\\\":\\\"[\\\\\\\"アイリーン\\\\\\\",\\\\\\\"アイリス\\\\\\\",\\\\\\\"アヴリル\\\\\\\",\\\\\\\"アグネス\\\\\\\",\\\\\\\"アデライン\\\\\\\",\\\\\\\"アドレイド\\\\\\\",\\\\\\\"アニータ\\\\\\\",\\\\\\\"アマンダ\\\\\\\",\\\\\\\"アメーリア\\\\\\\",\\\\\\\"アラベラ\\\\\\\",\\\\\\\"アリエル\\\\\\\",\\\\\\\"アリシア\\\\\\\",\\\\\\\"アレクシア\\\\\\\",\\\\\\\"アンジェラ\\\\\\\",\\\\\\\"アンソニア\\\\\\\",\\\\\\\"イーディス\\\\\\\",\\\\\\\"イーデン\\\\\\\",\\\\\\\"イザベル\\\\\\\",\\\\\\\"イボーン\\\\\\\",\\\\\\\"イライザ\\\\\\\",\\\\\\\"イレイン\\\\\\\",\\\\\\\"ウェンディ\\\\\\\",\\\\\\\"エイリーン\\\\\\\",\\\\\\\"エステル\\\\\\\",\\\\\\\"エディス\\\\\\\",\\\\\\\"エノーラ\\\\\\\",\\\\\\\"エミリア\\\\\\\",\\\\\\\"エリアル\\\\\\\",\\\\\\\"エリザベス\\\\\\\",\\\\\\\"エレノーラ\\\\\\\",\\\\\\\"オーレリア\\\\\\\",\\\\\\\"オリビア\\\\\\\",\\\\\\\"カトリーナ\\\\\\\",\\\\\\\"キャサリン\\\\\\\",\\\\\\\"キャメロン\\\\\\\",\\\\\\\"キャロル\\\\\\\",\\\\\\\"クラリス\\\\\\\",\\\\\\\"クリスティン\\\\\\\",\\\\\\\"グレイス\\\\\\\",\\\\\\\"グレンダ\\\\\\\",\\\\\\\"グロリア\\\\\\\",\\\\\\\"コーデリア\\\\\\\",\\\\\\\"サブリナ\\\\\\\",\\\\\\\"サマンサ\\\\\\\",\\\\\\\"サンドラ\\\\\\\",\\\\\\\"ジェーン\\\\\\\",\\\\\\\"ジェシカ\\\\\\\",\\\\\\\"シェリル\\\\\\\",\\\\\\\"シオドーラ\\\\\\\",\\\\\\\"ジャスミン\\\\\\\",\\\\\\\"ジャネット\\\\\\\",\\\\\\\"シャロン\\\\\\\",\\\\\\\"ジューン\\\\\\\",\\\\\\\"ジュディ\\\\\\\",\\\\\\\"ジュリアン\\\\\\\",\\\\\\\"ジョアンナ\\\\\\\",\\\\\\\"ショーナ\\\\\\\",\\\\\\\"シルビア\\\\\\\",\\\\\\\"シンシア\\\\\\\",\\\\\\\"スーザン\\\\\\\",\\\\\\\"スザンナ\\\\\\\",\\\\\\\"セオドーラ\\\\\\\",\\\\\\\"セシリア\\\\\\\",\\\\\\\"セリーナ\\\\\\\",\\\\\\\"ソフィア\\\\\\\",\\\\\\\"ダイアナ\\\\\\\",\\\\\\\"ディアドラ\\\\\\\",\\\\\\\"ディアナ\\\\\\\",\\\\\\\"テリーサ\\\\\\\",\\\\\\\"ドリーン\\\\\\\",\\\\\\\"ドロシア\\\\\\\",\\\\\\\"ナタリア\\\\\\\",\\\\\\\"ナディア\\\\\\\",\\\\\\\"ニコール\\\\\\\",\\\\\\\"ネイオミ\\\\\\\",\\\\\\\"ノーリーン\\\\\\\",\\\\\\\"バーバラ\\\\\\\",\\\\\\\"パトリシア\\\\\\\",\\\\\\\"ビクトリア\\\\\\\",\\\\\\\"ビビアン\\\\\\\",\\\\\\\"フィオナ\\\\\\\",\\\\\\\"フィリス\\\\\\\",\\\\\\\"フェリシア\\\\\\\",\\\\\\\"フランシス\\\\\\\",\\\\\\\"プリシラ\\\\\\\",\\\\\\\"ブレンダ\\\\\\\",\\\\\\\"フローラ\\\\\\\",\\\\\\\"ベアトリス\\\\\\\",\\\\\\\"ヘイゼル\\\\\\\",\\\\\\\"ベネッサ\\\\\\\",\\\\\\\"ベリンダ\\\\\\\",\\\\\\\"ヘロイーズ\\\\\\\",\\\\\\\"ベロニカ\\\\\\\",\\\\\\\"ポーリーン\\\\\\\",\\\\\\\"マーゴット\\\\\\\",\\\\\\\"マーシャ\\\\\\\",\\\\\\\"マーリーン\\\\\\\",\\\\\\\"マチルダ\\\\\\\",\\\\\\\"マデリン\\\\\\\",\\\\\\\"マドライン\\\\\\\",\\\\\\\"マライア\\\\\\\",\\\\\\\"マリアン\\\\\\\",\\\\\\\"マリリン\\\\\\\",\\\\\\\"マルビナ\\\\\\\",\\\\\\\"ミッシェル\\\\\\\",\\\\\\\"ミランダ\\\\\\\",\\\\\\\"ミリアム\\\\\\\",\\\\\\\"メイベル\\\\\\\",\\\\\\\"メリッサ\\\\\\\",\\\\\\\"メリンダ\\\\\\\",\\\\\\\"メレディス\\\\\\\",\\\\\\\"メロディ\\\\\\\",\\\\\\\"モーリーン\\\\\\\",\\\\\\\"モニーク\\\\\\\",\\\\\\\"ユーニス\\\\\\\",\\\\\\\"ヨランダ\\\\\\\",\\\\\\\"ラモーナ\\\\\\\",\\\\\\\"リオノーラ\\\\\\\",\\\\\\\"リディア\\\\\\\",\\\\\\\"リネット\\\\\\\",\\\\\\\"リリアン\\\\\\\",\\\\\\\"ルイーズ\\\\\\\",\\\\\\\"ルーシャ\\\\\\\",\\\\\\\"ルシール\\\\\\\",\\\\\\\"ルシンダ\\\\\\\",\\\\\\\"レイチェル\\\\\\\",\\\\\\\"レオノーラ\\\\\\\",\\\\\\\"レジーナ\\\\\\\",\\\\\\\"レベッカ\\\\\\\",\\\\\\\"ロレッタ\\\\\\\"]\\\"}\"]"}},
{"name":"MNKR_CommonPopupCoreMZ","status":true,"description":"汎用的なポップアップの仕組みを提供するためのベースプラグインです。","parameters":{}}
];
