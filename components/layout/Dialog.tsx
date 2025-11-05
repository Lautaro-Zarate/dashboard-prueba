'use client'

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Pencil } from "lucide-react"
import { useForm } from "react-hook-form";
import { userSchema } from "@/schema/addUserSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react"

export function AddUser(){    
    const [open, setOpen] = useState(false);

    const {register, handleSubmit, reset, formState: { errors }} = useForm({
        resolver: zodResolver(userSchema)
    });

    const onSubmit = (data: any) => {
        console.log(data);
        reset();
        setOpen(false)
    }


    return(
        <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                <Button variant="primary"><Pencil/>Add User</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <DialogHeader>
                            <DialogTitle>Add User</DialogTitle>
                            <DialogDescription> Click save when your user are done.</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 m-5">
                            <Input label='FirstName' {...register('firstname')}/>
                            {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname.message}</p>}
                            <Input label='LastName' {...register('lastname')}/>
                            {errors.lastname && <p className="text-red-500 text-sm">{errors.lastname.message}</p>}
                            <Input label='email' {...register('email')}/>
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                            <Input label='age' {...register('age')}/>
                            {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
                        </div>
                        <DialogFooter>
                            <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button type="submit" variant={'primary'}>Save changes</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
    </Dialog>
    )
}