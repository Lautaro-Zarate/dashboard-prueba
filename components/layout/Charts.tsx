'use client'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

interface ChartsData{
    date: string;
    visitors: number;
}

const dataChart: ChartsData[] = [
    {
        date: 'July 10',
        visitors: 5,
    },
    {
        date: 'July 11',
        visitors: 15,
    },
    {
        date: 'July 12',
        visitors: 30,
    },
    {
        date: 'July 13',
        visitors: 25,
    },
    {
        date: 'July 14',
        visitors: 32,
    },
]

export function Charts() {
    return(
        <div className="w-full h-[300] p-2">
            <ResponsiveContainer width={'100%'} height={'100%'}>
                <AreaChart data={dataChart}>
                    <defs>
                        <linearGradient id="colorVisitors" x1={0} y1={0} x2={0} y2={1}>
                            <stop offset={'5%'} stopColor="#dfc005" stopOpacity={0.3}></stop>
                            <stop offset={'50%'} stopColor="#dfc100" stopOpacity={0.3}></stop>
                            <stop offset={'95%'} stopColor="#dfc205" stopOpacity={0.5}></stop>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey={'date'}/>
                    <YAxis/>
                    <Tooltip/>
                    <Area type='monotone' dataKey='visitors' stroke="#000" fillOpacity={1} fill="url(#colorVisitors)"/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
} 