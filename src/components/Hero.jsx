import "../styles/global.css";

function Hero() {
  return (
    <section className="hero-section autoBlur">
      <div className="hero-vid">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        >
          <source
            src="/videos/hero-1.mp4"
            type="video/mp4"
          />
        </video>

        <div className="hero-info">
          <h1>SUDHAKAR SUTAR</h1>

          <p>
            Software Engineer • Full Stack Developer • Blockchain
            Developer
          </p>

          <button>Explore My Projects</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;