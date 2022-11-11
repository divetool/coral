import { newSpecPage } from '@stencil/core/testing';
import { CrlButton } from './crl-button';

describe('crl-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [CrlButton],
      html: '<crl-button></crl-button>',
    });
    expect(root).toEqualHtml(`
      <crl-button>
        <mock:shadow-root>
          <button class="crl-button">
            <slot></slot>
          </button>
        </mock:shadow-root>
      </crl-button>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [CrlButton],
      html: `<crl-button>Hello, World!</crl-button>`,
    });
    expect(root).toEqualHtml(`
      <crl-button>
        <mock:shadow-root>
          <button class="crl-button">
            <slot></slot>
          </button>
        </mock:shadow-root>
        Hello, World!
      </crl-button>
    `);
  });
});
