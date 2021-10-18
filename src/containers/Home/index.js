const React = require("react");
export default () => {
  return (
    <div>
      <button
        onClick={() => {
          alert("click1");
        }}
      >
        点击我
      </button>
    </div>
  );
};
