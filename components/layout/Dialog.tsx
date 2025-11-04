import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Pencil } from "lucide-react"

export function AddUser(){
    return(
        <Dialog>
            <form>
                <DialogTrigger asChild>
                <Button variant="primary"><Pencil/>Add User</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add User</DialogTitle>
                    <DialogDescription> Click save when your user are done.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                    <Input id="user" name="user" label='User'/>
                    <Input id="status" name="status" label='Status'/>
                    <Input id="method" name="method" label='Method'/>
                    <Input id="amount" name="amount" label='Amount'/>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit" variant={'primary'}>Save changes</Button>
                </DialogFooter>
                </DialogContent>
            </form>
    </Dialog>
    )
}