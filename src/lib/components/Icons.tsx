import { Component } from "solid-js";
import { Dynamic } from "solid-js/web";

type IconComponentProps = {
  size?: number;
  color?: string;
};

type IconProps = IconComponentProps & {
  icon: Component<IconComponentProps>;
};

const Icon = (props: IconProps) => {
  return (
    <Dynamic
      component={props.icon}
      size={props.size ?? 24}
      color={props.color}
    />
  );
};

export default Icon;
