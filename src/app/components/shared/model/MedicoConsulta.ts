export class MedicoConsulta {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  crm: string;
  especialidade: string;
  especialidadeFormatada: string;
  endereco: {
    logradouro: string;
    bairro: string;
    cep: string;
    numero: string;
    complemento: string;
    cidade: string;
    uf: string;
  };
  ativo: boolean;
}
