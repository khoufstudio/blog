import React from "react"
import { Card } from "react-bootstrap"
import { Link } from 'gatsby'
import DefaultCover from '../../assets/images/default_cover.png'
import CategoryBadge from '../CategoryBadge'

export default function CardBootstrap({ title, style, slug, desc, thumbnail, tags, date }) {
	let imageThumbnail = DefaultCover 
	if (thumbnail != null) {
		imageThumbnail = thumbnail.publicURL
	}
	
	return (
    <Card style={{ width: '19rem', ...style }}>
      <Card.Img variant="top" src={imageThumbnail} />
      <Card.Body>
        <Card.Title className="font-weight-bold" style={{minHeight: '50px'}}>
					<Link to={slug}>{ title }</Link>
				</Card.Title>
        <div className="d-flex justify-content-between">
          <CategoryBadge tags={tags} />
          <p className="m-0 text-muted" style={{fontSize: '14px'}}>{date}</p>
        </div>
      </Card.Body>
    </Card>
	)
}
