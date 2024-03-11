
export function Step1() {
  return [
    { name: 'Solicitud de compra', description: 'Ingrese los datos personales', status: 'current', id: "1" },
    { name: 'Pago de firma', description: 'Pago en línea del producto', status: 'upcoming', id: "2" },
    { name: 'Validar identidad', description: 'Validación de la identidad', status: 'upcoming', id: "3" },
    { name: 'Generar certificado', description: 'Generación del certificado', status: 'upcoming', id: "4" }
  ]
}

export function Step2() {
  return [
    { name: 'Solicitud de compra', description: 'Ingrese los datos personales', status: 'complete', id: "1" },
    { name: 'Pago de firma', description: 'Pago en línea del producto', status: 'current', id: "2" },
    { name: 'Validar identidad', description: 'Validación de la identidad', status: 'upcoming', id: "3" },
    { name: 'Generar certificado', description: 'Generación del certificado', status: 'upcoming', id: "4" }
  ]
}

export function Step3() {
  return [
    { name: 'Solicitud de compra', description: 'Ingrese los datos personales', status: 'complete', id: "1" },
    { name: 'Pago de firma', description: 'Pago en línea del producto', status: 'complete', id: "2" },
    { name: 'Validar identidad', description: 'Validación de la identidad', status: 'current', id: "3" },
    { name: 'Generar certificado', description: 'Generación del certificado', status: 'upcoming', id: "4" }
  ]
}

export function Step4() {
  return [
    { name: 'Solicitud de compra', description: 'Ingrese los datos personales', status: 'complete', id: "1" },
    { name: 'Pago de firma', description: 'Pago en línea del producto', status: 'complete', id: "2" },
    { name: 'Validar identidad', description: 'Validación de la identidad', status: 'complete', id: "3" },
    { name: 'Generar certificado', description: 'Generación del certificado', status: 'current', id: "4" }
  ]
}
