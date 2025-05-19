import React, { useState, useEffect } from "react";

export default function AngeExplorer() {
  const [anges, setAnges] = useState([]);
  const [search, setSearch] = useState("");
  const [sphère, setSphère] = useState("");
  const [vertu, setVertu] = useState("");
  const [vertus, setVertus] = useState([]);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    fetch("/anges_01_72_complet_kabaleb_dates_non_inclusives.json")
      .then((res) => res.json())
      .then((data) => {
        setAnges(data);
        const allVertus = new Set();
        data.forEach((ange) => ange.vertus.forEach((v) => allVertus.add(v)));
        setVertus(Array.from(allVertus));
      });
  }, []);

  const filtered = anges.filter((ange) => {
    return (
      (!search || ange.nom.toLowerCase().includes(search.toLowerCase())) &&
      (!sphère || ange.sphère === sphère) &&
      (!vertu || ange.vertus.includes(vertu))
    );
  });

  const toggleExpanded = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">🌟 Explorateur des 72 Anges</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
        <input
          type="text"
          placeholder="Rechercher un ange..."
          className="p-2 border rounded-md shadow w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="p-2 border rounded-md shadow"
          value={sphère}
          onChange={(e) => setSphère(e.target.value)}
        >
          <option value="">Toutes les sphères</option>
          {[...new Set(anges.map((a) => a.sphère))].map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <select
          className="p-2 border rounded-md shadow"
          value={vertu}
          onChange={(e) => setVertu(e.target.value)}
        >
          <option value="">Toutes les vertus</option>
          {vertus.map((v) => (
            <option key={v} value={v}>{v}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((ange, index) => (
          <div
            key={ange.numéro}
            className="bg-white p-4 rounded-xl shadow-md border hover:shadow-xl transition"
          >
            <h2
              className="text-xl font-semibold text-indigo-700 cursor-pointer"
              onClick={() => toggleExpanded(index)}
            >
              {ange.nom}
            </h2>
            <p className="italic text-sm text-gray-600">{ange.signification}</p>
            <ul className="mt-3 text-sm text-gray-700 space-y-1">
              <li><strong>Numéro :</strong> {ange.numéro}</li>
              <li><strong>Hiérarchie :</strong> {ange.hiérarchie}</li>
              <li><strong>Sphère :</strong> {ange.sphère}</li>
              <li><strong>Élément :</strong> {ange.élément}</li>
              <li><strong>Dates :</strong> {ange.dates_influence}</li>
            </ul>

            {expanded === index && (
              <div className="transition-all duration-300 ease-in-out mt-2 text-sm text-gray-700 space-y-1">
                <ul>
                  <li><strong>Durée (jours) :</strong> {ange.duree_jours}</li>
                  <li><strong>Nom hébreu :</strong> <span className="block text-right font-hebrew text-2xl">{ange.nom_hebreu_consonnes}</span></li>
                  <li><strong>Hébreu vocalisé :</strong> <span className="block text-right font-hebrew text-lg">{ange.nom_hebreu_avec_voyelles}</span></li>
                  <li><strong>Verset :</strong> {ange.verset}</li>
                  {ange.sceau && (
                    <li><strong>Sceau :</strong> <img src={ange.sceau} alt={`Sceau de ${ange.nom}`} className="w-16 mt-1" /></li>
                  )}
                  <li><strong>Permutation Aboulafia :</strong> {ange.permutation_aboulafia}</li>
                  <li><strong>Itone Ifá :</strong> {ange.itone_ifa}</li>
                </ul>
              </div>
            )}

            <button
              onClick={() => toggleExpanded(index)}
              className="mt-3 text-sm text-indigo-600 hover:underline flex items-center gap-1"
            >
              {expanded === index ? "🔼 Réduire" : "🔽 Voir plus"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
