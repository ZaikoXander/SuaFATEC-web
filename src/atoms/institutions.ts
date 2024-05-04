import { atom } from 'jotai'

interface Institution {
  id: number
  name: string
  address: string
  cityId: number
  latitudeCoordinate: number
  longitudeCoordinate: number
}

const institutionsAtom = atom<Institution[]>([
  {
    id: 1,
    name: 'Fatec Baixada Santista - Rubens Lara',
    address: 'Av. Senador Feijó, 350 - Vila Matias, Santos - SP, 11015-502',
    cityId: 1,
    latitudeCoordinate: -23.9426566,
    longitudeCoordinate: -46.3263839,
  },
  {
    id: 2,
    name: 'Fatec São Paulo - Arthur de Azevedo',
    address: 'Av. Tiradentes, 615 - Bom Retiro, São Paulo - SP, 01102-000',
    cityId: 2,
    latitudeCoordinate: -23.525457,
    longitudeCoordinate: -46.633618,
  },
  {
    id: 3,
    name: 'Fatec Mogi das Cruzes - Presidente Dutra',
    address:
      'Av. Presidente Getúlio Vargas, 200 - Vila Nova Mogilar, Mogi das Cruzes - SP, 08773-260',
    cityId: 3,
    latitudeCoordinate: -23.514207,
    longitudeCoordinate: -46.179299,
  },
  {
    id: 4,
    name: 'Fatec São José dos Campos - Prof. Jessen Vidal',
    address:
      'Av. Dr. Sebastião Henrique da Cunha Pontes, 471 - Jardim Motorama, São José dos Campos - SP, 12245-000',
    cityId: 4,
    latitudeCoordinate: -23.201013,
    longitudeCoordinate: -45.897789,
  },
])

const selectedInstitutionAtom = atom<Institution | undefined>(undefined)

export { institutionsAtom, selectedInstitutionAtom }
