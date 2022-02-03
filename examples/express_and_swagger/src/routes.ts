import { Express, Request, Response } from 'express';

export function routes(app: Express) {
  /**
   * @openapi
   * '/':
   *  get:
   *     tags:
   *     - Healthcheck
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
  app.get('/', (req: Request, res: Response) => res.sendStatus(200));
}
