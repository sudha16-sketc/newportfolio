function ProjectCard({
  title,
  description,
  video,
  buttonText = "View Project",
}) {
  return (
    <div className="card autoDisplay">
      <h1>{title}</h1>

      <p>{description}</p>

      <video
        src={video}
        autoPlay
        muted
        loop
        playsInline
      ></video>

      <button>{buttonText}</button>
    </div>
  );
}

export default ProjectCard;