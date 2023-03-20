const dotenv = require('dotenv');
const Application = require('./server/Application');
const usersRouter = require('./src/users-routers');
const jsonParser = require('./server/parseJSON');

dotenv.config();

const PORT = process.env.PORT || 5050;

const app = new Application();

app.use(jsonParser);

app.addRouter(usersRouter);

app.listen(PORT, () => console.log(`Server startedon port: ${PORT}`));


