// import React, { useState } from 'react'

// const Api = () => {

//     const [data, setData] = useState('');


//     const fetchData = async () => {
//         try {
//             let response =  await fetch(`https://image.pollinations.ai/prompt/${data}`)
//             let data = await  response.json();
//             console.log(data);

//         } catch (error) {
//             console.log(error);

//         }
//     }




//     return (
//         <div>
//             <h1>Hello</h1>

//             <input type="text" placeholder='Enter the text you want to see....'
//                 value={data}
//                 onChange={(e) => {
//                     setData(e.target.value);
//                 }}

//             />

//             <button onClick={() => {
//                 fetchData();
//             }}> Generate </button>

//             {/* <h2>{data}</h2> */}

//         </div>
//     )
// }

// export default Api


// import React, { useState } from 'react';

// const Api = () => {
//     const [data, setData] = useState('');  // Input data
//     const [result, setResult] = useState(null);  // Fetched result data

//     const fetchData = async () => {
//         try {
//             const response = await fetch(`https://image.pollinations.ai/prompt/${data}`);
//             // const responseData = await response.json();
//             console.log(response);

//             // let newResponse = await fetch(response.url);
//             // console.log(newResponse);

//             setResult(response);  // Store fetched data in result state

//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     };

//     return (
//         <div>
//             <h1>Hello</h1>

//             <input
//                 type="text"
//                 placeholder="Enter the text you want to see...."
//                 value={data}
//                 onChange={(e) => setData(e.target.value)}
//             />

//             <button onClick={fetchData}>Generate</button>

//             {/* Display the fetched data */}
//             {result && <h2>{JSON.stringify(result)}</h2>}

//             {/* { result && <h1> {result}</h1>} */}
//         </div>
//     );
// };

// export default Api;


import React, { useState } from 'react';
import "./Api.css"
import astronaut from "../assets/astronaut.jpg";

const Api = () => {
    const [data, setData] = useState('');  // Input data
    const [imageUrl, setImageUrl] = useState(null);  // URL for image content

    const fetchData = async () => {
        try {
            const response = await fetch(`https://image.pollinations.ai/prompt/${data}`);

            if (response && response.url) {
                setImageUrl(response.url);  // Set image URL to display
            } else {
                console.error("URL not found in the response");
            }

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div className='main'>

            <h1 className='heading'>Hello There , Start Generating Now! <span > Try... </span> </h1>

            <div className='input-div'>




                <input
                    type="text"
                    placeholder="Enter the text you want to see...."
                    value={data}
                    onChange={(e) => setData(e.target.value)}

                    className='input'
                />

                <button onClick={fetchData} className='btn'>Generate</button>

            </div>



            {/* Display the image if URL is present */}

            <div className='img-div'>


                {imageUrl && <img src={imageUrl} alt="Generated content" style={{ width: '500px', marginTop: '20px' }} />}

                {imageUrl === null && <img src={astronaut} style={{ width: '500px', marginTop: '20px' }} />}


            </div>




        </div>
    );
};

export default Api;
