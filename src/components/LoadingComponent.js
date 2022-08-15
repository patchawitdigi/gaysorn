function LoadingComponent() {
    return (
    <>
     <div className="px-4 py-5 my-5 text-center">
    <img className="d-block mx-auto mb-4" src="../WORKSTYLES-LOGO.svg" alt="" width="200" />
    <div className="text-center">
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
  </div>
    </>
    );
  }
  
  export default LoadingComponent;