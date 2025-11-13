import { notFound } from "next/navigation";
import { db } from "@/db";

interface SnippetShowPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
  // ⬇️ params কে await করতে হবে
  const { id } = await props.params;

  const snippet = await db.snippet.findUnique({
    where: { id: Number(id) },
  });

  if (!snippet) {
    notFound();
  }

  return <div>{snippet.title}</div>;
}

// import { notFound } from "next/navigation";
// import { db } from "@/db";

// interface SnippetShowPageProps {
//   params: {
//     id: string;
//   };
// }

// export default async function SnippetShowPage(props: SnippetShowPageProps) {
//   const snippet = await db.snippet.findFirst({
//     where: { id: parseInt(props.params.id) },
//   });

//   if (!snippet) {
//     return notFound();
//   }
//   //   console.log(props);
//   return <div>{snippet.title}</div>;
// }
