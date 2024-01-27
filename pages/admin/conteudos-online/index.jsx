import React from "react";
import ListSection from "@/components/dashboard/ListSection";
import { apiGet } from "@/utils/apiCalls";
import { ConteudoOnlineAtributtes } from "@/apiCalls/conteudos-online";

const ConteudosOnlinePage = ({ conteudosOnline }) => {
  return (
    <ListSection
      title="Conteúdos online"
      endpoint="conteudos-online"
      data={conteudosOnline}
      columns={ConteudoOnlineAtributtes}
      entityName={"Conteúdo online"}
    />
  );
};

export async function getStaticProps() {
  const conteudosOnline = await apiGet("conteudos-online");

  return {
    props: {
      conteudosOnline,
    },
  };
}

export default ConteudosOnlinePage;
