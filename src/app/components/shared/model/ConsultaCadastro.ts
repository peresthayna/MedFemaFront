import { MedicoConsulta } from "./MedicoConsulta";
import { PacienteConsulta } from "./PacienteConsulta";

export class ConsultaCadastro {
  paciente: PacienteConsulta;
  medico: MedicoConsulta;
  dataHora: Date;
  fimConsulta: Date;
  ativo: boolean;
}
