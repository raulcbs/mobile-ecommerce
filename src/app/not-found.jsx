import { useRouteError } from "react-router"

export default function NotFound() {
  const error = useRouteError()
  console.error(error)

  return (
    <div>
      <h2>Error 404: Página no encontrada</h2>
      <p>Lo sentimos, no se encontró la página que buscas.</p>
    </div>
  )
}
