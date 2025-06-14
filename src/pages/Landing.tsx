import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold">&lt;/&gt;</span>
          <span className="text-xl font-bold">Instanti8.dev</span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-gray-300 hover:text-white">Home</a>
          <a href="#" className="text-gray-300 hover:text-white">Pricing</a>
          <div className="flex items-center space-x-2 text-gray-300">
            <span>⭐ 63.7k</span>
            <button className="text-gray-300 hover:text-white">Sign up</button>
            <button 
              onClick={() => navigate('/dashboard')}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded font-medium"
            >
              Start
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6">
            Infrastructure as{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Code Simplified
            </span>
          </h1>
          <p className="text-xl mb-8 text-slate-300 max-w-4xl mx-auto">
            Instanti8.dev transforms complex infrastructure provisioning into simple, declarative 
            code. Define once, deploy everywhere - seamlessly orchestrate resources across AWS, 
            Azure, and GCP with intelligent automation, version control, and collaborative workflows.
          </p>
          
          <div className="flex justify-center space-x-4 mb-16">
            <button 
              onClick={() => navigate('/dashboard')}
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 text-lg"
            >
              Start
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 text-lg">
              Sign up
            </button>
          </div>

          <div className="relative max-w-4xl mx-auto mb-16">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-gray-900/50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-left text-sm font-mono">
                      <div className="text-blue-400">resource "aws_instance" "web" {'{'}</div>
                      <div className="text-green-400 ml-4">ami = "ami-0c55b159cbfafe1d0"</div>
                      <div className="text-green-400 ml-4">instance_type = "t2.micro"</div>
                      <div className="text-blue-400">{'}'}</div>
                    </div>
                  </div>
                  <div className="bg-gray-900/50 p-4 rounded-lg">
                    <div className="text-left text-sm font-mono">
                      <div className="text-purple-400">apiVersion: apps/v1</div>
                      <div className="text-purple-400">kind: Deployment</div>
                      <div className="text-green-400">metadata:</div>
                      <div className="text-green-400 ml-4">name: web-app</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-6">
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      AWS
                    </div>
                    <div className="w-8 h-0.5 bg-cyan-400 mx-4"></div>
                    <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      Azure
                    </div>
                    <div className="w-8 h-0.5 bg-cyan-400 mx-4"></div>
                    <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      GCP
                    </div>
                    <div className="w-8 h-0.5 bg-cyan-400 mx-4"></div>
                    <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-2xl font-semibold mb-4">Declarative Configuration</h3>
              <p className="text-slate-300">Define your infrastructure using simple, human-readable configuration files that version with your code.</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-2xl font-semibold mb-4">GitOps Workflows</h3>
              <p className="text-slate-300">Automated deployment pipelines that sync your infrastructure state with your Git repository changes.</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-semibold mb-4">Resource Optimization</h3>
              <p className="text-slate-300">Intelligent cost analysis and performance recommendations to optimize your cloud spending.</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-gray-800 mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl font-bold text-cyan-400">&lt;/&gt;</span>
                <span className="text-xl font-bold">Instanti8.dev</span>
              </div>
              <p className="text-gray-400 mb-4">
                Advanced multi-cloud deployment platform delivering intelligent 
                infrastructure management through interactive and visually engaging interfaces.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">📧</a>
                <a href="#" className="text-gray-400 hover:text-white">💬</a>
                <a href="#" className="text-gray-400 hover:text-white">🔗</a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Platform Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li>✅ Real-time Analytics</li>
                <li>☁️ Multi-Cloud Integration</li>
                <li>📋 3D Visualization</li>
                <li>🤖 AI-Powered Assistance</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Supported Providers</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Amazon Web Services</li>
                <li>Microsoft Azure</li>
                <li>Google Cloud Platform</li>
                <li>Alibaba Cloud</li>
                <li>IBM Cloud</li>
                <li>Oracle Cloud</li>
                <li>DigitalOcean</li>
                <li>Linode</li>
                <li>Huawei Cloud</li>
                <li>Tencent Cloud</li>
                <li>Netlify</li>
              </ul>
            </div>
            <div className="text-right">
              <p className="text-gray-400 mb-2">© 2025 Instanti8.dev. All rights reserved.</p>
              <p className="text-gray-400 mb-4">Built with React, TypeScript & AI • 🔴 Live Platform</p>
              <div className="text-sm text-gray-500">
                <p>Powered by</p>
                <p>React + TypeScript • Node.js + Express • PostgreSQL + Drizzle ORM • Tailwind CSS • Groq AI • WebSocket Real-time</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
