export default function Projects() {
  const projects = [
    { name: "Project A", desc: "Description of project A" },
    { name: "Project B", desc: "Description of project B" }
  ];

  return (
    <section style={{ padding: "50px" }}>
      <h2>My Projects</h2>

      {projects.map((p, i) => (
        <div key={i}>
          <h3>{p.name}</h3>
          <p>{p.desc}</p>
        </div>
      ))}
    </section>
  );
}
