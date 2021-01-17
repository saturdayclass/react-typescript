const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return <input type="text" onChange={onChange} />;
};

export default EventComponent;
