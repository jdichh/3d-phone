import "./loading.css";

const Loading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center absolute top-0 left-0">
      <div id="loading-container">
        <div id="loading-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
