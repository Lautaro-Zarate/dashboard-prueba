import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

interface CardProps{
    title: string;
    price: string;
    percentage: string;
    description: string;
    information: string;
}

export const cardsData: CardProps[] = [
    {
    title: "Total Revenue",
    price: "$12,340",
    percentage: "+12%",
    description: "Trending up this month",
    information: "Visitors for the last 6 months",
    },
    {
    title: "New Costumers",
    price: "1,235",
    percentage: "+5%",
    description: "Week over week",
    information: "Down 20% this period",
    },
    {
    title: "Active Accounts",
    price: "45,000",
    percentage: "-2%",
    description: "Strong user retention",
    information: "Engagement exceed targets.",
    },
    {
    title: "Growth Rate",
    price: "4.5%",
    percentage: "+3%",
    description: "Steady performance",
    information: "Meets growth projections",
    },
];


export function Cards(props: CardProps){

    const {title, price, percentage, description, information} = props;

    return(
        <div>
            <Card className="flex justify-center max-w-50 h-60 md:min-w-70 md:h-50">
                <CardHeader className="flex flex-col justify-between">
                    <div className="flex items-center gap-2">
                        <CardTitle className="text-sm">{title}</CardTitle>
                        <Badge variant={'secondary'}>{percentage}</Badge>
                    </div>
                    <div>
                        <CardDescription className="text-3xl font-bold text-yellow-600">{price}</CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <CardDescription className="font-bold">{description}</CardDescription>
                    <CardDescription className="font-extralight">{information}</CardDescription>
                </CardContent>
            </Card>
        </div>
    )
}