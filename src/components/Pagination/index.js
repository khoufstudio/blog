import React from "react"
import { Pagination } from "react-bootstrap"

export default function PaginationComponent({totalPages, activePage}) {
  return (
    <Pagination>
      <Pagination.First 
        href="/" 
        disabled={ (activePage === 1) ? true : false }
      />
      <Pagination.Prev 
        href={ ((activePage === 2) ? '/' : '/page/' + (parseInt(activePage) - 1)) } 
        disabled={ (activePage === 1) ? true : false }
      />
      {
        Array.from({ length: totalPages }).map((_, index) => ( 
          <Pagination.Item key={++index} href={(index > 1) ? '/page/' + index.toString() : '/' } active={index === activePage}>{index}</Pagination.Item>
        ))
      }
      <Pagination.Next 
        href={ "/page/" +  (parseInt(activePage) + 1) } 
        disabled={ (activePage === totalPages ) ? true : false }
      />
      <Pagination.Last 
        href={ "/page/" + totalPages.toString() } 
        disabled={ (activePage === totalPages ) ? true : false }
      />
    </Pagination>
  )
}
