
import React from 'react';
import ListSection from '@/components/dashboard/ListSection';
import { apiGet } from '@/utils/apiCalls';
import { EmpreendedorAtributtes } from '@/apiCalls/empreendedor';

const EmpreendedoresPage = ({ empreendedores }) => {

  return (
    <ListSection
      title="Empreendedores"
      endpoint="empreendedores"
      data={empreendedores}
      columns={EmpreendedorAtributtes}
      entityName={"Empreendedor"}
    />
  );
};

export async function getStaticProps() {
  // chama a sua função de API para obter dados
  const empreendedores = await apiGet("empreendedores");
  return {
    props: {
      empreendedores,
    }
  };
}

export default EmpreendedoresPage;
