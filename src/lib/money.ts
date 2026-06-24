export type NewsItem = {
  id: string;
  emoji: string;
  category: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  body: string[];
};

export const MONEY_NEWS: NewsItem[] = [
  {
    id: "fugu-user-reactions",
    emoji: "🐡",
    category: "AI",
    title: "Fugu Faces Early Scrutiny: Users Report Slow Speeds and Heavy Token Use",
    summary:
      "Following Sakana AI's claim that its Fugu orchestration system rivals Claude Fable 5, users around the world have been putting the agent through its paces. Early feedback is mixed: while the multi-model approach intrigues testers, several report that Fugu is noticeably slower and consumes tokens faster than rival agents such as Claude Code and Codex — with at least one user hitting a usage limit barely an hour into a paid subscription.",
    date: "June 24, 2026",
    readTime: "3 min read",
    body: [
      "Since Sakana AI released Fugu on June 22, 2026, users around the world have been active in testing and evaluating the agent in light of the company's claim that it performs on parity with Claude Fable 5. The promise of a system that orchestrates multiple frontier models — routing sub-tasks to the likes of GPT-5, Gemini 3.1 Pro, and Claude Opus 4.8 behind a single API — has drawn considerable curiosity from the developer community.",

      "The early verdict, however, is mixed. Some users have complained that the agent is slow and burns through tokens faster than other agents such as Claude Code and Codex. The very design that makes Fugu distinctive — coordinating several models and assembling their outputs into one answer — appears to come at a cost in both latency and token consumption, as work is parceled out and stitched back together rather than handled by a single model in one pass.",

      "Cost has emerged as a particular sticking point. One user reported that, on a $20-per-month subscription, he began using Fugu only to be told, after a bit over one hour, to come back in a few hours because he had reached his usage limit. For developers accustomed to longer uninterrupted sessions on competing tools, such early cut-offs raise questions about how Fugu's orchestration overhead translates into real-world usability and value.",

      "Whether these are teething problems of a newly launched product or a more fundamental tradeoff inherent to multi-agent orchestration remains to be seen. For now, Fugu's benchmark claims have earned it attention — but turning that attention into sustained adoption may depend on how quickly Sakana AI can address the speed and cost concerns surfacing in real use.",
    ],
  },
  {
    id: "tech-sell-off-june-2026",
    emoji: "📉",
    category: "Markets",
    title: "Global Tech Sell-Off Deepens as AI and Chip Stocks Tumble",
    summary:
      "Technology stocks fell sharply for a second consecutive day on June 23, 2026, as a global sell-off in artificial-intelligence and semiconductor shares rattled markets from Seoul to New York. The Nasdaq 100 plunged more than 3%, dragged down by steep losses in Micron, Nvidia, and Taiwan Semiconductor, amid doubts about lofty AI valuations and fears that war-driven inflation could keep interest rates elevated.",
    date: "June 23, 2026",
    readTime: "4 min read",
    body: [
      "U.S. equities extended their slide on June 23, 2026, as the technology-heavy Nasdaq 100 fell more than 3.2% and the broader Nasdaq Composite dropped 2.2%. The benchmark S&P 500 closed 1.4% lower, while the small-cap Russell 2000 declined nearly 1%. The losses followed a 2% drop in the Nasdaq the prior session, marking one of the most pronounced two-day retreats in technology shares of the year and signaling a broad reassessment of the sector that has powered markets higher.",

      "Semiconductor stocks bore the brunt of the decline. Memory-chip maker Micron Technology sank 11.4%, while Taiwan Semiconductor Manufacturing Company (TSMC) fell 5.2% and AI-chip leader Nvidia dropped 3.2%. The rout began overnight in Asia, where two of South Korea's largest companies led declines that sent the Kospi index down more than 9%, triggering a temporary trading halt. The concentration of losses in chipmakers underscored how central the semiconductor industry has become to the AI investment narrative — and how exposed it is when that narrative is questioned.",

      "Two forces converged to spark the sell-off. The first was growing skepticism about the sustainability of the extraordinary gains in technology shares, with investors increasingly questioning whether AI-related earnings can justify current valuations. The second was macroeconomic: fears that rising inflation, stemming from the ongoing Iran war and the closure of the Strait of Hormuz, could force central banks to keep interest rates higher for longer. Elevated borrowing costs pose a particular threat to the capital-intensive, ever-expanding global AI infrastructure buildout, which depends on cheap financing.",

      "Market sentiment was further dented by SpaceX, whose shares have slid for days following a volatile June 12 market debut. The weakness in one of the year's most closely watched listings added to the sense that investors were growing more discriminating about richly valued technology names after a prolonged period of near-uninterrupted gains.",

      "The sell-off was global in scope. Beyond the dramatic decline in South Korea's Kospi, European markets also closed in the red, with the pan-European Stoxx 600 down 0.8% and Germany's flagship DAX index falling 1%. The synchronized weakness across continents reflected the deeply interconnected nature of the technology supply chain and the shared exposure of global investors to the AI trade.",

      "Whether the pullback represents a healthy correction or the start of a more sustained repricing of technology assets will depend in part on the trajectory of inflation, interest-rate expectations, and the next round of corporate earnings. For now, the episode is a reminder that the AI-driven rally — for all its momentum — remains vulnerable to shifts in the macroeconomic backdrop and to the simple question of whether sky-high valuations can be justified.",
    ],
  },
  {
    id: "china-housing",
    emoji: "🏠",
    category: "Real Estate",
    title: "China's Housing Market: From Boom to Reset",
    summary:
      "After two decades of relentless growth, China's residential property market is undergoing a painful correction — and some economists are drawing uncomfortable parallels to Japan's lost decades.",
    date: "June 23, 2026",
    readTime: "5 min read",
    body: [
      "After two decades of relentless growth, China's residential property market is undergoing a painful correction. Home prices in major cities have fallen 20–30% from their 2021 peaks, and developers like Evergrande and Country Garden — once symbols of China's urban boom — have defaulted on hundreds of billions in debt.",

      "The crisis traces back to Beijing's 'three red lines' policy (2020), which capped developer borrowing ratios to deflate a debt bubble. The move worked — but triggered a confidence collapse. Buyers stopped purchasing unfinished units, developers ran out of cash to complete projects, and a vicious cycle set in.",

      "The government has since reversed course: cutting mortgage rates, relaxing purchase restrictions in major cities, and setting up a state fund to buy unsold inventory. Stabilization is beginning in tier-1 cities like Shanghai and Beijing, but smaller cities with chronic oversupply remain under pressure.",

      "For ordinary Chinese families — who hold 70–80% of their wealth in real estate — the downturn is not just an economic story. It is reshaping consumer confidence, household savings behaviour, and China's long-term growth model.",

      "On Chinese social media such as WeChat, a growing chorus of voices — including some economists — are drawing comparisons to Japan's property collapse of the early 1990s, which ushered in three 'lost decades' of stagnation. Whether China can avoid a similar fate remains one of the most debated questions in global economics today.",
    ],
  },
  {
    id: "spacex-cursor",
    emoji: "🛸",
    category: "Acquisition",
    title: "SpaceX Acquires Cursor in $60 Billion Deal, Merging Space and AI",
    summary:
      "In a stunning cross-industry move, SpaceX has announced the acquisition of Cursor — the AI-powered coding assistant — valuing the company at $60 billion and signalling Elon Musk's ambition to build a vertically integrated AI and space empire.",
    date: "June 16, 2026",
    readTime: "5 min read",
    body: [
      "On June 16, 2026, SpaceX announced the acquisition of Cursor, the AI-powered coding assistant developed by Anysphere, in a deal that values the company at $60 billion. The announcement sent shockwaves through the technology world — not just for its staggering price tag, but for what it signals about Elon Musk's increasingly ambitious vision for SpaceX as a vertically integrated technology empire that extends far beyond rockets and satellites.",

      "Cursor has rapidly become the tool of choice for software engineers worldwide. Built on top of frontier large language models — including Claude and GPT-4 — Cursor integrates AI assistance directly into a Visual Studio Code-based editor, enabling developers to write, refactor, debug, and understand code with unprecedented speed. Within just two years of its public launch, Cursor amassed millions of active users and became the fastest-adopted developer tool in Silicon Valley history, with reported annual recurring revenue crossing $500 million in early 2026.",

      "The $60 billion valuation is extraordinary by any measure, making this one of the largest acquisitions in the history of the software industry. For context, it exceeds the acquisition prices paid for LinkedIn ($26B), GitHub ($7.5B), and Slack ($27B) — and Cursor is a fraction of the age of any of those companies. The price reflects not just Cursor's current revenue, but the strategic premium SpaceX is willing to pay for controlling a dominant position in the AI developer tools market.",

      "Why would a rocket company acquire a coding assistant? The answer, analysts suggest, lies in SpaceX's increasingly acute software demands. Developing and operating Starship — the most complex rocket ever built — requires an enormous engineering workforce writing millions of lines of code across avionics, guidance systems, propulsion control, ground operations, and satellite constellation management. Starlink alone runs on software infrastructure comparable in scale to a major cloud platform. Owning the best AI coding tool in the world gives SpaceX a permanent, compounding advantage in software engineering productivity.",

      "Beyond internal use, the acquisition positions SpaceX to commercialize Cursor across the enterprise software market — a sector worth hundreds of billions of dollars annually. Under SpaceX ownership, Cursor could be bundled with Starlink's enterprise connectivity offering, creating a powerful suite of productivity tools for businesses operating in remote or underserved locations where Starlink is the primary internet provider.",

      "Elon Musk, in a post on X, described the acquisition as 'bringing the two most transformative technologies of our time — AI and space — under one roof.' He added that Cursor's team would remain in San Francisco and operate with full autonomy, with SpaceX providing compute resources through its growing AI infrastructure division.",

      "Reaction in the developer community has been mixed. Many Cursor users expressed concern about the acquisition, citing Musk's management style at X and Tesla as a source of uncertainty. Others pointed out that SpaceX's engineering culture is widely regarded as one of the most demanding and effective in the world, and that access to SpaceX-scale compute could dramatically accelerate Cursor's model capabilities.",

      "Regulators are expected to scrutinize the deal given SpaceX's growing market power across launch services, satellite internet, and now AI software. Antitrust questions — particularly around bundling Cursor with Starlink enterprise contracts — are likely to feature prominently in any regulatory review. Nevertheless, analysts expect the deal to close before the end of 2026, pending approvals.",

      "For the broader AI industry, the SpaceX-Cursor deal is a landmark moment. It confirms that AI developer tools are now among the most strategically valuable assets in technology — and that the race to own the interface between human intelligence and software is no longer confined to traditional software companies.",
    ],
  },
  {
    id: "abridge-nvidia",
    emoji: "🏥",
    category: "AI & Health",
    title: "Abridge Partners with NVIDIA, Expands Beyond Clinical Documentation",
    summary:
      "Abridge, the AI-powered medical scribe backed by $250 million in funding, is deepening its partnership with NVIDIA and moving into clinical decision support — signalling a new phase for AI in medicine.",
    date: "June 14, 2026",
    readTime: "5 min read",
    body: [
      "Abridge, the Pittsburgh-based health AI company founded in 2018, has announced a deepened strategic partnership with NVIDIA that will accelerate its expansion beyond clinical documentation into real-time clinical decision support, care gap detection, and population health analytics. The deal marks a pivotal moment in the company's evolution — and in the broader trajectory of AI in healthcare.",

      "Abridge built its reputation on a single, high-value problem: the documentation burden on physicians. Doctors in the United States spend an estimated two hours on paperwork for every one hour they spend with patients — a crisis that contributes directly to physician burnout, reduced patient throughput, and lower quality of care. Abridge's ambient AI listens to patient-physician conversations in real time and automatically generates structured clinical notes, saving physicians an average of two to three hours per day.",

      "The company's technology is built on a foundation of medical-grade large language models trained specifically on clinical language — a distinct advantage over general-purpose AI tools applied to healthcare settings. Its models are trained to understand the nuanced, abbreviated, and often non-standard language that clinicians use, and to structure that language into the precise format required by electronic health record (EHR) systems such as Epic.",

      "The NVIDIA partnership brings substantial hardware and software infrastructure to bear on Abridge's next chapter. Through NVIDIA's DGX Cloud platform and BioNeMo framework — which specializes in life-science AI model development — Abridge will accelerate training of new clinical models and deploy inference at scale across health system partners. NVIDIA's investment in Abridge signals its conviction that healthcare AI is one of the highest-value applications of its GPU infrastructure.",

      "The expansion into clinical decision support is where the story becomes genuinely transformative. Rather than simply transcribing and structuring what a physician says, Abridge's next-generation system will surface relevant clinical guidelines, flag potential drug interactions, identify care gaps based on patient history, and prompt clinicians with evidence-based recommendations — all in real time, embedded directly into the clinical workflow. This is AI functioning not as a scribe, but as a genuine cognitive partner for the physician.",

      "Abridge has raised approximately $250 million to date, with investors including UPMC Enterprises, Spark Capital, Bessemer Venture Partners, and CVS Health Ventures. Its health system partners now include some of the largest hospital networks in the United States, covering tens of thousands of physicians and millions of patient encounters annually.",

      "The commercial opportunity is enormous. The global healthcare AI market is projected to exceed $150 billion by 2030, with clinical documentation and decision support representing two of its largest and most immediately addressable segments. Abridge is well-positioned to capture a significant share of this market, with first-mover advantages in ambient clinical AI and deep integrations with Epic — the EHR system used by the majority of U.S. health systems.",

      "For investors and observers watching the intersection of AI and medicine, Abridge's trajectory is a case study in how focused, domain-specific AI companies can create durable competitive advantages. By solving a genuine, urgent pain point for clinicians — and solving it well — Abridge has built the trust and workflow integration that is extraordinarily difficult for later entrants to replicate. The NVIDIA partnership suggests the company is now ready to move from solving documentation to shaping the future of clinical care itself.",
    ],
  },
  {
    id: "spacex-ipo",
    emoji: "🚀",
    category: "IPO",
    title: "SpaceX IPO: The Most Anticipated Listing in a Generation",
    summary:
      "Elon Musk's SpaceX is weighing a potential public offering that could value the company at over $350 billion — making it the largest tech IPO in history if it proceeds.",
    date: "June 13, 2026",
    readTime: "5 min read",
    body: [
      "SpaceX, the private aerospace company founded by Elon Musk in 2002, is reportedly exploring a path to public markets that could result in the largest technology IPO in history. The company's valuation in private secondary markets has surged past $350 billion, driven by its dominance in commercial launch services, the rapid expansion of its Starlink satellite internet business, and ambitious plans for human Mars colonization.",

      "SpaceX is not a typical tech company. It manufactures and launches rockets, operates the world's largest commercial satellite constellation, and holds long-term contracts with NASA and the U.S. Department of Defense. Its Falcon 9 rocket is the most-launched orbital rocket in history, and the Starship system — the largest and most powerful rocket ever built — is central to NASA's Artemis lunar program and SpaceX's own interplanetary ambitions.",

      "The financial engine driving IPO speculation is Starlink. SpaceX's satellite internet service, which now serves over 5 million subscribers in more than 100 countries, is on track to generate over $10 billion in annual revenue. For many remote communities, rural households, and maritime operators, Starlink has become the only viable high-speed internet option. The business is growing rapidly and has recently turned cash-flow positive — a key milestone for any pre-IPO company.",

      "Elon Musk has historically resisted taking SpaceX public, arguing that the company's long-term mission — the colonization of Mars — requires a level of capital investment and risk tolerance incompatible with quarterly earnings pressure from public shareholders. He has repeatedly stated that he does not want SpaceX to face the same short-term market dynamics that complicated Tesla's early years.",

      "However, investor pressure and the company's growing capital needs may be shifting that calculus. Developing Starship at scale, building out the Starlink constellation to tens of thousands of satellites, and funding early Mars missions require hundreds of billions of dollars over the coming decades. A public listing would give SpaceX access to the deepest capital markets in the world.",

      "A partial IPO — listing only the Starlink subsidiary while keeping the rocket and spacecraft division private — has been widely discussed as a middle path. This structure would allow SpaceX to raise capital from public markets through Starlink's predictable subscription revenues, while shielding the more speculative, long-duration bets (Mars, Starship) from short-term investor scrutiny.",

      "For retail investors, a SpaceX or Starlink IPO would represent a once-in-a-generation opportunity to invest in what may be the defining technology company of the 21st century. But the risks are substantial: heavy capital expenditure, regulatory complexity across dozens of countries, geopolitical exposure, and the singular dependence on Elon Musk as a visionary leader — and the volatility that follows him — must all be carefully weighed.",

      "No official timeline has been announced. SpaceX has declined all public comment on IPO speculation. But Wall Street bankers, venture capitalists, and retail investors are watching closely. If and when SpaceX goes public, it will be a defining moment not just for the space industry, but for the future of human civilization.",
    ],
  },
  {
    id: "anthropic-ipo",
    emoji: "🤖",
    category: "IPO",
    title: "Anthropic Eyes IPO as AI Valuations Soar",
    summary:
      "Anthropic, the AI safety company behind Claude, is exploring a public offering as its valuation surpasses $60 billion.",
    date: "June 9, 2026",
    readTime: "3 min read",
    body: [
      "Anthropic, the AI safety company founded in 2021 by former OpenAI researchers Dario Amodei and Daniela Amodei, is reportedly in early discussions about a potential initial public offering (IPO). The company's valuation has surged past $60 billion following a series of high-profile investments from Amazon and Google.",

      "The company's flagship product, Claude, has gained significant traction in enterprise markets, competing directly with OpenAI's GPT-4 and Google's Gemini. Claude is widely praised for its safety-focused design, nuanced reasoning, and long-context capabilities — qualities that have attracted major corporate clients across finance, healthcare, and technology sectors.",

      "Anthropic's path to IPO is not without challenges. The company has consistently emphasized its 'public benefit corporation' structure and long-term safety mission over short-term profit — a stance that may require careful framing for public market investors focused on quarterly returns.",

      "Analysts estimate Anthropic's annualized revenue has crossed the $1 billion mark, driven largely by API access and enterprise contracts. If an IPO proceeds at the $60B+ valuation, it would rank among the largest tech listings of the decade.",

      "No timeline has been officially confirmed. Anthropic has declined to comment on IPO speculation, but sources close to the company suggest that 2026 or 2027 is the most likely window, contingent on broader market conditions and continued revenue growth.",

      "For retail investors, the key questions will be: How does Anthropic monetize safety-first AI at scale? Can it maintain its valuation premium over OpenAI? And how will it navigate the increasingly crowded frontier AI market?",
    ],
  },
  {
    id: "deepseek-funding",
    emoji: "🇨🇳",
    category: "AI & Markets",
    title: "DeepSeek Set to Raise $7.5 Billion as Chinese AI Rival Reshapes Global Markets",
    summary:
      "DeepSeek, the Chinese AI giant that shocked global markets in January 2025, is set to raise approximately $7.5 billion — cementing China's place at the frontier of artificial intelligence.",
    date: "June 9, 2026",
    readTime: "3 min read",
    body: [
      "DeepSeek, the Chinese AI giant, is set to raise approximately $7.5 billion in a new funding round — a move that underscores China's growing ambitions in the global artificial intelligence race.",

      "The company first captured the world's attention in January 2025, when the release of its high-performance AI model caught investors and technologists by surprise. Global markets reacted swiftly: tech stocks tumbled as investors reassessed the assumption that only a handful of well-funded Western companies could build frontier AI systems.",

      "DeepSeek was founded by Liang Wenfeng, a graduate of Zhejiang University in Hangzhou, China. At just 41 years old, he is now widely regarded as one of the richest men in China. Born and raised in a small village in Guangdong — the southern province bordering Hong Kong — he earned both his undergraduate and graduate degrees before embarking on a remarkable entrepreneurial journey.",

      "After graduating, Liang Wenfeng applied AI techniques to quantitative trading, building algorithmic systems that generated a substantial fortune. In 2021, he began acquiring Nvidia GPUs at scale to construct AI computing infrastructure for his trading operations. By 2023, he had pivoted that infrastructure toward a far more ambitious goal, launching the DeepSeek project.",

      "It is a testament to vision, timing, and execution that a young graduate from a small Guangdong village — armed with deep technical knowledge and a willingness to take bold risks — has built a company that shook global financial markets and forced the world to take Chinese AI seriously.",
    ],
  },
  {
    id: "li-ka-shing-autobiography",
    emoji: "📖",
    category: "People & Wealth",
    title: "Ka-Shing Li is promoting his autobiography in Chinese social media",
    summary:
      "Sir Ka-Shing Li, one of the richest men in Asia, is promoting his new autobiography 'I am not a superman' — a story of hardship, resilience, and extraordinary success that has gone viral on Weibo.",
    date: "June 9, 2026",
    readTime: "3 min read",
    body: [
      "Sir Ka-Shing Li, one of the wealthiest and most admired businessmen in Asia, is currently promoting his new autobiography titled 'I am not a superman' across Chinese social media platforms. His short videos have become a sensation on Weibo — known in English-speaking markets as a Chinese equivalent to Twitter/X — and have also spread widely on WeChat, China's dominant messaging and social platform.",

      "In his book, Sir Ka-Shing Li details with remarkable candor how the hardships of his childhood and early adult years shaped his character, values, and ultimately his career. Born into modest circumstances, he lost his father at a young age and was forced to leave school to support his family. These formative struggles, he argues, were not obstacles to success — they were the foundation of it.",

      "His life story has resonated deeply with millions of Chinese nationals, many of whom see in him a model of perseverance, humility, and long-term thinking. At a time when many young people across Hong Kong, mainland China, and the broader Chinese diaspora grapple with economic uncertainty, Li's message — that adversity builds character — has struck a powerful chord.",

      "Sir Ka-Shing Li was born in Chaozhou, Guangdong Province, China in 1928, making him 98 years old by Western reckoning. However, according to traditional Chinese customs of age counting, he is considered 99 years old. He will soon become a centenarian — a milestone that adds yet another dimension to his already extraordinary legacy.",

      "His longevity is itself a subject of fascination. In his videos, he appears sharp, thoughtful, and full of wisdom — attributes that have led many viewers to describe him as one of the wisest men alive. He speaks not only about business, but about life philosophy, family, and the importance of giving back to society. His charitable foundation has donated billions of dollars to education and healthcare causes.",

      "Sir Ka-Shing Li built his fortune through Cheung Kong Holdings and Hutchison Whampoa, with business interests spanning ports, retail, telecommunications, energy, and real estate across more than 50 countries. His net worth has consistently placed him among the top ten wealthiest individuals in Asia. Yet it is his humility — captured in the very title of his autobiography — that seems to have made the deepest impression on his audience. 'I am not a superman' is, in many ways, the most powerful thing one of Asia's greatest businessmen could say.",
    ],
  },
  {
    id: "openai-ipo",
    emoji: "💡",
    category: "IPO",
    title: "OpenAI IPO: What Investors Need to Know",
    summary:
      "OpenAI is weighing a path to going public with revenue exceeding $3 billion annually and a valuation north of $80 billion.",
    date: "June 9, 2026",
    readTime: "4 min read",
    body: [
      "OpenAI, the company behind ChatGPT and the GPT series of models, has been actively exploring a path to public markets. With annual revenue reportedly exceeding $3 billion and a private valuation north of $80 billion, a potential IPO would be one of the most anticipated tech listings in years.",

      "The company has undergone a significant structural transformation in recent years, converting parts of its non-profit governance model into a 'capped-profit' structure to attract institutional investment. This restructuring is seen as a prerequisite for a public offering, though it has drawn scrutiny from regulators and former employees alike.",

      "OpenAI's revenue is primarily driven by ChatGPT subscriptions (ChatGPT Plus at $20/month and ChatGPT Pro at $200/month), enterprise API access, and its partnership with Microsoft, which has invested over $13 billion in the company. Microsoft's deep integration of OpenAI technology into Azure and Office 365 provides a significant and stable revenue base.",

      "However, costs remain a major concern. Training and running frontier AI models is extraordinarily expensive — OpenAI is estimated to spend hundreds of millions of dollars annually on compute alone. Profitability at scale remains an open question, and investors will need to weigh growth potential against mounting infrastructure costs.",

      "Competition is intensifying. Google's Gemini, Anthropic's Claude, Meta's LLaMA, and a wave of open-source models are all competing for the same enterprise and consumer markets. OpenAI's first-mover advantage remains strong, but maintaining it will require continuous and costly model development.",

      "For prospective investors, the IPO presents a rare opportunity to own a stake in the company widely credited with igniting the modern AI era. But the risks — regulatory uncertainty, governance history, and the economics of frontier AI — are equally significant. As with any high-profile tech IPO, due diligence will be essential.",
    ],
  },
];
