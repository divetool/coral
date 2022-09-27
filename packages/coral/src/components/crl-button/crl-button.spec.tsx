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
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </crl-button>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [CrlButton],
      html: `<crl-button first="Stencil" last="'Don't call me a framework' JS"></crl-button>`,
    });
    expect(root).toEqualHtml(`
      <crl-button first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </crl-button>
    `);
  });
});
