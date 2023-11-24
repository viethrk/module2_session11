const CallBackComponent = () => {
  const demo = (callback) => {
    let dataAPI = [];
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        dataAPI = data;
        callback(data);
      });

    if (dataAPI.length == 0) {
      console.log("No respose");
    } else {
      console.log("Has response");
    }
  };

  const callbackFnc = (data) => {
    console.log(data);
  };

  return (
    <div>
      CallBackComponent
      <br />
      <button onClick={() => demo(callbackFnc)}>Callback</button>
    </div>
  );
};

export default CallBackComponent;
