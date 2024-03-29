import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@acme/ui";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",
  argTypes: {
    children: { control: "text" },
  },
};

export default meta;

export const Primary: StoryObj<typeof Button> = {
  args: {
    children: "Click Me",
  },
};
