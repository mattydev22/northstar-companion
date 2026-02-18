export interface Credential {
  id: string;
  serviceName: string;
  username: string;
  icon: string;
}

export const INITIAL_CREDENTIALS: Credential[] = [
  { id: "1", serviceName: "GitHub", username: "matthew@northstar.dev", icon: "⌥" },
  { id: "2", serviceName: "Gmail", username: "m.owen@gmail.com", icon: "@" },
  { id: "3", serviceName: "AWS", username: "admin / IAM root", icon: "▲" },
  { id: "4", serviceName: "Cloudflare", username: "matthew@northstar.dev", icon: "◈" },
  { id: "5", serviceName: "Figma", username: "matthew@northstar.dev", icon: "✦" },
  { id: "6", serviceName: "Vercel", username: "matthew@northstar.dev", icon: "◉" },
  { id: "7", serviceName: "Stripe", username: "matthew@northstar.dev", icon: "⬡" },
  { id: "8", serviceName: "1Password", username: "matthew@northstar.dev", icon: "$" },
];

export const ICON_OPTIONS = [
  { char: "⌥", label: "Key" },
  { char: "@", label: "Email" },
  { char: "▲", label: "Cloud" },
  { char: "◈", label: "Shield" },
  { char: "✦", label: "Star" },
  { char: "◉", label: "Target" },
  { char: "⬡", label: "Hex" },
  { char: "$", label: "Finance" },
  { char: "✉", label: "Mail" },
  { char: "⚙", label: "Config" },
  { char: "◆", label: "Diamond" },
  { char: "⬤", label: "Circle" },
];
