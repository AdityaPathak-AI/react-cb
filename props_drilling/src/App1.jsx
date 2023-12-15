const App1 = () => {
  return (
    <div>
      <Show />
    </div>
  );
};
export default App1;

const Show = () => {
  return (
    <div>
      <h1>Show Component Called...</h1>
      <Wish />
    </div>
  );
};

const Wish = () => {
  return (
    <div>
      <h1>Wish Component Called...</h1>
      <Demo />
    </div>
  );
};

const Demo = () => {
  return (
    <div>
      <h1>Demo Component Called...</h1>
      <Display />
    </div>
  );
};

const Display = () => {
  return (
    <div>
      <h1>Display Component Called...</h1>
    </div>
  );
};
