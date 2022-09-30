import { defineCustomElements } from '@divetool/coral/loader';
import { renderVdom } from '@stencil/core/internal/client';

defineCustomElements();

const stencilWrapper = (storyFn, context) => {
  const host = document.createElement('div');
  renderVdom(
    {
      $ancestorComponent$: undefined,
      $flags$: 0,
      $modeName$: undefined,
      $cmpMeta$: {
        $flags$: 0,
        $tagName$: 'div',
      },
      $hostElement$: host,
    },
    storyFn(context)
  );
  return host.children[0];
};

export const decorators = [stencilWrapper];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
