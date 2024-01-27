import React from "react";
import ListSection from "@/components/dashboard/ListSection";
import { apiGet } from "@/utils/apiCalls";
import { ConteudoOnlineAtributtes } from "@/apiCalls/conteudos-online";
import { MentoriaAdquiridaAtributtes } from "@/apiCalls/mentorias-adquiridas";

const MentoriasAdquiridasPage = ({ mentoriasAdquiridas }) => {
  return (
    <ListSection
      title="Mentorias adquiridas"
      endpoint="mentorias-adquiridas"
      data={mentoriasAdquiridas}
      columns={MentoriaAdquiridaAtributtes}
      entityName={"Mentoria adquirida"}
    />
  );
};

export async function getStaticProps() {
  const mentoriasAdquiridas = await apiGet("mentorias-adquiridas");

  return {
    props: {
      mentoriasAdquiridas,
    },
  };
}

export default MentoriasAdquiridasPage;
