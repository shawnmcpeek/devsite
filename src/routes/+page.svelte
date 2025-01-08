<script>
  import { dev } from '$app/environment';
</script>

<main>
  <header class="hero">
    <h1>Shawn McPeek</h1>
    <h2>Web Developer</h2>
  </header>

  <section class="about">
    <p>
      Welcome to the home of Shawn McPeek, developer. I'm a web developer with experience in:
    </p>
    <ul>
      <li>JavaScript</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>Python</li>
      <li>React</li>
      <li>Svelte</li>
    </ul>
  </section>

  <section class="education">
    <h2>Education & Certifications</h2>
    <ul>
      <li>Zero to Mastery: Complete Python Developer 2023/24</li>
      <li>Complete Web Developer 2023/24</li>
      <li>Python for Business Data Analytics & Intelligence</li>
      <li>Mimo: Introduction to Programming Using Python</li>
      <li>Coursera: Crash Course on Python</li>
    </ul>
  </section>
</main>

<style>
  main {
    padding: 1rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .hero {
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #1a1a1a;
    color: white;
    margin: -1rem -1rem 2rem -1rem;
  }

  h1 {
    font-size: 3rem;
    margin: 0;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    color: #888;
  }

  .about, .education {
    margin: 2rem 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    padding: 0.5rem 0;
  }
</style> 