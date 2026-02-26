import React from 'react'
import {
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  FacebookIcon,
  LinkedinIcon,
  WhatsappIcon,
  TwitterIcon,
} from 'react-share'

const url = 'https://github.com/Ithaisa1/invisible-roles' // Cambia por la URL real que quieres compartir
const title = 'Profesiones Invisibles — Documental Interactivo'

export default function ShareButtons() {
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <FacebookShareButton url={url} title={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <LinkedinShareButton url={url} title={title}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

      <WhatsappShareButton url={url} title={title} separator=" - ">
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>

      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </div>
  )
}