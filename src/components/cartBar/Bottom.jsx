function Bottom() {
    return (
      <div>
        <div className="border-b opacity-20 w-screen absolute"></div>
  
        <div className="m-4 flex justify-evenly">
          <button className="px-6 py-1 border rounded-full text-xs">Cart</button>
          <button className="px-6 py-1 border rounded-full text-xs">
            Checkout
          </button>
          <button className="px-6 py-1 border rounded-full text-xs">
            Comparison
          </button>
        </div>
      </div>
    );
  }
  
  export { Bottom };