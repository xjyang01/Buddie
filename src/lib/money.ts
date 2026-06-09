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
