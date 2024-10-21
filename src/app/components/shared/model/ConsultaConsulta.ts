import { MedicoConsulta } from "./MedicoConsulta";
import { PacienteConsulta } from "./PacienteConsulta";

export class ConsultaConsulta {
  id: number;
  paciente: PacienteConsulta;
  medico: MedicoConsulta;
  dataHora: string;
  fimConsulta: string;
  motivoCancelamento: string;
  ativo: boolean;
  dataFormatada: string;
}
