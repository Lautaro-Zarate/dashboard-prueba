import { Pencil } from "lucide-react"
import { Button } from "../ui/button"
export function Navbar(){
    return(
        <nav className="flex flex-row flex-wrap justify-center items-center w-full border-b-2 border-b-gray-400 sm:justify-between">
            <h2 className="p-1 font-bold">Home</h2>
            <Button variant={'primary'} size={'sm'} className="m-2">
                <Pencil/>
                Create New
            </Button>
        </nav>
    )
}