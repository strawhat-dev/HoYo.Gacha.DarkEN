/* eslint-disable semi */
/* eslint-disable space-before-function-paren */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { Command } from '@tauri-apps/api/shell';
import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import queryClient from '@/query-client';
import router from '@/router';
import Theme from '@/theme';

const HAN_REGEX = /[\u4E00-\u9fff]/;

const walk = (root: Node) => {
  const nodes: Node[] = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) walker.currentNode.textContent?.trim() && nodes.push(walker.currentNode);
  return nodes;
};

const translate = async (text: string) => {
  if (!HAN_REGEX.test(text = text.replaceAll('：', ': '))) return text;
  const { stdout, code } = await new Command('trans', ['-b', 'zh:en', text]).execute();
  return code === 0 ? stdout.trim() : text;
};

export default function App() {
  const mapping = React.useRef(new Map());

  const transform = async () => {
    for (const node of walk(document.body)) {
      if (!node.textContent) continue;
      if (!mapping.current.has(node.textContent)) {
        const result = await translate(node.textContent);
        mapping.current.set(node.textContent, result);
      }

      const textContent = mapping.current.get(node.textContent);
      Object.assign(node, { textContent });
    }
  };

  // HACK: Disable context menu in production
  React.useEffect(() => {
    const observer = new MutationObserver(transform);
    observer.observe(document.body, { subtree: true, childList: true });
    const listener = (evt: Event) => evt.preventDefault();
    import.meta.env.PROD && document.addEventListener('contextmenu', listener);
    return () => {
      observer.disconnect();
      document.removeEventListener('contextmenu', listener);
    };
  }, []);

  return (
    <Theme>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools position="bottom" />
      </QueryClientProvider>
    </Theme>
  );
}
