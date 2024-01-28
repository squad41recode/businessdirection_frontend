// pages/mentores.js

import Link from "next/link";
import style from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { MentorAtributtes } from "@/apiCalls/mentor";
import { apiGet } from "@/utils/apiCalls";
import ListSection from "@/components/dashboard/ListSection";

const Mentores = ( {mentores} ) => {
  return (
    <ListSection
      title="Mentores"
      endpoint="mentores"
      data={mentores}
      columns={MentorAtributtes}
      entityName={"Mentor"}
    />
  );
};

export async function getStaticProps() {
  const mentores = await apiGet("mentores");
  return {
    props: {
      mentores,
    }
  };
}

export default Mentores;
