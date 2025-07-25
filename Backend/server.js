import app from "./src/app.js";
import 'dotenv/config';


const PORT = 5500;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
