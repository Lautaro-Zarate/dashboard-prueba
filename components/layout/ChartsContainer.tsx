import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Charts } from "./Charts"

export function ChartsContainer(){
    return(
        <Card className="m-5">
            <CardHeader className="flex items-center justify-between">
                <CardTitle>Total Visitors</CardTitle>
                <div className="flex gap-2">
                <button className="text-sm border rounded px-2 py-1">Last 3 months</button>
                <button className="text-sm border rounded px-2 py-1">Last 30 days</button>
                <button className="text-sm border rounded px-2 py-1">Last 7 days</button>
                </div>
            </CardHeader>
            <CardContent>
                <Charts />
            </CardContent>
            </Card>   
    )
}