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
