import { Express, Request, Response } from 'express';

export function routes(app: Express) {
  /**
   * @openapi
   * '/':
   *  get:
   *     tags:
   *     - GET Request
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
  app.get('/', (req: Request, res: Response) => res.sendStatus(200));

  /**
   * @openapi
   * '/':
   *  post:
   *     tags:
   *     - POST Request
   *     summary: post request
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateUserInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateUserResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
  app.post('/', (req: Request, res: Response) => res.sendStatus(200));

  /**
   * @openapi
   * '/':
   *  put:
   *     tags:
   *     - PUT Request
   *     summary: PUT Request
   *     parameters:
   *      - name: productId
   *        in: path
   *        description: The id of the product
   *        required: true
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *          application/json:
   *           schema:
   *              $ref: '#/components/schema/Product'
   *       404:
   *         description: Product not found
   */
  app.put('/', (req: Request, res: Response) => res.sendStatus(200));
}
