"use client"

import { Pie, PieChart } from "recharts"


import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { StatisticsPie } from "@/types/statistics"

export const description = "A donut chart"





interface ChartPieDonutProps {
    data: StatisticsPie[];
    config: ChartConfig;
}
export function ChartPieDonut({ data,config }: ChartPieDonutProps) {
    return (
        <ChartContainer
            config={config}
            className="mx-auto aspect-square max-h-[250px]"
        >
            <PieChart>
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                    data={data}
                    dataKey="count"
                    nameKey="status"
                    innerRadius={40}
                />
            </PieChart>
        </ChartContainer>
    )
}
