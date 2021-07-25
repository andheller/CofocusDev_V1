import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS']
  })
);

export default function content(req, res) {
  res.status(200).json({
    component: 'header',
    tagline: 'Hello World!',
    array: [
      { component: 'header', tagline: 'test 1' },
      { component: 'hero', tagline: 'test 2' }
    ]
  });
}
