import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, CheckCircle, Server, Database, Globe } from "lucide-react";

export function Monitoring() {
  const monitoringData = [
    {
      provider: "AWS",
      icon: Server,
      color: "text-orange-500",
      metrics: {
        uptime: "99.9%",
        responseTime: "145ms",
      }
    },
    {
      provider: "Azure",
      icon: Database,
      color: "text-blue-500", 
      metrics: {
        uptime: "99.7%",
        responseTime: "189ms",
      }
    },
    {
      provider: "GCP",
      icon: Globe,
      color: "text-red-500",
      metrics: {
        uptime: "100%",
        responseTime: "98ms",
      }
    }
  ];

  return (
    <div className="space-y-6">
      {/* Simple Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-xl font-semibold text-green-400">99.8%</p>
              <p className="text-sm text-slate-400">Uptime</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-xl font-semibold text-cyan-400">144ms</p>
              <p className="text-sm text-slate-400">Response Time</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-xl font-semibold text-white">74.5k</p>
              <p className="text-sm text-slate-400">Requests/min</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-xl font-semibold text-red-400">0.01%</p>
              <p className="text-sm text-slate-400">Error Rate</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Provider Status */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader className="pb-4">
          <CardTitle className="text-white text-lg">Provider Status</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-3">
            {monitoringData.map((provider) => (
              <div key={provider.provider} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center">
                    <provider.icon className={`w-4 h-4 ${provider.color}`} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white">{provider.provider}</h3>
                    <p className="text-xs text-slate-400">
                      {provider.metrics.uptime} uptime • {provider.metrics.responseTime} avg
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-xs text-green-400">Healthy</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}