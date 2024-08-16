const express = require('express');
const { swaggerUi, specs } = require('./swagger');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/tasks');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use('/tasks', taskRoutes);


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});