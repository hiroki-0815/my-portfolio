import React from "react";

interface Props {
  component: React.ElementType;
}

const TechIcon = ({ component }: Props) => {
  const Component = component;
  return <Component className="size-10" />;
};

export default TechIcon;
