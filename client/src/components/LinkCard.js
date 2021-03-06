import React from "react"


const LinkCard = ({link}) => {
  return (
    <>
      <h2>Ссылка</h2>

      <p>
        Ваша ссылка:&nbsp;
        <a href={link.to} target="_blank" rel="noopener noreferrer">
          {link.to}
        </a>
      </p>

      <p>
        Откуда:&nbsp;
        <a href={link.from} target="_blank" rel="noopener noreferrer">
          {link.from}
        </a>
      </p>

      <p>
        Количество кликов по ссылке:&nbsp;
        <strong>
          {link.clicks}
        </strong>
      </p>

      <p>
        Дата создания:&nbsp;
        <strong>
          {new Date(link.date).toLocaleDateString()}
        </strong>
      </p>
    </>
  )
}


export default LinkCard
