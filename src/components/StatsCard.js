import React from "react";
import { FaUsers, FaDownload } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const StatsCard = () => {
    const data = [
        { name: "Page A", uv: 4000, pv: 2400 },
        { name: "Page B", uv: 3000, pv: 1398 },
        { name: "Page C", uv: 2000, pv: 9800 },
        { name: "Page D", uv: 2780, pv: 3908 },
    ];

    return (
        <div className="stats-card">
            <div>
                <h3>Total active users</h3>
                <h1>world</h1>
                <p>18,765</p>
                <p className="increase">+2.6% last 7 days</p>
            </div>
            <div className="chart">
                <ResponsiveContainer width="100%" height={100}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default StatsCard;