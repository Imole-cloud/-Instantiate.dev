import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Server, Database, Globe } from "lucide-react";

export function Deployments() {
  const { data: deployments } = useQuery({
    queryKey: ["/api/deployments"],
  });

  const getProviderIcon = (provider: string, size = "text-lg") => {
    switch (provider) {
      case "aws":
        return <Server className={`text-orange-500 ${size}`} />;
      case "azure":
        return <Database className={`text-blue-500 ${size}`} />;
      case "gcp":
        return <Globe className={`text-red-500 ${size}`} />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "running":
        return <Badge className="bg-primary/10 text-primary">Running</Badge>;
      case "deploying":
        return <Badge className="bg-amber-500/10 text-amber-500">Deploying</Badge>;
      case "failed":
        return <Badge className="bg-red-500/10 text-red-500">Failed</Badge>;
      default:
        return <Badge className="bg-slate-500/10 text-slate-500">Unknown</Badge>;
    }
  };

  const getProviderColor = (provider: string) => {
    switch (provider) {
      case "aws":
        return "text-orange-500";
      case "azure":
        return "text-blue-500";
      case "gcp":
        return "text-red-500";
      default:
        return "text-slate-500";
    }
  };

  return (
    <div className="space-y-6">
      {/* Simple Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-semibold text-white">{deployments?.length || 0}</p>
              <p className="text-sm text-slate-400">Active Deployments</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-semibold text-green-400">
                {deployments?.filter((d: any) => d.status === 'running').length || 0}
              </p>
              <p className="text-sm text-slate-400">Running</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-semibold text-cyan-400">3</p>
              <p className="text-sm text-slate-400">Providers</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Deployments List */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader className="pb-4">
          <CardTitle className="text-white text-lg">Deployments</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-3">
            {deployments?.map((deployment: any) => (
              <div key={deployment.id} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center">
                    {getProviderIcon(deployment.provider, "w-4 h-4")}
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white">{deployment.name}</h3>
                    <p className="text-xs text-slate-400">
                      {deployment.provider.toUpperCase()} • {deployment.region}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  {getStatusBadge(deployment.status)}
                  <span className="text-xs text-slate-500">
                    {new Date(deployment.lastDeployedAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            )) || (
              <div className="text-center py-8 text-slate-400">
                <Server className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">No deployments found</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
