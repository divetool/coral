import { h } from '@stencil/core';
import { CrlButton } from '@divetool/coral/dist/components/crl-button';

export default {
  title: 'CrlButton',
  component: CrlButton,
};

const Template = (args) => <crl-button {...args}></crl-button>;

export const Primary = Template.bind({});
Primary.args = { first: 'Hello', last: 'World' };
