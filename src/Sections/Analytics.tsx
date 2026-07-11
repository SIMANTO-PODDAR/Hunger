"use client"
import React from 'react';
import { Pie, PieChart, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data01 = [
    { name: "Pizza", value: 420 },
    { name: "Burger", value: 310 },
    { name: "Fried Chicken", value: 270 },
    { name: "Others", value: 180 },
];

const data02 = [
    { name: "Pepperoni Pizza", value: 170 },
    { name: "Margherita Pizza", value: 140 },
    { name: "BBQ Chicken Pizza", value: 110 },

    { name: "Regular Burger", value: 130 },
    { name: "Chicken Burger", value: 100 },
    { name: "Cheese Burger", value: 80 },

    { name: "Chicken Wings", value: 100 },
    { name: "Fried Chicken Bucket", value: 90 },
    { name: "Chicken Strips", value: 80 },

    { name: "French Fries", value: 80 },
    { name: "Cold Drinks", value: 60 },
];


const outerColors = [
    '#22C55E',
    '#16A34A',
    '#4ADE80',
    '#F97316',
];

const innerColors = [
    '#166534',
    '#15803D',
    '#16A34A',
    '#22C55E',
    '#4ADE80',
    '#86EFAC',
    '#BBF7D0',
    '#F97316',
    '#FB923C',
    '#FDBA74',
    '#FED7AA',
];


const CustomLegend: React.FC = () => {
    const outerLegend = data01.map((item, index) => ({
        ...item,
        color: outerColors[index],
    }));

    return (
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6">
            {outerLegend.map((entry) => (
                <div key={entry.name} className="flex items-center gap-2">
                    <span
                        className="w-3 h-3 rounded-full shrink-0"
                        style={{ backgroundColor: entry.color }}
                    />
                    <span className="text-sm text-[#64748B] font-medium">
                        {entry.name}
                    </span>
                </div>
            ))}
        </div>
    );
};

// Custom Tooltip Component
const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white rounded-xl shadow-lg border border-[#E5E7EB] px-4 py-3">
                <p className="text-sm font-semibold text-[#0F172A] mb-1">
                    {payload[0].name}
                </p>
                <p className="text-sm text-[#64748B]">
                    Sales: <span className="font-bold text-[#0F172A]">{payload[0].value.toLocaleString()}</span>
                </p>
                {payload[1] && (
                    <p className="text-xs text-[#94A3B8] mt-0.5">
                        Category: {payload[1].name}
                    </p>
                )}
            </div>
        );
    }
    return null;
};

export default function Analytics() {
    return (
        <div id='Analytics' className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6 sm:p-8">
            <div className="text-center mb-5">
                <span className="text-sm font-semibold uppercase tracking-wider text-[#22C55E]">
                    Analytics
                </span>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Trending Meals
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-base leading-relaxed text-gray-500">
                    Discover the most popular menu items based on total sales and customer demand.
                </p>
            </div>

            {/* Chart Container */}
            <div className="w-full max-w-lg mx-auto">
                <ResponsiveContainer width="100%" height={400}>
                    <PieChart>
                        <Pie
                            data={data01}
                            dataKey="value"
                            cx="50%"
                            cy="50%"
                            outerRadius="50%"
                            fill="#8884d8"
                            isAnimationActive={true}
                            animationDuration={800}
                            animationEasing="ease-out"
                        >
                            {data01.map((entry, index) => (
                                <Cell
                                    key={`cell-outer-${index}`}
                                    fill={outerColors[index % outerColors.length]}
                                    stroke="white"
                                    strokeWidth={2}
                                />
                            ))}
                        </Pie>
                        <Pie
                            data={data02}
                            dataKey="value"
                            cx="50%"
                            cy="50%"
                            innerRadius="62%"
                            outerRadius="78%"
                            fill="#82ca9d"
                            label={false}
                            isAnimationActive={true}
                            animationDuration={800}
                            animationEasing="ease-out"
                        >
                            {data02.map((entry, index) => (
                                <Cell
                                    key={`cell-inner-${index}`}
                                    fill={innerColors[index % innerColors.length]}
                                    stroke="white"
                                    strokeWidth={1.5}
                                />
                            ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/* Legend */}
            <CustomLegend />
        </div>
    );
}