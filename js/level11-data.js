/* ============================================
   Level 11: グロースハック
   ============================================ */

const LEVEL11_DATA = {
    id: 11,
    title: "グロースハック",
    icon: "🚀",
    description: "AARRR・ABテスト・PMF・バイラル戦略を学ぶ",
    modules: [
        {
            id: 1101,
            title: "グロースハックの手法",
            duration: "15分",
            content: `
                <h2>グロースハックとは</h2>

                <p>グロースハックとは、<strong>データ分析と創造的なアイデアを組み合わせ、低コストで急速な成長を実現する手法</strong>です。ショーン・エリスが2010年に提唱した概念で、従来のマーケティングとは異なり、製品そのものに成長の仕組みを組み込むことが特徴です。Dropbox、Airbnb、Slackなどのスタートアップが急成長を遂げた背景にはグロースハックの手法があります。</p>

                <h2>AARRR（海賊指標）</h2>

                <p>デイブ・マクルーアが提唱した<strong>AARRRフレームワーク</strong>は、スタートアップの成長を5つのステップで分析するモデルです。その発音から「海賊指標（Pirate Metrics）」とも呼ばれます。</p>

                <table>
                    <thead>
                        <tr><th>段階</th><th>英語</th><th>内容</th><th>KPI例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>A</strong></td><td>Acquisition（獲得）</td><td>ユーザーの獲得</td><td>訪問数、新規登録数、CPA</td></tr>
                        <tr><td><strong>A</strong></td><td>Activation（活性化）</td><td>初期体験の成功</td><td>オンボーディング完了率、初回利用率</td></tr>
                        <tr><td><strong>R</strong></td><td>Retention（継続）</td><td>継続利用</td><td>DAU/MAU、リテンション率</td></tr>
                        <tr><td><strong>R</strong></td><td>Revenue（収益）</td><td>収益化</td><td>ARPU、課金率、LTV</td></tr>
                        <tr><td><strong>R</strong></td><td>Referral（紹介）</td><td>他者への紹介</td><td>紹介率、バイラル係数</td></tr>
                    </tbody>
                </table>

                <h2>PMF（Product-Market Fit）</h2>

                <p>PMFとは、<strong>製品が市場のニーズに合致している状態</strong>を指します。マーク・アンドリーセンが「スタートアップの成功にとって唯一重要なこと」と述べた概念です。PMFが達成されていない段階でマーケティングに大きな投資をしても無駄になります。</p>

                <ul>
                    <li><strong>PMFの指標</strong>：ショーン・エリスの40%テスト。「この製品が使えなくなったらどう感じますか？」に「非常に残念」と回答するユーザーが40%以上ならPMF達成</li>
                    <li><strong>PMF達成前</strong>：仮説検証とピボットを繰り返す。リーンスタートアップの手法で最小限の投資でテスト</li>
                    <li><strong>PMF達成後</strong>：成長投資（マーケティング、採用、スケーリング）に注力</li>
                </ul>

                <div class="info-box tip">
                    <div class="info-box-title">MVP（Minimum Viable Product）</div>
                    <p>最小限の機能を持つ製品を素早くリリースし、市場の反応を見ながら改善を繰り返す手法です。完璧な製品を作ってから市場に出すのではなく、「学び」を最大化することが目的です。</p>
                </div>

                <h2>A/Bテスト</h2>

                <p>A/Bテストとは、<strong>2つのバージョン（AとB）を同時にテストし、どちらがより良い結果を生むかをデータで判断する手法</strong>です。ランディングページのデザイン、メールの件名、CTAボタンの色、価格表示の方法など、あらゆる要素をテストできます。</p>

                <p>A/Bテストの成功のポイントは、一度に1つの要素だけを変更すること、十分なサンプルサイズを確保すること、統計的有意性を確認してから結論を出すことです。Googleは年間10,000回以上のA/Bテストを実施しています。</p>

                <h2>バイラル戦略</h2>

                <p>バイラル（口コミ）戦略は、<strong>ユーザー自身が他のユーザーを連れてくる仕組み</strong>を製品に組み込む手法です。バイラル係数（K値）が1を超えると指数関数的な成長が期待できます。</p>

                <ul>
                    <li><strong>紹介プログラム</strong>：Dropboxの「友達を招待すると500MBの追加容量」施策で、登録数が60%増加</li>
                    <li><strong>ネットワーク効果</strong>：ユーザーが増えるほどサービスの価値が高まる。LINEやInstagramが代表例</li>
                    <li><strong>コンテンツバイラル</strong>：シェアしたくなるコンテンツの作成。感動、驚き、有用性がシェアの動機</li>
                    <li><strong>製品内バイラル</strong>：Hotmailの「Sent from Hotmail」署名のように、利用するだけで宣伝になる仕組み</li>
                </ul>

                <div class="info-box warning">
                    <div class="info-box-title">グロースハックの落とし穴</div>
                    <p>短期的なハック（裏技的手法）に頼りすぎると、持続的な成長は実現できません。<strong>製品の本質的な価値</strong>がなければ、いくらグロースハックを駆使してもユーザーは定着しません。PMFの達成が最優先です。</p>
                </div>
            `,
            quiz: [
                { id: "q1101_1", type: "choice", question: "AARRRフレームワークの「Activation」の意味として正しいものはどれですか？", options: ["ユーザーの獲得", "初期体験の成功", "継続利用", "収益化"], answer: 1, explanation: "Activation（活性化）はユーザーの初期体験の成功を意味します。オンボーディングが完了し、製品の価値を初めて体感する段階です。" },
                { id: "q1101_2", type: "choice", question: "ショーン・エリスのPMFテストで「非常に残念」の回答が何%以上ならPMF達成とされますか？", options: ["20%以上", "30%以上", "40%以上", "50%以上"], answer: 2, explanation: "ショーン・エリスのテストでは「非常に残念」の回答が40%以上あればPMFが達成されていると判断します。" },
                { id: "q1101_3", type: "choice", question: "Dropboxが急成長したバイラル施策の内容はどれですか？", options: ["テレビCMの大量投下", "友達招待で追加容量を付与", "全機能を無料開放", "有名人のエンドースメント"], answer: 1, explanation: "Dropboxは「友達を招待すると500MBの追加容量」という紹介プログラムで登録数を60%増加させました。" }
            ]
        }
    ]
};