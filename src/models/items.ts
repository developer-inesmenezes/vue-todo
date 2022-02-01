declare const crypto: Crypto & { randomUUID(): string };

export interface TodoItem {
  id: string;
  title: string;
  done: boolean;
  description: string;
  createdAt: Date;
}
