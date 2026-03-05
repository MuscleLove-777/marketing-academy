/* ============================================
   Level 7: カスタマージャーニー
   ============================================ */

const LEVEL7_DATA = {
    id: 7,
    title: "カスタマージャーニー",
    icon: "🗺️",
    description: "AIDMA・AISAS・タッチポイント設計を学ぶ",
    modules: [
        {
            id: 701,
            title: "カスタマージャーニーの設計",
            duration: "15分",
            content: `
                <h2>カスタマージャーニーとは</h2>

                <p>カスタマージャーニーとは、<strong>顧客が製品やサービスを認知してから購入、さらにはファンになるまでの一連のプロセス</strong>を指します。この旅路を「カスタマージャーニーマップ」として可視化することで、各段階で顧客が何を感じ、何を求めているかを理解し、最適な施策を打つことができます。</p>

                <h2>AIDMA モデル</h2>

                <p><strong>AIDMA</strong>は、1920年代にサミュエル・ローランド・ホールが提唱した消費者行動モデルで、主にマスメディア時代の購買プロセスを表します。</p>

                <table>
                    <thead>
                        <tr><th>段階</th><th>英語</th><th>内容</th><th>施策例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>A</strong></td><td>Attention（注意）</td><td>製品の存在を知る</td><td>テレビCM、看板広告</td></tr>
                        <tr><td><strong>I</strong></td><td>Interest（興味）</td><td>興味を持つ</td><td>製品の特徴紹介、PR</td></tr>
                        <tr><td><strong>D</strong></td><td>Desire（欲求）</td><td>欲しいと思う</td><td>試用体験、デモンストレーション</td></tr>
                        <tr><td><strong>M</strong></td><td>Memory（記憶）</td><td>記憶に残る</td><td>リマインド広告、反復露出</td></tr>
                        <tr><td><strong>A</strong></td><td>Action（行動）</td><td>購入する</td><td>店頭POP、限定セール</td></tr>
                    </tbody>
                </table>

                <h2>AISAS モデル</h2>

                <p><strong>AISAS</strong>は電通が提唱したインターネット時代の消費者行動モデルです。AIDMAとの最大の違いは、「Search（検索）」と「Share（共有）」が加わった点です。</p>

                <ul>
                    <li><strong>Attention（注意）</strong>：SNS広告やインフルエンサーの投稿で商品を知る</li>
                    <li><strong>Interest（興味）</strong>：興味を持ち、もっと知りたいと思う</li>
                    <li><strong>Search（検索）</strong>：Google検索、口コミサイト、SNSで情報収集</li>
                    <li><strong>Action（行動）</strong>：ECサイトや実店舗で購入</li>
                    <li><strong>Share（共有）</strong>：SNSや口コミサイトで感想・レビューを投稿</li>
                </ul>

                <div class="info-box tip">
                    <div class="info-box-title">AISASの循環構造</div>
                    <p>AISASモデルの重要な特徴は、最後の「Share」が他の消費者の「Attention」や「Search」につながる<strong>循環構造</strong>を持っている点です。良い口コミは新たな顧客を呼び込み、悪い口コミは購買を妨げます。</p>
                </div>

                <h2>タッチポイント設計</h2>

                <p>タッチポイントとは、<strong>顧客とブランドが接触するすべての接点</strong>です。カスタマージャーニーの各段階で適切なタッチポイントを設計することが重要です。</p>

                <table>
                    <thead>
                        <tr><th>段階</th><th>主なタッチポイント</th><th>目的</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>認知</td><td>SNS広告、動画広告、PR</td><td>ブランド認知の拡大</td></tr>
                        <tr><td>検討</td><td>Webサイト、口コミ、比較サイト</td><td>情報提供と信頼構築</td></tr>
                        <tr><td>購入</td><td>ECサイト、実店舗、カスタマーサポート</td><td>スムーズな購買体験</td></tr>
                        <tr><td>利用</td><td>製品体験、アプリ、カスタマーサービス</td><td>顧客満足の最大化</td></tr>
                        <tr><td>推奨</td><td>SNS、レビューサイト、紹介プログラム</td><td>口コミの促進</td></tr>
                    </tbody>
                </table>

                <p>カスタマージャーニーマップの作成手順は、ペルソナの設定→ジャーニーの段階定義→各段階の行動・思考・感情の記述→タッチポイントの特定→課題と改善機会の発見です。重要なのは、<strong>顧客の感情の起伏（エモーショナルカーブ）</strong>を記述し、ペインポイント（痛点）を発見・解消することです。</p>

                <div class="info-box warning">
                    <div class="info-box-title">オムニチャネル体験の重要性</div>
                    <p>現代の顧客はオンラインとオフラインを行き来しながら購買を検討します。店舗で見てネットで買う「ショールーミング」や、ネットで調べて店舗で買う「ウェブルーミング」など、チャネルを横断したシームレスな体験設計が求められます。</p>
                </div>
            `,
            quiz: [
                { id: "q701_1", type: "choice", question: "AISASモデルを提唱した企業はどこですか？", options: ["博報堂", "電通", "Google", "マッキンゼー"], answer: 1, explanation: "AISASは電通が提唱したインターネット時代の消費者行動モデルです。Search（検索）とShare（共有）が特徴です。" },
                { id: "q701_2", type: "choice", question: "AIDMAモデルの「M」は何を表しますか？", options: ["Marketing（マーケティング）", "Memory（記憶）", "Motivation（動機）", "Media（メディア）"], answer: 1, explanation: "AIDMAのMはMemory（記憶）です。リマインド広告や反復露出により、消費者の記憶に商品を定着させます。" },
                { id: "q701_3", type: "choice", question: "店舗で実物を見てからネットで購入する行動を何と呼びますか？", options: ["ウェブルーミング", "ショールーミング", "オムニチャネル", "クロスセリング"], answer: 1, explanation: "ショールーミングは実店舗で商品を確認してからオンラインで購入する行動です。逆にネットで調べて店舗で買うのがウェブルーミングです。" }
            ]
        }
    ]
};