/* ============================================
   Level 6: デジタルマーケティング
   ============================================ */

const LEVEL6_DATA = {
    id: 6,
    title: "デジタルマーケティング",
    icon: "💻",
    description: "SEO・コンテンツマーケ・メールマーケを学ぶ",
    modules: [
        {
            id: 601,
            title: "デジタルマーケティングの基礎",
            duration: "15分",
            content: `
                <h2>デジタルマーケティングとは</h2>

                <p>デジタルマーケティングとは、<strong>デジタル技術やインターネットを活用したマーケティング活動の総称</strong>です。従来のマスマーケティングと異なり、データに基づく精密なターゲティング、効果測定の即時性、双方向コミュニケーションが特徴です。現在、日本の広告費においてインターネット広告がテレビ広告を上回っており、デジタルマーケティングの重要性は年々増しています。</p>

                <h2>SEO（検索エンジン最適化）</h2>

                <p>SEOとは、<strong>Search Engine Optimization</strong>の略で、Googleなどの検索エンジンで自社サイトを上位表示させるための施策です。SEOは大きく3つの領域に分かれます。</p>

                <table>
                    <thead>
                        <tr><th>領域</th><th>内容</th><th>具体的な施策</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>内部SEO</strong></td><td>サイト内部の最適化</td><td>タイトルタグ最適化、メタディスクリプション、見出し構造、内部リンク</td></tr>
                        <tr><td><strong>外部SEO</strong></td><td>外部からの評価向上</td><td>被リンク獲得、SNSでのシェア、メディア掲載</td></tr>
                        <tr><td><strong>コンテンツSEO</strong></td><td>質の高いコンテンツ作成</td><td>キーワード調査、ユーザーの検索意図への対応、E-E-A-T</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">E-E-A-Tとは</div>
                    <p>GoogleはコンテンツをExperience（経験）、Expertise（専門性）、Authoritativeness（権威性）、Trustworthiness（信頼性）の4つの基準で評価します。特にYMYL（Your Money or Your Life）領域では、高いE-E-A-Tが求められます。</p>
                </div>

                <h2>コンテンツマーケティング</h2>

                <p>コンテンツマーケティングとは、<strong>価値あるコンテンツを継続的に発信し、見込み客を引きつけ育成する手法</strong>です。直接的な販売ではなく、情報提供を通じて信頼関係を構築し、最終的に購買行動につなげます。主なコンテンツ形式には、ブログ記事、ホワイトペーパー、動画コンテンツ、インフォグラフィック、ポッドキャスト、ウェビナーがあります。</p>

                <p>コンテンツマーケティングの成功には<strong>コンテンツカレンダー</strong>（編集計画）の作成と、<strong>ファネル</strong>（認知→興味→比較→購買→推奨）の各段階に適したコンテンツの設計が不可欠です。</p>

                <h2>メールマーケティング</h2>

                <p>メールマーケティングは、<strong>最もROI（投資対効果）が高いデジタルマーケティング手法の一つ</strong>です。業界平均でROIは約3,600%（1ドルの投資に対して36ドルのリターン）と言われています。</p>

                <ul>
                    <li><strong>メルマガ</strong>：定期的な情報発信。ブランドとの接点維持に有効</li>
                    <li><strong>ステップメール</strong>：事前に設定したシナリオに基づき自動送信。見込み客の育成に活用</li>
                    <li><strong>セグメント配信</strong>：顧客属性や行動に基づく配信。開封率・クリック率の向上に寄与</li>
                    <li><strong>トランザクションメール</strong>：購入確認、発送通知など取引に関連するメール。開封率が非常に高い</li>
                </ul>

                <p>効果的なメールマーケティングのKPIには、<strong>開封率</strong>（業界平均20〜25%）、<strong>クリック率</strong>（業界平均2〜5%）、<strong>コンバージョン率</strong>、<strong>配信解除率</strong>があります。件名の最適化、パーソナライゼーション、A/Bテストで継続的に改善を図ります。</p>

                <div class="info-box warning">
                    <div class="info-box-title">注意：法的規制</div>
                    <p>日本では<strong>特定電子メール法</strong>により、事前同意（オプトイン）のない商用メール送信は禁止されています。また、全てのメールに<strong>配信停止リンク（オプトアウト）</strong>を設置する義務があります。</p>
                </div>
            `,
            quiz: [
                { id: "q601_1", type: "choice", question: "SEOの3つの領域に含まれないものはどれですか？", options: ["内部SEO", "外部SEO", "有料SEO", "コンテンツSEO"], answer: 2, explanation: "SEOは内部SEO、外部SEO、コンテンツSEOの3つの領域で構成されます。有料の検索結果表示はSEOではなくSEM（検索エンジンマーケティング）に分類されます。" },
                { id: "q601_2", type: "choice", question: "GoogleのE-E-A-Tで「最初のE」が表すものは何ですか？", options: ["Efficiency（効率性）", "Experience（経験）", "Education（教育）", "Engagement（関与）"], answer: 1, explanation: "E-E-A-TのEはExperience（経験）、Expertise（専門性）、Authoritativeness（権威性）、Trustworthiness（信頼性）です。" },
                { id: "q601_3", type: "choice", question: "メールマーケティングで事前同意なく商用メールを送ることを禁止する日本の法律は何ですか？", options: ["個人情報保護法", "特定電子メール法", "不正アクセス禁止法", "消費者契約法"], answer: 1, explanation: "特定電子メール法により、オプトイン（事前同意）のない商用メール送信は禁止されています。" }
            ]
        }
    ]
};