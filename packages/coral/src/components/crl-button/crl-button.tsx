import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'crl-button',
  styleUrl: 'crl-button.scss',
  shadow: true,
})
export class CrlButton {
  /**
   * The variant of button to be used
   */
  @Prop() variant: string;

  render() {
    return (
      <button class="crl-button">
        <slot />
      </button>
    );
  }
}
