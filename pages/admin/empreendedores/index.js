
import React from 'react';
import ListSection from '@/components/dashboard/ListSection';
import { getEmpreendedores } from '@/apiCalls/empreendedor';

const EmpreendedoresPage = ({ empreendedores }) => {
  return (
    <ListSection
      title="Lista de Empreendedores"
      linkHref="admin/empreendedores"
      linkText="Inserir Empreendedor"
      data={empreendedores}
      columns={["id", "nome", "email", "telefone"]}
    />
  );
};

export async function getStaticProps() {
  // chama a sua função de API para obter dados
  const empreendedores = await getEmpreendedores();

  return {
    props: {
      empreendedores,
    }
  };
}

export default EmpreendedoresPage;
