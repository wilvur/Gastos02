export const currencyFormatter = new Intl.NumberFormat('es-AR', {
    currency: "ARS",
    style: "currency",
    minimumFractionDigits: 0,
  })

export const dateFormatter = new Intl.DateTimeFormat('es-AR');