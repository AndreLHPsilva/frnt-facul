'use client'

import AnalyticsTable from "@/components/table/AnalyticsTable";

export default function MyAnalisys() {


  return (
    <main className="w-full min-h-[85vh] flex justify-center items-center flex-col gap-5 text-cyan-900">
      <section className="container">
        <h1 className="text-xl">Minhas Análises</h1>
        <AnalyticsTable />
      </section>
    </main>
  );
}
