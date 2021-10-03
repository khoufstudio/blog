import React from 'react'
import Badge from 'react-bootstrap/Badge'

export default function CategoryBadge({tags}) {
  if (tags && tags.length > 0) {
    return (
      <div>
        {tags.map((value, index) => {
          return <Badge pill variant="secondary" className="mr-2">{value}</Badge>
        })}
      </div>
    )
  } else {
    return (
      <div>
        <Badge pill variant="secondary">Uncategorized</Badge>
      </div>
    )
  }
}
