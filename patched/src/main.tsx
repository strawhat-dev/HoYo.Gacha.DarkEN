/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable generator-star-spacing */
/* eslint-disable space-before-function-paren */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import App from '@/App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Command } from '@tauri-apps/api/shell';

const HAN_REGEX = /[\u4E00-\u9fff]/;

const StaticTR = [
  { zh: '、', en: ', ' },
  { zh: '设置', en: '• • •' },
  { zh: '主页', en: 'Home' },
  { zh: '抽卡', en: 'Gacha' },
  { zh: '跃迁', en: 'Warps' },
  { zh: '祈愿', en: 'Wishes' },
  { zh: '调频', en: 'Signals' },
  { zh: '协议', en: 'License' },
  { zh: '原神', en: 'Genshin Impact' },
  { zh: '绝区零', en: 'Zenless Zone Zero' },
  { zh: '崩坏：星穹铁道', en: 'Honkai: Star Rail' },
] as const;

const translate = async (str: string) => {
  if (!HAN_REGEX.test(str = StaticTR.reduce((acc, { zh, en }) => acc.replaceAll(zh, en), str))) return str;
  const { stdout, code } = await new Command('trans', ['-b', 'zh:en', str]).execute();
  return code === 0 ? stdout : str;
};

const Root = () => {
  const mapping = React.useRef(new Map<string, string>());

  const transform = async () => (Promise.all(
    walk(document.body).map(async (node) => {
      if (!mapping.current.has(node.textContent!)) {
        const result = await translate(node.textContent!);
        mapping.current.set(node.textContent!, result.normalize('NFKC'));
      }

      const textContent = mapping.current.get(node.textContent!);
      return Object.assign(node, { textContent });
    })
  ));

  React.useEffect(() => {
    (globalThis as any).DarkReader?.enable();
    const observer = new MutationObserver(transform);
    observer.observe(document.body, { subtree: true, childList: true });
    return () => observer.disconnect();
  }, []);

  return <App />;
};

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

function* walk(node: Node) {
  const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    if (walker.currentNode.textContent?.trim()) {
      yield walker.currentNode;
    }
  }
}
