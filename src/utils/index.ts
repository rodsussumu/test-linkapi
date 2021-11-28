import Deal from '../interfaces/deal';

export default {
  transformXml(deal: Deal) {
    const xml = `
    <?xml version="1.0" encoding="UTF-8"?>
        <pedido>
        <cliente>
            <nome>${deal.person_name}</nome>
        </cliente>

        <itens>
            <item>
                <codigo>22</codigo>
                <descricao>Backend</descricao>
                <qtde>${deal.products_count}</qtde>
                <vlr_unit>${deal.value / deal.products_count}</vlr_unit>
        </item>
        </itens>
            
            <parcelas>
                <parcela>
                    <data>${deal.won_time}</data>
                    <vlr>${deal.value}</vlr>
                </parcela>
            </parcelas>
        </pedido>
    `;
    return xml;
  },

  xmlProduct() {
    const xml = `
      <?xml version="1.0" encoding="UTF-8"?>
        <produto>
            <codigo>22</codigo>
            <descricao>Caneta 001</descricao>
            <situacao>Ativo</situacao>
            <vlr_unit>50</vlr_unit>
        </produto>
    `;
    return xml;
  },
};
