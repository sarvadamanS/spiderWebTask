const EllipseOne = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "100px",
          left: "800px",
          height: "500px",
          width: "500px",
          background: "linear-gradient(180deg, #FF00FF 0%, #00EEC5 100%)",
          //   borderRadius: "50%",
          zIndex: "-1",
          filter: "blur(150px)",
        }}
      ></div>
    </>
  );
};
const EllipseTwo = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "600px",
          left: "100px",
          height: "500px",
          width: "500px",
          background: "linear-gradient(180deg, #8f00ff 0%, #00c8ff 100%)",
          //   borderRadius: "50%",
          zIndex: "-1",
          filter: "blur(150px)",
        }}
      ></div>
    </>
  );
};
export { EllipseOne, EllipseTwo };
