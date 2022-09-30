import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'crl-button',
  styleUrl: 'crl-button.scss',
  shadow: true,
})
export class CrlButton {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return (
      (this.first || '') +
      (this.middle ? ` ${this.middle}` : '') +
      (this.last ? ` ${this.last}` : '')
    );
  }

  render() {
    return <div>Hello, Worldessss! I'm {this.getText()}</div>;
  }
}
