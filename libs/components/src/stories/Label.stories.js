// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
import { Label } from '../atoms';

export default {
    title: 'Example/Label',
    component: Label,
    tags: ['autodocs'],
};

export const Small = {
    args: {
        children: 'Label Small',
        size: 'small',
    },
};

export const Medium = {
    args: {
        children: 'Label Medium',
        size: 'medium',
    },
};

export const Large = {
    args: {
        children: 'Label Large',
        size: 'large',
    },
};
