import React, {useState, useCallback} from 'react';



function useHTTP(applyData){

const [isLoading,setIsLoading] = useState(false);
const [error,setIsError] = useState(null);



const fetchData = useCallback(async (request_object,applyData) =>
{
    try {
    
        setIsLoading(true);
        setIsError(null);
        console.log(request_object);
        const JSON_stringified_request = JSON.stringify(request_object.body);
        console.log(JSON_stringified_request);
        const response = await fetch(request_object.url,
            {
                method: request_object.method, 
                headers : request_object.headers,
                body: request_object.method === "POST" && request_object.body ?
                JSON.stringify(request_object.body) : undefined,
            }
            );
        console.log(response);
        if (!response.ok) {
            throw new Error("Request failed!");
        }    

        const request_data = await response.json();
        console.log("Request_data");
        console.log(request_data);
        setIsError(null);
        setIsLoading(false);
        console.log("Code successfully completed up until this point...");
        applyData(request_data);//Error here, specifically with the object passed to applyData:
        //This should be the original body, not the POST request object, which by default is empty
        }
    catch (error)
    {
        //throw new Error("Something went wrong");
        setIsError(error.message || "Something went wrong!");
    }
    setIsLoading(false);
},[]); 

    return { 
        isLoading, 
        error: error,
        fetchData}
    
}



export default useHTTP;