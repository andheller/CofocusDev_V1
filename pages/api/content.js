import Cors from 'cors';

const cors = Cors({
  methods: ['GET', 'HEAD']
});

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
