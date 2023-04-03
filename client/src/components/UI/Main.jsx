import "./Main.css";

const Main = ({children}) => {
  return (
    <main>
      <div className="main-container">{children}</div>
    </main>
  );
};

export default Main;
