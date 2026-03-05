/* ============================================
   Level 2: 市場分析
   ============================================ */

const LEVEL2_DATA = {
    id: 2,
    title: "市場分析",
    icon: "🔍",
    description: "PEST分析・5F分析・3C分析と市場調査手法を学ぶ",
    modules: [
        {
            id: 201,
            title: "市場分析のフレームワーク",
            duration: "15分",
            content: `
                <h2>市場分析とは</h2>

                <p>市場分析とは、<strong>自社を取り巻くビジネス環境を体系的に理解するプロセス</strong>です。適切な市場分析なくして効果的なマーケティング戦略は立案できません。ここでは、代表的な3つのフレームワークを学びます。</p>

                <h2>PEST分析 ― マクロ環境の把握</h2>

                <p>PEST分析は、企業がコントロールできない<strong>外部環境（マクロ環境）</strong>を4つの視点で分析するフレームワークです。</p>

                <table>
                    <thead>
                        <tr><th>要因</th><th>英語</th><th>分析内容</th><th>具体例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>P</strong></td><td>Political（政治）</td><td>法規制、税制、政治動向</td><td>個人情報保護法改正、消費税率変更</td></tr>
                        <tr><td><strong>E</strong></td><td>Economic（経済）</td><td>景気、為替、金利、物価</td><td>円安による原材料費高騰、インフレ</td></tr>
                        <tr><td><strong>S</strong></td><td>Social（社会）</td><td>人口動態、ライフスタイル、価値観</td><td>少子高齢化、健康志向、SDGs意識</td></tr>
                        <tr><td><strong>T</strong></td><td>Technological（技術）</td><td>技術革新、IT動向</td><td>AI普及、5G展開、メタバース</td></tr>
                    </tbody>
                </table>

                <h2>5フォース分析 ― 業界の競争構造</h2>

                <p>マイケル・ポーターが提唱した<strong>5フォース分析</strong>は、業界の競争環境を5つの力（Force）で分析するフレームワークです。業界の収益性を左右する要因を体系的に理解できます。</p>

                <ul>
                    <li><strong>既存企業間の競争</strong>：業界内の競合の数と強さ。同質化が進むと価格競争に陥りやすい</li>
                    <li><strong>新規参入の脅威</strong>：参入障壁の高さ。特許、ブランド力、規模の経済が障壁となる</li>
                    <li><strong>代替品の脅威</strong>：異なる方法で同じニーズを満たす製品・サービスの存在</li>
                    <li><strong>買い手の交渉力</strong>：顧客の価格交渉力。スイッチングコストが低いと買い手が有利</li>
                    <li><strong>売り手の交渉力</strong>：原材料供給者の力。供給者が寡占状態だと交渉力が高まる</li>
                </ul>

                <h2>3C分析 ― 戦略の三角形</h2>

                <p>3C分析は、大前研一が提唱した戦略フレームワークで、<strong>Customer（市場・顧客）</strong>、<strong>Competitor（競合）</strong>、<strong>Company（自社）</strong>の3つの視点から事業環境を分析します。</p>

                <ul>
                    <li><strong>Customer（市場・顧客）</strong>：市場規模、成長性、顧客ニーズ、購買行動パターン</li>
                    <li><strong>Competitor（競合）</strong>：競合の戦略、強み・弱み、市場シェア、差別化ポイント</li>
                    <li><strong>Company（自社）</strong>：自社の強み・弱み、経営資源、コアコンピタンス</li>
                </ul>

                <div class="info-box tip">
                    <div class="info-box-title">フレームワークの使い分け</div>
                    <p>PEST分析はマクロ環境の全体像、5フォース分析は業界の競争構造、3C分析は事業レベルの戦略策定に使います。これらを<strong>組み合わせて</strong>使うことで、より精度の高い市場分析が可能になります。</p>
                </div>

                <h2>市場調査の手法</h2>

                <p>市場分析のためのデータ収集手法は大きく<strong>デスクリサーチ</strong>と<strong>フィールドリサーチ</strong>に分かれます。デスクリサーチは既存の統計データや業界レポートを活用し、フィールドリサーチはアンケートやインタビューで一次データを収集します。目的に応じて適切な手法を選択することが重要です。</p>
            `,
            quiz: [
                { id: "q201_1", type: "choice", question: "PEST分析の「S」は何を表しますか？", options: ["Strategy（戦略）", "Social（社会）", "Supply（供給）", "System（システム）"], answer: 1, explanation: "PEST分析のSはSocial（社会的要因）を表し、人口動態、ライフスタイル、価値観の変化などを分析します。" },
                { id: "q201_2", type: "choice", question: "5フォース分析を提唱した人物は誰ですか？", options: ["フィリップ・コトラー", "大前研一", "マイケル・ポーター", "ピーター・ドラッカー"], answer: 2, explanation: "5フォース分析はハーバード大学のマイケル・ポーター教授が提唱した業界の競争構造を分析するフレームワークです。" },
                { id: "q201_3", type: "choice", question: "3C分析の3つのCに含まれないものはどれですか？", options: ["Customer", "Competitor", "Company", "Cost"], answer: 3, explanation: "3C分析はCustomer（市場・顧客）、Competitor（競合）、Company（自社）の3つです。Costは含まれません。" }
            ]
        }
    ]
};