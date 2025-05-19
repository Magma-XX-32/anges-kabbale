import { useState, useEffect } from "react";

export default function AngeExplorer() {
  const [anges, setAnges] = useState([]);
  const [search, setSearch] = useState("");
  const [sphère, setSphère] = useState("");
  const [vertu, setVertu] = useState("");
  const [vertus, setVertus] = useState([]);

  useEffect(() => {
    fetch("/anges_01_72_complet.json")
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

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
        Explorer les 72 Anges
      </h1>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginTop: "1rem",
          flexWrap: "wrap",
        }}
      >
        <input
          placeholder="Rechercher un ange..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "0.5rem", flex: 1 }}
        />
        <select onChange={(e) => setSphère(e.target.value)} value={sphère}>
          <option value="">Toutes les sphères</option>
          {[...new Set(anges.map((a) => a.sphère))].map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <select onChange={(e) => setVertu(e.target.value)} value={vertu}>
          <option value="">Toutes les vertus</option>
          {vertus.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1rem",
          marginTop: "2rem",
        }}
      >
        {filtered.map((ange) => (
          <div
            key={ange.numéro}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
            }}
          >
            <h2 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              {ange.nom}
            </h2>
            <p style={{ fontStyle: "italic" }}>{ange.signification}</p>
            <ul
              style={{
                marginTop: "1rem",
                fontSize: "0.9rem",
                lineHeight: "1.4",
              }}
            >
              <li>
                <strong>Hiérarchie :</strong> {ange.hiérarchie}
              </li>
              <li>
                <strong>Sphère :</strong> {ange.sphère}
              </li>
              <li>
                <strong>Élément :</strong> {ange.élément}
              </li>
              <li>
                <strong>Dates :</strong> {ange.dates_influence}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}