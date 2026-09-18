import {useState} from 'react';

function Counter(){
    const [count, setCount] = useState<number>(0);

    function changeCount(type: "inc" | "dec"):void{

        switch(type){

            case "inc":{

                setCount((prev) => prev+1);
                break;
            }
            case "dec":{

                setCount((prev) => prev-1);
                break;
            }
            default:
                throw new Error("Invalid input");
                
                
        }

    }
    return(
        <>
          <div className='flex items-center gap-4 p-4'>
                
               <button onClick={()=>changeCount("inc")} 
                  className="bg-gray-200 hover: bg-gray-300 px-2 py-4 rounded-md">
                    +
                </button>

                <span className='text-xl'>{count}</span>

              <button onClick={()=>changeCount("dec")}
                 className="bg-gray-200 hover: bg-gray-300 px-2 py-4 rounded-md">
                    -
              </button>
          </div>
          
        </>
    )
}

export default Counter;