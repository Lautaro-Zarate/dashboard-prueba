import { Cards } from "@/components/layout/Cards";
import { cardsData } from "@/components/layout/Cards";

export function CardsContainer(){
    return(
        <section className="flex flex-col justify-center items-center gap-5 pt-5 pb-5 md:flex-row md:flex-wrap md:justify-center">
        {cardsData.map((card, index) => (
        <Cards 
        key={index}
        title={card.title}
        price={card.price}
        percentage={card.percentage}
        description={card.description}
        information={card.information}
        />
        ))}
        </section>
    )
}