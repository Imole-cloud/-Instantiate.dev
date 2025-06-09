import { Handler, HandlerResponse } from '@netlify/functions';
import { registerRoutes } from '../../server/routes';
import express from 'express';

const app = express();

let routesInitialized = false;

async function initializeRoutes() {
  if (!routesInitialized) {
    await registerRoutes(app);
    routesInitialized = true;
  }
}

export const handler: Handler = async (event, context) => {
  await initializeRoutes();
  
  // Handle API requests through Express app
  return new Promise<HandlerResponse>((resolve, reject) => {
    const req = {
      method: event.httpMethod,
      url: event.path,
      headers: event.headers,
      body: event.body
    };
    
    const res = {
      statusCode: 200,
      headers: {},
      body: '',
      status: (code: number) => { res.statusCode = code; return res; },
      json: (data: any) => { res.body = JSON.stringify(data); return res; },
      send: (data: string) => { res.body = data; return res; },
      setHeader: (key: string, value: string) => { res.headers[key] = value; }
    };

    try {
      app(req as any, res as any);
      resolve({
        statusCode: res.statusCode,
        headers: res.headers,
        body: res.body
      });
    } catch (error) {
      resolve({
        statusCode: 500,
        headers: {},
        body: JSON.stringify({ error: 'Internal server error' })
      });
    }
  });
};
