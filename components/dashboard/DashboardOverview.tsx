"use client";

import { TrendingUp, TrendingDown, DollarSign, Users, Activity, AlertCircle } from "lucide-react";

const stats = [
  {
    name: "Total Portfolio Value",
    value: "$2.4M",
    change: "+12.5%",
    changeType: "increase",
    icon: DollarSign,
  },
  {
    name: "Active Positions",
    value: "127",
    change: "+8",
    changeType: "increase",
    icon: Activity,
  },
  {
    name: "Risk Score",
    value: "7.2/10",
    change: "-0.3",
    changeType: "decrease",
    icon: AlertCircle,
  },
  {
    name: "Active Users",
    value: "24",
    change: "+4",
    changeType: "increase",
    icon: Users,
  },
];

const recentActivities = [
  { id: 1, action: "New market data imported", time: "2 minutes ago", type: "info" },
  { id: 2, action: "Risk alert triggered - AAPL", time: "15 minutes ago", type: "warning" },
  { id: 3, action: "Portfolio analysis completed", time: "1 hour ago", type: "success" },
  { id: 4, action: "ESG report generated", time: "2 hours ago", type: "success" },
  { id: 5, action: "New team member added", time: "3 hours ago", type: "info" },
];

const topHoldings = [
  { symbol: "AAPL", name: "Apple Inc.", value: "$245,000", allocation: "10.2%", change: "+2.4%" },
  { symbol: "MSFT", name: "Microsoft Corp.", value: "$198,000", allocation: "8.3%", change: "+1.8%" },
  { symbol: "GOOGL", name: "Alphabet Inc.", value: "$176,000", allocation: "7.3%", change: "+3.1%" },
  { symbol: "AMZN", name: "Amazon.com Inc.", value: "$154,000", allocation: "6.4%", change: "-0.5%" },
  { symbol: "TSLA", name: "Tesla Inc.", value: "$132,000", allocation: "5.5%", change: "+5.2%" },
];

export default function DashboardOverview() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your portfolio.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-primary-600" />
              </div>
              <div className={`flex items-center text-sm font-medium ${stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'}`}>
                {stat.changeType === 'increase' ? (
                  <TrendingUp className="w-4 h-4 mr-1" />
                ) : (
                  <TrendingDown className="w-4 h-4 mr-1" />
                )}
                {stat.change}
              </div>
            </div>
            <div className="text-2xl font-semibold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.name}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Portfolio Performance Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Portfolio Performance</h2>
            <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-600">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>Last year</option>
            </select>
          </div>
          
          {/* Simulated Chart */}
          <div className="h-64 flex items-end space-x-2">
            {[65, 72, 68, 85, 78, 92, 88, 95, 90, 98, 94, 100, 96, 102].map((height, i) => (
              <div key={i} className="flex-1 bg-gradient-to-t from-primary-600 to-primary-400 rounded-t hover:opacity-80 transition-opacity cursor-pointer" style={{ height: `${height}%` }}></div>
            ))}
          </div>
          
          <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
            <div>
              <div className="text-sm text-gray-600">Total Return</div>
              <div className="text-2xl font-semibold text-gray-900">+$284,500</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Percentage Gain</div>
              <div className="text-2xl font-semibold text-green-600">+13.4%</div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className={`w-2 h-2 mt-1.5 rounded-full ${
                  activity.type === 'success' ? 'bg-green-500' : 
                  activity.type === 'warning' ? 'bg-yellow-500' : 
                  'bg-blue-500'
                }`}></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Holdings Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Top Holdings</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Allocation</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {topHoldings.map((holding) => (
                <tr key={holding.symbol} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{holding.symbol}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{holding.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{holding.value}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{holding.allocation}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm font-medium ${holding.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {holding.change}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
