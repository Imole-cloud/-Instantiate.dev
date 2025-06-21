import serverless from 'serverless-http';
import express from 'express';
import cors from 'cors';

// Configuration will be set via environment variables in Netlify
const app = express();

app.use(cors({
  origin: true,
  credentials: true
}));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'production'
  });
});

// Stats endpoint for dashboard
app.get('/api/stats', (req, res) => {
  res.json({
    deployments: 3,
    providers: 3,
    cost: 847,
    uptime: 99.8
  });
});

// Deployments endpoint for dashboard
app.get('/api/deployments', (req, res) => {
  res.json([
    {
      id: 1,
      name: "Production API",
      provider: "azure",
      region: "East US",
      status: "running",
      lastDeployedAt: new Date().toISOString(),
      cost: 25
    },
    {
      id: 2,
      name: "Frontend App", 
      provider: "aws",
      region: "US West 2",
      status: "running",
      lastDeployedAt: new Date().toISOString(),
      cost: 15
    },
    {
      id: 3,
      name: "Database",
      provider: "gcp", 
      region: "us-central1",
      status: "running",
      lastDeployedAt: new Date().toISOString(),
      cost: 12
    }
  ]);
});

// Catch-all for API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({ error: 'API endpoint not found' });
});

export const handler = serverless(app);