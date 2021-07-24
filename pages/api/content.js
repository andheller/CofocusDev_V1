// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function content(req, res) {
  res
    .status(200)
    .json({
      component: 'header',
      tagline: 'Hello World!',
      array: [{ component: 'header',tagline:'test 1' }, { component: 'hero', tagline:'test 2 }]
    });
}
