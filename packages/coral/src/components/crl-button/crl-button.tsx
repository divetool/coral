import { Component, h, Prop } from '@stencil/core';
import { clsx } from 'clsx';
import { crlButton } from './crl-button.css';

@Component({
  tag: 'crl-button',
  styleUrl: 'crl-button.css.ts',
  shadow: false,
})
export class CrlButton {
  /**
   * The variant of button to be used
   */
  @Prop() variant: string;

  render() {
    return (
      <button class={clsx(crlButton)}>
        <slot />
      </button>
    );
  }
}
