interface Order {
  nome: string;
  descricao: string;
  qtde: number;
  vlr_unit: number;
  parcela_data: Date;
  vlr: number;
}

export default Order;
