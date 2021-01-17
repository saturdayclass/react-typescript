import { ChildFC } from './Child';

const Parent = () => {
  return (
    <ChildFC color="red" onClick={() => console.log('clicked')}>
      Hi!
    </ChildFC>
  );
};

export default Parent;
