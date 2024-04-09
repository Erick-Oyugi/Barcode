import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet'
import routes from './routes/router.js'
import cors from 'cors';



const app = express();
// For parsing application/json
app.use(express.json());
app.use(cors())


app.use(
    helmet.contentSecurityPolicy({
      useDefaults: true,
      directives: {
        "img-src": ["'self'", "https: data:"],
        'script-src': ["'self'", "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"] ,
        'script-src-elem':  ["'self'", "https://cdn.jsdelivr.net"]
      }
    })
  )
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes)
app.set('view engine', 'hbs')







export default app