/* ============================================
   Level 12: マーケティング計画
   ============================================ */

const LEVEL12_DATA = {
    id: 12,
    title: "マーケティング計画",
    icon: "📝",
    description: "KPI設定・予算配分・PDCAサイクル・事例研究を学ぶ",
    modules: [
        {
            id: 1201,
            title: "マーケティング計画の立案と実行",
            duration: "15分",
            content: `
                <h2>マーケティング計画とは</h2>

                <p>マーケティング計画とは、<strong>マーケティング目標を達成するための具体的な行動計画</strong>です。戦略を「絵に描いた餅」にせず、実行可能なアクションプランに落とし込むことが目的です。マーケティング計画は通常、年間計画として策定され、四半期ごとに見直しを行います。</p>

                <h2>KPI（重要業績評価指標）の設定</h2>

                <p>KPI（Key Performance Indicator）は、<strong>マーケティング活動の成果を測定するための定量的な指標</strong>です。効果的なKPIは<strong>SMART</strong>の原則に従って設定します。</p>

                <table>
                    <thead>
                        <tr><th>原則</th><th>英語</th><th>内容</th><th>例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>S</strong></td><td>Specific（具体的）</td><td>曖昧さのない明確な指標</td><td>「売上を増やす」→「EC売上を増やす」</td></tr>
                        <tr><td><strong>M</strong></td><td>Measurable（測定可能）</td><td>数値で測定できる</td><td>「EC売上を月間500万円にする」</td></tr>
                        <tr><td><strong>A</strong></td><td>Achievable（達成可能）</td><td>現実的に達成できる</td><td>現状300万円→500万円（67%増）</td></tr>
                        <tr><td><strong>R</strong></td><td>Relevant（関連性）</td><td>事業目標と整合</td><td>会社の成長戦略に合致</td></tr>
                        <tr><td><strong>T</strong></td><td>Time-bound（期限付き）</td><td>達成期限を明確に</td><td>「6ヶ月以内に達成」</td></tr>
                    </tbody>
                </table>

                <h3>マーケティングの代表的なKPI</h3>

                <ul>
                    <li><strong>認知指標</strong>：ブランド認知率、インプレッション数、リーチ数</li>
                    <li><strong>集客指標</strong>：Webサイト訪問数、新規訪問率、流入経路別トラフィック</li>
                    <li><strong>エンゲージメント指標</strong>：直帰率、滞在時間、SNSエンゲージメント率</li>
                    <li><strong>コンバージョン指標</strong>：CVR、CPA、ROAS（広告費用対効果）</li>
                    <li><strong>収益指標</strong>：売上高、粗利率、LTV、CAC</li>
                </ul>

                <h2>マーケティング予算配分</h2>

                <p>マーケティング予算の配分は、企業の成長段階と目標によって大きく異なります。一般的に、<strong>売上高の5〜15%</strong>がマーケティング予算の目安とされますが、スタートアップでは20〜30%に達することもあります。</p>

                <ul>
                    <li><strong>認知拡大重視</strong>：広告費（デジタル広告、SNS広告）に重点配分。新規事業や新商品のローンチ時</li>
                    <li><strong>リード獲得重視</strong>：コンテンツマーケティング、SEO、イベントに配分。B2Bで多い</li>
                    <li><strong>顧客維持重視</strong>：CRM、メールマーケティング、ロイヤリティプログラムに配分。成熟事業で重要</li>
                </ul>

                <h2>PDCAサイクル</h2>

                <p>PDCAサイクルは、マーケティング活動を<strong>継続的に改善するためのフレームワーク</strong>です。</p>

                <ul>
                    <li><strong>Plan（計画）</strong>：目標設定、KPI定義、施策の立案、予算配分</li>
                    <li><strong>Do（実行）</strong>：計画に基づく施策の実施。デジタル施策は小規模テストから開始</li>
                    <li><strong>Check（評価）</strong>：KPIに基づく成果の測定・分析。Google Analytics、CRMツールを活用</li>
                    <li><strong>Act（改善）</strong>：分析結果に基づく改善策の立案と次サイクルへの反映</li>
                </ul>

                <div class="info-box tip">
                    <div class="info-box-title">OODAループとの違い</div>
                    <p>PDCAが「計画→実行→評価→改善」の順序立てた改善サイクルなのに対し、<strong>OODA（Observe→Orient→Decide→Act）</strong>は状況観察から素早く意思決定・行動するフレームワークです。変化の激しいデジタルマーケティングでは、PDCAとOODAを状況に応じて使い分けることが効果的です。</p>
                </div>

                <h2>マーケティング成功事例</h2>

                <ul>
                    <li><strong>ユニクロ</strong>：「LifeWear」コンセプトによる明確なポジショニングと、グローバルでの一貫したブランドメッセージ。テクノロジー素材（ヒートテック、エアリズム）による差別化</li>
                    <li><strong>メルカリ</strong>：テレビCMとデジタル広告の大規模投資で認知を一気に獲得。招待キャンペーンによるバイラル効果と、使いやすいUI/UXでリテンションを実現</li>
                    <li><strong>スターバックス</strong>：「サードプレイス」というコンセプトで差別化。SNSで拡散される限定ドリンク戦略と、モバイルオーダーによる顧客体験の革新</li>
                </ul>

                <div class="info-box warning">
                    <div class="info-box-title">マーケティング計画の失敗を防ぐ</div>
                    <p>マーケティング計画で最も多い失敗は、<strong>目標と施策の乖離</strong>と<strong>検証なき投資</strong>です。施策の実行だけに集中してKPIのモニタリングを怠ったり、成果が出ていない施策に投資し続けるケースは少なくありません。データに基づく客観的な評価と、迅速な軌道修正が成功の鍵です。</p>
                </div>
            `,
            quiz: [
                { id: "q1201_1", type: "choice", question: "SMARTの原則で「T」は何を表しますか？", options: ["Technology（技術）", "Target（対象）", "Time-bound（期限付き）", "Total（合計）"], answer: 2, explanation: "SMARTのTはTime-bound（期限付き）です。達成期限を明確に設定することで、進捗管理が可能になります。" },
                { id: "q1201_2", type: "choice", question: "一般的にマーケティング予算は売上高の何%が目安とされていますか？", options: ["1〜3%", "5〜15%", "20〜30%", "40〜50%"], answer: 1, explanation: "一般的にマーケティング予算は売上高の5〜15%が目安です。ただし企業の成長段階や業界によって大きく異なります。" },
                { id: "q1201_3", type: "choice", question: "PDCAサイクルの「C」は何を表しますか？", options: ["Create（創造）", "Change（変更）", "Check（評価）", "Cost（コスト）"], answer: 2, explanation: "PDCAのCはCheck（評価）です。KPIに基づいて施策の成果を測定・分析する段階です。" }
            ]
        }
    ]
};