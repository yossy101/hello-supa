# hello supabase (static)

- 静的 HTML + supabase-js(v2) だけで「保存/一覧」を行う最小構成。

## セットアップ手順

1. Supabase にログインし、新しいプロジェクトを作成します。
   - プロジェクト作成時に生成される **Project URL** と **anon public API key** を控えておきます。
2. Supabase ダッシュボードの SQL Editor を開き、`schema.sql` の内容をコピーして実行します。
   - `messages` テーブルと RLS ポリシーが作成されます。
3. `env.js` の `YOUR_SUPABASE_URL` と `YOUR_SUPABASE_ANON_KEY` を、ステップ 1 で控えた値に置き換えます。
4. 動作確認のためにローカルで `index.html` を開き、メッセージを保存・一覧表示できることを確認します。
5. Vercel などのホスティングサービスにデプロイする場合は、リポジトリをインポートし、ビルドコマンド/出力ディレクトリを空に設定して静的ファイルをそのまま配信します。
   - `env.js` に環境変数が含まれるため、private repository で運用するか、公開する場合は実際のキーを別途管理してください。
