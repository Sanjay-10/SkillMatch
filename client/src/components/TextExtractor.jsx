const TextExtractor = ({ text }) => (
    <div>
      <h1>Extracted Text</h1>
      <textarea value={text} readOnly rows={10} cols={50}></textarea>
    </div>
  );
  
  export default TextExtractor;
  