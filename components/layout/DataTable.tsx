'use client'

import {Table,TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table"
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { PaginationTable } from "./PaginationTable";

interface User{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    age: number;
}

interface UsersResponse {
    users: User[];
}
const getUsers = async() : Promise<UsersResponse> => {
    const res = await fetch('https://dummyjson.com/users?limit=30')
    return res.json();
}


export function DataTable(){
    const [page, setPage] = useState(1);
    const limit = 10;

    const {data, isFetching, error} = useQuery({
        queryKey: ['users'],
        queryFn: getUsers,
    })

    if (error) return <p>Error loading data</p>;
    const totalPages = Math.ceil((data?.users?.length ?? 0) / limit)
    const start = (page - 1) * limit
    const end = start + limit
    const paginatedUsers = data?.users?.slice(start, end) ?? []
    return(
        <div className="m-5">
        {isFetching ? (
            <div className="text-center">Loading...</div>
        ) : (
            <Table>
            <TableCaption></TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[100px]">First Name</TableHead>
                <TableHead>Last Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="text-right">Age</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {paginatedUsers.map((user) => (
                <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.firstName}</TableCell>
                    <TableCell>{user.lastName}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell className="text-right">{user.age}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        )}
        <PaginationTable page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
    )
}