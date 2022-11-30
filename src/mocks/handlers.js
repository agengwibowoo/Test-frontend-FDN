import { rest } from 'msw';
import products from './getProduct/products.json';

export const handlers = [
  rest.get('https://tangy-worlds-drive-103-95-41-46.loca.lt/products', (req, res, ctx) => {

    // Check if the user is authenticated in this session

    return res(ctx.delay(1000), ctx.status(200), ctx.json(products));
  })
];
