const PromiseComponent = () => {
  const promiseFnc = () => {
    const respose = new Promise((resole, reject) => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
          resole(data);
        });
    });

    respose.then((data) => {
      console.log(data);
    });
  };

  return (
    <div>
      PromiseComponent
      <br />
      <button onClick={() => promiseFnc()}>PromiseComponent</button>
    </div>
  );
};

export default PromiseComponent;
