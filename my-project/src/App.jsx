


function App() {
  

  return (
    <div className=" bg-black w-full h-[100vh] text-white flex justify-center items-center">
      <div className=" bg-white w-[800px] h-[600px] rounded-[10px]  flex justify-center items-start flex-col">
        <button  className=" text-black w-[200px] h-[30px] rounded-[8px] bg-green-500 mb-[10px] flex pl-4 gap-3 font-bold text-center items-center"><span className=" w-[20px] h-[20px] flex justify-center items-center text-white rounded-[50px]  bg-blue-800">1</span>choose title</button>
        <button  className=" text-black w-[200px] h-[30px] rounded-[8px] bg-green-500 mb-[10px] flex pl-4 gap-3 font-bold text-center items-center"><span className=" w-[20px] h-[20px] flex justify-center items-center text-white rounded-[50px]  bg-blue-800">2</span>choose description</button>
        <button  className=" text-black w-[200px] h-[30px] rounded-[8px] bg-green-500 mb-[10px] flex pl-4 gap-3 font-bold text-center items-center "><span className=" w-[20px] h-[20px] flex justify-center items-center text-white rounded-[50px]  bg-blue-800">3</span>confirm data</button>
      </div>
      
    </div>
  );
};

export default App;
