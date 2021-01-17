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
// When we added React.FC we can added childern component
export const ChildFC: React.FC<ChildProps> = ({ color, children }) => {
  return (
    <div>
      {color}
      {children}
    </div>
  );
};
