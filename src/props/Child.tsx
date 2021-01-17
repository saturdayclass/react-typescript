interface ChildProps {
  color: String;
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click Me!</button>
    </div>
  );
};

// Another way to use typescript in props
export const ChildFC: React.FC<ChildProps> = ({ color }) => {
  return <div>{color}</div>;
};
