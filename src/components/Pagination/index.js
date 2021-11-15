import React from "react"
import { Pagination } from "react-bootstrap"

export default function PaginationComponent({totalPages, activePage}) {
  return (
    <Pagination bg="dark">
      <Pagination.First 
        href="/blog" 
        disabled={ (activePage === 1) ? true : false }
      />
      <Pagination.Prev 
        href={ ((activePage === 2) ? '/blog' : '/blog/page/' + (parseInt(activePage) - 1)) } 
        disabled={ (activePage === 1) ? true : false }
      />
      {
        Array.from({ length: totalPages }).map((_, index) => ( 
          <Pagination.Item key={++index} href={(index > 1) ? '/blog/page/' + index.toString() : '/blog' } active={index === activePage}>{index}</Pagination.Item>
        ))
      }
      <Pagination.Next 
        href={ "/blog/page/" +  (parseInt(activePage) + 1) } 
        disabled={ (activePage === totalPages ) ? true : false }
      />
      <Pagination.Last 
        href={ "/blog/page/" + totalPages.toString() } 
        disabled={ (activePage === totalPages ) ? true : false }
      />
    </Pagination>
  )
}
