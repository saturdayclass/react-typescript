interface ChildProps {
  color: String;
}

export const Child = ({ color }: ChildProps) => {
  return <div>{color}</div>;
};
