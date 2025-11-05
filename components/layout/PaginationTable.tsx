import { Pagination, PaginationContent, PaginationItem,PaginationLink, PaginationNext,PaginationPrevious } from "@/components/ui/pagination"

interface PaginationTableProps {
    page: number
    totalPages: number
    onPageChange: (page: number) => void
}


export function PaginationTable({page, totalPages, onPageChange} : PaginationTableProps){
    return(
        <div className="m-3">
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                    <PaginationPrevious onClick={() => onPageChange(page - 1)}/>
                    </PaginationItem>
                     {/* Números de página dinámicos */}
          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1
            return (
              <PaginationItem key={pageNumber}>
                <PaginationLink
                  onClick={() => onPageChange(pageNumber)}
                  className={pageNumber === page ? "bg-primary text-white rounded-md" : ""}
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            )
          })}
              <PaginationItem>
                <PaginationNext onClick={() => onPageChange(page + 1)}/>
              </PaginationItem>
              </PaginationContent>
            </Pagination>
        </div>
    )
}