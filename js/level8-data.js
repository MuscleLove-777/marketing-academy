/* ============================================
   Level 8: CRMとLTV
   ============================================ */

const LEVEL8_DATA = {
    id: 8,
    title: "CRMとLTV",
    icon: "🤝",
    description: "顧客関係管理・顧客生涯価値・ロイヤリティを学ぶ",
    modules: [
        {
            id: 801,
            title: "CRMとLTVの基本",
            duration: "15分",
            content: `
                <h2>CRM（顧客関係管理）とは</h2>

                <p>CRM（Customer Relationship Management）とは、<strong>顧客との関係を長期的に構築・維持・発展させるための戦略と仕組み</strong>です。新規顧客の獲得コストは既存顧客の維持コストの<strong>5倍</strong>と言われており（1:5の法則）、既存顧客との関係強化はビジネスの収益性を大きく左右します。</p>

                <div class="info-box tip">
                    <div class="info-box-title">5:25の法則</div>
                    <p>顧客離れを<strong>5%改善</strong>するだけで、利益が<strong>25%以上向上</strong>するという法則です。フレデリック・ライクヘルドが提唱しました。これはCRMの重要性を端的に示す数字です。</p>
                </div>

                <h2>CRMの主要施策</h2>

                <table>
                    <thead>
                        <tr><th>施策</th><th>内容</th><th>具体例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>顧客データ管理</strong></td><td>購買履歴、行動データの一元管理</td><td>Salesforce、HubSpotなどのCRMツール</td></tr>
                        <tr><td><strong>セグメント管理</strong></td><td>顧客を属性や行動で分類</td><td>RFM分析（Recency, Frequency, Monetary）</td></tr>
                        <tr><td><strong>パーソナライゼーション</strong></td><td>個人に最適化した情報提供</td><td>おすすめ商品の表示、パーソナライズドメール</td></tr>
                        <tr><td><strong>ロイヤリティプログラム</strong></td><td>優良顧客への特典提供</td><td>ポイントプログラム、会員ランク制度</td></tr>
                        <tr><td><strong>カスタマーサクセス</strong></td><td>顧客の成功を能動的に支援</td><td>オンボーディング支援、定期レビュー</td></tr>
                    </tbody>
                </table>

                <h2>LTV（顧客生涯価値）</h2>

                <p>LTV（Life Time Value：顧客生涯価値）とは、<strong>1人の顧客がその関係期間全体を通じて企業にもたらす総利益</strong>です。LTVの計算方法はいくつかありますが、基本的な公式は以下の通りです。</p>

                <div class="info-box tip">
                    <div class="info-box-title">LTVの基本公式</div>
                    <p><strong>LTV = 平均購入単価 × 購入頻度 × 継続期間</strong><br>
                    例：月額5,000円のサブスクサービス × 月1回 × 平均36ヶ月 = LTV 180,000円</p>
                </div>

                <p>LTVを向上させるアプローチは3つあります。</p>

                <ul>
                    <li><strong>平均購入単価の向上</strong>：アップセル（上位製品への誘導）、クロスセル（関連商品の提案）</li>
                    <li><strong>購入頻度の向上</strong>：定期購入の促進、リマインド施策、季節キャンペーン</li>
                    <li><strong>継続期間の延長</strong>：顧客満足度の向上、解約防止施策、カスタマーサクセス</li>
                </ul>

                <h2>顧客ロイヤリティの測定</h2>

                <p><strong>NPS（Net Promoter Score）</strong>は、顧客ロイヤリティを測る指標として最も広く使われています。「この製品・サービスを友人や同僚にどの程度すすめたいですか？」という質問に0〜10で回答してもらい、推奨者（9-10）の割合から批判者（0-6）の割合を引いた値です。NPSが高い企業ほど成長率が高い傾向があります。</p>

                <h3>RFM分析</h3>

                <p>顧客をセグメント化するための代表的な手法が<strong>RFM分析</strong>です。Recency（最終購入日からの経過日数）、Frequency（購入頻度）、Monetary（累計購入金額）の3つの指標で顧客を分類し、優良顧客の特定や離反リスクの高い顧客の発見に活用します。</p>

                <div class="info-box warning">
                    <div class="info-box-title">CACとLTVのバランス</div>
                    <p>CRMの効果を測定する際は、<strong>CAC（顧客獲得コスト）</strong>とLTVの比率が重要です。一般的に<strong>LTV:CAC = 3:1以上</strong>が健全なビジネスの目安とされています。LTVがCACを下回る場合、顧客を獲得するほど赤字が拡大します。</p>
                </div>
            `,
            quiz: [
                { id: "q801_1", type: "choice", question: "新規顧客の獲得コストは既存顧客の維持コストの何倍と言われていますか？", options: ["2倍", "3倍", "5倍", "10倍"], answer: 2, explanation: "「1:5の法則」により、新規顧客の獲得コストは既存顧客の維持コストの5倍と言われています。" },
                { id: "q801_2", type: "choice", question: "RFM分析の「F」は何を表しますか？", options: ["Finance（財務）", "Frequency（頻度）", "Feedback（フィードバック）", "Function（機能）"], answer: 1, explanation: "RFM分析のFはFrequency（購入頻度）を表します。R=Recency（最終購入日）、M=Monetary（累計購入金額）です。" },
                { id: "q801_3", type: "choice", question: "健全なビジネスにおけるLTV:CACの目安はどれですか？", options: ["1:1以上", "2:1以上", "3:1以上", "10:1以上"], answer: 2, explanation: "一般的にLTV:CAC=3:1以上が健全なビジネスの目安です。この比率が低いと顧客獲得の投資効率が悪いことを示します。" }
            ]
        }
    ]
};