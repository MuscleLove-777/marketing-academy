/* ============================================
   Level 4: マーケティングミックス4P
   ============================================ */

const LEVEL4_DATA = {
    id: 4,
    title: "マーケティングミックス4P",
    icon: "🧩",
    description: "Product・Price・Place・Promotionの4Pを学ぶ",
    modules: [
        {
            id: 401,
            title: "マーケティングミックス4P",
            duration: "15分",
            content: `
                <h2>マーケティングミックス（4P）とは</h2>

                <p>マーケティングミックスとは、<strong>企業が市場に対して行うマーケティング施策の組み合わせ</strong>です。E.J.マッカーシーが提唱した4Pモデルは、Product（製品）、Price（価格）、Place（流通）、Promotion（プロモーション）の4要素で構成され、これらを最適に組み合わせることでマーケティング目標の達成を目指します。</p>

                <h2>Product（製品戦略）</h2>

                <p>製品戦略は「<strong>何を売るか</strong>」を決定する要素です。製品には3つの層があります。</p>

                <ul>
                    <li><strong>中核的便益（コアベネフィット）</strong>：顧客が本当に求めている根本的な価値。ドリルを買う人が求めているのは「穴」</li>
                    <li><strong>実体的製品</strong>：品質、デザイン、機能、ブランド名、パッケージ</li>
                    <li><strong>拡張的製品</strong>：アフターサービス、保証、配送、設置サービス</li>
                </ul>

                <p>製品にはライフサイクル（<strong>PLC：Product Life Cycle</strong>）があり、導入期→成長期→成熟期→衰退期の4段階を経ます。各段階に応じたマーケティング戦略の転換が必要です。</p>

                <h2>Price（価格戦略）</h2>

                <p>価格は4Pの中で<strong>唯一直接的に収益を生む要素</strong>です。主な価格設定手法は以下の通りです。</p>

                <table>
                    <thead>
                        <tr><th>手法</th><th>概要</th><th>具体例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>コストプラス法</strong></td><td>原価に一定の利益を上乗せ</td><td>製造原価1,000円+利益率30%=1,300円</td></tr>
                        <tr><td><strong>競争基準法</strong></td><td>競合の価格を基準に設定</td><td>競合より5%安い価格に設定</td></tr>
                        <tr><td><strong>需要基準法</strong></td><td>顧客の知覚価値に基づく</td><td>ブランド品の高価格設定</td></tr>
                        <tr><td><strong>スキミング</strong></td><td>高価格で参入し徐々に下げる</td><td>新型iPhoneの価格戦略</td></tr>
                        <tr><td><strong>ペネトレーション</strong></td><td>低価格で一気にシェア獲得</td><td>格安SIMの参入戦略</td></tr>
                    </tbody>
                </table>

                <h2>Place（流通戦略）</h2>

                <p>流通戦略は「<strong>どこで・どのように届けるか</strong>」を決定します。チャネルの長さ（直販か卸売経由か）、チャネルの幅（開放的・選択的・排他的流通）、そしてオムニチャネル戦略（実店舗とECの統合）が主要な検討事項です。近年はD2C（Direct to Consumer）モデルが急成長しており、中間業者を排除して消費者に直接販売する企業が増えています。</p>

                <h2>Promotion（プロモーション戦略）</h2>

                <p>プロモーションは「<strong>いかに伝えるか</strong>」を決定する要素で、以下の手法を組み合わせます。</p>

                <ul>
                    <li><strong>広告</strong>：テレビCM、デジタル広告、新聞・雑誌広告。認知拡大に効果的</li>
                    <li><strong>販売促進（SP）</strong>：クーポン、サンプリング、ポイント還元。短期的な購買刺激</li>
                    <li><strong>人的販売</strong>：営業活動、店頭接客。B2Bでは特に重要</li>
                    <li><strong>パブリシティ/PR</strong>：プレスリリース、メディア露出。信頼性が高い</li>
                </ul>

                <div class="info-box tip">
                    <div class="info-box-title">4Pから4Cへの転換</div>
                    <p>ロバート・ラウターボーンは4Pを顧客視点で再定義した<strong>4C</strong>を提唱しました。Product→Customer Value（顧客価値）、Price→Cost（顧客コスト）、Place→Convenience（利便性）、Promotion→Communication（対話）。現代では売り手視点の4Pと買い手視点の4Cの両方を考慮することが重要です。</p>
                </div>
            `,
            quiz: [
                { id: "q401_1", type: "choice", question: "4Pの中で唯一直接的に収益を生む要素はどれですか？", options: ["Product", "Price", "Place", "Promotion"], answer: 1, explanation: "Priceは4Pの中で唯一直接的に収益を生む要素です。他の3Pはコスト（投資）を伴います。" },
                { id: "q401_2", type: "choice", question: "新製品を高価格で投入し、徐々に価格を下げていく戦略を何と呼びますか？", options: ["ペネトレーション戦略", "スキミング戦略", "コストプラス法", "バンドル戦略"], answer: 1, explanation: "スキミング（上澄み吸収）戦略は、高価格で参入して初期の利益を最大化し、徐々に価格を下げてシェアを拡大する手法です。" },
                { id: "q401_3", type: "choice", question: "4Pを顧客視点で再定義した4Cを提唱した人物は誰ですか？", options: ["フィリップ・コトラー", "E.J.マッカーシー", "ロバート・ラウターボーン", "マイケル・ポーター"], answer: 2, explanation: "ロバート・ラウターボーンは1990年に4Pを顧客視点の4C（Customer Value, Cost, Convenience, Communication）として再定義しました。" }
            ]
        }
    ]
};