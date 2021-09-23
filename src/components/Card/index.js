import React from "react"
import { Card } from "react-bootstrap"
import { Link } from 'gatsby'
import DefaultCover from '../../assets/images/default_cover.png'

export default function CardBootstrap({ title, style, slug, desc, thumbnail }) {
	let imageThumbnail = DefaultCover 
	if (thumbnail != null) {
		imageThumbnail = thumbnail.publicURL
	}
	
	return (
    <Card style={{ width: '19rem', ...style }}>
      <Card.Img variant="top" src={imageThumbnail} />
      <Card.Body>
        <Card.Title className="font-weight-bold">
					<Link to={slug}>{ title }</Link>
				</Card.Title>
        <Card.Text>{ desc }</Card.Text>
      </Card.Body>
    </Card>
	)
}
