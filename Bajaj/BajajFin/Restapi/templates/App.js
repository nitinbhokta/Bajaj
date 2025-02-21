import React, { useState } from "react";
import axios from "axios";

function App() {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");

    const handleSubmit = async () => {
        try {
            const res = await axios.post("https://your-api.onrender.com/bfhl", {
                data: JSON.parse(input),
            });
            setResponse(res.data);
            setError("");
        } catch (err) {
            setError("Invalid input format");
        }
    };

    return (
        <div>
            <h1>BFHL API Tester</h1>
            <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter JSON here...' />
            <button onClick={handleSubmit}>Submit</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
        </div>
    );
}

export default App;
