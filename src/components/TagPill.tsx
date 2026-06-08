import Link from "next/link";

export default function TagPill({ tag, href }: { tag: string; href?: string }) {
  const style = {
    background: "var(--primary-light)",
    color: "#92400e",
  };
  const className =
    "text-xs px-2.5 py-1 rounded-full font-medium cursor-pointer hover:opacity-80 transition inline-block";

  if (href) {
    return (
      <Link href={href} className={className} style={style}>
        #{tag}
      </Link>
    );
  }
  return (
    <Link href={`/search?q=${tag}`} className={className} style={style}>
      #{tag}
    </Link>
  );
}
