export interface ViacepAddress {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  estado: string
}

export async function getAddress(cep: string) {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .catch(() => null)

  return response as ViacepAddress
}
