import React,{useState} from 'react';

const TextExtractor = ({resume, jobDescription}) => {


const[result, setResult] = useState('');

const fetchResult = async (resume, jobDescription) => {
  const response = await fetch('http://localhost:5000/gemini/result', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ resumeText: resume, jobDescription }),
  });
  const data = await response.json();
  console.log(data);
  setResult(data.result);
  return data;
}

return (
  <div>
    <h2>Result</h2>
    <button onClick={() => fetchResult(resume, jobDescription)}>Result</button>
    <pre>{JSON.stringify(result, null, 2)}</pre>
  </div>
);

}
  export default TextExtractor;
  