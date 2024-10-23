import { Endereco } from "./Endereco";

export class MedicoConsulta {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  crm: string;
  especialidade: string;
  endereco: Endereco;
  ativo: boolean;
}
