import { Navbar } from "@/components/layout/Navbar";
import { CardsContainer } from "@/components/layout/CardsContainer";
import { ChartsContainer } from "@/components/layout/ChartsContainer";
import { Button } from "@/components/ui/button";
import { Columns, Pencil } from "lucide-react";
import { DataTable } from "@/components/layout/DataTable";
import { AddUser } from "@/components/layout/Dialog";
export default function HomePage() {
  return (
    <div>
      <Navbar/>
      <CardsContainer/>
      <ChartsContainer/>
      <div className="flex justify-end gap-4 mr-5">
        <Button variant={'outline'}><Columns/>Customize Colums</Button>
        <AddUser/>
      </div>
      <DataTable/>
    </div>
  )
}
