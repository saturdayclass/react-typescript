interface ChildProps {
  color: String;
}

export const Child = ({ color }: ChildProps) => {
  return <div>{color}</div>;
};

// Another way to use typescript in props
export const ChildFC: React.FC<ChildProps> = ({ color }) => {
  return <div>{color}</div>;
};
