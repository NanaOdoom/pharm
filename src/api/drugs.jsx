import axios from "axios";

export default axios.create(
    {baseURL: "http://localhost:3500"}
)

// Run json-server on port 3500